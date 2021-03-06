/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Env from '../api/Env';
import * as CaretContainer from '../caret/CaretContainer';
import CaretPosition from '../caret/CaretPosition';
import * as CaretUtils from '../caret/CaretUtils';
import { HDirection, CaretWalker } from '../caret/CaretWalker';
import * as LineUtils from '../caret/LineUtils';
import * as LineWalker from '../caret/LineWalker';
import NodeType from '../dom/NodeType';
import * as CefUtils from './CefUtils';
import * as RangeNodes from '../selection/RangeNodes';
import ArrUtils from '../util/ArrUtils';
import { Range, Element } from '@ephox/dom-globals';
import { Fun, Arr } from '@ephox/katamari';
import InlineUtils from 'tinymce/core/keyboard/InlineUtils';

const isContentEditableFalse = NodeType.isContentEditableFalse;
const getSelectedNode = RangeNodes.getSelectedNode;
const isAfterContentEditableFalse = CaretUtils.isAfterContentEditableFalse;
const isBeforeContentEditableFalse = CaretUtils.isBeforeContentEditableFalse;

const moveToCeFalseHorizontally = (direction: HDirection, editor, getNextPosFn, range): Range => {
  const forwards = direction === HDirection.Forwards;
  const isBeforeContentEditableFalseFn = forwards ? isBeforeContentEditableFalse : isAfterContentEditableFalse;

  if (!range.collapsed) {
    const node = getSelectedNode(range);
    if (isContentEditableFalse(node)) {
      return CefUtils.showCaret(direction, editor, node, direction === HDirection.Backwards, true);
    }
  }

  const rangeIsInContainerBlock = CaretContainer.isRangeInCaretContainerBlock(range);
  const caretPosition = CaretUtils.getNormalizedRangeEndPoint(direction, editor.getBody(), range);

  if (isBeforeContentEditableFalseFn(caretPosition)) {
    return CefUtils.selectNode(editor, caretPosition.getNode(!forwards) as Element);
  }

  const nextCaretPosition = InlineUtils.normalizePosition(forwards, getNextPosFn(caretPosition));
  if (!nextCaretPosition) {
    if (rangeIsInContainerBlock) {
      return range;
    }

    return null;
  }

  if (isBeforeContentEditableFalseFn(nextCaretPosition)) {
    return CefUtils.showCaret(direction, editor, nextCaretPosition.getNode(!forwards) as Element, forwards, true);
  }

  // Peek ahead for handling of ab|c<span cE=false> -> abc|<span cE=false>
  const peekCaretPosition = getNextPosFn(nextCaretPosition);
  if (peekCaretPosition && isBeforeContentEditableFalseFn(peekCaretPosition)) {
    if (CaretUtils.isMoveInsideSameBlock(nextCaretPosition, peekCaretPosition)) {
      return CefUtils.showCaret(direction, editor, peekCaretPosition.getNode(!forwards), forwards, true);
    }
  }

  if (rangeIsInContainerBlock) {
    return CefUtils.renderRangeCaret(editor, nextCaretPosition.toRange(), true);
  }

  return null;
};

const moveToCeFalseVertically = function (direction: LineWalker.VDirection, editor, walkerFn, range: Range) {
  let caretPosition, linePositions, nextLinePositions;
  let closestNextLineRect, caretClientRect, clientX;
  let dist1, dist2, contentEditableFalseNode;

  contentEditableFalseNode = getSelectedNode(range);
  caretPosition = CaretUtils.getNormalizedRangeEndPoint(direction, editor.getBody(), range);
  linePositions = walkerFn(editor.getBody(), LineWalker.isAboveLine(1), caretPosition);
  nextLinePositions = Arr.filter(linePositions, LineWalker.isLine(1));
  caretClientRect = ArrUtils.last(caretPosition.getClientRects());

  if (isBeforeContentEditableFalse(caretPosition) || CaretUtils.isBeforeTable(caretPosition)) {
    contentEditableFalseNode = caretPosition.getNode();
  }

  if (isAfterContentEditableFalse(caretPosition) || CaretUtils.isAfterTable(caretPosition)) {
    contentEditableFalseNode = caretPosition.getNode(true);
  }

  if (!caretClientRect) {
    return null;
  }

  clientX = caretClientRect.left;

  closestNextLineRect = LineUtils.findClosestClientRect(nextLinePositions, clientX);
  if (closestNextLineRect) {
    if (isContentEditableFalse(closestNextLineRect.node)) {
      dist1 = Math.abs(clientX - closestNextLineRect.left);
      dist2 = Math.abs(clientX - closestNextLineRect.right);

      return CefUtils.showCaret(direction, editor, closestNextLineRect.node, dist1 < dist2, true);
    }
  }

  if (contentEditableFalseNode) {
    const caretPositions = LineWalker.positionsUntil(direction, editor.getBody(), LineWalker.isAboveLine(1), contentEditableFalseNode);

    closestNextLineRect = LineUtils.findClosestClientRect(Arr.filter(caretPositions, LineWalker.isLine(1)), clientX);
    if (closestNextLineRect) {
      return CefUtils.renderRangeCaret(editor, closestNextLineRect.position.toRange(), true);
    }

    closestNextLineRect = ArrUtils.last(Arr.filter(caretPositions, LineWalker.isLine(0)));
    if (closestNextLineRect) {
      return CefUtils.renderRangeCaret(editor, closestNextLineRect.position.toRange(), true);
    }
  }
};

const createTextBlock = (editor): Element => {
  const textBlock = editor.dom.create(editor.settings.forced_root_block);

  if (!Env.ie || Env.ie >= 11) {
    textBlock.innerHTML = '<br data-mce-bogus="1">';
  }

  return textBlock;
};

const exitPreBlock = (editor, direction: HDirection, range: Range): void => {
  let pre, caretPos, newBlock;
  const caretWalker = CaretWalker(editor.getBody());
  const getNextVisualCaretPosition = Fun.curry(CaretUtils.getVisualCaretPosition, caretWalker.next);
  const getPrevVisualCaretPosition = Fun.curry(CaretUtils.getVisualCaretPosition, caretWalker.prev);

  if (range.collapsed && editor.settings.forced_root_block) {
    pre = editor.dom.getParent(range.startContainer, 'PRE');
    if (!pre) {
      return;
    }

    if (direction === 1) {
      caretPos = getNextVisualCaretPosition(CaretPosition.fromRangeStart(range));
    } else {
      caretPos = getPrevVisualCaretPosition(CaretPosition.fromRangeStart(range));
    }

    if (!caretPos) {
      newBlock = createTextBlock(editor);

      if (direction === 1) {
        editor.$(pre).after(newBlock);
      } else {
        editor.$(pre).before(newBlock);
      }

      editor.selection.select(newBlock, true);
      editor.selection.collapse();
    }
  }
};

const getHorizontalRange = (editor, forward: boolean): Range => {
  const caretWalker = CaretWalker(editor.getBody());
  const getNextVisualCaretPosition = Fun.curry(CaretUtils.getVisualCaretPosition, caretWalker.next);
  const getPrevVisualCaretPosition = Fun.curry(CaretUtils.getVisualCaretPosition, caretWalker.prev);
  let newRange;
  const direction = forward ? HDirection.Forwards : HDirection.Backwards;
  const getNextPosFn = forward ? getNextVisualCaretPosition : getPrevVisualCaretPosition;
  const range = editor.selection.getRng();

  newRange = moveToCeFalseHorizontally(direction, editor, getNextPosFn, range);
  if (newRange) {
    return newRange;
  }

  newRange = exitPreBlock(editor, direction, range);
  if (newRange) {
    return newRange;
  }

  return null;
};

const getVerticalRange = (editor, down: boolean): Range => {
  let newRange;
  const direction = down ? 1 : -1;
  const walkerFn = down ? LineWalker.downUntil : LineWalker.upUntil;
  const range = editor.selection.getRng();

  newRange = moveToCeFalseVertically(direction, editor, walkerFn, range);
  if (newRange) {
    return newRange;
  }

  newRange = exitPreBlock(editor, direction, range);
  if (newRange) {
    return newRange;
  }

  return null;
};

const moveH = (editor, forward: boolean) => {
  return () => {
    const newRng = getHorizontalRange(editor, forward);

    if (newRng) {
      editor.selection.setRng(newRng);
      return true;
    } else {
      return false;
    }
  };
};

const moveV = (editor, down: boolean) => {
  return () => {
    const newRng = getVerticalRange(editor, down);

    if (newRng) {
      editor.selection.setRng(newRng);
      return true;
    } else {
      return false;
    }
  };
};

export {
  moveH,
  moveV
};
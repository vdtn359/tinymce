(function () {
var autosave = (function () {
  'use strict';

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var LocalStorage = tinymce.util.Tools.resolve('tinymce.util.LocalStorage');

  var Tools = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var fireRestoreDraft = function (editor) {
    return editor.fire('RestoreDraft');
  };
  var fireStoreDraft = function (editor) {
    return editor.fire('StoreDraft');
  };
  var fireRemoveDraft = function (editor) {
    return editor.fire('RemoveDraft');
  };
  var $_3om83j8kjdxo6zua = {
    fireRestoreDraft: fireRestoreDraft,
    fireStoreDraft: fireStoreDraft,
    fireRemoveDraft: fireRemoveDraft
  };

  var parse = function (time, defaultTime) {
    var multiples = {
      s: 1000,
      m: 60000
    };
    time = /^(\d+)([ms]?)$/.exec('' + (time || defaultTime));
    return (time[2] ? multiples[time[2]] : 1) * parseInt(time, 10);
  };
  var $_dnoakp8mjdxo6zue = { parse: parse };

  var shouldAskBeforeUnload = function (editor) {
    return editor.getParam('autosave_ask_before_unload', true);
  };
  var getAutoSavePrefix = function (editor) {
    var prefix = editor.getParam('autosave_prefix', 'tinymce-autosave-{path}{query}{hash}-{id}-');
    prefix = prefix.replace(/\{path\}/g, document.location.pathname);
    prefix = prefix.replace(/\{query\}/g, document.location.search);
    prefix = prefix.replace(/\{hash\}/g, document.location.hash);
    prefix = prefix.replace(/\{id\}/g, editor.id);
    return prefix;
  };
  var shouldRestoreWhenEmpty = function (editor) {
    return editor.getParam('autosave_restore_when_empty', false);
  };
  var getAutoSaveInterval = function (editor) {
    return $_dnoakp8mjdxo6zue.parse(editor.settings.autosave_interval, '30s');
  };
  var getAutoSaveRetention = function (editor) {
    return $_dnoakp8mjdxo6zue.parse(editor.settings.autosave_retention, '20m');
  };
  var $_9xzap68ljdxo6zuc = {
    shouldAskBeforeUnload: shouldAskBeforeUnload,
    getAutoSavePrefix: getAutoSavePrefix,
    shouldRestoreWhenEmpty: shouldRestoreWhenEmpty,
    getAutoSaveInterval: getAutoSaveInterval,
    getAutoSaveRetention: getAutoSaveRetention
  };

  var isEmpty = function (editor, html) {
    var forcedRootBlockName = editor.settings.forced_root_block;
    html = Tools.trim(typeof html === 'undefined' ? editor.getBody().innerHTML : html);
    return html === '' || new RegExp('^<' + forcedRootBlockName + '[^>]*>((\xA0|&nbsp;|[ \t]|<br[^>]*>)+?|)</' + forcedRootBlockName + '>|<br>$', 'i').test(html);
  };
  var hasDraft = function (editor) {
    var time = parseInt(LocalStorage.getItem($_9xzap68ljdxo6zuc.getAutoSavePrefix(editor) + 'time'), 10) || 0;
    if (new Date().getTime() - time > $_9xzap68ljdxo6zuc.getAutoSaveRetention(editor)) {
      removeDraft(editor, false);
      return false;
    }
    return true;
  };
  var removeDraft = function (editor, fire) {
    var prefix = $_9xzap68ljdxo6zuc.getAutoSavePrefix(editor);
    LocalStorage.removeItem(prefix + 'draft');
    LocalStorage.removeItem(prefix + 'time');
    if (fire !== false) {
      $_3om83j8kjdxo6zua.fireRemoveDraft(editor);
    }
  };
  var storeDraft = function (editor) {
    var prefix = $_9xzap68ljdxo6zuc.getAutoSavePrefix(editor);
    if (!isEmpty(editor) && editor.isDirty()) {
      LocalStorage.setItem(prefix + 'draft', editor.getContent({
        format: 'raw',
        no_events: true
      }));
      LocalStorage.setItem(prefix + 'time', new Date().getTime().toString());
      $_3om83j8kjdxo6zua.fireStoreDraft(editor);
    }
  };
  var restoreDraft = function (editor) {
    var prefix = $_9xzap68ljdxo6zuc.getAutoSavePrefix(editor);
    if (hasDraft(editor)) {
      editor.setContent(LocalStorage.getItem(prefix + 'draft'), { format: 'raw' });
      $_3om83j8kjdxo6zua.fireRestoreDraft(editor);
    }
  };
  var startStoreDraft = function (editor, started) {
    var interval = $_9xzap68ljdxo6zuc.getAutoSaveInterval(editor);
    if (!started.get()) {
      setInterval(function () {
        if (!editor.removed) {
          storeDraft(editor);
        }
      }, interval);
      started.set(true);
    }
  };
  var restoreLastDraft = function (editor) {
    editor.undoManager.transact(function () {
      restoreDraft(editor);
      removeDraft(editor);
    });
    editor.focus();
  };
  var $_ctqavx8hjdxo6ztw = {
    isEmpty: isEmpty,
    hasDraft: hasDraft,
    removeDraft: removeDraft,
    storeDraft: storeDraft,
    restoreDraft: restoreDraft,
    startStoreDraft: startStoreDraft,
    restoreLastDraft: restoreLastDraft
  };

  var curry = function (f, editor) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      return f.apply(null, [editor].concat(args));
    };
  };
  var get = function (editor) {
    return {
      hasDraft: curry($_ctqavx8hjdxo6ztw.hasDraft, editor),
      storeDraft: curry($_ctqavx8hjdxo6ztw.storeDraft, editor),
      restoreDraft: curry($_ctqavx8hjdxo6ztw.restoreDraft, editor),
      removeDraft: curry($_ctqavx8hjdxo6ztw.removeDraft, editor),
      isEmpty: curry($_ctqavx8hjdxo6ztw.isEmpty, editor)
    };
  };
  var $_fni7h78gjdxo6ztt = { get: get };

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  EditorManager._beforeUnloadHandler = function () {
    var msg;
    Tools.each(EditorManager.get(), function (editor) {
      if (editor.plugins.autosave) {
        editor.plugins.autosave.storeDraft();
      }
      if (!msg && editor.isDirty() && $_9xzap68ljdxo6zuc.shouldAskBeforeUnload(editor)) {
        msg = editor.translate('You have unsaved changes are you sure you want to navigate away?');
      }
    });
    return msg;
  };
  var setup = function (editor) {
    window.onbeforeunload = EditorManager._beforeUnloadHandler;
  };
  var $_ge2h18njdxo6zui = { setup: setup };

  var postRender = function (editor, started) {
    return function (e) {
      var ctrl = e.control;
      ctrl.disabled(!$_ctqavx8hjdxo6ztw.hasDraft(editor));
      editor.on('StoreDraft RestoreDraft RemoveDraft', function () {
        ctrl.disabled(!$_ctqavx8hjdxo6ztw.hasDraft(editor));
      });
      $_ctqavx8hjdxo6ztw.startStoreDraft(editor, started);
    };
  };
  var register = function (editor, started) {
    editor.addButton('restoredraft', {
      title: 'Restore last draft',
      onclick: function () {
        $_ctqavx8hjdxo6ztw.restoreLastDraft(editor);
      },
      onPostRender: postRender(editor, started)
    });
    editor.addMenuItem('restoredraft', {
      text: 'Restore last draft',
      onclick: function () {
        $_ctqavx8hjdxo6ztw.restoreLastDraft(editor);
      },
      onPostRender: postRender(editor, started),
      context: 'file'
    });
  };
  var $_2b3j148pjdxo6zum = { register: register };

  PluginManager.add('autosave', function (editor) {
    var started = Cell(false);
    $_ge2h18njdxo6zui.setup(editor);
    $_2b3j148pjdxo6zum.register(editor, started);
    return $_fni7h78gjdxo6ztt.get(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();

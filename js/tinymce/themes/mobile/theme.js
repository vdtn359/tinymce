(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_3zxoftwjjdxo76dp = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_6a9crxwijdxo76dg = {
    contextmenu: $_3zxoftwjjdxo76dp.constant('contextmenu'),
    touchstart: $_3zxoftwjjdxo76dp.constant('touchstart'),
    touchmove: $_3zxoftwjjdxo76dp.constant('touchmove'),
    touchend: $_3zxoftwjjdxo76dp.constant('touchend'),
    gesturestart: $_3zxoftwjjdxo76dp.constant('gesturestart'),
    mousedown: $_3zxoftwjjdxo76dp.constant('mousedown'),
    mousemove: $_3zxoftwjjdxo76dp.constant('mousemove'),
    mouseout: $_3zxoftwjjdxo76dp.constant('mouseout'),
    mouseup: $_3zxoftwjjdxo76dp.constant('mouseup'),
    mouseover: $_3zxoftwjjdxo76dp.constant('mouseover'),
    focusin: $_3zxoftwjjdxo76dp.constant('focusin'),
    keydown: $_3zxoftwjjdxo76dp.constant('keydown'),
    input: $_3zxoftwjjdxo76dp.constant('input'),
    change: $_3zxoftwjjdxo76dp.constant('change'),
    focus: $_3zxoftwjjdxo76dp.constant('focus'),
    click: $_3zxoftwjjdxo76dp.constant('click'),
    transitionend: $_3zxoftwjjdxo76dp.constant('transitionend'),
    selectstart: $_3zxoftwjjdxo76dp.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_bhikfywljdxo76e5 = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_gbbk7awojdxo76eh = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_gbbk7awojdxo76eh.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_g0juhxwnjdxo76ea = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_3zxoftwjjdxo76dp.constant(edge),
    chrome: $_3zxoftwjjdxo76dp.constant(chrome),
    ie: $_3zxoftwjjdxo76dp.constant(ie),
    opera: $_3zxoftwjjdxo76dp.constant(opera),
    firefox: $_3zxoftwjjdxo76dp.constant(firefox),
    safari: $_3zxoftwjjdxo76dp.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_gbbk7awojdxo76eh.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_5up2dcwpjdxo76el = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_3zxoftwjjdxo76dp.constant(windows),
    ios: $_3zxoftwjjdxo76dp.constant(ios),
    android: $_3zxoftwjjdxo76dp.constant(android),
    linux: $_3zxoftwjjdxo76dp.constant(linux),
    osx: $_3zxoftwjjdxo76dp.constant(osx),
    solaris: $_3zxoftwjjdxo76dp.constant(solaris),
    freebsd: $_3zxoftwjjdxo76dp.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_3zxoftwjjdxo76dp.constant(isiPad),
      isiPhone: $_3zxoftwjjdxo76dp.constant(isiPhone),
      isTablet: $_3zxoftwjjdxo76dp.constant(isTablet),
      isPhone: $_3zxoftwjjdxo76dp.constant(isPhone),
      isTouch: $_3zxoftwjjdxo76dp.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_3zxoftwjjdxo76dp.constant(iOSwebview)
    };
  }

  var never$1 = $_3zxoftwjjdxo76dp.never;
  var always$1 = $_3zxoftwjjdxo76dp.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_3zxoftwjjdxo76dp.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_akx2d9wsjdxo76fa = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_akx2d9wsjdxo76fa.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_gbbk7awojdxo76eh.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_gbbk7awojdxo76eh.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_18ll44wrjdxo76f0 = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_amb9nxwwjdxo76hd = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_dh6oatwxjdxo76hg = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_amb9nxwwjdxo76hd.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_amb9nxwwjdxo76hd.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_amb9nxwwjdxo76hd.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_amb9nxwwjdxo76hd.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_dh6oatwxjdxo76hg.head(str).bind(function (head) {
      return $_dh6oatwxjdxo76hg.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_cq9z8kwvjdxo76h5 = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_cq9z8kwvjdxo76h5.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_cq9z8kwvjdxo76h5.contains(uastring, 'edge/') && $_cq9z8kwvjdxo76h5.contains(uastring, 'chrome') && $_cq9z8kwvjdxo76h5.contains(uastring, 'safari') && $_cq9z8kwvjdxo76h5.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_cq9z8kwvjdxo76h5.contains(uastring, 'chrome') && !$_cq9z8kwvjdxo76h5.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_cq9z8kwvjdxo76h5.contains(uastring, 'msie') || $_cq9z8kwvjdxo76h5.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_cq9z8kwvjdxo76h5.contains(uastring, 'safari') || $_cq9z8kwvjdxo76h5.contains(uastring, 'mobile/')) && $_cq9z8kwvjdxo76h5.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_cq9z8kwvjdxo76h5.contains(uastring, 'iphone') || $_cq9z8kwvjdxo76h5.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_1a5my0wujdxo76gb = {
    browsers: $_3zxoftwjjdxo76dp.constant(browsers),
    oses: $_3zxoftwjjdxo76dp.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_1a5my0wujdxo76gb.browsers();
    var oses = $_1a5my0wujdxo76gb.oses();
    var browser = $_18ll44wrjdxo76f0.detectBrowser(browsers, userAgent).fold($_g0juhxwnjdxo76ea.unknown, $_g0juhxwnjdxo76ea.nu);
    var os = $_18ll44wrjdxo76f0.detectOs(oses, userAgent).fold($_5up2dcwpjdxo76el.unknown, $_5up2dcwpjdxo76el.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_7mskscwmjdxo76e7 = { detect: detect$2 };

  var detect$3 = $_bhikfywljdxo76e5.cached(function () {
    var userAgent = navigator.userAgent;
    return $_7mskscwmjdxo76e7.detect(userAgent);
  });
  var $_bx0iviwkjdxo76dy = { detect: detect$3 };

  var alloy = { tap: $_3zxoftwjjdxo76dp.constant('alloy.tap') };
  var $_99sq1cwhjdxo76d0 = {
    focus: $_3zxoftwjjdxo76dp.constant('alloy.focus'),
    postBlur: $_3zxoftwjjdxo76dp.constant('alloy.blur.post'),
    receive: $_3zxoftwjjdxo76dp.constant('alloy.receive'),
    execute: $_3zxoftwjjdxo76dp.constant('alloy.execute'),
    focusItem: $_3zxoftwjjdxo76dp.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_bx0iviwkjdxo76dy.detect().deviceType.isTouch() ? alloy.tap : $_6a9crxwijdxo76dg.click,
    longpress: $_3zxoftwjjdxo76dp.constant('alloy.longpress'),
    sandboxClose: $_3zxoftwjjdxo76dp.constant('alloy.sandbox.close'),
    systemInit: $_3zxoftwjjdxo76dp.constant('alloy.system.init'),
    windowScroll: $_3zxoftwjjdxo76dp.constant('alloy.system.scroll'),
    attachedToDom: $_3zxoftwjjdxo76dp.constant('alloy.system.attached'),
    detachedFromDom: $_3zxoftwjjdxo76dp.constant('alloy.system.detached'),
    changeTab: $_3zxoftwjjdxo76dp.constant('alloy.change.tab'),
    dismissTab: $_3zxoftwjjdxo76dp.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_16z8u3wzjdxo76ho = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_16z8u3wzjdxo76ho.isObject(old) && $_16z8u3wzjdxo76ho.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_6za9awwyjdxo76hk = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_27taa9x0jdxo76ht = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_99sq1cwhjdxo76d0.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_6za9awwyjdxo76hk.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_27taa9x0jdxo76ht.map(data, $_3zxoftwjjdxo76dp.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_76m9anwgjdxo76c4 = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_akx2d9wsjdxo76fa.each(fields, function (name, i) {
        struct[name] = $_3zxoftwjjdxo76dp.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_16z8u3wzjdxo76ho.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_akx2d9wsjdxo76fa.each(array, function (a) {
      if (!$_16z8u3wzjdxo76ho.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_akx2d9wsjdxo76fa.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_74l0m6x7jdxo76ju = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_74l0m6x7jdxo76ju.validateStrArr('required', required);
    $_74l0m6x7jdxo76ju.validateStrArr('optional', optional);
    $_74l0m6x7jdxo76ju.checkDupes(everything);
    return function (obj) {
      var keys = $_27taa9x0jdxo76ht.keys(obj);
      var allReqd = $_akx2d9wsjdxo76fa.forall(required, function (req) {
        return $_akx2d9wsjdxo76fa.contains(keys, req);
      });
      if (!allReqd)
        $_74l0m6x7jdxo76ju.reqMessage(required, keys);
      var unsupported = $_akx2d9wsjdxo76fa.filter(keys, function (key) {
        return !$_akx2d9wsjdxo76fa.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_74l0m6x7jdxo76ju.unsuppMessage(unsupported);
      var r = {};
      $_akx2d9wsjdxo76fa.each(required, function (req) {
        r[req] = $_3zxoftwjjdxo76dp.constant(obj[req]);
      });
      $_akx2d9wsjdxo76fa.each(optional, function (opt) {
        r[opt] = $_3zxoftwjjdxo76dp.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_39twflx4jdxo76ji = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_fra0ikx8jdxo76jy = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_dvzs81xcjdxo76kp = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_dvzs81xcjdxo76kp.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_95e7xpxbjdxo76kd = { getOrDie: getOrDie };

  var node = function () {
    var f = $_95e7xpxbjdxo76kd.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_1r651jxajdxo76kb = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_3zxoftwjjdxo76dp.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_8alt2yxfjdxo76l3 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_w9qq8xgjdxo76lb = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_w9qq8xgjdxo76lb.ELEMENT;
  var DOCUMENT = $_w9qq8xgjdxo76lb.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_akx2d9wsjdxo76fa.map(base.querySelectorAll(selector), $_8alt2yxfjdxo76l3.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var $_bgvscexejdxo76kt = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_akx2d9wsjdxo76fa.exists(elements, $_3zxoftwjjdxo76dp.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_1r651jxajdxo76kb.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_bx0iviwkjdxo76dy.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_fpx5cox9jdxo76k0 = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_bgvscexejdxo76kt.is
  };

  var owner = function (element) {
    return $_8alt2yxfjdxo76l3.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_8alt2yxfjdxo76l3.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_8alt2yxfjdxo76l3.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_akx2d9wsjdxo76fa.findIndex(kin, function (elem) {
        return $_fpx5cox9jdxo76k0.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_16z8u3wzjdxo76ho.isFunction(isRoot) ? isRoot : $_3zxoftwjjdxo76dp.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_8alt2yxfjdxo76l3.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_akx2d9wsjdxo76fa.filter(elements, function (x) {
        return !$_fpx5cox9jdxo76k0.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var prevSiblings = function (element) {
    return $_akx2d9wsjdxo76fa.reverse($_fra0ikx8jdxo76jy.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_fra0ikx8jdxo76jy.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_akx2d9wsjdxo76fa.map(dom.childNodes, $_8alt2yxfjdxo76l3.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_39twflx4jdxo76ji.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_d65syzx3jdxo76iv = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_d65syzx3jdxo76iv.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_d65syzx3jdxo76iv.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_d65syzx3jdxo76iv.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_d65syzx3jdxo76iv.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_d65syzx3jdxo76iv.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_195zrox2jdxo76ir = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_akx2d9wsjdxo76fa.each(elements, function (x) {
      $_195zrox2jdxo76ir.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_akx2d9wsjdxo76fa.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_195zrox2jdxo76ir.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_akx2d9wsjdxo76fa.each(elements.slice().reverse(), function (x) {
      $_195zrox2jdxo76ir.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_akx2d9wsjdxo76fa.each(elements, function (x) {
      $_195zrox2jdxo76ir.append(parent, x);
    });
  };
  var $_bqnd9lxijdxo76li = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_akx2d9wsjdxo76fa.each($_d65syzx3jdxo76iv.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_d65syzx3jdxo76iv.children(wrapper);
    if (children.length > 0)
      $_bqnd9lxijdxo76li.before(wrapper, children);
    remove(wrapper);
  };
  var $_d4v1ijxhjdxo76ld = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_w9qq8xgjdxo76lb.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_w9qq8xgjdxo76lb.ELEMENT);
  var isText = isType$1($_w9qq8xgjdxo76lb.TEXT);
  var isDocument = isType$1($_w9qq8xgjdxo76lb.DOCUMENT);
  var $_bc2oaqxkjdxo76lx = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_bc2oaqxkjdxo76lx.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_bhikfywljdxo76e5.cached(function () {
    return getBody($_8alt2yxfjdxo76l3.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_8alt2yxfjdxo76l3.fromDom(body);
  };
  var $_das13dxjjdxo76lp = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_76m9anwgjdxo76c4.emit(component, $_99sq1cwhjdxo76d0.detachedFromDom());
    var children = component.components();
    $_akx2d9wsjdxo76fa.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_akx2d9wsjdxo76fa.each(children, fireAttaching);
    $_76m9anwgjdxo76c4.emit(component, $_99sq1cwhjdxo76d0.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_195zrox2jdxo76ir.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_das13dxjjdxo76lp.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_d4v1ijxhjdxo76ld.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_d65syzx3jdxo76iv.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_akx2d9wsjdxo76fa.each(subs, doDetach);
    $_d4v1ijxhjdxo76ld.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_195zrox2jdxo76ir.append(element, guiSystem.element());
    var children = $_d65syzx3jdxo76iv.children(guiSystem.element());
    $_akx2d9wsjdxo76fa.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_d65syzx3jdxo76iv.children(guiSystem.element());
    $_akx2d9wsjdxo76fa.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_d4v1ijxhjdxo76ld.remove(guiSystem.element());
  };
  var $_29x44cx1jdxo76i0 = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_d65syzx3jdxo76iv.children($_8alt2yxfjdxo76l3.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_akx2d9wsjdxo76fa.map(tags, function (x) {
      return $_8alt2yxfjdxo76l3.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_akx2d9wsjdxo76fa.map(texts, function (x) {
      return $_8alt2yxfjdxo76l3.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_akx2d9wsjdxo76fa.map(nodes, $_8alt2yxfjdxo76l3.fromDom);
  };
  var $_1aqcmmxpjdxo76mz = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_d65syzx3jdxo76iv.owner(element);
    var docDom = owner.dom();
    var fragment = $_8alt2yxfjdxo76l3.fromDom(docDom.createDocumentFragment());
    var contentElements = $_1aqcmmxpjdxo76mz.fromHtml(content, docDom);
    $_bqnd9lxijdxo76li.append(fragment, contentElements);
    $_d4v1ijxhjdxo76ld.empty(element);
    $_195zrox2jdxo76ir.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_8alt2yxfjdxo76l3.fromTag('div');
    var clone = $_8alt2yxfjdxo76l3.fromDom(element.dom().cloneNode(true));
    $_195zrox2jdxo76ir.append(container, clone);
    return get(container);
  };
  var $_90tgw5xojdxo76mw = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_16z8u3wzjdxo76ho.isString(value) || $_16z8u3wzjdxo76ho.isBoolean(value) || $_16z8u3wzjdxo76ho.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_27taa9x0jdxo76ht.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_akx2d9wsjdxo76fa.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_bc2oaqxkjdxo76lx.isElement(source) || !$_bc2oaqxkjdxo76lx.isElement(destination))
      return;
    $_akx2d9wsjdxo76fa.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_dkhdpfxrjdxo76n9 = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_8alt2yxfjdxo76l3.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_8alt2yxfjdxo76l3.fromTag(tag);
    var attributes = $_dkhdpfxrjdxo76n9.clone(original);
    $_dkhdpfxrjdxo76n9.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_d65syzx3jdxo76iv.children(deep$1(original));
    $_bqnd9lxijdxo76li.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_195zrox2jdxo76ir.before(original, nu);
    var children = $_d65syzx3jdxo76iv.children(original);
    $_bqnd9lxijdxo76li.append(nu, children);
    $_d4v1ijxhjdxo76ld.remove(original);
    return nu;
  };
  var $_dd8j7cxqjdxo76n5 = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_dd8j7cxqjdxo76n5.shallow(element);
    return $_90tgw5xojdxo76mw.getOuter(clone);
  };
  var $_e93kkvxnjdxo76mp = { getHtml: getHtml };

  var element = function (elem) {
    return $_e93kkvxnjdxo76mp.getHtml(elem);
  };
  var $_azsjjhxmjdxo76mn = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_3zxoftwjjdxo76dp.always,
      isError: $_3zxoftwjjdxo76dp.never,
      getOr: $_3zxoftwjjdxo76dp.constant(o),
      getOrThunk: $_3zxoftwjjdxo76dp.constant(o),
      getOrDie: $_3zxoftwjjdxo76dp.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_3zxoftwjjdxo76dp.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_3zxoftwjjdxo76dp.never,
      isValue: $_3zxoftwjjdxo76dp.never,
      isError: $_3zxoftwjjdxo76dp.always,
      getOr: $_3zxoftwjjdxo76dp.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_3zxoftwjjdxo76dp.noop,
      bind: bind,
      exists: $_3zxoftwjjdxo76dp.never,
      forall: $_3zxoftwjjdxo76dp.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_16z8u3wzjdxo76ho.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_akx2d9wsjdxo76fa.each(cases, function (acase, count) {
      var keys = $_27taa9x0jdxo76ht.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_16z8u3wzjdxo76ho.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_27taa9x0jdxo76ht.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_akx2d9wsjdxo76fa.forall(constructors, function (reqKey) {
            return $_akx2d9wsjdxo76fa.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_1mkbevxwjdxo76om = { generate: generate };

  var comparison = $_1mkbevxwjdxo76om.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_akx2d9wsjdxo76fa.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_cf1upgxvjdxo76oh = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_6za9awwyjdxo76hk.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_3zxoftwjjdxo76dp.compose(Result.error, $_akx2d9wsjdxo76fa.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_cf1upgxvjdxo76oh.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_cf1upgxvjdxo76oh.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_3hpw39xtjdxo76nr = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_akx2d9wsjdxo76fa.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_akx2d9wsjdxo76fa.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_27taa9x0jdxo76ht.each(obj, function (v, k) {
      if (!$_akx2d9wsjdxo76fa.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_311qkzxxjdxo76ou = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_36hxkcxyjdxo76p1 = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_akx2d9wsjdxo76fa.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_e7satsxzjdxo76p6 = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_311qkzxxjdxo76ou.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_311qkzxxjdxo76ou.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_36hxkcxyjdxo76p1.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_36hxkcxyjdxo76p1.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_36hxkcxyjdxo76p1.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_e7satsxzjdxo76p6.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_e7satsxzjdxo76p6.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_311qkzxxjdxo76ou.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_3hpw39xtjdxo76nr.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_36hxkcxyjdxo76p1.hasKey(obj, key);
  };
  var $_futrxxxsjdxo76nn = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_3efatjy0jdxo76pb = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_akx2d9wsjdxo76fa.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_akx2d9wsjdxo76fa.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_3zxoftwjjdxo76dp.noop,
    logEventStopped: $_3zxoftwjjdxo76dp.noop,
    logNoParent: $_3zxoftwjjdxo76dp.noop,
    logEventNoHandlers: $_3zxoftwjjdxo76dp.noop,
    logEventResponse: $_3zxoftwjjdxo76dp.noop,
    write: $_3zxoftwjjdxo76dp.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_akx2d9wsjdxo76fa.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_akx2d9wsjdxo76fa.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_99sq1cwhjdxo76d0.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_akx2d9wsjdxo76fa.map(sequence, function (s) {
              if (!$_akx2d9wsjdxo76fa.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_azsjjhxmjdxo76mn.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_azsjjhxmjdxo76mn.element(c.element()),
        '(initComponents)': $_akx2d9wsjdxo76fa.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_akx2d9wsjdxo76fa.map(c.components(), go),
        '(bound.events)': $_27taa9x0jdxo76ht.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_27taa9x0jdxo76ht.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_27taa9x0jdxo76ht.keys(systems);
          return $_3efatjy0jdxo76pb.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_futrxxxsjdxo76nn.wrap($_azsjjhxmjdxo76mn.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_5ph10nxljdxo76m4 = {
    logHandler: logHandler,
    noLogger: $_3zxoftwjjdxo76dp.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_3zxoftwjjdxo76dp.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_fpx5cox9jdxo76k0.eq(component.element(), simulatedEvent.event().target());
  };
  var $_elbuo7y5jdxo76qp = { isSource: isSource };

  var adt = $_1mkbevxwjdxo76om.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_3zxoftwjjdxo76dp.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_3zxoftwjjdxo76dp.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_3zxoftwjjdxo76dp.constant(base));
  };
  var $_d4rkwuy8jdxo76rn = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_1mkbevxwjdxo76om.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_1mkbevxwjdxo76om.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_g7f4q8yajdxo76sy = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_95e7xpxbjdxo76kd.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_82khs3ydjdxo76tj = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_16z8u3wzjdxo76ho.isObject(input) && $_27taa9x0jdxo76ht.keys(input).length > 100 ? ' removed due to size' : $_82khs3ydjdxo76tj.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_akx2d9wsjdxo76fa.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_g3pqenycjdxo76t9 = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_g3pqenycjdxo76t9.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_g3pqenycjdxo76t9.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_8xal3oybjdxo76t4 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_1mkbevxwjdxo76om.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_3zxoftwjjdxo76dp.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_3zxoftwjjdxo76dp.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_36hxkcxyjdxo76p1.readOptFrom(obj, key).fold(function () {
      return $_8xal3oybjdxo76t4.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_36hxkcxyjdxo76p1.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_3zxoftwjjdxo76dp.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_36hxkcxyjdxo76p1.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_36hxkcxyjdxo76p1.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_e7satsxzjdxo76p6.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_e7satsxzjdxo76p6.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_e7satsxzjdxo76p6.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_3zxoftwjjdxo76dp.constant({})).map(function (v) {
            return $_6za9awwyjdxo76hk.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_e7satsxzjdxo76p6.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_akx2d9wsjdxo76fa.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_3hpw39xtjdxo76nr.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_8xal3oybjdxo76t4.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_27taa9x0jdxo76ht.keys(obj);
    return $_akx2d9wsjdxo76fa.filter(keys, function (k) {
      return $_futrxxxsjdxo76nn.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_akx2d9wsjdxo76fa.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_6za9awwyjdxo76hk.deepMerge(acc, $_futrxxxsjdxo76nn.wrap(key, true));
      }, $_3zxoftwjjdxo76dp.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_16z8u3wzjdxo76ho.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_akx2d9wsjdxo76fa.filter(keys, function (k) {
        return !$_futrxxxsjdxo76nn.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_8xal3oybjdxo76t4.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_akx2d9wsjdxo76fa.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.objOf($_akx2d9wsjdxo76fa.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_g7f4q8yajdxo76sy.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_g7f4q8yajdxo76sy.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_akx2d9wsjdxo76fa.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_3hpw39xtjdxo76nr.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_3zxoftwjjdxo76dp.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_27taa9x0jdxo76ht.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_akx2d9wsjdxo76fa.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_d4rkwuy8jdxo76rn.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_16z8u3wzjdxo76ho.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_g7f4q8yajdxo76sy.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_bhikfywljdxo76e5.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_3zxoftwjjdxo76dp.compose(arr, obj);
  var $_arc29vy9jdxo76s5 = {
    anyValue: $_3zxoftwjjdxo76dp.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.strict(), $_arc29vy9jdxo76s5.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.strict(), $_arc29vy9jdxo76s5.value(function (f) {
      return $_16z8u3wzjdxo76ho.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.asOption(), $_arc29vy9jdxo76s5.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.strict(), $_arc29vy9jdxo76s5.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.strict(), $_arc29vy9jdxo76s5.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.asOption(), $_arc29vy9jdxo76s5.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.asOption(), $_arc29vy9jdxo76s5.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.asOption(), $_arc29vy9jdxo76s5.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.defaulted(fallback), $_arc29vy9jdxo76s5.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_arc29vy9jdxo76s5.field(key, key, $_d4rkwuy8jdxo76rn.defaulted(fallback), $_arc29vy9jdxo76s5.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_arc29vy9jdxo76s5.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_arc29vy9jdxo76s5.state(okey, instantiator);
  };
  var $_b50aqly7jdxo76rd = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_futrxxxsjdxo76nn.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_8xal3oybjdxo76t4.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_arc29vy9jdxo76s5.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_futrxxxsjdxo76nn.readOptFrom(input, key);
      return choice.fold(function () {
        return $_8xal3oybjdxo76t4.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_27taa9x0jdxo76ht.keys(branches);
    };
    var toDsl = function () {
      return $_g7f4q8yajdxo76sy.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_16llp0yfjdxo76tw = { choose: choose };

  var anyValue$1 = $_arc29vy9jdxo76s5.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_arc29vy9jdxo76s5.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_arc29vy9jdxo76s5.arr(anyValue$1);
  };
  var arrOf = $_arc29vy9jdxo76s5.arr;
  var objOf = $_arc29vy9jdxo76s5.obj;
  var objOfOnly = $_arc29vy9jdxo76s5.objOnly;
  var setOf$1 = $_arc29vy9jdxo76s5.setOf;
  var valueOf = function (validator) {
    return $_arc29vy9jdxo76s5.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_3zxoftwjjdxo76dp.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_3zxoftwjjdxo76dp.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_3zxoftwjjdxo76dp.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_g3pqenycjdxo76t9.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_g3pqenycjdxo76t9.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_16llp0yfjdxo76tw.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_arc29vy9jdxo76s5.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_arc29vy9jdxo76s5.func(args, schema, retriever);
  };
  var $_28d4pyyejdxo76tn = {
    anyValue: $_3zxoftwjjdxo76dp.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_futrxxxsjdxo76nn.hasKey(parts, 'can') && !$_futrxxxsjdxo76nn.hasKey(parts, 'abort') && !$_futrxxxsjdxo76nn.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_82khs3ydjdxo76tj.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_28d4pyyejdxo76tn.asRawOrDie('Extracting event.handler', $_28d4pyyejdxo76tn.objOfOnly([
      $_b50aqly7jdxo76rd.defaulted('can', $_3zxoftwjjdxo76dp.constant(true)),
      $_b50aqly7jdxo76rd.defaulted('abort', $_3zxoftwjjdxo76dp.constant(false)),
      $_b50aqly7jdxo76rd.defaulted('run', $_3zxoftwjjdxo76dp.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_akx2d9wsjdxo76fa.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_akx2d9wsjdxo76fa.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_16z8u3wzjdxo76ho.isFunction(handler) ? {
      can: $_3zxoftwjjdxo76dp.constant(true),
      abort: $_3zxoftwjjdxo76dp.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_akx2d9wsjdxo76fa.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_echfw7y6jdxo76qu = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_futrxxxsjdxo76nn.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_echfw7y6jdxo76qu.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_echfw7y6jdxo76qu.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_echfw7y6jdxo76qu.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_echfw7y6jdxo76qu.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_echfw7y6jdxo76qu.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_echfw7y6jdxo76qu.nu({
          run: function (component, simulatedEvent) {
            if ($_elbuo7y5jdxo76qp.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_76m9anwgjdxo76c4.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_d2m63by4jdxo76qi = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_99sq1cwhjdxo76d0.attachedToDom()),
    runOnDetached: runOnSourceName($_99sq1cwhjdxo76d0.detachedFromDom()),
    runOnInit: runOnSourceName($_99sq1cwhjdxo76d0.systemInit()),
    runOnExecute: runOnName($_99sq1cwhjdxo76d0.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_eiss3xygjdxo76u4 = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_39twflx4jdxo76ji.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_82khs3ydjdxo76tj.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_9jt892yijdxo76ux = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_39twflx4jdxo76ji.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_27taa9x0jdxo76ht.keys(settings);
    $_akx2d9wsjdxo76fa.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_82khs3ydjdxo76tj.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_futrxxxsjdxo76nn.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_futrxxxsjdxo76nn.wrap(key, arr1);
      }, function (arr2) {
        return $_futrxxxsjdxo76nn.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_6za9awwyjdxo76hk.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_6za9awwyjdxo76hk.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_6za9awwyjdxo76hk.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_futrxxxsjdxo76nn.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_futrxxxsjdxo76nn.wrap('value', value);
    }).getOr({}));
    return $_9jt892yijdxo76ux.nu(raw);
  };
  var $_9a14aqyhjdxo76ua = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_d2m63by4jdxo76qi.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_d2m63by4jdxo76qi.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_28d4pyyejdxo76tn.objOfOnly(schema);
    var schemaSchema = $_b50aqly7jdxo76rd.optionObjOf(name, [$_b50aqly7jdxo76rd.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_b50aqly7jdxo76rd.optionObjOf(name, [$_b50aqly7jdxo76rd.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_3zxoftwjjdxo76dp.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_eiss3xygjdxo76u4.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_futrxxxsjdxo76nn.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_27taa9x0jdxo76ht.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_27taa9x0jdxo76ht.map(extra, function (extraF, extraName) {
      return $_eiss3xygjdxo76u4.markAsExtraApi(extraF, extraName);
    });
    var me = $_6za9awwyjdxo76hk.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_3zxoftwjjdxo76dp.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_28d4pyyejdxo76tn.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_bhikfywljdxo76e5.cached(function () {
              return $_28d4pyyejdxo76tn.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_futrxxxsjdxo76nn.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_9a14aqyhjdxo76ua.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_futrxxxsjdxo76nn.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_158656y3jdxo76pu = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_16z8u3wzjdxo76ho.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_74l0m6x7jdxo76ju.validateStrArr('required', required);
    $_74l0m6x7jdxo76ju.checkDupes(required);
    return function (obj) {
      var keys = $_27taa9x0jdxo76ht.keys(obj);
      var allReqd = $_akx2d9wsjdxo76fa.forall(required, function (req) {
        return $_akx2d9wsjdxo76fa.contains(keys, req);
      });
      if (!allReqd)
        $_74l0m6x7jdxo76ju.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_akx2d9wsjdxo76fa.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_74l0m6x7jdxo76ju.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_akx2d9wsjdxo76fa.filter(keys, function (key) {
      return !$_akx2d9wsjdxo76fa.contains(required, key);
    });
    if (unsupported.length > 0)
      $_74l0m6x7jdxo76ju.unsuppMessage(unsupported);
  };
  var allowExtra = $_3zxoftwjjdxo76dp.noop;
  var $_bh6oawyljdxo76vq = {
    exactly: $_3zxoftwjjdxo76dp.curry(base, handleExact),
    ensure: $_3zxoftwjjdxo76dp.curry(base, allowExtra),
    ensureWith: $_3zxoftwjjdxo76dp.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_bh6oawyljdxo76vq.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_1hljqoyjjdxo76vh = { init: init };

  var derive$2 = function (capabilities) {
    return $_futrxxxsjdxo76nn.wrapAll(capabilities);
  };
  var simpleSchema = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strict('fields'),
    $_b50aqly7jdxo76rd.strict('name'),
    $_b50aqly7jdxo76rd.defaulted('active', {}),
    $_b50aqly7jdxo76rd.defaulted('apis', {}),
    $_b50aqly7jdxo76rd.defaulted('extra', {}),
    $_b50aqly7jdxo76rd.defaulted('state', $_1hljqoyjjdxo76vh)
  ]);
  var create$1 = function (data) {
    var value = $_28d4pyyejdxo76tn.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_158656y3jdxo76pu.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strict('branchKey'),
    $_b50aqly7jdxo76rd.strict('branches'),
    $_b50aqly7jdxo76rd.strict('name'),
    $_b50aqly7jdxo76rd.defaulted('active', {}),
    $_b50aqly7jdxo76rd.defaulted('apis', {}),
    $_b50aqly7jdxo76rd.defaulted('extra', {}),
    $_b50aqly7jdxo76rd.defaulted('state', $_1hljqoyjjdxo76vh)
  ]);
  var createModes$1 = function (data) {
    var value = $_28d4pyyejdxo76tn.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_158656y3jdxo76pu.createModes($_28d4pyyejdxo76tn.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_50ks2ly2jdxo76pg = {
    derive: derive$2,
    revoke: $_3zxoftwjjdxo76dp.constant(undefined),
    noActive: $_3zxoftwjjdxo76dp.constant({}),
    noApis: $_3zxoftwjjdxo76dp.constant({}),
    noExtra: $_3zxoftwjjdxo76dp.constant({}),
    noState: $_3zxoftwjjdxo76dp.constant($_1hljqoyjjdxo76vh),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_dkhdpfxrjdxo76n9.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_dkhdpfxrjdxo76n9.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_akx2d9wsjdxo76fa.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_dkhdpfxrjdxo76n9.set(element, attr, nu.join(' '));
    else
      $_dkhdpfxrjdxo76n9.remove(element, attr);
  };
  var $_7rs2g5yqjdxo76wk = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_7rs2g5yqjdxo76wk.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_7rs2g5yqjdxo76wk.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_7rs2g5yqjdxo76wk.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_akx2d9wsjdxo76fa.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_cijnzlypjdxo76we = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_cijnzlypjdxo76we.supports(element))
      element.dom().classList.add(clazz);
    else
      $_cijnzlypjdxo76we.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_cijnzlypjdxo76we.supports(element) ? element.dom().classList : $_cijnzlypjdxo76we.get(element);
    if (classList.length === 0) {
      $_dkhdpfxrjdxo76n9.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_cijnzlypjdxo76we.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_cijnzlypjdxo76we.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_cijnzlypjdxo76we.supports(element) ? element.dom().classList.toggle(clazz) : $_cijnzlypjdxo76we.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_cijnzlypjdxo76we.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_cijnzlypjdxo76we.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_cijnzlypjdxo76we.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_cijnzlypjdxo76we.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_euw48pynjdxo76w6 = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_euw48pynjdxo76w6.remove(element, removeCls);
    $_euw48pynjdxo76w6.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_euw48pynjdxo76w6.remove(component.element(), swapConfig.alpha());
    $_euw48pynjdxo76w6.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_euw48pynjdxo76w6.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_euw48pynjdxo76w6.has(component.element(), swapConfig.omega());
  };
  var $_2nojtkymjdxo76vy = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_b50aqly7jdxo76rd.strict('alpha'),
    $_b50aqly7jdxo76rd.strict('omega')
  ];

  var Swapping = $_50ks2ly2jdxo76pg.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_2nojtkymjdxo76vy
  });

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

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_16z8u3wzjdxo76ho.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_das13dxjjdxo76lp.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_16z8u3wzjdxo76ho.isFunction(isRoot) ? isRoot : $_3zxoftwjjdxo76dp.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_8alt2yxfjdxo76l3.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_8alt2yxfjdxo76l3.fromDom(element.parentNode), function (x) {
      return !$_fpx5cox9jdxo76k0.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_akx2d9wsjdxo76fa.find(scope.dom().childNodes, $_3zxoftwjjdxo76dp.compose(predicate, $_8alt2yxfjdxo76l3.fromDom));
    return result.map($_8alt2yxfjdxo76l3.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_8alt2yxfjdxo76l3.fromDom(element.childNodes[i])))
          return Option.some($_8alt2yxfjdxo76l3.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_c2a7cdyvjdxo76xf = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_c2a7cdyvjdxo76xf.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_c2a7cdyvjdxo76xf.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_c2a7cdyvjdxo76xf.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_c2a7cdyvjdxo76xf.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_c2a7cdyvjdxo76xf.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_c2a7cdyvjdxo76xf.descendant(scope, predicate).isSome();
  };
  var $_35w6ntyujdxo76xb = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_d65syzx3jdxo76iv.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_8alt2yxfjdxo76l3.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_d65syzx3jdxo76iv.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_35w6ntyujdxo76xb.closest(a, $_3zxoftwjjdxo76dp.curry($_fpx5cox9jdxo76k0.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_3zxoftwjjdxo76dp.noop);
  };
  var search = function (element) {
    return active($_d65syzx3jdxo76iv.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_8fjsagytjdxo76x0 = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_2decqmyzjdxo76y9 = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_35qzdbz0jdxo76yc = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_bgsjplz1jdxo76ye = {
    formatChanged: $_3zxoftwjjdxo76dp.constant(formatChanged),
    orientationChanged: $_3zxoftwjjdxo76dp.constant(orientationChanged),
    dropupDismissed: $_3zxoftwjjdxo76dp.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_akx2d9wsjdxo76fa.filter(channels, function (ch) {
      return $_akx2d9wsjdxo76fa.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_27taa9x0jdxo76ht.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_akx2d9wsjdxo76fa.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_28d4pyyejdxo76tn.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_azsjjhxmjdxo76mn.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_5kpmszz4jdxo76zc = { events: events };

  var menuFields = [
    $_b50aqly7jdxo76rd.strict('menu'),
    $_b50aqly7jdxo76rd.strict('selectedMenu')
  ];
  var itemFields = [
    $_b50aqly7jdxo76rd.strict('item'),
    $_b50aqly7jdxo76rd.strict('selectedItem')
  ];
  var schema = $_28d4pyyejdxo76tn.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_28d4pyyejdxo76tn.objOfOnly(itemFields);
  var $_55xs5uz7jdxo770v = {
    menuFields: $_3zxoftwjjdxo76dp.constant(menuFields),
    itemFields: $_3zxoftwjjdxo76dp.constant(itemFields),
    schema: $_3zxoftwjjdxo76dp.constant(schema),
    itemSchema: $_3zxoftwjjdxo76dp.constant(itemSchema)
  };

  var initSize = $_b50aqly7jdxo76rd.strictObjOf('initSize', [
    $_b50aqly7jdxo76rd.strict('numColumns'),
    $_b50aqly7jdxo76rd.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_b50aqly7jdxo76rd.strictOf('markers', $_55xs5uz7jdxo770v.itemSchema());
  };
  var menuMarkers = function () {
    return $_b50aqly7jdxo76rd.strictOf('markers', $_55xs5uz7jdxo770v.schema());
  };
  var tieredMenuMarkers = function () {
    return $_b50aqly7jdxo76rd.strictObjOf('markers', [$_b50aqly7jdxo76rd.strict('backgroundMenu')].concat($_55xs5uz7jdxo770v.menuFields()).concat($_55xs5uz7jdxo770v.itemFields()));
  };
  var markers = function (required) {
    return $_b50aqly7jdxo76rd.strictObjOf('markers', $_akx2d9wsjdxo76fa.map(required, $_b50aqly7jdxo76rd.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_5ph10nxljdxo76m4.getTrace();
    return $_b50aqly7jdxo76rd.field(fieldName, fieldName, presence, $_28d4pyyejdxo76tn.valueOf(function (f) {
      return Result.value(function () {
        $_5ph10nxljdxo76m4.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_d4rkwuy8jdxo76rn.defaulted($_3zxoftwjjdxo76dp.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_d4rkwuy8jdxo76rn.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_d4rkwuy8jdxo76rn.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_d4rkwuy8jdxo76rn.strict());
  };
  var output$1 = function (name, value) {
    return $_b50aqly7jdxo76rd.state(name, $_3zxoftwjjdxo76dp.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_b50aqly7jdxo76rd.state(name, $_3zxoftwjjdxo76dp.identity);
  };
  var $_8mqb5kz6jdxo7708 = {
    initSize: $_3zxoftwjjdxo76dp.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_b50aqly7jdxo76rd.strictOf('channels', $_28d4pyyejdxo76tn.setOf(Result.value, $_28d4pyyejdxo76tn.objOfOnly([
      $_8mqb5kz6jdxo7708.onStrictHandler('onReceive'),
      $_b50aqly7jdxo76rd.defaulted('schema', $_28d4pyyejdxo76tn.anyValue())
    ])))];

  var Receiving = $_50ks2ly2jdxo76pg.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_5kpmszz4jdxo76zc
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_euw48pynjdxo76w6.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_euw48pynjdxo76w6.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_euw48pynjdxo76w6.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_euw48pynjdxo76w6.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_gcezujzajdxo771h = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_9a14aqyhjdxo76ua.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_158656y3jdxo76pu.executeEvent(toggleConfig, toggleState, $_gcezujzajdxo771h.toggle);
    var load = $_158656y3jdxo76pu.loadEvent(toggleConfig, toggleState, $_gcezujzajdxo771h.onLoad);
    return $_d2m63by4jdxo76qi.derive($_akx2d9wsjdxo76fa.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_cdyg13z9jdxo771b = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_bc2oaqxkjdxo76lx.name(elem);
    var suffix = rawTag === 'input' && $_dkhdpfxrjdxo76n9.has(elem, 'type') ? ':' + $_dkhdpfxrjdxo76n9.get(elem, 'type') : '';
    return $_futrxxxsjdxo76nn.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_dkhdpfxrjdxo76n9.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_dkhdpfxrjdxo76n9.get(elem, 'role');
      return $_futrxxxsjdxo76nn.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_akx2d9wsjdxo76fa.each(attributes, function (attr) {
      $_dkhdpfxrjdxo76n9.set(component.element(), attr, status);
    });
  };
  var $_cu37gtzcjdxo771z = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_b50aqly7jdxo76rd.defaulted('selected', false),
    $_b50aqly7jdxo76rd.strict('toggleClass'),
    $_b50aqly7jdxo76rd.defaulted('toggleOnExecute', true),
    $_b50aqly7jdxo76rd.defaultedOf('aria', { mode: 'none' }, $_28d4pyyejdxo76tn.choose('mode', {
      'pressed': [
        $_b50aqly7jdxo76rd.defaulted('syncWithExpanded', false),
        $_8mqb5kz6jdxo7708.output('update', $_cu37gtzcjdxo771z.updatePressed)
      ],
      'checked': [$_8mqb5kz6jdxo7708.output('update', $_cu37gtzcjdxo771z.updateChecked)],
      'expanded': [$_8mqb5kz6jdxo7708.output('update', $_cu37gtzcjdxo771z.updateExpanded)],
      'selected': [$_8mqb5kz6jdxo7708.output('update', $_cu37gtzcjdxo771z.updateSelected)],
      'none': [$_8mqb5kz6jdxo7708.output('update', $_3zxoftwjjdxo76dp.noop)]
    }))
  ];

  var Toggling = $_50ks2ly2jdxo76pg.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_cdyg13z9jdxo771b,
    apis: $_gcezujzajdxo771h
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_futrxxxsjdxo76nn.wrap($_bgsjplz1jdxo76ye.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_futrxxxsjdxo76nn.wrap($_bgsjplz1jdxo76ye.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_3nbnkpzdjdxo772w = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_4agqi1zejdxo7731 = {
    resolve: resolve$1,
    prefix: $_3zxoftwjjdxo76dp.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_8fjsagytjdxo76x0.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_8fjsagytjdxo76x0.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_8fjsagytjdxo76x0.hasFocus(component.element());
  };
  var $_3o1at5zjjdxo773r = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_9a14aqyhjdxo76ua.nu({});
    else
      return $_9a14aqyhjdxo76ua.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.focus(), function (component, simulatedEvent) {
        $_3o1at5zjjdxo773r.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_e6r9vkzijdxo773o = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_8mqb5kz6jdxo7708.onHandler('onFocus'),
    $_b50aqly7jdxo76rd.defaulted('ignore', false)
  ];

  var Focusing = $_50ks2ly2jdxo76pg.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_e6r9vkzijdxo773o,
    apis: $_3o1at5zjjdxo773r
  });

  var $_20hbz0zpjdxo774q = {
    BACKSPACE: $_3zxoftwjjdxo76dp.constant([8]),
    TAB: $_3zxoftwjjdxo76dp.constant([9]),
    ENTER: $_3zxoftwjjdxo76dp.constant([13]),
    SHIFT: $_3zxoftwjjdxo76dp.constant([16]),
    CTRL: $_3zxoftwjjdxo76dp.constant([17]),
    ALT: $_3zxoftwjjdxo76dp.constant([18]),
    CAPSLOCK: $_3zxoftwjjdxo76dp.constant([20]),
    ESCAPE: $_3zxoftwjjdxo76dp.constant([27]),
    SPACE: $_3zxoftwjjdxo76dp.constant([32]),
    PAGEUP: $_3zxoftwjjdxo76dp.constant([33]),
    PAGEDOWN: $_3zxoftwjjdxo76dp.constant([34]),
    END: $_3zxoftwjjdxo76dp.constant([35]),
    HOME: $_3zxoftwjjdxo76dp.constant([36]),
    LEFT: $_3zxoftwjjdxo76dp.constant([37]),
    UP: $_3zxoftwjjdxo76dp.constant([38]),
    RIGHT: $_3zxoftwjjdxo76dp.constant([39]),
    DOWN: $_3zxoftwjjdxo76dp.constant([40]),
    INSERT: $_3zxoftwjjdxo76dp.constant([45]),
    DEL: $_3zxoftwjjdxo76dp.constant([46]),
    META: $_3zxoftwjjdxo76dp.constant([
      91,
      93,
      224
    ]),
    F10: $_3zxoftwjjdxo76dp.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_cqncgczujdxo775n = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_das13dxjjdxo76lp.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_akx2d9wsjdxo76fa.filter($_d65syzx3jdxo76iv.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_akx2d9wsjdxo76fa.filter($_d65syzx3jdxo76iv.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_akx2d9wsjdxo76fa.filter($_d65syzx3jdxo76iv.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_akx2d9wsjdxo76fa.each($_d65syzx3jdxo76iv.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_97le5ozwjdxo775r = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_bgvscexejdxo76kt.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_97le5ozwjdxo775r.ancestors(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_97le5ozwjdxo775r.siblings(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_97le5ozwjdxo775r.children(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_bgvscexejdxo76kt.all(selector, scope);
  };
  var $_fnwj0qzvjdxo775p = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_bgvscexejdxo76kt.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_c2a7cdyvjdxo76xf.ancestor(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_c2a7cdyvjdxo76xf.sibling(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_c2a7cdyvjdxo76xf.child(scope, function (e) {
      return $_bgvscexejdxo76kt.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_bgvscexejdxo76kt.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_bgvscexejdxo76kt.is, ancestor$2, scope, selector, isRoot);
  };
  var $_dxlqnlzxjdxo775u = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_fnwj0qzvjdxo775p.descendants(component.element(), '.' + hConfig.highlightClass());
    $_akx2d9wsjdxo76fa.each(highlighted, function (h) {
      $_euw48pynjdxo76w6.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_euw48pynjdxo76w6.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_euw48pynjdxo76w6.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_fnwj0qzvjdxo775p.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_3efatjy0jdxo76pb.cat($_akx2d9wsjdxo76fa.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_akx2d9wsjdxo76fa.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_euw48pynjdxo76w6.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_dxlqnlzxjdxo775u.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_fnwj0qzvjdxo775p.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_dxlqnlzxjdxo775u.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_fnwj0qzvjdxo775p.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_fnwj0qzvjdxo775p.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_akx2d9wsjdxo76fa.findIndex(items, function (item) {
      return $_euw48pynjdxo76w6.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_cqncgczujdxo775n.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_2bmdvsztjdxo7759 = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_b50aqly7jdxo76rd.strict('highlightClass'),
    $_b50aqly7jdxo76rd.strict('itemClass'),
    $_8mqb5kz6jdxo7708.onHandler('onHighlight'),
    $_8mqb5kz6jdxo7708.onHandler('onDehighlight')
  ];

  var Highlighting = $_50ks2ly2jdxo76pg.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_2bmdvsztjdxo7759
  });

  var dom = function () {
    var get = function (component) {
      return $_8fjsagytjdxo76x0.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_3zxoftwjjdxo76dp.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_9rf2v1zrjdxo774z = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_akx2d9wsjdxo76fa.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_akx2d9wsjdxo76fa.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_gbq5vb100jdxo7763 = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_3zxoftwjjdxo76dp.not(isShift),
    isControl: isControl,
    isNotControl: $_3zxoftwjjdxo76dp.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_gbq5vb100jdxo7763.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_akx2d9wsjdxo76fa.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_4m71sgzzjdxo7760 = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_b50aqly7jdxo76rd.defaulted('focusManager', $_9rf2v1zrjdxo774z.dom()),
        $_8mqb5kz6jdxo7708.output('handler', me),
        $_8mqb5kz6jdxo7708.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_4m71sgzzjdxo7760.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_d2m63by4jdxo76qi.derive(optFocusIn.map(function (focusIn) {
        return $_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_6za9awwyjdxo76hk.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_d29yptzqjdxo774t = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_akx2d9wsjdxo76fa.reverse(values.slice(0, index));
    var after = $_akx2d9wsjdxo76fa.reverse(values.slice(index + 1));
    return $_akx2d9wsjdxo76fa.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_akx2d9wsjdxo76fa.reverse(values.slice(0, index));
    return $_akx2d9wsjdxo76fa.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_akx2d9wsjdxo76fa.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_akx2d9wsjdxo76fa.find(after, predicate);
  };
  var $_ggu58101jdxo7769 = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_agog1j104jdxo776s = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_16z8u3wzjdxo76ho.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_agog1j104jdxo776s.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_agog1j104jdxo776s.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_27taa9x0jdxo76ht.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_27taa9x0jdxo76ht.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_das13dxjjdxo76lp.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_agog1j104jdxo776s.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_agog1j104jdxo776s.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_8alt2yxfjdxo76l3.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_dkhdpfxrjdxo76n9.has(element, 'style') && $_cq9z8kwvjdxo76h5.trim($_dkhdpfxrjdxo76n9.get(element, 'style')) === '') {
      $_dkhdpfxrjdxo76n9.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_dkhdpfxrjdxo76n9.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_dkhdpfxrjdxo76n9.remove : $_dkhdpfxrjdxo76n9.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_agog1j104jdxo776s.isSupported(sourceDom) && $_agog1j104jdxo776s.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_bc2oaqxkjdxo76lx.isElement(source) || !$_bc2oaqxkjdxo76lx.isElement(destination))
      return;
    $_akx2d9wsjdxo76fa.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_8vvxr8103jdxo776g = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_16z8u3wzjdxo76ho.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_agog1j104jdxo776s.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_8vvxr8103jdxo776g.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_akx2d9wsjdxo76fa.foldl(properties, function (acc, property) {
        var val = $_8vvxr8103jdxo776g.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_das13dxjjdxo76lp.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_8vvxr8103jdxo776g.set(element, 'max-height', absMax + 'px');
  };
  var $_bmo94n102jdxo776d = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_b50aqly7jdxo76rd.option('onEscape'),
      $_b50aqly7jdxo76rd.option('onEnter'),
      $_b50aqly7jdxo76rd.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_b50aqly7jdxo76rd.defaulted('firstTabstop', 0),
      $_b50aqly7jdxo76rd.defaulted('useTabstopAt', $_3zxoftwjjdxo76dp.constant(true)),
      $_b50aqly7jdxo76rd.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_dxlqnlzxjdxo775u.closest(element, sel);
      }).getOr(element);
      return $_bmo94n102jdxo776d.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_fnwj0qzvjdxo775p.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_akx2d9wsjdxo76fa.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_dxlqnlzxjdxo775u.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_fnwj0qzvjdxo775p.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_akx2d9wsjdxo76fa.findIndex(tabstops, $_3zxoftwjjdxo76dp.curry($_fpx5cox9jdxo76k0.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_ggu58101jdxo7769.cyclePrev : $_ggu58101jdxo7769.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_ggu58101jdxo7769.cycleNext : $_ggu58101jdxo7769.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_3zxoftwjjdxo76dp.constant([
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
      ]), goBackwards),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB()), goForwards),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ESCAPE()), exit),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isNotShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER())
      ]), execute)
    ]);
    var getEvents = $_3zxoftwjjdxo76dp.constant({});
    var getApis = $_3zxoftwjjdxo76dp.constant({});
    return $_d29yptzqjdxo774t.typical(schema, $_1hljqoyjjdxo76vh.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_ataku7zojdxo774b = { create: create$2 };

  var AcyclicType = $_ataku7zojdxo774b.create($_b50aqly7jdxo76rd.state('cyclic', $_3zxoftwjjdxo76dp.constant(false)));

  var CyclicType = $_ataku7zojdxo774b.create($_b50aqly7jdxo76rd.state('cyclic', $_3zxoftwjjdxo76dp.constant(true)));

  var inside = function (target) {
    return $_bc2oaqxkjdxo76lx.name(target) === 'input' && $_dkhdpfxrjdxo76n9.get(target, 'type') !== 'radio' || $_bc2oaqxkjdxo76lx.name(target) === 'textarea';
  };
  var $_amigzl108jdxo777c = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_76m9anwgjdxo76c4.dispatch(component, focused, $_99sq1cwhjdxo76d0.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_amigzl108jdxo777c.inside(focused) && $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_b7ljas109jdxo777n = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_b50aqly7jdxo76rd.defaulted('execute', $_b7ljas109jdxo777n.defaultExecute),
    $_b50aqly7jdxo76rd.defaulted('useSpace', false),
    $_b50aqly7jdxo76rd.defaulted('useEnter', true),
    $_b50aqly7jdxo76rd.defaulted('useControlEnter', false),
    $_b50aqly7jdxo76rd.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_amigzl108jdxo777c.inside(component.element()) ? $_20hbz0zpjdxo774q.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_20hbz0zpjdxo774q.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_20hbz0zpjdxo774q.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isControl,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_3zxoftwjjdxo76dp.constant({});
  var getApis = $_3zxoftwjjdxo76dp.constant({});
  var ExecutionType = $_d29yptzqjdxo774t.typical(schema$1, $_1hljqoyjjdxo76vh.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_3zxoftwjjdxo76dp.constant(numRows),
        numColumns: $_3zxoftwjjdxo76dp.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_3zxoftwjjdxo76dp.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_dqgwde10bjdxo7780 = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_8vvxr8103jdxo776g.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_ghg0t10djdxo778b = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_ghg0t10djdxo778b.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_ghg0t10djdxo778b.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_90ifcw10cjdxo7787 = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_39twflx4jdxo76ji.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_akx2d9wsjdxo76fa.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_bm3nhz10fjdxo778l = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_8vvxr8103jdxo776g.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_3zxoftwjjdxo76dp.curry($_8vvxr8103jdxo776g.set, element, property, initial);
    var on = $_3zxoftwjjdxo76dp.curry($_8vvxr8103jdxo776g.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_gcc1cs10gjdxo778q = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_gcc1cs10gjdxo778q.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_3zxoftwjjdxo76dp.curry($_fpx5cox9jdxo76k0.eq, current);
    var candidates = $_fnwj0qzvjdxo775p.descendants(container, selector);
    var visible = $_akx2d9wsjdxo76fa.filter(candidates, $_gcc1cs10gjdxo778q.isVisible);
    return $_bm3nhz10fjdxo778l.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_akx2d9wsjdxo76fa.findIndex(elements, function (elem) {
      return $_fpx5cox9jdxo76k0.eq(target, elem);
    });
  };
  var $_bfmhtc10ejdxo778c = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_cqncgczujdxo775n.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_3zxoftwjjdxo76dp.constant(oldRow),
        column: $_3zxoftwjjdxo76dp.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_cqncgczujdxo775n.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_cqncgczujdxo775n.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_3zxoftwjjdxo76dp.constant(newRow),
        column: $_3zxoftwjjdxo76dp.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_9jqsbl10hjdxo778v = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_b50aqly7jdxo76rd.strict('selector'),
    $_b50aqly7jdxo76rd.defaulted('execute', $_b7ljas109jdxo777n.defaultExecute),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onEscape'),
    $_b50aqly7jdxo76rd.defaulted('captureTab', false),
    $_8mqb5kz6jdxo7708.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_dxlqnlzxjdxo775u.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_dxlqnlzxjdxo775u.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_bfmhtc10ejdxo778c.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_9jqsbl10hjdxo778v.cycleLeft);
  var moveRight = doMove($_9jqsbl10hjdxo778v.cycleRight);
  var moveNorth = doMove($_9jqsbl10hjdxo778v.cycleUp);
  var moveSouth = doMove($_9jqsbl10hjdxo778v.cycleDown);
  var getRules$1 = $_3zxoftwjjdxo76dp.constant([
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.LEFT()), $_90ifcw10cjdxo7787.west(moveLeft, moveRight)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.RIGHT()), $_90ifcw10cjdxo7787.east(moveLeft, moveRight)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.UP()), $_90ifcw10cjdxo7787.north(moveNorth)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.DOWN()), $_90ifcw10cjdxo7787.south(moveSouth)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
      $_gbq5vb100jdxo7763.isShift,
      $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
    ]), handleTab),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
      $_gbq5vb100jdxo7763.isNotShift,
      $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
    ]), handleTab),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ESCAPE()), doEscape),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE().concat($_20hbz0zpjdxo774q.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_3zxoftwjjdxo76dp.constant({});
  var getApis$1 = {};
  var FlatgridType = $_d29yptzqjdxo774t.typical(schema$2, $_dqgwde10bjdxo7780.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_bfmhtc10ejdxo778c.locateVisible(container, current, selector, $_3zxoftwjjdxo76dp.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_cqncgczujdxo775n.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_81ksjr10jjdxo779a = { horizontal: horizontal };

  var schema$3 = [
    $_b50aqly7jdxo76rd.strict('selector'),
    $_b50aqly7jdxo76rd.defaulted('getInitial', Option.none),
    $_b50aqly7jdxo76rd.defaulted('execute', $_b7ljas109jdxo777n.defaultExecute),
    $_b50aqly7jdxo76rd.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_dxlqnlzxjdxo775u.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_dxlqnlzxjdxo775u.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_81ksjr10jjdxo779a.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_81ksjr10jjdxo779a.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.LEFT().concat($_20hbz0zpjdxo774q.UP())), doMove$1($_90ifcw10cjdxo7787.west(moveLeft$1, moveRight$1))),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.RIGHT().concat($_20hbz0zpjdxo774q.DOWN())), doMove$1($_90ifcw10cjdxo7787.east(moveLeft$1, moveRight$1))),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER()), execute$2),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_3zxoftwjjdxo76dp.constant({});
  var getApis$2 = $_3zxoftwjjdxo76dp.constant({});
  var FlowType = $_d29yptzqjdxo774t.typical(schema$3, $_1hljqoyjjdxo76vh.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_39twflx4jdxo76ji.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_cqncgczujdxo775n.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_cqncgczujdxo775n.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_cqncgczujdxo775n.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_cqncgczujdxo775n.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_cqncgczujdxo775n.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_cqncgczujdxo775n.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_fy7q9v10ljdxo779x = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_b50aqly7jdxo76rd.strictObjOf('selectors', [
      $_b50aqly7jdxo76rd.strict('row'),
      $_b50aqly7jdxo76rd.strict('cell')
    ]),
    $_b50aqly7jdxo76rd.defaulted('cycles', true),
    $_b50aqly7jdxo76rd.defaulted('previousSelector', Option.none),
    $_b50aqly7jdxo76rd.defaulted('execute', $_b7ljas109jdxo777n.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_dxlqnlzxjdxo775u.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_8fjsagytjdxo76x0.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_akx2d9wsjdxo76fa.map(rows, function (row) {
      return $_fnwj0qzvjdxo775p.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_dxlqnlzxjdxo775u.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_fnwj0qzvjdxo775p.descendants(inRow, matrixConfig.selectors().cell());
        return $_bfmhtc10ejdxo778c.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_fnwj0qzvjdxo775p.descendants(element, matrixConfig.selectors().row());
          return $_bfmhtc10ejdxo778c.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_fy7q9v10ljdxo779x.cycleLeft, $_fy7q9v10ljdxo779x.moveLeft);
  var moveRight$3 = doMove$2($_fy7q9v10ljdxo779x.cycleRight, $_fy7q9v10ljdxo779x.moveRight);
  var moveNorth$1 = doMove$2($_fy7q9v10ljdxo779x.cycleUp, $_fy7q9v10ljdxo779x.moveUp);
  var moveSouth$1 = doMove$2($_fy7q9v10ljdxo779x.cycleDown, $_fy7q9v10ljdxo779x.moveDown);
  var getRules$3 = $_3zxoftwjjdxo76dp.constant([
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.LEFT()), $_90ifcw10cjdxo7787.west(moveLeft$3, moveRight$3)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.RIGHT()), $_90ifcw10cjdxo7787.east(moveLeft$3, moveRight$3)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.UP()), $_90ifcw10cjdxo7787.north(moveNorth$1)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.DOWN()), $_90ifcw10cjdxo7787.south(moveSouth$1)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE().concat($_20hbz0zpjdxo774q.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_3zxoftwjjdxo76dp.constant({});
  var getApis$3 = $_3zxoftwjjdxo76dp.constant({});
  var MatrixType = $_d29yptzqjdxo774t.typical(schema$4, $_1hljqoyjjdxo76vh.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_b50aqly7jdxo76rd.strict('selector'),
    $_b50aqly7jdxo76rd.defaulted('execute', $_b7ljas109jdxo777n.defaultExecute),
    $_b50aqly7jdxo76rd.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_dxlqnlzxjdxo775u.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_81ksjr10jjdxo779a.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_81ksjr10jjdxo779a.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_90ifcw10cjdxo7787.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_90ifcw10cjdxo7787.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_3zxoftwjjdxo76dp.constant([
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.UP()), $_90ifcw10cjdxo7787.move(moveUp$1)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.DOWN()), $_90ifcw10cjdxo7787.move(moveDown$1)),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
      $_gbq5vb100jdxo7763.isShift,
      $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
    ]), fireShiftTab),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
      $_gbq5vb100jdxo7763.isNotShift,
      $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
    ]), fireTab),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER()), execute$4),
    $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_3zxoftwjjdxo76dp.constant({});
  var getApis$4 = $_3zxoftwjjdxo76dp.constant({});
  var MenuType = $_d29yptzqjdxo774t.typical(schema$5, $_1hljqoyjjdxo76vh.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onSpace'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onEnter'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onShiftEnter'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onLeft'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onRight'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onTab'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onShiftTab'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onUp'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onDown'),
    $_8mqb5kz6jdxo7708.onKeyboardHandler('onEscape'),
    $_b50aqly7jdxo76rd.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE()), executeInfo.onSpace()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isNotShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER())
      ]), executeInfo.onEnter()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
      ]), executeInfo.onShiftTab()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.and([
        $_gbq5vb100jdxo7763.isNotShift,
        $_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.TAB())
      ]), executeInfo.onTab()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.UP()), executeInfo.onUp()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.DOWN()), executeInfo.onDown()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.LEFT()), executeInfo.onLeft()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.RIGHT()), executeInfo.onRight()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.SPACE()), executeInfo.onSpace()),
      $_4m71sgzzjdxo7760.rule($_gbq5vb100jdxo7763.inSet($_20hbz0zpjdxo774q.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_3zxoftwjjdxo76dp.constant({});
  var getApis$5 = $_3zxoftwjjdxo76dp.constant({});
  var SpecialType = $_d29yptzqjdxo774t.typical(schema$6, $_1hljqoyjjdxo76vh.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_flwn5gzmjdxo7743 = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_50ks2ly2jdxo76pg.createModes({
    branchKey: 'mode',
    branches: $_flwn5gzmjdxo7743,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_futrxxxsjdxo76nn.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_dqgwde10bjdxo7780
  });

  var field$1 = function (name, forbidden) {
    return $_b50aqly7jdxo76rd.defaultedObjOf(name, {}, $_akx2d9wsjdxo76fa.map(forbidden, function (f) {
      return $_b50aqly7jdxo76rd.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_b50aqly7jdxo76rd.state('dump', $_3zxoftwjjdxo76dp.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_4fyf3q10ojdxo77aj = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_7idmy910rjdxo77b6 = { generate: generate$1 };

  var premadeTag = $_7idmy910rjdxo77b6.generate('alloy-premade');
  var apiConfig = $_7idmy910rjdxo77b6.generate('api');
  var premade = function (comp) {
    return $_futrxxxsjdxo76nn.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_futrxxxsjdxo76nn.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_eiss3xygjdxo76u4.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_ebapij10qjdxo77b0 = {
    apiConfig: $_3zxoftwjjdxo76dp.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_1mkbevxwjdxo76om.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_b50aqly7jdxo76rd.defaulted('factory', { sketch: $_3zxoftwjjdxo76dp.identity });
  var fSchema = $_b50aqly7jdxo76rd.defaulted('schema', []);
  var fName = $_b50aqly7jdxo76rd.strict('name');
  var fPname = $_b50aqly7jdxo76rd.field('pname', 'pname', $_d4rkwuy8jdxo76rn.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_7idmy910rjdxo77b6.generate(typeSpec.name) + '>';
  }), $_28d4pyyejdxo76tn.anyValue());
  var fDefaults = $_b50aqly7jdxo76rd.defaulted('defaults', $_3zxoftwjjdxo76dp.constant({}));
  var fOverrides = $_b50aqly7jdxo76rd.defaulted('overrides', $_3zxoftwjjdxo76dp.constant({}));
  var requiredSpec = $_28d4pyyejdxo76tn.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_28d4pyyejdxo76tn.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_28d4pyyejdxo76tn.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_28d4pyyejdxo76tn.objOf([
    fFactory,
    fSchema,
    fName,
    $_b50aqly7jdxo76rd.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_3zxoftwjjdxo76dp.identity, $_3zxoftwjjdxo76dp.identity, $_3zxoftwjjdxo76dp.identity, $_3zxoftwjjdxo76dp.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_28d4pyyejdxo76tn.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_g9pshf10vjdxo77cn = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_3zxoftwjjdxo76dp.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_1mkbevxwjdxo76om.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_akx2d9wsjdxo76fa.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_3zxoftwjjdxo76dp.constant(compSpec));
    return $_futrxxxsjdxo76nn.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_27taa9x0jdxo76ht.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_82khs3ydjdxo76tj.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_3zxoftwjjdxo76dp.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_futrxxxsjdxo76nn.readOptFrom(value, 'components').getOr([]);
      var substituted = $_akx2d9wsjdxo76fa.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_6za9awwyjdxo76hk.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_akx2d9wsjdxo76fa.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_3zxoftwjjdxo76dp.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_27taa9x0jdxo76ht.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_27taa9x0jdxo76ht.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_82khs3ydjdxo76tj.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_4pj37810wjdxo77d3 = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_3zxoftwjjdxo76dp.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_6za9awwyjdxo76hk.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_futrxxxsjdxo76nn.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_akx2d9wsjdxo76fa.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_4pj37810wjdxo77d3.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_3zxoftwjjdxo76dp.constant(combine(detail, data, partSpec[$_g9pshf10vjdxo77cn.original()]()));
      }, function (data) {
        internals[data.pname()] = $_4pj37810wjdxo77d3.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_4pj37810wjdxo77d3.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_akx2d9wsjdxo76fa.map(units, function (u) {
            return data.factory().sketch($_6za9awwyjdxo76hk.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_3zxoftwjjdxo76dp.constant(internals),
      externals: $_3zxoftwjjdxo76dp.constant(externals)
    };
  };
  var $_bjmx7k10ujdxo77c2 = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_akx2d9wsjdxo76fa.each(parts, function (part) {
      $_g9pshf10vjdxo77cn.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_28d4pyyejdxo76tn.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_28d4pyyejdxo76tn.objOf(np.schema()), config);
          return $_6za9awwyjdxo76hk.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_4pj37810wjdxo77d3.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_4pj37810wjdxo77d3.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_akx2d9wsjdxo76fa.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_b50aqly7jdxo76rd.strictObjOf(data.name(), data.schema().concat([$_8mqb5kz6jdxo7708.snapshot($_g9pshf10vjdxo77cn.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_akx2d9wsjdxo76fa.map(parts, $_g9pshf10vjdxo77cn.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_bjmx7k10ujdxo77c2.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_4pj37810wjdxo77d3.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_akx2d9wsjdxo76fa.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_27taa9x0jdxo76ht.map(r, $_3zxoftwjjdxo76dp.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_27taa9x0jdxo76ht.map(detail.partUids(), function (pUid, k) {
      return $_3zxoftwjjdxo76dp.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_akx2d9wsjdxo76fa.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_27taa9x0jdxo76ht.map(r, $_3zxoftwjjdxo76dp.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_futrxxxsjdxo76nn.wrapAll($_akx2d9wsjdxo76fa.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_b50aqly7jdxo76rd.field('partUids', 'partUids', $_d4rkwuy8jdxo76rn.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_28d4pyyejdxo76tn.anyValue());
  };
  var $_6ew6p910tjdxo77bf = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_464sf710yjdxo77dx = {
    prefix: $_3zxoftwjjdxo76dp.constant(prefix$1),
    idAttr: $_3zxoftwjjdxo76dp.constant(idAttr)
  };

  var prefix$2 = $_464sf710yjdxo77dx.prefix();
  var idAttr$1 = $_464sf710yjdxo77dx.idAttr();
  var write = function (label, elem) {
    var id = $_7idmy910rjdxo77b6.generate(prefix$2 + label);
    $_dkhdpfxrjdxo76n9.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_dkhdpfxrjdxo76n9.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_bc2oaqxkjdxo76lx.isElement(elem) ? $_dkhdpfxrjdxo76n9.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_dxlqnlzxjdxo775u.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_7idmy910rjdxo77b6.generate(prefix);
  };
  var revoke = function (elem) {
    $_dkhdpfxrjdxo76n9.remove(elem, idAttr$1);
  };
  var $_9376vv10xjdxo77dm = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_3zxoftwjjdxo76dp.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_8mqb5kz6jdxo7708.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_b50aqly7jdxo76rd.strictObjOf('parts', $_akx2d9wsjdxo76fa.flatten([
      $_akx2d9wsjdxo76fa.map(partNames, $_b50aqly7jdxo76rd.strict),
      $_akx2d9wsjdxo76fa.map(optPartNames, function (optPart) {
        return $_b50aqly7jdxo76rd.defaulted(optPart, $_4pj37810wjdxo77d3.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_b50aqly7jdxo76rd.state('partUids', function (spec) {
      if (!$_futrxxxsjdxo76nn.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_82khs3ydjdxo76tj.stringify(spec, null, 2));
      }
      var uids = $_27taa9x0jdxo76ht.map(spec.parts, function (v, k) {
        return $_futrxxxsjdxo76nn.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_b50aqly7jdxo76rd.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_b50aqly7jdxo76rd.strict('uid'),
      $_b50aqly7jdxo76rd.defaulted('dom', {}),
      $_b50aqly7jdxo76rd.defaulted('components', []),
      $_8mqb5kz6jdxo7708.snapshot('originalSpec'),
      $_b50aqly7jdxo76rd.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_28d4pyyejdxo76tn.asRawOrDie(label + ' [SpecSchema]', $_28d4pyyejdxo76tn.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_28d4pyyejdxo76tn.asStructOrDie(label + ' [SpecSchema]', $_28d4pyyejdxo76tn.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_6za9awwyjdxo76hk.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_6za9awwyjdxo76hk.deepMerge(original, behaviours);
  };
  var $_y8p5710zjdxo77e2 = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_y8p5710zjdxo77e2.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_6za9awwyjdxo76hk.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_futrxxxsjdxo76nn.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_6ew6p910tjdxo77bf.schemas(partTypes);
    var partUidsSchema = $_6ew6p910tjdxo77bf.defaultUidsSchema(partTypes);
    var detail = $_y8p5710zjdxo77e2.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_6ew6p910tjdxo77bf.substitutes(owner, detail, partTypes);
    var components = $_6ew6p910tjdxo77bf.components(owner, detail, subs.internals());
    return $_6za9awwyjdxo76hk.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_futrxxxsjdxo76nn.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_6za9awwyjdxo76hk.deepMerge({ uid: $_9376vv10xjdxo77dm.generate('uid') }, spec);
  };
  var $_f07iyf10sjdxo77b9 = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strict('name'),
    $_b50aqly7jdxo76rd.strict('factory'),
    $_b50aqly7jdxo76rd.strict('configFields'),
    $_b50aqly7jdxo76rd.defaulted('apis', {}),
    $_b50aqly7jdxo76rd.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strict('name'),
    $_b50aqly7jdxo76rd.strict('factory'),
    $_b50aqly7jdxo76rd.strict('configFields'),
    $_b50aqly7jdxo76rd.strict('partFields'),
    $_b50aqly7jdxo76rd.defaulted('apis', {}),
    $_b50aqly7jdxo76rd.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_28d4pyyejdxo76tn.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_f07iyf10sjdxo77b9.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_27taa9x0jdxo76ht.map(config.apis, $_ebapij10qjdxo77b0.makeApi);
    var extraApis = $_27taa9x0jdxo76ht.map(config.extraApis, function (f, k) {
      return $_eiss3xygjdxo76u4.markAsExtraApi(f, k);
    });
    return $_6za9awwyjdxo76hk.deepMerge({
      name: $_3zxoftwjjdxo76dp.constant(config.name),
      partFields: $_3zxoftwjjdxo76dp.constant([]),
      configFields: $_3zxoftwjjdxo76dp.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_28d4pyyejdxo76tn.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_f07iyf10sjdxo77b9.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_6ew6p910tjdxo77bf.generate(config.name, config.partFields);
    var apis = $_27taa9x0jdxo76ht.map(config.apis, $_ebapij10qjdxo77b0.makeApi);
    var extraApis = $_27taa9x0jdxo76ht.map(config.extraApis, function (f, k) {
      return $_eiss3xygjdxo76u4.markAsExtraApi(f, k);
    });
    return $_6za9awwyjdxo76hk.deepMerge({
      name: $_3zxoftwjjdxo76dp.constant(config.name),
      partFields: $_3zxoftwjjdxo76dp.constant(config.partFields),
      configFields: $_3zxoftwjjdxo76dp.constant(config.configFields),
      sketch: sketch,
      parts: $_3zxoftwjjdxo76dp.constant(parts)
    }, apis, extraApis);
  };
  var $_g4su5h10pjdxo77aq = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_76m9anwgjdxo76c4.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_bx0iviwkjdxo76dy.detect().deviceType.isTouch() ? [$_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.tap(), onClick)] : [
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.click(), onClick),
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mousedown(), onMousedown)
    ];
    return $_d2m63by4jdxo76qi.derive($_akx2d9wsjdxo76fa.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_606itg110jdxo77ei = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_606itg110jdxo77ei.events(detail.action());
    var optType = $_futrxxxsjdxo76nn.readOptFrom(detail.dom(), 'attributes').bind($_futrxxxsjdxo76nn.readOpt('type'));
    var optTag = $_futrxxxsjdxo76nn.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_4fyf3q10ojdxo77aj.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_6za9awwyjdxo76hk.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_g4su5h10pjdxo77aq.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_b50aqly7jdxo76rd.defaulted('uid', undefined),
      $_b50aqly7jdxo76rd.strict('dom'),
      $_b50aqly7jdxo76rd.defaulted('components', []),
      $_4fyf3q10ojdxo77aj.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_b50aqly7jdxo76rd.option('action'),
      $_b50aqly7jdxo76rd.option('role'),
      $_b50aqly7jdxo76rd.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_9a14aqyhjdxo76ua.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.abort($_6a9crxwijdxo76dg.selectstart(), $_3zxoftwjjdxo76dp.constant(true))]);
  };
  var $_3123zk112jdxo77eu = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_50ks2ly2jdxo76pg.create({
    fields: [],
    name: 'unselecting',
    active: $_3123zk112jdxo77eu
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_akx2d9wsjdxo76fa.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_6za9awwyjdxo76hk.deepMerge(b, $_futrxxxsjdxo76nn.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_8alt2yxfjdxo76l3.fromHtml(html);
    var children = $_d65syzx3jdxo76iv.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_90tgw5xojdxo76mw.get(elem) };
    return $_6za9awwyjdxo76hk.deepMerge({
      tag: $_bc2oaqxkjdxo76lx.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_6za9awwyjdxo76hk.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_2262pk114jdxo77f3 = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_cq9z8kwvjdxo76h5.supplant(rawHtml, { prefix: $_4agqi1zejdxo7731.prefix() });
    return $_2262pk114jdxo77f3.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_46xflc113jdxo77ey = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_50ks2ly2jdxo76pg.derive([
      Toggling.config({
        toggleClass: $_4agqi1zejdxo7731.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_3nbnkpzdjdxo772w.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_46xflc113jdxo77ey.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_79e8p9zfjdxo7734 = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_azmwkp119jdxo77ga = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_bx0iviwkjdxo76dy.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_76m9anwgjdxo76c4.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_azmwkp119jdxo77ga.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_azmwkp119jdxo77ga.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_azmwkp119jdxo77ga.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_cs07zn118jdxo77g2 = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_3zxoftwjjdxo76dp.constant(changeEvent)
  };

  var platform = $_bx0iviwkjdxo76dy.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_g9pshf10vjdxo77cn.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.runActionExtra($_6a9crxwijdxo76dg.touchstart(), action, [detail])]);
        var mouseEvents = $_d2m63by4jdxo76qi.derive([
          $_d2m63by4jdxo76qi.runActionExtra($_6a9crxwijdxo76dg.mousedown(), action, [detail]),
          $_d2m63by4jdxo76qi.runActionExtra($_6a9crxwijdxo76dg.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_cs07zn118jdxo77g2.setToLedge);
  var redgePart = edgePart('right', $_cs07zn118jdxo77g2.setToRedge);
  var thumbPart = $_g9pshf10vjdxo77cn.required({
    name: 'thumb',
    defaults: $_3zxoftwjjdxo76dp.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_d2m63by4jdxo76qi.derive([
          $_d2m63by4jdxo76qi.redirectToPart($_6a9crxwijdxo76dg.touchstart(), detail, 'spectrum'),
          $_d2m63by4jdxo76qi.redirectToPart($_6a9crxwijdxo76dg.touchmove(), detail, 'spectrum'),
          $_d2m63by4jdxo76qi.redirectToPart($_6a9crxwijdxo76dg.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_g9pshf10vjdxo77cn.required({
    schema: [$_b50aqly7jdxo76rd.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_cs07zn118jdxo77g2.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchstart(), moveToX),
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchmove(), moveToX)
      ]);
      var mouseEvents = $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mousedown(), moveToX),
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_50ks2ly2jdxo76pg.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_cs07zn118jdxo77g2.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_cs07zn118jdxo77g2.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_aqcjs511djdxo77gp = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_d2m63by4jdxo76qi.runOnAttached(function (comp, se) {
        $_aqcjs511djdxo77gp.onLoad(comp, repConfig, repState);
      }),
      $_d2m63by4jdxo76qi.runOnDetached(function (comp, se) {
        $_aqcjs511djdxo77gp.onUnload(comp, repConfig, repState);
      })
    ] : [$_158656y3jdxo76pu.loadEvent(repConfig, repState, $_aqcjs511djdxo77gp.onLoad)];
    return $_d2m63by4jdxo76qi.derive(es);
  };
  var $_7mmh2111cjdxo77gn = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_3n133d11gjdxo77h4 = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_futrxxxsjdxo76nn.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_b50aqly7jdxo76rd.option('initialValue'),
    $_b50aqly7jdxo76rd.strict('getFallbackEntry'),
    $_b50aqly7jdxo76rd.strict('getDataKey'),
    $_b50aqly7jdxo76rd.strict('setData'),
    $_8mqb5kz6jdxo7708.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_3n133d11gjdxo77h4.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_b50aqly7jdxo76rd.strict('getValue'),
    $_b50aqly7jdxo76rd.defaulted('setValue', $_3zxoftwjjdxo76dp.noop),
    $_b50aqly7jdxo76rd.option('initialValue'),
    $_8mqb5kz6jdxo7708.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_3zxoftwjjdxo76dp.noop,
      state: $_1hljqoyjjdxo76vh.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_b50aqly7jdxo76rd.option('initialValue'),
    $_8mqb5kz6jdxo7708.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_3n133d11gjdxo77h4.memory
    })
  ];

  var RepresentSchema = [
    $_b50aqly7jdxo76rd.defaultedOf('store', { mode: 'memory' }, $_28d4pyyejdxo76tn.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_8mqb5kz6jdxo7708.onHandler('onSetValue'),
    $_b50aqly7jdxo76rd.defaulted('resetOnDom', false)
  ];

  var me = $_50ks2ly2jdxo76pg.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_7mmh2111cjdxo77gn,
    apis: $_aqcjs511djdxo77gp,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_3n133d11gjdxo77h4
  });

  var isTouch$2 = $_bx0iviwkjdxo76dy.detect().deviceType.isTouch();
  var SliderSchema = [
    $_b50aqly7jdxo76rd.strict('min'),
    $_b50aqly7jdxo76rd.strict('max'),
    $_b50aqly7jdxo76rd.defaulted('stepSize', 1),
    $_b50aqly7jdxo76rd.defaulted('onChange', $_3zxoftwjjdxo76dp.noop),
    $_b50aqly7jdxo76rd.defaulted('onInit', $_3zxoftwjjdxo76dp.noop),
    $_b50aqly7jdxo76rd.defaulted('onDragStart', $_3zxoftwjjdxo76dp.noop),
    $_b50aqly7jdxo76rd.defaulted('onDragEnd', $_3zxoftwjjdxo76dp.noop),
    $_b50aqly7jdxo76rd.defaulted('snapToGrid', false),
    $_b50aqly7jdxo76rd.option('snapStart'),
    $_b50aqly7jdxo76rd.strict('getInitialValue'),
    $_4fyf3q10ojdxo77aj.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_b50aqly7jdxo76rd.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_b50aqly7jdxo76rd.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_8vvxr8103jdxo776g.set(element, 'max-width', absMax + 'px');
  };
  var $_9ds5wg11kjdxo77hy = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_bx0iviwkjdxo76dy.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_6ew6p910tjdxo77bf.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_6ew6p910tjdxo77bf.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_6ew6p910tjdxo77bf.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_6ew6p910tjdxo77bf.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_9ds5wg11kjdxo77hy.get(thumb.element()) / 2;
      $_8vvxr8103jdxo776g.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_8vvxr8103jdxo776g.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive($_akx2d9wsjdxo76fa.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_6ew6p910tjdxo77bf.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_3zxoftwjjdxo76dp.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_4fyf3q10ojdxo77aj.get(detail.sliderBehaviours())),
      events: $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.run($_cs07zn118jdxo77g2.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_d2m63by4jdxo76qi.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_vfzx611jjdxo77hj = { sketch: sketch$1 };

  var Slider = $_g4su5h10pjdxo77aq.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_vfzx611jjdxo77hj.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_79e8p9zfjdxo7734.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_3dqz3h11ljdxo77i1 = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_8vvxr8103jdxo776g.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_8vvxr8103jdxo776g.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_46xflc113jdxo77ey.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_46xflc113jdxo77ey.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({ toggleClass: $_4agqi1zejdxo7731.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_46xflc113jdxo77ey.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({ toggleClass: $_4agqi1zejdxo7731.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_50ks2ly2jdxo76pg.derive([$_3nbnkpzdjdxo772w.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_3dqz3h11ljdxo77i1.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_1zyjn8115jdxo77fh = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strict('getInitialValue'),
    $_b50aqly7jdxo76rd.strict('onChange'),
    $_b50aqly7jdxo76rd.strict('category'),
    $_b50aqly7jdxo76rd.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_28d4pyyejdxo76tn.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_4agqi1zejdxo7731.resolve('slider-' + spec.category + '-size-container'),
          $_4agqi1zejdxo7731.resolve('slider'),
          $_4agqi1zejdxo7731.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_50ks2ly2jdxo76pg.derive([$_3nbnkpzdjdxo772w.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_46xflc113jdxo77ey.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({ toggleClass: $_4agqi1zejdxo7731.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_c6d8ci11njdxo77i4 = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_16z8u3wzjdxo76ho.isFunction(isRoot) ? isRoot : $_3zxoftwjjdxo76dp.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_8alt2yxfjdxo76l3.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_738lba11pjdxo77io = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_akx2d9wsjdxo76fa.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_bc2oaqxkjdxo76lx.isElement(rawStart) ? Option.some(rawStart) : $_d65syzx3jdxo76iv.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_738lba11pjdxo77io.closest(start, function (elem) {
        return $_8vvxr8103jdxo776g.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_8vvxr8103jdxo776g.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_8alt2yxfjdxo76l3.fromDom(node);
    var root = $_8alt2yxfjdxo76l3.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_fpx5cox9jdxo76k0.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_akx2d9wsjdxo76fa.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_8slx8511ojdxo77ic = {
    candidates: $_3zxoftwjjdxo76dp.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_8slx8511ojdxo77ic.candidates();
  var makeSlider$1 = function (spec) {
    return $_c6d8ci11njdxo77i4.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_46xflc113jdxo77ey.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_46xflc113jdxo77ey.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_8slx8511ojdxo77ic.apply(editor, value);
      },
      getInitialValue: function () {
        return $_8slx8511ojdxo77ic.get(editor);
      }
    };
    return $_3dqz3h11ljdxo77i1.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_3jvxmy11mjdxo77i2 = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_futrxxxsjdxo76nn.hasKey(spec, 'uid') ? spec.uid : $_9376vv10xjdxo77dm.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_6za9awwyjdxo76hk.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_7ybfmv11rjdxo77j8 = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_1liel211ujdxo77jw = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_ezhgzk11vjdxo77jy = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_95e7xpxbjdxo76kd.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_95e7xpxbjdxo76kd.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_95e7xpxbjdxo76kd.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_95e7xpxbjdxo76kd.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_95e7xpxbjdxo76kd.getOrDie('atob');
    return f(base64);
  };
  var $_1ta6vz120jdxo77k9 = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_1ta6vz120jdxo77k9.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_1liel211ujdxo77jw.create($_ezhgzk11vjdxo77jy.getWidth(image), $_ezhgzk11vjdxo77jy.getHeight(image));
      context = $_1liel211ujdxo77jw.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_7j370511tjdxo77jk = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_7j370511tjdxo77jk.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_7j370511tjdxo77jk.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_7j370511tjdxo77jk.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_7j370511tjdxo77jk.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_7j370511tjdxo77jk.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_7j370511tjdxo77jk.uriToBlob(uri));
  };
  var $_cgbt3j11sjdxo77jf = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_cgbt3j11sjdxo77jf.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_7idmy910rjdxo77b6.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_7ybfmv11rjdxo77j8.record({
      dom: pickerDom,
      events: $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.cutter($_6a9crxwijdxo76dg.click()),
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_46xflc113jdxo77ey.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_d7l2ms11qjdxo77iu = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_7hetc4123jdxo77ku = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_7hetc4123jdxo77ku.get(link);
    var url = $_dkhdpfxrjdxo76n9.get(link, 'href');
    var title = $_dkhdpfxrjdxo76n9.get(link, 'title');
    var target = $_dkhdpfxrjdxo76n9.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_dkhdpfxrjdxo76n9.get(link, 'href');
    var prevText = $_7hetc4123jdxo77ku.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_3zxoftwjjdxo76dp.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_3zxoftwjjdxo76dp.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_dkhdpfxrjdxo76n9.setAll(link, attrs);
        text.each(function (newText) {
          $_7hetc4123jdxo77ku.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_8alt2yxfjdxo76l3.fromDom(editor.selection.getStart());
    return $_dxlqnlzxjdxo775u.closest(start, 'a');
  };
  var $_f5tf0t122jdxo77kj = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_bx0iviwkjdxo76dy.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_3zxoftwjjdxo76dp.apply;
    wrapper(f, editor);
  };
  var $_b1bwk0124jdxo77kv = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_d2m63by4jdxo76qi.derive(eventHandlers);
    return $_50ks2ly2jdxo76pg.create({
      fields: [$_b50aqly7jdxo76rd.strict('enabled')],
      name: name,
      active: { events: $_3zxoftwjjdxo76dp.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_3zxoftwjjdxo76dp.constant({}),
        initialConfig: {},
        state: $_50ks2ly2jdxo76pg.noState()
      }
    };
  };
  var $_bykmte126jdxo77ln = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_gajejj128jdxo77lv = { getCurrent: getCurrent };

  var ComposeSchema = [$_b50aqly7jdxo76rd.strict('find')];

  var Composing = $_50ks2ly2jdxo76pg.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_gajejj128jdxo77lv
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_6za9awwyjdxo76hk.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_4fyf3q10ojdxo77aj.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_g4su5h10pjdxo77aq.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_b50aqly7jdxo76rd.defaulted('components', []),
      $_4fyf3q10ojdxo77aj.field('containerBehaviours', []),
      $_b50aqly7jdxo76rd.defaulted('events', {}),
      $_b50aqly7jdxo76rd.defaulted('domModification', {}),
      $_b50aqly7jdxo76rd.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_4fyf3q10ojdxo77aj.get(detail.dataBehaviours())),
      events: $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_g4su5h10pjdxo77aq.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_b50aqly7jdxo76rd.strict('uid'),
      $_b50aqly7jdxo76rd.strict('dom'),
      $_b50aqly7jdxo76rd.strict('getInitialValue'),
      $_4fyf3q10ojdxo77aj.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_972bu12ejdxo77mp = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_b50aqly7jdxo76rd.option('data'),
    $_b50aqly7jdxo76rd.defaulted('inputAttributes', {}),
    $_b50aqly7jdxo76rd.defaulted('inputStyles', {}),
    $_b50aqly7jdxo76rd.defaulted('type', 'input'),
    $_b50aqly7jdxo76rd.defaulted('tag', 'input'),
    $_b50aqly7jdxo76rd.defaulted('inputClasses', []),
    $_8mqb5kz6jdxo7708.onHandler('onSetValue'),
    $_b50aqly7jdxo76rd.defaulted('styles', {}),
    $_b50aqly7jdxo76rd.option('placeholder'),
    $_b50aqly7jdxo76rd.defaulted('eventOrder', {}),
    $_4fyf3q10ojdxo77aj.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_b50aqly7jdxo76rd.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_972bu12ejdxo77mp.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_972bu12ejdxo77mp.get(input.element());
            if (current !== data) {
              $_972bu12ejdxo77mp.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_3zxoftwjjdxo76dp.noop : function (component) {
          var input = component.element();
          var value = $_972bu12ejdxo77mp.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_4fyf3q10ojdxo77aj.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_6za9awwyjdxo76hk.deepMerge($_futrxxxsjdxo76nn.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_7yulpm12djdxo77me = {
    schema: $_3zxoftwjjdxo76dp.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_7yulpm12djdxo77me.dom(detail),
      components: [],
      behaviours: $_7yulpm12djdxo77me.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_g4su5h10pjdxo77aq.single({
    name: 'Input',
    configFields: $_7yulpm12djdxo77me.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_9a14aqyhjdxo76ua.nu({
      attributes: $_futrxxxsjdxo76nn.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_8bgo2612gjdxo77ms = { exhibit: exhibit$3 };

  var TabstopSchema = [$_b50aqly7jdxo76rd.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_50ks2ly2jdxo76pg.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_8bgo2612gjdxo77ms
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_7ybfmv11rjdxo77j8.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_76m9anwgjdxo76c4.emit(input, $_6a9crxwijdxo76dg.input());
      },
      inputBehaviours: $_50ks2ly2jdxo76pg.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_7ybfmv11rjdxo77j8.record(Button.sketch({
      dom: $_46xflc113jdxo77ey.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_50ks2ly2jdxo76pg.derive([
          Toggling.config({ toggleClass: $_4agqi1zejdxo7731.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_bykmte126jdxo77ln.config(clearInputBehaviour, [$_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_50ccd2125jdxo77l0 = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_akx2d9wsjdxo76fa.contains(nativeDisabled, $_bc2oaqxkjdxo76lx.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_dkhdpfxrjdxo76n9.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_dkhdpfxrjdxo76n9.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_dkhdpfxrjdxo76n9.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_dkhdpfxrjdxo76n9.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_euw48pynjdxo76w6.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_euw48pynjdxo76w6.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_4rp0jw12ljdxo77o3 = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_9a14aqyhjdxo76ua.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_akx2d9wsjdxo76fa.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_d2m63by4jdxo76qi.derive([
      $_d2m63by4jdxo76qi.abort($_99sq1cwhjdxo76d0.execute(), function (component, simulatedEvent) {
        return $_4rp0jw12ljdxo77o3.isDisabled(component, disableConfig, disableState);
      }),
      $_158656y3jdxo76pu.loadEvent(disableConfig, disableState, $_4rp0jw12ljdxo77o3.onLoad)
    ]);
  };
  var $_bnpjr812kjdxo77nz = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_b50aqly7jdxo76rd.defaulted('disabled', false),
    $_b50aqly7jdxo76rd.option('disableClass')
  ];

  var Disabling = $_50ks2ly2jdxo76pg.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_bnpjr812kjdxo77nz,
    apis: $_4rp0jw12ljdxo77o3
  });

  var owner$1 = 'form';
  var schema$9 = [$_4fyf3q10ojdxo77aj.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_6ew6p910tjdxo77bf.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_akx2d9wsjdxo76fa.map(partNames, function (n) {
      return $_g9pshf10vjdxo77cn.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_f07iyf10sjdxo77b9.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_6za9awwyjdxo76hk.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_6ew6p910tjdxo77bf.getAllParts(form, detail);
              return $_27taa9x0jdxo76ht.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_27taa9x0jdxo76ht.each(values, function (newValue, key) {
                $_6ew6p910tjdxo77bf.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_4fyf3q10ojdxo77aj.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_6ew6p910tjdxo77bf.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_ab5hot12njdxo77oh = {
    getField: $_ebapij10qjdxo77b0.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_2y5grt12ojdxo77or = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_279a6h12pjdxo77ov = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_28d4pyyejdxo76tn.objOf([
      $_b50aqly7jdxo76rd.strict('fields'),
      $_b50aqly7jdxo76rd.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_b50aqly7jdxo76rd.strict('onExecute'),
      $_b50aqly7jdxo76rd.strict('getInitialValue'),
      $_b50aqly7jdxo76rd.state('state', function () {
        return {
          dialogSwipeState: $_2y5grt12ojdxo77or.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_28d4pyyejdxo76tn.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_46xflc113jdxo77ey.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_76m9anwgjdxo76c4.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_50ks2ly2jdxo76pg.derive([Disabling.config({
            disableClass: $_4agqi1zejdxo7731.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_dxlqnlzxjdxo775u.descendant(dialog.element(), '.' + $_4agqi1zejdxo7731.resolve('serialised-dialog-chain')).each(function (parent) {
        $_8vvxr8103jdxo776g.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_fnwj0qzvjdxo775p.descendants(dialog.element(), '.' + $_4agqi1zejdxo7731.resolve('serialised-dialog-screen'));
      $_dxlqnlzxjdxo775u.descendant(dialog.element(), '.' + $_4agqi1zejdxo7731.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_8vvxr8103jdxo776g.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_9ds5wg11kjdxo77hy.get(screens[0]);
            $_8vvxr8103jdxo776g.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_fnwj0qzvjdxo775p.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_76m9anwgjdxo76c4.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_7ybfmv11rjdxo77j8.record($_ab5hot12njdxo77oh.sketch(function (parts) {
      return {
        dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_akx2d9wsjdxo76fa.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_akx2d9wsjdxo76fa.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_50ks2ly2jdxo76pg.derive([
          $_3nbnkpzdjdxo772w.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_bykmte126jdxo77ln.config(formAdhocEvents, [
            $_d2m63by4jdxo76qi.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_d2m63by4jdxo76qi.runOnExecute(spec.onExecute),
            $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_d2m63by4jdxo76qi.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_7ybfmv11rjdxo77j8.record({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_50ks2ly2jdxo76pg.derive([Highlighting.config({
          highlightClass: $_4agqi1zejdxo7731.resolve('dot-active'),
          itemClass: $_4agqi1zejdxo7731.resolve('dot-item')
        })]),
      components: $_akx2d9wsjdxo76fa.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_46xflc113jdxo77ey.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_50ks2ly2jdxo76pg.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_bykmte126jdxo77ln.config(wrapperAdhocEvents, [
          $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_279a6h12pjdxo77ov.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_279a6h12pjdxo77ov.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_279a6h12pjdxo77ov.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_4iad5k12ijdxo77n0 = { sketch: sketch$7 };

  var getGroups = $_bhikfywljdxo76e5.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_4iad5k12ijdxo77n0.sketch({
            fields: [
              $_50ccd2125jdxo77l0.field('url', 'Type or paste URL'),
              $_50ccd2125jdxo77l0.field('text', 'Link text'),
              $_50ccd2125jdxo77l0.field('title', 'Link title'),
              $_50ccd2125jdxo77l0.field('target', 'Link target'),
              $_50ccd2125jdxo77l0.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_f5tf0t122jdxo77kj.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_f5tf0t122jdxo77kj.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_79e8p9zfjdxo7734.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_b1bwk0124jdxo77kv.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_f5tf0t122jdxo77kj.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_2xm65v121jdxo77kc = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_akx2d9wsjdxo76fa.map(all, function (a) {
      return $_b50aqly7jdxo76rd.field(a.name(), a.name(), $_d4rkwuy8jdxo76rn.asOption(), $_28d4pyyejdxo76tn.objOf([
        $_b50aqly7jdxo76rd.strict('config'),
        $_b50aqly7jdxo76rd.defaulted('state', $_1hljqoyjjdxo76vh)
      ]));
    });
    var validated = $_28d4pyyejdxo76tn.asStruct('component.behaviours', $_28d4pyyejdxo76tn.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_28d4pyyejdxo76tn.formatError(errInfo) + '\nComplete spec:\n' + $_82khs3ydjdxo76tj.stringify(spec, null, 2));
    }, $_3zxoftwjjdxo76dp.identity);
    return {
      list: all,
      data: $_27taa9x0jdxo76ht.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_3zxoftwjjdxo76dp.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_6wjdbc12wjdxo77r8 = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_futrxxxsjdxo76nn.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_akx2d9wsjdxo76fa.filter($_27taa9x0jdxo76ht.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_akx2d9wsjdxo76fa.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_6wjdbc12wjdxo77r8.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_itocc12vjdxo77r1 = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_bh6oawyljdxo76vq.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_bh6oawyljdxo76vq.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_azsjjhxmjdxo76mn.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_3zxoftwjjdxo76dp.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_27taa9x0jdxo76ht.each(data, function (detail, key) {
      $_27taa9x0jdxo76ht.each(detail, function (value, indexKey) {
        var chain = $_futrxxxsjdxo76nn.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_ey9ujj131jdxo77sb = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_3zxoftwjjdxo76dp.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_akx2d9wsjdxo76fa.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_futrxxxsjdxo76nn.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_82khs3ydjdxo76tj.stringify($_akx2d9wsjdxo76fa.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_futrxxxsjdxo76nn.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_82khs3ydjdxo76tj.stringify($_akx2d9wsjdxo76fa.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_akx2d9wsjdxo76fa.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_27taa9x0jdxo76ht.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_futrxxxsjdxo76nn.wrap(k, v));
        });
        return $_futrxxxsjdxo76nn.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_futrxxxsjdxo76nn.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_6za9awwyjdxo76hk.deepMerge({}, baseMod);
    $_akx2d9wsjdxo76fa.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_ey9ujj131jdxo77sb.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_27taa9x0jdxo76ht.map(byAspect, function (values, aspect) {
      return $_akx2d9wsjdxo76fa.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_27taa9x0jdxo76ht.mapToArray(usedAspect, function (values, aspect) {
      return $_futrxxxsjdxo76nn.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_futrxxxsjdxo76nn.consolidate(modifications, {});
    return consolidated.map($_9a14aqyhjdxo76ua.nu);
  };
  var $_cwytk7130jdxo77ry = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_82khs3ydjdxo76tj.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_82khs3ydjdxo76tj.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_ag87f6133jdxo77sy = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_3zxoftwjjdxo76dp.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_3zxoftwjjdxo76dp.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_8mksgh134jdxo77t3 = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_3zxoftwjjdxo76dp.constant(name),
      handler: $_3zxoftwjjdxo76dp.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_akx2d9wsjdxo76fa.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_6za9awwyjdxo76hk.deepMerge(base, nameToHandlers(behaviours, info));
    return $_ey9ujj131jdxo77sb.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_echfw7y6jdxo76qu.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_82khs3ydjdxo76tj.stringify($_akx2d9wsjdxo76fa.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_ag87f6133jdxo77sy.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_akx2d9wsjdxo76fa.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_echfw7y6jdxo76qu.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_27taa9x0jdxo76ht.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_akx2d9wsjdxo76fa.filter(eventOrder, function (o) {
          return $_akx2d9wsjdxo76fa.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_futrxxxsjdxo76nn.wrap(eventName, $_8mksgh134jdxo77t3.nu(assembled, purpose));
      });
    });
    return $_futrxxxsjdxo76nn.consolidate(r, {});
  };
  var $_350fq8132jdxo77sl = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_28d4pyyejdxo76tn.asStruct('custom.definition', $_28d4pyyejdxo76tn.objOfOnly([
      $_b50aqly7jdxo76rd.field('dom', 'dom', $_d4rkwuy8jdxo76rn.strict(), $_28d4pyyejdxo76tn.objOfOnly([
        $_b50aqly7jdxo76rd.strict('tag'),
        $_b50aqly7jdxo76rd.defaulted('styles', {}),
        $_b50aqly7jdxo76rd.defaulted('classes', []),
        $_b50aqly7jdxo76rd.defaulted('attributes', {}),
        $_b50aqly7jdxo76rd.option('value'),
        $_b50aqly7jdxo76rd.option('innerHtml')
      ])),
      $_b50aqly7jdxo76rd.strict('components'),
      $_b50aqly7jdxo76rd.strict('uid'),
      $_b50aqly7jdxo76rd.defaulted('events', {}),
      $_b50aqly7jdxo76rd.defaulted('apis', $_3zxoftwjjdxo76dp.constant({})),
      $_b50aqly7jdxo76rd.field('eventOrder', 'eventOrder', $_d4rkwuy8jdxo76rn.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_28d4pyyejdxo76tn.anyValue()),
      $_b50aqly7jdxo76rd.option('domModification'),
      $_8mqb5kz6jdxo7708.snapshot('originalSpec'),
      $_b50aqly7jdxo76rd.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_futrxxxsjdxo76nn.wrap($_464sf710yjdxo77dx.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_6za9awwyjdxo76hk.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_akx2d9wsjdxo76fa.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_9jt892yijdxo76ux.nu($_6za9awwyjdxo76hk.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_futrxxxsjdxo76nn.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_futrxxxsjdxo76nn.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_9a14aqyhjdxo76ua.nu({});
    }, $_9a14aqyhjdxo76ua.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_82mxk7135jdxo77t7 = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_akx2d9wsjdxo76fa.each(classes, function (x) {
      $_euw48pynjdxo76w6.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_akx2d9wsjdxo76fa.each(classes, function (x) {
      $_euw48pynjdxo76w6.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_akx2d9wsjdxo76fa.each(classes, function (x) {
      $_euw48pynjdxo76w6.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_akx2d9wsjdxo76fa.forall(classes, function (clazz) {
      return $_euw48pynjdxo76w6.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_akx2d9wsjdxo76fa.exists(classes, function (clazz) {
      return $_euw48pynjdxo76w6.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_cijnzlypjdxo76we.supports(element) ? getNative(element) : $_cijnzlypjdxo76we.get(element);
  };
  var $_bgy409137jdxo77tz = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_9jt892yijdxo76ux.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_akx2d9wsjdxo76fa.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_8alt2yxfjdxo76l3.fromTag(definition.tag());
    $_dkhdpfxrjdxo76n9.setAll(subject, definition.attributes().getOr({}));
    $_bgy409137jdxo77tz.add(subject, definition.classes().getOr([]));
    $_8vvxr8103jdxo776g.setAll(subject, definition.styles().getOr({}));
    $_90tgw5xojdxo76mw.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_bqnd9lxijdxo76li.append(subject, children);
    definition.value().each(function (value) {
      $_972bu12ejdxo77mp.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_9jt892yijdxo76ux.nu(spec);
    return renderToDom(definition);
  };
  var $_fligd5136jdxo77tj = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_28d4pyyejdxo76tn.getOrDie($_82mxk7135jdxo77t7.toInfo($_6za9awwyjdxo76hk.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_itocc12vjdxo77r1.generate(spec);
    var bList = $_6wjdbc12wjdxo77r8.getBehaviours(bBlob);
    var bData = $_6wjdbc12wjdxo77r8.getData(bBlob);
    var definition = $_82mxk7135jdxo77t7.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_82mxk7135jdxo77t7.toModification(info) };
    var modification = $_cwytk7130jdxo77ry.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_9a14aqyhjdxo76ua.merge(definition, modification);
    var item = $_fligd5136jdxo77tj.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_82mxk7135jdxo77t7.toEvents(info) };
    var events = $_350fq8132jdxo77sl.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_d65syzx3jdxo76iv.children(item);
      var subs = $_akx2d9wsjdxo76fa.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_ebapij10qjdxo77b0.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_16z8u3wzjdxo76ho.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_82khs3ydjdxo76tj.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_16z8u3wzjdxo76ho.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_3zxoftwjjdxo76dp.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_3zxoftwjjdxo76dp.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_3zxoftwjjdxo76dp.constant(events)
    });
    return me;
  };
  var $_e8sgk312ujdxo77qm = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_fpx5cox9jdxo76k0.eq(originator, component.element()) && !$_fpx5cox9jdxo76k0.eq(originator, target);
  };
  var $_a7lxeh138jdxo77u6 = {
    events: $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.can($_99sq1cwhjdxo76d0.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_99sq1cwhjdxo76d0.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_azsjjhxmjdxo76mn.element(originator) + '\nTarget: ' + $_azsjjhxmjdxo76mn.element(target) + '\nCheck the ' + $_99sq1cwhjdxo76d0.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_23s2vx139jdxo77ua = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_futrxxxsjdxo76nn.readOr('components', [])(spec);
    return $_akx2d9wsjdxo76fa.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_23s2vx139jdxo77ua.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_6za9awwyjdxo76hk.deepMerge($_a7lxeh138jdxo77u6, spec, $_futrxxxsjdxo76nn.wrap('components', components));
    return Result.value($_e8sgk312ujdxo77qm.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_8alt2yxfjdxo76l3.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_28d4pyyejdxo76tn.asStructOrDie('external.component', $_28d4pyyejdxo76tn.objOfOnly([
      $_b50aqly7jdxo76rd.strict('element'),
      $_b50aqly7jdxo76rd.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_9376vv10xjdxo77dm.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_3zxoftwjjdxo76dp.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_3zxoftwjjdxo76dp.constant(extSpec.element()),
      spec: $_3zxoftwjjdxo76dp.constant(spec),
      readState: $_3zxoftwjjdxo76dp.constant('No state'),
      syncComponents: $_3zxoftwjjdxo76dp.noop,
      components: $_3zxoftwjjdxo76dp.constant([]),
      events: $_3zxoftwjjdxo76dp.constant({})
    });
    return $_ebapij10qjdxo77b0.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_ebapij10qjdxo77b0.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_6za9awwyjdxo76hk.deepMerge({ uid: $_9376vv10xjdxo77dm.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_4m49m112tjdxo77q4 = {
    build: build$1,
    premade: $_ebapij10qjdxo77b0.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_8fjsagytjdxo76x0.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_76m9anwgjdxo76c4.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_76m9anwgjdxo76c4.emitWith(item, focusEvent, { item: item });
  };
  var $_au66y913djdxo77v1 = {
    hover: $_3zxoftwjjdxo76dp.constant(hoverEvent),
    focus: $_3zxoftwjjdxo76dp.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_6za9awwyjdxo76hk.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_6za9awwyjdxo76hk.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_au66y913djdxo77v1.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.runWithTarget($_99sq1cwhjdxo76d0.tapOrClick(), $_76m9anwgjdxo76c4.emitExecute),
        $_d2m63by4jdxo76qi.cutter($_6a9crxwijdxo76dg.mousedown()),
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mouseover(), $_au66y913djdxo77v1.onHover),
        $_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_b50aqly7jdxo76rd.strict('data'),
    $_b50aqly7jdxo76rd.strict('components'),
    $_b50aqly7jdxo76rd.strict('dom'),
    $_b50aqly7jdxo76rd.option('toggling'),
    $_b50aqly7jdxo76rd.defaulted('itemBehaviours', {}),
    $_b50aqly7jdxo76rd.defaulted('ignoreFocus', false),
    $_b50aqly7jdxo76rd.defaulted('domModification', {}),
    $_8mqb5kz6jdxo7708.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.stopper($_99sq1cwhjdxo76d0.focusItem())])
    };
  };
  var schema$11 = [
    $_b50aqly7jdxo76rd.strict('dom'),
    $_b50aqly7jdxo76rd.strict('components'),
    $_8mqb5kz6jdxo7708.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_g9pshf10vjdxo77cn.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_50ks2ly2jdxo76pg.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_gaww9s13gjdxo77vl = {
    owner: $_3zxoftwjjdxo76dp.constant(owner$2),
    parts: $_3zxoftwjjdxo76dp.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_6ew6p910tjdxo77bf.substitutes($_gaww9s13gjdxo77vl.owner(), info, $_gaww9s13gjdxo77vl.parts());
    var components = $_6ew6p910tjdxo77bf.components($_gaww9s13gjdxo77vl.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_6ew6p910tjdxo77bf.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_amigzl108jdxo777c.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_6za9awwyjdxo76hk.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.mouseover(), $_au66y913djdxo77v1.onHover),
        $_d2m63by4jdxo76qi.run($_99sq1cwhjdxo76d0.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_50ks2ly2jdxo76pg.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_au66y913djdxo77v1.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_b50aqly7jdxo76rd.strict('uid'),
    $_b50aqly7jdxo76rd.strict('data'),
    $_b50aqly7jdxo76rd.strict('components'),
    $_b50aqly7jdxo76rd.strict('dom'),
    $_b50aqly7jdxo76rd.defaulted('autofocus', false),
    $_b50aqly7jdxo76rd.defaulted('domModification', {}),
    $_6ew6p910tjdxo77bf.defaultUidsSchema($_gaww9s13gjdxo77vl.parts()),
    $_8mqb5kz6jdxo7708.output('builder', builder$2)
  ];

  var itemSchema$1 = $_28d4pyyejdxo76tn.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_g9pshf10vjdxo77cn.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_28d4pyyejdxo76tn.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_9376vv10xjdxo77dm.generate('');
        return $_6za9awwyjdxo76hk.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_b50aqly7jdxo76rd.strict('value'),
    $_b50aqly7jdxo76rd.strict('items'),
    $_b50aqly7jdxo76rd.strict('dom'),
    $_b50aqly7jdxo76rd.strict('components'),
    $_b50aqly7jdxo76rd.defaulted('eventOrder', {}),
    $_4fyf3q10ojdxo77aj.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_b50aqly7jdxo76rd.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_28d4pyyejdxo76tn.choose('mode', {
      grid: [
        $_8mqb5kz6jdxo7708.initSize(),
        $_8mqb5kz6jdxo7708.output('config', configureGrid)
      ],
      menu: [
        $_b50aqly7jdxo76rd.defaulted('moveOnTab', true),
        $_8mqb5kz6jdxo7708.output('config', configureMenu)
      ]
    })),
    $_8mqb5kz6jdxo7708.itemMarkers(),
    $_b50aqly7jdxo76rd.defaulted('fakeFocus', false),
    $_b50aqly7jdxo76rd.defaulted('focusManager', $_9rf2v1zrjdxo774z.dom()),
    $_8mqb5kz6jdxo7708.onHandler('onHighlight')
  ];
  var $_2b6jax13bjdxo77uf = {
    name: $_3zxoftwjjdxo76dp.constant('Menu'),
    schema: $_3zxoftwjjdxo76dp.constant(schema$13),
    parts: $_3zxoftwjjdxo76dp.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_apujk713ijdxo77vx = { focus: $_3zxoftwjjdxo76dp.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_6za9awwyjdxo76hk.deepMerge({
      dom: $_6za9awwyjdxo76hk.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_3zxoftwjjdxo76dp.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_4fyf3q10ojdxo77aj.get(detail.menuBehaviours())),
      events: $_d2m63by4jdxo76qi.derive([
        $_d2m63by4jdxo76qi.run($_au66y913djdxo77v1.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_76m9anwgjdxo76c4.emitWith(menu, $_apujk713ijdxo77vx.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_d2m63by4jdxo76qi.run($_au66y913djdxo77v1.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_3s4ziv13hjdxo77vr = { make: make$2 };

  var Menu = $_g4su5h10pjdxo77aq.composite({
    name: 'Menu',
    configFields: $_2b6jax13bjdxo77uf.schema(),
    partFields: $_2b6jax13bjdxo77uf.parts(),
    factory: $_3s4ziv13hjdxo77vr.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_d65syzx3jdxo76iv.owner(container);
    var refocus = $_8fjsagytjdxo76x0.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_fpx5cox9jdxo76k0.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_c2a7cdyvjdxo76xf.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_8fjsagytjdxo76x0.active(ownerDoc).filter(function (newFocus) {
        return $_fpx5cox9jdxo76k0.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_8fjsagytjdxo76x0.focus(oldFocus);
      });
    });
    return result;
  };
  var $_5fxukb13mjdxo77wh = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_29x44cx1jdxo76i0.detachChildren(component);
    $_5fxukb13mjdxo77wh.preserve(function () {
      var children = $_akx2d9wsjdxo76fa.map(data, component.getSystem().build);
      $_akx2d9wsjdxo76fa.each(children, function (l) {
        $_29x44cx1jdxo76i0.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_29x44cx1jdxo76i0.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_195zrox2jdxo76ir.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_195zrox2jdxo76ir.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_akx2d9wsjdxo76fa.find(children, function (child) {
      return $_fpx5cox9jdxo76k0.eq(removee.element(), child.element());
    });
    foundChild.each($_29x44cx1jdxo76i0.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_8g9zee13ljdxo77wb = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_50ks2ly2jdxo76pg.create({
    fields: [],
    name: 'replacing',
    apis: $_8g9zee13ljdxo77wb
  });

  var transpose = function (obj) {
    return $_27taa9x0jdxo76ht.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_futrxxxsjdxo76nn.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_futrxxxsjdxo76nn.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_27taa9x0jdxo76ht.each(menus, function (menuItems, menu) {
      $_akx2d9wsjdxo76fa.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_27taa9x0jdxo76ht.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_27taa9x0jdxo76ht.map(items, function (path) {
      return $_futrxxxsjdxo76nn.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_9q7ucy13pjdxo77xv = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_3zxoftwjjdxo76dp.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_9q7ucy13pjdxo77xv.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_futrxxxsjdxo76nn.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_futrxxxsjdxo76nn.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_futrxxxsjdxo76nn.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_futrxxxsjdxo76nn.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_futrxxxsjdxo76nn.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_akx2d9wsjdxo76fa.difference($_27taa9x0jdxo76ht.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_27taa9x0jdxo76ht.map(menus, function (spec, name) {
        var data = Menu.sketch($_6za9awwyjdxo76hk.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_futrxxxsjdxo76nn.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_9rf2v1zrjdxo774z.highlights() : $_9rf2v1zrjdxo774z.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_27taa9x0jdxo76ht.map(detail.data().menus(), function (data, menuName) {
        return $_akx2d9wsjdxo76fa.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_76m9anwgjdxo76c4.dispatch(container, item.element(), $_99sq1cwhjdxo76d0.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_3efatjy0jdxo76pb.cat($_akx2d9wsjdxo76fa.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_akx2d9wsjdxo76fa.each(rest, function (r) {
          $_euw48pynjdxo76w6.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_das13dxjjdxo76lp.inBody(activeMenu.element())) {
          Replacing.append(container, $_4m49m112tjdxo77q4.premade(activeMenu));
        }
        $_bgy409137jdxo77tz.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_akx2d9wsjdxo76fa.each(others, function (o) {
          $_bgy409137jdxo77tz.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_das13dxjjdxo76lp.inBody(activeMenu.element())) {
            Replacing.append(container, $_4m49m112tjdxo77q4.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_amigzl108jdxo777c.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_amigzl108jdxo777c.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_dxlqnlzxjdxo775u.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_d2m63by4jdxo76qi.derive([
      $_d2m63by4jdxo76qi.run($_apujk713ijdxo77vx.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_d2m63by4jdxo76qi.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_d2m63by4jdxo76qi.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_4m49m112tjdxo77q4.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_d2m63by4jdxo76qi.run($_au66y913djdxo77v1.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_76m9anwgjdxo76c4.dispatch(container, primary.element(), $_99sq1cwhjdxo76d0.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_4fyf3q10ojdxo77aj.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_eq0byz13njdxo77wt = {
    make: make$3,
    collapseItem: $_3zxoftwjjdxo76dp.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_futrxxxsjdxo76nn.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_7idmy910rjdxo77b6.generate($_eq0byz13njdxo77wt.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_g4su5h10pjdxo77aq.single({
    name: 'TieredMenu',
    configFields: [
      $_8mqb5kz6jdxo7708.onStrictKeyboardHandler('onExecute'),
      $_8mqb5kz6jdxo7708.onStrictKeyboardHandler('onEscape'),
      $_8mqb5kz6jdxo7708.onStrictHandler('onOpenMenu'),
      $_8mqb5kz6jdxo7708.onStrictHandler('onOpenSubmenu'),
      $_8mqb5kz6jdxo7708.onHandler('onCollapseMenu'),
      $_b50aqly7jdxo76rd.defaulted('openImmediately', true),
      $_b50aqly7jdxo76rd.strictObjOf('data', [
        $_b50aqly7jdxo76rd.strict('primary'),
        $_b50aqly7jdxo76rd.strict('menus'),
        $_b50aqly7jdxo76rd.strict('expansions')
      ]),
      $_b50aqly7jdxo76rd.defaulted('fakeFocus', false),
      $_8mqb5kz6jdxo7708.onHandler('onHighlight'),
      $_8mqb5kz6jdxo7708.onHandler('onHover'),
      $_8mqb5kz6jdxo7708.tieredMenuMarkers(),
      $_b50aqly7jdxo76rd.strict('dom'),
      $_b50aqly7jdxo76rd.defaulted('navigateOnHover', true),
      $_b50aqly7jdxo76rd.defaulted('stayInDom', false),
      $_4fyf3q10ojdxo77aj.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_b50aqly7jdxo76rd.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_eq0byz13njdxo77wt.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_futrxxxsjdxo76nn.readOptFrom(transConfig.routes(), route.start()).map($_3zxoftwjjdxo76dp.apply).bind(function (sConfig) {
      return $_futrxxxsjdxo76nn.readOptFrom(sConfig, route.destination()).map($_3zxoftwjjdxo76dp.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_3zxoftwjjdxo76dp.constant(t),
          route: $_3zxoftwjjdxo76dp.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_euw48pynjdxo76w6.remove(comp.element(), t.transitionClass());
      $_dkhdpfxrjdxo76n9.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_3zxoftwjjdxo76dp.constant($_dkhdpfxrjdxo76n9.get(comp.element(), transConfig.stateAttr())),
      destination: $_3zxoftwjjdxo76dp.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_dkhdpfxrjdxo76n9.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_3zxoftwjjdxo76dp.constant($_dkhdpfxrjdxo76n9.get(comp.element(), transConfig.stateAttr())),
      destination: $_3zxoftwjjdxo76dp.constant($_dkhdpfxrjdxo76n9.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_dkhdpfxrjdxo76n9.has(comp.element(), transConfig.stateAttr()) && $_dkhdpfxrjdxo76n9.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_dkhdpfxrjdxo76n9.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_dkhdpfxrjdxo76n9.has(comp.element(), transConfig.destinationAttr())) {
      $_dkhdpfxrjdxo76n9.set(comp.element(), transConfig.stateAttr(), $_dkhdpfxrjdxo76n9.get(comp.element(), transConfig.destinationAttr()));
      $_dkhdpfxrjdxo76n9.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_euw48pynjdxo76w6.add(comp.element(), t.transitionClass());
      $_dkhdpfxrjdxo76n9.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_dkhdpfxrjdxo76n9.has(e, transConfig.stateAttr()) ? Option.some($_dkhdpfxrjdxo76n9.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_5sigih13sjdxo77yh = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_d2m63by4jdxo76qi.derive([
      $_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_5sigih13sjdxo77yh.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_5sigih13sjdxo77yh.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_5sigih13sjdxo77yh.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_d2m63by4jdxo76qi.runOnAttached(function (comp, se) {
        $_5sigih13sjdxo77yh.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_16fbd313rjdxo77yc = { events: events$8 };

  var TransitionSchema = [
    $_b50aqly7jdxo76rd.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_b50aqly7jdxo76rd.defaulted('stateAttr', 'data-transitioning-state'),
    $_b50aqly7jdxo76rd.strict('initialState'),
    $_8mqb5kz6jdxo7708.onHandler('onTransition'),
    $_8mqb5kz6jdxo7708.onHandler('onFinish'),
    $_b50aqly7jdxo76rd.strictOf('routes', $_28d4pyyejdxo76tn.setOf(Result.value, $_28d4pyyejdxo76tn.setOf(Result.value, $_28d4pyyejdxo76tn.objOfOnly([$_b50aqly7jdxo76rd.optionObjOfOnly('transition', [
        $_b50aqly7jdxo76rd.strict('property'),
        $_b50aqly7jdxo76rd.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_27taa9x0jdxo76ht.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_futrxxxsjdxo76nn.wrap(waypoints[1], v);
      r[waypoints[1]] = $_futrxxxsjdxo76nn.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_futrxxxsjdxo76nn.wrapAll([
      {
        key: first,
        value: $_futrxxxsjdxo76nn.wrap(second, transitions)
      },
      {
        key: second,
        value: $_futrxxxsjdxo76nn.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_futrxxxsjdxo76nn.wrapAll([
      {
        key: first,
        value: $_futrxxxsjdxo76nn.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_futrxxxsjdxo76nn.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_futrxxxsjdxo76nn.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_50ks2ly2jdxo76pg.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_16fbd313rjdxo77yc,
    apis: $_5sigih13sjdxo77yh,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_4agqi1zejdxo7731.resolve('scrollable');
  var register = function (element) {
    $_euw48pynjdxo76w6.add(element, scrollable);
  };
  var deregister = function (element) {
    $_euw48pynjdxo76w6.remove(element, scrollable);
  };
  var $_9mwenq13ujdxo77z7 = {
    register: register,
    deregister: deregister,
    scrollable: $_3zxoftwjjdxo76dp.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_futrxxxsjdxo76nn.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_akx2d9wsjdxo76fa.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_futrxxxsjdxo76nn.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_27taa9x0jdxo76ht.map(formats.menus, function (menuItems, menuName) {
      var items = $_akx2d9wsjdxo76fa.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_futrxxxsjdxo76nn.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_6za9awwyjdxo76hk.deepMerge(submenus, $_futrxxxsjdxo76nn.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_4agqi1zejdxo7731.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_4agqi1zejdxo7731.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_50ks2ly2jdxo76pg.derive(isMenu ? [] : [$_3nbnkpzdjdxo772w.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_4agqi1zejdxo7731.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_4agqi1zejdxo7731.resolve('styles-collapse-icon')]
              }
            },
            $_4m49m112tjdxo77q4.text(value)
          ] : [$_4m49m112tjdxo77q4.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_4agqi1zejdxo7731.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_50ks2ly2jdxo76pg.derive([$_bykmte126jdxo77ln.config('adhoc-scrollable-menu', [
              $_d2m63by4jdxo76qi.runOnAttached(function (component, simulatedEvent) {
                $_8vvxr8103jdxo776g.set(component.element(), 'overflow-y', 'auto');
                $_8vvxr8103jdxo776g.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_9mwenq13ujdxo77z7.register(component.element());
              }),
              $_d2m63by4jdxo76qi.runOnDetached(function (component) {
                $_8vvxr8103jdxo776g.remove(component.element(), 'overflow-y');
                $_8vvxr8103jdxo776g.remove(component.element(), '-webkit-overflow-scrolling');
                $_9mwenq13ujdxo77z7.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_50ks2ly2jdxo76pg.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_7ybfmv11rjdxo77j8.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_4agqi1zejdxo7731.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_9ds5wg11kjdxo77hy.get(container.element());
        $_9ds5wg11kjdxo77hy.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_9ds5wg11kjdxo77hy.get(container.element());
        var menu = $_dxlqnlzxjdxo775u.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_9ds5wg11kjdxo77hy.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_dxlqnlzxjdxo775u.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_4agqi1zejdxo7731.resolve('styles-background-menu'),
        menu: $_4agqi1zejdxo7731.resolve('styles-menu'),
        selectedMenu: $_4agqi1zejdxo7731.resolve('styles-selected-menu'),
        item: $_4agqi1zejdxo7731.resolve('styles-item'),
        selectedItem: $_4agqi1zejdxo7731.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_5g62z912sjdxo77pd = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_6za9awwyjdxo76hk.deepMerge($_futrxxxsjdxo76nn.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_6za9awwyjdxo76hk.deepMerge(rest.menus, $_futrxxxsjdxo76nn.wrap(item.title, rest.items));
    var newExpansions = $_6za9awwyjdxo76hk.deepMerge(rest.expansions, $_futrxxxsjdxo76nn.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_futrxxxsjdxo76nn.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_akx2d9wsjdxo76fa.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_6za9awwyjdxo76hk.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_6za9awwyjdxo76hk.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_cgyjhr13vjdxo77zc = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_6za9awwyjdxo76hk.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_6za9awwyjdxo76hk.deepMerge(item, {
        isSelected: $_3zxoftwjjdxo76dp.constant(false),
        getPreview: $_3zxoftwjjdxo76dp.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_7idmy910rjdxo77b6.generate(item.title);
      var newItem = $_6za9awwyjdxo76hk.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_futrxxxsjdxo76nn.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_akx2d9wsjdxo76fa.map(items, function (item) {
        if ($_futrxxxsjdxo76nn.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_6za9awwyjdxo76hk.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_futrxxxsjdxo76nn.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_akx2d9wsjdxo76fa.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_futrxxxsjdxo76nn.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_cgyjhr13vjdxo77zc.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_5g62z912sjdxo77pd.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_avwfl912qjdxo77oz = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_akx2d9wsjdxo76fa.bind(toolbar, function (item) {
      return $_16z8u3wzjdxo76ho.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_16z8u3wzjdxo76ho.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_79e8p9zfjdxo7734.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_79e8p9zfjdxo7734.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_79e8p9zfjdxo7734.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_2xm65v121jdxo77kc.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_d7l2ms11qjdxo77iu.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_3jvxmy11mjdxo77i2.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_1zyjn8115jdxo77fh.sketch(realm, editor);
    };
    var styleFormats = $_avwfl912qjdxo77oz.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_avwfl912qjdxo77oz.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_79e8p9zfjdxo7734.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_50ks2ly2jdxo76pg.derive([
        Toggling.config({
          toggleClass: $_4agqi1zejdxo7731.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_futrxxxsjdxo76nn.wrapAll([
            $_3nbnkpzdjdxo772w.receive($_bgsjplz1jdxo76ye.orientationChanged(), Toggling.off),
            $_3nbnkpzdjdxo772w.receive($_bgsjplz1jdxo76ye.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_futrxxxsjdxo76nn.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_akx2d9wsjdxo76fa.bind(itemNames, function (iName) {
      var r = !$_futrxxxsjdxo76nn.hasKey(present, iName) && $_futrxxxsjdxo76nn.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_cqc34jz2jdxo76yl = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_3zxoftwjjdxo76dp.constant(target),
      'x': $_3zxoftwjjdxo76dp.constant(x),
      'y': $_3zxoftwjjdxo76dp.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_3zxoftwjjdxo76dp.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_8alt2yxfjdxo76l3.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_3zxoftwjjdxo76dp.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_3zxoftwjjdxo76dp.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_g17phs13yjdxo77zw = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_3zxoftwjjdxo76dp.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_g17phs13yjdxo77zw.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_g17phs13yjdxo77zw.capture(element, event, filter$1, handler);
  };
  var $_cvgq7s13xjdxo77zs = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_3zxoftwjjdxo76dp.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_bx0iviwkjdxo76dy.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_8alt2yxfjdxo76l3.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_cvgq7s13xjdxo77zs.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_6iq1po13wjdxo77zi = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_99sq1cwhjdxo76d0.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_3zxoftwjjdxo76dp.constant(touch.clientX),
          y: $_3zxoftwjjdxo76dp.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_fpx5cox9jdxo76k0.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_99sq1cwhjdxo76d0.tap(), event);
      });
    };
    var handlers = $_futrxxxsjdxo76nn.wrapAll([
      {
        key: $_6a9crxwijdxo76dg.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_6a9crxwijdxo76dg.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_6a9crxwijdxo76dg.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_futrxxxsjdxo76nn.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_37jn2b144jdxo781d = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_37jn2b144jdxo781d.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_cvgq7s13xjdxo77zs.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_cvgq7s13xjdxo77zs.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_9j39vc143jdxo7818 = { monitor: monitor$1 };

  var isAndroid6 = $_bx0iviwkjdxo76dy.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_9j39vc143jdxo7818.monitor(editorApi);
    var outerDoc = $_d65syzx3jdxo76iv.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_fpx5cox9jdxo76k0.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_8fjsagytjdxo76x0.active(outerDoc).filter(function (input) {
        return $_bc2oaqxkjdxo76lx.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_cvgq7s13xjdxo77zs.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_cvgq7s13xjdxo77zs.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_8fjsagytjdxo76x0.blur(editorApi.body());
      }),
      editorApi.onToEditing($_3zxoftwjjdxo76dp.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_cvgq7s13xjdxo77zs.bind($_8alt2yxfjdxo76l3.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_cvgq7s13xjdxo77zs.bind(outerDoc, 'select', updateMargin),
      $_cvgq7s13xjdxo77zs.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_akx2d9wsjdxo76fa.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_1vrng9142jdxo780o = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_dkhdpfxrjdxo76n9.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_dlh7mg147jdxo7828 = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_bx0iviwkjdxo76dy.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_bc2oaqxkjdxo76lx.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_4tg70d14ajdxo782u = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_bc2oaqxkjdxo76lx.name(element) === 'img' ? 1 : $_4tg70d14ajdxo782u.getOption(element).fold(function () {
      return $_d65syzx3jdxo76iv.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_4tg70d14ajdxo782u.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_akx2d9wsjdxo76fa.contains(elementsWithCursorPosition, $_bc2oaqxkjdxo76lx.name(elem));
  };
  var $_esknh3149jdxo782p = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_1mkbevxwjdxo76om.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_3zxoftwjjdxo76dp.identity, $_3zxoftwjjdxo76dp.identity, $_3zxoftwjjdxo76dp.identity);
  };
  var $_eyx9g114djdxo7835 = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_1mkbevxwjdxo76om.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_39twflx4jdxo76ji.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_8alt2yxfjdxo76l3.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_eyx9g114djdxo7835.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_d65syzx3jdxo76iv.defaultView(start);
  };
  var $_g5z53p14cjdxo7830 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_d65syzx3jdxo76iv.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_8alt2yxfjdxo76l3.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_fpx5cox9jdxo76k0.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_8yyl6e14fjdxo783g = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_akx2d9wsjdxo76fa.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_8alt2yxfjdxo76l3.fromDom(fragment);
  };
  var $_2vhw3e14gjdxo783i = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_8alt2yxfjdxo76l3.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_3zxoftwjjdxo76dp.constant(rect.left),
      top: $_3zxoftwjjdxo76dp.constant(rect.top),
      right: $_3zxoftwjjdxo76dp.constant(rect.right),
      bottom: $_3zxoftwjjdxo76dp.constant(rect.bottom),
      width: $_3zxoftwjjdxo76dp.constant(rect.width),
      height: $_3zxoftwjjdxo76dp.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_e4834314hjdxo783l = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_1mkbevxwjdxo76om.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_8alt2yxfjdxo76l3.fromDom(range.startContainer), range.startOffset, $_8alt2yxfjdxo76l3.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_3zxoftwjjdxo76dp.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_bhikfywljdxo76e5.cached(function () {
            return $_e4834314hjdxo783l.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_bhikfywljdxo76e5.cached(function () {
            return Option.some($_e4834314hjdxo783l.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_bhikfywljdxo76e5.cached(function () {
            return $_e4834314hjdxo783l.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_bhikfywljdxo76e5.cached(function () {
            return Option.some($_e4834314hjdxo783l.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_8alt2yxfjdxo76l3.fromDom(rev.endContainer), rev.endOffset, $_8alt2yxfjdxo76l3.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_3m9eqh14ijdxo783s = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_7gxka214ljdxo784d = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_4tg70d14ajdxo782u.get(textnode).length;
    var offset = $_7gxka214ljdxo784d.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_3efatjy0jdxo76pb.findMap(rects, function (rect) {
      return $_7gxka214ljdxo784d.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_7i15lx14mjdxo784f = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_d65syzx3jdxo76iv.children(node);
    return $_3efatjy0jdxo76pb.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_7gxka214ljdxo784d.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_bc2oaqxkjdxo76lx.isText(node) ? $_7i15lx14mjdxo784f.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_8g71ni14kjdxo7848 = { locate: locate$2 };

  var first$3 = function (element) {
    return $_c2a7cdyvjdxo76xf.descendant(element, $_esknh3149jdxo782p.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_esknh3149jdxo782p.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_d65syzx3jdxo76iv.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_58ql3p14ojdxo784p = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_58ql3p14ojdxo784p.first : $_58ql3p14ojdxo784p.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_d65syzx3jdxo76iv.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_4o1biq14njdxo784k = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_8g71ni14kjdxo7848.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_8alt2yxfjdxo76l3.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_4o1biq14njdxo784k.search(doc, elem, x);
      };
      return $_d65syzx3jdxo76iv.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_8alt2yxfjdxo76l3.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_g5z53p14cjdxo7830.range($_8alt2yxfjdxo76l3.fromDom(rng.startContainer), rng.startOffset, $_8alt2yxfjdxo76l3.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_bpytpx14jjdxo7840 = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_e4834314hjdxo783l.create(win);
    var self = $_bgvscexejdxo76kt.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_fnwj0qzvjdxo775p.descendants(ancestor, selector));
    return $_akx2d9wsjdxo76fa.filter(elements, function (elem) {
      $_e4834314hjdxo783l.selectNodeContentsUsing(innerRange, elem);
      return $_e4834314hjdxo783l.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    var ancestor = $_8alt2yxfjdxo76l3.fromDom(outerRange.commonAncestorContainer);
    return $_bc2oaqxkjdxo76lx.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_dxgbrx14pjdxo784t = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_bc2oaqxkjdxo76lx.name(element);
    if ('input' === name)
      return $_eyx9g114djdxo7835.after(element);
    else if (!$_akx2d9wsjdxo76fa.contains([
        'br',
        'img'
      ], name))
      return $_eyx9g114djdxo7835.on(element, offset);
    else
      return offset === 0 ? $_eyx9g114djdxo7835.before(element) : $_eyx9g114djdxo7835.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_eyx9g114djdxo7835.before, beforeSpecial, $_eyx9g114djdxo7835.after);
    var finish = finishSitu.fold($_eyx9g114djdxo7835.before, beforeSpecial, $_eyx9g114djdxo7835.after);
    return $_g5z53p14cjdxo7830.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_g5z53p14cjdxo7830.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_8alt2yxfjdxo76l3.fromDom(rng.startContainer);
        var finish = $_8alt2yxfjdxo76l3.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_5k3yxj14qjdxo784y = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_e4834314hjdxo783l.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_dxgbrx14pjdxo784t.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_3m9eqh14ijdxo783s.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_5k3yxj14qjdxo784y.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_5k3yxj14qjdxo784y.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_g5z53p14cjdxo7830.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_e4834314hjdxo783l.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_5k3yxj14qjdxo784y.preprocess(selection);
    return $_3m9eqh14ijdxo783s.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_g5z53p14cjdxo7830.range($_8alt2yxfjdxo76l3.fromDom(firstRng.startContainer), firstRng.startOffset, $_8alt2yxfjdxo76l3.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_8alt2yxfjdxo76l3.fromDom(selection.anchorNode);
    var focusNode = $_8alt2yxfjdxo76l3.fromDom(selection.focusNode);
    return $_8yyl6e14fjdxo783g.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_g5z53p14cjdxo7830.range($_8alt2yxfjdxo76l3.fromDom(selection.anchorNode), selection.anchorOffset, $_8alt2yxfjdxo76l3.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_e4834314hjdxo783l.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_e4834314hjdxo783l.selectNodeContents(win, element);
    return $_g5z53p14cjdxo7830.range($_8alt2yxfjdxo76l3.fromDom(rng.startContainer), rng.startOffset, $_8alt2yxfjdxo76l3.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_g5z53p14cjdxo7830.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    return $_e4834314hjdxo783l.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    return $_e4834314hjdxo783l.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_bpytpx14jjdxo7840.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    return $_e4834314hjdxo783l.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    return $_e4834314hjdxo783l.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    var fragment = $_2vhw3e14gjdxo783i.fromElements(elements, win.document);
    $_e4834314hjdxo783l.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_3m9eqh14ijdxo783s.asLtrRange(win, selection);
    $_e4834314hjdxo783l.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_fpx5cox9jdxo76k0.eq(start, finish) && soffset === foffset;
  };
  var $_4i7pc914ejdxo783a = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_3zxoftwjjdxo76dp.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_3zxoftwjjdxo76dp.constant(rawRect.left),
      top: $_3zxoftwjjdxo76dp.constant(rawRect.top),
      right: $_3zxoftwjjdxo76dp.constant(rawRect.right),
      bottom: $_3zxoftwjjdxo76dp.constant(rawRect.bottom),
      width: $_3zxoftwjjdxo76dp.constant(rawRect.width),
      height: $_3zxoftwjjdxo76dp.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_akx2d9wsjdxo76fa.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_8alt2yxfjdxo76l3.fromDom(range.startContainer);
      return $_d65syzx3jdxo76iv.parent(start_1).bind(function (parent) {
        var selection = $_g5z53p14cjdxo7830.exact(start_1, range.startOffset, parent, $_esknh3149jdxo782p.getEnd(parent));
        var optRect = $_4i7pc914ejdxo783a.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_akx2d9wsjdxo76fa.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_c5z9mg148jdxo782c = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_8alt2yxfjdxo76l3.fromDom(cWin.document.body);
    var inInput = $_8fjsagytjdxo76x0.active().exists(function (elem) {
      return $_akx2d9wsjdxo76fa.contains([
        'input',
        'textarea'
      ], $_bc2oaqxkjdxo76lx.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_3zxoftwjjdxo76dp.apply;
    transaction(function () {
      $_8fjsagytjdxo76x0.active().each($_8fjsagytjdxo76x0.blur);
      $_8fjsagytjdxo76x0.focus(iBody);
    });
  };
  var $_80czzh14rjdxo7853 = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_4agqi1zejdxo7731.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_dkhdpfxrjdxo76n9.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_dlh7mg147jdxo7828.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_3zxoftwjjdxo76dp.constant(rect.top()),
      bottom: $_3zxoftwjjdxo76dp.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_c5z9mg148jdxo782c.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_8alt2yxfjdxo76l3.fromDom(cWin.document.body);
    var toEditing = function () {
      $_80czzh14rjdxo7853.resume(cWin);
    };
    var onResize = $_cvgq7s13xjdxo77zs.bind($_8alt2yxfjdxo76l3.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_ckjby7146jdxo781x = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_8alt2yxfjdxo76l3.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_8alt2yxfjdxo76l3.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_4i7pc914ejdxo783a.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_cvgq7s13xjdxo77zs.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_3zxoftwjjdxo76dp.constant(rect.left),
      top: $_3zxoftwjjdxo76dp.constant(rect.top),
      right: $_3zxoftwjjdxo76dp.constant(rect.right),
      bottom: $_3zxoftwjjdxo76dp.constant(rect.bottom),
      width: $_3zxoftwjjdxo76dp.constant(rect.width),
      height: $_3zxoftwjjdxo76dp.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_fpx5cox9jdxo76k0.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_4i7pc914ejdxo783a.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_8alt2yxfjdxo76l3.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_4i7pc914ejdxo783a.get(win).bind(function (sel) {
                return $_4i7pc914ejdxo783a.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_4i7pc914ejdxo783a.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_4i7pc914ejdxo783a.clear(win);
            };
          });
          return {
            body: $_3zxoftwjjdxo76dp.constant(body),
            doc: $_3zxoftwjjdxo76dp.constant(doc),
            win: $_3zxoftwjjdxo76dp.constant(win),
            html: $_3zxoftwjjdxo76dp.constant(html),
            getSelection: $_3zxoftwjjdxo76dp.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_3zxoftwjjdxo76dp.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_afs6qi14sjdxo785d = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_bx0iviwkjdxo76dy.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_8vvxr8103jdxo776g.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_fnwj0qzvjdxo775p.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_dkhdpfxrjdxo76n9.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_dkhdpfxrjdxo76n9.set(element, attr, backup);
          $_dkhdpfxrjdxo76n9.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_fnwj0qzvjdxo775p.ancestors(container, '*');
    var siblings = $_akx2d9wsjdxo76fa.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_akx2d9wsjdxo76fa.each(siblings, clobber(siblingStyles));
    $_akx2d9wsjdxo76fa.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_fnwj0qzvjdxo775p.all('[' + attr + ']');
    $_akx2d9wsjdxo76fa.each(clobberedEls, function (element) {
      var restore = $_dkhdpfxrjdxo76n9.get(element, attr);
      if (restore !== 'no-styles') {
        $_dkhdpfxrjdxo76n9.set(element, 'style', restore);
      } else {
        $_dkhdpfxrjdxo76n9.remove(element, 'style');
      }
      $_dkhdpfxrjdxo76n9.remove(element, attr);
    });
  };
  var $_53v0k114tjdxo785p = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_dxlqnlzxjdxo775u.first('head').getOrDie();
    var nu = function () {
      var meta = $_8alt2yxfjdxo76l3.fromTag('meta');
      $_dkhdpfxrjdxo76n9.set(meta, 'name', 'viewport');
      $_195zrox2jdxo76ir.append(head, meta);
      return meta;
    };
    var element = $_dxlqnlzxjdxo775u.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_dkhdpfxrjdxo76n9.get(element, 'content');
    var maximize = function () {
      $_dkhdpfxrjdxo76n9.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_dkhdpfxrjdxo76n9.set(element, 'content', backup);
      } else {
        $_dkhdpfxrjdxo76n9.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_c02bf514ujdxo785x = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_c02bf514ujdxo785x.tag();
    var androidApi = $_2y5grt12ojdxo77or.api();
    var androidEvents = $_2y5grt12ojdxo77or.api();
    var enter = function () {
      mask.hide();
      $_euw48pynjdxo76w6.add(platform.container, $_4agqi1zejdxo7731.resolve('fullscreen-maximized'));
      $_euw48pynjdxo76w6.add(platform.container, $_4agqi1zejdxo7731.resolve('android-maximized'));
      meta.maximize();
      $_euw48pynjdxo76w6.add(platform.body, $_4agqi1zejdxo7731.resolve('android-scroll-reload'));
      androidApi.set($_ckjby7146jdxo781x.setup(platform.win, $_afs6qi14sjdxo785d.getWin(platform.editor).getOrDie('no')));
      $_afs6qi14sjdxo785d.getActiveApi(platform.editor).each(function (editorApi) {
        $_53v0k114tjdxo785p.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_1vrng9142jdxo780o.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_euw48pynjdxo76w6.remove(platform.container, $_4agqi1zejdxo7731.resolve('fullscreen-maximized'));
      $_euw48pynjdxo76w6.remove(platform.container, $_4agqi1zejdxo7731.resolve('android-maximized'));
      $_53v0k114tjdxo785p.restoreStyles();
      $_euw48pynjdxo76w6.remove(platform.body, $_4agqi1zejdxo7731.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_e155ka141jdxo780i = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_74hw3814wjdxo786j = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_7ybfmv11rjdxo77j8.record(Container.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({
          toggleClass: $_4agqi1zejdxo7731.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_74hw3814wjdxo786j.first(onView, 200);
    return Container.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({ toggleClass: $_4agqi1zejdxo7731.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_9fxyea14vjdxo7865 = { sketch: sketch$10 };

  var MobileSchema = $_28d4pyyejdxo76tn.objOf([
    $_b50aqly7jdxo76rd.strictObjOf('editor', [
      $_b50aqly7jdxo76rd.strict('getFrame'),
      $_b50aqly7jdxo76rd.option('getBody'),
      $_b50aqly7jdxo76rd.option('getDoc'),
      $_b50aqly7jdxo76rd.option('getWin'),
      $_b50aqly7jdxo76rd.option('getSelection'),
      $_b50aqly7jdxo76rd.option('setSelection'),
      $_b50aqly7jdxo76rd.option('clearSelection'),
      $_b50aqly7jdxo76rd.option('cursorSaver'),
      $_b50aqly7jdxo76rd.option('onKeyup'),
      $_b50aqly7jdxo76rd.option('onNodeChanged'),
      $_b50aqly7jdxo76rd.option('getCursorBox'),
      $_b50aqly7jdxo76rd.strict('onDomChanged'),
      $_b50aqly7jdxo76rd.defaulted('onTouchContent', $_3zxoftwjjdxo76dp.noop),
      $_b50aqly7jdxo76rd.defaulted('onTapContent', $_3zxoftwjjdxo76dp.noop),
      $_b50aqly7jdxo76rd.defaulted('onTouchToolstrip', $_3zxoftwjjdxo76dp.noop),
      $_b50aqly7jdxo76rd.defaulted('onScrollToCursor', $_3zxoftwjjdxo76dp.constant({ unbind: $_3zxoftwjjdxo76dp.noop })),
      $_b50aqly7jdxo76rd.defaulted('onScrollToElement', $_3zxoftwjjdxo76dp.constant({ unbind: $_3zxoftwjjdxo76dp.noop })),
      $_b50aqly7jdxo76rd.defaulted('onToEditing', $_3zxoftwjjdxo76dp.constant({ unbind: $_3zxoftwjjdxo76dp.noop })),
      $_b50aqly7jdxo76rd.defaulted('onToReading', $_3zxoftwjjdxo76dp.constant({ unbind: $_3zxoftwjjdxo76dp.noop })),
      $_b50aqly7jdxo76rd.defaulted('onToolbarScrollStart', $_3zxoftwjjdxo76dp.identity)
    ]),
    $_b50aqly7jdxo76rd.strict('socket'),
    $_b50aqly7jdxo76rd.strict('toolstrip'),
    $_b50aqly7jdxo76rd.strict('dropup'),
    $_b50aqly7jdxo76rd.strict('toolbar'),
    $_b50aqly7jdxo76rd.strict('container'),
    $_b50aqly7jdxo76rd.strict('alloy'),
    $_b50aqly7jdxo76rd.state('win', function (spec) {
      return $_d65syzx3jdxo76iv.owner(spec.socket).dom().defaultView;
    }),
    $_b50aqly7jdxo76rd.state('body', function (spec) {
      return $_8alt2yxfjdxo76l3.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_b50aqly7jdxo76rd.defaulted('translate', $_3zxoftwjjdxo76dp.identity),
    $_b50aqly7jdxo76rd.defaulted('setReadOnly', $_3zxoftwjjdxo76dp.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_28d4pyyejdxo76tn.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_8vvxr8103jdxo776g.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_4m49m112tjdxo77q4.build($_9fxyea14vjdxo7865.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_195zrox2jdxo76ir.append(mobile.container, mask.element());
    var mode = $_e155ka141jdxo780i.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_3zxoftwjjdxo76dp.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_3zxoftwjjdxo76dp.noop
    };
  };
  var $_6h5jn7140jdxo780a = { produce: produce };

  var schema$14 = [
    $_b50aqly7jdxo76rd.defaulted('shell', true),
    $_4fyf3q10ojdxo77aj.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_50ks2ly2jdxo76pg.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_g9pshf10vjdxo77cn.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_e17fok150jdxo787k = {
    name: $_3zxoftwjjdxo76dp.constant('Toolbar'),
    schema: $_3zxoftwjjdxo76dp.constant(schema$14),
    parts: $_3zxoftwjjdxo76dp.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_6ew6p910tjdxo77bf.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive(extra.behaviours), $_4fyf3q10ojdxo77aj.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_g4su5h10pjdxo77aq.composite({
    name: 'Toolbar',
    configFields: $_e17fok150jdxo787k.schema(),
    partFields: $_e17fok150jdxo787k.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_b50aqly7jdxo76rd.strict('items'),
    $_8mqb5kz6jdxo7708.markers(['itemClass']),
    $_4fyf3q10ojdxo77aj.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_g9pshf10vjdxo77cn.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_22z59d152jdxo787t = {
    name: $_3zxoftwjjdxo76dp.constant('ToolbarGroup'),
    schema: $_3zxoftwjjdxo76dp.constant(schema$15),
    parts: $_3zxoftwjjdxo76dp.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_6za9awwyjdxo76hk.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_6za9awwyjdxo76hk.deepMerge($_50ks2ly2jdxo76pg.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_4fyf3q10ojdxo77aj.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_g4su5h10pjdxo77aq.composite({
    name: 'ToolbarGroup',
    configFields: $_22z59d152jdxo787t.schema(),
    partFields: $_22z59d152jdxo787t.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_4agqi1zejdxo7731.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_dkhdpfxrjdxo76n9.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_dkhdpfxrjdxo76n9.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_cvgq7s13xjdxo77zs.bind(scope, 'touchmove', function (event) {
      $_dxlqnlzxjdxo775u.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_3zxoftwjjdxo76dp.noop);
    });
  };
  var $_61su7b153jdxo787z = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_46xflc113jdxo77ey.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_50ks2ly2jdxo76pg.derive([$_bykmte126jdxo77ln.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_d2m63by4jdxo76qi.runOnInit(function (component, simulatedEvent) {
              $_8vvxr8103jdxo776g.set(component.element(), 'overflow-x', 'auto');
              $_61su7b153jdxo787z.markAsHorizontal(component.element());
              $_9mwenq13ujdxo77z7.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_4agqi1zejdxo7731.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_4m49m112tjdxo77q4.build(Toolbar.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_50ks2ly2jdxo76pg.derive([
        Toggling.config({
          toggleClass: $_4agqi1zejdxo7731.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_4m49m112tjdxo77q4.build(Container.sketch({
      dom: { classes: [$_4agqi1zejdxo7731.resolve('toolstrip')] },
      components: [$_4m49m112tjdxo77q4.premade(toolbar)],
      containerBehaviours: $_50ks2ly2jdxo76pg.derive([Toggling.config({
          toggleClass: $_4agqi1zejdxo7731.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_akx2d9wsjdxo76fa.map(gs, $_3zxoftwjjdxo76dp.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_3zxoftwjjdxo76dp.constant(wrapper),
      toolbar: $_3zxoftwjjdxo76dp.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_4m49m112tjdxo77q4.build(Button.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_4m49m112tjdxo77q4.build(Container.sketch({
      dom: $_46xflc113jdxo77ey.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_50ks2ly2jdxo76pg.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_4m49m112tjdxo77q4.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_9rp0ln154jdxo7886 = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_bgy409137jdxo77tz.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_euw48pynjdxo76w6.remove(component.element(), slideConfig.openClass());
    $_euw48pynjdxo76w6.add(component.element(), slideConfig.closedClass());
    $_8vvxr8103jdxo776g.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_8vvxr8103jdxo776g.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_euw48pynjdxo76w6.remove(component.element(), slideConfig.closedClass());
    $_euw48pynjdxo76w6.add(component.element(), slideConfig.openClass());
    $_8vvxr8103jdxo776g.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_8vvxr8103jdxo776g.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_8vvxr8103jdxo776g.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_8vvxr8103jdxo776g.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_8vvxr8103jdxo776g.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_euw48pynjdxo76w6.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_euw48pynjdxo76w6.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_8vvxr8103jdxo776g.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_euw48pynjdxo76w6.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_euw48pynjdxo76w6.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_4u31zx158jdxo7891 = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_9a14aqyhjdxo76ua.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_9a14aqyhjdxo76ua.nu({
      classes: [slideConfig.closedClass()],
      styles: $_futrxxxsjdxo76nn.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_d2m63by4jdxo76qi.derive([$_d2m63by4jdxo76qi.run($_6a9crxwijdxo76dg.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_4u31zx158jdxo7891.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_8vvxr8103jdxo776g.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_a7tm76157jdxo788v = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_b50aqly7jdxo76rd.strict('closedClass'),
    $_b50aqly7jdxo76rd.strict('openClass'),
    $_b50aqly7jdxo76rd.strict('shrinkingClass'),
    $_b50aqly7jdxo76rd.strict('growingClass'),
    $_b50aqly7jdxo76rd.option('getAnimationRoot'),
    $_8mqb5kz6jdxo7708.onHandler('onShrunk'),
    $_8mqb5kz6jdxo7708.onHandler('onStartShrink'),
    $_8mqb5kz6jdxo7708.onHandler('onGrown'),
    $_8mqb5kz6jdxo7708.onHandler('onStartGrow'),
    $_b50aqly7jdxo76rd.defaulted('expanded', false),
    $_b50aqly7jdxo76rd.strictOf('dimension', $_28d4pyyejdxo76tn.choose('property', {
      width: [
        $_8mqb5kz6jdxo7708.output('property', 'width'),
        $_8mqb5kz6jdxo7708.output('getDimension', function (elem) {
          return $_9ds5wg11kjdxo77hy.get(elem) + 'px';
        })
      ],
      height: [
        $_8mqb5kz6jdxo7708.output('property', 'height'),
        $_8mqb5kz6jdxo7708.output('getDimension', function (elem) {
          return $_bmo94n102jdxo776d.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_3zxoftwjjdxo76dp.curry(state.set, false),
      setExpanded: $_3zxoftwjjdxo76dp.curry(state.set, true),
      readState: readState
    });
  };
  var $_ejrmfq15ajdxo789i = { init: init$4 };

  var Sliding = $_50ks2ly2jdxo76pg.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_a7tm76157jdxo788v,
    apis: $_4u31zx158jdxo7891,
    state: $_ejrmfq15ajdxo789i
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_4m49m112tjdxo77q4.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_4agqi1zejdxo7731.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_50ks2ly2jdxo76pg.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_4agqi1zejdxo7731.resolve('dropup-closed'),
          openClass: $_4agqi1zejdxo7731.resolve('dropup-open'),
          shrinkingClass: $_4agqi1zejdxo7731.resolve('dropup-shrinking'),
          growingClass: $_4agqi1zejdxo7731.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_3nbnkpzdjdxo772w.orientation(function (component, data) {
          disappear($_3zxoftwjjdxo76dp.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_3zxoftwjjdxo76dp.constant(dropup),
      element: dropup.element
    };
  };
  var $_g31ho155jdxo788f = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_20hbz0zpjdxo774q.BACKSPACE()[0] && !$_akx2d9wsjdxo76fa.contains([
      'input',
      'textarea'
    ], $_bc2oaqxkjdxo76lx.name(event.target()));
  };
  var isFirefox = $_bx0iviwkjdxo76dy.detect().browser.isFirefox();
  var settingsSchema = $_28d4pyyejdxo76tn.objOfOnly([
    $_b50aqly7jdxo76rd.strictFunction('triggerEvent'),
    $_b50aqly7jdxo76rd.strictFunction('broadcastEvent'),
    $_b50aqly7jdxo76rd.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_cvgq7s13xjdxo77zs.capture(container, 'focus', handler);
    } else {
      return $_cvgq7s13xjdxo77zs.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_cvgq7s13xjdxo77zs.capture(container, 'blur', handler);
    } else {
      return $_cvgq7s13xjdxo77zs.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_28d4pyyejdxo76tn.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_bx0iviwkjdxo76dy.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_37jn2b144jdxo781d.monitor(settings);
    var simpleEvents = $_akx2d9wsjdxo76fa.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_cvgq7s13xjdxo77zs.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_cvgq7s13xjdxo77zs.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_99sq1cwhjdxo76d0.postBlur(), event);
      }, 0);
    });
    var defaultView = $_d65syzx3jdxo76iv.defaultView(container);
    var onWindowScroll = $_cvgq7s13xjdxo77zs.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_99sq1cwhjdxo76d0.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_akx2d9wsjdxo76fa.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_f0rw6715djdxo78ab = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_futrxxxsjdxo76nn.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_g03wmh15fjdxo78ay = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_3zxoftwjjdxo76dp.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_3zxoftwjjdxo76dp.noop,
      isStopped: stopper.get,
      isCut: $_3zxoftwjjdxo76dp.constant(false),
      event: $_3zxoftwjjdxo76dp.constant(event),
      setTarget: $_3zxoftwjjdxo76dp.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_3zxoftwjjdxo76dp.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_aayb5815gjdxo78b3 = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_1mkbevxwjdxo76om.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_aayb5815gjdxo78b3.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_8mksgh134jdxo77t3.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_d65syzx3jdxo76iv.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_g03wmh15fjdxo78ay.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_aayb5815gjdxo78b3.fromExternal(rawEvent);
    $_akx2d9wsjdxo76fa.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_8mksgh134jdxo77t3.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_g03wmh15fjdxo78ay.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_2la91w15ejdxo78an = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_c2a7cdyvjdxo76xf.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_4vivu715jjdxo78bo = { closest: closest$4 };

  var eventHandler = $_39twflx4jdxo76ji.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_3zxoftwjjdxo76dp.constant(id),
      descHandler: $_3zxoftwjjdxo76dp.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_27taa9x0jdxo76ht.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_8mksgh134jdxo77t3.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_9376vv10xjdxo77dm.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_futrxxxsjdxo76nn.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_futrxxxsjdxo76nn.readOptFrom(registry, type).map(function (handlers) {
        return $_27taa9x0jdxo76ht.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_futrxxxsjdxo76nn.readOpt(type);
      var handlers = readType(registry);
      return $_4vivu715jjdxo78bo.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_27taa9x0jdxo76ht.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_9376vv10xjdxo77dm.read(elem).fold(function () {
        return $_9376vv10xjdxo77dm.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_azsjjhxmjdxo76mn.element(conflict.element()) + '\nCannot use it for: ' + $_azsjjhxmjdxo76mn.element(component.element()) + '\n' + 'The conflicting element is' + ($_das13dxjjdxo76lp.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_futrxxxsjdxo76nn.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_9376vv10xjdxo77dm.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_futrxxxsjdxo76nn.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_4m49m112tjdxo77q4.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_d65syzx3jdxo76iv.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_fpx5cox9jdxo76k0.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_f0rw6715djdxo78ab.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_5ph10nxljdxo76m4.monitorEvent(eventName, event.target(), function (logger) {
          return $_2la91w15ejdxo78an.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_2la91w15ejdxo78an.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_3zxoftwjjdxo76dp.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_5ph10nxljdxo76m4.monitorEvent(customType, target, function (logger) {
          $_2la91w15ejdxo78an.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_9376vv10xjdxo77dm.read(target).fold(function () {
          $_8fjsagytjdxo76x0.focus(target);
        }, function (_alloyId) {
          $_5ph10nxljdxo76m4.monitorEvent($_99sq1cwhjdxo76d0.focus(), target, function (logger) {
            $_2la91w15ejdxo78an.triggerHandler(lookup, $_99sq1cwhjdxo76d0.focus(), {
              originator: $_3zxoftwjjdxo76dp.constant(originator),
              target: $_3zxoftwjjdxo76dp.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_4m49m112tjdxo77q4.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_bc2oaqxkjdxo76lx.isText(component.element())) {
        registry.register(component);
        $_akx2d9wsjdxo76fa.each(component.components(), addToWorld);
        systemApi.triggerEvent($_99sq1cwhjdxo76d0.systemInit(), component.element(), { target: $_3zxoftwjjdxo76dp.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_bc2oaqxkjdxo76lx.isText(component.element())) {
        $_akx2d9wsjdxo76fa.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_29x44cx1jdxo76i0.attach(root, component);
    };
    var remove = function (component) {
      $_29x44cx1jdxo76i0.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_d4v1ijxhjdxo76ld.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_99sq1cwhjdxo76d0.receive());
      $_akx2d9wsjdxo76fa.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_8mksgh134jdxo77t3.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_3zxoftwjjdxo76dp.constant(true),
        data: $_3zxoftwjjdxo76dp.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_3zxoftwjjdxo76dp.constant(false),
        channels: $_3zxoftwjjdxo76dp.constant(channels),
        data: $_3zxoftwjjdxo76dp.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_9376vv10xjdxo77dm.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_3zxoftwjjdxo76dp.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_638wjp15cjdxo789v = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_3zxoftwjjdxo76dp.constant($_4agqi1zejdxo7731.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_3zxoftwjjdxo76dp.constant($_4agqi1zejdxo7731.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_4m49m112tjdxo77q4.build(Container.sketch({
      dom: { classes: [$_4agqi1zejdxo7731.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_50ks2ly2jdxo76pg.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_638wjp15cjdxo789v.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_4agqi1zejdxo7731.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2y5grt12ojdxo77or.api();
    var switchToEdit = $_9rp0ln154jdxo7886.makeEditSwitch(webapp);
    var socket = $_9rp0ln154jdxo7886.makeSocket();
    var dropup = $_g31ho155jdxo788f.build($_3zxoftwjjdxo76dp.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_6h5jn7140jdxo780a.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_9rp0ln154jdxo7886.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_3zxoftwjjdxo76dp.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_3zxoftwjjdxo76dp.constant(socket),
      dropup: $_3zxoftwjjdxo76dp.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_8alt2yxfjdxo76l3.fromTag('input');
    $_8vvxr8103jdxo776g.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_195zrox2jdxo76ir.append(parent, input);
    $_8fjsagytjdxo76x0.focus(input);
    operation(input);
    $_d4v1ijxhjdxo76ld.remove(input);
  };
  var $_3wzq6e15ojdxo78cu = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_8fjsagytjdxo76x0.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_eused115qjdxo78db = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_8fjsagytjdxo76x0.active().each(function (active) {
      if (!$_fpx5cox9jdxo76k0.eq(active, frame)) {
        $_8fjsagytjdxo76x0.blur(active);
      }
    });
    cWin.focus();
    $_8fjsagytjdxo76x0.focus($_8alt2yxfjdxo76l3.fromDom(cWin.document.body));
    $_eused115qjdxo78db.refresh(cWin);
  };
  var $_4hterc15pjdxo78d6 = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_4hterc15pjdxo78d6.resume(cWin, frame);
    };
    var toReading = function () {
      $_3wzq6e15ojdxo78cu.input(outerBody, $_8fjsagytjdxo76x0.blur);
    };
    var captureInput = $_cvgq7s13xjdxo77zs.bind(page, 'keydown', function (evt) {
      if (!$_akx2d9wsjdxo76fa.contains([
          'input',
          'textarea'
        ], $_bc2oaqxkjdxo76lx.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_8fjsagytjdxo76x0.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_4hterc15pjdxo78d6.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_3zxoftwjjdxo76dp.noop
    };
  };
  var $_1jfu6915njdxo78cm = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_bmo94n102jdxo776d.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_9j39vc143jdxo7818.monitor(editorApi);
    var refreshThrottle = $_74hw3814wjdxo786j.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_cvgq7s13xjdxo77zs.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_fpx5cox9jdxo76k0.eq(editorApi.html(), touchEvent.target()) || $_fpx5cox9jdxo76k0.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_cvgq7s13xjdxo77zs.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_cvgq7s13xjdxo77zs.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_cvgq7s13xjdxo77zs.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_cvgq7s13xjdxo77zs.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_cvgq7s13xjdxo77zs.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_akx2d9wsjdxo76fa.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_8l0sez15rjdxo78df = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_8alt2yxfjdxo76l3.fromTag('div');
    $_euw48pynjdxo76w6.add(container, $_4agqi1zejdxo7731.resolve('unfocused-selections'));
    $_195zrox2jdxo76ir.append($_8alt2yxfjdxo76l3.fromDom(doc.documentElement), container);
    var onTouch = $_cvgq7s13xjdxo77zs.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_4hterc15pjdxo78d6.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_8alt2yxfjdxo76l3.fromTag('span');
      $_bgy409137jdxo77tz.add(span, [
        $_4agqi1zejdxo7731.resolve('layer-editor'),
        $_4agqi1zejdxo7731.resolve('unfocused-selection')
      ]);
      $_8vvxr8103jdxo776g.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_c5z9mg148jdxo782c.getRectangles(win);
      var spans = $_akx2d9wsjdxo76fa.map(rectangles, make);
      $_bqnd9lxijdxo76li.append(container, spans);
    };
    var clear = function () {
      $_d4v1ijxhjdxo76ld.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_d4v1ijxhjdxo76ld.remove(container);
    };
    var isActive = function () {
      return $_d65syzx3jdxo76iv.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_akx2d9wsjdxo76fa.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_djo6f415xjdxo78eu = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_djo6f415xjdxo78eu.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_3uzrmv15yjdxo78ex = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_3efatjy0jdxo76pb.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_4ghibs161jdxo78fp = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_4ghibs161jdxo78fp.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_6iq1po13wjdxo77zi.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_d65syzx3jdxo76iv.owner(socket).dom().defaultView;
    var viewportHeight = $_bmo94n102jdxo776d.get(socket) + $_bmo94n102jdxo776d.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_bmo94n102jdxo776d.get(socket) + $_bmo94n102jdxo776d.get(dropup) - greenzoneHeight;
    $_8vvxr8103jdxo776g.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_1f505o160jdxo78fj = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_1mkbevxwjdxo76om.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_4agqi1zejdxo7731.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_4agqi1zejdxo7731.resolve('y-property');
  var yScrollingData = 'data-' + $_4agqi1zejdxo7731.resolve('scrolling');
  var windowSizeData = 'data-' + $_4agqi1zejdxo7731.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_dlh7mg147jdxo7828.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_dkhdpfxrjdxo76n9.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_dlh7mg147jdxo7828.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_dkhdpfxrjdxo76n9.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_fnwj0qzvjdxo775p.descendants(container, '[' + yFixedData + ']');
    return $_akx2d9wsjdxo76fa.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_dkhdpfxrjdxo76n9.get(toolbar, 'style');
    $_8vvxr8103jdxo776g.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_dkhdpfxrjdxo76n9.set(toolbar, yFixedData, '0px');
    $_dkhdpfxrjdxo76n9.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_dkhdpfxrjdxo76n9.set(toolbar, 'style', oldToolbarStyle || '');
      $_dkhdpfxrjdxo76n9.remove(toolbar, yFixedData);
      $_dkhdpfxrjdxo76n9.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_dkhdpfxrjdxo76n9.get(viewport, 'style');
    $_9mwenq13ujdxo77z7.register(viewport);
    $_8vvxr8103jdxo776g.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_dkhdpfxrjdxo76n9.set(viewport, yFixedData, toolbarHeight + 'px');
    $_dkhdpfxrjdxo76n9.set(viewport, yScrollingData, 'true');
    $_dkhdpfxrjdxo76n9.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_9mwenq13ujdxo77z7.deregister(viewport);
      $_dkhdpfxrjdxo76n9.set(viewport, 'style', oldViewportStyle || '');
      $_dkhdpfxrjdxo76n9.remove(viewport, yFixedData);
      $_dkhdpfxrjdxo76n9.remove(viewport, yScrollingData);
      $_dkhdpfxrjdxo76n9.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_dkhdpfxrjdxo76n9.get(dropup, 'style');
    $_8vvxr8103jdxo776g.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_dkhdpfxrjdxo76n9.set(dropup, yFixedData, '0px');
    $_dkhdpfxrjdxo76n9.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_dkhdpfxrjdxo76n9.set(dropup, 'style', oldDropupStyle || '');
      $_dkhdpfxrjdxo76n9.remove(dropup, yFixedData);
      $_dkhdpfxrjdxo76n9.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_d65syzx3jdxo76iv.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_dkhdpfxrjdxo76n9.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_d65syzx3jdxo76iv.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_bmo94n102jdxo776d.get(toolbar);
    var dropupHeight = $_bmo94n102jdxo776d.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_bmo94n102jdxo776d.get(toolbar);
        var dropupHeight_1 = $_bmo94n102jdxo776d.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_dkhdpfxrjdxo76n9.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_8vvxr8103jdxo776g.set(viewport, 'height', newHeight + 'px');
        $_8vvxr8103jdxo776g.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_1f505o160jdxo78fj.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_dkhdpfxrjdxo76n9.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_1f505o160jdxo78fj.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_3zxoftwjjdxo76dp.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_2ljsho15zjdxo78f1 = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_3uzrmv15yjdxo78ex.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_4agqi1zejdxo7731.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_8vvxr8103jdxo776g.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_3zxoftwjjdxo76dp.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_8vvxr8103jdxo776g.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_8vvxr8103jdxo776g.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_3zxoftwjjdxo76dp.curry(getScrollTop, element);
      $_dkhdpfxrjdxo76n9.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_dlh7mg147jdxo7828.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_dkhdpfxrjdxo76n9.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_dkhdpfxrjdxo76n9.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_3zxoftwjjdxo76dp.curry(getTop, element);
      var update = function (newTop) {
        $_8vvxr8103jdxo776g.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_2ljsho15zjdxo78f1.getYFixedData(element) + 'px';
    $_8vvxr8103jdxo776g.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_d65syzx3jdxo76iv.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_gdzrvd15ujdxo78eg = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_1f505o160jdxo78fj.getGreenzone(socket, dropup);
    var refreshCursor = $_3zxoftwjjdxo76dp.curry($_eused115qjdxo78db.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_gdzrvd15ujdxo78eg.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_gdzrvd15ujdxo78eg.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_618zmm163jdxo78fx = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_akx2d9wsjdxo76fa.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_1vvl0x166jdxo78ga = { par: par };

  var par$1 = function (futures) {
    return $_1vvl0x166jdxo78ga.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_akx2d9wsjdxo76fa.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_32wwpo165jdxo78g8 = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_8vvxr8103jdxo776g.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_8vvxr8103jdxo776g.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_gdzrvd15ujdxo78eg.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_2ljsho15zjdxo78f1.findFixtures(container);
    var updates = $_akx2d9wsjdxo76fa.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_32wwpo165jdxo78g8.par(updates);
  };
  var $_g6mfi2164jdxo78g1 = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_gdzrvd15ujdxo78eg.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_c5z9mg148jdxo782c.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_3zxoftwjjdxo76dp.constant(viewTop),
          bottom: $_3zxoftwjjdxo76dp.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_74hw3814wjdxo786j.last(function () {
      scroller.idle(function () {
        $_g6mfi2164jdxo78g1.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_cvgq7s13xjdxo77zs.bind($_8alt2yxfjdxo76l3.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_g6mfi2164jdxo78g1.updatePositions(container, outerWindow.pageYOffset).get($_3zxoftwjjdxo76dp.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_2ljsho15zjdxo78f1.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_das13dxjjdxo76lp.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_6iq1po13wjdxo77zi.onChange(outerWindow, {
      onChange: $_3zxoftwjjdxo76dp.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_cvgq7s13xjdxo77zs.bind($_8alt2yxfjdxo76l3.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_618zmm163jdxo78fx.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_8vvxr8103jdxo776g.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_gdzrvd15ujdxo78eg.moveOnlyTop(socket, newYOffset).get($_3zxoftwjjdxo76dp.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_3wzq6e15ojdxo78cu.input($_das13dxjjdxo76lp.body(), $_8fjsagytjdxo76x0.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_3zxoftwjjdxo76dp.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_e0b1mn15sjdxo78do = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_c02bf514ujdxo785x.tag();
    var priorState = $_2y5grt12ojdxo77or.value();
    var scrollEvents = $_2y5grt12ojdxo77or.value();
    var iosApi = $_2y5grt12ojdxo77or.api();
    var iosEvents = $_2y5grt12ojdxo77or.api();
    var enter = function () {
      mask.hide();
      var doc = $_8alt2yxfjdxo76l3.fromDom(document);
      $_afs6qi14sjdxo785d.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_8vvxr8103jdxo776g.getRaw(platform.socket, 'height'),
          iframeHeight: $_8vvxr8103jdxo776g.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_61su7b153jdxo787z.exclusive(doc, '.' + $_9mwenq13ujdxo77z7.scrollable()) });
        $_euw48pynjdxo76w6.add(platform.container, $_4agqi1zejdxo7731.resolve('fullscreen-maximized'));
        $_53v0k114tjdxo785p.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_8vvxr8103jdxo776g.set(platform.socket, 'overflow', 'scroll');
        $_8vvxr8103jdxo776g.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_8fjsagytjdxo76x0.focus(editorApi.body());
        var setupBag = $_39twflx4jdxo76ji.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_e0b1mn15sjdxo78do.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_3zxoftwjjdxo76dp.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_1jfu6915njdxo78cm.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_8l0sez15rjdxo78df.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_8vvxr8103jdxo776g.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_8vvxr8103jdxo776g.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_euw48pynjdxo76w6.remove(platform.container, $_4agqi1zejdxo7731.resolve('fullscreen-maximized'));
      $_53v0k114tjdxo785p.restoreStyles();
      $_9mwenq13ujdxo77z7.deregister(platform.toolbar);
      $_8vvxr8103jdxo776g.remove(platform.socket, 'overflow');
      $_8vvxr8103jdxo776g.remove(platform.socket, '-webkit-overflow-scrolling');
      $_8fjsagytjdxo76x0.blur(platform.editor.getFrame());
      $_afs6qi14sjdxo785d.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_6jj64r15mjdxo78c8 = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_28d4pyyejdxo76tn.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_8vvxr8103jdxo776g.set(mobile.toolstrip, 'width', '100%');
    $_8vvxr8103jdxo776g.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_4m49m112tjdxo77q4.build($_9fxyea14vjdxo7865.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_6jj64r15mjdxo78c8.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_3zxoftwjjdxo76dp.noop
    };
  };
  var $_1o9b4015ljdxo78c0 = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_4agqi1zejdxo7731.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2y5grt12ojdxo77or.api();
    var switchToEdit = $_9rp0ln154jdxo7886.makeEditSwitch(webapp);
    var socket = $_9rp0ln154jdxo7886.makeSocket();
    var dropup = $_g31ho155jdxo788f.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_1o9b4015ljdxo78c0.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_9rp0ln154jdxo7886.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_3zxoftwjjdxo76dp.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_3zxoftwjjdxo76dp.constant(socket),
      dropup: $_3zxoftwjjdxo76dp.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_futrxxxsjdxo76nn.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_bc22u4167jdxo78gd = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_bgsjplz1jdxo76ye.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_27taa9x0jdxo76ht.keys(editor.formatter.get());
    $_akx2d9wsjdxo76fa.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_akx2d9wsjdxo76fa.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_4ijglp169jdxo78gg = {
    init: init$5,
    fontSizes: $_3zxoftwjjdxo76dp.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_5bs58z16ajdxo78gl = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_3zxoftwjjdxo76dp.constant('toReading');
  var EDITING = $_3zxoftwjjdxo76dp.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_bc22u4167jdxo78gd.derive(editor);
      if ($_35qzdbz0jdxo76yc.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_5bs58z16ajdxo78gl.fireSkinLoaded(editor));
      } else {
        $_5bs58z16ajdxo78gl.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_8alt2yxfjdxo76l3.fromTag('div');
      var realm = $_bx0iviwkjdxo76dy.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_8alt2yxfjdxo76l3.fromDom(args.targetNode);
      $_195zrox2jdxo76ir.after(original, wrapper);
      $_29x44cx1jdxo76i0.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_8fjsagytjdxo76x0.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_6iq1po13wjdxo77zi.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_bgsjplz1jdxo76ye.orientationChanged()], { width: $_6iq1po13wjdxo77zi.getActualWidth(outerWindow) });
        },
        onReady: $_3zxoftwjjdxo76dp.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_8alt2yxfjdxo76l3.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_3zxoftwjjdxo76dp.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_8alt2yxfjdxo76l3.fromDom(editor.editorContainer.querySelector('.' + $_4agqi1zejdxo7731.resolve('toolbar')));
              findFocusIn(toolbar).each($_76m9anwgjdxo76c4.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_bc2oaqxkjdxo76lx.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_bc2oaqxkjdxo76lx.name(target) === 'a') {
                var component = realm.system().getByDom($_8alt2yxfjdxo76l3.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_2decqmyzjdxo76y9.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_8alt2yxfjdxo76l3.fromDom(editor.editorContainer),
          socket: $_8alt2yxfjdxo76l3.fromDom(editor.contentAreaContainer),
          toolstrip: $_8alt2yxfjdxo76l3.fromDom(editor.editorContainer.querySelector('.' + $_4agqi1zejdxo7731.resolve('toolstrip'))),
          toolbar: $_8alt2yxfjdxo76l3.fromDom(editor.editorContainer.querySelector('.' + $_4agqi1zejdxo7731.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_3zxoftwjjdxo76dp.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_bgsjplz1jdxo76ye.dropupDismissed()], {});
          });
        };
        $_5ph10nxljdxo76m4.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_79e8p9zfjdxo7734.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_79e8p9zfjdxo7734.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_cqc34jz2jdxo76yl.setup(realm, editor);
        var items = $_cqc34jz2jdxo76yl.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_4ijglp169jdxo78gg.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_3zxoftwjjdxo76dp.identity,
          close: $_3zxoftwjjdxo76dp.noop,
          reposition: $_3zxoftwjjdxo76dp.noop,
          getArgs: $_3zxoftwjjdxo76dp.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();

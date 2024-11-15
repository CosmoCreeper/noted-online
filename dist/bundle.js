(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __glob = (map) => (path) => {
    var fn = map[path];
    if (fn) return fn();
    throw new Error("Module not found in bundle: " + path);
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n2 = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n2:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n2 = m + 1, x = a[n2];
            if (0 > g(C, c)) n2 < e && 0 > g(x, C) ? (a[d] = x, a[n2] = c, d = n2) : (a[d] = C, a[m] = c, d = m);
            else if (n2 < e && 0 > g(x, c)) a[d] = x, a[n2] = c, d = n2;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++) da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return Xb(e), a;
              if (f === d) return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e) hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b)) return a;
      }
      function ve(a, b) {
        if ("change" === a) return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a) return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a) return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e])) return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a]) return Xe[a];
        if (!We[a]) return a;
        var b = We[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n2 = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n2 = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n2 = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n2 = c.relatedTarget || c.toElement, k2 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J = Vb(n2), n2 !== J || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
                } else k2 = null, n2 = d2;
                if (k2 !== n2) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n2 ? h2 : ue(n2);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n2, c, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n2) b: {
                    t = k2;
                    x = n2;
                    w = 0;
                    for (u = t; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t = vf(t), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n2 && null !== J && wf(g2, J, n2, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n2(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n3 = r(e2, u, h2[w], k2);
            if (null === n3) {
              null === u && (u = x);
              break;
            }
            a && u && null === n3.alternate && b(e2, u);
            g2 = f(n3, g2, w);
            null === m2 ? l2 = n3 : m2.sibling = n3;
            m2 = n3;
            u = x;
          }
          if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n3 = h2.next(); null !== m2 && !n3.done; w++, n3 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n3.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n3.done) return c(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n3.done; w++, n3 = h2.next()) n3 = q(e2, n3.value, k2), null !== n3 && (g2 = f(n3, g2, w), null === u ? l2 = n3 : u.sibling = n3, u = n3);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n3.done; w++, n3 = h2.next()) n3 = y(m2, e2, w, n3.value, k2), null !== n3 && (a && null !== n3.alternate && m2.delete(null === n3.key ? w : n3.key), g2 = f(n3, g2, w), null === u ? l2 = n3 : u.sibling = n3, u = n3);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n2(a2, d2, f2, h2);
            if (Ka(f2)) return t(a2, d2, f2, h2);
            Mg(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e = a.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n2 = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n2 = t.payload;
                    if ("function" === typeof n2) {
                      q = n2.call(y, q, r);
                      break a;
                    }
                    q = n2;
                    break a;
                  case 3:
                    n2.flags = n2.flags & -65537 | 128;
                  case 0:
                    n2 = t.payload;
                    r = "function" === typeof n2 ? n2.call(y, q, r) : n2;
                    if (null === r || void 0 === r) break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G(wh, b);
        G(vh, a);
        G(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(uh);
        G(uh, b);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G(vh, a), G(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a = M.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a : O = O.next = a;
        }
        return O;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (dh = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e, b), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e);
        }
        return e;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && fi(a);
      }
      function ai(a, b, c) {
        return c(function() {
          ei(b) && fi(a);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii.bind(null, M, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e = Th();
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b, c, f, d);
            return;
          }
        }
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, f, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni(a, b) {
        return li(4, 2, a, b);
      }
      function oi(a, b) {
        return li(4, 4, a, b);
      }
      function pi(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b, a), c);
      }
      function ri() {
      }
      function si(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e = R();
          gi(c, a, d, e);
          Bi(c, b, d);
        }
      }
      function ii(a, b, c) {
        var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh(a, b, e, d);
          null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M || null !== b && b === M;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi(ai.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R(), d = yi(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi(b, a, d, c), oh(b, a, d));
      } };
      function Fi(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function Gi(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        kh(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Li(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Li(a, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
      }
      function Ui(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ch(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Xi(a, b, d, e);
        return b.child;
      }
      function $i(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = Rg(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
        }
        b.flags |= 1;
        a = Pg(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi(a, b, e);
        }
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
        Xi(a, b, e, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        ch(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Xi(a, b, c, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else f = false;
        ch(b, e);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          var n2 = b.memoizedState;
          h !== q || r !== n2 || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n2 = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n2, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f, e);
      }
      function jj(a, b, c, d, e, f) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Xi(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki(f, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Xi(a, b, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G(L, L.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f) throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(L);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                  q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y;
              }
              c = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
        else for (; null !== V; ) {
          b = V;
          try {
            var n2 = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t = n2.memoizedProps, J = n2.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
        n2 = Nj;
        Nj = false;
        return n2;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U || Lj(c, b);
          case 6:
            var d = X, e = Xj;
            X = null;
            Yj(a, b, c);
            X = d;
            Xj = e;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f, g, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q = k[g + 1];
                  "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n2 = r.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                        } catch (t) {
                          W(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t) {
                    W(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a);
                Wj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          if (6 === b) Ck(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f, b);
                  y.mode & 1 && Si(f, l, b);
                  b = y;
                  k = l;
                  var n2 = b.updateQueue;
                  if (null === n2) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else n2.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f, b);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Ni(f, k, b);
                    ph(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Qi(f, h, b);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === Q && (Y = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e);
        f = a.pendingLanes;
        0 === f && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n2 = f.alternate;
                    if (null !== n2) {
                      var t = n2.child;
                      if (null !== t) {
                        n2.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x = f.sibling;
                  if (null !== x) {
                    x.return = f.return;
                    V = x;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            ch(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Zk(d);
              a = Ci(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i(null, b, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(
                        f.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e, f, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
          case Ia:
            return pj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e, f, g, h, k) {
        a = new al(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e, f, g, h, k) {
        a = bl(c, d, true, a, e, f, g, h, k);
        a.context = dl(null);
        c = a.current;
        d = R();
        e = yi(c);
        f = mh(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e = b.current, f = R(), g = yi(e);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e, b, g);
        null !== a && (gi(a, e, g, f), oh(a, e, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = gl(g);
              f.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k);
            h.call(a2);
          };
        }
        var k = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k, c, d);
        });
        return k;
      }
      function rl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl(b, g, a, e);
        } else g = ql(c, b, a, e, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R();
                gi(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R();
            gi(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R();
            gi(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // sounds/custom/vineboom/check.mp3
  var require_check = __commonJS({
    "sounds/custom/vineboom/check.mp3"(exports, module) {
      module.exports = "./assets/check-YJN4RWNO.mp3";
    }
  });

  // sounds/djkhaled/all.mp3
  var require_all = __commonJS({
    "sounds/djkhaled/all.mp3"(exports, module) {
      module.exports = "./assets/all-JAKCPL37.mp3";
    }
  });

  // sounds/djkhaled/check.mp3
  var require_check2 = __commonJS({
    "sounds/djkhaled/check.mp3"(exports, module) {
      module.exports = "./assets/check-RREGPAGK.mp3";
    }
  });

  // sounds/doorbell/all.mp3
  var require_all2 = __commonJS({
    "sounds/doorbell/all.mp3"(exports, module) {
      module.exports = "./assets/all-P3LCGST7.mp3";
    }
  });

  // sounds/doorbell/check.mp3
  var require_check3 = __commonJS({
    "sounds/doorbell/check.mp3"(exports, module) {
      module.exports = "./assets/check-EV54DGSU.mp3";
    }
  });

  // sounds/doorbell/uncheck.mp3
  var require_uncheck = __commonJS({
    "sounds/doorbell/uncheck.mp3"(exports, module) {
      module.exports = "./assets/uncheck-CW3DLM7X.mp3";
    }
  });

  // src/index.tsx
  var import_client = __toESM(require_client(), 1);

  // node_modules/react-router-dom/dist/index.js
  var React2 = __toESM(require_react());
  var ReactDOM = __toESM(require_react_dom());

  // node_modules/react-router/dist/index.js
  var React = __toESM(require_react());

  // node_modules/@remix-run/router/dist/router.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var Action;
  (function(Action2) {
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
  })(Action || (Action = {}));
  var PopStateEventType = "popstate";
  function createHashHistory(options) {
    if (options === void 0) {
      options = {};
    }
    function createHashLocation(window2, globalHistory) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = parsePath(window2.location.hash.substr(1));
      if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
        pathname = "/" + pathname;
      }
      return createLocation(
        "",
        {
          pathname,
          search,
          hash
        },
        // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null,
        globalHistory.state && globalHistory.state.key || "default"
      );
    }
    function createHashHref(window2, to) {
      let base = window2.document.querySelector("base");
      let href = "";
      if (base && base.getAttribute("href")) {
        let url = window2.location.href;
        let hashIndex = url.indexOf("#");
        href = hashIndex === -1 ? url : url.slice(0, hashIndex);
      }
      return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
      warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }
  function getHistoryState(location, index) {
    return {
      usr: location.state,
      key: location.key,
      idx: index
    };
  }
  function createLocation(current, to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = _extends({
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey()
    });
    return location;
  }
  function createPath(_ref) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) {
      options = {};
    }
    let {
      window: window2 = document.defaultView,
      v5Compat = false
    } = options;
    let globalHistory = window2.history;
    let action = Action.Pop;
    let listener = null;
    let index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends({}, globalHistory.state, {
        idx: index
      }), "");
    }
    function getIndex() {
      let state = globalHistory.state || {
        idx: null
      };
      return state.idx;
    }
    function handlePop() {
      action = Action.Pop;
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: history.location,
          delta
        });
      }
    }
    function push(to, state) {
      action = Action.Push;
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex() + 1;
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 1
        });
      }
    }
    function replace2(to, state) {
      action = Action.Replace;
      let location = createLocation(history.location, to, state);
      if (validateLocation) validateLocation(location, to);
      index = getIndex();
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 0
        });
      }
    }
    function createURL(to) {
      let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
      let href = typeof to === "string" ? to : createPath(to);
      href = href.replace(/ $/, "%20");
      invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
      return new URL(href, base);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n2) {
        return globalHistory.go(n2);
      }
    };
    return history;
  }
  var ResultType;
  (function(ResultType2) {
    ResultType2["data"] = "data";
    ResultType2["deferred"] = "deferred";
    ResultType2["redirect"] = "redirect";
    ResultType2["error"] = "error";
  })(ResultType || (ResultType = {}));
  function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; ++i) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
  }
  function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }
    if (parentsMeta === void 0) {
      parentsMeta = [];
    }
    if (parentPath === void 0) {
      parentPath = "";
    }
    let flattenRoute = (route, index, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
        );
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index) => {
      var _route$path;
      if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
  }
  function rankRouteBranches(branches) {
    branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n2, i) => n2 === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial) {
    if (allowPartial === void 0) {
      allowPartial = false;
    }
    let {
      routesMeta
    } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      }, remainingPathname);
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        }, remainingPathname);
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo3, _ref, index) => {
      let {
        paramName,
        isOptional
      } = _ref;
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo3[paramName] = void 0;
      } else {
        memo3[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo3;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }
    if (end === void 0) {
      end = true;
    }
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
      params.push({
        paramName,
        isOptional: isOptional != null
      });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
      params.push({
        paramName: "*"
      });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else ;
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function getPathContributingMatches(matches) {
    return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
  }
  function getResolveToMatches(matches, v7_relativeSplatPath) {
    let pathMatches = getPathContributingMatches(matches);
    if (v7_relativeSplatPath) {
      return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
    }
    return pathMatches.map((match) => match.pathnameBase);
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) {
      isPathRelative = false;
    }
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = _extends({}, toArg);
      invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
      invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
      invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths2) => paths2.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = ["post", "put", "patch", "delete"];
  var validMutationMethods = new Set(validMutationMethodsArr);
  var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");

  // node_modules/react-router/dist/index.js
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var DataRouterContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    DataRouterContext.displayName = "DataRouter";
  }
  var DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    DataRouterStateContext.displayName = "DataRouterState";
  }
  if (false) {
    AwaitContext.displayName = "Await";
  }
  var NavigationContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    NavigationContext.displayName = "Navigation";
  }
  var LocationContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    LocationContext.displayName = "Location";
  }
  var RouteContext = /* @__PURE__ */ React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  if (false) {
    RouteContext.displayName = "Route";
  }
  var RouteErrorContext = /* @__PURE__ */ React.createContext(null);
  if (false) {
    RouteErrorContext.displayName = "RouteError";
  }
  function useInRouterContext() {
    return React.useContext(LocationContext) != null;
  }
  function useLocation() {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useLocation() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    return React.useContext(LocationContext).location;
  }
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React.useContext(NavigationContext).static;
    if (!isStatic) {
      React.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let {
      isDataRoute
    } = React.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useNavigate() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let dataRouterContext = React.useContext(DataRouterContext);
    let {
      basename,
      future,
      navigator: navigator2
    } = React.useContext(NavigationContext);
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
    let activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      false ? warning(activeRef.current, navigateEffectWarning) : void 0;
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
    }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
    return navigate;
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() ? false ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useRoutes() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      navigator: navigator2
    } = React.useContext(NavigationContext);
    let {
      matches: parentMatches
    } = React.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (false) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      var _parsedLocationArg$pa;
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? false ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, {
      pathname: remainingPathname
    });
    if (false) {
      false ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
      false ? warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
    }
    let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
      ]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
      ])
    })), parentMatches, dataRouterState, future);
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React.createElement(LocationContext.Provider, {
        value: {
          location: _extends2({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default"
          }, location),
          navigationType: Action.Pop
        }
      }, renderedMatches);
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
      padding: "0.5rem",
      backgroundColor: lightgrey
    };
    let codeStyles = {
      padding: "2px 4px",
      backgroundColor: lightgrey
    };
    let devInfo = null;
    if (false) {
      console.error("Error handled by React Router default ErrorBoundary:", error);
      devInfo = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, message), stack ? /* @__PURE__ */ React.createElement("pre", {
      style: preStyles
    }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return {
        error
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
      return this.state.error !== void 0 ? /* @__PURE__ */ React.createElement(RouteContext.Provider, {
        value: this.props.routeContext
      }, /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function RenderedRoute(_ref) {
    let {
      routeContext,
      match,
      children
    } = _ref;
    let dataRouterContext = React.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React.createElement(RouteContext.Provider, {
      value: routeContext
    }, children);
  }
  function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState;
    if (parentMatches === void 0) {
      parentMatches = [];
    }
    if (dataRouterState === void 0) {
      dataRouterState = null;
    }
    if (future === void 0) {
      future = null;
    }
    if (matches == null) {
      var _future;
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0);
      !(errorIndex >= 0) ? false ? invariant(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : invariant(false) : void 0;
      renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) {
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let {
            loaderData,
            errors: errors2
          } = dataRouterState;
          let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            renderFallback = true;
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    return renderedMatches.reduceRight((outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ React.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ React.createElement(RenderedRoute, {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        });
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: {
          outlet: null,
          matches: matches2,
          isDataRoute: true
        }
      }) : getChildren();
    }, null);
  }
  var DataRouterHook = /* @__PURE__ */ function(DataRouterHook3) {
    DataRouterHook3["UseBlocker"] = "useBlocker";
    DataRouterHook3["UseRevalidator"] = "useRevalidator";
    DataRouterHook3["UseNavigateStable"] = "useNavigate";
    return DataRouterHook3;
  }(DataRouterHook || {});
  var DataRouterStateHook = /* @__PURE__ */ function(DataRouterStateHook3) {
    DataRouterStateHook3["UseBlocker"] = "useBlocker";
    DataRouterStateHook3["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook3["UseActionData"] = "useActionData";
    DataRouterStateHook3["UseRouteError"] = "useRouteError";
    DataRouterStateHook3["UseNavigation"] = "useNavigation";
    DataRouterStateHook3["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook3["UseMatches"] = "useMatches";
    DataRouterStateHook3["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook3["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook3["UseRouteId"] = "useRouteId";
    return DataRouterStateHook3;
  }(DataRouterStateHook || {});
  function useDataRouterContext(hookName) {
    let ctx = React.useContext(DataRouterContext);
    !ctx ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React.useContext(DataRouterStateContext);
    !state ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return state;
  }
  function useRouteContext(hookName) {
    let route = React.useContext(RouteContext);
    !route ? false ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ? false ? invariant(false, hookName + ' can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
    return thisRoute.route.id;
  }
  function useRouteError() {
    var _state$errors;
    let error = React.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    if (error !== void 0) {
      return error;
    }
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
  }
  function useNavigateStable() {
    let {
      router
    } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    let activeRef = React.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      false ? warning(activeRef.current, navigateEffectWarning) : void 0;
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        router.navigate(to, _extends2({
          fromRouteId: id
        }, options));
      }
    }, [router, id]);
    return navigate;
  }
  var alreadyWarned$1 = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned$1[key]) {
      alreadyWarned$1[key] = true;
      false ? warning(false, message) : void 0;
    }
  }
  var alreadyWarned = {};
  function warnOnce(key, message) {
    if (!alreadyWarned[message]) {
      alreadyWarned[message] = true;
      console.warn(message);
    }
  }
  var logDeprecation = (flag, msg, link) => warnOnce(flag, "\u26A0\uFE0F React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
  function logV6DeprecationWarnings(renderFuture, routerFuture) {
    if (!(renderFuture != null && renderFuture.v7_startTransition)) {
      logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
    }
    if (!(renderFuture != null && renderFuture.v7_relativeSplatPath) && (!routerFuture || !routerFuture.v7_relativeSplatPath)) {
      logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
    }
    if (routerFuture) {
      if (!routerFuture.v7_fetcherPersist) {
        logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
      }
      if (!routerFuture.v7_normalizeFormMethod) {
        logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
      }
      if (!routerFuture.v7_partialHydration) {
        logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
      }
      if (!routerFuture.v7_skipActionErrorRevalidation) {
        logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
      }
    }
  }
  var START_TRANSITION = "startTransition";
  var startTransitionImpl = React[START_TRANSITION];
  function Route(_props) {
    false ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false);
  }
  function Router(_ref5) {
    let {
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = Action.Pop,
      navigator: navigator2,
      static: staticProp = false,
      future
    } = _ref5;
    !!useInRouterContext() ? false ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React.useMemo(() => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: _extends2({
        v7_relativeSplatPath: false
      }, future)
    }), [basename, future, navigator2, staticProp]);
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let locationContext = React.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType]);
    false ? warning(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
      value: navigationContext
    }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
      children,
      value: locationContext
    }));
  }
  function Routes(_ref6) {
    let {
      children,
      location
    } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
  }
  var neverSettledPromise = new Promise(() => {
  });
  function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
      parentPath = [];
    }
    let routes = [];
    React.Children.forEach(children, (element, index) => {
      if (!/* @__PURE__ */ React.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index];
      if (element.type === React.Fragment) {
        routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
        return;
      }
      !(element.type === Route) ? false ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
      !(!element.props.index || !element.props.children) ? false ? invariant(false, "An index route cannot have child routes.") : invariant(false) : void 0;
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        loader: element.props.loader,
        action: element.props.action,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children, treePath);
      }
      routes.push(route);
    });
    return routes;
  }

  // node_modules/react-router-dom/dist/index.js
  var REACT_ROUTER_VERSION = "6";
  try {
    window.__reactRouterVersion = REACT_ROUTER_VERSION;
  } catch (e) {
  }
  if (false) {
    ViewTransitionContext.displayName = "ViewTransition";
  }
  if (false) {
    FetchersContext.displayName = "Fetchers";
  }
  var START_TRANSITION2 = "startTransition";
  var startTransitionImpl2 = React2[START_TRANSITION2];
  var FLUSH_SYNC = "flushSync";
  var flushSyncImpl = ReactDOM[FLUSH_SYNC];
  var USE_ID = "useId";
  var useIdImpl = React2[USE_ID];
  function HashRouter(_ref5) {
    let {
      basename,
      children,
      future,
      window: window2
    } = _ref5;
    let historyRef = React2.useRef();
    if (historyRef.current == null) {
      historyRef.current = createHashHistory({
        window: window2,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React2.useState({
      action: history.action,
      location: history.location
    });
    let {
      v7_startTransition
    } = future || {};
    let setState = React2.useCallback((newState) => {
      v7_startTransition && startTransitionImpl2 ? startTransitionImpl2(() => setStateImpl(newState)) : setStateImpl(newState);
    }, [setStateImpl, v7_startTransition]);
    React2.useLayoutEffect(() => history.listen(setState), [history, setState]);
    React2.useEffect(() => logV6DeprecationWarnings(future), [future]);
    return /* @__PURE__ */ React2.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history,
      future
    });
  }
  if (false) {
    HistoryRouter.displayName = "unstable_HistoryRouter";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  if (false) {
    Link.displayName = "Link";
  }
  if (false) {
    NavLink.displayName = "NavLink";
  }
  if (false) {
    Form.displayName = "Form";
  }
  if (false) {
    ScrollRestoration.displayName = "ScrollRestoration";
  }
  var DataRouterHook2;
  (function(DataRouterHook3) {
    DataRouterHook3["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook3["UseSubmit"] = "useSubmit";
    DataRouterHook3["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook3["UseFetcher"] = "useFetcher";
    DataRouterHook3["useViewTransitionState"] = "useViewTransitionState";
  })(DataRouterHook2 || (DataRouterHook2 = {}));
  var DataRouterStateHook2;
  (function(DataRouterStateHook3) {
    DataRouterStateHook3["UseFetcher"] = "useFetcher";
    DataRouterStateHook3["UseFetchers"] = "useFetchers";
    DataRouterStateHook3["UseScrollRestoration"] = "useScrollRestoration";
  })(DataRouterStateHook2 || (DataRouterStateHook2 = {}));

  // src/App.tsx
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);

  // node_modules/@uidotdev/usehooks/index.js
  var React3 = __toESM(require_react(), 1);
  function dispatchStorageEvent(key, newValue) {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
  }
  var setLocalStorageItem = (key, value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
    dispatchStorageEvent(key, stringifiedValue);
  };
  var removeLocalStorageItem = (key) => {
    window.localStorage.removeItem(key);
    dispatchStorageEvent(key, null);
  };
  var getLocalStorageItem = (key) => {
    return window.localStorage.getItem(key);
  };
  var useLocalStorageSubscribe = (callback) => {
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
  };
  var getLocalStorageServerSnapshot = () => {
    throw Error("useLocalStorage is a client-only hook");
  };
  function useLocalStorage(key, initialValue) {
    const getSnapshot = () => getLocalStorageItem(key);
    const store = React3.useSyncExternalStore(
      useLocalStorageSubscribe,
      getSnapshot,
      getLocalStorageServerSnapshot
    );
    const setState = React3.useCallback(
      (v) => {
        try {
          const nextState = typeof v === "function" ? v(JSON.parse(store)) : v;
          if (nextState === void 0 || nextState === null) {
            removeLocalStorageItem(key);
          } else {
            setLocalStorageItem(key, nextState);
          }
        } catch (e) {
          console.warn(e);
        }
      },
      [key, store]
    );
    React3.useEffect(() => {
      if (getLocalStorageItem(key) === null && typeof initialValue !== "undefined") {
        setLocalStorageItem(key, initialValue);
      }
    }, [key, initialValue]);
    return [store ? JSON.parse(store) : initialValue, setState];
  }

  // src/components/header.tsx
  var import_react = __toESM(require_react(), 1);
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/timedated/index.js
  var getWeekDay = (cap) => {
    let day = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { weekday: "long" });
    cap ? cap = cap.toString().toLowerCase() : cap = 0;
    let captostr = { "none": "0", "all": "2" };
    captostr.hasOwnProperty(cap) ? cap = captostr[cap] : null;
    cap = Number(cap);
    cap === 0 ? day = day.toLowerCase() : null;
    cap === 2 ? day = day.toUpperCase() : null;
    return day;
  };
  var getDate = () => {
    return (/* @__PURE__ */ new Date()).toLocaleDateString();
  };

  // src/components/header.tsx
  var Header = (0, import_react.forwardRef)(({ onColorChange }, ref) => {
    const [toggleSettings, setToggleSettings] = (0, import_react.useState)(false);
    const navigate = useNavigate();
    const quitApp = () => {
      window.close();
    };
    const settings = () => {
      toggleSettings ? navigate("/") : navigate("/settings");
      setToggleSettings(!toggleSettings);
    };
    return /* @__PURE__ */ import_react2.default.createElement("header", { className: "fixed font-header text-xl flex h-10 w-full items-center justify-center z-[2] top-0", ref }, /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "fixed top-1 left-1 pl-2.5 pt-[10px] bg-ui size-8 hover:cursor-pointer duration-200 btn rounded-[5px]",
        onClick: onColorChange,
        id: "color-con"
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          className: "transition hover:opacity-80 size-5 rounded-[30px] border-[1.5px] hover:!border-slate-700 fixed top-[10px] left-[10px] bg-white border-slate-300",
          id: "color-btn"
        }
      )
    ), /* @__PURE__ */ import_react2.default.createElement("div", { className: `${"hidden"}` }), /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        id: "day",
        className: "font-bold hover:font-extrabold select-none hover:cursor-pointer w-32 h-8 leading-5 pt-1.5 pl-7 bg-ui transition duration-500 text-slate-700 hover:!text-slate-800 btn rounded-[5px]",
        onClick: settings
      },
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "fixed top-[10px] left-[50%] -translate-x-[50%]" }, getWeekDay(2))
    ), /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "hover:cursor-pointer hover:!text-slate-700 bg-ui fixed right-1 top-1 size-8 pl-[6.5px] pt-[5px] duration-200 select-none text-2xl btn leading-[22px] rounded-[5px] !border-none",
        id: "close-btn",
        onClick: quitApp
      },
      "\u2715"
    ));
  });
  var header_default = Header;

  // src/components/settings.tsx
  var import_react3 = __toESM(require_react(), 1);
  var CHANGELOG = [
    "Remapped color system.",
    "Left and right arrows for navigating tasks.",
    "Increased bottom margin for contents page.",
    "Small windows can see full changelog.",
    "Redesigned backspace and delete functionality.",
    "Reduced redundancies.",
    "Text Outline is now More Line Space without outline.",
    "Thickness adjustment for header.",
    "Changelog text wrapping sticks to horizontal arrangement.",
    "Right padding added to content and settings pages.",
    "Structured components into separate files.",
    "Resizer is now single-click.",
    "Fixed header color not transitioning correctly."
  ];
  var Changes = () => {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "mb-10" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "settings-header" }, "Changelog"), /* @__PURE__ */ import_react3.default.createElement("table", null, CHANGELOG.map((change) => /* @__PURE__ */ import_react3.default.createElement("tr", null, /* @__PURE__ */ import_react3.default.createElement("td", { className: "w-[10%]" }, "+ "), /* @__PURE__ */ import_react3.default.createElement("td", { className: "w-[90%] pr-3 text-left leading-5 pt-px" }, change)))));
  };
  var SOUNDS = [
    "Doorbell",
    "DJ Khaled",
    "Custom"
  ];
  var Settings = ({
    dayReset,
    setDayReset,
    soundEnabled,
    setSoundEnabled,
    sound,
    setSound,
    customSound,
    setCustomSound,
    confettiEnabled,
    setConfettiEnabled,
    moreLineSpace,
    setMoreLineSpace
  }) => {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-center select-none" }, /* @__PURE__ */ import_react3.default.createElement("h3", { className: "settings-header" }, "Options"), /* @__PURE__ */ import_react3.default.createElement("div", { id: "dayresetcon", className: "setting" }, /* @__PURE__ */ import_react3.default.createElement("input", { type: "checkbox", checked: dayReset, onChange: () => setDayReset(!dayReset) }), /* @__PURE__ */ import_react3.default.createElement("label", { id: "dayresettext", className: "labelClass", key: "resett" }, "Reset Tasks Daily")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "setting", id: "checksoundcon" }, /* @__PURE__ */ import_react3.default.createElement("input", { type: "checkbox", checked: soundEnabled, onChange: () => setSoundEnabled(!soundEnabled) }), /* @__PURE__ */ import_react3.default.createElement("label", { className: "labelClass mr-1.5" }, "Sound"), /* @__PURE__ */ import_react3.default.createElement("select", { value: sound, onChange: (e) => setSound(e.target.value), className: "ml-1 mr-1 h-[22px] rounded-[5px] focus:outline" }, SOUNDS.map((value) => /* @__PURE__ */ import_react3.default.createElement("option", { value, key: value }, value))), /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type: "text",
        className: `${sound === "Custom" ? "" : "hidden"} h-[22px] text-xs ml-2 w-[21%] pl-1 focus:outline rounded-[5px]`,
        value: customSound,
        onChange: (e) => setCustomSound(e.target.value),
        spellCheck: "false"
      }
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "setting", id: "confetticon" }, /* @__PURE__ */ import_react3.default.createElement("input", { type: "checkbox", checked: confettiEnabled, onChange: () => setConfettiEnabled(!confettiEnabled) }), /* @__PURE__ */ import_react3.default.createElement("label", { className: "labelClass" }, "Confetti")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "setting", id: "outlinecon" }, /* @__PURE__ */ import_react3.default.createElement("input", { type: "checkbox", checked: moreLineSpace, onChange: () => setMoreLineSpace(!moreLineSpace) }), /* @__PURE__ */ import_react3.default.createElement("label", { className: "labelClass" }, "More Line Space")), /* @__PURE__ */ import_react3.default.createElement(Changes, null), /* @__PURE__ */ import_react3.default.createElement("div", { className: "fixed flex justify-center w-full m-0 bottom-0" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "ui pt-0.5 w-[140px] px-1 rounded-t-[5px] z-[2] !text-black shadow-[rgba(100,100,111,0.2)_0px_7px_20px_10px] border-solid border-black border-[1px]" }, /* @__PURE__ */ import_react3.default.createElement("strong", null, "Version:"), " 1.3.3b")));
  };
  var settings_default = Settings;

  // src/contents.tsx
  var import_react4 = __toESM(require_react(), 1);

  // node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js
  var generatedAttribute = "generated";
  var mouseDownEvent = "pointerdown";
  var mouseUpEvent = "pointerup";
  var mouseLeaveEvent = "pointerleave";
  var mouseOutEvent = "pointerout";
  var mouseMoveEvent = "pointermove";
  var touchStartEvent = "touchstart";
  var touchEndEvent = "touchend";
  var touchMoveEvent = "touchmove";
  var touchCancelEvent = "touchcancel";
  var resizeEvent = "resize";
  var visibilityChangeEvent = "visibilitychange";
  var errorPrefix = "tsParticles - Error";
  var percentDenominator = 100;
  var halfRandom = 0.5;
  var millisecondsToSeconds = 1e3;

  // node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js
  var MoveDirection;
  (function(MoveDirection2) {
    MoveDirection2["bottom"] = "bottom";
    MoveDirection2["bottomLeft"] = "bottom-left";
    MoveDirection2["bottomRight"] = "bottom-right";
    MoveDirection2["left"] = "left";
    MoveDirection2["none"] = "none";
    MoveDirection2["right"] = "right";
    MoveDirection2["top"] = "top";
    MoveDirection2["topLeft"] = "top-left";
    MoveDirection2["topRight"] = "top-right";
    MoveDirection2["outside"] = "outside";
    MoveDirection2["inside"] = "inside";
  })(MoveDirection || (MoveDirection = {}));

  // node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }

  // node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js
  var origin = {
    x: 0,
    y: 0,
    z: 0
  };
  var squareExp = 2;
  var inverseFactorNumerator = 1;
  var Vector3d = class _Vector3d {
    constructor(xOrCoords, y, z) {
      this._updateFromAngle = (angle, length) => {
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
      };
      if (!isNumber(xOrCoords) && xOrCoords) {
        this.x = xOrCoords.x;
        this.y = xOrCoords.y;
        const coords3d = xOrCoords;
        this.z = coords3d.z ? coords3d.z : origin.z;
      } else if (xOrCoords !== void 0 && y !== void 0) {
        this.x = xOrCoords;
        this.y = y;
        this.z = z ?? origin.z;
      } else {
        throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
      }
    }
    static get origin() {
      return _Vector3d.create(origin.x, origin.y, origin.z);
    }
    get angle() {
      return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
      this._updateFromAngle(angle, this.length);
    }
    get length() {
      return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
      this._updateFromAngle(this.angle, length);
    }
    static clone(source) {
      return _Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
      return new _Vector3d(x, y, z);
    }
    add(v) {
      return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
    }
    copy() {
      return _Vector3d.clone(this);
    }
    distanceTo(v) {
      return this.sub(v).length;
    }
    distanceToSq(v) {
      return this.sub(v).getLengthSq();
    }
    div(n2) {
      return _Vector3d.create(this.x / n2, this.y / n2, this.z / n2);
    }
    divTo(n2) {
      this.x /= n2;
      this.y /= n2;
      this.z /= n2;
    }
    getLengthSq() {
      return this.x ** squareExp + this.y ** squareExp;
    }
    mult(n2) {
      return _Vector3d.create(this.x * n2, this.y * n2, this.z * n2);
    }
    multTo(n2) {
      this.x *= n2;
      this.y *= n2;
      this.z *= n2;
    }
    normalize() {
      const length = this.length, noLength = 0;
      if (length != noLength) {
        this.multTo(inverseFactorNumerator / length);
      }
    }
    rotate(angle) {
      return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), origin.z);
    }
    setTo(c) {
      this.x = c.x;
      this.y = c.y;
      const v3d = c;
      this.z = v3d.z ? v3d.z : origin.z;
    }
    sub(v) {
      return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
    }
  };
  var Vector = class _Vector extends Vector3d {
    constructor(xOrCoords, y) {
      super(xOrCoords, y, origin.z);
    }
    static get origin() {
      return _Vector.create(origin.x, origin.y);
    }
    static clone(source) {
      return _Vector.create(source.x, source.y);
    }
    static create(x, y) {
      return new _Vector(x, y);
    }
  };

  // node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js
  var _random = Math.random;
  var _animationLoop = {
    nextFrame: (cb) => requestAnimationFrame(cb),
    cancel: (idx) => cancelAnimationFrame(idx)
  };
  var double = 2;
  var doublePI = Math.PI * double;
  function getRandom() {
    const min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
  }
  function animate(fn) {
    return _animationLoop.nextFrame(fn);
  }
  function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
  }
  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  function randomInRange(r) {
    const max = getRangeMax(r), minOffset = 0;
    let min = getRangeMin(r);
    if (max === min) {
      min = minOffset;
    }
    return getRandom() * (max - min) + min;
  }
  function getRangeValue(value) {
    return isNumber(value) ? value : randomInRange(value);
  }
  function getRangeMin(value) {
    return isNumber(value) ? value : value.min;
  }
  function getRangeMax(value) {
    return isNumber(value) ? value : value.max;
  }
  function setRangeValue(source, value) {
    if (source === value || value === void 0 && isNumber(source)) {
      return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== void 0 ? {
      min: Math.min(min, value),
      max: Math.max(max, value)
    } : setRangeValue(min, max);
  }
  function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp5 = 2;
    return { dx, dy, distance: Math.sqrt(dx ** squareExp5 + dy ** squareExp5) };
  }
  function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
  }
  function degToRad(degrees) {
    const PIDeg = 180;
    return degrees * Math.PI / PIDeg;
  }
  function getParticleDirectionAngle(direction, position, center) {
    if (isNumber(direction)) {
      return degToRad(direction);
    }
    const empty = 0, half7 = 0.5, quarter = 0.25, threeQuarter = half7 + quarter;
    switch (direction) {
      case MoveDirection.top:
        return -Math.PI * half7;
      case MoveDirection.topRight:
        return -Math.PI * quarter;
      case MoveDirection.right:
        return empty;
      case MoveDirection.bottomRight:
        return Math.PI * quarter;
      case MoveDirection.bottom:
        return Math.PI * half7;
      case MoveDirection.bottomLeft:
        return Math.PI * threeQuarter;
      case MoveDirection.left:
        return Math.PI;
      case MoveDirection.topLeft:
        return -Math.PI * threeQuarter;
      case MoveDirection.inside:
        return Math.atan2(center.y - position.y, center.x - position.x);
      case MoveDirection.outside:
        return Math.atan2(position.y - center.y, position.x - center.x);
      default:
        return getRandom() * doublePI;
    }
  }
  function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
  }
  function calcPositionOrRandomFromSize(data) {
    return {
      x: (data.position?.x ?? getRandom() * percentDenominator) * data.size.width / percentDenominator,
      y: (data.position?.y ?? getRandom() * percentDenominator) * data.size.height / percentDenominator
    };
  }
  function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
      x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
      y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
    };
    return calcPositionOrRandomFromSize({ size: data.size, position });
  }
  function calcExactPositionOrRandomFromSize(data) {
    return {
      x: data.position?.x ?? getRandom() * data.size.width,
      y: data.position?.y ?? getRandom() * data.size.height
    };
  }
  function parseAlpha(input) {
    const defaultAlpha2 = 1;
    if (!input) {
      return defaultAlpha2;
    }
    return input.endsWith("%") ? parseFloat(input) / percentDenominator : parseFloat(input);
  }

  // node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js
  var AnimationMode;
  (function(AnimationMode2) {
    AnimationMode2["auto"] = "auto";
    AnimationMode2["increase"] = "increase";
    AnimationMode2["decrease"] = "decrease";
    AnimationMode2["random"] = "random";
  })(AnimationMode || (AnimationMode = {}));

  // node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js
  var AnimationStatus;
  (function(AnimationStatus2) {
    AnimationStatus2["increasing"] = "increasing";
    AnimationStatus2["decreasing"] = "decreasing";
  })(AnimationStatus || (AnimationStatus = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
  var DestroyType;
  (function(DestroyType2) {
    DestroyType2["none"] = "none";
    DestroyType2["max"] = "max";
    DestroyType2["min"] = "min";
  })(DestroyType || (DestroyType = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js
  var OutModeDirection;
  (function(OutModeDirection2) {
    OutModeDirection2["bottom"] = "bottom";
    OutModeDirection2["left"] = "left";
    OutModeDirection2["right"] = "right";
    OutModeDirection2["top"] = "top";
  })(OutModeDirection || (OutModeDirection = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js
  var PixelMode;
  (function(PixelMode2) {
    PixelMode2["precise"] = "precise";
    PixelMode2["percent"] = "percent";
  })(PixelMode || (PixelMode = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js
  var StartValueType;
  (function(StartValueType2) {
    StartValueType2["max"] = "max";
    StartValueType2["min"] = "min";
    StartValueType2["random"] = "random";
  })(StartValueType || (StartValueType = {}));

  // node_modules/@tsparticles/engine/browser/Utils/Utils.js
  var _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
  };
  function getLogger() {
    return _logger;
  }
  function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
  }
  function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
  }
  function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
      return;
    }
    return matchMedia(query);
  }
  function safeIntersectionObserver(callback) {
    if (isSsr() || typeof IntersectionObserver === "undefined") {
      return;
    }
    return new IntersectionObserver(callback);
  }
  function safeMutationObserver(callback) {
    if (isSsr() || typeof MutationObserver === "undefined") {
      return;
    }
    return new MutationObserver(callback);
  }
  function isInArray(value, array) {
    const invalidIndex = -1;
    return value === array || isArray(array) && array.indexOf(value) > invalidIndex;
  }
  async function loadFont(font, weight) {
    try {
      await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch {
    }
  }
  function arrayRandomIndex(array) {
    return Math.floor(getRandom() * array.length);
  }
  function itemFromArray(array, index, useIndex = true) {
    return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array)];
  }
  function isPointInside(point, size, offset, radius, direction) {
    const minRadius = 0;
    return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
  }
  function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === OutModeDirection.bottom) {
      inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.left)) {
      inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.right)) {
      inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === OutModeDirection.top)) {
      inside = bounds.bottom > offset.y;
    }
    return inside;
  }
  function calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }
  function deepExtend(destination, ...sources) {
    for (const source of sources) {
      if (source === void 0 || source === null) {
        continue;
      }
      if (!isObject(source)) {
        destination = source;
        continue;
      }
      const sourceIsArray = Array.isArray(source);
      if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
        destination = [];
      } else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
        destination = {};
      }
      for (const key in source) {
        if (key === "__proto__") {
          continue;
        }
        const sourceDict = source, value = sourceDict[key], destDict = destination;
        destDict[key] = isObject(value) && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
      }
    }
    return destination;
  }
  function executeOnSingleOrMultiple(obj, callback) {
    const defaultIndex = 0;
    return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, defaultIndex);
  }
  function itemFromSingleOrMultiple(obj, index, useIndex) {
    return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
  }
  function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
      delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
      enable: animationOptions.enable,
      value: getRangeValue(options.value) * pxRatio,
      max: getRangeMax(valueRange) * pxRatio,
      min: getRangeMin(valueRange) * pxRatio,
      loops: 0,
      maxLoops: getRangeValue(animationOptions.count),
      time: 0
    }, decayOffset2 = 1;
    if (animationOptions.enable) {
      res.decay = decayOffset2 - getRangeValue(animationOptions.decay);
      switch (animationOptions.mode) {
        case AnimationMode.increase:
          res.status = AnimationStatus.increasing;
          break;
        case AnimationMode.decrease:
          res.status = AnimationStatus.decreasing;
          break;
        case AnimationMode.random:
          res.status = getRandom() >= halfRandom ? AnimationStatus.increasing : AnimationStatus.decreasing;
          break;
      }
      const autoStatus = animationOptions.mode === AnimationMode.auto;
      switch (animationOptions.startValue) {
        case StartValueType.min:
          res.value = res.min;
          if (autoStatus) {
            res.status = AnimationStatus.increasing;
          }
          break;
        case StartValueType.max:
          res.value = res.max;
          if (autoStatus) {
            res.status = AnimationStatus.decreasing;
          }
          break;
        case StartValueType.random:
        default:
          res.value = randomInRange(res);
          if (autoStatus) {
            res.status = getRandom() >= halfRandom ? AnimationStatus.increasing : AnimationStatus.decreasing;
          }
          break;
      }
    }
    res.initialValue = res.value;
    return res;
  }
  function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === PixelMode.percent;
    if (!isPercent) {
      const { mode: _, ...rest } = positionOrSize;
      return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
      return {
        x: positionOrSize.x / percentDenominator * canvasSize.width,
        y: positionOrSize.y / percentDenominator * canvasSize.height
      };
    } else {
      return {
        width: positionOrSize.width / percentDenominator * canvasSize.width,
        height: positionOrSize.height / percentDenominator * canvasSize.height
      };
    }
  }
  function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
  }
  function getSize(size, canvasSize) {
    return getPositionOrSize(size, canvasSize);
  }
  function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch (destroyType) {
      case DestroyType.max:
        if (value >= maxValue) {
          particle.destroy();
        }
        break;
      case DestroyType.min:
        if (value <= minValue) {
          particle.destroy();
        }
        break;
    }
  }
  function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    const minLoops2 = 0, minDelay = 0, identity6 = 1, minVelocity6 = 0, minDecay = 1;
    if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    const velocity = (data.velocity ?? minVelocity6) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
    if (!data.time) {
      data.time = 0;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      return;
    }
    switch (data.status) {
      case AnimationStatus.increasing:
        if (data.value >= maxValue) {
          if (changeDirection) {
            data.status = AnimationStatus.decreasing;
          } else {
            data.value -= maxValue;
          }
          if (!data.loops) {
            data.loops = minLoops2;
          }
          data.loops++;
        } else {
          data.value += velocity;
        }
        break;
      case AnimationStatus.decreasing:
        if (data.value <= minValue) {
          if (changeDirection) {
            data.status = AnimationStatus.increasing;
          } else {
            data.value += maxValue;
          }
          if (!data.loops) {
            data.loops = minLoops2;
          }
          data.loops++;
        } else {
          data.value -= velocity;
        }
    }
    if (data.velocity && decay !== identity6) {
      data.velocity *= decay;
    }
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) {
      data.value = clamp(data.value, minValue, maxValue);
    }
  }

  // node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js
  var AlterType;
  (function(AlterType2) {
    AlterType2["darken"] = "darken";
    AlterType2["enlighten"] = "enlighten";
  })(AlterType || (AlterType = {}));

  // node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js
  var RgbIndexes;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 4] = "a";
  })(RgbIndexes || (RgbIndexes = {}));
  var randomColorValue = "random";
  var colorManagers = /* @__PURE__ */ new Map();
  function addColorManager(manager) {
    colorManagers.set(manager.key, manager);
  }
  function stringToRgba(input) {
    for (const [, manager] of colorManagers) {
      if (input.startsWith(manager.stringPrefix)) {
        return manager.parseString(input);
      }
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed), radix = 16, defaultAlpha2 = 1, alphaFactor = 255;
    return result ? {
      a: result[RgbIndexes.a] !== void 0 ? parseInt(result[RgbIndexes.a], radix) / alphaFactor : defaultAlpha2,
      b: parseInt(result[RgbIndexes.b], radix),
      g: parseInt(result[RgbIndexes.g], radix),
      r: parseInt(result[RgbIndexes.r], radix)
    } : void 0;
  }
  function rangeColorToRgb(input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return colorToRgb(color.value, index, useIndex);
    }
    if (isArray(color.value)) {
      return rangeColorToRgb({
        value: itemFromArray(color.value, index, useIndex)
      });
    }
    for (const [, manager] of colorManagers) {
      const res = manager.handleRangeColor(color);
      if (res) {
        return res;
      }
    }
  }
  function colorToRgb(input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
    }
    if (isArray(color.value)) {
      return colorToRgb({
        value: itemFromArray(color.value, index, useIndex)
      });
    }
    for (const [, manager] of colorManagers) {
      const res = manager.handleColor(color);
      if (res) {
        return res;
      }
    }
  }
  function rangeColorToHsl(color, index, useIndex = true) {
    const rgb = rangeColorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : void 0;
  }
  function rgbToHsl(color) {
    const rgbMax = 255, hMax = 360, sMax = 100, lMax = 100, hMin = 0, sMin = 0, hPhase = 60, half7 = 0.5, double15 = 2, r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
      h: hMin,
      l: (max + min) * half7,
      s: sMin
    };
    if (max !== min) {
      res.s = res.l < half7 ? (max - min) / (max + min) : (max - min) / (double15 - max - min);
      res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? double15 + (b1 - r1) / (max - min) : double15 * double15 + (r1 - g1) / (max - min);
    }
    res.l *= lMax;
    res.s *= sMax;
    res.h *= hPhase;
    if (res.h < hMin) {
      res.h += hMax;
    }
    if (res.h >= hMax) {
      res.h -= hMax;
    }
    return res;
  }
  function stringToRgb(input) {
    return stringToRgba(input);
  }
  function hslToRgb(hsl) {
    const hMax = 360, sMax = 100, lMax = 100, sMin = 0, lMin = 0, h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax, rgbFactor = 255, triple = 3;
    if (s === sMin) {
      const grayscaleValue = Math.round(lNormalized * rgbFactor);
      return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
    }
    const half7 = 0.5, double15 = 2, channel = (temp12, temp22, temp3) => {
      const temp3Min = 0, temp3Max = 1, sextuple = 6;
      if (temp3 < temp3Min) {
        temp3++;
      }
      if (temp3 > temp3Max) {
        temp3--;
      }
      if (temp3 * sextuple < temp3Max) {
        return temp12 + (temp22 - temp12) * sextuple * temp3;
      }
      if (temp3 * double15 < temp3Max) {
        return temp22;
      }
      if (temp3 * triple < temp3Max * double15) {
        const temp3Offset = double15 / triple;
        return temp12 + (temp22 - temp12) * (temp3Offset - temp3) * sextuple;
      }
      return temp12;
    }, sNormalizedOffset = 1, temp1 = lNormalized < half7 ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = double15 * lNormalized - temp1, phaseNumerator = 1, phaseThird = phaseNumerator / triple, red = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized)), blue = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized - phaseThird));
    return { r: Math.round(red), g: Math.round(green), b: Math.round(blue) };
  }
  function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }
  function getRandomRgbColor(min) {
    const defaultMin = 0, fixedMin = min ?? defaultMin, rgbMax = 256;
    return {
      b: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax))),
      g: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax))),
      r: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax)))
    };
  }
  function getStyleFromRgb(color, opacity) {
    const defaultOpacity2 = 1;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? defaultOpacity2})`;
  }
  function getStyleFromHsl(color, opacity) {
    const defaultOpacity2 = 1;
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? defaultOpacity2})`;
  }
  function getHslFromAnimation(animation) {
    return animation !== void 0 ? {
      h: animation.h.value,
      s: animation.s.value,
      l: animation.l.value
    } : void 0;
  }
  function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
      h: {
        enable: false,
        value: hsl.h
      },
      s: {
        enable: false,
        value: hsl.s
      },
      l: {
        enable: false,
        value: hsl.l
      }
    };
    if (animationOptions) {
      setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
      setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
      setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
  }
  function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    const defaultVelocity = 0, decayOffset2 = 1, defaultLoops = 0, defaultTime = 0;
    if (colorValue.enable) {
      colorValue.velocity = getRangeValue(colorAnimation.speed) / percentDenominator * reduceFactor;
      colorValue.decay = decayOffset2 - getRangeValue(colorAnimation.decay);
      colorValue.status = AnimationStatus.increasing;
      colorValue.loops = defaultLoops;
      colorValue.maxLoops = getRangeValue(colorAnimation.count);
      colorValue.time = defaultTime;
      colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
      if (!colorAnimation.sync) {
        colorValue.velocity *= getRandom();
        colorValue.value *= getRandom();
      }
      colorValue.initialValue = colorValue.value;
      colorValue.offset = setRangeValue(colorAnimation.offset);
    } else {
      colorValue.velocity = defaultVelocity;
    }
  }
  function updateColorValue(data, range, decrease, delta) {
    const minLoops2 = 0, minDelay = 0, identity6 = 1, minVelocity6 = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data || !data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    if (!data.time) {
      data.time = 0;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      return;
    }
    const offset = data.offset ? randomInRange(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity6) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity6, max = getRangeMax(range), min = getRangeMin(range);
    if (!decrease || data.status === AnimationStatus.increasing) {
      data.value += velocity;
      if (data.value > max) {
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
        if (decrease) {
          data.status = AnimationStatus.decreasing;
        } else {
          data.value -= max;
        }
      }
    } else {
      data.value -= velocity;
      const minValue = 0;
      if (data.value < minValue) {
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
        data.status = AnimationStatus.increasing;
      }
    }
    if (data.velocity && decay !== identity6) {
      data.velocity *= decay;
    }
    data.value = clamp(data.value, min, max);
  }
  function updateColor(color, delta) {
    if (!color) {
      return;
    }
    const { h, s, l } = color;
    const ranges = {
      h: { min: 0, max: 360 },
      s: { min: 0, max: 100 },
      l: { min: 0, max: 100 }
    };
    if (h) {
      updateColorValue(h, ranges.h, false, delta);
    }
    if (s) {
      updateColorValue(s, ranges.s, true, delta);
    }
    if (l) {
      updateColorValue(l, ranges.l, true, delta);
    }
  }

  // node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js
  var origin2 = { x: 0, y: 0 };
  var defaultTransform = {
    a: 1,
    b: 0,
    c: 0,
    d: 1
  };
  function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
    context.fillRect(origin2.x, origin2.y, dimension.width, dimension.height);
  }
  function paintImage(context, dimension, image, opacity) {
    if (!image) {
      return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, origin2.x, origin2.y, dimension.width, dimension.height);
    context.globalAlpha = 1;
  }
  function clear(context, dimension) {
    context.clearRect(origin2.x, origin2.y, dimension.width, dimension.height);
  }
  function drawParticle(data) {
    const { container: container2, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data, pos = particle.getPosition(), defaultAngle = 0, angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : defaultAngle), rotateData = {
      sin: Math.sin(angle),
      cos: Math.cos(angle)
    }, rotating = !!angle, identity6 = 1, transformData = {
      a: rotateData.cos * (transform.a ?? defaultTransform.a),
      b: rotating ? rotateData.sin * (transform.b ?? identity6) : transform.b ?? defaultTransform.b,
      c: rotating ? -rotateData.sin * (transform.c ?? identity6) : transform.c ?? defaultTransform.c,
      d: rotateData.cos * (transform.d ?? defaultTransform.d)
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    if (backgroundMask) {
      context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = getStyleFromRgb(shadowColor);
      context.shadowOffsetX = shadow.offset.x;
      context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
      context.fillStyle = colorStyles.fill;
    }
    const minStrokeWidth = 0, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
      context.strokeStyle = colorStyles.stroke;
    }
    const drawData = {
      container: container2,
      context,
      particle,
      radius,
      opacity,
      delta,
      transformData,
      strokeWidth
    };
    drawShape(drawData);
    drawShapeAfterDraw(drawData);
    drawEffect(drawData);
    context.globalCompositeOperation = "source-over";
    context.resetTransform();
  }
  function drawEffect(data) {
    const { container: container2, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.effect) {
      return;
    }
    const drawer = container2.effectDrawers.get(particle.effect);
    if (!drawer) {
      return;
    }
    drawer.draw({
      context,
      particle,
      radius,
      opacity,
      delta,
      pixelRatio: container2.retina.pixelRatio,
      transformData: { ...transformData }
    });
  }
  function drawShape(data) {
    const { container: container2, context, particle, radius, opacity, delta, strokeWidth, transformData } = data, minStrokeWidth = 0;
    if (!particle.shape) {
      return;
    }
    const drawer = container2.shapeDrawers.get(particle.shape);
    if (!drawer) {
      return;
    }
    context.beginPath();
    drawer.draw({
      context,
      particle,
      radius,
      opacity,
      delta,
      pixelRatio: container2.retina.pixelRatio,
      transformData: { ...transformData }
    });
    if (particle.shapeClose) {
      context.closePath();
    }
    if (strokeWidth > minStrokeWidth) {
      context.stroke();
    }
    if (particle.shapeFill) {
      context.fill();
    }
  }
  function drawShapeAfterDraw(data) {
    const { container: container2, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.shape) {
      return;
    }
    const drawer = container2.shapeDrawers.get(particle.shape);
    if (!drawer?.afterDraw) {
      return;
    }
    drawer.afterDraw({
      context,
      particle,
      radius,
      opacity,
      delta,
      pixelRatio: container2.retina.pixelRatio,
      transformData: { ...transformData }
    });
  }
  function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
      return;
    }
    plugin.draw(context, delta);
  }
  function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
      return;
    }
    plugin.drawParticle(context, particle, delta);
  }
  function alterHsl(color, type, value) {
    const lFactor = 1;
    return {
      h: color.h,
      s: color.s,
      l: color.l + (type === AlterType.darken ? -lFactor : lFactor) * value
    };
  }

  // node_modules/@tsparticles/engine/browser/Core/Canvas.js
  function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key], defaultValue = 1;
    if (newValue !== void 0) {
      factor[key] = (factor[key] ?? defaultValue) * newValue;
    }
  }
  function setStyle(canvas, style, important = false) {
    if (!style) {
      return;
    }
    const element = canvas;
    if (!element) {
      return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
      return;
    }
    for (const key in style) {
      const value = style[key];
      if (!value) {
        continue;
      }
      elementStyle.setProperty(key, value, important ? "important" : "");
    }
  }
  var Canvas = class {
    constructor(container2) {
      this.container = container2;
      this._applyPostDrawUpdaters = (particle) => {
        for (const updater of this._postDrawUpdaters) {
          updater.afterDraw?.(particle);
        }
      };
      this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
        for (const updater of this._preDrawUpdaters) {
          if (updater.getColorStyles) {
            const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
            if (fill) {
              colorStyles.fill = fill;
            }
            if (stroke) {
              colorStyles.stroke = stroke;
            }
          }
          if (updater.getTransformValues) {
            const updaterTransform = updater.getTransformValues(particle);
            for (const key in updaterTransform) {
              setTransformValue(transform, updaterTransform, key);
            }
          }
          updater.beforeDraw?.(particle);
        }
      };
      this._applyResizePlugins = () => {
        for (const plugin of this._resizePlugins) {
          plugin.resize?.();
        }
      };
      this._getPluginParticleColors = (particle) => {
        let fColor, sColor;
        for (const plugin of this._colorPlugins) {
          if (!fColor && plugin.particleFillColor) {
            fColor = rangeColorToHsl(plugin.particleFillColor(particle));
          }
          if (!sColor && plugin.particleStrokeColor) {
            sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
          }
          if (fColor && sColor) {
            break;
          }
        }
        return [fColor, sColor];
      };
      this._initCover = async () => {
        const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
        if (color) {
          const coverRgb = rangeColorToRgb(color);
          if (coverRgb) {
            const coverColor = {
              ...coverRgb,
              a: cover.opacity
            };
            this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
          }
        } else {
          await new Promise((resolve, reject) => {
            if (!cover.image) {
              return;
            }
            const img = document.createElement("img");
            img.addEventListener("load", () => {
              this._coverImage = {
                image: img,
                opacity: cover.opacity
              };
              resolve();
            });
            img.addEventListener("error", (evt) => {
              reject(evt.error);
            });
            img.src = cover.image;
          });
        }
      };
      this._initStyle = () => {
        const element = this.element, options = this.container.actualOptions;
        if (!element) {
          return;
        }
        if (this._fullScreen) {
          this._originalStyle = deepExtend({}, element.style);
          this._setFullScreenStyle();
        } else {
          this._resetOriginalStyle();
        }
        for (const key in options.style) {
          if (!key || !options.style) {
            continue;
          }
          const value = options.style[key];
          if (!value) {
            continue;
          }
          element.style.setProperty(key, value, "important");
        }
      };
      this._initTrail = async () => {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
        if (!trail.enable) {
          return;
        }
        const factorNumerator = 1, opacity = factorNumerator / trail.length;
        if (trailFill.color) {
          const fillColor = rangeColorToRgb(trailFill.color);
          if (!fillColor) {
            return;
          }
          this._trailFill = {
            color: {
              ...fillColor
            },
            opacity
          };
        } else {
          await new Promise((resolve, reject) => {
            if (!trailFill.image) {
              return;
            }
            const img = document.createElement("img");
            img.addEventListener("load", () => {
              this._trailFill = {
                image: img,
                opacity
              };
              resolve();
            });
            img.addEventListener("error", (evt) => {
              reject(evt.error);
            });
            img.src = trailFill.image;
          });
        }
      };
      this._paintBase = (baseColor) => {
        this.draw((ctx) => paintBase(ctx, this.size, baseColor));
      };
      this._paintImage = (image, opacity) => {
        this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
      };
      this._repairStyle = () => {
        const element = this.element;
        if (!element) {
          return;
        }
        this._safeMutationObserver((observer) => observer.disconnect());
        this._initStyle();
        this.initBackground();
        this._safeMutationObserver((observer) => {
          if (!element || !(element instanceof Node)) {
            return;
          }
          observer.observe(element, { attributes: true });
        });
      };
      this._resetOriginalStyle = () => {
        const element = this.element, originalStyle = this._originalStyle;
        if (!(element && originalStyle)) {
          return;
        }
        setStyle(element, originalStyle);
      };
      this._safeMutationObserver = (callback) => {
        if (!this._mutationObserver) {
          return;
        }
        callback(this._mutationObserver);
      };
      this._setFullScreenStyle = () => {
        const element = this.element;
        if (!element) {
          return;
        }
        const radix = 10;
        setStyle(element, {
          position: "fixed",
          zIndex: this.container.actualOptions.fullScreen.zIndex.toString(radix),
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }, true);
      };
      this.size = {
        height: 0,
        width: 0
      };
      this._context = null;
      this._generated = false;
      this._preDrawUpdaters = [];
      this._postDrawUpdaters = [];
      this._resizePlugins = [];
      this._colorPlugins = [];
    }
    get _fullScreen() {
      return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
      const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill, minimumLength = 0;
      if (options.backgroundMask.enable) {
        this.paint();
      } else if (trail.enable && trail.length > minimumLength && trailFill) {
        if (trailFill.color) {
          this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
        } else if (trailFill.image) {
          this._paintImage(trailFill.image, trailFill.opacity);
        }
      } else if (options.clear) {
        this.draw((ctx) => {
          clear(ctx, this.size);
        });
      }
    }
    destroy() {
      this.stop();
      if (this._generated) {
        const element = this.element;
        element?.remove();
      } else {
        this._resetOriginalStyle();
      }
      this._preDrawUpdaters = [];
      this._postDrawUpdaters = [];
      this._resizePlugins = [];
      this._colorPlugins = [];
    }
    draw(cb) {
      const ctx = this._context;
      if (!ctx) {
        return;
      }
      return cb(ctx);
    }
    drawAsync(cb) {
      const ctx = this._context;
      if (!ctx) {
        return void 0;
      }
      return cb(ctx);
    }
    drawParticle(particle, delta) {
      if (particle.spawning || particle.destroyed) {
        return;
      }
      const radius = particle.getRadius(), minimumSize = 0;
      if (radius <= minimumSize) {
        return;
      }
      const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
      let [fColor, sColor] = this._getPluginParticleColors(particle);
      if (!fColor) {
        fColor = pfColor;
      }
      if (!sColor) {
        sColor = psColor;
      }
      if (!fColor && !sColor) {
        return;
      }
      this.draw((ctx) => {
        const container2 = this.container, options = container2.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactorOffset = 1, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, defaultOpacity2 = 1, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? defaultOpacity2, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
          fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
        };
        colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
        this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
        drawParticle({
          container: container2,
          context: ctx,
          particle,
          delta,
          colorStyles,
          backgroundMask: options.backgroundMask.enable,
          composite: options.backgroundMask.composite,
          radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
          opacity: zOpacity,
          shadow: particle.options.shadow,
          transform
        });
        this._applyPostDrawUpdaters(particle);
      });
    }
    drawParticlePlugin(plugin, particle, delta) {
      this.draw((ctx) => drawParticlePlugin(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
      this.draw((ctx) => drawPlugin(ctx, plugin, delta));
    }
    async init() {
      this._safeMutationObserver((obs) => obs.disconnect());
      this._mutationObserver = safeMutationObserver((records) => {
        for (const record of records) {
          if (record.type === "attributes" && record.attributeName === "style") {
            this._repairStyle();
          }
        }
      });
      this.resize();
      this._initStyle();
      await this._initCover();
      try {
        await this._initTrail();
      } catch (e) {
        getLogger().error(e);
      }
      this.initBackground();
      this._safeMutationObserver((obs) => {
        if (!this.element || !(this.element instanceof Node)) {
          return;
        }
        obs.observe(this.element, { attributes: true });
      });
      this.initUpdaters();
      this.initPlugins();
      this.paint();
    }
    initBackground() {
      const options = this.container.actualOptions, background = options.background, element = this.element;
      if (!element) {
        return;
      }
      const elementStyle = element.style;
      if (!elementStyle) {
        return;
      }
      if (background.color) {
        const color = rangeColorToRgb(background.color);
        elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
      } else {
        elementStyle.backgroundColor = "";
      }
      elementStyle.backgroundImage = background.image || "";
      elementStyle.backgroundPosition = background.position || "";
      elementStyle.backgroundRepeat = background.repeat || "";
      elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
      this._resizePlugins = [];
      for (const [, plugin] of this.container.plugins) {
        if (plugin.resize) {
          this._resizePlugins.push(plugin);
        }
        if (plugin.particleFillColor ?? plugin.particleStrokeColor) {
          this._colorPlugins.push(plugin);
        }
      }
    }
    initUpdaters() {
      this._preDrawUpdaters = [];
      this._postDrawUpdaters = [];
      for (const updater of this.container.particles.updaters) {
        if (updater.afterDraw) {
          this._postDrawUpdaters.push(updater);
        }
        if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
          this._preDrawUpdaters.push(updater);
        }
      }
    }
    loadCanvas(canvas) {
      if (this._generated && this.element) {
        this.element.remove();
      }
      this._generated = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this._generated;
      this.element = canvas;
      this.element.ariaHidden = "true";
      this._originalStyle = deepExtend({}, this.element.style);
      this.size.height = canvas.offsetHeight;
      this.size.width = canvas.offsetWidth;
      this._context = this.element.getContext("2d");
      this._safeMutationObserver((obs) => {
        if (!this.element || !(this.element instanceof Node)) {
          return;
        }
        obs.observe(this.element, { attributes: true });
      });
      this.container.retina.init();
      this.initBackground();
    }
    paint() {
      const options = this.container.actualOptions;
      this.draw((ctx) => {
        if (options.backgroundMask.enable && options.backgroundMask.cover) {
          clear(ctx, this.size);
          if (this._coverImage) {
            this._paintImage(this._coverImage.image, this._coverImage.opacity);
          } else if (this._coverColorStyle) {
            this._paintBase(this._coverColorStyle);
          } else {
            this._paintBase();
          }
        } else {
          this._paintBase();
        }
      });
    }
    resize() {
      if (!this.element) {
        return false;
      }
      const container2 = this.container, pxRatio = container2.retina.pixelRatio, size = container2.canvas.size, newSize = {
        width: this.element.offsetWidth * pxRatio,
        height: this.element.offsetHeight * pxRatio
      };
      if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
        return false;
      }
      const oldSize = { ...size };
      this.element.width = size.width = this.element.offsetWidth * pxRatio;
      this.element.height = size.height = this.element.offsetHeight * pxRatio;
      if (this.container.started) {
        container2.particles.setResizeFactor({
          width: size.width / oldSize.width,
          height: size.height / oldSize.height
        });
      }
      return true;
    }
    stop() {
      this._safeMutationObserver((obs) => obs.disconnect());
      this._mutationObserver = void 0;
      this.draw((ctx) => clear(ctx, this.size));
    }
    async windowResize() {
      if (!this.element || !this.resize()) {
        return;
      }
      const container2 = this.container, needsRefresh = container2.updateActualOptions();
      container2.particles.setDensity();
      this._applyResizePlugins();
      if (needsRefresh) {
        await container2.refresh();
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js
  var InteractivityDetect;
  (function(InteractivityDetect2) {
    InteractivityDetect2["canvas"] = "canvas";
    InteractivityDetect2["parent"] = "parent";
    InteractivityDetect2["window"] = "window";
  })(InteractivityDetect || (InteractivityDetect = {}));

  // node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js
  var double2 = 2;
  function manageListener(element, event, handler, add, options) {
    if (add) {
      let addOptions = { passive: true };
      if (isBoolean(options)) {
        addOptions.capture = options;
      } else if (options !== void 0) {
        addOptions = options;
      }
      element.addEventListener(event, handler, addOptions);
    } else {
      const removeOptions = options;
      element.removeEventListener(event, handler, removeOptions);
    }
  }
  var EventListeners = class {
    constructor(container2) {
      this.container = container2;
      this._doMouseTouchClick = (e) => {
        const container3 = this.container, options = container3.actualOptions;
        if (this._canPush) {
          const mouseInteractivity = container3.interactivity.mouse, mousePos = mouseInteractivity.position;
          if (!mousePos) {
            return;
          }
          mouseInteractivity.clickPosition = { ...mousePos };
          mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
          const onClick = options.interactivity.events.onClick;
          executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
        }
        if (e.type === "touchend") {
          const touchDelay = 500;
          setTimeout(() => this._mouseTouchFinish(), touchDelay);
        }
      };
      this._handleThemeChange = (e) => {
        const mediaEvent = e, container3 = this.container, options = container3.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
        if (theme?.default.auto) {
          void container3.loadTheme(themeName);
        }
      };
      this._handleVisibilityChange = () => {
        const container3 = this.container, options = container3.actualOptions;
        this._mouseTouchFinish();
        if (!options.pauseOnBlur) {
          return;
        }
        if (document?.hidden) {
          container3.pageHidden = true;
          container3.pause();
        } else {
          container3.pageHidden = false;
          if (container3.animationStatus) {
            void container3.play(true);
          } else {
            void container3.draw(true);
          }
        }
      };
      this._handleWindowResize = () => {
        if (this._resizeTimeout) {
          clearTimeout(this._resizeTimeout);
          delete this._resizeTimeout;
        }
        const handleResize = async () => {
          const canvas = this.container.canvas;
          await canvas?.windowResize();
        };
        this._resizeTimeout = setTimeout(() => void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * millisecondsToSeconds);
      };
      this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
        const handlers = this._handlers, container3 = this.container, options = container3.actualOptions;
        const interactivityEl = container3.interactivity.element;
        if (!interactivityEl) {
          return;
        }
        const html = interactivityEl, canvasEl = container3.canvas.element;
        if (canvasEl) {
          canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
        }
        if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
          return;
        }
        manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
        manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
        manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
        if (!options.interactivity.events.onClick.enable) {
          manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
        } else {
          manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
          manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
          manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
        }
        manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
        manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
      };
      this._manageListeners = (add) => {
        const handlers = this._handlers, container3 = this.container, options = container3.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container3.canvas.element;
        let mouseLeaveTmpEvent = mouseLeaveEvent;
        if (detectType === InteractivityDetect.window) {
          container3.interactivity.element = window;
          mouseLeaveTmpEvent = mouseOutEvent;
        } else if (detectType === InteractivityDetect.parent && canvasEl) {
          container3.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
        } else {
          container3.interactivity.element = canvasEl;
        }
        this._manageMediaMatch(add);
        this._manageResize(add);
        this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
        if (document) {
          manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
        }
      };
      this._manageMediaMatch = (add) => {
        const handlers = this._handlers, mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
        if (!mediaMatch) {
          return;
        }
        if (mediaMatch.addEventListener !== void 0) {
          manageListener(mediaMatch, "change", handlers.themeChange, add);
          return;
        }
        if (mediaMatch.addListener === void 0) {
          return;
        }
        if (add) {
          mediaMatch.addListener(handlers.oldThemeChange);
        } else {
          mediaMatch.removeListener(handlers.oldThemeChange);
        }
      };
      this._manageResize = (add) => {
        const handlers = this._handlers, container3 = this.container, options = container3.actualOptions;
        if (!options.interactivity.events.resize) {
          return;
        }
        if (typeof ResizeObserver === "undefined") {
          manageListener(window, resizeEvent, handlers.resize, add);
          return;
        }
        const canvasEl = container3.canvas.element;
        if (this._resizeObserver && !add) {
          if (canvasEl) {
            this._resizeObserver.unobserve(canvasEl);
          }
          this._resizeObserver.disconnect();
          delete this._resizeObserver;
        } else if (!this._resizeObserver && add && canvasEl) {
          this._resizeObserver = new ResizeObserver((entries) => {
            const entry = entries.find((e) => e.target === canvasEl);
            if (!entry) {
              return;
            }
            this._handleWindowResize();
          });
          this._resizeObserver.observe(canvasEl);
        }
      };
      this._mouseDown = () => {
        const { interactivity } = this.container;
        if (!interactivity) {
          return;
        }
        const { mouse } = interactivity;
        mouse.clicking = true;
        mouse.downPosition = mouse.position;
      };
      this._mouseTouchClick = (e) => {
        const container3 = this.container, options = container3.actualOptions, { mouse } = container3.interactivity;
        mouse.inside = true;
        let handled = false;
        const mousePosition = mouse.position;
        if (!mousePosition || !options.interactivity.events.onClick.enable) {
          return;
        }
        for (const [, plugin] of container3.plugins) {
          if (!plugin.clickPositionValid) {
            continue;
          }
          handled = plugin.clickPositionValid(mousePosition);
          if (handled) {
            break;
          }
        }
        if (!handled) {
          this._doMouseTouchClick(e);
        }
        mouse.clicking = false;
      };
      this._mouseTouchFinish = () => {
        const interactivity = this.container.interactivity;
        if (!interactivity) {
          return;
        }
        const mouse = interactivity.mouse;
        delete mouse.position;
        delete mouse.clickPosition;
        delete mouse.downPosition;
        interactivity.status = mouseLeaveEvent;
        mouse.inside = false;
        mouse.clicking = false;
      };
      this._mouseTouchMove = (e) => {
        const container3 = this.container, options = container3.actualOptions, interactivity = container3.interactivity, canvasEl = container3.canvas.element;
        if (!interactivity?.element) {
          return;
        }
        interactivity.mouse.inside = true;
        let pos;
        if (e.type.startsWith("pointer")) {
          this._canPush = true;
          const mouseEvent = e;
          if (interactivity.element === window) {
            if (canvasEl) {
              const clientRect = canvasEl.getBoundingClientRect();
              pos = {
                x: mouseEvent.clientX - clientRect.left,
                y: mouseEvent.clientY - clientRect.top
              };
            }
          } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
            const source = mouseEvent.target, target = mouseEvent.currentTarget;
            if (source && target && canvasEl) {
              const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
              pos = {
                x: mouseEvent.offsetX + double2 * sourceRect.left - (targetRect.left + canvasRect.left),
                y: mouseEvent.offsetY + double2 * sourceRect.top - (targetRect.top + canvasRect.top)
              };
            } else {
              pos = {
                x: mouseEvent.offsetX ?? mouseEvent.clientX,
                y: mouseEvent.offsetY ?? mouseEvent.clientY
              };
            }
          } else if (mouseEvent.target === canvasEl) {
            pos = {
              x: mouseEvent.offsetX ?? mouseEvent.clientX,
              y: mouseEvent.offsetY ?? mouseEvent.clientY
            };
          }
        } else {
          this._canPush = e.type !== "touchmove";
          if (canvasEl) {
            const touchEvent = e, lengthOffset = 1, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect(), defaultCoordinate = 0;
            pos = {
              x: lastTouch.clientX - (canvasRect.left ?? defaultCoordinate),
              y: lastTouch.clientY - (canvasRect.top ?? defaultCoordinate)
            };
          }
        }
        const pxRatio = container3.retina.pixelRatio;
        if (pos) {
          pos.x *= pxRatio;
          pos.y *= pxRatio;
        }
        interactivity.mouse.position = pos;
        interactivity.status = mouseMoveEvent;
      };
      this._touchEnd = (e) => {
        const evt = e, touches = Array.from(evt.changedTouches);
        for (const touch of touches) {
          this._touches.delete(touch.identifier);
        }
        this._mouseTouchFinish();
      };
      this._touchEndClick = (e) => {
        const evt = e, touches = Array.from(evt.changedTouches);
        for (const touch of touches) {
          this._touches.delete(touch.identifier);
        }
        this._mouseTouchClick(e);
      };
      this._touchStart = (e) => {
        const evt = e, touches = Array.from(evt.changedTouches);
        for (const touch of touches) {
          this._touches.set(touch.identifier, performance.now());
        }
        this._mouseTouchMove(e);
      };
      this._canPush = true;
      this._touches = /* @__PURE__ */ new Map();
      this._handlers = {
        mouseDown: () => this._mouseDown(),
        mouseLeave: () => this._mouseTouchFinish(),
        mouseMove: (e) => this._mouseTouchMove(e),
        mouseUp: (e) => this._mouseTouchClick(e),
        touchStart: (e) => this._touchStart(e),
        touchMove: (e) => this._mouseTouchMove(e),
        touchEnd: (e) => this._touchEnd(e),
        touchCancel: (e) => this._touchEnd(e),
        touchEndClick: (e) => this._touchEndClick(e),
        visibilityChange: () => this._handleVisibilityChange(),
        themeChange: (e) => this._handleThemeChange(e),
        oldThemeChange: (e) => this._handleThemeChange(e),
        resize: () => {
          this._handleWindowResize();
        }
      };
    }
    addListeners() {
      this._manageListeners(true);
    }
    removeListeners() {
      this._manageListeners(false);
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js
  var EventType;
  (function(EventType2) {
    EventType2["configAdded"] = "configAdded";
    EventType2["containerInit"] = "containerInit";
    EventType2["particlesSetup"] = "particlesSetup";
    EventType2["containerStarted"] = "containerStarted";
    EventType2["containerStopped"] = "containerStopped";
    EventType2["containerDestroyed"] = "containerDestroyed";
    EventType2["containerPaused"] = "containerPaused";
    EventType2["containerPlay"] = "containerPlay";
    EventType2["containerBuilt"] = "containerBuilt";
    EventType2["particleAdded"] = "particleAdded";
    EventType2["particleDestroyed"] = "particleDestroyed";
    EventType2["particleRemoved"] = "particleRemoved";
  })(EventType || (EventType = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js
  var OptionsColor = class _OptionsColor {
    constructor() {
      this.value = "";
    }
    static create(source, data) {
      const color = new _OptionsColor();
      color.load(source);
      if (data !== void 0) {
        if (isString(data) || isArray(data)) {
          color.load({ value: data });
        } else {
          color.load(data);
        }
      }
      return color;
    }
    load(data) {
      if (data?.value === void 0) {
        return;
      }
      this.value = data.value;
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js
  var Background = class {
    constructor() {
      this.color = new OptionsColor();
      this.color.value = "";
      this.image = "";
      this.position = "";
      this.repeat = "";
      this.size = "";
      this.opacity = 1;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      if (data.image !== void 0) {
        this.image = data.image;
      }
      if (data.position !== void 0) {
        this.position = data.position;
      }
      if (data.repeat !== void 0) {
        this.repeat = data.repeat;
      }
      if (data.size !== void 0) {
        this.size = data.size;
      }
      if (data.opacity !== void 0) {
        this.opacity = data.opacity;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMaskCover.js
  var BackgroundMaskCover = class {
    constructor() {
      this.opacity = 1;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      if (data.image !== void 0) {
        this.image = data.image;
      }
      if (data.opacity !== void 0) {
        this.opacity = data.opacity;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMask.js
  var BackgroundMask = class {
    constructor() {
      this.composite = "destination-out";
      this.cover = new BackgroundMaskCover();
      this.enable = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.composite !== void 0) {
        this.composite = data.composite;
      }
      if (data.cover !== void 0) {
        const cover = data.cover, color = isString(data.cover) ? { color: data.cover } : data.cover;
        this.cover.load(cover.color !== void 0 || cover.image !== void 0 ? cover : { color });
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js
  var FullScreen = class {
    constructor() {
      this.enable = true;
      this.zIndex = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.zIndex !== void 0) {
        this.zIndex = data.zIndex;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ClickEvent.js
  var ClickEvent = class {
    constructor() {
      this.enable = false;
      this.mode = [];
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js
  var DivType;
  (function(DivType2) {
    DivType2["circle"] = "circle";
    DivType2["rectangle"] = "rectangle";
  })(DivType || (DivType = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/DivEvent.js
  var DivEvent = class {
    constructor() {
      this.selectors = [];
      this.enable = false;
      this.mode = [];
      this.type = DivType.circle;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.selectors !== void 0) {
        this.selectors = data.selectors;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.type !== void 0) {
        this.type = data.type;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Parallax.js
  var Parallax = class {
    constructor() {
      this.enable = false;
      this.force = 2;
      this.smooth = 10;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.force !== void 0) {
        this.force = data.force;
      }
      if (data.smooth !== void 0) {
        this.smooth = data.smooth;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/HoverEvent.js
  var HoverEvent = class {
    constructor() {
      this.enable = false;
      this.mode = [];
      this.parallax = new Parallax();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      this.parallax.load(data.parallax);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ResizeEvent.js
  var ResizeEvent = class {
    constructor() {
      this.delay = 0.5;
      this.enable = true;
    }
    load(data) {
      if (data === void 0) {
        return;
      }
      if (data.delay !== void 0) {
        this.delay = data.delay;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Events.js
  var Events = class {
    constructor() {
      this.onClick = new ClickEvent();
      this.onDiv = new DivEvent();
      this.onHover = new HoverEvent();
      this.resize = new ResizeEvent();
    }
    load(data) {
      if (!data) {
        return;
      }
      this.onClick.load(data.onClick);
      const onDiv = data.onDiv;
      if (onDiv !== void 0) {
        this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
          const tmp = new DivEvent();
          tmp.load(t);
          return tmp;
        });
      }
      this.onHover.load(data.onHover);
      this.resize.load(data.resize);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Modes/Modes.js
  var Modes = class {
    constructor(engine, container2) {
      this._engine = engine;
      this._container = container2;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (!this._container) {
        return;
      }
      const interactors = this._engine.interactors.get(this._container);
      if (!interactors) {
        return;
      }
      for (const interactor of interactors) {
        if (!interactor.loadModeOptions) {
          continue;
        }
        interactor.loadModeOptions(this, data);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js
  var Interactivity = class {
    constructor(engine, container2) {
      this.detectsOn = InteractivityDetect.window;
      this.events = new Events();
      this.modes = new Modes(engine, container2);
    }
    load(data) {
      if (!data) {
        return;
      }
      const detectsOn = data.detectsOn;
      if (detectsOn !== void 0) {
        this.detectsOn = detectsOn;
      }
      this.events.load(data.events);
      this.modes.load(data.modes);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/ManualParticle.js
  var defaultPosition = 50;
  var ManualParticle = class {
    load(data) {
      if (!data) {
        return;
      }
      if (data.position) {
        this.position = {
          x: data.position.x ?? defaultPosition,
          y: data.position.y ?? defaultPosition,
          mode: data.position.mode ?? PixelMode.percent
        };
      }
      if (data.options) {
        this.options = deepExtend({}, data.options);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js
  var ResponsiveMode;
  (function(ResponsiveMode2) {
    ResponsiveMode2["screen"] = "screen";
    ResponsiveMode2["canvas"] = "canvas";
  })(ResponsiveMode || (ResponsiveMode = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Responsive.js
  var Responsive = class {
    constructor() {
      this.maxWidth = Infinity;
      this.options = {};
      this.mode = ResponsiveMode.canvas;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.maxWidth !== void 0) {
        this.maxWidth = data.maxWidth;
      }
      if (data.mode !== void 0) {
        if (data.mode === ResponsiveMode.screen) {
          this.mode = ResponsiveMode.screen;
        } else {
          this.mode = ResponsiveMode.canvas;
        }
      }
      if (data.options !== void 0) {
        this.options = deepExtend({}, data.options);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js
  var ThemeMode;
  (function(ThemeMode2) {
    ThemeMode2["any"] = "any";
    ThemeMode2["dark"] = "dark";
    ThemeMode2["light"] = "light";
  })(ThemeMode || (ThemeMode = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Theme/ThemeDefault.js
  var ThemeDefault = class {
    constructor() {
      this.auto = false;
      this.mode = ThemeMode.any;
      this.value = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.auto !== void 0) {
        this.auto = data.auto;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.value !== void 0) {
        this.value = data.value;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Theme/Theme.js
  var Theme = class {
    constructor() {
      this.name = "";
      this.default = new ThemeDefault();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.name !== void 0) {
        this.name = data.name;
      }
      this.default.load(data.default);
      if (data.options !== void 0) {
        this.options = deepExtend({}, data.options);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js
  var AnimationOptions = class {
    constructor() {
      this.count = 0;
      this.enable = false;
      this.speed = 1;
      this.decay = 0;
      this.delay = 0;
      this.sync = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.count !== void 0) {
        this.count = setRangeValue(data.count);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.speed !== void 0) {
        this.speed = setRangeValue(data.speed);
      }
      if (data.decay !== void 0) {
        this.decay = setRangeValue(data.decay);
      }
      if (data.delay !== void 0) {
        this.delay = setRangeValue(data.delay);
      }
      if (data.sync !== void 0) {
        this.sync = data.sync;
      }
    }
  };
  var RangedAnimationOptions = class extends AnimationOptions {
    constructor() {
      super();
      this.mode = AnimationMode.auto;
      this.startValue = StartValueType.random;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.startValue !== void 0) {
        this.startValue = data.startValue;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js
  var ColorAnimation = class extends AnimationOptions {
    constructor() {
      super();
      this.offset = 0;
      this.sync = true;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      if (data.offset !== void 0) {
        this.offset = setRangeValue(data.offset);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js
  var HslAnimation = class {
    constructor() {
      this.h = new ColorAnimation();
      this.s = new ColorAnimation();
      this.l = new ColorAnimation();
    }
    load(data) {
      if (!data) {
        return;
      }
      this.h.load(data.h);
      this.s.load(data.s);
      this.l.load(data.l);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js
  var AnimatableColor = class _AnimatableColor extends OptionsColor {
    constructor() {
      super();
      this.animation = new HslAnimation();
    }
    static create(source, data) {
      const color = new _AnimatableColor();
      color.load(source);
      if (data !== void 0) {
        if (isString(data) || isArray(data)) {
          color.load({ value: data });
        } else {
          color.load(data);
        }
      }
      return color;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      const colorAnimation = data.animation;
      if (colorAnimation !== void 0) {
        if (colorAnimation.enable !== void 0) {
          this.animation.h.load(colorAnimation);
        } else {
          this.animation.load(data.animation);
        }
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js
  var CollisionMode;
  (function(CollisionMode2) {
    CollisionMode2["absorb"] = "absorb";
    CollisionMode2["bounce"] = "bounce";
    CollisionMode2["destroy"] = "destroy";
  })(CollisionMode || (CollisionMode = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsAbsorb.js
  var CollisionsAbsorb = class {
    constructor() {
      this.speed = 2;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.speed !== void 0) {
        this.speed = data.speed;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsOverlap.js
  var CollisionsOverlap = class {
    constructor() {
      this.enable = true;
      this.retries = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.retries !== void 0) {
        this.retries = data.retries;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js
  var ValueWithRandom = class {
    constructor() {
      this.value = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.value !== void 0) {
        this.value = setRangeValue(data.value);
      }
    }
  };
  var AnimationValueWithRandom = class extends ValueWithRandom {
    constructor() {
      super();
      this.animation = new AnimationOptions();
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };
  var RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
    constructor() {
      super();
      this.animation = new RangedAnimationOptions();
    }
    load(data) {
      super.load(data);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
  var ParticlesBounceFactor = class extends ValueWithRandom {
    constructor() {
      super();
      this.value = 1;
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js
  var ParticlesBounce = class {
    constructor() {
      this.horizontal = new ParticlesBounceFactor();
      this.vertical = new ParticlesBounceFactor();
    }
    load(data) {
      if (!data) {
        return;
      }
      this.horizontal.load(data.horizontal);
      this.vertical.load(data.vertical);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/Collisions.js
  var Collisions = class {
    constructor() {
      this.absorb = new CollisionsAbsorb();
      this.bounce = new ParticlesBounce();
      this.enable = false;
      this.maxSpeed = 50;
      this.mode = CollisionMode.bounce;
      this.overlap = new CollisionsOverlap();
    }
    load(data) {
      if (!data) {
        return;
      }
      this.absorb.load(data.absorb);
      this.bounce.load(data.bounce);
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.maxSpeed !== void 0) {
        this.maxSpeed = setRangeValue(data.maxSpeed);
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      this.overlap.load(data.overlap);
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js
  var Effect = class {
    constructor() {
      this.close = true;
      this.fill = true;
      this.options = {};
      this.type = [];
    }
    load(data) {
      if (!data) {
        return;
      }
      const options = data.options;
      if (options !== void 0) {
        for (const effect in options) {
          const item = options[effect];
          if (item) {
            this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
          }
        }
      }
      if (data.close !== void 0) {
        this.close = data.close;
      }
      if (data.fill !== void 0) {
        this.fill = data.fill;
      }
      if (data.type !== void 0) {
        this.type = data.type;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js
  var MoveAngle = class {
    constructor() {
      this.offset = 0;
      this.value = 90;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.offset !== void 0) {
        this.offset = setRangeValue(data.offset);
      }
      if (data.value !== void 0) {
        this.value = setRangeValue(data.value);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAttract.js
  var MoveAttract = class {
    constructor() {
      this.distance = 200;
      this.enable = false;
      this.rotate = {
        x: 3e3,
        y: 3e3
      };
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.distance !== void 0) {
        this.distance = setRangeValue(data.distance);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.rotate) {
        const rotateX = data.rotate.x;
        if (rotateX !== void 0) {
          this.rotate.x = rotateX;
        }
        const rotateY = data.rotate.y;
        if (rotateY !== void 0) {
          this.rotate.y = rotateY;
        }
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js
  var MoveCenter = class {
    constructor() {
      this.x = 50;
      this.y = 50;
      this.mode = PixelMode.percent;
      this.radius = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.x !== void 0) {
        this.x = data.x;
      }
      if (data.y !== void 0) {
        this.y = data.y;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.radius !== void 0) {
        this.radius = data.radius;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js
  var MoveGravity = class {
    constructor() {
      this.acceleration = 9.81;
      this.enable = false;
      this.inverse = false;
      this.maxSpeed = 50;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.acceleration !== void 0) {
        this.acceleration = setRangeValue(data.acceleration);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.inverse !== void 0) {
        this.inverse = data.inverse;
      }
      if (data.maxSpeed !== void 0) {
        this.maxSpeed = setRangeValue(data.maxSpeed);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js
  var MovePath = class {
    constructor() {
      this.clamp = true;
      this.delay = new ValueWithRandom();
      this.enable = false;
      this.options = {};
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.clamp !== void 0) {
        this.clamp = data.clamp;
      }
      this.delay.load(data.delay);
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      this.generator = data.generator;
      if (data.options) {
        this.options = deepExtend(this.options, data.options);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrailFill.js
  var MoveTrailFill = class {
    load(data) {
      if (!data) {
        return;
      }
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      if (data.image !== void 0) {
        this.image = data.image;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrail.js
  var MoveTrail = class {
    constructor() {
      this.enable = false;
      this.length = 10;
      this.fill = new MoveTrailFill();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.fill !== void 0) {
        this.fill.load(data.fill);
      }
      if (data.length !== void 0) {
        this.length = data.length;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js
  var OutMode;
  (function(OutMode2) {
    OutMode2["bounce"] = "bounce";
    OutMode2["none"] = "none";
    OutMode2["out"] = "out";
    OutMode2["destroy"] = "destroy";
    OutMode2["split"] = "split";
  })(OutMode || (OutMode = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js
  var OutModes = class {
    constructor() {
      this.default = OutMode.out;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.default !== void 0) {
        this.default = data.default;
      }
      this.bottom = data.bottom ?? data.default;
      this.left = data.left ?? data.default;
      this.right = data.right ?? data.default;
      this.top = data.top ?? data.default;
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js
  var Spin = class {
    constructor() {
      this.acceleration = 0;
      this.enable = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.acceleration !== void 0) {
        this.acceleration = setRangeValue(data.acceleration);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.position) {
        this.position = deepExtend({}, data.position);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js
  var Move = class {
    constructor() {
      this.angle = new MoveAngle();
      this.attract = new MoveAttract();
      this.center = new MoveCenter();
      this.decay = 0;
      this.distance = {};
      this.direction = MoveDirection.none;
      this.drift = 0;
      this.enable = false;
      this.gravity = new MoveGravity();
      this.path = new MovePath();
      this.outModes = new OutModes();
      this.random = false;
      this.size = false;
      this.speed = 2;
      this.spin = new Spin();
      this.straight = false;
      this.trail = new MoveTrail();
      this.vibrate = false;
      this.warp = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
      this.attract.load(data.attract);
      this.center.load(data.center);
      if (data.decay !== void 0) {
        this.decay = setRangeValue(data.decay);
      }
      if (data.direction !== void 0) {
        this.direction = data.direction;
      }
      if (data.distance !== void 0) {
        this.distance = isNumber(data.distance) ? {
          horizontal: data.distance,
          vertical: data.distance
        } : { ...data.distance };
      }
      if (data.drift !== void 0) {
        this.drift = setRangeValue(data.drift);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      this.gravity.load(data.gravity);
      const outModes = data.outModes;
      if (outModes !== void 0) {
        if (isObject(outModes)) {
          this.outModes.load(outModes);
        } else {
          this.outModes.load({
            default: outModes
          });
        }
      }
      this.path.load(data.path);
      if (data.random !== void 0) {
        this.random = data.random;
      }
      if (data.size !== void 0) {
        this.size = data.size;
      }
      if (data.speed !== void 0) {
        this.speed = setRangeValue(data.speed);
      }
      this.spin.load(data.spin);
      if (data.straight !== void 0) {
        this.straight = data.straight;
      }
      this.trail.load(data.trail);
      if (data.vibrate !== void 0) {
        this.vibrate = data.vibrate;
      }
      if (data.warp !== void 0) {
        this.warp = data.warp;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/OpacityAnimation.js
  var OpacityAnimation = class extends RangedAnimationOptions {
    constructor() {
      super();
      this.destroy = DestroyType.none;
      this.speed = 2;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      if (data.destroy !== void 0) {
        this.destroy = data.destroy;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/Opacity.js
  var Opacity = class extends RangedAnimationValueWithRandom {
    constructor() {
      super();
      this.animation = new OpacityAnimation();
      this.value = 1;
    }
    load(data) {
      if (!data) {
        return;
      }
      super.load(data);
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js
  var ParticlesDensity = class {
    constructor() {
      this.enable = false;
      this.width = 1920;
      this.height = 1080;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      const width = data.width;
      if (width !== void 0) {
        this.width = width;
      }
      const height = data.height;
      if (height !== void 0) {
        this.height = height;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js
  var LimitMode;
  (function(LimitMode2) {
    LimitMode2["delete"] = "delete";
    LimitMode2["wait"] = "wait";
  })(LimitMode || (LimitMode = {}));

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js
  var ParticlesNumberLimit = class {
    constructor() {
      this.mode = LimitMode.delete;
      this.value = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.value !== void 0) {
        this.value = data.value;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js
  var ParticlesNumber = class {
    constructor() {
      this.density = new ParticlesDensity();
      this.limit = new ParticlesNumberLimit();
      this.value = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      this.density.load(data.density);
      this.limit.load(data.limit);
      if (data.value !== void 0) {
        this.value = data.value;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shadow.js
  var Shadow = class {
    constructor() {
      this.blur = 0;
      this.color = new OptionsColor();
      this.enable = false;
      this.offset = {
        x: 0,
        y: 0
      };
      this.color.value = "#000";
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.blur !== void 0) {
        this.blur = data.blur;
      }
      this.color = OptionsColor.create(this.color, data.color);
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.offset === void 0) {
        return;
      }
      if (data.offset.x !== void 0) {
        this.offset.x = data.offset.x;
      }
      if (data.offset.y !== void 0) {
        this.offset.y = data.offset.y;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js
  var Shape = class {
    constructor() {
      this.close = true;
      this.fill = true;
      this.options = {};
      this.type = "circle";
    }
    load(data) {
      if (!data) {
        return;
      }
      const options = data.options;
      if (options !== void 0) {
        for (const shape in options) {
          const item = options[shape];
          if (item) {
            this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
          }
        }
      }
      if (data.close !== void 0) {
        this.close = data.close;
      }
      if (data.fill !== void 0) {
        this.fill = data.fill;
      }
      if (data.type !== void 0) {
        this.type = data.type;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/SizeAnimation.js
  var SizeAnimation = class extends RangedAnimationOptions {
    constructor() {
      super();
      this.destroy = DestroyType.none;
      this.speed = 5;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      if (data.destroy !== void 0) {
        this.destroy = data.destroy;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/Size.js
  var Size = class extends RangedAnimationValueWithRandom {
    constructor() {
      super();
      this.animation = new SizeAnimation();
      this.value = 3;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js
  var Stroke = class {
    constructor() {
      this.width = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.color !== void 0) {
        this.color = AnimatableColor.create(this.color, data.color);
      }
      if (data.width !== void 0) {
        this.width = setRangeValue(data.width);
      }
      if (data.opacity !== void 0) {
        this.opacity = setRangeValue(data.opacity);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js
  var ZIndex = class extends ValueWithRandom {
    constructor() {
      super();
      this.opacityRate = 1;
      this.sizeRate = 1;
      this.velocityRate = 1;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      if (data.opacityRate !== void 0) {
        this.opacityRate = data.opacityRate;
      }
      if (data.sizeRate !== void 0) {
        this.sizeRate = data.sizeRate;
      }
      if (data.velocityRate !== void 0) {
        this.velocityRate = data.velocityRate;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js
  var ParticlesOptions = class {
    constructor(engine, container2) {
      this._engine = engine;
      this._container = container2;
      this.bounce = new ParticlesBounce();
      this.collisions = new Collisions();
      this.color = new AnimatableColor();
      this.color.value = "#fff";
      this.effect = new Effect();
      this.groups = {};
      this.move = new Move();
      this.number = new ParticlesNumber();
      this.opacity = new Opacity();
      this.reduceDuplicates = false;
      this.shadow = new Shadow();
      this.shape = new Shape();
      this.size = new Size();
      this.stroke = new Stroke();
      this.zIndex = new ZIndex();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.groups !== void 0) {
        for (const group of Object.keys(data.groups)) {
          if (!Object.hasOwn(data.groups, group)) {
            continue;
          }
          const item = data.groups[group];
          if (item !== void 0) {
            this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
          }
        }
      }
      if (data.reduceDuplicates !== void 0) {
        this.reduceDuplicates = data.reduceDuplicates;
      }
      this.bounce.load(data.bounce);
      this.color.load(AnimatableColor.create(this.color, data.color));
      this.effect.load(data.effect);
      this.move.load(data.move);
      this.number.load(data.number);
      this.opacity.load(data.opacity);
      this.shape.load(data.shape);
      this.size.load(data.size);
      this.shadow.load(data.shadow);
      this.zIndex.load(data.zIndex);
      this.collisions.load(data.collisions);
      if (data.interactivity !== void 0) {
        this.interactivity = deepExtend({}, data.interactivity);
      }
      const strokeToLoad = data.stroke;
      if (strokeToLoad) {
        this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
          const tmp = new Stroke();
          tmp.load(t);
          return tmp;
        });
      }
      if (this._container) {
        const updaters = this._engine.updaters.get(this._container);
        if (updaters) {
          for (const updater of updaters) {
            if (updater.loadOptions) {
              updater.loadOptions(this, data);
            }
          }
        }
        const interactors = this._engine.interactors.get(this._container);
        if (interactors) {
          for (const interactor of interactors) {
            if (interactor.loadParticlesOptions) {
              interactor.loadParticlesOptions(this, data);
            }
          }
        }
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js
  function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
      options.load(sourceOptions);
    }
  }
  function loadParticlesOptions(engine, container2, ...sourceOptionsArr) {
    const options = new ParticlesOptions(engine, container2);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }

  // node_modules/@tsparticles/engine/browser/Options/Classes/Options.js
  var Options = class {
    constructor(engine, container2) {
      this._findDefaultTheme = (mode) => {
        return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === ThemeMode.any);
      };
      this._importPreset = (preset) => {
        this.load(this._engine.getPreset(preset));
      };
      this._engine = engine;
      this._container = container2;
      this.autoPlay = true;
      this.background = new Background();
      this.backgroundMask = new BackgroundMask();
      this.clear = true;
      this.defaultThemes = {};
      this.delay = 0;
      this.fullScreen = new FullScreen();
      this.detectRetina = true;
      this.duration = 0;
      this.fpsLimit = 120;
      this.interactivity = new Interactivity(engine, container2);
      this.manualParticles = [];
      this.particles = loadParticlesOptions(this._engine, this._container);
      this.pauseOnBlur = true;
      this.pauseOnOutsideViewport = true;
      this.responsive = [];
      this.smooth = false;
      this.style = {};
      this.themes = [];
      this.zLayers = 100;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.preset !== void 0) {
        executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
      }
      if (data.autoPlay !== void 0) {
        this.autoPlay = data.autoPlay;
      }
      if (data.clear !== void 0) {
        this.clear = data.clear;
      }
      if (data.key !== void 0) {
        this.key = data.key;
      }
      if (data.name !== void 0) {
        this.name = data.name;
      }
      if (data.delay !== void 0) {
        this.delay = setRangeValue(data.delay);
      }
      const detectRetina = data.detectRetina;
      if (detectRetina !== void 0) {
        this.detectRetina = detectRetina;
      }
      if (data.duration !== void 0) {
        this.duration = setRangeValue(data.duration);
      }
      const fpsLimit = data.fpsLimit;
      if (fpsLimit !== void 0) {
        this.fpsLimit = fpsLimit;
      }
      if (data.pauseOnBlur !== void 0) {
        this.pauseOnBlur = data.pauseOnBlur;
      }
      if (data.pauseOnOutsideViewport !== void 0) {
        this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
      }
      if (data.zLayers !== void 0) {
        this.zLayers = data.zLayers;
      }
      this.background.load(data.background);
      const fullScreen = data.fullScreen;
      if (isBoolean(fullScreen)) {
        this.fullScreen.enable = fullScreen;
      } else {
        this.fullScreen.load(fullScreen);
      }
      this.backgroundMask.load(data.backgroundMask);
      this.interactivity.load(data.interactivity);
      if (data.manualParticles) {
        this.manualParticles = data.manualParticles.map((t) => {
          const tmp = new ManualParticle();
          tmp.load(t);
          return tmp;
        });
      }
      this.particles.load(data.particles);
      this.style = deepExtend(this.style, data.style);
      this._engine.loadOptions(this, data);
      if (data.smooth !== void 0) {
        this.smooth = data.smooth;
      }
      const interactors = this._engine.interactors.get(this._container);
      if (interactors) {
        for (const interactor of interactors) {
          if (interactor.loadOptions) {
            interactor.loadOptions(this, data);
          }
        }
      }
      if (data.responsive !== void 0) {
        for (const responsive of data.responsive) {
          const optResponsive = new Responsive();
          optResponsive.load(responsive);
          this.responsive.push(optResponsive);
        }
      }
      this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
      if (data.themes !== void 0) {
        for (const theme of data.themes) {
          const existingTheme = this.themes.find((t) => t.name === theme.name);
          if (!existingTheme) {
            const optTheme = new Theme();
            optTheme.load(theme);
            this.themes.push(optTheme);
          } else {
            existingTheme.load(theme);
          }
        }
      }
      this.defaultThemes.dark = this._findDefaultTheme(ThemeMode.dark)?.name;
      this.defaultThemes.light = this._findDefaultTheme(ThemeMode.light)?.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
      this.load(defaultOptions);
      const responsiveOptions = this.responsive.find((t) => t.mode === ResponsiveMode.screen && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
      this.load(responsiveOptions?.options);
      return responsiveOptions?.maxWidth;
    }
    setTheme(name) {
      if (name) {
        const chosenTheme = this.themes.find((theme) => theme.name === name);
        if (chosenTheme) {
          this.load(chosenTheme.options);
        }
      } else {
        const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch?.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? ThemeMode.dark : ThemeMode.light);
        if (defaultTheme) {
          this.load(defaultTheme.options);
        }
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js
  var InteractorType;
  (function(InteractorType2) {
    InteractorType2["external"] = "external";
    InteractorType2["particles"] = "particles";
  })(InteractorType || (InteractorType = {}));

  // node_modules/@tsparticles/engine/browser/Core/Utils/InteractionManager.js
  var InteractionManager = class {
    constructor(engine, container2) {
      this.container = container2;
      this._engine = engine;
      this._interactors = [];
      this._externalInteractors = [];
      this._particleInteractors = [];
    }
    externalInteract(delta) {
      for (const interactor of this._externalInteractors) {
        if (interactor.isEnabled()) {
          interactor.interact(delta);
        }
      }
    }
    handleClickMode(mode) {
      for (const interactor of this._externalInteractors) {
        interactor.handleClickMode?.(mode);
      }
    }
    async init() {
      this._interactors = await this._engine.getInteractors(this.container, true);
      this._externalInteractors = [];
      this._particleInteractors = [];
      for (const interactor of this._interactors) {
        switch (interactor.type) {
          case InteractorType.external:
            this._externalInteractors.push(interactor);
            break;
          case InteractorType.particles:
            this._particleInteractors.push(interactor);
            break;
        }
        interactor.init();
      }
    }
    particlesInteract(particle, delta) {
      for (const interactor of this._externalInteractors) {
        interactor.clear(particle, delta);
      }
      for (const interactor of this._particleInteractors) {
        if (interactor.isEnabled(particle)) {
          interactor.interact(particle, delta);
        }
      }
    }
    reset(particle) {
      for (const interactor of this._externalInteractors) {
        if (interactor.isEnabled()) {
          interactor.reset(particle);
        }
      }
      for (const interactor of this._particleInteractors) {
        if (interactor.isEnabled(particle)) {
          interactor.reset(particle);
        }
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js
  var ParticleOutType;
  (function(ParticleOutType2) {
    ParticleOutType2["normal"] = "normal";
    ParticleOutType2["inside"] = "inside";
    ParticleOutType2["outside"] = "outside";
  })(ParticleOutType || (ParticleOutType = {}));

  // node_modules/@tsparticles/engine/browser/Core/Particle.js
  var defaultRetryCount = 0;
  var double3 = 2;
  var half = 0.5;
  var squareExp2 = 2;
  var randomString = "random";
  function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    if (!effectData) {
      return;
    }
    return deepExtend({
      close: effectOptions.close,
      fill: effectOptions.fill
    }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
  }
  function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    if (!shapeData) {
      return;
    }
    return deepExtend({
      close: shapeOptions.close,
      fill: shapeOptions.fill
    }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
  }
  function fixOutMode(data) {
    if (!isInArray(data.outMode, data.checkModes)) {
      return;
    }
    const diameter = data.radius * double3;
    if (data.coord > data.maxCoord - diameter) {
      data.setCb(-data.radius);
    } else if (data.coord < diameter) {
      data.setCb(data.radius);
    }
  }
  var Particle = class {
    constructor(engine, container2) {
      this.container = container2;
      this._calcPosition = (container3, position, zIndex, tryCount = defaultRetryCount) => {
        for (const [, plugin] of container3.plugins) {
          const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position, this) : void 0;
          if (pluginPos) {
            return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
          }
        }
        const canvasSize = container3.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
          size: canvasSize,
          position
        }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.x,
            maxCoord: container3.canvas.size.width,
            setCb: (value) => pos.x += value,
            radius
          });
        }, fixVertical = (outMode) => {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.y,
            maxCoord: container3.canvas.size.height,
            setCb: (value) => pos.y += value,
            radius
          });
        };
        fixHorizontal(outModes.left ?? outModes.default);
        fixHorizontal(outModes.right ?? outModes.default);
        fixVertical(outModes.top ?? outModes.default);
        fixVertical(outModes.bottom ?? outModes.default);
        if (this._checkOverlap(pos, tryCount)) {
          const increment = 1;
          return this._calcPosition(container3, void 0, zIndex, tryCount + increment);
        }
        return pos;
      };
      this._calculateVelocity = () => {
        const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
        if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) {
          return res;
        }
        const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
          left: radOffset - rad * half,
          right: radOffset + rad * half
        };
        if (!moveOptions.straight) {
          res.angle += randomInRange(setRangeValue(range.left, range.right));
        }
        if (moveOptions.random && typeof moveOptions.speed === "number") {
          res.length *= getRandom();
        }
        return res;
      };
      this._checkOverlap = (pos, tryCount = defaultRetryCount) => {
        const collisionsOptions = this.options.collisions, radius = this.getRadius();
        if (!collisionsOptions.enable) {
          return false;
        }
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) {
          return false;
        }
        const retries = overlapOptions.retries, minRetries = 0;
        if (retries >= minRetries && tryCount > retries) {
          throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
        }
        return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
      };
      this._getRollColor = (color) => {
        if (!color || !this.roll || !this.backColor && !this.roll.alter) {
          return color;
        }
        const rollFactor = 1, none = 0, backFactor = this.roll.horizontal && this.roll.vertical ? double3 * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double3;
        if (!rolled) {
          return color;
        }
        if (this.backColor) {
          return this.backColor;
        }
        if (this.roll.alter) {
          return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
        }
        return color;
      };
      this._initPosition = (position) => {
        const container3 = this.container, zIndexValue = getRangeValue(this.options.zIndex.value), minZ = 0;
        this.position = this._calcPosition(container3, position, clamp(zIndexValue, minZ, container3.zLayers));
        this.initialPosition = this.position.copy();
        const canvasSize = container3.canvas.size, defaultRadius = 0;
        this.moveCenter = {
          ...getPosition(this.options.move.center, canvasSize),
          radius: this.options.move.center.radius ?? defaultRadius,
          mode: this.options.move.center.mode ?? PixelMode.percent
        };
        this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
        switch (this.options.move.direction) {
          case MoveDirection.inside:
            this.outType = ParticleOutType.inside;
            break;
          case MoveDirection.outside:
            this.outType = ParticleOutType.outside;
            break;
        }
        this.offset = Vector.origin;
      };
      this._engine = engine;
    }
    destroy(override) {
      if (this.unbreakable || this.destroyed) {
        return;
      }
      this.destroyed = true;
      this.bubble.inRange = false;
      this.slow.inRange = false;
      const container2 = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container2.shapeDrawers.get(this.shape);
      shapeDrawer?.particleDestroy?.(this);
      for (const [, plugin] of container2.plugins) {
        plugin.particleDestroyed?.(this, override);
      }
      for (const updater of container2.particles.updaters) {
        updater.particleDestroyed?.(this, override);
      }
      pathGenerator?.reset(this);
      this._engine.dispatchEvent(EventType.particleDestroyed, {
        container: this.container,
        data: {
          particle: this
        }
      });
    }
    draw(delta) {
      const container2 = this.container, canvas = container2.canvas;
      for (const [, plugin] of container2.plugins) {
        canvas.drawParticlePlugin(plugin, this, delta);
      }
      canvas.drawParticle(this, delta);
    }
    getFillColor() {
      return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
    }
    getMass() {
      return this.getRadius() ** squareExp2 * Math.PI * half;
    }
    getPosition() {
      return {
        x: this.position.x + this.offset.x,
        y: this.position.y + this.offset.y,
        z: this.position.z
      };
    }
    getRadius() {
      return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
      return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
      const container2 = this.container, engine = this._engine;
      this.id = id;
      this.group = group;
      this.effectClose = true;
      this.effectFill = true;
      this.shapeClose = true;
      this.shapeFill = true;
      this.pathRotation = false;
      this.lastPathTime = 0;
      this.destroyed = false;
      this.unbreakable = false;
      this.isRotating = false;
      this.rotation = 0;
      this.misplaced = false;
      this.retina = {
        maxDistance: {}
      };
      this.outType = ParticleOutType.normal;
      this.ignoresResizeRatio = true;
      const pxRatio = container2.retina.pixelRatio, mainOptions = container2.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container2, mainOptions.particles), { reduceDuplicates } = particlesOptions, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
      this.effect = itemFromSingleOrMultiple(effectType, this.id, reduceDuplicates);
      this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
      const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
      if (overrideOptions) {
        if (overrideOptions.effect?.type) {
          const overrideEffectType = overrideOptions.effect.type, effect = itemFromSingleOrMultiple(overrideEffectType, this.id, reduceDuplicates);
          if (effect) {
            this.effect = effect;
            effectOptions.load(overrideOptions.effect);
          }
        }
        if (overrideOptions.shape?.type) {
          const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
          if (shape) {
            this.shape = shape;
            shapeOptions.load(overrideOptions.shape);
          }
        }
      }
      if (this.effect === randomString) {
        const availableEffects = [...this.container.effectDrawers.keys()];
        this.effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
      }
      if (this.shape === randomString) {
        const availableShapes = [...this.container.shapeDrawers.keys()];
        this.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
      }
      this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
      this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
      particlesOptions.load(overrideOptions);
      const effectData = this.effectData;
      if (effectData) {
        particlesOptions.load(effectData.particles);
      }
      const shapeData = this.shapeData;
      if (shapeData) {
        particlesOptions.load(shapeData.particles);
      }
      const interactivity = new Interactivity(engine, container2);
      interactivity.load(container2.actualOptions.interactivity);
      interactivity.load(particlesOptions.interactivity);
      this.interactivity = interactivity;
      this.effectFill = effectData?.fill ?? particlesOptions.effect.fill;
      this.effectClose = effectData?.close ?? particlesOptions.effect.close;
      this.shapeFill = shapeData?.fill ?? particlesOptions.shape.fill;
      this.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
      this.options = particlesOptions;
      const pathOptions = this.options.move.path;
      this.pathDelay = getRangeValue(pathOptions.delay.value) * millisecondsToSeconds;
      if (pathOptions.generator) {
        this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
        if (this.pathGenerator && container2.addPath(pathOptions.generator, this.pathGenerator)) {
          this.pathGenerator.init(container2);
        }
      }
      container2.retina.initParticle(this);
      this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
      this.bubble = {
        inRange: false
      };
      this.slow = {
        inRange: false,
        factor: 1
      };
      this._initPosition(position);
      this.initialVelocity = this._calculateVelocity();
      this.velocity = this.initialVelocity.copy();
      const decayOffset2 = 1;
      this.moveDecay = decayOffset2 - getRangeValue(this.options.move.decay);
      const particles = container2.particles;
      particles.setLastZIndex(this.position.z);
      this.zIndexFactor = this.position.z / container2.zLayers;
      this.sides = 24;
      let effectDrawer = container2.effectDrawers.get(this.effect);
      if (!effectDrawer) {
        effectDrawer = this._engine.getEffectDrawer(this.effect);
        if (effectDrawer) {
          container2.effectDrawers.set(this.effect, effectDrawer);
        }
      }
      if (effectDrawer?.loadEffect) {
        effectDrawer.loadEffect(this);
      }
      let shapeDrawer = container2.shapeDrawers.get(this.shape);
      if (!shapeDrawer) {
        shapeDrawer = this._engine.getShapeDrawer(this.shape);
        if (shapeDrawer) {
          container2.shapeDrawers.set(this.shape, shapeDrawer);
        }
      }
      if (shapeDrawer?.loadShape) {
        shapeDrawer.loadShape(this);
      }
      const sideCountFunc = shapeDrawer?.getSidesCount;
      if (sideCountFunc) {
        this.sides = sideCountFunc(this);
      }
      this.spawning = false;
      this.shadowColor = rangeColorToRgb(this.options.shadow.color);
      for (const updater of particles.updaters) {
        updater.init(this);
      }
      for (const mover of particles.movers) {
        mover.init?.(this);
      }
      effectDrawer?.particleInit?.(container2, this);
      shapeDrawer?.particleInit?.(container2, this);
      for (const [, plugin] of container2.plugins) {
        plugin.particleCreated?.(this);
      }
    }
    isInsideCanvas() {
      const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
      return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
    }
    isVisible() {
      return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
      for (const updater of this.container.particles.updaters) {
        updater.reset?.(this);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Utils/Point.js
  var Point = class {
    constructor(position, particle) {
      this.position = position;
      this.particle = particle;
    }
  };

  // node_modules/@tsparticles/engine/browser/Types/RangeType.js
  var RangeType;
  (function(RangeType2) {
    RangeType2["circle"] = "circle";
    RangeType2["rectangle"] = "rectangle";
  })(RangeType || (RangeType = {}));

  // node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js
  var squareExp3 = 2;
  var BaseRange = class {
    constructor(x, y, type) {
      this.position = {
        x,
        y
      };
      this.type = type;
    }
  };
  var Circle = class _Circle extends BaseRange {
    constructor(x, y, radius) {
      super(x, y, RangeType.circle);
      this.radius = radius;
    }
    contains(point) {
      return getDistance(point, this.position) <= this.radius;
    }
    intersects(range) {
      const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
      if (range instanceof _Circle || range.type === RangeType.circle) {
        const circleRange = range, rSum = r + circleRange.radius, dist = Math.sqrt(distPos.x ** squareExp3 + distPos.y ** squareExp3);
        return rSum > dist;
      } else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
        const rectRange = range, { width, height } = rectRange.size, edges = Math.pow(distPos.x - width, squareExp3) + Math.pow(distPos.y - height, squareExp3);
        return edges <= r ** squareExp3 || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
      }
      return false;
    }
  };
  var Rectangle = class _Rectangle extends BaseRange {
    constructor(x, y, width, height) {
      super(x, y, RangeType.rectangle);
      this.size = {
        height,
        width
      };
    }
    contains(point) {
      const w = this.size.width, h = this.size.height, pos = this.position;
      return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
      if (range instanceof Circle) {
        return range.intersects(this);
      }
      const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof _Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
      return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Utils/QuadTree.js
  var half2 = 0.5;
  var double4 = 2;
  var subdivideCount = 4;
  var QuadTree = class _QuadTree {
    constructor(rectangle, capacity) {
      this.rectangle = rectangle;
      this.capacity = capacity;
      this._subdivide = () => {
        const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity: capacity2 } = this;
        for (let i = 0; i < subdivideCount; i++) {
          const fixedIndex = i % double4;
          this._subs.push(new _QuadTree(new Rectangle(x + width * half2 * fixedIndex, y + height * half2 * (Math.round(i * half2) - fixedIndex), width * half2, height * half2), capacity2));
        }
        this._divided = true;
      };
      this._points = [];
      this._divided = false;
      this._subs = [];
    }
    insert(point) {
      if (!this.rectangle.contains(point.position)) {
        return false;
      }
      if (this._points.length < this.capacity) {
        this._points.push(point);
        return true;
      }
      if (!this._divided) {
        this._subdivide();
      }
      return this._subs.some((sub) => sub.insert(point));
    }
    query(range, check) {
      const res = [];
      if (!range.intersects(this.rectangle)) {
        return [];
      }
      for (const p of this._points) {
        if (!range.contains(p.position) && getDistance(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
          continue;
        }
        res.push(p.particle);
      }
      if (this._divided) {
        for (const sub of this._subs) {
          res.push(...sub.query(range, check));
        }
      }
      return res;
    }
    queryCircle(position, radius, check) {
      return this.query(new Circle(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
      return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Particles.js
  var qTreeCapacity = 4;
  var squareExp4 = 2;
  var defaultRemoveQuantity = 1;
  var qTreeRectangle = (canvasSize) => {
    const { height, width } = canvasSize, posOffset = -0.25, sizeFactor2 = 1.5;
    return new Rectangle(posOffset * width, posOffset * height, sizeFactor2 * width, sizeFactor2 * height);
  };
  var Particles = class {
    constructor(engine, container2) {
      this._addToPool = (...particles) => {
        this._pool.push(...particles);
      };
      this._applyDensity = (options, manualCount, group) => {
        const numberOptions = options.number;
        if (!options.number.density?.enable) {
          if (group === void 0) {
            this._limit = numberOptions.limit.value;
          } else if (numberOptions.limit) {
            this._groupLimits.set(group, numberOptions.limit.value);
          }
          return;
        }
        const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, minLimit = 0, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
        if (group === void 0) {
          this._limit = numberOptions.limit.value * densityFactor;
        } else {
          this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
        }
        if (particlesCount < particlesNumber) {
          this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
        } else if (particlesCount > particlesNumber) {
          this.removeQuantity(particlesCount - particlesNumber, group);
        }
      };
      this._initDensityFactor = (densityOptions) => {
        const container3 = this._container, defaultFactor2 = 1;
        if (!container3.canvas.element || !densityOptions.enable) {
          return defaultFactor2;
        }
        const canvas = container3.canvas.element, pxRatio = container3.retina.pixelRatio;
        return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp4);
      };
      this._pushParticle = (position, overrideOptions, group, initializer) => {
        try {
          let particle = this._pool.pop();
          if (!particle) {
            particle = new Particle(this._engine, this._container);
          }
          particle.init(this._nextId, position, overrideOptions, group);
          let canAdd = true;
          if (initializer) {
            canAdd = initializer(particle);
          }
          if (!canAdd) {
            return;
          }
          this._array.push(particle);
          this._zArray.push(particle);
          this._nextId++;
          this._engine.dispatchEvent(EventType.particleAdded, {
            container: this._container,
            data: {
              particle
            }
          });
          return particle;
        } catch (e) {
          getLogger().warning(`${errorPrefix} adding particle: ${e}`);
        }
      };
      this._removeParticle = (index, group, override) => {
        const particle = this._array[index];
        if (!particle || particle.group !== group) {
          return false;
        }
        const zIdx = this._zArray.indexOf(particle), deleteCount = 1;
        this._array.splice(index, deleteCount);
        this._zArray.splice(zIdx, deleteCount);
        particle.destroy(override);
        this._engine.dispatchEvent(EventType.particleRemoved, {
          container: this._container,
          data: {
            particle
          }
        });
        this._addToPool(particle);
        return true;
      };
      this._engine = engine;
      this._container = container2;
      this._nextId = 0;
      this._array = [];
      this._zArray = [];
      this._pool = [];
      this._limit = 0;
      this._groupLimits = /* @__PURE__ */ new Map();
      this._needsSort = false;
      this._lastZIndex = 0;
      this._interactionManager = new InteractionManager(engine, container2);
      this._pluginsInitialized = false;
      const canvasSize = container2.canvas.size;
      this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
      this.movers = [];
      this.updaters = [];
    }
    get count() {
      return this._array.length;
    }
    addManualParticles() {
      const container2 = this._container, options = container2.actualOptions;
      options.manualParticles.forEach((p) => this.addParticle(p.position ? getPosition(p.position, container2.canvas.size) : void 0, p.options));
    }
    addParticle(position, overrideOptions, group, initializer) {
      const limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === void 0 ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count, minLimit = 0;
      if (limit > minLimit) {
        switch (limitMode) {
          case LimitMode.delete: {
            const countOffset = 1, minCount = 0, countToRemove = currentCount + countOffset - limit;
            if (countToRemove > minCount) {
              this.removeQuantity(countToRemove);
            }
            break;
          }
          case LimitMode.wait:
            if (currentCount >= limit) {
              return;
            }
            break;
        }
      }
      return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
      this._array = [];
      this._zArray = [];
      this._pluginsInitialized = false;
    }
    destroy() {
      this._array = [];
      this._zArray = [];
      this.movers = [];
      this.updaters = [];
    }
    draw(delta) {
      const container2 = this._container, canvas = container2.canvas;
      canvas.clear();
      this.update(delta);
      for (const [, plugin] of container2.plugins) {
        canvas.drawPlugin(plugin, delta);
      }
      for (const p of this._zArray) {
        p.draw(delta);
      }
    }
    filter(condition) {
      return this._array.filter(condition);
    }
    find(condition) {
      return this._array.find(condition);
    }
    get(index) {
      return this._array[index];
    }
    handleClickMode(mode) {
      this._interactionManager.handleClickMode(mode);
    }
    async init() {
      const container2 = this._container, options = container2.actualOptions;
      this._lastZIndex = 0;
      this._needsSort = false;
      await this.initPlugins();
      let handled = false;
      for (const [, plugin] of container2.plugins) {
        handled = plugin.particlesInitialization?.() ?? handled;
        if (handled) {
          break;
        }
      }
      this.addManualParticles();
      if (!handled) {
        const particlesOptions = options.particles, groups = particlesOptions.groups;
        for (const group in groups) {
          const groupOptions = groups[group];
          for (let i = this.count, j = 0; j < groupOptions.number?.value && i < particlesOptions.number.value; i++, j++) {
            this.addParticle(void 0, groupOptions, group);
          }
        }
        for (let i = this.count; i < particlesOptions.number.value; i++) {
          this.addParticle();
        }
      }
    }
    async initPlugins() {
      if (this._pluginsInitialized) {
        return;
      }
      const container2 = this._container;
      this.movers = await this._engine.getMovers(container2, true);
      this.updaters = await this._engine.getUpdaters(container2, true);
      await this._interactionManager.init();
      for (const [, pathGenerator] of container2.pathGenerators) {
        pathGenerator.init(container2);
      }
    }
    push(nb, mouse, overrideOptions, group) {
      for (let i = 0; i < nb; i++) {
        this.addParticle(mouse?.position, overrideOptions, group);
      }
    }
    async redraw() {
      this.clear();
      await this.init();
      this.draw({ value: 0, factor: 0 });
    }
    remove(particle, group, override) {
      this.removeAt(this._array.indexOf(particle), void 0, group, override);
    }
    removeAt(index, quantity = defaultRemoveQuantity, group, override) {
      const minIndex = 0;
      if (index < minIndex || index > this.count) {
        return;
      }
      let deleted = 0;
      for (let i = index; deleted < quantity && i < this.count; i++) {
        if (this._removeParticle(i--, group, override)) {
          deleted++;
        }
      }
    }
    removeQuantity(quantity, group) {
      const defaultIndex = 0;
      this.removeAt(defaultIndex, quantity, group);
    }
    setDensity() {
      const options = this._container.actualOptions, groups = options.particles.groups, manualCount = 0;
      for (const group in groups) {
        this._applyDensity(groups[group], manualCount, group);
      }
      this._applyDensity(options.particles, options.manualParticles.length);
    }
    setLastZIndex(zIndex) {
      this._lastZIndex = zIndex;
      this._needsSort = this._needsSort || this._lastZIndex < zIndex;
    }
    setResizeFactor(factor) {
      this._resizeFactor = factor;
    }
    update(delta) {
      const container2 = this._container, particlesToDelete = /* @__PURE__ */ new Set();
      this.quadTree = new QuadTree(qTreeRectangle(container2.canvas.size), qTreeCapacity);
      for (const [, pathGenerator] of container2.pathGenerators) {
        pathGenerator.update();
      }
      for (const [, plugin] of container2.plugins) {
        plugin.update?.(delta);
      }
      const resizeFactor = this._resizeFactor;
      for (const particle of this._array) {
        if (resizeFactor && !particle.ignoresResizeRatio) {
          particle.position.x *= resizeFactor.width;
          particle.position.y *= resizeFactor.height;
          particle.initialPosition.x *= resizeFactor.width;
          particle.initialPosition.y *= resizeFactor.height;
        }
        particle.ignoresResizeRatio = false;
        this._interactionManager.reset(particle);
        for (const [, plugin] of this._container.plugins) {
          if (particle.destroyed) {
            break;
          }
          plugin.particleUpdate?.(particle, delta);
        }
        for (const mover of this.movers) {
          if (mover.isEnabled(particle)) {
            mover.move(particle, delta);
          }
        }
        if (particle.destroyed) {
          particlesToDelete.add(particle);
          continue;
        }
        this.quadTree.insert(new Point(particle.getPosition(), particle));
      }
      if (particlesToDelete.size) {
        const checkDelete = (p) => !particlesToDelete.has(p);
        this._array = this.filter(checkDelete);
        this._zArray = this._zArray.filter(checkDelete);
        for (const particle of particlesToDelete) {
          this._engine.dispatchEvent(EventType.particleRemoved, {
            container: this._container,
            data: {
              particle
            }
          });
        }
        this._addToPool(...particlesToDelete);
      }
      this._interactionManager.externalInteract(delta);
      for (const particle of this._array) {
        for (const updater of this.updaters) {
          updater.update(particle, delta);
        }
        if (!particle.destroyed && !particle.spawning) {
          this._interactionManager.particlesInteract(particle, delta);
        }
      }
      delete this._resizeFactor;
      if (this._needsSort) {
        const zArray = this._zArray;
        zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
        const lengthOffset = 1;
        this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
        this._needsSort = false;
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Retina.js
  var defaultRatio = 1;
  var defaultReduceFactor = 1;
  var Retina = class {
    constructor(container2) {
      this.container = container2;
      this.pixelRatio = defaultRatio;
      this.reduceFactor = defaultReduceFactor;
    }
    init() {
      const container2 = this.container, options = container2.actualOptions;
      this.pixelRatio = !options.detectRetina || isSsr() ? defaultRatio : window.devicePixelRatio;
      this.reduceFactor = defaultReduceFactor;
      const ratio = this.pixelRatio, canvas = container2.canvas;
      if (canvas.element) {
        const element = canvas.element;
        canvas.size.width = element.offsetWidth * ratio;
        canvas.size.height = element.offsetHeight * ratio;
      }
      const particles = options.particles, moveOptions = particles.move;
      this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
      this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
      const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
      props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
      props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
      props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
      const maxDistance = props.maxDistance;
      maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
      maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
      props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Container.js
  function guardCheck(container2) {
    return container2 && !container2.destroyed;
  }
  var defaultFps = 60;
  function initDelta(value, fpsLimit = defaultFps, smooth = false) {
    return {
      value,
      factor: smooth ? defaultFps / fpsLimit : defaultFps * value / millisecondsToSeconds
    };
  }
  function loadContainerOptions(engine, container2, ...sourceOptionsArr) {
    const options = new Options(engine, container2);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }
  var Container = class {
    constructor(engine, id, sourceOptions) {
      this._intersectionManager = (entries) => {
        if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
          return;
        }
        for (const entry of entries) {
          if (entry.target !== this.interactivity.element) {
            continue;
          }
          if (entry.isIntersecting) {
            void this.play();
          } else {
            this.pause();
          }
        }
      };
      this._nextFrame = (timestamp) => {
        try {
          if (!this._smooth && this._lastFrameTime !== void 0 && timestamp < this._lastFrameTime + millisecondsToSeconds / this.fpsLimit) {
            this.draw(false);
            return;
          }
          this._lastFrameTime ??= timestamp;
          const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
          this.addLifeTime(delta.value);
          this._lastFrameTime = timestamp;
          if (delta.value > millisecondsToSeconds) {
            this.draw(false);
            return;
          }
          this.particles.draw(delta);
          if (!this.alive()) {
            this.destroy();
            return;
          }
          if (this.animationStatus) {
            this.draw(false);
          }
        } catch (e) {
          getLogger().error(`${errorPrefix} in animation loop`, e);
        }
      };
      this._engine = engine;
      this.id = Symbol(id);
      this.fpsLimit = 120;
      this._smooth = false;
      this._delay = 0;
      this._duration = 0;
      this._lifeTime = 0;
      this._firstStart = true;
      this.started = false;
      this.destroyed = false;
      this._paused = true;
      this._lastFrameTime = 0;
      this.zLayers = 100;
      this.pageHidden = false;
      this._clickHandlers = /* @__PURE__ */ new Map();
      this._sourceOptions = sourceOptions;
      this._initialSourceOptions = sourceOptions;
      this.retina = new Retina(this);
      this.canvas = new Canvas(this);
      this.particles = new Particles(this._engine, this);
      this.pathGenerators = /* @__PURE__ */ new Map();
      this.interactivity = {
        mouse: {
          clicking: false,
          inside: false
        }
      };
      this.plugins = /* @__PURE__ */ new Map();
      this.effectDrawers = /* @__PURE__ */ new Map();
      this.shapeDrawers = /* @__PURE__ */ new Map();
      this._options = loadContainerOptions(this._engine, this);
      this.actualOptions = loadContainerOptions(this._engine, this);
      this._eventListeners = new EventListeners(this);
      this._intersectionObserver = safeIntersectionObserver((entries) => this._intersectionManager(entries));
      this._engine.dispatchEvent(EventType.containerBuilt, { container: this });
    }
    get animationStatus() {
      return !this._paused && !this.pageHidden && guardCheck(this);
    }
    get options() {
      return this._options;
    }
    get sourceOptions() {
      return this._sourceOptions;
    }
    addClickHandler(callback) {
      if (!guardCheck(this)) {
        return;
      }
      const el = this.interactivity.element;
      if (!el) {
        return;
      }
      const clickOrTouchHandler = (e, pos, radius) => {
        if (!guardCheck(this)) {
          return;
        }
        const pxRatio = this.retina.pixelRatio, posRetina = {
          x: pos.x * pxRatio,
          y: pos.y * pxRatio
        }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
        callback(e, particles);
      }, clickHandler = (e) => {
        if (!guardCheck(this)) {
          return;
        }
        const mouseEvent = e, pos = {
          x: mouseEvent.offsetX || mouseEvent.clientX,
          y: mouseEvent.offsetY || mouseEvent.clientY
        }, radius = 1;
        clickOrTouchHandler(e, pos, radius);
      }, touchStartHandler = () => {
        if (!guardCheck(this)) {
          return;
        }
        touched = true;
        touchMoved = false;
      }, touchMoveHandler = () => {
        if (!guardCheck(this)) {
          return;
        }
        touchMoved = true;
      }, touchEndHandler = (e) => {
        if (!guardCheck(this)) {
          return;
        }
        if (touched && !touchMoved) {
          const touchEvent = e, lengthOffset = 1;
          let lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset];
          if (!lastTouch) {
            lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - lengthOffset];
            if (!lastTouch) {
              return;
            }
          }
          const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, minCoordinate = 0, pos = {
            x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
            y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
          };
          clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
        }
        touched = false;
        touchMoved = false;
      }, touchCancelHandler = () => {
        if (!guardCheck(this)) {
          return;
        }
        touched = false;
        touchMoved = false;
      };
      let touched = false, touchMoved = false;
      this._clickHandlers.set("click", clickHandler);
      this._clickHandlers.set("touchstart", touchStartHandler);
      this._clickHandlers.set("touchmove", touchMoveHandler);
      this._clickHandlers.set("touchend", touchEndHandler);
      this._clickHandlers.set("touchcancel", touchCancelHandler);
      for (const [key, handler] of this._clickHandlers) {
        el.addEventListener(key, handler);
      }
    }
    addLifeTime(value) {
      this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
      if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
        return false;
      }
      this.pathGenerators.set(key, generator);
      return true;
    }
    alive() {
      return !this._duration || this._lifeTime <= this._duration;
    }
    clearClickHandlers() {
      if (!guardCheck(this)) {
        return;
      }
      for (const [key, handler] of this._clickHandlers) {
        this.interactivity.element?.removeEventListener(key, handler);
      }
      this._clickHandlers.clear();
    }
    destroy(remove = true) {
      if (!guardCheck(this)) {
        return;
      }
      this.stop();
      this.clearClickHandlers();
      this.particles.destroy();
      this.canvas.destroy();
      for (const [, effectDrawer] of this.effectDrawers) {
        effectDrawer.destroy?.(this);
      }
      for (const [, shapeDrawer] of this.shapeDrawers) {
        shapeDrawer.destroy?.(this);
      }
      for (const key of this.effectDrawers.keys()) {
        this.effectDrawers.delete(key);
      }
      for (const key of this.shapeDrawers.keys()) {
        this.shapeDrawers.delete(key);
      }
      this._engine.clearPlugins(this);
      this.destroyed = true;
      if (remove) {
        const mainArr = this._engine.items, idx = mainArr.findIndex((t) => t === this), minIndex = 0;
        if (idx >= minIndex) {
          const deleteCount = 1;
          mainArr.splice(idx, deleteCount);
        }
      }
      this._engine.dispatchEvent(EventType.containerDestroyed, { container: this });
    }
    draw(force) {
      if (!guardCheck(this)) {
        return;
      }
      let refreshTime = force;
      const frame = (timestamp) => {
        if (refreshTime) {
          this._lastFrameTime = void 0;
          refreshTime = false;
        }
        this._nextFrame(timestamp);
      };
      this._drawAnimationFrame = animate((timestamp) => frame(timestamp));
    }
    async export(type, options = {}) {
      for (const [, plugin] of this.plugins) {
        if (!plugin.export) {
          continue;
        }
        const res = await plugin.export(type, options);
        if (!res.supported) {
          continue;
        }
        return res.blob;
      }
      getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
    }
    handleClickMode(mode) {
      if (!guardCheck(this)) {
        return;
      }
      this.particles.handleClickMode(mode);
      for (const [, plugin] of this.plugins) {
        plugin.handleClickMode?.(mode);
      }
    }
    async init() {
      if (!guardCheck(this)) {
        return;
      }
      const effects = this._engine.getSupportedEffects();
      for (const type of effects) {
        const drawer = this._engine.getEffectDrawer(type);
        if (drawer) {
          this.effectDrawers.set(type, drawer);
        }
      }
      const shapes = this._engine.getSupportedShapes();
      for (const type of shapes) {
        const drawer = this._engine.getShapeDrawer(type);
        if (drawer) {
          this.shapeDrawers.set(type, drawer);
        }
      }
      await this.particles.initPlugins();
      this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
      this.actualOptions = loadContainerOptions(this._engine, this, this._options);
      const availablePlugins = await this._engine.getAvailablePlugins(this);
      for (const [id, plugin] of availablePlugins) {
        this.plugins.set(id, plugin);
      }
      this.retina.init();
      await this.canvas.init();
      this.updateActualOptions();
      this.canvas.initBackground();
      this.canvas.resize();
      const { zLayers, duration, delay, fpsLimit, smooth } = this.actualOptions;
      this.zLayers = zLayers;
      this._duration = getRangeValue(duration) * millisecondsToSeconds;
      this._delay = getRangeValue(delay) * millisecondsToSeconds;
      this._lifeTime = 0;
      const defaultFpsLimit = 120, minFpsLimit = 0;
      this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
      this._smooth = smooth;
      for (const [, drawer] of this.effectDrawers) {
        await drawer.init?.(this);
      }
      for (const [, drawer] of this.shapeDrawers) {
        await drawer.init?.(this);
      }
      for (const [, plugin] of this.plugins) {
        await plugin.init?.();
      }
      this._engine.dispatchEvent(EventType.containerInit, { container: this });
      await this.particles.init();
      this.particles.setDensity();
      for (const [, plugin] of this.plugins) {
        plugin.particlesSetup?.();
      }
      this._engine.dispatchEvent(EventType.particlesSetup, { container: this });
    }
    async loadTheme(name) {
      if (!guardCheck(this)) {
        return;
      }
      this._currentTheme = name;
      await this.refresh();
    }
    pause() {
      if (!guardCheck(this)) {
        return;
      }
      if (this._drawAnimationFrame !== void 0) {
        cancelAnimation(this._drawAnimationFrame);
        delete this._drawAnimationFrame;
      }
      if (this._paused) {
        return;
      }
      for (const [, plugin] of this.plugins) {
        plugin.pause?.();
      }
      if (!this.pageHidden) {
        this._paused = true;
      }
      this._engine.dispatchEvent(EventType.containerPaused, { container: this });
    }
    play(force) {
      if (!guardCheck(this)) {
        return;
      }
      const needsUpdate = this._paused || force;
      if (this._firstStart && !this.actualOptions.autoPlay) {
        this._firstStart = false;
        return;
      }
      if (this._paused) {
        this._paused = false;
      }
      if (needsUpdate) {
        for (const [, plugin] of this.plugins) {
          if (plugin.play) {
            plugin.play();
          }
        }
      }
      this._engine.dispatchEvent(EventType.containerPlay, { container: this });
      this.draw(needsUpdate ?? false);
    }
    async refresh() {
      if (!guardCheck(this)) {
        return;
      }
      this.stop();
      return this.start();
    }
    async reset(sourceOptions) {
      if (!guardCheck(this)) {
        return;
      }
      this._initialSourceOptions = sourceOptions;
      this._sourceOptions = sourceOptions;
      this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
      this.actualOptions = loadContainerOptions(this._engine, this, this._options);
      return this.refresh();
    }
    async start() {
      if (!guardCheck(this) || this.started) {
        return;
      }
      await this.init();
      this.started = true;
      await new Promise((resolve) => {
        const start = async () => {
          this._eventListeners.addListeners();
          if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.observe(this.interactivity.element);
          }
          for (const [, plugin] of this.plugins) {
            await plugin.start?.();
          }
          this._engine.dispatchEvent(EventType.containerStarted, { container: this });
          this.play();
          resolve();
        };
        this._delayTimeout = setTimeout(() => void start(), this._delay);
      });
    }
    stop() {
      if (!guardCheck(this) || !this.started) {
        return;
      }
      if (this._delayTimeout) {
        clearTimeout(this._delayTimeout);
        delete this._delayTimeout;
      }
      this._firstStart = true;
      this.started = false;
      this._eventListeners.removeListeners();
      this.pause();
      this.particles.clear();
      this.canvas.stop();
      if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
        this._intersectionObserver.unobserve(this.interactivity.element);
      }
      for (const [, plugin] of this.plugins) {
        plugin.stop?.();
      }
      for (const key of this.plugins.keys()) {
        this.plugins.delete(key);
      }
      this._sourceOptions = this._options;
      this._engine.dispatchEvent(EventType.containerStopped, { container: this });
    }
    updateActualOptions() {
      this.actualOptions.responsive = [];
      const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
      this.actualOptions.setTheme(this._currentTheme);
      if (this._responsiveMaxWidth === newMaxWidth) {
        return false;
      }
      this._responsiveMaxWidth = newMaxWidth;
      return true;
    }
  };

  // node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
  var EventDispatcher = class {
    constructor() {
      this._listeners = /* @__PURE__ */ new Map();
    }
    addEventListener(type, listener) {
      this.removeEventListener(type, listener);
      let arr = this._listeners.get(type);
      if (!arr) {
        arr = [];
        this._listeners.set(type, arr);
      }
      arr.push(listener);
    }
    dispatchEvent(type, args) {
      const listeners = this._listeners.get(type);
      listeners?.forEach((handler) => handler(args));
    }
    hasEventListener(type) {
      return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
      if (!type) {
        this._listeners = /* @__PURE__ */ new Map();
      } else {
        this._listeners.delete(type);
      }
    }
    removeEventListener(type, listener) {
      const arr = this._listeners.get(type);
      if (!arr) {
        return;
      }
      const length = arr.length, idx = arr.indexOf(listener), minIndex = 0;
      if (idx < minIndex) {
        return;
      }
      const deleteCount = 1;
      if (length === deleteCount) {
        this._listeners.delete(type);
      } else {
        arr.splice(idx, deleteCount);
      }
    }
  };

  // node_modules/@tsparticles/engine/browser/Core/Engine.js
  async function getItemsFromInitializer(container2, map, initializers, force = false) {
    let res = map.get(container2);
    if (!res || force) {
      res = await Promise.all([...initializers.values()].map((t) => t(container2)));
      map.set(container2, res);
    }
    return res;
  }
  async function getDataFromUrl(data) {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
      return data.fallback;
    }
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
    return data.fallback;
  }
  var generatedTrue = "true";
  var generatedFalse = "false";
  var canvasTag = "canvas";
  var getCanvasFromContainer = (domContainer) => {
    let canvasEl;
    if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag) {
      canvasEl = domContainer;
      if (!canvasEl.dataset[generatedAttribute]) {
        canvasEl.dataset[generatedAttribute] = generatedFalse;
      }
    } else {
      const existingCanvases = domContainer.getElementsByTagName(canvasTag);
      if (existingCanvases.length) {
        const firstIndex2 = 0;
        canvasEl = existingCanvases[firstIndex2];
        canvasEl.dataset[generatedAttribute] = generatedFalse;
      } else {
        canvasEl = document.createElement(canvasTag);
        canvasEl.dataset[generatedAttribute] = generatedTrue;
        domContainer.appendChild(canvasEl);
      }
    }
    const fullPercent = "100%";
    if (!canvasEl.style.width) {
      canvasEl.style.width = fullPercent;
    }
    if (!canvasEl.style.height) {
      canvasEl.style.height = fullPercent;
    }
    return canvasEl;
  };
  var getDomContainer = (id, source) => {
    let domContainer = source ?? document.getElementById(id);
    if (domContainer) {
      return domContainer;
    }
    domContainer = document.createElement("div");
    domContainer.id = id;
    domContainer.dataset[generatedAttribute] = generatedTrue;
    document.body.append(domContainer);
    return domContainer;
  };
  var Engine = class {
    constructor() {
      this._configs = /* @__PURE__ */ new Map();
      this._domArray = [];
      this._eventDispatcher = new EventDispatcher();
      this._initialized = false;
      this.plugins = [];
      this._initializers = {
        interactors: /* @__PURE__ */ new Map(),
        movers: /* @__PURE__ */ new Map(),
        updaters: /* @__PURE__ */ new Map()
      };
      this.interactors = /* @__PURE__ */ new Map();
      this.movers = /* @__PURE__ */ new Map();
      this.updaters = /* @__PURE__ */ new Map();
      this.presets = /* @__PURE__ */ new Map();
      this.effectDrawers = /* @__PURE__ */ new Map();
      this.shapeDrawers = /* @__PURE__ */ new Map();
      this.pathGenerators = /* @__PURE__ */ new Map();
    }
    get configs() {
      const res = {};
      for (const [name, config] of this._configs) {
        res[name] = config;
      }
      return res;
    }
    get items() {
      return this._domArray;
    }
    get version() {
      return "3.5.0";
    }
    addConfig(config) {
      const key = config.key ?? config.name ?? "default";
      this._configs.set(key, config);
      this._eventDispatcher.dispatchEvent(EventType.configAdded, { data: { name: key, config } });
    }
    async addEffect(effect, drawer, refresh = true) {
      executeOnSingleOrMultiple(effect, (type) => {
        if (!this.getEffectDrawer(type)) {
          this.effectDrawers.set(type, drawer);
        }
      });
      await this.refresh(refresh);
    }
    addEventListener(type, listener) {
      this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer, refresh = true) {
      this._initializers.interactors.set(name, interactorInitializer);
      await this.refresh(refresh);
    }
    async addMover(name, moverInitializer, refresh = true) {
      this._initializers.movers.set(name, moverInitializer);
      await this.refresh(refresh);
    }
    async addParticleUpdater(name, updaterInitializer, refresh = true) {
      this._initializers.updaters.set(name, updaterInitializer);
      await this.refresh(refresh);
    }
    async addPathGenerator(name, generator, refresh = true) {
      if (!this.getPathGenerator(name)) {
        this.pathGenerators.set(name, generator);
      }
      await this.refresh(refresh);
    }
    async addPlugin(plugin, refresh = true) {
      if (!this.getPlugin(plugin.id)) {
        this.plugins.push(plugin);
      }
      await this.refresh(refresh);
    }
    async addPreset(preset, options, override = false, refresh = true) {
      if (override || !this.getPreset(preset)) {
        this.presets.set(preset, options);
      }
      await this.refresh(refresh);
    }
    async addShape(drawer, refresh = true) {
      for (const validType of drawer.validTypes) {
        if (this.getShapeDrawer(validType)) {
          continue;
        }
        this.shapeDrawers.set(validType, drawer);
      }
      await this.refresh(refresh);
    }
    clearPlugins(container2) {
      this.updaters.delete(container2);
      this.movers.delete(container2);
      this.interactors.delete(container2);
    }
    dispatchEvent(type, args) {
      this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
      return this.items;
    }
    domItem(index) {
      return this.item(index);
    }
    async getAvailablePlugins(container2) {
      const res = /* @__PURE__ */ new Map();
      for (const plugin of this.plugins) {
        if (plugin.needsPlugin(container2.actualOptions)) {
          res.set(plugin.id, await plugin.getPlugin(container2));
        }
      }
      return res;
    }
    getEffectDrawer(type) {
      return this.effectDrawers.get(type);
    }
    async getInteractors(container2, force = false) {
      return getItemsFromInitializer(container2, this.interactors, this._initializers.interactors, force);
    }
    async getMovers(container2, force = false) {
      return getItemsFromInitializer(container2, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
      return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
      return this.plugins.find((t) => t.id === plugin);
    }
    getPreset(preset) {
      return this.presets.get(preset);
    }
    getShapeDrawer(type) {
      return this.shapeDrawers.get(type);
    }
    getSupportedEffects() {
      return this.effectDrawers.keys();
    }
    getSupportedShapes() {
      return this.shapeDrawers.keys();
    }
    async getUpdaters(container2, force = false) {
      return getItemsFromInitializer(container2, this.updaters, this._initializers.updaters, force);
    }
    init() {
      if (this._initialized) {
        return;
      }
      this._initialized = true;
    }
    item(index) {
      const { items } = this, item = items[index];
      if (!item || item.destroyed) {
        const deleteCount = 1;
        items.splice(index, deleteCount);
        return;
      }
      return item;
    }
    async load(params) {
      const randomFactor = 1e4, id = params.id ?? params.element?.id ?? `tsparticles${Math.floor(getRandom() * randomFactor)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
      const currentOptions = itemFromSingleOrMultiple(options, index), { items } = this, oldIndex = items.findIndex((v) => v.id.description === id), minIndex = 0, newItem = new Container(this, id, currentOptions);
      if (oldIndex >= minIndex) {
        const old = this.item(oldIndex), one = 1, none = 0, deleteCount = old ? one : none;
        if (old && !old.destroyed) {
          old.destroy(false);
        }
        items.splice(oldIndex, deleteCount, newItem);
      } else {
        items.push(newItem);
      }
      const domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
      newItem.canvas.loadCanvas(canvasEl);
      await newItem.start();
      return newItem;
    }
    loadOptions(options, sourceOptions) {
      this.plugins.forEach((plugin) => plugin.loadOptions?.(options, sourceOptions));
    }
    loadParticlesOptions(container2, options, ...sourceOptions) {
      const updaters = this.updaters.get(container2);
      if (!updaters) {
        return;
      }
      updaters.forEach((updater) => updater.loadOptions?.(options, ...sourceOptions));
    }
    async refresh(refresh = true) {
      if (!refresh) {
        return;
      }
      await Promise.all(this.items.map((t) => t.refresh()));
    }
    removeEventListener(type, listener) {
      this._eventDispatcher.removeEventListener(type, listener);
    }
    setOnClickHandler(callback) {
      const { items } = this;
      if (!items.length) {
        throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
      }
      items.forEach((item) => item.addClickHandler(callback));
    }
  };

  // node_modules/@tsparticles/engine/browser/Utils/HslColorManager.js
  var HslIndexes;
  (function(HslIndexes2) {
    HslIndexes2[HslIndexes2["h"] = 1] = "h";
    HslIndexes2[HslIndexes2["s"] = 2] = "s";
    HslIndexes2[HslIndexes2["l"] = 3] = "l";
    HslIndexes2[HslIndexes2["a"] = 5] = "a";
  })(HslIndexes || (HslIndexes = {}));
  var HslColorManager = class {
    constructor() {
      this.key = "hsl";
      this.stringPrefix = "hsl";
    }
    handleColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
        return hslToRgb(hslColor);
      }
    }
    handleRangeColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (hslColor.h !== void 0 && hslColor.l !== void 0) {
        return hslToRgb({
          h: getRangeValue(hslColor.h),
          l: getRangeValue(hslColor.l),
          s: getRangeValue(hslColor.s)
        });
      }
    }
    parseString(input) {
      if (!input.startsWith("hsl")) {
        return;
      }
      const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha2 = 1, radix = 10;
      return result ? hslaToRgba({
        a: result.length > minLength ? parseAlpha(result[HslIndexes.a]) : defaultAlpha2,
        h: parseInt(result[HslIndexes.h], radix),
        l: parseInt(result[HslIndexes.l], radix),
        s: parseInt(result[HslIndexes.s], radix)
      }) : void 0;
    }
  };

  // node_modules/@tsparticles/engine/browser/Utils/RgbColorManager.js
  var RgbIndexes2;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 5] = "a";
  })(RgbIndexes2 || (RgbIndexes2 = {}));
  var RgbColorManager = class {
    constructor() {
      this.key = "rgb";
      this.stringPrefix = "rgb";
    }
    handleColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (rgbColor.r !== void 0) {
        return rgbColor;
      }
    }
    handleRangeColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (rgbColor.r !== void 0) {
        return {
          r: getRangeValue(rgbColor.r),
          g: getRangeValue(rgbColor.g),
          b: getRangeValue(rgbColor.b)
        };
      }
    }
    parseString(input) {
      if (!input.startsWith(this.stringPrefix)) {
        return;
      }
      const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha2 = 1;
      return result ? {
        a: result.length > minLength ? parseAlpha(result[RgbIndexes2.a]) : defaultAlpha2,
        b: parseInt(result[RgbIndexes2.b], radix),
        g: parseInt(result[RgbIndexes2.g], radix),
        r: parseInt(result[RgbIndexes2.r], radix)
      } : void 0;
    }
  };

  // node_modules/@tsparticles/engine/browser/init.js
  function init() {
    const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
    addColorManager(rgbColorManager);
    addColorManager(hslColorManager);
    const engine = new Engine();
    engine.init();
    return engine;
  }

  // node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
  var RotateDirection;
  (function(RotateDirection2) {
    RotateDirection2["clockwise"] = "clockwise";
    RotateDirection2["counterClockwise"] = "counter-clockwise";
    RotateDirection2["random"] = "random";
  })(RotateDirection || (RotateDirection = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
  var GradientType;
  (function(GradientType2) {
    GradientType2["linear"] = "linear";
    GradientType2["radial"] = "radial";
    GradientType2["random"] = "random";
  })(GradientType || (GradientType = {}));

  // node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js
  var EasingType;
  (function(EasingType2) {
    EasingType2["easeInBack"] = "ease-in-back";
    EasingType2["easeInCirc"] = "ease-in-circ";
    EasingType2["easeInCubic"] = "ease-in-cubic";
    EasingType2["easeInLinear"] = "ease-in-linear";
    EasingType2["easeInQuad"] = "ease-in-quad";
    EasingType2["easeInQuart"] = "ease-in-quart";
    EasingType2["easeInQuint"] = "ease-in-quint";
    EasingType2["easeInExpo"] = "ease-in-expo";
    EasingType2["easeInSine"] = "ease-in-sine";
    EasingType2["easeOutBack"] = "ease-out-back";
    EasingType2["easeOutCirc"] = "ease-out-circ";
    EasingType2["easeOutCubic"] = "ease-out-cubic";
    EasingType2["easeOutLinear"] = "ease-out-linear";
    EasingType2["easeOutQuad"] = "ease-out-quad";
    EasingType2["easeOutQuart"] = "ease-out-quart";
    EasingType2["easeOutQuint"] = "ease-out-quint";
    EasingType2["easeOutExpo"] = "ease-out-expo";
    EasingType2["easeOutSine"] = "ease-out-sine";
    EasingType2["easeInOutBack"] = "ease-in-out-back";
    EasingType2["easeInOutCirc"] = "ease-in-out-circ";
    EasingType2["easeInOutCubic"] = "ease-in-out-cubic";
    EasingType2["easeInOutLinear"] = "ease-in-out-linear";
    EasingType2["easeInOutQuad"] = "ease-in-out-quad";
    EasingType2["easeInOutQuart"] = "ease-in-out-quart";
    EasingType2["easeInOutQuint"] = "ease-in-out-quint";
    EasingType2["easeInOutExpo"] = "ease-in-out-expo";
    EasingType2["easeInOutSine"] = "ease-in-out-sine";
  })(EasingType || (EasingType = {}));

  // node_modules/@tsparticles/engine/browser/index.js
  var tsParticles = init();
  if (!isSsr()) {
    window.tsParticles = tsParticles;
  }

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js
  var EmitterLife = class {
    constructor() {
      this.wait = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.count !== void 0) {
        this.count = data.count;
      }
      if (data.delay !== void 0) {
        this.delay = setRangeValue(data.delay);
      }
      if (data.duration !== void 0) {
        this.duration = setRangeValue(data.duration);
      }
      if (data.wait !== void 0) {
        this.wait = data.wait;
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js
  var EmitterRate = class {
    constructor() {
      this.quantity = 1;
      this.delay = 0.1;
    }
    load(data) {
      if (data === void 0) {
        return;
      }
      if (data.quantity !== void 0) {
        this.quantity = setRangeValue(data.quantity);
      }
      if (data.delay !== void 0) {
        this.delay = setRangeValue(data.delay);
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js
  var EmitterShapeReplace = class {
    constructor() {
      this.color = false;
      this.opacity = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.color !== void 0) {
        this.color = data.color;
      }
      if (data.opacity !== void 0) {
        this.opacity = data.opacity;
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js
  var EmitterShape = class {
    constructor() {
      this.options = {};
      this.replace = new EmitterShapeReplace();
      this.type = "square";
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.options !== void 0) {
        this.options = deepExtend({}, data.options ?? {});
      }
      this.replace.load(data.replace);
      if (data.type !== void 0) {
        this.type = data.type;
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js
  var EmitterSize = class {
    constructor() {
      this.mode = PixelMode.percent;
      this.height = 0;
      this.width = 0;
    }
    load(data) {
      if (data === void 0) {
        return;
      }
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.height !== void 0) {
        this.height = data.height;
      }
      if (data.width !== void 0) {
        this.width = data.width;
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js
  var Emitter = class {
    constructor() {
      this.autoPlay = true;
      this.fill = true;
      this.life = new EmitterLife();
      this.rate = new EmitterRate();
      this.shape = new EmitterShape();
      this.startCount = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.autoPlay !== void 0) {
        this.autoPlay = data.autoPlay;
      }
      if (data.size !== void 0) {
        if (!this.size) {
          this.size = new EmitterSize();
        }
        this.size.load(data.size);
      }
      if (data.direction !== void 0) {
        this.direction = data.direction;
      }
      this.domId = data.domId;
      if (data.fill !== void 0) {
        this.fill = data.fill;
      }
      this.life.load(data.life);
      this.name = data.name;
      this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
        return deepExtend({}, particles);
      });
      this.rate.load(data.rate);
      this.shape.load(data.shape);
      if (data.position !== void 0) {
        this.position = {};
        if (data.position.x !== void 0) {
          this.position.x = setRangeValue(data.position.x);
        }
        if (data.position.y !== void 0) {
          this.position.y = setRangeValue(data.position.y);
        }
      }
      if (data.spawnColor !== void 0) {
        if (this.spawnColor === void 0) {
          this.spawnColor = new AnimatableColor();
        }
        this.spawnColor.load(data.spawnColor);
      }
      if (data.startCount !== void 0) {
        this.startCount = data.startCount;
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Enums/EmitterClickMode.js
  var EmitterClickMode;
  (function(EmitterClickMode2) {
    EmitterClickMode2["emitter"] = "emitter";
  })(EmitterClickMode || (EmitterClickMode = {}));

  // node_modules/@tsparticles/plugin-emitters/browser/EmitterInstance.js
  var half3 = 0.5;
  var defaultLifeDelay = 0;
  var minLifeCount = 0;
  var defaultSpawnDelay = 0;
  var defaultEmitDelay = 0;
  var defaultLifeCount = -1;
  var defaultColorAnimationFactor = 1;
  function setParticlesOptionsColor(particlesOptions, color) {
    if (particlesOptions.color) {
      particlesOptions.color.value = color;
    } else {
      particlesOptions.color = {
        value: color
      };
    }
  }
  var EmitterInstance = class {
    constructor(engine, emitters, container2, options, position) {
      this.emitters = emitters;
      this.container = container2;
      this._destroy = () => {
        this._mutationObserver?.disconnect();
        this._mutationObserver = void 0;
        this._resizeObserver?.disconnect();
        this._resizeObserver = void 0;
        this.emitters.removeEmitter(this);
        this._engine.dispatchEvent("emitterDestroyed", {
          container: this.container,
          data: {
            emitter: this
          }
        });
      };
      this._prepareToDie = () => {
        if (this._paused) {
          return;
        }
        const duration = this.options.life?.duration !== void 0 ? getRangeValue(this.options.life.duration) : void 0, minDuration = 0, minLifeCount2 = 0;
        if (this.container.retina.reduceFactor && (this._lifeCount > minLifeCount2 || this._immortal) && duration !== void 0 && duration > minDuration) {
          this._duration = duration * millisecondsToSeconds;
        }
      };
      this._setColorAnimation = (animation, initValue, maxValue, factor = defaultColorAnimationFactor) => {
        const container3 = this.container;
        if (!animation.enable) {
          return initValue;
        }
        const colorOffset = randomInRange(animation.offset), delay = getRangeValue(this.options.rate.delay), emitFactor = delay * millisecondsToSeconds / container3.retina.reduceFactor, defaultColorSpeed = 0, colorSpeed = getRangeValue(animation.speed ?? defaultColorSpeed);
        return (initValue + colorSpeed * container3.fpsLimit / emitFactor + colorOffset * factor) % maxValue;
      };
      this._engine = engine;
      this._currentDuration = 0;
      this._currentEmitDelay = 0;
      this._currentSpawnDelay = 0;
      this._initialPosition = position;
      if (options instanceof Emitter) {
        this.options = options;
      } else {
        this.options = new Emitter();
        this.options.load(options);
      }
      this._spawnDelay = getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / this.container.retina.reduceFactor;
      this.position = this._initialPosition ?? this._calcPosition();
      this.name = this.options.name;
      this.fill = this.options.fill;
      this._firstSpawn = !this.options.life.wait;
      this._startParticlesAdded = false;
      let particlesOptions = deepExtend({}, this.options.particles);
      particlesOptions ??= {};
      particlesOptions.move ??= {};
      particlesOptions.move.direction ??= this.options.direction;
      if (this.options.spawnColor) {
        this.spawnColor = rangeColorToHsl(this.options.spawnColor);
      }
      this._paused = !this.options.autoPlay;
      this._particlesOptions = particlesOptions;
      this._size = this._calcSize();
      this.size = getSize(this._size, this.container.canvas.size);
      this._lifeCount = this.options.life.count ?? defaultLifeCount;
      this._immortal = this._lifeCount <= minLifeCount;
      if (this.options.domId) {
        const element = document.getElementById(this.options.domId);
        if (element) {
          this._mutationObserver = new MutationObserver(() => {
            this.resize();
          });
          this._resizeObserver = new ResizeObserver(() => {
            this.resize();
          });
          this._mutationObserver.observe(element, {
            attributes: true,
            attributeFilter: ["style", "width", "height"]
          });
          this._resizeObserver.observe(element);
        }
      }
      const shapeOptions = this.options.shape, shapeGenerator = this._engine.emitterShapeManager?.getShapeGenerator(shapeOptions.type);
      if (shapeGenerator) {
        this._shape = shapeGenerator.generate(this.position, this.size, this.fill, shapeOptions.options);
      }
      this._engine.dispatchEvent("emitterCreated", {
        container: container2,
        data: {
          emitter: this
        }
      });
      this.play();
    }
    externalPause() {
      this._paused = true;
      this.pause();
    }
    externalPlay() {
      this._paused = false;
      this.play();
    }
    async init() {
      await this._shape?.init();
    }
    pause() {
      if (this._paused) {
        return;
      }
      delete this._emitDelay;
    }
    play() {
      if (this._paused) {
        return;
      }
      if (!(this.container.retina.reduceFactor && (this._lifeCount > minLifeCount || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? defaultSpawnDelay)))) {
        return;
      }
      if (this._emitDelay === void 0) {
        const delay = getRangeValue(this.options.rate.delay);
        this._emitDelay = delay * millisecondsToSeconds / this.container.retina.reduceFactor;
      }
      if (this._lifeCount > minLifeCount || this._immortal) {
        this._prepareToDie();
      }
    }
    resize() {
      const initialPosition = this._initialPosition;
      this.position = initialPosition && isPointInside(initialPosition, this.container.canvas.size, Vector.origin) ? initialPosition : this._calcPosition();
      this._size = this._calcSize();
      this.size = getSize(this._size, this.container.canvas.size);
      this._shape?.resize(this.position, this.size);
    }
    update(delta) {
      if (this._paused) {
        return;
      }
      if (this._firstSpawn) {
        this._firstSpawn = false;
        this._currentSpawnDelay = this._spawnDelay ?? defaultSpawnDelay;
        this._currentEmitDelay = this._emitDelay ?? defaultEmitDelay;
      }
      if (!this._startParticlesAdded) {
        this._startParticlesAdded = true;
        this._emitParticles(this.options.startCount);
      }
      if (this._duration !== void 0) {
        this._currentDuration += delta.value;
        if (this._currentDuration >= this._duration) {
          this.pause();
          if (this._spawnDelay !== void 0) {
            delete this._spawnDelay;
          }
          if (!this._immortal) {
            this._lifeCount--;
          }
          if (this._lifeCount > minLifeCount || this._immortal) {
            this.position = this._calcPosition();
            this._shape?.resize(this.position, this.size);
            this._spawnDelay = getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / this.container.retina.reduceFactor;
          } else {
            this._destroy();
          }
          this._currentDuration -= this._duration;
          delete this._duration;
        }
      }
      if (this._spawnDelay !== void 0) {
        this._currentSpawnDelay += delta.value;
        if (this._currentSpawnDelay >= this._spawnDelay) {
          this._engine.dispatchEvent("emitterPlay", {
            container: this.container
          });
          this.play();
          this._currentSpawnDelay -= this._currentSpawnDelay;
          delete this._spawnDelay;
        }
      }
      if (this._emitDelay !== void 0) {
        this._currentEmitDelay += delta.value;
        if (this._currentEmitDelay >= this._emitDelay) {
          this._emit();
          this._currentEmitDelay -= this._emitDelay;
        }
      }
    }
    _calcPosition() {
      if (this.options.domId) {
        const element = document.getElementById(this.options.domId);
        if (element) {
          const elRect = element.getBoundingClientRect(), pxRatio = this.container.retina.pixelRatio;
          return {
            x: (elRect.x + elRect.width * half3) * pxRatio,
            y: (elRect.y + elRect.height * half3) * pxRatio
          };
        }
      }
      return calcPositionOrRandomFromSizeRanged({
        size: this.container.canvas.size,
        position: this.options.position
      });
    }
    _calcSize() {
      const container2 = this.container;
      if (this.options.domId) {
        const element = document.getElementById(this.options.domId);
        if (element) {
          const elRect = element.getBoundingClientRect();
          return {
            width: elRect.width * container2.retina.pixelRatio,
            height: elRect.height * container2.retina.pixelRatio,
            mode: PixelMode.precise
          };
        }
      }
      return this.options.size ?? (() => {
        const size = new EmitterSize();
        size.load({
          height: 0,
          mode: PixelMode.percent,
          width: 0
        });
        return size;
      })();
    }
    _emit() {
      if (this._paused) {
        return;
      }
      const quantity = getRangeValue(this.options.rate.quantity);
      this._emitParticles(quantity);
    }
    _emitParticles(quantity) {
      const singleParticlesOptions = itemFromSingleOrMultiple(this._particlesOptions);
      for (let i = 0; i < quantity; i++) {
        const particlesOptions = deepExtend({}, singleParticlesOptions);
        if (this.spawnColor) {
          const hslAnimation = this.options.spawnColor?.animation;
          if (hslAnimation) {
            const maxValues = {
              h: 360,
              s: 100,
              l: 100
            }, colorFactor = 3.6;
            this.spawnColor.h = this._setColorAnimation(hslAnimation.h, this.spawnColor.h, maxValues.h, colorFactor);
            this.spawnColor.s = this._setColorAnimation(hslAnimation.s, this.spawnColor.s, maxValues.s);
            this.spawnColor.l = this._setColorAnimation(hslAnimation.l, this.spawnColor.l, maxValues.l);
          }
          setParticlesOptionsColor(particlesOptions, this.spawnColor);
        }
        const shapeOptions = this.options.shape;
        let position = this.position;
        if (this._shape) {
          const shapePosData = this._shape.randomPosition();
          if (shapePosData) {
            position = shapePosData.position;
            const replaceData = shapeOptions.replace;
            if (replaceData.color && shapePosData.color) {
              setParticlesOptionsColor(particlesOptions, shapePosData.color);
            }
            if (replaceData.opacity) {
              if (particlesOptions.opacity) {
                particlesOptions.opacity.value = shapePosData.opacity;
              } else {
                particlesOptions.opacity = {
                  value: shapePosData.opacity
                };
              }
            }
          } else {
            position = null;
          }
        }
        if (position) {
          this.container.particles.addParticle(position, particlesOptions);
        }
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/Emitters.js
  var Emitters = class {
    constructor(engine, container2) {
      this.container = container2;
      this._engine = engine;
      this.array = [];
      this.emitters = [];
      this.interactivityEmitters = {
        random: {
          count: 1,
          enable: false
        },
        value: []
      };
      const defaultIndex = 0;
      container2.getEmitter = (idxOrName) => idxOrName === void 0 || isNumber(idxOrName) ? this.array[idxOrName ?? defaultIndex] : this.array.find((t) => t.name === idxOrName);
      container2.addEmitter = async (options, position) => this.addEmitter(options, position);
      container2.removeEmitter = (idxOrName) => {
        const emitter = container2.getEmitter(idxOrName);
        if (emitter) {
          this.removeEmitter(emitter);
        }
      };
      container2.playEmitter = (idxOrName) => {
        const emitter = container2.getEmitter(idxOrName);
        if (emitter) {
          emitter.externalPlay();
        }
      };
      container2.pauseEmitter = (idxOrName) => {
        const emitter = container2.getEmitter(idxOrName);
        if (emitter) {
          emitter.externalPause();
        }
      };
    }
    async addEmitter(options, position) {
      const emitterOptions = new Emitter();
      emitterOptions.load(options);
      const emitter = new EmitterInstance(this._engine, this, this.container, emitterOptions, position);
      await emitter.init();
      this.array.push(emitter);
      return emitter;
    }
    handleClickMode(mode) {
      const emitterOptions = this.emitters, modeEmitters = this.interactivityEmitters;
      if (mode !== EmitterClickMode.emitter) {
        return;
      }
      let emittersModeOptions;
      if (modeEmitters && isArray(modeEmitters.value)) {
        const minLength = 0;
        if (modeEmitters.value.length > minLength && modeEmitters.random.enable) {
          emittersModeOptions = [];
          const usedIndexes = [];
          for (let i = 0; i < modeEmitters.random.count; i++) {
            const idx = arrayRandomIndex(modeEmitters.value);
            if (usedIndexes.includes(idx) && usedIndexes.length < modeEmitters.value.length) {
              i--;
              continue;
            }
            usedIndexes.push(idx);
            emittersModeOptions.push(itemFromArray(modeEmitters.value, idx));
          }
        } else {
          emittersModeOptions = modeEmitters.value;
        }
      } else {
        emittersModeOptions = modeEmitters?.value;
      }
      const emittersOptions = emittersModeOptions ?? emitterOptions, ePosition = this.container.interactivity.mouse.clickPosition;
      void executeOnSingleOrMultiple(emittersOptions, async (emitter) => {
        await this.addEmitter(emitter, ePosition);
      });
    }
    async init() {
      this.emitters = this.container.actualOptions.emitters;
      this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters;
      if (!this.emitters) {
        return;
      }
      if (isArray(this.emitters)) {
        for (const emitterOptions of this.emitters) {
          await this.addEmitter(emitterOptions);
        }
      } else {
        await this.addEmitter(this.emitters);
      }
    }
    pause() {
      for (const emitter of this.array) {
        emitter.pause();
      }
    }
    play() {
      for (const emitter of this.array) {
        emitter.play();
      }
    }
    removeEmitter(emitter) {
      const index = this.array.indexOf(emitter), minIndex = 0, deleteCount = 1;
      if (index >= minIndex) {
        this.array.splice(index, deleteCount);
      }
    }
    resize() {
      for (const emitter of this.array) {
        emitter.resize();
      }
    }
    stop() {
      this.array = [];
    }
    update(delta) {
      for (const emitter of this.array) {
        emitter.update(delta);
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersPlugin.js
  var EmittersPlugin = class {
    constructor(engine) {
      this._engine = engine;
      this.id = "emitters";
    }
    getPlugin(container2) {
      return Promise.resolve(new Emitters(this._engine, container2));
    }
    loadOptions(options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      if (source?.emitters) {
        options.emitters = executeOnSingleOrMultiple(source.emitters, (emitter) => {
          const tmp = new Emitter();
          tmp.load(emitter);
          return tmp;
        });
      }
      const interactivityEmitters = source?.interactivity?.modes?.emitters;
      if (interactivityEmitters) {
        if (isArray(interactivityEmitters)) {
          options.interactivity.modes.emitters = {
            random: {
              count: 1,
              enable: true
            },
            value: interactivityEmitters.map((s) => {
              const tmp = new Emitter();
              tmp.load(s);
              return tmp;
            })
          };
        } else {
          const emitterMode = interactivityEmitters;
          if (emitterMode.value !== void 0) {
            const defaultCount = 1;
            if (isArray(emitterMode.value)) {
              options.interactivity.modes.emitters = {
                random: {
                  count: emitterMode.random.count ?? defaultCount,
                  enable: emitterMode.random.enable ?? false
                },
                value: emitterMode.value.map((s) => {
                  const tmp = new Emitter();
                  tmp.load(s);
                  return tmp;
                })
              };
            } else {
              const tmp = new Emitter();
              tmp.load(emitterMode.value);
              options.interactivity.modes.emitters = {
                random: {
                  count: emitterMode.random.count ?? defaultCount,
                  enable: emitterMode.random.enable ?? false
                },
                value: tmp
              };
            }
          } else {
            const emitterOptions = options.interactivity.modes.emitters = {
              random: {
                count: 1,
                enable: false
              },
              value: new Emitter()
            };
            emitterOptions.value.load(interactivityEmitters);
          }
        }
      }
    }
    needsPlugin(options) {
      if (!options) {
        return false;
      }
      const emitters = options.emitters;
      return isArray(emitters) && !!emitters.length || emitters !== void 0 || !!options.interactivity?.events?.onClick?.mode && isInArray(EmitterClickMode.emitter, options.interactivity.events.onClick.mode);
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/ShapeManager.js
  var shapeGeneratorss = /* @__PURE__ */ new Map();
  var ShapeManager = class {
    constructor(engine) {
      this._engine = engine;
    }
    addShapeGenerator(name, generator) {
      if (!this.getShapeGenerator(name)) {
        shapeGeneratorss.set(name, generator);
      }
    }
    getShapeGenerator(name) {
      return shapeGeneratorss.get(name);
    }
    getSupportedShapeGenerators() {
      return shapeGeneratorss.keys();
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/index.js
  async function loadEmittersPlugin(engine, refresh = true) {
    if (!engine.emitterShapeManager) {
      engine.emitterShapeManager = new ShapeManager(engine);
    }
    if (!engine.addEmitterShapeGenerator) {
      engine.addEmitterShapeGenerator = (name, generator) => {
        engine.emitterShapeManager?.addShapeGenerator(name, generator);
      };
    }
    const plugin = new EmittersPlugin(engine);
    await engine.addPlugin(plugin, refresh);
  }

  // node_modules/@tsparticles/confetti/browser/ConfettiOptions.js
  var ConfettiOptions = class {
    constructor() {
      this.angle = 90;
      this.count = 50;
      this.spread = 45;
      this.startVelocity = 45;
      this.decay = 0.9;
      this.gravity = 1;
      this.drift = 0;
      this.ticks = 200;
      this.position = {
        x: 50,
        y: 50
      };
      this.colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];
      this.shapes = ["square", "circle"];
      this.scalar = 1;
      this.zIndex = 100;
      this.disableForReducedMotion = true;
      this.flat = false;
      this.shapeOptions = {};
    }
    get origin() {
      return {
        x: this.position.x / percentDenominator,
        y: this.position.y / percentDenominator
      };
    }
    set origin(value) {
      this.position.x = value.x * percentDenominator;
      this.position.y = value.y * percentDenominator;
    }
    get particleCount() {
      return this.count;
    }
    set particleCount(value) {
      this.count = value;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.angle !== void 0) {
        this.angle = data.angle;
      }
      const count = data.count ?? data.particleCount;
      if (count !== void 0) {
        this.count = count;
      }
      if (data.spread !== void 0) {
        this.spread = data.spread;
      }
      if (data.startVelocity !== void 0) {
        this.startVelocity = data.startVelocity;
      }
      if (data.decay !== void 0) {
        this.decay = data.decay;
      }
      if (data.flat !== void 0) {
        this.flat = data.flat;
      }
      if (data.gravity !== void 0) {
        this.gravity = data.gravity;
      }
      if (data.drift !== void 0) {
        this.drift = data.drift;
      }
      if (data.ticks !== void 0) {
        this.ticks = data.ticks;
      }
      const origin7 = data.origin;
      if (origin7 && !data.position) {
        data.position = {
          x: origin7.x !== void 0 ? origin7.x * percentDenominator : void 0,
          y: origin7.y !== void 0 ? origin7.y * percentDenominator : void 0
        };
      }
      const position = data.position;
      if (position) {
        if (position.x !== void 0) {
          this.position.x = position.x;
        }
        if (position.y !== void 0) {
          this.position.y = position.y;
        }
      }
      if (data.colors !== void 0) {
        if (isArray(data.colors)) {
          this.colors = [...data.colors];
        } else {
          this.colors = data.colors;
        }
      }
      const options = data.shapeOptions;
      if (options !== void 0) {
        for (const shape in options) {
          const item = options[shape];
          if (item) {
            this.shapeOptions[shape] = deepExtend(this.shapeOptions[shape] ?? {}, item);
          }
        }
      }
      if (data.shapes !== void 0) {
        if (isArray(data.shapes)) {
          this.shapes = [...data.shapes];
        } else {
          this.shapes = data.shapes;
        }
      }
      if (data.scalar !== void 0) {
        this.scalar = data.scalar;
      }
      if (data.zIndex !== void 0) {
        this.zIndex = data.zIndex;
      }
      if (data.disableForReducedMotion !== void 0) {
        this.disableForReducedMotion = data.disableForReducedMotion;
      }
    }
  };

  // node_modules/@tsparticles/move-base/browser/Utils.js
  var half4 = 0.5;
  var minVelocity = 0;
  var identity = 1;
  var moveSpeedFactor = 60;
  var minSpinRadius = 0;
  var spinFactor = 0.01;
  function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) {
      return;
    }
    const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
    if ((hasHDistance || hasVDistance) && !particle.misplaced) {
      particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
      if (hDistance) {
        particle.velocity.x = particle.velocity.y * half4 - particle.velocity.x;
      }
      if (vDistance) {
        particle.velocity.y = particle.velocity.x * half4 - particle.velocity.y;
      }
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
      particle.misplaced = false;
    } else if (particle.misplaced) {
      const pos = particle.position, vel = particle.velocity;
      if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) {
        vel.x *= -getRandom();
      }
      if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) {
        vel.y *= -getRandom();
      }
    }
  }
  function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity;
    if (moveDrift && moveSpeed) {
      particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
    }
    if (gravityOptions?.enable && moveSpeed) {
      particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
    }
    const decay = particle.moveDecay;
    particle.velocity.multTo(decay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
      velocity.y = gravityFactor * maxSpeed;
      if (moveSpeed) {
        particle.velocity.y = velocity.y / moveSpeed;
      }
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
      position.x += Math.sin(position.x * Math.cos(position.y));
      position.y += Math.cos(position.y * Math.sin(position.x));
    }
  }
  function spin(particle, moveSpeed) {
    const container2 = particle.container;
    if (!particle.spin) {
      return;
    }
    const updateFunc = {
      x: particle.spin.direction === RotateDirection.clockwise ? Math.cos : Math.sin,
      y: particle.spin.direction === RotateDirection.clockwise ? Math.sin : Math.cos
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
    particle.spin.radius += particle.spin.acceleration;
    const maxCanvasSize = Math.max(container2.canvas.size.width, container2.canvas.size.height), halfMaxSize = maxCanvasSize * half4;
    if (particle.spin.radius > halfMaxSize) {
      particle.spin.radius = halfMaxSize;
      particle.spin.acceleration *= -identity;
    } else if (particle.spin.radius < minSpinRadius) {
      particle.spin.radius = minSpinRadius;
      particle.spin.acceleration *= -identity;
    }
    particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
  }
  function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
      return;
    }
    if (particle.lastPathTime <= particle.pathDelay) {
      particle.lastPathTime += delta.value;
      return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) {
      particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
      particle.velocity.x = clamp(particle.velocity.x, -identity, identity);
      particle.velocity.y = clamp(particle.velocity.y, -identity, identity);
    }
    particle.lastPathTime -= particle.pathDelay;
  }
  function getProximitySpeedFactor(particle) {
    return particle.slow.inRange ? particle.slow.factor : identity;
  }
  function initSpin(particle) {
    const container2 = particle.container, options = particle.options, spinOptions = options.move.spin;
    if (!spinOptions.enable) {
      return;
    }
    const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinFactor2 = 0.01, spinCenter = {
      x: spinPos.x * spinFactor2 * container2.canvas.size.width,
      y: spinPos.y * spinFactor2 * container2.canvas.size.height
    }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
    particle.retina.spinAcceleration = spinAcceleration * container2.retina.pixelRatio;
    const minVelocity6 = 0;
    particle.spin = {
      center: spinCenter,
      direction: particle.velocity.x >= minVelocity6 ? RotateDirection.clockwise : RotateDirection.counterClockwise,
      angle: particle.velocity.angle,
      radius: distance,
      acceleration: particle.retina.spinAcceleration
    };
  }

  // node_modules/@tsparticles/move-base/browser/BaseMover.js
  var diffFactor = 2;
  var defaultSizeFactor = 1;
  var defaultDeltaFactor = 1;
  var BaseMover = class {
    init(particle) {
      const options = particle.options, gravityOptions = options.move.gravity;
      particle.gravity = {
        enable: gravityOptions.enable,
        acceleration: getRangeValue(gravityOptions.acceleration),
        inverse: gravityOptions.inverse
      };
      initSpin(particle);
    }
    isEnabled(particle) {
      return !particle.destroyed && particle.options.move.enable;
    }
    move(particle, delta) {
      const particleOptions = particle.options, moveOptions = particleOptions.move;
      if (!moveOptions.enable) {
        return;
      }
      const container2 = particle.container, pxRatio = container2.retina.pixelRatio;
      particle.retina.moveSpeed ??= getRangeValue(moveOptions.speed) * pxRatio;
      particle.retina.moveDrift ??= getRangeValue(particle.options.move.drift) * pxRatio;
      const slowFactor = getProximitySpeedFactor(particle), baseSpeed = particle.retina.moveSpeed * container2.retina.reduceFactor, moveDrift = particle.retina.moveDrift, maxSize = getRangeMax(particleOptions.size.value) * pxRatio, sizeFactor2 = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor2 * slowFactor * deltaFactor / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container2.retina.maxSpeed;
      if (moveOptions.spin.enable) {
        spin(particle, moveSpeed);
      } else {
        move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
      }
      applyDistance(particle);
    }
  };

  // node_modules/@tsparticles/move-base/browser/index.js
  async function loadBaseMover(engine, refresh = true) {
    await engine.addMover("base", () => {
      return Promise.resolve(new BaseMover());
    }, refresh);
  }

  // node_modules/@tsparticles/shape-circle/browser/Utils.js
  var double5 = 2;
  var doublePI2 = Math.PI * double5;
  var minAngle = 0;
  var origin3 = { x: 0, y: 0 };
  function drawCircle(data) {
    const { context, particle, radius } = data;
    if (!particle.circleRange) {
      particle.circleRange = { min: minAngle, max: doublePI2 };
    }
    const circleRange = particle.circleRange;
    context.arc(origin3.x, origin3.y, radius, circleRange.min, circleRange.max, false);
  }

  // node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
  var sides = 12;
  var maxAngle = 360;
  var minAngle2 = 0;
  var CircleDrawer = class {
    constructor() {
      this.validTypes = ["circle"];
    }
    draw(data) {
      drawCircle(data);
    }
    getSidesCount() {
      return sides;
    }
    particleInit(container2, particle) {
      const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
        max: maxAngle,
        min: minAngle2
      };
      particle.circleRange = !isObject(angle) ? {
        min: minAngle2,
        max: degToRad(angle)
      } : { min: degToRad(angle.min), max: degToRad(angle.max) };
    }
  };

  // node_modules/@tsparticles/shape-circle/browser/index.js
  async function loadCircleShape(engine, refresh = true) {
    await engine.addShape(new CircleDrawer(), refresh);
  }

  // node_modules/@tsparticles/updater-color/browser/ColorUpdater.js
  var ColorUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    init(particle) {
      const hslColor = rangeColorToHsl(particle.options.color, particle.id, particle.options.reduceDuplicates);
      if (hslColor) {
        particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
      }
    }
    isEnabled(particle) {
      const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
      return !particle.destroyed && !particle.spawning && (color?.h.value !== void 0 && hAnimation.enable || color?.s.value !== void 0 && sAnimation.enable || color?.l.value !== void 0 && lAnimation.enable);
    }
    update(particle, delta) {
      updateColor(particle.color, delta);
    }
  };

  // node_modules/@tsparticles/updater-color/browser/index.js
  async function loadColorUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("color", (container2) => {
      return Promise.resolve(new ColorUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
  var OpacityUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    init(particle) {
      const opacityOptions = particle.options.opacity, pxRatio = 1;
      particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
      const opacityAnimation = opacityOptions.animation;
      if (opacityAnimation.enable) {
        particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.container.retina.reduceFactor;
        if (!opacityAnimation.sync) {
          particle.opacity.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const none = 0;
      return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
    }
    reset(particle) {
      if (particle.opacity) {
        particle.opacity.time = 0;
        particle.opacity.loops = 0;
      }
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.opacity) {
        return;
      }
      updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/index.js
  async function loadOpacityUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("opacity", (container2) => {
      return Promise.resolve(new OpacityUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/updater-out-modes/browser/Utils.js
  var minVelocity2 = 0;
  var boundsMin = 0;
  function bounceHorizontal(data) {
    if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.left && data.direction !== OutModeDirection.right) {
      return;
    }
    if (data.bounds.right < boundsMin && data.direction === OutModeDirection.left) {
      data.particle.position.x = data.size + data.offset.x;
    } else if (data.bounds.left > data.canvasSize.width && data.direction === OutModeDirection.right) {
      data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
    }
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if (data.direction === OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > minVelocity2 || data.direction === OutModeDirection.left && data.bounds.left <= boundsMin && velocity < minVelocity2) {
      const newVelocity = getRangeValue(data.particle.options.bounce.horizontal.value);
      data.particle.velocity.x *= -newVelocity;
      bounced = true;
    }
    if (!bounced) {
      return;
    }
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width && data.direction === OutModeDirection.right) {
      data.particle.position.x = data.canvasSize.width - minPos;
    } else if (data.bounds.left <= boundsMin && data.direction === OutModeDirection.left) {
      data.particle.position.x = minPos;
    }
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }
  function bounceVertical(data) {
    if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.bottom && data.direction !== OutModeDirection.top) {
      return;
    }
    if (data.bounds.bottom < boundsMin && data.direction === OutModeDirection.top) {
      data.particle.position.y = data.size + data.offset.y;
    } else if (data.bounds.top > data.canvasSize.height && data.direction === OutModeDirection.bottom) {
      data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
    }
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if (data.direction === OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > minVelocity2 || data.direction === OutModeDirection.top && data.bounds.top <= boundsMin && velocity < minVelocity2) {
      const newVelocity = getRangeValue(data.particle.options.bounce.vertical.value);
      data.particle.velocity.y *= -newVelocity;
      bounced = true;
    }
    if (!bounced) {
      return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height && data.direction === OutModeDirection.bottom) {
      data.particle.position.y = data.canvasSize.height - minPos;
    } else if (data.bounds.top <= boundsMin && data.direction === OutModeDirection.top) {
      data.particle.position.y = minPos;
    }
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }

  // node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
  var BounceOutMode = class {
    constructor(container2) {
      this.container = container2;
      this.modes = [
        OutMode.bounce,
        OutMode.split
      ];
    }
    update(particle, direction, delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      const container2 = this.container;
      let handled = false;
      for (const [, plugin] of container2.plugins) {
        if (plugin.particleBounce !== void 0) {
          handled = plugin.particleBounce(particle, delta, direction);
        }
        if (handled) {
          break;
        }
      }
      if (handled) {
        return;
      }
      const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container2.canvas.size;
      bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
      bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js
  var minVelocity3 = 0;
  var DestroyOutMode = class {
    constructor(container2) {
      this.container = container2;
      this.modes = [OutMode.destroy];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      const container2 = this.container;
      switch (particle.outType) {
        case ParticleOutType.normal:
        case ParticleOutType.outside:
          if (isPointInside(particle.position, container2.canvas.size, Vector.origin, particle.getRadius(), direction)) {
            return;
          }
          break;
        case ParticleOutType.inside: {
          const { dx, dy } = getDistances(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
          if (vx < minVelocity3 && dx > particle.moveCenter.radius || vy < minVelocity3 && dy > particle.moveCenter.radius || vx >= minVelocity3 && dx < -particle.moveCenter.radius || vy >= minVelocity3 && dy < -particle.moveCenter.radius) {
            return;
          }
          break;
        }
      }
      container2.particles.remove(particle, void 0, true);
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js
  var minVelocity4 = 0;
  var NoneOutMode = class {
    constructor(container2) {
      this.container = container2;
      this.modes = [OutMode.none];
    }
    update(particle, direction, delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
        return;
      }
      const gravityOptions = particle.options.move.gravity, container2 = this.container, canvasSize = container2.canvas.size, pRadius = particle.getRadius();
      if (!gravityOptions.enable) {
        if (particle.velocity.y > minVelocity4 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity4 && particle.position.y >= -pRadius || particle.velocity.x > minVelocity4 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity4 && particle.position.x >= -pRadius) {
          return;
        }
        if (!isPointInside(particle.position, container2.canvas.size, Vector.origin, pRadius, direction)) {
          container2.particles.remove(particle);
        }
      } else {
        const position = particle.position;
        if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
          container2.particles.remove(particle);
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js
  var minVelocity5 = 0;
  var minDistance = 0;
  var OutOutMode = class {
    constructor(container2) {
      this.container = container2;
      this.modes = [OutMode.out];
    }
    update(particle, direction, delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      const container2 = this.container;
      switch (particle.outType) {
        case ParticleOutType.inside: {
          const { x: vx, y: vy } = particle.velocity;
          const circVec = Vector.origin;
          circVec.length = particle.moveCenter.radius;
          circVec.angle = particle.velocity.angle + Math.PI;
          circVec.addTo(Vector.create(particle.moveCenter));
          const { dx, dy } = getDistances(particle.position, circVec);
          if (vx <= minVelocity5 && dx >= minDistance || vy <= minVelocity5 && dy >= minDistance || vx >= minVelocity5 && dx <= minDistance || vy >= minVelocity5 && dy <= minDistance) {
            return;
          }
          particle.position.x = Math.floor(randomInRange({
            min: 0,
            max: container2.canvas.size.width
          }));
          particle.position.y = Math.floor(randomInRange({
            min: 0,
            max: container2.canvas.size.height
          }));
          const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
          particle.direction = Math.atan2(-newDy, -newDx);
          particle.velocity.angle = particle.direction;
          break;
        }
        default: {
          if (isPointInside(particle.position, container2.canvas.size, Vector.origin, particle.getRadius(), direction)) {
            return;
          }
          switch (particle.outType) {
            case ParticleOutType.outside: {
              particle.position.x = Math.floor(randomInRange({
                min: -particle.moveCenter.radius,
                max: particle.moveCenter.radius
              })) + particle.moveCenter.x;
              particle.position.y = Math.floor(randomInRange({
                min: -particle.moveCenter.radius,
                max: particle.moveCenter.radius
              })) + particle.moveCenter.y;
              const { dx, dy } = getDistances(particle.position, particle.moveCenter);
              if (particle.moveCenter.radius) {
                particle.direction = Math.atan2(dy, dx);
                particle.velocity.angle = particle.direction;
              }
              break;
            }
            case ParticleOutType.normal: {
              const warp = particle.options.move.warp, canvasSize = container2.canvas.size, newPos = {
                bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                left: -particle.getRadius() - particle.offset.x,
                right: canvasSize.width + particle.getRadius() + particle.offset.x,
                top: -particle.getRadius() - particle.offset.y
              }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
              if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
                particle.position.x = newPos.left;
                particle.initialPosition.x = particle.position.x;
                if (!warp) {
                  particle.position.y = getRandom() * canvasSize.height;
                  particle.initialPosition.y = particle.position.y;
                }
              } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.initialPosition.x = particle.position.x;
                if (!warp) {
                  particle.position.y = getRandom() * canvasSize.height;
                  particle.initialPosition.y = particle.position.y;
                }
              }
              if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
                if (!warp) {
                  particle.position.x = getRandom() * canvasSize.width;
                  particle.initialPosition.x = particle.position.x;
                }
                particle.position.y = newPos.top;
                particle.initialPosition.y = particle.position.y;
              } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
                if (!warp) {
                  particle.position.x = getRandom() * canvasSize.width;
                  particle.initialPosition.x = particle.position.x;
                }
                particle.position.y = newPos.bottom;
                particle.initialPosition.y = particle.position.y;
              }
              break;
            }
          }
          break;
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
  var checkOutMode = (outModes, outMode) => {
    return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
  };
  var OutOfCanvasUpdater = class {
    constructor(container2) {
      this._updateOutMode = (particle, delta, outMode, direction) => {
        for (const updater of this.updaters) {
          updater.update(particle, direction, delta, outMode);
        }
      };
      this.container = container2;
      this.updaters = [];
    }
    init(particle) {
      this.updaters = [];
      const outModes = particle.options.move.outModes;
      if (checkOutMode(outModes, OutMode.bounce)) {
        this.updaters.push(new BounceOutMode(this.container));
      } else if (checkOutMode(outModes, OutMode.out)) {
        this.updaters.push(new OutOutMode(this.container));
      } else if (checkOutMode(outModes, OutMode.destroy)) {
        this.updaters.push(new DestroyOutMode(this.container));
      } else if (checkOutMode(outModes, OutMode.none)) {
        this.updaters.push(new NoneOutMode(this.container));
      }
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
      const outModes = particle.options.move.outModes;
      this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
      this._updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
      this._updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
      this._updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/index.js
  async function loadOutModesUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("outModes", (container2) => {
      return Promise.resolve(new OutOfCanvasUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
  var minLoops = 0;
  var SizeUpdater = class {
    init(particle) {
      const container2 = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
      if (sizeAnimation.enable) {
        particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container2.retina.sizeAnimationSpeed) / percentDenominator * container2.retina.reduceFactor;
        if (!sizeAnimation.sync) {
          particle.size.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
    }
    reset(particle) {
      particle.size.loops = minLoops;
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-size/browser/index.js
  async function loadSizeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("size", () => {
      return Promise.resolve(new SizeUpdater());
    }, refresh);
  }

  // node_modules/@tsparticles/basic/browser/index.js
  async function loadBasic(engine, refresh = true) {
    await loadBaseMover(engine, false);
    await loadCircleShape(engine, false);
    await loadColorUpdater(engine, false);
    await loadOpacityUpdater(engine, false);
    await loadOutModesUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await engine.refresh(refresh);
  }

  // node_modules/@tsparticles/shape-cards/browser/Utils.js
  function drawPath(data, path) {
    if (!path.segments.length || !path.segments[0].values.length) {
      return;
    }
    const { context, radius } = data;
    context.moveTo(path.segments[0].values[0].x * radius, path.segments[0].values[0].y * radius);
    for (const segment of path.segments) {
      context.bezierCurveTo(segment.values[1].x * radius, segment.values[1].y * radius, segment.values[2].x * radius, segment.values[2].y * radius, segment.values[3].x * radius, segment.values[3].y * radius);
    }
    for (let i = path.segments.length - 1; i >= 0; i--) {
      const segment = path.segments[i];
      context.bezierCurveTo(-segment.values[2].x * radius, segment.values[2].y * radius, -segment.values[1].x * radius, segment.values[1].y * radius, -segment.values[0].x * radius, segment.values[0].y * radius);
    }
  }
  var n = 1 / 2;
  var paths = {
    heart: {
      segments: [
        {
          values: [
            { x: 0, y: n },
            { x: 0, y: n },
            { x: n, y: 0 },
            { x: n, y: -n / 2 }
          ]
        },
        {
          values: [
            { x: n, y: -n / 2 },
            { x: n, y: -n / 2 },
            { x: n, y: -n },
            { x: n / 2, y: -n }
          ]
        },
        {
          values: [
            { x: n / 2, y: -n },
            { x: n / 2, y: -n },
            { x: 0, y: -n },
            { x: 0, y: -n / 2 }
          ]
        }
      ]
    },
    diamond: {
      segments: [
        {
          values: [
            { x: 0, y: n },
            { x: 0, y: n },
            { x: 3 * n / 4, y: 0 },
            { x: 3 * n / 4, y: 0 }
          ]
        },
        {
          values: [
            { x: 3 * n / 4, y: 0 },
            { x: 3 * n / 4, y: 0 },
            { x: 0, y: -n },
            { x: 0, y: -n }
          ]
        }
      ]
    },
    club: {
      segments: [
        {
          values: [
            { x: 0, y: -n },
            { x: 0, y: -n },
            { x: n / 2, y: -n },
            { x: n / 2, y: -n / 2 }
          ]
        },
        {
          values: [
            { x: n / 2, y: -n / 2 },
            { x: n / 2, y: -n / 2 },
            { x: n, y: -n / 2 },
            { x: n, y: 0 }
          ]
        },
        {
          values: [
            { x: n, y: 0 },
            { x: n, y: 0 },
            { x: n, y: n / 2 },
            { x: n / 2, y: n / 2 }
          ]
        },
        {
          values: [
            { x: n / 2, y: n / 2 },
            { x: n / 2, y: n / 2 },
            { x: n / 8, y: n / 2 },
            { x: n / 8, y: n / 8 }
          ]
        },
        {
          values: [
            { x: n / 8, y: n / 8 },
            { x: n / 8, y: n / 2 },
            { x: n / 2, y: n },
            { x: n / 2, y: n }
          ]
        },
        {
          values: [
            { x: n / 2, y: n },
            { x: n / 2, y: n },
            { x: 0, y: n },
            { x: 0, y: n }
          ]
        }
      ]
    },
    spade: {
      segments: [
        {
          values: [
            { x: 0, y: -n },
            { x: 0, y: -n },
            { x: n, y: -n / 2 },
            { x: n, y: 0 }
          ]
        },
        {
          values: [
            { x: n, y: 0 },
            { x: n, y: 0 },
            { x: n, y: n / 2 },
            { x: n / 2, y: n / 2 }
          ]
        },
        {
          values: [
            { x: n / 2, y: n / 2 },
            { x: n / 2, y: n / 2 },
            { x: n / 8, y: n / 2 },
            { x: n / 8, y: n / 8 }
          ]
        },
        {
          values: [
            { x: n / 8, y: n / 8 },
            { x: n / 8, y: n / 2 },
            { x: n / 2, y: n },
            { x: n / 2, y: n }
          ]
        },
        {
          values: [
            { x: n / 2, y: n },
            { x: n / 2, y: n },
            { x: 0, y: n },
            { x: 0, y: n }
          ]
        }
      ]
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/ClubDrawer.js
  var ClubDrawer = class {
    constructor() {
      this.validTypes = ["club", "clubs"];
    }
    draw(data) {
      drawPath(data, paths.club);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/DiamondDrawer.js
  var DiamondDrawer = class {
    constructor() {
      this.validTypes = ["diamond", "diamonds"];
    }
    draw(data) {
      drawPath(data, paths.diamond);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/HeartDrawer.js
  var HeartDrawer = class {
    constructor() {
      this.validTypes = ["heart", "hearts"];
    }
    draw(data) {
      drawPath(data, paths.heart);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/SpadeDrawer.js
  var SpadeDrawer = class {
    constructor() {
      this.validTypes = ["spade", "spades"];
    }
    draw(data) {
      drawPath(data, paths.spade);
    }
  };

  // node_modules/@tsparticles/shape-cards/browser/index.js
  async function loadCardsShape(engine, refresh = true) {
    await engine.addShape(new SpadeDrawer(), refresh);
    await engine.addShape(new HeartDrawer(), refresh);
    await engine.addShape(new DiamondDrawer(), refresh);
    await engine.addShape(new ClubDrawer(), refresh);
  }

  // node_modules/@tsparticles/shape-emoji/browser/Utils.js
  function drawEmoji(data) {
    const { context, particle, radius, opacity } = data, emojiData = particle.emojiData, double15 = 2, diameter = radius * double15, previousAlpha = context.globalAlpha;
    if (!emojiData) {
      return;
    }
    context.globalAlpha = opacity;
    context.drawImage(emojiData, -radius, -radius, diameter, diameter);
    context.globalAlpha = previousAlpha;
  }

  // node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
  var defaultFont = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
  var EmojiDrawer = class {
    constructor() {
      this.validTypes = ["emoji"];
      this._emojiShapeDict = /* @__PURE__ */ new Map();
    }
    destroy() {
      for (const [key, emojiData] of this._emojiShapeDict) {
        if (emojiData instanceof ImageBitmap) {
          emojiData?.close();
          this._emojiShapeDict.delete(key);
        }
      }
    }
    draw(data) {
      drawEmoji(data);
    }
    async init(container2) {
      const options = container2.actualOptions, { validTypes } = this;
      if (!validTypes.find((t) => isInArray(t, options.particles.shape.type))) {
        return;
      }
      const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => options.particles.shape.options[t]).find((t) => !!t);
      if (shapeOptions) {
        executeOnSingleOrMultiple(shapeOptions, (shape) => {
          if (shape.font) {
            promises.push(loadFont(shape.font));
          }
        });
      }
      await Promise.all(promises);
    }
    particleDestroy(particle) {
      delete particle.emojiData;
    }
    particleInit(container2, particle) {
      const double15 = 2, shapeData = particle.shapeData;
      if (!shapeData?.value) {
        return;
      }
      const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData), font = shapeData.font ?? defaultFont;
      if (!emoji) {
        return;
      }
      const key = `${emoji}_${font}`, existingData = this._emojiShapeDict.get(key);
      if (existingData) {
        particle.emojiData = existingData;
        return;
      }
      const canvasSize = getRangeMax(particle.size.value) * double15;
      let emojiData;
      const maxSize = getRangeMax(particle.size.value);
      if (typeof OffscreenCanvas !== "undefined") {
        const canvas = new OffscreenCanvas(canvasSize, canvasSize), context = canvas.getContext("2d");
        if (!context) {
          return;
        }
        context.font = `400 ${maxSize * double15}px ${font}`;
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillText(emoji, maxSize, maxSize);
        emojiData = canvas.transferToImageBitmap();
      } else {
        const canvas = document.createElement("canvas");
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        const context = canvas.getContext("2d");
        if (!context) {
          return;
        }
        context.font = `400 ${maxSize * double15}px ${font}`;
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillText(emoji, maxSize, maxSize);
        emojiData = canvas;
      }
      this._emojiShapeDict.set(key, emojiData);
      particle.emojiData = emojiData;
    }
  };

  // node_modules/@tsparticles/shape-emoji/browser/index.js
  async function loadEmojiShape(engine, refresh = true) {
    await engine.addShape(new EmojiDrawer(), refresh);
  }

  // node_modules/@tsparticles/shape-heart/browser/Utils.js
  var half5 = 0.5;
  var double6 = 2;
  function drawHeart(data) {
    const { context, radius } = data, diameter = radius * double6, halfRadius = radius * half5, radiusAndHalf = radius + halfRadius, x = -radius, y = -radius;
    context.moveTo(x, y + halfRadius);
    context.quadraticCurveTo(x, y, x + halfRadius, y);
    context.quadraticCurveTo(x + radius, y, x + radius, y + halfRadius);
    context.quadraticCurveTo(x + radius, y, x + radiusAndHalf, y);
    context.quadraticCurveTo(x + diameter, y, x + diameter, y + halfRadius);
    context.quadraticCurveTo(x + diameter, y + radius, x + radiusAndHalf, y + radiusAndHalf);
    context.lineTo(x + radius, y + diameter);
    context.lineTo(x + halfRadius, y + radiusAndHalf);
    context.quadraticCurveTo(x, y + radius, x, y + halfRadius);
  }

  // node_modules/@tsparticles/shape-heart/browser/HeartDrawer.js
  var HeartDrawer2 = class {
    constructor() {
      this.validTypes = ["heart"];
    }
    draw(data) {
      drawHeart(data);
    }
  };

  // node_modules/@tsparticles/shape-heart/browser/index.js
  async function loadHeartShape(engine, refresh = true) {
    await engine.addShape(new HeartDrawer2(), refresh);
  }

  // node_modules/@tsparticles/shape-image/browser/Utils.js
  var stringStart = 0;
  var defaultOpacity = 1;
  var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
  function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) {
      return "";
    }
    const colorStyle = getStyleFromHsl(color, opacity);
    if (svgData.includes("fill")) {
      return svgData.replace(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
  }
  async function loadImage(image) {
    return new Promise((resolve) => {
      image.loading = true;
      const img = new Image();
      image.element = img;
      img.addEventListener("load", () => {
        image.loading = false;
        resolve();
      });
      img.addEventListener("error", () => {
        image.element = void 0;
        image.error = true;
        image.loading = false;
        getLogger().error(`${errorPrefix} loading image: ${image.source}`);
        resolve();
      });
      img.src = image.source;
    });
  }
  async function downloadSvgImage(image) {
    if (image.type !== "svg") {
      await loadImage(image);
      return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (!response.ok) {
      getLogger().error(`${errorPrefix} Image not found`);
      image.error = true;
    } else {
      image.svgData = await response.text();
    }
    image.loading = false;
  }
  function replaceImageColor(image, imageData, color, particle) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity), imageRes = {
      color,
      gif: imageData.gif,
      data: {
        ...image,
        svgData: svgColoredData
      },
      loaded: false,
      ratio: imageData.width / imageData.height,
      replaceColor: imageData.replaceColor,
      source: imageData.src
    };
    return new Promise((resolve) => {
      const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
      img.addEventListener("load", () => {
        imageRes.loaded = true;
        imageRes.element = img;
        resolve(imageRes);
        domUrl.revokeObjectURL(url);
      });
      const errorHandler = async () => {
        domUrl.revokeObjectURL(url);
        const img2 = {
          ...image,
          error: false,
          loading: true
        };
        await loadImage(img2);
        imageRes.loaded = true;
        imageRes.element = img2.element;
        resolve(imageRes);
      };
      img.addEventListener("error", () => void errorHandler());
      img.src = url;
    });
  }

  // node_modules/@tsparticles/shape-image/browser/GifUtils/Constants.js
  var InterlaceOffsets = [0, 4, 2, 1];
  var InterlaceSteps = [8, 8, 4, 2];

  // node_modules/@tsparticles/shape-image/browser/GifUtils/ByteStream.js
  var ByteStream = class {
    constructor(bytes) {
      this.pos = 0;
      this.data = new Uint8ClampedArray(bytes);
    }
    getString(count) {
      const slice = this.data.slice(this.pos, this.pos + count);
      this.pos += slice.length;
      return slice.reduce((acc, curr) => acc + String.fromCharCode(curr), "");
    }
    nextByte() {
      return this.data[this.pos++];
    }
    nextTwoBytes() {
      const increment = 2, previous = 1, shift = 8;
      this.pos += increment;
      return this.data[this.pos - increment] + (this.data[this.pos - previous] << shift);
    }
    readSubBlocks() {
      let blockString = "", size = 0;
      const minCount = 0, emptySize = 0;
      do {
        size = this.data[this.pos++];
        for (let count = size; --count >= minCount; blockString += String.fromCharCode(this.data[this.pos++])) {
        }
      } while (size !== emptySize);
      return blockString;
    }
    readSubBlocksBin() {
      let size = this.data[this.pos], len = 0;
      const emptySize = 0, increment = 1;
      for (let offset = 0; size !== emptySize; offset += size + increment, size = this.data[this.pos + offset]) {
        len += size;
      }
      const blockData = new Uint8Array(len);
      size = this.data[this.pos++];
      for (let i = 0; size !== emptySize; size = this.data[this.pos++]) {
        for (let count = size; --count >= emptySize; blockData[i++] = this.data[this.pos++]) {
        }
      }
      return blockData;
    }
    skipSubBlocks() {
      for (const increment = 1, noData = 0; this.data[this.pos] !== noData; this.pos += this.data[this.pos] + increment) {
      }
      this.pos++;
    }
  };

  // node_modules/@tsparticles/shape-image/browser/GifUtils/Enums/DisposalMethod.js
  var DisposalMethod;
  (function(DisposalMethod2) {
    DisposalMethod2[DisposalMethod2["Replace"] = 0] = "Replace";
    DisposalMethod2[DisposalMethod2["Combine"] = 1] = "Combine";
    DisposalMethod2[DisposalMethod2["RestoreBackground"] = 2] = "RestoreBackground";
    DisposalMethod2[DisposalMethod2["RestorePrevious"] = 3] = "RestorePrevious";
    DisposalMethod2[DisposalMethod2["UndefinedA"] = 4] = "UndefinedA";
    DisposalMethod2[DisposalMethod2["UndefinedB"] = 5] = "UndefinedB";
    DisposalMethod2[DisposalMethod2["UndefinedC"] = 6] = "UndefinedC";
    DisposalMethod2[DisposalMethod2["UndefinedD"] = 7] = "UndefinedD";
  })(DisposalMethod || (DisposalMethod = {}));

  // node_modules/@tsparticles/shape-image/browser/GifUtils/Types/GIFDataHeaders.js
  var GIFDataHeaders;
  (function(GIFDataHeaders2) {
    GIFDataHeaders2[GIFDataHeaders2["Extension"] = 33] = "Extension";
    GIFDataHeaders2[GIFDataHeaders2["ApplicationExtension"] = 255] = "ApplicationExtension";
    GIFDataHeaders2[GIFDataHeaders2["GraphicsControlExtension"] = 249] = "GraphicsControlExtension";
    GIFDataHeaders2[GIFDataHeaders2["PlainTextExtension"] = 1] = "PlainTextExtension";
    GIFDataHeaders2[GIFDataHeaders2["CommentExtension"] = 254] = "CommentExtension";
    GIFDataHeaders2[GIFDataHeaders2["Image"] = 44] = "Image";
    GIFDataHeaders2[GIFDataHeaders2["EndOfFile"] = 59] = "EndOfFile";
  })(GIFDataHeaders || (GIFDataHeaders = {}));

  // node_modules/@tsparticles/shape-image/browser/GifUtils/Utils.js
  var origin4 = {
    x: 0,
    y: 0
  };
  var defaultFrame = 0;
  var half6 = 0.5;
  var initialTime = 0;
  var firstIndex = 0;
  var defaultLoopCount = 0;
  function parseColorTable(byteStream, count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push({
        r: byteStream.data[byteStream.pos],
        g: byteStream.data[byteStream.pos + 1],
        b: byteStream.data[byteStream.pos + 2]
      });
      byteStream.pos += 3;
    }
    return colors;
  }
  function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
    switch (byteStream.nextByte()) {
      case GIFDataHeaders.GraphicsControlExtension: {
        const frame = gif.frames[getFrameIndex(false)];
        byteStream.pos++;
        const packedByte = byteStream.nextByte();
        frame.GCreserved = (packedByte & 224) >>> 5;
        frame.disposalMethod = (packedByte & 28) >>> 2;
        frame.userInputDelayFlag = (packedByte & 2) === 2;
        const transparencyFlag = (packedByte & 1) === 1;
        frame.delayTime = byteStream.nextTwoBytes() * 10;
        const transparencyIndex = byteStream.nextByte();
        if (transparencyFlag) {
          getTransparencyIndex(transparencyIndex);
        }
        byteStream.pos++;
        break;
      }
      case GIFDataHeaders.ApplicationExtension: {
        byteStream.pos++;
        const applicationExtension = {
          identifier: byteStream.getString(8),
          authenticationCode: byteStream.getString(3),
          data: byteStream.readSubBlocksBin()
        };
        gif.applicationExtensions.push(applicationExtension);
        break;
      }
      case GIFDataHeaders.CommentExtension: {
        gif.comments.push([getFrameIndex(false), byteStream.readSubBlocks()]);
        break;
      }
      case GIFDataHeaders.PlainTextExtension: {
        if (gif.globalColorTable.length === 0) {
          throw new EvalError("plain text extension without global color table");
        }
        byteStream.pos++;
        gif.frames[getFrameIndex(false)].plainTextData = {
          left: byteStream.nextTwoBytes(),
          top: byteStream.nextTwoBytes(),
          width: byteStream.nextTwoBytes(),
          height: byteStream.nextTwoBytes(),
          charSize: {
            width: byteStream.nextTwoBytes(),
            height: byteStream.nextTwoBytes()
          },
          foregroundColor: byteStream.nextByte(),
          backgroundColor: byteStream.nextByte(),
          text: byteStream.readSubBlocks()
        };
        break;
      }
      default:
        byteStream.skipSubBlocks();
        break;
    }
  }
  async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    const frame = gif.frames[getFrameIndex(true)];
    frame.left = byteStream.nextTwoBytes();
    frame.top = byteStream.nextTwoBytes();
    frame.width = byteStream.nextTwoBytes();
    frame.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 128) === 128, interlacedFlag = (packedByte & 64) === 64;
    frame.sortFlag = (packedByte & 32) === 32;
    frame.reserved = (packedByte & 24) >>> 3;
    const localColorCount = 1 << (packedByte & 7) + 1;
    if (localColorTableFlag) {
      frame.localColorTable = parseColorTable(byteStream, localColorCount);
    }
    const getColor = (index) => {
      const { r, g, b } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
      if (index !== getTransparencyIndex(null)) {
        return { r, g, b, a: 255 };
      }
      return { r, g, b, a: avgAlpha ? ~~((r + g + b) / 3) : 0 };
    };
    const image = (() => {
      try {
        return new ImageData(frame.width, frame.height, { colorSpace: "srgb" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "IndexSizeError") {
          return null;
        }
        throw error;
      }
    })();
    if (image == null) {
      throw new EvalError("GIF frame size is to large");
    }
    const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
    const readBits = (pos, len) => {
      const bytePos = pos >>> 3, bitPos = pos & 7;
      return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
    };
    if (interlacedFlag) {
      for (let code = 0, size = minCodeSize + 1, pos = 0, dic = [[0]], pass = 0; pass < 4; pass++) {
        if (InterlaceOffsets[pass] < frame.height) {
          let pixelPos = 0, lineIndex = 0, exit = false;
          while (!exit) {
            const last = code;
            code = readBits(pos, size);
            pos += size + 1;
            if (code === clearCode) {
              size = minCodeSize + 1;
              dic.length = clearCode + 2;
              for (let i = 0; i < dic.length; i++) {
                dic[i] = i < clearCode ? [i] : [];
              }
            } else {
              if (code >= dic.length) {
                dic.push(dic[last].concat(dic[last][0]));
              } else if (last !== clearCode) {
                dic.push(dic[last].concat(dic[code][0]));
              }
              for (const item of dic[code]) {
                const { r, g, b, a } = getColor(item);
                image.data.set([r, g, b, a], InterlaceOffsets[pass] * frame.width + InterlaceSteps[pass] * lineIndex + pixelPos % (frame.width * 4));
                pixelPos += 4;
              }
              if (dic.length === 1 << size && size < 12) {
                size++;
              }
            }
            if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
              lineIndex++;
              if (InterlaceOffsets[pass] + InterlaceSteps[pass] * lineIndex >= frame.height) {
                exit = true;
              }
            }
          }
        }
        progressCallback?.(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
      }
      frame.image = image;
      frame.bitmap = await createImageBitmap(image);
    } else {
      let code = 0, size = minCodeSize + 1, pos = 0, pixelPos = -4, exit = false;
      const dic = [[0]];
      while (!exit) {
        const last = code;
        code = readBits(pos, size);
        pos += size;
        if (code === clearCode) {
          size = minCodeSize + 1;
          dic.length = clearCode + 2;
          for (let i = 0; i < dic.length; i++) {
            dic[i] = i < clearCode ? [i] : [];
          }
        } else {
          if (code === clearCode + 1) {
            exit = true;
            break;
          }
          if (code >= dic.length) {
            dic.push(dic[last].concat(dic[last][0]));
          } else if (last !== clearCode) {
            dic.push(dic[last].concat(dic[code][0]));
          }
          for (const item of dic[code]) {
            const { r, g, b, a } = getColor(item);
            image.data.set([r, g, b, a], pixelPos += 4);
          }
          if (dic.length >= 1 << size && size < 12) {
            size++;
          }
        }
      }
      frame.image = image;
      frame.bitmap = await createImageBitmap(image);
      progressCallback?.((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
    }
  }
  async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    switch (byteStream.nextByte()) {
      case GIFDataHeaders.EndOfFile:
        return true;
      case GIFDataHeaders.Image:
        await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
        break;
      case GIFDataHeaders.Extension:
        parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
        break;
      default:
        throw new EvalError("undefined block found");
    }
    return false;
  }
  function getGIFLoopAmount(gif) {
    for (const extension of gif.applicationExtensions) {
      if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") {
        continue;
      }
      return extension.data[1] + (extension.data[2] << 8);
    }
    return NaN;
  }
  async function decodeGIF(gifURL, progressCallback, avgAlpha) {
    if (!avgAlpha)
      avgAlpha = false;
    const res = await fetch(gifURL);
    if (!res.ok && res.status === 404) {
      throw new EvalError("file not found");
    }
    const buffer = await res.arrayBuffer();
    const gif = {
      width: 0,
      height: 0,
      totalTime: 0,
      colorRes: 0,
      pixelAspectRatio: 0,
      frames: [],
      sortFlag: false,
      globalColorTable: [],
      backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
      comments: [],
      applicationExtensions: []
    }, byteStream = new ByteStream(new Uint8ClampedArray(buffer));
    if (byteStream.getString(6) !== "GIF89a") {
      throw new Error("not a supported GIF file");
    }
    gif.width = byteStream.nextTwoBytes();
    gif.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 128) === 128;
    gif.colorRes = (packedByte & 112) >>> 4;
    gif.sortFlag = (packedByte & 8) === 8;
    const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
    gif.pixelAspectRatio = byteStream.nextByte();
    if (gif.pixelAspectRatio !== 0) {
      gif.pixelAspectRatio = (gif.pixelAspectRatio + 15) / 64;
    }
    if (globalColorTableFlag) {
      gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
    }
    const backgroundImage = (() => {
      try {
        return new ImageData(gif.width, gif.height, { colorSpace: "srgb" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "IndexSizeError") {
          return null;
        }
        throw error;
      }
    })();
    if (backgroundImage == null) {
      throw new Error("GIF frame size is to large");
    }
    const { r, g, b } = gif.globalColorTable[backgroundColorIndex];
    backgroundImage.data.set(globalColorTableFlag ? [r, g, b, 255] : [0, 0, 0, 0]);
    for (let i = 4; i < backgroundImage.data.length; i *= 2) {
      backgroundImage.data.copyWithin(i, 0, i);
    }
    gif.backgroundImage = backgroundImage;
    let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
    const getframeIndex = (increment) => {
      if (increment) {
        incrementFrameIndex = true;
      }
      return frameIndex;
    };
    const getTransparencyIndex = (newValue) => {
      if (newValue != null) {
        transparencyIndex = newValue;
      }
      return transparencyIndex;
    };
    try {
      do {
        if (incrementFrameIndex) {
          gif.frames.push({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            disposalMethod: DisposalMethod.Replace,
            image: new ImageData(1, 1, { colorSpace: "srgb" }),
            plainTextData: null,
            userInputDelayFlag: false,
            delayTime: 0,
            sortFlag: false,
            localColorTable: [],
            reserved: 0,
            GCreserved: 0
          });
          frameIndex++;
          transparencyIndex = -1;
          incrementFrameIndex = false;
        }
      } while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback));
      gif.frames.length--;
      for (const frame of gif.frames) {
        if (frame.userInputDelayFlag && frame.delayTime === 0) {
          gif.totalTime = Infinity;
          break;
        }
        gif.totalTime += frame.delayTime;
      }
      return gif;
    } catch (error) {
      if (error instanceof EvalError) {
        throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
      }
      throw error;
    }
  }
  function drawGif(data) {
    const { context, radius, particle, delta } = data, image = particle.image;
    if (!image?.gifData || !image.gif) {
      return;
    }
    const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
    if (!offscreenContext) {
      throw new Error("could not create offscreen canvas context");
    }
    offscreenContext.imageSmoothingQuality = "low";
    offscreenContext.imageSmoothingEnabled = false;
    offscreenContext.clearRect(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
    if (particle.gifLoopCount === void 0) {
      particle.gifLoopCount = image.gifLoopCount ?? defaultLoopCount;
    }
    let frameIndex = particle.gifFrame ?? defaultFrame;
    const pos = { x: -image.gifData.width * half6, y: -image.gifData.height * half6 }, frame = image.gifData.frames[frameIndex];
    if (particle.gifTime === void 0) {
      particle.gifTime = initialTime;
    }
    if (!frame.bitmap) {
      return;
    }
    context.scale(radius / image.gifData.width, radius / image.gifData.height);
    switch (frame.disposalMethod) {
      case DisposalMethod.UndefinedA:
      case DisposalMethod.UndefinedB:
      case DisposalMethod.UndefinedC:
      case DisposalMethod.UndefinedD:
      case DisposalMethod.Replace:
        offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
        context.drawImage(offscreenCanvas, pos.x, pos.y);
        offscreenContext.clearRect(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
        break;
      case DisposalMethod.Combine:
        offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
        context.drawImage(offscreenCanvas, pos.x, pos.y);
        break;
      case DisposalMethod.RestoreBackground:
        offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
        context.drawImage(offscreenCanvas, pos.x, pos.y);
        offscreenContext.clearRect(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
        if (!image.gifData.globalColorTable.length) {
          offscreenContext.putImageData(image.gifData.frames[firstIndex].image, pos.x + frame.left, pos.y + frame.top);
        } else {
          offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
        }
        break;
      case DisposalMethod.RestorePrevious:
        {
          const previousImageData = offscreenContext.getImageData(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
          offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
          context.drawImage(offscreenCanvas, pos.x, pos.y);
          offscreenContext.clearRect(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
          offscreenContext.putImageData(previousImageData, origin4.x, origin4.y);
        }
        break;
    }
    particle.gifTime += delta.value;
    if (particle.gifTime > frame.delayTime) {
      particle.gifTime -= frame.delayTime;
      if (++frameIndex >= image.gifData.frames.length) {
        if (--particle.gifLoopCount <= defaultLoopCount) {
          return;
        }
        frameIndex = firstIndex;
        offscreenContext.clearRect(origin4.x, origin4.y, offscreenCanvas.width, offscreenCanvas.height);
      }
      particle.gifFrame = frameIndex;
    }
    context.scale(image.gifData.width / radius, image.gifData.height / radius);
  }
  async function loadGifImage(image) {
    if (image.type !== "gif") {
      await loadImage(image);
      return;
    }
    image.loading = true;
    try {
      image.gifData = await decodeGIF(image.source);
      image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? defaultLoopCount;
      if (!image.gifLoopCount) {
        image.gifLoopCount = Infinity;
      }
    } catch {
      image.error = true;
    }
    image.loading = false;
  }

  // node_modules/@tsparticles/shape-image/browser/ImageDrawer.js
  var double7 = 2;
  var defaultAlpha = 1;
  var sides2 = 12;
  var defaultRatio2 = 1;
  var ImageDrawer = class {
    constructor(engine) {
      this.validTypes = ["image", "images"];
      this.loadImageShape = async (imageShape) => {
        if (!this._engine.loadImage) {
          throw new Error(`${errorPrefix} image shape not initialized`);
        }
        await this._engine.loadImage({
          gif: imageShape.gif,
          name: imageShape.name,
          replaceColor: imageShape.replaceColor ?? false,
          src: imageShape.src
        });
      };
      this._engine = engine;
    }
    addImage(image) {
      if (!this._engine.images) {
        this._engine.images = [];
      }
      this._engine.images.push(image);
    }
    draw(data) {
      const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
      if (!image) {
        return;
      }
      context.globalAlpha = opacity;
      if (image.gif && image.gifData) {
        drawGif(data);
      } else if (element) {
        const ratio = image.ratio, pos = {
          x: -radius,
          y: -radius
        }, diameter = radius * double7;
        context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
      }
      context.globalAlpha = defaultAlpha;
    }
    getSidesCount() {
      return sides2;
    }
    async init(container2) {
      const options = container2.actualOptions;
      if (!options.preload || !this._engine.loadImage) {
        return;
      }
      for (const imageData of options.preload) {
        await this._engine.loadImage(imageData);
      }
    }
    loadShape(particle) {
      if (particle.shape !== "image" && particle.shape !== "images") {
        return;
      }
      if (!this._engine.images) {
        this._engine.images = [];
      }
      const imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const image = this._engine.images.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (!image) {
        void this.loadImageShape(imageData).then(() => {
          this.loadShape(particle);
        });
      }
    }
    particleInit(container2, particle) {
      if (particle.shape !== "image" && particle.shape !== "images") {
        return;
      }
      if (!this._engine.images) {
        this._engine.images = [];
      }
      const images = this._engine.images, imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const color = particle.getFillColor(), image = images.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (!image) {
        return;
      }
      const replaceColor = imageData.replaceColor ?? image.replaceColor;
      if (image.loading) {
        setTimeout(() => {
          this.particleInit(container2, particle);
        });
        return;
      }
      void (async () => {
        let imageRes;
        if (image.svgData && color) {
          imageRes = await replaceImageColor(image, imageData, color, particle);
        } else {
          imageRes = {
            color,
            data: image,
            element: image.element,
            gif: image.gif,
            gifData: image.gifData,
            gifLoopCount: image.gifLoopCount,
            loaded: true,
            ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio2,
            replaceColor,
            source: imageData.src
          };
        }
        if (!imageRes.ratio) {
          imageRes.ratio = 1;
        }
        const fill = imageData.fill ?? particle.shapeFill, close = imageData.close ?? particle.shapeClose, imageShape = {
          image: imageRes,
          fill,
          close
        };
        particle.image = imageShape.image;
        particle.shapeFill = imageShape.fill;
        particle.shapeClose = imageShape.close;
      })();
    }
  };

  // node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js
  var Preload = class {
    constructor() {
      this.src = "";
      this.gif = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.gif !== void 0) {
        this.gif = data.gif;
      }
      if (data.height !== void 0) {
        this.height = data.height;
      }
      if (data.name !== void 0) {
        this.name = data.name;
      }
      if (data.replaceColor !== void 0) {
        this.replaceColor = data.replaceColor;
      }
      if (data.src !== void 0) {
        this.src = data.src;
      }
      if (data.width !== void 0) {
        this.width = data.width;
      }
    }
  };

  // node_modules/@tsparticles/shape-image/browser/ImagePreloader.js
  var ImagePreloaderPlugin = class {
    constructor(engine) {
      this.id = "imagePreloader";
      this._engine = engine;
    }
    async getPlugin() {
      await Promise.resolve();
      return {};
    }
    loadOptions(options, source) {
      if (!source?.preload) {
        return;
      }
      if (!options.preload) {
        options.preload = [];
      }
      const preloadOptions = options.preload;
      for (const item of source.preload) {
        const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
        if (existing) {
          existing.load(item);
        } else {
          const preload = new Preload();
          preload.load(item);
          preloadOptions.push(preload);
        }
      }
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/shape-image/browser/index.js
  var extLength = 3;
  function addLoadImageToEngine(engine) {
    if (engine.loadImage) {
      return;
    }
    engine.loadImage = async (data) => {
      if (!data.name && !data.src) {
        throw new Error(`${errorPrefix} no image source provided`);
      }
      if (!engine.images) {
        engine.images = [];
      }
      if (engine.images.find((t) => t.name === data.name || t.source === data.src)) {
        return;
      }
      try {
        const image = {
          gif: data.gif ?? false,
          name: data.name ?? data.src,
          source: data.src,
          type: data.src.substring(data.src.length - extLength),
          error: false,
          loading: true,
          replaceColor: data.replaceColor,
          ratio: data.width && data.height ? data.width / data.height : void 0
        };
        engine.images.push(image);
        let imageFunc;
        if (data.gif) {
          imageFunc = loadGifImage;
        } else {
          imageFunc = data.replaceColor ? downloadSvgImage : loadImage;
        }
        await imageFunc(image);
      } catch {
        throw new Error(`${errorPrefix} ${data.name ?? data.src} not found`);
      }
    };
  }
  async function loadImageShape(engine, refresh = true) {
    addLoadImageToEngine(engine);
    const preloader = new ImagePreloaderPlugin(engine);
    await engine.addPlugin(preloader, refresh);
    await engine.addShape(new ImageDrawer(engine), refresh);
  }

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js
  var LifeDelay = class extends ValueWithRandom {
    constructor() {
      super();
      this.sync = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      super.load(data);
      if (data.sync !== void 0) {
        this.sync = data.sync;
      }
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js
  var LifeDuration = class extends ValueWithRandom {
    constructor() {
      super();
      this.sync = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      super.load(data);
      if (data.sync !== void 0) {
        this.sync = data.sync;
      }
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
  var Life = class {
    constructor() {
      this.count = 0;
      this.delay = new LifeDelay();
      this.duration = new LifeDuration();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.count !== void 0) {
        this.count = data.count;
      }
      this.delay.load(data.delay);
      this.duration.load(data.duration);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Utils.js
  var noTime = 0;
  var infiniteValue = -1;
  var noLife = 0;
  var minCanvasSize = 0;
  function updateLife(particle, delta, canvasSize) {
    if (!particle.life) {
      return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
      life.delayTime += delta.value;
      if (life.delayTime >= particle.life.delay) {
        justSpawned = true;
        particle.spawning = false;
        life.delayTime = noTime;
        life.time = noTime;
      } else {
        return;
      }
    }
    if (life.duration === infiniteValue) {
      return;
    }
    if (particle.spawning) {
      return;
    }
    if (justSpawned) {
      life.time = noTime;
    } else {
      life.time += delta.value;
    }
    if (life.time < life.duration) {
      return;
    }
    life.time = noTime;
    if (particle.life.count > noLife) {
      particle.life.count--;
    }
    if (particle.life.count === noLife) {
      particle.destroy();
      return;
    }
    const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.width);
    particle.position.x = randomInRange(widthRange);
    particle.position.y = randomInRange(heightRange);
    particle.spawning = true;
    life.delayTime = noTime;
    life.time = noTime;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
      life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
      life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
    }
  }

  // node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
  var noTime2 = 0;
  var identity2 = 1;
  var infiniteValue2 = -1;
  var LifeUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    init(particle) {
      const container2 = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
      if (!lifeOptions) {
        return;
      }
      particle.life = {
        delay: container2.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? identity2 : getRandom()) / container2.retina.reduceFactor * millisecondsToSeconds : noTime2,
        delayTime: noTime2,
        duration: container2.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? identity2 : getRandom()) / container2.retina.reduceFactor * millisecondsToSeconds : noTime2,
        time: noTime2,
        count: lifeOptions.count
      };
      if (particle.life.duration <= noTime2) {
        particle.life.duration = infiniteValue2;
      }
      if (particle.life.count <= noTime2) {
        particle.life.count = infiniteValue2;
      }
      if (particle.life) {
        particle.spawning = particle.life.delay > noTime2;
      }
    }
    isEnabled(particle) {
      return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
      if (!options.life) {
        options.life = new Life();
      }
      for (const source of sources) {
        options.life.load(source?.life);
      }
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.life) {
        return;
      }
      updateLife(particle, delta, this.container.canvas.size);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/index.js
  async function loadLifeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("life", async (container2) => {
      return Promise.resolve(new LifeUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/plugin-motion/browser/Options/Classes/MotionReduce.js
  var MotionReduce = class {
    constructor() {
      this.factor = 4;
      this.value = true;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.factor !== void 0) {
        this.factor = data.factor;
      }
      if (data.value !== void 0) {
        this.value = data.value;
      }
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/Options/Classes/Motion.js
  var Motion = class {
    constructor() {
      this.disable = false;
      this.reduce = new MotionReduce();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.disable !== void 0) {
        this.disable = data.disable;
      }
      this.reduce.load(data.reduce);
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/MotionInstance.js
  var defaultFactor = 1;
  var defaultReduce = 0;
  var identity3 = 1;
  var MotionInstance = class {
    constructor(container2, engine) {
      this._handleMotionChange = (mediaQuery) => {
        const container3 = this._container, motion = container3.actualOptions.motion;
        if (!motion) {
          return;
        }
        if (mediaQuery.matches) {
          if (motion.disable) {
            container3.retina.reduceFactor = defaultReduce;
          } else {
            container3.retina.reduceFactor = motion.reduce.value ? identity3 / motion.reduce.factor : defaultFactor;
          }
        } else {
          container3.retina.reduceFactor = 1;
        }
      };
      this._container = container2;
      this._engine = engine;
    }
    async init() {
      const container2 = this._container, options = container2.actualOptions.motion;
      if (!(options && (options.disable || options.reduce.value))) {
        container2.retina.reduceFactor = 1;
        return;
      }
      const mediaQuery = safeMatchMedia("(prefers-reduced-motion: reduce)");
      if (!mediaQuery) {
        container2.retina.reduceFactor = defaultFactor;
        return;
      }
      this._handleMotionChange(mediaQuery);
      const handleChange = () => {
        void (async () => {
          this._handleMotionChange(mediaQuery);
          try {
            await container2.refresh();
          } catch {
          }
        })();
      };
      if (mediaQuery.addEventListener !== void 0) {
        mediaQuery.addEventListener("change", handleChange);
      } else if (mediaQuery.addListener !== void 0) {
        mediaQuery.addListener(handleChange);
      }
      await Promise.resolve();
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/MotionPlugin.js
  var MotionPlugin = class {
    constructor(engine) {
      this.id = "motion";
      this._engine = engine;
    }
    getPlugin(container2) {
      return Promise.resolve(new MotionInstance(container2, this._engine));
    }
    loadOptions(options, source) {
      if (!this.needsPlugin()) {
        return;
      }
      let motionOptions = options.motion;
      if (!motionOptions?.load) {
        options.motion = motionOptions = new Motion();
      }
      motionOptions.load(source?.motion);
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/plugin-motion/browser/index.js
  async function loadMotionPlugin(engine, refresh = true) {
    await engine.addPlugin(new MotionPlugin(engine), refresh);
  }

  // node_modules/@tsparticles/shape-polygon/browser/Utils.js
  var piDeg = 180;
  var origin5 = { x: 0, y: 0 };
  var sidesOffset = 2;
  function drawPolygon(data, start, side) {
    const { context } = data, sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = piDeg * (decimalSides - sidesOffset) / decimalSides, interiorAngle = Math.PI - degToRad(interiorAngleDegrees);
    if (!context) {
      return;
    }
    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(origin5.x, origin5.y);
    for (let i = 0; i < sideCount; i++) {
      context.lineTo(side.length, origin5.y);
      context.translate(side.length, origin5.y);
      context.rotate(interiorAngle);
    }
  }

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
  var defaultSides = 5;
  var PolygonDrawerBase = class {
    draw(data) {
      const { particle, radius } = data, start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius);
      drawPolygon(data, start, side);
    }
    getSidesCount(particle) {
      const polygon = particle.shapeData;
      return Math.round(getRangeValue(polygon?.sides ?? defaultSides));
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js
  var sidesCenterFactor = 3.5;
  var yFactor = 2.66;
  var sidesFactor = 3;
  var PolygonDrawer = class extends PolygonDrawerBase {
    constructor() {
      super(...arguments);
      this.validTypes = ["polygon"];
    }
    getCenter(particle, radius) {
      return {
        x: -radius / (particle.sides / sidesCenterFactor),
        y: -radius / (yFactor / sidesCenterFactor)
      };
    }
    getSidesData(particle, radius) {
      const sides5 = particle.sides;
      return {
        count: {
          denominator: 1,
          numerator: sides5
        },
        length: radius * yFactor / (sides5 / sidesFactor)
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js
  var yFactor2 = 1.66;
  var sides3 = 3;
  var double8 = 2;
  var TriangleDrawer = class extends PolygonDrawerBase {
    constructor() {
      super(...arguments);
      this.validTypes = ["triangle"];
    }
    getCenter(particle, radius) {
      return {
        x: -radius,
        y: radius / yFactor2
      };
    }
    getSidesCount() {
      return sides3;
    }
    getSidesData(particle, radius) {
      const diameter = radius * double8;
      return {
        count: {
          denominator: 2,
          numerator: 3
        },
        length: diameter
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/index.js
  async function loadGenericPolygonShape(engine, refresh = true) {
    await engine.addShape(new PolygonDrawer(), refresh);
  }
  async function loadTriangleShape(engine, refresh = true) {
    await engine.addShape(new TriangleDrawer(), refresh);
  }
  async function loadPolygonShape(engine, refresh = true) {
    await loadGenericPolygonShape(engine, refresh);
    await loadTriangleShape(engine, refresh);
  }

  // node_modules/@tsparticles/updater-roll/browser/RollMode.js
  var RollMode;
  (function(RollMode2) {
    RollMode2["both"] = "both";
    RollMode2["horizontal"] = "horizontal";
    RollMode2["vertical"] = "vertical";
  })(RollMode || (RollMode = {}));

  // node_modules/@tsparticles/updater-roll/browser/Utils.js
  var double9 = 2;
  var doublePI3 = Math.PI * double9;
  var maxAngle2 = 360;
  function initParticle(particle) {
    const rollOpt = particle.options.roll;
    if (!rollOpt?.enable) {
      particle.roll = {
        enable: false,
        horizontal: false,
        vertical: false,
        angle: 0,
        speed: 0
      };
      return;
    }
    particle.roll = {
      enable: rollOpt.enable,
      horizontal: rollOpt.mode === RollMode.horizontal || rollOpt.mode === RollMode.both,
      vertical: rollOpt.mode === RollMode.vertical || rollOpt.mode === RollMode.both,
      angle: getRandom() * doublePI3,
      speed: getRangeValue(rollOpt.speed) / maxAngle2
    };
    if (rollOpt.backColor) {
      particle.backColor = rangeColorToHsl(rollOpt.backColor);
    } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
      const alterType = getRandom() >= halfRandom ? AlterType.darken : AlterType.enlighten;
      particle.roll.alter = {
        type: alterType,
        value: getRangeValue(alterType === AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value)
      };
    } else if (rollOpt.darken.enable) {
      particle.roll.alter = {
        type: AlterType.darken,
        value: getRangeValue(rollOpt.darken.value)
      };
    } else if (rollOpt.enlighten.enable) {
      particle.roll.alter = {
        type: AlterType.enlighten,
        value: getRangeValue(rollOpt.enlighten.value)
      };
    }
  }
  function updateRoll(particle, delta) {
    const roll = particle.options.roll, data = particle.roll;
    if (!data || !roll?.enable) {
      return;
    }
    const speed = data.speed * delta.factor, max = doublePI3;
    data.angle += speed;
    if (data.angle > max) {
      data.angle -= max;
    }
  }

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/RollLight.js
  var RollLight = class {
    constructor() {
      this.enable = false;
      this.value = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.value !== void 0) {
        this.value = setRangeValue(data.value);
      }
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
  var Roll = class {
    constructor() {
      this.darken = new RollLight();
      this.enable = false;
      this.enlighten = new RollLight();
      this.mode = RollMode.vertical;
      this.speed = 25;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.backColor !== void 0) {
        this.backColor = OptionsColor.create(this.backColor, data.backColor);
      }
      this.darken.load(data.darken);
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      this.enlighten.load(data.enlighten);
      if (data.mode !== void 0) {
        this.mode = data.mode;
      }
      if (data.speed !== void 0) {
        this.speed = setRangeValue(data.speed);
      }
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
  var RollUpdater = class {
    getTransformValues(particle) {
      const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
      return {
        a: rollHorizontal ? Math.cos(roll.angle) : void 0,
        d: rollVertical ? Math.sin(roll.angle) : void 0
      };
    }
    init(particle) {
      initParticle(particle);
    }
    isEnabled(particle) {
      const roll = particle.options.roll;
      return !particle.destroyed && !particle.spawning && !!roll?.enable;
    }
    loadOptions(options, ...sources) {
      if (!options.roll) {
        options.roll = new Roll();
      }
      for (const source of sources) {
        options.roll.load(source?.roll);
      }
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateRoll(particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/index.js
  async function loadRollUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("roll", () => {
      return Promise.resolve(new RollUpdater());
    }, refresh);
  }

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js
  var RotateAnimation = class {
    constructor() {
      this.enable = false;
      this.speed = 0;
      this.decay = 0;
      this.sync = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.speed !== void 0) {
        this.speed = setRangeValue(data.speed);
      }
      if (data.decay !== void 0) {
        this.decay = setRangeValue(data.decay);
      }
      if (data.sync !== void 0) {
        this.sync = data.sync;
      }
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
  var Rotate = class extends ValueWithRandom {
    constructor() {
      super();
      this.animation = new RotateAnimation();
      this.direction = RotateDirection.clockwise;
      this.path = false;
      this.value = 0;
    }
    load(data) {
      if (!data) {
        return;
      }
      super.load(data);
      if (data.direction !== void 0) {
        this.direction = data.direction;
      }
      this.animation.load(data.animation);
      if (data.path !== void 0) {
        this.path = data.path;
      }
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
  var double10 = 2;
  var doublePI4 = Math.PI * double10;
  var identity4 = 1;
  var doublePIDeg = 360;
  var RotateUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    init(particle) {
      const rotateOptions = particle.options.rotate;
      if (!rotateOptions) {
        return;
      }
      particle.rotate = {
        enable: rotateOptions.animation.enable,
        value: degToRad(getRangeValue(rotateOptions.value)),
        min: 0,
        max: doublePI4
      };
      particle.pathRotation = rotateOptions.path;
      let rotateDirection = rotateOptions.direction;
      if (rotateDirection === RotateDirection.random) {
        const index = Math.floor(getRandom() * double10), minIndex = 0;
        rotateDirection = index > minIndex ? RotateDirection.counterClockwise : RotateDirection.clockwise;
      }
      switch (rotateDirection) {
        case RotateDirection.counterClockwise:
        case "counterClockwise":
          particle.rotate.status = AnimationStatus.decreasing;
          break;
        case RotateDirection.clockwise:
          particle.rotate.status = AnimationStatus.increasing;
          break;
      }
      const rotateAnimation = rotateOptions.animation;
      if (rotateAnimation.enable) {
        particle.rotate.decay = identity4 - getRangeValue(rotateAnimation.decay);
        particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.container.retina.reduceFactor;
        if (!rotateAnimation.sync) {
          particle.rotate.velocity *= getRandom();
        }
      }
      particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
      const rotate = particle.options.rotate;
      if (!rotate) {
        return false;
      }
      return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
    }
    loadOptions(options, ...sources) {
      if (!options.rotate) {
        options.rotate = new Rotate();
      }
      for (const source of sources) {
        options.rotate.load(source?.rotate);
      }
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      particle.isRotating = !!particle.rotate;
      if (!particle.rotate) {
        return;
      }
      updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
      particle.rotation = particle.rotate.value;
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/index.js
  async function loadRotateUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("rotate", (container2) => {
      return Promise.resolve(new RotateUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/shape-square/browser/Utils.js
  var fixFactorSquared = 2;
  var fixFactor = Math.sqrt(fixFactorSquared);
  var double11 = 2;
  function drawSquare(data) {
    const { context, radius } = data, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double11;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
  }

  // node_modules/@tsparticles/shape-square/browser/SquareDrawer.js
  var sides4 = 4;
  var SquareDrawer = class {
    constructor() {
      this.validTypes = ["edge", "square"];
    }
    draw(data) {
      drawSquare(data);
    }
    getSidesCount() {
      return sides4;
    }
  };

  // node_modules/@tsparticles/shape-square/browser/index.js
  async function loadSquareShape(engine, refresh = true) {
    await engine.addShape(new SquareDrawer(), refresh);
  }

  // node_modules/@tsparticles/shape-star/browser/Utils.js
  var defaultInset = 2;
  var origin6 = { x: 0, y: 0 };
  function drawStar(data) {
    const { context, particle, radius } = data, sides5 = particle.sides, inset = particle.starInset ?? defaultInset;
    context.moveTo(origin6.x, origin6.y - radius);
    for (let i = 0; i < sides5; i++) {
      context.rotate(Math.PI / sides5);
      context.lineTo(origin6.x, origin6.y - radius * inset);
      context.rotate(Math.PI / sides5);
      context.lineTo(origin6.x, origin6.y - radius);
    }
  }

  // node_modules/@tsparticles/shape-star/browser/StarDrawer.js
  var defaultInset2 = 2;
  var defaultSides2 = 5;
  var StarDrawer = class {
    constructor() {
      this.validTypes = ["star"];
    }
    draw(data) {
      drawStar(data);
    }
    getSidesCount(particle) {
      const star = particle.shapeData;
      return Math.round(getRangeValue(star?.sides ?? defaultSides2));
    }
    particleInit(container2, particle) {
      const star = particle.shapeData;
      particle.starInset = getRangeValue(star?.inset ?? defaultInset2);
    }
  };

  // node_modules/@tsparticles/shape-star/browser/index.js
  async function loadStarShape(engine, refresh = true) {
    await engine.addShape(new StarDrawer(), refresh);
  }

  // node_modules/@tsparticles/updater-tilt/browser/TiltDirection.js
  var TiltDirection;
  (function(TiltDirection2) {
    TiltDirection2["clockwise"] = "clockwise";
    TiltDirection2["counterClockwise"] = "counter-clockwise";
    TiltDirection2["random"] = "random";
  })(TiltDirection || (TiltDirection = {}));

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/TiltAnimation.js
  var TiltAnimation = class {
    constructor() {
      this.enable = false;
      this.speed = 0;
      this.decay = 0;
      this.sync = false;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.speed !== void 0) {
        this.speed = setRangeValue(data.speed);
      }
      if (data.decay !== void 0) {
        this.decay = setRangeValue(data.decay);
      }
      if (data.sync !== void 0) {
        this.sync = data.sync;
      }
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
  var Tilt = class extends ValueWithRandom {
    constructor() {
      super();
      this.animation = new TiltAnimation();
      this.direction = TiltDirection.clockwise;
      this.enable = false;
      this.value = 0;
    }
    load(data) {
      super.load(data);
      if (!data) {
        return;
      }
      this.animation.load(data.animation);
      if (data.direction !== void 0) {
        this.direction = data.direction;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
  var identity5 = 1;
  var double12 = 2;
  var doublePI5 = Math.PI * double12;
  var maxAngle3 = 360;
  var TiltUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    getTransformValues(particle) {
      const tilt = particle.tilt?.enable && particle.tilt;
      return {
        b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : void 0,
        c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : void 0
      };
    }
    init(particle) {
      const tiltOptions = particle.options.tilt;
      if (!tiltOptions) {
        return;
      }
      particle.tilt = {
        enable: tiltOptions.enable,
        value: degToRad(getRangeValue(tiltOptions.value)),
        sinDirection: getRandom() >= halfRandom ? identity5 : -identity5,
        cosDirection: getRandom() >= halfRandom ? identity5 : -identity5,
        min: 0,
        max: doublePI5
      };
      let tiltDirection = tiltOptions.direction;
      if (tiltDirection === TiltDirection.random) {
        const index = Math.floor(getRandom() * double12), minIndex = 0;
        tiltDirection = index > minIndex ? TiltDirection.counterClockwise : TiltDirection.clockwise;
      }
      switch (tiltDirection) {
        case TiltDirection.counterClockwise:
        case "counterClockwise":
          particle.tilt.status = AnimationStatus.decreasing;
          break;
        case TiltDirection.clockwise:
          particle.tilt.status = AnimationStatus.increasing;
          break;
      }
      const tiltAnimation = particle.options.tilt?.animation;
      if (tiltAnimation?.enable) {
        particle.tilt.decay = identity5 - getRangeValue(tiltAnimation.decay);
        particle.tilt.velocity = getRangeValue(tiltAnimation.speed) / maxAngle3 * this.container.retina.reduceFactor;
        if (!tiltAnimation.sync) {
          particle.tilt.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const tiltAnimation = particle.options.tilt?.animation;
      return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
    }
    loadOptions(options, ...sources) {
      if (!options.tilt) {
        options.tilt = new Tilt();
      }
      for (const source of sources) {
        options.tilt.load(source?.tilt);
      }
    }
    async update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.tilt) {
        return;
      }
      updateAnimation(particle, particle.tilt, false, DestroyType.none, delta);
      await Promise.resolve();
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/index.js
  async function loadTiltUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("tilt", (container2) => {
      return Promise.resolve(new TiltUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/WobbleSpeed.js
  var WobbleSpeed = class {
    constructor() {
      this.angle = 50;
      this.move = 10;
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.angle !== void 0) {
        this.angle = setRangeValue(data.angle);
      }
      if (data.move !== void 0) {
        this.move = setRangeValue(data.move);
      }
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
  var Wobble = class {
    constructor() {
      this.distance = 5;
      this.enable = false;
      this.speed = new WobbleSpeed();
    }
    load(data) {
      if (!data) {
        return;
      }
      if (data.distance !== void 0) {
        this.distance = setRangeValue(data.distance);
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      if (data.speed !== void 0) {
        if (isNumber(data.speed)) {
          this.speed.load({ angle: data.speed });
        } else {
          const rangeSpeed = data.speed;
          if (rangeSpeed.min !== void 0) {
            this.speed.load({ angle: rangeSpeed });
          } else {
            this.speed.load(data.speed);
          }
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Utils.js
  var defaultDistance = 0;
  var double13 = 2;
  var doublePI6 = Math.PI * double13;
  var distanceFactor = 60;
  function updateWobble(particle, delta) {
    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;
    if (!wobbleOptions?.enable || !wobble) {
      return;
    }
    const angleSpeed = wobble.angleSpeed * delta.factor, moveSpeed = wobble.moveSpeed * delta.factor, distance = moveSpeed * ((particle.retina.wobbleDistance ?? defaultDistance) * delta.factor) / (millisecondsToSeconds / distanceFactor), max = doublePI6, { position } = particle;
    wobble.angle += angleSpeed;
    if (wobble.angle > max) {
      wobble.angle -= max;
    }
    position.x += distance * Math.cos(wobble.angle);
    position.y += distance * Math.abs(Math.sin(wobble.angle));
  }

  // node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
  var double14 = 2;
  var doublePI7 = Math.PI * double14;
  var maxAngle4 = 360;
  var moveSpeedFactor2 = 10;
  var defaultDistance2 = 0;
  var WobbleUpdater = class {
    constructor(container2) {
      this.container = container2;
    }
    init(particle) {
      const wobbleOpt = particle.options.wobble;
      if (wobbleOpt?.enable) {
        particle.wobble = {
          angle: getRandom() * doublePI7,
          angleSpeed: getRangeValue(wobbleOpt.speed.angle) / maxAngle4,
          moveSpeed: getRangeValue(wobbleOpt.speed.move) / moveSpeedFactor2
        };
      } else {
        particle.wobble = {
          angle: 0,
          angleSpeed: 0,
          moveSpeed: 0
        };
      }
      particle.retina.wobbleDistance = getRangeValue(wobbleOpt?.distance ?? defaultDistance2) * this.container.retina.pixelRatio;
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
    }
    loadOptions(options, ...sources) {
      if (!options.wobble) {
        options.wobble = new Wobble();
      }
      for (const source of sources) {
        options.wobble.load(source?.wobble);
      }
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateWobble(particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/index.js
  async function loadWobbleUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("wobble", (container2) => {
      return Promise.resolve(new WobbleUpdater(container2));
    }, refresh);
  }

  // node_modules/@tsparticles/confetti/browser/confetti.js
  var defaultGravity = 9.81;
  var sizeFactor = 5;
  var speedFactor = 3;
  var decayOffset = 1;
  var disableRotate = 0;
  var disableTilt = 0;
  var initialized = false;
  var initializing = false;
  var ids = /* @__PURE__ */ new Map();
  async function initPlugins(engine) {
    if (initialized) {
      return;
    }
    if (initializing) {
      return new Promise((resolve) => {
        const timeout = 100, interval = setInterval(() => {
          if (!initialized) {
            return;
          }
          clearInterval(interval);
          resolve();
        }, timeout);
      });
    }
    initializing = true;
    await loadEmittersPlugin(engine, false);
    await loadMotionPlugin(engine, false);
    await loadCardsShape(engine, false);
    await loadHeartShape(engine, false);
    await loadImageShape(engine, false);
    await loadPolygonShape(engine, false);
    await loadSquareShape(engine, false);
    await loadStarShape(engine, false);
    await loadEmojiShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadLifeUpdater(engine, false);
    await loadRollUpdater(engine, false);
    await loadTiltUpdater(engine, false);
    await loadWobbleUpdater(engine, false);
    await loadBasic(engine);
    initializing = false;
    initialized = true;
  }
  async function setConfetti(params) {
    const actualOptions = new ConfettiOptions();
    actualOptions.load(params.options);
    let container2;
    const fpsLimit = 120, fpsLimitFactor = 3.6, opacitySpeed = actualOptions.ticks * millisecondsToSeconds / (fpsLimitFactor * millisecondsToSeconds * fpsLimit);
    if (ids.has(params.id)) {
      container2 = ids.get(params.id);
      if (container2 && !container2.destroyed) {
        const alias = container2;
        if (alias.addEmitter) {
          await alias.addEmitter({
            startCount: actualOptions.count,
            position: actualOptions.position,
            size: {
              width: 0,
              height: 0
            },
            rate: {
              delay: 0,
              quantity: 0
            },
            life: {
              duration: 0.1,
              count: 1
            },
            particles: {
              color: {
                value: actualOptions.colors
              },
              shape: {
                type: actualOptions.shapes,
                options: actualOptions.shapeOptions
              },
              life: {
                count: 1
              },
              opacity: {
                value: { min: 0, max: 1 },
                animation: {
                  enable: true,
                  sync: true,
                  speed: opacitySpeed,
                  startValue: "max",
                  destroy: "min"
                }
              },
              size: {
                value: sizeFactor * actualOptions.scalar
              },
              move: {
                angle: {
                  value: actualOptions.spread,
                  offset: 0
                },
                drift: {
                  min: -actualOptions.drift,
                  max: actualOptions.drift
                },
                gravity: {
                  acceleration: actualOptions.gravity * defaultGravity
                },
                speed: actualOptions.startVelocity * speedFactor,
                decay: decayOffset - actualOptions.decay,
                direction: -actualOptions.angle
              },
              rotate: {
                value: actualOptions.flat ? disableRotate : {
                  min: 0,
                  max: 360
                },
                direction: "random",
                animation: {
                  enable: !actualOptions.flat,
                  speed: 60
                }
              },
              tilt: {
                direction: "random",
                enable: !actualOptions.flat,
                value: actualOptions.flat ? disableTilt : {
                  min: 0,
                  max: 360
                },
                animation: {
                  enable: true,
                  speed: 60
                }
              },
              roll: {
                darken: {
                  enable: true,
                  value: 25
                },
                enable: !actualOptions.flat,
                speed: {
                  min: 15,
                  max: 25
                }
              },
              wobble: {
                distance: 30,
                enable: !actualOptions.flat,
                speed: {
                  min: -15,
                  max: 15
                }
              }
            }
          });
          return;
        }
      }
    }
    const particlesOptions = {
      fullScreen: {
        enable: !params.canvas,
        zIndex: actualOptions.zIndex
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 0
        },
        color: {
          value: actualOptions.colors
        },
        shape: {
          type: actualOptions.shapes,
          options: actualOptions.shapeOptions
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            sync: true,
            speed: opacitySpeed,
            startValue: "max",
            destroy: "min"
          }
        },
        size: {
          value: sizeFactor * actualOptions.scalar
        },
        links: {
          enable: false
        },
        life: {
          count: 1
        },
        move: {
          angle: {
            value: actualOptions.spread,
            offset: 0
          },
          drift: {
            min: -actualOptions.drift,
            max: actualOptions.drift
          },
          enable: true,
          gravity: {
            enable: true,
            acceleration: actualOptions.gravity * defaultGravity
          },
          speed: actualOptions.startVelocity * speedFactor,
          decay: decayOffset - actualOptions.decay,
          direction: -actualOptions.angle,
          random: true,
          straight: false,
          outModes: {
            default: "none",
            bottom: "destroy"
          }
        },
        rotate: {
          value: actualOptions.flat ? disableRotate : {
            min: 0,
            max: 360
          },
          direction: "random",
          animation: {
            enable: !actualOptions.flat,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: !actualOptions.flat,
          value: actualOptions.flat ? disableTilt : {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: !actualOptions.flat,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: !actualOptions.flat,
          speed: {
            min: -15,
            max: 15
          }
        }
      },
      detectRetina: true,
      motion: {
        disable: actualOptions.disableForReducedMotion
      },
      emitters: {
        name: "confetti",
        startCount: actualOptions.count,
        position: actualOptions.position,
        size: {
          width: 0,
          height: 0
        },
        rate: {
          delay: 0,
          quantity: 0
        },
        life: {
          duration: 0.1,
          count: 1
        }
      }
    };
    container2 = await tsParticles.load({ id: params.id, element: params.canvas, options: particlesOptions });
    ids.set(params.id, container2);
    return container2;
  }
  async function confetti(idOrOptions, confettiOptions) {
    await initPlugins(tsParticles);
    let options;
    let id;
    if (isString(idOrOptions)) {
      id = idOrOptions;
      options = confettiOptions ?? {};
    } else {
      id = "confetti";
      options = idOrOptions;
    }
    return setConfetti({
      id,
      options
    });
  }
  confetti.create = async (canvas, options) => {
    if (!canvas) {
      return confetti;
    }
    await initPlugins(tsParticles);
    const id = canvas.getAttribute("id") ?? "confetti";
    canvas.setAttribute("id", id);
    return async (idOrOptions, confettiOptions) => {
      let subOptions;
      let subId;
      if (isString(idOrOptions)) {
        subId = idOrOptions;
        subOptions = confettiOptions ?? options;
      } else {
        subId = id;
        subOptions = idOrOptions;
      }
      return setConfetti({
        id: subId,
        canvas,
        options: subOptions
      });
    };
  };
  confetti.init = async () => {
    await initPlugins(tsParticles);
  };
  confetti.version = tsParticles.version;
  if (!isSsr()) {
    window.confetti = confetti;
  }

  // src/contents.tsx
  var import_react5 = __toESM(require_react(), 1);

  // import("../sounds/**/*/**/*.mp3") in src/contents.tsx
  var globImport_sounds_mp3 = __glob({
    "../sounds/custom/vineboom/check.mp3": () => Promise.resolve().then(() => __toESM(require_check())),
    "../sounds/djkhaled/all.mp3": () => Promise.resolve().then(() => __toESM(require_all())),
    "../sounds/djkhaled/check.mp3": () => Promise.resolve().then(() => __toESM(require_check2())),
    "../sounds/doorbell/all.mp3": () => Promise.resolve().then(() => __toESM(require_all2())),
    "../sounds/doorbell/check.mp3": () => Promise.resolve().then(() => __toESM(require_check3())),
    "../sounds/doorbell/uncheck.mp3": () => Promise.resolve().then(() => __toESM(require_uncheck()))
  });

  // src/contents.tsx
  var InputField = (0, import_react4.memo)(({ effects, idx, task, tasks, setTasks, moreLineSpace }) => {
    const [newInputIdx, setNewInputIdx] = useLocalStorage("new-input-idx", -1);
    const [rerender, setRerender] = (0, import_react4.useState)(false);
    const textareaRef = (0, import_react4.useRef)(null);
    const mirrorRef = (0, import_react4.useRef)(null);
    (0, import_react4.useEffect)(() => {
      handleOnChange(textareaRef.current, idx);
      if (idx === newInputIdx) {
        textareaRef.current?.focus();
      }
      if (!rerender) setRerender(true);
    });
    const handleTaskInput = (0, import_react4.useCallback)((e, idx2) => {
      let target = e.target;
      let currentRow = 0;
      const atStart = document.activeElement?.selectionEnd === 0;
      if (mirrorRef.current) {
        mirrorRef.current.style.whiteSpace = "normal";
        mirrorRef.current.style.padding = target.style.padding;
        mirrorRef.current.style.width = target.clientWidth + "px";
        mirrorRef.current.style.fontFamily = target.style.fontFamily;
        mirrorRef.current.style.fontSize = target.style.fontSize;
        mirrorRef.current.style.lineHeight = target.style.lineHeight;
        let prefix = target.value.substring(0, target.selectionEnd);
        mirrorRef.current.textContent = prefix;
        let remainingText = target.value.substring(target.selectionEnd, target.value.length);
        let breakIndex = remainingText.indexOf(" ") !== -1 ? remainingText.indexOf(" ") : remainingText.indexOf("\n");
        if (breakIndex !== -1) {
          let computedRowToCurrPosition = Math.ceil(mirrorRef.current.clientHeight / parseFloat(window.getComputedStyle(mirrorRef.current).lineHeight)) - 1;
          mirrorRef.current.textContent += `${remainingText.substring(0, breakIndex)}`;
          let computedRowWithFullWordAttached = Math.ceil(mirrorRef.current.clientHeight / parseFloat(window.getComputedStyle(mirrorRef.current).lineHeight)) - 1;
          mirrorRef.current.textContent = `${target.value.substring(0, target.selectionEnd)}`;
          if (computedRowWithFullWordAttached > computedRowToCurrPosition) {
            mirrorRef.current.innerHTML = `${target.value.substring(0, prefix.lastIndexOf(" "))}<br>${target.value.substring(prefix.lastIndexOf(" "), target.selectionEnd)}`;
          }
        }
        currentRow = Math.floor(mirrorRef.current.clientHeight / parseFloat(window.getComputedStyle(mirrorRef.current).lineHeight)) - 1;
      }
      if (e.key == "Enter") {
        e.preventDefault();
        if (atStart && target.value !== "") {
          setTasks([...tasks.slice(0, idx2), { name: "", done: false }, { name: target.value, done: target.previousElementSibling.checked }, ...tasks.slice(idx2 + 1)]);
        } else {
          setTasks([...tasks.slice(0, idx2), { name: target.value.substring(0, target.selectionEnd), done: target.previousElementSibling.checked }, { name: target.value.substring(target.selectionEnd), done: false }, ...tasks.slice(idx2 + 1)]);
        }
        setNewInputIdx(atStart && target.value !== "" ? idx2 : idx2 + 1);
      } else if (tasks.length > 1 && (e.key === "Backspace" && atStart && tasks.length !== 0 || e.key === "Delete" && document.activeElement.selectionStart === target.value.length && idx2 !== tasks.length - 1)) {
        e.preventDefault();
        if (e.key === "Backspace" && idx2 > 0 || e.key === "Delete" && idx2 === tasks.length - 1) {
          const prevEl = target.parentElement.previousElementSibling;
          const textArea = prevEl.children[1];
          textArea.focus();
          const activeElement = document.activeElement;
          const length = activeElement.value.length;
          setTimeout(() => activeElement.setSelectionRange(length, length), 0);
          setTasks([...tasks.slice(0, idx2 - 1), { name: textArea.value + target.value, done: prevEl.children[0].checked }, ...tasks.splice(idx2 + 1)]);
        } else if (e.key === "Delete" && idx2 < tasks.length - 1 || e.key === "Backspace" && idx2 === 0) {
          const nextEl = target.parentElement.nextElementSibling;
          const textArea = nextEl.children[1];
          setTasks([...tasks.slice(0, idx2), { name: target.value + textArea.value, done: task.done }, ...tasks.splice(idx2 + 2)]);
        }
      } else if (e.key === "ArrowLeft" && target.selectionStart === 0) {
        target.parentElement.previousElementSibling?.children[1]?.focus();
        const activeElement = document.activeElement;
        setTimeout(() => activeElement.setSelectionRange(activeElement.value.length, activeElement.value.length), 0);
      } else if (e.key === "ArrowRight" && target.selectionEnd === target.value.length) {
        target.parentElement.nextElementSibling?.children[1]?.focus();
        setTimeout(() => document.activeElement.setSelectionRange(0, 0), 0);
      } else if (e.key === "ArrowUp" && currentRow <= 0) {
        e.preventDefault();
        target.parentElement.previousElementSibling?.children[1]?.focus();
        document.activeElement.setSelectionRange(0, 0);
      } else if (e.key === "ArrowDown" && Math.max(0, currentRow) >= Math.floor(target.clientHeight / parseFloat(window.getComputedStyle(target).lineHeight)) - 1) {
        e.preventDefault();
        target.parentElement.nextElementSibling?.children[1]?.focus();
        document.activeElement.setSelectionRange(0, 0);
      }
    }, [tasks, setTasks]);
    const handleOnChange = (0, import_react4.useCallback)((e, idx2) => {
      e.style.height = "";
      e.style.height = e.scrollHeight + "px";
      setTasks(tasks.map((el, i) => i !== idx2 ? el : { ...el, name: e.value }));
      setNewInputIdx(-1);
    }, [tasks, setTasks]);
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: `flex ${moreLineSpace ? "items-center" : "pt-1"} text-[15px]` }, /* @__PURE__ */ import_react5.default.createElement("input", { type: "checkbox", checked: task.done, onChange: (e) => {
      effects(e, idx);
    } }), /* @__PURE__ */ import_react5.default.createElement(
      "textarea",
      {
        ref: textareaRef,
        className: `outline-none bg-transparent resize-none ml-[7px] inline font-normal break-words transition w-full ${task.done ? " line-through italic" : ""} pr-3 ${moreLineSpace ? "min-h-7 mt-2" : "border-none leading-5 mt-px"}`,
        rows: 1,
        onChange: (e) => handleOnChange(e.target, idx),
        onKeyDown: (e) => handleTaskInput(e, idx),
        value: task.name,
        spellCheck: "false"
      }
    ), /* @__PURE__ */ import_react5.default.createElement("div", { className: "break-words p-1 absolute z-10 left-0 top-0 pointer-events-none opacity-0", ref: mirrorRef }));
  });
  var Content = ({ dayReset, soundEnabled, sound, customSound, confettiEnabled, moreLineSpace, headerRef }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", [{ name: "Heres a starter task.", done: false }]);
    const [date, setDate] = useLocalStorage("date", getDate());
    const contentRef = (0, import_react4.useRef)(null);
    const [rerender, setRerender] = (0, import_react4.useState)(false);
    (0, import_react4.useEffect)(() => {
      if (getDate() !== date && dayReset === true) {
        let count = 0;
        let clone = [...tasks];
        while (clone[count]) {
          clone[count]["done"] = false;
          count++;
        }
        setTasks(clone);
      }
      setDate(getDate());
    }, []);
    const effects = (0, import_react4.useCallback)(async (e, idx) => {
      setTasks(tasks.map((el, i) => i !== idx ? el : { ...el, done: e.target.checked }));
      let tempTasks = tasks.map((el, i) => i !== idx ? el : { ...el, done: e.target.checked });
      let eventType = e.target.checked ? tempTasks.every((element) => element.done) ? "all" : "check" : "uncheck";
      if (soundEnabled) {
        let soundPreset = sound.toLowerCase().replace(" ", "");
        try {
          const audioPath = await globImport_sounds_mp3(`../sounds/${soundPreset}/${sound === "Custom" ? `${customSound}/` : ""}${eventType}.mp3`);
          console.log(audioPath, `../../sounds/${soundPreset}/${sound === "Custom" ? `${customSound}/` : ""}${eventType}.mp3`);
          new Audio(audioPath).play();
        } catch (err) {
          console.log("Audio not found.", err);
        }
      }
      if (confettiEnabled) {
        if (eventType === "check") {
          let fire = function(particleRatio, opts) {
            confetti(
              Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
              })
            );
          };
          let count = 200, defaults = {
            origin: { y: 0.7 }
          };
          fire(0.25, {
            spread: 26,
            startVelocity: 55
          });
          fire(0.2, {
            spread: 60
          });
          fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
          });
          fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
          });
          fire(0.1, {
            spread: 120,
            startVelocity: 45
          });
        } else if (eventType === "all") {
          let randomInRange2 = function(min, max) {
            return Math.random() * (max - min) + min;
          };
          const duration = 15 * 1e3, animationEnd = Date.now() + duration, defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
          let interval = setInterval(function() {
            let timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
              return clearInterval(interval);
            }
            let particleCount = 50 * (timeLeft / duration);
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange2(0.1, 0.3), y: Math.random() - 0.2 }
              })
            );
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange2(0.7, 0.9), y: Math.random() - 0.2 }
              })
            );
          }, 250);
        }
      }
    }, [setTasks, tasks, soundEnabled, sound, customSound, confettiEnabled]);
    (0, import_react4.useEffect)(() => {
      if (!rerender) setRerender(true);
    });
    const handleResizer = () => {
      let header = headerRef.current;
      let content = contentRef.current;
      let height = header.offsetHeight + content.offsetHeight + 10;
      let width = window.outerWidth;
      window.resizeTo(width, height);
    };
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: "px-[5px] pt-[5px] pb-3", ref: contentRef }, /* @__PURE__ */ import_react5.default.createElement("ul", { className: "mt-2" }, tasks.map((task, idx) => {
      return /* @__PURE__ */ import_react5.default.createElement(InputField, { effects, idx, task, tasks, setTasks, moreLineSpace, key: idx });
    })), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex w-full" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "resizer bottom-[-32px] right-[-32px] size-14 z-[2] fixed rotate-45 transition-shadow duration-[400ms]", onClick: handleResizer })));
  };
  var contents_default = Content;

  // src/App.tsx
  var COLORS = ["yellow", "green", "pink", "purple", "blue"];
  var Main = () => {
    const [dayReset, setDayReset] = useLocalStorage("dayreset", true);
    const [currColorIdx, setCurrColorIdx] = useLocalStorage("coloridx", 0);
    const [soundEnabled, setSoundEnabled] = useLocalStorage("soundenabled", true);
    const [sound, setSound] = useLocalStorage("sound", "doorbell");
    const [customSound, setCustomSound] = useLocalStorage("customsound", "");
    const [confettiEnabled, setConfettiEnabled] = useLocalStorage("confettienabled", true);
    const [moreLineSpace, setMoreLineSpace] = useLocalStorage("morelinespace", false);
    const [windowSize, setWindowSize] = useLocalStorage("windowsize", [500, 500]);
    const [position, setPosition] = useLocalStorage("position", [0, 0]);
    const headerRef = (0, import_react6.useRef)(null);
    (0, import_react6.useEffect)(() => {
      window.resizeTo(windowSize[0], windowSize[1]);
      window.moveTo(position[0], position[1]);
      setInterval(function() {
        if ((position[0] !== window.screenX || position[1] !== window.screenY) && window) {
          setPosition([window.screenX, window.screenY]);
        }
      }, 1e3);
      window.addEventListener("resize", () => {
        setWindowSize([window.outerWidth, window.outerHeight]);
        setPosition(position);
      });
    }, []);
    const handleColorChange = (0, import_react6.useCallback)((colorIdx) => {
      if (colorIdx == COLORS.length - 1)
        setCurrColorIdx(0);
      else
        setCurrColorIdx(colorIdx + 1);
    }, [setCurrColorIdx]);
    return /* @__PURE__ */ import_react7.default.createElement("div", { id: "react-body", className: `${COLORS[currColorIdx]} font-body mr-0 min-h-full min-w-full absolute` }, /* @__PURE__ */ import_react7.default.createElement("div", { id: "main-content" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "h-10 w-full" }), /* @__PURE__ */ import_react7.default.createElement(HashRouter, null, /* @__PURE__ */ import_react7.default.createElement(header_default, { onColorChange: () => handleColorChange(currColorIdx), ref: headerRef }), /* @__PURE__ */ import_react7.default.createElement(Routes, null, /* @__PURE__ */ import_react7.default.createElement(
      Route,
      {
        path: "*",
        element: /* @__PURE__ */ import_react7.default.createElement(
          contents_default,
          {
            dayReset,
            soundEnabled,
            sound,
            customSound,
            confettiEnabled,
            moreLineSpace,
            headerRef
          }
        )
      }
    ), /* @__PURE__ */ import_react7.default.createElement(
      Route,
      {
        path: "/settings",
        element: /* @__PURE__ */ import_react7.default.createElement(
          settings_default,
          {
            dayReset,
            setDayReset,
            soundEnabled,
            setSoundEnabled,
            sound,
            setSound,
            customSound,
            setCustomSound,
            confettiEnabled,
            setConfettiEnabled,
            moreLineSpace,
            setMoreLineSpace
          }
        )
      }
    )))));
  };
  function App() {
    return /* @__PURE__ */ import_react7.default.createElement(Main, null);
  }

  // src/index.tsx
  var import_react8 = __toESM(require_react(), 1);
  var container = document.getElementById("root");
  var root = (0, import_client.createRoot)(container);
  root.render(/* @__PURE__ */ import_react8.default.createElement(App, null));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.21.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.28.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.28.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

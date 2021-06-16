webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();





var Header = function Header() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]),
      isLogin = _useContext.isLogin,
      handleSignout = _useContext.handleSignout;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 64
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 40
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, _this), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      onClick: handleSignout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 75
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 143
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 123
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 100
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, _this);
};

_s(Header, "UCm6F8xsARN5Xa9niMLWC32y9q0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/HeaderBar.js":
/*!*********************************!*\
  !*** ./components/HeaderBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\HeaderBar.js",
    _this = undefined,
    _s = $RefreshSig$();





var HeaderBar = function HeaderBar() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]),
      isLogin = _useContext.isLogin;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header-bar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 64
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 40
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, _this), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 53
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 33
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 88
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 83
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, _this);
};

_s(HeaderBar, "O2g1OwLCjW8V//6KrsuMwJRDwDU=");

_c = HeaderBar;
/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

var _c;

$RefreshReg$(_c, "HeaderBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderBar */ "./components/HeaderBar.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");



var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\Layout.js",
    _this = undefined;








var Layout = function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].apps.length === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, _this), props.children]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/context/AuthContext.js":
/*!*******************************************!*\
  !*** ./components/context/AuthContext.js ***!
  \*******************************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var AuthContextProvider = function AuthContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLogin = _useState[0],
      setisLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      sessionToken = _useState2[0],
      setSessionToken = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: ''
    }
  }),
      signup = _useState3[0],
      setSignup = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    formErrors: {
      email: ''
    }
  }),
      resetPassword = _useState4[0],
      setResetPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  }),
      login = _useState5[0],
      setLogin = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticate = _useState6[0],
      setAuthenticate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticating = _useState7[0],
      setAuthenticating = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      error = _useState8[0],
      setError = _useState8[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    message: '',
    token: '',
    user: {
      email: '',
      firstName: '',
      fullName: '',
      lastName: '',
      role: '',
      _id: ''
    }
  }),
      success = _useState9[0],
      setSuccess = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].onAuthStateChanged(function (user) {
      user == null ? setisLogin(false) : setisLogin(true);
    });
  }, []);

  var handleLoginChange = function handleLoginChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    var formErrors = login.formErrors;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["loginValidate"])(name, value, formErrors);

    var newLogin = _objectSpread(_objectSpread({}, login), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value));

    return setLogin(newLogin);
  };

  var handleSignupChange = function handleSignupChange(e) {
    var _signup = _objectSpread({}, signup),
        formErrors = _signup.formErrors;

    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["singupValidate"])(name, value, formErrors);

    var newSignup = _objectSpread(_objectSpread({}, signup), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value));

    return setSignup(newSignup);
  };

  var handleSignupSubmit = /*#__PURE__*/function () {
    var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var firstName, lastName, email, phoneNumber, password;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              firstName = signup.firstName, lastName = signup.lastName, email = signup.email, phoneNumber = signup.phoneNumber, password = signup.password;
              _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].createUserWithEmailAndPassword(email, password).then(function (cred) {
                return _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
                  phoneNumber: phoneNumber,
                  email: email,
                  firstName: firstName,
                  lastName: lastName
                });
              }).then(function () {
                setisLogin(true);
                router.replace('dashboard');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSignupSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleAdminSignUp = function handleAdminSignUp(e) {
    e.preventDefault();
    var firstName = signup.firstName,
        lastName = signup.lastName,
        email = signup.email,
        phoneNumber = signup.phoneNumber,
        password = signup.password;
    var addAdminRole = _firebase__WEBPACK_IMPORTED_MODULE_7__["functions"].httpsCallable('addAdminRole');
    addAdminRole(email).then(function (cred) {
      console.log(cred);
    }); // auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    //   return database.collection('Profile').doc(cred.user.uid).set({
    //     phoneNumber, email, firstName, lastName
    //   })}
    // ).then(()=>{
    //   setisLogin(true);
    //   router.replace('dashboard');
    // } )
  };

  var handleSignout = function handleSignout(e) {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signOut().then(function () {// Sign-out successful.
    })["catch"](function (error) {// An error happened.
    });
  };

  var passwordReset = function passwordReset(e) {
    e.preventDefault();
    var email = resetPassword.email;
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].sendPasswordResetEmail(email).then(function () {})["catch"](function (error) {
      setError(error.message);
    });
  };

  var handlePasswordChange = function handlePasswordChange(e) {
    e.preventDefault();
    var _e$target3 = e.target,
        name = _e$target3.name,
        value = _e$target3.value;
    var formErrors = resetPassword.formErrors;
    var emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
    setResetPassword(_objectSpread(_objectSpread({}, resetPassword), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
  };

  var handleSocialLogin = function handleSocialLogin(e) {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
      console.log(user.displayName.split(" "));
      user && user.uid && setLogin(true);
      console.log(user); // ...
    })["catch"](function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    });
  };

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("mounted");
    setAuthenticating(true);
    var email = login.email,
        password = login.password;
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithEmailAndPassword(email, password).then(function () {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      sessionToken: sessionToken,
      setSessionToken: setSessionToken,
      passwordReset: passwordReset,
      resetPassword: resetPassword,
      handlePasswordChange: handlePasswordChange,
      login: login,
      signup: signup,
      isLogin: isLogin,
      setisLogin: setisLogin,
      handleLoginChange: handleLoginChange,
      handleSocialLogin: handleSocialLogin,
      handleSignupChange: handleSignupChange,
      handleAdminSignUp: handleAdminSignUp,
      handleSignout: handleSignout,
      handleSignupSubmit: handleSignupSubmit,
      handleLoginSubmit: handleLoginSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 9
  }, _this);
};

_s(AuthContextProvider, "EdBAzS+BqKv21X+Odxbfal1XyT4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = AuthContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

var _c;

$RefreshReg$(_c, "AuthContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzTG9naW4iLCJoYW5kbGVTaWdub3V0IiwiSGVhZGVyQmFyIiwiTGF5b3V0IiwicHJvcHMiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwidXNlU3RhdGUiLCJzZXRpc0xvZ2luIiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2lnbnVwIiwic2V0U2lnbnVwIiwicmVzZXRQYXNzd29yZCIsInNldFJlc2V0UGFzc3dvcmQiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRlIiwic2V0QXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiaGFuZGxlTG9naW5DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibG9naW5WYWxpZGF0ZSIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJjcmVkIiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwicmVwbGFjZSIsImhhbmRsZUFkbWluU2lnblVwIiwiYWRkQWRtaW5Sb2xlIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJzaWduT3V0IiwicGFzc3dvcmRSZXNldCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImRpc3BsYXlOYW1lIiwic3BsaXQiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlTG9naW5TdWJtaXQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxvQkFDY0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FEeEI7QUFBQSxNQUNaQyxPQURZLGVBQ1pBLE9BRFk7QUFBQSxNQUNIQyxhQURHLGVBQ0hBLGFBREc7O0FBR2pCLHNCQUNRO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQXNCLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFlBQVg7QUFBQSwrQkFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0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SSxDQUl4QlIsS0FKd0I7QUFBQSxRQUlqQkUsUUFKaUIsR0FJSk0sS0FKSSxDQUlqQk4sUUFKaUI7QUFLL0J5QixrREFBSSxDQUFDZ0QsMEJBQUwsQ0FBZ0MzRSxLQUFoQyxFQUF1Q0UsUUFBdkMsRUFBaUR3QyxJQUFqRCxDQUFzRCxZQUFJO0FBQzFEL0MsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXFCLFlBQU0sQ0FBQ2lDLE9BQVAsQ0FBZSxXQUFmO0FBQ0csS0FISDtBQUlELEdBVEQ7O0FBZUUsc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUNyRCxrQkFBWSxFQUFaQSxZQUFEO0FBQWVDLHFCQUFlLEVBQWZBLGVBQWY7QUFBZ0M0RCxtQkFBYSxFQUFiQSxhQUFoQztBQUErQ25ELG1CQUFhLEVBQWJBLGFBQS9DO0FBQThEcUQsMEJBQW9CLEVBQXBCQSxvQkFBOUQ7QUFBb0ZuRCxXQUFLLEVBQUxBLEtBQXBGO0FBQTJGSixZQUFNLEVBQU5BLE1BQTNGO0FBQW1HckIsYUFBTyxFQUFQQSxPQUFuRztBQUE0R1ksZ0JBQVUsRUFBVkEsVUFBNUc7QUFBd0hrQyx1QkFBaUIsRUFBakJBLGlCQUF4SDtBQUEySWtDLHVCQUFpQixFQUFqQkEsaUJBQTNJO0FBQThKM0Isd0JBQWtCLEVBQWxCQSxrQkFBOUo7QUFBa0xjLHVCQUFpQixFQUFqQkEsaUJBQWxMO0FBQXFNbEUsbUJBQWEsRUFBYkEsYUFBck07QUFBb051RCx3QkFBa0IsRUFBbEJBLGtCQUFwTjtBQUF3T21DLHVCQUFpQixFQUFqQkE7QUFBeE8sS0FBN0I7QUFBQSxjQUNLdkYsS0FBSyxDQUFDSTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBOUtEOztHQUFNRSxtQjtVQXNDZXdCLHFEOzs7S0F0Q2Z4QixtQjtBQWdMU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZTgxZWNhY2VkZWUyM2M2NGRmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7aXNMb2dpbiwgaGFuZGxlU2lnbm91dH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhPkc0IGxvZ2lzdGljczwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAge2lzTG9naW4/IDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIiBvbkNsaWNrPXtoYW5kbGVTaWdub3V0fT48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT4gbG9naW48L2E+PC9MaW5rPjwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgSGVhZGVyQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGE+RzQgbG9naXN0aWNzPC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICB7aXNMb2dpbj8gPGRpdj48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+IGxvZ2luPC9hPjwvTGluaz48L2Rpdj4gOiAgPGRpdj48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFyOyIsIiBpbXBvcnQgUmVxdWVzdENvbnRleHRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG4gaW1wb3J0IEF1dGhDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBDbGllbnRDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQgSGVhZGVyQmFyIGZyb20gJy4vSGVhZGVyQmFyJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAxKSAmJiBcclxuICAgICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8UmVxdWVzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8Q2xpZW50Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckJhciAvPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ2xpZW50Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGUsIHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UsIHByb3ZpZGVyLCBmdW5jdGlvbnMgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7IFxyXG4gICAgY29uc3QgW3NpZ251cCwgc2V0U2lnbnVwXSA9IHVzZVN0YXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzZXRQYXNzd29yZCwgc2V0UmVzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0ZSwgc2V0QXV0aGVudGljYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0aW5nLCBzZXRBdXRoZW50aWNhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICB1c2VyOiB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgX2lkOiAnJ30gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgdXNlciA9PSBudWxsID8gc2V0aXNMb2dpbihmYWxzZSkgOiBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSBsb2dpbjtcclxuICAgICAgICBsb2dpblZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgbGV0IG5ld0xvZ2luID0geyAuLi5sb2dpbiwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICBsZXQgbmV3U2lnbnVwID0geyAuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT57XHJcbiAgICAgICAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlciwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWVcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZG1pblNpZ25VcCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICBjb25zdCBhZGRBZG1pblJvbGUgPSBmdW5jdGlvbnMuaHR0cHNDYWxsYWJsZSgnYWRkQWRtaW5Sb2xlJyk7XHJcbiAgICAgIGFkZEFkbWluUm9sZShlbWFpbCkudGhlbihjcmVkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVkKTtcclxuICAgICAgfSlcclxuICAgICAgLy8gYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT57XHJcbiAgICAgIC8vICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgLy8gICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAvLyAgIH0pfVxyXG4gICAgICAvLyApLnRoZW4oKCk9PntcclxuICAgICAgLy8gICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAvLyAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgLy8gfSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgcGFzc3dvcmRSZXNldCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7ZW1haWx9PSByZXNldFBhc3N3b3JkO1xyXG4gICAgYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpPT4ge30pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gcmVzZXRQYXNzd29yZDtcclxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSBSZWdFeHAoIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pO1xyXG4gICAgZm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG4gICAgc2V0UmVzZXRQYXNzd29yZCh7Li4ucmVzZXRQYXNzd29yZCwgW25hbWVdOiB2YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU29jaWFsTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAvKiogQHR5cGUge2ZpcmViYXNlLmF1dGguT0F1dGhDcmVkZW50aWFsfSAqL1xyXG4gICAgICB2YXIgY3JlZGVudGlhbCA9IHJlc3VsdC5jcmVkZW50aWFsO1xyXG4gICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgdmFyIHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIuZGlzcGxheU5hbWUuc3BsaXQoXCIgXCIpKVxyXG4gICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHNldExvZ2luKHRydWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cclxuICAgICAgdmFyIGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cclxuICAgICAgdmFyIGNyZWRlbnRpYWwgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAvLyAuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xyXG4gICAgc2V0QXV0aGVudGljYXRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkIH0gPSBsb2dpbjtcclxuICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpPT57XHJcbiAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICB9KVxyXG4gIH07IFxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuLCBwYXNzd29yZFJlc2V0LCByZXNldFBhc3N3b3JkLCBoYW5kbGVQYXNzd29yZENoYW5nZSwgbG9naW4sIHNpZ251cCwgaXNMb2dpbiwgc2V0aXNMb2dpbiwgaGFuZGxlTG9naW5DaGFuZ2UsIGhhbmRsZVNvY2lhbExvZ2luLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZUFkbWluU2lnblVwLCBoYW5kbGVTaWdub3V0LCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
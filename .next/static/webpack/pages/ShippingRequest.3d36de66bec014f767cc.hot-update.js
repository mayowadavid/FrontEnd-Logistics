webpackHotUpdate_N_E("pages/ShippingRequest",{

/***/ "./components/AdminRequest/BottomButton.js":
/*!*************************************************!*\
  !*** ./components/AdminRequest/BottomButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\AdminRequest\\BottomButton.js",
    _this = undefined,
    _s = $RefreshSig$();





var BottomButton = function BottomButton() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      selector = _useContext.selector;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bottom-button",
    children: selector.map(function (_ref) {
      var content = _ref.content,
          icon = _ref.icon,
          title = _ref.title,
          id = _ref.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/".concat(content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "side-holder",
            children: [icon, " ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 52
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 48
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_s(BottomButton, "x1n6lAe9edAmjYnMdikEcX2/VNc=");

_c = BottomButton;
/* harmony default export */ __webpack_exports__["default"] = (BottomButton);

var _c;

$RefreshReg$(_c, "BottomButton");

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

/***/ }),

/***/ "./components/AdminRequest/DynamicBottom.js":
/*!**************************************************!*\
  !*** ./components/AdminRequest/DynamicBottom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\AdminRequest\\DynamicBottom.js",
    _this = undefined,
    _s = $RefreshSig$();





var DynamicBottom = function DynamicBottom() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      selector = _useContext.selector;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "dynamic-bottom",
    children: selector.map(function (_ref) {
      var content = _ref.content,
          icon = _ref.icon,
          title = _ref.title,
          id = _ref.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/".concat(content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "side-holder",
            children: [icon, " ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 52
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 48
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_s(DynamicBottom, "x1n6lAe9edAmjYnMdikEcX2/VNc=");

_c = DynamicBottom;
/* harmony default export */ __webpack_exports__["default"] = (DynamicBottom);

var _c;

$RefreshReg$(_c, "DynamicBottom");

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

/***/ }),

/***/ "./components/AdminRequest/sideButton.js":
/*!***********************************************!*\
  !*** ./components/AdminRequest/sideButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\AdminRequest\\sideButton.js",
    _this = undefined,
    _s = $RefreshSig$();





var SideButton = function SideButton() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      selector = _useContext.selector;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "side-button",
    children: selector.map(function (_ref) {
      var content = _ref.content,
          icon = _ref.icon,
          title = _ref.title,
          id = _ref.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/".concat(content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "side-holder",
            children: [icon, " ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 60
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 56
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 20
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_s(SideButton, "x1n6lAe9edAmjYnMdikEcX2/VNc=");

_c = SideButton;
/* harmony default export */ __webpack_exports__["default"] = (SideButton);

var _c;

$RefreshReg$(_c, "SideButton");

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

/***/ }),

/***/ "./components/context/RequestContext.js":
/*!**********************************************!*\
  !*** ./components/context/RequestContext.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\slider.js",
    _s = $RefreshSig$();




function SimpleSlider() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_1__["RequestContext"]),
      requestImages = _useContext.requestImages;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "slider-container",
    children: requestImages[0] !== undefined && requestImages.map(function (_ref) {
      var cloudUrl = _ref.cloudUrl;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request-slider",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: cloudUrl
        }, Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(), false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_s(SimpleSlider, "mgQ12ZT61NdI69cwseqwj8oMoHI=");

_c = SimpleSlider;

var _c;

$RefreshReg$(_c, "SimpleSlider");

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

/***/ "./components/usersRequest/addRequest.js":
/*!***********************************************!*\
  !*** ./components/usersRequest/addRequest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\addRequest.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AddRequest = function AddRequest() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      input = _useContext.input,
      error = _useContext.error,
      loading = _useContext.loading,
      handleChange = _useContext.handleChange,
      handleCheck = _useContext.handleCheck,
      temporaryImage = _useContext.temporaryImage,
      requestImages = _useContext.requestImages,
      handleFormPreview = _useContext.handleFormPreview,
      photoChange = _useContext.photoChange,
      handleRequestUpdate = _useContext.handleRequestUpdate,
      setCount = _useContext.setCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    options: "pending"
  }, {
    options: "processing"
  }, {
    options: "canceled"
  }, {
    options: "onHold"
  }, {
    options: "completed"
  }]),
      statusOption = _useState[0],
      setStatusOption = _useState[1]; // const photoSource = () => {
  //     const {requestImages} = input;
  //     console.log(requestImages.cloudUrl);
  //     <>
  //         {requestImages.cloudUrl !== undefined && (requestImages.map(cloudUrl=>
  //             <img src={cloudUrl} key={uuidv4()} />
  //             ))}
  //             {loading == false ? 
  //             <div className="add-image"> 
  //                     {Loader()}<h4>Uploading...</h4>
  //             </div>: 
  //             <div className="add-image">
  //                 <label htmlFor="file">
  //                     <input type="file" name="img" onChange={photoChange} id="file" />
  //                     {upload()}<h4>Upload Images</h4>
  //                 </label> 
  //             </div>}
  //     </>
  //     // if(requestImages == [] ){
  //     //     return(<>
  //     //         {temporaryImage.map(({imageSource}) => 
  //     //     <img src={imageSource} key={uuidv4()} />
  //     //     ) }
  //     //          <div className="add-image">
  //     //     <label htmlFor="file">
  //     //         <input type="file" name="img" onChange={photoChange} id="file" />
  //     //         {upload()}<h4>Upload Images</h4>
  //     //     </label> 
  //     // </div></> )
  //     // }else{
  //     //    return (<> {requestImages.map(({cloudUrl}) => 
  //     //    <img src={cloudUrl} key={uuidv4()} />
  //     //    ) }
  //     //        <div className="add-image">
  //     //            <label htmlFor="file">
  //     //                <input type="file" name="img" onChange={photoChange} id="file" />
  //     //                {upload()}<h4>Upload Images</h4>
  //     //            </label> 
  //     //        </div>
  //     //        </>)
  //     // }
  // }


  var changeStatus = function changeStatus() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "status-change-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "status",
          children: "Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 20
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "status",
          onChange: handleChange,
          value: input.status,
          name: "status",
          children: statusOption.map(function (_ref) {
            var options = _ref.options;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: options,
              children: options
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 24
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this);
  };

  var _input = _objectSpread({}, input),
      formErrors = _input.formErrors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "photo",
      children: [requestImages[0] !== undefined && requestImages.map(function (_ref2) {
        var cloudUrl = _ref2.cloudUrl;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: cloudUrl
        }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, _this);
      }), loading == false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "add-image",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file",
            accept: "/.jpg, .png, gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 35
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "add-image",
        children: [Object(_svg__WEBPACK_IMPORTED_MODULE_3__["Loader"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Uploading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id ? function (e) {
        return handleRequestUpdate(e, input._id);
      } : function (e) {
        return handleFormPreview(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: handleChange,
              id: "senderFirstName",
              name: "senderFirstName",
              value: input.senderFirstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, _this), formErrors.senderFirstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.senderFirstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber1",
              onChange: handleChange,
              name: "senderPhoneNumber1",
              value: input.senderPhoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 21
            }, _this), formErrors.senderPhoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.senderPhoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber2",
              onChange: handleChange,
              name: "senderPhoneNumber2",
              value: input.senderPhoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 21
            }, _this), formErrors.senderPhoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.senderPhoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "receiverFirstname",
              onChange: handleChange,
              name: "receiverFirstName",
              value: input.receiverFirstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 21
            }, _this), formErrors.receiverFirstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiverFirstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber1",
              onChange: handleChange,
              name: "receiverPhoneNumber1",
              value: input.receiverPhoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 21
            }, _this), formErrors.receiverPhoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiverPhoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber2",
              onChange: handleChange,
              name: "receiverPhoneNumber2",
              value: input.receiverPhoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 21
            }, _this), formErrors.receiverPhoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiverPhoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "tagName",
            onChange: handleChange,
            name: "tagName",
            value: input.tagName,
            placeholder: "Tag name.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, _this), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            id: "Cartons",
            onChange: handleChange,
            name: "cartons",
            value: input.cartons,
            placeholder: "Cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 21
          }, _this), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "checkbox",
            id: "otherItems",
            onChange: handleCheck,
            name: "otherItems",
            value: input.otherItems,
            placeholder: "otherItems"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }, _this), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "itemsWorth",
            onChange: handleChange,
            name: "itemsWorth",
            value: input.itemsWorth,
            placeholder: "itemsWorth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }, _this), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "deliveryLocation",
            onChange: handleChange,
            name: "deliveryLocations",
            value: input.deliveryLocations,
            placeholder: "deliveryLocation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 21
          }, _this), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            cols: "40",
            rows: "6",
            id: "descriptions",
            onChange: handleChange,
            name: "descriptions",
            value: input.descriptions,
            placeholder: "descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 21
          }, _this), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }, _this), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 32
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }, _this)]
  }, void 0, true);
};

_s(AddRequest, "Azwq+u5AZ7u/PbRzPytsPwK4r6s=");

_c = AddRequest;
/* harmony default export */ __webpack_exports__["default"] = (AddRequest);

var _c;

$RefreshReg$(_c, "AddRequest");

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

/***/ }),

/***/ "./components/usersRequest/requestHandler.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestHandler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRequest */ "./components/usersRequest/addRequest.js");
/* harmony import */ var _requestPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestPreview */ "./components/usersRequest/requestPreview.js");



var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestHandler.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestHandler = function RequestHandler() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      count = _useContext.count;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: count == undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_addRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_requestPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, _this)
  }, void 0, false);
};

_s(RequestHandler, "KL+7pJqdpwLy64a0pfY56Z0O2FE=");

_c = RequestHandler;
/* harmony default export */ __webpack_exports__["default"] = (RequestHandler);

var _c;

$RefreshReg$(_c, "RequestHandler");

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

/***/ }),

/***/ "./components/usersRequest/requestPreview.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestPreview.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider */ "./components/slider.js");



var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestPreview.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestPreview = function RequestPreview() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      input = _useContext.input,
      setCount = _useContext.setCount,
      handleFormSubmit = _useContext.handleFormSubmit;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id == undefined ? handleFormSubmit : function () {
        return setCount();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request-preview",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Sender information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sender",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.senderFirstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.senderPhoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.senderPhoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Receiver information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "receiver",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiverFirstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiverPhoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiverPhoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "others",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 35
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, _this)]
  }, void 0, true);
};

_s(RequestPreview, "pJFk0kNCDeDmjSR51c6p9cCsLjU=");

_c = RequestPreview;
/* harmony default export */ __webpack_exports__["default"] = (RequestPreview);

var _c;

$RefreshReg$(_c, "RequestPreview");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/ShippingRequest.js":
/*!**********************************!*\
  !*** ./pages/ShippingRequest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/usersRequest/requestHandler */ "./components/usersRequest/requestHandler.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AdminRequest/sideButton */ "./components/AdminRequest/sideButton.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/adminLogin/adminSignin */ "./components/adminLogin/adminSignin.js");
/* harmony import */ var _components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AdminRequest/BottomButton */ "./components/AdminRequest/BottomButton.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _components_AdminRequest_DynamicBottom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AdminRequest/DynamicBottom */ "./components/AdminRequest/DynamicBottom.js");






var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\ShippingRequest.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var ShippingRequest = function ShippingRequest() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    options: "move-to-trash"
  }, {
    options: " Change status to processing"
  }, {
    options: "Change status to on-hold"
  }, {
    options: "Change status to completed"
  }]),
      requestOption = _useState[0],
      setRequesttOption = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_10__["RequestContext"]),
      extractedRequest = _useContext.extractedRequest,
      setExtractedRequest = _useContext.setExtractedRequest,
      setCount = _useContext.setCount,
      input = _useContext.input,
      initialState = _useContext.initialState,
      setInput = _useContext.setInput,
      setPermanentImages = _useContext.setPermanentImages,
      sessionToken = _useContext.sessionToken,
      isLogin = _useContext.isLogin,
      setisLogin = _useContext.setisLogin;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      q = _useState2[0],
      setQ = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      updateShipping = _useState3[0],
      setUpdateShipping = _useState3[1];

  console.log(sessionToken);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _components_firebase__WEBPACK_IMPORTED_MODULE_13__["database"].collection('Requests').onSnapshot(function (snap) {
              var documents = [];
              snap.forEach(function (doc) {
                documents.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
                  id: doc.id
                }));
              });
              setExtractedRequest(documents);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var getFormattedDate = function getFormattedDate(dateString) {
    if (!dateString) {
      return "";
    }

    var date = new Date(dateString);
    return "".concat(date.getDate(), "-").concat(date.getMonth() + 1, "-").concat(date.getFullYear());
  };

  var search = function search(rows) {
    var columns = rows[0] && Object.keys(rows[0]);
    return rows.filter(function (row) {
      return columns.some(function (column) {
        return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    });
  };

  var newShipping = function newShipping() {
    setCount();
    setInput(initialState);
    return setUpdateShipping( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 46
    }, _this));
  };

  var requestData = /*#__PURE__*/function () {
    var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      var res, singleRequest;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_8__["default"].get('/request/' + id);

            case 2:
              res = _context2.sent;

              if (!(res.status == 201)) {
                _context2.next = 7;
                break;
              }

              singleRequest = res.data.singleRequest;
              setCount('action');
              return _context2.abrupt("return", setInput(singleRequest));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function requestData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  setisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "shipping-request",
      children: updateShipping !== undefined ? updateShipping : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "create-contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "add-button",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return setPermanentImages([]);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                href: "/AdminRequest",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Create New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 130
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 127
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 57
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "search",
                name: "search",
                value: q,
                onChange: function onChange(e) {
                  return setQ(e.target.value);
                },
                placeholder: "search..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 62
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 57
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 49
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "all-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-head",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                children: requestOption.map(function (_ref3) {
                  var options = _ref3.options;
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: options
                  }, Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 73
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 57
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Apply"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 49
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "All dates"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 57
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 57
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 57
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 57
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Filter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 49
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "All|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 49
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Trash |"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 64
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Pending Approval|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 82
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "On hold|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 110
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Completed|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 129
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Refundeded|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 150
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Cancelled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 172
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 41
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "contact-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 53
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 91
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 87
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 117
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 130
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 145
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 49
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: extractedRequest !== undefined && extractedRequest.map(function (_ref4) {
              var tagName = _ref4.tagName,
                  updatedAt = _ref4.updatedAt,
                  status = _ref4.status,
                  id = _ref4.id,
                  amount = _ref4.amount;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "checkbox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 69
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "/EachRequest/".concat(id),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: tagName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 104
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 69
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(updatedAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 65
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 49
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Completed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 49
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 41
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 33
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_DynamicBottom__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }, _this)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 17
  }, _this);
};

_s(ShippingRequest, "Q0lq3ZiHpAtv5dNo4R8RJTk53Dg=");

_c = ShippingRequest;
/* harmony default export */ __webpack_exports__["default"] = (ShippingRequest);

var _c;

$RefreshReg$(_c, "ShippingRequest");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblJlcXVlc3QvQm90dG9tQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkbWluUmVxdWVzdC9EeW5hbWljQm90dG9tLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkbWluUmVxdWVzdC9zaWRlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvYWRkUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L3JlcXVlc3RQcmV2aWV3LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9TaGlwcGluZ1JlcXVlc3QuanMiXSwibmFtZXMiOlsiQm90dG9tQnV0dG9uIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0Iiwic2VsZWN0b3IiLCJtYXAiLCJjb250ZW50IiwiaWNvbiIsInRpdGxlIiwiaWQiLCJEeW5hbWljQm90dG9tIiwiU2lkZUJ1dHRvbiIsIlNpbXBsZVNsaWRlciIsInJlcXVlc3RJbWFnZXMiLCJ1bmRlZmluZWQiLCJjbG91ZFVybCIsInV1aWR2NCIsIkFkZFJlcXVlc3QiLCJpbnB1dCIsImVycm9yIiwibG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNoZWNrIiwidGVtcG9yYXJ5SW1hZ2UiLCJoYW5kbGVGb3JtUHJldmlldyIsInBob3RvQ2hhbmdlIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsInNldENvdW50IiwidXNlU3RhdGUiLCJvcHRpb25zIiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwiY2hhbmdlU3RhdHVzIiwic3RhdHVzIiwiYW1vdW50IiwiZm9ybUVycm9ycyIsInVwbG9hZCIsIkxvYWRlciIsIl9pZCIsImUiLCJzZW5kZXJGaXJzdE5hbWUiLCJsZW5ndGgiLCJzZW5kZXJQaG9uZU51bWJlcjEiLCJzZW5kZXJQaG9uZU51bWJlcjIiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJ0YWdOYW1lIiwiY2FydG9ucyIsIm90aGVySXRlbXMiLCJpdGVtc1dvcnRoIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiLCJSZXF1ZXN0SGFuZGxlciIsImNvdW50IiwiUmVxdWVzdFByZXZpZXciLCJoYW5kbGVGb3JtU3VibWl0IiwiU2hpcHBpbmdSZXF1ZXN0IiwicmVxdWVzdE9wdGlvbiIsInNldFJlcXVlc3R0T3B0aW9uIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJpbml0aWFsU3RhdGUiLCJzZXRJbnB1dCIsInNldFBlcm1hbmVudEltYWdlcyIsInNlc3Npb25Ub2tlbiIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwicSIsInNldFEiLCJ1cGRhdGVTaGlwcGluZyIsInNldFVwZGF0ZVNoaXBwaW5nIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJzbmFwIiwiZG9jdW1lbnRzIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwic2VhcmNoIiwicm93cyIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwicm93Iiwic29tZSIsImNvbHVtbiIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3U2hpcHBpbmciLCJyZXF1ZXN0RGF0YSIsImF4aW9zIiwiZ2V0IiwicmVzIiwic2luZ2xl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QSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlIsZUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIUixlQUlRO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpSLGVBS1E7QUFBQSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCTDtBQUFBO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhtQixlQW1FZixxRUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkVlO0FBQUEsa0JBQW5CLGdCQW9FSSxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcEVaO0FBc0VILENBbklEOztHQUFNeUMsZTs7S0FBQUEsZTtBQW9JU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2hpcHBpbmdSZXF1ZXN0LjNkMzZkZTY2YmVjMDE0Zjc2N2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBCb3R0b21CdXR0b24gPSAoKT0+IHtcclxuICAgIGNvbnN0IHsgc2VsZWN0b3J9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJ1dHRvblwiPlxyXG4gICAgICAgIHtzZWxlY3Rvci5tYXAoKHtjb250ZW50LCBpY29uLCB0aXRsZSwgaWR9KSA9PiBcclxuICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7Y29udGVudH1gfT48YT4gPGRpdiBjbGFzc05hbWU9XCJzaWRlLWhvbGRlclwiPntpY29ufSB7dGl0bGV9PC9kaXY+IDwvYT48L0xpbms+XHJcbiAgICAgICAgKSB9XHJcbjwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm90dG9tQnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IER5bmFtaWNCb3R0b20gPSAoKT0+IHtcclxuICAgIGNvbnN0IHsgc2VsZWN0b3J9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pYy1ib3R0b21cIj5cclxuICAgICAgICB7c2VsZWN0b3IubWFwKCh7Y29udGVudCwgaWNvbiwgdGl0bGUsIGlkfSkgPT4gXHJcbiAgICAgICAgICAgPExpbmsga2V5PXtpZH0gaHJlZj17YC8ke2NvbnRlbnR9YH0+PGE+IDxkaXYgY2xhc3NOYW1lPVwic2lkZS1ob2xkZXJcIj57aWNvbn0ge3RpdGxlfTwvZGl2PiA8L2E+PC9MaW5rPlxyXG4gICAgICAgICkgfVxyXG48L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNCb3R0b207IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU2lkZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2VsZWN0b3J9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0b3IubWFwKCh7Y29udGVudCwgaWNvbiwgdGl0bGUsIGlkfSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7Y29udGVudH1gfT48YT4gPGRpdiBjbGFzc05hbWU9XCJzaWRlLWhvbGRlclwiPntpY29ufSB7dGl0bGV9PC9kaXY+IDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQnV0dG9uOyIsImltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcigpIHtcclxuICBcclxuICBjb25zdCB7cmVxdWVzdEltYWdlc30gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7cmVxdWVzdEltYWdlc1swXSAhPT0gdW5kZWZpbmVkICYmIChyZXF1ZXN0SW1hZ2VzLm1hcCgoe2Nsb3VkVXJsfSk9PihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0LXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjbG91ZFVybH0ga2V5PXt1dWlkdjQoKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHt1cGxvYWQsIExvYWRlcn0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWRkUmVxdWVzdCA9ICgpID0+IHtcclxuICAgXHJcbiAgICBjb25zdCB7aW5wdXQsIGVycm9yLCBsb2FkaW5nLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgcmVxdWVzdEltYWdlcywgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXRDb3VudH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzT3B0aW9uLCBzZXRTdGF0dXNPcHRpb25dID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtvcHRpb25zOiBcInBlbmRpbmdcIn0sIFxyXG4gICAgICAgIHtvcHRpb25zOiBcInByb2Nlc3NpbmdcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwiY2FuY2VsZWRcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwib25Ib2xkXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcImNvbXBsZXRlZFwifVxyXG4gICAgXSlcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY29uc3QgcGhvdG9Tb3VyY2UgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3Qge3JlcXVlc3RJbWFnZXN9ID0gaW5wdXQ7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcy5jbG91ZFVybCk7XHJcbiAgICAvLyAgICAgPD5cclxuICAgIC8vICAgICAgICAge3JlcXVlc3RJbWFnZXMuY2xvdWRVcmwgIT09IHVuZGVmaW5lZCAmJiAocmVxdWVzdEltYWdlcy5tYXAoY2xvdWRVcmw9PlxyXG4gICAgLy8gICAgICAgICAgICAgPGltZyBzcmM9e2Nsb3VkVXJsfSBrZXk9e3V1aWR2NCgpfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgKSl9XHJcbiAgICAvLyAgICAgICAgICAgICB7bG9hZGluZyA9PSBmYWxzZSA/IFxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtaW1hZ2VcIj4gXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtMb2FkZXIoKX08aDQ+VXBsb2FkaW5nLi4uPC9oND5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PjogXHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pbWFnZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgLy8gICAgIDwvPlxyXG4gICAgLy8gICAgIC8vIGlmKHJlcXVlc3RJbWFnZXMgPT0gW10gKXtcclxuICAgIC8vICAgICAvLyAgICAgcmV0dXJuKDw+XHJcbiAgICAvLyAgICAgLy8gICAgICAgICB7dGVtcG9yYXJ5SW1hZ2UubWFwKCh7aW1hZ2VTb3VyY2V9KSA9PiBcclxuICAgIC8vICAgICAvLyAgICAgPGltZyBzcmM9e2ltYWdlU291cmNlfSBrZXk9e3V1aWR2NCgpfSAvPlxyXG4gICAgLy8gICAgIC8vICAgICApIH1cclxuICAgIC8vICAgICAvLyAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pbWFnZVwiPlxyXG4gICAgLy8gICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgIC8vICAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAvLyAgICAgLy8gICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgLy8gICAgIC8vICAgICA8L2xhYmVsPiBcclxuICAgIC8vICAgICAvLyA8L2Rpdj48Lz4gKVxyXG4gICAgLy8gICAgIC8vIH1lbHNle1xyXG4gICAgLy8gICAgIC8vICAgIHJldHVybiAoPD4ge3JlcXVlc3RJbWFnZXMubWFwKCh7Y2xvdWRVcmx9KSA9PiBcclxuICAgIC8vICAgICAvLyAgICA8aW1nIHNyYz17Y2xvdWRVcmx9IGtleT17dXVpZHY0KCl9IC8+XHJcbiAgICAvLyAgICAgLy8gICAgKSB9XHJcbiAgICAvLyAgICAgLy8gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWltYWdlXCI+XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgIC8vICAgICAvLyAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgLy8gICAgICAgIDwvPilcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLWNoYW5nZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtpbnB1dC5zdGF0dXN9IG5hbWU9XCJzdGF0dXNcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzT3B0aW9uLm1hcCgoe29wdGlvbnN9KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb25zfSBrZXk9e3V1aWR2NCgpfT57b3B0aW9uc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhbW91bnRcIiBuYW1lPVwiYW1vdW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2lucHV0LmFtb3VudH0gdHlwZT1cIm51bWJlclwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7Zm9ybUVycm9ycyB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgIHtyZXF1ZXN0SW1hZ2VzWzBdICE9PSB1bmRlZmluZWQgJiYgKHJlcXVlc3RJbWFnZXMubWFwKCh7Y2xvdWRVcmx9KT0+KFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nsb3VkVXJsfSBrZXk9e3V1aWR2NCgpfSAvPilcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiICBhY2NlcHQ9XCIvLmpwZywgLnBuZywgZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pbWFnZVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge0xvYWRlcigpfTxoND5VcGxvYWRpbmcuLi48L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ICBpbnB1dC5faWQgPyAoZSk9PiBoYW5kbGVSZXF1ZXN0VXBkYXRlKGUsIGlucHV0Ll9pZCkgOiAoZSk9PiAgaGFuZGxlRm9ybVByZXZpZXcoZSkgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbmRlciBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyRmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSAgfSBpZD1cInNlbmRlckZpcnN0TmFtZVwiICBuYW1lPVwic2VuZGVyRmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnNlbmRlckZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXJGaXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXJGaXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyUGhvbmVOdW1iZXIxXCI+UGhvbmUgTnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInNlbmRlcnBob25lTnVtYmVyMVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgIH0gbmFtZT1cInNlbmRlclBob25lTnVtYmVyMVwiIHZhbHVlPXtpbnB1dC5zZW5kZXJQaG9uZU51bWJlcjF9ICBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmVOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXJQaG9uZU51bWJlcjEubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXJQaG9uZU51bWJlcjF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVycGhvbmVOdW1iZXIyXCI+UGhvbmUgTnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzZW5kZXJwaG9uZU51bWJlcjJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlIH0gbmFtZT1cInNlbmRlclBob25lTnVtYmVyMlwiIHZhbHVlPXtpbnB1dC5zZW5kZXJQaG9uZU51bWJlcjJ9ICBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyUGhvbmVOdW1iZXIyLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyUGhvbmVOdW1iZXIyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJGaXJzdG5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlY2VpdmVyRmlyc3RuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInJlY2VpdmVyRmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyRmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyRmlyc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXJGaXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJQaG9uZU51bWJlcjFcIj5QaG9uZSBOdW1iZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicmVjZWl2ZXJwaG9uZU51bWJlcjFcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwicmVjZWl2ZXJQaG9uZU51bWJlcjFcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXJQaG9uZU51bWJlcjF9IHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZU51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyUGhvbmVOdW1iZXIxLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXJQaG9uZU51bWJlcjF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIj5QaG9uZSBOdW1iZXIgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInJlY2VpdmVycGhvbmVOdW1iZXIyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInJlY2VpdmVyUGhvbmVOdW1iZXIyXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyUGhvbmVOdW1iZXIyfSBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXJQaG9uZU51bWJlcjIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlclBob25lTnVtYmVyMn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YWdOYW1lXCI+VGFnIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFnTmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJ0YWdOYW1lXCIgdmFsdWU9e2lucHV0LnRhZ05hbWV9IHBsYWNlaG9sZGVyPVwiVGFnIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy50YWdOYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMudGFnTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJDYXJ0b25zXCI+TnVtYmVyIG9mIGNhcnRvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJDYXJ0b25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNhcnRvbnNcIiB2YWx1ZT17aW5wdXQuY2FydG9uc30gcGxhY2Vob2xkZXI9XCJDYXJ0b25zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmNhcnRvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5jYXJ0b25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVySXRlbXNcIj5PdGhlciBJdGVtczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwib3RoZXJJdGVtc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGVja30gbmFtZT1cIm90aGVySXRlbXNcIiB2YWx1ZT17aW5wdXQub3RoZXJJdGVtc30gcGxhY2Vob2xkZXI9XCJvdGhlckl0ZW1zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLm90aGVySXRlbXMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5vdGhlckl0ZW1zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIml0ZW1zV29ydGhcIj5JdGVtcyBXb3J0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtc1dvcnRoXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cIml0ZW1zV29ydGhcIiB2YWx1ZT17aW5wdXQuaXRlbXNXb3J0aH0gcGxhY2Vob2xkZXI9XCJpdGVtc1dvcnRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLml0ZW1zV29ydGgubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5pdGVtc1dvcnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5TG9jYXRpb25cIj5EZWxpdmVyeSBMb2NhdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVsaXZlcnlMb2NhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJkZWxpdmVyeUxvY2F0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc30gIHBsYWNlaG9sZGVyPVwiZGVsaXZlcnlMb2NhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNDBcIiByb3dzPVwiNlwiIGlkPVwiZGVzY3JpcHRpb25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlc2NyaXB0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZXNjcmlwdGlvbnN9ICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgY2hhbmdlU3RhdHVzKClcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInVwZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KSA6KDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgQWRkUmVxdWVzdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBBZGRSZXF1ZXN0IGZyb20gJy4vYWRkUmVxdWVzdCc7XHJcbmltcG9ydCBSZXF1ZXN0UHJldmlldyBmcm9tICcuL3JlcXVlc3RQcmV2aWV3JztcclxuXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdEhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7Y291bnR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtjb3VudCA9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRSZXF1ZXN0IC8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0UHJldmlldyAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEhhbmRsZXI7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpbXBsZVNsaWRlciBmcm9tICcuLi9zbGlkZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0UHJldmlldyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aW5wdXQsIHNldENvdW50LCBoYW5kbGVGb3JtU3VibWl0fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gICBcclxuXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNpbXBsZVNsaWRlciAvPiBcclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtpbnB1dC5faWQgPT0gdW5kZWZpbmVkID8gIGhhbmRsZUZvcm1TdWJtaXQgOiAoKT0+IHNldENvdW50KCl9PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtcHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyLWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VuZGVyIGluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlckZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc2VuZGVyUGhvbmVOdW1iZXIxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlclBob25lTnVtYmVyMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWNlaXZlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInJlY2VpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlckZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlclBob25lTnVtYmVyMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlclBob25lTnVtYmVyMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC50YWdOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmNhcnRvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQub3RoZXJJdGVtc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5pdGVtc1dvcnRofTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmRlbGl2ZXJ5TG9jYXRpb25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmRlc2NyaXB0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zdGF0dXN9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgeyBpbnB1dC5faWQgPyAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik6ICg8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFByZXZpZXc7IiwiaW1wb3J0IFJlcXVlc3RIYW5kbGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9yZXF1ZXN0SGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IFNpZGVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5SZXF1ZXN0L3NpZGVCdXR0b25cIjtcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0XCI7XHJcbmltcG9ydCBBZG1pblNpZ25pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbkxvZ2luL2FkbWluU2lnbmluXCI7XHJcbmltcG9ydCBCb3R0b21CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5SZXF1ZXN0L0JvdHRvbUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBEeW5hbWljQm90dG9tIGZyb20gXCIuLi9jb21wb25lbnRzL0FkbWluUmVxdWVzdC9EeW5hbWljQm90dG9tXCI7XHJcblxyXG5cclxuY29uc3QgU2hpcHBpbmdSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IFtyZXF1ZXN0T3B0aW9uLCBzZXRSZXF1ZXN0dE9wdGlvbl0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCJtb3ZlLXRvLXRyYXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAge29wdGlvbnM6IFwiIENoYW5nZSBzdGF0dXMgdG8gcHJvY2Vzc2luZ1wifSxcclxuICAgICAgICAgICAgICAgIHtvcHRpb25zOiBcIkNoYW5nZSBzdGF0dXMgdG8gb24taG9sZFwifSxcclxuICAgICAgICAgICAgICAgIHtvcHRpb25zOiBcIkNoYW5nZSBzdGF0dXMgdG8gY29tcGxldGVkXCJ9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdHtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBzZXRDb3VudCwgaW5wdXQsIGluaXRpYWxTdGF0ZSwgc2V0SW5wdXQsIHNldFBlcm1hbmVudEltYWdlcywgc2Vzc2lvblRva2VuLCBpc0xvZ2luLCBzZXRpc0xvZ2lufSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cclxuICAgICAgICAgICAgY29uc3QgW3VwZGF0ZVNoaXBwaW5nLCBzZXRVcGRhdGVTaGlwcGluZ10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uVG9rZW4pO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHVzZUVmZmVjdCAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJylcclxuICAgICAgICAgICAgICAgICAgICAub25TbmFwc2hvdChzbmFwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvY3VtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMucHVzaCh7Li4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXh0cmFjdGVkUmVxdWVzdChkb2N1bWVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgICBjb25zdCBnZXRGb3JtYXR0ZWREYXRlID0gKGRhdGVTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS5nZXREYXRlKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9KHJvd3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3dzWzBdICYmIE9iamVjdC5rZXlzKHJvd3NbMF0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoKHJvdykgPT4gXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnNvbWUoKGNvbHVtbikgPT4gcm93W2NvbHVtbl0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3U2hpcHBpbmcgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXQoaW5pdGlhbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VXBkYXRlU2hpcHBpbmcoPFJlcXVlc3RIYW5kbGVyIC8+KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvcmVxdWVzdC8nICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAyMDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7c2luZ2xlUmVxdWVzdH0gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q291bnQoJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnB1dChzaW5nbGVSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgcmV0dXJuIChpc0xvZ2luID09IHRydWUgPyAoPD5cclxuICAgICAgICAgPFNpZGVCdXR0b24vPlxyXG4gICAgICAgICA8Qm90dG9tQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctcmVxdWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgeyAgICB1cGRhdGVTaGlwcGluZyAhPT0gdW5kZWZpbmVkID8gdXBkYXRlU2hpcHBpbmcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHNldFBlcm1hbmVudEltYWdlcyhbXSl9PjxMaW5rIGhyZWY9XCIvQWRtaW5SZXF1ZXN0XCI+PGE+PHAgPkNyZWF0ZSBOZXc8L3A+PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCIgbmFtZT1cInNlYXJjaFwiIHZhbHVlPXtxfSBvbkNoYW5nZT17KGUpID0+IHNldFEoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cInNlYXJjaC4uLlwiLz48L2Rpdj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbC1jb250YWN0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWhlYWRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWVzdE9wdGlvbi5tYXAoKHtvcHRpb25zfSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt1dWlkdjQoKX0+e29wdGlvbnN9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBcHBseVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbGwgZGF0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGUxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRlMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJGaWx0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWhlYWRlclwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BbGx8PC9kaXY+PGRpdj5UcmFzaCB8PC9kaXY+PGRpdj5QZW5kaW5nIEFwcHJvdmFsfDwvZGl2PjxkaXY+T24gaG9sZHw8L2Rpdj48ZGl2PkNvbXBsZXRlZHw8L2Rpdj48ZGl2PlJlZnVuZGVkZWR8PC9kaXY+PGRpdj5DYW5jZWxsZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD48dGQ+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90ZD48dGQ+RGF0ZTwvdGQ+PHRkPlN0YXR1czwvdGQ+PHRkPlRvdGFsPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RlZFJlcXVlc3QgIT09IHVuZGVmaW5lZCAmJiAoIGV4dHJhY3RlZFJlcXVlc3QubWFwKCh7dGFnTmFtZSwgdXBkYXRlZEF0LCBzdGF0dXMsIGlkLCBhbW91bnR9KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3V1aWR2NCgpfSA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQgb25DbGljaz17KCk9PiByZXF1ZXN0RGF0YShfaWQpfT48TGluayAgaHJlZj17YC9TaW5nbGVSZXF1ZXN0Lz9pZD0ke19pZH1gfT48YT57dGFnTmFtZX08L2E+PC9MaW5rPjwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxMaW5rICBocmVmPXtgL0VhY2hSZXF1ZXN0LyR7aWR9YH0+PGE+e3RhZ05hbWV9PC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRGb3JtYXR0ZWREYXRlKHVwZGF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ftb3VudCA/IGFtb3VudCA6IFwiLS1cIn08L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPkNvbXBsZXRlZDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPlRvdGFsPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RHluYW1pY0JvdHRvbSAvPlxyXG4gICAgICAgIDwvPikgOiAoPEFkbWluU2lnbmluIC8+KVxyXG4gICAgKVxyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmdSZXF1ZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
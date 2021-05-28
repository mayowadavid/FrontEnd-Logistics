webpackHotUpdate_N_E("pages/request",{

/***/ "./components/RequestSubmit.js":
/*!*************************************!*\
  !*** ./components/RequestSubmit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\RequestSubmit.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestSubmit = function RequestSubmit() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var back = function back() {
    setRequestSuccess(false);
    return router.replace('dashboard');
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      setRequestSuccess = _useContext.setRequestSuccess;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "request_wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "request_submitted",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "success",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Success"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: function onClick() {
            return back();
          },
          children: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["close"])()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "checked",
        children: [" ", Object(_svg__WEBPACK_IMPORTED_MODULE_3__["checkMark"])()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Your Request has been submitted successfully"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "An admin will contact you shortly, check your transaction page to know the status of your request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_submit",
        onClick: function onClick() {
          return back();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Done"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 80
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 18
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(RequestSubmit, "5pBjqSmnJCaGkQ67OhOKT1TmFnY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = RequestSubmit;
/* harmony default export */ __webpack_exports__["default"] = (RequestSubmit);

var _c;

$RefreshReg$(_c, "RequestSubmit");

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

/***/ "./components/firebase.js":
false,

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlider; });
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\slider.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function SimpleSlider() {
  _s();

  var _this = this;

  var settings = {
    className: "center",
    infinite: true,
    useCSS: true,
    slidesToShow: 3,
    draggable: true,
    speed: 500
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_3__["RequestContext"]),
      permanentImages = _useContext.permanentImages;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: permanentImages.length > 0 && permanentImages.map(function (_ref) {
      var img = _ref.img;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: img
      }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(SimpleSlider, "5kmwGPYvsz6zi3W/ywr+xr2WMFg=");

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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\addRequest.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AddRequest = function AddRequest() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      input = _useContext.input,
      error = _useContext.error,
      handleChange = _useContext.handleChange,
      handleReceiver = _useContext.handleReceiver,
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
      setStatusOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      action = _useState2[0],
      setAction = _useState2[1];

  var photoSource = function photoSource() {
    if (temporaryImage || requestImages) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [" ", requestImages.map(function (_ref) {
          var cloudUrl = _ref.cloudUrl;
          return temporaryImage.map(function (_ref2) {
            var imageSource = _ref2.imageSource;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: cloudUrl ? cloudUrl : imageSource
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 13
            }, _this);
          });
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 31
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, _this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }, _this);
    }
  };

  var changeStatus = function changeStatus() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "status-change-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "status",
          children: "Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 20
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          id: "status",
          onChange: handleChange,
          value: input.status,
          name: "status",
          children: statusOption.map(function (_ref3) {
            var options = _ref3.options;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: options,
              children: options
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 24
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this);
  };

  var _input = _objectSpread({}, input),
      formErrors = _input.formErrors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "photo",
      children: temporaryImage ? photoSource() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 30
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 30
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: input._id ? function (e) {
        return handleRequestUpdate(e, input._id);
      } : function (e) {
        return handleFormPreview(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              onChange: handleChange,
              id: "senderFirstName",
              name: "firstName",
              value: input.sender.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 21
            }, _this), formErrors.sender.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber1",
              onChange: handleChange,
              name: "phoneNumber1",
              value: input.sender.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber2",
              onChange: handleChange,
              name: "phoneNumber2",
              value: input.sender.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              id: "receiverFirstname",
              onChange: handleReceiver,
              name: "firstName",
              value: input.receiver.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 21
            }, _this), formErrors.receiver.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber1",
              onChange: handleReceiver,
              name: "phoneNumber1",
              value: input.receiver.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber2",
              onChange: handleReceiver,
              name: "phoneNumber2",
              value: input.receiver.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "tagName",
            onChange: handleChange,
            name: "tagName",
            value: input.tagName,
            placeholder: "Tag name.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 21
          }, _this), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "number",
            id: "Cartons",
            onChange: handleChange,
            name: "cartons",
            value: input.cartons,
            placeholder: "Cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }, _this), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "checkbox",
            id: "otherItems",
            onChange: handleCheck,
            name: "otherItems",
            value: input.otherItems,
            placeholder: "otherItems"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, _this), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "itemsWorth",
            onChange: handleChange,
            name: "itemsWorth",
            value: input.itemsWorth,
            placeholder: "itemsWorth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 21
          }, _this), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "deliveryLocation",
            onChange: handleChange,
            name: "deliveryLocations",
            value: input.deliveryLocations,
            placeholder: "deliveryLocation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, _this), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            cols: "40",
            rows: "6",
            id: "descriptions",
            onChange: handleChange,
            name: "descriptions",
            value: input.descriptions,
            placeholder: "descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }, _this), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }, _this), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 32
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }, _this)]
  }, void 0, true);
};

_s(AddRequest, "RZTj6amAazNGbBKIbiqJLdOitic=");

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



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestHandler.js",
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



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestPreview.js",
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
      lineNumber: 15,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id == undefined ? handleFormSubmit : function () {
        return setCount();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Sender information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sender",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Receiver information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "receiver",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "others",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 35
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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

/***/ "./components/validator/validate.js":
false,

/***/ "./helpers/axios.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/usersRequest/requestHandler */ "./components/usersRequest/requestHandler.js");
/* harmony import */ var _components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RequestSubmit */ "./components/RequestSubmit.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\request.js",
    _this = undefined,
    _s = $RefreshSig$();






var Request = function Request() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      requestSuccess = _useContext.requestSuccess;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [requestSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-request",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Request, "3dW2GcoX4A2MrDnlBI4KzUaI1gU=");

_c = Request;
/* harmony default export */ __webpack_exports__["default"] = (Request);

var _c;

$RefreshReg$(_c, "Request");

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

/***/ "./urlConfig.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvYWRkUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L3JlcXVlc3RQcmV2aWV3LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RTdWJtaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJyZXBsYWNlIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwiY2xvc2UiLCJjaGVja01hcmsiLCJTaW1wbGVTbGlkZXIiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwidXNlQ1NTIiwic2xpZGVzVG9TaG93IiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJwZXJtYW5lbnRJbWFnZXMiLCJsZW5ndGgiLCJtYXAiLCJpbWciLCJ1dWlkdjQiLCJBZGRSZXF1ZXN0IiwiaW5wdXQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVJlY2VpdmVyIiwiaGFuZGxlQ2hlY2siLCJ0ZW1wb3JhcnlJbWFnZSIsInJlcXVlc3RJbWFnZXMiLCJoYW5kbGVGb3JtUHJldmlldyIsInBob3RvQ2hhbmdlIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsInNldENvdW50IiwidXNlU3RhdGUiLCJvcHRpb25zIiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicGhvdG9Tb3VyY2UiLCJjbG91ZFVybCIsImltYWdlU291cmNlIiwidXBsb2FkIiwiY2hhbmdlU3RhdHVzIiwic3RhdHVzIiwiYW1vdW50IiwiZm9ybUVycm9ycyIsIl9pZCIsImUiLCJzZW5kZXIiLCJmaXJzdE5hbWUiLCJwaG9uZU51bWJlcjEiLCJwaG9uZU51bWJlcjIiLCJyZWNlaXZlciIsInRhZ05hbWUiLCJjYXJ0b25zIiwib3RoZXJJdGVtcyIsIml0ZW1zV29ydGgiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIlJlcXVlc3RIYW5kbGVyIiwiY291bnQiLCJ1bmRlZmluZWQiLCJSZXF1ZXN0UHJldmlldyIsImhhbmRsZUZvcm1TdWJtaXQiLCJSZXF1ZXN0IiwicmVxdWVzdFN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmQyxxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0EsV0FBT0gsTUFBTSxDQUFDSSxPQUFQLENBQWUsV0FBZixDQUFQO0FBQ0gsR0FIRDs7QUFGb0Isb0JBTVFDLHdEQUFVLENBQUNDLHNFQUFELENBTmxCO0FBQUEsTUFNWkgsaUJBTlksZUFNWkEsaUJBTlk7O0FBTzVCLHNCQUNRO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsMkJBQ1M7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDTztBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNJO0FBQUEsaUNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBRyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtELElBQUksRUFBVDtBQUFBLFdBQVo7QUFBQSxvQkFBMEJLLGtEQUFLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFAsZUFLTztBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLHdCQUE0QkMsc0RBQVMsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTFAsZUFNTztBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlAsZUFVTztBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBTyxFQUFHO0FBQUEsaUJBQUtOLElBQUksRUFBVDtBQUFBLFNBQTFDO0FBQUEsK0JBQXVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFI7QUFnQkUsQ0F2QkY7O0dBQU1ILGE7VUFDaUJFLHFEOzs7S0FEakJGLGE7QUF5QlNBLDRFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1UsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUNyQyxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsYUFBUyxFQUFFLFFBREk7QUFFZkMsWUFBUSxFQUFFLElBRks7QUFHZkMsVUFBTSxFQUFFLElBSE87QUFJZkMsZ0JBQVksRUFBRSxDQUpDO0FBS2ZDLGFBQVMsRUFBRSxJQUxJO0FBTWZDLFNBQUssRUFBRTtBQU5RLEdBQWpCOztBQURxQyxvQkFTWFgsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FUQztBQUFBLE1BUzlCVyxlQVQ4QixlQVM5QkEsZUFUOEI7O0FBVXJDLHNCQUNFLHFFQUFDLGtEQUFELGtDQUFZUCxRQUFaO0FBQUEsY0FDR08sZUFBZSxDQUFDQyxNQUFoQixHQUF5QixDQUF6QixJQUE4QkQsZUFBZSxDQUFDRSxHQUFoQixDQUFvQjtBQUFBLFVBQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLDBCQUNyQztBQUFLLFdBQUcsRUFBRUE7QUFBVixTQUFvQkMsK0NBQU0sRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQztBQUFBLEtBQXBCO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQWpCdUJaLFk7O0tBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1hLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxvQkFFMklqQix3REFBVSxDQUFDQyxzRUFBRCxDQUZySjtBQUFBLE1BRWRpQixLQUZjLGVBRWRBLEtBRmM7QUFBQSxNQUVQQyxLQUZPLGVBRVBBLEtBRk87QUFBQSxNQUVBQyxZQUZBLGVBRUFBLFlBRkE7QUFBQSxNQUVjQyxjQUZkLGVBRWNBLGNBRmQ7QUFBQSxNQUU4QkMsV0FGOUIsZUFFOEJBLFdBRjlCO0FBQUEsTUFFMkNDLGNBRjNDLGVBRTJDQSxjQUYzQztBQUFBLE1BRTJEQyxhQUYzRCxlQUUyREEsYUFGM0Q7QUFBQSxNQUUwRUMsaUJBRjFFLGVBRTBFQSxpQkFGMUU7QUFBQSxNQUU2RkMsV0FGN0YsZUFFNkZBLFdBRjdGO0FBQUEsTUFFMEdDLG1CQUYxRyxlQUUwR0EsbUJBRjFHO0FBQUEsTUFFK0hDLFFBRi9ILGVBRStIQSxRQUYvSDs7QUFBQSxrQkFJbUJDLHNEQUFRLENBQUMsQ0FDN0M7QUFBQ0MsV0FBTyxFQUFFO0FBQVYsR0FENkMsRUFFN0M7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FGNkMsRUFHN0M7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FINkMsRUFJN0M7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FKNkMsRUFLN0M7QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FMNkMsQ0FBRCxDQUozQjtBQUFBLE1BSWRDLFlBSmM7QUFBQSxNQUlBQyxlQUpBOztBQUFBLG1CQVlPSCxzREFBUSxFQVpmO0FBQUEsTUFZZEksTUFaYztBQUFBLE1BWU5DLFNBWk07O0FBY3JCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFFdEIsUUFBR1osY0FBYyxJQUFJQyxhQUFyQixFQUFvQztBQUNoQywwQkFBTztBQUFBLHdCQUFJQSxhQUFhLENBQUNWLEdBQWQsQ0FBa0I7QUFBQSxjQUFFc0IsUUFBRixRQUFFQSxRQUFGO0FBQUEsaUJBQWdCYixjQUFjLENBQUNULEdBQWYsQ0FBbUI7QUFBQSxnQkFBRXVCLFdBQUYsU0FBRUEsV0FBRjtBQUFBLGdDQUNoRTtBQUFLLGlCQUFHLEVBQUVELFFBQVEsR0FBR0EsUUFBSCxHQUFjQztBQUFoQyxlQUFrRHJCLCtDQUFNLEVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdFO0FBQUEsV0FBbkIsQ0FBaEI7QUFBQSxTQUFsQixDQUFKLGVBR0g7QUFBTyxpQkFBTyxFQUFDLE1BQWY7QUFBQSxrQ0FDSTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBSSxFQUFDLEtBQXhCO0FBQThCLG9CQUFRLEVBQUVVLFdBQXhDO0FBQXFELGNBQUUsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUtZLG1EQUFNLEVBRlgsZUFFYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEc7QUFBQSxzQkFBUDtBQVFILEtBVEQsTUFTSztBQUNGLDBCQUFRO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSxnQ0FDQztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxLQUF4QjtBQUE4QixrQkFBUSxFQUFFWixXQUF4QztBQUFxRCxZQUFFLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxFQUVFWSxtREFBTSxFQUZSLGVBRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFJRjtBQUVKLEdBbEJEOztBQXNCQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLHdCQUNJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsOEJBQ0k7QUFBQSxnQ0FBRztBQUFPLGlCQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxlQUNJO0FBQVEsWUFBRSxFQUFDLFFBQVg7QUFBb0Isa0JBQVEsRUFBRW5CLFlBQTlCO0FBQTRDLGVBQUssRUFBRUYsS0FBSyxDQUFDc0IsTUFBekQ7QUFBaUUsY0FBSSxFQUFDLFFBQXRFO0FBQUEsb0JBQ0tULFlBQVksQ0FBQ2pCLEdBQWIsQ0FBaUI7QUFBQSxnQkFBRWdCLE9BQUYsU0FBRUEsT0FBRjtBQUFBLGdDQUNkO0FBQVEsbUJBQUssRUFBRUEsT0FBZjtBQUFBLHdCQUF3Q0E7QUFBeEMsZUFBNkJkLCtDQUFNLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPUTtBQUFBLGdDQUFHO0FBQU8saUJBQU8sRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILGVBQ0k7QUFBTyxZQUFFLEVBQUMsUUFBVjtBQUFtQixjQUFJLEVBQUMsUUFBeEI7QUFBaUMsa0JBQVEsRUFBRUksWUFBM0M7QUFBeUQsZUFBSyxFQUFFRixLQUFLLENBQUN1QixNQUF0RTtBQUE4RSxjQUFJLEVBQUM7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVlILEdBYkQ7O0FBcENxQixpQ0FtREt2QixLQW5ETDtBQUFBLE1BbURkd0IsVUFuRGMsVUFtRGRBLFVBbkRjOztBQXFEckIsc0JBQ007QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ09uQixjQUFjLEdBQUdZLFdBQVcsRUFBZCxnQkFDTjtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsZ0NBQ0E7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFJLEVBQUMsS0FBeEI7QUFBOEIsa0JBQVEsRUFBRVQsV0FBeEM7QUFBcUQsWUFBRSxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsRUFFSVksbURBQU0sRUFGVixlQUVhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZiLGVBR0k7QUFBQSxvQkFBTW5CO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFXQTtBQUFNLGNBQVEsRUFBSUQsS0FBSyxDQUFDeUIsR0FBTixHQUFZLFVBQUNDLENBQUQ7QUFBQSxlQUFNakIsbUJBQW1CLENBQUNpQixDQUFELEVBQUkxQixLQUFLLENBQUN5QixHQUFWLENBQXpCO0FBQUEsT0FBWixHQUFzRCxVQUFDQyxDQUFEO0FBQUEsZUFBT25CLGlCQUFpQixDQUFDbUIsQ0FBRCxDQUF4QjtBQUFBLE9BQXhFO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNBO0FBQUEsb0NBQ0U7QUFBTyxxQkFBTyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsRUFBRXhCLFlBQTdCO0FBQTZDLGdCQUFFLEVBQUMsaUJBQWhEO0FBQW1FLGtCQUFJLEVBQUMsV0FBeEU7QUFBb0YsbUJBQUssRUFBRUYsS0FBSyxDQUFDMkIsTUFBTixDQUFhQyxTQUF4RztBQUFtSCx5QkFBVyxFQUFDO0FBQS9IO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHR0osVUFBVSxDQUFDRyxNQUFYLENBQWtCQyxTQUFsQixDQUE0QmpDLE1BQTVCLEdBQXFDLENBQXJDLGlCQUNHO0FBQU0sdUJBQVMsRUFBQyxjQUFoQjtBQUFBLHdCQUFnQzZCLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFRRTtBQUFBLG9DQUNBO0FBQU8scUJBQU8sRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVBO0FBQU8sa0JBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFFLEVBQUMsb0JBQXhCO0FBQTZDLHNCQUFRLEVBQUUxQixZQUF2RDtBQUF1RSxrQkFBSSxFQUFDLGNBQTVFO0FBQTJGLG1CQUFLLEVBQUVGLEtBQUssQ0FBQzJCLE1BQU4sQ0FBYUUsWUFBL0c7QUFBOEgseUJBQVcsRUFBQztBQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLEVBR0NMLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkUsWUFBbEIsQ0FBK0JsQyxNQUEvQixHQUF3QyxDQUF4QyxpQkFDRztBQUFNLHVCQUFTLEVBQUMsY0FBaEI7QUFBQSx3QkFBZ0M2QixVQUFVLENBQUNHLE1BQVgsQ0FBa0JDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBZUU7QUFBQSxvQ0FDQTtBQUFPLHFCQUFPLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFPLGtCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBRSxFQUFDLG9CQUF4QjtBQUE2QyxzQkFBUSxFQUFFMUIsWUFBdkQ7QUFBc0Usa0JBQUksRUFBQyxjQUEzRTtBQUEwRixtQkFBSyxFQUFFRixLQUFLLENBQUMyQixNQUFOLENBQWFHLFlBQTlHO0FBQTZILHlCQUFXLEVBQUM7QUFBekk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxFQUdDTixVQUFVLENBQUNHLE1BQVgsQ0FBa0JHLFlBQWxCLENBQStCbkMsTUFBL0IsR0FBd0MsQ0FBeEMsaUJBQ0c7QUFBTSx1QkFBUyxFQUFDLGNBQWhCO0FBQUEsd0JBQWdDNkIsVUFBVSxDQUFDRyxNQUFYLENBQWtCQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUEyQkk7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFFSTtBQUFNLG1CQUFTLEVBQUMsVUFBaEI7QUFBQSxrQ0FDRTtBQUFBLG9DQUNBO0FBQU8scUJBQU8sRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVBO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFFLEVBQUMsbUJBQXRCO0FBQTBDLHNCQUFRLEVBQUV6QixjQUFwRDtBQUFvRSxrQkFBSSxFQUFDLFdBQXpFO0FBQXFGLG1CQUFLLEVBQUVILEtBQUssQ0FBQytCLFFBQU4sQ0FBZUgsU0FBM0c7QUFBc0gseUJBQVcsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLEVBR0NKLFVBQVUsQ0FBQ08sUUFBWCxDQUFvQkgsU0FBcEIsQ0FBOEJqQyxNQUE5QixHQUF1QyxDQUF2QyxpQkFDRztBQUFNLHVCQUFTLEVBQUMsY0FBaEI7QUFBQSx3QkFBZ0M2QixVQUFVLENBQUNPLFFBQVgsQ0FBb0JIO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBQSxvQ0FDQTtBQUFPLHFCQUFPLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFPLGtCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBRSxFQUFDLHNCQUF4QjtBQUErQyxzQkFBUSxFQUFFekIsY0FBekQ7QUFBeUUsa0JBQUksRUFBQyxjQUE5RTtBQUE2RixtQkFBSyxFQUFFSCxLQUFLLENBQUMrQixRQUFOLENBQWVGLFlBQW5IO0FBQWlJLHlCQUFXLEVBQUM7QUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxFQUdDTCxVQUFVLENBQUNPLFFBQVgsQ0FBb0JGLFlBQXBCLENBQWlDbEMsTUFBakMsR0FBMEMsQ0FBMUMsaUJBQ0c7QUFBTSx1QkFBUyxFQUFDLGNBQWhCO0FBQUEsd0JBQWdDNkIsVUFBVSxDQUFDTyxRQUFYLENBQW9CRjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWVFO0FBQUEsb0NBQ0E7QUFBTyxxQkFBTyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBRUE7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUUsRUFBQyxzQkFBeEI7QUFBK0Msc0JBQVEsRUFBRTFCLGNBQXpEO0FBQXlFLGtCQUFJLEVBQUMsY0FBOUU7QUFBNkYsbUJBQUssRUFBRUgsS0FBSyxDQUFDK0IsUUFBTixDQUFlRCxZQUFuSDtBQUFpSSx5QkFBVyxFQUFDO0FBQTdJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkEsRUFHQ04sVUFBVSxDQUFDTyxRQUFYLENBQW9CRCxZQUFwQixDQUFpQ25DLE1BQWpDLEdBQTBDLENBQTFDLGlCQUNHO0FBQU0sdUJBQVMsRUFBQyxjQUFoQjtBQUFBLHdCQUFnQzZCLFVBQVUsQ0FBQ08sUUFBWCxDQUFvQkQ7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCSixlQXFESTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNNO0FBQUEsa0NBQ0E7QUFBTyxtQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFFLEVBQUMsU0FBdEI7QUFBZ0Msb0JBQVEsRUFBRTVCLFlBQTFDO0FBQXdELGdCQUFJLEVBQUMsU0FBN0Q7QUFBdUUsaUJBQUssRUFBRUYsS0FBSyxDQUFDZ0MsT0FBcEY7QUFBNkYsdUJBQVcsRUFBQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLEVBR0NSLFVBQVUsQ0FBQ1EsT0FBWCxDQUFtQnJDLE1BQW5CLEdBQTRCLENBQTVCLGlCQUNHO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQzZCLFVBQVUsQ0FBQ1E7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE4sZUFRTTtBQUFBLGtDQUNBO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsY0FBRSxFQUFDLFNBQXhCO0FBQWtDLG9CQUFRLEVBQUU5QixZQUE1QztBQUEwRCxnQkFBSSxFQUFDLFNBQS9EO0FBQXlFLGlCQUFLLEVBQUVGLEtBQUssQ0FBQ2lDLE9BQXRGO0FBQStGLHVCQUFXLEVBQUM7QUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxFQUdDVCxVQUFVLENBQUNTLE9BQVgsQ0FBbUJ0QyxNQUFuQixHQUE0QixDQUE1QixpQkFDRztBQUFNLHFCQUFTLEVBQUMsY0FBaEI7QUFBQSxzQkFBZ0M2QixVQUFVLENBQUNTO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJOLGVBZU07QUFBQSxrQ0FDQTtBQUFPLG1CQUFPLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUUsRUFBQyxZQUExQjtBQUF1QyxvQkFBUSxFQUFFN0IsV0FBakQ7QUFBOEQsZ0JBQUksRUFBQyxZQUFuRTtBQUFnRixpQkFBSyxFQUFFSixLQUFLLENBQUNrQyxVQUE3RjtBQUF5Ryx1QkFBVyxFQUFDO0FBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsRUFHQ1YsVUFBVSxDQUFDVSxVQUFYLENBQXNCdkMsTUFBdEIsR0FBK0IsQ0FBL0IsaUJBQ0c7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUEsc0JBQWdDNkIsVUFBVSxDQUFDVTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmTixlQXNCTTtBQUFBLGtDQUNBO0FBQU8sbUJBQU8sRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsY0FBRSxFQUFDLFlBQXRCO0FBQW1DLG9CQUFRLEVBQUVoQyxZQUE3QztBQUEyRCxnQkFBSSxFQUFDLFlBQWhFO0FBQTZFLGlCQUFLLEVBQUVGLEtBQUssQ0FBQ21DLFVBQTFGO0FBQXNHLHVCQUFXLEVBQUM7QUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxFQUdDWCxVQUFVLENBQUNXLFVBQVgsQ0FBc0J4QyxNQUF0QixHQUErQixDQUEvQixpQkFDRztBQUFNLHFCQUFTLEVBQUMsY0FBaEI7QUFBQSxzQkFBZ0M2QixVQUFVLENBQUNXO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCTixlQTZCTTtBQUFBLGtDQUNBO0FBQU8sbUJBQU8sRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUUsRUFBQyxrQkFBdEI7QUFBeUMsb0JBQVEsRUFBRWpDLFlBQW5EO0FBQWlFLGdCQUFJLEVBQUMsbUJBQXRFO0FBQTBGLGlCQUFLLEVBQUVGLEtBQUssQ0FBQ29DLGlCQUF2RztBQUEySCx1QkFBVyxFQUFDO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsRUFHQ1osVUFBVSxDQUFDWSxpQkFBWCxDQUE2QnpDLE1BQTdCLEdBQXNDLENBQXRDLGlCQUNHO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQzZCLFVBQVUsQ0FBQ1k7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJESixlQTBGSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNNO0FBQUEsa0NBQ0E7QUFBTyxtQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFVLGdCQUFJLEVBQUMsSUFBZjtBQUFvQixnQkFBSSxFQUFDLEdBQXpCO0FBQTZCLGNBQUUsRUFBQyxjQUFoQztBQUErQyxvQkFBUSxFQUFFbEMsWUFBekQ7QUFBdUUsZ0JBQUksRUFBQyxjQUE1RTtBQUEyRixpQkFBSyxFQUFFRixLQUFLLENBQUNxQyxZQUF4RztBQUF1SCx1QkFBVyxFQUFDO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsRUFHQ2IsVUFBVSxDQUFDYSxZQUFYLENBQXdCMUMsTUFBeEIsR0FBaUMsQ0FBakMsaUJBQ0c7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUEsc0JBQWdDNkIsVUFBVSxDQUFDYTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExRkosRUFvR09yQyxLQUFLLENBQUN5QixHQUFOLElBQWFKLFlBQVksRUFwR2hDLEVBd0dRckIsS0FBSyxDQUFDeUIsR0FBTixnQkFBYTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNiO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBeUMsZUFBSyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWIsZ0JBRU87QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDUDtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMkIsY0FBSSxFQUFDLFFBQWhDO0FBQXlDLGVBQUssRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFHZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYQTtBQUFBLGtCQUROO0FBNEhFLENBakxOOztHQUFNMUIsVTs7S0FBQUEsVTtBQW1MU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU11QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxvQkFHVHhELHdEQUFVLENBQUNDLHNFQUFELENBSEQ7QUFBQSxNQUdsQndELEtBSGtCLGVBR2xCQSxLQUhrQjs7QUFNekIsc0JBQ0k7QUFBQSxjQUNTQSxLQUFLLElBQUlDLFNBQVQsZ0JBQ0cscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGdCQUVHLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWixtQkFESjtBQU9FLENBYk47O0dBQU1GLGM7O0tBQUFBLGM7QUFlU0EsNkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLG9CQUVtQjNELHdEQUFVLENBQUNDLHNFQUFELENBRjdCO0FBQUEsTUFFbEJpQixLQUZrQixlQUVsQkEsS0FGa0I7QUFBQSxNQUVYVSxRQUZXLGVBRVhBLFFBRlc7QUFBQSxNQUVEZ0MsZ0JBRkMsZUFFREEsZ0JBRkM7O0FBTXpCLHNCQUNRO0FBQUEsNEJBQ0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTSxjQUFRLEVBQUUxQyxLQUFLLENBQUN5QixHQUFOLElBQWFlLFNBQWIsR0FBMEJFLGdCQUExQixHQUE2QztBQUFBLGVBQUtoQyxRQUFRLEVBQWI7QUFBQSxPQUE3RDtBQUFBLDhCQUVBO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLG9DQUNBO0FBQUEsd0JBQUlWLEtBQUssQ0FBQzJCLE1BQU4sQ0FBYUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVJO0FBQUEsd0JBQUk1QixLQUFLLENBQUMyQixNQUFOLENBQWFFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHQTtBQUFBLHdCQUFJN0IsS0FBSyxDQUFDMkIsTUFBTixDQUFhRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFTSTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxVQUFoQjtBQUFBLG9DQUNBO0FBQUEsd0JBQUk5QixLQUFLLENBQUMrQixRQUFOLENBQWVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFBLHdCQUFJNUIsS0FBSyxDQUFDK0IsUUFBTixDQUFlRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLGVBR0E7QUFBQSx3QkFBSTdCLEtBQUssQ0FBQytCLFFBQU4sQ0FBZUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBaUJJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0k7QUFBQSxzQkFBSTlCLEtBQUssQ0FBQ2dDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQUloQyxLQUFLLENBQUNpQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLHNCQUFJakMsS0FBSyxDQUFDa0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSxzQkFBSWxDLEtBQUssQ0FBQ21DO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsc0JBQUluQyxLQUFLLENBQUNvQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFBLHNCQUFJcEMsS0FBSyxDQUFDcUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBQSxzQkFBSXJDLEtBQUssQ0FBQ3NCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUEsc0JBQUl0QixLQUFLLENBQUN1QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxFQThCS3ZCLEtBQUssQ0FBQ3lCLEdBQU4sZ0JBQWE7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDVjtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMkIsY0FBSSxFQUFDLFFBQWhDO0FBQXlDLGVBQUssRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFiLGdCQUVTO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ047QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTJCLGNBQUksRUFBQyxRQUFoQztBQUF5QyxlQUFLLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFEUjtBQXlDRSxDQS9DTjs7R0FBTWdCLGM7O0tBQUFBLGM7QUFpRFNBLDZFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsb0JBQ083RCx3REFBVSxDQUFDQyxpRkFBRCxDQURqQjtBQUFBLE1BQ1g2RCxjQURXLGVBQ1hBLGNBRFc7O0FBR2xCLHNCQUFRO0FBQUEsZUFDTkEsY0FBYyxpQkFDUixxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFJSjtBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBLDZCQUNRLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkk7QUFBQSxrQkFBUjtBQVFFLENBWE47O0dBQU1ELE87O0tBQUFBLE87QUFhU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4yYjk0MGU3OGY1YTA1MjZhYzJjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NoZWNrTWFyaywgY2xvc2UgfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuY29uc3QgUmVxdWVzdFN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgICBjb25zdCBiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzZXRSZXF1ZXN0U3VjY2Vzc309IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5yZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdHRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlN1Y2Nlc3M8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PiBiYWNrKCl9PntjbG9zZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tlZFwiPiB7IGNoZWNrTWFyaygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3RfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBSZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbiBhZG1pbiB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHksIGNoZWNrIHlvdXIgdHJhbnNhY3Rpb24gcGFnZSB0byBrbm93IHRoZSBzdGF0dXMgb2YgeW91ciByZXF1ZXN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdFwiIG9uQ2xpY2s9eyAoKT0+IGJhY2soKX0+PHNwYW4+RG9uZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFN1Ym1pdDsiLCJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHVzZUNTUzogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDBcclxuICB9O1xyXG4gIGNvbnN0IHtwZXJtYW5lbnRJbWFnZXN9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAge3Blcm1hbmVudEltYWdlcy5sZW5ndGggPiAwICYmIHBlcm1hbmVudEltYWdlcy5tYXAoKHtpbWd9KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBrZXk9e3V1aWR2NCgpfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7dXBsb2FkfSBmcm9tIFwiLi4vLi4vc3ZnXCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBBZGRSZXF1ZXN0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtpbnB1dCwgZXJyb3IsIGhhbmRsZUNoYW5nZSwgaGFuZGxlUmVjZWl2ZXIsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgcmVxdWVzdEltYWdlcywgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXRDb3VudH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzT3B0aW9uLCBzZXRTdGF0dXNPcHRpb25dID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtvcHRpb25zOiBcInBlbmRpbmdcIn0sIFxyXG4gICAgICAgIHtvcHRpb25zOiBcInByb2Nlc3NpbmdcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwiY2FuY2VsZWRcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwib25Ib2xkXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcImNvbXBsZXRlZFwifVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IHBob3RvU291cmNlID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGVtcG9yYXJ5SW1hZ2UgfHwgcmVxdWVzdEltYWdlcyApe1xyXG4gICAgICAgICAgICByZXR1cm4oPD4ge3JlcXVlc3RJbWFnZXMubWFwKCh7Y2xvdWRVcmx9KSA9PiB0ZW1wb3JhcnlJbWFnZS5tYXAoKHtpbWFnZVNvdXJjZX0pID0+IFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y2xvdWRVcmwgPyBjbG91ZFVybCA6IGltYWdlU291cmNlfSBrZXk9e3V1aWR2NCgpfSAvPlxyXG4gICAgICAgICAgICApICl9XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICByZXR1cm4gKDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+IClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLWNoYW5nZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cInN0YXR1c1wiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtpbnB1dC5zdGF0dXN9IG5hbWU9XCJzdGF0dXNcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzT3B0aW9uLm1hcCgoe29wdGlvbnN9KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb25zfSBrZXk9e3V1aWR2NCgpfT57b3B0aW9uc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhbW91bnRcIiBuYW1lPVwiYW1vdW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2lucHV0LmFtb3VudH0gdHlwZT1cIm51bWJlclwiLz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7Zm9ybUVycm9ycyB9ID0gey4uLmlucHV0fVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGVtcG9yYXJ5SW1hZ2UgPyBwaG90b1NvdXJjZSgpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8ZGl2PntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyAgaW5wdXQuX2lkID8gKGUpPT4gaGFuZGxlUmVxdWVzdFVwZGF0ZShlLCBpbnB1dC5faWQpIDogKGUpPT4gIGhhbmRsZUZvcm1QcmV2aWV3KGUpIH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXItY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgIDxoMz5TZW5kZXIgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlckZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgIH0gaWQ9XCJzZW5kZXJGaXJzdE5hbWVcIiAgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtpbnB1dC5zZW5kZXIuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlclBob25lTnVtYmVyMVwiPlBob25lIE51bWJlcjE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzZW5kZXJwaG9uZU51bWJlcjFcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlICB9IG5hbWU9XCJwaG9uZU51bWJlcjFcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMX0gIHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZU51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjEubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlcnBob25lTnVtYmVyMlwiPlBob25lIE51bWJlciAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwic2VuZGVycGhvbmVOdW1iZXIyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSB9IG5hbWU9XCJwaG9uZU51bWJlcjJcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMn0gIHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZU51bWJlcjIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIyLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgzPlJlY2VpdmVyIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicmVjZWl2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVyRmlyc3RuYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZWNlaXZlckZpcnN0bmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIuZmlyc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVyUGhvbmVOdW1iZXIxXCI+UGhvbmUgTnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInJlY2VpdmVycGhvbmVOdW1iZXIxXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwicGhvbmVOdW1iZXIxXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMX0gcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lTnVtYmVyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIxLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVycGhvbmVOdW1iZXIyXCI+UGhvbmUgTnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJyZWNlaXZlcnBob25lTnVtYmVyMlwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cInBob25lTnVtYmVyMlwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjJ9IHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZU51bWJlcjIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFnTmFtZVwiPlRhZyBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ05hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwidGFnTmFtZVwiIHZhbHVlPXtpbnB1dC50YWdOYW1lfSBwbGFjZWhvbGRlcj1cIlRhZyBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMudGFnTmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnRhZ05hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQ2FydG9uc1wiPk51bWJlciBvZiBjYXJ0b25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiQ2FydG9uc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJjYXJ0b25zXCIgdmFsdWU9e2lucHV0LmNhcnRvbnN9IHBsYWNlaG9sZGVyPVwiQ2FydG9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5jYXJ0b25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuY2FydG9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlckl0ZW1zXCI+T3RoZXIgSXRlbXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm90aGVySXRlbXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hlY2t9IG5hbWU9XCJvdGhlckl0ZW1zXCIgdmFsdWU9e2lucHV0Lm90aGVySXRlbXN9IHBsYWNlaG9sZGVyPVwib3RoZXJJdGVtc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5vdGhlckl0ZW1zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMub3RoZXJJdGVtc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpdGVtc1dvcnRoXCI+SXRlbXMgV29ydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbXNXb3J0aFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJpdGVtc1dvcnRoXCIgdmFsdWU9e2lucHV0Lml0ZW1zV29ydGh9IHBsYWNlaG9sZGVyPVwiaXRlbXNXb3J0aFwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5pdGVtc1dvcnRoLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuaXRlbXNXb3J0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZWxpdmVyeUxvY2F0aW9uXCI+RGVsaXZlcnkgTG9jYXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlbGl2ZXJ5TG9jYXRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGVsaXZlcnlMb2NhdGlvbnNcIiB2YWx1ZT17aW5wdXQuZGVsaXZlcnlMb2NhdGlvbnN9ICBwbGFjZWhvbGRlcj1cImRlbGl2ZXJ5TG9jYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjQwXCIgcm93cz1cIjZcIiBpZD1cImRlc2NyaXB0aW9uc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJkZXNjcmlwdGlvbnNcIiB2YWx1ZT17aW5wdXQuZGVzY3JpcHRpb25zfSAgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvbnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuZGVzY3JpcHRpb25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZGVzY3JpcHRpb25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGNoYW5nZVN0YXR1cygpXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0Ll9pZCA/ICg8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiID5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJ1cGRhdGVcIi8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PikgOig8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInByZXZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlcXVlc3Q7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgQWRkUmVxdWVzdCBmcm9tICcuL2FkZFJlcXVlc3QnO1xyXG5pbXBvcnQgUmVxdWVzdFByZXZpZXcgZnJvbSAnLi9yZXF1ZXN0UHJldmlldyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3RIYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge2NvdW50fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y291bnQgPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICA8QWRkUmVxdWVzdCAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8UmVxdWVzdFByZXZpZXcgLz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RIYW5kbGVyOyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaW1wbGVTbGlkZXIgZnJvbSAnLi4vc2xpZGVyJztcclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0UHJldmlldyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aW5wdXQsIHNldENvdW50LCBoYW5kbGVGb3JtU3VibWl0fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gICBcclxuXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNpbXBsZVNsaWRlciAvPiBcclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtpbnB1dC5faWQgPT0gdW5kZWZpbmVkID8gIGhhbmRsZUZvcm1TdWJtaXQgOiAoKT0+IHNldENvdW50KCl9PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyLWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VuZGVyIGluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlci5maXJzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWNlaXZlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInJlY2VpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlci5maXJzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC50YWdOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmNhcnRvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQub3RoZXJJdGVtc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5pdGVtc1dvcnRofTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmRlbGl2ZXJ5TG9jYXRpb25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmRlc2NyaXB0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zdGF0dXN9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgeyBpbnB1dC5faWQgPyAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik6ICg8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFByZXZpZXc7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlcXVlc3RIYW5kbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L3JlcXVlc3RIYW5kbGVyJztcclxuaW1wb3J0IFJlcXVlc3RTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0JztcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3JlcXVlc3RTdWNjZXNzfSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgIHsgcmVxdWVzdFN1Y2Nlc3MgJiYgKFxyXG4gICAgICAgICAgICA8UmVxdWVzdFN1Ym1pdCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidXNlci1yZXF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdEhhbmRsZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/request",{

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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\slider.js",
    _s = $RefreshSig$();





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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      requestImages = _useContext.requestImages;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "slider-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "request-slider",
      children: requestImages[0] !== undefined && requestImages.map(function (_ref) {
        var cloudUrl = _ref.cloudUrl;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: cloudUrl
        }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXIuanMiXSwibmFtZXMiOlsiU2ltcGxlU2xpZGVyIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJpbmZpbml0ZSIsInVzZUNTUyIsInNsaWRlc1RvU2hvdyIsImRyYWdnYWJsZSIsInNwZWVkIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwicmVxdWVzdEltYWdlcyIsInVuZGVmaW5lZCIsIm1hcCIsImNsb3VkVXJsIiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3JDLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxhQUFTLEVBQUUsUUFESTtBQUVmQyxZQUFRLEVBQUUsSUFGSztBQUdmQyxVQUFNLEVBQUUsSUFITztBQUlmQyxnQkFBWSxFQUFFLENBSkM7QUFLZkMsYUFBUyxFQUFFLElBTEk7QUFNZkMsU0FBSyxFQUFFO0FBTlEsR0FBakI7O0FBRHFDLG9CQVNiQyx3REFBVSxDQUFDQyxzRUFBRCxDQVRHO0FBQUEsTUFTOUJDLGFBVDhCLGVBUzlCQSxhQVQ4Qjs7QUFVckMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUNHQSxhQUFhLENBQUMsQ0FBRCxDQUFiLEtBQXFCQyxTQUFyQixJQUFtQ0QsYUFBYSxDQUFDRSxHQUFkLENBQWtCO0FBQUEsWUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsNEJBQzVDO0FBQUssYUFBRyxFQUFFQTtBQUFWLFdBQXlCQywrQ0FBTSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ0QztBQUFBLE9BQWxCO0FBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FuQnVCZCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcXVlc3QuNTA0Y2NkOGVkODg0NjJjZTUxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcigpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgdXNlQ1NTOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMFxyXG4gIH07XHJcbiAgY29uc3Qge3JlcXVlc3RJbWFnZXN9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1zbGlkZXJcIj5cclxuICAgICAgICAgIHtyZXF1ZXN0SW1hZ2VzWzBdICE9PSB1bmRlZmluZWQgJiYgKHJlcXVlc3RJbWFnZXMubWFwKCh7Y2xvdWRVcmx9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjbG91ZFVybH0ga2V5PXt1dWlkdjQoKX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
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
      temporaryImage = _useContext.temporaryImage;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: temporaryImage.length > 0 && temporaryImage.map(function (_ref) {
      var imageSource = _ref.imageSource;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: imageSource
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

_s(SimpleSlider, "t+19Iw0NRF0FHtsbWY1/VqKoTM0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXIuanMiXSwibmFtZXMiOlsiU2ltcGxlU2xpZGVyIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJpbmZpbml0ZSIsInVzZUNTUyIsInNsaWRlc1RvU2hvdyIsImRyYWdnYWJsZSIsInNwZWVkIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwidGVtcG9yYXJ5SW1hZ2UiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZVNvdXJjZSIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUNyQyxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsYUFBUyxFQUFFLFFBREk7QUFFZkMsWUFBUSxFQUFFLElBRks7QUFHZkMsVUFBTSxFQUFFLElBSE87QUFJZkMsZ0JBQVksRUFBRSxDQUpDO0FBS2ZDLGFBQVMsRUFBRSxJQUxJO0FBTWZDLFNBQUssRUFBRTtBQU5RLEdBQWpCOztBQURxQyxvQkFTWkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FURTtBQUFBLE1BUzlCQyxjQVQ4QixlQVM5QkEsY0FUOEI7O0FBVXJDLHNCQUNFLHFFQUFDLGtEQUFELGtDQUFZVCxRQUFaO0FBQUEsY0FDR1MsY0FBYyxDQUFDQyxNQUFmLEdBQXdCLENBQXhCLElBQTZCRCxjQUFjLENBQUNFLEdBQWYsQ0FBbUI7QUFBQSxVQUFFQyxXQUFGLFFBQUVBLFdBQUY7QUFBQSwwQkFDbkM7QUFBSyxXQUFHLEVBQUVBO0FBQVYsU0FBNEJDLCtDQUFNLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUM7QUFBQSxLQUFuQjtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FqQnVCZCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcXVlc3QuMTk1MDliNTBmZjQ3ODcyYjFjNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcigpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgdXNlQ1NTOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMFxyXG4gIH07XHJcbiAgY29uc3Qge3RlbXBvcmFyeUltYWdlfSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgIHt0ZW1wb3JhcnlJbWFnZS5sZW5ndGggPiAwICYmIHRlbXBvcmFyeUltYWdlLm1hcCgoe2ltYWdlU291cmNlfSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlU291cmNlfSBrZXk9e3V1aWR2NCgpfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXIuanMiXSwibmFtZXMiOlsiU2ltcGxlU2xpZGVyIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJpbmZpbml0ZSIsInVzZUNTUyIsInNsaWRlc1RvU2hvdyIsImRyYWdnYWJsZSIsInNwZWVkIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwidGVtcG9yYXJ5SW1hZ2UiLCJsZW5ndGgiLCJtYXAiLCJpbWciLCJ1dWlkdjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDckMsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLGFBQVMsRUFBRSxRQURJO0FBRWZDLFlBQVEsRUFBRSxJQUZLO0FBR2ZDLFVBQU0sRUFBRSxJQUhPO0FBSWZDLGdCQUFZLEVBQUUsQ0FKQztBQUtmQyxhQUFTLEVBQUUsSUFMSTtBQU1mQyxTQUFLLEVBQUU7QUFOUSxHQUFqQjs7QUFEcUMsb0JBU1pDLHdEQUFVLENBQUNDLHNFQUFELENBVEU7QUFBQSxNQVM5QkMsY0FUOEIsZUFTOUJBLGNBVDhCOztBQVVyQyxzQkFDRSxxRUFBQyxrREFBRCxrQ0FBWVQsUUFBWjtBQUFBLGNBQ0dTLGNBQWMsQ0FBQ0MsTUFBZixHQUF3QixDQUF4QixJQUE2QkQsY0FBYyxDQUFDRSxHQUFmLENBQW1CO0FBQUEsVUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsMEJBQ25DO0FBQUssV0FBRyxFQUFFQTtBQUFWLFNBQW9CQywrQ0FBTSxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1DO0FBQUEsS0FBbkI7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBakJ1QmQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0Ljc4NzMwY2Y0MGM4YWFhYTY2YjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHVzZUNTUzogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDBcclxuICB9O1xyXG4gIGNvbnN0IHt0ZW1wb3JhcnlJbWFnZX0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICB7dGVtcG9yYXJ5SW1hZ2UubGVuZ3RoID4gMCAmJiB0ZW1wb3JhcnlJbWFnZS5tYXAoKHtpbWd9KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBrZXk9e3V1aWR2NCgpfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
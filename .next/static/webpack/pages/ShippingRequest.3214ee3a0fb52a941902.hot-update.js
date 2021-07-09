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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\AdminRequest\\BottomButton.js",
    _this = undefined,
    _s = $RefreshSig$();





var BottomButton = function BottomButton() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      selector = _useContext.selector;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bottom-button",
    children: [selector.map(function (_ref) {
      var content = _ref.content,
          icon = _ref.icon,
          title = _ref.title,
          id = _ref.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/".concat(content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "side-holder",
            children: [icon, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 89
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 53
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 49
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "counter",
      children: "20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblJlcXVlc3QvQm90dG9tQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJvdHRvbUJ1dHRvbiIsInVzZUNvbnRleHQiLCJSZXF1ZXN0Q29udGV4dCIsInNlbGVjdG9yIiwibWFwIiwiY29udGVudCIsImljb24iLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUFBOztBQUFBLG9CQUNGQyx3REFBVSxDQUFDQyxpRkFBRCxDQURSO0FBQUEsTUFDZEMsUUFEYyxlQUNkQSxRQURjOztBQUV0QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsZUFDQ0EsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxVQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxVQUFXQyxJQUFYLFFBQVdBLElBQVg7QUFBQSxVQUFpQkMsS0FBakIsUUFBaUJBLEtBQWpCO0FBQUEsVUFBd0JDLEVBQXhCLFFBQXdCQSxFQUF4QjtBQUFBLDBCQUNWLHFFQUFDLGdEQUFEO0FBQWUsWUFBSSxhQUFNSCxPQUFOLENBQW5CO0FBQUEsK0JBQW9DO0FBQUEsdUNBQUk7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSx1QkFBOEJDLElBQTlCLG9CQUFvQztBQUFBLHdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEMsU0FBV0MsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFiLENBREQsZUFJQTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQVZEOztHQUFNUixZOztLQUFBQSxZO0FBWVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NoaXBwaW5nUmVxdWVzdC4zMjE0ZWUzYTBmYjUyYTk0MTkwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQm90dG9tQnV0dG9uID0gKCk9PiB7XHJcbiAgICBjb25zdCB7IHNlbGVjdG9yfSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1idXR0b25cIj5cclxuICAgICAgICB7c2VsZWN0b3IubWFwKCh7Y29udGVudCwgaWNvbiwgdGl0bGUsIGlkfSkgPT5cclxuICAgICAgICAgICAgPExpbmsga2V5PXtpZH0gaHJlZj17YC8ke2NvbnRlbnR9YH0+PGE+IDxkaXYgY2xhc3NOYW1lPVwic2lkZS1ob2xkZXJcIj57aWNvbn0gPGgyPnt0aXRsZX08L2gyPjwvZGl2PiA8L2E+PC9MaW5rPlxyXG4gICAgICAgICkgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRlclwiPjIwPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21CdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==
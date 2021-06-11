webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/userLogin/userLogin.js":
/*!*******************************************!*\
  !*** ./components/userLogin/userLogin.js ***!
  \*******************************************/
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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();








var Dashboard = function Dashboard() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      isLogin = _useContext.isLogin;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  console.log(isLogin);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "dashboard_wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dashboard_holder",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Dashboard",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return router.replace('request');
          },
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_2__["box"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Ship Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return router.replace('profile');
          },
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_2__["profile"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return router.replace('transaction');
          },
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_2__["transaction"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Transaction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 14
  }, _this);
};

_s(Dashboard, "wkcU3DnxyUaGsuq3aK0sJB7lGdg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImJveCIsInByb2ZpbGUiLCJ0cmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0xDLHdEQUFVLENBQUNDLDJFQUFELENBREw7QUFBQSxNQUNoQkMsT0FEZ0IsZUFDaEJBLE9BRGdCOztBQUV0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBRUksU0FDRUEsT0FBTyxJQUFJLElBQVgsZ0JBQ0Y7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtDLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFNBQWYsQ0FBTDtBQUFBLFdBQWQ7QUFBOEMsbUJBQVMsRUFBQyxxQkFBeEQ7QUFBQSxxQkFDT0MsZ0RBQUcsRUFEVixlQUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQUssaUJBQU8sRUFBRTtBQUFBLG1CQUFLTCxNQUFNLENBQUNJLE9BQVAsQ0FBZSxTQUFmLENBQUw7QUFBQSxXQUFkO0FBQThDLG1CQUFTLEVBQUMscUJBQXhEO0FBQUEscUJBQ09FLG9EQUFPLEVBRGQsZUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFTSTtBQUFLLGlCQUFPLEVBQUU7QUFBQSxtQkFBS04sTUFBTSxDQUFDSSxPQUFQLENBQWUsYUFBZixDQUFMO0FBQUEsV0FBZDtBQUFrRCxtQkFBUyxFQUFDLHFCQUE1RDtBQUFBLHFCQUNPRyx3REFBVyxFQURsQixlQUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURFLGdCQWtCTyxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbkJUO0FBcUJFLENBM0JOOztHQUFNWCxTO1VBRVdLLHFEOzs7S0FGWEwsUztBQTZCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjlmNWI1MDk2ZGM5MDUxZjI4MmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge2JveCwgcHJvZmlsZSwgdHJhbnNhY3Rpb24gfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdHtpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG5jb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc0xvZ2luID09IHRydWUgP1xyXG4gICAoPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfd3JhcHBlclwiPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkX2hvbGRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5yZXBsYWNlKCdyZXF1ZXN0Jyl9IGNsYXNzTmFtZT1cIkRhc2hib2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtib3goKX1cclxuICAgICAgICAgICAgICAgIDxoMz5TaGlwIE5vdzwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3Byb2ZpbGUnKX0gY2xhc3NOYW1lPVwiRGFzaGJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2ZpbGUoKX1cclxuICAgICAgICAgICAgICAgIDxoMz5Qcm9maWxlPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5yZXBsYWNlKCd0cmFuc2FjdGlvbicpfSBjbGFzc05hbWU9XCJEYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIDxoMz5UcmFuc2FjdGlvbjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+KSA6IDxVc2VyTG9naW4gLz5cclxuXHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
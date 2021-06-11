webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/userLogin/userLogin.js":
/*!*******************************************!*\
  !*** ./components/userLogin/userLogin.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ "./components/context/AuthContext.js");


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\userLogin\\userLogin.js",
    _this = undefined,
    _s = $RefreshSig$();





var UserLogin = function UserLogin() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      login = _useContext.login,
      handleLoginChange = _useContext.handleLoginChange,
      handleLoginSubmit = _useContext.handleLoginSubmit;

  var formErrors = login.formErrors;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form_container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "overall-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "former",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: handleLoginSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: handleLoginChange,
              id: "email",
              name: "email",
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this), formErrors.email.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 22
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              onChange: handleLoginChange,
              id: "password",
              name: "password",
              placeholder: "Your last name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 21
            }, _this), formErrors.password.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "submit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "social-login",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: "login-tag",
        children: "Forgot password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Don't have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 69
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 48
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 44
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }, _this);
};

_s(UserLogin, "aQccuiP2hIxC1yKLfFjf7CmddjQ=");

_c = UserLogin;
/* harmony default export */ __webpack_exports__["default"] = (UserLogin);

var _c;

$RefreshReg$(_c, "UserLogin");

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
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiVXNlckxvZ2luIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwibG9naW4iLCJoYW5kbGVMb2dpbkNoYW5nZSIsImhhbmRsZUxvZ2luU3VibWl0IiwiZm9ybUVycm9ycyIsImVtYWlsIiwibGVuZ3RoIiwicGFzc3dvcmQiLCJEYXNoYm9hcmQiLCJpc0xvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJib3giLCJwcm9maWxlIiwidHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBRW1DQyx3REFBVSxDQUFDQyxnRUFBRCxDQUY3QztBQUFBLE1BRWJDLEtBRmEsZUFFYkEsS0FGYTtBQUFBLE1BRUxDLGlCQUZLLGVBRUxBLGlCQUZLO0FBQUEsTUFFY0MsaUJBRmQsZUFFY0EsaUJBRmQ7O0FBQUEsTUFHYkMsVUFIYSxHQUdDSCxLQUhELENBR2JHLFVBSGE7QUFLcEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0E7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUEsK0JBQ0E7QUFBTSxrQkFBUSxFQUFFRCxpQkFBaEI7QUFBQSxrQ0FDSTtBQUFBLG9DQUNBO0FBQU8scUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBRUE7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsRUFBRUQsaUJBQTdCO0FBQWdELGdCQUFFLEVBQUMsT0FBbkQ7QUFBMkQs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RUFBRTtBQUFBLG1CQUFLQyxNQUFNLENBQUNJLE9BQVAsQ0FBZSxTQUFmLENBQUw7QUFBQSxXQUFkO0FBQThDLG1CQUFTLEVBQUMscUJBQXhEO0FBQUEscUJBQ09DLGdEQUFHLEVBRFYsZUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSTtBQUFLLGlCQUFPLEVBQUU7QUFBQSxtQkFBS0wsTUFBTSxDQUFDSSxPQUFQLENBQWUsU0FBZixDQUFMO0FBQUEsV0FBZDtBQUE4QyxtQkFBUyxFQUFDLHFCQUF4RDtBQUFBLHFCQUNPRSxvREFBTyxFQURkLGVBRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBU0k7QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtOLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGFBQWYsQ0FBTDtBQUFBLFdBQWQ7QUFBa0QsbUJBQVMsRUFBQyxxQkFBNUQ7QUFBQSxxQkFDT0csd0RBQVcsRUFEbEIsZUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERSxnQkFrQk8scUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW5CVDtBQXFCRSxDQTNCTjs7R0FBTVQsUztVQUVXRyxxRDs7O0tBRlhILFM7QUE2QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5iODU0YzlmZmNhNjcxZTg3NGRiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBVc2VyTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2xvZ2luLCAgaGFuZGxlTG9naW5DaGFuZ2UsIGhhbmRsZUxvZ2luU3VibWl0fSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gbG9naW47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyYWxsLWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZvcm1lclwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0fT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuZW1haWwubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBsYXN0IG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5wYXNzd29yZC5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucGFzc3dvcmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsb2dpblwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Hb29nbGU8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJsb2dpbi10YWdcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9oNT4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgICAgICAgPGg1PkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2g1PjxoNT48TGluayBocmVmPVwiL3NpZ251cFwiPjxhPlNpZ24gdXA8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Ym94LCBwcm9maWxlLCB0cmFuc2FjdGlvbiB9IGZyb20gXCIuLi9zdmdcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4nO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0e2lzTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbmNvbnNvbGUubG9nKGlzTG9naW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTG9naW4gPT0gdHJ1ZSA/XHJcbiAgICg8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZF93cmFwcGVyXCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfaG9sZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3JlcXVlc3QnKX0gY2xhc3NOYW1lPVwiRGFzaGJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2JveCgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlNoaXAgTm93PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucmVwbGFjZSgncHJvZmlsZScpfSBjbGFzc05hbWU9XCJEYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZSgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlByb2ZpbGU8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3RyYW5zYWN0aW9uJyl9IGNsYXNzTmFtZT1cIkRhc2hib2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlRyYW5zYWN0aW9uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj4pIDogPFVzZXJMb2dpbiAvPlxyXG5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=
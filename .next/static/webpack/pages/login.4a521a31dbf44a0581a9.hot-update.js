webpackHotUpdate_N_E("pages/login",{

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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../svg */ "./svg.js");


var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\userLogin\\userLogin.js",
    _this = undefined,
    _s = $RefreshSig$();






var UserLogin = function UserLogin() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      userError = _useContext.userError,
      authenticating = _useContext.authenticating,
      handleLoginChange = _useContext.handleLoginChange,
      handleLoginSubmit = _useContext.handleLoginSubmit,
      handleSocialLogin = _useContext.handleSocialLogin;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form_container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "overall-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "former",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: handleLoginSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: handleLoginChange,
              id: "email",
              name: "email",
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 27
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              onChange: handleLoginChange,
              id: "password",
              name: "password",
              placeholder: "Your last name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 23
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "submit",
            children: userError !== undefined || authenticating !== true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 79
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "connecting..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 126
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: Object(_svg__WEBPACK_IMPORTED_MODULE_4__["innerLoader"])()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 152
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 117
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, _this), userError !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: userError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 49
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social-login",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "or sign in with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 27
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: handleSocialLogin,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_svg__WEBPACK_IMPORTED_MODULE_4__["Google"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 63
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 86
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 27
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "login-tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/ResetPassword",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Reset password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 74
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Don't have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 75
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 54
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 50
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, _this);
};

_s(UserLogin, "LZcirSQ8Mbrqdh3Wt/ImYNOb3JA=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luLmpzIl0sIm5hbWVzIjpbIlVzZXJMb2dpbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZXJFcnJvciIsImF1dGhlbnRpY2F0aW5nIiwiaGFuZGxlTG9naW5DaGFuZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsImhhbmRsZVNvY2lhbExvZ2luIiwidW5kZWZpbmVkIiwiaW5uZXJMb2FkZXIiLCJHb29nbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBRXlFQyx3REFBVSxDQUFDQyxnRUFBRCxDQUZuRjtBQUFBLE1BRWJDLFNBRmEsZUFFYkEsU0FGYTtBQUFBLE1BRUZDLGNBRkUsZUFFRkEsY0FGRTtBQUFBLE1BRWNDLGlCQUZkLGVBRWNBLGlCQUZkO0FBQUEsTUFFaUNDLGlCQUZqQyxlQUVpQ0EsaUJBRmpDO0FBQUEsTUFFb0RDLGlCQUZwRCxlQUVvREEsaUJBRnBEOztBQUlwQixzQkFBUTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDQTtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBQSxnQ0FDQTtBQUFNLGtCQUFRLEVBQUVELGlCQUFoQjtBQUFBLGtDQUNJO0FBQUEsb0NBQ0E7QUFBTyxxQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixzQkFBUSxFQUFFRCxpQkFBN0I7QUFBZ0QsZ0JBQUUsRUFBQyxPQUFuRDtBQUEyRCxrQkFBSSxFQUFDLE9BQWhFO0FBQXdFLHlCQUFXLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLTTtBQUFBLG9DQUNJO0FBQU8scUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBdUIsc0JBQVEsRUFBRUEsaUJBQWpDO0FBQW9ELGdCQUFFLEVBQUMsVUFBdkQ7QUFBa0Usa0JBQUksRUFBQyxVQUF2RTtBQUFrRix5QkFBVyxFQUFDO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxOLGVBU0k7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxzQkFDS0YsU0FBUyxLQUFLSyxTQUFkLElBQTJCSixjQUFjLEtBQUssSUFBOUMsZ0JBQXFEO0FBQU8sa0JBQUksRUFBQyxRQUFaO0FBQXFCLG1CQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBckQsZ0JBQTJGO0FBQUEsc0NBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVQsZUFBbUM7QUFBQSwwQkFBT0ssd0RBQVc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosRUFZS04sU0FBUyxLQUFLSyxTQUFkLGlCQUEyQjtBQUFNLHFCQUFTLEVBQUMsY0FBaEI7QUFBQSxzQkFBZ0NMO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQWVJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE4sZUFFTTtBQUFRLG1CQUFPLEVBQUVJLGlCQUFqQjtBQUFBLG9DQUFvQztBQUFBLHdCQUFPRyxtREFBTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBDLGVBQTJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBcUJGO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFDMEI7QUFBQSxpQ0FBSyxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsZ0JBQVg7QUFBQSxtQ0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRSxlQXlCRjtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBQ21DO0FBQUEsaUNBQUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFNBQVg7QUFBQSxtQ0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUErQkUsQ0FuQ047O0dBQU1WLFM7O0tBQUFBLFM7QUFxQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjRhNTIxYTMxZGJmNDRhMDU4MWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IEdvb2dsZSwgaW5uZXJMb2FkZXIgfSBmcm9tICcuLi8uLi9zdmcnO1xyXG5cclxuY29uc3QgVXNlckxvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHt1c2VyRXJyb3IsIGF1dGhlbnRpY2F0aW5nLCBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlTG9naW5TdWJtaXQsIGhhbmRsZVNvY2lhbExvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJmb3JtZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlTG9naW5DaGFuZ2V9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBsYXN0IG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckVycm9yICE9PSB1bmRlZmluZWQgfHwgYXV0aGVudGljYXRpbmcgIT09IHRydWUgPyA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIi8+OiA8YnV0dG9uID48c3Bhbj5jb25uZWN0aW5nLi4uPC9zcGFuPjxzcGFuPntpbm5lckxvYWRlcigpfTwvc3Bhbj48L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJFcnJvciAhPT0gdW5kZWZpbmVkICYmIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPnt1c2VyRXJyb3J9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm9yIHNpZ24gaW4gd2l0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNvY2lhbExvZ2lufT48c3Bhbj57R29vZ2xlKCl9PC9zcGFuPjxzcGFuPkdvb2dsZTwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXRhZ1wiPlxyXG4gICAgICAgICAgICAgIDxoNSA+Rm9yZ290IHBhc3N3b3JkPzwvaDU+PGg1ID48TGluayBocmVmPVwiL1Jlc2V0UGFzc3dvcmRcIj48YT5SZXNldCBwYXNzd29yZDwvYT48L0xpbms+PC9oNT4gXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2g1PjxoNT48TGluayBocmVmPVwiL3NpZ251cFwiPjxhPlNpZ24gdXA8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==
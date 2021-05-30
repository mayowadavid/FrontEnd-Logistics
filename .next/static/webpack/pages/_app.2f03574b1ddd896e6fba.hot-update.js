webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      profile = _useState4[0],
      setProfile = _useState4[1];

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

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

  var signout = /*#__PURE__*/function () {
    var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      var res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/signout')["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }

                console.log(error.config);
              });

            case 3:
              res = _context.sent;
              localStorage.clear();
              router.replace('/login');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signout(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleLoginChange = function handleLoginChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    var formErrors = login.formErrors;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_6__["loginValidate"])(name, value, formErrors);

    var newLogin = _objectSpread(_objectSpread({}, login), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setLogin(newLogin);
  };

  var handleSignupChange = function handleSignupChange(e) {
    var _signup = _objectSpread({}, signup),
        formErrors = _signup.formErrors;

    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_6__["singupValidate"])(name, value, formErrors);

    var newSignup = _objectSpread(_objectSpread({}, signup), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setSignup(newSignup);
  };

  var handleSignupSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e) {
      var res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/signup', signup)["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }

                console.log(error.config);
              });

            case 3:
              res = _context2.sent;
              res && res.status == 201 && (router.replace('/dashboard'), localStorage.setItem('token', res.data.token), console.log(success));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSignupSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleLoginSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
      var res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              setAuthenticating(true);
              _context3.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/signin', login)["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }

                console.log(error.config);
              });

            case 4:
              res = _context3.sent;
              res && res.status == 200 && (setAuthenticating(false), setAuthenticate(true), localStorage.setItem('token', res.data.token), setisLogin(true), router.replace('/dashboard'));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleLoginSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleAdminSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
      var res, _res$data, token, user, message;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              setAuthenticating(true);
              _context4.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/admin/signin', login)["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }

                console.log(error.config);
              });

            case 4:
              res = _context4.sent;

              if (res && res.status == 200) {
                setAuthenticating(false);
                setAuthenticate(true);
                setisLogin(true);
                _res$data = res.data, token = _res$data.token, user = _res$data.user;
                localStorage.setItem('token', token);
                message = "welcome";
                setSuccess(_objectSpread(_objectSpread({}, success), {}, {
                  message: message,
                  token: token,
                  user: user
                }));
                router.replace('/contact');
                console.log(success);
              }

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleAdminSubmit(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      sessionToken: sessionToken,
      signout: signout,
      setSessionToken: setSessionToken,
      login: login,
      signup: signup,
      isLogin: isLogin,
      setisLogin: setisLogin,
      handleLoginChange: handleLoginChange,
      handleSignupChange: handleSignupChange,
      handleSignupSubmit: handleSignupSubmit,
      handleLoginSubmit: handleLoginSubmit,
      handleAdminSubmit: handleAdminSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 9
  }, _this);
};

_s(AuthContextProvider, "zxrKEUsFZ2TyfdytW+7nGG6gz1I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNpZ25vdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiaGVhZGVycyIsInJlcXVlc3QiLCJjb25maWciLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGxhY2UiLCJoYW5kbGVMb2dpbkNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxvZ2luVmFsaWRhdGUiLCJuZXdMb2dpbiIsImhhbmRsZVNpZ251cENoYW5nZSIsInNpbmd1cFZhbGlkYXRlIiwibmV3U2lnbnVwIiwiaGFuZGxlU2lnbnVwU3VibWl0Iiwic2V0SXRlbSIsImhhbmRsZUxvZ2luU3VibWl0IiwiaGFuZGxlQWRtaW5TdWJtaXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6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VyxXQUFLLEVBQUxBLEtBQXpDO0FBQWdESixZQUFNLEVBQU5BLE1BQWhEO0FBQXdEVixhQUFPLEVBQVBBLE9BQXhEO0FBQWlFQyxnQkFBVSxFQUFWQSxVQUFqRTtBQUE2RWdELHVCQUFpQixFQUFqQkEsaUJBQTdFO0FBQWdHTSx3QkFBa0IsRUFBbEJBLGtCQUFoRztBQUFvSEcsd0JBQWtCLEVBQWxCQSxrQkFBcEg7QUFBd0lFLHVCQUFpQixFQUFqQkEsaUJBQXhJO0FBQTJKQyx1QkFBaUIsRUFBakJBO0FBQTNKLEtBQTdCO0FBQUEsY0FDSy9ELEtBQUssQ0FBQ2dFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F2TEQ7O0dBQU1qRSxtQjtVQWdDZTBCLHFEOzs7S0FoQ2YxQixtQjtBQXlMU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZjAzNTc0YjFkZGQ4OTZlNmZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBzaWdub3V0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWdub3V0JykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSBsb2dpbjtcclxuICAgICAgICBsb2dpblZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgbGV0IG5ld0xvZ2luID0geyAuLi5sb2dpbiwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICBsZXQgbmV3U2lnbnVwID0geyAuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvc2lnbnVwJywgc2lnbnVwKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIHJlcyAmJiAocmVzLnN0YXR1cyA9PSAyMDEgJiYgKFxyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpLFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS50b2tlbiksXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgIH07IFxyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWduaW4nLCBsb2dpbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJlcyAmJiAocmVzLnN0YXR1cyA9PSAyMDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aGVudGljYXRpbmcoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aGVudGljYXRlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pLFxyXG4gICAgICAgICAgICAgICAgc2V0aXNMb2dpbih0cnVlKSxcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJykpKVxyXG4gICAgICB9OyBcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUFkbWluU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW4vc2lnbmluJywgbG9naW4pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0ZSh0cnVlKTtcclxuICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgY29uc3Qge3Rva2VuLCB1c2VyfT0gcmVzLmRhdGE7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJ3ZWxjb21lXCI7XHJcbiAgICAgICAgc2V0U3VjY2Vzcyh7Li4uc3VjY2VzcywgbWVzc2FnZSwgdG9rZW4sIHVzZXJ9KTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2NvbnRhY3QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKVxyXG4gICAgICAgfVxyXG4gICAgICB9OyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzaWdub3V0LCBzZXRTZXNzaW9uVG9rZW4sIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZVNpZ251cFN1Ym1pdCwgaGFuZGxlTG9naW5TdWJtaXQsIGhhbmRsZUFkbWluU3VibWl0fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
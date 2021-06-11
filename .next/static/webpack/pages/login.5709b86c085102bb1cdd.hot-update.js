webpackHotUpdate_N_E("pages/login",{

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
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  }),
      login = _useState4[0],
      setLogin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticate = _useState5[0],
      setAuthenticate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticating = _useState6[0],
      setAuthenticating = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      error = _useState7[0],
      setError = _useState7[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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
      success = _useState8[0],
      setSuccess = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].onAuthStateChanged(function (user) {
      user == null ? setisLogin(false) : setisLogin(true);
    });
  }, []);

  var signout = /*#__PURE__*/function () {
    var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      var res;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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

    var newLogin = _objectSpread(_objectSpread({}, login), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setLogin(newLogin);
  };

  var handleSignupChange = function handleSignupChange(e) {
    var _signup = _objectSpread({}, signup),
        formErrors = _signup.formErrors;

    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_6__["singupValidate"])(name, value, formErrors);

    var newSignup = _objectSpread(_objectSpread({}, signup), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setSignup(newSignup);
  };

  var handleSignupSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e) {
      var firstName, lastName, email, phoneNumber, password;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              firstName = signup.firstName, lastName = signup.lastName, email = signup.email, phoneNumber = signup.phoneNumber, password = signup.password;
              _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].createUserWithEmailAndPassword(email, password).then(function (cred) {
                return _firebase__WEBPACK_IMPORTED_MODULE_8__["database"].collection('Profile').doc(cred.user.uid).set({
                  phoneNumber: phoneNumber,
                  email: email,
                  firstName: firstName,
                  lastName: lastName
                });
              }).then(function () {
                setisLogin(true);
                router.replace('dashboard');
              });

            case 3:
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

  var handleSignout = function handleSignout(e) {
    e.preventDefault();
    var firstName = signup.firstName,
        lastName = signup.lastName,
        email = signup.email,
        phoneNumber = signup.phoneNumber,
        password = signup.password;
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].signOut();
  };

  var handleSocialLogin = function handleSocialLogin(e) {
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_8__["provider"]).then(function () {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    setAuthenticating(true);
    var email = login.email,
        password = login.password;
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].signInWithEmailAndPassword(email, password).then(function () {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  var handleAdminSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
      var res, _res$data, token, user, message;

      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              setAuthenticating(true);
              _context3.next = 4;
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
              res = _context3.sent;

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
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleAdminSubmit(_x3) {
      return _ref3.apply(this, arguments);
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
      handleSocialLogin: handleSocialLogin,
      handleSignupChange: handleSignupChange,
      handleSignout: handleSignout,
      handleSignupSubmit: handleSignupSubmit,
      handleLoginSubmit: handleLoginSubmit,
      handleAdminSubmit: handleAdminSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 9
  }, _this);
};

_s(AuthContextProvider, "DShhVGmJOyxYMa1QBHVMZ3fjROs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRlIiwic2V0QXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbm91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsImNvbmZpZyIsInJlcyIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwicmVwbGFjZSIsImhhbmRsZUxvZ2luQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibG9naW5WYWxpZGF0ZSIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiY3JlZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJoYW5kbGVBZG1pblN1Ym1pdCIsInNldEl0ZW0iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR0tGLHNEQUFRLEVBSGI7QUFBQSxNQUc1QkcsWUFINEI7QUFBQSxNQUdkQyxlQUhjOztBQUFBLG1CQUlQSixzREFBUSxDQUFDO0FBQ25DSyxhQUFTLEVBQUUsRUFEd0I7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxlQUFXLEVBQUUsRUFKc0I7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxFQUZGO0FBR1JDLFdBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFXLEVBQUUsRUFKTDtBQUtSQyxjQUFRLEVBQUU7QUFMRjtBQU51QixHQUFELENBSkQ7QUFBQSxNQUk1QkUsTUFKNEI7QUFBQSxNQUlwQkMsU0FKb0I7O0FBQUEsbUJBb0JUWixzREFBUSxDQUFDO0FBQy9CTyxTQUFLLEVBQUUsRUFEd0I7QUFFL0JFLFlBQVEsRUFBRSxFQUZxQjtBQUcvQkMsY0FBVSxFQUFFO0FB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O0FBQXdEVixhQUFPLEVBQVBBLE9BQXhEO0FBQWlFQyxnQkFBVSxFQUFWQSxVQUFqRTtBQUE2RWlELHVCQUFpQixFQUFqQkEsaUJBQTdFO0FBQWdHb0IsdUJBQWlCLEVBQWpCQSxpQkFBaEc7QUFBbUhkLHdCQUFrQixFQUFsQkEsa0JBQW5IO0FBQXVJWSxtQkFBYSxFQUFiQSxhQUF2STtBQUFzSlQsd0JBQWtCLEVBQWxCQSxrQkFBdEo7QUFBMEtjLHVCQUFpQixFQUFqQkEsaUJBQTFLO0FBQTZMRSx1QkFBaUIsRUFBakJBO0FBQTdMLEtBQTdCO0FBQUEsY0FDSzdFLEtBQUssQ0FBQytFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F6S0Q7O0dBQU1oRixtQjtVQWdDZXdCLHFEOzs7S0FoQ2Z4QixtQjtBQTJLU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTcwOWI4NmMwODUxMDJiYjFjZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGUsIHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0ZSwgc2V0QXV0aGVudGljYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0aW5nLCBzZXRBdXRoZW50aWNhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICB1c2VyOiB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgX2lkOiAnJ30gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgdXNlciA9PSBudWxsID8gc2V0aXNMb2dpbihmYWxzZSkgOiBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgY29uc3Qgc2lnbm91dCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvc2lnbm91dCcpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gbG9naW47XHJcbiAgICAgICAgbG9naW5WYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdMb2dpbiA9IHsgLi4ubG9naW4sIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0TG9naW4obmV3TG9naW4pXHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSB7Li4uc2lnbnVwfVxyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzaW5ndXBWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgbGV0IG5ld1NpZ251cCA9IHsgLi4uc2lnbnVwLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldFNpZ251cChuZXdTaWdudXApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cFN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICApLnRoZW4oKCk9PntcclxuICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgYXV0aC5zaWduT3V0KClcclxuICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvY2lhbExvZ2luID0gKGUpID0+IHtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS50aGVuKCgpPT57XHJcbiAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCk9PntcclxuICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH07IFxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQWRtaW5TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbi9zaWduaW4nLCBsb2dpbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRlKHRydWUpO1xyXG4gICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICBjb25zdCB7dG9rZW4sIHVzZXJ9PSByZXMuZGF0YTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIndlbGNvbWVcIjtcclxuICAgICAgICBzZXRTdWNjZXNzKHsuLi5zdWNjZXNzLCBtZXNzYWdlLCB0b2tlbiwgdXNlcn0pO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvY29udGFjdCcpO1xyXG4gICAgICAgfVxyXG4gICAgICB9OyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzaWdub3V0LCBzZXRTZXNzaW9uVG9rZW4sIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVTaWdub3V0LCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0LCBoYW5kbGVBZG1pblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
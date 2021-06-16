webpackHotUpdate_N_E("pages/dashboard",{

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
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
    formErrors: {
      email: ''
    }
  }),
      resetPassword = _useState4[0],
      setResetPassword = _useState4[1];

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].onAuthStateChanged(function (user) {
      user == null ? setisLogin(false) : setisLogin(true);
    });
  }, []);

  var handleLoginChange = function handleLoginChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    var formErrors = login.formErrors;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["loginValidate"])(name, value, formErrors);

    var newLogin = _objectSpread(_objectSpread({}, login), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value));

    return setLogin(newLogin);
  };

  var handleSignupChange = function handleSignupChange(e) {
    var _signup = _objectSpread({}, signup),
        formErrors = _signup.formErrors;

    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["singupValidate"])(name, value, formErrors);

    var newSignup = _objectSpread(_objectSpread({}, signup), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value));

    return setSignup(newSignup);
  };

  var handleSignupSubmit = /*#__PURE__*/function () {
    var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var firstName, lastName, email, phoneNumber, password;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              firstName = signup.firstName, lastName = signup.lastName, email = signup.email, phoneNumber = signup.phoneNumber, password = signup.password;
              _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].createUserWithEmailAndPassword(email, password).then(function (cred) {
                return _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
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
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSignupSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleAdminSignUp = function handleAdminSignUp(e) {
    e.preventDefault();
    var firstName = signup.firstName,
        lastName = signup.lastName,
        email = signup.email,
        phoneNumber = signup.phoneNumber,
        password = signup.password;
    var addAdminRole = _firebase__WEBPACK_IMPORTED_MODULE_7__["functions"].httpsCallable('addAdminRole');
    addAdminRole(email).then(function (cred) {
      console.log(cred);
    }); // auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    //   return database.collection('Profile').doc(cred.user.uid).set({
    //     phoneNumber, email, firstName, lastName
    //   })}
    // ).then(()=>{
    //   setisLogin(true);
    //   router.replace('dashboard');
    // } )
  };

  var handleSignout = function handleSignout(e) {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signOut().then(function () {// Sign-out successful.
    })["catch"](function (error) {// An error happened.
    });
  };

  var passwordReset = function passwordReset(e) {
    e.preventDefault();
    var email = resetPassword.email;
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].sendPasswordResetEmail(email).then(function () {})["catch"](function (error) {
      setError(error.message);
    });
  };

  var handlePasswordChange = function handlePasswordChange(e) {
    e.preventDefault();
    var _e$target3 = e.target,
        name = _e$target3.name,
        value = _e$target3.value;
    var formErrors = resetPassword.formErrors;
    var emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
    setResetPassword(_objectSpread(_objectSpread({}, resetPassword), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
  };

  var handleSocialLogin = function handleSocialLogin(e) {
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
      user && user.uid && setLogin(true);
      console.log(user); // ...
    })["catch"](function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    });
  };

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    console.log("mounted");
    setAuthenticating(true);
    var email = login.email,
        password = login.password;
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithEmailAndPassword(email, password).then(function () {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      sessionToken: sessionToken,
      setSessionToken: setSessionToken,
      passwordReset: passwordReset,
      resetPassword: resetPassword,
      handlePasswordChange: handlePasswordChange,
      login: login,
      signup: signup,
      isLogin: isLogin,
      setisLogin: setisLogin,
      handleLoginChange: handleLoginChange,
      handleSocialLogin: handleSocialLogin,
      handleSignupChange: handleSignupChange,
      handleAdminSignUp: handleAdminSignUp,
      handleSignout: handleSignout,
      handleSignupSubmit: handleSignupSubmit,
      handleLoginSubmit: handleLoginSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 9
  }, _this);
};

_s(AuthContextProvider, "EdBAzS+BqKv21X+Odxbfal1XyT4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJyZXNldFBhc3N3b3JkIiwic2V0UmVzZXRQYXNzd29yZCIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJoYW5kbGVMb2dpbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsb2dpblZhbGlkYXRlIiwibmV3TG9naW4iLCJoYW5kbGVTaWdudXBDaGFuZ2UiLCJzaW5ndXBWYWxpZGF0ZSIsIm5ld1NpZ251cCIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJyZXBsYWNlIiwiaGFuZGxlQWRtaW5TaWduVXAiLCJhZGRBZG1pblJvbGUiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwicGFzc3dvcmRSZXNldCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVQLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJDLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUFBLG1CQUdLRixzREFBUSxFQUhiO0FBQUEsTUFHNUJHLFlBSDRCO0FBQUEsTUFHZEMsZUFIYzs7QUFBQSxtQkFJUEosc0RBQVEsQ0FBQztBQUNuQ0ssYUFBUyxFQUFFLEVBRHdCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLFNBQUssRUFBRSxFQUg0QjtBQUluQ0MsZUFBVyxFQUFFLEVBSnNCO0FBS25DQyxZQUFRLEVBQUUsRUFMeUI7QUFNbkNDLGNBQVUsRUFBRTtBQUNSTCxlQUFTLEVBQUUsRUFESDtBQUVSQyxjQUFRLEVBQUUsRUFGRjtBQUdSQyxXQUFLLEVBQUUsRUFIQztBQUlSQyxpQkFBVyxFQUFFLEVBSkw7QUFLUkMsY0FBUSxFQUFFO0FBTEY7QUFOdUIsR0FBRCxDQUpEO0FB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bEJBLGtCQUE5SjtBQUFrTGMsdUJBQWlCLEVBQWpCQSxpQkFBbEw7QUFBcU1NLG1CQUFhLEVBQWJBLGFBQXJNO0FBQW9OakIsd0JBQWtCLEVBQWxCQSxrQkFBcE47QUFBd09tQyx1QkFBaUIsRUFBakJBO0FBQXhPLEtBQTdCO0FBQUEsY0FDS2xGLEtBQUssQ0FBQ29GO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0E1S0Q7O0dBQU1yRixtQjtVQXNDZTBCLHFEOzs7S0F0Q2YxQixtQjtBQThLU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmM5OWE5OTQ1NjJhMTJmOTBiODNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSwgcHJvdmlkZXIsIGZ1bmN0aW9ucyB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTsgXHJcbiAgICBjb25zdCBbc2lnbnVwLCBzZXRTaWdudXBdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCBzZXRSZXNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IGxvZ2luO1xyXG4gICAgICAgIGxvZ2luVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgICBsZXQgbmV3TG9naW4gPSB7IC4uLmxvZ2luLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldExvZ2luKG5ld0xvZ2luKVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gey4uLnNpZ251cH1cclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2luZ3VwVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIGxldCBuZXdTaWdudXAgPSB7IC4uLnNpZ251cCwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTaWdudXAobmV3U2lnbnVwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluU2lnblVwID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgIGNvbnN0IGFkZEFkbWluUm9sZSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdhZGRBZG1pblJvbGUnKTtcclxuICAgICAgYWRkQWRtaW5Sb2xlKGVtYWlsKS50aGVuKGNyZWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgLy8gICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAvLyAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgIC8vICAgfSl9XHJcbiAgICAgIC8vICkudGhlbigoKT0+e1xyXG4gICAgICAvLyAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIC8vICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAvLyB9IClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbm91dCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBwYXNzd29yZFJlc2V0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtlbWFpbH09IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCk9PiB7fSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB7Zm9ybUVycm9yc30gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcbiAgICBmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcbiAgICBzZXRSZXNldFBhc3N3b3JkKHsuLi5yZXNldFBhc3N3b3JkLCBbbmFtZV06IHZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibW91bnRlZFwiKTtcclxuICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigoKT0+e1xyXG4gICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgfSlcclxuICB9OyBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbiwgcGFzc3dvcmRSZXNldCwgcmVzZXRQYXNzd29yZCwgaGFuZGxlUGFzc3dvcmRDaGFuZ2UsIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVBZG1pblNpZ25VcCwgaGFuZGxlU2lnbm91dCwgaGFuZGxlU2lnbnVwU3VibWl0LCBoYW5kbGVMb2dpblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
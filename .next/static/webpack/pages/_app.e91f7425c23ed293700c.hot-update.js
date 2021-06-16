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
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
      var data = user.displayName.split(" ");
      var firstName = data[0];
      var lastName = data[1];
      firstName !== undefined && _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
        firstName: firstName,
        lastName: lastName
      });
      user && user.uid && setLogin(true); // ...
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
    lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJyZXNldFBhc3N3b3JkIiwic2V0UmVzZXRQYXNzd29yZCIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJoYW5kbGVMb2dpbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsb2dpblZhbGlkYXRlIiwibmV3TG9naW4iLCJoYW5kbGVTaWdudXBDaGFuZ2UiLCJzaW5ndXBWYWxpZGF0ZSIsIm5ld1NpZ251cCIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJyZXBsYWNlIiwiaGFuZGxlQWRtaW5TaWduVXAiLCJhZGRBZG1pblJvbGUiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwicGFzc3dvcmRSZXNldCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJkaXNwbGF5TmFtZSIsInNwbGl0IiwidW5kZWZpbmVkIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR0tGLHNEQUFRLEVBSGI7QUFBQSxNQUc1QkcsWUFINEI7QUFBQSxNQUdkQyxlQUhjOztBQUFBLG1CQUlQSixzREFBUSxDQUFDO0FBQ25DSyxhQUFTLEVBQUUsRUFEd0I7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxlQUFXLEVBQUUsRUFKc0I7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxFQUZGO0FBR1JDLFdBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFXLEVBQUUsRUFK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O0FBY0Usc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUNyRCxrQkFBWSxFQUFaQSxZQUFEO0FBQWVDLHFCQUFlLEVBQWZBLGVBQWY7QUFBZ0M2RCxtQkFBYSxFQUFiQSxhQUFoQztBQUErQ3BELG1CQUFhLEVBQWJBLGFBQS9DO0FBQThEc0QsMEJBQW9CLEVBQXBCQSxvQkFBOUQ7QUFBb0ZwRCxXQUFLLEVBQUxBLEtBQXBGO0FBQTJGSixZQUFNLEVBQU5BLE1BQTNGO0FBQW1HVixhQUFPLEVBQVBBLE9BQW5HO0FBQTRHQyxnQkFBVSxFQUFWQSxVQUE1RztBQUF3SGtDLHVCQUFpQixFQUFqQkEsaUJBQXhIO0FBQTJJb0MsdUJBQWlCLEVBQWpCQSxpQkFBM0k7QUFBOEo3Qix3QkFBa0IsRUFBbEJBLGtCQUE5SjtBQUFrTGMsdUJBQWlCLEVBQWpCQSxpQkFBbEw7QUFBcU1NLG1CQUFhLEVBQWJBLGFBQXJNO0FBQW9OakIsd0JBQWtCLEVBQWxCQSxrQkFBcE47QUFBd091Qyx1QkFBaUIsRUFBakJBO0FBQXhPLEtBQTdCO0FBQUEsY0FDS3RGLEtBQUssQ0FBQ3dGO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FqTEQ7O0dBQU16RixtQjtVQXNDZTBCLHFEOzs7S0F0Q2YxQixtQjtBQW1MU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lOTFmNzQyNWMyM2VkMjkzNzAwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGUsIHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UsIHByb3ZpZGVyLCBmdW5jdGlvbnMgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7IFxyXG4gICAgY29uc3QgW3NpZ251cCwgc2V0U2lnbnVwXSA9IHVzZVN0YXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzZXRQYXNzd29yZCwgc2V0UmVzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0ZSwgc2V0QXV0aGVudGljYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0aW5nLCBzZXRBdXRoZW50aWNhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICB1c2VyOiB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgX2lkOiAnJ30gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgdXNlciA9PSBudWxsID8gc2V0aXNMb2dpbihmYWxzZSkgOiBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSBsb2dpbjtcclxuICAgICAgICBsb2dpblZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgbGV0IG5ld0xvZ2luID0geyAuLi5sb2dpbiwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICBsZXQgbmV3U2lnbnVwID0geyAuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT57XHJcbiAgICAgICAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlciwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWVcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9IClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZG1pblNpZ25VcCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICBjb25zdCBhZGRBZG1pblJvbGUgPSBmdW5jdGlvbnMuaHR0cHNDYWxsYWJsZSgnYWRkQWRtaW5Sb2xlJyk7XHJcbiAgICAgIGFkZEFkbWluUm9sZShlbWFpbCkudGhlbihjcmVkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjcmVkKTtcclxuICAgICAgfSlcclxuICAgICAgLy8gYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT57XHJcbiAgICAgIC8vICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgLy8gICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAvLyAgIH0pfVxyXG4gICAgICAvLyApLnRoZW4oKCk9PntcclxuICAgICAgLy8gICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAvLyAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgLy8gfSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgcGFzc3dvcmRSZXNldCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7ZW1haWx9PSByZXNldFBhc3N3b3JkO1xyXG4gICAgYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpPT4ge30pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gcmVzZXRQYXNzd29yZDtcclxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSBSZWdFeHAoIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pO1xyXG4gICAgZm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG4gICAgc2V0UmVzZXRQYXNzd29yZCh7Li4ucmVzZXRQYXNzd29yZCwgW25hbWVdOiB2YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU29jaWFsTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAvKiogQHR5cGUge2ZpcmViYXNlLmF1dGguT0F1dGhDcmVkZW50aWFsfSAqL1xyXG4gICAgICB2YXIgY3JlZGVudGlhbCA9IHJlc3VsdC5jcmVkZW50aWFsO1xyXG4gICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgdmFyIHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgIGxldCBkYXRhID0gdXNlci5kaXNwbGF5TmFtZS5zcGxpdChcIiBcIik7XHJcbiAgICAgIGxldCBmaXJzdE5hbWU9IGRhdGFbMF07XHJcbiAgICAgIGxldCBsYXN0TmFtZSA9IGRhdGFbMV07XHJcbiAgICAgICBmaXJzdE5hbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigoKT0+e1xyXG4gICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgfSlcclxuICB9OyBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbiwgcGFzc3dvcmRSZXNldCwgcmVzZXRQYXNzd29yZCwgaGFuZGxlUGFzc3dvcmRDaGFuZ2UsIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVBZG1pblNpZ25VcCwgaGFuZGxlU2lnbm91dCwgaGFuZGxlU2lnbnVwU3VibWl0LCBoYW5kbGVMb2dpblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
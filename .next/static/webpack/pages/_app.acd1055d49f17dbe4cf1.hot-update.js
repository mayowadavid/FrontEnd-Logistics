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
    /** @type {firebase.auth.OAuthCredential} */

    var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

    var token = credential.accessToken; // The signed-in user info.

    var user = result.user;
    var data = user.displayName.split(" ");
    var firstName = data[0];
    var lastName = data[1];
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
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
    lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJyZXNldFBhc3N3b3JkIiwic2V0UmVzZXRQYXNzd29yZCIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJoYW5kbGVMb2dpbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsb2dpblZhbGlkYXRlIiwibmV3TG9naW4iLCJoYW5kbGVTaWdudXBDaGFuZ2UiLCJzaW5ndXBWYWxpZGF0ZSIsIm5ld1NpZ251cCIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJyZXBsYWNlIiwiaGFuZGxlQWRtaW5TaWduVXAiLCJhZGRBZG1pblJvbGUiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwicGFzc3dvcmRSZXNldCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlU29jaWFsTG9naW4iLCJjcmVkZW50aWFsIiwicmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwiZGlzcGxheU5hbWUiLCJzcGxpdCIsInNpZ25JbldpdGhQb3B1cCIsInByb3ZpZGVyIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR0tGLHNEQUFRLEVBSGI7QUFBQSxNQUc1QkcsWUFINEI7QUFBQSxNQUdkQyxlQUhjOztBQUFBLG1CQUlQSixzREFBUSxDQUFDO0FBQ25DSyxhQUFTLEVBQUUsRUFEd0I7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxlQUFXLEVBQUUsRUFKc0I7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxFQUZGO0FBR1JDLFdBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFXLEVBQUUsRUFKTDtBQUtSQyxjQUFR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QUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFDckQsa0JBQVksRUFBWkEsWUFBRDtBQUFlQyxxQkFBZSxFQUFmQSxlQUFmO0FBQWdDNkQsbUJBQWEsRUFBYkEsYUFBaEM7QUFBK0NwRCxtQkFBYSxFQUFiQSxhQUEvQztBQUE4RHNELDBCQUFvQixFQUFwQkEsb0JBQTlEO0FBQW9GcEQsV0FBSyxFQUFMQSxLQUFwRjtBQUEyRkosWUFBTSxFQUFOQSxNQUEzRjtBQUFtR1YsYUFBTyxFQUFQQSxPQUFuRztBQUE0R0MsZ0JBQVUsRUFBVkEsVUFBNUc7QUFBd0hrQyx1QkFBaUIsRUFBakJBLGlCQUF4SDtBQUEySW9DLHVCQUFpQixFQUFqQkEsaUJBQTNJO0FBQThKN0Isd0JBQWtCLEVBQWxCQSxrQkFBOUo7QUFBa0xjLHVCQUFpQixFQUFqQkEsaUJBQWxMO0FBQXFNTSxtQkFBYSxFQUFiQSxhQUFyTTtBQUFvTmpCLHdCQUFrQixFQUFsQkEsa0JBQXBOO0FBQXdPc0MsdUJBQWlCLEVBQWpCQTtBQUF4TyxLQUE3QjtBQUFBLGNBQ0tyRixLQUFLLENBQUN1RjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBbkxEOztHQUFNeEYsbUI7VUFzQ2UwQixxRDs7O0tBdENmMUIsbUI7QUFxTFNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWNkMTA1NWQ0OWYxN2RiZTRjZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dpblZhbGlkYXRlLCBzaW5ndXBWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGgsIGRhdGFiYXNlLCBwcm92aWRlciwgZnVuY3Rpb25zIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc2V0UGFzc3dvcmQsIHNldFJlc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IFthdXRoZW50aWNhdGUsIHNldEF1dGhlbnRpY2F0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFthdXRoZW50aWNhdGluZywgc2V0QXV0aGVudGljYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgICAgdXNlcjoge2VtYWlsOiAnJyxcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBmdWxsTmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICByb2xlOiAnJyxcclxuICAgICAgICAgIF9pZDogJyd9IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXI9PntcclxuICAgICAgICAgIHVzZXIgPT0gbnVsbCA/IHNldGlzTG9naW4oZmFsc2UpIDogc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gbG9naW47XHJcbiAgICAgICAgbG9naW5WYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdMb2dpbiA9IHsgLi4ubG9naW4sIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0TG9naW4obmV3TG9naW4pXHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSB7Li4uc2lnbnVwfVxyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzaW5ndXBWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgbGV0IG5ld1NpZ251cCA9IHsgLi4uc2lnbnVwLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldFNpZ251cChuZXdTaWdudXApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cFN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICApLnRoZW4oKCk9PntcclxuICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRtaW5TaWduVXAgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgY29uc3QgYWRkQWRtaW5Sb2xlID0gZnVuY3Rpb25zLmh0dHBzQ2FsbGFibGUoJ2FkZEFkbWluUm9sZScpO1xyXG4gICAgICBhZGRBZG1pblJvbGUoZW1haWwpLnRoZW4oY3JlZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAvLyAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgIC8vICAgICBwaG9uZU51bWJlciwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWVcclxuICAgICAgLy8gICB9KX1cclxuICAgICAgLy8gKS50aGVuKCgpPT57XHJcbiAgICAgIC8vICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgLy8gICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgIC8vIH0gKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTaWdub3V0ID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHBhc3N3b3JkUmVzZXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge2VtYWlsfT0gcmVzZXRQYXNzd29yZDtcclxuICAgIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKT0+IHt9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gUmVnRXhwKCAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKTtcclxuICAgIGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuICAgIHNldFJlc2V0UGFzc3dvcmQoey4uLnJlc2V0UGFzc3dvcmQsIFtuYW1lXTogdmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvY2lhbExvZ2luID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLyoqIEB0eXBlIHtmaXJlYmFzZS5hdXRoLk9BdXRoQ3JlZGVudGlhbH0gKi9cclxuICAgICAgdmFyIGNyZWRlbnRpYWwgPSByZXN1bHQuY3JlZGVudGlhbDtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIHZhciB0b2tlbiA9IGNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XHJcbiAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxyXG4gICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICBsZXQgZGF0YSA9IHVzZXIuZGlzcGxheU5hbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICBsZXQgZmlyc3ROYW1lPSBkYXRhWzBdO1xyXG4gICAgICBsZXQgbGFzdE5hbWUgPSBkYXRhWzFdO1xyXG4gICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdXNlciAmJiAodXNlci51aWQgJiYgc2V0TG9naW4odHJ1ZSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAvLyAuLi5cclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcclxuICAgICAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XHJcbiAgICBzZXRBdXRoZW50aWNhdGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmQgfSA9IGxvZ2luO1xyXG4gICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCk9PntcclxuICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgIH0pXHJcbiAgfTsgXHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW4sIHBhc3N3b3JkUmVzZXQsIHJlc2V0UGFzc3dvcmQsIGhhbmRsZVBhc3N3b3JkQ2hhbmdlLCBsb2dpbiwgc2lnbnVwLCBpc0xvZ2luLCBzZXRpc0xvZ2luLCBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlU29jaWFsTG9naW4sIGhhbmRsZVNpZ251cENoYW5nZSwgaGFuZGxlQWRtaW5TaWduVXAsIGhhbmRsZVNpZ25vdXQsIGhhbmRsZVNpZ251cFN1Ym1pdCwgaGFuZGxlTG9naW5TdWJtaXR9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFByb3ZpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
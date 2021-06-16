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
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
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
    lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJyZXNldFBhc3N3b3JkIiwic2V0UmVzZXRQYXNzd29yZCIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJoYW5kbGVMb2dpbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsb2dpblZhbGlkYXRlIiwibmV3TG9naW4iLCJoYW5kbGVTaWdudXBDaGFuZ2UiLCJzaW5ndXBWYWxpZGF0ZSIsIm5ld1NpZ251cCIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJyZXBsYWNlIiwiaGFuZGxlQWRtaW5TaWduVXAiLCJhZGRBZG1pblJvbGUiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwicGFzc3dvcmRSZXNldCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVQLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJDLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUFBLG1CQUdLRixzREFBUSxFQUhiO0FBQUEsTUFHNUJHLFlBSDRCO0FBQUEsTUFHZEMsZUFIYzs7QUFBQSxtQkFJUEosc0RBQVEsQ0FBQztBQUNuQ0ssYUFBUyxFQUFFLEVBRHdCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLFNBQUssRUFBRSxFQUg0QjtBQUluQ0MsZUFBVyxFQUFFLEVBSnNCO0FBS25DQyxZQUFRLEVBQUUsRUFMeUI7QUFNbkNDLGNBQVUsRUFBRTtBQUNSTCxlQUFTLEVBQUUsRUFESDtBQUVSQyxjQUFRLEVBQUUsRUFGRjtBQUdSQyxXQUFLLEVBQUUsRUFIQztBQUlSQyxpQkFBVyxFQUFFLEVBSkw7QUFLUkMsY0FBUSxFQUFFO0FBTEY7QUFOdUIsR0FBRCxDQUpEO0FB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QWxMO0FBQXFNTSxtQkFBYSxFQUFiQSxhQUFyTTtBQUFvTmpCLHdCQUFrQixFQUFsQkEsa0JBQXBOO0FBQXdPbUMsdUJBQWlCLEVBQWpCQTtBQUF4TyxLQUE3QjtBQUFBLGNBQ0tsRixLQUFLLENBQUNvRjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBM0tEOztHQUFNckYsbUI7VUFzQ2UwQixxRDs7O0tBdENmMUIsbUI7QUE2S1NBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTkwYWQwZmQxZWFhMzRiYzFkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dpblZhbGlkYXRlLCBzaW5ndXBWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGgsIGRhdGFiYXNlLCBwcm92aWRlciwgZnVuY3Rpb25zIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc2V0UGFzc3dvcmQsIHNldFJlc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IFthdXRoZW50aWNhdGUsIHNldEF1dGhlbnRpY2F0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFthdXRoZW50aWNhdGluZywgc2V0QXV0aGVudGljYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgICAgdXNlcjoge2VtYWlsOiAnJyxcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBmdWxsTmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICByb2xlOiAnJyxcclxuICAgICAgICAgIF9pZDogJyd9IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXI9PntcclxuICAgICAgICAgIHVzZXIgPT0gbnVsbCA/IHNldGlzTG9naW4oZmFsc2UpIDogc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gbG9naW47XHJcbiAgICAgICAgbG9naW5WYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdMb2dpbiA9IHsgLi4ubG9naW4sIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0TG9naW4obmV3TG9naW4pXHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSB7Li4uc2lnbnVwfVxyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzaW5ndXBWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgbGV0IG5ld1NpZ251cCA9IHsgLi4uc2lnbnVwLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldFNpZ251cChuZXdTaWdudXApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cFN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICApLnRoZW4oKCk9PntcclxuICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRtaW5TaWduVXAgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgY29uc3QgYWRkQWRtaW5Sb2xlID0gZnVuY3Rpb25zLmh0dHBzQ2FsbGFibGUoJ2FkZEFkbWluUm9sZScpO1xyXG4gICAgICBhZGRBZG1pblJvbGUoZW1haWwpLnRoZW4oY3JlZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAvLyAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgIC8vICAgICBwaG9uZU51bWJlciwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWVcclxuICAgICAgLy8gICB9KX1cclxuICAgICAgLy8gKS50aGVuKCgpPT57XHJcbiAgICAgIC8vICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgLy8gICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgIC8vIH0gKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTaWdub3V0ID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHBhc3N3b3JkUmVzZXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge2VtYWlsfT0gcmVzZXRQYXNzd29yZDtcclxuICAgIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkudGhlbigoKT0+IHt9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT57XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gUmVnRXhwKCAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKTtcclxuICAgIGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuICAgIHNldFJlc2V0UGFzc3dvcmQoey4uLnJlc2V0UGFzc3dvcmQsIFtuYW1lXTogdmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvY2lhbExvZ2luID0gKGUpID0+IHtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLyoqIEB0eXBlIHtmaXJlYmFzZS5hdXRoLk9BdXRoQ3JlZGVudGlhbH0gKi9cclxuICAgICAgdmFyIGNyZWRlbnRpYWwgPSByZXN1bHQuY3JlZGVudGlhbDtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIHZhciB0b2tlbiA9IGNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XHJcbiAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxyXG4gICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHNldExvZ2luKHRydWUpKTtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cclxuICAgICAgdmFyIGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cclxuICAgICAgdmFyIGNyZWRlbnRpYWwgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAvLyAuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJtb3VudGVkXCIpO1xyXG4gICAgc2V0QXV0aGVudGljYXRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkIH0gPSBsb2dpbjtcclxuICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpPT57XHJcbiAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICB9KVxyXG4gIH07IFxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuLCBwYXNzd29yZFJlc2V0LCByZXNldFBhc3N3b3JkLCBoYW5kbGVQYXNzd29yZENoYW5nZSwgbG9naW4sIHNpZ251cCwgaXNMb2dpbiwgc2V0aXNMb2dpbiwgaGFuZGxlTG9naW5DaGFuZ2UsIGhhbmRsZVNvY2lhbExvZ2luLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZUFkbWluU2lnblVwLCBoYW5kbGVTaWdub3V0LCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
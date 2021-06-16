webpackHotUpdate_N_E("pages/signup",{

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
      return _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
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

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");



var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SignUp = function SignUp() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      signup = _useContext.signup,
      handleSignupChange = _useContext.handleSignupChange,
      handleSignupSubmit = _useContext.handleSignupSubmit;

  var _signup = _objectSpread({}, signup),
      formErrors = _signup.formErrors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form_container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "overall-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "signup-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: handleSignupSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "signup",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "firstName",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "firstName",
                name: "firstName",
                value: signup.firstName,
                placeholder: "Your first name.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, _this), formErrors.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.firstName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "lastName",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "lastName",
                name: "lastName",
                value: signup.lastName,
                placeholder: "Your last name.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 21
              }, _this), formErrors.lastName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.lastName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "email",
                name: "email",
                value: signup.email,
                placeholder: "Your email.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 21
              }, _this), formErrors.email.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "phoneNumber",
                children: "Phone Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                onChange: handleSignupChange,
                id: "phoneNumber",
                name: "phoneNumber",
                value: signup.phoneNumber,
                placeholder: "Your phone Number.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 21
              }, _this), formErrors.phoneNumber.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.phoneNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                onChange: handleSignupChange,
                id: "password",
                name: "password",
                value: signup.password,
                placeholder: "Your password.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 21
              }, _this), formErrors.password.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "submit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "Signup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 66
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 42
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, _this);
};

_s(SignUp, "owZe7P3o+o7JuSFvaSXlKa4MMrc=");

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInNlc3Npb25Ub2tlbiIsInNldFNlc3Npb25Ub2tlbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInBhc3N3b3JkIiwiZm9ybUVycm9ycyIsInNpZ251cCIsInNldFNpZ251cCIsInJlc2V0UGFzc3dvcmQiLCJzZXRSZXNldFBhc3N3b3JkIiwibG9naW4iLCJzZXRMb2dpbiIsImF1dGhlbnRpY2F0ZSIsInNldEF1dGhlbnRpY2F0ZSIsImF1dGhlbnRpY2F0aW5nIiwic2V0QXV0aGVudGljYXRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVzc2FnZSIsInRva2VuIiwidXNlciIsImZ1bGxOYW1lIiwicm9sZSIsIl9pZCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwidXNlRWZmZWN0IiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImhhbmRsZUxvZ2luQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxvZ2luVmFsaWRhdGUiLCJuZXdMb2dpbiIsImhhbmRsZVNpZ251cENoYW5nZSIsInNpbmd1cFZhbGlkYXRlIiwibmV3U2lnbnVwIiwiaGFuZGxlU2lnbnVwU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiY3JlZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsInJlcGxhY2UiLCJoYW5kbGVBZG1pblNpZ25VcCIsImFkZEFkbWluUm9sZSIsImZ1bmN0aW9ucyIsImh0dHBzQ2FsbGFibGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2lnbm91dCIsInNpZ25PdXQiLCJwYXNzd29yZFJlc2V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiZW1haWxSZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJsZW5ndGgiLCJoYW5kbGVTb2NpYWxMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInByb3ZpZGVyIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwic3BsaXQiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlTG9naW5TdWJtaXQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNoaWxkcmVuIiwiU2lnblVwIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR0tGLHNEQUFRLEVBSGI7QUFBQSxNQUc1QkcsWUFINEI7QUFBQSxNQUdkQyxlQUhjOztBQUFBLG1CQUlQSixzREFBUSxDQUFDO0FBQ25DSyxhQUFTLEVBQUUsRUFEd0I7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxlQUFXLEVBQUUsRUFKc0I7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxF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QTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERFLENBakVOOztHQUFNOEUsTTs7S0FBQUEsTTtBQW1FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQzOWM5ZTRiYjZkMGVmMjIzMjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSwgcHJvdmlkZXIsIGZ1bmN0aW9ucyB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTsgXHJcbiAgICBjb25zdCBbc2lnbnVwLCBzZXRTaWdudXBdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCBzZXRSZXNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IGxvZ2luO1xyXG4gICAgICAgIGxvZ2luVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgICBsZXQgbmV3TG9naW4gPSB7IC4uLmxvZ2luLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldExvZ2luKG5ld0xvZ2luKVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gey4uLnNpZ251cH1cclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2luZ3VwVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIGxldCBuZXdTaWdudXAgPSB7IC4uLnNpZ251cCwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTaWdudXAobmV3U2lnbnVwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluU2lnblVwID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgIGNvbnN0IGFkZEFkbWluUm9sZSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdhZGRBZG1pblJvbGUnKTtcclxuICAgICAgYWRkQWRtaW5Sb2xlKGVtYWlsKS50aGVuKGNyZWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgLy8gICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAvLyAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgIC8vICAgfSl9XHJcbiAgICAgIC8vICkudGhlbigoKT0+e1xyXG4gICAgICAvLyAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIC8vICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAvLyB9IClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbm91dCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBwYXNzd29yZFJlc2V0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtlbWFpbH09IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCk9PiB7fSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB7Zm9ybUVycm9yc30gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcbiAgICBmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcbiAgICBzZXRSZXNldFBhc3N3b3JkKHsuLi5yZXNldFBhc3N3b3JkLCBbbmFtZV06IHZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgbGV0IGRhdGEgPSB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiIFwiKTtcclxuICAgICAgbGV0IGZpcnN0TmFtZT0gZGF0YVswXTtcclxuICAgICAgbGV0IGxhc3ROYW1lID0gZGF0YVsxXTtcclxuICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigoKT0+e1xyXG4gICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgfSlcclxuICB9OyBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbiwgcGFzc3dvcmRSZXNldCwgcmVzZXRQYXNzd29yZCwgaGFuZGxlUGFzc3dvcmRDaGFuZ2UsIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVBZG1pblNpZ25VcCwgaGFuZGxlU2lnbm91dCwgaGFuZGxlU2lnbnVwU3VibWl0LCBoYW5kbGVMb2dpblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5cclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdHtzaWdudXAsICBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZVNpZ251cFN1Ym1pdH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9O1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic2lnbnVwLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVNpZ251cFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVTaWdudXBDaGFuZ2V9IGlkPVwiZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtzaWdudXAuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgZmlyc3QgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZVNpZ251cENoYW5nZX0gaWQ9XCJsYXN0TmFtZVwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtzaWdudXAubGFzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBsYXN0IG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5sYXN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVTaWdudXBDaGFuZ2V9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17c2lnbnVwLmVtYWlsfSBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbC5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtoYW5kbGVTaWdudXBDaGFuZ2V9IGlkPVwicGhvbmVOdW1iZXJcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17c2lnbnVwLnBob25lTnVtYmVyfSBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmUgTnVtYmVyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucGhvbmVOdW1iZXIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZVNpZ251cENoYW5nZX0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWdudXAucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZC4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnBhc3N3b3JkLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5wYXNzd29yZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWdudXBcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5IYXZlIGFuIGFjY291bnQ/PC9oNT48aDU+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ2luPC9hPjwvTGluaz48L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_7__["provider"]).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
      var data = user.displayName.split(" ");
      var firstName = data[0];
      var lastName = data[1];
      _firebase__WEBPACK_IMPORTED_MODULE_7__["database"].collection('Profile').doc(cred.user.uid).set({
        firstName: firstName,
        lastName: lastName
      });
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

/***/ }),

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


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\userLogin\\userLogin.js",
    _this = undefined,
    _s = $RefreshSig$();






var UserLogin = function UserLogin() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      login = _useContext.login,
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 23
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social-login",
          onClick: handleSocialLogin,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "or sign in with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 27
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_svg__WEBPACK_IMPORTED_MODULE_4__["Google"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 35
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 58
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 27
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
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
          lineNumber: 32,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/ResetPassword",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Reset password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 74
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Don't have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 75
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 54
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 50
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
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

_s(UserLogin, "kYTKF/k5iroScFEn98ia2Upy/T4=");

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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\dashboard.js",
    _this = undefined,
    _s = $RefreshSig$();







var Dashboard = function Dashboard() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]),
      isLogin = _useContext.isLogin;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["box"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Ship Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return router.replace('profile');
          },
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["profile"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return router.replace('transaction');
          },
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["transaction"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Transaction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 14
  }, _this);
};

_s(Dashboard, "wkcU3DnxyUaGsuq3aK0sJB7lGdg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2lnbnVwIiwic2V0U2lnbnVwIiwicmVzZXRQYXNzd29yZCIsInNldFJlc2V0UGFzc3dvcmQiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRlIiwic2V0QXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiaGFuZGxlTG9naW5DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibG9naW5WYWxpZGF0ZSIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJjcmVkIiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwicmVwbGFjZSIsImhhbmRsZUFkbWluU2lnblVwIiwiYWRkQWRtaW5Sb2xlIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWdub3V0Iiwic2lnbk91dCIsInBhc3N3b3JkUmVzZXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJlbWFpbFJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImxlbmd0aCIsImhhbmRsZVNvY2lhbExvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwicHJvdmlkZXIiLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwiZGlzcGxheU5hbWUiLCJzcGxpdCIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2hpbGRyZW4iLCJVc2VyTG9naW4iLCJ1c2VDb250ZXh0IiwiR29vZ2xlIiwiRGFzaGJvYXJkIiwiYm94IiwicHJvZmlsZSIsInRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFFUCxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BRTVCQyxPQUY0QjtBQUFBLE1BRW5CQyxVQUZtQjs7QUFBQSxtQkFHS0Ysc0RBQVEsRUFIYjtBQUFBLE1BRzVCRyxZQUg0QjtBQUFBLE1BR2RDLGVBSGM7O0FBQUEsbUJBSVBKLHNEQUFRLENBQUM7QUFDbkNLLGFBQVMsRUFBRSxFQUR3QjtBQUVuQ0MsWUFBUSxFQUFFLEVBRnlCO0FBR25DQyxTQUFLLEVB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TyxFQUFFO0FBQUEsbUJBQUtyRSxNQUFNLENBQUNpQyxPQUFQLENBQWUsYUFBZixDQUFMO0FBQUEsV0FBZDtBQUFrRCxtQkFBUyxFQUFDLHFCQUE1RDtBQUFBLHFCQUNPcUMsd0RBQVcsRUFEbEIsZUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERSxnQkFrQk8scUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW5CVDtBQXFCRSxDQTFCTjs7R0FBTUgsUztVQUVXbEUscUQ7OztLQUZYa0UsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjQ4OGNhMzQ2MzA4ZGU5MDQ3ZWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSwgcHJvdmlkZXIsIGZ1bmN0aW9ucyB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTsgXHJcbiAgICBjb25zdCBbc2lnbnVwLCBzZXRTaWdudXBdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCBzZXRSZXNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IGxvZ2luO1xyXG4gICAgICAgIGxvZ2luVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgICBsZXQgbmV3TG9naW4gPSB7IC4uLmxvZ2luLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldExvZ2luKG5ld0xvZ2luKVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gey4uLnNpZ251cH1cclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2luZ3VwVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIGxldCBuZXdTaWdudXAgPSB7IC4uLnNpZ251cCwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTaWdudXAobmV3U2lnbnVwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluU2lnblVwID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgIGNvbnN0IGFkZEFkbWluUm9sZSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdhZGRBZG1pblJvbGUnKTtcclxuICAgICAgYWRkQWRtaW5Sb2xlKGVtYWlsKS50aGVuKGNyZWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgLy8gICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAvLyAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgIC8vICAgfSl9XHJcbiAgICAgIC8vICkudGhlbigoKT0+e1xyXG4gICAgICAvLyAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIC8vICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAvLyB9IClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbm91dCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBwYXNzd29yZFJlc2V0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtlbWFpbH09IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCk9PiB7fSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB7Zm9ybUVycm9yc30gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcbiAgICBmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcbiAgICBzZXRSZXNldFBhc3N3b3JkKHsuLi5yZXNldFBhc3N3b3JkLCBbbmFtZV06IHZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgbGV0IGRhdGEgPSB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiIFwiKTtcclxuICAgICAgbGV0IGZpcnN0TmFtZT0gZGF0YVswXTtcclxuICAgICAgbGV0IGxhc3ROYW1lID0gZGF0YVsxXTtcclxuICAgICAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgLy8gLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibW91bnRlZFwiKTtcclxuICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigoKT0+e1xyXG4gICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgfSlcclxuICB9OyBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbiwgcGFzc3dvcmRSZXNldCwgcmVzZXRQYXNzd29yZCwgaGFuZGxlUGFzc3dvcmRDaGFuZ2UsIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVBZG1pblNpZ25VcCwgaGFuZGxlU2lnbm91dCwgaGFuZGxlU2lnbnVwU3VibWl0LCBoYW5kbGVMb2dpblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgR29vZ2xlIH0gZnJvbSAnLi4vLi4vc3ZnJztcclxuXHJcbmNvbnN0IFVzZXJMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7bG9naW4sICBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlTG9naW5TdWJtaXQsIGhhbmRsZVNvY2lhbExvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJmb3JtZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlTG9naW5DaGFuZ2V9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBsYXN0IG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxvZ2luXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luXCIgb25DbGljaz17aGFuZGxlU29jaWFsTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm9yIHNpZ24gaW4gd2l0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxzcGFuPntHb29nbGUoKX08L3NwYW4+PHNwYW4+R29vZ2xlPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tdGFnXCI+XHJcbiAgICAgICAgICAgICAgPGg1ID5Gb3Jnb3QgcGFzc3dvcmQ/PC9oNT48aDUgPjxMaW5rIGhyZWY9XCIvUmVzZXRQYXNzd29yZFwiPjxhPlJlc2V0IHBhc3N3b3JkPC9hPjwvTGluaz48L2g1PiBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDU+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvaDU+PGg1PjxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+U2lnbiB1cDwvYT48L0xpbms+PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbjsiLCJpbXBvcnQge2JveCwgcHJvZmlsZSwgdHJhbnNhY3Rpb24gfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdHtpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTG9naW4gPT0gdHJ1ZSA/XHJcbiAgICg8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZF93cmFwcGVyXCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfaG9sZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3JlcXVlc3QnKX0gY2xhc3NOYW1lPVwiRGFzaGJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2JveCgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlNoaXAgTm93PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucmVwbGFjZSgncHJvZmlsZScpfSBjbGFzc05hbWU9XCJEYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZSgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlByb2ZpbGU8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3RyYW5zYWN0aW9uJyl9IGNsYXNzTmFtZT1cIkRhc2hib2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlRyYW5zYWN0aW9uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj4pIDogPFVzZXJMb2dpbiAvPlxyXG5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=
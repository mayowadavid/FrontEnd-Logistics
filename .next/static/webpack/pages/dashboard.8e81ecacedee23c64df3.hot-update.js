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
      console.log(user.displayName.split(" "));
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
    lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2lnbnVwIiwic2V0U2lnbnVwIiwicmVzZXRQYXNzd29yZCIsInNldFJlc2V0UGFzc3dvcmQiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRlIiwic2V0QXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiaGFuZGxlTG9naW5DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibG9naW5WYWxpZGF0ZSIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJjcmVkIiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwicmVwbGFjZSIsImhhbmRsZUFkbWluU2lnblVwIiwiYWRkQWRtaW5Sb2xlIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWdub3V0Iiwic2lnbk91dCIsInBhc3N3b3JkUmVzZXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJlbWFpbFJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImxlbmd0aCIsImhhbmRsZVNvY2lhbExvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwicHJvdmlkZXIiLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwiYWNjZXNzVG9rZW4iLCJkaXNwbGF5TmFtZSIsInNwbGl0IiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjaGlsZHJlbiIsIlVzZXJMb2dpbiIsInVzZUNvbnRleHQiLCJHb29nbGUiLCJEYXNoYm9hcmQiLCJib3giLCJwcm9maWxlIiwidHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVQLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJDLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUFBLG1CQUdLRixzREFBUSxFQUhiO0FBQUEsTUFHNUJHLFlBSDRCO0FBQUEsTUFHZEMsZUFIYzs7QUFBQSxtQkFJUEosc0RBQVEsQ0FBQztBQUNuQ0ssYUFBUyxFQUFFLEVBRHdCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLFNBQUssRUFBRSxFQUg0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QUEsV0FERSxnQkFrQk8scUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW5CVDtBQXFCRSxDQTFCTjs7R0FBTUgsUztVQUVXakUscUQ7OztLQUZYaUUsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjhlODFlY2FjZWRlZTIzYzY0ZGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSwgcHJvdmlkZXIsIGZ1bmN0aW9ucyB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTsgXHJcbiAgICBjb25zdCBbc2lnbnVwLCBzZXRTaWdudXBdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCBzZXRSZXNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IGxvZ2luO1xyXG4gICAgICAgIGxvZ2luVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgICBsZXQgbmV3TG9naW4gPSB7IC4uLmxvZ2luLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldExvZ2luKG5ld0xvZ2luKVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gey4uLnNpZ251cH1cclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2luZ3VwVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIGxldCBuZXdTaWdudXAgPSB7IC4uLnNpZ251cCwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTaWdudXAobmV3U2lnbnVwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKGNyZWQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluU2lnblVwID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgIGNvbnN0IGFkZEFkbWluUm9sZSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdhZGRBZG1pblJvbGUnKTtcclxuICAgICAgYWRkQWRtaW5Sb2xlKGVtYWlsKS50aGVuKGNyZWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oY3JlZCA9PntcclxuICAgICAgLy8gICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAvLyAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgIC8vICAgfSl9XHJcbiAgICAgIC8vICkudGhlbigoKT0+e1xyXG4gICAgICAvLyAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIC8vICAgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAvLyB9IClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbm91dCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBwYXNzd29yZFJlc2V0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtlbWFpbH09IHJlc2V0UGFzc3dvcmQ7XHJcbiAgICBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCk9PiB7fSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+e1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB7Zm9ybUVycm9yc30gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcbiAgICBmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcbiAgICBzZXRSZXNldFBhc3N3b3JkKHsuLi5yZXNldFBhc3N3b3JkLCBbbmFtZV06IHZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgY29uc29sZS5sb2codXNlci5kaXNwbGF5TmFtZS5zcGxpdChcIiBcIikpXHJcbiAgICAgICAgdXNlciAmJiAodXNlci51aWQgJiYgc2V0TG9naW4odHJ1ZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAvLyAuLi5cclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcclxuICAgICAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWRcIik7XHJcbiAgICBzZXRBdXRoZW50aWNhdGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmQgfSA9IGxvZ2luO1xyXG4gICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCk9PntcclxuICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgIH0pXHJcbiAgfTsgXHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW4sIHBhc3N3b3JkUmVzZXQsIHJlc2V0UGFzc3dvcmQsIGhhbmRsZVBhc3N3b3JkQ2hhbmdlLCBsb2dpbiwgc2lnbnVwLCBpc0xvZ2luLCBzZXRpc0xvZ2luLCBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlU29jaWFsTG9naW4sIGhhbmRsZVNpZ251cENoYW5nZSwgaGFuZGxlQWRtaW5TaWduVXAsIGhhbmRsZVNpZ25vdXQsIGhhbmRsZVNpZ251cFN1Ym1pdCwgaGFuZGxlTG9naW5TdWJtaXR9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gJy4uLy4uL3N2Zyc7XHJcblxyXG5jb25zdCBVc2VyTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2xvZ2luLCAgaGFuZGxlTG9naW5DaGFuZ2UsIGhhbmRsZUxvZ2luU3VibWl0LCBoYW5kbGVTb2NpYWxMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZvcm1fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJhbGwtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZm9ybWVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW5TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUxvZ2luQ2hhbmdlfSBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlTG9naW5DaGFuZ2V9IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbGFzdCBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsb2dpblwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZVNvY2lhbExvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vciBzaWduIGluIHdpdGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48c3Bhbj57R29vZ2xlKCl9PC9zcGFuPjxzcGFuPkdvb2dsZTwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXRhZ1wiPlxyXG4gICAgICAgICAgICAgIDxoNSA+Rm9yZ290IHBhc3N3b3JkPzwvaDU+PGg1ID48TGluayBocmVmPVwiL1Jlc2V0UGFzc3dvcmRcIj48YT5SZXNldCBwYXNzd29yZDwvYT48L0xpbms+PC9oNT4gXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2g1PjxoNT48TGluayBocmVmPVwiL3NpZ251cFwiPjxhPlNpZ24gdXA8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW47IiwiaW1wb3J0IHtib3gsIHByb2ZpbGUsIHRyYW5zYWN0aW9uIH0gZnJvbSBcIi4uL3N2Z1wiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVXNlckxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlckxvZ2luL3VzZXJMb2dpbic7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3R7aXNMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc0xvZ2luID09IHRydWUgP1xyXG4gICAoPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfd3JhcHBlclwiPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkX2hvbGRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5yZXBsYWNlKCdyZXF1ZXN0Jyl9IGNsYXNzTmFtZT1cIkRhc2hib2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtib3goKX1cclxuICAgICAgICAgICAgICAgIDxoMz5TaGlwIE5vdzwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3Byb2ZpbGUnKX0gY2xhc3NOYW1lPVwiRGFzaGJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2ZpbGUoKX1cclxuICAgICAgICAgICAgICAgIDxoMz5Qcm9maWxlPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5yZXBsYWNlKCd0cmFuc2FjdGlvbicpfSBjbGFzc05hbWU9XCJEYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIDxoMz5UcmFuc2FjdGlvbjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+KSA6IDxVc2VyTG9naW4gLz5cclxuXHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwic291cmNlUm9vdCI6IiJ9
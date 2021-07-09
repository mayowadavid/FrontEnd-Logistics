module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin-signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/adminLogin/adminSignUp.js":
/*!**********************************************!*\
  !*** ./components/adminLogin/adminSignUp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ "./components/context/AuthContext.js");

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\adminLogin\\adminSignUp.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AdminSignUp = () => {
  const {
    signup,
    handleAdminSignUp,
    handleSignupChange,
    handleSignupSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);

  const {
    formErrors
  } = _objectSpread({}, signup);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "form_container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "overall-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "signup-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: handleAdminSignUp,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "signup",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "firstName",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "firstName",
                name: "firstName",
                value: signup.firstName,
                placeholder: "Your first name.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, undefined), formErrors.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.firstName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "lastName",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "lastName",
                name: "lastName",
                value: signup.lastName,
                placeholder: "Your last name.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 21
              }, undefined), formErrors.lastName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.lastName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                onChange: handleSignupChange,
                id: "email",
                name: "email",
                value: signup.email,
                placeholder: "Your email.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 21
              }, undefined), formErrors.email.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "phoneNumber",
                children: "Phone Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                onChange: handleSignupChange,
                id: "phoneNumber",
                name: "phoneNumber",
                value: signup.phoneNumber,
                placeholder: "Your phone Number.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, undefined), formErrors.phoneNumber.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.phoneNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                onChange: handleSignupChange,
                id: "password",
                name: "password",
                value: signup.password,
                placeholder: "Your password.."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, undefined), formErrors.password.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "errorMessage",
                children: formErrors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "submit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "Signup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/admin-login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 72
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 46
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 42
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminSignUp);

/***/ }),

/***/ "./components/context/AuthContext.js":
/*!*******************************************!*\
  !*** ./components/context/AuthContext.js ***!
  \*******************************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const AuthContextProvider = props => {
  const {
    setTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_5__["RequestContext"]);
  const {
    0: isLogin,
    1: setisLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isAdmin,
    1: setisAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: sessionToken,
    1: setSessionToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: userError,
    1: setUserError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: signup,
    1: setSignup
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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
  });
  const {
    0: resetPassword,
    1: setResetPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    formErrors: {
      email: ''
    }
  });
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  });
  const {
    0: authenticating,
    1: setAuthenticating
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].onAuthStateChanged(user => {
      user == null ? setisLogin(false) : setisLogin(true);

      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          idTokenResult.claims.admin == true ? setisAdmin(true) : setisAdmin(false);
        });
      }
    });
  }, []);

  const handleLoginChange = e => {
    const {
      name,
      value
    } = e.target;

    let newLogin = _objectSpread(_objectSpread({}, login), {}, {
      [name]: value
    });

    return setLogin(newLogin);
  };

  const handleSignupChange = e => {
    const {
      formErrors
    } = _objectSpread({}, signup);

    const {
      name,
      value
    } = e.target;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_2__["singupValidate"])(name, value, formErrors);

    let newSignup = _objectSpread(_objectSpread({}, signup), {}, {
      [name]: value
    });

    return setSignup(newSignup);
  };

  const handleSignupSubmit = async e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    } = signup;
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].createUserWithEmailAndPassword(email, password).then(cred => {
      return _firebase__WEBPACK_IMPORTED_MODULE_4__["database"].collection('Profile').doc(cred.user.uid).set({
        phoneNumber,
        email,
        firstName,
        lastName
      });
    }).then(() => {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  const handleAdminSignUp = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    } = signup;
    const addAdminRole = _firebase__WEBPACK_IMPORTED_MODULE_4__["functions"].httpsCallable('addAdminRole');
    addAdminRole({
      email
    }).then(result => {
      console.log(result);
    });
  };

  const handleSignout = e => {
    e.preventDefault();
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].signOut().then(() => {
      setTransaction([]); // Sign-out successful.
    }).catch(error => {// An error happened.
    });
  };

  const passwordReset = e => {
    e.preventDefault();
    const {
      email
    } = resetPassword;
    console.log(email);
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].sendPasswordResetEmail(email).then(() => {}).catch(error => {
      setError(error.message);
    });
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    const {
      name,
      value
    } = e.target;
    const {
      formErrors
    } = resetPassword;
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
    setResetPassword(_objectSpread(_objectSpread({}, resetPassword), {}, {
      [name]: value
    }));
  };

  const handleSocialLogin = e => {
    _firebase__WEBPACK_IMPORTED_MODULE_4__["provider"].addScope('profile');
    _firebase__WEBPACK_IMPORTED_MODULE_4__["provider"].addScope('email');
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_4__["provider"]).then(result => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user;
      let data = user.displayName.split(" ");
      let firstName = data[0];
      let lastName = data[1];
      let email = result.user.email;
      user && user.uid && setLogin(true);
      user && user.uid && router.replace('dashboard');
      return _firebase__WEBPACK_IMPORTED_MODULE_4__["database"].collection('Profile').doc(result.user.uid).set({
        firstName,
        lastName,
        email
      }); // ...
    }).catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    setAuthenticating(true);
    const {
      email,
      password
    } = login;
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].signInWithEmailAndPassword(email, password).then(result => {
      var user = result.user;
      user && user.uid && setLogin(true);
      user && user.uid && router.replace('dashboard');
      user && user.uid && setAuthenticating(false);
    }).catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      setUserError(errorMessage);
      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    });
  };

  const handleAdminLogin = e => {
    e.preventDefault();
    const {
      email,
      password
    } = login;
    _firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].signInWithEmailAndPassword(email, password).then(() => {
      setisAdmin(true);
      router.replace('contact');
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      userError,
      authenticating,
      sessionToken,
      setSessionToken,
      passwordReset,
      resetPassword,
      handlePasswordChange,
      login,
      signup,
      isLogin,
      isAdmin,
      setisLogin,
      handleLoginChange,
      handleSocialLogin,
      handleSignupChange,
      handleAdminSignUp,
      handleSignout,
      handleSignupSubmit,
      handleLoginSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

/***/ }),

/***/ "./components/context/RequestContext.js":
/*!**********************************************!*\
  !*** ./components/context/RequestContext.js ***!
  \**********************************************/
/*! exports provided: RequestContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestContext", function() { return RequestContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const RequestContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const RequestContextProvider = props => {
  const initialState = {
    cartons: "",
    deliveryLocations: "",
    descriptions: "",
    itemsWorth: "",
    receiverFirstName: '',
    receiverPhoneNumber1: '',
    receiverPhoneNumber2: '',
    requestImages: [],
    senderFirstName: '',
    senderPhoneNumber1: '',
    senderPhoneNumber2: '',
    tagName: "",
    otherItems: false,
    formErrors: {
      senderFirstName: '',
      senderPhoneNumber1: '',
      senderPhoneNumber2: '',
      receiverFirstName: '',
      receiverPhoneNumber1: '',
      receiverPhoneNumber2: '',
      cartons: '',
      createdAt: '',
      deliveryLocations: '',
      descriptions: '',
      itemsWorth: '',
      otherItems: true,
      status: '',
      tagName: '',
      amount: ''
    }
  };
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: contacts,
    1: setContacts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: extractedRequest,
    1: setExtractedRequest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: sessionToken,
    1: setSessionToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: isLogin,
    1: setisLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: temporaryImage,
    1: setTemporaryImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: requestImages,
    1: setRequestImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: requestSuccess,
    1: setRequestSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: transaction,
    1: setTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: transactionInst,
    1: setTransactionInst
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: galleryImage,
    1: setGalleryImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(user => {
      const data = [];
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_5__["database"].collection('Requests').where('userId', '==', user.uid).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          let {
            tagName,
            createdAt,
            status,
            amount
          } = doc.data();
          let id = doc.id;
          data.push({
            tagName,
            createdAt,
            status,
            amount,
            id
          });
        });
      });
      setTransaction(data);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    transactionInst !== undefined && setTransaction([...transaction, transactionInst]);
  }, [transactionInst]);

  const handleChange = e => {
    if (e) {
      e.preventDefault();
      const {
        name,
        value,
        id
      } = e.target;

      const {
        formErrors
      } = _objectSpread({}, input);

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_3__["requestValidate"])(id, value, formErrors);

      const newInput = _objectSpread(_objectSpread({}, input), {}, {
        [name]: value
      });

      return setInput(newInput);
    }
  };

  const handleCheck = e => {
    const {
      name,
      checked
    } = e.target;

    const newInput = _objectSpread(_objectSpread({}, input), {}, {
      [name]: checked
    });

    return setInput(newInput);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    progress == 100 && setLoading(false);
    setProgress(0);
  }, [progress]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    router.prefetch('/transaction');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(user => {
      user !== null && setUserId(user.uid);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(user => {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_5__["store"].ref().child('/requestImages').listAll().then(function (result) {
        result.items.forEach(function (imageRef) {
          getImageUrl(imageRef);
        });
      });
    });
    let img = [];

    const getImageUrl = images => {
      images.getDownloadURL().then(url => {
        img.push(url);
      });
    };

    setGalleryImage(img);
  }, []);

  const photoChange = e => {
    e.preventDefault();

    if (e.target.files) {
      progress !== 100 && setLoading(true);
      let selected = e.target.files[0];
      let types = ['image/jpeg', 'image/png'];
      let fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      let FileSize = "5000000";
      let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      let perfectSize = filteredImageSize == true && URL.createObjectURL(selected);
      let restructureUrl = {
        imageSource: perfectSize
      };
      perfectSize !== undefined && setTemporaryImage([...temporaryImage, restructureUrl]);

      if (filteredImageSize == true) {
        const storageRef = _firebase__WEBPACK_IMPORTED_MODULE_5__["store"].ref(`requestImages/${selected.name}`);
        storageRef.put(selected).on('state_changed', async snap => {
          const newPercentage = (await (snap.bytesTransferred / snap.totalBytes)) * 100;
          await setProgress(newPercentage);
        }, async err => {
          await setError(err);
        }, async () => {
          const cloudUrl = await storageRef.getDownloadURL();
          setRequestImages([...requestImages, {
            cloudUrl
          }]);
        });
      }

      URL.revokeObjectURL(selected);
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const {
      cartons,
      deliveryLocations,
      descriptions,
      itemsWorth,
      receiverFirstName,
      receiverPhoneNumber1,
      receiverPhoneNumber2,
      requestImages,
      senderFirstName,
      senderPhoneNumber1,
      senderPhoneNumber2,
      tagName,
      otherItems
    } = input;
    setTransactionInst({
      tagName,
      status: "pending",
      amount: "",
      id: "hkaj$5%^gxn*8nk"
    });
    userId !== null && _firebase__WEBPACK_IMPORTED_MODULE_5__["database"].collection('Requests').add({
      userId,
      cartons,
      deliveryLocations,
      descriptions,
      itemsWorth,
      receiverFirstName,
      receiverPhoneNumber1,
      receiverPhoneNumber2,
      requestImages,
      senderFirstName,
      senderPhoneNumber1,
      senderPhoneNumber2,
      tagName,
      otherItems,
      status: "pending",
      createdAt: Object(_firebase__WEBPACK_IMPORTED_MODULE_5__["timestamp"])()
    }).then(data => {
      data && (setRequestSuccess(true), setInput(initialState));
    }).catch(error => {
      setError(error);
    });
  };

  const handleRequestUpdate = async (e, id) => {
    e.preventDefault();
    setInput(...input, requestImages);
  };

  const handleFormPreview = e => {
    e.preventDefault();
    setInput(_objectSpread(_objectSpread({}, input), {}, {
      requestImages
    }));
    setCount("active");
  };

  const selector = [{
    content: "contact",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["contact"])(),
    title: "Contact",
    id: 1
  }, {
    content: "gallery",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["gallery"])(),
    title: "Gallery",
    id: 2
  }, {
    content: "ShippingRequest",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["offBack"])(),
    title: "Request",
    id: 3
  }, {
    content: "",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["message"])(),
    title: "Message",
    id: 4
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RequestContext.Provider, {
    value: {
      galleryImage,
      transaction,
      setTransaction,
      transactionInst,
      input,
      error,
      loading,
      setRequestImages,
      requestImages,
      requestSuccess,
      setRequestSuccess,
      initialState,
      setCount,
      count,
      setInput,
      handleChange,
      handleCheck,
      temporaryImage,
      handleFormSubmit,
      handleFormPreview,
      photoChange,
      selector,
      setExtractedRequest,
      extractedRequest,
      contacts,
      setContacts,
      handleRequestUpdate,
      sessionToken,
      isLogin,
      setisLogin
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store, database, auth, timestamp, provider, functions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_4__);





const firebaseConfig = {
  apiKey: "AIzaSyC_IMKXaNJIwEdAJTQNH2ltCPcON9I6Olg",
  authDomain: "managerbran-2a699.firebaseapp.com",
  databaseURL: "https://managerbran-2a699-default-rtdb.firebaseio.com",
  projectId: "managerbran-2a699",
  storageBucket: "managerbran-2a699.appspot.com",
  messagingSenderId: "474981172645",
  appId: "1:474981172645:web:fa8da9f09f0c344563144c",
  measurementId: "G-054GEKBK2H"
};
const firebaseApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();

if (false) {}

const store = firebaseApp.storage();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.FieldValue.serverTimestamp;
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const functions = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.functions();


/***/ }),

/***/ "./components/validator/validate.js":
/*!******************************************!*\
  !*** ./components/validator/validate.js ***!
  \******************************************/
/*! exports provided: emailRegex, profileValidate, requestValidate, singupValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRegex", function() { return emailRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileValidate", function() { return profileValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestValidate", function() { return requestValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singupValidate", function() { return singupValidate; });
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const profileValidate = (name, value, formErrors) => {
  switch (name) {
    case "firstName":
      formErrors.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "lastName":
      formErrors.lastName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "email":
      formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
      break;

    case "phoneNumber":
      formErrors.phoneNumber = value.length < 11 && value.length > 0 ? '*input a valid phone number*' : '';
      break;

    case "address":
      formErrors.address = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;
  }
};
const requestValidate = (id, value, formErrors) => {
  switch (id) {
    case "senderFirstName":
      formErrors.senderFirstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "senderphoneNumber1":
      formErrors.senderPhoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "senderphoneNumber2":
      formErrors.senderPhoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverFirstname":
      formErrors.receiverFirstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverphoneNumber1":
      formErrors.receiverPhoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverphoneNumber2":
      formErrors.receiverPhoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "tagName":
      formErrors.tagName = value.length < 2 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "Cartons":
      formErrors.cartons = value.length <= 0 ? '*input number of items*' : '';
      break;

    case "itemsWorth":
      formErrors.itemsWorth = value.length <= 0 ? '*input items worth*' : '';
      break;

    case "deliveryLocation":
      formErrors.deliveryLocations = value.length < 3 && value.length > 0 ? '*input a proper state*' : '';
      break;

    case "descriptions":
      formErrors.descriptions = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;
  }
};
const singupValidate = (name, value, formErrors) => {
  switch (name) {
    case "firstName":
      formErrors.firstName = value.length > 3 && value.length > 0 ? '' : '*minimum 3 characters required*';
      break;

    case "lastName":
      formErrors.lastName = value.length > 3 && value.length > 0 ? '' : '*minimum 3 characters required*';
      break;

    case "phoneNumber":
      formErrors.phoneNumber = value.length > 10 && value.length > 0 ? '' : '*input a valid number*';
      break;

    case "email":
      formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
      break;

    case "password":
      formErrors.password = value.length < 6 && value.length > 0 ? '*password is too short*' : '';
      break;
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/admin-signup.js":
/*!*******************************!*\
  !*** ./pages/admin-signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_adminLogin_adminSignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/adminLogin/adminSignUp */ "./components/adminLogin/adminSignUp.js");

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\pages\\admin-signup.js";


const AdminSignUpPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_adminLogin_adminSignUp__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminSignUpPage);

/***/ }),

/***/ "./svg.js":
/*!****************!*\
  !*** ./svg.js ***!
  \****************/
/*! exports provided: box, profile, transaction, avatar, upload, contact, message, gallery, checkMark, close, Google, Back, Loader, innerLoader, camera, offBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "box", function() { return box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatar", function() { return avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gallery", function() { return gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMark", function() { return checkMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Google", function() { return Google; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerLoader", function() { return innerLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camera", function() { return camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBack", function() { return offBack; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\svg.js";
const box = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "205",
    className: "box",
    height: "231",
    viewBox: "0 0 205 231",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M199.64 63.5841V171.933L175.41 185.875C177.032 184.398 178.084 182.4 178.383 180.23C178.683 178.059 178.211 175.852 177.049 173.993C175.887 172.133 174.109 170.738 172.024 170.049C169.938 169.36 167.677 169.421 165.632 170.222C163.586 171.022 161.887 172.512 160.828 174.431C159.769 176.351 159.418 178.58 159.835 180.731C160.251 182.882 161.41 184.82 163.11 186.208C164.81 187.596 166.944 188.347 169.141 188.329C170.092 188.334 171.038 188.192 171.946 187.907L153.139 198.849C154.991 197.376 156.218 195.259 156.574 192.923C156.929 190.587 156.387 188.203 155.056 186.248C153.726 184.293 151.704 182.911 149.395 182.379C147.087 181.846 144.662 182.203 142.605 183.376C140.549 184.55 139.013 186.455 138.304 188.71C137.595 190.964 137.765 193.403 138.781 195.537C139.797 197.672 141.584 199.346 143.784 200.223C145.984 201.101 148.435 201.118 150.647 200.271L103.252 227.405L6.86471 171.933V64.4438L51.5165 90.2025L101.669 119.119L103.237 120.025L104.804 119.103L199.609 63.5841H199.64ZM137.356 141.736C138.411 141.74 139.445 141.441 140.334 140.876L171.946 120.556C172.557 120.17 173.086 119.667 173.501 119.076C173.917 118.486 174.211 117.819 174.367 117.114C174.522 116.41 174.537 115.681 174.409 114.971C174.282 114.261 174.015 113.583 173.623 112.976L172.401 111.163C172.012 110.556 171.508 110.032 170.915 109.621C170.323 109.21 169.655 108.92 168.95 108.768C168.245 108.615 167.517 108.603 166.807 108.733C166.097 108.862 165.42 109.13 164.815 109.522L133.219 129.731C132.608 130.125 132.083 130.636 131.673 131.235C131.262 131.833 130.976 132.507 130.83 133.217C130.684 133.927 130.682 134.659 130.823 135.371C130.964 136.082 131.245 136.758 131.651 137.359L132.827 139.188C133.325 139.979 134.019 140.628 134.843 141.072C135.667 141.515 136.592 141.739 137.529 141.72L137.356 141.736ZM189.594 175.794C191.454 175.794 193.272 175.244 194.818 174.213C196.365 173.183 197.57 171.718 198.282 170.005C198.993 168.291 199.18 166.405 198.817 164.586C198.454 162.767 197.558 161.096 196.243 159.784C194.928 158.473 193.252 157.58 191.428 157.218C189.604 156.856 187.713 157.042 185.995 157.751C184.277 158.461 182.808 159.663 181.775 161.206C180.742 162.748 180.19 164.561 180.19 166.416C180.19 168.903 181.181 171.288 182.944 173.047C184.708 174.806 187.1 175.794 189.594 175.794ZM202.132 58.5668L103.393 116.399L53.0994 87.5297L3.79285 59.0513V173.653L103.315 230.953L202.837 173.653V59.0982L201.991 58.6137L202.132 58.5668ZM137.388 138.594C136.999 138.6 136.615 138.507 136.272 138.323C135.929 138.14 135.639 137.873 135.429 137.547L134.222 135.687C133.89 135.163 133.778 134.53 133.91 133.925C134.042 133.32 134.407 132.79 134.927 132.451L166.586 112.132C166.959 111.888 167.394 111.758 167.84 111.757C168.235 111.759 168.624 111.859 168.971 112.047C169.318 112.235 169.613 112.506 169.83 112.835L171.037 114.695C171.371 115.22 171.483 115.855 171.348 116.462C171.213 117.068 170.842 117.597 170.316 117.931L138.673 138.25C138.292 138.501 137.844 138.632 137.388 138.625V138.594ZM189.453 172.668C188.213 172.668 187.001 172.301 185.97 171.614C184.939 170.927 184.135 169.951 183.661 168.808C183.186 167.666 183.062 166.409 183.304 165.196C183.546 163.983 184.143 162.869 185.02 161.995C185.896 161.12 187.013 160.525 188.23 160.284C189.446 160.043 190.706 160.166 191.852 160.64C192.997 161.113 193.976 161.914 194.665 162.942C195.354 163.97 195.722 165.179 195.722 166.416C195.722 168.074 195.061 169.664 193.886 170.837C192.71 172.009 191.115 172.668 189.453 172.668ZM169.078 185.172C167.838 185.172 166.626 184.805 165.595 184.118C164.564 183.431 163.761 182.455 163.286 181.313C162.812 180.17 162.687 178.913 162.929 177.7C163.171 176.487 163.768 175.373 164.645 174.499C165.522 173.625 166.639 173.029 167.855 172.788C169.071 172.547 170.332 172.671 171.477 173.144C172.623 173.617 173.602 174.418 174.291 175.447C174.979 176.475 175.347 177.683 175.347 178.92C175.347 180.578 174.687 182.168 173.511 183.341C172.335 184.513 170.741 185.172 169.078 185.172ZM147.136 197.676C145.896 197.676 144.684 197.31 143.653 196.623C142.622 195.936 141.819 194.959 141.344 193.817C140.87 192.674 140.746 191.417 140.987 190.204C141.229 188.992 141.826 187.878 142.703 187.003C143.58 186.129 144.697 185.533 145.913 185.292C147.129 185.051 148.39 185.175 149.535 185.648C150.681 186.121 151.66 186.923 152.349 187.951C153.038 188.979 153.405 190.188 153.405 191.424C153.405 193.082 152.745 194.673 151.569 195.845C150.393 197.018 148.799 197.676 147.136 197.676Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M147.136 196.895C150.166 196.895 152.622 194.445 152.622 191.424C152.622 188.403 150.166 185.953 147.136 185.953C144.107 185.953 141.651 188.403 141.651 191.424C141.651 194.445 144.107 196.895 147.136 196.895Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M147.136 186.735C148.066 186.735 148.975 187.01 149.748 187.525C150.521 188.041 151.124 188.773 151.48 189.63C151.836 190.486 151.929 191.429 151.748 192.339C151.566 193.248 151.118 194.084 150.461 194.74C149.803 195.396 148.965 195.842 148.053 196.023C147.141 196.204 146.196 196.111 145.337 195.756C144.478 195.401 143.743 194.8 143.227 194.029C142.71 193.258 142.434 192.352 142.434 191.424C142.434 190.18 142.93 188.988 143.811 188.108C144.693 187.229 145.889 186.735 147.136 186.735ZM147.136 185.172C145.896 185.172 144.684 185.539 143.653 186.226C142.622 186.913 141.819 187.889 141.344 189.032C140.87 190.174 140.746 191.431 140.987 192.644C141.229 193.857 141.826 194.971 142.703 195.845C143.58 196.719 144.697 197.315 145.913 197.556C147.129 197.797 148.39 197.674 149.535 197.2C150.681 196.727 151.66 195.926 152.349 194.898C153.038 193.869 153.405 192.661 153.405 191.424C153.405 189.766 152.745 188.176 151.569 187.003C150.393 185.831 148.799 185.172 147.136 185.172Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M137.403 137.812C137.143 137.814 136.886 137.75 136.656 137.627C136.426 137.504 136.23 137.326 136.087 137.109L134.864 135.233C134.649 134.882 134.582 134.461 134.676 134.061C134.714 133.863 134.791 133.675 134.904 133.508C135.018 133.342 135.164 133.2 135.334 133.092L167.009 112.773C167.252 112.601 167.542 112.509 167.84 112.507C168.102 112.507 168.36 112.573 168.59 112.699C168.82 112.825 169.015 113.006 169.156 113.226L170.379 115.101C170.591 115.449 170.66 115.866 170.569 116.263C170.478 116.66 170.236 117.006 169.893 117.227L138.25 137.547C137.999 137.715 137.705 137.807 137.403 137.812Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M167.84 113.335C167.974 113.337 168.107 113.373 168.224 113.438C168.342 113.504 168.441 113.597 168.514 113.71L169.705 115.555C169.817 115.731 169.856 115.944 169.815 116.149C169.792 116.25 169.749 116.346 169.687 116.43C169.624 116.513 169.545 116.583 169.454 116.633L137.811 136.953C137.682 137.027 137.536 137.065 137.388 137.062C137.256 137.063 137.127 137.031 137.011 136.968C136.896 136.905 136.799 136.814 136.729 136.703L135.538 134.858C135.428 134.681 135.389 134.469 135.428 134.264C135.451 134.165 135.493 134.07 135.552 133.987C135.611 133.904 135.686 133.833 135.773 133.78L167.432 113.46C167.554 113.382 167.695 113.339 167.84 113.335ZM167.84 111.772C167.394 111.771 166.958 111.902 166.586 112.147L134.927 132.467C134.407 132.806 134.042 133.335 133.91 133.94C133.778 134.546 133.89 135.178 134.222 135.702L135.428 137.547C135.594 137.806 135.81 138.031 136.063 138.207C136.316 138.384 136.602 138.508 136.903 138.573C137.205 138.639 137.517 138.644 137.821 138.588C138.124 138.533 138.414 138.418 138.673 138.25L170.316 117.931C170.842 117.597 171.213 117.068 171.348 116.462C171.483 115.855 171.371 115.22 171.037 114.695L169.83 112.835C169.613 112.506 169.318 112.235 168.971 112.047C168.624 111.859 168.235 111.759 167.84 111.757V111.772Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.078 184.39C172.108 184.39 174.563 181.941 174.563 178.92C174.563 175.898 172.108 173.449 169.078 173.449C166.048 173.449 163.593 175.898 163.593 178.92C163.593 181.941 166.048 184.39 169.078 184.39Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.078 174.231C170.008 174.231 170.917 174.506 171.69 175.021C172.463 175.536 173.066 176.269 173.422 177.125C173.778 177.982 173.871 178.925 173.689 179.835C173.508 180.744 173.06 181.58 172.403 182.236C171.745 182.891 170.907 183.338 169.995 183.519C169.083 183.7 168.138 183.607 167.279 183.252C166.419 182.897 165.685 182.296 165.169 181.525C164.652 180.754 164.376 179.847 164.376 178.92C164.376 177.676 164.871 176.484 165.753 175.604C166.635 174.725 167.831 174.231 169.078 174.231ZM169.078 172.668C167.838 172.668 166.626 173.034 165.595 173.721C164.564 174.408 163.761 175.385 163.286 176.527C162.812 177.67 162.687 178.927 162.929 180.14C163.171 181.352 163.768 182.466 164.645 183.341C165.522 184.215 166.639 184.811 167.855 185.052C169.071 185.293 170.332 185.169 171.477 184.696C172.623 184.223 173.602 183.421 174.291 182.393C174.979 181.365 175.347 180.156 175.347 178.92C175.347 177.262 174.687 175.671 173.511 174.499C172.335 173.326 170.741 172.668 169.078 172.668Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M189.453 171.886C192.482 171.886 194.938 169.437 194.938 166.416C194.938 163.394 192.482 160.945 189.453 160.945C186.423 160.945 183.967 163.394 183.967 166.416C183.967 169.437 186.423 171.886 189.453 171.886Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M189.453 161.727C190.383 161.727 191.292 162.002 192.065 162.517C192.838 163.032 193.441 163.764 193.797 164.621C194.153 165.478 194.246 166.421 194.064 167.33C193.883 168.24 193.435 169.076 192.777 169.731C192.12 170.387 191.282 170.834 190.37 171.015C189.458 171.196 188.513 171.103 187.653 170.748C186.794 170.393 186.06 169.792 185.543 169.021C185.027 168.25 184.751 167.343 184.751 166.416C184.751 165.172 185.246 163.979 186.128 163.1C187.01 162.221 188.206 161.727 189.453 161.727ZM189.453 160.164C188.213 160.164 187.001 160.53 185.97 161.217C184.939 161.904 184.135 162.881 183.661 164.023C183.186 165.166 183.062 166.423 183.304 167.635C183.546 168.848 184.143 169.962 185.02 170.837C185.897 171.711 187.014 172.306 188.23 172.548C189.446 172.789 190.706 172.665 191.852 172.192C192.997 171.719 193.976 170.917 194.665 169.889C195.354 168.861 195.722 167.652 195.722 166.416C195.722 164.758 195.061 163.167 193.886 161.995C192.71 160.822 191.115 160.164 189.453 160.164Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M146.932 26.9622L97.9236 58.5823L53.0994 87.4984L3.79285 59.0512L4.63918 58.5823L103.252 1.81311L146.932 26.9622Z",
      stroke: "#213569",
      strokeWidth: "2",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M2.94653 58.5823H4.63919L3.79286 59.0512L2.94653 58.5823Z",
      fill: "white",
      stroke: "#213569",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M201.928 58.6292L103.252 116.399L53.0994 87.4984L97.9235 58.5824L146.932 26.9623L201.834 58.5824L201.928 58.6292Z",
      stroke: "#213569",
      strokeWidth: "2",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M201.991 58.5823L201.928 58.6292L201.834 58.5823H201.991Z",
      fill: "white",
      stroke: "#213569",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M103.252 116.399V230.5",
      stroke: "#213569",
      strokeWidth: "3",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.078 185.172C172.54 185.172 175.347 182.373 175.347 178.92C175.347 175.467 172.54 172.668 169.078 172.668C165.616 172.668 162.809 175.467 162.809 178.92C162.809 182.373 165.616 185.172 169.078 185.172Z",
      fill: "#213569",
      stroke: "white",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M147.136 197.676C150.598 197.676 153.405 194.877 153.405 191.424C153.405 187.971 150.598 185.172 147.136 185.172C143.674 185.172 140.867 187.971 140.867 191.424C140.867 194.877 143.674 197.676 147.136 197.676Z",
      fill: "#213569",
      stroke: "white",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M189.453 172.668C192.915 172.668 195.722 169.869 195.722 166.416C195.722 162.963 192.915 160.164 189.453 160.164C185.99 160.164 183.184 162.963 183.184 166.416C183.184 169.869 185.99 172.668 189.453 172.668Z",
      fill: "#213569",
      stroke: "white",
      strokeMiterlimit: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 13
  }, undefined);
};
const profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "154",
    className: "profile",
    height: "174",
    viewBox: "0 0 154 174",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M107.8 103.312C97.9344 103.312 93.1906 108.75 77 108.75C60.8094 108.75 56.1 103.312 46.2 103.312C20.6937 103.312 0 123.771 0 148.988V157.688C0 166.693 7.39062 174 16.5 174H137.5C146.609 174 154 166.693 154 157.688V148.988C154 123.771 133.306 103.312 107.8 103.312ZM137.5 157.688H16.5V148.988C16.5 132.811 29.8375 119.625 46.2 119.625C51.2187 119.625 59.3656 125.062 77 125.062C94.7719 125.062 102.747 119.625 107.8 119.625C124.162 119.625 137.5 132.811 137.5 148.988V157.688ZM77 97.875C104.328 97.875 126.5 75.9551 126.5 48.9375C126.5 21.9199 104.328 0 77 0C49.6719 0 27.5 21.9199 27.5 48.9375C27.5 75.9551 49.6719 97.875 77 97.875ZM77 16.3125C95.1844 16.3125 110 30.9598 110 48.9375C110 66.9152 95.1844 81.5625 77 81.5625C58.8156 81.5625 44 66.9152 44 48.9375C44 30.9598 58.8156 16.3125 77 16.3125Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }, undefined);
};
const transaction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "181",
    className: "transaction",
    height: "159",
    viewBox: "0 0 181 159",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M163.041 34.25H28.2812C25.1562 34.25 22.625 31.7188 22.625 28.5938C22.625 25.4687 25.1562 22.9375 28.2812 22.9375H164.031C167.156 22.9375 169.688 20.4063 169.688 17.2812C169.688 7.90955 162.09 0.3125 152.719 0.3125H22.625C10.1282 0.3125 0 10.4407 0 22.9375V136.062C0 148.559 10.1282 158.688 22.625 158.688H163.041C172.947 158.688 181 151.076 181 141.719V51.2188C181 41.8612 172.947 34.25 163.041 34.25ZM147.062 107.781C140.816 107.781 135.75 102.715 135.75 96.4688C135.75 90.2221 140.816 85.1562 147.062 85.1562C153.309 85.1562 158.375 90.2221 158.375 96.4688C158.375 102.715 153.309 107.781 147.062 107.781Z",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 13
  }, undefined);
};
const avatar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "292",
    className: "avatar",
    height: "292",
    viewBox: "0 0 292 292",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "146",
      cy: "146",
      r: "146",
      fill: "#C4C4C4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M195.889 114.898C185.404 130.659 167.48 141.046 147.13 141.046C124.814 141.046 105.416 128.555 95.5451 110.183C93.1073 112.905 90.8499 115.885 88.8073 119.126L84.7722 125.528C57.4891 168.811 88.595 225.188 139.76 225.188H147.83C198.995 225.188 230.101 168.811 202.818 125.528L198.783 119.126C197.861 117.664 196.896 116.254 195.889 114.898Z",
      fill: "#F3ECEC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "147.13",
      cy: "82.5262",
      r: "43.9659",
      fill: "#F3ECEC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }, undefined);
};
const upload = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "204",
    className: "upload",
    height: "204",
    viewBox: "0 0 204 204",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "102",
      cy: "102",
      r: "102",
      fill: "#C4C4C4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M106.567 106.567V141.582H97.4329V106.567H62.418V97.4328H97.4329V62.4179H106.567V97.4328H141.582V106.567H106.567Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }, undefined);
};
const contact = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 33 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M30.2027 22.418L30.206 22.404L30.2091 22.39C30.2559 22.1801 30.2815 21.9659 30.2854 21.7507L30.2866 21.6812L30.2831 21.6118C30.2535 21.0353 30.0651 20.4818 29.7436 20.0088C29.4225 19.5363 28.9818 19.1635 28.4732 18.9222L28.4289 18.9012L28.3837 18.8824L23.2274 16.7396L23.1975 16.7271L23.1671 16.7157C22.8209 16.5848 22.4557 16.5125 22.0869 16.501L22.0024 16.4983L21.918 16.5028C21.0874 16.5471 20.2946 16.9055 19.7145 17.5205L19.6765 17.5608L19.6408 17.6031L18.386 19.0903C16.3025 17.8769 14.5581 16.1969 13.2971 14.1994L14.7598 13.0389L14.8028 13.0048L14.8439 12.9683C15.4764 12.4073 15.8699 11.6151 15.9187 10.7561L15.9238 10.6659L15.9207 10.5756C15.908 10.1975 15.8292 9.82539 15.6887 9.47556L15.6759 9.44366L15.662 9.41223L13.4522 4.41223L13.4313 4.36488L13.408 4.31868C13.1496 3.80743 12.7589 3.38056 12.2835 3.07663C11.8084 2.77297 11.2634 2.60115 10.7049 2.57382L10.6347 2.57038L10.5644 2.57189C10.3605 2.57624 10.1572 2.59904 9.95715 2.64005L9.93962 2.64365L9.92216 2.64756L5.13421 3.71898L5.10118 3.72638L5.06841 3.73488C4.42704 3.90138 3.84686 4.26584 3.41938 4.78657C2.99107 5.30833 2.74058 5.95809 2.71562 6.64126L2.71429 6.67776V6.71429C2.71429 19.327 13.2454 29.4286 26.0759 29.4286H26.0767C26.7629 29.4283 27.4359 29.2029 27.9856 28.7786C28.5364 28.3535 28.9337 27.7506 29.0977 27.0609C29.0978 27.0608 29.0978 27.0606 29.0978 27.0605L30.2027 22.418ZM3.53571 2H29.4643C29.8911 2 30.2885 2.16499 30.5721 2.44001C30.8536 2.71299 31 3.06989 31 3.42857V28.5714C31 28.9301 30.8536 29.287 30.5721 29.56C30.2885 29.835 29.8911 30 29.4643 30H3.53571C3.1089 30 2.71149 29.835 2.42788 29.56C2.14636 29.287 2 28.9301 2 28.5714V3.42857C2 3.0699 2.14636 2.71299 2.42788 2.44001C2.71149 2.16499 3.1089 2 3.53571 2Z",
      fill: "#F3ECEC",
      stroke: "white",
      strokeWidth: "4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 13
  }, undefined);
};
const message = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 44 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M40.6345 26.8813C42.735 24.8246 43.9952 22.2442 43.9952 19.4286C43.9952 13.3571 38.1522 8.34063 30.5371 7.44509C28.1312 3.07366 22.4791 0 15.8875 0C7.11147 0 0.000514428 5.43393 0.000514428 12.1429C0.000514428 14.9509 1.26078 17.5313 3.36122 19.5955C2.19261 21.9254 0.512259 23.7317 0.481707 23.7621C0.000514442 24.2705 -0.136969 25.0143 0.145636 25.6594C0.420603 26.3045 1.06219 26.7219 1.76489 26.7219C5.8512 26.7219 9.15081 25.1888 11.3276 23.7772C12.0303 23.9366 12.7559 24.058 13.4968 24.1491C15.8951 28.5054 21.5243 31.5714 28.1083 31.5714C29.697 31.5714 31.2245 31.3893 32.6758 31.0554C34.8526 32.4594 38.1445 34 42.2385 34C42.9412 34 43.5751 33.5826 43.8577 32.9375C44.1327 32.2924 44.0029 31.5487 43.5217 31.0402C43.4911 31.0174 41.8031 29.2112 40.6345 26.8813ZM10.6326 19.8763L9.32648 20.7188C8.24952 21.4094 7.14966 21.9558 6.03451 22.3429C6.24074 21.9862 6.44696 21.6067 6.64555 21.2196L7.82944 18.8594L5.93522 17C4.90409 15.983 3.66674 14.321 3.66674 12.1429C3.66674 7.53616 9.26538 3.64286 15.8875 3.64286C22.5096 3.64286 28.1083 7.53616 28.1083 12.1429C28.1083 16.7496 22.5096 20.6429 15.8875 20.6429C14.6272 20.6429 13.367 20.4987 12.1449 20.2179L10.6326 19.8763ZM38.0605 24.2857L36.174 26.1375L37.3578 28.4978C37.5564 28.8848 37.7626 29.2643 37.9689 29.621C36.8537 29.2339 35.7539 28.6875 34.6769 27.9969L33.3708 27.1545L31.8509 27.5036C30.6288 27.7844 29.3685 27.9286 28.1083 27.9286C23.9837 27.9286 20.3022 26.4031 18.0796 24.1567C25.8169 23.3371 31.7745 18.2826 31.7745 12.1429C31.7745 11.8848 31.7439 11.6344 31.721 11.3839C36.6399 12.4844 40.329 15.6946 40.329 19.4286C40.329 21.6067 39.0917 23.2688 38.0605 24.2857Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 13
  }, undefined);
};
const gallery = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 39 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M32.5 25.7143V26.7857C32.5 28.5609 31.0449 30 29.25 30H3.25C1.45505 30 0 28.5609 0 26.7857V9.64286C0 7.86763 1.45505 6.42857 3.25 6.42857H4.33333V9.64286H3.65625C3.54851 9.64286 3.44517 9.68519 3.36899 9.76054C3.2928 9.83589 3.25 9.93808 3.25 10.0446V26.3839C3.25 26.4905 3.2928 26.5927 3.36899 26.668C3.44517 26.7434 3.54851 26.7857 3.65625 26.7857H28.8438C28.9515 26.7857 29.0548 26.7434 29.131 26.668C29.2072 26.5927 29.25 26.4905 29.25 26.3839V25.7143H32.5ZM35.3438 3.21429H10.1562C10.0485 3.21429 9.94517 3.25662 9.86899 3.33197C9.7928 3.40732 9.75 3.50951 9.75 3.61607V19.9554C9.75 20.0619 9.7928 20.1641 9.86899 20.2395C9.94517 20.3148 10.0485 20.3571 10.1562 20.3571H35.3438C35.4515 20.3571 35.5548 20.3148 35.631 20.2395C35.7072 20.1641 35.75 20.0619 35.75 19.9554V3.61607C35.75 3.50951 35.7072 3.40732 35.631 3.33197C35.5548 3.25662 35.4515 3.21429 35.3438 3.21429ZM35.75 0C37.5449 0 39 1.43906 39 3.21429V20.3571C39 22.1324 37.5449 23.5714 35.75 23.5714H9.75C7.95505 23.5714 6.5 22.1324 6.5 20.3571V3.21429C6.5 1.43906 7.95505 0 9.75 0H35.75ZM17.875 7.5C17.875 8.97931 16.6624 10.1786 15.1667 10.1786C13.6709 10.1786 12.4583 8.97931 12.4583 7.5C12.4583 6.02069 13.6709 4.82143 15.1667 4.82143C16.6624 4.82143 17.875 6.02069 17.875 7.5ZM13 13.9286L15.6755 11.2825C15.9928 10.9687 16.5072 10.9687 16.8246 11.2825L19.5 13.9286L26.5088 6.99676C26.8261 6.68297 27.3406 6.68297 27.6579 6.99676L32.5 11.7857V17.1429H13V13.9286Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }, undefined);
};
const checkMark = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M25 0.78125C11.6243 0.78125 0.78125 11.6243 0.78125 25C0.78125 38.3757 11.6243 49.2188 25 49.2188C38.3757 49.2188 49.2188 38.3757 49.2188 25C49.2188 11.6243 38.3757 0.78125 25 0.78125ZM25 5.46875C35.7941 5.46875 44.5312 14.2042 44.5312 25C44.5312 35.7941 35.7958 44.5312 25 44.5312C14.2059 44.5312 5.46875 35.7958 5.46875 25C5.46875 14.2059 14.2042 5.46875 25 5.46875ZM38.6918 18.1901L36.491 15.9716C36.0353 15.5121 35.2933 15.5091 34.8338 15.9649L21.0299 29.6579L15.1908 23.7715C14.7351 23.312 13.9931 23.309 13.5336 23.7647L11.3149 25.9655C10.8555 26.4213 10.8524 27.1633 11.3083 27.6229L20.1736 36.56C20.6294 37.0194 21.3714 37.0225 21.8309 36.5666L38.6853 19.8475C39.1446 19.3916 39.1476 18.6496 38.6918 18.1901Z",
      fill: "#039B37"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }, undefined);
};
const close = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "21",
      cy: "21",
      r: "21",
      fill: "#C4C4C4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.7544 13.5325C11.0444 14.2426 11.0444 15.3937 11.7544 16.1038L17.5397 21.8891L11.7544 27.6744C11.0444 28.3844 11.0444 29.5356 11.7544 30.2457C12.4645 30.9557 13.6156 30.9557 14.3257 30.2457L20.111 24.4604L25.8963 30.2457C26.6063 30.9557 27.7575 30.9557 28.4675 30.2457C29.1776 29.5356 29.1776 28.3844 28.4675 27.6744L22.6822 21.8891L28.4676 16.1038C29.1776 15.3937 29.1776 14.2426 28.4676 13.5325C27.7575 12.8225 26.6063 12.8225 25.8963 13.5325L20.111 19.3179L14.3256 13.5325C13.6156 12.8225 12.4644 12.8225 11.7544 13.5325Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }, undefined);
};
const Google = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: "google",
    width: "103",
    height: "102",
    viewBox: "0 0 103 102",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M51 73.6313C40.4813 73.6313 31.875 66.6188 29.325 57.0563L7.96875 78.4125C16.8937 92.4375 32.8313 102 51 102C60.8812 102 70.125 99.1313 78.0938 94.0313L56.7375 72.675C54.825 73.3125 52.9125 73.6313 51 73.6313Z",
      fill: "#34A853"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M102 43.9875C101.681 42.3938 100.406 41.4375 98.8125 41.4375H51C49.0875 41.4375 47.8125 42.7125 47.8125 44.625V60.5625C47.8125 62.475 49.0875 63.75 51 63.75H67.8937C65.025 68.2125 60.8812 71.0812 56.7375 72.675L78.0938 94.0312C92.4375 85.1063 102 69.1687 102 51C102 50.0437 102 49.4063 102 48.7688C102.319 47.4938 102.319 45.9 102 43.9875Z",
      fill: "#4285F4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M28.3687 51C28.3687 49.0875 28.6875 47.175 29.0063 45.2625L7.96875 23.9062C2.86875 31.875 0 41.1188 0 51C0 60.8812 2.86875 70.125 7.96875 78.0938L29.325 56.7375C28.6875 54.825 28.3687 52.9125 28.3687 51Z",
      fill: "#FBBC05"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M90.8438 19.125C87.3375 14.6625 82.875 10.8375 78.0938 7.65C70.125 2.86875 60.8812 0 51 0C32.8313 0 16.8937 9.5625 7.96875 23.9062L29.325 45.2625C31.875 35.7 40.8 28.6875 51 28.6875C52.9125 28.6875 54.825 29.0063 56.7375 29.6438C59.6062 30.6 62.1562 32.1938 65.025 34.425C65.9812 35.3813 67.2562 35.3812 68.5312 34.7437L89.8875 24.225C90.8438 23.9062 91.4813 22.95 91.4813 21.9938C91.8 21.0375 91.4813 20.0813 90.8438 19.125Z",
      fill: "#EA4335"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }, undefined);
};
const Back = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "48",
    height: "47",
    viewBox: "0 0 48 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M27.5916 3.14804L25.2133 0.758755C24.2062 -0.252922 22.5778 -0.252922 21.5815 0.758755L0.755273 21.6704C-0.251758 22.682 -0.251758 24.3179 0.755273 25.3189L21.5815 46.2412C22.5886 47.2529 24.2169 47.2529 25.2133 46.2412L27.5916 43.852C28.6093 42.8295 28.5879 41.1613 27.5487 40.1604L14.6394 27.805H45.4289C46.8537 27.805 48 26.6534 48 25.222V21.778C48 20.3466 46.8537 19.195 45.4289 19.195H14.6394L27.5487 6.83959C28.5986 5.83867 28.62 4.17048 27.5916 3.14804Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 13
  }, undefined);
};
const Loader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: "loader",
    width: "490",
    height: "512",
    viewBox: "0 0 490 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256.636 0C243.783 0 233.363 10.42 233.363 23.273V116.364C233.363 129.217 243.783 139.637 256.636 139.637C269.489 139.637 279.909 129.217 279.909 116.364V23.273C279.909 10.42 269.489 0 256.636 0Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256.638 372.364C243.785 372.364 233.365 382.784 233.365 395.637V488.728C233.365 501.581 243.785 512.001 256.638 512.001C269.491 512.001 279.911 501.581 279.911 488.728V395.637C279.911 382.784 269.491 372.364 256.638 372.364Z",
      fill: "black",
      fillOpacity: "0.6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M174.355 140.808L108.529 74.98C99.443 65.891 84.707 65.891 75.617 74.98C66.528 84.069 66.528 98.804 75.617 107.892L141.443 173.72C145.987 178.264 151.944 180.537 157.898 180.537C163.853 180.537 169.811 178.264 174.353 173.72C183.444 164.631 183.444 149.897 174.355 140.808Z",
      fill: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M466.091 232.727H419.546C406.693 232.727 396.273 243.147 396.273 256C396.273 268.853 406.693 279.273 419.546 279.273H466.091C478.944 279.273 489.364 268.853 489.364 256C489.364 243.147 478.944 232.727 466.091 232.727Z",
      fill: "black",
      fillOpacity: "0.4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M371.83 338.283C362.743 329.194 348.007 329.196 338.918 338.283C329.829 347.372 329.831 362.106 338.918 371.195L404.746 437.02C409.29 441.564 415.247 443.836 421.203 443.836C427.159 443.836 433.116 441.563 437.658 437.02C446.747 427.931 446.747 413.196 437.658 404.108L371.83 338.283Z",
      fill: "black",
      fillOpacity: "0.5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M140.273 256C140.273 243.147 129.853 232.727 117 232.727H23.909C11.056 232.727 0.635986 243.147 0.635986 256C0.635986 268.853 11.056 279.273 23.909 279.273H117C129.853 279.273 140.273 268.853 140.273 256Z",
      fill: "black",
      fillOpacity: "0.8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M174.355 338.283C165.268 329.194 150.531 329.194 141.443 338.283L75.618 404.108C66.529 413.195 66.529 427.932 75.618 437.02C80.162 441.564 86.119 443.836 92.075 443.836C98.031 443.836 103.988 441.565 108.53 437.02L174.355 371.195C183.444 362.108 183.444 347.372 174.355 338.283Z",
      fill: "black",
      fillOpacity: "0.7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 13
  }, undefined);
};
const innerLoader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "56",
    className: "button-load",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 55.1179C8.9234 52.0096 0 41.0469 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 39.559 48.9958 49.4821 39 53.7566V44.706C44.4222 41.1285 48 34.9821 48 28C48 16.9543 39.0457 8 28 8C16.9543 8 8 16.9543 8 28C8 36.5831 13.4067 43.9033 21 46.7408V55.1179Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 13
  }, undefined);
};
const camera = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: "profile-change",
    width: "512",
    height: "512",
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M512 144V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V144C0 117.5 21.5 96 48 96H136L148.3 63.1C155.3 44.4 173.2 32 193.2 32H318.7C338.7 32 356.6 44.4 363.6 63.1L376 96H464C490.5 96 512 117.5 512 144ZM376 288C376 221.8 322.2 168 256 168C189.8 168 136 221.8 136 288C136 354.2 189.8 408 256 408C322.2 408 376 354.2 376 288ZM344 288C344 336.5 304.5 376 256 376C207.5 376 168 336.5 168 288C168 239.5 207.5 200 256 200C304.5 200 344 239.5 344 288Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 13
  }, undefined);
};
const offBack = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "44",
    height: "44",
    className: "bold-box",
    viewBox: "0 0 129 148",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      clipPath: "url(#clip0)",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.46997 110.27V38.05L64.47 74.48L127.47 37.48V110.22L64.47 146.59L1.46997 110.27ZM92.47 117.4C91.58 117.4 90.7099 117.664 89.9699 118.158C89.2299 118.653 88.6531 119.356 88.3125 120.178C87.9719 121 87.8828 121.905 88.0564 122.778C88.2301 123.651 88.6587 124.453 89.288 125.082C89.9173 125.711 90.7191 126.14 91.5921 126.314C92.465 126.487 93.3698 126.398 94.192 126.057C95.0143 125.717 95.7171 125.14 96.2116 124.4C96.7061 123.66 96.97 122.79 96.97 121.9C96.9673 120.707 96.4924 119.564 95.649 118.721C94.8057 117.878 93.6626 117.403 92.47 117.4V117.4ZM106.47 109.4C105.58 109.4 104.71 109.664 103.97 110.158C103.23 110.653 102.653 111.356 102.313 112.178C101.972 113 101.883 113.905 102.056 114.778C102.23 115.651 102.659 116.453 103.288 117.082C103.917 117.711 104.719 118.14 105.592 118.314C106.465 118.487 107.37 118.398 108.192 118.057C109.014 117.717 109.717 117.14 110.212 116.4C110.706 115.66 110.97 114.79 110.97 113.9C110.967 112.707 110.492 111.564 109.649 110.721C108.806 109.878 107.663 109.403 106.47 109.4V109.4ZM119.47 101.4C118.58 101.4 117.71 101.664 116.97 102.158C116.23 102.653 115.653 103.356 115.313 104.178C114.972 105 114.883 105.905 115.056 106.778C115.23 107.651 115.659 108.453 116.288 109.082C116.917 109.711 117.719 110.14 118.592 110.314C119.465 110.487 120.37 110.398 121.192 110.057C122.014 109.717 122.717 109.14 123.212 108.4C123.706 107.66 123.97 106.79 123.97 105.9C123.967 104.707 123.492 103.564 122.649 102.721C121.806 101.878 120.663 101.403 119.47 101.4V101.4ZM105.69 70.4C105.307 70.401 104.932 70.512 104.61 70.72L84.41 83.72C84.1849 83.8622 83.9915 84.0493 83.8418 84.2695C83.6921 84.4897 83.5894 84.7383 83.54 85C83.4834 85.2571 83.4781 85.5228 83.5245 85.7819C83.5708 86.041 83.6678 86.2884 83.81 86.51L84.58 87.7C84.8669 88.1449 85.3186 88.458 85.836 88.5705C86.3533 88.6829 86.8942 88.5857 87.34 88.3L107.53 75.3C107.973 75.0144 108.286 74.5651 108.4 74.05C108.458 73.7936 108.465 73.5282 108.42 73.2691C108.376 73.01 108.28 72.7622 108.14 72.54L107.37 71.35C107.188 71.0702 106.939 70.8403 106.646 70.6814C106.352 70.5224 106.024 70.4395 105.69 70.44V70.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127 38.3599V110L64.5 146.08L2 110V38.9199L32 56.2599L64 74.7599L64.5 75.0499L65 74.7599L127 38.3599V38.3599ZM86.26 89.0999C86.7392 89.0998 87.2081 88.9609 87.61 88.6999L107.79 75.6999C108.068 75.5263 108.309 75.2989 108.497 75.031C108.686 74.7631 108.82 74.4601 108.89 74.1399C108.964 73.8171 108.972 73.483 108.916 73.1568C108.859 72.8306 108.738 72.519 108.56 72.2399L107.79 71.0599C107.565 70.7072 107.254 70.4169 106.887 70.2159C106.52 70.0149 106.108 69.9097 105.69 69.9099C105.211 69.9089 104.741 70.0479 104.34 70.3099L84.14 83.3099C83.5831 83.6705 83.1916 84.2368 83.0511 84.8852C82.9105 85.5335 83.0324 86.2111 83.39 86.7699L84.15 87.9499C84.3756 88.3053 84.6873 88.5979 85.0561 88.8007C85.425 89.0035 85.8391 89.1098 86.26 89.1099V89.0999ZM119.47 110.91C120.459 110.91 121.426 110.617 122.248 110.067C123.07 109.518 123.711 108.737 124.089 107.823C124.468 106.91 124.567 105.904 124.374 104.934C124.181 103.965 123.705 103.074 123.006 102.374C122.306 101.675 121.415 101.199 120.445 101.006C119.476 100.813 118.47 100.912 117.557 101.291C116.643 101.669 115.862 102.31 115.313 103.132C114.763 103.954 114.47 104.921 114.47 105.91C114.47 107.236 114.997 108.508 115.934 109.445C116.872 110.383 118.144 110.91 119.47 110.91V110.91ZM106.47 118.91C107.459 118.91 108.426 118.617 109.248 118.067C110.07 117.518 110.711 116.737 111.089 115.823C111.468 114.91 111.567 113.904 111.374 112.934C111.181 111.965 110.705 111.074 110.006 110.374C109.306 109.675 108.415 109.199 107.445 109.006C106.476 108.813 105.47 108.912 104.557 109.291C103.643 109.669 102.862 110.31 102.313 111.132C101.763 111.954 101.47 112.921 101.47 113.91C101.47 115.236 101.997 116.508 102.934 117.445C103.872 118.383 105.144 118.91 106.47 118.91V118.91ZM92.47 126.91C93.4589 126.91 94.4256 126.617 95.2478 126.067C96.0701 125.518 96.711 124.737 97.0894 123.823C97.4678 122.91 97.5669 121.904 97.3739 120.934C97.181 119.965 96.7048 119.074 96.0055 118.374C95.3063 117.675 94.4154 117.199 93.4454 117.006C92.4755 116.813 91.4702 116.912 90.5566 117.291C89.6429 117.669 88.8621 118.31 88.3127 119.132C87.7632 119.954 87.47 120.921 87.47 121.91C87.47 123.236 87.9968 124.508 88.9345 125.445C89.8721 126.383 91.1439 126.91 92.47 126.91ZM127.47 36.9099L64.47 73.9099L32.47 55.4099L1 37.2099V110.53L64.5 147.19L128 110.56V37.2399L127.46 36.9299L127.47 36.9099ZM86.26 88.0999C86.0088 88.1004 85.7616 88.0374 85.5414 87.9168C85.3211 87.7962 85.1348 87.6218 85 87.4099L84.23 86.2199C84.0184 85.8849 83.9469 85.48 84.0311 85.0928C84.1153 84.7055 84.3484 84.3669 84.68 84.1499L104.88 71.1499C105.119 70.9896 105.402 70.9059 105.69 70.9099C105.941 70.9094 106.188 70.9724 106.409 71.093C106.629 71.2137 106.815 71.388 106.95 71.5999L107.72 72.7899C107.933 73.1255 108.005 73.532 107.918 73.9201C107.832 74.3083 107.595 74.6463 107.26 74.8599L87.07 87.8599C86.8286 88.0159 86.5474 88.0992 86.26 88.0999V88.0999ZM119.47 109.9C118.679 109.9 117.906 109.665 117.248 109.226C116.59 108.786 116.077 108.162 115.774 107.431C115.472 106.7 115.393 105.895 115.547 105.12C115.701 104.344 116.082 103.631 116.642 103.071C117.201 102.512 117.914 102.131 118.69 101.977C119.466 101.822 120.27 101.902 121.001 102.204C121.732 102.507 122.356 103.02 122.796 103.678C123.235 104.335 123.47 105.109 123.47 105.9C123.47 106.961 123.049 107.978 122.298 108.728C121.548 109.478 120.531 109.9 119.47 109.9ZM106.47 117.9C105.679 117.9 104.906 117.665 104.248 117.226C103.59 116.786 103.077 116.162 102.774 115.431C102.472 114.7 102.393 113.895 102.547 113.12C102.701 112.344 103.082 111.631 103.642 111.071C104.201 110.512 104.914 110.131 105.69 109.977C106.466 109.822 107.27 109.902 108.001 110.204C108.732 110.507 109.356 111.02 109.796 111.678C110.235 112.335 110.47 113.109 110.47 113.9C110.47 114.961 110.049 115.978 109.298 116.728C108.548 117.478 107.531 117.9 106.47 117.9ZM92.47 125.9C91.6789 125.9 90.9055 125.665 90.2477 125.226C89.5899 124.786 89.0772 124.162 88.7745 123.431C88.4717 122.7 88.3925 121.895 88.5469 121.12C88.7012 120.344 89.0822 119.631 89.6416 119.071C90.201 118.512 90.9137 118.131 91.6896 117.977C92.4656 117.822 93.2698 117.902 94.0007 118.204C94.7316 118.507 95.3563 119.02 95.7959 119.678C96.2354 120.335 96.47 121.109 96.47 121.9C96.47 122.961 96.0486 123.978 95.2984 124.728C94.5483 125.478 93.5309 125.9 92.47 125.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.4C94.403 125.4 95.97 123.833 95.97 121.9C95.97 119.967 94.403 118.4 92.47 118.4C90.537 118.4 88.97 119.967 88.97 121.9C88.97 123.833 90.537 125.4 92.47 125.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 118.9C93.0633 118.9 93.6433 119.076 94.1367 119.405C94.63 119.735 95.0145 120.204 95.2416 120.752C95.4687 121.3 95.5281 121.903 95.4123 122.485C95.2966 123.067 95.0109 123.602 94.5913 124.021C94.1717 124.441 93.6372 124.726 93.0552 124.842C92.4733 124.958 91.8701 124.899 91.3219 124.672C90.7737 124.444 90.3052 124.06 89.9756 123.567C89.6459 123.073 89.47 122.493 89.47 121.9C89.47 121.104 89.786 120.341 90.3487 119.779C90.9113 119.216 91.6743 118.9 92.47 118.9V118.9ZM92.47 117.9C91.6788 117.9 90.9055 118.134 90.2477 118.574C89.5899 119.014 89.0772 119.638 88.7745 120.369C88.4717 121.1 88.3925 121.904 88.5468 122.68C88.7012 123.456 89.0821 124.169 89.6415 124.728C90.201 125.288 90.9137 125.669 91.6896 125.823C92.4655 125.977 93.2698 125.898 94.0007 125.595C94.7316 125.293 95.3563 124.78 95.7958 124.122C96.2354 123.464 96.47 122.691 96.47 121.9C96.47 120.839 96.0485 119.822 95.2984 119.071C94.5483 118.321 93.5308 117.9 92.47 117.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M86.26 87.6C86.0927 87.5997 85.9281 87.5574 85.7814 87.4771C85.6346 87.3967 85.5104 87.2808 85.42 87.14L84.65 86C84.5791 85.8882 84.5311 85.7635 84.5088 85.633C84.4865 85.5025 84.4903 85.3689 84.52 85.24C84.5769 84.9851 84.7312 84.7626 84.95 84.62L105.15 71.62C105.311 71.516 105.498 71.4605 105.69 71.46C105.857 71.4602 106.022 71.5025 106.169 71.5829C106.315 71.6632 106.44 71.7791 106.53 71.92L107.3 73.11C107.441 73.3331 107.487 73.6026 107.43 73.86C107.371 74.1165 107.213 74.3393 106.99 74.48L86.8 87.48C86.6349 87.5699 86.4477 87.6115 86.26 87.6Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M105.69 71.9399C105.774 71.9391 105.857 71.9599 105.93 72.0001C106.004 72.0404 106.066 72.0989 106.11 72.1699L106.88 73.3599C106.948 73.4704 106.97 73.6035 106.94 73.7299C106.91 73.8606 106.831 73.975 106.72 74.0499L86.52 86.9999C86.4416 87.0484 86.3521 87.0759 86.26 87.0799C86.1753 87.0797 86.092 87.0575 86.0184 87.0154C85.9447 86.9733 85.8833 86.9129 85.84 86.8399L85.07 85.6599C85.0029 85.5528 84.9779 85.4245 85 85.2999C85.0094 85.2358 85.0332 85.1746 85.0695 85.1209C85.1059 85.0672 85.1539 85.0224 85.21 84.9899L105.41 71.9899C105.492 71.9415 105.585 71.9172 105.68 71.9199L105.69 71.9399ZM105.68 70.9199C105.392 70.9159 105.109 70.9996 104.87 71.1599L84.67 84.1599C84.3384 84.3769 84.1053 84.7155 84.0212 85.1028C83.937 85.49 84.0084 85.8949 84.22 86.2299L85 87.4099C85.1057 87.5762 85.2433 87.7199 85.4048 87.8327C85.5663 87.9454 85.7486 88.025 85.9411 88.0669C86.1337 88.1087 86.3325 88.112 86.5263 88.0765C86.7201 88.0409 86.9049 87.9674 87.07 87.8599L107.26 74.8599C107.595 74.6463 107.832 74.3083 107.919 73.9202C108.005 73.532 107.933 73.1255 107.72 72.7899L107 71.6299C106.865 71.4181 106.679 71.2437 106.459 71.1231C106.238 71.0024 105.991 70.9394 105.74 70.9399L105.68 70.9199Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.4C108.403 117.4 109.97 115.833 109.97 113.9C109.97 111.967 108.403 110.4 106.47 110.4C104.537 110.4 102.97 111.967 102.97 113.9C102.97 115.833 104.537 117.4 106.47 117.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 110.9C107.063 110.9 107.643 111.076 108.137 111.405C108.63 111.735 109.015 112.204 109.242 112.752C109.469 113.3 109.528 113.903 109.412 114.485C109.297 115.067 109.011 115.602 108.591 116.021C108.172 116.441 107.637 116.726 107.055 116.842C106.473 116.958 105.87 116.899 105.322 116.672C104.774 116.444 104.305 116.06 103.976 115.567C103.646 115.073 103.47 114.493 103.47 113.9C103.47 113.104 103.786 112.341 104.349 111.779C104.911 111.216 105.674 110.9 106.47 110.9V110.9ZM106.47 109.9C105.679 109.9 104.905 110.134 104.248 110.574C103.59 111.014 103.077 111.638 102.774 112.369C102.472 113.1 102.392 113.904 102.547 114.68C102.701 115.456 103.082 116.169 103.642 116.728C104.201 117.288 104.914 117.669 105.69 117.823C106.466 117.977 107.27 117.898 108.001 117.595C108.732 117.293 109.356 116.78 109.796 116.122C110.235 115.464 110.47 114.691 110.47 113.9C110.47 112.839 110.049 111.822 109.298 111.071C108.548 110.321 107.531 109.9 106.47 109.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.4C121.403 109.4 122.97 107.833 122.97 105.9C122.97 103.967 121.403 102.4 119.47 102.4C117.537 102.4 115.97 103.967 115.97 105.9C115.97 107.833 117.537 109.4 119.47 109.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 102.9C120.063 102.9 120.643 103.076 121.137 103.405C121.63 103.735 122.015 104.204 122.242 104.752C122.469 105.3 122.528 105.903 122.412 106.485C122.297 107.067 122.011 107.602 121.591 108.021C121.172 108.441 120.637 108.726 120.055 108.842C119.473 108.958 118.87 108.899 118.322 108.672C117.774 108.444 117.305 108.06 116.976 107.567C116.646 107.073 116.47 106.493 116.47 105.9C116.47 105.104 116.786 104.341 117.349 103.779C117.911 103.216 118.674 102.9 119.47 102.9V102.9ZM119.47 101.9C118.679 101.9 117.905 102.134 117.248 102.574C116.59 103.014 116.077 103.638 115.774 104.369C115.472 105.1 115.392 105.904 115.547 106.68C115.701 107.456 116.082 108.169 116.642 108.728C117.201 109.288 117.914 109.669 118.69 109.823C119.466 109.977 120.27 109.898 121.001 109.595C121.732 109.293 122.356 108.78 122.796 108.122C123.235 107.464 123.47 106.691 123.47 105.9C123.47 104.839 123.049 103.822 122.298 103.071C121.548 102.321 120.531 101.9 119.47 101.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.34 16.67L61.07 36.9L32.47 55.4L1.01001 37.21L1.56001 36.9L64.47 0.579956L92.34 16.67Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.56001 36.8999L1.01001 37.2099",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.43 36.9299L64.47 73.8999L32.47 55.3999L61.07 36.8999L92.34 16.6699L127.38 36.8999L127.43 36.9299Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M64.47 73.8999V146.9",
        stroke: "black",
        strokeWidth: "3",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.9C108.679 117.9 110.47 116.109 110.47 113.9C110.47 111.691 108.679 109.9 106.47 109.9C104.261 109.9 102.47 111.691 102.47 113.9C102.47 116.109 104.261 117.9 106.47 117.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.9C94.6791 125.9 96.47 124.109 96.47 121.9C96.47 119.691 94.6791 117.9 92.47 117.9C90.2608 117.9 88.47 119.691 88.47 121.9C88.47 124.109 90.2608 125.9 92.47 125.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.9C121.679 109.9 123.47 108.109 123.47 105.9C123.47 103.691 121.679 101.9 119.47 101.9C117.261 101.9 115.47 103.691 115.47 105.9C115.47 108.109 117.261 109.9 119.47 109.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          width: "128.41",
          height: "147.22",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluTG9naW4vYWRtaW5TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmFsaWRhdG9yL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi1zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3ZnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9mdW5jdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQWRtaW5TaWduVXAiLCJzaWdudXAiLCJoYW5kbGVBZG1pblNpZ25VcCIsImhhbmRsZVNpZ251cENoYW5nZSIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImZvcm1FcnJvcnMiLCJmaXJzdE5hbWUiLCJsZW5ndGgiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzZXRUcmFuc2FjdGlvbiIsIlJlcXVlc3RDb250ZXh0IiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ1c2VTdGF0ZSIsImlzQWRtaW4iLCJzZXRpc0FkbWluIiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwidXNlckVycm9yIiwic2V0VXNlckVycm9yIiwic2V0U2lnbnVwIiwicmVzZXRQYXNzd29yZCIsInNldFJlc2V0UGFzc3dvcmQiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiLCJmdWxsTmFtZSIsInJvbGUiLCJfaWQiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZ2V0SWRUb2tlblJlc3VsdCIsInRoZW4iLCJpZFRva2VuUmVzdWx0IiwiY2xhaW1zIiwiYWRtaW4iLCJoYW5kbGVMb2dpbkNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJuZXdMb2dpbiIsInNpbmd1cFZhbGlkYXRlIiwibmV3U2lnbnVwIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjcmVkIiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwicmVwbGFjZSIsImFkZEFkbWluUm9sZSIsImZ1bmN0aW9ucyIsImh0dHBzQ2FsbGFibGUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2lnbm91dCIsInNpZ25PdXQiLCJjYXRjaCIsInBhc3N3b3JkUmVzZXQiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJlbWFpbFJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImhhbmRsZVNvY2lhbExvZ2luIiwicHJvdmlkZXIiLCJhZGRTY29wZSIsInNpZ25JbldpdGhQb3B1cCIsImNyZWRlbnRpYWwiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJkaXNwbGF5TmFtZSIsInNwbGl0IiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJoYW5kbGVBZG1pbkxvZ2luIiwiY2hpbGRyZW4iLCJSZXF1ZXN0Q29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFN0YXRlIiwiY2FydG9ucyIsImRlbGl2ZXJ5TG9jYXRpb25zIiwiZGVzY3JpcHRpb25zIiwiaXRlbXNXb3J0aCIsInJlY2VpdmVyRmlyc3ROYW1lIiwicmVjZWl2ZXJQaG9uZU51bWJlcjEiLCJyZWNlaXZlclBob25lTnVtYmVyMiIsInJlcXVlc3RJbWFnZXMiLCJzZW5kZXJGaXJzdE5hbWUiLCJzZW5kZXJQaG9uZU51bWJlcjEiLCJzZW5kZXJQaG9uZU51bWJlcjIiLCJ0YWdOYW1lIiwib3RoZXJJdGVtcyIsImNyZWF0ZWRBdCIsInN0YXR1cyIsImFtb3VudCIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ0cmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSW5zdCIsInNldFRyYW5zYWN0aW9uSW5zdCIsImdhbGxlcnlJbWFnZSIsInNldEdhbGxlcnlJbWFnZSIsIndoZXJlIiwiZ2V0IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJpZCIsInB1c2giLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInByZWZldGNoIiwic3RvcmUiLCJyZWYiLCJjaGlsZCIsImxpc3RBbGwiLCJpdGVtcyIsImltYWdlUmVmIiwiZ2V0SW1hZ2VVcmwiLCJpbWciLCJpbWFnZXMiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInBob3RvQ2hhbmdlIiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJwdXQiLCJvbiIsInNuYXAiLCJuZXdQZXJjZW50YWdlIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJlcnIiLCJjbG91ZFVybCIsInJldm9rZU9iamVjdFVSTCIsImhhbmRsZUZvcm1TdWJtaXQiLCJhZGQiLCJ0aW1lc3RhbXAiLCJoYW5kbGVSZXF1ZXN0VXBkYXRlIiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwicHJvZmlsZVZhbGlkYXRlIiwiYWRkcmVzcyIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFkbWluU2lnblVwUGFnZSIsImJveCIsInByb2ZpbGUiLCJhdmF0YXIiLCJ1cGxvYWQiLCJjaGVja01hcmsiLCJjbG9zZSIsIkdvb2dsZSIsIkJhY2siLCJMb2FkZXIiLCJpbm5lckxvYWRlciIsImNhbWVyYSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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QUE7QUFBQSxlQUFSO0FBNEJILENBN0JNLEM7Ozs7Ozs7Ozs7O0FDcElQLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2FkbWluLXNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWRtaW4tc2lnbnVwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5cclxuXHJcbmNvbnN0IEFkbWluU2lnblVwID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdHtzaWdudXAsIGhhbmRsZUFkbWluU2lnblVwLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZVNpZ251cFN1Ym1pdH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9O1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic2lnbnVwLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZUFkbWluU2lnblVwfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInNpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZVNpZ251cENoYW5nZX0gaWQ9XCJmaXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e3NpZ251cC5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBmaXJzdCBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlU2lnbnVwQ2hhbmdlfSBpZD1cImxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3NpZ251cC5sYXN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIGxhc3QgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmxhc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZVNpZ251cENoYW5nZX0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtzaWdudXAuZW1haWx9IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbC4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmVtYWlsLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVOdW1iZXJcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2hhbmRsZVNpZ251cENoYW5nZX0gaWQ9XCJwaG9uZU51bWJlclwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHZhbHVlPXtzaWdudXAucGhvbmVOdW1iZXJ9IHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZSBOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5waG9uZU51bWJlci5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlU2lnbnVwQ2hhbmdlfSBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3NpZ251cC5wYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucGFzc3dvcmQubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnBhc3N3b3JkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNpZ251cFwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkhhdmUgYW4gYWNjb3VudD88L2g1PjxoNT48TGluayBocmVmPVwiL2FkbWluLWxvZ2luXCI+PGE+TG9naW48L2E+PC9MaW5rPjwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lnblVwOyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaW5ndXBWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UsIHByb3ZpZGVyLCBmdW5jdGlvbnMgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtzZXRUcmFuc2FjdGlvbn0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0FkbWluLCBzZXRpc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3VzZXJFcnJvciwgc2V0VXNlckVycm9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2lnbnVwLCBzZXRTaWdudXBdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCBzZXRSZXNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBmdWxsTmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICAgIF9pZDogJydcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgdXNlci5nZXRJZFRva2VuUmVzdWx0KCkudGhlbihpZFRva2VuUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZFRva2VuUmVzdWx0LmNsYWltcy5hZG1pbiA9PSB0cnVlID8gc2V0aXNBZG1pbih0cnVlKSA6IHNldGlzQWRtaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IG5ld0xvZ2luID0gey4uLmxvZ2luLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICByZXR1cm4gc2V0TG9naW4obmV3TG9naW4pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGZvcm1FcnJvcnMgfSA9IHsuLi5zaWdudXAgfVxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgIGxldCBuZXdTaWdudXAgPSB7Li4uc2lnbnVwLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZCB9ID0gc2lnbnVwO1xyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZG1pblNpZ25VcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZCB9ID0gc2lnbnVwO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRBZG1pblJvbGUgPSBmdW5jdGlvbnMuaHR0cHNDYWxsYWJsZSgnYWRkQWRtaW5Sb2xlJylcclxuICAgICAgICBhZGRBZG1pblJvbGUoeyBlbWFpbCB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdub3V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uKFtdKTtcclxuICAgICAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzd29yZFJlc2V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gcmVzZXRQYXNzd29yZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICAgICAgYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKS50aGVuKCgpID0+IHt9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybUVycm9ycyB9ID0gcmVzZXRQYXNzd29yZDtcclxuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gUmVnRXhwKC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pO1xyXG4gICAgICAgIGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJyA6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcbiAgICAgICAgc2V0UmVzZXRQYXNzd29yZCh7Li4ucmVzZXRQYXNzd29yZCwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgcHJvdmlkZXIuYWRkU2NvcGUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICBwcm92aWRlci5hZGRTY29wZSgnZW1haWwnKTsgXHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvKiogQHR5cGUge2ZpcmViYXNlLmF1dGguT0F1dGhDcmVkZW50aWFsfSAqL1xyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbCA9IHJlc3VsdC5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlci5kaXNwbGF5TmFtZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICBsZXQgbGFzdE5hbWUgPSBkYXRhWzFdO1xyXG4gICAgICAgICAgICBsZXQgZW1haWwgPSByZXN1bHQudXNlci5lbWFpbDtcclxuICAgICAgICAgICAgdXNlciAmJiAodXNlci51aWQgJiYgc2V0TG9naW4odHJ1ZSkpO1xyXG4gICAgICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJykpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhyZXN1bHQudXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAgICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKSk7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHNldEF1dGhlbnRpY2F0aW5nKGZhbHNlKSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgICAgICAgIHNldFVzZXJFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcclxuICAgICAgICAgICAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZG1pbkxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGxvZ2luO1xyXG4gICAgICAgIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0aXNBZG1pbih0cnVlKTtcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJ2NvbnRhY3QnKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDwgQXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e3VzZXJFcnJvciwgYXV0aGVudGljYXRpbmcsIHNlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuLCBwYXNzd29yZFJlc2V0LCByZXNldFBhc3N3b3JkLCBoYW5kbGVQYXNzd29yZENoYW5nZSwgbG9naW4sIHNpZ251cCwgaXNMb2dpbiwgaXNBZG1pbiwgc2V0aXNMb2dpbiwgaGFuZGxlTG9naW5DaGFuZ2UsIGhhbmRsZVNvY2lhbExvZ2luLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZUFkbWluU2lnblVwLCBoYW5kbGVTaWdub3V0LCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0IH19ID5cclxuICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfSBcclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnYWxsZXJ5LCBtZXNzYWdlLCBvZmZCYWNrLCBjb250YWN0IH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGgsIHN0b3JlLCBkYXRhYmFzZSwgdGltZXN0YW1wIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBjYXJ0b25zOiBcIlwiLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIlwiLFxyXG4gICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RJbWFnZXM6IFtdLFxyXG4gICAgICAgIHNlbmRlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgIHRhZ05hbWU6IFwiXCIsXHJcbiAgICAgICAgb3RoZXJJdGVtczogZmFsc2UsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBzZW5kZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbkluc3QsIHNldFRyYW5zYWN0aW9uSW5zdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2dhbGxlcnlJbWFnZSwgc2V0R2FsbGVyeUltYWdlXT0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICB1c2VyICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJylcclxuICAgICAgICAgICAgICAgIC53aGVyZSgndXNlcklkJywgJz09JywgdXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHRhZ05hbWUsIGNyZWF0ZWRBdCwgc3RhdHVzLCBhbW91bnQgfSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGRvYy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgdGFnTmFtZSwgY3JlYXRlZEF0LCBzdGF0dXMsIGFtb3VudCwgaWQgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUcmFuc2FjdGlvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25JbnN0ICE9PSB1bmRlZmluZWQgJiYgKHNldFRyYW5zYWN0aW9uKFsuLi50cmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25JbnN0XSkpO1xyXG4gICAgfSwgW3RyYW5zYWN0aW9uSW5zdF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGlkIH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgeyBmb3JtRXJyb3JzIH0gPSB7Li4uaW5wdXQgfTtcclxuICAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0gey4uLmlucHV0LCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIGNoZWNrZWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG5ld0lucHV0ID0gey4uLmlucHV0LCBbbmFtZV06IGNoZWNrZWQgfTtcclxuICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9ncmVzcyA9PSAxMDAgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3MoMCk7XHJcbiAgICB9LCBbcHJvZ3Jlc3NdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnByZWZldGNoKCcvdHJhbnNhY3Rpb24nKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgdXNlciAhPT0gbnVsbCAmJiBzZXRVc2VySWQodXNlci51aWQpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgICAgIHVzZXIgIT09IG51bGwgJiYgKHN0b3JlLnJlZigpLmNoaWxkKCcvcmVxdWVzdEltYWdlcycpLmxpc3RBbGwoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpbWFnZVJlZil7XHJcbiAgICAgICAgICAgICAgICAgICBnZXRJbWFnZVVybCggaW1hZ2VSZWYpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBpbWcgPSBbXTtcclxuICAgICAgICAgY29uc3QgZ2V0SW1hZ2VVcmwgPSAoIGltYWdlcykgPT4ge1xyXG4gICAgICAgIGltYWdlcy5nZXREb3dubG9hZFVSTCgpLnRoZW4oKHVybCk9PntcclxuICAgICAgICAgICAgaW1nLnB1c2godXJsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0R2FsbGVyeUltYWdlKGltZyk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgIT09IDEwMCAmJiBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICAgICAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSA6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZSA9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTtcclxuICAgICAgICAgICAgbGV0IHBlcmZlY3RTaXplID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJ1Y3R1cmVVcmwgPSB7IGltYWdlU291cmNlOiBwZXJmZWN0U2l6ZSB9XHJcbiAgICAgICAgICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBhc3luYyhlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvdWRVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHsgY2xvdWRVcmwgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2FydG9ucyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnMsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9ucyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aCxcclxuICAgICAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMixcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlcyxcclxuICAgICAgICAgICAgc2VuZGVyRmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMixcclxuICAgICAgICAgICAgdGFnTmFtZSxcclxuICAgICAgICAgICAgb3RoZXJJdGVtc1xyXG4gICAgICAgIH0gPSBpbnB1dDtcclxuXHJcbiAgICAgICAgc2V0VHJhbnNhY3Rpb25JbnN0KHsgdGFnTmFtZSwgc3RhdHVzOiBcInBlbmRpbmdcIiwgYW1vdW50OiBcIlwiLCBpZDogXCJoa2FqJDUlXmd4bio4bmtcIiB9KTtcclxuICAgICAgICB1c2VySWQgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUmVxdWVzdHMnKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgY2FydG9ucyxcclxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgaXRlbXNXb3J0aCxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMixcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICBzZW5kZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgb3RoZXJJdGVtcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIChzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dChpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElucHV0KC4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SW5wdXQoey4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzIH0pO1xyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IFtcclxuICAgICAgICB7IGNvbnRlbnQ6IFwiY29udGFjdFwiLCBpY29uOiBjb250YWN0KCksIHRpdGxlOiBcIkNvbnRhY3RcIiwgaWQ6IDEgfSxcclxuICAgICAgICB7IGNvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDIgfSxcclxuICAgICAgICB7IGNvbnRlbnQ6IFwiU2hpcHBpbmdSZXF1ZXN0XCIsIGljb246IG9mZkJhY2soKSwgdGl0bGU6IFwiUmVxdWVzdFwiLCBpZDogMyB9LFxyXG4gICAgICAgIHsgY29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0IH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge3tnYWxsZXJ5SW1hZ2UsIHRyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25JbnN0LCBpbnB1dCwgZXJyb3IsIGxvYWRpbmcsIHNldFJlcXVlc3RJbWFnZXMsIHJlcXVlc3RJbWFnZXMsIHJlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2VzcywgaW5pdGlhbFN0YXRlLCBzZXRDb3VudCwgY291bnQsIHNldElucHV0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW4gfSB9ID4gXHJcbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfSBcclxuICAgICAgICA8L1JlcXVlc3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDX0lNS1hhTkpJd0VkQUpUUU5IMmx0Q1BjT045STZPbGdcIixcclxuICBhdXRoRG9tYWluOiBcIm1hbmFnZXJicmFuLTJhNjk5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWFuYWdlcmJyYW4tMmE2OTktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIm1hbmFnZXJicmFuLTJhNjk5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJtYW5hZ2VyYnJhbi0yYTY5OS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ3NDk4MTE3MjY0NVwiLFxyXG4gIGFwcElkOiBcIjE6NDc0OTgxMTcyNjQ1OndlYjpmYThkYTlmMDlmMGMzNDQ1NjMxNDRjXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTA1NEdFS0JLMkhcIlxyXG59O1xyXG5cclxuICBjb25zdCBmaXJlYmFzZUFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDpmaXJlYmFzZS5hcHAoKTtcclxuICBjb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gIGlmKHByb2Nlc3MuYnJvd3Nlcil7XHJcbiAgICBkYXRhYmFzZS5lbmFibGVQZXJzaXN0ZW5jZSgpXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGlmIChlcnIuY29kZSA9PSAnZmFpbGVkLXByZWNvbmRpdGlvbicpIHtcclxuICAgICAgICAgICAgICAvLyBNdWx0aXBsZSB0YWJzIG9wZW4sIHBlcnNpc3RlbmNlIGNhbiBvbmx5IGJlIGVuYWJsZWRcclxuICAgICAgICAgICAgICAvLyBpbiBvbmUgdGFiIGF0IGEgYSB0aW1lLlxyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT0gJ3VuaW1wbGVtZW50ZWQnKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFsbCBvZiB0aGVcclxuICAgICAgICAgICAgICAvLyBmZWF0dXJlcyByZXF1aXJlZCB0byBlbmFibGUgcGVyc2lzdGVuY2VcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuY29kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIGNvbnN0IHN0b3JlID0gZmlyZWJhc2VBcHAuc3RvcmFnZSgpO1xyXG4gIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgY29uc3QgZnVuY3Rpb25zID0gZmlyZWJhc2UuZnVuY3Rpb25zKCk7XHJcblxyXG4gIGV4cG9ydCB7c3RvcmUsIGRhdGFiYXNlLCBhdXRoLCB0aW1lc3RhbXAsIHByb3ZpZGVyLCBmdW5jdGlvbnN9OyAgXHJcbiAiLCJleHBvcnQgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwaG9uZU51bWJlclwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBob25lTnVtYmVyID0gdmFsdWUubGVuZ3RoIDwgMTEgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKmlucHV0IGEgdmFsaWQgcGhvbmUgbnVtYmVyKicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiYWRkcmVzc1wiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmFkZHJlc3MgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0XHJcblx0ICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFZhbGlkYXRlID0gKCBpZCwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblxyXG5cdHN3aXRjaCAoaWQpIHtcclxuXHRcdGNhc2UgXCJzZW5kZXJGaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXJGaXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZW5kZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXJQaG9uZU51bWJlcjEgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2VuZGVycGhvbmVOdW1iZXIyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuc2VuZGVyUGhvbmVOdW1iZXIyID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJlY2VpdmVyRmlyc3RuYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucmVjZWl2ZXJGaXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyUGhvbmVOdW1iZXIxID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJlY2VpdmVycGhvbmVOdW1iZXIyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucmVjZWl2ZXJQaG9uZU51bWJlcjIgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidGFnTmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnRhZ05hbWUgPSB2YWx1ZS5sZW5ndGggPCAyICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJDYXJ0b25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuY2FydG9ucyA9IHZhbHVlLmxlbmd0aCA8PSAwICA/ICcqaW5wdXQgbnVtYmVyIG9mIGl0ZW1zKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpdGVtc1dvcnRoXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuaXRlbXNXb3J0aCA9IHZhbHVlLmxlbmd0aCA8PSAwID8gJyppbnB1dCBpdGVtcyB3b3J0aConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVsaXZlcnlMb2NhdGlvblwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyppbnB1dCBhIHByb3BlciBzdGF0ZSonOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVzY3JpcHRpb25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZGVzY3JpcHRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmd1cFZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPiAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoID4gMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGhvbmVOdW1iZXJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5waG9uZU51bWJlciA9IHZhbHVlLmxlbmd0aCA+IDEwICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIG51bWJlcionO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBhc3N3b3JkXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGFzc3dvcmQgPSB2YWx1ZS5sZW5ndGggPCA2ICAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJypwYXNzd29yZCBpcyB0b28gc2hvcnQqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcblxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVtdXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhc1BhdGgpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgQWRtaW5TaWduVXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW5Mb2dpbi9hZG1pblNpZ25VcFwiO1xyXG5cclxuY29uc3QgQWRtaW5TaWduVXBQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgPEFkbWluU2lnblVwIC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluU2lnblVwUGFnZTsiLCJleHBvcnQgY29uc3QgYm94ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjA1XCIgY2xhc3NOYW1lPVwiYm94XCIgaGVpZ2h0PVwiMjMxXCIgdmlld0JveD1cIjAgMCAyMDUgMjMxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTE5OS42NCA2My41ODQxVjE3MS45MzNMMTc1LjQxIDE4NS44NzVDMTc3LjAzMiAxODQuMzk4IDE3OC4wODQgMTgyLjQgMTc4LjM4MyAxODAuMjNDMTc4LjY4MyAxNzguMDU5IDE3OC4yMTEgMTc1Ljg1MiAxNzcuMDQ5IDE3My45OTNDMTc1Ljg4NyAxNzIuMTMzIDE3NC4xMDkgMTcwLjczOCAxNzIuMDI0IDE3MC4wNDlDMTY5LjkzOCAxNjkuMzYgMTY3LjY3NyAxNjkuNDIxIDE2NS42MzIgMTcwLjIyMkMxNjMuNTg2IDE3MS4wMjIgMTYxLjg4NyAxNzIuNTEyIDE2MC44MjggMTc0LjQzMUMxNTkuNzY5IDE3Ni4zNTEgMTU5LjQxOCAxNzguNTggMTU5LjgzNSAxODAuNzMxQzE2MC4yNTEgMTgyLjg4MiAxNjEuNDEgMTg0LjgyIDE2My4xMSAxODYuMjA4QzE2NC44MSAxODcuNTk2IDE2Ni45NDQgMTg4LjM0NyAxNjkuMTQxIDE4OC4zMjlDMTcwLjA5MiAxODguMzM0IDE3MS4wMzggMTg4LjE5MiAxNzEuOTQ2IDE4Ny45MDdMMTUzLjEzOSAxOTguODQ5QzE1NC45OTEgMTk3LjM3NiAxNTYuMjE4IDE5NS4yNTkgMTU2LjU3NCAxOTIuOTIzQzE1Ni45MjkgMTkwLjU4NyAxNTYuMzg3IDE4OC4yMDMgMTU1LjA1NiAxODYuMjQ4QzE1My43MjYgMTg0LjI5MyAxNTEuNzA0IDE4Mi45MTEgMTQ5LjM5NSAxODIuMzc5QzE0Ny4wODcgMTgxLjg0NiAxNDQuNjYyIDE4Mi4yMDMgMTQyLjYwNSAxODMuMzc2QzE0MC41NDkgMTg0LjU1IDEzOS4wMTMgMTg2LjQ1NSAxMzguMzA0IDE4OC43MUMxMzcuNTk1IDE5MC45NjQgMTM3Ljc2NSAxOTMuNDAzIDEzOC43ODEgMTk1LjUzN0MxMzkuNzk3IDE5Ny42NzIgMTQxLjU4NCAxOTkuMzQ2IDE0My43ODQgMjAwLjIyM0MxNDUuOTg0IDIwMS4xMDEgMTQ4LjQzNSAyMDEuMTE4IDE1MC42NDcgMjAwLjI3MUwxMDMuMjUyIDIyNy40MDVMNi44NjQ3MSAxNzEuOTMzVjY0LjQ0MzhMNTEuNTE2NSA5MC4yMDI1TDEwMS42NjkgMTE5LjExOUwxMDMuMjM3IDEyMC4wMjVMMTA0LjgwNCAxMTkuMTAzTDE5OS42MDkgNjMuNTg0MUgxOTkuNjRaTTEzNy4zNTYgMTQxLjczNkMxMzguNDExIDE0MS43NCAxMzkuNDQ1IDE0MS40NDEgMTQwLjMzNCAxNDAuODc2TDE3MS45NDYgMTIwLjU1NkMxNzIuNTU3IDEyMC4xNyAxNzMuMDg2IDExOS42NjcgMTczLjUwMSAxMTkuMDc2QzE3My45MTcgMTE4LjQ4NiAxNzQuMjExIDExNy44MTkgMTc0LjM2NyAxMTcuMTE0QzE3NC41MjIgMTE2LjQxIDE3NC41MzcgMTE1LjY4MSAxNzQuNDA5IDExNC45NzFDMTc0LjI4MiAxMTQuMjYxIDE3NC4wMTUgMTEzLjU4MyAxNzMuNjIzIDExMi45NzZMMTcyLjQwMSAxMTEuMTYzQzE3Mi4wMTIgMTEwLjU1NiAxNzEuNTA4IDExMC4wMzIgMTcwLjkxNSAxMDkuNjIxQzE3MC4zMjMgMTA5LjIxIDE2OS42NTUgMTA4LjkyIDE2OC45NSAxMDguNzY4QzE2OC4yNDUgMTA4LjYxNSAxNjcuNTE3IDEwOC42MDMgMTY2LjgwNyAxMDguNzMzQzE2Ni4wOTcgMTA4Ljg2MiAxNjUuNDIgMTA5LjEzIDE2NC44MTUgMTA5LjUyMkwxMzMuMjE5IDEyOS43MzFDMTMyLjYwOCAxMzAuMTI1IDEzMi4wODMgMTMwLjYzNiAxMzEuNjczIDEzMS4yMzVDMTMxLjI2MiAxMzEuODMzIDEzMC45NzYgMTMyLjUwNyAxMzAuODMgMTMzLjIxN0MxMzAuNjg0IDEzMy45MjcgMTMwLjY4MiAxMzQuNjU5IDEzMC44MjMgMTM1LjM3MUMxMzAuOTY0IDEzNi4wODIgMTMxLjI0NSAxMzYuNzU4IDEzMS42NTEgMTM3LjM1OUwxMzIuODI3IDEzOS4xODhDMTMzLjMyNSAxMzkuOTc5IDEzNC4wMTkgMTQwLjYyOCAxMzQuODQzIDE0MS4wNzJDMTM1LjY2NyAxNDEuNTE1IDEzNi41OTIgMTQxLjczOSAxMzcuNTI5IDE0MS43MkwxMzcuMzU2IDE0MS43MzZaTTE4OS41OTQgMTc1Ljc5NEMxOTEuNDU0IDE3NS43OTQgMTkzLjI3MiAxNzUuMjQ0IDE5NC44MTggMTc0LjIxM0MxOTYuMzY1IDE3My4xODMgMTk3LjU3IDE3MS43MTggMTk4LjI4MiAxNzAuMDA1QzE5OC45OTMgMTY4LjI5MSAxOTkuMTggMTY2LjQwNSAxOTguODE3IDE2NC41ODZDMTk4LjQ1NCAxNjIuNzY3IDE5Ny41NTggMTYxLjA5NiAxOTYuMjQzIDE1OS43ODRDMTk0LjkyOCAxNTguNDczIDE5My4yNTIgMTU3LjU4IDE5MS40MjggMTU3LjIxOEMxODkuNjA0IDE1Ni44NTYgMTg3LjcxMyAxNTcuMDQyIDE4NS45OTUgMTU3Ljc1MUMxODQuMjc3IDE1OC40NjEgMTgyLjgwOCAxNTkuNjYzIDE4MS43NzUgMTYxLjIwNkMxODAuNzQyIDE2Mi43NDggMTgwLjE5IDE2NC41NjEgMTgwLjE5IDE2Ni40MTZDMTgwLjE5IDE2OC45MDMgMTgxLjE4MSAxNzEuMjg4IDE4Mi45NDQgMTczLjA0N0MxODQuNzA4IDE3NC44MDYgMTg3LjEgMTc1Ljc5NCAxODkuNTk0IDE3NS43OTRaTTIwMi4xMzIgNTguNTY2OEwxMDMuMzkzIDExNi4zOTlMNTMuMDk5NCA4Ny41Mjk3TDMuNzkyODUgNTkuMDUxM1YxNzMuNjUzTDEwMy4zMTUgMjMwLjk1M0wyMDIuODM3IDE3My42NTNWNTkuMDk4MkwyMDEuOTkxIDU4LjYxMzdMMjAyLjEzMiA1OC41NjY4Wk0xMzcuMzg4IDEzOC41OTRDMTM2Ljk5OSAxMzguNiAxMzYuNjE1IDEzOC41MDcgMTM2LjI3MiAxMzguMzIzQzEzNS45MjkgMTM4LjE0IDEzNS42MzkgMTM3Ljg3MyAxMzUuNDI5IDEzNy41NDdMMTM0LjIyMiAxMzUuNjg3QzEzMy44OSAxMzUuMTYzIDEzMy43NzggMTM0LjUzIDEzMy45MSAxMzMuOTI1QzEzNC4wNDIgMTMzLjMyIDEzNC40MDcgMTMyLjc5IDEzNC45MjcgMTMyLjQ1MUwxNjYuNTg2IDExMi4xMzJDMTY2Ljk1OSAxMTEuODg4IDE2Ny4zOTQgMTExLjc1OCAxNjcuODQgMTExLjc1N0MxNjguMjM1IDExMS43NTkgMTY4LjYyNCAxMTEuODU5IDE2OC45NzEgMTEyLjA0N0MxNjkuMzE4IDExMi4yMzUgMTY5LjYxMyAxMTIuNTA2IDE2OS44MyAxMTIuODM1TDE3MS4wMzcgMTE0LjY5NUMxNzEuMzcxIDExNS4yMiAxNzEuNDgzIDExNS44NTUgMTcxLjM0OCAxMTYuNDYyQzE3MS4yMTMgMTE3LjA2OCAxNzAuODQyIDExNy41OTcgMTcwLjMxNiAxMTcuOTMxTDEzOC42NzMgMTM4LjI1QzEzOC4yOTIgMTM4LjUwMSAxMzcuODQ0IDEzOC42MzIgMTM3LjM4OCAxMzguNjI1VjEzOC41OTRaTTE4OS40NTMgMTcyLjY2OEMxODguMjEzIDE3Mi42NjggMTg3LjAwMSAxNzIuMzAxIDE4NS45NyAxNzEuNjE0QzE4NC45MzkgMTcwLjkyNyAxODQuMTM1IDE2OS45NTEgMTgzLjY2MSAxNjguODA4QzE4My4xODYgMTY3LjY2NiAxODMuMDYyIDE2Ni40MDkgMTgzLjMwNCAxNjUuMTk2QzE4My41NDYgMTYzLjk4MyAxODQuMTQzIDE2Mi44NjkgMTg1LjAyIDE2MS45OTVDMTg1Ljg5NiAxNjEuMTIgMTg3LjAxMyAxNjAuNTI1IDE4OC4yMyAxNjAuMjg0QzE4OS40NDYgMTYwLjA0MyAxOTAuNzA2IDE2MC4xNjYgMTkxLjg1MiAxNjAuNjRDMTkyLjk5NyAxNjEuMTEzIDE5My45NzYgMTYxLjkxNCAxOTQuNjY1IDE2Mi45NDJDMTk1LjM1NCAxNjMuOTcgMTk1LjcyMiAxNjUuMTc5IDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2OC4wNzQgMTk1LjA2MSAxNjkuNjY0IDE5My44ODYgMTcwLjgzN0MxOTIuNzEgMTcyLjAwOSAxOTEuMTE1IDE3Mi42NjggMTg5LjQ1MyAxNzIuNjY4Wk0xNjkuMDc4IDE4NS4xNzJDMTY3LjgzOCAxODUuMTcyIDE2Ni42MjYgMTg0LjgwNSAxNjUuNTk1IDE4NC4xMThDMTY0LjU2NCAxODMuNDMxIDE2My43NjEgMTgyLjQ1NSAxNjMuMjg2IDE4MS4zMTNDMTYyLjgxMiAxODAuMTcgMTYyLjY4NyAxNzguOTEzIDE2Mi45MjkgMTc3LjdDMTYzLjE3MSAxNzYuNDg3IDE2My43NjggMTc1LjM3MyAxNjQuNjQ1IDE3NC40OTlDMTY1LjUyMiAxNzMuNjI1IDE2Ni42MzkgMTczLjAyOSAxNjcuODU1IDE3Mi43ODhDMTY5LjA3MSAxNzIuNTQ3IDE3MC4zMzIgMTcyLjY3MSAxNzEuNDc3IDE3My4xNDRDMTcyLjYyMyAxNzMuNjE3IDE3My42MDIgMTc0LjQxOCAxNzQuMjkxIDE3NS40NDdDMTc0Ljk3OSAxNzYuNDc1IDE3NS4zNDcgMTc3LjY4MyAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE4MC41NzggMTc0LjY4NyAxODIuMTY4IDE3My41MTEgMTgzLjM0MUMxNzIuMzM1IDE4NC41MTMgMTcwLjc0MSAxODUuMTcyIDE2OS4wNzggMTg1LjE3MlpNMTQ3LjEzNiAxOTcuNjc2QzE0NS44OTYgMTk3LjY3NiAxNDQuNjg0IDE5Ny4zMSAxNDMuNjUzIDE5Ni42MjNDMTQyLjYyMiAxOTUuOTM2IDE0MS44MTkgMTk0Ljk1OSAxNDEuMzQ0IDE5My44MTdDMTQwLjg3IDE5Mi42NzQgMTQwLjc0NiAxOTEuNDE3IDE0MC45ODcgMTkwLjIwNEMxNDEuMjI5IDE4OC45OTIgMTQxLjgyNiAxODcuODc4IDE0Mi43MDMgMTg3LjAwM0MxNDMuNTggMTg2LjEyOSAxNDQuNjk3IDE4NS41MzMgMTQ1LjkxMyAxODUuMjkyQzE0Ny4xMjkgMTg1LjA1MSAxNDguMzkgMTg1LjE3NSAxNDkuNTM1IDE4NS42NDhDMTUwLjY4MSAxODYuMTIxIDE1MS42NiAxODYuOTIzIDE1Mi4zNDkgMTg3Ljk1MUMxNTMuMDM4IDE4OC45NzkgMTUzLjQwNSAxOTAuMTg4IDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE5My4wODIgMTUyLjc0NSAxOTQuNjczIDE1MS41NjkgMTk1Ljg0NUMxNTAuMzkzIDE5Ny4wMTggMTQ4Ljc5OSAxOTcuNjc2IDE0Ny4xMzYgMTk3LjY3NlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxOTYuODk1QzE1MC4xNjYgMTk2Ljg5NSAxNTIuNjIyIDE5NC40NDUgMTUyLjYyMiAxOTEuNDI0QzE1Mi42MjIgMTg4LjQwMyAxNTAuMTY2IDE4NS45NTMgMTQ3LjEzNiAxODUuOTUzQzE0NC4xMDcgMTg1Ljk1MyAxNDEuNjUxIDE4OC40MDMgMTQxLjY1MSAxOTEuNDI0QzE0MS42NTEgMTk0LjQ0NSAxNDQuMTA3IDE5Ni44OTUgMTQ3LjEzNiAxOTYuODk1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxODYuNzM1QzE0OC4wNjYgMTg2LjczNSAxNDguOTc1IDE4Ny4wMSAxNDkuNzQ4IDE4Ny41MjVDMTUwLjUyMSAxODguMDQxIDE1MS4xMjQgMTg4Ljc3MyAxNTEuNDggMTg5LjYzQzE1MS44MzYgMTkwLjQ4NiAxNTEuOTI5IDE5MS40MjkgMTUxLjc0OCAxOTIuMzM5QzE1MS41NjYgMTkzLjI0OCAxNTEuMTE4IDE5NC4wODQgMTUwLjQ2MSAxOTQuNzRDMTQ5LjgwMyAxOTUuMzk2IDE0OC45NjUgMTk1Ljg0MiAxNDguMDUzIDE5Ni4wMjNDMTQ3LjE0MSAxOTYuMjA0IDE0Ni4xOTYgMTk2LjExMSAxNDUuMzM3IDE5NS43NTZDMTQ0LjQ3OCAxOTUuNDAxIDE0My43NDMgMTk0LjggMTQzLjIyNyAxOTQuMDI5QzE0Mi43MSAxOTMuMjU4IDE0Mi40MzQgMTkyLjM1MiAxNDIuNDM0IDE5MS40MjRDMTQyLjQzNCAxOTAuMTggMTQyLjkzIDE4OC45ODggMTQzLjgxMSAxODguMTA4QzE0NC42OTMgMTg3LjIyOSAxNDUuODg5IDE4Ni43MzUgMTQ3LjEzNiAxODYuNzM1Wk0xNDcuMTM2IDE4NS4xNzJDMTQ1Ljg5NiAxODUuMTcyIDE0NC42ODQgMTg1LjUzOSAxNDMuNjUzIDE4Ni4yMjZDMTQyLjYyMiAxODYuOTEzIDE0MS44MTkgMTg3Ljg4OSAxNDEuMzQ0IDE4OS4wMzJDMTQwLjg3IDE5MC4xNzQgMTQwLjc0NiAxOTEuNDMxIDE0MC45ODcgMTkyLjY0NEMxNDEuMjI5IDE5My44NTcgMTQxLjgyNiAxOTQuOTcxIDE0Mi43MDMgMTk1Ljg0NUMxNDMuNTggMTk2LjcxOSAxNDQuNjk3IDE5Ny4zMTUgMTQ1LjkxMyAxOTcuNTU2QzE0Ny4xMjkgMTk3Ljc5NyAxNDguMzkgMTk3LjY3NCAxNDkuNTM1IDE5Ny4yQzE1MC42ODEgMTk2LjcyNyAxNTEuNjYgMTk1LjkyNiAxNTIuMzQ5IDE5NC44OThDMTUzLjAzOCAxOTMuODY5IDE1My40MDUgMTkyLjY2MSAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxODkuNzY2IDE1Mi43NDUgMTg4LjE3NiAxNTEuNTY5IDE4Ny4wMDNDMTUwLjM5MyAxODUuODMxIDE0OC43OTkgMTg1LjE3MiAxNDcuMTM2IDE4NS4xNzJaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTEzNy40MDMgMTM3LjgxMkMxMzcuMTQzIDEzNy44MTQgMTM2Ljg4NiAxMzcuNzUgMTM2LjY1NiAxMzcuNjI3QzEzNi40MjYgMTM3LjUwNCAxMzYuMjMgMTM3LjMyNiAxMzYuMDg3IDEzNy4xMDlMMTM0Ljg2NCAxMzUuMjMzQzEzNC42NDkgMTM0Ljg4MiAxMzQuNTgyIDEzNC40NjEgMTM0LjY3NiAxMzQuMDYxQzEzNC43MTQgMTMzLjg2MyAxMzQuNzkxIDEzMy42NzUgMTM0LjkwNCAxMzMuNTA4QzEzNS4wMTggMTMzLjM0MiAxMzUuMTY0IDEzMy4yIDEzNS4zMzQgMTMzLjA5MkwxNjcuMDA5IDExMi43NzNDMTY3LjI1MiAxMTIuNjAxIDE2Ny41NDIgMTEyLjUwOSAxNjcuODQgMTEyLjUwN0MxNjguMTAyIDExMi41MDcgMTY4LjM2IDExMi41NzMgMTY4LjU5IDExMi42OTlDMTY4LjgyIDExMi44MjUgMTY5LjAxNSAxMTMuMDA2IDE2OS4xNTYgMTEzLjIyNkwxNzAuMzc5IDExNS4xMDFDMTcwLjU5MSAxMTUuNDQ5IDE3MC42NiAxMTUuODY2IDE3MC41NjkgMTE2LjI2M0MxNzAuNDc4IDExNi42NiAxNzAuMjM2IDExNy4wMDYgMTY5Ljg5MyAxMTcuMjI3TDEzOC4yNSAxMzcuNTQ3QzEzNy45OTkgMTM3LjcxNSAxMzcuNzA1IDEzNy44MDcgMTM3LjQwMyAxMzcuODEyWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY3Ljg0IDExMy4zMzVDMTY3Ljk3NCAxMTMuMzM3IDE2OC4xMDcgMTEzLjM3MyAxNjguMjI0IDExMy40MzhDMTY4LjM0MiAxMTMuNTA0IDE2OC40NDEgMTEzLjU5NyAxNjguNTE0IDExMy43MUwxNjkuNzA1IDExNS41NTVDMTY5LjgxNyAxMTUuNzMxIDE2OS44NTYgMTE1Ljk0NCAxNjkuODE1IDExNi4xNDlDMTY5Ljc5MiAxMTYuMjUgMTY5Ljc0OSAxMTYuMzQ2IDE2OS42ODcgMTE2LjQzQzE2OS42MjQgMTE2LjUxMyAxNjkuNTQ1IDExNi41ODMgMTY5LjQ1NCAxMTYuNjMzTDEzNy44MTEgMTM2Ljk1M0MxMzcuNjgyIDEzNy4wMjcgMTM3LjUzNiAxMzcuMDY1IDEzNy4zODggMTM3LjA2MkMxMzcuMjU2IDEzNy4wNjMgMTM3LjEyNyAxMzcuMDMxIDEzNy4wMTEgMTM2Ljk2OEMxMzYuODk2IDEzNi45MDUgMTM2Ljc5OSAxMzYuODE0IDEzNi43MjkgMTM2LjcwM0wxMzUuNTM4IDEzNC44NThDMTM1LjQyOCAxMzQuNjgxIDEzNS4zODkgMTM0LjQ2OSAxMzUuNDI4IDEzNC4yNjRDMTM1LjQ1MSAxMzQuMTY1IDEzNS40OTMgMTM0LjA3IDEzNS41NTIgMTMzLjk4N0MxMzUuNjExIDEzMy45MDQgMTM1LjY4NiAxMzMuODMzIDEzNS43NzMgMTMzLjc4TDE2Ny40MzIgMTEzLjQ2QzE2Ny41NTQgMTEzLjM4MiAxNjcuNjk1IDExMy4zMzkgMTY3Ljg0IDExMy4zMzVaTTE2Ny44NCAxMTEuNzcyQzE2Ny4zOTQgMTExLjc3MSAxNjYuOTU4IDExMS45MDIgMTY2LjU4NiAxMTIuMTQ3TDEzNC45MjcgMTMyLjQ2N0MxMzQuNDA3IDEzMi44MDYgMTM0LjA0MiAxMzMuMzM1IDEzMy45MSAxMzMuOTRDMTMzLjc3OCAxMzQuNTQ2IDEzMy44OSAxMzUuMTc4IDEzNC4yMjIgMTM1LjcwMkwxMzUuNDI4IDEzNy41NDdDMTM1LjU5NCAxMzcuODA2IDEzNS44MSAxMzguMDMxIDEzNi4wNjMgMTM4LjIwN0MxMzYuMzE2IDEzOC4zODQgMTM2LjYwMiAxMzguNTA4IDEzNi45MDMgMTM4LjU3M0MxMzcuMjA1IDEzOC42MzkgMTM3LjUxNyAxMzguNjQ0IDEzNy44MjEgMTM4LjU4OEMxMzguMTI0IDEzOC41MzMgMTM4LjQxNCAxMzguNDE4IDEzOC42NzMgMTM4LjI1TDE3MC4zMTYgMTE3LjkzMUMxNzAuODQyIDExNy41OTcgMTcxLjIxMyAxMTcuMDY4IDE3MS4zNDggMTE2LjQ2MkMxNzEuNDgzIDExNS44NTUgMTcxLjM3MSAxMTUuMjIgMTcxLjAzNyAxMTQuNjk1TDE2OS44MyAxMTIuODM1QzE2OS42MTMgMTEyLjUwNiAxNjkuMzE4IDExMi4yMzUgMTY4Ljk3MSAxMTIuMDQ3QzE2OC42MjQgMTExLjg1OSAxNjguMjM1IDExMS43NTkgMTY3Ljg0IDExMS43NTdWMTExLjc3MlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxODQuMzlDMTcyLjEwOCAxODQuMzkgMTc0LjU2MyAxODEuOTQxIDE3NC41NjMgMTc4LjkyQzE3NC41NjMgMTc1Ljg5OCAxNzIuMTA4IDE3My40NDkgMTY5LjA3OCAxNzMuNDQ5QzE2Ni4wNDggMTczLjQ0OSAxNjMuNTkzIDE3NS44OTggMTYzLjU5MyAxNzguOTJDMTYzLjU5MyAxODEuOTQxIDE2Ni4wNDggMTg0LjM5IDE2OS4wNzggMTg0LjM5WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxNzQuMjMxQzE3MC4wMDggMTc0LjIzMSAxNzAuOTE3IDE3NC41MDYgMTcxLjY5IDE3NS4wMjFDMTcyLjQ2MyAxNzUuNTM2IDE3My4wNjYgMTc2LjI2OSAxNzMuNDIyIDE3Ny4xMjVDMTczLjc3OCAxNzcuOTgyIDE3My44NzEgMTc4LjkyNSAxNzMuNjg5IDE3OS44MzVDMTczLjUwOCAxODAuNzQ0IDE3My4wNiAxODEuNTggMTcyLjQwMyAxODIuMjM2QzE3MS43NDUgMTgyLjg5MSAxNzAuOTA3IDE4My4zMzggMTY5Ljk5NSAxODMuNTE5QzE2OS4wODMgMTgzLjcgMTY4LjEzOCAxODMuNjA3IDE2Ny4yNzkgMTgzLjI1MkMxNjYuNDE5IDE4Mi44OTcgMTY1LjY4NSAxODIuMjk2IDE2NS4xNjkgMTgxLjUyNUMxNjQuNjUyIDE4MC43NTQgMTY0LjM3NiAxNzkuODQ3IDE2NC4zNzYgMTc4LjkyQzE2NC4zNzYgMTc3LjY3NiAxNjQuODcxIDE3Ni40ODQgMTY1Ljc1MyAxNzUuNjA0QzE2Ni42MzUgMTc0LjcyNSAxNjcuODMxIDE3NC4yMzEgMTY5LjA3OCAxNzQuMjMxWk0xNjkuMDc4IDE3Mi42NjhDMTY3LjgzOCAxNzIuNjY4IDE2Ni42MjYgMTczLjAzNCAxNjUuNTk1IDE3My43MjFDMTY0LjU2NCAxNzQuNDA4IDE2My43NjEgMTc1LjM4NSAxNjMuMjg2IDE3Ni41MjdDMTYyLjgxMiAxNzcuNjcgMTYyLjY4NyAxNzguOTI3IDE2Mi45MjkgMTgwLjE0QzE2My4xNzEgMTgxLjM1MiAxNjMuNzY4IDE4Mi40NjYgMTY0LjY0NSAxODMuMzQxQzE2NS41MjIgMTg0LjIxNSAxNjYuNjM5IDE4NC44MTEgMTY3Ljg1NSAxODUuMDUyQzE2OS4wNzEgMTg1LjI5MyAxNzAuMzMyIDE4NS4xNjkgMTcxLjQ3NyAxODQuNjk2QzE3Mi42MjMgMTg0LjIyMyAxNzMuNjAyIDE4My40MjEgMTc0LjI5MSAxODIuMzkzQzE3NC45NzkgMTgxLjM2NSAxNzUuMzQ3IDE4MC4xNTYgMTc1LjM0NyAxNzguOTJDMTc1LjM0NyAxNzcuMjYyIDE3NC42ODcgMTc1LjY3MSAxNzMuNTExIDE3NC40OTlDMTcyLjMzNSAxNzMuMzI2IDE3MC43NDEgMTcyLjY2OCAxNjkuMDc4IDE3Mi42NjhaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTcxLjg4NkMxOTIuNDgyIDE3MS44ODYgMTk0LjkzOCAxNjkuNDM3IDE5NC45MzggMTY2LjQxNkMxOTQuOTM4IDE2My4zOTQgMTkyLjQ4MiAxNjAuOTQ1IDE4OS40NTMgMTYwLjk0NUMxODYuNDIzIDE2MC45NDUgMTgzLjk2NyAxNjMuMzk0IDE4My45NjcgMTY2LjQxNkMxODMuOTY3IDE2OS40MzcgMTg2LjQyMyAxNzEuODg2IDE4OS40NTMgMTcxLjg4NlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTYxLjcyN0MxOTAuMzgzIDE2MS43MjcgMTkxLjI5MiAxNjIuMDAyIDE5Mi4wNjUgMTYyLjUxN0MxOTIuODM4IDE2My4wMzIgMTkzLjQ0MSAxNjMuNzY0IDE5My43OTcgMTY0LjYyMUMxOTQuMTUzIDE2NS40NzggMTk0LjI0NiAxNjYuNDIxIDE5NC4wNjQgMTY3LjMzQzE5My44ODMgMTY4LjI0IDE5My40MzUgMTY5LjA3NiAxOTIuNzc3IDE2OS43MzFDMTkyLjEyIDE3MC4zODcgMTkxLjI4MiAxNzAuODM0IDE5MC4zNyAxNzEuMDE1QzE4OS40NTggMTcxLjE5NiAxODguNTEzIDE3MS4xMDMgMTg3LjY1MyAxNzAuNzQ4QzE4Ni43OTQgMTcwLjM5MyAxODYuMDYgMTY5Ljc5MiAxODUuNTQzIDE2OS4wMjFDMTg1LjAyNyAxNjguMjUgMTg0Ljc1MSAxNjcuMzQzIDE4NC43NTEgMTY2LjQxNkMxODQuNzUxIDE2NS4xNzIgMTg1LjI0NiAxNjMuOTc5IDE4Ni4xMjggMTYzLjFDMTg3LjAxIDE2Mi4yMjEgMTg4LjIwNiAxNjEuNzI3IDE4OS40NTMgMTYxLjcyN1pNMTg5LjQ1MyAxNjAuMTY0QzE4OC4yMTMgMTYwLjE2NCAxODcuMDAxIDE2MC41MyAxODUuOTcgMTYxLjIxN0MxODQuOTM5IDE2MS45MDQgMTg0LjEzNSAxNjIuODgxIDE4My42NjEgMTY0LjAyM0MxODMuMTg2IDE2NS4xNjYgMTgzLjA2MiAxNjYuNDIzIDE4My4zMDQgMTY3LjYzNUMxODMuNTQ2IDE2OC44NDggMTg0LjE0MyAxNjkuOTYyIDE4NS4wMiAxNzAuODM3QzE4NS44OTcgMTcxLjcxMSAxODcuMDE0IDE3Mi4zMDYgMTg4LjIzIDE3Mi41NDhDMTg5LjQ0NiAxNzIuNzg5IDE5MC43MDYgMTcyLjY2NSAxOTEuODUyIDE3Mi4xOTJDMTkyLjk5NyAxNzEuNzE5IDE5My45NzYgMTcwLjkxNyAxOTQuNjY1IDE2OS44ODlDMTk1LjM1NCAxNjguODYxIDE5NS43MjIgMTY3LjY1MiAxOTUuNzIyIDE2Ni40MTZDMTk1LjcyMiAxNjQuNzU4IDE5NS4wNjEgMTYzLjE2NyAxOTMuODg2IDE2MS45OTVDMTkyLjcxIDE2MC44MjIgMTkxLjExNSAxNjAuMTY0IDE4OS40NTMgMTYwLjE2NFpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ2LjkzMiAyNi45NjIyTDk3LjkyMzYgNTguNTgyM0w1My4wOTk0IDg3LjQ5ODRMMy43OTI4NSA1OS4wNTEyTDQuNjM5MTggNTguNTgyM0wxMDMuMjUyIDEuODEzMTFMMTQ2LjkzMiAyNi45NjIyWlwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTIuOTQ2NTMgNTguNTgyM0g0LjYzOTE5TDMuNzkyODYgNTkuMDUxMkwyLjk0NjUzIDU4LjU4MjNaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjkyOCA1OC42MjkyTDEwMy4yNTIgMTE2LjM5OUw1My4wOTk0IDg3LjQ5ODRMOTcuOTIzNSA1OC41ODI0TDE0Ni45MzIgMjYuOTYyM0wyMDEuODM0IDU4LjU4MjRMMjAxLjkyOCA1OC42MjkyWlwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTIwMS45OTEgNTguNTgyM0wyMDEuOTI4IDU4LjYyOTJMMjAxLjgzNCA1OC41ODIzSDIwMS45OTFaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTAzLjI1MiAxMTYuMzk5VjIzMC41XCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiM1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxODUuMTcyQzE3Mi41NCAxODUuMTcyIDE3NS4zNDcgMTgyLjM3MyAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE3NS40NjcgMTcyLjU0IDE3Mi42NjggMTY5LjA3OCAxNzIuNjY4QzE2NS42MTYgMTcyLjY2OCAxNjIuODA5IDE3NS40NjcgMTYyLjgwOSAxNzguOTJDMTYyLjgwOSAxODIuMzczIDE2NS42MTYgMTg1LjE3MiAxNjkuMDc4IDE4NS4xNzJaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxOTcuNjc2QzE1MC41OTggMTk3LjY3NiAxNTMuNDA1IDE5NC44NzcgMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTg3Ljk3MSAxNTAuNTk4IDE4NS4xNzIgMTQ3LjEzNiAxODUuMTcyQzE0My42NzQgMTg1LjE3MiAxNDAuODY3IDE4Ny45NzEgMTQwLjg2NyAxOTEuNDI0QzE0MC44NjcgMTk0Ljg3NyAxNDMuNjc0IDE5Ny42NzYgMTQ3LjEzNiAxOTcuNjc2WlwiIGZpbGw9XCIjMjEzNTY5XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTcyLjY2OEMxOTIuOTE1IDE3Mi42NjggMTk1LjcyMiAxNjkuODY5IDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2Mi45NjMgMTkyLjkxNSAxNjAuMTY0IDE4OS40NTMgMTYwLjE2NEMxODUuOTkgMTYwLjE2NCAxODMuMTg0IDE2Mi45NjMgMTgzLjE4NCAxNjYuNDE2QzE4My4xODQgMTY5Ljg2OSAxODUuOTkgMTcyLjY2OCAxODkuNDUzIDE3Mi42NjhaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIxNTRcIiBjbGFzc05hbWU9XCJwcm9maWxlXCIgaGVpZ2h0PVwiMTc0XCIgdmlld0JveD1cIjAgMCAxNTQgMTc0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTEwNy44IDEwMy4zMTJDOTcuOTM0NCAxMDMuMzEyIDkzLjE5MDYgMTA4Ljc1IDc3IDEwOC43NUM2MC44MDk0IDEwOC43NSA1Ni4xIDEwMy4zMTIgNDYuMiAxMDMuMzEyQzIwLjY5MzcgMTAzLjMxMiAwIDEyMy43NzEgMCAxNDguOTg4VjE1Ny42ODhDMCAxNjYuNjkzIDcuMzkwNjIgMTc0IDE2LjUgMTc0SDEzNy41QzE0Ni42MDkgMTc0IDE1NCAxNjYuNjkzIDE1NCAxNTcuNjg4VjE0OC45ODhDMTU0IDEyMy43NzEgMTMzLjMwNiAxMDMuMzEyIDEwNy44IDEwMy4zMTJaTTEzNy41IDE1Ny42ODhIMTYuNVYxNDguOTg4QzE2LjUgMTMyLjgxMSAyOS44Mzc1IDExOS42MjUgNDYuMiAxMTkuNjI1QzUxLjIxODcgMTE5LjYyNSA1OS4zNjU2IDEyNS4wNjIgNzcgMTI1LjA2MkM5NC43NzE5IDEyNS4wNjIgMTAyLjc0NyAxMTkuNjI1IDEwNy44IDExOS42MjVDMTI0LjE2MiAxMTkuNjI1IDEzNy41IDEzMi44MTEgMTM3LjUgMTQ4Ljk4OFYxNTcuNjg4Wk03NyA5Ny44NzVDMTA0LjMyOCA5Ny44NzUgMTI2LjUgNzUuOTU1MSAxMjYuNSA0OC45Mzc1QzEyNi41IDIxLjkxOTkgMTA0LjMyOCAwIDc3IDBDNDkuNjcxOSAwIDI3LjUgMjEuOTE5OSAyNy41IDQ4LjkzNzVDMjcuNSA3NS45NTUxIDQ5LjY3MTkgOTcuODc1IDc3IDk3Ljg3NVpNNzcgMTYuMzEyNUM5NS4xODQ0IDE2LjMxMjUgMTEwIDMwLjk1OTggMTEwIDQ4LjkzNzVDMTEwIDY2LjkxNTIgOTUuMTg0NCA4MS41NjI1IDc3IDgxLjU2MjVDNTguODE1NiA4MS41NjI1IDQ0IDY2LjkxNTIgNDQgNDguOTM3NUM0NCAzMC45NTk4IDU4LjgxNTYgMTYuMzEyNSA3NyAxNi4zMTI1WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjE4MVwiIGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uXCIgaGVpZ2h0PVwiMTU5XCIgdmlld0JveD1cIjAgMCAxODEgMTU5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTE2My4wNDEgMzQuMjVIMjguMjgxMkMyNS4xNTYyIDM0LjI1IDIyLjYyNSAzMS43MTg4IDIyLjYyNSAyOC41OTM4QzIyLjYyNSAyNS40Njg3IDI1LjE1NjIgMjIuOTM3NSAyOC4yODEyIDIyLjkzNzVIMTY0LjAzMUMxNjcuMTU2IDIyLjkzNzUgMTY5LjY4OCAyMC40MDYzIDE2OS42ODggMTcuMjgxMkMxNjkuNjg4IDcuOTA5NTUgMTYyLjA5IDAuMzEyNSAxNTIuNzE5IDAuMzEyNUgyMi42MjVDMTAuMTI4MiAwLjMxMjUgMCAxMC40NDA3IDAgMjIuOTM3NVYxMzYuMDYyQzAgMTQ4LjU1OSAxMC4xMjgyIDE1OC42ODggMjIuNjI1IDE1OC42ODhIMTYzLjA0MUMxNzIuOTQ3IDE1OC42ODggMTgxIDE1MS4wNzYgMTgxIDE0MS43MTlWNTEuMjE4OEMxODEgNDEuODYxMiAxNzIuOTQ3IDM0LjI1IDE2My4wNDEgMzQuMjVaTTE0Ny4wNjIgMTA3Ljc4MUMxNDAuODE2IDEwNy43ODEgMTM1Ljc1IDEwMi43MTUgMTM1Ljc1IDk2LjQ2ODhDMTM1Ljc1IDkwLjIyMjEgMTQwLjgxNiA4NS4xNTYyIDE0Ny4wNjIgODUuMTU2MkMxNTMuMzA5IDg1LjE1NjIgMTU4LjM3NSA5MC4yMjIxIDE1OC4zNzUgOTYuNDY4OEMxNTguMzc1IDEwMi43MTUgMTUzLjMwOSAxMDcuNzgxIDE0Ny4wNjIgMTA3Ljc4MVpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF2YXRhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjI5MlwiIGNsYXNzTmFtZT1cImF2YXRhclwiIGhlaWdodD1cIjI5MlwiIHZpZXdCb3g9XCIwIDAgMjkyIDI5MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0NlwiIGN5PVwiMTQ2XCIgcj1cIjE0NlwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOTUuODg5IDExNC44OThDMTg1LjQwNCAxMzAuNjU5IDE2Ny40OCAxNDEuMDQ2IDE0Ny4xMyAxNDEuMDQ2QzEyNC44MTQgMTQxLjA0NiAxMDUuNDE2IDEyOC41NTUgOTUuNTQ1MSAxMTAuMTgzQzkzLjEwNzMgMTEyLjkwNSA5MC44NDk5IDExNS44ODUgODguODA3MyAxMTkuMTI2TDg0Ljc3MjIgMTI1LjUyOEM1Ny40ODkxIDE2OC44MTEgODguNTk1IDIyNS4xODggMTM5Ljc2IDIyNS4xODhIMTQ3LjgzQzE5OC45OTUgMjI1LjE4OCAyMzAuMTAxIDE2OC44MTEgMjAyLjgxOCAxMjUuNTI4TDE5OC43ODMgMTE5LjEyNkMxOTcuODYxIDExNy42NjQgMTk2Ljg5NiAxMTYuMjU0IDE5NS44ODkgMTE0Ljg5OFpcIiBmaWxsPVwiI0YzRUNFQ1wiLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxNDcuMTNcIiBjeT1cIjgyLjUyNjJcIiByPVwiNDMuOTY1OVwiIGZpbGw9XCIjRjNFQ0VDXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgIFxyXG5cclxufTtcclxuZXhwb3J0IGNvbnN0IHVwbG9hZCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjIwNFwiIGNsYXNzTmFtZT1cInVwbG9hZFwiIGhlaWdodD1cIjIwNFwiIHZpZXdCb3g9XCIwIDAgMjA0IDIwNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEwMlwiIGN5PVwiMTAyXCIgcj1cIjEwMlwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMDYuNTY3IDEwNi41NjdWMTQxLjU4Mkg5Ny40MzI5VjEwNi41NjdINjIuNDE4Vjk3LjQzMjhIOTcuNDMyOVY2Mi40MTc5SDEwNi41NjdWOTcuNDMyOEgxNDEuNTgyVjEwNi41NjdIMTA2LjU2N1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAzMyAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0zMC4yMDI3IDIyLjQxOEwzMC4yMDYgMjIuNDA0TDMwLjIwOTEgMjIuMzlDMzAuMjU1OSAyMi4xODAxIDMwLjI4MTUgMjEuOTY1OSAzMC4yODU0IDIxLjc1MDdMMzAuMjg2NiAyMS42ODEyTDMwLjI4MzEgMjEuNjExOEMzMC4yNTM1IDIxLjAzNTMgMzAuMDY1MSAyMC40ODE4IDI5Ljc0MzYgMjAuMDA4OEMyOS40MjI1IDE5LjUzNjMgMjguOTgxOCAxOS4xNjM1IDI4LjQ3MzIgMTguOTIyMkwyOC40Mjg5IDE4LjkwMTJMMjguMzgzNyAxOC44ODI0TDIzLjIyNzQgMTYuNzM5NkwyMy4xOTc1IDE2LjcyNzFMMjMuMTY3MSAxNi43MTU3QzIyLjgyMDkgMTYuNTg0OCAyMi40NTU3IDE2LjUxMjUgMjIuMDg2OSAxNi41MDFMMjIuMDAyNCAxNi40OTgzTDIxLjkxOCAxNi41MDI4QzIxLjA4NzQgMTYuNTQ3MSAyMC4yOTQ2IDE2LjkwNTUgMTkuNzE0NSAxNy41MjA1TDE5LjY3NjUgMTcuNTYwOEwxOS42NDA4IDE3LjYwMzFMMTguMzg2IDE5LjA5MDNDMTYuMzAyNSAxNy44NzY5IDE0LjU1ODEgMTYuMTk2OSAxMy4yOTcxIDE0LjE5OTRMMTQuNzU5OCAxMy4wMzg5TDE0LjgwMjggMTMuMDA0OEwxNC44NDM5IDEyLjk2ODNDMTUuNDc2NCAxMi40MDczIDE1Ljg2OTkgMTEuNjE1MSAxNS45MTg3IDEwLjc1NjFMMTUuOTIzOCAxMC42NjU5TDE1LjkyMDcgMTAuNTc1NkMxNS45MDggMTAuMTk3NSAxNS44MjkyIDkuODI1MzkgMTUuNjg4NyA5LjQ3NTU2TDE1LjY3NTkgOS40NDM2NkwxNS42NjIgOS40MTIyM0wxMy40NTIyIDQuNDEyMjNMMTMuNDMxMyA0LjM2NDg4TDEzLjQwOCA0LjMxODY4QzEzLjE0OTYgMy44MDc0MyAxMi43NTg5IDMuMzgwNTYgMTIuMjgzNSAzLjA3NjYzQzExLjgwODQgMi43NzI5NyAxMS4yNjM0IDIuNjAxMTUgMTAuNzA0OSAyLjU3MzgyTDEwLjYzNDcgMi41NzAzOEwxMC41NjQ0IDIuNTcxODlDMTAuMzYwNSAyLjU3NjI0IDEwLjE1NzIgMi41OTkwNCA5Ljk1NzE1IDIuNjQwMDVMOS45Mzk2MiAyLjY0MzY1TDkuOTIyMTYgMi42NDc1Nkw1LjEzNDIxIDMuNzE4OThMNS4xMDExOCAzLjcyNjM4TDUuMDY4NDEgMy43MzQ4OEM0LjQyNzA0IDMuOTAxMzggMy44NDY4NiA0LjI2NTg0IDMuNDE5MzggNC43ODY1N0MyLjk5MTA3IDUuMzA4MzMgMi43NDA1OCA1Ljk1ODA5IDIuNzE1NjIgNi42NDEyNkwyLjcxNDI5IDYuNjc3NzZWNi43MTQyOUMyLjcxNDI5IDE5LjMyNyAxMy4yNDU0IDI5LjQyODYgMjYuMDc1OSAyOS40Mjg2SDI2LjA3NjdDMjYuNzYyOSAyOS40MjgzIDI3LjQzNTkgMjkuMjAyOSAyNy45ODU2IDI4Ljc3ODZDMjguNTM2NCAyOC4zNTM1IDI4LjkzMzcgMjcuNzUwNiAyOS4wOTc3IDI3LjA2MDlDMjkuMDk3OCAyNy4wNjA4IDI5LjA5NzggMjcuMDYwNiAyOS4wOTc4IDI3LjA2MDVMMzAuMjAyNyAyMi40MThaTTMuNTM1NzEgMkgyOS40NjQzQzI5Ljg5MTEgMiAzMC4yODg1IDIuMTY0OTkgMzAuNTcyMSAyLjQ0MDAxQzMwLjg1MzYgMi43MTI5OSAzMSAzLjA2OTg5IDMxIDMuNDI4NTdWMjguNTcxNEMzMSAyOC45MzAxIDMwLjg1MzYgMjkuMjg3IDMwLjU3MjEgMjkuNTZDMzAuMjg4NSAyOS44MzUgMjkuODkxMSAzMCAyOS40NjQzIDMwSDMuNTM1NzFDMy4xMDg5IDMwIDIuNzExNDkgMjkuODM1IDIuNDI3ODggMjkuNTZDMi4xNDYzNiAyOS4yODcgMiAyOC45MzAxIDIgMjguNTcxNFYzLjQyODU3QzIgMy4wNjk5IDIuMTQ2MzYgMi43MTI5OSAyLjQyNzg4IDIuNDQwMDFDMi43MTE0OSAyLjE2NDk5IDMuMTA4OSAyIDMuNTM1NzEgMlpcIiBmaWxsPVwiI0YzRUNFQ1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCI0XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNDQgMzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNDAuNjM0NSAyNi44ODEzQzQyLjczNSAyNC44MjQ2IDQzLjk5NTIgMjIuMjQ0MiA0My45OTUyIDE5LjQyODZDNDMuOTk1MiAxMy4zNTcxIDM4LjE1MjIgOC4zNDA2MyAzMC41MzcxIDcuNDQ1MDlDMjguMTMxMiAzLjA3MzY2IDIyLjQ3OTEgMCAxNS44ODc1IDBDNy4xMTE0NyAwIDAuMDAwNTE0NDI4IDUuNDMzOTMgMC4wMDA1MTQ0MjggMTIuMTQyOUMwLjAwMDUxNDQyOCAxNC45NTA5IDEuMjYwNzggMTcuNTMxMyAzLjM2MTIyIDE5LjU5NTVDMi4xOTI2MSAyMS45MjU0IDAuNTEyMjU5IDIzLjczMTcgMC40ODE3MDcgMjMuNzYyMUMwLjAwMDUxNDQ0MiAyNC4yNzA1IC0wLjEzNjk2OSAyNS4wMTQzIDAuMTQ1NjM2IDI1LjY1OTRDMC40MjA2MDMgMjYuMzA0NSAxLjA2MjE5IDI2LjcyMTkgMS43NjQ4OSAyNi43MjE5QzUuODUxMiAyNi43MjE5IDkuMTUwODEgMjUuMTg4OCAxMS4zMjc2IDIzLjc3NzJDMTIuMDMwMyAyMy45MzY2IDEyLjc1NTkgMjQuMDU4IDEzLjQ5NjggMjQuMTQ5MUMxNS44OTUxIDI4LjUwNTQgMjEuNTI0MyAzMS41NzE0IDI4LjEwODMgMzEuNTcxNEMyOS42OTcgMzEuNTcxNCAzMS4yMjQ1IDMxLjM4OTMgMzIuNjc1OCAzMS4wNTU0QzM0Ljg1MjYgMzIuNDU5NCAzOC4xNDQ1IDM0IDQyLjIzODUgMzRDNDIuOTQxMiAzNCA0My41NzUxIDMzLjU4MjYgNDMuODU3NyAzMi45Mzc1QzQ0LjEzMjcgMzIuMjkyNCA0NC4wMDI5IDMxLjU0ODcgNDMuNTIxNyAzMS4wNDAyQzQzLjQ5MTEgMzEuMDE3NCA0MS44MDMxIDI5LjIxMTIgNDAuNjM0NSAyNi44ODEzWk0xMC42MzI2IDE5Ljg3NjNMOS4zMjY0OCAyMC43MTg4QzguMjQ5NTIgMjEuNDA5NCA3LjE0OTY2IDIxLjk1NTggNi4wMzQ1MSAyMi4zNDI5QzYuMjQwNzQgMjEuOTg2MiA2LjQ0Njk2IDIxLjYwNjcgNi42NDU1NSAyMS4yMTk2TDcuODI5NDQgMTguODU5NEw1LjkzNTIyIDE3QzQuOTA0MDkgMTUuOTgzIDMuNjY2NzQgMTQuMzIxIDMuNjY2NzQgMTIuMTQyOUMzLjY2Njc0IDcuNTM2MTYgOS4yNjUzOCAzLjY0Mjg2IDE1Ljg4NzUgMy42NDI4NkMyMi41MDk2IDMuNjQyODYgMjguMTA4MyA3LjUzNjE2IDI4LjEwODMgMTIuMTQyOUMyOC4xMDgzIDE2Ljc0OTYgMjIuNTA5NiAyMC42NDI5IDE1Ljg4NzUgMjAuNjQyOUMxNC42MjcyIDIwLjY0MjkgMTMuMzY3IDIwLjQ5ODcgMTIuMTQ0OSAyMC4yMTc5TDEwLjYzMjYgMTkuODc2M1pNMzguMDYwNSAyNC4yODU3TDM2LjE3NCAyNi4xMzc1TDM3LjM1NzggMjguNDk3OEMzNy41NTY0IDI4Ljg4NDggMzcuNzYyNiAyOS4yNjQzIDM3Ljk2ODkgMjkuNjIxQzM2Ljg1MzcgMjkuMjMzOSAzNS43NTM5IDI4LjY4NzUgMzQuNjc2OSAyNy45OTY5TDMzLjM3MDggMjcuMTU0NUwzMS44NTA5IDI3LjUwMzZDMzAuNjI4OCAyNy43ODQ0IDI5LjM2ODUgMjcuOTI4NiAyOC4xMDgzIDI3LjkyODZDMjMuOTgzNyAyNy45Mjg2IDIwLjMwMjIgMjYuNDAzMSAxOC4wNzk2IDI0LjE1NjdDMjUuODE2OSAyMy4zMzcxIDMxLjc3NDUgMTguMjgyNiAzMS43NzQ1IDEyLjE0MjlDMzEuNzc0NSAxMS44ODQ4IDMxLjc0MzkgMTEuNjM0NCAzMS43MjEgMTEuMzgzOUMzNi42Mzk5IDEyLjQ4NDQgNDAuMzI5IDE1LjY5NDYgNDAuMzI5IDE5LjQyODZDNDAuMzI5IDIxLjYwNjcgMzkuMDkxNyAyMy4yNjg4IDM4LjA2MDUgMjQuMjg1N1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgMzkgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMzIuNSAyNS43MTQzVjI2Ljc4NTdDMzIuNSAyOC41NjA5IDMxLjA0NDkgMzAgMjkuMjUgMzBIMy4yNUMxLjQ1NTA1IDMwIDAgMjguNTYwOSAwIDI2Ljc4NTdWOS42NDI4NkMwIDcuODY3NjMgMS40NTUwNSA2LjQyODU3IDMuMjUgNi40Mjg1N0g0LjMzMzMzVjkuNjQyODZIMy42NTYyNUMzLjU0ODUxIDkuNjQyODYgMy40NDUxNyA5LjY4NTE5IDMuMzY4OTkgOS43NjA1NEMzLjI5MjggOS44MzU4OSAzLjI1IDkuOTM4MDggMy4yNSAxMC4wNDQ2VjI2LjM4MzlDMy4yNSAyNi40OTA1IDMuMjkyOCAyNi41OTI3IDMuMzY4OTkgMjYuNjY4QzMuNDQ1MTcgMjYuNzQzNCAzLjU0ODUxIDI2Ljc4NTcgMy42NTYyNSAyNi43ODU3SDI4Ljg0MzhDMjguOTUxNSAyNi43ODU3IDI5LjA1NDggMjYuNzQzNCAyOS4xMzEgMjYuNjY4QzI5LjIwNzIgMjYuNTkyNyAyOS4yNSAyNi40OTA1IDI5LjI1IDI2LjM4MzlWMjUuNzE0M0gzMi41Wk0zNS4zNDM4IDMuMjE0MjlIMTAuMTU2MkMxMC4wNDg1IDMuMjE0MjkgOS45NDUxNyAzLjI1NjYyIDkuODY4OTkgMy4zMzE5N0M5Ljc5MjggMy40MDczMiA5Ljc1IDMuNTA5NTEgOS43NSAzLjYxNjA3VjE5Ljk1NTRDOS43NSAyMC4wNjE5IDkuNzkyOCAyMC4xNjQxIDkuODY4OTkgMjAuMjM5NUM5Ljk0NTE3IDIwLjMxNDggMTAuMDQ4NSAyMC4zNTcxIDEwLjE1NjIgMjAuMzU3MUgzNS4zNDM4QzM1LjQ1MTUgMjAuMzU3MSAzNS41NTQ4IDIwLjMxNDggMzUuNjMxIDIwLjIzOTVDMzUuNzA3MiAyMC4xNjQxIDM1Ljc1IDIwLjA2MTkgMzUuNzUgMTkuOTU1NFYzLjYxNjA3QzM1Ljc1IDMuNTA5NTEgMzUuNzA3MiAzLjQwNzMyIDM1LjYzMSAzLjMzMTk3QzM1LjU1NDggMy4yNTY2MiAzNS40NTE1IDMuMjE0MjkgMzUuMzQzOCAzLjIxNDI5Wk0zNS43NSAwQzM3LjU0NDkgMCAzOSAxLjQzOTA2IDM5IDMuMjE0MjlWMjAuMzU3MUMzOSAyMi4xMzI0IDM3LjU0NDkgMjMuNTcxNCAzNS43NSAyMy41NzE0SDkuNzVDNy45NTUwNSAyMy41NzE0IDYuNSAyMi4xMzI0IDYuNSAyMC4zNTcxVjMuMjE0MjlDNi41IDEuNDM5MDYgNy45NTUwNSAwIDkuNzUgMEgzNS43NVpNMTcuODc1IDcuNUMxNy44NzUgOC45NzkzMSAxNi42NjI0IDEwLjE3ODYgMTUuMTY2NyAxMC4xNzg2QzEzLjY3MDkgMTAuMTc4NiAxMi40NTgzIDguOTc5MzEgMTIuNDU4MyA3LjVDMTIuNDU4MyA2LjAyMDY5IDEzLjY3MDkgNC44MjE0MyAxNS4xNjY3IDQuODIxNDNDMTYuNjYyNCA0LjgyMTQzIDE3Ljg3NSA2LjAyMDY5IDE3Ljg3NSA3LjVaTTEzIDEzLjkyODZMMTUuNjc1NSAxMS4yODI1QzE1Ljk5MjggMTAuOTY4NyAxNi41MDcyIDEwLjk2ODcgMTYuODI0NiAxMS4yODI1TDE5LjUgMTMuOTI4NkwyNi41MDg4IDYuOTk2NzZDMjYuODI2MSA2LjY4Mjk3IDI3LjM0MDYgNi42ODI5NyAyNy42NTc5IDYuOTk2NzZMMzIuNSAxMS43ODU3VjE3LjE0MjlIMTNWMTMuOTI4NlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNoZWNrTWFyayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTI1IDAuNzgxMjVDMTEuNjI0MyAwLjc4MTI1IDAuNzgxMjUgMTEuNjI0MyAwLjc4MTI1IDI1QzAuNzgxMjUgMzguMzc1NyAxMS42MjQzIDQ5LjIxODggMjUgNDkuMjE4OEMzOC4zNzU3IDQ5LjIxODggNDkuMjE4OCAzOC4zNzU3IDQ5LjIxODggMjVDNDkuMjE4OCAxMS42MjQzIDM4LjM3NTcgMC43ODEyNSAyNSAwLjc4MTI1Wk0yNSA1LjQ2ODc1QzM1Ljc5NDEgNS40Njg3NSA0NC41MzEyIDE0LjIwNDIgNDQuNTMxMiAyNUM0NC41MzEyIDM1Ljc5NDEgMzUuNzk1OCA0NC41MzEyIDI1IDQ0LjUzMTJDMTQuMjA1OSA0NC41MzEyIDUuNDY4NzUgMzUuNzk1OCA1LjQ2ODc1IDI1QzUuNDY4NzUgMTQuMjA1OSAxNC4yMDQyIDUuNDY4NzUgMjUgNS40Njg3NVpNMzguNjkxOCAxOC4xOTAxTDM2LjQ5MSAxNS45NzE2QzM2LjAzNTMgMTUuNTEyMSAzNS4yOTMzIDE1LjUwOTEgMzQuODMzOCAxNS45NjQ5TDIxLjAyOTkgMjkuNjU3OUwxNS4xOTA4IDIzLjc3MTVDMTQuNzM1MSAyMy4zMTIgMTMuOTkzMSAyMy4zMDkgMTMuNTMzNiAyMy43NjQ3TDExLjMxNDkgMjUuOTY1NUMxMC44NTU1IDI2LjQyMTMgMTAuODUyNCAyNy4xNjMzIDExLjMwODMgMjcuNjIyOUwyMC4xNzM2IDM2LjU2QzIwLjYyOTQgMzcuMDE5NCAyMS4zNzE0IDM3LjAyMjUgMjEuODMwOSAzNi41NjY2TDM4LjY4NTMgMTkuODQ3NUMzOS4xNDQ2IDE5LjM5MTYgMzkuMTQ3NiAxOC42NDk2IDM4LjY5MTggMTguMTkwMVpcIiBmaWxsPVwiIzAzOUIzN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0MlwiIGhlaWdodD1cIjQyXCIgdmlld0JveD1cIjAgMCA0MiA0MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjIxXCIgY3k9XCIyMVwiIHI9XCIyMVwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43NTQ0IDEzLjUzMjVDMTEuMDQ0NCAxNC4yNDI2IDExLjA0NDQgMTUuMzkzNyAxMS43NTQ0IDE2LjEwMzhMMTcuNTM5NyAyMS44ODkxTDExLjc1NDQgMjcuNjc0NEMxMS4wNDQ0IDI4LjM4NDQgMTEuMDQ0NCAyOS41MzU2IDExLjc1NDQgMzAuMjQ1N0MxMi40NjQ1IDMwLjk1NTcgMTMuNjE1NiAzMC45NTU3IDE0LjMyNTcgMzAuMjQ1N0wyMC4xMTEgMjQuNDYwNEwyNS44OTYzIDMwLjI0NTdDMjYuNjA2MyAzMC45NTU3IDI3Ljc1NzUgMzAuOTU1NyAyOC40Njc1IDMwLjI0NTdDMjkuMTc3NiAyOS41MzU2IDI5LjE3NzYgMjguMzg0NCAyOC40Njc1IDI3LjY3NDRMMjIuNjgyMiAyMS44ODkxTDI4LjQ2NzYgMTYuMTAzOEMyOS4xNzc2IDE1LjM5MzcgMjkuMTc3NiAxNC4yNDI2IDI4LjQ2NzYgMTMuNTMyNUMyNy43NTc1IDEyLjgyMjUgMjYuNjA2MyAxMi44MjI1IDI1Ljg5NjMgMTMuNTMyNUwyMC4xMTEgMTkuMzE3OUwxNC4zMjU2IDEzLjUzMjVDMTMuNjE1NiAxMi44MjI1IDEyLjQ2NDQgMTIuODIyNSAxMS43NTQ0IDEzLjUzMjVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIGNsYXNzTmFtZT1cImdvb2dsZVwiIHdpZHRoPVwiMTAzXCIgaGVpZ2h0PVwiMTAyXCIgdmlld0JveD1cIjAgMCAxMDMgMTAyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTUxIDczLjYzMTNDNDAuNDgxMyA3My42MzEzIDMxLjg3NSA2Ni42MTg4IDI5LjMyNSA1Ny4wNTYzTDcuOTY4NzUgNzguNDEyNUMxNi44OTM3IDkyLjQzNzUgMzIuODMxMyAxMDIgNTEgMTAyQzYwLjg4MTIgMTAyIDcwLjEyNSA5OS4xMzEzIDc4LjA5MzggOTQuMDMxM0w1Ni43Mzc1IDcyLjY3NUM1NC44MjUgNzMuMzEyNSA1Mi45MTI1IDczLjYzMTMgNTEgNzMuNjMxM1pcIiBmaWxsPVwiIzM0QTg1M1wiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTAyIDQzLjk4NzVDMTAxLjY4MSA0Mi4zOTM4IDEwMC40MDYgNDEuNDM3NSA5OC44MTI1IDQxLjQzNzVINTFDNDkuMDg3NSA0MS40Mzc1IDQ3LjgxMjUgNDIuNzEyNSA0Ny44MTI1IDQ0LjYyNVY2MC41NjI1QzQ3LjgxMjUgNjIuNDc1IDQ5LjA4NzUgNjMuNzUgNTEgNjMuNzVINjcuODkzN0M2NS4wMjUgNjguMjEyNSA2MC44ODEyIDcxLjA4MTIgNTYuNzM3NSA3Mi42NzVMNzguMDkzOCA5NC4wMzEyQzkyLjQzNzUgODUuMTA2MyAxMDIgNjkuMTY4NyAxMDIgNTFDMTAyIDUwLjA0MzcgMTAyIDQ5LjQwNjMgMTAyIDQ4Ljc2ODhDMTAyLjMxOSA0Ny40OTM4IDEwMi4zMTkgNDUuOSAxMDIgNDMuOTg3NVpcIiBmaWxsPVwiIzQyODVGNFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjguMzY4NyA1MUMyOC4zNjg3IDQ5LjA4NzUgMjguNjg3NSA0Ny4xNzUgMjkuMDA2MyA0NS4yNjI1TDcuOTY4NzUgMjMuOTA2MkMyLjg2ODc1IDMxLjg3NSAwIDQxLjExODggMCA1MUMwIDYwLjg4MTIgMi44Njg3NSA3MC4xMjUgNy45Njg3NSA3OC4wOTM4TDI5LjMyNSA1Ni43Mzc1QzI4LjY4NzUgNTQuODI1IDI4LjM2ODcgNTIuOTEyNSAyOC4zNjg3IDUxWlwiIGZpbGw9XCIjRkJCQzA1XCIvPlxyXG4gICAgPHBhdGggZD1cIk05MC44NDM4IDE5LjEyNUM4Ny4zMzc1IDE0LjY2MjUgODIuODc1IDEwLjgzNzUgNzguMDkzOCA3LjY1QzcwLjEyNSAyLjg2ODc1IDYwLjg4MTIgMCA1MSAwQzMyLjgzMTMgMCAxNi44OTM3IDkuNTYyNSA3Ljk2ODc1IDIzLjkwNjJMMjkuMzI1IDQ1LjI2MjVDMzEuODc1IDM1LjcgNDAuOCAyOC42ODc1IDUxIDI4LjY4NzVDNTIuOTEyNSAyOC42ODc1IDU0LjgyNSAyOS4wMDYzIDU2LjczNzUgMjkuNjQzOEM1OS42MDYyIDMwLjYgNjIuMTU2MiAzMi4xOTM4IDY1LjAyNSAzNC40MjVDNjUuOTgxMiAzNS4zODEzIDY3LjI1NjIgMzUuMzgxMiA2OC41MzEyIDM0Ljc0MzdMODkuODg3NSAyNC4yMjVDOTAuODQzOCAyMy45MDYyIDkxLjQ4MTMgMjIuOTUgOTEuNDgxMyAyMS45OTM4QzkxLjggMjEuMDM3NSA5MS40ODEzIDIwLjA4MTMgOTAuODQzOCAxOS4xMjVaXCIgZmlsbD1cIiNFQTQzMzVcIi8+XHJcbiAgICA8L3N2Zz4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFjayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTI3LjU5MTYgMy4xNDgwNEwyNS4yMTMzIDAuNzU4NzU1QzI0LjIwNjIgLTAuMjUyOTIyIDIyLjU3NzggLTAuMjUyOTIyIDIxLjU4MTUgMC43NTg3NTVMMC43NTUyNzMgMjEuNjcwNEMtMC4yNTE3NTggMjIuNjgyIC0wLjI1MTc1OCAyNC4zMTc5IDAuNzU1MjczIDI1LjMxODlMMjEuNTgxNSA0Ni4yNDEyQzIyLjU4ODYgNDcuMjUyOSAyNC4yMTY5IDQ3LjI1MjkgMjUuMjEzMyA0Ni4yNDEyTDI3LjU5MTYgNDMuODUyQzI4LjYwOTMgNDIuODI5NSAyOC41ODc5IDQxLjE2MTMgMjcuNTQ4NyA0MC4xNjA0TDE0LjYzOTQgMjcuODA1SDQ1LjQyODlDNDYuODUzNyAyNy44MDUgNDggMjYuNjUzNCA0OCAyNS4yMjJWMjEuNzc4QzQ4IDIwLjM0NjYgNDYuODUzNyAxOS4xOTUgNDUuNDI4OSAxOS4xOTVIMTQuNjM5NEwyNy41NDg3IDYuODM5NTlDMjguNTk4NiA1LjgzODY3IDI4LjYyIDQuMTcwNDggMjcuNTkxNiAzLjE0ODA0WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyBjbGFzc05hbWU9XCJsb2FkZXJcIiB3aWR0aD1cIjQ5MFwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNDkwIDUxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0yNTYuNjM2IDBDMjQzLjc4MyAwIDIzMy4zNjMgMTAuNDIgMjMzLjM2MyAyMy4yNzNWMTE2LjM2NEMyMzMuMzYzIDEyOS4yMTcgMjQzLjc4MyAxMzkuNjM3IDI1Ni42MzYgMTM5LjYzN0MyNjkuNDg5IDEzOS42MzcgMjc5LjkwOSAxMjkuMjE3IDI3OS45MDkgMTE2LjM2NFYyMy4yNzNDMjc5LjkwOSAxMC40MiAyNjkuNDg5IDAgMjU2LjYzNiAwWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjU2LjYzOCAzNzIuMzY0QzI0My43ODUgMzcyLjM2NCAyMzMuMzY1IDM4Mi43ODQgMjMzLjM2NSAzOTUuNjM3VjQ4OC43MjhDMjMzLjM2NSA1MDEuNTgxIDI0My43ODUgNTEyLjAwMSAyNTYuNjM4IDUxMi4wMDFDMjY5LjQ5MSA1MTIuMDAxIDI3OS45MTEgNTAxLjU4MSAyNzkuOTExIDQ4OC43MjhWMzk1LjYzN0MyNzkuOTExIDM4Mi43ODQgMjY5LjQ5MSAzNzIuMzY0IDI1Ni42MzggMzcyLjM2NFpcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuNlwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTc0LjM1NSAxNDAuODA4TDEwOC41MjkgNzQuOThDOTkuNDQzIDY1Ljg5MSA4NC43MDcgNjUuODkxIDc1LjYxNyA3NC45OEM2Ni41MjggODQuMDY5IDY2LjUyOCA5OC44MDQgNzUuNjE3IDEwNy44OTJMMTQxLjQ0MyAxNzMuNzJDMTQ1Ljk4NyAxNzguMjY0IDE1MS45NDQgMTgwLjUzNyAxNTcuODk4IDE4MC41MzdDMTYzLjg1MyAxODAuNTM3IDE2OS44MTEgMTc4LjI2NCAxNzQuMzUzIDE3My43MkMxODMuNDQ0IDE2NC42MzEgMTgzLjQ0NCAxNDkuODk3IDE3NC4zNTUgMTQwLjgwOFpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTQ2Ni4wOTEgMjMyLjcyN0g0MTkuNTQ2QzQwNi42OTMgMjMyLjcyNyAzOTYuMjczIDI0My4xNDcgMzk2LjI3MyAyNTZDMzk2LjI3MyAyNjguODUzIDQwNi42OTMgMjc5LjI3MyA0MTkuNTQ2IDI3OS4yNzNINDY2LjA5MUM0NzguOTQ0IDI3OS4yNzMgNDg5LjM2NCAyNjguODUzIDQ4OS4zNjQgMjU2QzQ4OS4zNjQgMjQzLjE0NyA0NzguOTQ0IDIzMi43MjcgNDY2LjA5MSAyMzIuNzI3WlwiIGZpbGw9XCJibGFja1wiIGZpbGxPcGFjaXR5PVwiMC40XCIvPlxyXG4gICAgPHBhdGggZD1cIk0zNzEuODMgMzM4LjI4M0MzNjIuNzQzIDMyOS4xOTQgMzQ4LjAwNyAzMjkuMTk2IDMzOC45MTggMzM4LjI4M0MzMjkuODI5IDM0Ny4zNzIgMzI5LjgzMSAzNjIuMTA2IDMzOC45MTggMzcxLjE5NUw0MDQuNzQ2IDQzNy4wMkM0MDkuMjkgNDQxLjU2NCA0MTUuMjQ3IDQ0My44MzYgNDIxLjIwMyA0NDMuODM2QzQyNy4xNTkgNDQzLjgzNiA0MzMuMTE2IDQ0MS41NjMgNDM3LjY1OCA0MzcuMDJDNDQ2Ljc0NyA0MjcuOTMxIDQ0Ni43NDcgNDEzLjE5NiA0MzcuNjU4IDQwNC4xMDhMMzcxLjgzIDMzOC4yODNaXCIgZmlsbD1cImJsYWNrXCIgZmlsbE9wYWNpdHk9XCIwLjVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0MC4yNzMgMjU2QzE0MC4yNzMgMjQzLjE0NyAxMjkuODUzIDIzMi43MjcgMTE3IDIzMi43MjdIMjMuOTA5QzExLjA1NiAyMzIuNzI3IDAuNjM1OTg2IDI0My4xNDcgMC42MzU5ODYgMjU2QzAuNjM1OTg2IDI2OC44NTMgMTEuMDU2IDI3OS4yNzMgMjMuOTA5IDI3OS4yNzNIMTE3QzEyOS44NTMgMjc5LjI3MyAxNDAuMjczIDI2OC44NTMgMTQwLjI3MyAyNTZaXCIgZmlsbD1cImJsYWNrXCIgZmlsbE9wYWNpdHk9XCIwLjhcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE3NC4zNTUgMzM4LjI4M0MxNjUuMjY4IDMyOS4xOTQgMTUwLjUzMSAzMjkuMTk0IDE0MS40NDMgMzM4LjI4M0w3NS42MTggNDA0LjEwOEM2Ni41MjkgNDEzLjE5NSA2Ni41MjkgNDI3LjkzMiA3NS42MTggNDM3LjAyQzgwLjE2MiA0NDEuNTY0IDg2LjExOSA0NDMuODM2IDkyLjA3NSA0NDMuODM2Qzk4LjAzMSA0NDMuODM2IDEwMy45ODggNDQxLjU2NSAxMDguNTMgNDM3LjAyTDE3NC4zNTUgMzcxLjE5NUMxODMuNDQ0IDM2Mi4xMDggMTgzLjQ0NCAzNDcuMzcyIDE3NC4zNTUgMzM4LjI4M1pcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlubmVyTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNTZcIiBjbGFzc05hbWU9XCJidXR0b24tbG9hZFwiIGhlaWdodD1cIjU2XCIgdmlld0JveD1cIjAgMCA1NiA1NlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMSA1NS4xMTc5QzguOTIzNCA1Mi4wMDk2IDAgNDEuMDQ2OSAwIDI4QzAgMTIuNTM2IDEyLjUzNiAwIDI4IDBDNDMuNDY0IDAgNTYgMTIuNTM2IDU2IDI4QzU2IDM5LjU1OSA0OC45OTU4IDQ5LjQ4MjEgMzkgNTMuNzU2NlY0NC43MDZDNDQuNDIyMiA0MS4xMjg1IDQ4IDM0Ljk4MjEgNDggMjhDNDggMTYuOTU0MyAzOS4wNDU3IDggMjggOEMxNi45NTQzIDggOCAxNi45NTQzIDggMjhDOCAzNi41ODMxIDEzLjQwNjcgNDMuOTAzMyAyMSA0Ni43NDA4VjU1LjExNzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FtZXJhID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIGNsYXNzTmFtZT1cInByb2ZpbGUtY2hhbmdlXCIgd2lkdGg9XCI1MTJcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNTEyIDE0NFY0MzJDNTEyIDQ1OC41IDQ5MC41IDQ4MCA0NjQgNDgwSDQ4QzIxLjUgNDgwIDAgNDU4LjUgMCA0MzJWMTQ0QzAgMTE3LjUgMjEuNSA5NiA0OCA5NkgxMzZMMTQ4LjMgNjMuMUMxNTUuMyA0NC40IDE3My4yIDMyIDE5My4yIDMySDMxOC43QzMzOC43IDMyIDM1Ni42IDQ0LjQgMzYzLjYgNjMuMUwzNzYgOTZINDY0QzQ5MC41IDk2IDUxMiAxMTcuNSA1MTIgMTQ0Wk0zNzYgMjg4QzM3NiAyMjEuOCAzMjIuMiAxNjggMjU2IDE2OEMxODkuOCAxNjggMTM2IDIyMS44IDEzNiAyODhDMTM2IDM1NC4yIDE4OS44IDQwOCAyNTYgNDA4QzMyMi4yIDQwOCAzNzYgMzU0LjIgMzc2IDI4OFpNMzQ0IDI4OEMzNDQgMzM2LjUgMzA0LjUgMzc2IDI1NiAzNzZDMjA3LjUgMzc2IDE2OCAzMzYuNSAxNjggMjg4QzE2OCAyMzkuNSAyMDcuNSAyMDAgMjU2IDIwMEMzMDQuNSAyMDAgMzQ0IDIzOS41IDM0NCAyODhaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb2ZmQmFjayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiBjbGFzc05hbWU9XCJib2xkLWJveFwiIHZpZXdCb3g9XCIwIDAgMTI5IDE0OFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDApXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMS40Njk5NyAxMTAuMjdWMzguMDVMNjQuNDcgNzQuNDhMMTI3LjQ3IDM3LjQ4VjExMC4yMkw2NC40NyAxNDYuNTlMMS40Njk5NyAxMTAuMjdaTTkyLjQ3IDExNy40QzkxLjU4IDExNy40IDkwLjcwOTkgMTE3LjY2NCA4OS45Njk5IDExOC4xNThDODkuMjI5OSAxMTguNjUzIDg4LjY1MzEgMTE5LjM1NiA4OC4zMTI1IDEyMC4xNzhDODcuOTcxOSAxMjEgODcuODgyOCAxMjEuOTA1IDg4LjA1NjQgMTIyLjc3OEM4OC4yMzAxIDEyMy42NTEgODguNjU4NyAxMjQuNDUzIDg5LjI4OCAxMjUuMDgyQzg5LjkxNzMgMTI1LjcxMSA5MC43MTkxIDEyNi4xNCA5MS41OTIxIDEyNi4zMTRDOTIuNDY1IDEyNi40ODcgOTMuMzY5OCAxMjYuMzk4IDk0LjE5MiAxMjYuMDU3Qzk1LjAxNDMgMTI1LjcxNyA5NS43MTcxIDEyNS4xNCA5Ni4yMTE2IDEyNC40Qzk2LjcwNjEgMTIzLjY2IDk2Ljk3IDEyMi43OSA5Ni45NyAxMjEuOUM5Ni45NjczIDEyMC43MDcgOTYuNDkyNCAxMTkuNTY0IDk1LjY0OSAxMTguNzIxQzk0LjgwNTcgMTE3Ljg3OCA5My42NjI2IDExNy40MDMgOTIuNDcgMTE3LjRWMTE3LjRaTTEwNi40NyAxMDkuNEMxMDUuNTggMTA5LjQgMTA0LjcxIDEwOS42NjQgMTAzLjk3IDExMC4xNThDMTAzLjIzIDExMC42NTMgMTAyLjY1MyAxMTEuMzU2IDEwMi4zMTMgMTEyLjE3OEMxMDEuOTcyIDExMyAxMDEuODgzIDExMy45MDUgMTAyLjA1NiAxMTQuNzc4QzEwMi4yMyAxMTUuNjUxIDEwMi42NTkgMTE2LjQ1MyAxMDMuMjg4IDExNy4wODJDMTAzLjkxNyAxMTcuNzExIDEwNC43MTkgMTE4LjE0IDEwNS41OTIgMTE4LjMxNEMxMDYuNDY1IDExOC40ODcgMTA3LjM3IDExOC4zOTggMTA4LjE5MiAxMTguMDU3QzEwOS4wMTQgMTE3LjcxNyAxMDkuNzE3IDExNy4xNCAxMTAuMjEyIDExNi40QzExMC43MDYgMTE1LjY2IDExMC45NyAxMTQuNzkgMTEwLjk3IDExMy45QzExMC45NjcgMTEyLjcwNyAxMTAuNDkyIDExMS41NjQgMTA5LjY0OSAxMTAuNzIxQzEwOC44MDYgMTA5Ljg3OCAxMDcuNjYzIDEwOS40MDMgMTA2LjQ3IDEwOS40VjEwOS40Wk0xMTkuNDcgMTAxLjRDMTE4LjU4IDEwMS40IDExNy43MSAxMDEuNjY0IDExNi45NyAxMDIuMTU4QzExNi4yMyAxMDIuNjUzIDExNS42NTMgMTAzLjM1NiAxMTUuMzEzIDEwNC4xNzhDMTE0Ljk3MiAxMDUgMTE0Ljg4MyAxMDUuOTA1IDExNS4wNTYgMTA2Ljc3OEMxMTUuMjMgMTA3LjY1MSAxMTUuNjU5IDEwOC40NTMgMTE2LjI4OCAxMDkuMDgyQzExNi45MTcgMTA5LjcxMSAxMTcuNzE5IDExMC4xNCAxMTguNTkyIDExMC4zMTRDMTE5LjQ2NSAxMTAuNDg3IDEyMC4zNyAxMTAuMzk4IDEyMS4xOTIgMTEwLjA1N0MxMjIuMDE0IDEwOS43MTcgMTIyLjcxNyAxMDkuMTQgMTIzLjIxMiAxMDguNEMxMjMuNzA2IDEwNy42NiAxMjMuOTcgMTA2Ljc5IDEyMy45NyAxMDUuOUMxMjMuOTY3IDEwNC43MDcgMTIzLjQ5MiAxMDMuNTY0IDEyMi42NDkgMTAyLjcyMUMxMjEuODA2IDEwMS44NzggMTIwLjY2MyAxMDEuNDAzIDExOS40NyAxMDEuNFYxMDEuNFpNMTA1LjY5IDcwLjRDMTA1LjMwNyA3MC40MDEgMTA0LjkzMiA3MC41MTIgMTA0LjYxIDcwLjcyTDg0LjQxIDgzLjcyQzg0LjE4NDkgODMuODYyMiA4My45OTE1IDg0LjA0OTMgODMuODQxOCA4NC4yNjk1QzgzLjY5MjEgODQuNDg5NyA4My41ODk0IDg0LjczODMgODMuNTQgODVDODMuNDgzNCA4NS4yNTcxIDgzLjQ3ODEgODUuNTIyOCA4My41MjQ1IDg1Ljc4MTlDODMuNTcwOCA4Ni4wNDEgODMuNjY3OCA4Ni4yODg0IDgzLjgxIDg2LjUxTDg0LjU4IDg3LjdDODQuODY2OSA4OC4xNDQ5IDg1LjMxODYgODguNDU4IDg1LjgzNiA4OC41NzA1Qzg2LjM1MzMgODguNjgyOSA4Ni44OTQyIDg4LjU4NTcgODcuMzQgODguM0wxMDcuNTMgNzUuM0MxMDcuOTczIDc1LjAxNDQgMTA4LjI4NiA3NC41NjUxIDEwOC40IDc0LjA1QzEwOC40NTggNzMuNzkzNiAxMDguNDY1IDczLjUyODIgMTA4LjQyIDczLjI2OTFDMTA4LjM3NiA3My4wMSAxMDguMjggNzIuNzYyMiAxMDguMTQgNzIuNTRMMTA3LjM3IDcxLjM1QzEwNy4xODggNzEuMDcwMiAxMDYuOTM5IDcwLjg0MDMgMTA2LjY0NiA3MC42ODE0QzEwNi4zNTIgNzAuNTIyNCAxMDYuMDI0IDcwLjQzOTUgMTA1LjY5IDcwLjQ0VjcwLjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyNyAzOC4zNTk5VjExMEw2NC41IDE0Ni4wOEwyIDExMFYzOC45MTk5TDMyIDU2LjI1OTlMNjQgNzQuNzU5OUw2NC41IDc1LjA0OTlMNjUgNzQuNzU5OUwxMjcgMzguMzU5OVYzOC4zNTk5Wk04Ni4yNiA4OS4wOTk5Qzg2LjczOTIgODkuMDk5OCA4Ny4yMDgxIDg4Ljk2MDkgODcuNjEgODguNjk5OUwxMDcuNzkgNzUuNjk5OUMxMDguMDY4IDc1LjUyNjMgMTA4LjMwOSA3NS4yOTg5IDEwOC40OTcgNzUuMDMxQzEwOC42ODYgNzQuNzYzMSAxMDguODIgNzQuNDYwMSAxMDguODkgNzQuMTM5OUMxMDguOTY0IDczLjgxNzEgMTA4Ljk3MiA3My40ODMgMTA4LjkxNiA3My4xNTY4QzEwOC44NTkgNzIuODMwNiAxMDguNzM4IDcyLjUxOSAxMDguNTYgNzIuMjM5OUwxMDcuNzkgNzEuMDU5OUMxMDcuNTY1IDcwLjcwNzIgMTA3LjI1NCA3MC40MTY5IDEwNi44ODcgNzAuMjE1OUMxMDYuNTIgNzAuMDE0OSAxMDYuMTA4IDY5LjkwOTcgMTA1LjY5IDY5LjkwOTlDMTA1LjIxMSA2OS45MDg5IDEwNC43NDEgNzAuMDQ3OSAxMDQuMzQgNzAuMzA5OUw4NC4xNCA4My4zMDk5QzgzLjU4MzEgODMuNjcwNSA4My4xOTE2IDg0LjIzNjggODMuMDUxMSA4NC44ODUyQzgyLjkxMDUgODUuNTMzNSA4My4wMzI0IDg2LjIxMTEgODMuMzkgODYuNzY5OUw4NC4xNSA4Ny45NDk5Qzg0LjM3NTYgODguMzA1MyA4NC42ODczIDg4LjU5NzkgODUuMDU2MSA4OC44MDA3Qzg1LjQyNSA4OS4wMDM1IDg1LjgzOTEgODkuMTA5OCA4Ni4yNiA4OS4xMDk5Vjg5LjA5OTlaTTExOS40NyAxMTAuOTFDMTIwLjQ1OSAxMTAuOTEgMTIxLjQyNiAxMTAuNjE3IDEyMi4yNDggMTEwLjA2N0MxMjMuMDcgMTA5LjUxOCAxMjMuNzExIDEwOC43MzcgMTI0LjA4OSAxMDcuODIzQzEyNC40NjggMTA2LjkxIDEyNC41NjcgMTA1LjkwNCAxMjQuMzc0IDEwNC45MzRDMTI0LjE4MSAxMDMuOTY1IDEyMy43MDUgMTAzLjA3NCAxMjMuMDA2IDEwMi4zNzRDMTIyLjMwNiAxMDEuNjc1IDEyMS40MTUgMTAxLjE5OSAxMjAuNDQ1IDEwMS4wMDZDMTE5LjQ3NiAxMDAuODEzIDExOC40NyAxMDAuOTEyIDExNy41NTcgMTAxLjI5MUMxMTYuNjQzIDEwMS42NjkgMTE1Ljg2MiAxMDIuMzEgMTE1LjMxMyAxMDMuMTMyQzExNC43NjMgMTAzLjk1NCAxMTQuNDcgMTA0LjkyMSAxMTQuNDcgMTA1LjkxQzExNC40NyAxMDcuMjM2IDExNC45OTcgMTA4LjUwOCAxMTUuOTM0IDEwOS40NDVDMTE2Ljg3MiAxMTAuMzgzIDExOC4xNDQgMTEwLjkxIDExOS40NyAxMTAuOTFWMTEwLjkxWk0xMDYuNDcgMTE4LjkxQzEwNy40NTkgMTE4LjkxIDEwOC40MjYgMTE4LjYxNyAxMDkuMjQ4IDExOC4wNjdDMTEwLjA3IDExNy41MTggMTEwLjcxMSAxMTYuNzM3IDExMS4wODkgMTE1LjgyM0MxMTEuNDY4IDExNC45MSAxMTEuNTY3IDExMy45MDQgMTExLjM3NCAxMTIuOTM0QzExMS4xODEgMTExLjk2NSAxMTAuNzA1IDExMS4wNzQgMTEwLjAwNiAxMTAuMzc0QzEwOS4zMDYgMTA5LjY3NSAxMDguNDE1IDEwOS4xOTkgMTA3LjQ0NSAxMDkuMDA2QzEwNi40NzYgMTA4LjgxMyAxMDUuNDcgMTA4LjkxMiAxMDQuNTU3IDEwOS4yOTFDMTAzLjY0MyAxMDkuNjY5IDEwMi44NjIgMTEwLjMxIDEwMi4zMTMgMTExLjEzMkMxMDEuNzYzIDExMS45NTQgMTAxLjQ3IDExMi45MjEgMTAxLjQ3IDExMy45MUMxMDEuNDcgMTE1LjIzNiAxMDEuOTk3IDExNi41MDggMTAyLjkzNCAxMTcuNDQ1QzEwMy44NzIgMTE4LjM4MyAxMDUuMTQ0IDExOC45MSAxMDYuNDcgMTE4LjkxVjExOC45MVpNOTIuNDcgMTI2LjkxQzkzLjQ1ODkgMTI2LjkxIDk0LjQyNTYgMTI2LjYxNyA5NS4yNDc4IDEyNi4wNjdDOTYuMDcwMSAxMjUuNTE4IDk2LjcxMSAxMjQuNzM3IDk3LjA4OTQgMTIzLjgyM0M5Ny40Njc4IDEyMi45MSA5Ny41NjY5IDEyMS45MDQgOTcuMzczOSAxMjAuOTM0Qzk3LjE4MSAxMTkuOTY1IDk2LjcwNDggMTE5LjA3NCA5Ni4wMDU1IDExOC4zNzRDOTUuMzA2MyAxMTcuNjc1IDk0LjQxNTQgMTE3LjE5OSA5My40NDU0IDExNy4wMDZDOTIuNDc1NSAxMTYuODEzIDkxLjQ3MDIgMTE2LjkxMiA5MC41NTY2IDExNy4yOTFDODkuNjQyOSAxMTcuNjY5IDg4Ljg2MjEgMTE4LjMxIDg4LjMxMjcgMTE5LjEzMkM4Ny43NjMyIDExOS45NTQgODcuNDcgMTIwLjkyMSA4Ny40NyAxMjEuOTFDODcuNDcgMTIzLjIzNiA4Ny45OTY4IDEyNC41MDggODguOTM0NSAxMjUuNDQ1Qzg5Ljg3MjEgMTI2LjM4MyA5MS4xNDM5IDEyNi45MSA5Mi40NyAxMjYuOTFaTTEyNy40NyAzNi45MDk5TDY0LjQ3IDczLjkwOTlMMzIuNDcgNTUuNDA5OUwxIDM3LjIwOTlWMTEwLjUzTDY0LjUgMTQ3LjE5TDEyOCAxMTAuNTZWMzcuMjM5OUwxMjcuNDYgMzYuOTI5OUwxMjcuNDcgMzYuOTA5OVpNODYuMjYgODguMDk5OUM4Ni4wMDg4IDg4LjEwMDQgODUuNzYxNiA4OC4wMzc0IDg1LjU0MTQgODcuOTE2OEM4NS4zMjExIDg3Ljc5NjIgODUuMTM0OCA4Ny42MjE4IDg1IDg3LjQwOTlMODQuMjMgODYuMjE5OUM4NC4wMTg0IDg1Ljg4NDkgODMuOTQ2OSA4NS40OCA4NC4wMzExIDg1LjA5MjhDODQuMTE1MyA4NC43MDU1IDg0LjM0ODQgODQuMzY2OSA4NC42OCA4NC4xNDk5TDEwNC44OCA3MS4xNDk5QzEwNS4xMTkgNzAuOTg5NiAxMDUuNDAyIDcwLjkwNTkgMTA1LjY5IDcwLjkwOTlDMTA1Ljk0MSA3MC45MDk0IDEwNi4xODggNzAuOTcyNCAxMDYuNDA5IDcxLjA5M0MxMDYuNjI5IDcxLjIxMzcgMTA2LjgxNSA3MS4zODggMTA2Ljk1IDcxLjU5OTlMMTA3LjcyIDcyLjc4OTlDMTA3LjkzMyA3My4xMjU1IDEwOC4wMDUgNzMuNTMyIDEwNy45MTggNzMuOTIwMUMxMDcuODMyIDc0LjMwODMgMTA3LjU5NSA3NC42NDYzIDEwNy4yNiA3NC44NTk5TDg3LjA3IDg3Ljg1OTlDODYuODI4NiA4OC4wMTU5IDg2LjU0NzQgODguMDk5MiA4Ni4yNiA4OC4wOTk5Vjg4LjA5OTlaTTExOS40NyAxMDkuOUMxMTguNjc5IDEwOS45IDExNy45MDYgMTA5LjY2NSAxMTcuMjQ4IDEwOS4yMjZDMTE2LjU5IDEwOC43ODYgMTE2LjA3NyAxMDguMTYyIDExNS43NzQgMTA3LjQzMUMxMTUuNDcyIDEwNi43IDExNS4zOTMgMTA1Ljg5NSAxMTUuNTQ3IDEwNS4xMkMxMTUuNzAxIDEwNC4zNDQgMTE2LjA4MiAxMDMuNjMxIDExNi42NDIgMTAzLjA3MUMxMTcuMjAxIDEwMi41MTIgMTE3LjkxNCAxMDIuMTMxIDExOC42OSAxMDEuOTc3QzExOS40NjYgMTAxLjgyMiAxMjAuMjcgMTAxLjkwMiAxMjEuMDAxIDEwMi4yMDRDMTIxLjczMiAxMDIuNTA3IDEyMi4zNTYgMTAzLjAyIDEyMi43OTYgMTAzLjY3OEMxMjMuMjM1IDEwNC4zMzUgMTIzLjQ3IDEwNS4xMDkgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDYuOTYxIDEyMy4wNDkgMTA3Ljk3OCAxMjIuMjk4IDEwOC43MjhDMTIxLjU0OCAxMDkuNDc4IDEyMC41MzEgMTA5LjkgMTE5LjQ3IDEwOS45Wk0xMDYuNDcgMTE3LjlDMTA1LjY3OSAxMTcuOSAxMDQuOTA2IDExNy42NjUgMTA0LjI0OCAxMTcuMjI2QzEwMy41OSAxMTYuNzg2IDEwMy4wNzcgMTE2LjE2MiAxMDIuNzc0IDExNS40MzFDMTAyLjQ3MiAxMTQuNyAxMDIuMzkzIDExMy44OTUgMTAyLjU0NyAxMTMuMTJDMTAyLjcwMSAxMTIuMzQ0IDEwMy4wODIgMTExLjYzMSAxMDMuNjQyIDExMS4wNzFDMTA0LjIwMSAxMTAuNTEyIDEwNC45MTQgMTEwLjEzMSAxMDUuNjkgMTA5Ljk3N0MxMDYuNDY2IDEwOS44MjIgMTA3LjI3IDEwOS45MDIgMTA4LjAwMSAxMTAuMjA0QzEwOC43MzIgMTEwLjUwNyAxMDkuMzU2IDExMS4wMiAxMDkuNzk2IDExMS42NzhDMTEwLjIzNSAxMTIuMzM1IDExMC40NyAxMTMuMTA5IDExMC40NyAxMTMuOUMxMTAuNDcgMTE0Ljk2MSAxMTAuMDQ5IDExNS45NzggMTA5LjI5OCAxMTYuNzI4QzEwOC41NDggMTE3LjQ3OCAxMDcuNTMxIDExNy45IDEwNi40NyAxMTcuOVpNOTIuNDcgMTI1LjlDOTEuNjc4OSAxMjUuOSA5MC45MDU1IDEyNS42NjUgOTAuMjQ3NyAxMjUuMjI2Qzg5LjU4OTkgMTI0Ljc4NiA4OS4wNzcyIDEyNC4xNjIgODguNzc0NSAxMjMuNDMxQzg4LjQ3MTcgMTIyLjcgODguMzkyNSAxMjEuODk1IDg4LjU0NjkgMTIxLjEyQzg4LjcwMTIgMTIwLjM0NCA4OS4wODIyIDExOS42MzEgODkuNjQxNiAxMTkuMDcxQzkwLjIwMSAxMTguNTEyIDkwLjkxMzcgMTE4LjEzMSA5MS42ODk2IDExNy45NzdDOTIuNDY1NiAxMTcuODIyIDkzLjI2OTggMTE3LjkwMiA5NC4wMDA3IDExOC4yMDRDOTQuNzMxNiAxMTguNTA3IDk1LjM1NjMgMTE5LjAyIDk1Ljc5NTkgMTE5LjY3OEM5Ni4yMzU0IDEyMC4zMzUgOTYuNDcgMTIxLjEwOSA5Ni40NyAxMjEuOUM5Ni40NyAxMjIuOTYxIDk2LjA0ODYgMTIzLjk3OCA5NS4yOTg0IDEyNC43MjhDOTQuNTQ4MyAxMjUuNDc4IDkzLjUzMDkgMTI1LjkgOTIuNDcgMTI1LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyLjQ3IDEyNS40Qzk0LjQwMyAxMjUuNCA5NS45NyAxMjMuODMzIDk1Ljk3IDEyMS45Qzk1Ljk3IDExOS45NjcgOTQuNDAzIDExOC40IDkyLjQ3IDExOC40QzkwLjUzNyAxMTguNCA4OC45NyAxMTkuOTY3IDg4Ljk3IDEyMS45Qzg4Ljk3IDEyMy44MzMgOTAuNTM3IDEyNS40IDkyLjQ3IDEyNS40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMTguOUM5My4wNjMzIDExOC45IDkzLjY0MzMgMTE5LjA3NiA5NC4xMzY3IDExOS40MDVDOTQuNjMgMTE5LjczNSA5NS4wMTQ1IDEyMC4yMDQgOTUuMjQxNiAxMjAuNzUyQzk1LjQ2ODcgMTIxLjMgOTUuNTI4MSAxMjEuOTAzIDk1LjQxMjMgMTIyLjQ4NUM5NS4yOTY2IDEyMy4wNjcgOTUuMDEwOSAxMjMuNjAyIDk0LjU5MTMgMTI0LjAyMUM5NC4xNzE3IDEyNC40NDEgOTMuNjM3MiAxMjQuNzI2IDkzLjA1NTIgMTI0Ljg0MkM5Mi40NzMzIDEyNC45NTggOTEuODcwMSAxMjQuODk5IDkxLjMyMTkgMTI0LjY3MkM5MC43NzM3IDEyNC40NDQgOTAuMzA1MiAxMjQuMDYgODkuOTc1NiAxMjMuNTY3Qzg5LjY0NTkgMTIzLjA3MyA4OS40NyAxMjIuNDkzIDg5LjQ3IDEyMS45Qzg5LjQ3IDEyMS4xMDQgODkuNzg2IDEyMC4zNDEgOTAuMzQ4NyAxMTkuNzc5QzkwLjkxMTMgMTE5LjIxNiA5MS42NzQzIDExOC45IDkyLjQ3IDExOC45VjExOC45Wk05Mi40NyAxMTcuOUM5MS42Nzg4IDExNy45IDkwLjkwNTUgMTE4LjEzNCA5MC4yNDc3IDExOC41NzRDODkuNTg5OSAxMTkuMDE0IDg5LjA3NzIgMTE5LjYzOCA4OC43NzQ1IDEyMC4zNjlDODguNDcxNyAxMjEuMSA4OC4zOTI1IDEyMS45MDQgODguNTQ2OCAxMjIuNjhDODguNzAxMiAxMjMuNDU2IDg5LjA4MjEgMTI0LjE2OSA4OS42NDE1IDEyNC43MjhDOTAuMjAxIDEyNS4yODggOTAuOTEzNyAxMjUuNjY5IDkxLjY4OTYgMTI1LjgyM0M5Mi40NjU1IDEyNS45NzcgOTMuMjY5OCAxMjUuODk4IDk0LjAwMDcgMTI1LjU5NUM5NC43MzE2IDEyNS4yOTMgOTUuMzU2MyAxMjQuNzggOTUuNzk1OCAxMjQuMTIyQzk2LjIzNTQgMTIzLjQ2NCA5Ni40NyAxMjIuNjkxIDk2LjQ3IDEyMS45Qzk2LjQ3IDEyMC44MzkgOTYuMDQ4NSAxMTkuODIyIDk1LjI5ODQgMTE5LjA3MUM5NC41NDgzIDExOC4zMjEgOTMuNTMwOCAxMTcuOSA5Mi40NyAxMTcuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNODYuMjYgODcuNkM4Ni4wOTI3IDg3LjU5OTcgODUuOTI4MSA4Ny41NTc0IDg1Ljc4MTQgODcuNDc3MUM4NS42MzQ2IDg3LjM5NjcgODUuNTEwNCA4Ny4yODA4IDg1LjQyIDg3LjE0TDg0LjY1IDg2Qzg0LjU3OTEgODUuODg4MiA4NC41MzExIDg1Ljc2MzUgODQuNTA4OCA4NS42MzNDODQuNDg2NSA4NS41MDI1IDg0LjQ5MDMgODUuMzY4OSA4NC41MiA4NS4yNEM4NC41NzY5IDg0Ljk4NTEgODQuNzMxMiA4NC43NjI2IDg0Ljk1IDg0LjYyTDEwNS4xNSA3MS42MkMxMDUuMzExIDcxLjUxNiAxMDUuNDk4IDcxLjQ2MDUgMTA1LjY5IDcxLjQ2QzEwNS44NTcgNzEuNDYwMiAxMDYuMDIyIDcxLjUwMjUgMTA2LjE2OSA3MS41ODI5QzEwNi4zMTUgNzEuNjYzMiAxMDYuNDQgNzEuNzc5MSAxMDYuNTMgNzEuOTJMMTA3LjMgNzMuMTFDMTA3LjQ0MSA3My4zMzMxIDEwNy40ODcgNzMuNjAyNiAxMDcuNDMgNzMuODZDMTA3LjM3MSA3NC4xMTY1IDEwNy4yMTMgNzQuMzM5MyAxMDYuOTkgNzQuNDhMODYuOCA4Ny40OEM4Ni42MzQ5IDg3LjU2OTkgODYuNDQ3NyA4Ny42MTE1IDg2LjI2IDg3LjZaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNS42OSA3MS45Mzk5QzEwNS43NzQgNzEuOTM5MSAxMDUuODU3IDcxLjk1OTkgMTA1LjkzIDcyLjAwMDFDMTA2LjAwNCA3Mi4wNDA0IDEwNi4wNjYgNzIuMDk4OSAxMDYuMTEgNzIuMTY5OUwxMDYuODggNzMuMzU5OUMxMDYuOTQ4IDczLjQ3MDQgMTA2Ljk3IDczLjYwMzUgMTA2Ljk0IDczLjcyOTlDMTA2LjkxIDczLjg2MDYgMTA2LjgzMSA3My45NzUgMTA2LjcyIDc0LjA0OTlMODYuNTIgODYuOTk5OUM4Ni40NDE2IDg3LjA0ODQgODYuMzUyMSA4Ny4wNzU5IDg2LjI2IDg3LjA3OTlDODYuMTc1MyA4Ny4wNzk3IDg2LjA5MiA4Ny4wNTc1IDg2LjAxODQgODcuMDE1NEM4NS45NDQ3IDg2Ljk3MzMgODUuODgzMyA4Ni45MTI5IDg1Ljg0IDg2LjgzOTlMODUuMDcgODUuNjU5OUM4NS4wMDI5IDg1LjU1MjggODQuOTc3OSA4NS40MjQ1IDg1IDg1LjI5OTlDODUuMDA5NCA4NS4yMzU4IDg1LjAzMzIgODUuMTc0NiA4NS4wNjk1IDg1LjEyMDlDODUuMTA1OSA4NS4wNjcyIDg1LjE1MzkgODUuMDIyNCA4NS4yMSA4NC45ODk5TDEwNS40MSA3MS45ODk5QzEwNS40OTIgNzEuOTQxNSAxMDUuNTg1IDcxLjkxNzIgMTA1LjY4IDcxLjkxOTlMMTA1LjY5IDcxLjkzOTlaTTEwNS42OCA3MC45MTk5QzEwNS4zOTIgNzAuOTE1OSAxMDUuMTA5IDcwLjk5OTYgMTA0Ljg3IDcxLjE1OTlMODQuNjcgODQuMTU5OUM4NC4zMzg0IDg0LjM3NjkgODQuMTA1MyA4NC43MTU1IDg0LjAyMTIgODUuMTAyOEM4My45MzcgODUuNDkgODQuMDA4NCA4NS44OTQ5IDg0LjIyIDg2LjIyOTlMODUgODcuNDA5OUM4NS4xMDU3IDg3LjU3NjIgODUuMjQzMyA4Ny43MTk5IDg1LjQwNDggODcuODMyN0M4NS41NjYzIDg3Ljk0NTQgODUuNzQ4NiA4OC4wMjUgODUuOTQxMSA4OC4wNjY5Qzg2LjEzMzcgODguMTA4NyA4Ni4zMzI1IDg4LjExMiA4Ni41MjYzIDg4LjA3NjVDODYuNzIwMSA4OC4wNDA5IDg2LjkwNDkgODcuOTY3NCA4Ny4wNyA4Ny44NTk5TDEwNy4yNiA3NC44NTk5QzEwNy41OTUgNzQuNjQ2MyAxMDcuODMyIDc0LjMwODMgMTA3LjkxOSA3My45MjAyQzEwOC4wMDUgNzMuNTMyIDEwNy45MzMgNzMuMTI1NSAxMDcuNzIgNzIuNzg5OUwxMDcgNzEuNjI5OUMxMDYuODY1IDcxLjQxODEgMTA2LjY3OSA3MS4yNDM3IDEwNi40NTkgNzEuMTIzMUMxMDYuMjM4IDcxLjAwMjQgMTA1Ljk5MSA3MC45Mzk0IDEwNS43NCA3MC45Mzk5TDEwNS42OCA3MC45MTk5WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTE3LjRDMTA4LjQwMyAxMTcuNCAxMDkuOTcgMTE1LjgzMyAxMDkuOTcgMTEzLjlDMTA5Ljk3IDExMS45NjcgMTA4LjQwMyAxMTAuNCAxMDYuNDcgMTEwLjRDMTA0LjUzNyAxMTAuNCAxMDIuOTcgMTExLjk2NyAxMDIuOTcgMTEzLjlDMTAyLjk3IDExNS44MzMgMTA0LjUzNyAxMTcuNCAxMDYuNDcgMTE3LjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNi40NyAxMTAuOUMxMDcuMDYzIDExMC45IDEwNy42NDMgMTExLjA3NiAxMDguMTM3IDExMS40MDVDMTA4LjYzIDExMS43MzUgMTA5LjAxNSAxMTIuMjA0IDEwOS4yNDIgMTEyLjc1MkMxMDkuNDY5IDExMy4zIDEwOS41MjggMTEzLjkwMyAxMDkuNDEyIDExNC40ODVDMTA5LjI5NyAxMTUuMDY3IDEwOS4wMTEgMTE1LjYwMiAxMDguNTkxIDExNi4wMjFDMTA4LjE3MiAxMTYuNDQxIDEwNy42MzcgMTE2LjcyNiAxMDcuMDU1IDExNi44NDJDMTA2LjQ3MyAxMTYuOTU4IDEwNS44NyAxMTYuODk5IDEwNS4zMjIgMTE2LjY3MkMxMDQuNzc0IDExNi40NDQgMTA0LjMwNSAxMTYuMDYgMTAzLjk3NiAxMTUuNTY3QzEwMy42NDYgMTE1LjA3MyAxMDMuNDcgMTE0LjQ5MyAxMDMuNDcgMTEzLjlDMTAzLjQ3IDExMy4xMDQgMTAzLjc4NiAxMTIuMzQxIDEwNC4zNDkgMTExLjc3OUMxMDQuOTExIDExMS4yMTYgMTA1LjY3NCAxMTAuOSAxMDYuNDcgMTEwLjlWMTEwLjlaTTEwNi40NyAxMDkuOUMxMDUuNjc5IDEwOS45IDEwNC45MDUgMTEwLjEzNCAxMDQuMjQ4IDExMC41NzRDMTAzLjU5IDExMS4wMTQgMTAzLjA3NyAxMTEuNjM4IDEwMi43NzQgMTEyLjM2OUMxMDIuNDcyIDExMy4xIDEwMi4zOTIgMTEzLjkwNCAxMDIuNTQ3IDExNC42OEMxMDIuNzAxIDExNS40NTYgMTAzLjA4MiAxMTYuMTY5IDEwMy42NDIgMTE2LjcyOEMxMDQuMjAxIDExNy4yODggMTA0LjkxNCAxMTcuNjY5IDEwNS42OSAxMTcuODIzQzEwNi40NjYgMTE3Ljk3NyAxMDcuMjcgMTE3Ljg5OCAxMDguMDAxIDExNy41OTVDMTA4LjczMiAxMTcuMjkzIDEwOS4zNTYgMTE2Ljc4IDEwOS43OTYgMTE2LjEyMkMxMTAuMjM1IDExNS40NjQgMTEwLjQ3IDExNC42OTEgMTEwLjQ3IDExMy45QzExMC40NyAxMTIuODM5IDExMC4wNDkgMTExLjgyMiAxMDkuMjk4IDExMS4wNzFDMTA4LjU0OCAxMTAuMzIxIDEwNy41MzEgMTA5LjkgMTA2LjQ3IDEwOS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTA5LjRDMTIxLjQwMyAxMDkuNCAxMjIuOTcgMTA3LjgzMyAxMjIuOTcgMTA1LjlDMTIyLjk3IDEwMy45NjcgMTIxLjQwMyAxMDIuNCAxMTkuNDcgMTAyLjRDMTE3LjUzNyAxMDIuNCAxMTUuOTcgMTAzLjk2NyAxMTUuOTcgMTA1LjlDMTE1Ljk3IDEwNy44MzMgMTE3LjUzNyAxMDkuNCAxMTkuNDcgMTA5LjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDIuOUMxMjAuMDYzIDEwMi45IDEyMC42NDMgMTAzLjA3NiAxMjEuMTM3IDEwMy40MDVDMTIxLjYzIDEwMy43MzUgMTIyLjAxNSAxMDQuMjA0IDEyMi4yNDIgMTA0Ljc1MkMxMjIuNDY5IDEwNS4zIDEyMi41MjggMTA1LjkwMyAxMjIuNDEyIDEwNi40ODVDMTIyLjI5NyAxMDcuMDY3IDEyMi4wMTEgMTA3LjYwMiAxMjEuNTkxIDEwOC4wMjFDMTIxLjE3MiAxMDguNDQxIDEyMC42MzcgMTA4LjcyNiAxMjAuMDU1IDEwOC44NDJDMTE5LjQ3MyAxMDguOTU4IDExOC44NyAxMDguODk5IDExOC4zMjIgMTA4LjY3MkMxMTcuNzc0IDEwOC40NDQgMTE3LjMwNSAxMDguMDYgMTE2Ljk3NiAxMDcuNTY3QzExNi42NDYgMTA3LjA3MyAxMTYuNDcgMTA2LjQ5MyAxMTYuNDcgMTA1LjlDMTE2LjQ3IDEwNS4xMDQgMTE2Ljc4NiAxMDQuMzQxIDExNy4zNDkgMTAzLjc3OUMxMTcuOTExIDEwMy4yMTYgMTE4LjY3NCAxMDIuOSAxMTkuNDcgMTAyLjlWMTAyLjlaTTExOS40NyAxMDEuOUMxMTguNjc5IDEwMS45IDExNy45MDUgMTAyLjEzNCAxMTcuMjQ4IDEwMi41NzRDMTE2LjU5IDEwMy4wMTQgMTE2LjA3NyAxMDMuNjM4IDExNS43NzQgMTA0LjM2OUMxMTUuNDcyIDEwNS4xIDExNS4zOTIgMTA1LjkwNCAxMTUuNTQ3IDEwNi42OEMxMTUuNzAxIDEwNy40NTYgMTE2LjA4MiAxMDguMTY5IDExNi42NDIgMTA4LjcyOEMxMTcuMjAxIDEwOS4yODggMTE3LjkxNCAxMDkuNjY5IDExOC42OSAxMDkuODIzQzExOS40NjYgMTA5Ljk3NyAxMjAuMjcgMTA5Ljg5OCAxMjEuMDAxIDEwOS41OTVDMTIxLjczMiAxMDkuMjkzIDEyMi4zNTYgMTA4Ljc4IDEyMi43OTYgMTA4LjEyMkMxMjMuMjM1IDEwNy40NjQgMTIzLjQ3IDEwNi42OTEgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDQuODM5IDEyMy4wNDkgMTAzLjgyMiAxMjIuMjk4IDEwMy4wNzFDMTIxLjU0OCAxMDIuMzIxIDEyMC41MzEgMTAxLjkgMTE5LjQ3IDEwMS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi4zNCAxNi42N0w2MS4wNyAzNi45TDMyLjQ3IDU1LjRMMS4wMTAwMSAzNy4yMUwxLjU2MDAxIDM2LjlMNjQuNDcgMC41Nzk5NTZMOTIuMzQgMTYuNjdaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMS41NjAwMSAzNi44OTk5TDEuMDEwMDEgMzcuMjA5OVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyNy40MyAzNi45Mjk5TDY0LjQ3IDczLjg5OTlMMzIuNDcgNTUuMzk5OUw2MS4wNyAzNi44OTk5TDkyLjM0IDE2LjY2OTlMMTI3LjM4IDM2Ljg5OTlMMTI3LjQzIDM2LjkyOTlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjQuNDcgNzMuODk5OVYxNDYuOVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIzXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNi40NyAxMTcuOUMxMDguNjc5IDExNy45IDExMC40NyAxMTYuMTA5IDExMC40NyAxMTMuOUMxMTAuNDcgMTExLjY5MSAxMDguNjc5IDEwOS45IDEwNi40NyAxMDkuOUMxMDQuMjYxIDEwOS45IDEwMi40NyAxMTEuNjkxIDEwMi40NyAxMTMuOUMxMDIuNDcgMTE2LjEwOSAxMDQuMjYxIDExNy45IDEwNi40NyAxMTcuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMjUuOUM5NC42NzkxIDEyNS45IDk2LjQ3IDEyNC4xMDkgOTYuNDcgMTIxLjlDOTYuNDcgMTE5LjY5MSA5NC42NzkxIDExNy45IDkyLjQ3IDExNy45QzkwLjI2MDggMTE3LjkgODguNDcgMTE5LjY5MSA4OC40NyAxMjEuOUM4OC40NyAxMjQuMTA5IDkwLjI2MDggMTI1LjkgOTIuNDcgMTI1LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwOS45QzEyMS42NzkgMTA5LjkgMTIzLjQ3IDEwOC4xMDkgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDMuNjkxIDEyMS42NzkgMTAxLjkgMTE5LjQ3IDEwMS45QzExNy4yNjEgMTAxLjkgMTE1LjQ3IDEwMy42OTEgMTE1LjQ3IDEwNS45QzExNS40NyAxMDguMTA5IDExNy4yNjEgMTA5LjkgMTE5LjQ3IDEwOS45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyOC40MVwiIGhlaWdodD1cIjE0Ny4yMlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZnVuY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
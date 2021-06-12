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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\Header.js";




const Header = () => {
  const {
    isLogin,
    handleSignout
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 64
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 40
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, undefined), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      onClick: handleSignout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 75
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 143
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 123
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 100
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderBar.js":
/*!*********************************!*\
  !*** ./components/HeaderBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\HeaderBar.js";




const HeaderBar = () => {
  const {
    isLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header-bar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 64
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 40
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, undefined), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 33
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 88
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 83
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderBar */ "./components/HeaderBar.js");

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\Layout.js";






const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, undefined), props.children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const AuthContextProvider = props => {
  const {
    0: isLogin,
    1: setisLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: sessionToken,
    1: setSessionToken
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
    0: authenticate,
    1: setAuthenticate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: authenticating,
    1: setAuthenticating
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(user => {
      user == null ? setisLogin(false) : setisLogin(true);
    });
  }, []);

  const signout = async e => {
    e.preventDefault();
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/signout').catch(function (error) {
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
    localStorage.clear();
    router.replace('/login');
  };

  const handleLoginChange = e => {
    const {
      name,
      value
    } = e.target;
    const {
      formErrors
    } = login;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_3__["loginValidate"])(name, value, formErrors);

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
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_3__["singupValidate"])(name, value, formErrors);

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
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].createUserWithEmailAndPassword(email, password).then(cred => {
      return _firebase__WEBPACK_IMPORTED_MODULE_5__["database"].collection('Profile').doc(cred.user.uid).set({
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

  const handleSignout = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    } = signup;
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signOut();
  };

  const handleSocialLogin = e => {
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_5__["provider"]).then(() => {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    setAuthenticating(true);
    const {
      email,
      password
    } = login;
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signInWithEmailAndPassword(email, password).then(() => {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  const handleAdminSubmit = async e => {
    e.preventDefault();
    setAuthenticating(true);
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/admin/signin', login).catch(function (error) {
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

    if (res && res.status == 200) {
      setAuthenticating(false);
      setAuthenticate(true);
      setisLogin(true);
      const {
        token,
        user
      } = res.data;
      localStorage.setItem('token', token);
      let message = "welcome";
      setSuccess(_objectSpread(_objectSpread({}, success), {}, {
        message,
        token,
        user
      }));
      router.replace('/contact');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      sessionToken,
      signout,
      setSessionToken,
      login,
      signup,
      isLogin,
      setisLogin,
      handleLoginChange,
      handleSocialLogin,
      handleSignupChange,
      handleSignout,
      handleSignupSubmit,
      handleLoginSubmit,
      handleAdminSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

/***/ }),

/***/ "./components/context/ClientContext.js":
/*!*********************************************!*\
  !*** ./components/context/ClientContext.js ***!
  \*********************************************/
/*! exports provided: ClientContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientContext", function() { return ClientContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\ClientContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ClientContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const ClientContextProvider = props => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    profileImage: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    }
  };
  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: profileImage,
    1: setProfileImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: temporaryImage,
    1: setTemporaryImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: transaction,
    1: setTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].onAuthStateChanged(user => {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_3__["database"].collection('Profile').doc(user.uid).get().then(doc => setData(doc.data()));
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const data = [];
    _firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].onAuthStateChanged(user => {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_3__["database"].collection('Requests').where("userId", "==", user.uid).onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          let documents = doc.data();
          let id = doc.id;
          data.push({
            documents,
            id
          });
        });
      });
    });
    setTransaction(data);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      formErrors
    } = initialState;
    data !== undefined && setProfile(_objectSpread(_objectSpread({}, data), {}, {
      formErrors
    }));
  }, [data]);
  console.log(transaction);

  const handleProfileChange = e => {
    e.preventDefault();

    if (e.target.files) {
      let selected = e.target.files[0];
      let types = ['image/jpeg', 'image/png'];
      let fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      let FileSize = "5000000";
      let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      let hold = filteredImageSize == true && URL.createObjectURL(selected);
      hold !== undefined && setTemporaryImage(hold);

      if (filteredImageSize == true) {
        const storageRef = _firebase__WEBPACK_IMPORTED_MODULE_3__["store"].ref(`profileimages/${selected.name}`);
        storageRef.put(selected).on('state_changed', async snap => {
          const newPercentage = (await (snap.bytesTransferred / snap.totalBytes)) * 100;
          await setProgress(newPercentage);
        }, async err => {
          await setError(err);
        }, async () => {
          const newUrl = await storageRef.getDownloadURL();
          await setProfileImage(newUrl);
        });
      }

      URL.revokeObjectURL(selected);
    }
  };

  const profileDetails = e => {
    e.preventDefault();
    const {
      name,
      value
    } = e.target;

    let {
      formErrors
    } = _objectSpread({}, profile);

    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_2__["profileValidate"])(name, value, formErrors);
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      [name]: value
    }));
  };

  const handleProfileSubmit = async e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      profileImage
    } = profile;
    _firebase__WEBPACK_IMPORTED_MODULE_3__["database"].collection('Profile').add({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      profileImage
    });
  };

  const handleProfilePreview = e => {
    e.preventDefault();
    setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      profileImage
    }));
    setCount('active');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClientContext.Provider, {
    value: {
      transaction,
      setTransaction,
      handleProfileChange,
      handleProfilePreview,
      handleProfileSubmit,
      profile,
      setProfile,
      setTemporaryImage,
      temporaryImage,
      profileDetails,
      profileImage,
      setProfileImage,
      count,
      setCount
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ClientContextProvider);

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

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js";

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

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
    _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].onAuthStateChanged(user => {
      user !== null;
      setUserId(user.uid);
    });
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
    lineNumber: 173,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store, database, auth, timestamp, provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);




const firebaseConfig = {
  apiKey: "AIzaSyACIDeiqQIHextjTi28NVDmh5hWHahuiNE",
  authDomain: "mayor-db13a.firebaseapp.com",
  databaseURL: "https://mayor-db13a.firebaseio.com",
  projectId: "mayor-db13a",
  storageBucket: "mayor-db13a.appspot.com",
  messagingSenderId: "22905502977",
  appId: "1:22905502977:web:248fd426a1ce4497336f00"
};
const firebaseApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();

if (false) {}

const store = firebaseApp.storage();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.FieldValue.serverTimestamp;
const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();


/***/ }),

/***/ "./components/validator/validate.js":
/*!******************************************!*\
  !*** ./components/validator/validate.js ***!
  \******************************************/
/*! exports provided: emailRegex, profileValidate, requestValidate, loginValidate, singupValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRegex", function() { return emailRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileValidate", function() { return profileValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestValidate", function() { return requestValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginValidate", function() { return loginValidate; });
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
const loginValidate = (name, value, formErrors) => {
  switch (name) {
    case "email":
      formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '*input a valid email address*';
      break;

    case "password":
      formErrors.password = value.length < 6 && value.length > 0 ? '*password is too short*' : '';
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

/***/ "./helpers/axios.js":
/*!**************************!*\
  !*** ./helpers/axios.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urlConfig */ "./urlConfig.js");


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"]
});
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

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

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Main CSS




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./svg.js":
/*!****************!*\
  !*** ./svg.js ***!
  \****************/
/*! exports provided: box, profile, transaction, avatar, upload, contact, message, gallery, checkMark, close, Google, Back, Loader, offBack */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBack", function() { return offBack; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\svg.js";
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
        lineNumber: 122,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127 38.3599V110L64.5 146.08L2 110V38.9199L32 56.2599L64 74.7599L64.5 75.0499L65 74.7599L127 38.3599V38.3599ZM86.26 89.0999C86.7392 89.0998 87.2081 88.9609 87.61 88.6999L107.79 75.6999C108.068 75.5263 108.309 75.2989 108.497 75.031C108.686 74.7631 108.82 74.4601 108.89 74.1399C108.964 73.8171 108.972 73.483 108.916 73.1568C108.859 72.8306 108.738 72.519 108.56 72.2399L107.79 71.0599C107.565 70.7072 107.254 70.4169 106.887 70.2159C106.52 70.0149 106.108 69.9097 105.69 69.9099C105.211 69.9089 104.741 70.0479 104.34 70.3099L84.14 83.3099C83.5831 83.6705 83.1916 84.2368 83.0511 84.8852C82.9105 85.5335 83.0324 86.2111 83.39 86.7699L84.15 87.9499C84.3756 88.3053 84.6873 88.5979 85.0561 88.8007C85.425 89.0035 85.8391 89.1098 86.26 89.1099V89.0999ZM119.47 110.91C120.459 110.91 121.426 110.617 122.248 110.067C123.07 109.518 123.711 108.737 124.089 107.823C124.468 106.91 124.567 105.904 124.374 104.934C124.181 103.965 123.705 103.074 123.006 102.374C122.306 101.675 121.415 101.199 120.445 101.006C119.476 100.813 118.47 100.912 117.557 101.291C116.643 101.669 115.862 102.31 115.313 103.132C114.763 103.954 114.47 104.921 114.47 105.91C114.47 107.236 114.997 108.508 115.934 109.445C116.872 110.383 118.144 110.91 119.47 110.91V110.91ZM106.47 118.91C107.459 118.91 108.426 118.617 109.248 118.067C110.07 117.518 110.711 116.737 111.089 115.823C111.468 114.91 111.567 113.904 111.374 112.934C111.181 111.965 110.705 111.074 110.006 110.374C109.306 109.675 108.415 109.199 107.445 109.006C106.476 108.813 105.47 108.912 104.557 109.291C103.643 109.669 102.862 110.31 102.313 111.132C101.763 111.954 101.47 112.921 101.47 113.91C101.47 115.236 101.997 116.508 102.934 117.445C103.872 118.383 105.144 118.91 106.47 118.91V118.91ZM92.47 126.91C93.4589 126.91 94.4256 126.617 95.2478 126.067C96.0701 125.518 96.711 124.737 97.0894 123.823C97.4678 122.91 97.5669 121.904 97.3739 120.934C97.181 119.965 96.7048 119.074 96.0055 118.374C95.3063 117.675 94.4154 117.199 93.4454 117.006C92.4755 116.813 91.4702 116.912 90.5566 117.291C89.6429 117.669 88.8621 118.31 88.3127 119.132C87.7632 119.954 87.47 120.921 87.47 121.91C87.47 123.236 87.9968 124.508 88.9345 125.445C89.8721 126.383 91.1439 126.91 92.47 126.91ZM127.47 36.9099L64.47 73.9099L32.47 55.4099L1 37.2099V110.53L64.5 147.19L128 110.56V37.2399L127.46 36.9299L127.47 36.9099ZM86.26 88.0999C86.0088 88.1004 85.7616 88.0374 85.5414 87.9168C85.3211 87.7962 85.1348 87.6218 85 87.4099L84.23 86.2199C84.0184 85.8849 83.9469 85.48 84.0311 85.0928C84.1153 84.7055 84.3484 84.3669 84.68 84.1499L104.88 71.1499C105.119 70.9896 105.402 70.9059 105.69 70.9099C105.941 70.9094 106.188 70.9724 106.409 71.093C106.629 71.2137 106.815 71.388 106.95 71.5999L107.72 72.7899C107.933 73.1255 108.005 73.532 107.918 73.9201C107.832 74.3083 107.595 74.6463 107.26 74.8599L87.07 87.8599C86.8286 88.0159 86.5474 88.0992 86.26 88.0999V88.0999ZM119.47 109.9C118.679 109.9 117.906 109.665 117.248 109.226C116.59 108.786 116.077 108.162 115.774 107.431C115.472 106.7 115.393 105.895 115.547 105.12C115.701 104.344 116.082 103.631 116.642 103.071C117.201 102.512 117.914 102.131 118.69 101.977C119.466 101.822 120.27 101.902 121.001 102.204C121.732 102.507 122.356 103.02 122.796 103.678C123.235 104.335 123.47 105.109 123.47 105.9C123.47 106.961 123.049 107.978 122.298 108.728C121.548 109.478 120.531 109.9 119.47 109.9ZM106.47 117.9C105.679 117.9 104.906 117.665 104.248 117.226C103.59 116.786 103.077 116.162 102.774 115.431C102.472 114.7 102.393 113.895 102.547 113.12C102.701 112.344 103.082 111.631 103.642 111.071C104.201 110.512 104.914 110.131 105.69 109.977C106.466 109.822 107.27 109.902 108.001 110.204C108.732 110.507 109.356 111.02 109.796 111.678C110.235 112.335 110.47 113.109 110.47 113.9C110.47 114.961 110.049 115.978 109.298 116.728C108.548 117.478 107.531 117.9 106.47 117.9ZM92.47 125.9C91.6789 125.9 90.9055 125.665 90.2477 125.226C89.5899 124.786 89.0772 124.162 88.7745 123.431C88.4717 122.7 88.3925 121.895 88.5469 121.12C88.7012 120.344 89.0822 119.631 89.6416 119.071C90.201 118.512 90.9137 118.131 91.6896 117.977C92.4656 117.822 93.2698 117.902 94.0007 118.204C94.7316 118.507 95.3563 119.02 95.7959 119.678C96.2354 120.335 96.47 121.109 96.47 121.9C96.47 122.961 96.0486 123.978 95.2984 124.728C94.5483 125.478 93.5309 125.9 92.47 125.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.4C94.403 125.4 95.97 123.833 95.97 121.9C95.97 119.967 94.403 118.4 92.47 118.4C90.537 118.4 88.97 119.967 88.97 121.9C88.97 123.833 90.537 125.4 92.47 125.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 118.9C93.0633 118.9 93.6433 119.076 94.1367 119.405C94.63 119.735 95.0145 120.204 95.2416 120.752C95.4687 121.3 95.5281 121.903 95.4123 122.485C95.2966 123.067 95.0109 123.602 94.5913 124.021C94.1717 124.441 93.6372 124.726 93.0552 124.842C92.4733 124.958 91.8701 124.899 91.3219 124.672C90.7737 124.444 90.3052 124.06 89.9756 123.567C89.6459 123.073 89.47 122.493 89.47 121.9C89.47 121.104 89.786 120.341 90.3487 119.779C90.9113 119.216 91.6743 118.9 92.47 118.9V118.9ZM92.47 117.9C91.6788 117.9 90.9055 118.134 90.2477 118.574C89.5899 119.014 89.0772 119.638 88.7745 120.369C88.4717 121.1 88.3925 121.904 88.5468 122.68C88.7012 123.456 89.0821 124.169 89.6415 124.728C90.201 125.288 90.9137 125.669 91.6896 125.823C92.4655 125.977 93.2698 125.898 94.0007 125.595C94.7316 125.293 95.3563 124.78 95.7958 124.122C96.2354 123.464 96.47 122.691 96.47 121.9C96.47 120.839 96.0485 119.822 95.2984 119.071C94.5483 118.321 93.5308 117.9 92.47 117.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M86.26 87.6C86.0927 87.5997 85.9281 87.5574 85.7814 87.4771C85.6346 87.3967 85.5104 87.2808 85.42 87.14L84.65 86C84.5791 85.8882 84.5311 85.7635 84.5088 85.633C84.4865 85.5025 84.4903 85.3689 84.52 85.24C84.5769 84.9851 84.7312 84.7626 84.95 84.62L105.15 71.62C105.311 71.516 105.498 71.4605 105.69 71.46C105.857 71.4602 106.022 71.5025 106.169 71.5829C106.315 71.6632 106.44 71.7791 106.53 71.92L107.3 73.11C107.441 73.3331 107.487 73.6026 107.43 73.86C107.371 74.1165 107.213 74.3393 106.99 74.48L86.8 87.48C86.6349 87.5699 86.4477 87.6115 86.26 87.6Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M105.69 71.9399C105.774 71.9391 105.857 71.9599 105.93 72.0001C106.004 72.0404 106.066 72.0989 106.11 72.1699L106.88 73.3599C106.948 73.4704 106.97 73.6035 106.94 73.7299C106.91 73.8606 106.831 73.975 106.72 74.0499L86.52 86.9999C86.4416 87.0484 86.3521 87.0759 86.26 87.0799C86.1753 87.0797 86.092 87.0575 86.0184 87.0154C85.9447 86.9733 85.8833 86.9129 85.84 86.8399L85.07 85.6599C85.0029 85.5528 84.9779 85.4245 85 85.2999C85.0094 85.2358 85.0332 85.1746 85.0695 85.1209C85.1059 85.0672 85.1539 85.0224 85.21 84.9899L105.41 71.9899C105.492 71.9415 105.585 71.9172 105.68 71.9199L105.69 71.9399ZM105.68 70.9199C105.392 70.9159 105.109 70.9996 104.87 71.1599L84.67 84.1599C84.3384 84.3769 84.1053 84.7155 84.0212 85.1028C83.937 85.49 84.0084 85.8949 84.22 86.2299L85 87.4099C85.1057 87.5762 85.2433 87.7199 85.4048 87.8327C85.5663 87.9454 85.7486 88.025 85.9411 88.0669C86.1337 88.1087 86.3325 88.112 86.5263 88.0765C86.7201 88.0409 86.9049 87.9674 87.07 87.8599L107.26 74.8599C107.595 74.6463 107.832 74.3083 107.919 73.9202C108.005 73.532 107.933 73.1255 107.72 72.7899L107 71.6299C106.865 71.4181 106.679 71.2437 106.459 71.1231C106.238 71.0024 105.991 70.9394 105.74 70.9399L105.68 70.9199Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.4C108.403 117.4 109.97 115.833 109.97 113.9C109.97 111.967 108.403 110.4 106.47 110.4C104.537 110.4 102.97 111.967 102.97 113.9C102.97 115.833 104.537 117.4 106.47 117.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 110.9C107.063 110.9 107.643 111.076 108.137 111.405C108.63 111.735 109.015 112.204 109.242 112.752C109.469 113.3 109.528 113.903 109.412 114.485C109.297 115.067 109.011 115.602 108.591 116.021C108.172 116.441 107.637 116.726 107.055 116.842C106.473 116.958 105.87 116.899 105.322 116.672C104.774 116.444 104.305 116.06 103.976 115.567C103.646 115.073 103.47 114.493 103.47 113.9C103.47 113.104 103.786 112.341 104.349 111.779C104.911 111.216 105.674 110.9 106.47 110.9V110.9ZM106.47 109.9C105.679 109.9 104.905 110.134 104.248 110.574C103.59 111.014 103.077 111.638 102.774 112.369C102.472 113.1 102.392 113.904 102.547 114.68C102.701 115.456 103.082 116.169 103.642 116.728C104.201 117.288 104.914 117.669 105.69 117.823C106.466 117.977 107.27 117.898 108.001 117.595C108.732 117.293 109.356 116.78 109.796 116.122C110.235 115.464 110.47 114.691 110.47 113.9C110.47 112.839 110.049 111.822 109.298 111.071C108.548 110.321 107.531 109.9 106.47 109.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.4C121.403 109.4 122.97 107.833 122.97 105.9C122.97 103.967 121.403 102.4 119.47 102.4C117.537 102.4 115.97 103.967 115.97 105.9C115.97 107.833 117.537 109.4 119.47 109.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 102.9C120.063 102.9 120.643 103.076 121.137 103.405C121.63 103.735 122.015 104.204 122.242 104.752C122.469 105.3 122.528 105.903 122.412 106.485C122.297 107.067 122.011 107.602 121.591 108.021C121.172 108.441 120.637 108.726 120.055 108.842C119.473 108.958 118.87 108.899 118.322 108.672C117.774 108.444 117.305 108.06 116.976 107.567C116.646 107.073 116.47 106.493 116.47 105.9C116.47 105.104 116.786 104.341 117.349 103.779C117.911 103.216 118.674 102.9 119.47 102.9V102.9ZM119.47 101.9C118.679 101.9 117.905 102.134 117.248 102.574C116.59 103.014 116.077 103.638 115.774 104.369C115.472 105.1 115.392 105.904 115.547 106.68C115.701 107.456 116.082 108.169 116.642 108.728C117.201 109.288 117.914 109.669 118.69 109.823C119.466 109.977 120.27 109.898 121.001 109.595C121.732 109.293 122.356 108.78 122.796 108.122C123.235 107.464 123.47 106.691 123.47 105.9C123.47 104.839 123.049 103.822 122.298 103.071C121.548 102.321 120.531 101.9 119.47 101.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.34 16.67L61.07 36.9L32.47 55.4L1.01001 37.21L1.56001 36.9L64.47 0.579956L92.34 16.67Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.56001 36.8999L1.01001 37.2099",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.43 36.9299L64.47 73.8999L32.47 55.3999L61.07 36.8999L92.34 16.6699L127.38 36.8999L127.43 36.9299Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M64.47 73.8999V146.9",
        stroke: "black",
        strokeWidth: "3",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.9C108.679 117.9 110.47 116.109 110.47 113.9C110.47 111.691 108.679 109.9 106.47 109.9C104.261 109.9 102.47 111.691 102.47 113.9C102.47 116.109 104.261 117.9 106.47 117.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.9C94.6791 125.9 96.47 124.109 96.47 121.9C96.47 119.691 94.6791 117.9 92.47 117.9C90.2608 117.9 88.47 119.691 88.47 121.9C88.47 124.109 90.2608 125.9 92.47 125.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.9C121.679 109.9 123.47 108.109 123.47 105.9C123.47 103.691 121.679 101.9 119.47 101.9C117.261 101.9 115.47 103.691 115.47 105.9C115.47 108.109 117.261 109.9 119.47 109.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
          lineNumber: 142,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "./urlConfig.js":
/*!**********************!*\
  !*** ./urlConfig.js ***!
  \**********************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
const baseUrl = "https://backend-logistics.herokuapp.com";
const api = `${baseUrl}/api`;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0b3IvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vdXJsQ29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJpc0xvZ2luIiwiaGFuZGxlU2lnbm91dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkhlYWRlckJhciIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsInNldGlzTG9naW4iLCJ1c2VTdGF0ZSIsInNlc3Npb25Ub2tlbiIsInNldFNlc3Npb25Ub2tlbiIsInNpZ251cCIsInNldFNpZ251cCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInBhc3N3b3JkIiwiZm9ybUVycm9ycyIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibWVzc2FnZSIsInRva2VuIiwidXNlciIsImZ1bGxOYW1lIiwicm9sZSIsIl9pZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWdub3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiYXhpb3MiLCJwb3N0IiwiY2F0Y2giLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiaGVhZGVycyIsInJlcXVlc3QiLCJjb25maWciLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGxhY2UiLCJoYW5kbGVMb2dpbkNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImxvZ2luVmFsaWRhdGUiLCJuZXdMb2dpbiIsImhhbmRsZVNpZ251cENoYW5nZSIsInNpbmd1cFZhbGlkYXRlIiwibmV3U2lnbnVwIiwiaGFuZGxlU2lnbnVwU3VibWl0IiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJzaWduT3V0IiwiaGFuZGxlU29jaWFsTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsImhhbmRsZUxvZ2luU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJoYW5kbGVBZG1pblN1Ym1pdCIsInNldEl0ZW0iLCJDbGllbnRDb250ZXh0IiwiQ2xpZW50Q29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFN0YXRlIiwiYWRkcmVzcyIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2V0RGF0YSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJjb3VudCIsInNldENvdW50IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJnZXQiLCJ3aGVyZSIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvY3VtZW50cyIsImlkIiwicHVzaCIsInVuZGVmaW5lZCIsImhhbmRsZVByb2ZpbGVDaGFuZ2UiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsIm5ld1BlcmNlbnRhZ2UiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVyciIsIm5ld1VybCIsImdldERvd25sb2FkVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwicHJvZmlsZURldGFpbHMiLCJwcm9maWxlVmFsaWRhdGUiLCJoYW5kbGVQcm9maWxlU3VibWl0IiwiYWRkIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJSZXF1ZXN0Q29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJjYXJ0b25zIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiLCJpdGVtc1dvcnRoIiwicmVjZWl2ZXJGaXJzdE5hbWUiLCJyZWNlaXZlclBob25lTnVtYmVyMSIsInJlY2VpdmVyUGhvbmVOdW1iZXIyIiwicmVxdWVzdEltYWdlcyIsInNlbmRlckZpcnN0TmFtZSIsInNlbmRlclBob25lTnVtYmVyMSIsInNlbmRlclBob25lTnVtYmVyMiIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiY3JlYXRlZEF0IiwiYW1vdW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJleHRyYWN0ZWRSZXF1ZXN0Iiwic2V0RXh0cmFjdGVkUmVxdWVzdCIsInNldFJlcXVlc3RJbWFnZXMiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJJZCIsInNldFVzZXJJZCIsImhhbmRsZUNoYW5nZSIsInJlcXVlc3RWYWxpZGF0ZSIsIm5ld0lucHV0IiwiaGFuZGxlQ2hlY2siLCJjaGVja2VkIiwicGhvdG9DaGFuZ2UiLCJwZXJmZWN0U2l6ZSIsInJlc3RydWN0dXJlVXJsIiwiaW1hZ2VTb3VyY2UiLCJjbG91ZFVybCIsImhhbmRsZUZvcm1TdWJtaXQiLCJ0aW1lc3RhbXAiLCJoYW5kbGVSZXF1ZXN0VXBkYXRlIiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZmlyZXN0b3JlIiwic3RvcmFnZSIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJlbWFpbFJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBpIiwicHJlZmV0Y2hlZCIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk15QXBwIiwiYm94IiwiYXZhdGFyIiwidXBsb2FkIiwiY2hlY2tNYXJrIiwiY2xvc2UiLCJHb29nbGUiLCJCYWNrIiwiTG9hZGVyIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7aXNMb2dpbiwgaGFuZGxlU2lnbm91dH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhPkc0IGxvZ2lzdGljczwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAge2lzTG9naW4/IDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIiBvbkNsaWNrPXtoYW5kbGVTaWdub3V0fT48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT4gbG9naW48L2E+PC9MaW5rPjwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgSGVhZGVyQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGE+RzQgbG9naXN0aWNzPC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICB7aXNMb2dpbj8gPGRpdj48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+IGxvZ2luPC9hPjwvTGluaz48L2Rpdj4gOiAgPGRpdj48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFyOyIsIiBpbXBvcnQgUmVxdWVzdENvbnRleHRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG4gaW1wb3J0IEF1dGhDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBDbGllbnRDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQgSGVhZGVyQmFyIGZyb20gJy4vSGVhZGVyQmFyJztcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2xpZW50Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJCYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DbGllbnRDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1JlcXVlc3RDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGUsIHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0ZSwgc2V0QXV0aGVudGljYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2F1dGhlbnRpY2F0aW5nLCBzZXRBdXRoZW50aWNhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgICB1c2VyOiB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgX2lkOiAnJ30gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgdXNlciA9PSBudWxsID8gc2V0aXNMb2dpbihmYWxzZSkgOiBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgY29uc3Qgc2lnbm91dCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvc2lnbm91dCcpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0e2Zvcm1FcnJvcnN9ID0gbG9naW47XHJcbiAgICAgICAgbG9naW5WYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdMb2dpbiA9IHsgLi4ubG9naW4sIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0TG9naW4obmV3TG9naW4pXHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSB7Li4uc2lnbnVwfVxyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzaW5ndXBWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgbGV0IG5ld1NpZ251cCA9IHsgLi4uc2lnbnVwLCBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNldFNpZ251cChuZXdTaWdudXApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cFN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihjcmVkID0+e1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2MoY3JlZC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXIsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICApLnRoZW4oKCk9PntcclxuICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkfSA9IHNpZ251cDtcclxuICAgICAgYXV0aC5zaWduT3V0KClcclxuICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvY2lhbExvZ2luID0gKGUpID0+IHtcclxuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKS50aGVuKCgpPT57XHJcbiAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCk9PntcclxuICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH07IFxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQWRtaW5TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbi9zaWduaW4nLCBsb2dpbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRlKHRydWUpO1xyXG4gICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICBjb25zdCB7dG9rZW4sIHVzZXJ9PSByZXMuZGF0YTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIndlbGNvbWVcIjtcclxuICAgICAgICBzZXRTdWNjZXNzKHsuLi5zdWNjZXNzLCBtZXNzYWdlLCB0b2tlbiwgdXNlcn0pO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvY29udGFjdCcpO1xyXG4gICAgICAgfVxyXG4gICAgICB9OyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzaWdub3V0LCBzZXRTZXNzaW9uVG9rZW4sIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTb2NpYWxMb2dpbiwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVTaWdub3V0LCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0LCBoYW5kbGVBZG1pblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcm9maWxlVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge2F1dGgsIHN0b3JlLCBkYXRhYmFzZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgcHJvZmlsZUltYWdlOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgIHVzZXIgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyh1c2VyLnVpZCkuZ2V0KCkudGhlbihkb2M9PlxyXG4gICAgICAgICAgc2V0RGF0YShkb2MuZGF0YSgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICAgICAgdXNlciAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdSZXF1ZXN0cycpXHJcbiAgICAgICAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG9jdW1lbnRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHtkb2N1bWVudHMsIGlkfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0VHJhbnNhY3Rpb24oZGF0YSk7XHJcbn0sIFtdKTtcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgZGF0YSAhPT0gdW5kZWZpbmVkICYmIHNldFByb2ZpbGUoey4uLmRhdGEsIGZvcm1FcnJvcnN9KVxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codHJhbnNhY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgICAgICAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKGhvbGQpO1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQge2Zvcm1FcnJvcnN9ID0gey4uLnByb2ZpbGV9XHJcblxyXG4gICAgcHJvZmlsZVZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgcmV0dXJuIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsICBbbmFtZV06IHZhbHVlfSkgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmVOdW1iZXIsIFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHByb2ZpbGVJbWFnZX09IHByb2ZpbGU7XHJcbiAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuYWRkKHtmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmVOdW1iZXIsIFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBwcm9maWxlSW1hZ2V9KVxyXG4gIH07IFxyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBwcm9maWxlSW1hZ2V9KTtcclxuICAgIHNldENvdW50KCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHthdXRoLCBzdG9yZSwgZGF0YWJhc2UsIHRpbWVzdGFtcH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgICAgICB7Y2FydG9uczogXCJcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwiXCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCJcIixcclxuICAgICAgICByZWNlaXZlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbXSxcclxuICAgICAgICBzZW5kZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICB0YWdOYW1lOiBcIlwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgXHJcblxyXG4gICAgY29uc3RbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSwgaWR9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICBjb25zdCBuZXdJbnB1dCA9IHsgLi4uaW5wdXQsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBwcm9ncmVzcyA9PSAxMDAgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRQcm9ncmVzcygwKTtcclxuICAgfSwgW3Byb2dyZXNzXSlcclxuXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgIHVzZXIgIT09IG51bGwgXHJcbiAgICAgICAgc2V0VXNlcklkKHVzZXIudWlkKVxyXG4gICAgfSlcclxuICAgfSwgW10pXHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgIHByb2dyZXNzICE9PSAxMDAgJiYgc2V0TG9hZGluZyh0cnVlKSBcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgbGV0IHJlc3RydWN0dXJlVXJsID0ge2ltYWdlU291cmNlOiBwZXJmZWN0U2l6ZX1cclxuICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHJlcXVlc3RJbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNsb3VkVXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4ucmVxdWVzdEltYWdlcywge2Nsb3VkVXJsfV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGNhcnRvbnMsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnMsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zLFxyXG4gICAgICAgIGl0ZW1zV29ydGgsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlcyxcclxuICAgICAgICBzZW5kZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMixcclxuICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgIG90aGVySXRlbXN9ID0gaW5wdXQ7XHJcblxyXG4gICAgICAgdXNlcklkICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJykuYWRkKHsgdXNlcklkLCBjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCByZWNlaXZlckZpcnN0TmFtZSwgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMiwgcmVxdWVzdEltYWdlcywgc2VuZGVyRmlyc3ROYW1lLCBzZW5kZXJQaG9uZU51bWJlcjEsIHNlbmRlclBob25lTnVtYmVyMiwgdGFnTmFtZSwgb3RoZXJJdGVtcywgc3RhdHVzOiBcInBlbmRpbmdcIiwgY3JlYXRlZEF0OiB0aW1lc3RhbXAoKX0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGRhdGEgJiYgKHNldFJlcXVlc3RTdWNjZXNzKHRydWUpLFxyXG4gICAgICAgICAgICAgIHNldElucHV0KGluaXRpYWxTdGF0ZSkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3RVcGRhdGUgPSBhc3luYyhlLCBpZCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KC4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCh7Li4uaW5wdXQsIHJlcXVlc3RJbWFnZXN9KTtcclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IFtcclxuICAgICAgICB7Y29udGVudDogXCJjb250YWN0XCIgLCBpY29uOiBjb250YWN0KCksIHRpdGxlOiBcIkNvbnRhY3RcIiwgaWQ6IDEgfSxcclxuICAgICAgICB7Y29udGVudDogXCJnYWxsZXJ5XCIsIGljb246IGdhbGxlcnkoKSwgdGl0bGU6IFwiR2FsbGVyeVwiLCBpZDogMn0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiU2hpcHBpbmdSZXF1ZXN0XCIsIGljb246IG9mZkJhY2soKSwgdGl0bGU6IFwiUmVxdWVzdFwiLCBpZDogM30sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiXCIsIGljb246IG1lc3NhZ2UoKSwgdGl0bGU6IFwiTWVzc2FnZVwiLCBpZDogNH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVxdWVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpbnB1dCwgZXJyb3IsIGxvYWRpbmcsIHNldFJlcXVlc3RJbWFnZXMsIHJlcXVlc3RJbWFnZXMsIHJlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2VzcywgaW5pdGlhbFN0YXRlLCBzZXRDb3VudCwgY291bnQsIHNldElucHV0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QUNJRGVpcVFJSGV4dGpUaTI4TlZEbWg1aFdIYWh1aU5FXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIm1heW9yLWRiMTNhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tYXlvci1kYjEzYS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcIm1heW9yLWRiMTNhXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcIm1heW9yLWRiMTNhLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMjkwNTUwMjk3N1wiLFxyXG4gICAgYXBwSWQ6IFwiMToyMjkwNTUwMjk3Nzp3ZWI6MjQ4ZmQ0MjZhMWNlNDQ5NzMzNmYwMFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlyZWJhc2VBcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6ZmlyZWJhc2UuYXBwKCk7XHJcbiAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICBpZihwcm9jZXNzLmJyb3dzZXIpe1xyXG4gICAgZGF0YWJhc2UuZW5hYmxlUGVyc2lzdGVuY2UoKVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBpZiAoZXJyLmNvZGUgPT0gJ2ZhaWxlZC1wcmVjb25kaXRpb24nKSB7XHJcbiAgICAgICAgICAgICAgLy8gTXVsdGlwbGUgdGFicyBvcGVuLCBwZXJzaXN0ZW5jZSBjYW4gb25seSBiZSBlbmFibGVkXHJcbiAgICAgICAgICAgICAgLy8gaW4gb25lIHRhYiBhdCBhIGEgdGltZS5cclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuY29kZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGVyci5jb2RlID09ICd1bmltcGxlbWVudGVkJykge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbGwgb2YgdGhlXHJcbiAgICAgICAgICAgICAgLy8gZmVhdHVyZXMgcmVxdWlyZWQgdG8gZW5hYmxlIHBlcnNpc3RlbmNlXHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLmNvZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBjb25zdCBzdG9yZSA9IGZpcmViYXNlQXBwLnN0b3JhZ2UoKTtcclxuICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gIGNvbnN0IHRpbWVzdGFtcCA9IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcDtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuIFxyXG4gIGV4cG9ydCB7c3RvcmUsIGRhdGFiYXNlLCBhdXRoLCB0aW1lc3RhbXAsIHByb3ZpZGVyfTsgIFxyXG4gIiwiZXhwb3J0IGNvbnN0IGVtYWlsUmVnZXggPSBSZWdFeHAoIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVWYWxpZGF0ZSA9ICggbmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblx0XHJcblx0c3dpdGNoIChuYW1lKSB7XHJcblx0XHRjYXNlIFwiZmlyc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwibGFzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5sYXN0TmFtZSA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGhvbmVOdW1iZXJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5waG9uZU51bWJlciA9IHZhbHVlLmxlbmd0aCA8IDExICAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyppbnB1dCBhIHZhbGlkIHBob25lIG51bWJlcionIDogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImFkZHJlc3NcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5hZGRyZXNzID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdFxyXG5cdCAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RWYWxpZGF0ZSA9ICggaWQsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cclxuXHRzd2l0Y2ggKGlkKSB7XHJcblx0XHRjYXNlIFwic2VuZGVyRmlyc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuc2VuZGVyRmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2VuZGVycGhvbmVOdW1iZXIxXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuc2VuZGVyUGhvbmVOdW1iZXIxID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNlbmRlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnNlbmRlclBob25lTnVtYmVyMiA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlckZpcnN0bmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyRmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmVjZWl2ZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5yZWNlaXZlclBob25lTnVtYmVyMSA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyUGhvbmVOdW1iZXIyID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInRhZ05hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy50YWdOYW1lID0gdmFsdWUubGVuZ3RoIDwgMiAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiQ2FydG9uc1wiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmNhcnRvbnMgPSB2YWx1ZS5sZW5ndGggPD0gMCAgPyAnKmlucHV0IG51bWJlciBvZiBpdGVtcyonOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiaXRlbXNXb3J0aFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLml0ZW1zV29ydGggPSB2YWx1ZS5sZW5ndGggPD0gMCA/ICcqaW5wdXQgaXRlbXMgd29ydGgqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImRlbGl2ZXJ5TG9jYXRpb25cIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9ucyA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqaW5wdXQgYSBwcm9wZXIgc3RhdGUqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImRlc2NyaXB0aW9uc1wiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmRlc2NyaXB0aW9ucyA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdCAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBhc3N3b3JkXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGFzc3dvcmQgPSB2YWx1ZS5sZW5ndGggPCA2ICAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJypwYXNzd29yZCBpcyB0b28gc2hvcnQqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5ndXBWYWxpZGF0ZSA9ICggbmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblx0XHJcblx0c3dpdGNoIChuYW1lKSB7XHJcblx0XHRjYXNlIFwiZmlyc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoID4gMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwibGFzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5sYXN0TmFtZSA9IHZhbHVlLmxlbmd0aCA+IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBob25lTnVtYmVyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGhvbmVOdW1iZXIgPSB2YWx1ZS5sZW5ndGggPiAxMCAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBudW1iZXIqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwYXNzd29yZFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBhc3N3b3JkID0gdmFsdWUubGVuZ3RoIDwgNiAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqcGFzc3dvcmQgaXMgdG9vIHNob3J0KicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vdXJsQ29uZmlnJzsgXHJcbiAgIFxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGFwaVxyXG59KTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKFxuICBwYXJzZWRIcmVmOiBVcmxPYmplY3QsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYXBwbHlCYXNlUGF0aCA9IHRydWVcbikge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICApXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICByZXR1cm4gcGFyc2VkSHJlZlxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55W11cbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzUGF0aCksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIE1haW4gQ1NTXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICA8TGF5b3V0PlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvTGF5b3V0PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJleHBvcnQgY29uc3QgYm94ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjA1XCIgY2xhc3NOYW1lPVwiYm94XCIgaGVpZ2h0PVwiMjMxXCIgdmlld0JveD1cIjAgMCAyMDUgMjMxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTE5OS42NCA2My41ODQxVjE3MS45MzNMMTc1LjQxIDE4NS44NzVDMTc3LjAzMiAxODQuMzk4IDE3OC4wODQgMTgyLjQgMTc4LjM4MyAxODAuMjNDMTc4LjY4MyAxNzguMDU5IDE3OC4yMTEgMTc1Ljg1MiAxNzcuMDQ5IDE3My45OTNDMTc1Ljg4NyAxNzIuMTMzIDE3NC4xMDkgMTcwLjczOCAxNzIuMDI0IDE3MC4wNDlDMTY5LjkzOCAxNjkuMzYgMTY3LjY3NyAxNjkuNDIxIDE2NS42MzIgMTcwLjIyMkMxNjMuNTg2IDE3MS4wMjIgMTYxLjg4NyAxNzIuNTEyIDE2MC44MjggMTc0LjQzMUMxNTkuNzY5IDE3Ni4zNTEgMTU5LjQxOCAxNzguNTggMTU5LjgzNSAxODAuNzMxQzE2MC4yNTEgMTgyLjg4MiAxNjEuNDEgMTg0LjgyIDE2My4xMSAxODYuMjA4QzE2NC44MSAxODcuNTk2IDE2Ni45NDQgMTg4LjM0NyAxNjkuMTQxIDE4OC4zMjlDMTcwLjA5MiAxODguMzM0IDE3MS4wMzggMTg4LjE5MiAxNzEuOTQ2IDE4Ny45MDdMMTUzLjEzOSAxOTguODQ5QzE1NC45OTEgMTk3LjM3NiAxNTYuMjE4IDE5NS4yNTkgMTU2LjU3NCAxOTIuOTIzQzE1Ni45MjkgMTkwLjU4NyAxNTYuMzg3IDE4OC4yMDMgMTU1LjA1NiAxODYuMjQ4QzE1My43MjYgMTg0LjI5MyAxNTEuNzA0IDE4Mi45MTEgMTQ5LjM5NSAxODIuMzc5QzE0Ny4wODcgMTgxLjg0NiAxNDQuNjYyIDE4Mi4yMDMgMTQyLjYwNSAxODMuMzc2QzE0MC41NDkgMTg0LjU1IDEzOS4wMTMgMTg2LjQ1NSAxMzguMzA0IDE4OC43MUMxMzcuNTk1IDE5MC45NjQgMTM3Ljc2NSAxOTMuNDAzIDEzOC43ODEgMTk1LjUzN0MxMzkuNzk3IDE5Ny42NzIgMTQxLjU4NCAxOTkuMzQ2IDE0My43ODQgMjAwLjIyM0MxNDUuOTg0IDIwMS4xMDEgMTQ4LjQzNSAyMDEuMTE4IDE1MC42NDcgMjAwLjI3MUwxMDMuMjUyIDIyNy40MDVMNi44NjQ3MSAxNzEuOTMzVjY0LjQ0MzhMNTEuNTE2NSA5MC4yMDI1TDEwMS42NjkgMTE5LjExOUwxMDMuMjM3IDEyMC4wMjVMMTA0LjgwNCAxMTkuMTAzTDE5OS42MDkgNjMuNTg0MUgxOTkuNjRaTTEzNy4zNTYgMTQxLjczNkMxMzguNDExIDE0MS43NCAxMzkuNDQ1IDE0MS40NDEgMTQwLjMzNCAxNDAuODc2TDE3MS45NDYgMTIwLjU1NkMxNzIuNTU3IDEyMC4xNyAxNzMuMDg2IDExOS42NjcgMTczLjUwMSAxMTkuMDc2QzE3My45MTcgMTE4LjQ4NiAxNzQuMjExIDExNy44MTkgMTc0LjM2NyAxMTcuMTE0QzE3NC41MjIgMTE2LjQxIDE3NC41MzcgMTE1LjY4MSAxNzQuNDA5IDExNC45NzFDMTc0LjI4MiAxMTQuMjYxIDE3NC4wMTUgMTEzLjU4MyAxNzMuNjIzIDExMi45NzZMMTcyLjQwMSAxMTEuMTYzQzE3Mi4wMTIgMTEwLjU1NiAxNzEuNTA4IDExMC4wMzIgMTcwLjkxNSAxMDkuNjIxQzE3MC4zMjMgMTA5LjIxIDE2OS42NTUgMTA4LjkyIDE2OC45NSAxMDguNzY4QzE2OC4yNDUgMTA4LjYxNSAxNjcuNTE3IDEwOC42MDMgMTY2LjgwNyAxMDguNzMzQzE2Ni4wOTcgMTA4Ljg2MiAxNjUuNDIgMTA5LjEzIDE2NC44MTUgMTA5LjUyMkwxMzMuMjE5IDEyOS43MzFDMTMyLjYwOCAxMzAuMTI1IDEzMi4wODMgMTMwLjYzNiAxMzEuNjczIDEzMS4yMzVDMTMxLjI2MiAxMzEuODMzIDEzMC45NzYgMTMyLjUwNyAxMzAuODMgMTMzLjIxN0MxMzAuNjg0IDEzMy45MjcgMTMwLjY4MiAxMzQuNjU5IDEzMC44MjMgMTM1LjM3MUMxMzAuOTY0IDEzNi4wODIgMTMxLjI0NSAxMzYuNzU4IDEzMS42NTEgMTM3LjM1OUwxMzIuODI3IDEzOS4xODhDMTMzLjMyNSAxMzkuOTc5IDEzNC4wMTkgMTQwLjYyOCAxMzQuODQzIDE0MS4wNzJDMTM1LjY2NyAxNDEuNTE1IDEzNi41OTIgMTQxLjczOSAxMzcuNTI5IDE0MS43MkwxMzcuMzU2IDE0MS43MzZaTTE4OS41OTQgMTc1Ljc5NEMxOTEuNDU0IDE3NS43OTQgMTkzLjI3MiAxNzUuMjQ0IDE5NC44MTggMTc0LjIxM0MxOTYuMzY1IDE3My4xODMgMTk3LjU3IDE3MS43MTggMTk4LjI4MiAxNzAuMDA1QzE5OC45OTMgMTY4LjI5MSAxOTkuMTggMTY2LjQwNSAxOTguODE3IDE2NC41ODZDMTk4LjQ1NCAxNjIuNzY3IDE5Ny41NTggMTYxLjA5NiAxOTYuMjQzIDE1OS43ODRDMTk0LjkyOCAxNTguNDczIDE5My4yNTIgMTU3LjU4IDE5MS40MjggMTU3LjIxOEMxODkuNjA0IDE1Ni44NTYgMTg3LjcxMyAxNTcuMDQyIDE4NS45OTUgMTU3Ljc1MUMxODQuMjc3IDE1OC40NjEgMTgyLjgwOCAxNTkuNjYzIDE4MS43NzUgMTYxLjIwNkMxODAuNzQyIDE2Mi43NDggMTgwLjE5IDE2NC41NjEgMTgwLjE5IDE2Ni40MTZDMTgwLjE5IDE2OC45MDMgMTgxLjE4MSAxNzEuMjg4IDE4Mi45NDQgMTczLjA0N0MxODQuNzA4IDE3NC44MDYgMTg3LjEgMTc1Ljc5NCAxODkuNTk0IDE3NS43OTRaTTIwMi4xMzIgNTguNTY2OEwxMDMuMzkzIDExNi4zOTlMNTMuMDk5NCA4Ny41Mjk3TDMuNzkyODUgNTkuMDUxM1YxNzMuNjUzTDEwMy4zMTUgMjMwLjk1M0wyMDIuODM3IDE3My42NTNWNTkuMDk4MkwyMDEuOTkxIDU4LjYxMzdMMjAyLjEzMiA1OC41NjY4Wk0xMzcuMzg4IDEzOC41OTRDMTM2Ljk5OSAxMzguNiAxMzYuNjE1IDEzOC41MDcgMTM2LjI3MiAxMzguMzIzQzEzNS45MjkgMTM4LjE0IDEzNS42MzkgMTM3Ljg3MyAxMzUuNDI5IDEzNy41NDdMMTM0LjIyMiAxMzUuNjg3QzEzMy44OSAxMzUuMTYzIDEzMy43NzggMTM0LjUzIDEzMy45MSAxMzMuOTI1QzEzNC4wNDIgMTMzLjMyIDEzNC40MDcgMTMyLjc5IDEzNC45MjcgMTMyLjQ1MUwxNjYuNTg2IDExMi4xMzJDMTY2Ljk1OSAxMTEuODg4IDE2Ny4zOTQgMTExLjc1OCAxNjcuODQgMTExLjc1N0MxNjguMjM1IDExMS43NTkgMTY4LjYyNCAxMTEuODU5IDE2OC45NzEgMTEyLjA0N0MxNjkuMzE4IDExMi4yMzUgMTY5LjYxMyAxMTIuNTA2IDE2OS44MyAxMTIuODM1TDE3MS4wMzcgMTE0LjY5NUMxNzEuMzcxIDExNS4yMiAxNzEuNDgzIDExNS44NTUgMTcxLjM0OCAxMTYuNDYyQzE3MS4yMTMgMTE3LjA2OCAxNzAuODQyIDExNy41OTcgMTcwLjMxNiAxMTcuOTMxTDEzOC42NzMgMTM4LjI1QzEzOC4yOTIgMTM4LjUwMSAxMzcuODQ0IDEzOC42MzIgMTM3LjM4OCAxMzguNjI1VjEzOC41OTRaTTE4OS40NTMgMTcyLjY2OEMxODguMjEzIDE3Mi42NjggMTg3LjAwMSAxNzIuMzAxIDE4NS45NyAxNzEuNjE0QzE4NC45MzkgMTcwLjkyNyAxODQuMTM1IDE2OS45NTEgMTgzLjY2MSAxNjguODA4QzE4My4xODYgMTY3LjY2NiAxODMuMDYyIDE2Ni40MDkgMTgzLjMwNCAxNjUuMTk2QzE4My41NDYgMTYzLjk4MyAxODQuMTQzIDE2Mi44NjkgMTg1LjAyIDE2MS45OTVDMTg1Ljg5NiAxNjEuMTIgMTg3LjAxMyAxNjAuNTI1IDE4OC4yMyAxNjAuMjg0QzE4OS40NDYgMTYwLjA0MyAxOTAuNzA2IDE2MC4xNjYgMTkxLjg1MiAxNjAuNjRDMTkyLjk5NyAxNjEuMTEzIDE5My45NzYgMTYxLjkxNCAxOTQuNjY1IDE2Mi45NDJDMTk1LjM1NCAxNjMuOTcgMTk1LjcyMiAxNjUuMTc5IDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2OC4wNzQgMTk1LjA2MSAxNjkuNjY0IDE5My44ODYgMTcwLjgzN0MxOTIuNzEgMTcyLjAwOSAxOTEuMTE1IDE3Mi42NjggMTg5LjQ1MyAxNzIuNjY4Wk0xNjkuMDc4IDE4NS4xNzJDMTY3LjgzOCAxODUuMTcyIDE2Ni42MjYgMTg0LjgwNSAxNjUuNTk1IDE4NC4xMThDMTY0LjU2NCAxODMuNDMxIDE2My43NjEgMTgyLjQ1NSAxNjMuMjg2IDE4MS4zMTNDMTYyLjgxMiAxODAuMTcgMTYyLjY4NyAxNzguOTEzIDE2Mi45MjkgMTc3LjdDMTYzLjE3MSAxNzYuNDg3IDE2My43NjggMTc1LjM3MyAxNjQuNjQ1IDE3NC40OTlDMTY1LjUyMiAxNzMuNjI1IDE2Ni42MzkgMTczLjAyOSAxNjcuODU1IDE3Mi43ODhDMTY5LjA3MSAxNzIuNTQ3IDE3MC4zMzIgMTcyLjY3MSAxNzEuNDc3IDE3My4xNDRDMTcyLjYyMyAxNzMuNjE3IDE3My42MDIgMTc0LjQxOCAxNzQuMjkxIDE3NS40NDdDMTc0Ljk3OSAxNzYuNDc1IDE3NS4zNDcgMTc3LjY4MyAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE4MC41NzggMTc0LjY4NyAxODIuMTY4IDE3My41MTEgMTgzLjM0MUMxNzIuMzM1IDE4NC41MTMgMTcwLjc0MSAxODUuMTcyIDE2OS4wNzggMTg1LjE3MlpNMTQ3LjEzNiAxOTcuNjc2QzE0NS44OTYgMTk3LjY3NiAxNDQuNjg0IDE5Ny4zMSAxNDMuNjUzIDE5Ni42MjNDMTQyLjYyMiAxOTUuOTM2IDE0MS44MTkgMTk0Ljk1OSAxNDEuMzQ0IDE5My44MTdDMTQwLjg3IDE5Mi42NzQgMTQwLjc0NiAxOTEuNDE3IDE0MC45ODcgMTkwLjIwNEMxNDEuMjI5IDE4OC45OTIgMTQxLjgyNiAxODcuODc4IDE0Mi43MDMgMTg3LjAwM0MxNDMuNTggMTg2LjEyOSAxNDQuNjk3IDE4NS41MzMgMTQ1LjkxMyAxODUuMjkyQzE0Ny4xMjkgMTg1LjA1MSAxNDguMzkgMTg1LjE3NSAxNDkuNTM1IDE4NS42NDhDMTUwLjY4MSAxODYuMTIxIDE1MS42NiAxODYuOTIzIDE1Mi4zNDkgMTg3Ljk1MUMxNTMuMDM4IDE4OC45NzkgMTUzLjQwNSAxOTAuMTg4IDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE5My4wODIgMTUyLjc0NSAxOTQuNjczIDE1MS41NjkgMTk1Ljg0NUMxNTAuMzkzIDE5Ny4wMTggMTQ4Ljc5OSAxOTcuNjc2IDE0Ny4xMzYgMTk3LjY3NlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxOTYuODk1QzE1MC4xNjYgMTk2Ljg5NSAxNTIuNjIyIDE5NC40NDUgMTUyLjYyMiAxOTEuNDI0QzE1Mi42MjIgMTg4LjQwMyAxNTAuMTY2IDE4NS45NTMgMTQ3LjEzNiAxODUuOTUzQzE0NC4xMDcgMTg1Ljk1MyAxNDEuNjUxIDE4OC40MDMgMTQxLjY1MSAxOTEuNDI0QzE0MS42NTEgMTk0LjQ0NSAxNDQuMTA3IDE5Ni44OTUgMTQ3LjEzNiAxOTYuODk1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxODYuNzM1QzE0OC4wNjYgMTg2LjczNSAxNDguOTc1IDE4Ny4wMSAxNDkuNzQ4IDE4Ny41MjVDMTUwLjUyMSAxODguMDQxIDE1MS4xMjQgMTg4Ljc3MyAxNTEuNDggMTg5LjYzQzE1MS44MzYgMTkwLjQ4NiAxNTEuOTI5IDE5MS40MjkgMTUxLjc0OCAxOTIuMzM5QzE1MS41NjYgMTkzLjI0OCAxNTEuMTE4IDE5NC4wODQgMTUwLjQ2MSAxOTQuNzRDMTQ5LjgwMyAxOTUuMzk2IDE0OC45NjUgMTk1Ljg0MiAxNDguMDUzIDE5Ni4wMjNDMTQ3LjE0MSAxOTYuMjA0IDE0Ni4xOTYgMTk2LjExMSAxNDUuMzM3IDE5NS43NTZDMTQ0LjQ3OCAxOTUuNDAxIDE0My43NDMgMTk0LjggMTQzLjIyNyAxOTQuMDI5QzE0Mi43MSAxOTMuMjU4IDE0Mi40MzQgMTkyLjM1MiAxNDIuNDM0IDE5MS40MjRDMTQyLjQzNCAxOTAuMTggMTQyLjkzIDE4OC45ODggMTQzLjgxMSAxODguMTA4QzE0NC42OTMgMTg3LjIyOSAxNDUuODg5IDE4Ni43MzUgMTQ3LjEzNiAxODYuNzM1Wk0xNDcuMTM2IDE4NS4xNzJDMTQ1Ljg5NiAxODUuMTcyIDE0NC42ODQgMTg1LjUzOSAxNDMuNjUzIDE4Ni4yMjZDMTQyLjYyMiAxODYuOTEzIDE0MS44MTkgMTg3Ljg4OSAxNDEuMzQ0IDE4OS4wMzJDMTQwLjg3IDE5MC4xNzQgMTQwLjc0NiAxOTEuNDMxIDE0MC45ODcgMTkyLjY0NEMxNDEuMjI5IDE5My44NTcgMTQxLjgyNiAxOTQuOTcxIDE0Mi43MDMgMTk1Ljg0NUMxNDMuNTggMTk2LjcxOSAxNDQuNjk3IDE5Ny4zMTUgMTQ1LjkxMyAxOTcuNTU2QzE0Ny4xMjkgMTk3Ljc5NyAxNDguMzkgMTk3LjY3NCAxNDkuNTM1IDE5Ny4yQzE1MC42ODEgMTk2LjcyNyAxNTEuNjYgMTk1LjkyNiAxNTIuMzQ5IDE5NC44OThDMTUzLjAzOCAxOTMuODY5IDE1My40MDUgMTkyLjY2MSAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxODkuNzY2IDE1Mi43NDUgMTg4LjE3NiAxNTEuNTY5IDE4Ny4wMDNDMTUwLjM5MyAxODUuODMxIDE0OC43OTkgMTg1LjE3MiAxNDcuMTM2IDE4NS4xNzJaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTEzNy40MDMgMTM3LjgxMkMxMzcuMTQzIDEzNy44MTQgMTM2Ljg4NiAxMzcuNzUgMTM2LjY1NiAxMzcuNjI3QzEzNi40MjYgMTM3LjUwNCAxMzYuMjMgMTM3LjMyNiAxMzYuMDg3IDEzNy4xMDlMMTM0Ljg2NCAxMzUuMjMzQzEzNC42NDkgMTM0Ljg4MiAxMzQuNTgyIDEzNC40NjEgMTM0LjY3NiAxMzQuMDYxQzEzNC43MTQgMTMzLjg2MyAxMzQuNzkxIDEzMy42NzUgMTM0LjkwNCAxMzMuNTA4QzEzNS4wMTggMTMzLjM0MiAxMzUuMTY0IDEzMy4yIDEzNS4zMzQgMTMzLjA5MkwxNjcuMDA5IDExMi43NzNDMTY3LjI1MiAxMTIuNjAxIDE2Ny41NDIgMTEyLjUwOSAxNjcuODQgMTEyLjUwN0MxNjguMTAyIDExMi41MDcgMTY4LjM2IDExMi41NzMgMTY4LjU5IDExMi42OTlDMTY4LjgyIDExMi44MjUgMTY5LjAxNSAxMTMuMDA2IDE2OS4xNTYgMTEzLjIyNkwxNzAuMzc5IDExNS4xMDFDMTcwLjU5MSAxMTUuNDQ5IDE3MC42NiAxMTUuODY2IDE3MC41NjkgMTE2LjI2M0MxNzAuNDc4IDExNi42NiAxNzAuMjM2IDExNy4wMDYgMTY5Ljg5MyAxMTcuMjI3TDEzOC4yNSAxMzcuNTQ3QzEzNy45OTkgMTM3LjcxNSAxMzcuNzA1IDEzNy44MDcgMTM3LjQwMyAxMzcuODEyWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY3Ljg0IDExMy4zMzVDMTY3Ljk3NCAxMTMuMzM3IDE2OC4xMDcgMTEzLjM3MyAxNjguMjI0IDExMy40MzhDMTY4LjM0MiAxMTMuNTA0IDE2OC40NDEgMTEzLjU5NyAxNjguNTE0IDExMy43MUwxNjkuNzA1IDExNS41NTVDMTY5LjgxNyAxMTUuNzMxIDE2OS44NTYgMTE1Ljk0NCAxNjkuODE1IDExNi4xNDlDMTY5Ljc5MiAxMTYuMjUgMTY5Ljc0OSAxMTYuMzQ2IDE2OS42ODcgMTE2LjQzQzE2OS42MjQgMTE2LjUxMyAxNjkuNTQ1IDExNi41ODMgMTY5LjQ1NCAxMTYuNjMzTDEzNy44MTEgMTM2Ljk1M0MxMzcuNjgyIDEzNy4wMjcgMTM3LjUzNiAxMzcuMDY1IDEzNy4zODggMTM3LjA2MkMxMzcuMjU2IDEzNy4wNjMgMTM3LjEyNyAxMzcuMDMxIDEzNy4wMTEgMTM2Ljk2OEMxMzYuODk2IDEzNi45MDUgMTM2Ljc5OSAxMzYuODE0IDEzNi43MjkgMTM2LjcwM0wxMzUuNTM4IDEzNC44NThDMTM1LjQyOCAxMzQuNjgxIDEzNS4zODkgMTM0LjQ2OSAxMzUuNDI4IDEzNC4yNjRDMTM1LjQ1MSAxMzQuMTY1IDEzNS40OTMgMTM0LjA3IDEzNS41NTIgMTMzLjk4N0MxMzUuNjExIDEzMy45MDQgMTM1LjY4NiAxMzMuODMzIDEzNS43NzMgMTMzLjc4TDE2Ny40MzIgMTEzLjQ2QzE2Ny41NTQgMTEzLjM4MiAxNjcuNjk1IDExMy4zMzkgMTY3Ljg0IDExMy4zMzVaTTE2Ny44NCAxMTEuNzcyQzE2Ny4zOTQgMTExLjc3MSAxNjYuOTU4IDExMS45MDIgMTY2LjU4NiAxMTIuMTQ3TDEzNC45MjcgMTMyLjQ2N0MxMzQuNDA3IDEzMi44MDYgMTM0LjA0MiAxMzMuMzM1IDEzMy45MSAxMzMuOTRDMTMzLjc3OCAxMzQuNTQ2IDEzMy44OSAxMzUuMTc4IDEzNC4yMjIgMTM1LjcwMkwxMzUuNDI4IDEzNy41NDdDMTM1LjU5NCAxMzcuODA2IDEzNS44MSAxMzguMDMxIDEzNi4wNjMgMTM4LjIwN0MxMzYuMzE2IDEzOC4zODQgMTM2LjYwMiAxMzguNTA4IDEzNi45MDMgMTM4LjU3M0MxMzcuMjA1IDEzOC42MzkgMTM3LjUxNyAxMzguNjQ0IDEzNy44MjEgMTM4LjU4OEMxMzguMTI0IDEzOC41MzMgMTM4LjQxNCAxMzguNDE4IDEzOC42NzMgMTM4LjI1TDE3MC4zMTYgMTE3LjkzMUMxNzAuODQyIDExNy41OTcgMTcxLjIxMyAxMTcuMDY4IDE3MS4zNDggMTE2LjQ2MkMxNzEuNDgzIDExNS44NTUgMTcxLjM3MSAxMTUuMjIgMTcxLjAzNyAxMTQuNjk1TDE2OS44MyAxMTIuODM1QzE2OS42MTMgMTEyLjUwNiAxNjkuMzE4IDExMi4yMzUgMTY4Ljk3MSAxMTIuMDQ3QzE2OC42MjQgMTExLjg1OSAxNjguMjM1IDExMS43NTkgMTY3Ljg0IDExMS43NTdWMTExLjc3MlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxODQuMzlDMTcyLjEwOCAxODQuMzkgMTc0LjU2MyAxODEuOTQxIDE3NC41NjMgMTc4LjkyQzE3NC41NjMgMTc1Ljg5OCAxNzIuMTA4IDE3My40NDkgMTY5LjA3OCAxNzMuNDQ5QzE2Ni4wNDggMTczLjQ0OSAxNjMuNTkzIDE3NS44OTggMTYzLjU5MyAxNzguOTJDMTYzLjU5MyAxODEuOTQxIDE2Ni4wNDggMTg0LjM5IDE2OS4wNzggMTg0LjM5WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxNzQuMjMxQzE3MC4wMDggMTc0LjIzMSAxNzAuOTE3IDE3NC41MDYgMTcxLjY5IDE3NS4wMjFDMTcyLjQ2MyAxNzUuNTM2IDE3My4wNjYgMTc2LjI2OSAxNzMuNDIyIDE3Ny4xMjVDMTczLjc3OCAxNzcuOTgyIDE3My44NzEgMTc4LjkyNSAxNzMuNjg5IDE3OS44MzVDMTczLjUwOCAxODAuNzQ0IDE3My4wNiAxODEuNTggMTcyLjQwMyAxODIuMjM2QzE3MS43NDUgMTgyLjg5MSAxNzAuOTA3IDE4My4zMzggMTY5Ljk5NSAxODMuNTE5QzE2OS4wODMgMTgzLjcgMTY4LjEzOCAxODMuNjA3IDE2Ny4yNzkgMTgzLjI1MkMxNjYuNDE5IDE4Mi44OTcgMTY1LjY4NSAxODIuMjk2IDE2NS4xNjkgMTgxLjUyNUMxNjQuNjUyIDE4MC43NTQgMTY0LjM3NiAxNzkuODQ3IDE2NC4zNzYgMTc4LjkyQzE2NC4zNzYgMTc3LjY3NiAxNjQuODcxIDE3Ni40ODQgMTY1Ljc1MyAxNzUuNjA0QzE2Ni42MzUgMTc0LjcyNSAxNjcuODMxIDE3NC4yMzEgMTY5LjA3OCAxNzQuMjMxWk0xNjkuMDc4IDE3Mi42NjhDMTY3LjgzOCAxNzIuNjY4IDE2Ni42MjYgMTczLjAzNCAxNjUuNTk1IDE3My43MjFDMTY0LjU2NCAxNzQuNDA4IDE2My43NjEgMTc1LjM4NSAxNjMuMjg2IDE3Ni41MjdDMTYyLjgxMiAxNzcuNjcgMTYyLjY4NyAxNzguOTI3IDE2Mi45MjkgMTgwLjE0QzE2My4xNzEgMTgxLjM1MiAxNjMuNzY4IDE4Mi40NjYgMTY0LjY0NSAxODMuMzQxQzE2NS41MjIgMTg0LjIxNSAxNjYuNjM5IDE4NC44MTEgMTY3Ljg1NSAxODUuMDUyQzE2OS4wNzEgMTg1LjI5MyAxNzAuMzMyIDE4NS4xNjkgMTcxLjQ3NyAxODQuNjk2QzE3Mi42MjMgMTg0LjIyMyAxNzMuNjAyIDE4My40MjEgMTc0LjI5MSAxODIuMzkzQzE3NC45NzkgMTgxLjM2NSAxNzUuMzQ3IDE4MC4xNTYgMTc1LjM0NyAxNzguOTJDMTc1LjM0NyAxNzcuMjYyIDE3NC42ODcgMTc1LjY3MSAxNzMuNTExIDE3NC40OTlDMTcyLjMzNSAxNzMuMzI2IDE3MC43NDEgMTcyLjY2OCAxNjkuMDc4IDE3Mi42NjhaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTcxLjg4NkMxOTIuNDgyIDE3MS44ODYgMTk0LjkzOCAxNjkuNDM3IDE5NC45MzggMTY2LjQxNkMxOTQuOTM4IDE2My4zOTQgMTkyLjQ4MiAxNjAuOTQ1IDE4OS40NTMgMTYwLjk0NUMxODYuNDIzIDE2MC45NDUgMTgzLjk2NyAxNjMuMzk0IDE4My45NjcgMTY2LjQxNkMxODMuOTY3IDE2OS40MzcgMTg2LjQyMyAxNzEuODg2IDE4OS40NTMgMTcxLjg4NlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTYxLjcyN0MxOTAuMzgzIDE2MS43MjcgMTkxLjI5MiAxNjIuMDAyIDE5Mi4wNjUgMTYyLjUxN0MxOTIuODM4IDE2My4wMzIgMTkzLjQ0MSAxNjMuNzY0IDE5My43OTcgMTY0LjYyMUMxOTQuMTUzIDE2NS40NzggMTk0LjI0NiAxNjYuNDIxIDE5NC4wNjQgMTY3LjMzQzE5My44ODMgMTY4LjI0IDE5My40MzUgMTY5LjA3NiAxOTIuNzc3IDE2OS43MzFDMTkyLjEyIDE3MC4zODcgMTkxLjI4MiAxNzAuODM0IDE5MC4zNyAxNzEuMDE1QzE4OS40NTggMTcxLjE5NiAxODguNTEzIDE3MS4xMDMgMTg3LjY1MyAxNzAuNzQ4QzE4Ni43OTQgMTcwLjM5MyAxODYuMDYgMTY5Ljc5MiAxODUuNTQzIDE2OS4wMjFDMTg1LjAyNyAxNjguMjUgMTg0Ljc1MSAxNjcuMzQzIDE4NC43NTEgMTY2LjQxNkMxODQuNzUxIDE2NS4xNzIgMTg1LjI0NiAxNjMuOTc5IDE4Ni4xMjggMTYzLjFDMTg3LjAxIDE2Mi4yMjEgMTg4LjIwNiAxNjEuNzI3IDE4OS40NTMgMTYxLjcyN1pNMTg5LjQ1MyAxNjAuMTY0QzE4OC4yMTMgMTYwLjE2NCAxODcuMDAxIDE2MC41MyAxODUuOTcgMTYxLjIxN0MxODQuOTM5IDE2MS45MDQgMTg0LjEzNSAxNjIuODgxIDE4My42NjEgMTY0LjAyM0MxODMuMTg2IDE2NS4xNjYgMTgzLjA2MiAxNjYuNDIzIDE4My4zMDQgMTY3LjYzNUMxODMuNTQ2IDE2OC44NDggMTg0LjE0MyAxNjkuOTYyIDE4NS4wMiAxNzAuODM3QzE4NS44OTcgMTcxLjcxMSAxODcuMDE0IDE3Mi4zMDYgMTg4LjIzIDE3Mi41NDhDMTg5LjQ0NiAxNzIuNzg5IDE5MC43MDYgMTcyLjY2NSAxOTEuODUyIDE3Mi4xOTJDMTkyLjk5NyAxNzEuNzE5IDE5My45NzYgMTcwLjkxNyAxOTQuNjY1IDE2OS44ODlDMTk1LjM1NCAxNjguODYxIDE5NS43MjIgMTY3LjY1MiAxOTUuNzIyIDE2Ni40MTZDMTk1LjcyMiAxNjQuNzU4IDE5NS4wNjEgMTYzLjE2NyAxOTMuODg2IDE2MS45OTVDMTkyLjcxIDE2MC44MjIgMTkxLjExNSAxNjAuMTY0IDE4OS40NTMgMTYwLjE2NFpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ2LjkzMiAyNi45NjIyTDk3LjkyMzYgNTguNTgyM0w1My4wOTk0IDg3LjQ5ODRMMy43OTI4NSA1OS4wNTEyTDQuNjM5MTggNTguNTgyM0wxMDMuMjUyIDEuODEzMTFMMTQ2LjkzMiAyNi45NjIyWlwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTIuOTQ2NTMgNTguNTgyM0g0LjYzOTE5TDMuNzkyODYgNTkuMDUxMkwyLjk0NjUzIDU4LjU4MjNaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjkyOCA1OC42MjkyTDEwMy4yNTIgMTE2LjM5OUw1My4wOTk0IDg3LjQ5ODRMOTcuOTIzNSA1OC41ODI0TDE0Ni45MzIgMjYuOTYyM0wyMDEuODM0IDU4LjU4MjRMMjAxLjkyOCA1OC42MjkyWlwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTIwMS45OTEgNTguNTgyM0wyMDEuOTI4IDU4LjYyOTJMMjAxLjgzNCA1OC41ODIzSDIwMS45OTFaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTAzLjI1MiAxMTYuMzk5VjIzMC41XCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiM1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTY5LjA3OCAxODUuMTcyQzE3Mi41NCAxODUuMTcyIDE3NS4zNDcgMTgyLjM3MyAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE3NS40NjcgMTcyLjU0IDE3Mi42NjggMTY5LjA3OCAxNzIuNjY4QzE2NS42MTYgMTcyLjY2OCAxNjIuODA5IDE3NS40NjcgMTYyLjgwOSAxNzguOTJDMTYyLjgwOSAxODIuMzczIDE2NS42MTYgMTg1LjE3MiAxNjkuMDc4IDE4NS4xNzJaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQ3LjEzNiAxOTcuNjc2QzE1MC41OTggMTk3LjY3NiAxNTMuNDA1IDE5NC44NzcgMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTg3Ljk3MSAxNTAuNTk4IDE4NS4xNzIgMTQ3LjEzNiAxODUuMTcyQzE0My42NzQgMTg1LjE3MiAxNDAuODY3IDE4Ny45NzEgMTQwLjg2NyAxOTEuNDI0QzE0MC44NjcgMTk0Ljg3NyAxNDMuNjc0IDE5Ny42NzYgMTQ3LjEzNiAxOTcuNjc2WlwiIGZpbGw9XCIjMjEzNTY5XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE4OS40NTMgMTcyLjY2OEMxOTIuOTE1IDE3Mi42NjggMTk1LjcyMiAxNjkuODY5IDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2Mi45NjMgMTkyLjkxNSAxNjAuMTY0IDE4OS40NTMgMTYwLjE2NEMxODUuOTkgMTYwLjE2NCAxODMuMTg0IDE2Mi45NjMgMTgzLjE4NCAxNjYuNDE2QzE4My4xODQgMTY5Ljg2OSAxODUuOTkgMTcyLjY2OCAxODkuNDUzIDE3Mi42NjhaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIxNTRcIiBjbGFzc05hbWU9XCJwcm9maWxlXCIgaGVpZ2h0PVwiMTc0XCIgdmlld0JveD1cIjAgMCAxNTQgMTc0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTEwNy44IDEwMy4zMTJDOTcuOTM0NCAxMDMuMzEyIDkzLjE5MDYgMTA4Ljc1IDc3IDEwOC43NUM2MC44MDk0IDEwOC43NSA1Ni4xIDEwMy4zMTIgNDYuMiAxMDMuMzEyQzIwLjY5MzcgMTAzLjMxMiAwIDEyMy43NzEgMCAxNDguOTg4VjE1Ny42ODhDMCAxNjYuNjkzIDcuMzkwNjIgMTc0IDE2LjUgMTc0SDEzNy41QzE0Ni42MDkgMTc0IDE1NCAxNjYuNjkzIDE1NCAxNTcuNjg4VjE0OC45ODhDMTU0IDEyMy43NzEgMTMzLjMwNiAxMDMuMzEyIDEwNy44IDEwMy4zMTJaTTEzNy41IDE1Ny42ODhIMTYuNVYxNDguOTg4QzE2LjUgMTMyLjgxMSAyOS44Mzc1IDExOS42MjUgNDYuMiAxMTkuNjI1QzUxLjIxODcgMTE5LjYyNSA1OS4zNjU2IDEyNS4wNjIgNzcgMTI1LjA2MkM5NC43NzE5IDEyNS4wNjIgMTAyLjc0NyAxMTkuNjI1IDEwNy44IDExOS42MjVDMTI0LjE2MiAxMTkuNjI1IDEzNy41IDEzMi44MTEgMTM3LjUgMTQ4Ljk4OFYxNTcuNjg4Wk03NyA5Ny44NzVDMTA0LjMyOCA5Ny44NzUgMTI2LjUgNzUuOTU1MSAxMjYuNSA0OC45Mzc1QzEyNi41IDIxLjkxOTkgMTA0LjMyOCAwIDc3IDBDNDkuNjcxOSAwIDI3LjUgMjEuOTE5OSAyNy41IDQ4LjkzNzVDMjcuNSA3NS45NTUxIDQ5LjY3MTkgOTcuODc1IDc3IDk3Ljg3NVpNNzcgMTYuMzEyNUM5NS4xODQ0IDE2LjMxMjUgMTEwIDMwLjk1OTggMTEwIDQ4LjkzNzVDMTEwIDY2LjkxNTIgOTUuMTg0NCA4MS41NjI1IDc3IDgxLjU2MjVDNTguODE1NiA4MS41NjI1IDQ0IDY2LjkxNTIgNDQgNDguOTM3NUM0NCAzMC45NTk4IDU4LjgxNTYgMTYuMzEyNSA3NyAxNi4zMTI1WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjE4MVwiIGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uXCIgaGVpZ2h0PVwiMTU5XCIgdmlld0JveD1cIjAgMCAxODEgMTU5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTE2My4wNDEgMzQuMjVIMjguMjgxMkMyNS4xNTYyIDM0LjI1IDIyLjYyNSAzMS43MTg4IDIyLjYyNSAyOC41OTM4QzIyLjYyNSAyNS40Njg3IDI1LjE1NjIgMjIuOTM3NSAyOC4yODEyIDIyLjkzNzVIMTY0LjAzMUMxNjcuMTU2IDIyLjkzNzUgMTY5LjY4OCAyMC40MDYzIDE2OS42ODggMTcuMjgxMkMxNjkuNjg4IDcuOTA5NTUgMTYyLjA5IDAuMzEyNSAxNTIuNzE5IDAuMzEyNUgyMi42MjVDMTAuMTI4MiAwLjMxMjUgMCAxMC40NDA3IDAgMjIuOTM3NVYxMzYuMDYyQzAgMTQ4LjU1OSAxMC4xMjgyIDE1OC42ODggMjIuNjI1IDE1OC42ODhIMTYzLjA0MUMxNzIuOTQ3IDE1OC42ODggMTgxIDE1MS4wNzYgMTgxIDE0MS43MTlWNTEuMjE4OEMxODEgNDEuODYxMiAxNzIuOTQ3IDM0LjI1IDE2My4wNDEgMzQuMjVaTTE0Ny4wNjIgMTA3Ljc4MUMxNDAuODE2IDEwNy43ODEgMTM1Ljc1IDEwMi43MTUgMTM1Ljc1IDk2LjQ2ODhDMTM1Ljc1IDkwLjIyMjEgMTQwLjgxNiA4NS4xNTYyIDE0Ny4wNjIgODUuMTU2MkMxNTMuMzA5IDg1LjE1NjIgMTU4LjM3NSA5MC4yMjIxIDE1OC4zNzUgOTYuNDY4OEMxNTguMzc1IDEwMi43MTUgMTUzLjMwOSAxMDcuNzgxIDE0Ny4wNjIgMTA3Ljc4MVpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF2YXRhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjI5MlwiIGNsYXNzTmFtZT1cImF2YXRhclwiIGhlaWdodD1cIjI5MlwiIHZpZXdCb3g9XCIwIDAgMjkyIDI5MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0NlwiIGN5PVwiMTQ2XCIgcj1cIjE0NlwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOTUuODg5IDExNC44OThDMTg1LjQwNCAxMzAuNjU5IDE2Ny40OCAxNDEuMDQ2IDE0Ny4xMyAxNDEuMDQ2QzEyNC44MTQgMTQxLjA0NiAxMDUuNDE2IDEyOC41NTUgOTUuNTQ1MSAxMTAuMTgzQzkzLjEwNzMgMTEyLjkwNSA5MC44NDk5IDExNS44ODUgODguODA3MyAxMTkuMTI2TDg0Ljc3MjIgMTI1LjUyOEM1Ny40ODkxIDE2OC44MTEgODguNTk1IDIyNS4xODggMTM5Ljc2IDIyNS4xODhIMTQ3LjgzQzE5OC45OTUgMjI1LjE4OCAyMzAuMTAxIDE2OC44MTEgMjAyLjgxOCAxMjUuNTI4TDE5OC43ODMgMTE5LjEyNkMxOTcuODYxIDExNy42NjQgMTk2Ljg5NiAxMTYuMjU0IDE5NS44ODkgMTE0Ljg5OFpcIiBmaWxsPVwiI0YzRUNFQ1wiLz5cclxuICAgIDxjaXJjbGUgY3g9XCIxNDcuMTNcIiBjeT1cIjgyLjUyNjJcIiByPVwiNDMuOTY1OVwiIGZpbGw9XCIjRjNFQ0VDXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgIFxyXG5cclxufTtcclxuZXhwb3J0IGNvbnN0IHVwbG9hZCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjIwNFwiIGNsYXNzTmFtZT1cInVwbG9hZFwiIGhlaWdodD1cIjIwNFwiIHZpZXdCb3g9XCIwIDAgMjA0IDIwNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjEwMlwiIGN5PVwiMTAyXCIgcj1cIjEwMlwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMDYuNTY3IDEwNi41NjdWMTQxLjU4Mkg5Ny40MzI5VjEwNi41NjdINjIuNDE4Vjk3LjQzMjhIOTcuNDMyOVY2Mi40MTc5SDEwNi41NjdWOTcuNDMyOEgxNDEuNTgyVjEwNi41NjdIMTA2LjU2N1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAzMyAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0zMC4yMDI3IDIyLjQxOEwzMC4yMDYgMjIuNDA0TDMwLjIwOTEgMjIuMzlDMzAuMjU1OSAyMi4xODAxIDMwLjI4MTUgMjEuOTY1OSAzMC4yODU0IDIxLjc1MDdMMzAuMjg2NiAyMS42ODEyTDMwLjI4MzEgMjEuNjExOEMzMC4yNTM1IDIxLjAzNTMgMzAuMDY1MSAyMC40ODE4IDI5Ljc0MzYgMjAuMDA4OEMyOS40MjI1IDE5LjUzNjMgMjguOTgxOCAxOS4xNjM1IDI4LjQ3MzIgMTguOTIyMkwyOC40Mjg5IDE4LjkwMTJMMjguMzgzNyAxOC44ODI0TDIzLjIyNzQgMTYuNzM5NkwyMy4xOTc1IDE2LjcyNzFMMjMuMTY3MSAxNi43MTU3QzIyLjgyMDkgMTYuNTg0OCAyMi40NTU3IDE2LjUxMjUgMjIuMDg2OSAxNi41MDFMMjIuMDAyNCAxNi40OTgzTDIxLjkxOCAxNi41MDI4QzIxLjA4NzQgMTYuNTQ3MSAyMC4yOTQ2IDE2LjkwNTUgMTkuNzE0NSAxNy41MjA1TDE5LjY3NjUgMTcuNTYwOEwxOS42NDA4IDE3LjYwMzFMMTguMzg2IDE5LjA5MDNDMTYuMzAyNSAxNy44NzY5IDE0LjU1ODEgMTYuMTk2OSAxMy4yOTcxIDE0LjE5OTRMMTQuNzU5OCAxMy4wMzg5TDE0LjgwMjggMTMuMDA0OEwxNC44NDM5IDEyLjk2ODNDMTUuNDc2NCAxMi40MDczIDE1Ljg2OTkgMTEuNjE1MSAxNS45MTg3IDEwLjc1NjFMMTUuOTIzOCAxMC42NjU5TDE1LjkyMDcgMTAuNTc1NkMxNS45MDggMTAuMTk3NSAxNS44MjkyIDkuODI1MzkgMTUuNjg4NyA5LjQ3NTU2TDE1LjY3NTkgOS40NDM2NkwxNS42NjIgOS40MTIyM0wxMy40NTIyIDQuNDEyMjNMMTMuNDMxMyA0LjM2NDg4TDEzLjQwOCA0LjMxODY4QzEzLjE0OTYgMy44MDc0MyAxMi43NTg5IDMuMzgwNTYgMTIuMjgzNSAzLjA3NjYzQzExLjgwODQgMi43NzI5NyAxMS4yNjM0IDIuNjAxMTUgMTAuNzA0OSAyLjU3MzgyTDEwLjYzNDcgMi41NzAzOEwxMC41NjQ0IDIuNTcxODlDMTAuMzYwNSAyLjU3NjI0IDEwLjE1NzIgMi41OTkwNCA5Ljk1NzE1IDIuNjQwMDVMOS45Mzk2MiAyLjY0MzY1TDkuOTIyMTYgMi42NDc1Nkw1LjEzNDIxIDMuNzE4OThMNS4xMDExOCAzLjcyNjM4TDUuMDY4NDEgMy43MzQ4OEM0LjQyNzA0IDMuOTAxMzggMy44NDY4NiA0LjI2NTg0IDMuNDE5MzggNC43ODY1N0MyLjk5MTA3IDUuMzA4MzMgMi43NDA1OCA1Ljk1ODA5IDIuNzE1NjIgNi42NDEyNkwyLjcxNDI5IDYuNjc3NzZWNi43MTQyOUMyLjcxNDI5IDE5LjMyNyAxMy4yNDU0IDI5LjQyODYgMjYuMDc1OSAyOS40Mjg2SDI2LjA3NjdDMjYuNzYyOSAyOS40MjgzIDI3LjQzNTkgMjkuMjAyOSAyNy45ODU2IDI4Ljc3ODZDMjguNTM2NCAyOC4zNTM1IDI4LjkzMzcgMjcuNzUwNiAyOS4wOTc3IDI3LjA2MDlDMjkuMDk3OCAyNy4wNjA4IDI5LjA5NzggMjcuMDYwNiAyOS4wOTc4IDI3LjA2MDVMMzAuMjAyNyAyMi40MThaTTMuNTM1NzEgMkgyOS40NjQzQzI5Ljg5MTEgMiAzMC4yODg1IDIuMTY0OTkgMzAuNTcyMSAyLjQ0MDAxQzMwLjg1MzYgMi43MTI5OSAzMSAzLjA2OTg5IDMxIDMuNDI4NTdWMjguNTcxNEMzMSAyOC45MzAxIDMwLjg1MzYgMjkuMjg3IDMwLjU3MjEgMjkuNTZDMzAuMjg4NSAyOS44MzUgMjkuODkxMSAzMCAyOS40NjQzIDMwSDMuNTM1NzFDMy4xMDg5IDMwIDIuNzExNDkgMjkuODM1IDIuNDI3ODggMjkuNTZDMi4xNDYzNiAyOS4yODcgMiAyOC45MzAxIDIgMjguNTcxNFYzLjQyODU3QzIgMy4wNjk5IDIuMTQ2MzYgMi43MTI5OSAyLjQyNzg4IDIuNDQwMDFDMi43MTE0OSAyLjE2NDk5IDMuMTA4OSAyIDMuNTM1NzEgMlpcIiBmaWxsPVwiI0YzRUNFQ1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCI0XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgNDQgMzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNDAuNjM0NSAyNi44ODEzQzQyLjczNSAyNC44MjQ2IDQzLjk5NTIgMjIuMjQ0MiA0My45OTUyIDE5LjQyODZDNDMuOTk1MiAxMy4zNTcxIDM4LjE1MjIgOC4zNDA2MyAzMC41MzcxIDcuNDQ1MDlDMjguMTMxMiAzLjA3MzY2IDIyLjQ3OTEgMCAxNS44ODc1IDBDNy4xMTE0NyAwIDAuMDAwNTE0NDI4IDUuNDMzOTMgMC4wMDA1MTQ0MjggMTIuMTQyOUMwLjAwMDUxNDQyOCAxNC45NTA5IDEuMjYwNzggMTcuNTMxMyAzLjM2MTIyIDE5LjU5NTVDMi4xOTI2MSAyMS45MjU0IDAuNTEyMjU5IDIzLjczMTcgMC40ODE3MDcgMjMuNzYyMUMwLjAwMDUxNDQ0MiAyNC4yNzA1IC0wLjEzNjk2OSAyNS4wMTQzIDAuMTQ1NjM2IDI1LjY1OTRDMC40MjA2MDMgMjYuMzA0NSAxLjA2MjE5IDI2LjcyMTkgMS43NjQ4OSAyNi43MjE5QzUuODUxMiAyNi43MjE5IDkuMTUwODEgMjUuMTg4OCAxMS4zMjc2IDIzLjc3NzJDMTIuMDMwMyAyMy45MzY2IDEyLjc1NTkgMjQuMDU4IDEzLjQ5NjggMjQuMTQ5MUMxNS44OTUxIDI4LjUwNTQgMjEuNTI0MyAzMS41NzE0IDI4LjEwODMgMzEuNTcxNEMyOS42OTcgMzEuNTcxNCAzMS4yMjQ1IDMxLjM4OTMgMzIuNjc1OCAzMS4wNTU0QzM0Ljg1MjYgMzIuNDU5NCAzOC4xNDQ1IDM0IDQyLjIzODUgMzRDNDIuOTQxMiAzNCA0My41NzUxIDMzLjU4MjYgNDMuODU3NyAzMi45Mzc1QzQ0LjEzMjcgMzIuMjkyNCA0NC4wMDI5IDMxLjU0ODcgNDMuNTIxNyAzMS4wNDAyQzQzLjQ5MTEgMzEuMDE3NCA0MS44MDMxIDI5LjIxMTIgNDAuNjM0NSAyNi44ODEzWk0xMC42MzI2IDE5Ljg3NjNMOS4zMjY0OCAyMC43MTg4QzguMjQ5NTIgMjEuNDA5NCA3LjE0OTY2IDIxLjk1NTggNi4wMzQ1MSAyMi4zNDI5QzYuMjQwNzQgMjEuOTg2MiA2LjQ0Njk2IDIxLjYwNjcgNi42NDU1NSAyMS4yMTk2TDcuODI5NDQgMTguODU5NEw1LjkzNTIyIDE3QzQuOTA0MDkgMTUuOTgzIDMuNjY2NzQgMTQuMzIxIDMuNjY2NzQgMTIuMTQyOUMzLjY2Njc0IDcuNTM2MTYgOS4yNjUzOCAzLjY0Mjg2IDE1Ljg4NzUgMy42NDI4NkMyMi41MDk2IDMuNjQyODYgMjguMTA4MyA3LjUzNjE2IDI4LjEwODMgMTIuMTQyOUMyOC4xMDgzIDE2Ljc0OTYgMjIuNTA5NiAyMC42NDI5IDE1Ljg4NzUgMjAuNjQyOUMxNC42MjcyIDIwLjY0MjkgMTMuMzY3IDIwLjQ5ODcgMTIuMTQ0OSAyMC4yMTc5TDEwLjYzMjYgMTkuODc2M1pNMzguMDYwNSAyNC4yODU3TDM2LjE3NCAyNi4xMzc1TDM3LjM1NzggMjguNDk3OEMzNy41NTY0IDI4Ljg4NDggMzcuNzYyNiAyOS4yNjQzIDM3Ljk2ODkgMjkuNjIxQzM2Ljg1MzcgMjkuMjMzOSAzNS43NTM5IDI4LjY4NzUgMzQuNjc2OSAyNy45OTY5TDMzLjM3MDggMjcuMTU0NUwzMS44NTA5IDI3LjUwMzZDMzAuNjI4OCAyNy43ODQ0IDI5LjM2ODUgMjcuOTI4NiAyOC4xMDgzIDI3LjkyODZDMjMuOTgzNyAyNy45Mjg2IDIwLjMwMjIgMjYuNDAzMSAxOC4wNzk2IDI0LjE1NjdDMjUuODE2OSAyMy4zMzcxIDMxLjc3NDUgMTguMjgyNiAzMS43NzQ1IDEyLjE0MjlDMzEuNzc0NSAxMS44ODQ4IDMxLjc0MzkgMTEuNjM0NCAzMS43MjEgMTEuMzgzOUMzNi42Mzk5IDEyLjQ4NDQgNDAuMzI5IDE1LjY5NDYgNDAuMzI5IDE5LjQyODZDNDAuMzI5IDIxLjYwNjcgMzkuMDkxNyAyMy4yNjg4IDM4LjA2MDUgMjQuMjg1N1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYWxsZXJ5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIHZpZXdCb3g9XCIwIDAgMzkgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMzIuNSAyNS43MTQzVjI2Ljc4NTdDMzIuNSAyOC41NjA5IDMxLjA0NDkgMzAgMjkuMjUgMzBIMy4yNUMxLjQ1NTA1IDMwIDAgMjguNTYwOSAwIDI2Ljc4NTdWOS42NDI4NkMwIDcuODY3NjMgMS40NTUwNSA2LjQyODU3IDMuMjUgNi40Mjg1N0g0LjMzMzMzVjkuNjQyODZIMy42NTYyNUMzLjU0ODUxIDkuNjQyODYgMy40NDUxNyA5LjY4NTE5IDMuMzY4OTkgOS43NjA1NEMzLjI5MjggOS44MzU4OSAzLjI1IDkuOTM4MDggMy4yNSAxMC4wNDQ2VjI2LjM4MzlDMy4yNSAyNi40OTA1IDMuMjkyOCAyNi41OTI3IDMuMzY4OTkgMjYuNjY4QzMuNDQ1MTcgMjYuNzQzNCAzLjU0ODUxIDI2Ljc4NTcgMy42NTYyNSAyNi43ODU3SDI4Ljg0MzhDMjguOTUxNSAyNi43ODU3IDI5LjA1NDggMjYuNzQzNCAyOS4xMzEgMjYuNjY4QzI5LjIwNzIgMjYuNTkyNyAyOS4yNSAyNi40OTA1IDI5LjI1IDI2LjM4MzlWMjUuNzE0M0gzMi41Wk0zNS4zNDM4IDMuMjE0MjlIMTAuMTU2MkMxMC4wNDg1IDMuMjE0MjkgOS45NDUxNyAzLjI1NjYyIDkuODY4OTkgMy4zMzE5N0M5Ljc5MjggMy40MDczMiA5Ljc1IDMuNTA5NTEgOS43NSAzLjYxNjA3VjE5Ljk1NTRDOS43NSAyMC4wNjE5IDkuNzkyOCAyMC4xNjQxIDkuODY4OTkgMjAuMjM5NUM5Ljk0NTE3IDIwLjMxNDggMTAuMDQ4NSAyMC4zNTcxIDEwLjE1NjIgMjAuMzU3MUgzNS4zNDM4QzM1LjQ1MTUgMjAuMzU3MSAzNS41NTQ4IDIwLjMxNDggMzUuNjMxIDIwLjIzOTVDMzUuNzA3MiAyMC4xNjQxIDM1Ljc1IDIwLjA2MTkgMzUuNzUgMTkuOTU1NFYzLjYxNjA3QzM1Ljc1IDMuNTA5NTEgMzUuNzA3MiAzLjQwNzMyIDM1LjYzMSAzLjMzMTk3QzM1LjU1NDggMy4yNTY2MiAzNS40NTE1IDMuMjE0MjkgMzUuMzQzOCAzLjIxNDI5Wk0zNS43NSAwQzM3LjU0NDkgMCAzOSAxLjQzOTA2IDM5IDMuMjE0MjlWMjAuMzU3MUMzOSAyMi4xMzI0IDM3LjU0NDkgMjMuNTcxNCAzNS43NSAyMy41NzE0SDkuNzVDNy45NTUwNSAyMy41NzE0IDYuNSAyMi4xMzI0IDYuNSAyMC4zNTcxVjMuMjE0MjlDNi41IDEuNDM5MDYgNy45NTUwNSAwIDkuNzUgMEgzNS43NVpNMTcuODc1IDcuNUMxNy44NzUgOC45NzkzMSAxNi42NjI0IDEwLjE3ODYgMTUuMTY2NyAxMC4xNzg2QzEzLjY3MDkgMTAuMTc4NiAxMi40NTgzIDguOTc5MzEgMTIuNDU4MyA3LjVDMTIuNDU4MyA2LjAyMDY5IDEzLjY3MDkgNC44MjE0MyAxNS4xNjY3IDQuODIxNDNDMTYuNjYyNCA0LjgyMTQzIDE3Ljg3NSA2LjAyMDY5IDE3Ljg3NSA3LjVaTTEzIDEzLjkyODZMMTUuNjc1NSAxMS4yODI1QzE1Ljk5MjggMTAuOTY4NyAxNi41MDcyIDEwLjk2ODcgMTYuODI0NiAxMS4yODI1TDE5LjUgMTMuOTI4NkwyNi41MDg4IDYuOTk2NzZDMjYuODI2MSA2LjY4Mjk3IDI3LjM0MDYgNi42ODI5NyAyNy42NTc5IDYuOTk2NzZMMzIuNSAxMS43ODU3VjE3LjE0MjlIMTNWMTMuOTI4NlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNoZWNrTWFyayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTI1IDAuNzgxMjVDMTEuNjI0MyAwLjc4MTI1IDAuNzgxMjUgMTEuNjI0MyAwLjc4MTI1IDI1QzAuNzgxMjUgMzguMzc1NyAxMS42MjQzIDQ5LjIxODggMjUgNDkuMjE4OEMzOC4zNzU3IDQ5LjIxODggNDkuMjE4OCAzOC4zNzU3IDQ5LjIxODggMjVDNDkuMjE4OCAxMS42MjQzIDM4LjM3NTcgMC43ODEyNSAyNSAwLjc4MTI1Wk0yNSA1LjQ2ODc1QzM1Ljc5NDEgNS40Njg3NSA0NC41MzEyIDE0LjIwNDIgNDQuNTMxMiAyNUM0NC41MzEyIDM1Ljc5NDEgMzUuNzk1OCA0NC41MzEyIDI1IDQ0LjUzMTJDMTQuMjA1OSA0NC41MzEyIDUuNDY4NzUgMzUuNzk1OCA1LjQ2ODc1IDI1QzUuNDY4NzUgMTQuMjA1OSAxNC4yMDQyIDUuNDY4NzUgMjUgNS40Njg3NVpNMzguNjkxOCAxOC4xOTAxTDM2LjQ5MSAxNS45NzE2QzM2LjAzNTMgMTUuNTEyMSAzNS4yOTMzIDE1LjUwOTEgMzQuODMzOCAxNS45NjQ5TDIxLjAyOTkgMjkuNjU3OUwxNS4xOTA4IDIzLjc3MTVDMTQuNzM1MSAyMy4zMTIgMTMuOTkzMSAyMy4zMDkgMTMuNTMzNiAyMy43NjQ3TDExLjMxNDkgMjUuOTY1NUMxMC44NTU1IDI2LjQyMTMgMTAuODUyNCAyNy4xNjMzIDExLjMwODMgMjcuNjIyOUwyMC4xNzM2IDM2LjU2QzIwLjYyOTQgMzcuMDE5NCAyMS4zNzE0IDM3LjAyMjUgMjEuODMwOSAzNi41NjY2TDM4LjY4NTMgMTkuODQ3NUMzOS4xNDQ2IDE5LjM5MTYgMzkuMTQ3NiAxOC42NDk2IDM4LjY5MTggMTguMTkwMVpcIiBmaWxsPVwiIzAzOUIzN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0MlwiIGhlaWdodD1cIjQyXCIgdmlld0JveD1cIjAgMCA0MiA0MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjIxXCIgY3k9XCIyMVwiIHI9XCIyMVwiIGZpbGw9XCIjQzRDNEM0XCIvPlxyXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43NTQ0IDEzLjUzMjVDMTEuMDQ0NCAxNC4yNDI2IDExLjA0NDQgMTUuMzkzNyAxMS43NTQ0IDE2LjEwMzhMMTcuNTM5NyAyMS44ODkxTDExLjc1NDQgMjcuNjc0NEMxMS4wNDQ0IDI4LjM4NDQgMTEuMDQ0NCAyOS41MzU2IDExLjc1NDQgMzAuMjQ1N0MxMi40NjQ1IDMwLjk1NTcgMTMuNjE1NiAzMC45NTU3IDE0LjMyNTcgMzAuMjQ1N0wyMC4xMTEgMjQuNDYwNEwyNS44OTYzIDMwLjI0NTdDMjYuNjA2MyAzMC45NTU3IDI3Ljc1NzUgMzAuOTU1NyAyOC40Njc1IDMwLjI0NTdDMjkuMTc3NiAyOS41MzU2IDI5LjE3NzYgMjguMzg0NCAyOC40Njc1IDI3LjY3NDRMMjIuNjgyMiAyMS44ODkxTDI4LjQ2NzYgMTYuMTAzOEMyOS4xNzc2IDE1LjM5MzcgMjkuMTc3NiAxNC4yNDI2IDI4LjQ2NzYgMTMuNTMyNUMyNy43NTc1IDEyLjgyMjUgMjYuNjA2MyAxMi44MjI1IDI1Ljg5NjMgMTMuNTMyNUwyMC4xMTEgMTkuMzE3OUwxNC4zMjU2IDEzLjUzMjVDMTMuNjE1NiAxMi44MjI1IDEyLjQ2NDQgMTIuODIyNSAxMS43NTQ0IDEzLjUzMjVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIGNsYXNzTmFtZT1cImdvb2dsZVwiIHdpZHRoPVwiMTAzXCIgaGVpZ2h0PVwiMTAyXCIgdmlld0JveD1cIjAgMCAxMDMgMTAyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTUxIDczLjYzMTNDNDAuNDgxMyA3My42MzEzIDMxLjg3NSA2Ni42MTg4IDI5LjMyNSA1Ny4wNTYzTDcuOTY4NzUgNzguNDEyNUMxNi44OTM3IDkyLjQzNzUgMzIuODMxMyAxMDIgNTEgMTAyQzYwLjg4MTIgMTAyIDcwLjEyNSA5OS4xMzEzIDc4LjA5MzggOTQuMDMxM0w1Ni43Mzc1IDcyLjY3NUM1NC44MjUgNzMuMzEyNSA1Mi45MTI1IDczLjYzMTMgNTEgNzMuNjMxM1pcIiBmaWxsPVwiIzM0QTg1M1wiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTAyIDQzLjk4NzVDMTAxLjY4MSA0Mi4zOTM4IDEwMC40MDYgNDEuNDM3NSA5OC44MTI1IDQxLjQzNzVINTFDNDkuMDg3NSA0MS40Mzc1IDQ3LjgxMjUgNDIuNzEyNSA0Ny44MTI1IDQ0LjYyNVY2MC41NjI1QzQ3LjgxMjUgNjIuNDc1IDQ5LjA4NzUgNjMuNzUgNTEgNjMuNzVINjcuODkzN0M2NS4wMjUgNjguMjEyNSA2MC44ODEyIDcxLjA4MTIgNTYuNzM3NSA3Mi42NzVMNzguMDkzOCA5NC4wMzEyQzkyLjQzNzUgODUuMTA2MyAxMDIgNjkuMTY4NyAxMDIgNTFDMTAyIDUwLjA0MzcgMTAyIDQ5LjQwNjMgMTAyIDQ4Ljc2ODhDMTAyLjMxOSA0Ny40OTM4IDEwMi4zMTkgNDUuOSAxMDIgNDMuOTg3NVpcIiBmaWxsPVwiIzQyODVGNFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjguMzY4NyA1MUMyOC4zNjg3IDQ5LjA4NzUgMjguNjg3NSA0Ny4xNzUgMjkuMDA2MyA0NS4yNjI1TDcuOTY4NzUgMjMuOTA2MkMyLjg2ODc1IDMxLjg3NSAwIDQxLjExODggMCA1MUMwIDYwLjg4MTIgMi44Njg3NSA3MC4xMjUgNy45Njg3NSA3OC4wOTM4TDI5LjMyNSA1Ni43Mzc1QzI4LjY4NzUgNTQuODI1IDI4LjM2ODcgNTIuOTEyNSAyOC4zNjg3IDUxWlwiIGZpbGw9XCIjRkJCQzA1XCIvPlxyXG4gICAgPHBhdGggZD1cIk05MC44NDM4IDE5LjEyNUM4Ny4zMzc1IDE0LjY2MjUgODIuODc1IDEwLjgzNzUgNzguMDkzOCA3LjY1QzcwLjEyNSAyLjg2ODc1IDYwLjg4MTIgMCA1MSAwQzMyLjgzMTMgMCAxNi44OTM3IDkuNTYyNSA3Ljk2ODc1IDIzLjkwNjJMMjkuMzI1IDQ1LjI2MjVDMzEuODc1IDM1LjcgNDAuOCAyOC42ODc1IDUxIDI4LjY4NzVDNTIuOTEyNSAyOC42ODc1IDU0LjgyNSAyOS4wMDYzIDU2LjczNzUgMjkuNjQzOEM1OS42MDYyIDMwLjYgNjIuMTU2MiAzMi4xOTM4IDY1LjAyNSAzNC40MjVDNjUuOTgxMiAzNS4zODEzIDY3LjI1NjIgMzUuMzgxMiA2OC41MzEyIDM0Ljc0MzdMODkuODg3NSAyNC4yMjVDOTAuODQzOCAyMy45MDYyIDkxLjQ4MTMgMjIuOTUgOTEuNDgxMyAyMS45OTM4QzkxLjggMjEuMDM3NSA5MS40ODEzIDIwLjA4MTMgOTAuODQzOCAxOS4xMjVaXCIgZmlsbD1cIiNFQTQzMzVcIi8+XHJcbiAgICA8L3N2Zz4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFjayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTI3LjU5MTYgMy4xNDgwNEwyNS4yMTMzIDAuNzU4NzU1QzI0LjIwNjIgLTAuMjUyOTIyIDIyLjU3NzggLTAuMjUyOTIyIDIxLjU4MTUgMC43NTg3NTVMMC43NTUyNzMgMjEuNjcwNEMtMC4yNTE3NTggMjIuNjgyIC0wLjI1MTc1OCAyNC4zMTc5IDAuNzU1MjczIDI1LjMxODlMMjEuNTgxNSA0Ni4yNDEyQzIyLjU4ODYgNDcuMjUyOSAyNC4yMTY5IDQ3LjI1MjkgMjUuMjEzMyA0Ni4yNDEyTDI3LjU5MTYgNDMuODUyQzI4LjYwOTMgNDIuODI5NSAyOC41ODc5IDQxLjE2MTMgMjcuNTQ4NyA0MC4xNjA0TDE0LjYzOTQgMjcuODA1SDQ1LjQyODlDNDYuODUzNyAyNy44MDUgNDggMjYuNjUzNCA0OCAyNS4yMjJWMjEuNzc4QzQ4IDIwLjM0NjYgNDYuODUzNyAxOS4xOTUgNDUuNDI4OSAxOS4xOTVIMTQuNjM5NEwyNy41NDg3IDYuODM5NTlDMjguNTk4NiA1LjgzODY3IDI4LjYyIDQuMTcwNDggMjcuNTkxNiAzLjE0ODA0WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyBjbGFzc05hbWU9XCJsb2FkZXJcIiB3aWR0aD1cIjQ5MFwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNDkwIDUxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0yNTYuNjM2IDBDMjQzLjc4MyAwIDIzMy4zNjMgMTAuNDIgMjMzLjM2MyAyMy4yNzNWMTE2LjM2NEMyMzMuMzYzIDEyOS4yMTcgMjQzLjc4MyAxMzkuNjM3IDI1Ni42MzYgMTM5LjYzN0MyNjkuNDg5IDEzOS42MzcgMjc5LjkwOSAxMjkuMjE3IDI3OS45MDkgMTE2LjM2NFYyMy4yNzNDMjc5LjkwOSAxMC40MiAyNjkuNDg5IDAgMjU2LjYzNiAwWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjU2LjYzOCAzNzIuMzY0QzI0My43ODUgMzcyLjM2NCAyMzMuMzY1IDM4Mi43ODQgMjMzLjM2NSAzOTUuNjM3VjQ4OC43MjhDMjMzLjM2NSA1MDEuNTgxIDI0My43ODUgNTEyLjAwMSAyNTYuNjM4IDUxMi4wMDFDMjY5LjQ5MSA1MTIuMDAxIDI3OS45MTEgNTAxLjU4MSAyNzkuOTExIDQ4OC43MjhWMzk1LjYzN0MyNzkuOTExIDM4Mi43ODQgMjY5LjQ5MSAzNzIuMzY0IDI1Ni42MzggMzcyLjM2NFpcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuNlwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTc0LjM1NSAxNDAuODA4TDEwOC41MjkgNzQuOThDOTkuNDQzIDY1Ljg5MSA4NC43MDcgNjUuODkxIDc1LjYxNyA3NC45OEM2Ni41MjggODQuMDY5IDY2LjUyOCA5OC44MDQgNzUuNjE3IDEwNy44OTJMMTQxLjQ0MyAxNzMuNzJDMTQ1Ljk4NyAxNzguMjY0IDE1MS45NDQgMTgwLjUzNyAxNTcuODk4IDE4MC41MzdDMTYzLjg1MyAxODAuNTM3IDE2OS44MTEgMTc4LjI2NCAxNzQuMzUzIDE3My43MkMxODMuNDQ0IDE2NC42MzEgMTgzLjQ0NCAxNDkuODk3IDE3NC4zNTUgMTQwLjgwOFpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTQ2Ni4wOTEgMjMyLjcyN0g0MTkuNTQ2QzQwNi42OTMgMjMyLjcyNyAzOTYuMjczIDI0My4xNDcgMzk2LjI3MyAyNTZDMzk2LjI3MyAyNjguODUzIDQwNi42OTMgMjc5LjI3MyA0MTkuNTQ2IDI3OS4yNzNINDY2LjA5MUM0NzguOTQ0IDI3OS4yNzMgNDg5LjM2NCAyNjguODUzIDQ4OS4zNjQgMjU2QzQ4OS4zNjQgMjQzLjE0NyA0NzguOTQ0IDIzMi43MjcgNDY2LjA5MSAyMzIuNzI3WlwiIGZpbGw9XCJibGFja1wiIGZpbGxPcGFjaXR5PVwiMC40XCIvPlxyXG4gICAgPHBhdGggZD1cIk0zNzEuODMgMzM4LjI4M0MzNjIuNzQzIDMyOS4xOTQgMzQ4LjAwNyAzMjkuMTk2IDMzOC45MTggMzM4LjI4M0MzMjkuODI5IDM0Ny4zNzIgMzI5LjgzMSAzNjIuMTA2IDMzOC45MTggMzcxLjE5NUw0MDQuNzQ2IDQzNy4wMkM0MDkuMjkgNDQxLjU2NCA0MTUuMjQ3IDQ0My44MzYgNDIxLjIwMyA0NDMuODM2QzQyNy4xNTkgNDQzLjgzNiA0MzMuMTE2IDQ0MS41NjMgNDM3LjY1OCA0MzcuMDJDNDQ2Ljc0NyA0MjcuOTMxIDQ0Ni43NDcgNDEzLjE5NiA0MzcuNjU4IDQwNC4xMDhMMzcxLjgzIDMzOC4yODNaXCIgZmlsbD1cImJsYWNrXCIgZmlsbE9wYWNpdHk9XCIwLjVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0MC4yNzMgMjU2QzE0MC4yNzMgMjQzLjE0NyAxMjkuODUzIDIzMi43MjcgMTE3IDIzMi43MjdIMjMuOTA5QzExLjA1NiAyMzIuNzI3IDAuNjM1OTg2IDI0My4xNDcgMC42MzU5ODYgMjU2QzAuNjM1OTg2IDI2OC44NTMgMTEuMDU2IDI3OS4yNzMgMjMuOTA5IDI3OS4yNzNIMTE3QzEyOS44NTMgMjc5LjI3MyAxNDAuMjczIDI2OC44NTMgMTQwLjI3MyAyNTZaXCIgZmlsbD1cImJsYWNrXCIgZmlsbE9wYWNpdHk9XCIwLjhcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE3NC4zNTUgMzM4LjI4M0MxNjUuMjY4IDMyOS4xOTQgMTUwLjUzMSAzMjkuMTk0IDE0MS40NDMgMzM4LjI4M0w3NS42MTggNDA0LjEwOEM2Ni41MjkgNDEzLjE5NSA2Ni41MjkgNDI3LjkzMiA3NS42MTggNDM3LjAyQzgwLjE2MiA0NDEuNTY0IDg2LjExOSA0NDMuODM2IDkyLjA3NSA0NDMuODM2Qzk4LjAzMSA0NDMuODM2IDEwMy45ODggNDQxLjU2NSAxMDguNTMgNDM3LjAyTDE3NC4zNTUgMzcxLjE5NUMxODMuNDQ0IDM2Mi4xMDggMTgzLjQ0NCAzNDcuMzcyIDE3NC4zNTUgMzM4LjI4M1pcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuN1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9mZkJhY2sgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgY2xhc3NOYW1lPVwiYm9sZC1ib3hcIiB2aWV3Qm94PVwiMCAwIDEyOSAxNDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNDY5OTcgMTEwLjI3VjM4LjA1TDY0LjQ3IDc0LjQ4TDEyNy40NyAzNy40OFYxMTAuMjJMNjQuNDcgMTQ2LjU5TDEuNDY5OTcgMTEwLjI3Wk05Mi40NyAxMTcuNEM5MS41OCAxMTcuNCA5MC43MDk5IDExNy42NjQgODkuOTY5OSAxMTguMTU4Qzg5LjIyOTkgMTE4LjY1MyA4OC42NTMxIDExOS4zNTYgODguMzEyNSAxMjAuMTc4Qzg3Ljk3MTkgMTIxIDg3Ljg4MjggMTIxLjkwNSA4OC4wNTY0IDEyMi43NzhDODguMjMwMSAxMjMuNjUxIDg4LjY1ODcgMTI0LjQ1MyA4OS4yODggMTI1LjA4MkM4OS45MTczIDEyNS43MTEgOTAuNzE5MSAxMjYuMTQgOTEuNTkyMSAxMjYuMzE0QzkyLjQ2NSAxMjYuNDg3IDkzLjM2OTggMTI2LjM5OCA5NC4xOTIgMTI2LjA1N0M5NS4wMTQzIDEyNS43MTcgOTUuNzE3MSAxMjUuMTQgOTYuMjExNiAxMjQuNEM5Ni43MDYxIDEyMy42NiA5Ni45NyAxMjIuNzkgOTYuOTcgMTIxLjlDOTYuOTY3MyAxMjAuNzA3IDk2LjQ5MjQgMTE5LjU2NCA5NS42NDkgMTE4LjcyMUM5NC44MDU3IDExNy44NzggOTMuNjYyNiAxMTcuNDAzIDkyLjQ3IDExNy40VjExNy40Wk0xMDYuNDcgMTA5LjRDMTA1LjU4IDEwOS40IDEwNC43MSAxMDkuNjY0IDEwMy45NyAxMTAuMTU4QzEwMy4yMyAxMTAuNjUzIDEwMi42NTMgMTExLjM1NiAxMDIuMzEzIDExMi4xNzhDMTAxLjk3MiAxMTMgMTAxLjg4MyAxMTMuOTA1IDEwMi4wNTYgMTE0Ljc3OEMxMDIuMjMgMTE1LjY1MSAxMDIuNjU5IDExNi40NTMgMTAzLjI4OCAxMTcuMDgyQzEwMy45MTcgMTE3LjcxMSAxMDQuNzE5IDExOC4xNCAxMDUuNTkyIDExOC4zMTRDMTA2LjQ2NSAxMTguNDg3IDEwNy4zNyAxMTguMzk4IDEwOC4xOTIgMTE4LjA1N0MxMDkuMDE0IDExNy43MTcgMTA5LjcxNyAxMTcuMTQgMTEwLjIxMiAxMTYuNEMxMTAuNzA2IDExNS42NiAxMTAuOTcgMTE0Ljc5IDExMC45NyAxMTMuOUMxMTAuOTY3IDExMi43MDcgMTEwLjQ5MiAxMTEuNTY0IDEwOS42NDkgMTEwLjcyMUMxMDguODA2IDEwOS44NzggMTA3LjY2MyAxMDkuNDAzIDEwNi40NyAxMDkuNFYxMDkuNFpNMTE5LjQ3IDEwMS40QzExOC41OCAxMDEuNCAxMTcuNzEgMTAxLjY2NCAxMTYuOTcgMTAyLjE1OEMxMTYuMjMgMTAyLjY1MyAxMTUuNjUzIDEwMy4zNTYgMTE1LjMxMyAxMDQuMTc4QzExNC45NzIgMTA1IDExNC44ODMgMTA1LjkwNSAxMTUuMDU2IDEwNi43NzhDMTE1LjIzIDEwNy42NTEgMTE1LjY1OSAxMDguNDUzIDExNi4yODggMTA5LjA4MkMxMTYuOTE3IDEwOS43MTEgMTE3LjcxOSAxMTAuMTQgMTE4LjU5MiAxMTAuMzE0QzExOS40NjUgMTEwLjQ4NyAxMjAuMzcgMTEwLjM5OCAxMjEuMTkyIDExMC4wNTdDMTIyLjAxNCAxMDkuNzE3IDEyMi43MTcgMTA5LjE0IDEyMy4yMTIgMTA4LjRDMTIzLjcwNiAxMDcuNjYgMTIzLjk3IDEwNi43OSAxMjMuOTcgMTA1LjlDMTIzLjk2NyAxMDQuNzA3IDEyMy40OTIgMTAzLjU2NCAxMjIuNjQ5IDEwMi43MjFDMTIxLjgwNiAxMDEuODc4IDEyMC42NjMgMTAxLjQwMyAxMTkuNDcgMTAxLjRWMTAxLjRaTTEwNS42OSA3MC40QzEwNS4zMDcgNzAuNDAxIDEwNC45MzIgNzAuNTEyIDEwNC42MSA3MC43Mkw4NC40MSA4My43MkM4NC4xODQ5IDgzLjg2MjIgODMuOTkxNSA4NC4wNDkzIDgzLjg0MTggODQuMjY5NUM4My42OTIxIDg0LjQ4OTcgODMuNTg5NCA4NC43MzgzIDgzLjU0IDg1QzgzLjQ4MzQgODUuMjU3MSA4My40NzgxIDg1LjUyMjggODMuNTI0NSA4NS43ODE5QzgzLjU3MDggODYuMDQxIDgzLjY2NzggODYuMjg4NCA4My44MSA4Ni41MUw4NC41OCA4Ny43Qzg0Ljg2NjkgODguMTQ0OSA4NS4zMTg2IDg4LjQ1OCA4NS44MzYgODguNTcwNUM4Ni4zNTMzIDg4LjY4MjkgODYuODk0MiA4OC41ODU3IDg3LjM0IDg4LjNMMTA3LjUzIDc1LjNDMTA3Ljk3MyA3NS4wMTQ0IDEwOC4yODYgNzQuNTY1MSAxMDguNCA3NC4wNUMxMDguNDU4IDczLjc5MzYgMTA4LjQ2NSA3My41MjgyIDEwOC40MiA3My4yNjkxQzEwOC4zNzYgNzMuMDEgMTA4LjI4IDcyLjc2MjIgMTA4LjE0IDcyLjU0TDEwNy4zNyA3MS4zNUMxMDcuMTg4IDcxLjA3MDIgMTA2LjkzOSA3MC44NDAzIDEwNi42NDYgNzAuNjgxNEMxMDYuMzUyIDcwLjUyMjQgMTA2LjAyNCA3MC40Mzk1IDEwNS42OSA3MC40NFY3MC40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcgMzguMzU5OVYxMTBMNjQuNSAxNDYuMDhMMiAxMTBWMzguOTE5OUwzMiA1Ni4yNTk5TDY0IDc0Ljc1OTlMNjQuNSA3NS4wNDk5TDY1IDc0Ljc1OTlMMTI3IDM4LjM1OTlWMzguMzU5OVpNODYuMjYgODkuMDk5OUM4Ni43MzkyIDg5LjA5OTggODcuMjA4MSA4OC45NjA5IDg3LjYxIDg4LjY5OTlMMTA3Ljc5IDc1LjY5OTlDMTA4LjA2OCA3NS41MjYzIDEwOC4zMDkgNzUuMjk4OSAxMDguNDk3IDc1LjAzMUMxMDguNjg2IDc0Ljc2MzEgMTA4LjgyIDc0LjQ2MDEgMTA4Ljg5IDc0LjEzOTlDMTA4Ljk2NCA3My44MTcxIDEwOC45NzIgNzMuNDgzIDEwOC45MTYgNzMuMTU2OEMxMDguODU5IDcyLjgzMDYgMTA4LjczOCA3Mi41MTkgMTA4LjU2IDcyLjIzOTlMMTA3Ljc5IDcxLjA1OTlDMTA3LjU2NSA3MC43MDcyIDEwNy4yNTQgNzAuNDE2OSAxMDYuODg3IDcwLjIxNTlDMTA2LjUyIDcwLjAxNDkgMTA2LjEwOCA2OS45MDk3IDEwNS42OSA2OS45MDk5QzEwNS4yMTEgNjkuOTA4OSAxMDQuNzQxIDcwLjA0NzkgMTA0LjM0IDcwLjMwOTlMODQuMTQgODMuMzA5OUM4My41ODMxIDgzLjY3MDUgODMuMTkxNiA4NC4yMzY4IDgzLjA1MTEgODQuODg1MkM4Mi45MTA1IDg1LjUzMzUgODMuMDMyNCA4Ni4yMTExIDgzLjM5IDg2Ljc2OTlMODQuMTUgODcuOTQ5OUM4NC4zNzU2IDg4LjMwNTMgODQuNjg3MyA4OC41OTc5IDg1LjA1NjEgODguODAwN0M4NS40MjUgODkuMDAzNSA4NS44MzkxIDg5LjEwOTggODYuMjYgODkuMTA5OVY4OS4wOTk5Wk0xMTkuNDcgMTEwLjkxQzEyMC40NTkgMTEwLjkxIDEyMS40MjYgMTEwLjYxNyAxMjIuMjQ4IDExMC4wNjdDMTIzLjA3IDEwOS41MTggMTIzLjcxMSAxMDguNzM3IDEyNC4wODkgMTA3LjgyM0MxMjQuNDY4IDEwNi45MSAxMjQuNTY3IDEwNS45MDQgMTI0LjM3NCAxMDQuOTM0QzEyNC4xODEgMTAzLjk2NSAxMjMuNzA1IDEwMy4wNzQgMTIzLjAwNiAxMDIuMzc0QzEyMi4zMDYgMTAxLjY3NSAxMjEuNDE1IDEwMS4xOTkgMTIwLjQ0NSAxMDEuMDA2QzExOS40NzYgMTAwLjgxMyAxMTguNDcgMTAwLjkxMiAxMTcuNTU3IDEwMS4yOTFDMTE2LjY0MyAxMDEuNjY5IDExNS44NjIgMTAyLjMxIDExNS4zMTMgMTAzLjEzMkMxMTQuNzYzIDEwMy45NTQgMTE0LjQ3IDEwNC45MjEgMTE0LjQ3IDEwNS45MUMxMTQuNDcgMTA3LjIzNiAxMTQuOTk3IDEwOC41MDggMTE1LjkzNCAxMDkuNDQ1QzExNi44NzIgMTEwLjM4MyAxMTguMTQ0IDExMC45MSAxMTkuNDcgMTEwLjkxVjExMC45MVpNMTA2LjQ3IDExOC45MUMxMDcuNDU5IDExOC45MSAxMDguNDI2IDExOC42MTcgMTA5LjI0OCAxMTguMDY3QzExMC4wNyAxMTcuNTE4IDExMC43MTEgMTE2LjczNyAxMTEuMDg5IDExNS44MjNDMTExLjQ2OCAxMTQuOTEgMTExLjU2NyAxMTMuOTA0IDExMS4zNzQgMTEyLjkzNEMxMTEuMTgxIDExMS45NjUgMTEwLjcwNSAxMTEuMDc0IDExMC4wMDYgMTEwLjM3NEMxMDkuMzA2IDEwOS42NzUgMTA4LjQxNSAxMDkuMTk5IDEwNy40NDUgMTA5LjAwNkMxMDYuNDc2IDEwOC44MTMgMTA1LjQ3IDEwOC45MTIgMTA0LjU1NyAxMDkuMjkxQzEwMy42NDMgMTA5LjY2OSAxMDIuODYyIDExMC4zMSAxMDIuMzEzIDExMS4xMzJDMTAxLjc2MyAxMTEuOTU0IDEwMS40NyAxMTIuOTIxIDEwMS40NyAxMTMuOTFDMTAxLjQ3IDExNS4yMzYgMTAxLjk5NyAxMTYuNTA4IDEwMi45MzQgMTE3LjQ0NUMxMDMuODcyIDExOC4zODMgMTA1LjE0NCAxMTguOTEgMTA2LjQ3IDExOC45MVYxMTguOTFaTTkyLjQ3IDEyNi45MUM5My40NTg5IDEyNi45MSA5NC40MjU2IDEyNi42MTcgOTUuMjQ3OCAxMjYuMDY3Qzk2LjA3MDEgMTI1LjUxOCA5Ni43MTEgMTI0LjczNyA5Ny4wODk0IDEyMy44MjNDOTcuNDY3OCAxMjIuOTEgOTcuNTY2OSAxMjEuOTA0IDk3LjM3MzkgMTIwLjkzNEM5Ny4xODEgMTE5Ljk2NSA5Ni43MDQ4IDExOS4wNzQgOTYuMDA1NSAxMTguMzc0Qzk1LjMwNjMgMTE3LjY3NSA5NC40MTU0IDExNy4xOTkgOTMuNDQ1NCAxMTcuMDA2QzkyLjQ3NTUgMTE2LjgxMyA5MS40NzAyIDExNi45MTIgOTAuNTU2NiAxMTcuMjkxQzg5LjY0MjkgMTE3LjY2OSA4OC44NjIxIDExOC4zMSA4OC4zMTI3IDExOS4xMzJDODcuNzYzMiAxMTkuOTU0IDg3LjQ3IDEyMC45MjEgODcuNDcgMTIxLjkxQzg3LjQ3IDEyMy4yMzYgODcuOTk2OCAxMjQuNTA4IDg4LjkzNDUgMTI1LjQ0NUM4OS44NzIxIDEyNi4zODMgOTEuMTQzOSAxMjYuOTEgOTIuNDcgMTI2LjkxWk0xMjcuNDcgMzYuOTA5OUw2NC40NyA3My45MDk5TDMyLjQ3IDU1LjQwOTlMMSAzNy4yMDk5VjExMC41M0w2NC41IDE0Ny4xOUwxMjggMTEwLjU2VjM3LjIzOTlMMTI3LjQ2IDM2LjkyOTlMMTI3LjQ3IDM2LjkwOTlaTTg2LjI2IDg4LjA5OTlDODYuMDA4OCA4OC4xMDA0IDg1Ljc2MTYgODguMDM3NCA4NS41NDE0IDg3LjkxNjhDODUuMzIxMSA4Ny43OTYyIDg1LjEzNDggODcuNjIxOCA4NSA4Ny40MDk5TDg0LjIzIDg2LjIxOTlDODQuMDE4NCA4NS44ODQ5IDgzLjk0NjkgODUuNDggODQuMDMxMSA4NS4wOTI4Qzg0LjExNTMgODQuNzA1NSA4NC4zNDg0IDg0LjM2NjkgODQuNjggODQuMTQ5OUwxMDQuODggNzEuMTQ5OUMxMDUuMTE5IDcwLjk4OTYgMTA1LjQwMiA3MC45MDU5IDEwNS42OSA3MC45MDk5QzEwNS45NDEgNzAuOTA5NCAxMDYuMTg4IDcwLjk3MjQgMTA2LjQwOSA3MS4wOTNDMTA2LjYyOSA3MS4yMTM3IDEwNi44MTUgNzEuMzg4IDEwNi45NSA3MS41OTk5TDEwNy43MiA3Mi43ODk5QzEwNy45MzMgNzMuMTI1NSAxMDguMDA1IDczLjUzMiAxMDcuOTE4IDczLjkyMDFDMTA3LjgzMiA3NC4zMDgzIDEwNy41OTUgNzQuNjQ2MyAxMDcuMjYgNzQuODU5OUw4Ny4wNyA4Ny44NTk5Qzg2LjgyODYgODguMDE1OSA4Ni41NDc0IDg4LjA5OTIgODYuMjYgODguMDk5OVY4OC4wOTk5Wk0xMTkuNDcgMTA5LjlDMTE4LjY3OSAxMDkuOSAxMTcuOTA2IDEwOS42NjUgMTE3LjI0OCAxMDkuMjI2QzExNi41OSAxMDguNzg2IDExNi4wNzcgMTA4LjE2MiAxMTUuNzc0IDEwNy40MzFDMTE1LjQ3MiAxMDYuNyAxMTUuMzkzIDEwNS44OTUgMTE1LjU0NyAxMDUuMTJDMTE1LjcwMSAxMDQuMzQ0IDExNi4wODIgMTAzLjYzMSAxMTYuNjQyIDEwMy4wNzFDMTE3LjIwMSAxMDIuNTEyIDExNy45MTQgMTAyLjEzMSAxMTguNjkgMTAxLjk3N0MxMTkuNDY2IDEwMS44MjIgMTIwLjI3IDEwMS45MDIgMTIxLjAwMSAxMDIuMjA0QzEyMS43MzIgMTAyLjUwNyAxMjIuMzU2IDEwMy4wMiAxMjIuNzk2IDEwMy42NzhDMTIzLjIzNSAxMDQuMzM1IDEyMy40NyAxMDUuMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTA2Ljk2MSAxMjMuMDQ5IDEwNy45NzggMTIyLjI5OCAxMDguNzI4QzEyMS41NDggMTA5LjQ3OCAxMjAuNTMxIDEwOS45IDExOS40NyAxMDkuOVpNMTA2LjQ3IDExNy45QzEwNS42NzkgMTE3LjkgMTA0LjkwNiAxMTcuNjY1IDEwNC4yNDggMTE3LjIyNkMxMDMuNTkgMTE2Ljc4NiAxMDMuMDc3IDExNi4xNjIgMTAyLjc3NCAxMTUuNDMxQzEwMi40NzIgMTE0LjcgMTAyLjM5MyAxMTMuODk1IDEwMi41NDcgMTEzLjEyQzEwMi43MDEgMTEyLjM0NCAxMDMuMDgyIDExMS42MzEgMTAzLjY0MiAxMTEuMDcxQzEwNC4yMDEgMTEwLjUxMiAxMDQuOTE0IDExMC4xMzEgMTA1LjY5IDEwOS45NzdDMTA2LjQ2NiAxMDkuODIyIDEwNy4yNyAxMDkuOTAyIDEwOC4wMDEgMTEwLjIwNEMxMDguNzMyIDExMC41MDcgMTA5LjM1NiAxMTEuMDIgMTA5Ljc5NiAxMTEuNjc4QzExMC4yMzUgMTEyLjMzNSAxMTAuNDcgMTEzLjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExNC45NjEgMTEwLjA0OSAxMTUuOTc4IDEwOS4yOTggMTE2LjcyOEMxMDguNTQ4IDExNy40NzggMTA3LjUzMSAxMTcuOSAxMDYuNDcgMTE3LjlaTTkyLjQ3IDEyNS45QzkxLjY3ODkgMTI1LjkgOTAuOTA1NSAxMjUuNjY1IDkwLjI0NzcgMTI1LjIyNkM4OS41ODk5IDEyNC43ODYgODkuMDc3MiAxMjQuMTYyIDg4Ljc3NDUgMTIzLjQzMUM4OC40NzE3IDEyMi43IDg4LjM5MjUgMTIxLjg5NSA4OC41NDY5IDEyMS4xMkM4OC43MDEyIDEyMC4zNDQgODkuMDgyMiAxMTkuNjMxIDg5LjY0MTYgMTE5LjA3MUM5MC4yMDEgMTE4LjUxMiA5MC45MTM3IDExOC4xMzEgOTEuNjg5NiAxMTcuOTc3QzkyLjQ2NTYgMTE3LjgyMiA5My4yNjk4IDExNy45MDIgOTQuMDAwNyAxMTguMjA0Qzk0LjczMTYgMTE4LjUwNyA5NS4zNTYzIDExOS4wMiA5NS43OTU5IDExOS42NzhDOTYuMjM1NCAxMjAuMzM1IDk2LjQ3IDEyMS4xMDkgOTYuNDcgMTIxLjlDOTYuNDcgMTIyLjk2MSA5Ni4wNDg2IDEyMy45NzggOTUuMjk4NCAxMjQuNzI4Qzk0LjU0ODMgMTI1LjQ3OCA5My41MzA5IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMjUuNEM5NC40MDMgMTI1LjQgOTUuOTcgMTIzLjgzMyA5NS45NyAxMjEuOUM5NS45NyAxMTkuOTY3IDk0LjQwMyAxMTguNCA5Mi40NyAxMTguNEM5MC41MzcgMTE4LjQgODguOTcgMTE5Ljk2NyA4OC45NyAxMjEuOUM4OC45NyAxMjMuODMzIDkwLjUzNyAxMjUuNCA5Mi40NyAxMjUuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTE4LjlDOTMuMDYzMyAxMTguOSA5My42NDMzIDExOS4wNzYgOTQuMTM2NyAxMTkuNDA1Qzk0LjYzIDExOS43MzUgOTUuMDE0NSAxMjAuMjA0IDk1LjI0MTYgMTIwLjc1MkM5NS40Njg3IDEyMS4zIDk1LjUyODEgMTIxLjkwMyA5NS40MTIzIDEyMi40ODVDOTUuMjk2NiAxMjMuMDY3IDk1LjAxMDkgMTIzLjYwMiA5NC41OTEzIDEyNC4wMjFDOTQuMTcxNyAxMjQuNDQxIDkzLjYzNzIgMTI0LjcyNiA5My4wNTUyIDEyNC44NDJDOTIuNDczMyAxMjQuOTU4IDkxLjg3MDEgMTI0Ljg5OSA5MS4zMjE5IDEyNC42NzJDOTAuNzczNyAxMjQuNDQ0IDkwLjMwNTIgMTI0LjA2IDg5Ljk3NTYgMTIzLjU2N0M4OS42NDU5IDEyMy4wNzMgODkuNDcgMTIyLjQ5MyA4OS40NyAxMjEuOUM4OS40NyAxMjEuMTA0IDg5Ljc4NiAxMjAuMzQxIDkwLjM0ODcgMTE5Ljc3OUM5MC45MTEzIDExOS4yMTYgOTEuNjc0MyAxMTguOSA5Mi40NyAxMTguOVYxMTguOVpNOTIuNDcgMTE3LjlDOTEuNjc4OCAxMTcuOSA5MC45MDU1IDExOC4xMzQgOTAuMjQ3NyAxMTguNTc0Qzg5LjU4OTkgMTE5LjAxNCA4OS4wNzcyIDExOS42MzggODguNzc0NSAxMjAuMzY5Qzg4LjQ3MTcgMTIxLjEgODguMzkyNSAxMjEuOTA0IDg4LjU0NjggMTIyLjY4Qzg4LjcwMTIgMTIzLjQ1NiA4OS4wODIxIDEyNC4xNjkgODkuNjQxNSAxMjQuNzI4QzkwLjIwMSAxMjUuMjg4IDkwLjkxMzcgMTI1LjY2OSA5MS42ODk2IDEyNS44MjNDOTIuNDY1NSAxMjUuOTc3IDkzLjI2OTggMTI1Ljg5OCA5NC4wMDA3IDEyNS41OTVDOTQuNzMxNiAxMjUuMjkzIDk1LjM1NjMgMTI0Ljc4IDk1Ljc5NTggMTI0LjEyMkM5Ni4yMzU0IDEyMy40NjQgOTYuNDcgMTIyLjY5MSA5Ni40NyAxMjEuOUM5Ni40NyAxMjAuODM5IDk2LjA0ODUgMTE5LjgyMiA5NS4yOTg0IDExOS4wNzFDOTQuNTQ4MyAxMTguMzIxIDkzLjUzMDggMTE3LjkgOTIuNDcgMTE3LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg2LjI2IDg3LjZDODYuMDkyNyA4Ny41OTk3IDg1LjkyODEgODcuNTU3NCA4NS43ODE0IDg3LjQ3NzFDODUuNjM0NiA4Ny4zOTY3IDg1LjUxMDQgODcuMjgwOCA4NS40MiA4Ny4xNEw4NC42NSA4NkM4NC41NzkxIDg1Ljg4ODIgODQuNTMxMSA4NS43NjM1IDg0LjUwODggODUuNjMzQzg0LjQ4NjUgODUuNTAyNSA4NC40OTAzIDg1LjM2ODkgODQuNTIgODUuMjRDODQuNTc2OSA4NC45ODUxIDg0LjczMTIgODQuNzYyNiA4NC45NSA4NC42MkwxMDUuMTUgNzEuNjJDMTA1LjMxMSA3MS41MTYgMTA1LjQ5OCA3MS40NjA1IDEwNS42OSA3MS40NkMxMDUuODU3IDcxLjQ2MDIgMTA2LjAyMiA3MS41MDI1IDEwNi4xNjkgNzEuNTgyOUMxMDYuMzE1IDcxLjY2MzIgMTA2LjQ0IDcxLjc3OTEgMTA2LjUzIDcxLjkyTDEwNy4zIDczLjExQzEwNy40NDEgNzMuMzMzMSAxMDcuNDg3IDczLjYwMjYgMTA3LjQzIDczLjg2QzEwNy4zNzEgNzQuMTE2NSAxMDcuMjEzIDc0LjMzOTMgMTA2Ljk5IDc0LjQ4TDg2LjggODcuNDhDODYuNjM0OSA4Ny41Njk5IDg2LjQ0NzcgODcuNjExNSA4Ni4yNiA4Ny42WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDUuNjkgNzEuOTM5OUMxMDUuNzc0IDcxLjkzOTEgMTA1Ljg1NyA3MS45NTk5IDEwNS45MyA3Mi4wMDAxQzEwNi4wMDQgNzIuMDQwNCAxMDYuMDY2IDcyLjA5ODkgMTA2LjExIDcyLjE2OTlMMTA2Ljg4IDczLjM1OTlDMTA2Ljk0OCA3My40NzA0IDEwNi45NyA3My42MDM1IDEwNi45NCA3My43Mjk5QzEwNi45MSA3My44NjA2IDEwNi44MzEgNzMuOTc1IDEwNi43MiA3NC4wNDk5TDg2LjUyIDg2Ljk5OTlDODYuNDQxNiA4Ny4wNDg0IDg2LjM1MjEgODcuMDc1OSA4Ni4yNiA4Ny4wNzk5Qzg2LjE3NTMgODcuMDc5NyA4Ni4wOTIgODcuMDU3NSA4Ni4wMTg0IDg3LjAxNTRDODUuOTQ0NyA4Ni45NzMzIDg1Ljg4MzMgODYuOTEyOSA4NS44NCA4Ni44Mzk5TDg1LjA3IDg1LjY1OTlDODUuMDAyOSA4NS41NTI4IDg0Ljk3NzkgODUuNDI0NSA4NSA4NS4yOTk5Qzg1LjAwOTQgODUuMjM1OCA4NS4wMzMyIDg1LjE3NDYgODUuMDY5NSA4NS4xMjA5Qzg1LjEwNTkgODUuMDY3MiA4NS4xNTM5IDg1LjAyMjQgODUuMjEgODQuOTg5OUwxMDUuNDEgNzEuOTg5OUMxMDUuNDkyIDcxLjk0MTUgMTA1LjU4NSA3MS45MTcyIDEwNS42OCA3MS45MTk5TDEwNS42OSA3MS45Mzk5Wk0xMDUuNjggNzAuOTE5OUMxMDUuMzkyIDcwLjkxNTkgMTA1LjEwOSA3MC45OTk2IDEwNC44NyA3MS4xNTk5TDg0LjY3IDg0LjE1OTlDODQuMzM4NCA4NC4zNzY5IDg0LjEwNTMgODQuNzE1NSA4NC4wMjEyIDg1LjEwMjhDODMuOTM3IDg1LjQ5IDg0LjAwODQgODUuODk0OSA4NC4yMiA4Ni4yMjk5TDg1IDg3LjQwOTlDODUuMTA1NyA4Ny41NzYyIDg1LjI0MzMgODcuNzE5OSA4NS40MDQ4IDg3LjgzMjdDODUuNTY2MyA4Ny45NDU0IDg1Ljc0ODYgODguMDI1IDg1Ljk0MTEgODguMDY2OUM4Ni4xMzM3IDg4LjEwODcgODYuMzMyNSA4OC4xMTIgODYuNTI2MyA4OC4wNzY1Qzg2LjcyMDEgODguMDQwOSA4Ni45MDQ5IDg3Ljk2NzQgODcuMDcgODcuODU5OUwxMDcuMjYgNzQuODU5OUMxMDcuNTk1IDc0LjY0NjMgMTA3LjgzMiA3NC4zMDgzIDEwNy45MTkgNzMuOTIwMkMxMDguMDA1IDczLjUzMiAxMDcuOTMzIDczLjEyNTUgMTA3LjcyIDcyLjc4OTlMMTA3IDcxLjYyOTlDMTA2Ljg2NSA3MS40MTgxIDEwNi42NzkgNzEuMjQzNyAxMDYuNDU5IDcxLjEyMzFDMTA2LjIzOCA3MS4wMDI0IDEwNS45OTEgNzAuOTM5NCAxMDUuNzQgNzAuOTM5OUwxMDUuNjggNzAuOTE5OVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA2LjQ3IDExNy40QzEwOC40MDMgMTE3LjQgMTA5Ljk3IDExNS44MzMgMTA5Ljk3IDExMy45QzEwOS45NyAxMTEuOTY3IDEwOC40MDMgMTEwLjQgMTA2LjQ3IDExMC40QzEwNC41MzcgMTEwLjQgMTAyLjk3IDExMS45NjcgMTAyLjk3IDExMy45QzEwMi45NyAxMTUuODMzIDEwNC41MzcgMTE3LjQgMTA2LjQ3IDExNy40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTEwLjlDMTA3LjA2MyAxMTAuOSAxMDcuNjQzIDExMS4wNzYgMTA4LjEzNyAxMTEuNDA1QzEwOC42MyAxMTEuNzM1IDEwOS4wMTUgMTEyLjIwNCAxMDkuMjQyIDExMi43NTJDMTA5LjQ2OSAxMTMuMyAxMDkuNTI4IDExMy45MDMgMTA5LjQxMiAxMTQuNDg1QzEwOS4yOTcgMTE1LjA2NyAxMDkuMDExIDExNS42MDIgMTA4LjU5MSAxMTYuMDIxQzEwOC4xNzIgMTE2LjQ0MSAxMDcuNjM3IDExNi43MjYgMTA3LjA1NSAxMTYuODQyQzEwNi40NzMgMTE2Ljk1OCAxMDUuODcgMTE2Ljg5OSAxMDUuMzIyIDExNi42NzJDMTA0Ljc3NCAxMTYuNDQ0IDEwNC4zMDUgMTE2LjA2IDEwMy45NzYgMTE1LjU2N0MxMDMuNjQ2IDExNS4wNzMgMTAzLjQ3IDExNC40OTMgMTAzLjQ3IDExMy45QzEwMy40NyAxMTMuMTA0IDEwMy43ODYgMTEyLjM0MSAxMDQuMzQ5IDExMS43NzlDMTA0LjkxMSAxMTEuMjE2IDEwNS42NzQgMTEwLjkgMTA2LjQ3IDExMC45VjExMC45Wk0xMDYuNDcgMTA5LjlDMTA1LjY3OSAxMDkuOSAxMDQuOTA1IDExMC4xMzQgMTA0LjI0OCAxMTAuNTc0QzEwMy41OSAxMTEuMDE0IDEwMy4wNzcgMTExLjYzOCAxMDIuNzc0IDExMi4zNjlDMTAyLjQ3MiAxMTMuMSAxMDIuMzkyIDExMy45MDQgMTAyLjU0NyAxMTQuNjhDMTAyLjcwMSAxMTUuNDU2IDEwMy4wODIgMTE2LjE2OSAxMDMuNjQyIDExNi43MjhDMTA0LjIwMSAxMTcuMjg4IDEwNC45MTQgMTE3LjY2OSAxMDUuNjkgMTE3LjgyM0MxMDYuNDY2IDExNy45NzcgMTA3LjI3IDExNy44OTggMTA4LjAwMSAxMTcuNTk1QzEwOC43MzIgMTE3LjI5MyAxMDkuMzU2IDExNi43OCAxMDkuNzk2IDExNi4xMjJDMTEwLjIzNSAxMTUuNDY0IDExMC40NyAxMTQuNjkxIDExMC40NyAxMTMuOUMxMTAuNDcgMTEyLjgzOSAxMTAuMDQ5IDExMS44MjIgMTA5LjI5OCAxMTEuMDcxQzEwOC41NDggMTEwLjMyMSAxMDcuNTMxIDEwOS45IDEwNi40NyAxMDkuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwOS40QzEyMS40MDMgMTA5LjQgMTIyLjk3IDEwNy44MzMgMTIyLjk3IDEwNS45QzEyMi45NyAxMDMuOTY3IDEyMS40MDMgMTAyLjQgMTE5LjQ3IDEwMi40QzExNy41MzcgMTAyLjQgMTE1Ljk3IDEwMy45NjcgMTE1Ljk3IDEwNS45QzExNS45NyAxMDcuODMzIDExNy41MzcgMTA5LjQgMTE5LjQ3IDEwOS40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTAyLjlDMTIwLjA2MyAxMDIuOSAxMjAuNjQzIDEwMy4wNzYgMTIxLjEzNyAxMDMuNDA1QzEyMS42MyAxMDMuNzM1IDEyMi4wMTUgMTA0LjIwNCAxMjIuMjQyIDEwNC43NTJDMTIyLjQ2OSAxMDUuMyAxMjIuNTI4IDEwNS45MDMgMTIyLjQxMiAxMDYuNDg1QzEyMi4yOTcgMTA3LjA2NyAxMjIuMDExIDEwNy42MDIgMTIxLjU5MSAxMDguMDIxQzEyMS4xNzIgMTA4LjQ0MSAxMjAuNjM3IDEwOC43MjYgMTIwLjA1NSAxMDguODQyQzExOS40NzMgMTA4Ljk1OCAxMTguODcgMTA4Ljg5OSAxMTguMzIyIDEwOC42NzJDMTE3Ljc3NCAxMDguNDQ0IDExNy4zMDUgMTA4LjA2IDExNi45NzYgMTA3LjU2N0MxMTYuNjQ2IDEwNy4wNzMgMTE2LjQ3IDEwNi40OTMgMTE2LjQ3IDEwNS45QzExNi40NyAxMDUuMTA0IDExNi43ODYgMTA0LjM0MSAxMTcuMzQ5IDEwMy43NzlDMTE3LjkxMSAxMDMuMjE2IDExOC42NzQgMTAyLjkgMTE5LjQ3IDEwMi45VjEwMi45Wk0xMTkuNDcgMTAxLjlDMTE4LjY3OSAxMDEuOSAxMTcuOTA1IDEwMi4xMzQgMTE3LjI0OCAxMDIuNTc0QzExNi41OSAxMDMuMDE0IDExNi4wNzcgMTAzLjYzOCAxMTUuNzc0IDEwNC4zNjlDMTE1LjQ3MiAxMDUuMSAxMTUuMzkyIDEwNS45MDQgMTE1LjU0NyAxMDYuNjhDMTE1LjcwMSAxMDcuNDU2IDExNi4wODIgMTA4LjE2OSAxMTYuNjQyIDEwOC43MjhDMTE3LjIwMSAxMDkuMjg4IDExNy45MTQgMTA5LjY2OSAxMTguNjkgMTA5LjgyM0MxMTkuNDY2IDEwOS45NzcgMTIwLjI3IDEwOS44OTggMTIxLjAwMSAxMDkuNTk1QzEyMS43MzIgMTA5LjI5MyAxMjIuMzU2IDEwOC43OCAxMjIuNzk2IDEwOC4xMjJDMTIzLjIzNSAxMDcuNDY0IDEyMy40NyAxMDYuNjkxIDEyMy40NyAxMDUuOUMxMjMuNDcgMTA0LjgzOSAxMjMuMDQ5IDEwMy44MjIgMTIyLjI5OCAxMDMuMDcxQzEyMS41NDggMTAyLjMyMSAxMjAuNTMxIDEwMS45IDExOS40NyAxMDEuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuMzQgMTYuNjdMNjEuMDcgMzYuOUwzMi40NyA1NS40TDEuMDEwMDEgMzcuMjFMMS41NjAwMSAzNi45TDY0LjQ3IDAuNTc5OTU2TDkyLjM0IDE2LjY3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNTYwMDEgMzYuODk5OUwxLjAxMDAxIDM3LjIwOTlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcuNDMgMzYuOTI5OUw2NC40NyA3My44OTk5TDMyLjQ3IDU1LjM5OTlMNjEuMDcgMzYuODk5OUw5Mi4zNCAxNi42Njk5TDEyNy4zOCAzNi44OTk5TDEyNy40MyAzNi45Mjk5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTY0LjQ3IDczLjg5OTlWMTQ2LjlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiM1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTE3LjlDMTA4LjY3OSAxMTcuOSAxMTAuNDcgMTE2LjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExMS42OTEgMTA4LjY3OSAxMDkuOSAxMDYuNDcgMTA5LjlDMTA0LjI2MSAxMDkuOSAxMDIuNDcgMTExLjY5MSAxMDIuNDcgMTEzLjlDMTAyLjQ3IDExNi4xMDkgMTA0LjI2MSAxMTcuOSAxMDYuNDcgMTE3LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTI1LjlDOTQuNjc5MSAxMjUuOSA5Ni40NyAxMjQuMTA5IDk2LjQ3IDEyMS45Qzk2LjQ3IDExOS42OTEgOTQuNjc5MSAxMTcuOSA5Mi40NyAxMTcuOUM5MC4yNjA4IDExNy45IDg4LjQ3IDExOS42OTEgODguNDcgMTIxLjlDODguNDcgMTI0LjEwOSA5MC4yNjA4IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDkuOUMxMjEuNjc5IDEwOS45IDEyMy40NyAxMDguMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTAzLjY5MSAxMjEuNjc5IDEwMS45IDExOS40NyAxMDEuOUMxMTcuMjYxIDEwMS45IDExNS40NyAxMDMuNjkxIDExNS40NyAxMDUuOUMxMTUuNDcgMTA4LjEwOSAxMTcuMjYxIDEwOS45IDExOS40NyAxMDkuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMjguNDFcIiBoZWlnaHQ9XCIxNDcuMjJcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07IiwiY29uc3QgYmFzZVVybD0gIFwiaHR0cHM6Ly9iYWNrZW5kLWxvZ2lzdGljcy5oZXJva3VhcHAuY29tXCJcclxuZXhwb3J0IGNvbnN0IGFwaSA9IGAke2Jhc2VVcmx9L2FwaWA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
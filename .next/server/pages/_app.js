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
/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/api/axios */ "./pages/api/axios");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\Header.js";






const Header = () => {
  const {
    isLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const signout = async e => {
    e.preventDefault();
    const res = await _pages_api_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/signout').catch(function (error) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 64
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 40
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 18
    }, undefined), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 71
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 51
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 28
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      onClick: signout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 142
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 101
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\HeaderBar.js";




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

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\Layout.js";






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

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js";

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
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
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
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/signup', signup).catch(function (error) {
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
    res && res.status == 201 && (router.replace('/dashboard'), localStorage.setItem('token', res.data.token), console.log(success));
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    setAuthenticating(true);
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/signin', login).catch(function (error) {
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
    res && res.status == 200 && (setAuthenticating(false), setAuthenticate(true), localStorage.setItem('token', res.data.token), setisLogin(true), router.replace('/dashboard'));
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
      handleSignupChange,
      handleSignupSubmit,
      handleLoginSubmit,
      handleAdminSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 188,
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../urlConfig */ "./urlConfig.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\ClientContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ClientContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

const ClientContextProvider = props => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState); // .type !== Format[0] || Format[1] || Format[2]) && (profileImage.size <= Format[2] || profileImage.size <= Format[3])

  const {
    0: profileImage,
    1: setProfileImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: temporaryImage,
    1: setTemporaryImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: transaction,
    1: setTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);

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
        const storageRef = _firebase__WEBPACK_IMPORTED_MODULE_6__["store"].ref(`profileimages/${selected.name}`);
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

    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["profileValidate"])(name, value, formErrors);
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      [name]: value
    }));
  };

  const handleProfileSubmit = async e => {
    e.preventDefault();
    const token = localStorage && localStorage.getItem('token');
    let res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/profile/update', profile, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    });

    if (res.status == 201) {
      const {
        updatedProfile
      } = res.data;
      const {
        profileImage
      } = updatedProfile;
      setTemporaryImage(profileImage);
    }

    ;
  };

  const handleProfilePreview = e => {
    e.preventDefault();

    let newProfile = _objectSpread(_objectSpread({}, profile), {}, {
      profileImage
    });

    setProfile(newProfile);
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
    lineNumber: 105,
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
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const RequestContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const RequestContextProvider = props => {
  // const initialState =
  //     {sender: {
  //         firstName: '',
  //         phoneNumber1: '',
  //         phoneNumber2: '' },
  //    receiver: {
  //            firstName: '',
  //            phoneNumber1: '',
  //            phoneNumber2: '' },
  //    cartons: '',
  //    createdAt: '',
  //    deliveryLocations: '',
  //    descriptions: '',
  //    itemsWorth: '',
  //    otherItems: true,
  //    requestImages: [{img: '',
  //                     _id: ''}],
  //     status: '',
  //     tagName: '',
  //     amount: '',
  //     _id: '',
  //     formErrors: {
  //                 sender: {
  //                         firstName: '',
  //                         phoneNumber1: '',
  //                         phoneNumber2: '' },
  //                 receiver: {
  //                         firstName: '',
  //                         phoneNumber1: '',
  //                         phoneNumber2: '' },
  //                 cartons: '',
  //                 createdAt: '',
  //                 deliveryLocations: '',
  //                 descriptions: '',
  //                 itemsWorth: '',
  //                 otherItems: true,
  //                 requestImages: '',
  //                 status: '',
  //                 tagName: '',
  //                 amount: ''
  //                 }
  //    };
  const initialState = {
    cartons: "55",
    deliveryLocations: "lagos",
    descriptions: "thank you",
    itemsWorth: "5000",
    receiver: {
      firstName: "David",
      phoneNumber1: "07130614615",
      phoneNumber2: "08130614915"
    },
    sender: {
      firstName: "mayowa",
      phoneNumber1: "08130614615",
      phoneNumber2: "08140614615"
    },
    tagName: "chisom",
    otherItems: false,
    _id: undefined,
    formErrors: {
      sender: {
        firstName: '',
        phoneNumber1: '',
        phoneNumber2: ''
      },
      receiver: {
        firstName: '',
        phoneNumber1: '',
        phoneNumber2: ''
      },
      cartons: '',
      createdAt: '',
      deliveryLocations: '',
      descriptions: '',
      itemsWorth: '',
      otherItems: true,
      requestImages: '',
      status: '',
      tagName: '',
      amount: '',
      requestImages: [{
        img: ''
      }]
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const handleChange = e => {
    if (e) {
      const {
        sender
      } = _objectSpread({}, input);

      const {
        name,
        value,
        id
      } = e.target;

      const {
        formErrors
      } = _objectSpread({}, input);

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_4__["requestValidate"])(id, value, formErrors);
      sender[name] = e.target.value;

      const newInput = _objectSpread(_objectSpread({}, input), {}, {
        sender,
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

  const photoChange = e => {
    e.preventDefault();

    if (e.target.files) {
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
        const storageRef = _firebase__WEBPACK_IMPORTED_MODULE_6__["store"].ref(`requestImages/${selected.name}`);
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
    const token = localStorage && localStorage.getItem('token');
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/request/create', input, {
      headers: {
        'authorization': token ? `Bearer ${token}` : ''
      }
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        error.response.status && (error.response.status == '500' ||  true && (_helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/signout'), localStorage.clear(), router.replace('/login')));
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
    console.log(res);
    res && res.status == 201 && (console.log(res), setRequestSuccess(true));
  };

  const handleReceiver = e => {
    if (e) {
      const {
        receiver
      } = _objectSpread({}, input);

      const {
        name,
        id,
        value
      } = e.target;

      const {
        formErrors
      } = _objectSpread({}, input);

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_4__["requestValidate"])(id, value, formErrors);
      receiver[name] = e.target.value;

      const newInp = _objectSpread(_objectSpread({}, input), {}, {
        receiver
      });

      return setInput(newInp);
    }
  };

  const handleRequestUpdate = async (e, id) => {
    e.preventDefault();
    setInput(...input, requestImages);
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].put('/request/' + id, input);
  };

  const handleFormPreview = e => {
    e.preventDefault();
    setInput(_objectSpread(_objectSpread({}, input), {}, {
      requestImages
    }));
    setCount("active");
  };

  console.log(input);
  const selector = [{
    content: "contact",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["contact"])(),
    title: "Contact",
    id: 1
  }, {
    content: "gallery",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["gallery"])(),
    title: "Gallery",
    id: 2
  }, {
    content: "ShippingRequest",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["offBack"])(),
    title: "Request",
    id: 3
  }, {
    content: "",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["message"])(),
    title: "Message",
    id: 4
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RequestContext.Provider, {
    value: {
      input,
      error,
      requestImages,
      requestSuccess,
      setRequestSuccess,
      initialState,
      setCount,
      count,
      setInput,
      handleChange,
      handleReceiver,
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
    lineNumber: 228,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



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
const store = firebaseApp.storage();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();


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
      formErrors.sender.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "senderphoneNumber1":
      formErrors.sender.phoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "senderphoneNumber2":
      formErrors.sender.phoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverFirstname":
      formErrors.receiver.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverphoneNumber1":
      formErrors.receiver.phoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
      break;

    case "receiverphoneNumber2":
      formErrors.receiver.phoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*' : '';
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

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\_app.js";

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

/***/ "./pages/api/axios":
/*!*************************!*\
  !*** ./pages/api/axios ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../urlConfig */ "./urlConfig.js");




// const token = localStorage.getItem('token');


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"]
    // headers: {
    //     'Authorization': 
    //     token ? `Bearer ${token}`: ''
    // }
});

/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

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
/*! exports provided: box, profile, transaction, avatar, upload, contact, message, gallery, checkMark, close, Back, offBack */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offBack", function() { return offBack; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\svg.js";
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
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
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
      lineNumber: 91,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
        lineNumber: 98,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127 38.3599V110L64.5 146.08L2 110V38.9199L32 56.2599L64 74.7599L64.5 75.0499L65 74.7599L127 38.3599V38.3599ZM86.26 89.0999C86.7392 89.0998 87.2081 88.9609 87.61 88.6999L107.79 75.6999C108.068 75.5263 108.309 75.2989 108.497 75.031C108.686 74.7631 108.82 74.4601 108.89 74.1399C108.964 73.8171 108.972 73.483 108.916 73.1568C108.859 72.8306 108.738 72.519 108.56 72.2399L107.79 71.0599C107.565 70.7072 107.254 70.4169 106.887 70.2159C106.52 70.0149 106.108 69.9097 105.69 69.9099C105.211 69.9089 104.741 70.0479 104.34 70.3099L84.14 83.3099C83.5831 83.6705 83.1916 84.2368 83.0511 84.8852C82.9105 85.5335 83.0324 86.2111 83.39 86.7699L84.15 87.9499C84.3756 88.3053 84.6873 88.5979 85.0561 88.8007C85.425 89.0035 85.8391 89.1098 86.26 89.1099V89.0999ZM119.47 110.91C120.459 110.91 121.426 110.617 122.248 110.067C123.07 109.518 123.711 108.737 124.089 107.823C124.468 106.91 124.567 105.904 124.374 104.934C124.181 103.965 123.705 103.074 123.006 102.374C122.306 101.675 121.415 101.199 120.445 101.006C119.476 100.813 118.47 100.912 117.557 101.291C116.643 101.669 115.862 102.31 115.313 103.132C114.763 103.954 114.47 104.921 114.47 105.91C114.47 107.236 114.997 108.508 115.934 109.445C116.872 110.383 118.144 110.91 119.47 110.91V110.91ZM106.47 118.91C107.459 118.91 108.426 118.617 109.248 118.067C110.07 117.518 110.711 116.737 111.089 115.823C111.468 114.91 111.567 113.904 111.374 112.934C111.181 111.965 110.705 111.074 110.006 110.374C109.306 109.675 108.415 109.199 107.445 109.006C106.476 108.813 105.47 108.912 104.557 109.291C103.643 109.669 102.862 110.31 102.313 111.132C101.763 111.954 101.47 112.921 101.47 113.91C101.47 115.236 101.997 116.508 102.934 117.445C103.872 118.383 105.144 118.91 106.47 118.91V118.91ZM92.47 126.91C93.4589 126.91 94.4256 126.617 95.2478 126.067C96.0701 125.518 96.711 124.737 97.0894 123.823C97.4678 122.91 97.5669 121.904 97.3739 120.934C97.181 119.965 96.7048 119.074 96.0055 118.374C95.3063 117.675 94.4154 117.199 93.4454 117.006C92.4755 116.813 91.4702 116.912 90.5566 117.291C89.6429 117.669 88.8621 118.31 88.3127 119.132C87.7632 119.954 87.47 120.921 87.47 121.91C87.47 123.236 87.9968 124.508 88.9345 125.445C89.8721 126.383 91.1439 126.91 92.47 126.91ZM127.47 36.9099L64.47 73.9099L32.47 55.4099L1 37.2099V110.53L64.5 147.19L128 110.56V37.2399L127.46 36.9299L127.47 36.9099ZM86.26 88.0999C86.0088 88.1004 85.7616 88.0374 85.5414 87.9168C85.3211 87.7962 85.1348 87.6218 85 87.4099L84.23 86.2199C84.0184 85.8849 83.9469 85.48 84.0311 85.0928C84.1153 84.7055 84.3484 84.3669 84.68 84.1499L104.88 71.1499C105.119 70.9896 105.402 70.9059 105.69 70.9099C105.941 70.9094 106.188 70.9724 106.409 71.093C106.629 71.2137 106.815 71.388 106.95 71.5999L107.72 72.7899C107.933 73.1255 108.005 73.532 107.918 73.9201C107.832 74.3083 107.595 74.6463 107.26 74.8599L87.07 87.8599C86.8286 88.0159 86.5474 88.0992 86.26 88.0999V88.0999ZM119.47 109.9C118.679 109.9 117.906 109.665 117.248 109.226C116.59 108.786 116.077 108.162 115.774 107.431C115.472 106.7 115.393 105.895 115.547 105.12C115.701 104.344 116.082 103.631 116.642 103.071C117.201 102.512 117.914 102.131 118.69 101.977C119.466 101.822 120.27 101.902 121.001 102.204C121.732 102.507 122.356 103.02 122.796 103.678C123.235 104.335 123.47 105.109 123.47 105.9C123.47 106.961 123.049 107.978 122.298 108.728C121.548 109.478 120.531 109.9 119.47 109.9ZM106.47 117.9C105.679 117.9 104.906 117.665 104.248 117.226C103.59 116.786 103.077 116.162 102.774 115.431C102.472 114.7 102.393 113.895 102.547 113.12C102.701 112.344 103.082 111.631 103.642 111.071C104.201 110.512 104.914 110.131 105.69 109.977C106.466 109.822 107.27 109.902 108.001 110.204C108.732 110.507 109.356 111.02 109.796 111.678C110.235 112.335 110.47 113.109 110.47 113.9C110.47 114.961 110.049 115.978 109.298 116.728C108.548 117.478 107.531 117.9 106.47 117.9ZM92.47 125.9C91.6789 125.9 90.9055 125.665 90.2477 125.226C89.5899 124.786 89.0772 124.162 88.7745 123.431C88.4717 122.7 88.3925 121.895 88.5469 121.12C88.7012 120.344 89.0822 119.631 89.6416 119.071C90.201 118.512 90.9137 118.131 91.6896 117.977C92.4656 117.822 93.2698 117.902 94.0007 118.204C94.7316 118.507 95.3563 119.02 95.7959 119.678C96.2354 120.335 96.47 121.109 96.47 121.9C96.47 122.961 96.0486 123.978 95.2984 124.728C94.5483 125.478 93.5309 125.9 92.47 125.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.4C94.403 125.4 95.97 123.833 95.97 121.9C95.97 119.967 94.403 118.4 92.47 118.4C90.537 118.4 88.97 119.967 88.97 121.9C88.97 123.833 90.537 125.4 92.47 125.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 118.9C93.0633 118.9 93.6433 119.076 94.1367 119.405C94.63 119.735 95.0145 120.204 95.2416 120.752C95.4687 121.3 95.5281 121.903 95.4123 122.485C95.2966 123.067 95.0109 123.602 94.5913 124.021C94.1717 124.441 93.6372 124.726 93.0552 124.842C92.4733 124.958 91.8701 124.899 91.3219 124.672C90.7737 124.444 90.3052 124.06 89.9756 123.567C89.6459 123.073 89.47 122.493 89.47 121.9C89.47 121.104 89.786 120.341 90.3487 119.779C90.9113 119.216 91.6743 118.9 92.47 118.9V118.9ZM92.47 117.9C91.6788 117.9 90.9055 118.134 90.2477 118.574C89.5899 119.014 89.0772 119.638 88.7745 120.369C88.4717 121.1 88.3925 121.904 88.5468 122.68C88.7012 123.456 89.0821 124.169 89.6415 124.728C90.201 125.288 90.9137 125.669 91.6896 125.823C92.4655 125.977 93.2698 125.898 94.0007 125.595C94.7316 125.293 95.3563 124.78 95.7958 124.122C96.2354 123.464 96.47 122.691 96.47 121.9C96.47 120.839 96.0485 119.822 95.2984 119.071C94.5483 118.321 93.5308 117.9 92.47 117.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M86.26 87.6C86.0927 87.5997 85.9281 87.5574 85.7814 87.4771C85.6346 87.3967 85.5104 87.2808 85.42 87.14L84.65 86C84.5791 85.8882 84.5311 85.7635 84.5088 85.633C84.4865 85.5025 84.4903 85.3689 84.52 85.24C84.5769 84.9851 84.7312 84.7626 84.95 84.62L105.15 71.62C105.311 71.516 105.498 71.4605 105.69 71.46C105.857 71.4602 106.022 71.5025 106.169 71.5829C106.315 71.6632 106.44 71.7791 106.53 71.92L107.3 73.11C107.441 73.3331 107.487 73.6026 107.43 73.86C107.371 74.1165 107.213 74.3393 106.99 74.48L86.8 87.48C86.6349 87.5699 86.4477 87.6115 86.26 87.6Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M105.69 71.9399C105.774 71.9391 105.857 71.9599 105.93 72.0001C106.004 72.0404 106.066 72.0989 106.11 72.1699L106.88 73.3599C106.948 73.4704 106.97 73.6035 106.94 73.7299C106.91 73.8606 106.831 73.975 106.72 74.0499L86.52 86.9999C86.4416 87.0484 86.3521 87.0759 86.26 87.0799C86.1753 87.0797 86.092 87.0575 86.0184 87.0154C85.9447 86.9733 85.8833 86.9129 85.84 86.8399L85.07 85.6599C85.0029 85.5528 84.9779 85.4245 85 85.2999C85.0094 85.2358 85.0332 85.1746 85.0695 85.1209C85.1059 85.0672 85.1539 85.0224 85.21 84.9899L105.41 71.9899C105.492 71.9415 105.585 71.9172 105.68 71.9199L105.69 71.9399ZM105.68 70.9199C105.392 70.9159 105.109 70.9996 104.87 71.1599L84.67 84.1599C84.3384 84.3769 84.1053 84.7155 84.0212 85.1028C83.937 85.49 84.0084 85.8949 84.22 86.2299L85 87.4099C85.1057 87.5762 85.2433 87.7199 85.4048 87.8327C85.5663 87.9454 85.7486 88.025 85.9411 88.0669C86.1337 88.1087 86.3325 88.112 86.5263 88.0765C86.7201 88.0409 86.9049 87.9674 87.07 87.8599L107.26 74.8599C107.595 74.6463 107.832 74.3083 107.919 73.9202C108.005 73.532 107.933 73.1255 107.72 72.7899L107 71.6299C106.865 71.4181 106.679 71.2437 106.459 71.1231C106.238 71.0024 105.991 70.9394 105.74 70.9399L105.68 70.9199Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.4C108.403 117.4 109.97 115.833 109.97 113.9C109.97 111.967 108.403 110.4 106.47 110.4C104.537 110.4 102.97 111.967 102.97 113.9C102.97 115.833 104.537 117.4 106.47 117.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 110.9C107.063 110.9 107.643 111.076 108.137 111.405C108.63 111.735 109.015 112.204 109.242 112.752C109.469 113.3 109.528 113.903 109.412 114.485C109.297 115.067 109.011 115.602 108.591 116.021C108.172 116.441 107.637 116.726 107.055 116.842C106.473 116.958 105.87 116.899 105.322 116.672C104.774 116.444 104.305 116.06 103.976 115.567C103.646 115.073 103.47 114.493 103.47 113.9C103.47 113.104 103.786 112.341 104.349 111.779C104.911 111.216 105.674 110.9 106.47 110.9V110.9ZM106.47 109.9C105.679 109.9 104.905 110.134 104.248 110.574C103.59 111.014 103.077 111.638 102.774 112.369C102.472 113.1 102.392 113.904 102.547 114.68C102.701 115.456 103.082 116.169 103.642 116.728C104.201 117.288 104.914 117.669 105.69 117.823C106.466 117.977 107.27 117.898 108.001 117.595C108.732 117.293 109.356 116.78 109.796 116.122C110.235 115.464 110.47 114.691 110.47 113.9C110.47 112.839 110.049 111.822 109.298 111.071C108.548 110.321 107.531 109.9 106.47 109.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.4C121.403 109.4 122.97 107.833 122.97 105.9C122.97 103.967 121.403 102.4 119.47 102.4C117.537 102.4 115.97 103.967 115.97 105.9C115.97 107.833 117.537 109.4 119.47 109.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 102.9C120.063 102.9 120.643 103.076 121.137 103.405C121.63 103.735 122.015 104.204 122.242 104.752C122.469 105.3 122.528 105.903 122.412 106.485C122.297 107.067 122.011 107.602 121.591 108.021C121.172 108.441 120.637 108.726 120.055 108.842C119.473 108.958 118.87 108.899 118.322 108.672C117.774 108.444 117.305 108.06 116.976 107.567C116.646 107.073 116.47 106.493 116.47 105.9C116.47 105.104 116.786 104.341 117.349 103.779C117.911 103.216 118.674 102.9 119.47 102.9V102.9ZM119.47 101.9C118.679 101.9 117.905 102.134 117.248 102.574C116.59 103.014 116.077 103.638 115.774 104.369C115.472 105.1 115.392 105.904 115.547 106.68C115.701 107.456 116.082 108.169 116.642 108.728C117.201 109.288 117.914 109.669 118.69 109.823C119.466 109.977 120.27 109.898 121.001 109.595C121.732 109.293 122.356 108.78 122.796 108.122C123.235 107.464 123.47 106.691 123.47 105.9C123.47 104.839 123.049 103.822 122.298 103.071C121.548 102.321 120.531 101.9 119.47 101.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.34 16.67L61.07 36.9L32.47 55.4L1.01001 37.21L1.56001 36.9L64.47 0.579956L92.34 16.67Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.56001 36.8999L1.01001 37.2099",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.43 36.9299L64.47 73.8999L32.47 55.3999L61.07 36.8999L92.34 16.6699L127.38 36.8999L127.43 36.9299Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M64.47 73.8999V146.9",
        stroke: "black",
        strokeWidth: "3",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.9C108.679 117.9 110.47 116.109 110.47 113.9C110.47 111.691 108.679 109.9 106.47 109.9C104.261 109.9 102.47 111.691 102.47 113.9C102.47 116.109 104.261 117.9 106.47 117.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.9C94.6791 125.9 96.47 124.109 96.47 121.9C96.47 119.691 94.6791 117.9 92.47 117.9C90.2608 117.9 88.47 119.691 88.47 121.9C88.47 124.109 90.2608 125.9 92.47 125.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.9C121.679 109.9 123.47 108.109 123.47 105.9C123.47 103.691 121.679 101.9 119.47 101.9C117.261 101.9 115.47 103.691 115.47 105.9C115.47 108.109 117.261 109.9 119.47 109.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
          lineNumber: 118,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlckJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0b3IvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXhpb3MiLCJ3ZWJwYWNrOi8vLy4vc3ZnLmpzIiwid2VicGFjazovLy8uL3VybENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiaXNMb2dpbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ25vdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJheGlvcyIsInBvc3QiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXR1cyIsImhlYWRlcnMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwicmVwbGFjZSIsIkhlYWRlckJhciIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsInNldGlzTG9naW4iLCJ1c2VTdGF0ZSIsInNlc3Npb25Ub2tlbiIsInNldFNlc3Npb25Ub2tlbiIsInNpZ251cCIsInNldFNpZ251cCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInBhc3N3b3JkIiwiZm9ybUVycm9ycyIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwibG9naW4iLCJzZXRMb2dpbiIsImF1dGhlbnRpY2F0ZSIsInNldEF1dGhlbnRpY2F0ZSIsImF1dGhlbnRpY2F0aW5nIiwic2V0QXV0aGVudGljYXRpbmciLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwiaGFuZGxlTG9naW5DaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsb2dpblZhbGlkYXRlIiwibmV3TG9naW4iLCJoYW5kbGVTaWdudXBDaGFuZ2UiLCJzaW5ndXBWYWxpZGF0ZSIsIm5ld1NpZ251cCIsImhhbmRsZVNpZ251cFN1Ym1pdCIsInNldEl0ZW0iLCJoYW5kbGVMb2dpblN1Ym1pdCIsImhhbmRsZUFkbWluU3VibWl0IiwiQ2xpZW50Q29udGV4dCIsIkNsaWVudENvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJzZXRQcm9maWxlSW1hZ2UiLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInRyYW5zYWN0aW9uIiwic2V0VHJhbnNhY3Rpb24iLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwibmV3UGVyY2VudGFnZSIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyIiwibmV3VXJsIiwiZ2V0RG93bmxvYWRVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJwcm9maWxlRGV0YWlscyIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJnZXRJdGVtIiwidXBkYXRlZFByb2ZpbGUiLCJoYW5kbGVQcm9maWxlUHJldmlldyIsIm5ld1Byb2ZpbGUiLCJSZXF1ZXN0Q29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJjYXJ0b25zIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiLCJpdGVtc1dvcnRoIiwicmVjZWl2ZXIiLCJwaG9uZU51bWJlcjEiLCJwaG9uZU51bWJlcjIiLCJzZW5kZXIiLCJ0YWdOYW1lIiwib3RoZXJJdGVtcyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJhbW91bnQiLCJpbWciLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2V0UmVxdWVzdEltYWdlcyIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsImhhbmRsZUNoYW5nZSIsImlkIiwicmVxdWVzdFZhbGlkYXRlIiwibmV3SW5wdXQiLCJoYW5kbGVDaGVjayIsImNoZWNrZWQiLCJwaG90b0NoYW5nZSIsInBlcmZlY3RTaXplIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsImNsb3VkVXJsIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsImhhbmRsZUZvcm1QcmV2aWV3Iiwic2VsZWN0b3IiLCJjb250ZW50IiwiaWNvbiIsImNvbnRhY3QiLCJ0aXRsZSIsImdhbGxlcnkiLCJvZmZCYWNrIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsInN0b3JhZ2UiLCJkYXRhYmFzZSIsImZpcmVzdG9yZSIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJhcGkiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImxpbmsiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJwYWdlIiwicGFyc2VkSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeUFwcCIsImJveCIsImF2YXRhciIsInVwbG9hZCIsImNoZWNrTWFyayIsImNsb3NlIiwiQmFjayIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFD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QkgsQ0E3Qk0sQzs7Ozs7Ozs7Ozs7O0FDOUZQO0FBQUE7QUFBQSxNQUFNK1gsT0FBTyxHQUFHLHlDQUFoQjtBQUNPLE1BQU12VyxHQUFHLEdBQUksR0FBRXVXLE9BQVEsTUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBheGlvcyBmcm9tICcuLi9wYWdlcy9hcGkvYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgc2lnbm91dCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWdub3V0JykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YT5HNCBsb2dpc3RpY3M8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIHtpc0xvZ2luPyA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPiBsb2dpbjwvYT48L0xpbms+PC9kaXY+IDogIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIiBvbkNsaWNrPXtzaWdub3V0fT48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBIZWFkZXJCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YT5HNCBsb2dpc3RpY3M8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIHtpc0xvZ2luPyA8ZGl2PjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT4gbG9naW48L2E+PC9MaW5rPjwvZGl2PiA6ICA8ZGl2PjxhPiBTaWduIE91dDwvYT48L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBIZWFkZXJCYXI7IiwiIGltcG9ydCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyIGZyb20gJy4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbiBpbXBvcnQgQXV0aENvbnRleHRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IENsaWVudENvbnRleHRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvQ2xpZW50Q29udGV4dCc7XHJcbmltcG9ydCBIZWFkZXJCYXIgZnJvbSAnLi9IZWFkZXJCYXInO1xyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDbGllbnRDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NsaWVudENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvUmVxdWVzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHsgbG9naW5WYWxpZGF0ZSwgc2luZ3VwVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBzaWdub3V0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWdub3V0JykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSBsb2dpbjtcclxuICAgICAgICBsb2dpblZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgbGV0IG5ld0xvZ2luID0geyAuLi5sb2dpbiwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICBsZXQgbmV3U2lnbnVwID0geyAuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvc2lnbnVwJywgc2lnbnVwKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIHJlcyAmJiAocmVzLnN0YXR1cyA9PSAyMDEgJiYgKFxyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2Rhc2hib2FyZCcpLFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS50b2tlbiksXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgIH07IFxyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTG9naW5TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWduaW4nLCBsb2dpbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJlcyAmJiAocmVzLnN0YXR1cyA9PSAyMDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aGVudGljYXRpbmcoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aGVudGljYXRlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pLFxyXG4gICAgICAgICAgICAgICAgc2V0aXNMb2dpbih0cnVlKSxcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvZGFzaGJvYXJkJykpKVxyXG4gICAgICB9OyBcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUFkbWluU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW4vc2lnbmluJywgbG9naW4pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0ZSh0cnVlKTtcclxuICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgY29uc3Qge3Rva2VuLCB1c2VyfT0gcmVzLmRhdGE7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJ3ZWxjb21lXCI7XHJcbiAgICAgICAgc2V0U3VjY2Vzcyh7Li4uc3VjY2VzcywgbWVzc2FnZSwgdG9rZW4sIHVzZXJ9KTtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2NvbnRhY3QnKTtcclxuICAgICAgIH1cclxuICAgICAgfTsgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Nlc3Npb25Ub2tlbiwgc2lnbm91dCwgc2V0U2Vzc2lvblRva2VuLCBsb2dpbiwgc2lnbnVwLCBpc0xvZ2luLCBzZXRpc0xvZ2luLCBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlU2lnbnVwQ2hhbmdlLCBoYW5kbGVTaWdudXBTdWJtaXQsIGhhbmRsZUxvZ2luU3VibWl0LCBoYW5kbGVBZG1pblN1Ym1pdH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IG9iamVjdCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnZW5lcmF0ZVB1YmxpY1VybH0gZnJvbSAnLi4vLi4vdXJsQ29uZmlnJztcclxuaW1wb3J0IHsgcHJvZmlsZVZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgICAvLyAudHlwZSAhPT0gRm9ybWF0WzBdIHx8IEZvcm1hdFsxXSB8fCBGb3JtYXRbMl0pICYmIChwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbMl0gfHwgcHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzNdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgICAgICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICAgICAgbGV0IGhvbGQgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGBwcm9maWxlaW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZmlsZUltYWdlKG5ld1VybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3Byb2ZpbGUvdXBkYXRlJywgcHJvZmlsZSwgeyBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICB9fSk7XHJcbiAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgIGNvbnN0IHt1cGRhdGVkUHJvZmlsZX0gPSByZXMuZGF0YTtcclxuICAgICAgY29uc3Qge3Byb2ZpbGVJbWFnZX0gPSB1cGRhdGVkUHJvZmlsZTtcclxuICAgICBzZXRUZW1wb3JhcnlJbWFnZShwcm9maWxlSW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gIH07IFxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5ld1Byb2ZpbGUgPSB7Li4ucHJvZmlsZSwgcHJvZmlsZUltYWdlfVxyXG4gICAgc2V0UHJvZmlsZShuZXdQcm9maWxlKTtcclxuICAgIHNldENvdW50KCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAvLyAgICAge3NlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAvLyAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgLy8gICAgIF9pZDogJycsXHJcbiAgICAvLyAgICAgZm9ybUVycm9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAvLyAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICByZWNlaXZlcjoge2ZpcnN0TmFtZTogXCJEYXZpZFwiLCBwaG9uZU51bWJlcjE6IFwiMDcxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTMwNjE0OTE1XCJ9LFxyXG4gICAgICAgIHNlbmRlcjoge2ZpcnN0TmFtZTogXCJtYXlvd2FcIiwgcGhvbmVOdW1iZXIxOiBcIjA4MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODE0MDYxNDYxNVwifSxcclxuICAgICAgICB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIF9pZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBjb25zdCB7c2VuZGVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIHNlbmRlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgc2VuZGVyLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG5cclxuXHJcbmNvbnN0IHBob3RvQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgbGV0IHBlcmZlY3RTaXplID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgIGxldCByZXN0cnVjdHVyZVVybCA9IHtpbWFnZVNvdXJjZTogcGVyZmVjdFNpemV9XHJcbiAgICBwZXJmZWN0U2l6ZSAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKFsuLi50ZW1wb3JhcnlJbWFnZSwgcmVzdHJ1Y3R1cmVVcmxdKTtcclxuICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjbG91ZFVybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHtjbG91ZFVybH1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlcXVlc3QvY3JlYXRlJywgaW5wdXQsIHtcclxuICAgICAgICAgICAgaGVhZGVycyA6IHsnYXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ31cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gJzUwMCcgfHwgJzQwMCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvc2lnbm91dCcpLFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKSxcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICByZXMgJiYgKFxyXG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMgPT0gMjAxICYmIChcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKSxcclxuICAgICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZWNlaXZlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgaWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICByZWNlaXZlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbnAgPSB7IC4uLmlucHV0LCByZWNlaXZlciB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wKTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCguLi5pbnB1dCwgcmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KCcvcmVxdWVzdC8nICsgaWQsIGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoey4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzfSk7XHJcbiAgICAgICAgc2V0Q291bnQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCByZXF1ZXN0SW1hZ2VzLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBQ0lEZWlxUUlIZXh0alRpMjhOVkRtaDVoV0hhaHVpTkVcIixcclxuICAgIGF1dGhEb21haW46IFwibWF5b3ItZGIxM2EuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL21heW9yLWRiMTNhLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwibWF5b3ItZGIxM2FcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibWF5b3ItZGIxM2EuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIyOTA1NTAyOTc3XCIsXHJcbiAgICBhcHBJZDogXCIxOjIyOTA1NTAyOTc3OndlYjoyNDhmZDQyNmExY2U0NDk3MzM2ZjAwXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBmaXJlYmFzZUFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDpmaXJlYmFzZS5hcHAoKTtcclxuICBjb25zdCBzdG9yZSA9IGZpcmViYXNlQXBwLnN0b3JhZ2UoKTtcclxuICBjb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gXHJcbiAgZXhwb3J0IHtzdG9yZSwgZGF0YWJhc2V9OyAgXHJcbiAiLCJleHBvcnQgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwaG9uZU51bWJlclwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBob25lTnVtYmVyID0gdmFsdWUubGVuZ3RoIDwgMTEgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKmlucHV0IGEgdmFsaWQgcGhvbmUgbnVtYmVyKicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiYWRkcmVzc1wiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmFkZHJlc3MgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0XHJcblx0ICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFZhbGlkYXRlID0gKCBpZCwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblxyXG5cdHN3aXRjaCAoaWQpIHtcclxuXHRcdGNhc2UgXCJzZW5kZXJGaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2VuZGVycGhvbmVOdW1iZXIxXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuc2VuZGVyLnBob25lTnVtYmVyMSA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZW5kZXJwaG9uZU51bWJlcjJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIyID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJlY2VpdmVyRmlyc3RuYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucmVjZWl2ZXIuZmlyc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmVjZWl2ZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjEgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjIgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidGFnTmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnRhZ05hbWUgPSB2YWx1ZS5sZW5ndGggPCAyICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJDYXJ0b25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuY2FydG9ucyA9IHZhbHVlLmxlbmd0aCA8PSAwICA/ICcqaW5wdXQgbnVtYmVyIG9mIGl0ZW1zKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpdGVtc1dvcnRoXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuaXRlbXNXb3J0aCA9IHZhbHVlLmxlbmd0aCA8PSAwID8gJyppbnB1dCBpdGVtcyB3b3J0aConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVsaXZlcnlMb2NhdGlvblwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyppbnB1dCBhIHByb3BlciBzdGF0ZSonOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVzY3JpcHRpb25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZGVzY3JpcHRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVmFsaWRhdGUgPSAoIG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cdFxyXG5cdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGFzc3dvcmRcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5wYXNzd29yZCA9IHZhbHVlLmxlbmd0aCA8IDYgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKnBhc3N3b3JkIGlzIHRvbyBzaG9ydConIDogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdCAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmd1cFZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPiAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoID4gMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGhvbmVOdW1iZXJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5waG9uZU51bWJlciA9IHZhbHVlLmxlbmd0aCA+IDEwICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIG51bWJlcionO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBhc3N3b3JkXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGFzc3dvcmQgPSB2YWx1ZS5sZW5ndGggPCA2ICAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJypwYXNzd29yZCBpcyB0b28gc2hvcnQqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi91cmxDb25maWcnOyBcclxuICAgXHJcbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogYXBpXHJcbn0pO1xyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zSW5zdGFuY2U7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUoXG4gIHBhcnNlZEhyZWY6IFVybE9iamVjdCxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBhcHBseUJhc2VQYXRoID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gIClcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gIHJldHVybiBwYXJzZWRIcmVmXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlbXVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXNQYXRoKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLy8gTWFpbiBDU1NcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgPC9MYXlvdXQ+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcblxyXG5cclxuLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcblxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGFwaVxyXG4gICAgLy8gaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdBdXRob3JpemF0aW9uJzogXHJcbiAgICAvLyAgICAgdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICAgIC8vIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyIsImV4cG9ydCBjb25zdCBib3ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIyMDVcIiBjbGFzc05hbWU9XCJib3hcIiBoZWlnaHQ9XCIyMzFcIiB2aWV3Qm94PVwiMCAwIDIwNSAyMzFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTk5LjY0IDYzLjU4NDFWMTcxLjkzM0wxNzUuNDEgMTg1Ljg3NUMxNzcuMDMyIDE4NC4zOTggMTc4LjA4NCAxODIuNCAxNzguMzgzIDE4MC4yM0MxNzguNjgzIDE3OC4wNTkgMTc4LjIxMSAxNzUuODUyIDE3Ny4wNDkgMTczLjk5M0MxNzUuODg3IDE3Mi4xMzMgMTc0LjEwOSAxNzAuNzM4IDE3Mi4wMjQgMTcwLjA0OUMxNjkuOTM4IDE2OS4zNiAxNjcuNjc3IDE2OS40MjEgMTY1LjYzMiAxNzAuMjIyQzE2My41ODYgMTcxLjAyMiAxNjEuODg3IDE3Mi41MTIgMTYwLjgyOCAxNzQuNDMxQzE1OS43NjkgMTc2LjM1MSAxNTkuNDE4IDE3OC41OCAxNTkuODM1IDE4MC43MzFDMTYwLjI1MSAxODIuODgyIDE2MS40MSAxODQuODIgMTYzLjExIDE4Ni4yMDhDMTY0LjgxIDE4Ny41OTYgMTY2Ljk0NCAxODguMzQ3IDE2OS4xNDEgMTg4LjMyOUMxNzAuMDkyIDE4OC4zMzQgMTcxLjAzOCAxODguMTkyIDE3MS45NDYgMTg3LjkwN0wxNTMuMTM5IDE5OC44NDlDMTU0Ljk5MSAxOTcuMzc2IDE1Ni4yMTggMTk1LjI1OSAxNTYuNTc0IDE5Mi45MjNDMTU2LjkyOSAxOTAuNTg3IDE1Ni4zODcgMTg4LjIwMyAxNTUuMDU2IDE4Ni4yNDhDMTUzLjcyNiAxODQuMjkzIDE1MS43MDQgMTgyLjkxMSAxNDkuMzk1IDE4Mi4zNzlDMTQ3LjA4NyAxODEuODQ2IDE0NC42NjIgMTgyLjIwMyAxNDIuNjA1IDE4My4zNzZDMTQwLjU0OSAxODQuNTUgMTM5LjAxMyAxODYuNDU1IDEzOC4zMDQgMTg4LjcxQzEzNy41OTUgMTkwLjk2NCAxMzcuNzY1IDE5My40MDMgMTM4Ljc4MSAxOTUuNTM3QzEzOS43OTcgMTk3LjY3MiAxNDEuNTg0IDE5OS4zNDYgMTQzLjc4NCAyMDAuMjIzQzE0NS45ODQgMjAxLjEwMSAxNDguNDM1IDIwMS4xMTggMTUwLjY0NyAyMDAuMjcxTDEwMy4yNTIgMjI3LjQwNUw2Ljg2NDcxIDE3MS45MzNWNjQuNDQzOEw1MS41MTY1IDkwLjIwMjVMMTAxLjY2OSAxMTkuMTE5TDEwMy4yMzcgMTIwLjAyNUwxMDQuODA0IDExOS4xMDNMMTk5LjYwOSA2My41ODQxSDE5OS42NFpNMTM3LjM1NiAxNDEuNzM2QzEzOC40MTEgMTQxLjc0IDEzOS40NDUgMTQxLjQ0MSAxNDAuMzM0IDE0MC44NzZMMTcxLjk0NiAxMjAuNTU2QzE3Mi41NTcgMTIwLjE3IDE3My4wODYgMTE5LjY2NyAxNzMuNTAxIDExOS4wNzZDMTczLjkxNyAxMTguNDg2IDE3NC4yMTEgMTE3LjgxOSAxNzQuMzY3IDExNy4xMTRDMTc0LjUyMiAxMTYuNDEgMTc0LjUzNyAxMTUuNjgxIDE3NC40MDkgMTE0Ljk3MUMxNzQuMjgyIDExNC4yNjEgMTc0LjAxNSAxMTMuNTgzIDE3My42MjMgMTEyLjk3NkwxNzIuNDAxIDExMS4xNjNDMTcyLjAxMiAxMTAuNTU2IDE3MS41MDggMTEwLjAzMiAxNzAuOTE1IDEwOS42MjFDMTcwLjMyMyAxMDkuMjEgMTY5LjY1NSAxMDguOTIgMTY4Ljk1IDEwOC43NjhDMTY4LjI0NSAxMDguNjE1IDE2Ny41MTcgMTA4LjYwMyAxNjYuODA3IDEwOC43MzNDMTY2LjA5NyAxMDguODYyIDE2NS40MiAxMDkuMTMgMTY0LjgxNSAxMDkuNTIyTDEzMy4yMTkgMTI5LjczMUMxMzIuNjA4IDEzMC4xMjUgMTMyLjA4MyAxMzAuNjM2IDEzMS42NzMgMTMxLjIzNUMxMzEuMjYyIDEzMS44MzMgMTMwLjk3NiAxMzIuNTA3IDEzMC44MyAxMzMuMjE3QzEzMC42ODQgMTMzLjkyNyAxMzAuNjgyIDEzNC42NTkgMTMwLjgyMyAxMzUuMzcxQzEzMC45NjQgMTM2LjA4MiAxMzEuMjQ1IDEzNi43NTggMTMxLjY1MSAxMzcuMzU5TDEzMi44MjcgMTM5LjE4OEMxMzMuMzI1IDEzOS45NzkgMTM0LjAxOSAxNDAuNjI4IDEzNC44NDMgMTQxLjA3MkMxMzUuNjY3IDE0MS41MTUgMTM2LjU5MiAxNDEuNzM5IDEzNy41MjkgMTQxLjcyTDEzNy4zNTYgMTQxLjczNlpNMTg5LjU5NCAxNzUuNzk0QzE5MS40NTQgMTc1Ljc5NCAxOTMuMjcyIDE3NS4yNDQgMTk0LjgxOCAxNzQuMjEzQzE5Ni4zNjUgMTczLjE4MyAxOTcuNTcgMTcxLjcxOCAxOTguMjgyIDE3MC4wMDVDMTk4Ljk5MyAxNjguMjkxIDE5OS4xOCAxNjYuNDA1IDE5OC44MTcgMTY0LjU4NkMxOTguNDU0IDE2Mi43NjcgMTk3LjU1OCAxNjEuMDk2IDE5Ni4yNDMgMTU5Ljc4NEMxOTQuOTI4IDE1OC40NzMgMTkzLjI1MiAxNTcuNTggMTkxLjQyOCAxNTcuMjE4QzE4OS42MDQgMTU2Ljg1NiAxODcuNzEzIDE1Ny4wNDIgMTg1Ljk5NSAxNTcuNzUxQzE4NC4yNzcgMTU4LjQ2MSAxODIuODA4IDE1OS42NjMgMTgxLjc3NSAxNjEuMjA2QzE4MC43NDIgMTYyLjc0OCAxODAuMTkgMTY0LjU2MSAxODAuMTkgMTY2LjQxNkMxODAuMTkgMTY4LjkwMyAxODEuMTgxIDE3MS4yODggMTgyLjk0NCAxNzMuMDQ3QzE4NC43MDggMTc0LjgwNiAxODcuMSAxNzUuNzk0IDE4OS41OTQgMTc1Ljc5NFpNMjAyLjEzMiA1OC41NjY4TDEwMy4zOTMgMTE2LjM5OUw1My4wOTk0IDg3LjUyOTdMMy43OTI4NSA1OS4wNTEzVjE3My42NTNMMTAzLjMxNSAyMzAuOTUzTDIwMi44MzcgMTczLjY1M1Y1OS4wOTgyTDIwMS45OTEgNTguNjEzN0wyMDIuMTMyIDU4LjU2NjhaTTEzNy4zODggMTM4LjU5NEMxMzYuOTk5IDEzOC42IDEzNi42MTUgMTM4LjUwNyAxMzYuMjcyIDEzOC4zMjNDMTM1LjkyOSAxMzguMTQgMTM1LjYzOSAxMzcuODczIDEzNS40MjkgMTM3LjU0N0wxMzQuMjIyIDEzNS42ODdDMTMzLjg5IDEzNS4xNjMgMTMzLjc3OCAxMzQuNTMgMTMzLjkxIDEzMy45MjVDMTM0LjA0MiAxMzMuMzIgMTM0LjQwNyAxMzIuNzkgMTM0LjkyNyAxMzIuNDUxTDE2Ni41ODYgMTEyLjEzMkMxNjYuOTU5IDExMS44ODggMTY3LjM5NCAxMTEuNzU4IDE2Ny44NCAxMTEuNzU3QzE2OC4yMzUgMTExLjc1OSAxNjguNjI0IDExMS44NTkgMTY4Ljk3MSAxMTIuMDQ3QzE2OS4zMTggMTEyLjIzNSAxNjkuNjEzIDExMi41MDYgMTY5LjgzIDExMi44MzVMMTcxLjAzNyAxMTQuNjk1QzE3MS4zNzEgMTE1LjIyIDE3MS40ODMgMTE1Ljg1NSAxNzEuMzQ4IDExNi40NjJDMTcxLjIxMyAxMTcuMDY4IDE3MC44NDIgMTE3LjU5NyAxNzAuMzE2IDExNy45MzFMMTM4LjY3MyAxMzguMjVDMTM4LjI5MiAxMzguNTAxIDEzNy44NDQgMTM4LjYzMiAxMzcuMzg4IDEzOC42MjVWMTM4LjU5NFpNMTg5LjQ1MyAxNzIuNjY4QzE4OC4yMTMgMTcyLjY2OCAxODcuMDAxIDE3Mi4zMDEgMTg1Ljk3IDE3MS42MTRDMTg0LjkzOSAxNzAuOTI3IDE4NC4xMzUgMTY5Ljk1MSAxODMuNjYxIDE2OC44MDhDMTgzLjE4NiAxNjcuNjY2IDE4My4wNjIgMTY2LjQwOSAxODMuMzA0IDE2NS4xOTZDMTgzLjU0NiAxNjMuOTgzIDE4NC4xNDMgMTYyLjg2OSAxODUuMDIgMTYxLjk5NUMxODUuODk2IDE2MS4xMiAxODcuMDEzIDE2MC41MjUgMTg4LjIzIDE2MC4yODRDMTg5LjQ0NiAxNjAuMDQzIDE5MC43MDYgMTYwLjE2NiAxOTEuODUyIDE2MC42NEMxOTIuOTk3IDE2MS4xMTMgMTkzLjk3NiAxNjEuOTE0IDE5NC42NjUgMTYyLjk0MkMxOTUuMzU0IDE2My45NyAxOTUuNzIyIDE2NS4xNzkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTY4LjA3NCAxOTUuMDYxIDE2OS42NjQgMTkzLjg4NiAxNzAuODM3QzE5Mi43MSAxNzIuMDA5IDE5MS4xMTUgMTcyLjY2OCAxODkuNDUzIDE3Mi42NjhaTTE2OS4wNzggMTg1LjE3MkMxNjcuODM4IDE4NS4xNzIgMTY2LjYyNiAxODQuODA1IDE2NS41OTUgMTg0LjExOEMxNjQuNTY0IDE4My40MzEgMTYzLjc2MSAxODIuNDU1IDE2My4yODYgMTgxLjMxM0MxNjIuODEyIDE4MC4xNyAxNjIuNjg3IDE3OC45MTMgMTYyLjkyOSAxNzcuN0MxNjMuMTcxIDE3Ni40ODcgMTYzLjc2OCAxNzUuMzczIDE2NC42NDUgMTc0LjQ5OUMxNjUuNTIyIDE3My42MjUgMTY2LjYzOSAxNzMuMDI5IDE2Ny44NTUgMTcyLjc4OEMxNjkuMDcxIDE3Mi41NDcgMTcwLjMzMiAxNzIuNjcxIDE3MS40NzcgMTczLjE0NEMxNzIuNjIzIDE3My42MTcgMTczLjYwMiAxNzQuNDE4IDE3NC4yOTEgMTc1LjQ0N0MxNzQuOTc5IDE3Ni40NzUgMTc1LjM0NyAxNzcuNjgzIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTgwLjU3OCAxNzQuNjg3IDE4Mi4xNjggMTczLjUxMSAxODMuMzQxQzE3Mi4zMzUgMTg0LjUxMyAxNzAuNzQxIDE4NS4xNzIgMTY5LjA3OCAxODUuMTcyWk0xNDcuMTM2IDE5Ny42NzZDMTQ1Ljg5NiAxOTcuNjc2IDE0NC42ODQgMTk3LjMxIDE0My42NTMgMTk2LjYyM0MxNDIuNjIyIDE5NS45MzYgMTQxLjgxOSAxOTQuOTU5IDE0MS4zNDQgMTkzLjgxN0MxNDAuODcgMTkyLjY3NCAxNDAuNzQ2IDE5MS40MTcgMTQwLjk4NyAxOTAuMjA0QzE0MS4yMjkgMTg4Ljk5MiAxNDEuODI2IDE4Ny44NzggMTQyLjcwMyAxODcuMDAzQzE0My41OCAxODYuMTI5IDE0NC42OTcgMTg1LjUzMyAxNDUuOTEzIDE4NS4yOTJDMTQ3LjEyOSAxODUuMDUxIDE0OC4zOSAxODUuMTc1IDE0OS41MzUgMTg1LjY0OEMxNTAuNjgxIDE4Ni4xMjEgMTUxLjY2IDE4Ni45MjMgMTUyLjM0OSAxODcuOTUxQzE1My4wMzggMTg4Ljk3OSAxNTMuNDA1IDE5MC4xODggMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTkzLjA4MiAxNTIuNzQ1IDE5NC42NzMgMTUxLjU2OSAxOTUuODQ1QzE1MC4zOTMgMTk3LjAxOCAxNDguNzk5IDE5Ny42NzYgMTQ3LjEzNiAxOTcuNjc2WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ni44OTVDMTUwLjE2NiAxOTYuODk1IDE1Mi42MjIgMTk0LjQ0NSAxNTIuNjIyIDE5MS40MjRDMTUyLjYyMiAxODguNDAzIDE1MC4xNjYgMTg1Ljk1MyAxNDcuMTM2IDE4NS45NTNDMTQ0LjEwNyAxODUuOTUzIDE0MS42NTEgMTg4LjQwMyAxNDEuNjUxIDE5MS40MjRDMTQxLjY1MSAxOTQuNDQ1IDE0NC4xMDcgMTk2Ljg5NSAxNDcuMTM2IDE5Ni44OTVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE4Ni43MzVDMTQ4LjA2NiAxODYuNzM1IDE0OC45NzUgMTg3LjAxIDE0OS43NDggMTg3LjUyNUMxNTAuNTIxIDE4OC4wNDEgMTUxLjEyNCAxODguNzczIDE1MS40OCAxODkuNjNDMTUxLjgzNiAxOTAuNDg2IDE1MS45MjkgMTkxLjQyOSAxNTEuNzQ4IDE5Mi4zMzlDMTUxLjU2NiAxOTMuMjQ4IDE1MS4xMTggMTk0LjA4NCAxNTAuNDYxIDE5NC43NEMxNDkuODAzIDE5NS4zOTYgMTQ4Ljk2NSAxOTUuODQyIDE0OC4wNTMgMTk2LjAyM0MxNDcuMTQxIDE5Ni4yMDQgMTQ2LjE5NiAxOTYuMTExIDE0NS4zMzcgMTk1Ljc1NkMxNDQuNDc4IDE5NS40MDEgMTQzLjc0MyAxOTQuOCAxNDMuMjI3IDE5NC4wMjlDMTQyLjcxIDE5My4yNTggMTQyLjQzNCAxOTIuMzUyIDE0Mi40MzQgMTkxLjQyNEMxNDIuNDM0IDE5MC4xOCAxNDIuOTMgMTg4Ljk4OCAxNDMuODExIDE4OC4xMDhDMTQ0LjY5MyAxODcuMjI5IDE0NS44ODkgMTg2LjczNSAxNDcuMTM2IDE4Ni43MzVaTTE0Ny4xMzYgMTg1LjE3MkMxNDUuODk2IDE4NS4xNzIgMTQ0LjY4NCAxODUuNTM5IDE0My42NTMgMTg2LjIyNkMxNDIuNjIyIDE4Ni45MTMgMTQxLjgxOSAxODcuODg5IDE0MS4zNDQgMTg5LjAzMkMxNDAuODcgMTkwLjE3NCAxNDAuNzQ2IDE5MS40MzEgMTQwLjk4NyAxOTIuNjQ0QzE0MS4yMjkgMTkzLjg1NyAxNDEuODI2IDE5NC45NzEgMTQyLjcwMyAxOTUuODQ1QzE0My41OCAxOTYuNzE5IDE0NC42OTcgMTk3LjMxNSAxNDUuOTEzIDE5Ny41NTZDMTQ3LjEyOSAxOTcuNzk3IDE0OC4zOSAxOTcuNjc0IDE0OS41MzUgMTk3LjJDMTUwLjY4MSAxOTYuNzI3IDE1MS42NiAxOTUuOTI2IDE1Mi4zNDkgMTk0Ljg5OEMxNTMuMDM4IDE5My44NjkgMTUzLjQwNSAxOTIuNjYxIDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE4OS43NjYgMTUyLjc0NSAxODguMTc2IDE1MS41NjkgMTg3LjAwM0MxNTAuMzkzIDE4NS44MzEgMTQ4Ljc5OSAxODUuMTcyIDE0Ny4xMzYgMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTM3LjQwMyAxMzcuODEyQzEzNy4xNDMgMTM3LjgxNCAxMzYuODg2IDEzNy43NSAxMzYuNjU2IDEzNy42MjdDMTM2LjQyNiAxMzcuNTA0IDEzNi4yMyAxMzcuMzI2IDEzNi4wODcgMTM3LjEwOUwxMzQuODY0IDEzNS4yMzNDMTM0LjY0OSAxMzQuODgyIDEzNC41ODIgMTM0LjQ2MSAxMzQuNjc2IDEzNC4wNjFDMTM0LjcxNCAxMzMuODYzIDEzNC43OTEgMTMzLjY3NSAxMzQuOTA0IDEzMy41MDhDMTM1LjAxOCAxMzMuMzQyIDEzNS4xNjQgMTMzLjIgMTM1LjMzNCAxMzMuMDkyTDE2Ny4wMDkgMTEyLjc3M0MxNjcuMjUyIDExMi42MDEgMTY3LjU0MiAxMTIuNTA5IDE2Ny44NCAxMTIuNTA3QzE2OC4xMDIgMTEyLjUwNyAxNjguMzYgMTEyLjU3MyAxNjguNTkgMTEyLjY5OUMxNjguODIgMTEyLjgyNSAxNjkuMDE1IDExMy4wMDYgMTY5LjE1NiAxMTMuMjI2TDE3MC4zNzkgMTE1LjEwMUMxNzAuNTkxIDExNS40NDkgMTcwLjY2IDExNS44NjYgMTcwLjU2OSAxMTYuMjYzQzE3MC40NzggMTE2LjY2IDE3MC4yMzYgMTE3LjAwNiAxNjkuODkzIDExNy4yMjdMMTM4LjI1IDEzNy41NDdDMTM3Ljk5OSAxMzcuNzE1IDEzNy43MDUgMTM3LjgwNyAxMzcuNDAzIDEzNy44MTJaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjcuODQgMTEzLjMzNUMxNjcuOTc0IDExMy4zMzcgMTY4LjEwNyAxMTMuMzczIDE2OC4yMjQgMTEzLjQzOEMxNjguMzQyIDExMy41MDQgMTY4LjQ0MSAxMTMuNTk3IDE2OC41MTQgMTEzLjcxTDE2OS43MDUgMTE1LjU1NUMxNjkuODE3IDExNS43MzEgMTY5Ljg1NiAxMTUuOTQ0IDE2OS44MTUgMTE2LjE0OUMxNjkuNzkyIDExNi4yNSAxNjkuNzQ5IDExNi4zNDYgMTY5LjY4NyAxMTYuNDNDMTY5LjYyNCAxMTYuNTEzIDE2OS41NDUgMTE2LjU4MyAxNjkuNDU0IDExNi42MzNMMTM3LjgxMSAxMzYuOTUzQzEzNy42ODIgMTM3LjAyNyAxMzcuNTM2IDEzNy4wNjUgMTM3LjM4OCAxMzcuMDYyQzEzNy4yNTYgMTM3LjA2MyAxMzcuMTI3IDEzNy4wMzEgMTM3LjAxMSAxMzYuOTY4QzEzNi44OTYgMTM2LjkwNSAxMzYuNzk5IDEzNi44MTQgMTM2LjcyOSAxMzYuNzAzTDEzNS41MzggMTM0Ljg1OEMxMzUuNDI4IDEzNC42ODEgMTM1LjM4OSAxMzQuNDY5IDEzNS40MjggMTM0LjI2NEMxMzUuNDUxIDEzNC4xNjUgMTM1LjQ5MyAxMzQuMDcgMTM1LjU1MiAxMzMuOTg3QzEzNS42MTEgMTMzLjkwNCAxMzUuNjg2IDEzMy44MzMgMTM1Ljc3MyAxMzMuNzhMMTY3LjQzMiAxMTMuNDZDMTY3LjU1NCAxMTMuMzgyIDE2Ny42OTUgMTEzLjMzOSAxNjcuODQgMTEzLjMzNVpNMTY3Ljg0IDExMS43NzJDMTY3LjM5NCAxMTEuNzcxIDE2Ni45NTggMTExLjkwMiAxNjYuNTg2IDExMi4xNDdMMTM0LjkyNyAxMzIuNDY3QzEzNC40MDcgMTMyLjgwNiAxMzQuMDQyIDEzMy4zMzUgMTMzLjkxIDEzMy45NEMxMzMuNzc4IDEzNC41NDYgMTMzLjg5IDEzNS4xNzggMTM0LjIyMiAxMzUuNzAyTDEzNS40MjggMTM3LjU0N0MxMzUuNTk0IDEzNy44MDYgMTM1LjgxIDEzOC4wMzEgMTM2LjA2MyAxMzguMjA3QzEzNi4zMTYgMTM4LjM4NCAxMzYuNjAyIDEzOC41MDggMTM2LjkwMyAxMzguNTczQzEzNy4yMDUgMTM4LjYzOSAxMzcuNTE3IDEzOC42NDQgMTM3LjgyMSAxMzguNTg4QzEzOC4xMjQgMTM4LjUzMyAxMzguNDE0IDEzOC40MTggMTM4LjY3MyAxMzguMjVMMTcwLjMxNiAxMTcuOTMxQzE3MC44NDIgMTE3LjU5NyAxNzEuMjEzIDExNy4wNjggMTcxLjM0OCAxMTYuNDYyQzE3MS40ODMgMTE1Ljg1NSAxNzEuMzcxIDExNS4yMiAxNzEuMDM3IDExNC42OTVMMTY5LjgzIDExMi44MzVDMTY5LjYxMyAxMTIuNTA2IDE2OS4zMTggMTEyLjIzNSAxNjguOTcxIDExMi4wNDdDMTY4LjYyNCAxMTEuODU5IDE2OC4yMzUgMTExLjc1OSAxNjcuODQgMTExLjc1N1YxMTEuNzcyWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NC4zOUMxNzIuMTA4IDE4NC4zOSAxNzQuNTYzIDE4MS45NDEgMTc0LjU2MyAxNzguOTJDMTc0LjU2MyAxNzUuODk4IDE3Mi4xMDggMTczLjQ0OSAxNjkuMDc4IDE3My40NDlDMTY2LjA0OCAxNzMuNDQ5IDE2My41OTMgMTc1Ljg5OCAxNjMuNTkzIDE3OC45MkMxNjMuNTkzIDE4MS45NDEgMTY2LjA0OCAxODQuMzkgMTY5LjA3OCAxODQuMzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE3NC4yMzFDMTcwLjAwOCAxNzQuMjMxIDE3MC45MTcgMTc0LjUwNiAxNzEuNjkgMTc1LjAyMUMxNzIuNDYzIDE3NS41MzYgMTczLjA2NiAxNzYuMjY5IDE3My40MjIgMTc3LjEyNUMxNzMuNzc4IDE3Ny45ODIgMTczLjg3MSAxNzguOTI1IDE3My42ODkgMTc5LjgzNUMxNzMuNTA4IDE4MC43NDQgMTczLjA2IDE4MS41OCAxNzIuNDAzIDE4Mi4yMzZDMTcxLjc0NSAxODIuODkxIDE3MC45MDcgMTgzLjMzOCAxNjkuOTk1IDE4My41MTlDMTY5LjA4MyAxODMuNyAxNjguMTM4IDE4My42MDcgMTY3LjI3OSAxODMuMjUyQzE2Ni40MTkgMTgyLjg5NyAxNjUuNjg1IDE4Mi4yOTYgMTY1LjE2OSAxODEuNTI1QzE2NC42NTIgMTgwLjc1NCAxNjQuMzc2IDE3OS44NDcgMTY0LjM3NiAxNzguOTJDMTY0LjM3NiAxNzcuNjc2IDE2NC44NzEgMTc2LjQ4NCAxNjUuNzUzIDE3NS42MDRDMTY2LjYzNSAxNzQuNzI1IDE2Ny44MzEgMTc0LjIzMSAxNjkuMDc4IDE3NC4yMzFaTTE2OS4wNzggMTcyLjY2OEMxNjcuODM4IDE3Mi42NjggMTY2LjYyNiAxNzMuMDM0IDE2NS41OTUgMTczLjcyMUMxNjQuNTY0IDE3NC40MDggMTYzLjc2MSAxNzUuMzg1IDE2My4yODYgMTc2LjUyN0MxNjIuODEyIDE3Ny42NyAxNjIuNjg3IDE3OC45MjcgMTYyLjkyOSAxODAuMTRDMTYzLjE3MSAxODEuMzUyIDE2My43NjggMTgyLjQ2NiAxNjQuNjQ1IDE4My4zNDFDMTY1LjUyMiAxODQuMjE1IDE2Ni42MzkgMTg0LjgxMSAxNjcuODU1IDE4NS4wNTJDMTY5LjA3MSAxODUuMjkzIDE3MC4zMzIgMTg1LjE2OSAxNzEuNDc3IDE4NC42OTZDMTcyLjYyMyAxODQuMjIzIDE3My42MDIgMTgzLjQyMSAxNzQuMjkxIDE4Mi4zOTNDMTc0Ljk3OSAxODEuMzY1IDE3NS4zNDcgMTgwLjE1NiAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE3Ny4yNjIgMTc0LjY4NyAxNzUuNjcxIDE3My41MTEgMTc0LjQ5OUMxNzIuMzM1IDE3My4zMjYgMTcwLjc0MSAxNzIuNjY4IDE2OS4wNzggMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzEuODg2QzE5Mi40ODIgMTcxLjg4NiAxOTQuOTM4IDE2OS40MzcgMTk0LjkzOCAxNjYuNDE2QzE5NC45MzggMTYzLjM5NCAxOTIuNDgyIDE2MC45NDUgMTg5LjQ1MyAxNjAuOTQ1QzE4Ni40MjMgMTYwLjk0NSAxODMuOTY3IDE2My4zOTQgMTgzLjk2NyAxNjYuNDE2QzE4My45NjcgMTY5LjQzNyAxODYuNDIzIDE3MS44ODYgMTg5LjQ1MyAxNzEuODg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNjEuNzI3QzE5MC4zODMgMTYxLjcyNyAxOTEuMjkyIDE2Mi4wMDIgMTkyLjA2NSAxNjIuNTE3QzE5Mi44MzggMTYzLjAzMiAxOTMuNDQxIDE2My43NjQgMTkzLjc5NyAxNjQuNjIxQzE5NC4xNTMgMTY1LjQ3OCAxOTQuMjQ2IDE2Ni40MjEgMTk0LjA2NCAxNjcuMzNDMTkzLjg4MyAxNjguMjQgMTkzLjQzNSAxNjkuMDc2IDE5Mi43NzcgMTY5LjczMUMxOTIuMTIgMTcwLjM4NyAxOTEuMjgyIDE3MC44MzQgMTkwLjM3IDE3MS4wMTVDMTg5LjQ1OCAxNzEuMTk2IDE4OC41MTMgMTcxLjEwMyAxODcuNjUzIDE3MC43NDhDMTg2Ljc5NCAxNzAuMzkzIDE4Ni4wNiAxNjkuNzkyIDE4NS41NDMgMTY5LjAyMUMxODUuMDI3IDE2OC4yNSAxODQuNzUxIDE2Ny4zNDMgMTg0Ljc1MSAxNjYuNDE2QzE4NC43NTEgMTY1LjE3MiAxODUuMjQ2IDE2My45NzkgMTg2LjEyOCAxNjMuMUMxODcuMDEgMTYyLjIyMSAxODguMjA2IDE2MS43MjcgMTg5LjQ1MyAxNjEuNzI3Wk0xODkuNDUzIDE2MC4xNjRDMTg4LjIxMyAxNjAuMTY0IDE4Ny4wMDEgMTYwLjUzIDE4NS45NyAxNjEuMjE3QzE4NC45MzkgMTYxLjkwNCAxODQuMTM1IDE2Mi44ODEgMTgzLjY2MSAxNjQuMDIzQzE4My4xODYgMTY1LjE2NiAxODMuMDYyIDE2Ni40MjMgMTgzLjMwNCAxNjcuNjM1QzE4My41NDYgMTY4Ljg0OCAxODQuMTQzIDE2OS45NjIgMTg1LjAyIDE3MC44MzdDMTg1Ljg5NyAxNzEuNzExIDE4Ny4wMTQgMTcyLjMwNiAxODguMjMgMTcyLjU0OEMxODkuNDQ2IDE3Mi43ODkgMTkwLjcwNiAxNzIuNjY1IDE5MS44NTIgMTcyLjE5MkMxOTIuOTk3IDE3MS43MTkgMTkzLjk3NiAxNzAuOTE3IDE5NC42NjUgMTY5Ljg4OUMxOTUuMzU0IDE2OC44NjEgMTk1LjcyMiAxNjcuNjUyIDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2NC43NTggMTk1LjA2MSAxNjMuMTY3IDE5My44ODYgMTYxLjk5NUMxOTIuNzEgMTYwLjgyMiAxOTEuMTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDYuOTMyIDI2Ljk2MjJMOTcuOTIzNiA1OC41ODIzTDUzLjA5OTQgODcuNDk4NEwzLjc5Mjg1IDU5LjA1MTJMNC42MzkxOCA1OC41ODIzTDEwMy4yNTIgMS44MTMxMUwxNDYuOTMyIDI2Ljk2MjJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMi45NDY1MyA1OC41ODIzSDQuNjM5MTlMMy43OTI4NiA1OS4wNTEyTDIuOTQ2NTMgNTguNTgyM1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yMDEuOTI4IDU4LjYyOTJMMTAzLjI1MiAxMTYuMzk5TDUzLjA5OTQgODcuNDk4NEw5Ny45MjM1IDU4LjU4MjRMMTQ2LjkzMiAyNi45NjIzTDIwMS44MzQgNTguNTgyNEwyMDEuOTI4IDU4LjYyOTJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjk5MSA1OC41ODIzTDIwMS45MjggNTguNjI5MkwyMDEuODM0IDU4LjU4MjNIMjAxLjk5MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMDMuMjUyIDExNi4zOTlWMjMwLjVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlV2lkdGg9XCIzXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NS4xNzJDMTcyLjU0IDE4NS4xNzIgMTc1LjM0NyAxODIuMzczIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTc1LjQ2NyAxNzIuNTQgMTcyLjY2OCAxNjkuMDc4IDE3Mi42NjhDMTY1LjYxNiAxNzIuNjY4IDE2Mi44MDkgMTc1LjQ2NyAxNjIuODA5IDE3OC45MkMxNjIuODA5IDE4Mi4zNzMgMTY1LjYxNiAxODUuMTcyIDE2OS4wNzggMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ny42NzZDMTUwLjU5OCAxOTcuNjc2IDE1My40MDUgMTk0Ljg3NyAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxODcuOTcxIDE1MC41OTggMTg1LjE3MiAxNDcuMTM2IDE4NS4xNzJDMTQzLjY3NCAxODUuMTcyIDE0MC44NjcgMTg3Ljk3MSAxNDAuODY3IDE5MS40MjRDMTQwLjg2NyAxOTQuODc3IDE0My42NzQgMTk3LjY3NiAxNDcuMTM2IDE5Ny42NzZaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzIuNjY4QzE5Mi45MTUgMTcyLjY2OCAxOTUuNzIyIDE2OS44NjkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTYyLjk2MyAxOTIuOTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0QzE4NS45OSAxNjAuMTY0IDE4My4xODQgMTYyLjk2MyAxODMuMTg0IDE2Ni40MTZDMTgzLjE4NCAxNjkuODY5IDE4NS45OSAxNzIuNjY4IDE4OS40NTMgMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjE1NFwiIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBoZWlnaHQ9XCIxNzRcIiB2aWV3Qm94PVwiMCAwIDE1NCAxNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTA3LjggMTAzLjMxMkM5Ny45MzQ0IDEwMy4zMTIgOTMuMTkwNiAxMDguNzUgNzcgMTA4Ljc1QzYwLjgwOTQgMTA4Ljc1IDU2LjEgMTAzLjMxMiA0Ni4yIDEwMy4zMTJDMjAuNjkzNyAxMDMuMzEyIDAgMTIzLjc3MSAwIDE0OC45ODhWMTU3LjY4OEMwIDE2Ni42OTMgNy4zOTA2MiAxNzQgMTYuNSAxNzRIMTM3LjVDMTQ2LjYwOSAxNzQgMTU0IDE2Ni42OTMgMTU0IDE1Ny42ODhWMTQ4Ljk4OEMxNTQgMTIzLjc3MSAxMzMuMzA2IDEwMy4zMTIgMTA3LjggMTAzLjMxMlpNMTM3LjUgMTU3LjY4OEgxNi41VjE0OC45ODhDMTYuNSAxMzIuODExIDI5LjgzNzUgMTE5LjYyNSA0Ni4yIDExOS42MjVDNTEuMjE4NyAxMTkuNjI1IDU5LjM2NTYgMTI1LjA2MiA3NyAxMjUuMDYyQzk0Ljc3MTkgMTI1LjA2MiAxMDIuNzQ3IDExOS42MjUgMTA3LjggMTE5LjYyNUMxMjQuMTYyIDExOS42MjUgMTM3LjUgMTMyLjgxMSAxMzcuNSAxNDguOTg4VjE1Ny42ODhaTTc3IDk3Ljg3NUMxMDQuMzI4IDk3Ljg3NSAxMjYuNSA3NS45NTUxIDEyNi41IDQ4LjkzNzVDMTI2LjUgMjEuOTE5OSAxMDQuMzI4IDAgNzcgMEM0OS42NzE5IDAgMjcuNSAyMS45MTk5IDI3LjUgNDguOTM3NUMyNy41IDc1Ljk1NTEgNDkuNjcxOSA5Ny44NzUgNzcgOTcuODc1Wk03NyAxNi4zMTI1Qzk1LjE4NDQgMTYuMzEyNSAxMTAgMzAuOTU5OCAxMTAgNDguOTM3NUMxMTAgNjYuOTE1MiA5NS4xODQ0IDgxLjU2MjUgNzcgODEuNTYyNUM1OC44MTU2IDgxLjU2MjUgNDQgNjYuOTE1MiA0NCA0OC45Mzc1QzQ0IDMwLjk1OTggNTguODE1NiAxNi4zMTI1IDc3IDE2LjMxMjVaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMTgxXCIgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25cIiBoZWlnaHQ9XCIxNTlcIiB2aWV3Qm94PVwiMCAwIDE4MSAxNTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTYzLjA0MSAzNC4yNUgyOC4yODEyQzI1LjE1NjIgMzQuMjUgMjIuNjI1IDMxLjcxODggMjIuNjI1IDI4LjU5MzhDMjIuNjI1IDI1LjQ2ODcgMjUuMTU2MiAyMi45Mzc1IDI4LjI4MTIgMjIuOTM3NUgxNjQuMDMxQzE2Ny4xNTYgMjIuOTM3NSAxNjkuNjg4IDIwLjQwNjMgMTY5LjY4OCAxNy4yODEyQzE2OS42ODggNy45MDk1NSAxNjIuMDkgMC4zMTI1IDE1Mi43MTkgMC4zMTI1SDIyLjYyNUMxMC4xMjgyIDAuMzEyNSAwIDEwLjQ0MDcgMCAyMi45Mzc1VjEzNi4wNjJDMCAxNDguNTU5IDEwLjEyODIgMTU4LjY4OCAyMi42MjUgMTU4LjY4OEgxNjMuMDQxQzE3Mi45NDcgMTU4LjY4OCAxODEgMTUxLjA3NiAxODEgMTQxLjcxOVY1MS4yMTg4QzE4MSA0MS44NjEyIDE3Mi45NDcgMzQuMjUgMTYzLjA0MSAzNC4yNVpNMTQ3LjA2MiAxMDcuNzgxQzE0MC44MTYgMTA3Ljc4MSAxMzUuNzUgMTAyLjcxNSAxMzUuNzUgOTYuNDY4OEMxMzUuNzUgOTAuMjIyMSAxNDAuODE2IDg1LjE1NjIgMTQ3LjA2MiA4NS4xNTYyQzE1My4zMDkgODUuMTU2MiAxNTguMzc1IDkwLjIyMjEgMTU4LjM3NSA5Ni40Njg4QzE1OC4zNzUgMTAyLjcxNSAxNTMuMzA5IDEwNy43ODEgMTQ3LjA2MiAxMDcuNzgxWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXZhdGFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjkyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgaGVpZ2h0PVwiMjkyXCIgdmlld0JveD1cIjAgMCAyOTIgMjkyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTQ2XCIgY3k9XCIxNDZcIiByPVwiMTQ2XCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5NS44ODkgMTE0Ljg5OEMxODUuNDA0IDEzMC42NTkgMTY3LjQ4IDE0MS4wNDYgMTQ3LjEzIDE0MS4wNDZDMTI0LjgxNCAxNDEuMDQ2IDEwNS40MTYgMTI4LjU1NSA5NS41NDUxIDExMC4xODNDOTMuMTA3MyAxMTIuOTA1IDkwLjg0OTkgMTE1Ljg4NSA4OC44MDczIDExOS4xMjZMODQuNzcyMiAxMjUuNTI4QzU3LjQ4OTEgMTY4LjgxMSA4OC41OTUgMjI1LjE4OCAxMzkuNzYgMjI1LjE4OEgxNDcuODNDMTk4Ljk5NSAyMjUuMTg4IDIzMC4xMDEgMTY4LjgxMSAyMDIuODE4IDEyNS41MjhMMTk4Ljc4MyAxMTkuMTI2QzE5Ny44NjEgMTE3LjY2NCAxOTYuODk2IDExNi4yNTQgMTk1Ljg4OSAxMTQuODk4WlwiIGZpbGw9XCIjRjNFQ0VDXCIvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0Ny4xM1wiIGN5PVwiODIuNTI2MlwiIHI9XCI0My45NjU5XCIgZmlsbD1cIiNGM0VDRUNcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgXHJcblxyXG59O1xyXG5leHBvcnQgY29uc3QgdXBsb2FkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjA0XCIgY2xhc3NOYW1lPVwidXBsb2FkXCIgaGVpZ2h0PVwiMjA0XCIgdmlld0JveD1cIjAgMCAyMDQgMjA0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTAyXCIgY3k9XCIxMDJcIiByPVwiMTAyXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwNi41NjcgMTA2LjU2N1YxNDEuNTgySDk3LjQzMjlWMTA2LjU2N0g2Mi40MThWOTcuNDMyOEg5Ny40MzI5VjYyLjQxNzlIMTA2LjU2N1Y5Ny40MzI4SDE0MS41ODJWMTA2LjU2N0gxMDYuNTY3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDMzIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTMwLjIwMjcgMjIuNDE4TDMwLjIwNiAyMi40MDRMMzAuMjA5MSAyMi4zOUMzMC4yNTU5IDIyLjE4MDEgMzAuMjgxNSAyMS45NjU5IDMwLjI4NTQgMjEuNzUwN0wzMC4yODY2IDIxLjY4MTJMMzAuMjgzMSAyMS42MTE4QzMwLjI1MzUgMjEuMDM1MyAzMC4wNjUxIDIwLjQ4MTggMjkuNzQzNiAyMC4wMDg4QzI5LjQyMjUgMTkuNTM2MyAyOC45ODE4IDE5LjE2MzUgMjguNDczMiAxOC45MjIyTDI4LjQyODkgMTguOTAxMkwyOC4zODM3IDE4Ljg4MjRMMjMuMjI3NCAxNi43Mzk2TDIzLjE5NzUgMTYuNzI3MUwyMy4xNjcxIDE2LjcxNTdDMjIuODIwOSAxNi41ODQ4IDIyLjQ1NTcgMTYuNTEyNSAyMi4wODY5IDE2LjUwMUwyMi4wMDI0IDE2LjQ5ODNMMjEuOTE4IDE2LjUwMjhDMjEuMDg3NCAxNi41NDcxIDIwLjI5NDYgMTYuOTA1NSAxOS43MTQ1IDE3LjUyMDVMMTkuNjc2NSAxNy41NjA4TDE5LjY0MDggMTcuNjAzMUwxOC4zODYgMTkuMDkwM0MxNi4zMDI1IDE3Ljg3NjkgMTQuNTU4MSAxNi4xOTY5IDEzLjI5NzEgMTQuMTk5NEwxNC43NTk4IDEzLjAzODlMMTQuODAyOCAxMy4wMDQ4TDE0Ljg0MzkgMTIuOTY4M0MxNS40NzY0IDEyLjQwNzMgMTUuODY5OSAxMS42MTUxIDE1LjkxODcgMTAuNzU2MUwxNS45MjM4IDEwLjY2NTlMMTUuOTIwNyAxMC41NzU2QzE1LjkwOCAxMC4xOTc1IDE1LjgyOTIgOS44MjUzOSAxNS42ODg3IDkuNDc1NTZMMTUuNjc1OSA5LjQ0MzY2TDE1LjY2MiA5LjQxMjIzTDEzLjQ1MjIgNC40MTIyM0wxMy40MzEzIDQuMzY0ODhMMTMuNDA4IDQuMzE4NjhDMTMuMTQ5NiAzLjgwNzQzIDEyLjc1ODkgMy4zODA1NiAxMi4yODM1IDMuMDc2NjNDMTEuODA4NCAyLjc3Mjk3IDExLjI2MzQgMi42MDExNSAxMC43MDQ5IDIuNTczODJMMTAuNjM0NyAyLjU3MDM4TDEwLjU2NDQgMi41NzE4OUMxMC4zNjA1IDIuNTc2MjQgMTAuMTU3MiAyLjU5OTA0IDkuOTU3MTUgMi42NDAwNUw5LjkzOTYyIDIuNjQzNjVMOS45MjIxNiAyLjY0NzU2TDUuMTM0MjEgMy43MTg5OEw1LjEwMTE4IDMuNzI2MzhMNS4wNjg0MSAzLjczNDg4QzQuNDI3MDQgMy45MDEzOCAzLjg0Njg2IDQuMjY1ODQgMy40MTkzOCA0Ljc4NjU3QzIuOTkxMDcgNS4zMDgzMyAyLjc0MDU4IDUuOTU4MDkgMi43MTU2MiA2LjY0MTI2TDIuNzE0MjkgNi42Nzc3NlY2LjcxNDI5QzIuNzE0MjkgMTkuMzI3IDEzLjI0NTQgMjkuNDI4NiAyNi4wNzU5IDI5LjQyODZIMjYuMDc2N0MyNi43NjI5IDI5LjQyODMgMjcuNDM1OSAyOS4yMDI5IDI3Ljk4NTYgMjguNzc4NkMyOC41MzY0IDI4LjM1MzUgMjguOTMzNyAyNy43NTA2IDI5LjA5NzcgMjcuMDYwOUMyOS4wOTc4IDI3LjA2MDggMjkuMDk3OCAyNy4wNjA2IDI5LjA5NzggMjcuMDYwNUwzMC4yMDI3IDIyLjQxOFpNMy41MzU3MSAySDI5LjQ2NDNDMjkuODkxMSAyIDMwLjI4ODUgMi4xNjQ5OSAzMC41NzIxIDIuNDQwMDFDMzAuODUzNiAyLjcxMjk5IDMxIDMuMDY5ODkgMzEgMy40Mjg1N1YyOC41NzE0QzMxIDI4LjkzMDEgMzAuODUzNiAyOS4yODcgMzAuNTcyMSAyOS41NkMzMC4yODg1IDI5LjgzNSAyOS44OTExIDMwIDI5LjQ2NDMgMzBIMy41MzU3MUMzLjEwODkgMzAgMi43MTE0OSAyOS44MzUgMi40Mjc4OCAyOS41NkMyLjE0NjM2IDI5LjI4NyAyIDI4LjkzMDEgMiAyOC41NzE0VjMuNDI4NTdDMiAzLjA2OTkgMi4xNDYzNiAyLjcxMjk5IDIuNDI3ODggMi40NDAwMUMyLjcxMTQ5IDIuMTY0OTkgMy4xMDg5IDIgMy41MzU3MSAyWlwiIGZpbGw9XCIjRjNFQ0VDXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IG1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA0NCAzNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk00MC42MzQ1IDI2Ljg4MTNDNDIuNzM1IDI0LjgyNDYgNDMuOTk1MiAyMi4yNDQyIDQzLjk5NTIgMTkuNDI4NkM0My45OTUyIDEzLjM1NzEgMzguMTUyMiA4LjM0MDYzIDMwLjUzNzEgNy40NDUwOUMyOC4xMzEyIDMuMDczNjYgMjIuNDc5MSAwIDE1Ljg4NzUgMEM3LjExMTQ3IDAgMC4wMDA1MTQ0MjggNS40MzM5MyAwLjAwMDUxNDQyOCAxMi4xNDI5QzAuMDAwNTE0NDI4IDE0Ljk1MDkgMS4yNjA3OCAxNy41MzEzIDMuMzYxMjIgMTkuNTk1NUMyLjE5MjYxIDIxLjkyNTQgMC41MTIyNTkgMjMuNzMxNyAwLjQ4MTcwNyAyMy43NjIxQzAuMDAwNTE0NDQyIDI0LjI3MDUgLTAuMTM2OTY5IDI1LjAxNDMgMC4xNDU2MzYgMjUuNjU5NEMwLjQyMDYwMyAyNi4zMDQ1IDEuMDYyMTkgMjYuNzIxOSAxLjc2NDg5IDI2LjcyMTlDNS44NTEyIDI2LjcyMTkgOS4xNTA4MSAyNS4xODg4IDExLjMyNzYgMjMuNzc3MkMxMi4wMzAzIDIzLjkzNjYgMTIuNzU1OSAyNC4wNTggMTMuNDk2OCAyNC4xNDkxQzE1Ljg5NTEgMjguNTA1NCAyMS41MjQzIDMxLjU3MTQgMjguMTA4MyAzMS41NzE0QzI5LjY5NyAzMS41NzE0IDMxLjIyNDUgMzEuMzg5MyAzMi42NzU4IDMxLjA1NTRDMzQuODUyNiAzMi40NTk0IDM4LjE0NDUgMzQgNDIuMjM4NSAzNEM0Mi45NDEyIDM0IDQzLjU3NTEgMzMuNTgyNiA0My44NTc3IDMyLjkzNzVDNDQuMTMyNyAzMi4yOTI0IDQ0LjAwMjkgMzEuNTQ4NyA0My41MjE3IDMxLjA0MDJDNDMuNDkxMSAzMS4wMTc0IDQxLjgwMzEgMjkuMjExMiA0MC42MzQ1IDI2Ljg4MTNaTTEwLjYzMjYgMTkuODc2M0w5LjMyNjQ4IDIwLjcxODhDOC4yNDk1MiAyMS40MDk0IDcuMTQ5NjYgMjEuOTU1OCA2LjAzNDUxIDIyLjM0MjlDNi4yNDA3NCAyMS45ODYyIDYuNDQ2OTYgMjEuNjA2NyA2LjY0NTU1IDIxLjIxOTZMNy44Mjk0NCAxOC44NTk0TDUuOTM1MjIgMTdDNC45MDQwOSAxNS45ODMgMy42NjY3NCAxNC4zMjEgMy42NjY3NCAxMi4xNDI5QzMuNjY2NzQgNy41MzYxNiA5LjI2NTM4IDMuNjQyODYgMTUuODg3NSAzLjY0Mjg2QzIyLjUwOTYgMy42NDI4NiAyOC4xMDgzIDcuNTM2MTYgMjguMTA4MyAxMi4xNDI5QzI4LjEwODMgMTYuNzQ5NiAyMi41MDk2IDIwLjY0MjkgMTUuODg3NSAyMC42NDI5QzE0LjYyNzIgMjAuNjQyOSAxMy4zNjcgMjAuNDk4NyAxMi4xNDQ5IDIwLjIxNzlMMTAuNjMyNiAxOS44NzYzWk0zOC4wNjA1IDI0LjI4NTdMMzYuMTc0IDI2LjEzNzVMMzcuMzU3OCAyOC40OTc4QzM3LjU1NjQgMjguODg0OCAzNy43NjI2IDI5LjI2NDMgMzcuOTY4OSAyOS42MjFDMzYuODUzNyAyOS4yMzM5IDM1Ljc1MzkgMjguNjg3NSAzNC42NzY5IDI3Ljk5NjlMMzMuMzcwOCAyNy4xNTQ1TDMxLjg1MDkgMjcuNTAzNkMzMC42Mjg4IDI3Ljc4NDQgMjkuMzY4NSAyNy45Mjg2IDI4LjEwODMgMjcuOTI4NkMyMy45ODM3IDI3LjkyODYgMjAuMzAyMiAyNi40MDMxIDE4LjA3OTYgMjQuMTU2N0MyNS44MTY5IDIzLjMzNzEgMzEuNzc0NSAxOC4yODI2IDMxLjc3NDUgMTIuMTQyOUMzMS43NzQ1IDExLjg4NDggMzEuNzQzOSAxMS42MzQ0IDMxLjcyMSAxMS4zODM5QzM2LjYzOTkgMTIuNDg0NCA0MC4zMjkgMTUuNjk0NiA0MC4zMjkgMTkuNDI4NkM0MC4zMjkgMjEuNjA2NyAzOS4wOTE3IDIzLjI2ODggMzguMDYwNSAyNC4yODU3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCAzOSAzMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0zMi41IDI1LjcxNDNWMjYuNzg1N0MzMi41IDI4LjU2MDkgMzEuMDQ0OSAzMCAyOS4yNSAzMEgzLjI1QzEuNDU1MDUgMzAgMCAyOC41NjA5IDAgMjYuNzg1N1Y5LjY0Mjg2QzAgNy44Njc2MyAxLjQ1NTA1IDYuNDI4NTcgMy4yNSA2LjQyODU3SDQuMzMzMzNWOS42NDI4NkgzLjY1NjI1QzMuNTQ4NTEgOS42NDI4NiAzLjQ0NTE3IDkuNjg1MTkgMy4zNjg5OSA5Ljc2MDU0QzMuMjkyOCA5LjgzNTg5IDMuMjUgOS45MzgwOCAzLjI1IDEwLjA0NDZWMjYuMzgzOUMzLjI1IDI2LjQ5MDUgMy4yOTI4IDI2LjU5MjcgMy4zNjg5OSAyNi42NjhDMy40NDUxNyAyNi43NDM0IDMuNTQ4NTEgMjYuNzg1NyAzLjY1NjI1IDI2Ljc4NTdIMjguODQzOEMyOC45NTE1IDI2Ljc4NTcgMjkuMDU0OCAyNi43NDM0IDI5LjEzMSAyNi42NjhDMjkuMjA3MiAyNi41OTI3IDI5LjI1IDI2LjQ5MDUgMjkuMjUgMjYuMzgzOVYyNS43MTQzSDMyLjVaTTM1LjM0MzggMy4yMTQyOUgxMC4xNTYyQzEwLjA0ODUgMy4yMTQyOSA5Ljk0NTE3IDMuMjU2NjIgOS44Njg5OSAzLjMzMTk3QzkuNzkyOCAzLjQwNzMyIDkuNzUgMy41MDk1MSA5Ljc1IDMuNjE2MDdWMTkuOTU1NEM5Ljc1IDIwLjA2MTkgOS43OTI4IDIwLjE2NDEgOS44Njg5OSAyMC4yMzk1QzkuOTQ1MTcgMjAuMzE0OCAxMC4wNDg1IDIwLjM1NzEgMTAuMTU2MiAyMC4zNTcxSDM1LjM0MzhDMzUuNDUxNSAyMC4zNTcxIDM1LjU1NDggMjAuMzE0OCAzNS42MzEgMjAuMjM5NUMzNS43MDcyIDIwLjE2NDEgMzUuNzUgMjAuMDYxOSAzNS43NSAxOS45NTU0VjMuNjE2MDdDMzUuNzUgMy41MDk1MSAzNS43MDcyIDMuNDA3MzIgMzUuNjMxIDMuMzMxOTdDMzUuNTU0OCAzLjI1NjYyIDM1LjQ1MTUgMy4yMTQyOSAzNS4zNDM4IDMuMjE0MjlaTTM1Ljc1IDBDMzcuNTQ0OSAwIDM5IDEuNDM5MDYgMzkgMy4yMTQyOVYyMC4zNTcxQzM5IDIyLjEzMjQgMzcuNTQ0OSAyMy41NzE0IDM1Ljc1IDIzLjU3MTRIOS43NUM3Ljk1NTA1IDIzLjU3MTQgNi41IDIyLjEzMjQgNi41IDIwLjM1NzFWMy4yMTQyOUM2LjUgMS40MzkwNiA3Ljk1NTA1IDAgOS43NSAwSDM1Ljc1Wk0xNy44NzUgNy41QzE3Ljg3NSA4Ljk3OTMxIDE2LjY2MjQgMTAuMTc4NiAxNS4xNjY3IDEwLjE3ODZDMTMuNjcwOSAxMC4xNzg2IDEyLjQ1ODMgOC45NzkzMSAxMi40NTgzIDcuNUMxMi40NTgzIDYuMDIwNjkgMTMuNjcwOSA0LjgyMTQzIDE1LjE2NjcgNC44MjE0M0MxNi42NjI0IDQuODIxNDMgMTcuODc1IDYuMDIwNjkgMTcuODc1IDcuNVpNMTMgMTMuOTI4NkwxNS42NzU1IDExLjI4MjVDMTUuOTkyOCAxMC45Njg3IDE2LjUwNzIgMTAuOTY4NyAxNi44MjQ2IDExLjI4MjVMMTkuNSAxMy45Mjg2TDI2LjUwODggNi45OTY3NkMyNi44MjYxIDYuNjgyOTcgMjcuMzQwNiA2LjY4Mjk3IDI3LjY1NzkgNi45OTY3NkwzMi41IDExLjc4NTdWMTcuMTQyOUgxM1YxMy45Mjg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2hlY2tNYXJrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMjUgMC43ODEyNUMxMS42MjQzIDAuNzgxMjUgMC43ODEyNSAxMS42MjQzIDAuNzgxMjUgMjVDMC43ODEyNSAzOC4zNzU3IDExLjYyNDMgNDkuMjE4OCAyNSA0OS4yMTg4QzM4LjM3NTcgNDkuMjE4OCA0OS4yMTg4IDM4LjM3NTcgNDkuMjE4OCAyNUM0OS4yMTg4IDExLjYyNDMgMzguMzc1NyAwLjc4MTI1IDI1IDAuNzgxMjVaTTI1IDUuNDY4NzVDMzUuNzk0MSA1LjQ2ODc1IDQ0LjUzMTIgMTQuMjA0MiA0NC41MzEyIDI1QzQ0LjUzMTIgMzUuNzk0MSAzNS43OTU4IDQ0LjUzMTIgMjUgNDQuNTMxMkMxNC4yMDU5IDQ0LjUzMTIgNS40Njg3NSAzNS43OTU4IDUuNDY4NzUgMjVDNS40Njg3NSAxNC4yMDU5IDE0LjIwNDIgNS40Njg3NSAyNSA1LjQ2ODc1Wk0zOC42OTE4IDE4LjE5MDFMMzYuNDkxIDE1Ljk3MTZDMzYuMDM1MyAxNS41MTIxIDM1LjI5MzMgMTUuNTA5MSAzNC44MzM4IDE1Ljk2NDlMMjEuMDI5OSAyOS42NTc5TDE1LjE5MDggMjMuNzcxNUMxNC43MzUxIDIzLjMxMiAxMy45OTMxIDIzLjMwOSAxMy41MzM2IDIzLjc2NDdMMTEuMzE0OSAyNS45NjU1QzEwLjg1NTUgMjYuNDIxMyAxMC44NTI0IDI3LjE2MzMgMTEuMzA4MyAyNy42MjI5TDIwLjE3MzYgMzYuNTZDMjAuNjI5NCAzNy4wMTk0IDIxLjM3MTQgMzcuMDIyNSAyMS44MzA5IDM2LjU2NjZMMzguNjg1MyAxOS44NDc1QzM5LjE0NDYgMTkuMzkxNiAzOS4xNDc2IDE4LjY0OTYgMzguNjkxOCAxOC4xOTAxWlwiIGZpbGw9XCIjMDM5QjM3XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQyXCIgaGVpZ2h0PVwiNDJcIiB2aWV3Qm94PVwiMCAwIDQyIDQyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjIxXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuNzU0NCAxMy41MzI1QzExLjA0NDQgMTQuMjQyNiAxMS4wNDQ0IDE1LjM5MzcgMTEuNzU0NCAxNi4xMDM4TDE3LjUzOTcgMjEuODg5MUwxMS43NTQ0IDI3LjY3NDRDMTEuMDQ0NCAyOC4zODQ0IDExLjA0NDQgMjkuNTM1NiAxMS43NTQ0IDMwLjI0NTdDMTIuNDY0NSAzMC45NTU3IDEzLjYxNTYgMzAuOTU1NyAxNC4zMjU3IDMwLjI0NTdMMjAuMTExIDI0LjQ2MDRMMjUuODk2MyAzMC4yNDU3QzI2LjYwNjMgMzAuOTU1NyAyNy43NTc1IDMwLjk1NTcgMjguNDY3NSAzMC4yNDU3QzI5LjE3NzYgMjkuNTM1NiAyOS4xNzc2IDI4LjM4NDQgMjguNDY3NSAyNy42NzQ0TDIyLjY4MjIgMjEuODg5MUwyOC40Njc2IDE2LjEwMzhDMjkuMTc3NiAxNS4zOTM3IDI5LjE3NzYgMTQuMjQyNiAyOC40Njc2IDEzLjUzMjVDMjcuNzU3NSAxMi44MjI1IDI2LjYwNjMgMTIuODIyNSAyNS44OTYzIDEzLjUzMjVMMjAuMTExIDE5LjMxNzlMMTQuMzI1NiAxMy41MzI1QzEzLjYxNTYgMTIuODIyNSAxMi40NjQ0IDEyLjgyMjUgMTEuNzU0NCAxMy41MzI1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhY2sgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ3XCIgdmlld0JveD1cIjAgMCA0OCA0N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0yNy41OTE2IDMuMTQ4MDRMMjUuMjEzMyAwLjc1ODc1NUMyNC4yMDYyIC0wLjI1MjkyMiAyMi41Nzc4IC0wLjI1MjkyMiAyMS41ODE1IDAuNzU4NzU1TDAuNzU1MjczIDIxLjY3MDRDLTAuMjUxNzU4IDIyLjY4MiAtMC4yNTE3NTggMjQuMzE3OSAwLjc1NTI3MyAyNS4zMTg5TDIxLjU4MTUgNDYuMjQxMkMyMi41ODg2IDQ3LjI1MjkgMjQuMjE2OSA0Ny4yNTI5IDI1LjIxMzMgNDYuMjQxMkwyNy41OTE2IDQzLjg1MkMyOC42MDkzIDQyLjgyOTUgMjguNTg3OSA0MS4xNjEzIDI3LjU0ODcgNDAuMTYwNEwxNC42Mzk0IDI3LjgwNUg0NS40Mjg5QzQ2Ljg1MzcgMjcuODA1IDQ4IDI2LjY1MzQgNDggMjUuMjIyVjIxLjc3OEM0OCAyMC4zNDY2IDQ2Ljg1MzcgMTkuMTk1IDQ1LjQyODkgMTkuMTk1SDE0LjYzOTRMMjcuNTQ4NyA2LjgzOTU5QzI4LjU5ODYgNS44Mzg2NyAyOC42MiA0LjE3MDQ4IDI3LjU5MTYgMy4xNDgwNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZkJhY2sgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgY2xhc3NOYW1lPVwiYm9sZC1ib3hcIiB2aWV3Qm94PVwiMCAwIDEyOSAxNDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNDY5OTcgMTEwLjI3VjM4LjA1TDY0LjQ3IDc0LjQ4TDEyNy40NyAzNy40OFYxMTAuMjJMNjQuNDcgMTQ2LjU5TDEuNDY5OTcgMTEwLjI3Wk05Mi40NyAxMTcuNEM5MS41OCAxMTcuNCA5MC43MDk5IDExNy42NjQgODkuOTY5OSAxMTguMTU4Qzg5LjIyOTkgMTE4LjY1MyA4OC42NTMxIDExOS4zNTYgODguMzEyNSAxMjAuMTc4Qzg3Ljk3MTkgMTIxIDg3Ljg4MjggMTIxLjkwNSA4OC4wNTY0IDEyMi43NzhDODguMjMwMSAxMjMuNjUxIDg4LjY1ODcgMTI0LjQ1MyA4OS4yODggMTI1LjA4MkM4OS45MTczIDEyNS43MTEgOTAuNzE5MSAxMjYuMTQgOTEuNTkyMSAxMjYuMzE0QzkyLjQ2NSAxMjYuNDg3IDkzLjM2OTggMTI2LjM5OCA5NC4xOTIgMTI2LjA1N0M5NS4wMTQzIDEyNS43MTcgOTUuNzE3MSAxMjUuMTQgOTYuMjExNiAxMjQuNEM5Ni43MDYxIDEyMy42NiA5Ni45NyAxMjIuNzkgOTYuOTcgMTIxLjlDOTYuOTY3MyAxMjAuNzA3IDk2LjQ5MjQgMTE5LjU2NCA5NS42NDkgMTE4LjcyMUM5NC44MDU3IDExNy44NzggOTMuNjYyNiAxMTcuNDAzIDkyLjQ3IDExNy40VjExNy40Wk0xMDYuNDcgMTA5LjRDMTA1LjU4IDEwOS40IDEwNC43MSAxMDkuNjY0IDEwMy45NyAxMTAuMTU4QzEwMy4yMyAxMTAuNjUzIDEwMi42NTMgMTExLjM1NiAxMDIuMzEzIDExMi4xNzhDMTAxLjk3MiAxMTMgMTAxLjg4MyAxMTMuOTA1IDEwMi4wNTYgMTE0Ljc3OEMxMDIuMjMgMTE1LjY1MSAxMDIuNjU5IDExNi40NTMgMTAzLjI4OCAxMTcuMDgyQzEwMy45MTcgMTE3LjcxMSAxMDQuNzE5IDExOC4xNCAxMDUuNTkyIDExOC4zMTRDMTA2LjQ2NSAxMTguNDg3IDEwNy4zNyAxMTguMzk4IDEwOC4xOTIgMTE4LjA1N0MxMDkuMDE0IDExNy43MTcgMTA5LjcxNyAxMTcuMTQgMTEwLjIxMiAxMTYuNEMxMTAuNzA2IDExNS42NiAxMTAuOTcgMTE0Ljc5IDExMC45NyAxMTMuOUMxMTAuOTY3IDExMi43MDcgMTEwLjQ5MiAxMTEuNTY0IDEwOS42NDkgMTEwLjcyMUMxMDguODA2IDEwOS44NzggMTA3LjY2MyAxMDkuNDAzIDEwNi40NyAxMDkuNFYxMDkuNFpNMTE5LjQ3IDEwMS40QzExOC41OCAxMDEuNCAxMTcuNzEgMTAxLjY2NCAxMTYuOTcgMTAyLjE1OEMxMTYuMjMgMTAyLjY1MyAxMTUuNjUzIDEwMy4zNTYgMTE1LjMxMyAxMDQuMTc4QzExNC45NzIgMTA1IDExNC44ODMgMTA1LjkwNSAxMTUuMDU2IDEwNi43NzhDMTE1LjIzIDEwNy42NTEgMTE1LjY1OSAxMDguNDUzIDExNi4yODggMTA5LjA4MkMxMTYuOTE3IDEwOS43MTEgMTE3LjcxOSAxMTAuMTQgMTE4LjU5MiAxMTAuMzE0QzExOS40NjUgMTEwLjQ4NyAxMjAuMzcgMTEwLjM5OCAxMjEuMTkyIDExMC4wNTdDMTIyLjAxNCAxMDkuNzE3IDEyMi43MTcgMTA5LjE0IDEyMy4yMTIgMTA4LjRDMTIzLjcwNiAxMDcuNjYgMTIzLjk3IDEwNi43OSAxMjMuOTcgMTA1LjlDMTIzLjk2NyAxMDQuNzA3IDEyMy40OTIgMTAzLjU2NCAxMjIuNjQ5IDEwMi43MjFDMTIxLjgwNiAxMDEuODc4IDEyMC42NjMgMTAxLjQwMyAxMTkuNDcgMTAxLjRWMTAxLjRaTTEwNS42OSA3MC40QzEwNS4zMDcgNzAuNDAxIDEwNC45MzIgNzAuNTEyIDEwNC42MSA3MC43Mkw4NC40MSA4My43MkM4NC4xODQ5IDgzLjg2MjIgODMuOTkxNSA4NC4wNDkzIDgzLjg0MTggODQuMjY5NUM4My42OTIxIDg0LjQ4OTcgODMuNTg5NCA4NC43MzgzIDgzLjU0IDg1QzgzLjQ4MzQgODUuMjU3MSA4My40NzgxIDg1LjUyMjggODMuNTI0NSA4NS43ODE5QzgzLjU3MDggODYuMDQxIDgzLjY2NzggODYuMjg4NCA4My44MSA4Ni41MUw4NC41OCA4Ny43Qzg0Ljg2NjkgODguMTQ0OSA4NS4zMTg2IDg4LjQ1OCA4NS44MzYgODguNTcwNUM4Ni4zNTMzIDg4LjY4MjkgODYuODk0MiA4OC41ODU3IDg3LjM0IDg4LjNMMTA3LjUzIDc1LjNDMTA3Ljk3MyA3NS4wMTQ0IDEwOC4yODYgNzQuNTY1MSAxMDguNCA3NC4wNUMxMDguNDU4IDczLjc5MzYgMTA4LjQ2NSA3My41MjgyIDEwOC40MiA3My4yNjkxQzEwOC4zNzYgNzMuMDEgMTA4LjI4IDcyLjc2MjIgMTA4LjE0IDcyLjU0TDEwNy4zNyA3MS4zNUMxMDcuMTg4IDcxLjA3MDIgMTA2LjkzOSA3MC44NDAzIDEwNi42NDYgNzAuNjgxNEMxMDYuMzUyIDcwLjUyMjQgMTA2LjAyNCA3MC40Mzk1IDEwNS42OSA3MC40NFY3MC40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcgMzguMzU5OVYxMTBMNjQuNSAxNDYuMDhMMiAxMTBWMzguOTE5OUwzMiA1Ni4yNTk5TDY0IDc0Ljc1OTlMNjQuNSA3NS4wNDk5TDY1IDc0Ljc1OTlMMTI3IDM4LjM1OTlWMzguMzU5OVpNODYuMjYgODkuMDk5OUM4Ni43MzkyIDg5LjA5OTggODcuMjA4MSA4OC45NjA5IDg3LjYxIDg4LjY5OTlMMTA3Ljc5IDc1LjY5OTlDMTA4LjA2OCA3NS41MjYzIDEwOC4zMDkgNzUuMjk4OSAxMDguNDk3IDc1LjAzMUMxMDguNjg2IDc0Ljc2MzEgMTA4LjgyIDc0LjQ2MDEgMTA4Ljg5IDc0LjEzOTlDMTA4Ljk2NCA3My44MTcxIDEwOC45NzIgNzMuNDgzIDEwOC45MTYgNzMuMTU2OEMxMDguODU5IDcyLjgzMDYgMTA4LjczOCA3Mi41MTkgMTA4LjU2IDcyLjIzOTlMMTA3Ljc5IDcxLjA1OTlDMTA3LjU2NSA3MC43MDcyIDEwNy4yNTQgNzAuNDE2OSAxMDYuODg3IDcwLjIxNTlDMTA2LjUyIDcwLjAxNDkgMTA2LjEwOCA2OS45MDk3IDEwNS42OSA2OS45MDk5QzEwNS4yMTEgNjkuOTA4OSAxMDQuNzQxIDcwLjA0NzkgMTA0LjM0IDcwLjMwOTlMODQuMTQgODMuMzA5OUM4My41ODMxIDgzLjY3MDUgODMuMTkxNiA4NC4yMzY4IDgzLjA1MTEgODQuODg1MkM4Mi45MTA1IDg1LjUzMzUgODMuMDMyNCA4Ni4yMTExIDgzLjM5IDg2Ljc2OTlMODQuMTUgODcuOTQ5OUM4NC4zNzU2IDg4LjMwNTMgODQuNjg3MyA4OC41OTc5IDg1LjA1NjEgODguODAwN0M4NS40MjUgODkuMDAzNSA4NS44MzkxIDg5LjEwOTggODYuMjYgODkuMTA5OVY4OS4wOTk5Wk0xMTkuNDcgMTEwLjkxQzEyMC40NTkgMTEwLjkxIDEyMS40MjYgMTEwLjYxNyAxMjIuMjQ4IDExMC4wNjdDMTIzLjA3IDEwOS41MTggMTIzLjcxMSAxMDguNzM3IDEyNC4wODkgMTA3LjgyM0MxMjQuNDY4IDEwNi45MSAxMjQuNTY3IDEwNS45MDQgMTI0LjM3NCAxMDQuOTM0QzEyNC4xODEgMTAzLjk2NSAxMjMuNzA1IDEwMy4wNzQgMTIzLjAwNiAxMDIuMzc0QzEyMi4zMDYgMTAxLjY3NSAxMjEuNDE1IDEwMS4xOTkgMTIwLjQ0NSAxMDEuMDA2QzExOS40NzYgMTAwLjgxMyAxMTguNDcgMTAwLjkxMiAxMTcuNTU3IDEwMS4yOTFDMTE2LjY0MyAxMDEuNjY5IDExNS44NjIgMTAyLjMxIDExNS4zMTMgMTAzLjEzMkMxMTQuNzYzIDEwMy45NTQgMTE0LjQ3IDEwNC45MjEgMTE0LjQ3IDEwNS45MUMxMTQuNDcgMTA3LjIzNiAxMTQuOTk3IDEwOC41MDggMTE1LjkzNCAxMDkuNDQ1QzExNi44NzIgMTEwLjM4MyAxMTguMTQ0IDExMC45MSAxMTkuNDcgMTEwLjkxVjExMC45MVpNMTA2LjQ3IDExOC45MUMxMDcuNDU5IDExOC45MSAxMDguNDI2IDExOC42MTcgMTA5LjI0OCAxMTguMDY3QzExMC4wNyAxMTcuNTE4IDExMC43MTEgMTE2LjczNyAxMTEuMDg5IDExNS44MjNDMTExLjQ2OCAxMTQuOTEgMTExLjU2NyAxMTMuOTA0IDExMS4zNzQgMTEyLjkzNEMxMTEuMTgxIDExMS45NjUgMTEwLjcwNSAxMTEuMDc0IDExMC4wMDYgMTEwLjM3NEMxMDkuMzA2IDEwOS42NzUgMTA4LjQxNSAxMDkuMTk5IDEwNy40NDUgMTA5LjAwNkMxMDYuNDc2IDEwOC44MTMgMTA1LjQ3IDEwOC45MTIgMTA0LjU1NyAxMDkuMjkxQzEwMy42NDMgMTA5LjY2OSAxMDIuODYyIDExMC4zMSAxMDIuMzEzIDExMS4xMzJDMTAxLjc2MyAxMTEuOTU0IDEwMS40NyAxMTIuOTIxIDEwMS40NyAxMTMuOTFDMTAxLjQ3IDExNS4yMzYgMTAxLjk5NyAxMTYuNTA4IDEwMi45MzQgMTE3LjQ0NUMxMDMuODcyIDExOC4zODMgMTA1LjE0NCAxMTguOTEgMTA2LjQ3IDExOC45MVYxMTguOTFaTTkyLjQ3IDEyNi45MUM5My40NTg5IDEyNi45MSA5NC40MjU2IDEyNi42MTcgOTUuMjQ3OCAxMjYuMDY3Qzk2LjA3MDEgMTI1LjUxOCA5Ni43MTEgMTI0LjczNyA5Ny4wODk0IDEyMy44MjNDOTcuNDY3OCAxMjIuOTEgOTcuNTY2OSAxMjEuOTA0IDk3LjM3MzkgMTIwLjkzNEM5Ny4xODEgMTE5Ljk2NSA5Ni43MDQ4IDExOS4wNzQgOTYuMDA1NSAxMTguMzc0Qzk1LjMwNjMgMTE3LjY3NSA5NC40MTU0IDExNy4xOTkgOTMuNDQ1NCAxMTcuMDA2QzkyLjQ3NTUgMTE2LjgxMyA5MS40NzAyIDExNi45MTIgOTAuNTU2NiAxMTcuMjkxQzg5LjY0MjkgMTE3LjY2OSA4OC44NjIxIDExOC4zMSA4OC4zMTI3IDExOS4xMzJDODcuNzYzMiAxMTkuOTU0IDg3LjQ3IDEyMC45MjEgODcuNDcgMTIxLjkxQzg3LjQ3IDEyMy4yMzYgODcuOTk2OCAxMjQuNTA4IDg4LjkzNDUgMTI1LjQ0NUM4OS44NzIxIDEyNi4zODMgOTEuMTQzOSAxMjYuOTEgOTIuNDcgMTI2LjkxWk0xMjcuNDcgMzYuOTA5OUw2NC40NyA3My45MDk5TDMyLjQ3IDU1LjQwOTlMMSAzNy4yMDk5VjExMC41M0w2NC41IDE0Ny4xOUwxMjggMTEwLjU2VjM3LjIzOTlMMTI3LjQ2IDM2LjkyOTlMMTI3LjQ3IDM2LjkwOTlaTTg2LjI2IDg4LjA5OTlDODYuMDA4OCA4OC4xMDA0IDg1Ljc2MTYgODguMDM3NCA4NS41NDE0IDg3LjkxNjhDODUuMzIxMSA4Ny43OTYyIDg1LjEzNDggODcuNjIxOCA4NSA4Ny40MDk5TDg0LjIzIDg2LjIxOTlDODQuMDE4NCA4NS44ODQ5IDgzLjk0NjkgODUuNDggODQuMDMxMSA4NS4wOTI4Qzg0LjExNTMgODQuNzA1NSA4NC4zNDg0IDg0LjM2NjkgODQuNjggODQuMTQ5OUwxMDQuODggNzEuMTQ5OUMxMDUuMTE5IDcwLjk4OTYgMTA1LjQwMiA3MC45MDU5IDEwNS42OSA3MC45MDk5QzEwNS45NDEgNzAuOTA5NCAxMDYuMTg4IDcwLjk3MjQgMTA2LjQwOSA3MS4wOTNDMTA2LjYyOSA3MS4yMTM3IDEwNi44MTUgNzEuMzg4IDEwNi45NSA3MS41OTk5TDEwNy43MiA3Mi43ODk5QzEwNy45MzMgNzMuMTI1NSAxMDguMDA1IDczLjUzMiAxMDcuOTE4IDczLjkyMDFDMTA3LjgzMiA3NC4zMDgzIDEwNy41OTUgNzQuNjQ2MyAxMDcuMjYgNzQuODU5OUw4Ny4wNyA4Ny44NTk5Qzg2LjgyODYgODguMDE1OSA4Ni41NDc0IDg4LjA5OTIgODYuMjYgODguMDk5OVY4OC4wOTk5Wk0xMTkuNDcgMTA5LjlDMTE4LjY3OSAxMDkuOSAxMTcuOTA2IDEwOS42NjUgMTE3LjI0OCAxMDkuMjI2QzExNi41OSAxMDguNzg2IDExNi4wNzcgMTA4LjE2MiAxMTUuNzc0IDEwNy40MzFDMTE1LjQ3MiAxMDYuNyAxMTUuMzkzIDEwNS44OTUgMTE1LjU0NyAxMDUuMTJDMTE1LjcwMSAxMDQuMzQ0IDExNi4wODIgMTAzLjYzMSAxMTYuNjQyIDEwMy4wNzFDMTE3LjIwMSAxMDIuNTEyIDExNy45MTQgMTAyLjEzMSAxMTguNjkgMTAxLjk3N0MxMTkuNDY2IDEwMS44MjIgMTIwLjI3IDEwMS45MDIgMTIxLjAwMSAxMDIuMjA0QzEyMS43MzIgMTAyLjUwNyAxMjIuMzU2IDEwMy4wMiAxMjIuNzk2IDEwMy42NzhDMTIzLjIzNSAxMDQuMzM1IDEyMy40NyAxMDUuMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTA2Ljk2MSAxMjMuMDQ5IDEwNy45NzggMTIyLjI5OCAxMDguNzI4QzEyMS41NDggMTA5LjQ3OCAxMjAuNTMxIDEwOS45IDExOS40NyAxMDkuOVpNMTA2LjQ3IDExNy45QzEwNS42NzkgMTE3LjkgMTA0LjkwNiAxMTcuNjY1IDEwNC4yNDggMTE3LjIyNkMxMDMuNTkgMTE2Ljc4NiAxMDMuMDc3IDExNi4xNjIgMTAyLjc3NCAxMTUuNDMxQzEwMi40NzIgMTE0LjcgMTAyLjM5MyAxMTMuODk1IDEwMi41NDcgMTEzLjEyQzEwMi43MDEgMTEyLjM0NCAxMDMuMDgyIDExMS42MzEgMTAzLjY0MiAxMTEuMDcxQzEwNC4yMDEgMTEwLjUxMiAxMDQuOTE0IDExMC4xMzEgMTA1LjY5IDEwOS45NzdDMTA2LjQ2NiAxMDkuODIyIDEwNy4yNyAxMDkuOTAyIDEwOC4wMDEgMTEwLjIwNEMxMDguNzMyIDExMC41MDcgMTA5LjM1NiAxMTEuMDIgMTA5Ljc5NiAxMTEuNjc4QzExMC4yMzUgMTEyLjMzNSAxMTAuNDcgMTEzLjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExNC45NjEgMTEwLjA0OSAxMTUuOTc4IDEwOS4yOTggMTE2LjcyOEMxMDguNTQ4IDExNy40NzggMTA3LjUzMSAxMTcuOSAxMDYuNDcgMTE3LjlaTTkyLjQ3IDEyNS45QzkxLjY3ODkgMTI1LjkgOTAuOTA1NSAxMjUuNjY1IDkwLjI0NzcgMTI1LjIyNkM4OS41ODk5IDEyNC43ODYgODkuMDc3MiAxMjQuMTYyIDg4Ljc3NDUgMTIzLjQzMUM4OC40NzE3IDEyMi43IDg4LjM5MjUgMTIxLjg5NSA4OC41NDY5IDEyMS4xMkM4OC43MDEyIDEyMC4zNDQgODkuMDgyMiAxMTkuNjMxIDg5LjY0MTYgMTE5LjA3MUM5MC4yMDEgMTE4LjUxMiA5MC45MTM3IDExOC4xMzEgOTEuNjg5NiAxMTcuOTc3QzkyLjQ2NTYgMTE3LjgyMiA5My4yNjk4IDExNy45MDIgOTQuMDAwNyAxMTguMjA0Qzk0LjczMTYgMTE4LjUwNyA5NS4zNTYzIDExOS4wMiA5NS43OTU5IDExOS42NzhDOTYuMjM1NCAxMjAuMzM1IDk2LjQ3IDEyMS4xMDkgOTYuNDcgMTIxLjlDOTYuNDcgMTIyLjk2MSA5Ni4wNDg2IDEyMy45NzggOTUuMjk4NCAxMjQuNzI4Qzk0LjU0ODMgMTI1LjQ3OCA5My41MzA5IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMjUuNEM5NC40MDMgMTI1LjQgOTUuOTcgMTIzLjgzMyA5NS45NyAxMjEuOUM5NS45NyAxMTkuOTY3IDk0LjQwMyAxMTguNCA5Mi40NyAxMTguNEM5MC41MzcgMTE4LjQgODguOTcgMTE5Ljk2NyA4OC45NyAxMjEuOUM4OC45NyAxMjMuODMzIDkwLjUzNyAxMjUuNCA5Mi40NyAxMjUuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTE4LjlDOTMuMDYzMyAxMTguOSA5My42NDMzIDExOS4wNzYgOTQuMTM2NyAxMTkuNDA1Qzk0LjYzIDExOS43MzUgOTUuMDE0NSAxMjAuMjA0IDk1LjI0MTYgMTIwLjc1MkM5NS40Njg3IDEyMS4zIDk1LjUyODEgMTIxLjkwMyA5NS40MTIzIDEyMi40ODVDOTUuMjk2NiAxMjMuMDY3IDk1LjAxMDkgMTIzLjYwMiA5NC41OTEzIDEyNC4wMjFDOTQuMTcxNyAxMjQuNDQxIDkzLjYzNzIgMTI0LjcyNiA5My4wNTUyIDEyNC44NDJDOTIuNDczMyAxMjQuOTU4IDkxLjg3MDEgMTI0Ljg5OSA5MS4zMjE5IDEyNC42NzJDOTAuNzczNyAxMjQuNDQ0IDkwLjMwNTIgMTI0LjA2IDg5Ljk3NTYgMTIzLjU2N0M4OS42NDU5IDEyMy4wNzMgODkuNDcgMTIyLjQ5MyA4OS40NyAxMjEuOUM4OS40NyAxMjEuMTA0IDg5Ljc4NiAxMjAuMzQxIDkwLjM0ODcgMTE5Ljc3OUM5MC45MTEzIDExOS4yMTYgOTEuNjc0MyAxMTguOSA5Mi40NyAxMTguOVYxMTguOVpNOTIuNDcgMTE3LjlDOTEuNjc4OCAxMTcuOSA5MC45MDU1IDExOC4xMzQgOTAuMjQ3NyAxMTguNTc0Qzg5LjU4OTkgMTE5LjAxNCA4OS4wNzcyIDExOS42MzggODguNzc0NSAxMjAuMzY5Qzg4LjQ3MTcgMTIxLjEgODguMzkyNSAxMjEuOTA0IDg4LjU0NjggMTIyLjY4Qzg4LjcwMTIgMTIzLjQ1NiA4OS4wODIxIDEyNC4xNjkgODkuNjQxNSAxMjQuNzI4QzkwLjIwMSAxMjUuMjg4IDkwLjkxMzcgMTI1LjY2OSA5MS42ODk2IDEyNS44MjNDOTIuNDY1NSAxMjUuOTc3IDkzLjI2OTggMTI1Ljg5OCA5NC4wMDA3IDEyNS41OTVDOTQuNzMxNiAxMjUuMjkzIDk1LjM1NjMgMTI0Ljc4IDk1Ljc5NTggMTI0LjEyMkM5Ni4yMzU0IDEyMy40NjQgOTYuNDcgMTIyLjY5MSA5Ni40NyAxMjEuOUM5Ni40NyAxMjAuODM5IDk2LjA0ODUgMTE5LjgyMiA5NS4yOTg0IDExOS4wNzFDOTQuNTQ4MyAxMTguMzIxIDkzLjUzMDggMTE3LjkgOTIuNDcgMTE3LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg2LjI2IDg3LjZDODYuMDkyNyA4Ny41OTk3IDg1LjkyODEgODcuNTU3NCA4NS43ODE0IDg3LjQ3NzFDODUuNjM0NiA4Ny4zOTY3IDg1LjUxMDQgODcuMjgwOCA4NS40MiA4Ny4xNEw4NC42NSA4NkM4NC41NzkxIDg1Ljg4ODIgODQuNTMxMSA4NS43NjM1IDg0LjUwODggODUuNjMzQzg0LjQ4NjUgODUuNTAyNSA4NC40OTAzIDg1LjM2ODkgODQuNTIgODUuMjRDODQuNTc2OSA4NC45ODUxIDg0LjczMTIgODQuNzYyNiA4NC45NSA4NC42MkwxMDUuMTUgNzEuNjJDMTA1LjMxMSA3MS41MTYgMTA1LjQ5OCA3MS40NjA1IDEwNS42OSA3MS40NkMxMDUuODU3IDcxLjQ2MDIgMTA2LjAyMiA3MS41MDI1IDEwNi4xNjkgNzEuNTgyOUMxMDYuMzE1IDcxLjY2MzIgMTA2LjQ0IDcxLjc3OTEgMTA2LjUzIDcxLjkyTDEwNy4zIDczLjExQzEwNy40NDEgNzMuMzMzMSAxMDcuNDg3IDczLjYwMjYgMTA3LjQzIDczLjg2QzEwNy4zNzEgNzQuMTE2NSAxMDcuMjEzIDc0LjMzOTMgMTA2Ljk5IDc0LjQ4TDg2LjggODcuNDhDODYuNjM0OSA4Ny41Njk5IDg2LjQ0NzcgODcuNjExNSA4Ni4yNiA4Ny42WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDUuNjkgNzEuOTM5OUMxMDUuNzc0IDcxLjkzOTEgMTA1Ljg1NyA3MS45NTk5IDEwNS45MyA3Mi4wMDAxQzEwNi4wMDQgNzIuMDQwNCAxMDYuMDY2IDcyLjA5ODkgMTA2LjExIDcyLjE2OTlMMTA2Ljg4IDczLjM1OTlDMTA2Ljk0OCA3My40NzA0IDEwNi45NyA3My42MDM1IDEwNi45NCA3My43Mjk5QzEwNi45MSA3My44NjA2IDEwNi44MzEgNzMuOTc1IDEwNi43MiA3NC4wNDk5TDg2LjUyIDg2Ljk5OTlDODYuNDQxNiA4Ny4wNDg0IDg2LjM1MjEgODcuMDc1OSA4Ni4yNiA4Ny4wNzk5Qzg2LjE3NTMgODcuMDc5NyA4Ni4wOTIgODcuMDU3NSA4Ni4wMTg0IDg3LjAxNTRDODUuOTQ0NyA4Ni45NzMzIDg1Ljg4MzMgODYuOTEyOSA4NS44NCA4Ni44Mzk5TDg1LjA3IDg1LjY1OTlDODUuMDAyOSA4NS41NTI4IDg0Ljk3NzkgODUuNDI0NSA4NSA4NS4yOTk5Qzg1LjAwOTQgODUuMjM1OCA4NS4wMzMyIDg1LjE3NDYgODUuMDY5NSA4NS4xMjA5Qzg1LjEwNTkgODUuMDY3MiA4NS4xNTM5IDg1LjAyMjQgODUuMjEgODQuOTg5OUwxMDUuNDEgNzEuOTg5OUMxMDUuNDkyIDcxLjk0MTUgMTA1LjU4NSA3MS45MTcyIDEwNS42OCA3MS45MTk5TDEwNS42OSA3MS45Mzk5Wk0xMDUuNjggNzAuOTE5OUMxMDUuMzkyIDcwLjkxNTkgMTA1LjEwOSA3MC45OTk2IDEwNC44NyA3MS4xNTk5TDg0LjY3IDg0LjE1OTlDODQuMzM4NCA4NC4zNzY5IDg0LjEwNTMgODQuNzE1NSA4NC4wMjEyIDg1LjEwMjhDODMuOTM3IDg1LjQ5IDg0LjAwODQgODUuODk0OSA4NC4yMiA4Ni4yMjk5TDg1IDg3LjQwOTlDODUuMTA1NyA4Ny41NzYyIDg1LjI0MzMgODcuNzE5OSA4NS40MDQ4IDg3LjgzMjdDODUuNTY2MyA4Ny45NDU0IDg1Ljc0ODYgODguMDI1IDg1Ljk0MTEgODguMDY2OUM4Ni4xMzM3IDg4LjEwODcgODYuMzMyNSA4OC4xMTIgODYuNTI2MyA4OC4wNzY1Qzg2LjcyMDEgODguMDQwOSA4Ni45MDQ5IDg3Ljk2NzQgODcuMDcgODcuODU5OUwxMDcuMjYgNzQuODU5OUMxMDcuNTk1IDc0LjY0NjMgMTA3LjgzMiA3NC4zMDgzIDEwNy45MTkgNzMuOTIwMkMxMDguMDA1IDczLjUzMiAxMDcuOTMzIDczLjEyNTUgMTA3LjcyIDcyLjc4OTlMMTA3IDcxLjYyOTlDMTA2Ljg2NSA3MS40MTgxIDEwNi42NzkgNzEuMjQzNyAxMDYuNDU5IDcxLjEyMzFDMTA2LjIzOCA3MS4wMDI0IDEwNS45OTEgNzAuOTM5NCAxMDUuNzQgNzAuOTM5OUwxMDUuNjggNzAuOTE5OVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA2LjQ3IDExNy40QzEwOC40MDMgMTE3LjQgMTA5Ljk3IDExNS44MzMgMTA5Ljk3IDExMy45QzEwOS45NyAxMTEuOTY3IDEwOC40MDMgMTEwLjQgMTA2LjQ3IDExMC40QzEwNC41MzcgMTEwLjQgMTAyLjk3IDExMS45NjcgMTAyLjk3IDExMy45QzEwMi45NyAxMTUuODMzIDEwNC41MzcgMTE3LjQgMTA2LjQ3IDExNy40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTEwLjlDMTA3LjA2MyAxMTAuOSAxMDcuNjQzIDExMS4wNzYgMTA4LjEzNyAxMTEuNDA1QzEwOC42MyAxMTEuNzM1IDEwOS4wMTUgMTEyLjIwNCAxMDkuMjQyIDExMi43NTJDMTA5LjQ2OSAxMTMuMyAxMDkuNTI4IDExMy45MDMgMTA5LjQxMiAxMTQuNDg1QzEwOS4yOTcgMTE1LjA2NyAxMDkuMDExIDExNS42MDIgMTA4LjU5MSAxMTYuMDIxQzEwOC4xNzIgMTE2LjQ0MSAxMDcuNjM3IDExNi43MjYgMTA3LjA1NSAxMTYuODQyQzEwNi40NzMgMTE2Ljk1OCAxMDUuODcgMTE2Ljg5OSAxMDUuMzIyIDExNi42NzJDMTA0Ljc3NCAxMTYuNDQ0IDEwNC4zMDUgMTE2LjA2IDEwMy45NzYgMTE1LjU2N0MxMDMuNjQ2IDExNS4wNzMgMTAzLjQ3IDExNC40OTMgMTAzLjQ3IDExMy45QzEwMy40NyAxMTMuMTA0IDEwMy43ODYgMTEyLjM0MSAxMDQuMzQ5IDExMS43NzlDMTA0LjkxMSAxMTEuMjE2IDEwNS42NzQgMTEwLjkgMTA2LjQ3IDExMC45VjExMC45Wk0xMDYuNDcgMTA5LjlDMTA1LjY3OSAxMDkuOSAxMDQuOTA1IDExMC4xMzQgMTA0LjI0OCAxMTAuNTc0QzEwMy41OSAxMTEuMDE0IDEwMy4wNzcgMTExLjYzOCAxMDIuNzc0IDExMi4zNjlDMTAyLjQ3MiAxMTMuMSAxMDIuMzkyIDExMy45MDQgMTAyLjU0NyAxMTQuNjhDMTAyLjcwMSAxMTUuNDU2IDEwMy4wODIgMTE2LjE2OSAxMDMuNjQyIDExNi43MjhDMTA0LjIwMSAxMTcuMjg4IDEwNC45MTQgMTE3LjY2OSAxMDUuNjkgMTE3LjgyM0MxMDYuNDY2IDExNy45NzcgMTA3LjI3IDExNy44OTggMTA4LjAwMSAxMTcuNTk1QzEwOC43MzIgMTE3LjI5MyAxMDkuMzU2IDExNi43OCAxMDkuNzk2IDExNi4xMjJDMTEwLjIzNSAxMTUuNDY0IDExMC40NyAxMTQuNjkxIDExMC40NyAxMTMuOUMxMTAuNDcgMTEyLjgzOSAxMTAuMDQ5IDExMS44MjIgMTA5LjI5OCAxMTEuMDcxQzEwOC41NDggMTEwLjMyMSAxMDcuNTMxIDEwOS45IDEwNi40NyAxMDkuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwOS40QzEyMS40MDMgMTA5LjQgMTIyLjk3IDEwNy44MzMgMTIyLjk3IDEwNS45QzEyMi45NyAxMDMuOTY3IDEyMS40MDMgMTAyLjQgMTE5LjQ3IDEwMi40QzExNy41MzcgMTAyLjQgMTE1Ljk3IDEwMy45NjcgMTE1Ljk3IDEwNS45QzExNS45NyAxMDcuODMzIDExNy41MzcgMTA5LjQgMTE5LjQ3IDEwOS40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTAyLjlDMTIwLjA2MyAxMDIuOSAxMjAuNjQzIDEwMy4wNzYgMTIxLjEzNyAxMDMuNDA1QzEyMS42MyAxMDMuNzM1IDEyMi4wMTUgMTA0LjIwNCAxMjIuMjQyIDEwNC43NTJDMTIyLjQ2OSAxMDUuMyAxMjIuNTI4IDEwNS45MDMgMTIyLjQxMiAxMDYuNDg1QzEyMi4yOTcgMTA3LjA2NyAxMjIuMDExIDEwNy42MDIgMTIxLjU5MSAxMDguMDIxQzEyMS4xNzIgMTA4LjQ0MSAxMjAuNjM3IDEwOC43MjYgMTIwLjA1NSAxMDguODQyQzExOS40NzMgMTA4Ljk1OCAxMTguODcgMTA4Ljg5OSAxMTguMzIyIDEwOC42NzJDMTE3Ljc3NCAxMDguNDQ0IDExNy4zMDUgMTA4LjA2IDExNi45NzYgMTA3LjU2N0MxMTYuNjQ2IDEwNy4wNzMgMTE2LjQ3IDEwNi40OTMgMTE2LjQ3IDEwNS45QzExNi40NyAxMDUuMTA0IDExNi43ODYgMTA0LjM0MSAxMTcuMzQ5IDEwMy43NzlDMTE3LjkxMSAxMDMuMjE2IDExOC42NzQgMTAyLjkgMTE5LjQ3IDEwMi45VjEwMi45Wk0xMTkuNDcgMTAxLjlDMTE4LjY3OSAxMDEuOSAxMTcuOTA1IDEwMi4xMzQgMTE3LjI0OCAxMDIuNTc0QzExNi41OSAxMDMuMDE0IDExNi4wNzcgMTAzLjYzOCAxMTUuNzc0IDEwNC4zNjlDMTE1LjQ3MiAxMDUuMSAxMTUuMzkyIDEwNS45MDQgMTE1LjU0NyAxMDYuNjhDMTE1LjcwMSAxMDcuNDU2IDExNi4wODIgMTA4LjE2OSAxMTYuNjQyIDEwOC43MjhDMTE3LjIwMSAxMDkuMjg4IDExNy45MTQgMTA5LjY2OSAxMTguNjkgMTA5LjgyM0MxMTkuNDY2IDEwOS45NzcgMTIwLjI3IDEwOS44OTggMTIxLjAwMSAxMDkuNTk1QzEyMS43MzIgMTA5LjI5MyAxMjIuMzU2IDEwOC43OCAxMjIuNzk2IDEwOC4xMjJDMTIzLjIzNSAxMDcuNDY0IDEyMy40NyAxMDYuNjkxIDEyMy40NyAxMDUuOUMxMjMuNDcgMTA0LjgzOSAxMjMuMDQ5IDEwMy44MjIgMTIyLjI5OCAxMDMuMDcxQzEyMS41NDggMTAyLjMyMSAxMjAuNTMxIDEwMS45IDExOS40NyAxMDEuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuMzQgMTYuNjdMNjEuMDcgMzYuOUwzMi40NyA1NS40TDEuMDEwMDEgMzcuMjFMMS41NjAwMSAzNi45TDY0LjQ3IDAuNTc5OTU2TDkyLjM0IDE2LjY3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNTYwMDEgMzYuODk5OUwxLjAxMDAxIDM3LjIwOTlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcuNDMgMzYuOTI5OUw2NC40NyA3My44OTk5TDMyLjQ3IDU1LjM5OTlMNjEuMDcgMzYuODk5OUw5Mi4zNCAxNi42Njk5TDEyNy4zOCAzNi44OTk5TDEyNy40MyAzNi45Mjk5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTY0LjQ3IDczLjg5OTlWMTQ2LjlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiM1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTE3LjlDMTA4LjY3OSAxMTcuOSAxMTAuNDcgMTE2LjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExMS42OTEgMTA4LjY3OSAxMDkuOSAxMDYuNDcgMTA5LjlDMTA0LjI2MSAxMDkuOSAxMDIuNDcgMTExLjY5MSAxMDIuNDcgMTEzLjlDMTAyLjQ3IDExNi4xMDkgMTA0LjI2MSAxMTcuOSAxMDYuNDcgMTE3LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTI1LjlDOTQuNjc5MSAxMjUuOSA5Ni40NyAxMjQuMTA5IDk2LjQ3IDEyMS45Qzk2LjQ3IDExOS42OTEgOTQuNjc5MSAxMTcuOSA5Mi40NyAxMTcuOUM5MC4yNjA4IDExNy45IDg4LjQ3IDExOS42OTEgODguNDcgMTIxLjlDODguNDcgMTI0LjEwOSA5MC4yNjA4IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDkuOUMxMjEuNjc5IDEwOS45IDEyMy40NyAxMDguMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTAzLjY5MSAxMjEuNjc5IDEwMS45IDExOS40NyAxMDEuOUMxMTcuMjYxIDEwMS45IDExNS40NyAxMDMuNjkxIDExNS40NyAxMDUuOUMxMTUuNDcgMTA4LjEwOSAxMTcuMjYxIDEwOS45IDExOS40NyAxMDkuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMjguNDFcIiBoZWlnaHQ9XCIxNDcuMjJcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07IiwiY29uc3QgYmFzZVVybD0gIFwiaHR0cHM6Ly9iYWNrZW5kLWxvZ2lzdGljcy5oZXJva3VhcHAuY29tXCJcclxuZXhwb3J0IGNvbnN0IGFwaSA9IGAke2Jhc2VVcmx9L2FwaWA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard.js");
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

/***/ "./components/userLogin/userLogin.js":
/*!*******************************************!*\
  !*** ./components/userLogin/userLogin.js ***!
  \*******************************************/
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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../svg */ "./svg.js");

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\components\\userLogin\\userLogin.js";





const UserLogin = () => {
  const {
    userError,
    authenticating,
    handleLoginChange,
    handleLoginSubmit,
    handleSocialLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: handleLoginChange,
              id: "email",
              name: "email",
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              onChange: handleLoginChange,
              id: "password",
              name: "password",
              placeholder: "Your last name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 27
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 23
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "submit",
            children: userError !== undefined || authenticating !== true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 79
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "connecting..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 126
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: Object(_svg__WEBPACK_IMPORTED_MODULE_4__["innerLoader"])()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 152
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 117
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, undefined), userError !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: userError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 49
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social-login",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "or sign in with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 27
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: handleSocialLogin,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: Object(_svg__WEBPACK_IMPORTED_MODULE_4__["Google"])()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 63
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 86
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 27
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "login-tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/ResetPassword",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Reset password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 74
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 46
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 41
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "Don't have an account?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 75
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 54
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 50
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserLogin);

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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "G:\\G4 Logistics\\FrontEnd\\pages\\dashboard.js";






const Dashboard = () => {
  const {
    isLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "dashboard_wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dashboard_holder",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Dashboard",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => router.replace('request'),
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["box"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Ship Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => router.replace('profile'),
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["profile"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => router.replace('transaction'),
          className: "Dashboard-container",
          children: [Object(_svg__WEBPACK_IMPORTED_MODULE_1__["transaction"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Transaction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 14
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmFsaWRhdG9yL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3ZnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9mdW5jdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsInByb3BzIiwic2V0VHJhbnNhY3Rpb24iLCJ1c2VDb250ZXh0IiwiUmVxdWVzdENvbnRleHQiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInVzZVN0YXRlIiwiaXNBZG1pbiIsInNldGlzQWRtaW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJ1c2VyRXJyb3IiLCJzZXRVc2VyRXJyb3IiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJyZXNldFBhc3N3b3JkIiwic2V0UmVzZXRQYXNzd29yZCIsImxvZ2luIiwic2V0TG9naW4iLCJhdXRoZW50aWNhdGluZyIsInNldEF1dGhlbnRpY2F0aW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibWVzc2FnZSIsInRva2VuIiwidXNlciIsImZ1bGxOYW1lIiwicm9sZSIsIl9pZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJnZXRJZFRva2VuUmVzdWx0IiwidGhlbiIsImlkVG9rZW5SZXN1bHQiLCJjbGFpbXMiLCJhZG1pbiIsImhhbmRsZUxvZ2luQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImNyZWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJyZXBsYWNlIiwiaGFuZGxlQWRtaW5TaWduVXAiLCJhZGRBZG1pblJvbGUiLCJmdW5jdGlvbnMiLCJodHRwc0NhbGxhYmxlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwiY2F0Y2giLCJwYXNzd29yZFJlc2V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiZW1haWxSZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJsZW5ndGgiLCJoYW5kbGVTb2NpYWxMb2dpbiIsInByb3ZpZGVyIiwiYWRkU2NvcGUiLCJzaWduSW5XaXRoUG9wdXAiLCJjcmVkZW50aWFsIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwiZGlzcGxheU5hbWUiLCJzcGxpdCIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiaGFuZGxlQWRtaW5Mb2dpbiIsImNoaWxkcmVuIiwiUmVxdWVzdENvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJjcmVhdGVkQXQiLCJzdGF0dXMiLCJhbW91bnQiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0IiwidGVtcG9yYXJ5SW1hZ2UiLCJzZXRUZW1wb3JhcnlJbWFnZSIsInNldFJlcXVlc3RJbWFnZXMiLCJjb3VudCIsInNldENvdW50IiwiZm9ybSIsInNldEZvcm0iLCJyZXF1ZXN0U3VjY2VzcyIsInNldFJlcXVlc3RTdWNjZXNzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwidHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbkluc3QiLCJzZXRUcmFuc2FjdGlvbkluc3QiLCJnYWxsZXJ5SW1hZ2UiLCJzZXRHYWxsZXJ5SW1hZ2UiLCJ3aGVyZSIsImdldCIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiaWQiLCJwdXNoIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2hhbmdlIiwicmVxdWVzdFZhbGlkYXRlIiwibmV3SW5wdXQiLCJoYW5kbGVDaGVjayIsImNoZWNrZWQiLCJwcmVmZXRjaCIsInN0b3JlIiwicmVmIiwiY2hpbGQiLCJsaXN0QWxsIiwiaXRlbXMiLCJpbWFnZVJlZiIsImdldEltYWdlVXJsIiwiaW1nIiwiaW1hZ2VzIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwaG90b0NoYW5nZSIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJwZXJmZWN0U2l6ZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlc3RydWN0dXJlVXJsIiwiaW1hZ2VTb3VyY2UiLCJzdG9yYWdlUmVmIiwicHV0Iiwib24iLCJzbmFwIiwibmV3UGVyY2VudGFnZSIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyIiwiY2xvdWRVcmwiLCJyZXZva2VPYmplY3RVUkwiLCJoYW5kbGVGb3JtU3VibWl0IiwiYWRkIiwidGltZXN0YW1wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsImhhbmRsZUZvcm1QcmV2aWV3Iiwic2VsZWN0b3IiLCJjb250ZW50IiwiaWNvbiIsImNvbnRhY3QiLCJ0aXRsZSIsImdhbGxlcnkiLCJvZmZCYWNrIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZUFwcCIsImZpcmViYXNlIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJhcHAiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwiRmllbGRWYWx1ZSIsInNlcnZlclRpbWVzdGFtcCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlVzZXJMb2dpbiIsImlubmVyTG9hZGVyIiwiR29vZ2xlIiwicHJvZmlsZVZhbGlkYXRlIiwiYWRkcmVzcyIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkRhc2hib2FyZCIsImJveCIsInByb2ZpbGUiLCJhdmF0YXIiLCJ1cGxvYWQiLCJjaGVja01hcmsiLCJjbG9zZSIsIkJhY2siLCJMb2FkZXIiLCJjYW1lcmEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsTUFBTUMsbUJBQW1CLEdBQUlDLEtBQUQsSUFBVztBQUNuQyxRQUFNO0FBQUNDO0FBQUQsTUFBbUJDLHdEQUFVLENBQUNDLHNFQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0osc0RBQVEsRUFBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLHNEQUFRLEVBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCUixzREFBUSxDQUFDO0FBQ2pDUyxhQUFTLEVBQUUsRUFEc0I7QUFFakNDLFlBQVEsRUFBRSxFQUZ1QjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxlQUFXLEVBQUUsRUFKb0I7QUFLakNDLFlBQVEsRUFBRSxFQUx1QjtBQU1qQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxFQUZGO0FBR1JDLFdBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFXLEVBQUUsRUFKTDtBQUtSQyxjQUFRLEVBQUU7QUFMRjtBQU5xQixHQUFELENBQXBDO0FBZUEsUUFBTTtBQUFBLE9BQUNFLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NoQixzREFBUSxDQUFDO0FBQy9DVyxTQUFLLEVBQUUsRUFEd0M7QUFFL0NHLGNBQVUsRUFBRTtBQUNSSCxXQUFLLEVBQUU7QUFEQztBQUZtQyxHQUFELENBQWxEO0FBT0EsUUFBTTtBQUFBLE9BQUNNLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CbEIsc0RBQVEsQ0FBQztBQUMvQlcsU0FBSyxFQUFFLEVBRHdCO0FBRS9CRSxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLGNBQVUsRUFBRTtBQUNSSCxXQUFLLEVBQUUsRUFEQztBQUVSRSxjQUFRLEVBQUU7QUFGRjtBQUhtQixHQUFELENBQWxDO0FBU0EsUUFBTTtBQUFBLE9BQUNNLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NwQixzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CdEIsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTXVCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0IxQixzREFBUSxDQUFDO0FBQ25DMkIsV0FBTyxFQUFFLEVBRDBCO0FBRW5DQyxTQUFLLEVBQUUsRUFGNEI7QUFHbkNDLFFBQUksRUFBRTtBQUNGbEIsV0FBSyxFQUFFLEVBREw7QUFFRkYsZUFBUyxFQUFFLEVBRlQ7QUFHRnFCLGNBQVEsRUFBRSxFQUhSO0FBSUZwQixjQUFRLEVBQUUsRUFKUjtBQUtGcUIsVUFBSSxFQUFFLEVBTEo7QUFNRkMsU0FBRyxFQUFFO0FBTkg7QUFINkIsR0FBRCxDQUF0QztBQWFBQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsa0RBQUksQ0FBQ0Msa0JBQUwsQ0FBd0JOLElBQUksSUFBSTtBQUM1QkEsVUFBSSxJQUFJLElBQVIsR0FBZTlCLFVBQVUsQ0FBQyxLQUFELENBQXpCLEdBQW1DQSxVQUFVLENBQUMsSUFBRCxDQUE3Qzs7QUFDQSxVQUFHOEIsSUFBSCxFQUFRO0FBQ0pBLFlBQUksQ0FBQ08sZ0JBQUwsR0FBd0JDLElBQXhCLENBQTZCQyxhQUFhLElBQUk7QUFDMUNBLHVCQUFhLENBQUNDLE1BQWQsQ0FBcUJDLEtBQXJCLElBQThCLElBQTlCLEdBQXFDdEMsVUFBVSxDQUFDLElBQUQsQ0FBL0MsR0FBd0RBLFVBQVUsQ0FBQyxLQUFELENBQWxFO0FBQ0gsU0FGRDtBQUdIO0FBQ0osS0FQRDtBQVFILEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBV0EsUUFBTXVDLGlCQUFpQixHQUFJQyxDQUFELElBQU87QUFDN0IsVUFBTTtBQUFFQyxVQUFGO0FBQVFDO0FBQVIsUUFBa0JGLENBQUMsQ0FBQ0csTUFBMUI7O0FBQ0EsUUFBSUMsUUFBUSxtQ0FBTzdCLEtBQVA7QUFBYyxPQUFDMEIsSUFBRCxHQUFRQztBQUF0QixNQUFaOztBQUNBLFdBQU8xQixRQUFRLENBQUM0QixRQUFELENBQWY7QUFDSCxHQUpEOztBQU1BLFFBQU1DLGtCQUFrQixHQUFJTCxDQUFELElBQU87QUFDOUIsVUFBTTtBQUFFNUI7QUFBRiwwQkFBcUJQLE1BQXJCLENBQU47O0FBQ0EsVUFBTTtBQUFFb0MsVUFBRjtBQUFRQztBQUFSLFFBQWtCRixDQUFDLENBQUNHLE1BQTFCO0FBQ0FHLDhFQUFjLENBQUNMLElBQUQsRUFBT0MsS0FBUCxFQUFjOUIsVUFBZCxDQUFkOztBQUNBLFFBQUltQyxTQUFTLG1DQUFPMUMsTUFBUDtBQUFlLE9BQUNvQyxJQUFELEdBQVFDO0FBQXZCLE1BQWI7O0FBQ0EsV0FBT3BDLFNBQVMsQ0FBQ3lDLFNBQUQsQ0FBaEI7QUFDSCxHQU5EOztBQVFBLFFBQU1DLGtCQUFrQixHQUFHLE1BQU1SLENBQU4sSUFBWTtBQUNuQ0EsS0FBQyxDQUFDUyxjQUFGO0FBQ0EsVUFBTTtBQUFFMUMsZUFBRjtBQUFhQyxjQUFiO0FBQXVCQyxXQUF2QjtBQUE4QkMsaUJBQTlCO0FBQTJDQztBQUEzQyxRQUF3RE4sTUFBOUQ7QUFDQTJCLGtEQUFJLENBQUNrQiw4QkFBTCxDQUFvQ3pDLEtBQXBDLEVBQTJDRSxRQUEzQyxFQUFxRHdCLElBQXJELENBQTBEZ0IsSUFBSSxJQUFJO0FBQzlELGFBQU9DLGtEQUFRLENBQUNDLFVBQVQsQ0FBb0IsU0FBcEIsRUFBK0JDLEdBQS9CLENBQW1DSCxJQUFJLENBQUN4QixJQUFMLENBQVU0QixHQUE3QyxFQUFrREMsR0FBbEQsQ0FBc0Q7QUFDekQ5QyxtQkFEeUQ7QUFFekRELGFBRnlEO0FBR3pERixpQkFIeUQ7QUFJekRDO0FBSnlELE9BQXRELENBQVA7QUFNSCxLQVBELEVBT0cyQixJQVBILENBT1EsTUFBTTtBQUNWdEMsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXdCLFlBQU0sQ0FBQ29DLE9BQVAsQ0FBZSxXQUFmO0FBQ0gsS0FWRDtBQVdILEdBZEQ7O0FBZ0JBLFFBQU1DLGlCQUFpQixHQUFJbEIsQ0FBRCxJQUFPO0FBQzdCQSxLQUFDLENBQUNTLGNBQUY7QUFDQSxVQUFNO0FBQUUxQyxlQUFGO0FBQWFDLGNBQWI7QUFBdUJDLFdBQXZCO0FBQThCQyxpQkFBOUI7QUFBMkNDO0FBQTNDLFFBQXdETixNQUE5RDtBQUVBLFVBQU1zRCxZQUFZLEdBQUdDLG1EQUFTLENBQUNDLGFBQVYsQ0FBd0IsY0FBeEIsQ0FBckI7QUFDQUYsZ0JBQVksQ0FBQztBQUFFbEQ7QUFBRixLQUFELENBQVosQ0FBd0IwQixJQUF4QixDQUE2QjJCLE1BQU0sSUFBSTtBQUNuQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDSCxLQUZEO0FBR0gsR0FSRDs7QUFVQSxRQUFNRyxhQUFhLEdBQUl6QixDQUFELElBQU87QUFDekJBLEtBQUMsQ0FBQ1MsY0FBRjtBQUNBakIsa0RBQUksQ0FBQ2tDLE9BQUwsR0FBZS9CLElBQWYsQ0FBb0IsTUFBTTtBQUN0QjFDLG9CQUFjLENBQUMsRUFBRCxDQUFkLENBRHNCLENBRXRCO0FBQ0gsS0FIRCxFQUdHMEUsS0FISCxDQUdVaEQsS0FBRCxJQUFXLENBQ2hCO0FBQ0gsS0FMRDtBQU1ILEdBUkQ7O0FBU0EsUUFBTWlELGFBQWEsR0FBSTVCLENBQUQsSUFBTztBQUN6QkEsS0FBQyxDQUFDUyxjQUFGO0FBQ0EsVUFBTTtBQUFFeEM7QUFBRixRQUFZSSxhQUFsQjtBQUVBa0QsV0FBTyxDQUFDQyxHQUFSLENBQVl2RCxLQUFaO0FBQ0F1QixrREFBSSxDQUFDcUMsc0JBQUwsQ0FBNEI1RCxLQUE1QixFQUFtQzBCLElBQW5DLENBQXdDLE1BQU0sQ0FBRSxDQUFoRCxFQUNLZ0MsS0FETCxDQUNZaEQsS0FBRCxJQUFXO0FBQ2RDLGNBQVEsQ0FBQ0QsS0FBSyxDQUFDTSxPQUFQLENBQVI7QUFDSCxLQUhMO0FBSUgsR0FURDs7QUFXQSxRQUFNNkMsb0JBQW9CLEdBQUk5QixDQUFELElBQU87QUFDaENBLEtBQUMsQ0FBQ1MsY0FBRjtBQUNBLFVBQU07QUFBRVIsVUFBRjtBQUFRQztBQUFSLFFBQWtCRixDQUFDLENBQUNHLE1BQTFCO0FBQ0EsVUFBTTtBQUFFL0I7QUFBRixRQUFpQkMsYUFBdkI7QUFDQSxVQUFNMEQsVUFBVSxHQUFHQyxNQUFNLENBQUMsc0VBQUQsQ0FBekI7QUFDQTVELGNBQVUsQ0FBQ0gsS0FBWCxHQUFtQjhELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQi9CLEtBQWhCLEtBQTBCQSxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBekMsR0FBNkMsRUFBN0MsR0FBa0QsK0JBQXJFO0FBQ0E1RCxvQkFBZ0IsaUNBQUtELGFBQUw7QUFBb0IsT0FBQzRCLElBQUQsR0FBUUM7QUFBNUIsT0FBaEI7QUFDSCxHQVBEOztBQVNBLFFBQU1pQyxpQkFBaUIsR0FBSW5DLENBQUQsSUFBTztBQUM3Qm9DLHNEQUFRLENBQUNDLFFBQVQsQ0FBa0IsU0FBbEI7QUFDQUQsc0RBQVEsQ0FBQ0MsUUFBVCxDQUFrQixPQUFsQjtBQUNBN0Msa0RBQUksQ0FBQzhDLGVBQUwsQ0FBcUJGLGtEQUFyQixFQUErQnpDLElBQS9CLENBQXFDMkIsTUFBRCxJQUFZO0FBQzVDO0FBQ0EsVUFBSWlCLFVBQVUsR0FBR2pCLE1BQU0sQ0FBQ2lCLFVBQXhCLENBRjRDLENBRzVDOztBQUNBLFVBQUlyRCxLQUFLLEdBQUdxRCxVQUFVLENBQUNDLFdBQXZCLENBSjRDLENBSzVDOztBQUNBLFVBQUlyRCxJQUFJLEdBQUdtQyxNQUFNLENBQUNuQyxJQUFsQjtBQUNBLFVBQUlzRCxJQUFJLEdBQUd0RCxJQUFJLENBQUN1RCxXQUFMLENBQWlCQyxLQUFqQixDQUF1QixHQUF2QixDQUFYO0FBQ0EsVUFBSTVFLFNBQVMsR0FBRzBFLElBQUksQ0FBQyxDQUFELENBQXBCO0FBQ0EsVUFBSXpFLFFBQVEsR0FBR3lFLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQ0EsVUFBSXhFLEtBQUssR0FBR3FELE1BQU0sQ0FBQ25DLElBQVAsQ0FBWWxCLEtBQXhCO0FBQ0FrQixVQUFJLElBQUtBLElBQUksQ0FBQzRCLEdBQUwsSUFBWXZDLFFBQVEsQ0FBQyxJQUFELENBQTdCO0FBQ0FXLFVBQUksSUFBS0EsSUFBSSxDQUFDNEIsR0FBTCxJQUFZbEMsTUFBTSxDQUFDb0MsT0FBUCxDQUFlLFdBQWYsQ0FBckI7QUFDQSxhQUFPTCxrREFBUSxDQUFDQyxVQUFULENBQW9CLFNBQXBCLEVBQStCQyxHQUEvQixDQUFtQ1EsTUFBTSxDQUFDbkMsSUFBUCxDQUFZNEIsR0FBL0MsRUFBb0RDLEdBQXBELENBQXdEO0FBQ3ZEakQsaUJBRHVEO0FBRXZEQyxnQkFGdUQ7QUFHdkRDO0FBSHVELE9BQXhELENBQVAsQ0FiNEMsQ0FrQnhDO0FBQ1AsS0FuQkQsRUFtQkcwRCxLQW5CSCxDQW1CVWhELEtBQUQsSUFBVztBQUNoQjtBQUNBLFVBQUlpRSxTQUFTLEdBQUdqRSxLQUFLLENBQUNrRSxJQUF0QjtBQUNBLFVBQUlDLFlBQVksR0FBR25FLEtBQUssQ0FBQ00sT0FBekIsQ0FIZ0IsQ0FJaEI7O0FBQ0EsVUFBSWhCLEtBQUssR0FBR1UsS0FBSyxDQUFDVixLQUFsQixDQUxnQixDQU1oQjs7QUFDQSxVQUFJc0UsVUFBVSxHQUFHNUQsS0FBSyxDQUFDNEQsVUFBdkIsQ0FQZ0IsQ0FRaEI7QUFDSCxLQTVCRDtBQTZCSCxHQWhDRDs7QUFrQ0EsUUFBTVEsaUJBQWlCLEdBQUkvQyxDQUFELElBQU87QUFDN0JBLEtBQUMsQ0FBQ1MsY0FBRjtBQUNBL0IscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBLFVBQU07QUFBRVQsV0FBRjtBQUFTRTtBQUFULFFBQXNCSSxLQUE1QjtBQUNBaUIsa0RBQUksQ0FBQ3dELDBCQUFMLENBQWdDL0UsS0FBaEMsRUFBdUNFLFFBQXZDLEVBQWlEd0IsSUFBakQsQ0FBdUQyQixNQUFELElBQVk7QUFDOUQsVUFBSW5DLElBQUksR0FBR21DLE1BQU0sQ0FBQ25DLElBQWxCO0FBQ0FBLFVBQUksSUFBS0EsSUFBSSxDQUFDNEIsR0FBTCxJQUFZdkMsUUFBUSxDQUFDLElBQUQsQ0FBN0I7QUFDQVcsVUFBSSxJQUFLQSxJQUFJLENBQUM0QixHQUFMLElBQVlsQyxNQUFNLENBQUNvQyxPQUFQLENBQWUsV0FBZixDQUFyQjtBQUNBOUIsVUFBSSxJQUFLQSxJQUFJLENBQUM0QixHQUFMLElBQVlyQyxpQkFBaUIsQ0FBQyxLQUFELENBQXRDO0FBQ0gsS0FMRCxFQUtHaUQsS0FMSCxDQUtVaEQsS0FBRCxJQUFXO0FBQ2hCO0FBQ0EsVUFBSWlFLFNBQVMsR0FBR2pFLEtBQUssQ0FBQ2tFLElBQXRCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHbkUsS0FBSyxDQUFDTSxPQUF6QixDQUhnQixDQUloQjs7QUFDQXJCLGtCQUFZLENBQUNrRixZQUFELENBQVo7QUFDQSxVQUFJN0UsS0FBSyxHQUFHVSxLQUFLLENBQUNWLEtBQWxCLENBTmdCLENBT2hCOztBQUNBLFVBQUlzRSxVQUFVLEdBQUc1RCxLQUFLLENBQUM0RCxVQUF2QixDQVJnQixDQVNoQjtBQUNILEtBZkQ7QUFnQkgsR0FwQkQ7O0FBc0JBLFFBQU1VLGdCQUFnQixHQUFJakQsQ0FBRCxJQUFPO0FBQzVCQSxLQUFDLENBQUNTLGNBQUY7QUFDQSxVQUFNO0FBQUV4QyxXQUFGO0FBQVNFO0FBQVQsUUFBc0JJLEtBQTVCO0FBQ0FpQixrREFBSSxDQUFDd0QsMEJBQUwsQ0FBZ0MvRSxLQUFoQyxFQUF1Q0UsUUFBdkMsRUFBaUR3QixJQUFqRCxDQUFzRCxNQUFNO0FBQ3hEbkMsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXFCLFlBQU0sQ0FBQ29DLE9BQVAsQ0FBZSxTQUFmO0FBQ0gsS0FIRDtBQUlILEdBUEQ7O0FBV0Esc0JBQ0kscUVBQUUsV0FBRixDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFJO0FBQUN0RCxlQUFEO0FBQVljLG9CQUFaO0FBQTRCaEIsa0JBQTVCO0FBQTBDQyxxQkFBMUM7QUFBMkRrRSxtQkFBM0Q7QUFBMEV2RCxtQkFBMUU7QUFBeUZ5RCwwQkFBekY7QUFBK0d2RCxXQUEvRztBQUFzSFYsWUFBdEg7QUFBOEhULGFBQTlIO0FBQXVJRyxhQUF2STtBQUFnSkYsZ0JBQWhKO0FBQTRKMEMsdUJBQTVKO0FBQStLb0MsdUJBQS9LO0FBQWtNOUIsd0JBQWxNO0FBQXNOYSx1QkFBdE47QUFBeU9PLG1CQUF6TztBQUF3UGpCLHdCQUF4UDtBQUE0UXVDO0FBQTVRLEtBQWhDO0FBQUEsY0FDTy9GLEtBQUssQ0FBQ2tHO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0E3TUQ7O0FBK01lbkcsa0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1JLGNBQWMsZ0JBQUdMLDJEQUFhLEVBQXBDOztBQUVQLE1BQU1xRyxzQkFBc0IsR0FBSW5HLEtBQUQsSUFBVztBQUV0QyxRQUFNb0csWUFBWSxHQUFHO0FBQ2pCQyxXQUFPLEVBQUUsRUFEUTtBQUVqQkMscUJBQWlCLEVBQUUsRUFGRjtBQUdqQkMsZ0JBQVksRUFBRSxFQUhHO0FBSWpCQyxjQUFVLEVBQUUsRUFKSztBQUtqQkMscUJBQWlCLEVBQUUsRUFMRjtBQU1qQkMsd0JBQW9CLEVBQUUsRUFOTDtBQU9qQkMsd0JBQW9CLEVBQUUsRUFQTDtBQVFqQkMsaUJBQWEsRUFBRSxFQVJFO0FBU2pCQyxtQkFBZSxFQUFFLEVBVEE7QUFVakJDLHNCQUFrQixFQUFFLEVBVkg7QUFXakJDLHNCQUFrQixFQUFFLEVBWEg7QUFZakJDLFdBQU8sRUFBRSxFQVpRO0FBYWpCQyxjQUFVLEVBQUUsS0FiSztBQWNqQjdGLGNBQVUsRUFBRTtBQUNSeUYscUJBQWUsRUFBRSxFQURUO0FBRVJDLHdCQUFrQixFQUFFLEVBRlo7QUFHUkMsd0JBQWtCLEVBQUUsRUFIWjtBQUlSTix1QkFBaUIsRUFBRSxFQUpYO0FBS1JDLDBCQUFvQixFQUFFLEVBTGQ7QUFNUkMsMEJBQW9CLEVBQUUsRUFOZDtBQU9STixhQUFPLEVBQUUsRUFQRDtBQVFSYSxlQUFTLEVBQUUsRUFSSDtBQVNSWix1QkFBaUIsRUFBRSxFQVRYO0FBVVJDLGtCQUFZLEVBQUUsRUFWTjtBQVdSQyxnQkFBVSxFQUFFLEVBWEo7QUFZUlMsZ0JBQVUsRUFBRSxJQVpKO0FBYVJFLFlBQU0sRUFBRSxFQWJBO0FBY1JILGFBQU8sRUFBRSxFQWREO0FBZVJJLFlBQU0sRUFBRTtBQWZBO0FBZEssR0FBckI7QUFpQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CaEgsc0RBQVEsQ0FBQzhGLFlBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ21CLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCbEgsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtSCxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ3BILHNEQUFRLEVBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDSixzREFBUSxFQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDRixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNxSCxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDdEgsc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNzRyxhQUFEO0FBQUEsT0FBZ0JpQjtBQUFoQixNQUFvQ3ZILHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDd0gsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0J6SCxzREFBUSxFQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDMEgsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0IzSCxzREFBUSxFQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDNEgsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQzdILHNEQUFRLENBQUMsS0FBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDOEgsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEIvSCxzREFBUSxDQUFDLENBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CdEIsc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnSSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmpJLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDa0ksTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JuSSxzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29JLFdBQUQ7QUFBQSxPQUFjekk7QUFBZCxNQUFnQ0ssc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNxSSxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDdEksc0RBQVEsRUFBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3VJLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWlDeEksc0RBQVEsQ0FBQyxFQUFELENBQS9DO0FBRUEsUUFBTXVCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFHQVMseURBQVMsQ0FBQyxNQUFNO0FBRVpDLGtEQUFJLENBQUNDLGtCQUFMLENBQXdCTixJQUFJLElBQUk7QUFDNUIsWUFBTXNELElBQUksR0FBRyxFQUFiO0FBQ0F0RCxVQUFJLEtBQUssSUFBVCxJQUFpQnlCLGtEQUFRLENBQUNDLFVBQVQsQ0FBb0IsVUFBcEIsRUFDWmtGLEtBRFksQ0FDTixRQURNLEVBQ0ksSUFESixFQUNVNUcsSUFBSSxDQUFDNEIsR0FEZixFQUVaaUYsR0FGWSxHQUVOckcsSUFGTSxDQUVBc0csYUFBRCxJQUFtQjtBQUMzQkEscUJBQWEsQ0FBQ0MsT0FBZCxDQUF1QnBGLEdBQUQsSUFBUztBQUMzQjtBQUNBLGNBQUk7QUFBRWtELG1CQUFGO0FBQVdFLHFCQUFYO0FBQXNCQyxrQkFBdEI7QUFBOEJDO0FBQTlCLGNBQXlDdEQsR0FBRyxDQUFDMkIsSUFBSixFQUE3QztBQUNBLGNBQUkwRCxFQUFFLEdBQUdyRixHQUFHLENBQUNxRixFQUFiO0FBQ0ExRCxjQUFJLENBQUMyRCxJQUFMLENBQVU7QUFBRXBDLG1CQUFGO0FBQVdFLHFCQUFYO0FBQXNCQyxrQkFBdEI7QUFBOEJDLGtCQUE5QjtBQUFzQytCO0FBQXRDLFdBQVY7QUFDSCxTQUxEO0FBTUgsT0FUWSxDQUFqQjtBQVVBbEosb0JBQWMsQ0FBQ3dGLElBQUQsQ0FBZDtBQUNILEtBYkQ7QUFjSCxHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBbEQseURBQVMsQ0FBQyxNQUFNO0FBQ1pvRyxtQkFBZSxLQUFLVSxTQUFwQixJQUFrQ3BKLGNBQWMsQ0FBQyxDQUFDLEdBQUd5SSxXQUFKLEVBQWlCQyxlQUFqQixDQUFELENBQWhEO0FBQ0gsR0FGUSxFQUVOLENBQUNBLGVBQUQsQ0FGTSxDQUFUOztBQUlBLFFBQU1XLFlBQVksR0FBSXRHLENBQUQsSUFBTztBQUN4QixRQUFJQSxDQUFKLEVBQU87QUFDSEEsT0FBQyxDQUFDUyxjQUFGO0FBQ0EsWUFBTTtBQUFFUixZQUFGO0FBQVFDLGFBQVI7QUFBZWlHO0FBQWYsVUFBc0JuRyxDQUFDLENBQUNHLE1BQTlCOztBQUNBLFlBQU07QUFBRS9CO0FBQUYsNEJBQXFCaUcsS0FBckIsQ0FBTjs7QUFDQWtDLGlGQUFlLENBQUNKLEVBQUQsRUFBS2pHLEtBQUwsRUFBWTlCLFVBQVosQ0FBZjs7QUFDQSxZQUFNb0ksUUFBUSxtQ0FBT25DLEtBQVA7QUFBYyxTQUFDcEUsSUFBRCxHQUFRQztBQUF0QixRQUFkOztBQUNBLGFBQU9vRSxRQUFRLENBQUNrQyxRQUFELENBQWY7QUFDSDtBQUNKLEdBVEQ7O0FBVUEsUUFBTUMsV0FBVyxHQUFJekcsQ0FBRCxJQUFPO0FBQ3ZCLFVBQU07QUFBRUMsVUFBRjtBQUFReUc7QUFBUixRQUFvQjFHLENBQUMsQ0FBQ0csTUFBNUI7O0FBQ0EsVUFBTXFHLFFBQVEsbUNBQU9uQyxLQUFQO0FBQWMsT0FBQ3BFLElBQUQsR0FBUXlHO0FBQXRCLE1BQWQ7O0FBQ0EsV0FBT3BDLFFBQVEsQ0FBQ2tDLFFBQUQsQ0FBZjtBQUNILEdBSkQ7O0FBS0FqSCx5REFBUyxDQUFDLE1BQU07QUFDWjZGLFlBQVEsSUFBSSxHQUFaLElBQW1CRyxVQUFVLENBQUMsS0FBRCxDQUE3QjtBQUNBRixlQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0gsR0FIUSxFQUdOLENBQUNELFFBQUQsQ0FITSxDQUFUO0FBS0E3Rix5REFBUyxDQUFDLE1BQU07QUFDWlYsVUFBTSxDQUFDOEgsUUFBUCxDQUFnQixjQUFoQjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQXBILHlEQUFTLENBQUMsTUFBTTtBQUNaQyxrREFBSSxDQUFDQyxrQkFBTCxDQUF3Qk4sSUFBSSxJQUFJO0FBQzVCQSxVQUFJLEtBQUssSUFBVCxJQUFpQnNHLFNBQVMsQ0FBQ3RHLElBQUksQ0FBQzRCLEdBQU4sQ0FBMUI7QUFDSCxLQUZEO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BeEIseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLGtEQUFJLENBQUNDLGtCQUFMLENBQXdCTixJQUFJLElBQUk7QUFDNUJBLFVBQUksS0FBSyxJQUFULElBQWtCeUgsK0NBQUssQ0FBQ0MsR0FBTixHQUFZQyxLQUFaLENBQWtCLGdCQUFsQixFQUFvQ0MsT0FBcEMsR0FBOENwSCxJQUE5QyxDQUFtRCxVQUFTMkIsTUFBVCxFQUFnQjtBQUNqRkEsY0FBTSxDQUFDMEYsS0FBUCxDQUFhZCxPQUFiLENBQXFCLFVBQVNlLFFBQVQsRUFBa0I7QUFDcENDLHFCQUFXLENBQUVELFFBQUYsQ0FBWDtBQUNGLFNBRkQ7QUFHSCxPQUppQixDQUFsQjtBQUtILEtBTkQ7QUFPQSxRQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQyxVQUFNRCxXQUFXLEdBQUtFLE1BQUYsSUFBYTtBQUNsQ0EsWUFBTSxDQUFDQyxjQUFQLEdBQXdCMUgsSUFBeEIsQ0FBOEIySCxHQUFELElBQU87QUFDaENILFdBQUcsQ0FBQ2YsSUFBSixDQUFTa0IsR0FBVDtBQUNILE9BRkQ7QUFHSCxLQUpJOztBQUtMeEIsbUJBQWUsQ0FBQ3FCLEdBQUQsQ0FBZjtBQUNDLEdBZlEsRUFlTixFQWZNLENBQVQ7O0FBaUJBLFFBQU1JLFdBQVcsR0FBSXZILENBQUQsSUFBTztBQUN2QkEsS0FBQyxDQUFDUyxjQUFGOztBQUVBLFFBQUlULENBQUMsQ0FBQ0csTUFBRixDQUFTcUgsS0FBYixFQUFvQjtBQUNoQnBDLGNBQVEsS0FBSyxHQUFiLElBQW9CRyxVQUFVLENBQUMsSUFBRCxDQUE5QjtBQUNBLFVBQUlrQyxRQUFRLEdBQUd6SCxDQUFDLENBQUNHLE1BQUYsQ0FBU3FILEtBQVQsQ0FBZSxDQUFmLENBQWY7QUFDQSxVQUFJRSxLQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixRQUFRLEtBQUtwQixTQUFiLEdBQXlCcUIsS0FBSyxDQUFDRSxRQUFOLENBQWVILFFBQVEsQ0FBQ0ksSUFBeEIsQ0FBekIsR0FBeURqSixRQUFRLENBQUMsZ0RBQUQsQ0FBaEY7QUFDQSxVQUFJa0osUUFBUSxHQUFHLFNBQWY7QUFDQSxVQUFJQyxpQkFBaUIsR0FBR0osUUFBUSxJQUFJLElBQVosR0FBbUJGLFFBQVEsQ0FBQ08sSUFBVCxHQUFnQkYsUUFBbkMsR0FBOENsSixRQUFRLENBQUMsNkJBQUQsQ0FBOUU7QUFDQSxVQUFJcUosV0FBVyxHQUFHRixpQkFBaUIsSUFBSSxJQUFyQixJQUE4QkcsR0FBRyxDQUFDQyxlQUFKLENBQW9CVixRQUFwQixDQUFoRDtBQUNBLFVBQUlXLGNBQWMsR0FBRztBQUFFQyxtQkFBVyxFQUFFSjtBQUFmLE9BQXJCO0FBQ0FBLGlCQUFXLEtBQUs1QixTQUFoQixJQUE2QnpCLGlCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixFQUFvQnlELGNBQXBCLENBQUQsQ0FBOUM7O0FBQ0EsVUFBSUwsaUJBQWlCLElBQUksSUFBekIsRUFBK0I7QUFDM0IsY0FBTU8sVUFBVSxHQUFHMUIsK0NBQUssQ0FBQ0MsR0FBTixDQUFXLGlCQUFnQlksUUFBUSxDQUFDeEgsSUFBSyxFQUF6QyxDQUFuQjtBQUNBcUksa0JBQVUsQ0FBQ0MsR0FBWCxDQUFlZCxRQUFmLEVBQXlCZSxFQUF6QixDQUE0QixlQUE1QixFQUNJLE1BQU1DLElBQU4sSUFBZTtBQUNYLGdCQUFNQyxhQUFhLEdBQUcsUUFBT0QsSUFBSSxDQUFDRSxnQkFBTCxHQUF3QkYsSUFBSSxDQUFDRyxVQUFwQyxLQUFrRCxHQUF4RTtBQUNBLGdCQUFNdkQsV0FBVyxDQUFDcUQsYUFBRCxDQUFqQjtBQUNILFNBSkwsRUFJTyxNQUFNRyxHQUFOLElBQWM7QUFDYixnQkFBTWpLLFFBQVEsQ0FBQ2lLLEdBQUQsQ0FBZDtBQUNILFNBTkwsRUFNTyxZQUFXO0FBQ1YsZ0JBQU1DLFFBQVEsR0FBRyxNQUFNUixVQUFVLENBQUNqQixjQUFYLEVBQXZCO0FBQ0F4QywwQkFBZ0IsQ0FBQyxDQUFDLEdBQUdqQixhQUFKLEVBQW1CO0FBQUVrRjtBQUFGLFdBQW5CLENBQUQsQ0FBaEI7QUFDSCxTQVRMO0FBVUg7O0FBQ0RaLFNBQUcsQ0FBQ2EsZUFBSixDQUFvQnRCLFFBQXBCO0FBQ0g7QUFDSixHQTVCRDs7QUErQkEsUUFBTXVCLGdCQUFnQixHQUFHLE1BQU1oSixDQUFOLElBQVk7QUFDakNBLEtBQUMsQ0FBQ1MsY0FBRjtBQUNBLFVBQU07QUFDRjRDLGFBREU7QUFFRkMsdUJBRkU7QUFHRkMsa0JBSEU7QUFJRkMsZ0JBSkU7QUFLRkMsdUJBTEU7QUFNRkMsMEJBTkU7QUFPRkMsMEJBUEU7QUFRRkMsbUJBUkU7QUFTRkMscUJBVEU7QUFVRkMsd0JBVkU7QUFXRkMsd0JBWEU7QUFZRkMsYUFaRTtBQWFGQztBQWJFLFFBY0ZJLEtBZEo7QUFnQkF1QixzQkFBa0IsQ0FBQztBQUFFNUIsYUFBRjtBQUFXRyxZQUFNLEVBQUUsU0FBbkI7QUFBOEJDLFlBQU0sRUFBRSxFQUF0QztBQUEwQytCLFFBQUUsRUFBRTtBQUE5QyxLQUFELENBQWxCO0FBQ0FYLFVBQU0sS0FBSyxJQUFYLElBQW1CNUUsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUFnQ29JLEdBQWhDLENBQW9DO0FBQy9DekQsWUFEK0M7QUFFL0NuQyxhQUYrQztBQUcvQ0MsdUJBSCtDO0FBSS9DQyxrQkFKK0M7QUFLL0NDLGdCQUwrQztBQU0vQ0MsdUJBTitDO0FBTy9DQywwQkFQK0M7QUFRL0NDLDBCQVIrQztBQVMvQ0MsbUJBVCtDO0FBVS9DQyxxQkFWK0M7QUFXL0NDLHdCQVgrQztBQVkvQ0Msd0JBWitDO0FBYS9DQyxhQWIrQztBQWMvQ0MsZ0JBZCtDO0FBZS9DRSxZQUFNLEVBQUUsU0FmdUM7QUFnQi9DRCxlQUFTLEVBQUVnRiwyREFBUztBQWhCMkIsS0FBcEMsRUFrQmR2SixJQWxCYyxDQWtCUjhDLElBQUQsSUFBVTtBQUNaQSxVQUFJLEtBQUswQyxpQkFBaUIsQ0FBQyxJQUFELENBQWpCLEVBQ0xiLFFBQVEsQ0FBQ2xCLFlBQUQsQ0FEUixDQUFKO0FBR0gsS0F0QmMsRUF1QmR6QixLQXZCYyxDQXdCVmhELEtBQUQsSUFBVztBQUNQQyxjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNILEtBMUJVLENBQW5CO0FBNEJILEdBL0NEOztBQWtEQSxRQUFNd0ssbUJBQW1CLEdBQUcsT0FBTW5KLENBQU4sRUFBU21HLEVBQVQsS0FBZ0I7QUFDeENuRyxLQUFDLENBQUNTLGNBQUY7QUFDQTZELFlBQVEsQ0FBQyxHQUFHRCxLQUFKLEVBQVdULGFBQVgsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsUUFBTXdGLGlCQUFpQixHQUFJcEosQ0FBRCxJQUFPO0FBQzdCQSxLQUFDLENBQUNTLGNBQUY7QUFDQTZELFlBQVEsaUNBQUtELEtBQUw7QUFBWVQ7QUFBWixPQUFSO0FBQ0FtQixZQUFRLENBQUMsUUFBRCxDQUFSO0FBQ0gsR0FKRDs7QUFPQSxRQUFNc0UsUUFBUSxHQUFHLENBQ2I7QUFBRUMsV0FBTyxFQUFFLFNBQVg7QUFBc0JDLFFBQUksRUFBRUMsb0RBQU8sRUFBbkM7QUFBdUNDLFNBQUssRUFBRSxTQUE5QztBQUF5RHRELE1BQUUsRUFBRTtBQUE3RCxHQURhLEVBRWI7QUFBRW1ELFdBQU8sRUFBRSxTQUFYO0FBQXNCQyxRQUFJLEVBQUVHLG9EQUFPLEVBQW5DO0FBQXVDRCxTQUFLLEVBQUUsU0FBOUM7QUFBeUR0RCxNQUFFLEVBQUU7QUFBN0QsR0FGYSxFQUdiO0FBQUVtRCxXQUFPLEVBQUUsaUJBQVg7QUFBOEJDLFFBQUksRUFBRUksb0RBQU8sRUFBM0M7QUFBK0NGLFNBQUssRUFBRSxTQUF0RDtBQUFpRXRELE1BQUUsRUFBRTtBQUFyRSxHQUhhLEVBSWI7QUFBRW1ELFdBQU8sRUFBRSxFQUFYO0FBQWVDLFFBQUksRUFBRXRLLG9EQUFPLEVBQTVCO0FBQWdDd0ssU0FBSyxFQUFFLFNBQXZDO0FBQWtEdEQsTUFBRSxFQUFFO0FBQXRELEdBSmEsQ0FBakI7QUFRQSxzQkFDSSxxRUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBSTtBQUFDTixrQkFBRDtBQUFlSCxpQkFBZjtBQUE0QnpJLG9CQUE1QjtBQUE0QzBJLHFCQUE1QztBQUE2RHRCLFdBQTdEO0FBQW9FMUYsV0FBcEU7QUFBMkUyRyxhQUEzRTtBQUFvRlQsc0JBQXBGO0FBQXNHakIsbUJBQXRHO0FBQXFIc0Isb0JBQXJIO0FBQXFJQyx1QkFBckk7QUFBd0ovQixrQkFBeEo7QUFBc0syQixjQUF0SztBQUFnTEQsV0FBaEw7QUFBdUxSLGNBQXZMO0FBQWlNZ0Msa0JBQWpNO0FBQStNRyxpQkFBL007QUFBNE45QixvQkFBNU47QUFBNE9xRSxzQkFBNU87QUFBOFBJLHVCQUE5UDtBQUFpUjdCLGlCQUFqUjtBQUE4UjhCLGNBQTlSO0FBQXdTM0UseUJBQXhTO0FBQTZURCxzQkFBN1Q7QUFBK1VGLGNBQS9VO0FBQXlWQyxpQkFBelY7QUFBc1cyRSx5QkFBdFc7QUFBMlgxTCxrQkFBM1g7QUFBeVlMLGFBQXpZO0FBQWtaQztBQUFsWixLQUFsQztBQUFBLGNBQ01MLEtBQUssQ0FBQ2tHO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F2T0Q7O0FBeU9lQyxxRkFBZixFOzs7Ozs7Ozs7Ozs7QUNqUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNeUcsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUUseUNBRGE7QUFFckJDLFlBQVUsRUFBRSxtQ0FGUztBQUdyQkMsYUFBVyxFQUFFLHVEQUhRO0FBSXJCQyxXQUFTLEVBQUUsbUJBSlU7QUFLckJDLGVBQWEsRUFBRSwrQkFMTTtBQU1yQkMsbUJBQWlCLEVBQUUsY0FORTtBQU9yQkMsT0FBSyxFQUFFLDJDQVBjO0FBUXJCQyxlQUFhLEVBQUU7QUFSTSxDQUF2QjtBQVdFLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNySSxNQUFmLEdBQXdCb0ksbURBQVEsQ0FBQ0UsYUFBVCxDQUF1QlosY0FBdkIsQ0FBeEIsR0FBZ0VVLG1EQUFRLENBQUNHLEdBQVQsRUFBcEY7QUFDQSxNQUFNN0osUUFBUSxHQUFHMEosbURBQVEsQ0FBQ0ksU0FBVCxFQUFqQjs7QUFDQSxXQUFtQixFQWVoQjs7QUFDSCxNQUFNOUQsS0FBSyxHQUFHeUQsV0FBVyxDQUFDTSxPQUFaLEVBQWQ7QUFDQSxNQUFNbkwsSUFBSSxHQUFHOEssbURBQVEsQ0FBQzlLLElBQVQsRUFBYjtBQUNBLE1BQU0wSixTQUFTLEdBQUdvQixtREFBUSxDQUFDSSxTQUFULENBQW1CRSxVQUFuQixDQUE4QkMsZUFBaEQ7QUFDQSxNQUFNekksUUFBUSxHQUFHLElBQUlrSSxtREFBUSxDQUFDOUssSUFBVCxDQUFjc0wsa0JBQWxCLEVBQWpCO0FBQ0EsTUFBTTFKLFNBQVMsR0FBR2tKLG1EQUFRLENBQUNsSixTQUFULEVBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTJKLFNBQVMsR0FBRyxNQUFNO0FBRXBCLFFBQU07QUFBQ3BOLGFBQUQ7QUFBWWMsa0JBQVo7QUFBNEJzQixxQkFBNUI7QUFBK0NnRCxxQkFBL0M7QUFBa0VaO0FBQWxFLE1BQXVGakYsd0RBQVUsQ0FBQ0wsZ0VBQUQsQ0FBdkc7QUFFQSxzQkFBUTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDQTtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBQSxnQ0FDQTtBQUFNLGtCQUFRLEVBQUVrRyxpQkFBaEI7QUFBQSxrQ0FDSTtBQUFBLG9DQUNBO0FBQU8scUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBLGVBRUE7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsRUFBRWhELGlCQUE3QjtBQUFnRCxnQkFBRSxFQUFDLE9BQW5EO0FBQTJELGtCQUFJLEVBQUMsT0FBaEU7QUFBd0UseUJBQVcsRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtNO0FBQUEsb0NBQ0k7QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFPLGtCQUFJLEVBQUMsVUFBWjtBQUF1QixzQkFBUSxFQUFFQSxpQkFBakM7QUFBb0QsZ0JBQUUsRUFBQyxVQUF2RDtBQUFrRSxrQkFBSSxFQUFDLFVBQXZFO0FBQWtGLHlCQUFXLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTE4sZUFTSTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLHNCQUNLcEMsU0FBUyxLQUFLMEksU0FBZCxJQUEyQjVILGNBQWMsS0FBSyxJQUE5QyxnQkFBcUQ7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFBcUIsbUJBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFyRCxnQkFBMkY7QUFBQSxzQ0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBVCxlQUFtQztBQUFBLDBCQUFPdU0sd0RBQVc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEosRUFZS3JOLFNBQVMsS0FBSzBJLFNBQWQsaUJBQTJCO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQzFJO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQWVJO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRE4sZUFFTTtBQUFRLG1CQUFPLEVBQUV3RSxpQkFBakI7QUFBQSxvQ0FBb0M7QUFBQSx3QkFBTzhJLG1EQUFNO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBcEMsZUFBMkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBcUJGO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFDMEI7QUFBQSxpQ0FBSyxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsZ0JBQVg7QUFBQSxtQ0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkUsZUF5QkY7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUNtQztBQUFBLGlDQUFJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxTQUFYO0FBQUEsbUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQStCRSxDQW5DTjs7QUFxQ2VGLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTWhKLFVBQVUsR0FBR0MsTUFBTSxDQUFFLHNFQUFGLENBQXpCO0FBRUEsTUFBTWtKLGVBQWUsR0FBRyxDQUFFakwsSUFBRixFQUFRQyxLQUFSLEVBQWU5QixVQUFmLEtBQStCO0FBRTdELFVBQVE2QixJQUFSO0FBQ0MsU0FBSyxXQUFMO0FBQ0M3QixnQkFBVSxDQUFDTCxTQUFYLEdBQXVCbUMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQWYsSUFBb0JoQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBbkMsR0FBdUMsaUNBQXZDLEdBQTBFLEVBQWpHO0FBQ0E7O0FBQ0QsU0FBSyxVQUFMO0FBQ0M5RCxnQkFBVSxDQUFDSixRQUFYLEdBQXNCa0MsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQWYsSUFBb0JoQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBbkMsR0FBdUMsaUNBQXZDLEdBQTBFLEVBQWhHO0FBQ0E7O0FBQ0QsU0FBSyxPQUFMO0FBQ0M5RCxnQkFBVSxDQUFDSCxLQUFYLEdBQW1COEQsVUFBVSxDQUFDRSxJQUFYLENBQWdCL0IsS0FBaEIsS0FBMEJBLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUF6QyxHQUE2QyxFQUE3QyxHQUFpRCwrQkFBcEU7QUFDQTs7QUFDRCxTQUFLLGFBQUw7QUFDQzlELGdCQUFVLENBQUNGLFdBQVgsR0FBeUJnQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsRUFBZixJQUFzQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFyQyxHQUF5Qyw4QkFBekMsR0FBMEUsRUFBbkc7QUFDQTs7QUFDRCxTQUFLLFNBQUw7QUFDQzlELGdCQUFVLENBQUMrTSxPQUFYLEdBQXFCakwsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQWYsSUFBb0JoQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBbkMsR0FBdUMsaUNBQXZDLEdBQTBFLEVBQS9GO0FBQ0E7QUFmRjtBQWtCQSxDQXBCTTtBQXNCQSxNQUFNcUUsZUFBZSxHQUFHLENBQUVKLEVBQUYsRUFBTWpHLEtBQU4sRUFBYTlCLFVBQWIsS0FBNkI7QUFFM0QsVUFBUStILEVBQVI7QUFDQyxTQUFLLGlCQUFMO0FBQ0MvSCxnQkFBVSxDQUFDeUYsZUFBWCxHQUE2QjNELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFmLElBQW9CaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQW5DLEdBQXVDLGlDQUF2QyxHQUEwRSxFQUF2RztBQUNBOztBQUNELFNBQUssb0JBQUw7QUFDQzlELGdCQUFVLENBQUMwRixrQkFBWCxHQUFnQzVELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxFQUFmLElBQXFCaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXBDLEdBQXdDLGlDQUF4QyxHQUEyRSxFQUEzRztBQUNBOztBQUNELFNBQUssb0JBQUw7QUFDQzlELGdCQUFVLENBQUMyRixrQkFBWCxHQUFnQzdELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxFQUFmLElBQXFCaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXBDLEdBQXdDLGlDQUF4QyxHQUEyRSxFQUEzRztBQUNBOztBQUNELFNBQUssbUJBQUw7QUFDQzlELGdCQUFVLENBQUNxRixpQkFBWCxHQUErQnZELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFmLElBQW9CaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQW5DLEdBQXVDLGlDQUF2QyxHQUEwRSxFQUF6RztBQUNBOztBQUNELFNBQUssc0JBQUw7QUFDQzlELGdCQUFVLENBQUNzRixvQkFBWCxHQUFrQ3hELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxFQUFmLElBQXFCaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXBDLEdBQXdDLGlDQUF4QyxHQUEyRSxFQUE3RztBQUNBOztBQUNELFNBQUssc0JBQUw7QUFDQzlELGdCQUFVLENBQUN1RixvQkFBWCxHQUFrQ3pELEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxFQUFmLElBQXFCaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXBDLEdBQXdDLGlDQUF4QyxHQUEyRSxFQUE3RztBQUNBOztBQUNELFNBQUssU0FBTDtBQUNDOUQsZ0JBQVUsQ0FBQzRGLE9BQVgsR0FBcUI5RCxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBZixJQUFvQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFuQyxHQUF1QyxpQ0FBdkMsR0FBMEUsRUFBL0Y7QUFDQTs7QUFDRCxTQUFLLFNBQUw7QUFDQzlELGdCQUFVLENBQUNpRixPQUFYLEdBQXFCbkQsS0FBSyxDQUFDZ0MsTUFBTixJQUFnQixDQUFoQixHQUFxQix5QkFBckIsR0FBZ0QsRUFBckU7QUFDQTs7QUFDRCxTQUFLLFlBQUw7QUFDQzlELGdCQUFVLENBQUNvRixVQUFYLEdBQXdCdEQsS0FBSyxDQUFDZ0MsTUFBTixJQUFnQixDQUFoQixHQUFvQixxQkFBcEIsR0FBMkMsRUFBbkU7QUFDQTs7QUFDRCxTQUFLLGtCQUFMO0FBQ0M5RCxnQkFBVSxDQUFDa0YsaUJBQVgsR0FBK0JwRCxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBZixJQUFvQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFuQyxHQUF1Qyx3QkFBdkMsR0FBaUUsRUFBaEc7QUFDQTs7QUFDRCxTQUFLLGNBQUw7QUFDQzlELGdCQUFVLENBQUNtRixZQUFYLEdBQTBCckQsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQWYsSUFBb0JoQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBbkMsR0FBdUMsaUNBQXZDLEdBQTBFLEVBQXBHO0FBQ0E7QUFqQ0Y7QUFtQ0EsQ0FyQ007QUF3Q0EsTUFBTTVCLGNBQWMsR0FBRyxDQUFFTCxJQUFGLEVBQVFDLEtBQVIsRUFBZTlCLFVBQWYsS0FBK0I7QUFFNUQsVUFBUTZCLElBQVI7QUFDQyxTQUFLLFdBQUw7QUFDQzdCLGdCQUFVLENBQUNMLFNBQVgsR0FBdUJtQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBZixJQUFvQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFuQyxHQUF1QyxFQUF2QyxHQUEyQyxpQ0FBbEU7QUFDQTs7QUFDRCxTQUFLLFVBQUw7QUFDQzlELGdCQUFVLENBQUNKLFFBQVgsR0FBc0JrQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsQ0FBZixJQUFvQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFuQyxHQUF1QyxFQUF2QyxHQUEyQyxpQ0FBakU7QUFDQTs7QUFDRCxTQUFLLGFBQUw7QUFDQzlELGdCQUFVLENBQUNGLFdBQVgsR0FBeUJnQyxLQUFLLENBQUNnQyxNQUFOLEdBQWUsRUFBZixJQUFxQmhDLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFwQyxHQUF3QyxFQUF4QyxHQUE0Qyx3QkFBckU7QUFDQTs7QUFDRCxTQUFLLE9BQUw7QUFDQzlELGdCQUFVLENBQUNILEtBQVgsR0FBbUI4RCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IvQixLQUFoQixLQUEwQkEsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXpDLEdBQTZDLEVBQTdDLEdBQWlELCtCQUFwRTtBQUNBOztBQUNELFNBQUssVUFBTDtBQUNDOUQsZ0JBQVUsQ0FBQ0QsUUFBWCxHQUFzQitCLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZSxDQUFmLElBQXFCaEMsS0FBSyxDQUFDZ0MsTUFBTixHQUFlLENBQXBDLEdBQXdDLHlCQUF4QyxHQUFvRSxFQUExRjtBQUNBO0FBZkY7QUFpQkEsQ0FuQk0sQzs7Ozs7Ozs7Ozs7QUNoRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBOztBQVNBOztBQUNBOztBQXVCQSxNQUFNa0osVUFBMkMsR0FBakQ7O0FBRUEsNkNBS1E7QUFDTixNQUFJLElBQUosRUFBOEM7QUFDOUMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBdk0sUUFBTSxDQUFOQSxrQ0FBMENnSyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVIO0FBTERoSztBQU1BLFFBQU13TSxTQUFTLEdBQ2JDLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQWQsV0FBWEEsY0FDSUEsT0FBTyxDQURYQSxTQUVJek0sTUFBTSxJQUFJQSxNQUFNLENBSHRCLE9BYk0sQ0FrQk47O0FBQ0F1TSxZQUFVLENBQUNHLElBQUksR0FBSkEsWUFBbUJGLFNBQVMsR0FBRyxNQUFILFlBQXZDRCxFQUFXRyxDQUFELENBQVZIO0FBR0Y7O0FBQUEsZ0NBQTJEO0FBQ3pELFFBQU07QUFBQTtBQUFBLE1BQWFJLEtBQUssQ0FBeEI7QUFDQSxTQUNHckwsTUFBTSxJQUFJQSxNQUFNLEtBQWpCLE9BQUNBLElBQ0RxTCxLQUFLLENBREwsT0FBQ3JMLElBRURxTCxLQUFLLENBRkwsT0FBQ3JMLElBR0RxTCxLQUFLLENBSEwsUUFBQ3JMLElBSURxTCxLQUFLLENBSkwsTUFBQ3JMLElBSWU7QUFDZnFMLE9BQUssQ0FBTEEsZUFBcUJBLEtBQUssQ0FBTEEsc0JBTnhCO0FBVUY7O0FBQUEsNEVBU1E7QUFDTixRQUFNO0FBQUE7QUFBQSxNQUFleEwsQ0FBQyxDQUF0Qjs7QUFFQSxNQUFJeUwsUUFBUSxLQUFSQSxRQUFxQkMsZUFBZSxDQUFmQSxDQUFlLENBQWZBLElBQXNCLENBQUMsd0JBQWhELElBQWdELENBQTVDRCxDQUFKLEVBQW1FO0FBQ2pFO0FBQ0E7QUFHRnpMOztBQUFBQSxHQUFDLENBQURBLGlCQVJNLENBVU47O0FBQ0EsTUFBSTJMLE1BQU0sSUFBVixNQUFvQjtBQUNsQkEsVUFBTSxHQUFHQyxFQUFFLENBQUZBLGVBQVREO0FBR0YsR0FmTSxDQWVOOzs7QUFDQTlNLFFBQU0sQ0FBQ29DLE9BQU8sZUFBZHBDLE1BQU0sQ0FBTkEsV0FBK0M7QUFBQTtBQUFBO0FBQS9DQTtBQUErQyxHQUEvQ0EsT0FJU0UsT0FBRCxJQUFzQjtBQUM1QixRQUFJLENBQUosU0FBYzs7QUFDZCxnQkFBWTtBQUNWO0FBQ0E4TSxjQUFRLENBQVJBO0FBRUg7QUFWRGhOO0FBYUY7O0FBQUEscUJBQXlEO0FBQ3ZELFlBQTJDO0FBQ3pDLG1DQUlHO0FBQ0QsYUFBTyxVQUNKLGdDQUErQmlOLElBQUksQ0FBQ0MsR0FBSSxnQkFBZUQsSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURYLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1ZLGFBQWtDLEdBQUdDLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJMLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLFFBQW9CO0FBQ2xCLFlBQ0UvTyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFDQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLGlCQUFrQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBRnJDLFVBR0U7QUFDQSxnQkFBTXFQLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFalAsS0FBSyxDQUFMQSxHQUFLLENBQUxBLHFCQUErQixPQUFPQSxLQUFLLENBSHJELEdBR3FEO0FBSC9CLFdBQUQsQ0FBckI7QUFNSDtBQVhELGFBV087QUFDTDtBQUNBO0FBQ0EsY0FBTXNQLENBQVEsR0FBZDtBQUVIO0FBakJELE9BckJ5QyxDQXdDekM7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURYLFFBQUUsRUFEd0Q7QUFFMUQzSyxhQUFPLEVBRm1EO0FBRzFEMEssWUFBTSxFQUhvRDtBQUkxRGEsYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xRDlGLGNBQVEsRUFOa0Q7QUFPMUQrRixZQUFNLEVBUFI7QUFBNEQsS0FBNUQ7QUFTQSxVQUFNQyxhQUFrQyxHQUFHUCxNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFlBQU1hLE9BQU8sR0FBRyxPQUFPNVAsS0FBSyxDQUE1QixHQUE0QixDQUE1Qjs7QUFFQSxVQUFJK08sR0FBRyxLQUFQLE1BQWtCO0FBQ2hCLFlBQUkvTyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBYzRQLE9BQU8sS0FBckI1UCxZQUFzQzRQLE9BQU8sS0FBakQsVUFBZ0U7QUFDOUQsZ0JBQU1QLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQVJELGFBUU8sSUFBSUYsR0FBRyxLQUFQLFVBQXNCO0FBQzNCLFlBQUkvTyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBYzRQLE9BQU8sS0FBekIsVUFBd0M7QUFDdEMsZ0JBQU1QLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQVJNLGFBUUEsSUFDTEYsR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUkvTyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0I0UCxPQUFPLEtBQWpDLFdBQWlEO0FBQy9DLGdCQUFNUCxlQUFlLENBQUM7QUFBQTtBQUVwQkwsb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFkTSxhQWNBO0FBQ0w7QUFDQTtBQUNBLGNBQU1LLENBQVEsR0FBZDtBQUVIO0FBdENELE9BckR5QyxDQTZGekM7QUFDQTs7QUFDQSxVQUFNTyxTQUFTLEdBQUdDLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSTlQLEtBQUssQ0FBTEEsWUFBa0IsQ0FBQzZQLFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQXRMLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU13TCxDQUFDLEdBQUcvUCxLQUFLLENBQUxBLGFBQVY7QUFFQSxRQUFNNkIsTUFBTSxHQUFHLGFBQWYsU0FBZSxHQUFmO0FBQ0EsUUFBTW1PLFFBQVEsR0FBSW5PLE1BQU0sSUFBSUEsTUFBTSxDQUFqQixRQUFDQSxJQUFsQjs7QUFFQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQWVpTyx1QkFBYyxNQUFNO0FBQ3ZDLFVBQU0sNkJBQTZCLG1DQUFzQjlQLEtBQUssQ0FBM0IsTUFBbkMsSUFBbUMsQ0FBbkM7QUFDQSxXQUFPO0FBQ0x1TyxVQUFJLEVBREM7QUFFTEssUUFBRSxFQUFFNU8sS0FBSyxDQUFMQSxLQUNBLG1DQUFzQkEsS0FBSyxDQUQzQkEsRUFDQSxDQURBQSxHQUVBaVEsVUFBVSxJQUpoQjtBQUFPLEtBQVA7QUFGbUJILEtBUWxCLFdBQVc5UCxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0I4UCxDQUFyQjs7QUFVQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosTUF2SHVELENBeUh2RDs7QUFDQSxNQUFJLG9CQUFKLFVBQWtDO0FBQ2hDNUosWUFBUSxnQkFBRyx3Q0FBWEEsUUFBVyxDQUFYQTtBQUdGLEdBOUh1RCxDQThIdkQ7OztBQUNBLFFBQU00RCxLQUFVLEdBQUdvRyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFFBQWEsR0FBR3JHLEtBQUssSUFBSSxpQkFBVEEsWUFBc0NBLEtBQUssQ0FBakU7QUFFQSxRQUFNLGtDQUFrQyxzQ0FBZ0I7QUFDdERzRyxjQUFVLEVBRFo7QUFBd0QsR0FBaEIsQ0FBeEM7O0FBR0EsUUFBTUMsTUFBTSxHQUFHUCwyQkFDWlEsRUFBRCxJQUFpQjtBQUNmQyxzQkFBa0IsQ0FBbEJBLEVBQWtCLENBQWxCQTs7QUFDQSxrQkFBYztBQUNaLFVBQUksb0JBQUosWUFBb0NKLFFBQVEsQ0FBNUMsRUFBNEMsQ0FBUkEsQ0FBcEMsS0FDSyxJQUFJLG9CQUFKLFVBQWtDO0FBQ3JDQSxnQkFBUSxDQUFSQTtBQUVIO0FBQ0Y7QUFUWUwsS0FVYixXQVZGLGtCQVVFLENBVmFBLENBQWY7O0FBWUEsd0JBQVUsTUFBTTtBQUNkLFVBQU1VLGNBQWMsR0FBR0MsU0FBUyxJQUFUQSxLQUFrQix3QkFBekMsSUFBeUMsQ0FBekM7QUFDQSxVQUFNcEMsU0FBUyxHQUNiLHlDQUF5Q3hNLE1BQU0sSUFBSUEsTUFBTSxDQUQzRDtBQUVBLFVBQU02TyxZQUFZLEdBQ2hCdEMsVUFBVSxDQUFDRyxJQUFJLEdBQUpBLFlBQW1CRixTQUFTLEdBQUcsTUFBSCxZQUR6QyxFQUNhRSxDQUFELENBRFo7O0FBRUEsUUFBSWlDLGNBQWMsSUFBSSxDQUF0QixjQUFxQztBQUNuQzdHLGNBQVEsbUJBQW1CO0FBQ3pCK0YsY0FBTSxFQURSL0Y7QUFBMkIsT0FBbkIsQ0FBUkE7QUFJSDtBQVhELEtBV0csaUNBWEgsTUFXRyxDQVhIO0FBYUEsUUFBTWdILFVBS0wsR0FBRztBQUNGOUcsT0FBRyxFQUREO0FBRUYrRyxXQUFPLEVBQUc1TixDQUFELElBQXlCO0FBQ2hDLFVBQUk4RyxLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLFlBQW5CLFlBQThEO0FBQzVEQSxhQUFLLENBQUxBO0FBRUY7O0FBQUEsVUFBSSxDQUFDOUcsQ0FBQyxDQUFOLGtCQUF5QjtBQUN2QjZOLG1CQUFXLGdEQUFYQSxNQUFXLENBQVhBO0FBRUg7QUFkSDtBQUtJLEdBTEo7O0FBaUJBRixZQUFVLENBQVZBLGVBQTJCM04sQ0FBRCxJQUF5QjtBQUNqRCxRQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixRQUFJOEcsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLFdBQUssQ0FBTEE7QUFFRkg7O0FBQUFBLFlBQVEsbUJBQW1CO0FBQUVtSCxjQUFRLEVBQXJDbkg7QUFBMkIsS0FBbkIsQ0FBUkE7QUFMRmdILElBL0t1RCxDQXVMdkQ7QUFDQTs7O0FBQ0EsTUFBSTNRLEtBQUssQ0FBTEEsWUFBbUI4SixLQUFLLENBQUxBLGdCQUFzQixFQUFFLFVBQVVBLEtBQUssQ0FBOUQsS0FBNkMsQ0FBN0MsRUFBd0U7QUFDdEUsVUFBTXVFLFNBQVMsR0FDYix5Q0FBeUN4TSxNQUFNLElBQUlBLE1BQU0sQ0FEM0QsT0FEc0UsQ0FJdEU7QUFDQTs7QUFDQSxVQUFNa1AsWUFBWSxHQUNoQmxQLE1BQU0sSUFDTkEsTUFBTSxDQUROQSxrQkFFQSw0Q0FHRUEsTUFBTSxJQUFJQSxNQUFNLENBSGxCLFNBSUVBLE1BQU0sSUFBSUEsTUFBTSxDQVBwQixhQUdFLENBSEY7QUFVQThPLGNBQVUsQ0FBVkEsT0FDRUksWUFBWSxJQUNaLHlCQUFZLHNDQUF5QmxQLE1BQU0sSUFBSUEsTUFBTSxDQUZ2RDhPLGFBRWMsQ0FBWixDQUZGQTtBQUtGOztBQUFBLHNCQUFPYixtQ0FBUCxVQUFPQSxDQUFQOzs7ZUFHYWtCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25VZjtBQUNBO0FBQ0E7O0FBQ08sdUNBQXVEO0FBQzVELFNBQU9DLElBQUksQ0FBSkEsaUJBQXNCQSxJQUFJLEtBQTFCQSxNQUFxQ0EsSUFBSSxDQUFKQSxTQUFjLENBQW5EQSxDQUFxQ0EsQ0FBckNBLEdBQVA7QUFHRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxNQUFNQywwQkFBMEIsR0FBR0MsU0FDckNGLFNBRHFDRSxHQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUEsTUFBTUMsbUJBQW1CLEdBQzdCLCtCQUErQkMsSUFBSSxDQUFwQyxtQkFBQyxJQUNELGNBRWtCO0FBQ2hCLE1BQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFoQixHQUFZQSxFQUFaO0FBQ0EsU0FBT0MsVUFBVSxDQUFDLFlBQVk7QUFDNUJDLE1BQUUsQ0FBQztBQUNEQyxnQkFBVSxFQURUO0FBRURDLG1CQUFhLEVBQUUsWUFBWTtBQUN6QixlQUFPQyxJQUFJLENBQUpBLE9BQVksTUFBTUwsSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFaSyxDQUFQO0FBSEpIO0FBQUcsS0FBRCxDQUFGQTtBQURlLEtBQWpCLENBQWlCLENBQWpCO0FBTkc7Ozs7QUFnQkEsTUFBTUksa0JBQWtCLEdBQzVCLCtCQUErQlIsSUFBSSxDQUFwQyxrQkFBQyxJQUNELGNBQXlDO0FBQ3ZDLFNBQU9TLFlBQVksQ0FBbkIsRUFBbUIsQ0FBbkI7QUFIRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNQOztBQUNBLDBJLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLGlCQUFpQixHQUF2Qjs7QUFtQ0EseUNBSWM7QUFDWixNQUFJQyxLQUFnQyxHQUFHQyxHQUFHLENBQUhBLElBQXZDLEdBQXVDQSxDQUF2Qzs7QUFDQSxhQUFXO0FBQ1QsUUFBSSxZQUFKLE9BQXVCO0FBQ3JCLGFBQU9ELEtBQUssQ0FBWjtBQUVGOztBQUFBLFdBQU9FLE9BQU8sQ0FBUEEsUUFBUCxLQUFPQSxDQUFQO0FBRUY7O0FBQUE7QUFDQSxRQUFNQyxJQUFnQixHQUFHLFlBQWdCQyxPQUFELElBQWE7QUFDbkRDLFlBQVEsR0FBUkE7QUFERixHQUF5QixDQUF6QjtBQUdBSixLQUFHLENBQUhBLFNBQWNELEtBQUssR0FBRztBQUFFSSxXQUFPLEVBQVQ7QUFBc0JFLFVBQU0sRUFBbERMO0FBQXNCLEdBQXRCQTtBQUNBLFNBQU9NLFNBQVMsR0FDWjtBQUNBQSxXQUFTLEdBQVRBLEtBQWtCclAsS0FBRCxLQUFZbVAsUUFBUSxDQUFSQSxLQUFRLENBQVJBLEVBRmpCLEtBRUssQ0FBakJFLENBRlksR0FBaEI7QUFhRjs7QUFBQSwyQkFBc0Q7QUFDcEQsTUFBSTtBQUNGQyxRQUFJLEdBQUczRCxRQUFRLENBQVJBLGNBQVAyRCxNQUFPM0QsQ0FBUDJEO0FBQ0EsV0FDRTtBQUNBO0FBQ0MsT0FBQyxDQUFDQyxNQUFNLENBQVIsd0JBQWlDLENBQUMsQ0FBRTVELFFBQUQsQ0FBcEMsWUFBQyxJQUNEMkQsSUFBSSxDQUFKQSxpQkFKRixVQUlFQTtBQUpGO0FBTUEsR0FSRixDQVFFLGdCQUFNO0FBQ047QUFFSDtBQUVEOztBQUFBLE1BQU1FLFdBQW9CLEdBQUdDLFdBQTdCOztBQUVBLHdDQUlnQjtBQUNkLFNBQU8sWUFBWSxjQUFjO0FBQy9CLFFBQUk5RCxRQUFRLENBQVJBLGNBQXdCLCtCQUE4Qk4sSUFBMUQsSUFBSU0sQ0FBSixFQUFxRTtBQUNuRSxhQUFPK0QsR0FBUDtBQUdGSjs7QUFBQUEsUUFBSSxHQUFHM0QsUUFBUSxDQUFSQSxjQUFQMkQsTUFBTzNELENBQVAyRCxDQUwrQixDQU8vQjs7QUFDQSxZQUFRQSxJQUFJLENBQUpBO0FBQ1JBLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQSxjQUFvQnJCLFNBQXBCcUI7QUFDQUEsUUFBSSxDQUFKQTtBQUNBQSxRQUFJLENBQUpBLGNBWitCLENBYy9COztBQUNBQSxRQUFJLENBQUpBO0FBRUEzRCxZQUFRLENBQVJBO0FBakJGLEdBQU8sQ0FBUDtBQXFCRjs7QUFBQSxNQUFNZ0UsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBL0Isa0JBQStCLENBQS9CLEMsQ0FDQTs7QUFDTyw2QkFBMkM7QUFDaEQsU0FBTzFELE1BQU0sQ0FBTkEsc0NBQVAsRUFBT0EsQ0FBUDtBQUdLOztBQUFBLDJCQUF3RDtBQUM3RCxTQUFPdkQsR0FBRyxJQUFJZ0gsZ0JBQWdCLElBQTlCO0FBR0Y7O0FBQUEsbUNBR29CO0FBQ2xCLFNBQU8sWUFBWSxxQkFBcUI7QUFDdENFLFVBQU0sR0FBR2xFLFFBQVEsQ0FBUkEsY0FBVGtFLFFBQVNsRSxDQUFUa0UsQ0FEc0MsQ0FHdEM7QUFDQTtBQUNBOztBQUNBQSxVQUFNLENBQU5BOztBQUNBQSxVQUFNLENBQU5BLFVBQWlCLE1BQ2ZDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLFVBQVcsMEJBQXlCQyxHQUQ1REgsRUFDd0IsQ0FBRCxDQUFmLENBRFJBLENBUHNDLENBVXRDO0FBQ0E7OztBQUNBQSxVQUFNLENBQU5BLGNBQXFCNUIsU0FBckI0QixDQVpzQyxDQWN0QztBQUNBOztBQUNBQSxVQUFNLENBQU5BO0FBQ0FsRSxZQUFRLENBQVJBO0FBakJGLEdBQU8sQ0FBUDtBQXFCRixDLENBQUE7OztBQUNBLCtDQUljO0FBQ1osU0FBTyxZQUFZLHFCQUFxQjtBQUN0QyxRQUFJc0UsU0FBUyxHQUFiO0FBRUEsS0FBQyxDQUFELEtBQVFDLENBQUQsSUFBTztBQUNaO0FBQ0FELGVBQVMsR0FBVEE7QUFDQWYsYUFBTyxDQUFQQSxDQUFPLENBQVBBO0FBSEY7QUFNQSxrREFBb0IsTUFDbEJaLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsVUFBSSxDQUFKLFdBQWdCO0FBQ2R3QixjQUFNLENBQU5BLEdBQU0sQ0FBTkE7QUFFSDtBQUpTLE9BRFosRUFDWSxDQURaO0FBVEYsR0FBTyxDQUFQO0FBbUJGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLGtDQUFnRTtBQUNyRSxNQUFJM0IsSUFBSSxDQUFSLGtCQUEyQjtBQUN6QixXQUFPYSxPQUFPLENBQVBBLFFBQWdCYixJQUFJLENBQTNCLGdCQUFPYSxDQUFQO0FBR0Y7O0FBQUEsUUFBTW1CLGVBQTZDLEdBQUcsWUFFbkRqQixPQUFELElBQWE7QUFDYjtBQUNBLFVBQU1YLEVBQUUsR0FBR0osSUFBSSxDQUFmOztBQUNBQSxRQUFJLENBQUpBLHNCQUEyQixNQUFNO0FBQy9CZSxhQUFPLENBQUNmLElBQUksQ0FBWmUsZ0JBQU8sQ0FBUEE7QUFDQVgsUUFBRSxJQUFJQSxFQUFOQTtBQUZGSjtBQUxGLEdBQXNELENBQXREO0FBV0EsU0FBT2lDLHlCQUF5QixxQ0FHOUJMLGNBQWMsQ0FBQyxVQUhqQixzQ0FHaUIsQ0FBRCxDQUhnQixDQUFoQztBQVdGOztBQUFBLDhDQUd1QjtBQUNyQixZQUE0QztBQUMxQyxXQUFPLE9BQU8sQ0FBUCxRQUFnQjtBQUNyQk0sYUFBTyxFQUFFLENBQ1BDLFdBQVcsR0FBWEEsK0JBRUVDLFNBQVMsQ0FBQywyQ0FKTyxLQUlQLENBQUQsQ0FISixDQURZO0FBTXJCO0FBQ0FDLFNBQUcsRUFQTDtBQUF1QixLQUFoQixDQUFQO0FBVUY7O0FBQUEsU0FBT0Msc0JBQXNCLEdBQXRCQSxLQUErQkMsUUFBRCxJQUFjO0FBQ2pELFFBQUksRUFBRUMsS0FBSyxJQUFYLFFBQUksQ0FBSixFQUEwQjtBQUN4QixZQUFNWixjQUFjLENBQUMsVUFBVywyQkFBMEJZLEtBQTFELEVBQXFCLENBQUQsQ0FBcEI7QUFFRjs7QUFBQSxVQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBUkEsS0FBUSxDQUFSQSxLQUNkNUIsS0FBRCxJQUFXd0IsV0FBVyxHQUFYQSxZQUEwQkMsU0FBUyxDQURoRCxLQUNnRCxDQUQvQkcsQ0FBakI7QUFHQSxXQUFPO0FBQ0xMLGFBQU8sRUFBRU8sUUFBUSxDQUFSQSxPQUFpQkMsQ0FBRCxJQUFPQSxDQUFDLENBQURBLFNBRDNCLEtBQzJCQSxDQUF2QkQsQ0FESjtBQUVMSixTQUFHLEVBQUVJLFFBQVEsQ0FBUkEsT0FBaUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFEQSxTQUY5QixNQUU4QkEsQ0FBdkJEO0FBRkEsS0FBUDtBQVBGLEdBQU9ILENBQVA7QUFjRjs7QUFBQSx3Q0FBNkQ7QUFDM0QsUUFBTUssV0FHTCxHQUFHLElBSEosR0FHSSxFQUhKO0FBSUEsUUFBTUMsYUFBNEMsR0FBRyxJQUFyRCxHQUFxRCxFQUFyRDtBQUNBLFFBQU1DLFdBQWtELEdBQUcsSUFBM0QsR0FBMkQsRUFBM0Q7QUFDQSxRQUFNQyxNQUdMLEdBQUcsSUFISixHQUdJLEVBSEo7O0FBS0EsbUNBQTJEO0FBQ3pELFFBQUloQyxJQUFrQyxHQUFHOEIsYUFBYSxDQUFiQSxJQUF6QyxHQUF5Q0EsQ0FBekM7O0FBQ0EsY0FBVTtBQUNSO0FBR0YsS0FOeUQsQ0FNekQ7OztBQUNBLFFBQUlwRixRQUFRLENBQVJBLGNBQXdCLGdCQUFlcUUsR0FBM0MsSUFBSXJFLENBQUosRUFBcUQ7QUFDbkQsYUFBT3FELE9BQU8sQ0FBZCxPQUFPQSxFQUFQO0FBR0YrQjs7QUFBQUEsaUJBQWEsQ0FBYkEsU0FBd0I5QixJQUFJLEdBQUdpQyxZQUFZLENBQTNDSCxHQUEyQyxDQUEzQ0E7QUFDQTtBQUdGOztBQUFBLGlDQUFpRTtBQUMvRCxRQUFJOUIsSUFBMEMsR0FBRytCLFdBQVcsQ0FBWEEsSUFBakQsSUFBaURBLENBQWpEOztBQUNBLGNBQVU7QUFDUjtBQUdGQTs7QUFBQUEsZUFBVyxDQUFYQSxVQUVHL0IsSUFBSSxHQUFHa0MsS0FBSyxDQUFMQSxJQUFLLENBQUxBLE1BQ0N6QixHQUFELElBQVM7QUFDYixVQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsY0FBTSxVQUFXLDhCQUE2QnJFLElBQTlDLEVBQU0sQ0FBTjtBQUVGOztBQUFBLGFBQU9xRSxHQUFHLENBQUhBLFlBQWlCMEIsSUFBRCxLQUFXO0FBQUUvRixZQUFJLEVBQU47QUFBY2pDLGVBQU8sRUFBdkQ7QUFBa0MsT0FBWCxDQUFoQnNHLENBQVA7QUFMSXlCLGFBT0V4SSxHQUFELElBQVM7QUFDZCxZQUFNb0gsY0FBYyxDQUFwQixHQUFvQixDQUFwQjtBQVZOaUIsS0FFVUcsQ0FGVkg7QUFhQTtBQUdGOztBQUFBLFNBQU87QUFDTEssa0JBQWMsUUFBZ0I7QUFDNUIsYUFBT0MsVUFBVSxRQUFqQixXQUFpQixDQUFqQjtBQUZHOztBQUlMQyxnQkFBWSxpQkFBd0M7QUFDbER2QyxhQUFPLENBQVBBLHNCQUNTd0MsRUFBRCxJQUFRQSxFQURoQnhDLFNBR0t5QyxPQUFELEtBQW1CO0FBQ2pCQyxpQkFBUyxFQUFHRCxPQUFPLElBQUlBLE9BQU8sQ0FBbkIsT0FBQ0EsSUFESztBQUVqQkEsZUFBTyxFQUxiekM7QUFHdUIsT0FBbkIsQ0FISkEsRUFPS3JHLEdBQUQsS0FBVTtBQUFFbEssYUFBSyxFQVByQnVRO0FBT2MsT0FBVixDQVBKQSxPQVNTN0ssS0FBRCxJQUE0QjtBQUNoQyxjQUFNd04sR0FBRyxHQUFHYixXQUFXLENBQVhBLElBQVosS0FBWUEsQ0FBWjtBQUNBQSxtQkFBVyxDQUFYQTtBQUNBLFlBQUlhLEdBQUcsSUFBSSxhQUFYLEtBQTZCQSxHQUFHLENBQUhBO0FBWmpDM0M7QUFMRzs7QUFvQkw0QyxhQUFTLFFBQWdCO0FBQ3ZCLGFBQU9OLFVBQVUsZ0JBQWtDLFlBQVk7QUFDN0QsWUFBSTtBQUNGLGdCQUFNO0FBQUE7QUFBQTtBQUFBLGNBQW1CLE1BQU1PLGdCQUFnQixjQUEvQyxLQUErQyxDQUEvQztBQUNBLGdCQUFNLGFBQWEsTUFBTTdDLE9BQU8sQ0FBUEEsSUFBWSxDQUNuQzhCLFdBQVcsQ0FBWEEsa0JBRUk5QixPQUFPLENBQVBBLElBQVlxQixPQUFPLENBQVBBLElBSG1CLGtCQUduQkEsQ0FBWnJCLENBSCtCLEVBSW5DQSxPQUFPLENBQVBBLElBQVl3QixHQUFHLENBQUhBLElBSmQsZUFJY0EsQ0FBWnhCLENBSm1DLENBQVpBLENBQXpCO0FBT0EsZ0JBQU04QyxVQUEyQixHQUFHLE1BQU0xQix5QkFBeUIsQ0FDakUsb0JBRGlFLEtBQ2pFLENBRGlFLHFCQUdqRUwsY0FBYyxDQUNaLFVBQVcsbUNBQWtDWSxLQUpqRCxFQUlJLENBRFksQ0FIbUQsQ0FBbkU7QUFRQSxnQkFBTWpCLEdBQXFCLEdBQUd4RCxNQUFNLENBQU5BLE9BRzVCO0FBSDRCQTtBQUc1QixXQUg0QkEsRUFBOUIsVUFBOEJBLENBQTlCO0FBSUEsaUJBQU8scUNBQVA7QUFDQSxTQXRCRixDQXNCRSxZQUFZO0FBQ1osaUJBQU87QUFBRXpOLGlCQUFLLEVBQWQ7QUFBTyxXQUFQO0FBRUg7QUExQkQsT0FBaUIsQ0FBakI7QUFyQkc7O0FBaURMZ0ksWUFBUSxRQUErQjtBQUNyQztBQUNBO0FBQ0E7O0FBQ0EsVUFBS3NMLEVBQUUsR0FBSUMsU0FBRCxDQUFWLFlBQTBDO0FBQ3hDO0FBQ0EsWUFBSUQsRUFBRSxDQUFGQSxZQUFlLFVBQVVBLEVBQUUsQ0FBL0IsYUFBbUIsQ0FBbkIsRUFBZ0QsT0FBTy9DLE9BQU8sQ0FBZCxPQUFPQSxFQUFQO0FBRWxEOztBQUFBLGFBQU8sZ0JBQWdCLGNBQWhCLEtBQWdCLENBQWhCLE1BQ0VpRCxNQUFELElBQ0pqRCxPQUFPLENBQVBBLElBQ0VRLFdBQVcsR0FDUHlDLE1BQU0sQ0FBTkEsWUFBb0JwQyxNQUFELElBQVlxQyxjQUFjLFNBRHRDLFFBQ3NDLENBQTdDRCxDQURPLEdBSFYsRUFFSGpELENBRkcsT0FRQyxNQUFNO0FBQ1Ysc0RBQW9CLE1BQU0sZUFBMUIsS0FBMEIsQ0FBMUI7QUFURyxnQkFZSDtBQUNBLFlBQU0sQ0FiVixDQUFPLENBQVA7QUF6REo7O0FBQU8sR0FBUDs7O2VBNEVhbUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFXZjs7QUFDQTs7Ozs7QUFDQTs7QUF5SEE7OztBQTVIQTs7QUFtQkEsTUFBTUMsZUFBb0MsR0FBRztBQUMzQ3pULFFBQU0sRUFEcUM7QUFDN0I7QUFDZDBULGdCQUFjLEVBRjZCOztBQUczQ0MsT0FBSyxLQUFpQjtBQUNwQixRQUFJLEtBQUosUUFBaUIsT0FBTy9ELEVBQVA7O0FBQ2pCLGVBQW1DLEVBR3BDO0FBUkg7O0FBQTZDLENBQTdDLEMsQ0FXQTs7QUFDQSxNQUFNZ0UsaUJBQWlCLEdBQUcsK0lBQTFCLGdCQUEwQixDQUExQjtBQWVBLE1BQU1DLFlBQVksR0FBRywwR0FBckIsb0JBQXFCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0RBQXpCLGdCQUF5QixDQUF6QixDLENBU0E7O0FBQ0F2RyxNQUFNLENBQU5BLDBDQUFpRDtBQUMvQ3BHLEtBQUcsR0FBRztBQUNKLFdBQU80TSxpQkFBUDtBQUZKeEc7O0FBQWlELENBQWpEQTtBQU1BcUcsaUJBQWlCLENBQWpCQSxRQUEyQkksS0FBRCxJQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBekcsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNwRyxPQUFHLEdBQUc7QUFDSixZQUFNbkgsTUFBTSxHQUFHaVUsU0FBZjtBQUNBLGFBQU9qVSxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEp1Tjs7QUFBOEMsR0FBOUNBO0FBTEZxRztBQWFBLGdCQUFnQixDQUFoQixRQUEwQkksS0FBRCxJQUFtQjtBQUMxQztBQUNBOztBQUFFUCxpQkFBRCxPQUFDQSxHQUFpQyxDQUFDLEdBQUQsU0FBb0I7QUFDckQsVUFBTXpULE1BQU0sR0FBR2lVLFNBQWY7QUFDQSxXQUFPalUsTUFBTSxDQUFOQSxLQUFNLENBQU5BLENBQWMsR0FBckIsSUFBT0EsQ0FBUDtBQUZELEdBQUN5VDtBQUZKO0FBUUFJLFlBQVksQ0FBWkEsUUFBc0JsSCxLQUFELElBQW1CO0FBQ3RDOEcsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQk0sc0NBQXdCLENBQUMsR0FBRCxTQUFhO0FBQ25DLFlBQU1HLFVBQVUsR0FBSSxLQUFJdkgsS0FBSyxDQUFMQSx1QkFBOEIsR0FBRUEsS0FBSyxDQUFMQSxZQUF4RDtBQUdBLFlBQU13SCxnQkFBZ0IsR0FBdEI7O0FBQ0EsVUFBSUEsZ0JBQWdCLENBQXBCLFVBQW9CLENBQXBCLEVBQWtDO0FBQ2hDLFlBQUk7QUFDRkEsMEJBQWdCLENBQWhCQSxVQUFnQixDQUFoQkEsQ0FBNkIsR0FBN0JBO0FBQ0EsU0FGRixDQUVFLFlBQVk7QUFDWnpSLGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDd1IsVUFBdER4UjtBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUVzSCxHQUFHLENBQUM1SixPQUFRLEtBQUk0SixHQUFHLENBQUNvSyxLQUFyQzFSO0FBRUg7QUFDRjtBQWJEcVI7QUFERk47QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTXJULE9BQU8sR0FDWCxnQ0FERjtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPcVQsZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPeEYsMEJBQWlCb0csZUFBeEIsYUFBT3BHLENBQVA7QUFHRixDLENBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxNQUFNcUcsWUFBWSxHQUFHLENBQUMsR0FBRCxTQUFpQztBQUMzRGIsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSU0sU0FBSixRQUFXLEdBQXBDTixJQUF5QixDQUF6QkE7QUFDQUEsaUJBQWUsQ0FBZkEsdUJBQXdDN0QsRUFBRCxJQUFRQSxFQUEvQzZEO0FBQ0FBLGlCQUFlLENBQWZBO0FBRUEsU0FBT0EsZUFBZSxDQUF0QjtBQUxLLEUsQ0FRUDs7Ozs7QUFDTywwQ0FBOEQ7QUFDbkUsUUFBTWMsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQmpILE1BQU0sQ0FBTkEsT0FDbkJrSCxLQUFLLENBQUxBLFFBQWNGLE9BQU8sQ0FBckJFLFFBQXFCLENBQXJCQSxTQURtQmxILElBRW5CZ0gsT0FBTyxDQUZUQyxRQUVTLENBRllqSCxDQUFyQmlILENBRHlDLENBSXZDOztBQUNGO0FBR0ZBOztBQUFBQSxZQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUJELE9BQU8sQ0FBNUJDLFFBQTRCLENBQTVCQTtBQUdGLEdBaEJtRSxDQWdCbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCVCxpQkFBbEJTO0FBRUFWLGtCQUFnQixDQUFoQkEsUUFBMEJFLEtBQUQsSUFBVztBQUNsQ1EsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZWO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVLRDs7QUFDQTs7QUFjQSxNQUFNWSx1QkFBdUIsR0FBRyxnQ0FBaEM7O0FBRU8seUJBQTRDO0FBQUE7QUFBNUM7QUFBNEMsQ0FBNUMsRUFHcUQ7QUFDMUQsUUFBTUMsVUFBbUIsR0FBR0MsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTUMsU0FBUyxHQUFHLFdBQWxCLE1BQWtCLEdBQWxCO0FBQ0EsUUFBTSx3QkFBd0IscUJBQTlCLEtBQThCLENBQTlCO0FBRUEsUUFBTXJHLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJb0csU0FBUyxDQUFiLFNBQXVCO0FBQ3JCQSxlQUFTLENBQVRBO0FBQ0FBLGVBQVMsQ0FBVEE7QUFHRjs7QUFBQSxRQUFJRixVQUFVLElBQWQsU0FBMkI7O0FBRTNCLFFBQUlsRyxFQUFFLElBQUlBLEVBQUUsQ0FBWixTQUFzQjtBQUNwQm9HLGVBQVMsQ0FBVEEsVUFBb0JDLE9BQU8sS0FFeEJsRyxTQUFELElBQWVBLFNBQVMsSUFBSW1HLFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRkY7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYztBQUNaLGNBQU1HLFlBQVksR0FBRyw4Q0FBb0IsTUFBTUQsVUFBVSxDQUF6RCxJQUF5RCxDQUFwQyxDQUFyQjtBQUNBLGVBQU8sTUFBTSw2Q0FBYixZQUFhLENBQWI7QUFFSDtBQUNGO0FBUEQsS0FPRyxDQVBILE9BT0csQ0FQSDtBQVNBLFNBQU8sU0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSw2Q0FJYztBQUNaLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2QkUsY0FBYyxDQUFqRCxPQUFpRCxDQUFqRDtBQUNBQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0QsWUFBUSxDQUFSQTtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBVEQ7QUFZRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBQ0EsaUNBQXdFO0FBQ3RFLFFBQU05TixFQUFFLEdBQUdtRixPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJK0gsUUFBUSxHQUFHWSxTQUFTLENBQVRBLElBQWYsRUFBZUEsQ0FBZjs7QUFDQSxnQkFBYztBQUNaO0FBR0Y7O0FBQUEsUUFBTUYsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLHlCQUEwQkUsT0FBRCxJQUFhO0FBQ3JEQSxXQUFPLENBQVBBLFFBQWlCbEYsS0FBRCxJQUFXO0FBQ3pCLFlBQU1tRixRQUFRLEdBQUdKLFFBQVEsQ0FBUkEsSUFBYS9FLEtBQUssQ0FBbkMsTUFBaUIrRSxDQUFqQjtBQUNBLFlBQU10RyxTQUFTLEdBQUd1QixLQUFLLENBQUxBLGtCQUF3QkEsS0FBSyxDQUFMQSxvQkFBMUM7O0FBQ0EsVUFBSW1GLFFBQVEsSUFBWixXQUEyQjtBQUN6QkEsZ0JBQVEsQ0FBUkEsU0FBUSxDQUFSQTtBQUVIO0FBTkREO0FBRGUsS0FBakIsT0FBaUIsQ0FBakI7QUFVQUQsV0FBUyxDQUFUQSxRQUVHWixRQUFRLEdBQUc7QUFBQTtBQUFBO0FBRmRZO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0Q7O0FBRUE7O0FBV2UsdUNBSytCO0FBQzVDLG9DQUFvRDtBQUNsRCx3QkFBTztBQUFtQixZQUFNLEVBQUUsWUFBM0IsU0FBMkI7QUFBM0IsT0FBUCxLQUFPLEVBQVA7QUFHRjs7QUFBQSxtQkFBaUIsQ0FBakIsa0JBQW9DRyxpQkFBaUIsQ0FBQ0MsZUFBdEQsQ0FDQTtBQURBO0FBRUVDLG1CQUFELG9CQUFDQSxHQUFpREYsaUJBQUQsQ0FBakQsbUJBQUNFOztBQUNGLFlBQTJDO0FBQ3pDLFVBQU1yVSxJQUFJLEdBQ1JtVSxpQkFBaUIsQ0FBakJBLGVBQWlDQSxpQkFBaUIsQ0FBbERBLFFBREY7QUFFQUUscUJBQWlCLENBQWpCQSxjQUFpQyxjQUFhclUsSUFBOUNxVTtBQUdGOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ00sZ0RBTUw7QUFDQSxxQkFEQSxDQUVBOztBQUNBLFFBQU1DLGFBQWEsR0FBR3ZILFFBQVEsQ0FBUkEsTUFBdEIsR0FBc0JBLENBQXRCO0FBRUMsR0FBQ3dILE9BQU8sSUFBUixTQUFzQjlILE1BQUQsSUFBWTtBQUNoQyxRQUFJNkgsYUFBYSxDQUFiQSxDQUFhLENBQWJBLG1CQUFtQzdILE1BQU0sQ0FBN0MsV0FBdUNBLEVBQXZDLEVBQTZEO0FBQzNEK0gsb0JBQWMsR0FBZEE7QUFDQUYsbUJBQWEsQ0FBYkE7QUFDQXZILGNBQVEsR0FBR3VILGFBQWEsQ0FBYkEsYUFBWHZIO0FBQ0E7QUFFRjs7QUFBQTtBQVBEO0FBVUQsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTTBILEdBQStCLEdBQUd0SSxNQUFNLENBQU5BLE9BQXhDLElBQXdDQSxDQUF4QztBQUVBLFNBQU87QUFDTDVELE1BQUUsZ0JBQWlDO0FBQ2pDO0FBQUMsT0FBQ2tNLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxLQUFjQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsR0FBZixFQUFDQSxDQUFEO0FBRkU7O0FBS0xDLE9BQUcsZ0JBQWlDO0FBQ2xDLFVBQUlELEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiQSxXQUFHLENBQUhBLElBQUcsQ0FBSEEsUUFBaUJBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxzQkFBakJBO0FBRUg7QUFUSTs7QUFXTEUsUUFBSSxPQUFlLEdBQWYsTUFBK0I7QUFDakM7QUFDQTtBQUFDLE9BQUNGLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxJQUFELGdCQUErQkcsT0FBRCxJQUFzQjtBQUNuREEsZUFBTyxDQUFDLEdBQVJBLElBQU8sQ0FBUEE7QUFERDtBQWJMOztBQUFPLEdBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBS0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQWxDQTtBQUFBO0FBQ0E7OztBQStEQTs7QUFFQSxJQUFJMUcsS0FBSixFQUFxQyxFQUtyQzs7QUFBQSxNQUFNMkcsUUFBUSxHQUFJM0csVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU8vQixNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakQrRCxhQUFTLEVBRFg7QUFBbUQsR0FBNUMvRCxDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU8ySSxNQUFNLElBQUk5RyxJQUFJLENBQUpBLFdBQVY4RyxHQUFVOUcsQ0FBVjhHLEdBQ0g5RyxJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFOEcsTUFBTyxHQUFFQyxlQUFlLENBQWZBLElBQWUsQ0FBZkEsV0FBZ0MvRyxJQUFJLENBQUpBLFVBQWhDK0csQ0FBZ0MvRyxDQUFoQytHLEdBQW9EL0csSUFIL0Q4RyxLQUFQO0FBT0s7O0FBQUEsK0RBS0w7QUFDQSxNQUFJNUcsS0FBSixFQUFxQyxFQWFyQzs7QUFBQTtBQUdLOztBQUFBLGdEQUlMO0FBQ0EsTUFBSUEsS0FBSixFQUFxQyxFQVFyQzs7QUFBQTtBQUdLOztBQUFBLGlDQUFrRDtBQUN2RCxNQUFJQSxLQUFKLEVBQXFDLEVBTXJDOztBQUFBO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU04RyxVQUFVLEdBQUdoSCxJQUFJLENBQUpBLFFBQW5CLEdBQW1CQSxDQUFuQjtBQUNBLFFBQU1pSCxTQUFTLEdBQUdqSCxJQUFJLENBQUpBLFFBQWxCLEdBQWtCQSxDQUFsQjs7QUFFQSxNQUFJZ0gsVUFBVSxHQUFHLENBQWJBLEtBQW1CQyxTQUFTLEdBQUcsQ0FBbkMsR0FBdUM7QUFDckNqSCxRQUFJLEdBQUdBLElBQUksQ0FBSkEsYUFBa0JnSCxVQUFVLEdBQUcsQ0FBYkEsaUJBQXpCaEgsU0FBT0EsQ0FBUEE7QUFFRjs7QUFBQTtBQUdLOztBQUFBLDJCQUE0QztBQUNqREEsTUFBSSxHQUFHK0csZUFBZSxDQUF0Qi9HLElBQXNCLENBQXRCQTtBQUNBLFNBQU9BLElBQUksS0FBSkEsWUFBcUJBLElBQUksQ0FBSkEsV0FBZ0I2RyxRQUFRLEdBQXBELEdBQTRCN0csQ0FBNUI7QUFHSzs7QUFBQSwyQkFBMkM7QUFDaEQ7QUFDQSxTQUFPa0gsYUFBYSxPQUFwQixRQUFvQixDQUFwQjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRGxILE1BQUksR0FBR0EsSUFBSSxDQUFKQSxNQUFXNkcsUUFBUSxDQUExQjdHLE1BQU9BLENBQVBBO0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUpBLFdBQUwsR0FBS0EsQ0FBTCxFQUEyQkEsSUFBSSxHQUFJLElBQUdBLElBQVhBO0FBQzNCO0FBR0Y7QUFBQTtBQUNBO0FBQ0E7OztBQUNPLHlCQUEwQztBQUMvQztBQUNBLE1BQUkzRyxHQUFHLENBQUhBLG1CQUF1QkEsR0FBRyxDQUFIQSxXQUEzQixHQUEyQkEsQ0FBM0IsRUFBZ0Q7O0FBQ2hELE1BQUk7QUFDRjtBQUNBLFVBQU04TixjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlNOztBQUFBLGlEQUlMO0FBQ0EsTUFBSUUsaUJBQWlCLEdBQXJCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLCtCQUFyQixLQUFxQixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFsQztBQUNBLFFBQU1FLGNBQWMsR0FDbEI7QUFDQSxHQUFDQyxVQUFVLEtBQVZBLFFBQXVCLGlEQUF2QkEsVUFBdUIsQ0FBdkJBLEdBQUQsT0FDQTtBQUNBO0FBSkY7QUFPQUosbUJBQWlCLEdBQWpCQTtBQUNBLFFBQU1LLE1BQU0sR0FBR3hKLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQ3dKLE1BQU0sQ0FBTkEsTUFBY0MsS0FBRCxJQUFXO0FBQ3ZCLFFBQUkzVixLQUFLLEdBQUd3VixjQUFjLENBQWRBLEtBQWMsQ0FBZEEsSUFBWjtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBdUJELGFBQWEsQ0FBMUMsS0FBMEMsQ0FBMUMsQ0FGdUIsQ0FJdkI7QUFDQTs7QUFDQSxRQUFJSyxRQUFRLEdBQUksSUFBR0MsTUFBTSxXQUFXLEVBQUcsR0FBRUYsS0FBekM7O0FBQ0Esa0JBQWM7QUFDWkMsY0FBUSxHQUFJLEdBQUUsZUFBZSxFQUFHLElBQUdBLFFBQW5DQTtBQUVGOztBQUFBLFFBQUlDLE1BQU0sSUFBSSxDQUFDekMsS0FBSyxDQUFMQSxRQUFmLEtBQWVBLENBQWYsRUFBcUNwVCxLQUFLLEdBQUcsQ0FBUkEsS0FBUSxDQUFSQTtBQUVyQyxXQUNFLENBQUM4VixRQUFRLElBQUlILEtBQUssSUFBbEIscUJBQ0E7QUFDQ04scUJBQWlCLEdBQ2hCQSxpQkFBaUIsQ0FBakJBLGtCQUVFUSxNQUFNLEdBQ0Q3VixLQUFELElBQUNBLEVBRUc7QUFDQTtBQUNBO0FBQ0E7QUFDQytWLFdBQUQsSUFBYUMsa0JBQWtCLENBTm5DLE9BTW1DLENBTmxDaFcsRUFBRCxJQUFDQSxDQURDLEdBQ0RBLENBREMsR0FVRmdXLGtCQUFrQixDQVp4QlgsS0FZd0IsQ0FaeEJBLEtBSkosR0FDRSxDQURGO0FBYkosR0FDR0ssQ0FESCxFQWlDRTtBQUNBTCxxQkFBaUIsR0FBakJBLEdBREEsQ0FDdUI7QUFFdkI7QUFDQTtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMalUsVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNNlUsYUFBNkIsR0FBbkM7QUFFQS9KLFFBQU0sQ0FBTkEsb0JBQTRCTCxHQUFELElBQVM7QUFDbEMsUUFBSSxDQUFDNkosTUFBTSxDQUFOQSxTQUFMLEdBQUtBLENBQUwsRUFBMkI7QUFDekJPLG1CQUFhLENBQWJBLEdBQWEsQ0FBYkEsR0FBcUJDLEtBQUssQ0FBMUJELEdBQTBCLENBQTFCQTtBQUVIO0FBSkQvSjtBQUtBO0FBR0Y7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sbURBSUc7QUFDUjtBQUNBLFFBQU1pSyxJQUFJLEdBQUcscUJBQWIsVUFBYSxDQUFiO0FBQ0EsUUFBTUMsV0FBVyxHQUNmLGtDQUFrQyxpQ0FEcEMsSUFDb0MsQ0FEcEMsQ0FIUSxDQUtSOztBQUNBLE1BQUksQ0FBQ0MsVUFBVSxDQUFmLFdBQWUsQ0FBZixFQUE4QjtBQUM1QixXQUFRQyxTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFRjs7QUFBQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLHFCQUFqQixJQUFpQixDQUFqQjtBQUNBQSxZQUFRLENBQVJBLFdBQW9CLHdEQUEyQkEsUUFBUSxDQUF2REEsUUFBb0IsQ0FBcEJBO0FBQ0EsUUFBSUMsY0FBYyxHQUFsQjs7QUFFQSxRQUNFLCtCQUFlRCxRQUFRLENBQXZCLGFBQ0FBLFFBQVEsQ0FEUixnQkFERixXQUlFO0FBQ0EsWUFBTUwsS0FBSyxHQUFHLHlDQUF1QkssUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDMUosa0JBQVEsRUFENEI7QUFFcEM0SixjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcENMLGVBQUssRUFBRVMsa0JBQWtCLFFBSDNCSCxNQUcyQjtBQUhXLFNBQXJCLENBQWpCQTtBQU1IO0FBRUQsS0EzQkUsQ0EyQkY7OztBQUNBLFVBQU1JLFlBQVksR0FDaEJMLFFBQVEsQ0FBUkEsV0FBb0JKLElBQUksQ0FBeEJJLFNBQ0lBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEeEJBLE1BQ0lBLENBREpBLEdBRUlBLFFBQVEsQ0FIZDtBQUtBLFdBQVFELFNBQVMsR0FDYixlQUFlRSxjQUFjLElBRGhCLFlBQ2IsQ0FEYSxHQUFqQjtBQUdBLEdBcENGLENBb0NFLFVBQVU7QUFDVixXQUFRRixTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFSDtBQUVEOztBQUFBLDBCQUFrQztBQUNoQyxRQUFNTyxNQUFNLEdBQUcsV0FBZixpQkFBZSxHQUFmO0FBRUEsU0FBT3pQLEdBQUcsQ0FBSEEscUJBQXlCQSxHQUFHLENBQUhBLFVBQWN5UCxNQUFNLENBQTdDelAsTUFBeUJBLENBQXpCQSxHQUFQO0FBR0Y7O0FBQUEsdUNBQThEO0FBQzVEO0FBQ0E7QUFDQSxNQUFJLDZCQUE2QjBQLFdBQVcsQ0FBQ25ZLE1BQU0sQ0FBUCxlQUE1QyxJQUE0QyxDQUE1QztBQUNBLFFBQU1rWSxNQUFNLEdBQUcsV0FBZixpQkFBZSxHQUFmO0FBQ0EsUUFBTUUsYUFBYSxHQUFHSCxZQUFZLENBQVpBLFdBQXRCLE1BQXNCQSxDQUF0QjtBQUNBLFFBQU1JLFdBQVcsR0FBR2pLLFVBQVUsSUFBSUEsVUFBVSxDQUFWQSxXQUFsQyxNQUFrQ0EsQ0FBbEM7QUFFQTZKLGNBQVksR0FBR0ssV0FBVyxDQUExQkwsWUFBMEIsQ0FBMUJBO0FBQ0E3SixZQUFVLEdBQUdBLFVBQVUsR0FBR2tLLFdBQVcsQ0FBZCxVQUFjLENBQWQsR0FBdkJsSztBQUVBLFFBQU1tSyxXQUFXLEdBQUdILGFBQWEsa0JBQWtCSSxXQUFXLENBQTlELFlBQThELENBQTlEO0FBQ0EsUUFBTUMsVUFBVSxHQUFHMUwsRUFBRSxHQUNqQnVMLFdBQVcsQ0FBQ0gsV0FBVyxDQUFDblksTUFBTSxDQUFQLFVBRE4sRUFDTSxDQUFaLENBRE0sR0FFakJvTyxVQUFVLElBRmQ7QUFJQSxTQUFPO0FBQ0wzRixPQUFHLEVBREU7QUFFTHNFLE1BQUUsRUFBRXNMLFdBQVcsZ0JBQWdCRyxXQUFXLENBRjVDLFVBRTRDO0FBRnJDLEdBQVA7QUFNRjs7QUFBQSxnREFHRUUsYUFBYSxHQUhmLE1BSUU7QUFDQSxRQUFNO0FBQUE7QUFBQSxNQUFOO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLHFEQUNwQiw4Q0FBb0JELGFBQWEsR0FBR0UsV0FBVyxDQUFkLFFBQWMsQ0FBZCxHQURuQyxRQUNFLENBRG9CLENBQXRCOztBQUlBLE1BQUlELGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixHQVZBLENBVUE7OztBQUNBLE1BQUksQ0FBQ0UsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsU0FBSyxDQUFMQSxLQUFZQyxJQUFELElBQVU7QUFDbkIsVUFBSSx3Q0FBd0IsNkNBQTVCLGFBQTRCLENBQTVCLEVBQXlFO0FBQ3ZFQyxrQkFBVSxDQUFWQSxXQUFzQkwsYUFBYSxHQUFHRixXQUFXLENBQWQsSUFBYyxDQUFkLEdBQW5DTztBQUNBO0FBRUg7QUFMREY7QUFPRkU7O0FBQUFBLFlBQVUsQ0FBVkEsV0FBc0IscURBQXdCQSxVQUFVLENBQXhEQSxRQUFzQixDQUF0QkE7QUFDQTtBQW1FRjs7QUFBQSxNQUFNQyx1QkFBdUIsR0FDM0IxSixVQUdBLEtBSkY7QUFZQSxNQUFNMkosa0JBQWtCLEdBQUdoSSxNQUFNLENBQWpDLG9CQUFpQyxDQUFqQzs7QUFFQSxtQ0FBaUU7QUFDL0QsU0FBTyxLQUFLLE1BQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBaUksZUFBVyxFQVpOO0FBQVcsR0FBTixDQUFMLE1BYUVuSSxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSW9JLFFBQVEsR0FBUkEsS0FBZ0JwSSxHQUFHLENBQUhBLFVBQXBCLEtBQXVDO0FBQ3JDLGVBQU9xSSxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxVQUFJcEksR0FBRyxDQUFIQSxXQUFKLEtBQXdCO0FBQ3RCLGVBQU9BLEdBQUcsQ0FBSEEsWUFBaUJuTixJQUFELElBQVU7QUFDL0IsY0FBSUEsSUFBSSxDQUFSLFVBQW1CO0FBQ2pCLG1CQUFPO0FBQUV5VixzQkFBUSxFQUFqQjtBQUFPLGFBQVA7QUFFRjs7QUFBQSxnQkFBTSxVQUFOLDZCQUFNLENBQU47QUFKRixTQUFPdEksQ0FBUDtBQU9GOztBQUFBLFlBQU0sVUFBTiw2QkFBTSxDQUFOO0FBRUY7O0FBQUEsV0FBT0EsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE1QkYsR0FBTyxDQUFQO0FBZ0NGOztBQUFBLGlEQUFrRTtBQUNoRSxTQUFPLFVBQVUsV0FBV3VJLGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EdFAsR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFFQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25CO0FBRUY7O0FBQUE7QUFSRixHQUFPLENBQVA7QUFZYTs7QUFBQSxNQUFNK0osTUFBTixDQUFtQztBQU9oRDtBQUNGO0FBUmtEO0FBV2hEO0FBRUE7QUF5QkF3RixhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBaUNUO0FBQUEsU0F0RUZ2SCxLQXNFRTtBQUFBLFNBckVGN0QsUUFxRUU7QUFBQSxTQXBFRm9KLEtBb0VFO0FBQUEsU0FuRUZpQyxNQW1FRTtBQUFBLFNBbEVGdkQsUUFrRUU7QUFBQSxTQTdERndELFVBNkRFO0FBQUEsU0EzREZDLEdBMkRFLEdBM0RrQyxFQTJEbEM7QUFBQSxTQXpERkMsR0F5REUsR0F6RDJDLEVBeUQzQztBQUFBLFNBdkRGQyxHQXVERTtBQUFBLFNBdERGQyxHQXNERTtBQUFBLFNBckRGQyxVQXFERTtBQUFBLFNBcERGQyxJQW9ERTtBQUFBLFNBbkRGQyxNQW1ERTtBQUFBLFNBbERGQyxRQWtERTtBQUFBLFNBakRGQyxLQWlERTtBQUFBLFNBaERGQyxVQWdERTtBQUFBLFNBL0NGQyxjQStDRTtBQUFBLFNBOUNGQyxRQThDRTtBQUFBLFNBN0NGeE0sTUE2Q0U7QUFBQSxTQTVDRjhILE9BNENFO0FBQUEsU0EzQ0YyRSxhQTJDRTtBQUFBLFNBMUNGQyxhQTBDRTtBQUFBLFNBekNGQyxPQXlDRTtBQUFBLFNBeENGQyxTQXdDRTtBQUFBLFNBdkNGQyxjQXVDRTtBQUFBLFNBckNNQyxJQXFDTixHQXJDcUIsQ0FxQ3JCOztBQUFBLHNCQStGWXhaLENBQUQsSUFBNEI7QUFDdkMsWUFBTXlaLEtBQUssR0FBR3paLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFZ04sa0JBQVEsRUFBRXFLLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUNvQyxLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBO0FBQ0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFDQSxVQUFJdEwsS0FBSixFQUEyQyxFQXFCM0M7O0FBQUE7QUFFQSxZQUFNO0FBQUE7QUFBQSxVQUFlLHdDQUFyQixHQUFxQixDQUFyQixDQW5EdUMsQ0FxRHZDO0FBQ0E7O0FBQ0EsVUFBSSxjQUFjdkMsRUFBRSxLQUFLLEtBQXJCLFVBQW9Db0IsUUFBUSxLQUFLLEtBQXJELFVBQW9FO0FBQ2xFO0FBR0YsT0EzRHVDLENBMkR2QztBQUNBOzs7QUFDQSxVQUFJLGFBQWEsQ0FBQyxVQUFsQixLQUFrQixDQUFsQixFQUFvQztBQUNsQztBQUdGOztBQUFBLDJDQUlFWixNQUFNLENBQU5BLG9CQUFxRTtBQUNuRUksZUFBTyxFQUFFbEIsT0FBTyxDQUFQQSxXQUFtQixLQUR1QztBQUVuRW9CLGNBQU0sRUFBRXBCLE9BQU8sQ0FBUEEsVUFBa0IsS0FOOUI7QUFJdUUsT0FBckVjLENBSkY7QUFoS0EsT0FDQTs7O0FBQ0EsaUJBQWEscURBQWIsU0FBYSxDQUFiLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJWSxTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUIwTSxlQUFPLEVBRnFCO0FBRzVCMWMsYUFBSyxFQUh1QjtBQUFBO0FBSzVCMmMsZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FMVDtBQU01QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FOdkM7QUFBOEIsT0FBOUI7QUFVRjs7QUFBQSwrQkFBMkI7QUFDekJFLGVBQVMsRUFEZ0I7QUFFekI1SSxpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWMwQixNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLFVBQU1tSCxpQkFBaUIsR0FDckIsNkNBQTRCMUwsSUFBSSxDQUFKQSxjQUQ5Qjs7QUFHQSxrQkFBYzBMLGlCQUFpQixlQUEvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQTNDQSxDQTRDQTtBQUNBOztBQUNBO0FBRUE7QUFFQSxtQkFBZSxDQUFDLEVBQ2QxTCxJQUFJLENBQUpBLHNCQUNBQSxJQUFJLENBQUpBLGNBREFBLE9BRUMsc0JBQXNCLENBQUNBLElBQUksQ0FBSkEsU0FIMUIsTUFBZ0IsQ0FBaEI7QUFLQSxxQkFBaUIsQ0FBQyxDQUFsQjtBQUNBOztBQUVBLFFBQUlGLEtBQUosRUFBcUMsRUFXckM7O0FBQUEsZUFBbUMsRUF3QnBDO0FBK0VENkw7O0FBQUFBLFFBQU0sR0FBUztBQUNidkssVUFBTSxDQUFOQTtBQUdGO0FBQUE7QUFDRjtBQUNBOzs7QUFDRXdLLE1BQUksR0FBRztBQUNMeEssVUFBTSxDQUFOQTtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRXJKLE1BQUksVUFBcUJrRixPQUEwQixHQUEvQyxJQUFzRDtBQUN4RCxRQUFJNkMsS0FBSixFQUEyQyxFQWEzQzs7QUFBQTtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBYytMLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRWpaLFNBQU8sVUFBcUJxSyxPQUEwQixHQUEvQyxJQUFzRDtBQUMzRDtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBYzRPLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLHFDQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLHVEQU1vQjtBQUFBOztBQUNsQixRQUFJLENBQUMzRCxVQUFVLENBQWYsR0FBZSxDQUFmLEVBQXNCO0FBQ3BCOUcsWUFBTSxDQUFOQTtBQUNBO0FBR0YsS0FOa0IsQ0FNbEI7QUFDQTs7O0FBQ0EsUUFBS25FLE9BQUQsQ0FBSixJQUF5QjtBQUN2QjtBQUdGLEtBWmtCLENBWWxCO0FBQ0E7QUFDQTs7O0FBQ0FBLFdBQU8sQ0FBUEEsU0FBaUIsQ0FBQyxxQkFBRUEsT0FBTyxDQUFULG9DQUFsQkEsSUFBa0IsQ0FBbEJBO0FBRUEsUUFBSTZPLFlBQVksR0FBRzdPLE9BQU8sQ0FBUEEsV0FBbUIsS0FBdEM7O0FBRUEsUUFBSTZDLEtBQUosRUFBcUMsc0JBZ0ZyQzs7QUFBQSxRQUFJLENBQUU3QyxPQUFELENBQUwsSUFBMEI7QUFDeEI7QUFFRixLQXRHa0IsQ0FzR2xCOzs7QUFDQSxRQUFJOE8sT0FBSixJQUFRO0FBQ05DLGlCQUFXLENBQVhBO0FBR0Y7O0FBQUEsVUFBTTtBQUFFN04sYUFBTyxHQUFUO0FBQUEsUUFBTjtBQUNBLFVBQU04TixVQUFVLEdBQUc7QUFBbkI7QUFBbUIsS0FBbkI7O0FBRUEsUUFBSSxLQUFKLGdCQUF5QjtBQUN2Qiw4QkFBd0IsS0FBeEI7QUFHRjFPOztBQUFBQSxNQUFFLEdBQUd5TCxXQUFXLENBQ2RrRCxTQUFTLENBQ1BqRixXQUFXLENBQVhBLEVBQVcsQ0FBWEEsR0FBa0JtQyxXQUFXLENBQTdCbkMsRUFBNkIsQ0FBN0JBLEdBRE8sSUFFUGhLLE9BQU8sQ0FGQSxRQUdQLEtBSkpNLGFBQ1csQ0FESyxDQUFoQkE7QUFPQSxVQUFNNE8sU0FBUyxHQUFHQyxTQUFTLENBQ3pCbkYsV0FBVyxDQUFYQSxFQUFXLENBQVhBLEdBQWtCbUMsV0FBVyxDQUE3Qm5DLEVBQTZCLENBQTdCQSxHQUR5QixJQUV6QixLQUZGLE1BQTJCLENBQTNCO0FBSUEsNkJBN0hrQixDQStIbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUVoSyxPQUFELENBQUQsTUFBd0IscUJBQTVCLFNBQTRCLENBQTVCLEVBQTZEO0FBQzNEO0FBQ0FzSCxZQUFNLENBQU5BLCtDQUYyRCxDQUczRDs7QUFDQTtBQUNBO0FBQ0Esa0JBQVksZ0JBQWdCLEtBQTVCLEtBQVksQ0FBWjtBQUNBQSxZQUFNLENBQU5BO0FBQ0E7QUFHRjs7QUFBQSxRQUFJOEgsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUNBLFFBQUk7QUFBQTtBQUFBO0FBQUEsUUFBSixPQWpKa0IsQ0FtSmxCO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQSxRQUFJO0FBQ0ZoRCxXQUFLLEdBQUcsTUFBTSxnQkFBZEEsV0FBYyxFQUFkQTtBQUNDLE9BQUM7QUFBRWlELGtCQUFVLEVBQVo7QUFBQSxVQUEyQixNQUFNLGlCQUFsQyxzQkFBa0MsR0FBbEM7QUFDRCxLQUhGLENBR0UsWUFBWTtBQUNaO0FBQ0E7QUFDQWxMLFlBQU0sQ0FBTkE7QUFDQTtBQUdGaUw7O0FBQUFBLFVBQU0sR0FBR0UsbUJBQW1CLFNBQTVCRixLQUE0QixDQUE1QkE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDMU4sY0FBUSxHQUFHME4sTUFBTSxDQUFqQjFOO0FBQ0ExRixTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFHRixLQXhLa0IsQ0F3S2xCO0FBQ0E7QUFDQTs7O0FBQ0EwRixZQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0J5SyxXQUFXLENBRHBCLFFBQ29CLENBQW5DLENBRGUsR0FBbkJ6SyxTQTNLa0IsQ0ErS2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDLGNBQUQsU0FBQyxDQUFELElBQTZCLENBQWpDLGNBQWdEO0FBQzlDNk4sWUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQUloSyxLQUFLLEdBQUcscURBQVosUUFBWSxDQUFaLENBeExrQixDQTBMbEI7QUFDQTs7QUFDQSxRQUFJNUQsVUFBVSxHQUFkOztBQUVBLFFBQUlrQixLQUFKLEVBQTJELEVBcUIzRDs7QUFBQSxRQUFJLENBQUNvSSxVQUFVLENBQWYsRUFBZSxDQUFmLEVBQXFCO0FBQ25CLGdCQUEyQztBQUN6QyxjQUFNLFVBQ0gsa0JBQWlCalAsR0FBSSxjQUFhc0UsRUFBbkMsMkNBQUMsR0FESCwwRUFBTSxDQUFOO0FBTUY2RDs7QUFBQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0Z4Qzs7QUFBQUEsY0FBVSxHQUFHd04sU0FBUyxDQUFDaEQsV0FBVyxDQUFaLFVBQVksQ0FBWixFQUEwQixLQUFoRHhLLE1BQXNCLENBQXRCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNNk4sUUFBUSxHQUFHLHdDQUFqQixVQUFpQixDQUFqQjtBQUNBLFlBQU1uRixVQUFVLEdBQUdtRixRQUFRLENBQTNCO0FBRUEsWUFBTUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7QUFDQSxZQUFNQyxpQkFBaUIsR0FBR3BLLEtBQUssS0FBL0I7QUFDQSxZQUFNNkYsY0FBYyxHQUFHdUUsaUJBQWlCLEdBQ3BDdEUsYUFBYSxvQkFEdUIsS0FDdkIsQ0FEdUIsR0FBeEM7O0FBSUEsVUFBSSxlQUFnQnNFLGlCQUFpQixJQUFJLENBQUN2RSxjQUFjLENBQXhELFFBQWtFO0FBQ2hFLGNBQU13RSxhQUFhLEdBQUc5TyxNQUFNLENBQU5BLEtBQVkyTyxVQUFVLENBQXRCM08sZUFDbkJ5SixLQUFELElBQVcsQ0FBQ08sS0FBSyxDQURuQixLQUNtQixDQURHaEssQ0FBdEI7O0FBSUEsWUFBSThPLGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixvQkFBMkM7QUFDekMzWixtQkFBTyxDQUFQQSxLQUNHLEdBQ0MwWixpQkFBaUIsMEJBRVosaUNBSFAsOEJBQUMsR0FLRSxlQUFjQyxhQUFhLENBQWJBLFVBTm5CM1o7QUFZRjs7QUFBQSxnQkFBTSxVQUNKLENBQUMwWixpQkFBaUIsR0FDYiwwQkFBeUIzVCxHQUFJLG9DQUFtQzRULGFBQWEsQ0FBYkEsVUFEbkQsb0NBSWIsOEJBQTZCdkYsVUFBVyw4Q0FBNkM5RSxLQUoxRixTQUtHLDRDQUNDb0ssaUJBQWlCLGlDQUViLHNCQVRWLEVBQU0sQ0FBTjtBQWFIO0FBaENELGFBZ0NPLHVCQUF1QjtBQUM1QnJQLFVBQUUsR0FBRyxpQ0FDSFEsTUFBTSxDQUFOQSxxQkFBNEI7QUFDMUJZLGtCQUFRLEVBQUUwSixjQUFjLENBREU7QUFFMUJOLGVBQUssRUFBRVMsa0JBQWtCLFFBQVFILGNBQWMsQ0FIbkQ5SyxNQUc2QjtBQUZDLFNBQTVCUSxDQURHLENBQUxSO0FBREssYUFPQTtBQUNMO0FBQ0FRLGNBQU0sQ0FBTkE7QUFFSDtBQUVEd0c7O0FBQUFBLFVBQU0sQ0FBTkE7O0FBRUEsUUFBSTtBQUFBOztBQUNGLFVBQUl1SSxTQUFTLEdBQUcsTUFBTSwwREFBdEIsVUFBc0IsQ0FBdEI7QUFRQSxVQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFKLFVBVEUsQ0FXRjs7QUFDQSxVQUFJLENBQUN4QixPQUFPLElBQVIsWUFBSixPQUFtQztBQUNqQyxZQUFLM2MsS0FBRCxVQUFDQSxJQUE0QkEsS0FBRCxVQUFDQSxDQUFqQyxjQUF1RTtBQUNyRSxnQkFBTW9lLFdBQVcsR0FBSXBlLEtBQUQsVUFBQ0EsQ0FBckIsYUFEcUUsQ0FHckU7QUFDQTtBQUNBOztBQUNBLGNBQUlvZSxXQUFXLENBQVhBLFdBQUosR0FBSUEsQ0FBSixFQUFpQztBQUMvQixrQkFBTXhELFVBQVUsR0FBRyx3Q0FBbkIsV0FBbUIsQ0FBbkI7QUFDQWdELCtCQUFtQixvQkFBbkJBLEtBQW1CLENBQW5CQTs7QUFFQSxnQkFBSWxELEtBQUssQ0FBTEEsU0FBZUUsVUFBVSxDQUE3QixRQUFJRixDQUFKLEVBQXlDO0FBQ3ZDLG9CQUFNO0FBQUVwUSxtQkFBRyxFQUFMO0FBQWVzRSxrQkFBRSxFQUFqQjtBQUFBLGtCQUE2QnNPLFlBQVksb0JBQS9DLFdBQStDLENBQS9DO0FBS0EscUJBQU8sbUNBQVAsT0FBTyxDQUFQO0FBRUg7QUFFRHpLOztBQUFBQSxnQkFBTSxDQUFOQTtBQUNBLGlCQUFPLFlBQVksTUFBTSxDQUF6QixDQUFPLENBQVA7QUFHRjs7QUFBQSx5QkFBaUIsQ0FBQyxDQUFDelMsS0FBSyxDQUF4QixZQXpCaUMsQ0EyQmpDOztBQUNBLFlBQUlBLEtBQUssQ0FBTEEsYUFBSixvQkFBMkM7QUFDekM7O0FBRUEsY0FBSTtBQUNGLGtCQUFNLG9CQUFOLE1BQU0sQ0FBTjtBQUNBcWUseUJBQWEsR0FBYkE7QUFDQSxXQUhGLENBR0UsVUFBVTtBQUNWQSx5QkFBYSxHQUFiQTtBQUdGRjs7QUFBQUEsbUJBQVMsR0FBRyxNQUFNLHVFQU1oQjtBQUFFM08sbUJBQU8sRUFOWDJPO0FBTUUsV0FOZ0IsQ0FBbEJBO0FBU0g7QUFFRHZJOztBQUFBQSxZQUFNLENBQU5BO0FBQ0E7O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU0wSSxPQUFZLEdBQUcseUJBQXJCO0FBQ0U3TCxjQUFELEtBQUNBLENBQUQsYUFBQ0EsR0FDQTZMLE9BQU8sQ0FBUEEsb0JBQTRCQSxPQUFPLENBQW5DQSx1QkFDQSxDQUFFSCxTQUFTLENBQVYsU0FBQ0EsQ0FGSCxlQUFDMUw7QUFLSixPQXZFRSxDQXVFRjs7O0FBQ0EsWUFBTThMLG1CQUFtQixHQUFHalEsT0FBTyxDQUFQQSxXQUFtQixlQUEvQzs7QUFFQSxVQUNHQSxPQUFELEdBQUNBLElBQ0QwQixRQUFRLEtBRFIsU0FBQzFCLElBRUQsOEJBQUksQ0FBSiw2SkFGQSxHQUFDQSxJQUdEdE8sS0FIQSxRQUFDc08sSUFHRHRPLEtBQUssQ0FKUCxXQUtFO0FBQ0E7QUFDQTtBQUNBQSxhQUFLLENBQUxBO0FBR0Y7O0FBQUEsWUFBTSx1REFNSndlLFlBQVksS0FDVEQsbUJBQW1CLElBQUksQ0FBQ2pRLE9BQU8sQ0FBL0JpUSxnQkFBZ0Q7QUFBRUUsU0FBQyxFQUFIO0FBQVFDLFNBQUMsRUFQeEQ7QUFPK0MsT0FEdkMsQ0FOUixRQVFHMWIsQ0FBRCxJQUFPO0FBQ2IsWUFBSUEsQ0FBQyxDQUFMLFdBQWlCckIsS0FBSyxHQUFHQSxLQUFLLElBQTlCLENBQWlCQSxDQUFqQixLQUNLO0FBVlAsT0FBTSxDQUFOOztBQWFBLGlCQUFXO0FBQ1RpVSxjQUFNLENBQU5BO0FBQ0E7QUFHRjs7QUFBQSxVQUFJekUsS0FBSixFQUFxQyxFQUtyQ3lFOztBQUFBQSxZQUFNLENBQU5BO0FBRUE7QUFDQSxLQS9HRixDQStHRSxZQUFZO0FBQ1osVUFBSS9KLEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUVGOztBQUFBO0FBRUg7QUFFRDhTOztBQUFBQSxhQUFXLGtCQUlUclEsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBT21FLE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDbE8sZUFBTyxDQUFQQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSSxPQUFPa08sTUFBTSxDQUFOQSxRQUFQLE1BQU9BLENBQVAsS0FBSixhQUFtRDtBQUNqRGxPLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJzWixNQUF6Q3RaO0FBQ0E7QUFFSDtBQUVEOztBQUFBLFFBQUlzWixNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxzQkFBZ0J2UCxPQUFPLENBQXZCO0FBQ0EsWUFBTSxDQUFOLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBSUVzUSxXQUFHLEVBSkw7QUFLRUMsV0FBRyxFQUFFLFlBQVloQixNQUFNLEtBQU5BLGNBQXlCLEtBQXpCQSxPQUFxQyxZQU4xRDtBQUNFLE9BREYsRUFRRTtBQUNBO0FBQ0E7QUFWRjtBQWVIO0FBRUQ7O0FBQUEsa0ZBT3FDO0FBQ25DLFFBQUloUyxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQTtBQUdGOztBQUFBLFFBQUksdUNBQUosZUFBd0M7QUFDdEMrSixZQUFNLENBQU5BLHFEQURzQyxDQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBbkQsWUFBTSxDQUFOQSxtQkFUc0MsQ0FXdEM7QUFDQTs7QUFDQSxZQUFNcU0sc0JBQU47QUFHRjs7QUFBQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLFVBQ0Usb0NBQ0EsdUJBRkYsYUFHRTtBQUNBO0FBQUMsU0FBQztBQUFFbkUsY0FBSSxFQUFOO0FBQUE7QUFBQSxZQUFtQyxNQUFNLG9CQUExQyxTQUEwQyxDQUExQztBQUtIOztBQUFBLFlBQU13RCxTQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLMUN4YyxhQUFLLEVBTFA7QUFBNEMsT0FBNUM7O0FBUUEsVUFBSSxDQUFDd2MsU0FBUyxDQUFkLE9BQXNCO0FBQ3BCLFlBQUk7QUFDRkEsbUJBQVMsQ0FBVEEsUUFBa0IsTUFBTSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQXhEQTtBQUF3RCxXQUFoQyxDQUF4QkE7QUFLQSxTQU5GLENBTUUsZUFBZTtBQUNmNVosaUJBQU8sQ0FBUEE7QUFDQTRaLG1CQUFTLENBQVRBO0FBRUg7QUFFRDs7QUFBQTtBQUNBLEtBcENGLENBb0NFLHFCQUFxQjtBQUNyQixhQUFPLHlFQUFQLElBQU8sQ0FBUDtBQVNIO0FBRUQ7O0FBQUEseUVBTzZCO0FBQzNCLFFBQUk7QUFDRixZQUFNWSxpQkFBK0MsR0FBRyxnQkFBeEQsS0FBd0QsQ0FBeEQ7O0FBR0EsVUFBSXpCLFVBQVUsQ0FBVkEsZ0NBQTJDLGVBQS9DLE9BQXFFO0FBQ25FO0FBR0Y7O0FBQUEsWUFBTTBCLGVBQXFELEdBQ3pERCxpQkFBaUIsSUFBSSxhQUFyQkEsZ0NBREY7QUFJQSxZQUFNWixTQUFtQyxHQUFHYSxlQUFlLHFCQUV2RCxNQUFNLGdDQUFpQ3BNLEdBQUQsS0FBVTtBQUM5Q2tLLGlCQUFTLEVBQUVsSyxHQUFHLENBRGdDO0FBRTlDc0IsbUJBQVcsRUFBRXRCLEdBQUcsQ0FGOEI7QUFHOUMrSixlQUFPLEVBQUUvSixHQUFHLENBQUhBLElBSHFDO0FBSTlDaUssZUFBTyxFQUFFakssR0FBRyxDQUFIQSxJQU5mO0FBRW9ELE9BQVYsQ0FBaEMsQ0FGVjtBQVNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOOztBQUVBLGdCQUEyQztBQUN6QyxjQUFNO0FBQUE7QUFBQSxZQUF5QnFNLG1CQUFPLENBQXRDLDBCQUFzQyxDQUF0Qzs7QUFDQSxZQUFJLENBQUNDLGtCQUFrQixDQUF2QixTQUF1QixDQUF2QixFQUFvQztBQUNsQyxnQkFBTSxVQUNILHlEQUF3RGxQLFFBRDNELEdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUE7O0FBRUEsVUFBSTJNLE9BQU8sSUFBWCxTQUF3QjtBQUN0QndDLGdCQUFRLEdBQUcsNEJBQ1QsaUNBQXFCO0FBQUE7QUFEWjtBQUNZLFNBQXJCLENBRFMsdUJBSVQsS0FKRkEsTUFBVyxDQUFYQTtBQVFGOztBQUFBLFlBQU1uZixLQUFLLEdBQUcsTUFBTSxjQUF3QyxNQUMxRDJjLE9BQU8sR0FDSCxvQkFERyxRQUNILENBREcsR0FFSEUsT0FBTyxHQUNQLG9CQURPLFFBQ1AsQ0FETyxHQUVQLGdDQUVFO0FBQ0E7QUFBQTtBQUFBO0FBR0V4QixjQUFNLEVBWGhCO0FBUVEsT0FIRixDQUxjLENBQXBCO0FBZ0JBOEMsZUFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFDQSxLQTlERixDQThERSxZQUFZO0FBQ1osYUFBTyxvREFBUCxVQUFPLENBQVA7QUFFSDtBQUVEbmE7O0FBQUFBLEtBQUcsZ0RBT2M7QUFDZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTyxrQkFBUCxXQUFPLENBQVA7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRW9iLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQnpRLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUkwUSxPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVc3USxFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3QjtBQUNBOztBQUNBLFFBQUlnTCxJQUFJLEtBQUpBLE1BQWVBLElBQUksS0FBdkIsT0FBbUM7QUFDakNuSCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVQ2QixDQVM3Qjs7O0FBQ0EsVUFBTWlOLElBQUksR0FBRzdRLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUjZRLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZjZCLENBZTdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBRzlRLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWOFEsWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Usc0JBRUV2RSxNQUFjLEdBRmhCLEtBR0UvTSxPQUF3QixHQUgxQixJQUlpQjtBQUNmLFFBQUlvUCxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUEsUUFBSjs7QUFFQSxRQUFJdk0sS0FBSixFQUFxQyxFQWlCckM7O0FBQUEsVUFBTXVKLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUVBZ0QsVUFBTSxHQUFHRSxtQkFBbUIsZ0JBQTVCRixLQUE0QixDQUE1QkE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDMU4sY0FBUSxHQUFHME4sTUFBTSxDQUFqQjFOO0FBQ0ExRixTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFRjs7QUFBQSxRQUFJdUosS0FBSyxHQUFHLHFEQUFaLFFBQVksQ0FBWjtBQUNBLFFBQUk1RCxVQUFVLEdBQWQ7O0FBRUEsUUFBSWtCLEtBQUosRUFBK0QsRUFqQ2hELENBeURmOzs7QUFDQSxjQUEyQztBQUN6QztBQUdGOztBQUFBLFVBQU1lLE9BQU8sQ0FBUEEsSUFBWSxDQUNoQixpQ0FBa0MyTixLQUFELElBQW9CO0FBQ25ELGFBQU9BLEtBQUssR0FDUixvQkFDRSxtREFJRSxPQUFPdlIsT0FBTyxDQUFkLHlCQUNJQSxPQUFPLENBRFgsU0FFSSxLQVJBLE1BRU4sQ0FERixDQURRLEdBQVo7QUFGYyxLQUNoQixDQURnQixFQWVoQixnQkFBZ0JBLE9BQU8sQ0FBUEEsd0JBQWhCLFlBZkYsS0FlRSxDQWZnQixDQUFaNEQsQ0FBTjtBQW1CRjs7QUFBQSw4QkFBNEQ7QUFDMUQsUUFBSWlCLFNBQVMsR0FBYjs7QUFDQSxVQUFNMk0sTUFBTSxHQUFJLFdBQVcsTUFBTTtBQUMvQjNNLGVBQVMsR0FBVEE7QUFERjs7QUFJQSxVQUFNNE0sZUFBZSxHQUFHLE1BQU0seUJBQTlCLEtBQThCLENBQTlCOztBQUVBLG1CQUFlO0FBQ2IsWUFBTXBlLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUNrUyxLQUQxQyxHQUFtQixDQUFuQjtBQUdBbFMsV0FBSyxDQUFMQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSW1lLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUE7QUFHRkU7O0FBQUFBLFVBQVEsS0FBc0M7QUFDNUMsUUFBSTdNLFNBQVMsR0FBYjs7QUFDQSxVQUFNMk0sTUFBTSxHQUFHLE1BQU07QUFDbkIzTSxlQUFTLEdBQVRBO0FBREY7O0FBR0E7QUFDQSxXQUFPdUIsRUFBRSxHQUFGQSxLQUFXalAsSUFBRCxJQUFVO0FBQ3pCLFVBQUlxYSxNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBLHFCQUFlO0FBQ2IsY0FBTWpVLEdBQVEsR0FBRyxVQUFqQixpQ0FBaUIsQ0FBakI7QUFDQUEsV0FBRyxDQUFIQTtBQUNBO0FBR0Y7O0FBQUE7QUFYRixLQUFPNkksQ0FBUDtBQWVGdUw7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFVBQU07QUFBRTFSLFVBQUksRUFBTjtBQUFBLFFBQXFCLGtCQUFrQmtFLE1BQU0sQ0FBTkEsU0FBN0MsSUFBMkIsQ0FBM0I7O0FBQ0EsUUFDRXRCLEtBREYsRUFJRSxFQUdGOztBQUFBLFdBQU8rTyxhQUFhLFdBQVcsS0FBeEJBLEtBQWEsQ0FBYkEsTUFBMEN6YSxJQUFELElBQVU7QUFDeEQ7QUFDQTtBQUZGLEtBQU95YSxDQUFQO0FBTUZDOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUU1UixVQUFJLEVBQU47QUFBQSxRQUF3QixrQkFBa0JrRSxNQUFNLENBQU5BLFNBQWhELElBQThCLENBQTlCOztBQUNBLFFBQUksU0FBSixXQUFJLENBQUosRUFBMkI7QUFDekIsYUFBTyxTQUFQLFdBQU8sQ0FBUDtBQUVGOztBQUFBLFdBQVEsd0JBQXdCeU4sYUFBYSxXQUFXLEtBQXhCQSxLQUFhLENBQWJBLE1BQ3ZCemEsSUFBRCxJQUFVO0FBQ2QsYUFBTyxTQUFQLFdBQU8sQ0FBUDtBQUNBO0FBSDRCeWEsYUFLdEJyVSxHQUFELElBQVM7QUFDZCxhQUFPLFNBQVAsV0FBTyxDQUFQO0FBQ0E7QUFQSixLQUFnQ3FVLENBQWhDO0FBV0Y3STs7QUFBQUEsaUJBQWUsaUJBR0M7QUFDZCxVQUFNO0FBQUV5RixlQUFTLEVBQVg7QUFBQSxRQUFxQixnQkFBM0IsT0FBMkIsQ0FBM0I7O0FBQ0EsVUFBTXNELE9BQU8sR0FBRyxjQUFoQixHQUFnQixDQUFoQjs7QUFDQUMsT0FBRyxDQUFIQTtBQUNBLFdBQU8scUNBQWlEO0FBQUE7QUFBQTtBQUd0RHhlLFlBQU0sRUFIZ0Q7QUFBeEQ7QUFBd0QsS0FBakQsQ0FBUDtBQVFGeWU7O0FBQUFBLG9CQUFrQixpQkFBZ0Q7QUFDaEUsUUFBSSxLQUFKLEtBQWM7QUFDWjFLLFlBQU0sQ0FBTkEsZ0NBRUVrSixzQkFGRmxKO0FBTUE7QUFDQTtBQUVIO0FBRUQySzs7QUFBQUEsUUFBTSxvQkFHVztBQUNmLFdBQU8sZUFFTCx5QkFGSyxXQUFQLFdBQU8sQ0FBUDtBQXRvQzhDOztBQUFBOzs7QUFBN0IzSyxNLENBb0NaaUcsTUFwQ1lqRyxHQW9DVSxvQkFwQ1ZBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGRyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxNQUFNNEssZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUkxUSxRQUFRLEdBQUcwUSxNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJOUcsSUFBSSxHQUFHOEcsTUFBTSxDQUFOQSxRQUFYO0FBQ0EsTUFBSXRILEtBQUssR0FBR3NILE1BQU0sQ0FBTkEsU0FBWjtBQUNBLE1BQUlDLElBQW9CLEdBQXhCO0FBRUFuZSxNQUFJLEdBQUdBLElBQUksR0FBRzBXLGtCQUFrQixDQUFsQkEsSUFBa0IsQ0FBbEJBLHdCQUFILE1BQVgxVzs7QUFFQSxNQUFJa2UsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFFBQUksR0FBR25lLElBQUksR0FBR2tlLE1BQU0sQ0FBcEJDO0FBREYsU0FFTyxjQUFjO0FBQ25CQSxRQUFJLEdBQUduZSxJQUFJLElBQUksQ0FBQ29lLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZELFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSXZILEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHeUgsTUFBTSxDQUFDQyxXQUFXLENBQVhBLHVCQUFmMUgsS0FBZTBILENBQUQsQ0FBZDFIO0FBR0Y7O0FBQUEsTUFBSTJILE1BQU0sR0FBR0wsTUFBTSxDQUFOQSxVQUFrQnRILEtBQUssSUFBSyxJQUFHQSxLQUEvQnNILE1BQWI7QUFFQSxNQUFJRCxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsT0FBZ0IsQ0FBaEJBLE9BQWhCLEtBQTZDQSxRQUFRLElBQVJBOztBQUU3QyxNQUNFQyxNQUFNLENBQU5BLFdBQ0MsQ0FBQyxhQUFhRixnQkFBZ0IsQ0FBaEJBLEtBQWQsUUFBY0EsQ0FBZCxLQUFrREcsSUFBSSxLQUZ6RCxPQUdFO0FBQ0FBLFFBQUksR0FBRyxRQUFRQSxJQUFJLElBQW5CQSxFQUFPLENBQVBBO0FBQ0EsUUFBSTNRLFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxDQUFRLENBQVJBLEtBQWhCLEtBQXFDQSxRQUFRLEdBQUcsTUFBWEE7QUFMdkMsU0FNTyxJQUFJLENBQUosTUFBVztBQUNoQjJRLFFBQUksR0FBSkE7QUFHRjs7QUFBQSxNQUFJL0csSUFBSSxJQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsS0FBWixLQUE2QkEsSUFBSSxHQUFHLE1BQVBBO0FBQzdCLE1BQUltSCxNQUFNLElBQUlBLE1BQU0sQ0FBTkEsQ0FBTSxDQUFOQSxLQUFkLEtBQWlDQSxNQUFNLEdBQUcsTUFBVEE7QUFFakMvUSxVQUFRLEdBQUdBLFFBQVEsQ0FBUkEsaUJBQVhBLGtCQUFXQSxDQUFYQTtBQUNBK1EsUUFBTSxHQUFHQSxNQUFNLENBQU5BLGFBQVRBLEtBQVNBLENBQVRBO0FBRUEsU0FBUSxHQUFFTixRQUFTLEdBQUVFLElBQUssR0FBRTNRLFFBQVMsR0FBRStRLE1BQU8sR0FBRW5ILElBQWhEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3lDQ3hFRDs7QUFDQSxNQUFNb0gsVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxxQ0FBc0Q7QUFDM0QsUUFBTUMsVUFBVSxHQUFHLFFBQ2pCLG9CQUE2QyxTQUQ1QixDQUFuQjtBQUdBLFFBQU1DLFlBQVksR0FBRzdILElBQUksR0FBRyxjQUFILFVBQUcsQ0FBSCxHQUF6QjtBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF5RCxhQUEvRCxZQUErRCxDQUEvRDs7QUFJQSxNQUFJVSxNQUFNLEtBQUtrSCxVQUFVLENBQXpCLFFBQWtDO0FBQ2hDLFVBQU0sVUFBVyxvREFBbUQzVyxHQUFwRSxFQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTDhPLFNBQUssRUFBRSx5Q0FGRixZQUVFLENBRkY7QUFBQTtBQUFBO0FBS0w3SyxRQUFJLEVBQUVBLElBQUksQ0FBSkEsTUFBVzBTLFVBQVUsQ0FBVkEsT0FMbkIsTUFLUTFTO0FBTEQsR0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQk0sOENBRVc7QUFDaEIsUUFBTTZLLEtBQXFCLEdBQTNCO0FBQ0ErSCxjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU8vSCxLQUFLLENBQVosR0FBWSxDQUFaLEtBQUosYUFBdUM7QUFDckNBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQTtBQURGLFdBRU8sSUFBSTlDLEtBQUssQ0FBTEEsUUFBYzhDLEtBQUssQ0FBdkIsR0FBdUIsQ0FBbkI5QyxDQUFKLEVBQStCO0FBQ3BDO0FBQUU4QyxXQUFLLENBQU4sR0FBTSxDQUFMQSxDQUFELElBQUNBLENBQUQsS0FBQ0E7QUFERyxXQUVBO0FBQ0xBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQSxHQUFhLENBQUNBLEtBQUssQ0FBTixHQUFNLENBQU4sRUFBYkEsS0FBYSxDQUFiQTtBQUVIO0FBUkQrSDtBQVNBO0FBR0Y7O0FBQUEsdUNBQXVEO0FBQ3JELE1BQ0UsNkJBQ0MsNkJBQTZCLENBQUNDLEtBQUssQ0FEcEMsS0FDb0MsQ0FEcEMsSUFFQSxpQkFIRixXQUlFO0FBQ0EsV0FBT1AsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUxGLFNBTU87QUFDTDtBQUVIO0FBRU07O0FBQUEsMENBRVk7QUFDakIsUUFBTXZjLE1BQU0sR0FBRyxJQUFmLGVBQWUsRUFBZjtBQUNBOEssUUFBTSxDQUFOQSwwQkFBaUMsQ0FBQyxNQUFELEtBQUMsQ0FBRCxLQUFrQjtBQUNqRCxRQUFJa0gsS0FBSyxDQUFMQSxRQUFKLEtBQUlBLENBQUosRUFBMEI7QUFDeEJwVCxXQUFLLENBQUxBLFFBQWVtZSxJQUFELElBQVUvYyxNQUFNLENBQU5BLFlBQW1CZ2Qsc0JBQXNCLENBQWpFcGUsSUFBaUUsQ0FBekNvQixDQUF4QnBCO0FBREYsV0FFTztBQUNMb0IsWUFBTSxDQUFOQSxTQUFnQmdkLHNCQUFzQixDQUF0Q2hkLEtBQXNDLENBQXRDQTtBQUVIO0FBTkQ4SztBQU9BO0FBR0s7O0FBQUEsd0JBRUwsR0FGSyxrQkFHWTtBQUNqQm1TLGtCQUFnQixDQUFoQkEsUUFBMEJKLFlBQUQsSUFBa0I7QUFDekM3SyxTQUFLLENBQUxBLEtBQVc2SyxZQUFZLENBQXZCN0ssSUFBVzZLLEVBQVg3SyxVQUF5Q3ZILEdBQUQsSUFBUzVMLE1BQU0sQ0FBTkEsT0FBakRtVCxHQUFpRG5ULENBQWpEbVQ7QUFDQTZLLGdCQUFZLENBQVpBLFFBQXFCLGdCQUFnQmhlLE1BQU0sQ0FBTkEsWUFBckNnZSxLQUFxQ2hlLENBQXJDZ2U7QUFGRkk7QUFJQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRjLDJCQUEyQixDQUFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRXJDLHFDQUF1RTtBQUM1RSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFRdlIsUUFBRCxJQUF5QztBQUM5QyxVQUFNZ08sVUFBVSxHQUFHd0QsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUk1SSxLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPNkksa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNN1YsR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNK00sTUFBa0QsR0FBeEQ7QUFFQXhKLFVBQU0sQ0FBTkEscUJBQTZCdVMsUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNQyxDQUFDLEdBQUc5RCxVQUFVLENBQUM0RCxDQUFDLENBQXRCLEdBQW9CLENBQXBCOztBQUNBLFVBQUlFLENBQUMsS0FBTCxXQUFxQjtBQUNuQmxKLGNBQU0sQ0FBTkEsUUFBTSxDQUFOQSxHQUFtQixDQUFDa0osQ0FBQyxDQUFEQSxRQUFELEdBQUNBLENBQUQsR0FDZkEsQ0FBQyxDQUFEQSxlQUFrQjlQLEtBQUQsSUFBV3lQLE1BQU0sQ0FEbkIsS0FDbUIsQ0FBbENLLENBRGUsR0FFZkYsQ0FBQyxDQUFEQSxTQUNBLENBQUNILE1BQU0sQ0FEUEcsQ0FDTyxDQUFQLENBREFBLEdBRUFILE1BQU0sQ0FKVjdJLENBSVUsQ0FKVkE7QUFNSDtBQVZEeEo7QUFXQTtBQTlCRjtBQWdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7dUNDOUJEO0FBQ0E7O0FBQ0EsMEJBQWtDO0FBQ2hDLFNBQU8yUyxHQUFHLENBQUhBLGdDQUFQLE1BQU9BLENBQVA7QUFHRjs7QUFBQSwrQkFBdUM7QUFDckMsUUFBTS9JLFFBQVEsR0FBR0gsS0FBSyxDQUFMQSxtQkFBeUJBLEtBQUssQ0FBTEEsU0FBMUMsR0FBMENBLENBQTFDOztBQUNBLGdCQUFjO0FBQ1pBLFNBQUssR0FBR0EsS0FBSyxDQUFMQSxTQUFlLENBQXZCQSxDQUFRQSxDQUFSQTtBQUVGOztBQUFBLFFBQU1FLE1BQU0sR0FBR0YsS0FBSyxDQUFMQSxXQUFmLEtBQWVBLENBQWY7O0FBQ0EsY0FBWTtBQUNWQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsTUFBUkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxTQUFPO0FBQUU5SixPQUFHLEVBQUw7QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUdLOztBQUFBLHdDQU9MO0FBQ0EsUUFBTWlULFFBQVEsR0FBRyxDQUFDQyxlQUFlLENBQWZBLHNCQUFELG9CQUFqQixHQUFpQixDQUFqQjtBQUlBLFFBQU1KLE1BQXNDLEdBQTVDO0FBQ0EsTUFBSUssVUFBVSxHQUFkO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdILFFBQVEsQ0FBUkEsSUFDbkIvSSxPQUFELElBQWE7QUFDaEIsUUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE0Qm1KLGNBQWMsQ0FBQ25KLE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQ7QUFDQTRJLFlBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjO0FBQUVRLFdBQUcsRUFBRUgsVUFBUDtBQUFBO0FBQWRMO0FBQWMsT0FBZEE7QUFDQSxhQUFPOUksTUFBTSxHQUFJQyxRQUFRLG1CQUFaLFdBQWI7QUFIRixXQUlPO0FBQ0wsYUFBUSxJQUFHc0osV0FBVyxTQUF0QjtBQUVIO0FBVHdCTixVQUEzQixFQUEyQkEsQ0FBM0IsQ0FQQSxDQW1CQTtBQUNBOztBQUNBLFlBQW1DO0FBQ2pDLFFBQUlPLGdCQUFnQixHQUFwQjtBQUNBLFFBQUlDLGtCQUFrQixHQUF0QixFQUZpQyxDQUlqQzs7QUFDQSxVQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixVQUFJQyxRQUFRLEdBQVo7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsb0JBQXdDQSxDQUF4QyxJQUE2QztBQUMzQ0QsZ0JBQVEsSUFBSTdCLE1BQU0sQ0FBTkEsYUFBWjZCLGdCQUFZN0IsQ0FBWjZCO0FBQ0FILHdCQUFnQjs7QUFFaEIsWUFBSUEsZ0JBQWdCLEdBQXBCLEtBQTRCO0FBQzFCQyw0QkFBa0I7QUFDbEJELDBCQUFnQixHQUFoQkE7QUFFSDtBQUNEOztBQUFBO0FBWkY7O0FBZUEsVUFBTUssU0FBc0MsR0FBNUM7QUFFQSxRQUFJQyx1QkFBdUIsR0FBR2IsUUFBUSxDQUFSQSxJQUN0Qi9JLE9BQUQsSUFBYTtBQUNoQixVQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsY0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTRCbUosY0FBYyxDQUFDbkosT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRCxDQURvRCxDQUVwRDtBQUNBOztBQUNBLFlBQUk2SixVQUFVLEdBQUcvVCxHQUFHLENBQUhBLGVBQWpCLEVBQWlCQSxDQUFqQjtBQUNBLFlBQUlnVSxVQUFVLEdBQWQsTUFMb0QsQ0FPcEQ7QUFDQTs7QUFDQSxZQUFJRCxVQUFVLENBQVZBLGdCQUEyQkEsVUFBVSxDQUFWQSxTQUEvQixJQUF1RDtBQUNyREMsb0JBQVUsR0FBVkE7QUFFRjs7QUFBQSxZQUFJLENBQUMzQixLQUFLLENBQUM0QixRQUFRLENBQUNGLFVBQVUsQ0FBVkEsVUFBcEIsQ0FBb0JBLENBQUQsQ0FBVCxDQUFWLEVBQStDO0FBQzdDQyxvQkFBVSxHQUFWQTtBQUdGOztBQUFBLHdCQUFnQjtBQUNkRCxvQkFBVSxHQUFHTCxlQUFiSztBQUdGRjs7QUFBQUEsaUJBQVMsQ0FBVEEsVUFBUyxDQUFUQTtBQUNBLGVBQU83SixNQUFNLEdBQ1RDLFFBQVEsR0FDTCxVQUFTOEosVUFESixZQUVMLE9BQU1BLFVBSEEsVUFJUixPQUFNQSxVQUpYO0FBckJGLGFBMEJPO0FBQ0wsZUFBUSxJQUFHUixXQUFXLFNBQXRCO0FBRUg7QUEvQjJCTixZQUE5QixFQUE4QkEsQ0FBOUI7QUFrQ0EsV0FBTztBQUNMUixRQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBQTtBQUFBO0FBSUxjLGdCQUFVLEVBQUcsSUFBR0osdUJBSmxCO0FBQU8sS0FBUDtBQVFGOztBQUFBLFNBQU87QUFDTHJCLE1BQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRDtBQTRRQTtBQUNBO0FBQ0E7OztBQUNPLHNCQUVGO0FBQ0gsTUFBSWUsSUFBSSxHQUFSO0FBQ0E7QUFFQSxTQUFRLENBQUMsR0FBRCxTQUFvQjtBQUMxQixRQUFJLENBQUosTUFBVztBQUNUQSxVQUFJLEdBQUpBO0FBQ0E1ZSxZQUFNLEdBQUdvUSxFQUFFLENBQUMsR0FBWnBRLElBQVcsQ0FBWEE7QUFFRjs7QUFBQTtBQUxGO0FBU0s7O0FBQUEsNkJBQTZCO0FBQ2xDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUErQm1PLE1BQU0sQ0FBM0M7QUFDQSxTQUFRLEdBQUVnTyxRQUFTLEtBQUlHLFFBQVMsR0FBRXVDLElBQUksR0FBRyxNQUFILE9BQWdCLEVBQXREO0FBR0s7O0FBQUEsa0JBQWtCO0FBQ3ZCLFFBQU07QUFBQTtBQUFBLE1BQVcxUSxNQUFNLENBQXZCO0FBQ0EsUUFBTXNILE1BQU0sR0FBR3FKLGlCQUFmO0FBQ0EsU0FBTzdVLElBQUksQ0FBSkEsVUFBZXdMLE1BQU0sQ0FBNUIsTUFBT3hMLENBQVA7QUFHSzs7QUFBQSxtQ0FBd0Q7QUFDN0QsU0FBTyw0Q0FFSHVPLFNBQVMsQ0FBVEEsZUFBeUJBLFNBQVMsQ0FBbENBLFFBRko7QUFLSzs7QUFBQSx3QkFBd0M7QUFDN0MsU0FBT2xLLEdBQUcsQ0FBSEEsWUFBZ0JBLEdBQUcsQ0FBMUI7QUFHSzs7QUFBQSw2Q0FJa0Q7QUFDdkQsWUFBMkM7QUFBQTs7QUFDekMsMEJBQUl5USxHQUFHLENBQVAsc0JBQUlBLGVBQUosaUJBQW9DO0FBQ2xDLFlBQU1waEIsT0FBTyxHQUFJLElBQUdxaEIsY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNMVEsR0FBRyxHQUFHeU4sR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDZ0QsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJaEQsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMa0QsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ25ELEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNcmdCLEtBQUssR0FBRyxNQUFNcWpCLEdBQUcsQ0FBSEEsZ0JBQXBCLEdBQW9CQSxDQUFwQjs7QUFFQSxNQUFJelEsR0FBRyxJQUFJNlEsU0FBUyxDQUFwQixHQUFvQixDQUFwQixFQUEyQjtBQUN6QjtBQUdGOztBQUFBLE1BQUksQ0FBSixPQUFZO0FBQ1YsVUFBTXhoQixPQUFPLEdBQUksSUFBR3FoQixjQUFjLEtBRWhDLCtEQUE4RHRqQixLQUZoRTtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJb1AsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQ2lSLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0M5YixhQUFPLENBQVBBLEtBQ0csR0FBRStlLGNBQWMsS0FEbkIvZTtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNbWYsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUlwWixHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDOEUsWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJMlUsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckNuZixpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRHdLLEdBRHZEeEs7QUFJSDtBQU5ENks7QUFRSDtBQUVEOztBQUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTXVVLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNdkcsRUFBRSxHQUNidUcsRUFBRSxJQUNGLE9BQU90RyxXQUFXLENBQWxCLFNBREFzRyxjQUVBLE9BQU90RyxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUMzWU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXVHLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQUs7QUFBQ3hqQjtBQUFELE1BQVlGLHdEQUFVLENBQUNMLDJFQUFELENBQTNCO0FBQ0EsUUFBTWdDLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFHRSxTQUNFMUIsT0FBTyxJQUFJLElBQVgsZ0JBQ0Y7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFFLE1BQUt5QixNQUFNLENBQUNvQyxPQUFQLENBQWUsU0FBZixDQUFuQjtBQUE4QyxtQkFBUyxFQUFDLHFCQUF4RDtBQUFBLHFCQUNPNGYsZ0RBQUcsRUFEVixlQUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQUssaUJBQU8sRUFBRSxNQUFLaGlCLE1BQU0sQ0FBQ29DLE9BQVAsQ0FBZSxTQUFmLENBQW5CO0FBQThDLG1CQUFTLEVBQUMscUJBQXhEO0FBQUEscUJBQ082ZixvREFBTyxFQURkLGVBRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBU0k7QUFBSyxpQkFBTyxFQUFFLE1BQUtqaUIsTUFBTSxDQUFDb0MsT0FBUCxDQUFlLGFBQWYsQ0FBbkI7QUFBa0QsbUJBQVMsRUFBQyxxQkFBNUQ7QUFBQSxxQkFDT3lFLHdEQUFXLEVBRGxCLGVBRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREUsZ0JBa0JPLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQlQ7QUFxQkUsQ0ExQk47O0FBNEJla2Isd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENPLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ3JCLHNCQUFRO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFBaUIsYUFBUyxFQUFDLEtBQTNCO0FBQWlDLFVBQU0sRUFBQyxLQUF4QztBQUE4QyxXQUFPLEVBQUMsYUFBdEQ7QUFBb0UsUUFBSSxFQUFDLE1BQXpFO0FBQWdGLFNBQUssRUFBQyw0QkFBdEY7QUFBQSw0QkFDUjtBQUFNLE9BQUMsRUFBQyw4MklBQVI7QUFBdTNJLFVBQUksRUFBQztBQUE1M0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUVSO0FBQU0sT0FBQyxFQUFDLG1OQUFSO0FBQTROLFVBQUksRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZRLGVBR1I7QUFBTSxPQUFDLEVBQUMscTlCQUFSO0FBQTg5QixVQUFJLEVBQUM7QUFBbitCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSFEsZUFJUjtBQUFNLE9BQUMsRUFBQyx3bEJBQVI7QUFBaW1CLFVBQUksRUFBQztBQUF0bUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUSxlQUtSO0FBQU0sT0FBQyxFQUFDLDJ1Q0FBUjtBQUFvdkMsVUFBSSxFQUFDO0FBQXp2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxRLGVBTVI7QUFBTSxPQUFDLEVBQUMsNk1BQVI7QUFBc04sVUFBSSxFQUFDO0FBQTNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTlEsZUFPUjtBQUFNLE9BQUMsRUFBQywyOUJBQVI7QUFBbytCLFVBQUksRUFBQztBQUF6K0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQUSxlQVFSO0FBQU0sT0FBQyxFQUFDLG1OQUFSO0FBQTROLFVBQUksRUFBQztBQUFqTztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJRLGVBU1I7QUFBTSxPQUFDLEVBQUMsczlCQUFSO0FBQSs5QixVQUFJLEVBQUM7QUFBcCtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVFEsZUFVUjtBQUFNLE9BQUMsRUFBQyxtSEFBUjtBQUE0SCxZQUFNLEVBQUMsU0FBbkk7QUFBNkksaUJBQVcsRUFBQyxHQUF6SjtBQUE2SixzQkFBZ0IsRUFBQztBQUE5SztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZRLGVBV1I7QUFBTSxPQUFDLEVBQUMsMkRBQVI7QUFBb0UsVUFBSSxFQUFDLE9BQXpFO0FBQWlGLFlBQU0sRUFBQyxTQUF4RjtBQUFrRyxzQkFBZ0IsRUFBQztBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhRLGVBWVI7QUFBTSxPQUFDLEVBQUMsbUhBQVI7QUFBNEgsWUFBTSxFQUFDLFNBQW5JO0FBQTZJLGlCQUFXLEVBQUMsR0FBeko7QUFBNkosc0JBQWdCLEVBQUM7QUFBOUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaUSxlQWFSO0FBQU0sT0FBQyxFQUFDLDJEQUFSO0FBQW9FLFVBQUksRUFBQyxPQUF6RTtBQUFpRixZQUFNLEVBQUMsU0FBeEY7QUFBa0csc0JBQWdCLEVBQUM7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiUSxlQWNSO0FBQU0sT0FBQyxFQUFDLHdCQUFSO0FBQWlDLFlBQU0sRUFBQyxTQUF4QztBQUFrRCxpQkFBVyxFQUFDLEdBQTlEO0FBQWtFLHNCQUFnQixFQUFDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZFEsZUFlUjtBQUFNLE9BQUMsRUFBQywrTUFBUjtBQUF3TixVQUFJLEVBQUMsU0FBN047QUFBdU8sWUFBTSxFQUFDLE9BQTlPO0FBQXNQLHNCQUFnQixFQUFDO0FBQXZRO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZlEsZUFnQlI7QUFBTSxPQUFDLEVBQUMsbU5BQVI7QUFBNE4sVUFBSSxFQUFDLFNBQWpPO0FBQTJPLFlBQU0sRUFBQyxPQUFsUDtBQUEwUCxzQkFBZ0IsRUFBQztBQUEzUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCUSxlQWlCUjtBQUFNLE9BQUMsRUFBQyxpTkFBUjtBQUEwTixVQUFJLEVBQUMsU0FBL047QUFBeU8sWUFBTSxFQUFDLE9BQWhQO0FBQXdQLHNCQUFnQixFQUFDO0FBQXpRO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBb0JILENBckJNO0FBdUJBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3pCLHNCQUFRO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFBaUIsYUFBUyxFQUFDLFNBQTNCO0FBQXFDLFVBQU0sRUFBQyxLQUE1QztBQUFrRCxXQUFPLEVBQUMsYUFBMUQ7QUFBd0UsUUFBSSxFQUFDLE1BQTdFO0FBQW9GLFNBQUssRUFBQyw0QkFBMUY7QUFBQSwyQkFDUjtBQUFNLE9BQUMsRUFBQyxpeUJBQVI7QUFBMHlCLFVBQUksRUFBQztBQUEveUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUtILENBTk07QUFRQSxNQUFNcGIsV0FBVyxHQUFHLE1BQU07QUFDN0Isc0JBQVE7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFpQixhQUFTLEVBQUMsYUFBM0I7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQXNELFdBQU8sRUFBQyxhQUE5RDtBQUE0RSxRQUFJLEVBQUMsTUFBakY7QUFBd0YsU0FBSyxFQUFDLDRCQUE5RjtBQUFBLDJCQUNSO0FBQU0sT0FBQyxFQUFDLGttQkFBUjtBQUEybUIsVUFBSSxFQUFDO0FBQWhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBSUgsQ0FMTTtBQU9BLE1BQU1xYixNQUFNLEdBQUcsTUFBTTtBQUN4QixzQkFBUTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFvQyxVQUFNLEVBQUMsS0FBM0M7QUFBaUQsV0FBTyxFQUFDLGFBQXpEO0FBQXVFLFFBQUksRUFBQyxNQUE1RTtBQUFtRixTQUFLLEVBQUMsNEJBQXpGO0FBQUEsNEJBQ1I7QUFBUSxRQUFFLEVBQUMsS0FBWDtBQUFpQixRQUFFLEVBQUMsS0FBcEI7QUFBMEIsT0FBQyxFQUFDLEtBQTVCO0FBQWtDLFVBQUksRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLGVBRVI7QUFBTSxjQUFRLEVBQUMsU0FBZjtBQUF5QixjQUFRLEVBQUMsU0FBbEM7QUFBNEMsT0FBQyxFQUFDLHNWQUE5QztBQUFxWSxVQUFJLEVBQUM7QUFBMVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUSxlQUdSO0FBQVEsUUFBRSxFQUFDLFFBQVg7QUFBb0IsUUFBRSxFQUFDLFNBQXZCO0FBQWlDLE9BQUMsRUFBQyxTQUFuQztBQUE2QyxVQUFJLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQVFILENBVE07QUFVQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUN4QixzQkFBUTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFvQyxVQUFNLEVBQUMsS0FBM0M7QUFBaUQsV0FBTyxFQUFDLGFBQXpEO0FBQXVFLFFBQUksRUFBQyxNQUE1RTtBQUFtRixTQUFLLEVBQUMsNEJBQXpGO0FBQUEsNEJBQ1I7QUFBUSxRQUFFLEVBQUMsS0FBWDtBQUFpQixRQUFFLEVBQUMsS0FBcEI7QUFBMEIsT0FBQyxFQUFDLEtBQTVCO0FBQWtDLFVBQUksRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLGVBRVI7QUFBTSxjQUFRLEVBQUMsU0FBZjtBQUF5QixjQUFRLEVBQUMsU0FBbEM7QUFBNEMsT0FBQyxFQUFDLGtIQUE5QztBQUFpSyxVQUFJLEVBQUM7QUFBdEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUtILENBTk07QUFPQSxNQUFNeFgsT0FBTyxHQUFHLE1BQU07QUFDekIsc0JBQVE7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDLFdBQXBDO0FBQWdELFFBQUksRUFBQyxNQUFyRDtBQUE0RCxTQUFLLEVBQUMsNEJBQWxFO0FBQUEsMkJBQ1I7QUFBTSxPQUFDLEVBQUMsb3JEQUFSO0FBQTZyRCxVQUFJLEVBQUMsU0FBbHNEO0FBQTRzRCxZQUFNLEVBQUMsT0FBbnREO0FBQTJ0RCxpQkFBVyxFQUFDO0FBQXZ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBSUgsQ0FMTTtBQU1BLE1BQU12SyxPQUFPLEdBQUcsTUFBTTtBQUN6QixzQkFBUTtBQUFLLFNBQUssRUFBQyxJQUFYO0FBQWdCLFVBQU0sRUFBQyxJQUF2QjtBQUE0QixXQUFPLEVBQUMsV0FBcEM7QUFBZ0QsUUFBSSxFQUFDLE1BQXJEO0FBQTRELFNBQUssRUFBQyw0QkFBbEU7QUFBQSwyQkFDUjtBQUFNLE9BQUMsRUFBQyx3bURBQVI7QUFBaW5ELFVBQUksRUFBQztBQUF0bkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUlILENBTE07QUFPQSxNQUFNeUssT0FBTyxHQUFHLE1BQU07QUFDekIsc0JBQVE7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDLFdBQXBDO0FBQWdELFFBQUksRUFBQyxNQUFyRDtBQUE0RCxTQUFLLEVBQUMsNEJBQWxFO0FBQUEsMkJBQ1I7QUFBTSxPQUFDLEVBQUMseTVDQUFSO0FBQWs2QyxVQUFJLEVBQUM7QUFBdjZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFJSCxDQUxNO0FBTUEsTUFBTXVYLFNBQVMsR0FBRyxNQUFNO0FBQzNCLHNCQUFRO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxXQUFwQztBQUFnRCxRQUFJLEVBQUMsTUFBckQ7QUFBNEQsU0FBSyxFQUFDLDRCQUFsRTtBQUFBLDJCQUNSO0FBQU0sT0FBQyxFQUFDLDhzQkFBUjtBQUF1dEIsVUFBSSxFQUFDO0FBQTV0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBSUgsQ0FMTTtBQU1BLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ3ZCLHNCQUFRO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxXQUFwQztBQUFnRCxRQUFJLEVBQUMsTUFBckQ7QUFBNEQsU0FBSyxFQUFDLDRCQUFsRTtBQUFBLDRCQUNSO0FBQVEsUUFBRSxFQUFDLElBQVg7QUFBZ0IsUUFBRSxFQUFDLElBQW5CO0FBQXdCLE9BQUMsRUFBQyxJQUExQjtBQUErQixVQUFJLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUVSO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsY0FBUSxFQUFDLFNBQWxDO0FBQTRDLE9BQUMsRUFBQyxpaEJBQTlDO0FBQWdrQixVQUFJLEVBQUM7QUFBcmtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFLSCxDQU5NO0FBUUEsTUFBTWpXLE1BQU0sR0FBRyxNQUFNO0FBQ3hCLHNCQUFRO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFDLEtBQTlCO0FBQW9DLFVBQU0sRUFBQyxLQUEzQztBQUFpRCxXQUFPLEVBQUMsYUFBekQ7QUFBdUUsUUFBSSxFQUFDLE1BQTVFO0FBQW1GLFNBQUssRUFBQyw0QkFBekY7QUFBQSw0QkFDUjtBQUFNLE9BQUMsRUFBQyxtTkFBUjtBQUE0TixVQUFJLEVBQUM7QUFBak87QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUSxlQUVSO0FBQU0sT0FBQyxFQUFDLHFWQUFSO0FBQThWLFVBQUksRUFBQztBQUFuVztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZRLGVBR1I7QUFBTSxPQUFDLEVBQUMsNk1BQVI7QUFBc04sVUFBSSxFQUFDO0FBQTNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSFEsZUFJUjtBQUFNLE9BQUMsRUFBQywyYUFBUjtBQUFvYixVQUFJLEVBQUM7QUFBemI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQU9ILENBUk07QUFVQSxNQUFNa1csSUFBSSxHQUFHLE1BQU07QUFDdEIsc0JBQVE7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDLFdBQXBDO0FBQWdELFFBQUksRUFBQyxNQUFyRDtBQUE0RCxTQUFLLEVBQUMsNEJBQWxFO0FBQUEsMkJBQ1I7QUFBTSxPQUFDLEVBQUMsOGNBQVI7QUFBdWQsVUFBSSxFQUFDO0FBQTVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFJSCxDQUxNO0FBT0EsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDeEIsc0JBQVE7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUMsS0FBOUI7QUFBb0MsVUFBTSxFQUFDLEtBQTNDO0FBQWlELFdBQU8sRUFBQyxhQUF6RDtBQUF1RSxRQUFJLEVBQUMsTUFBNUU7QUFBbUYsU0FBSyxFQUFDLDRCQUF6RjtBQUFBLDRCQUNSO0FBQU0sT0FBQyxFQUFDLHFNQUFSO0FBQThNLFVBQUksRUFBQztBQUFuTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLGVBRVI7QUFBTSxPQUFDLEVBQUMsbU9BQVI7QUFBNE8sVUFBSSxFQUFDLE9BQWpQO0FBQXlQLGlCQUFXLEVBQUM7QUFBclE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUSxlQUdSO0FBQU0sT0FBQyxFQUFDLG1SQUFSO0FBQTRSLFVBQUksRUFBQztBQUFqUztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhRLGVBSVI7QUFBTSxPQUFDLEVBQUMsMk5BQVI7QUFBb08sVUFBSSxFQUFDLE9BQXpPO0FBQWlQLGlCQUFXLEVBQUM7QUFBN1A7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUSxlQUtSO0FBQU0sT0FBQyxFQUFDLDhSQUFSO0FBQXVTLFVBQUksRUFBQyxPQUE1UztBQUFvVCxpQkFBVyxFQUFDO0FBQWhVO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTFEsZUFNUjtBQUFNLE9BQUMsRUFBQyw4TUFBUjtBQUF1TixVQUFJLEVBQUMsT0FBNU47QUFBb08saUJBQVcsRUFBQztBQUFoUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5RLGVBT1I7QUFBTSxPQUFDLEVBQUMsd1JBQVI7QUFBaVMsVUFBSSxFQUFDLE9BQXRTO0FBQThTLGlCQUFXLEVBQUM7QUFBMVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQVVILENBWE07QUFhQSxNQUFNcFcsV0FBVyxHQUFHLE1BQU07QUFDN0Isc0JBQVE7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixhQUFTLEVBQUMsYUFBMUI7QUFBd0MsVUFBTSxFQUFDLElBQS9DO0FBQW9ELFdBQU8sRUFBQyxXQUE1RDtBQUF3RSxRQUFJLEVBQUMsTUFBN0U7QUFBb0YsU0FBSyxFQUFDLDRCQUExRjtBQUFBLDJCQUNSO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsY0FBUSxFQUFDLFNBQWxDO0FBQTRDLE9BQUMsRUFBQyx5UUFBOUM7QUFBd1QsVUFBSSxFQUFDO0FBQTdUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFJSCxDQUxNO0FBT0EsTUFBTXFXLE1BQU0sR0FBRyxNQUFNO0FBQ3hCLHNCQUFRO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQWdDLFNBQUssRUFBQyxLQUF0QztBQUE0QyxVQUFNLEVBQUMsS0FBbkQ7QUFBeUQsV0FBTyxFQUFDLGFBQWpFO0FBQStFLFFBQUksRUFBQyxNQUFwRjtBQUEyRixTQUFLLEVBQUMsNEJBQWpHO0FBQUEsMkJBQ1I7QUFBTSxPQUFDLEVBQUMsd2NBQVI7QUFBaWQsVUFBSSxFQUFDO0FBQXRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFJSCxDQUxNO0FBT0EsTUFBTTFYLE9BQU8sR0FBRyxNQUFNO0FBQ3pCLHNCQUFRO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLGFBQVMsRUFBQyxVQUF0QztBQUFpRCxXQUFPLEVBQUMsYUFBekQ7QUFBdUUsUUFBSSxFQUFDLE1BQTVFO0FBQW1GLFNBQUssRUFBQyw0QkFBekY7QUFBQSw0QkFDQTtBQUFHLGNBQVEsRUFBQyxhQUFaO0FBQUEsOEJBQ0E7QUFBTSxTQUFDLEVBQUMsNmpFQUFSO0FBQXNrRSxZQUFJLEVBQUM7QUFBM2tFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFNLFNBQUMsRUFBQywwc0lBQVI7QUFBbXRJLFlBQUksRUFBQztBQUF4dEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUdBO0FBQU0sU0FBQyxFQUFDLDJLQUFSO0FBQW9MLFlBQUksRUFBQztBQUF6TDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBSUE7QUFBTSxTQUFDLEVBQUMsdTdCQUFSO0FBQWc4QixZQUFJLEVBQUM7QUFBcjhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkEsZUFLQTtBQUFNLFNBQUMsRUFBQywyaUJBQVI7QUFBb2pCLFlBQUksRUFBQztBQUF6akI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMQSxlQU1BO0FBQU0sU0FBQyxFQUFDLDZxQ0FBUjtBQUFzckMsWUFBSSxFQUFDO0FBQTNyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5BLGVBT0E7QUFBTSxTQUFDLEVBQUMsd0xBQVI7QUFBaU0sWUFBSSxFQUFDO0FBQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEEsZUFRQTtBQUFNLFNBQUMsRUFBQyxnOEJBQVI7QUFBeThCLFlBQUksRUFBQztBQUE5OEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQSxlQVNBO0FBQU0sU0FBQyxFQUFDLHdMQUFSO0FBQWlNLFlBQUksRUFBQztBQUF0TTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRBLGVBVUE7QUFBTSxTQUFDLEVBQUMsZzhCQUFSO0FBQXk4QixZQUFJLEVBQUM7QUFBOThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkEsZUFXQTtBQUFNLFNBQUMsRUFBQywyRkFBUjtBQUFvRyxZQUFJLEVBQUMsT0FBekc7QUFBaUgsY0FBTSxFQUFDLE9BQXhIO0FBQWdJLHdCQUFnQixFQUFDO0FBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEEsZUFZQTtBQUFNLFNBQUMsRUFBQyxrQ0FBUjtBQUEyQyxjQUFNLEVBQUMsT0FBbEQ7QUFBMEQsd0JBQWdCLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaQSxlQWFBO0FBQU0sU0FBQyxFQUFDLHdHQUFSO0FBQWlILFlBQUksRUFBQyxPQUF0SDtBQUE4SCxjQUFNLEVBQUMsT0FBckk7QUFBNkksd0JBQWdCLEVBQUM7QUFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiQSxlQWNBO0FBQU0sU0FBQyxFQUFDLHNCQUFSO0FBQStCLGNBQU0sRUFBQyxPQUF0QztBQUE4QyxtQkFBVyxFQUFDLEdBQTFEO0FBQThELHdCQUFnQixFQUFDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEEsZUFlQTtBQUFNLFNBQUMsRUFBQyx3TEFBUjtBQUFpTSxZQUFJLEVBQUMsT0FBdE07QUFBOE0sY0FBTSxFQUFDLE9BQXJOO0FBQTZOLHdCQUFnQixFQUFDO0FBQTlPO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkEsZUFnQkE7QUFBTSxTQUFDLEVBQUMsK0tBQVI7QUFBd0wsWUFBSSxFQUFDLE9BQTdMO0FBQXFNLGNBQU0sRUFBQyxPQUE1TTtBQUFvTix3QkFBZ0IsRUFBQztBQUFyTztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCQSxlQWlCQTtBQUFNLFNBQUMsRUFBQyx3TEFBUjtBQUFpTSxZQUFJLEVBQUMsT0FBdE07QUFBOE0sY0FBTSxFQUFDLE9BQXJOO0FBQTZOLHdCQUFnQixFQUFDO0FBQTlPO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQW9CQTtBQUFBLDZCQUNBO0FBQVUsVUFBRSxFQUFDLE9BQWI7QUFBQSwrQkFDQTtBQUFNLGVBQUssRUFBQyxRQUFaO0FBQXFCLGdCQUFNLEVBQUMsUUFBNUI7QUFBcUMsY0FBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUE0QkgsQ0E3Qk0sQzs7Ozs7Ozs7Ozs7QUNwSVAseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoLCBkYXRhYmFzZSwgcHJvdmlkZXIsIGZ1bmN0aW9ucyB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3NldFRyYW5zYWN0aW9ufSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQWRtaW4sIHNldGlzQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdXNlckVycm9yLCBzZXRVc2VyRXJyb3JdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzaWdudXAsIHNldFNpZ251cF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc2V0UGFzc3dvcmQsIHNldFJlc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFthdXRoZW50aWNhdGluZywgc2V0QXV0aGVudGljYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICB0b2tlbjogJycsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICByb2xlOiAnJyxcclxuICAgICAgICAgICAgX2lkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgICAgIHVzZXIgPT0gbnVsbCA/IHNldGlzTG9naW4oZmFsc2UpIDogc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICB1c2VyLmdldElkVG9rZW5SZXN1bHQoKS50aGVuKGlkVG9rZW5SZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW5SZXN1bHQuY2xhaW1zLmFkbWluID09IHRydWUgPyBzZXRpc0FkbWluKHRydWUpIDogc2V0aXNBZG1pbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgbmV3TG9naW4gPSB7Li4ubG9naW4sIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWdudXBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybUVycm9ycyB9ID0gey4uLnNpZ251cCB9XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2luZ3VwVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgbGV0IG5ld1NpZ251cCA9IHsuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIHJldHVybiBzZXRTaWdudXAobmV3U2lnbnVwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ251cFN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkIH0gPSBzaWdudXA7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluU2lnblVwID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHBhc3N3b3JkIH0gPSBzaWdudXA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEFkbWluUm9sZSA9IGZ1bmN0aW9ucy5odHRwc0NhbGxhYmxlKCdhZGRBZG1pblJvbGUnKVxyXG4gICAgICAgIGFkZEFkbWluUm9sZSh7IGVtYWlsIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25vdXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VHJhbnNhY3Rpb24oW10pO1xyXG4gICAgICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhc3N3b3JkUmVzZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgICAgICBhdXRoLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpLnRoZW4oKCkgPT4ge30pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgeyBmb3JtRXJyb3JzIH0gPSByZXNldFBhc3N3b3JkO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSBSZWdFeHAoL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcbiAgICAgICAgZm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnIDogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuICAgICAgICBzZXRSZXNldFBhc3N3b3JkKHsuLi5yZXNldFBhc3N3b3JkLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNvY2lhbExvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBwcm92aWRlci5hZGRTY29wZSgncHJvZmlsZScpO1xyXG4gICAgICAgIHByb3ZpZGVyLmFkZFNjb3BlKCdlbWFpbCcpOyBcclxuICAgICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgICAgICAgdmFyIHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZSA9IGRhdGFbMV07XHJcbiAgICAgICAgICAgIGxldCBlbWFpbCA9IHJlc3VsdC51c2VyLmVtYWlsO1xyXG4gICAgICAgICAgICB1c2VyICYmICh1c2VyLnVpZCAmJiBzZXRMb2dpbih0cnVlKSk7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKHJlc3VsdC51c2VyLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgICAgICAgIC8vIFRoZSBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cclxuICAgICAgICAgICAgdmFyIGNyZWRlbnRpYWwgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBsb2dpbjtcclxuICAgICAgICBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHVzZXIudWlkICYmIHNldExvZ2luKHRydWUpKTtcclxuICAgICAgICAgICAgdXNlciAmJiAodXNlci51aWQgJiYgcm91dGVyLnJlcGxhY2UoJ2Rhc2hib2FyZCcpKTtcclxuICAgICAgICAgICAgdXNlciAmJiAodXNlci51aWQgJiYgc2V0QXV0aGVudGljYXRpbmcoZmFsc2UpKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cclxuICAgICAgICAgICAgc2V0VXNlckVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAgICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkbWluTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRpc0FkbWluKHRydWUpO1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnY29udGFjdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPCBBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7dXNlckVycm9yLCBhdXRoZW50aWNhdGluZywgc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW4sIHBhc3N3b3JkUmVzZXQsIHJlc2V0UGFzc3dvcmQsIGhhbmRsZVBhc3N3b3JkQ2hhbmdlLCBsb2dpbiwgc2lnbnVwLCBpc0xvZ2luLCBpc0FkbWluLCBzZXRpc0xvZ2luLCBoYW5kbGVMb2dpbkNoYW5nZSwgaGFuZGxlU29jaWFsTG9naW4sIGhhbmRsZVNpZ251cENoYW5nZSwgaGFuZGxlQWRtaW5TaWduVXAsIGhhbmRsZVNpZ25vdXQsIGhhbmRsZVNpZ251cFN1Ym1pdCwgaGFuZGxlTG9naW5TdWJtaXQgfX0gPlxyXG4gICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9IFxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3QgfSBmcm9tIFwiLi4vLi4vc3ZnXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgc3RvcmUsIGRhdGFiYXNlLCB0aW1lc3RhbXAgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGNhcnRvbnM6IFwiXCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1zV29ydGg6IFwiXCIsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlczogW10sXHJcbiAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgdGFnTmFtZTogXCJcIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyYW5zYWN0aW9uSW5zdCwgc2V0VHJhbnNhY3Rpb25JbnN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FsbGVyeUltYWdlLCBzZXRHYWxsZXJ5SW1hZ2VdPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgICAgIHVzZXIgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUmVxdWVzdHMnKVxyXG4gICAgICAgICAgICAgICAgLndoZXJlKCd1c2VySWQnLCAnPT0nLCB1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgdGFnTmFtZSwgY3JlYXRlZEF0LCBzdGF0dXMsIGFtb3VudCB9ID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gZG9jLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyB0YWdOYW1lLCBjcmVhdGVkQXQsIHN0YXR1cywgYW1vdW50LCBpZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0cmFuc2FjdGlvbkluc3QgIT09IHVuZGVmaW5lZCAmJiAoc2V0VHJhbnNhY3Rpb24oWy4uLnRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbkluc3RdKSk7XHJcbiAgICB9LCBbdHJhbnNhY3Rpb25JbnN0XSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgaWQgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7IGZvcm1FcnJvcnMgfSA9IHsuLi5pbnB1dCB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgY2hlY2tlZCB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZCB9O1xyXG4gICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb2dyZXNzID09IDEwMCAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQcm9ncmVzcygwKTtcclxuICAgIH0sIFtwcm9ncmVzc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHJlZmV0Y2goJy90cmFuc2FjdGlvbicpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICB1c2VyICE9PSBudWxsICYmIHNldFVzZXJJZCh1c2VyLnVpZClcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgdXNlciAhPT0gbnVsbCAmJiAoc3RvcmUucmVmKCkuY2hpbGQoJy9yZXF1ZXN0SW1hZ2VzJykubGlzdEFsbCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGltYWdlUmVmKXtcclxuICAgICAgICAgICAgICAgICAgIGdldEltYWdlVXJsKCBpbWFnZVJlZilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGltZyA9IFtdO1xyXG4gICAgICAgICBjb25zdCBnZXRJbWFnZVVybCA9ICggaW1hZ2VzKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VzLmdldERvd25sb2FkVVJMKCkudGhlbigodXJsKT0+e1xyXG4gICAgICAgICAgICBpbWcucHVzaCh1cmwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRHYWxsZXJ5SW1hZ2UoaW1nKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHBob3RvQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcykge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyAhPT0gMTAwICYmIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgICAgICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpIDogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICAgICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplID0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7XHJcbiAgICAgICAgICAgIGxldCByZXN0cnVjdHVyZVVybCA9IHsgaW1hZ2VTb3VyY2U6IHBlcmZlY3RTaXplIH1cclxuICAgICAgICAgICAgcGVyZmVjdFNpemUgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShbLi4udGVtcG9yYXJ5SW1hZ2UsIHJlc3RydWN0dXJlVXJsXSk7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGFzeW5jKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG91ZFVybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4ucmVxdWVzdEltYWdlcywgeyBjbG91ZFVybCB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjYXJ0b25zLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9ucyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoLFxyXG4gICAgICAgICAgICByZWNlaXZlckZpcnN0TmFtZSxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzLFxyXG4gICAgICAgICAgICBzZW5kZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMSxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zXHJcbiAgICAgICAgfSA9IGlucHV0O1xyXG5cclxuICAgICAgICBzZXRUcmFuc2FjdGlvbkluc3QoeyB0YWdOYW1lLCBzdGF0dXM6IFwicGVuZGluZ1wiLCBhbW91bnQ6IFwiXCIsIGlkOiBcImhrYWokNSVeZ3huKjhua1wiIH0pO1xyXG4gICAgICAgIHVzZXJJZCAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdSZXF1ZXN0cycpLmFkZCh7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICBjYXJ0b25zLFxyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpdGVtc1dvcnRoLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMSxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEltYWdlcyxcclxuICAgICAgICAgICAgICAgIHNlbmRlckZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMSxcclxuICAgICAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMixcclxuICAgICAgICAgICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICBvdGhlckl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogdGltZXN0YW1wKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiYgKHNldFJlcXVlc3RTdWNjZXNzKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0KGluaXRpYWxTdGF0ZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SW5wdXQoLi4uaW5wdXQsIHJlcXVlc3RJbWFnZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJbnB1dCh7Li4uaW5wdXQsIHJlcXVlc3RJbWFnZXMgfSk7XHJcbiAgICAgICAgc2V0Q291bnQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHsgY29udGVudDogXCJjb250YWN0XCIsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHsgY29udGVudDogXCJnYWxsZXJ5XCIsIGljb246IGdhbGxlcnkoKSwgdGl0bGU6IFwiR2FsbGVyeVwiLCBpZDogMiB9LFxyXG4gICAgICAgIHsgY29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzIH0sXHJcbiAgICAgICAgeyBjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDQgfVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8UmVxdWVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e2dhbGxlcnlJbWFnZSwgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbkluc3QsIGlucHV0LCBlcnJvciwgbG9hZGluZywgc2V0UmVxdWVzdEltYWdlcywgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbiB9IH0gPiBcclxuICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9IFxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0ICdmaXJlYmFzZS9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNfSU1LWGFOSkl3RWRBSlRRTkgybHRDUGNPTjlJNk9sZ1wiLFxyXG4gIGF1dGhEb21haW46IFwibWFuYWdlcmJyYW4tMmE2OTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tYW5hZ2VyYnJhbi0yYTY5OS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibWFuYWdlcmJyYW4tMmE2OTlcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIm1hbmFnZXJicmFuLTJhNjk5LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDc0OTgxMTcyNjQ1XCIsXHJcbiAgYXBwSWQ6IFwiMTo0NzQ5ODExNzI2NDU6d2ViOmZhOGRhOWYwOWYwYzM0NDU2MzE0NGNcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctMDU0R0VLQksySFwiXHJcbn07XHJcblxyXG4gIGNvbnN0IGZpcmViYXNlQXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOmZpcmViYXNlLmFwcCgpO1xyXG4gIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgaWYocHJvY2Vzcy5icm93c2VyKXtcclxuICAgIGRhdGFiYXNlLmVuYWJsZVBlcnNpc3RlbmNlKClcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgaWYgKGVyci5jb2RlID09ICdmYWlsZWQtcHJlY29uZGl0aW9uJykge1xyXG4gICAgICAgICAgICAgIC8vIE11bHRpcGxlIHRhYnMgb3BlbiwgcGVyc2lzdGVuY2UgY2FuIG9ubHkgYmUgZW5hYmxlZFxyXG4gICAgICAgICAgICAgIC8vIGluIG9uZSB0YWIgYXQgYSBhIHRpbWUuXHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLmNvZGUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSAndW5pbXBsZW1lbnRlZCcpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWxsIG9mIHRoZVxyXG4gICAgICAgICAgICAgIC8vIGZlYXR1cmVzIHJlcXVpcmVkIHRvIGVuYWJsZSBwZXJzaXN0ZW5jZVxyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgY29uc3Qgc3RvcmUgPSBmaXJlYmFzZUFwcC5zdG9yYWdlKCk7XHJcbiAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuICBjb25zdCB0aW1lc3RhbXAgPSBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXA7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBmdW5jdGlvbnMgPSBmaXJlYmFzZS5mdW5jdGlvbnMoKTtcclxuXHJcbiAgZXhwb3J0IHtzdG9yZSwgZGF0YWJhc2UsIGF1dGgsIHRpbWVzdGFtcCwgcHJvdmlkZXIsIGZ1bmN0aW9uc307ICBcclxuICIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgR29vZ2xlLCBpbm5lckxvYWRlciB9IGZyb20gJy4uLy4uL3N2Zyc7XHJcblxyXG5jb25zdCBVc2VyTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3VzZXJFcnJvciwgYXV0aGVudGljYXRpbmcsIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVMb2dpblN1Ym1pdCwgaGFuZGxlU29jaWFsTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmb3JtX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyYWxsLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZvcm1lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2luU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUxvZ2luQ2hhbmdlfSBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGxhc3QgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyRXJyb3IgIT09IHVuZGVmaW5lZCB8fCBhdXRoZW50aWNhdGluZyAhPT0gdHJ1ZSA/IDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsb2dpblwiLz46IDxidXR0b24gPjxzcGFuPmNvbm5lY3RpbmcuLi48L3NwYW4+PHNwYW4+e2lubmVyTG9hZGVyKCl9PC9zcGFuPjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckVycm9yICE9PSB1bmRlZmluZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e3VzZXJFcnJvcn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+b3Igc2lnbiBpbiB3aXRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU29jaWFsTG9naW59PjxzcGFuPntHb29nbGUoKX08L3NwYW4+PHNwYW4+R29vZ2xlPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tdGFnXCI+XHJcbiAgICAgICAgICAgICAgPGg1ID5Gb3Jnb3QgcGFzc3dvcmQ/PC9oNT48aDUgPjxMaW5rIGhyZWY9XCIvUmVzZXRQYXNzd29yZFwiPjxhPlJlc2V0IHBhc3N3b3JkPC9hPjwvTGluaz48L2g1PiBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDU+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvaDU+PGg1PjxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+U2lnbiB1cDwvYT48L0xpbms+PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbjsiLCJleHBvcnQgY29uc3QgZW1haWxSZWdleCA9IFJlZ0V4cCggL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyk7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwaG9uZU51bWJlclwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBob25lTnVtYmVyID0gdmFsdWUubGVuZ3RoIDwgMTEgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKmlucHV0IGEgdmFsaWQgcGhvbmUgbnVtYmVyKicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiYWRkcmVzc1wiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmFkZHJlc3MgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0XHJcblx0ICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFZhbGlkYXRlID0gKCBpZCwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblxyXG5cdHN3aXRjaCAoaWQpIHtcclxuXHRcdGNhc2UgXCJzZW5kZXJGaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXJGaXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZW5kZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXJQaG9uZU51bWJlcjEgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2VuZGVycGhvbmVOdW1iZXIyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuc2VuZGVyUGhvbmVOdW1iZXIyID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJlY2VpdmVyRmlyc3RuYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucmVjZWl2ZXJGaXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyUGhvbmVOdW1iZXIxID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJlY2VpdmVycGhvbmVOdW1iZXIyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucmVjZWl2ZXJQaG9uZU51bWJlcjIgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidGFnTmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnRhZ05hbWUgPSB2YWx1ZS5sZW5ndGggPCAyICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJDYXJ0b25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuY2FydG9ucyA9IHZhbHVlLmxlbmd0aCA8PSAwICA/ICcqaW5wdXQgbnVtYmVyIG9mIGl0ZW1zKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpdGVtc1dvcnRoXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuaXRlbXNXb3J0aCA9IHZhbHVlLmxlbmd0aCA8PSAwID8gJyppbnB1dCBpdGVtcyB3b3J0aConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVsaXZlcnlMb2NhdGlvblwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyppbnB1dCBhIHByb3BlciBzdGF0ZSonOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZGVzY3JpcHRpb25zXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZGVzY3JpcHRpb25zID0gdmFsdWUubGVuZ3RoIDwgMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmd1cFZhbGlkYXRlID0gKCBuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKG5hbWUpIHtcclxuXHRcdGNhc2UgXCJmaXJzdE5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPiAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJsYXN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmxhc3ROYW1lID0gdmFsdWUubGVuZ3RoID4gMyAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGhvbmVOdW1iZXJcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5waG9uZU51bWJlciA9IHZhbHVlLmxlbmd0aCA+IDEwICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIG51bWJlcionO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBhc3N3b3JkXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGFzc3dvcmQgPSB2YWx1ZS5sZW5ndGggPCA2ICAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJypwYXNzd29yZCBpcyB0b28gc2hvcnQqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcblxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVtdXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhc1BhdGgpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQge2JveCwgcHJvZmlsZSwgdHJhbnNhY3Rpb24gfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdHtpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTG9naW4gPT0gdHJ1ZSA/XHJcbiAgICg8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZF93cmFwcGVyXCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfaG9sZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3JlcXVlc3QnKX0gY2xhc3NOYW1lPVwiRGFzaGJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2JveCgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlNoaXAgTm93PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucmVwbGFjZSgncHJvZmlsZScpfSBjbGFzc05hbWU9XCJEYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZSgpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlByb2ZpbGU8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnJlcGxhY2UoJ3RyYW5zYWN0aW9uJyl9IGNsYXNzTmFtZT1cIkRhc2hib2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgPGgzPlRyYW5zYWN0aW9uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj4pIDogPFVzZXJMb2dpbiAvPlxyXG5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyIsImV4cG9ydCBjb25zdCBib3ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIyMDVcIiBjbGFzc05hbWU9XCJib3hcIiBoZWlnaHQ9XCIyMzFcIiB2aWV3Qm94PVwiMCAwIDIwNSAyMzFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTk5LjY0IDYzLjU4NDFWMTcxLjkzM0wxNzUuNDEgMTg1Ljg3NUMxNzcuMDMyIDE4NC4zOTggMTc4LjA4NCAxODIuNCAxNzguMzgzIDE4MC4yM0MxNzguNjgzIDE3OC4wNTkgMTc4LjIxMSAxNzUuODUyIDE3Ny4wNDkgMTczLjk5M0MxNzUuODg3IDE3Mi4xMzMgMTc0LjEwOSAxNzAuNzM4IDE3Mi4wMjQgMTcwLjA0OUMxNjkuOTM4IDE2OS4zNiAxNjcuNjc3IDE2OS40MjEgMTY1LjYzMiAxNzAuMjIyQzE2My41ODYgMTcxLjAyMiAxNjEuODg3IDE3Mi41MTIgMTYwLjgyOCAxNzQuNDMxQzE1OS43NjkgMTc2LjM1MSAxNTkuNDE4IDE3OC41OCAxNTkuODM1IDE4MC43MzFDMTYwLjI1MSAxODIuODgyIDE2MS40MSAxODQuODIgMTYzLjExIDE4Ni4yMDhDMTY0LjgxIDE4Ny41OTYgMTY2Ljk0NCAxODguMzQ3IDE2OS4xNDEgMTg4LjMyOUMxNzAuMDkyIDE4OC4zMzQgMTcxLjAzOCAxODguMTkyIDE3MS45NDYgMTg3LjkwN0wxNTMuMTM5IDE5OC44NDlDMTU0Ljk5MSAxOTcuMzc2IDE1Ni4yMTggMTk1LjI1OSAxNTYuNTc0IDE5Mi45MjNDMTU2LjkyOSAxOTAuNTg3IDE1Ni4zODcgMTg4LjIwMyAxNTUuMDU2IDE4Ni4yNDhDMTUzLjcyNiAxODQuMjkzIDE1MS43MDQgMTgyLjkxMSAxNDkuMzk1IDE4Mi4zNzlDMTQ3LjA4NyAxODEuODQ2IDE0NC42NjIgMTgyLjIwMyAxNDIuNjA1IDE4My4zNzZDMTQwLjU0OSAxODQuNTUgMTM5LjAxMyAxODYuNDU1IDEzOC4zMDQgMTg4LjcxQzEzNy41OTUgMTkwLjk2NCAxMzcuNzY1IDE5My40MDMgMTM4Ljc4MSAxOTUuNTM3QzEzOS43OTcgMTk3LjY3MiAxNDEuNTg0IDE5OS4zNDYgMTQzLjc4NCAyMDAuMjIzQzE0NS45ODQgMjAxLjEwMSAxNDguNDM1IDIwMS4xMTggMTUwLjY0NyAyMDAuMjcxTDEwMy4yNTIgMjI3LjQwNUw2Ljg2NDcxIDE3MS45MzNWNjQuNDQzOEw1MS41MTY1IDkwLjIwMjVMMTAxLjY2OSAxMTkuMTE5TDEwMy4yMzcgMTIwLjAyNUwxMDQuODA0IDExOS4xMDNMMTk5LjYwOSA2My41ODQxSDE5OS42NFpNMTM3LjM1NiAxNDEuNzM2QzEzOC40MTEgMTQxLjc0IDEzOS40NDUgMTQxLjQ0MSAxNDAuMzM0IDE0MC44NzZMMTcxLjk0NiAxMjAuNTU2QzE3Mi41NTcgMTIwLjE3IDE3My4wODYgMTE5LjY2NyAxNzMuNTAxIDExOS4wNzZDMTczLjkxNyAxMTguNDg2IDE3NC4yMTEgMTE3LjgxOSAxNzQuMzY3IDExNy4xMTRDMTc0LjUyMiAxMTYuNDEgMTc0LjUzNyAxMTUuNjgxIDE3NC40MDkgMTE0Ljk3MUMxNzQuMjgyIDExNC4yNjEgMTc0LjAxNSAxMTMuNTgzIDE3My42MjMgMTEyLjk3NkwxNzIuNDAxIDExMS4xNjNDMTcyLjAxMiAxMTAuNTU2IDE3MS41MDggMTEwLjAzMiAxNzAuOTE1IDEwOS42MjFDMTcwLjMyMyAxMDkuMjEgMTY5LjY1NSAxMDguOTIgMTY4Ljk1IDEwOC43NjhDMTY4LjI0NSAxMDguNjE1IDE2Ny41MTcgMTA4LjYwMyAxNjYuODA3IDEwOC43MzNDMTY2LjA5NyAxMDguODYyIDE2NS40MiAxMDkuMTMgMTY0LjgxNSAxMDkuNTIyTDEzMy4yMTkgMTI5LjczMUMxMzIuNjA4IDEzMC4xMjUgMTMyLjA4MyAxMzAuNjM2IDEzMS42NzMgMTMxLjIzNUMxMzEuMjYyIDEzMS44MzMgMTMwLjk3NiAxMzIuNTA3IDEzMC44MyAxMzMuMjE3QzEzMC42ODQgMTMzLjkyNyAxMzAuNjgyIDEzNC42NTkgMTMwLjgyMyAxMzUuMzcxQzEzMC45NjQgMTM2LjA4MiAxMzEuMjQ1IDEzNi43NTggMTMxLjY1MSAxMzcuMzU5TDEzMi44MjcgMTM5LjE4OEMxMzMuMzI1IDEzOS45NzkgMTM0LjAxOSAxNDAuNjI4IDEzNC44NDMgMTQxLjA3MkMxMzUuNjY3IDE0MS41MTUgMTM2LjU5MiAxNDEuNzM5IDEzNy41MjkgMTQxLjcyTDEzNy4zNTYgMTQxLjczNlpNMTg5LjU5NCAxNzUuNzk0QzE5MS40NTQgMTc1Ljc5NCAxOTMuMjcyIDE3NS4yNDQgMTk0LjgxOCAxNzQuMjEzQzE5Ni4zNjUgMTczLjE4MyAxOTcuNTcgMTcxLjcxOCAxOTguMjgyIDE3MC4wMDVDMTk4Ljk5MyAxNjguMjkxIDE5OS4xOCAxNjYuNDA1IDE5OC44MTcgMTY0LjU4NkMxOTguNDU0IDE2Mi43NjcgMTk3LjU1OCAxNjEuMDk2IDE5Ni4yNDMgMTU5Ljc4NEMxOTQuOTI4IDE1OC40NzMgMTkzLjI1MiAxNTcuNTggMTkxLjQyOCAxNTcuMjE4QzE4OS42MDQgMTU2Ljg1NiAxODcuNzEzIDE1Ny4wNDIgMTg1Ljk5NSAxNTcuNzUxQzE4NC4yNzcgMTU4LjQ2MSAxODIuODA4IDE1OS42NjMgMTgxLjc3NSAxNjEuMjA2QzE4MC43NDIgMTYyLjc0OCAxODAuMTkgMTY0LjU2MSAxODAuMTkgMTY2LjQxNkMxODAuMTkgMTY4LjkwMyAxODEuMTgxIDE3MS4yODggMTgyLjk0NCAxNzMuMDQ3QzE4NC43MDggMTc0LjgwNiAxODcuMSAxNzUuNzk0IDE4OS41OTQgMTc1Ljc5NFpNMjAyLjEzMiA1OC41NjY4TDEwMy4zOTMgMTE2LjM5OUw1My4wOTk0IDg3LjUyOTdMMy43OTI4NSA1OS4wNTEzVjE3My42NTNMMTAzLjMxNSAyMzAuOTUzTDIwMi44MzcgMTczLjY1M1Y1OS4wOTgyTDIwMS45OTEgNTguNjEzN0wyMDIuMTMyIDU4LjU2NjhaTTEzNy4zODggMTM4LjU5NEMxMzYuOTk5IDEzOC42IDEzNi42MTUgMTM4LjUwNyAxMzYuMjcyIDEzOC4zMjNDMTM1LjkyOSAxMzguMTQgMTM1LjYzOSAxMzcuODczIDEzNS40MjkgMTM3LjU0N0wxMzQuMjIyIDEzNS42ODdDMTMzLjg5IDEzNS4xNjMgMTMzLjc3OCAxMzQuNTMgMTMzLjkxIDEzMy45MjVDMTM0LjA0MiAxMzMuMzIgMTM0LjQwNyAxMzIuNzkgMTM0LjkyNyAxMzIuNDUxTDE2Ni41ODYgMTEyLjEzMkMxNjYuOTU5IDExMS44ODggMTY3LjM5NCAxMTEuNzU4IDE2Ny44NCAxMTEuNzU3QzE2OC4yMzUgMTExLjc1OSAxNjguNjI0IDExMS44NTkgMTY4Ljk3MSAxMTIuMDQ3QzE2OS4zMTggMTEyLjIzNSAxNjkuNjEzIDExMi41MDYgMTY5LjgzIDExMi44MzVMMTcxLjAzNyAxMTQuNjk1QzE3MS4zNzEgMTE1LjIyIDE3MS40ODMgMTE1Ljg1NSAxNzEuMzQ4IDExNi40NjJDMTcxLjIxMyAxMTcuMDY4IDE3MC44NDIgMTE3LjU5NyAxNzAuMzE2IDExNy45MzFMMTM4LjY3MyAxMzguMjVDMTM4LjI5MiAxMzguNTAxIDEzNy44NDQgMTM4LjYzMiAxMzcuMzg4IDEzOC42MjVWMTM4LjU5NFpNMTg5LjQ1MyAxNzIuNjY4QzE4OC4yMTMgMTcyLjY2OCAxODcuMDAxIDE3Mi4zMDEgMTg1Ljk3IDE3MS42MTRDMTg0LjkzOSAxNzAuOTI3IDE4NC4xMzUgMTY5Ljk1MSAxODMuNjYxIDE2OC44MDhDMTgzLjE4NiAxNjcuNjY2IDE4My4wNjIgMTY2LjQwOSAxODMuMzA0IDE2NS4xOTZDMTgzLjU0NiAxNjMuOTgzIDE4NC4xNDMgMTYyLjg2OSAxODUuMDIgMTYxLjk5NUMxODUuODk2IDE2MS4xMiAxODcuMDEzIDE2MC41MjUgMTg4LjIzIDE2MC4yODRDMTg5LjQ0NiAxNjAuMDQzIDE5MC43MDYgMTYwLjE2NiAxOTEuODUyIDE2MC42NEMxOTIuOTk3IDE2MS4xMTMgMTkzLjk3NiAxNjEuOTE0IDE5NC42NjUgMTYyLjk0MkMxOTUuMzU0IDE2My45NyAxOTUuNzIyIDE2NS4xNzkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTY4LjA3NCAxOTUuMDYxIDE2OS42NjQgMTkzLjg4NiAxNzAuODM3QzE5Mi43MSAxNzIuMDA5IDE5MS4xMTUgMTcyLjY2OCAxODkuNDUzIDE3Mi42NjhaTTE2OS4wNzggMTg1LjE3MkMxNjcuODM4IDE4NS4xNzIgMTY2LjYyNiAxODQuODA1IDE2NS41OTUgMTg0LjExOEMxNjQuNTY0IDE4My40MzEgMTYzLjc2MSAxODIuNDU1IDE2My4yODYgMTgxLjMxM0MxNjIuODEyIDE4MC4xNyAxNjIuNjg3IDE3OC45MTMgMTYyLjkyOSAxNzcuN0MxNjMuMTcxIDE3Ni40ODcgMTYzLjc2OCAxNzUuMzczIDE2NC42NDUgMTc0LjQ5OUMxNjUuNTIyIDE3My42MjUgMTY2LjYzOSAxNzMuMDI5IDE2Ny44NTUgMTcyLjc4OEMxNjkuMDcxIDE3Mi41NDcgMTcwLjMzMiAxNzIuNjcxIDE3MS40NzcgMTczLjE0NEMxNzIuNjIzIDE3My42MTcgMTczLjYwMiAxNzQuNDE4IDE3NC4yOTEgMTc1LjQ0N0MxNzQuOTc5IDE3Ni40NzUgMTc1LjM0NyAxNzcuNjgzIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTgwLjU3OCAxNzQuNjg3IDE4Mi4xNjggMTczLjUxMSAxODMuMzQxQzE3Mi4zMzUgMTg0LjUxMyAxNzAuNzQxIDE4NS4xNzIgMTY5LjA3OCAxODUuMTcyWk0xNDcuMTM2IDE5Ny42NzZDMTQ1Ljg5NiAxOTcuNjc2IDE0NC42ODQgMTk3LjMxIDE0My42NTMgMTk2LjYyM0MxNDIuNjIyIDE5NS45MzYgMTQxLjgxOSAxOTQuOTU5IDE0MS4zNDQgMTkzLjgxN0MxNDAuODcgMTkyLjY3NCAxNDAuNzQ2IDE5MS40MTcgMTQwLjk4NyAxOTAuMjA0QzE0MS4yMjkgMTg4Ljk5MiAxNDEuODI2IDE4Ny44NzggMTQyLjcwMyAxODcuMDAzQzE0My41OCAxODYuMTI5IDE0NC42OTcgMTg1LjUzMyAxNDUuOTEzIDE4NS4yOTJDMTQ3LjEyOSAxODUuMDUxIDE0OC4zOSAxODUuMTc1IDE0OS41MzUgMTg1LjY0OEMxNTAuNjgxIDE4Ni4xMjEgMTUxLjY2IDE4Ni45MjMgMTUyLjM0OSAxODcuOTUxQzE1My4wMzggMTg4Ljk3OSAxNTMuNDA1IDE5MC4xODggMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTkzLjA4MiAxNTIuNzQ1IDE5NC42NzMgMTUxLjU2OSAxOTUuODQ1QzE1MC4zOTMgMTk3LjAxOCAxNDguNzk5IDE5Ny42NzYgMTQ3LjEzNiAxOTcuNjc2WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ni44OTVDMTUwLjE2NiAxOTYuODk1IDE1Mi42MjIgMTk0LjQ0NSAxNTIuNjIyIDE5MS40MjRDMTUyLjYyMiAxODguNDAzIDE1MC4xNjYgMTg1Ljk1MyAxNDcuMTM2IDE4NS45NTNDMTQ0LjEwNyAxODUuOTUzIDE0MS42NTEgMTg4LjQwMyAxNDEuNjUxIDE5MS40MjRDMTQxLjY1MSAxOTQuNDQ1IDE0NC4xMDcgMTk2Ljg5NSAxNDcuMTM2IDE5Ni44OTVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE4Ni43MzVDMTQ4LjA2NiAxODYuNzM1IDE0OC45NzUgMTg3LjAxIDE0OS43NDggMTg3LjUyNUMxNTAuNTIxIDE4OC4wNDEgMTUxLjEyNCAxODguNzczIDE1MS40OCAxODkuNjNDMTUxLjgzNiAxOTAuNDg2IDE1MS45MjkgMTkxLjQyOSAxNTEuNzQ4IDE5Mi4zMzlDMTUxLjU2NiAxOTMuMjQ4IDE1MS4xMTggMTk0LjA4NCAxNTAuNDYxIDE5NC43NEMxNDkuODAzIDE5NS4zOTYgMTQ4Ljk2NSAxOTUuODQyIDE0OC4wNTMgMTk2LjAyM0MxNDcuMTQxIDE5Ni4yMDQgMTQ2LjE5NiAxOTYuMTExIDE0NS4zMzcgMTk1Ljc1NkMxNDQuNDc4IDE5NS40MDEgMTQzLjc0MyAxOTQuOCAxNDMuMjI3IDE5NC4wMjlDMTQyLjcxIDE5My4yNTggMTQyLjQzNCAxOTIuMzUyIDE0Mi40MzQgMTkxLjQyNEMxNDIuNDM0IDE5MC4xOCAxNDIuOTMgMTg4Ljk4OCAxNDMuODExIDE4OC4xMDhDMTQ0LjY5MyAxODcuMjI5IDE0NS44ODkgMTg2LjczNSAxNDcuMTM2IDE4Ni43MzVaTTE0Ny4xMzYgMTg1LjE3MkMxNDUuODk2IDE4NS4xNzIgMTQ0LjY4NCAxODUuNTM5IDE0My42NTMgMTg2LjIyNkMxNDIuNjIyIDE4Ni45MTMgMTQxLjgxOSAxODcuODg5IDE0MS4zNDQgMTg5LjAzMkMxNDAuODcgMTkwLjE3NCAxNDAuNzQ2IDE5MS40MzEgMTQwLjk4NyAxOTIuNjQ0QzE0MS4yMjkgMTkzLjg1NyAxNDEuODI2IDE5NC45NzEgMTQyLjcwMyAxOTUuODQ1QzE0My41OCAxOTYuNzE5IDE0NC42OTcgMTk3LjMxNSAxNDUuOTEzIDE5Ny41NTZDMTQ3LjEyOSAxOTcuNzk3IDE0OC4zOSAxOTcuNjc0IDE0OS41MzUgMTk3LjJDMTUwLjY4MSAxOTYuNzI3IDE1MS42NiAxOTUuOTI2IDE1Mi4zNDkgMTk0Ljg5OEMxNTMuMDM4IDE5My44NjkgMTUzLjQwNSAxOTIuNjYxIDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE4OS43NjYgMTUyLjc0NSAxODguMTc2IDE1MS41NjkgMTg3LjAwM0MxNTAuMzkzIDE4NS44MzEgMTQ4Ljc5OSAxODUuMTcyIDE0Ny4xMzYgMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTM3LjQwMyAxMzcuODEyQzEzNy4xNDMgMTM3LjgxNCAxMzYuODg2IDEzNy43NSAxMzYuNjU2IDEzNy42MjdDMTM2LjQyNiAxMzcuNTA0IDEzNi4yMyAxMzcuMzI2IDEzNi4wODcgMTM3LjEwOUwxMzQuODY0IDEzNS4yMzNDMTM0LjY0OSAxMzQuODgyIDEzNC41ODIgMTM0LjQ2MSAxMzQuNjc2IDEzNC4wNjFDMTM0LjcxNCAxMzMuODYzIDEzNC43OTEgMTMzLjY3NSAxMzQuOTA0IDEzMy41MDhDMTM1LjAxOCAxMzMuMzQyIDEzNS4xNjQgMTMzLjIgMTM1LjMzNCAxMzMuMDkyTDE2Ny4wMDkgMTEyLjc3M0MxNjcuMjUyIDExMi42MDEgMTY3LjU0MiAxMTIuNTA5IDE2Ny44NCAxMTIuNTA3QzE2OC4xMDIgMTEyLjUwNyAxNjguMzYgMTEyLjU3MyAxNjguNTkgMTEyLjY5OUMxNjguODIgMTEyLjgyNSAxNjkuMDE1IDExMy4wMDYgMTY5LjE1NiAxMTMuMjI2TDE3MC4zNzkgMTE1LjEwMUMxNzAuNTkxIDExNS40NDkgMTcwLjY2IDExNS44NjYgMTcwLjU2OSAxMTYuMjYzQzE3MC40NzggMTE2LjY2IDE3MC4yMzYgMTE3LjAwNiAxNjkuODkzIDExNy4yMjdMMTM4LjI1IDEzNy41NDdDMTM3Ljk5OSAxMzcuNzE1IDEzNy43MDUgMTM3LjgwNyAxMzcuNDAzIDEzNy44MTJaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjcuODQgMTEzLjMzNUMxNjcuOTc0IDExMy4zMzcgMTY4LjEwNyAxMTMuMzczIDE2OC4yMjQgMTEzLjQzOEMxNjguMzQyIDExMy41MDQgMTY4LjQ0MSAxMTMuNTk3IDE2OC41MTQgMTEzLjcxTDE2OS43MDUgMTE1LjU1NUMxNjkuODE3IDExNS43MzEgMTY5Ljg1NiAxMTUuOTQ0IDE2OS44MTUgMTE2LjE0OUMxNjkuNzkyIDExNi4yNSAxNjkuNzQ5IDExNi4zNDYgMTY5LjY4NyAxMTYuNDNDMTY5LjYyNCAxMTYuNTEzIDE2OS41NDUgMTE2LjU4MyAxNjkuNDU0IDExNi42MzNMMTM3LjgxMSAxMzYuOTUzQzEzNy42ODIgMTM3LjAyNyAxMzcuNTM2IDEzNy4wNjUgMTM3LjM4OCAxMzcuMDYyQzEzNy4yNTYgMTM3LjA2MyAxMzcuMTI3IDEzNy4wMzEgMTM3LjAxMSAxMzYuOTY4QzEzNi44OTYgMTM2LjkwNSAxMzYuNzk5IDEzNi44MTQgMTM2LjcyOSAxMzYuNzAzTDEzNS41MzggMTM0Ljg1OEMxMzUuNDI4IDEzNC42ODEgMTM1LjM4OSAxMzQuNDY5IDEzNS40MjggMTM0LjI2NEMxMzUuNDUxIDEzNC4xNjUgMTM1LjQ5MyAxMzQuMDcgMTM1LjU1MiAxMzMuOTg3QzEzNS42MTEgMTMzLjkwNCAxMzUuNjg2IDEzMy44MzMgMTM1Ljc3MyAxMzMuNzhMMTY3LjQzMiAxMTMuNDZDMTY3LjU1NCAxMTMuMzgyIDE2Ny42OTUgMTEzLjMzOSAxNjcuODQgMTEzLjMzNVpNMTY3Ljg0IDExMS43NzJDMTY3LjM5NCAxMTEuNzcxIDE2Ni45NTggMTExLjkwMiAxNjYuNTg2IDExMi4xNDdMMTM0LjkyNyAxMzIuNDY3QzEzNC40MDcgMTMyLjgwNiAxMzQuMDQyIDEzMy4zMzUgMTMzLjkxIDEzMy45NEMxMzMuNzc4IDEzNC41NDYgMTMzLjg5IDEzNS4xNzggMTM0LjIyMiAxMzUuNzAyTDEzNS40MjggMTM3LjU0N0MxMzUuNTk0IDEzNy44MDYgMTM1LjgxIDEzOC4wMzEgMTM2LjA2MyAxMzguMjA3QzEzNi4zMTYgMTM4LjM4NCAxMzYuNjAyIDEzOC41MDggMTM2LjkwMyAxMzguNTczQzEzNy4yMDUgMTM4LjYzOSAxMzcuNTE3IDEzOC42NDQgMTM3LjgyMSAxMzguNTg4QzEzOC4xMjQgMTM4LjUzMyAxMzguNDE0IDEzOC40MTggMTM4LjY3MyAxMzguMjVMMTcwLjMxNiAxMTcuOTMxQzE3MC44NDIgMTE3LjU5NyAxNzEuMjEzIDExNy4wNjggMTcxLjM0OCAxMTYuNDYyQzE3MS40ODMgMTE1Ljg1NSAxNzEuMzcxIDExNS4yMiAxNzEuMDM3IDExNC42OTVMMTY5LjgzIDExMi44MzVDMTY5LjYxMyAxMTIuNTA2IDE2OS4zMTggMTEyLjIzNSAxNjguOTcxIDExMi4wNDdDMTY4LjYyNCAxMTEuODU5IDE2OC4yMzUgMTExLjc1OSAxNjcuODQgMTExLjc1N1YxMTEuNzcyWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NC4zOUMxNzIuMTA4IDE4NC4zOSAxNzQuNTYzIDE4MS45NDEgMTc0LjU2MyAxNzguOTJDMTc0LjU2MyAxNzUuODk4IDE3Mi4xMDggMTczLjQ0OSAxNjkuMDc4IDE3My40NDlDMTY2LjA0OCAxNzMuNDQ5IDE2My41OTMgMTc1Ljg5OCAxNjMuNTkzIDE3OC45MkMxNjMuNTkzIDE4MS45NDEgMTY2LjA0OCAxODQuMzkgMTY5LjA3OCAxODQuMzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE3NC4yMzFDMTcwLjAwOCAxNzQuMjMxIDE3MC45MTcgMTc0LjUwNiAxNzEuNjkgMTc1LjAyMUMxNzIuNDYzIDE3NS41MzYgMTczLjA2NiAxNzYuMjY5IDE3My40MjIgMTc3LjEyNUMxNzMuNzc4IDE3Ny45ODIgMTczLjg3MSAxNzguOTI1IDE3My42ODkgMTc5LjgzNUMxNzMuNTA4IDE4MC43NDQgMTczLjA2IDE4MS41OCAxNzIuNDAzIDE4Mi4yMzZDMTcxLjc0NSAxODIuODkxIDE3MC45MDcgMTgzLjMzOCAxNjkuOTk1IDE4My41MTlDMTY5LjA4MyAxODMuNyAxNjguMTM4IDE4My42MDcgMTY3LjI3OSAxODMuMjUyQzE2Ni40MTkgMTgyLjg5NyAxNjUuNjg1IDE4Mi4yOTYgMTY1LjE2OSAxODEuNTI1QzE2NC42NTIgMTgwLjc1NCAxNjQuMzc2IDE3OS44NDcgMTY0LjM3NiAxNzguOTJDMTY0LjM3NiAxNzcuNjc2IDE2NC44NzEgMTc2LjQ4NCAxNjUuNzUzIDE3NS42MDRDMTY2LjYzNSAxNzQuNzI1IDE2Ny44MzEgMTc0LjIzMSAxNjkuMDc4IDE3NC4yMzFaTTE2OS4wNzggMTcyLjY2OEMxNjcuODM4IDE3Mi42NjggMTY2LjYyNiAxNzMuMDM0IDE2NS41OTUgMTczLjcyMUMxNjQuNTY0IDE3NC40MDggMTYzLjc2MSAxNzUuMzg1IDE2My4yODYgMTc2LjUyN0MxNjIuODEyIDE3Ny42NyAxNjIuNjg3IDE3OC45MjcgMTYyLjkyOSAxODAuMTRDMTYzLjE3MSAxODEuMzUyIDE2My43NjggMTgyLjQ2NiAxNjQuNjQ1IDE4My4zNDFDMTY1LjUyMiAxODQuMjE1IDE2Ni42MzkgMTg0LjgxMSAxNjcuODU1IDE4NS4wNTJDMTY5LjA3MSAxODUuMjkzIDE3MC4zMzIgMTg1LjE2OSAxNzEuNDc3IDE4NC42OTZDMTcyLjYyMyAxODQuMjIzIDE3My42MDIgMTgzLjQyMSAxNzQuMjkxIDE4Mi4zOTNDMTc0Ljk3OSAxODEuMzY1IDE3NS4zNDcgMTgwLjE1NiAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE3Ny4yNjIgMTc0LjY4NyAxNzUuNjcxIDE3My41MTEgMTc0LjQ5OUMxNzIuMzM1IDE3My4zMjYgMTcwLjc0MSAxNzIuNjY4IDE2OS4wNzggMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzEuODg2QzE5Mi40ODIgMTcxLjg4NiAxOTQuOTM4IDE2OS40MzcgMTk0LjkzOCAxNjYuNDE2QzE5NC45MzggMTYzLjM5NCAxOTIuNDgyIDE2MC45NDUgMTg5LjQ1MyAxNjAuOTQ1QzE4Ni40MjMgMTYwLjk0NSAxODMuOTY3IDE2My4zOTQgMTgzLjk2NyAxNjYuNDE2QzE4My45NjcgMTY5LjQzNyAxODYuNDIzIDE3MS44ODYgMTg5LjQ1MyAxNzEuODg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNjEuNzI3QzE5MC4zODMgMTYxLjcyNyAxOTEuMjkyIDE2Mi4wMDIgMTkyLjA2NSAxNjIuNTE3QzE5Mi44MzggMTYzLjAzMiAxOTMuNDQxIDE2My43NjQgMTkzLjc5NyAxNjQuNjIxQzE5NC4xNTMgMTY1LjQ3OCAxOTQuMjQ2IDE2Ni40MjEgMTk0LjA2NCAxNjcuMzNDMTkzLjg4MyAxNjguMjQgMTkzLjQzNSAxNjkuMDc2IDE5Mi43NzcgMTY5LjczMUMxOTIuMTIgMTcwLjM4NyAxOTEuMjgyIDE3MC44MzQgMTkwLjM3IDE3MS4wMTVDMTg5LjQ1OCAxNzEuMTk2IDE4OC41MTMgMTcxLjEwMyAxODcuNjUzIDE3MC43NDhDMTg2Ljc5NCAxNzAuMzkzIDE4Ni4wNiAxNjkuNzkyIDE4NS41NDMgMTY5LjAyMUMxODUuMDI3IDE2OC4yNSAxODQuNzUxIDE2Ny4zNDMgMTg0Ljc1MSAxNjYuNDE2QzE4NC43NTEgMTY1LjE3MiAxODUuMjQ2IDE2My45NzkgMTg2LjEyOCAxNjMuMUMxODcuMDEgMTYyLjIyMSAxODguMjA2IDE2MS43MjcgMTg5LjQ1MyAxNjEuNzI3Wk0xODkuNDUzIDE2MC4xNjRDMTg4LjIxMyAxNjAuMTY0IDE4Ny4wMDEgMTYwLjUzIDE4NS45NyAxNjEuMjE3QzE4NC45MzkgMTYxLjkwNCAxODQuMTM1IDE2Mi44ODEgMTgzLjY2MSAxNjQuMDIzQzE4My4xODYgMTY1LjE2NiAxODMuMDYyIDE2Ni40MjMgMTgzLjMwNCAxNjcuNjM1QzE4My41NDYgMTY4Ljg0OCAxODQuMTQzIDE2OS45NjIgMTg1LjAyIDE3MC44MzdDMTg1Ljg5NyAxNzEuNzExIDE4Ny4wMTQgMTcyLjMwNiAxODguMjMgMTcyLjU0OEMxODkuNDQ2IDE3Mi43ODkgMTkwLjcwNiAxNzIuNjY1IDE5MS44NTIgMTcyLjE5MkMxOTIuOTk3IDE3MS43MTkgMTkzLjk3NiAxNzAuOTE3IDE5NC42NjUgMTY5Ljg4OUMxOTUuMzU0IDE2OC44NjEgMTk1LjcyMiAxNjcuNjUyIDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2NC43NTggMTk1LjA2MSAxNjMuMTY3IDE5My44ODYgMTYxLjk5NUMxOTIuNzEgMTYwLjgyMiAxOTEuMTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDYuOTMyIDI2Ljk2MjJMOTcuOTIzNiA1OC41ODIzTDUzLjA5OTQgODcuNDk4NEwzLjc5Mjg1IDU5LjA1MTJMNC42MzkxOCA1OC41ODIzTDEwMy4yNTIgMS44MTMxMUwxNDYuOTMyIDI2Ljk2MjJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMi45NDY1MyA1OC41ODIzSDQuNjM5MTlMMy43OTI4NiA1OS4wNTEyTDIuOTQ2NTMgNTguNTgyM1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yMDEuOTI4IDU4LjYyOTJMMTAzLjI1MiAxMTYuMzk5TDUzLjA5OTQgODcuNDk4NEw5Ny45MjM1IDU4LjU4MjRMMTQ2LjkzMiAyNi45NjIzTDIwMS44MzQgNTguNTgyNEwyMDEuOTI4IDU4LjYyOTJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjk5MSA1OC41ODIzTDIwMS45MjggNTguNjI5MkwyMDEuODM0IDU4LjU4MjNIMjAxLjk5MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMDMuMjUyIDExNi4zOTlWMjMwLjVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlV2lkdGg9XCIzXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NS4xNzJDMTcyLjU0IDE4NS4xNzIgMTc1LjM0NyAxODIuMzczIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTc1LjQ2NyAxNzIuNTQgMTcyLjY2OCAxNjkuMDc4IDE3Mi42NjhDMTY1LjYxNiAxNzIuNjY4IDE2Mi44MDkgMTc1LjQ2NyAxNjIuODA5IDE3OC45MkMxNjIuODA5IDE4Mi4zNzMgMTY1LjYxNiAxODUuMTcyIDE2OS4wNzggMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ny42NzZDMTUwLjU5OCAxOTcuNjc2IDE1My40MDUgMTk0Ljg3NyAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxODcuOTcxIDE1MC41OTggMTg1LjE3MiAxNDcuMTM2IDE4NS4xNzJDMTQzLjY3NCAxODUuMTcyIDE0MC44NjcgMTg3Ljk3MSAxNDAuODY3IDE5MS40MjRDMTQwLjg2NyAxOTQuODc3IDE0My42NzQgMTk3LjY3NiAxNDcuMTM2IDE5Ny42NzZaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzIuNjY4QzE5Mi45MTUgMTcyLjY2OCAxOTUuNzIyIDE2OS44NjkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTYyLjk2MyAxOTIuOTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0QzE4NS45OSAxNjAuMTY0IDE4My4xODQgMTYyLjk2MyAxODMuMTg0IDE2Ni40MTZDMTgzLjE4NCAxNjkuODY5IDE4NS45OSAxNzIuNjY4IDE4OS40NTMgMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjE1NFwiIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBoZWlnaHQ9XCIxNzRcIiB2aWV3Qm94PVwiMCAwIDE1NCAxNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTA3LjggMTAzLjMxMkM5Ny45MzQ0IDEwMy4zMTIgOTMuMTkwNiAxMDguNzUgNzcgMTA4Ljc1QzYwLjgwOTQgMTA4Ljc1IDU2LjEgMTAzLjMxMiA0Ni4yIDEwMy4zMTJDMjAuNjkzNyAxMDMuMzEyIDAgMTIzLjc3MSAwIDE0OC45ODhWMTU3LjY4OEMwIDE2Ni42OTMgNy4zOTA2MiAxNzQgMTYuNSAxNzRIMTM3LjVDMTQ2LjYwOSAxNzQgMTU0IDE2Ni42OTMgMTU0IDE1Ny42ODhWMTQ4Ljk4OEMxNTQgMTIzLjc3MSAxMzMuMzA2IDEwMy4zMTIgMTA3LjggMTAzLjMxMlpNMTM3LjUgMTU3LjY4OEgxNi41VjE0OC45ODhDMTYuNSAxMzIuODExIDI5LjgzNzUgMTE5LjYyNSA0Ni4yIDExOS42MjVDNTEuMjE4NyAxMTkuNjI1IDU5LjM2NTYgMTI1LjA2MiA3NyAxMjUuMDYyQzk0Ljc3MTkgMTI1LjA2MiAxMDIuNzQ3IDExOS42MjUgMTA3LjggMTE5LjYyNUMxMjQuMTYyIDExOS42MjUgMTM3LjUgMTMyLjgxMSAxMzcuNSAxNDguOTg4VjE1Ny42ODhaTTc3IDk3Ljg3NUMxMDQuMzI4IDk3Ljg3NSAxMjYuNSA3NS45NTUxIDEyNi41IDQ4LjkzNzVDMTI2LjUgMjEuOTE5OSAxMDQuMzI4IDAgNzcgMEM0OS42NzE5IDAgMjcuNSAyMS45MTk5IDI3LjUgNDguOTM3NUMyNy41IDc1Ljk1NTEgNDkuNjcxOSA5Ny44NzUgNzcgOTcuODc1Wk03NyAxNi4zMTI1Qzk1LjE4NDQgMTYuMzEyNSAxMTAgMzAuOTU5OCAxMTAgNDguOTM3NUMxMTAgNjYuOTE1MiA5NS4xODQ0IDgxLjU2MjUgNzcgODEuNTYyNUM1OC44MTU2IDgxLjU2MjUgNDQgNjYuOTE1MiA0NCA0OC45Mzc1QzQ0IDMwLjk1OTggNTguODE1NiAxNi4zMTI1IDc3IDE2LjMxMjVaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMTgxXCIgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25cIiBoZWlnaHQ9XCIxNTlcIiB2aWV3Qm94PVwiMCAwIDE4MSAxNTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTYzLjA0MSAzNC4yNUgyOC4yODEyQzI1LjE1NjIgMzQuMjUgMjIuNjI1IDMxLjcxODggMjIuNjI1IDI4LjU5MzhDMjIuNjI1IDI1LjQ2ODcgMjUuMTU2MiAyMi45Mzc1IDI4LjI4MTIgMjIuOTM3NUgxNjQuMDMxQzE2Ny4xNTYgMjIuOTM3NSAxNjkuNjg4IDIwLjQwNjMgMTY5LjY4OCAxNy4yODEyQzE2OS42ODggNy45MDk1NSAxNjIuMDkgMC4zMTI1IDE1Mi43MTkgMC4zMTI1SDIyLjYyNUMxMC4xMjgyIDAuMzEyNSAwIDEwLjQ0MDcgMCAyMi45Mzc1VjEzNi4wNjJDMCAxNDguNTU5IDEwLjEyODIgMTU4LjY4OCAyMi42MjUgMTU4LjY4OEgxNjMuMDQxQzE3Mi45NDcgMTU4LjY4OCAxODEgMTUxLjA3NiAxODEgMTQxLjcxOVY1MS4yMTg4QzE4MSA0MS44NjEyIDE3Mi45NDcgMzQuMjUgMTYzLjA0MSAzNC4yNVpNMTQ3LjA2MiAxMDcuNzgxQzE0MC44MTYgMTA3Ljc4MSAxMzUuNzUgMTAyLjcxNSAxMzUuNzUgOTYuNDY4OEMxMzUuNzUgOTAuMjIyMSAxNDAuODE2IDg1LjE1NjIgMTQ3LjA2MiA4NS4xNTYyQzE1My4zMDkgODUuMTU2MiAxNTguMzc1IDkwLjIyMjEgMTU4LjM3NSA5Ni40Njg4QzE1OC4zNzUgMTAyLjcxNSAxNTMuMzA5IDEwNy43ODEgMTQ3LjA2MiAxMDcuNzgxWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXZhdGFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjkyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgaGVpZ2h0PVwiMjkyXCIgdmlld0JveD1cIjAgMCAyOTIgMjkyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTQ2XCIgY3k9XCIxNDZcIiByPVwiMTQ2XCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5NS44ODkgMTE0Ljg5OEMxODUuNDA0IDEzMC42NTkgMTY3LjQ4IDE0MS4wNDYgMTQ3LjEzIDE0MS4wNDZDMTI0LjgxNCAxNDEuMDQ2IDEwNS40MTYgMTI4LjU1NSA5NS41NDUxIDExMC4xODNDOTMuMTA3MyAxMTIuOTA1IDkwLjg0OTkgMTE1Ljg4NSA4OC44MDczIDExOS4xMjZMODQuNzcyMiAxMjUuNTI4QzU3LjQ4OTEgMTY4LjgxMSA4OC41OTUgMjI1LjE4OCAxMzkuNzYgMjI1LjE4OEgxNDcuODNDMTk4Ljk5NSAyMjUuMTg4IDIzMC4xMDEgMTY4LjgxMSAyMDIuODE4IDEyNS41MjhMMTk4Ljc4MyAxMTkuMTI2QzE5Ny44NjEgMTE3LjY2NCAxOTYuODk2IDExNi4yNTQgMTk1Ljg4OSAxMTQuODk4WlwiIGZpbGw9XCIjRjNFQ0VDXCIvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0Ny4xM1wiIGN5PVwiODIuNTI2MlwiIHI9XCI0My45NjU5XCIgZmlsbD1cIiNGM0VDRUNcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgXHJcblxyXG59O1xyXG5leHBvcnQgY29uc3QgdXBsb2FkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjA0XCIgY2xhc3NOYW1lPVwidXBsb2FkXCIgaGVpZ2h0PVwiMjA0XCIgdmlld0JveD1cIjAgMCAyMDQgMjA0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTAyXCIgY3k9XCIxMDJcIiByPVwiMTAyXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwNi41NjcgMTA2LjU2N1YxNDEuNTgySDk3LjQzMjlWMTA2LjU2N0g2Mi40MThWOTcuNDMyOEg5Ny40MzI5VjYyLjQxNzlIMTA2LjU2N1Y5Ny40MzI4SDE0MS41ODJWMTA2LjU2N0gxMDYuNTY3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDMzIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTMwLjIwMjcgMjIuNDE4TDMwLjIwNiAyMi40MDRMMzAuMjA5MSAyMi4zOUMzMC4yNTU5IDIyLjE4MDEgMzAuMjgxNSAyMS45NjU5IDMwLjI4NTQgMjEuNzUwN0wzMC4yODY2IDIxLjY4MTJMMzAuMjgzMSAyMS42MTE4QzMwLjI1MzUgMjEuMDM1MyAzMC4wNjUxIDIwLjQ4MTggMjkuNzQzNiAyMC4wMDg4QzI5LjQyMjUgMTkuNTM2MyAyOC45ODE4IDE5LjE2MzUgMjguNDczMiAxOC45MjIyTDI4LjQyODkgMTguOTAxMkwyOC4zODM3IDE4Ljg4MjRMMjMuMjI3NCAxNi43Mzk2TDIzLjE5NzUgMTYuNzI3MUwyMy4xNjcxIDE2LjcxNTdDMjIuODIwOSAxNi41ODQ4IDIyLjQ1NTcgMTYuNTEyNSAyMi4wODY5IDE2LjUwMUwyMi4wMDI0IDE2LjQ5ODNMMjEuOTE4IDE2LjUwMjhDMjEuMDg3NCAxNi41NDcxIDIwLjI5NDYgMTYuOTA1NSAxOS43MTQ1IDE3LjUyMDVMMTkuNjc2NSAxNy41NjA4TDE5LjY0MDggMTcuNjAzMUwxOC4zODYgMTkuMDkwM0MxNi4zMDI1IDE3Ljg3NjkgMTQuNTU4MSAxNi4xOTY5IDEzLjI5NzEgMTQuMTk5NEwxNC43NTk4IDEzLjAzODlMMTQuODAyOCAxMy4wMDQ4TDE0Ljg0MzkgMTIuOTY4M0MxNS40NzY0IDEyLjQwNzMgMTUuODY5OSAxMS42MTUxIDE1LjkxODcgMTAuNzU2MUwxNS45MjM4IDEwLjY2NTlMMTUuOTIwNyAxMC41NzU2QzE1LjkwOCAxMC4xOTc1IDE1LjgyOTIgOS44MjUzOSAxNS42ODg3IDkuNDc1NTZMMTUuNjc1OSA5LjQ0MzY2TDE1LjY2MiA5LjQxMjIzTDEzLjQ1MjIgNC40MTIyM0wxMy40MzEzIDQuMzY0ODhMMTMuNDA4IDQuMzE4NjhDMTMuMTQ5NiAzLjgwNzQzIDEyLjc1ODkgMy4zODA1NiAxMi4yODM1IDMuMDc2NjNDMTEuODA4NCAyLjc3Mjk3IDExLjI2MzQgMi42MDExNSAxMC43MDQ5IDIuNTczODJMMTAuNjM0NyAyLjU3MDM4TDEwLjU2NDQgMi41NzE4OUMxMC4zNjA1IDIuNTc2MjQgMTAuMTU3MiAyLjU5OTA0IDkuOTU3MTUgMi42NDAwNUw5LjkzOTYyIDIuNjQzNjVMOS45MjIxNiAyLjY0NzU2TDUuMTM0MjEgMy43MTg5OEw1LjEwMTE4IDMuNzI2MzhMNS4wNjg0MSAzLjczNDg4QzQuNDI3MDQgMy45MDEzOCAzLjg0Njg2IDQuMjY1ODQgMy40MTkzOCA0Ljc4NjU3QzIuOTkxMDcgNS4zMDgzMyAyLjc0MDU4IDUuOTU4MDkgMi43MTU2MiA2LjY0MTI2TDIuNzE0MjkgNi42Nzc3NlY2LjcxNDI5QzIuNzE0MjkgMTkuMzI3IDEzLjI0NTQgMjkuNDI4NiAyNi4wNzU5IDI5LjQyODZIMjYuMDc2N0MyNi43NjI5IDI5LjQyODMgMjcuNDM1OSAyOS4yMDI5IDI3Ljk4NTYgMjguNzc4NkMyOC41MzY0IDI4LjM1MzUgMjguOTMzNyAyNy43NTA2IDI5LjA5NzcgMjcuMDYwOUMyOS4wOTc4IDI3LjA2MDggMjkuMDk3OCAyNy4wNjA2IDI5LjA5NzggMjcuMDYwNUwzMC4yMDI3IDIyLjQxOFpNMy41MzU3MSAySDI5LjQ2NDNDMjkuODkxMSAyIDMwLjI4ODUgMi4xNjQ5OSAzMC41NzIxIDIuNDQwMDFDMzAuODUzNiAyLjcxMjk5IDMxIDMuMDY5ODkgMzEgMy40Mjg1N1YyOC41NzE0QzMxIDI4LjkzMDEgMzAuODUzNiAyOS4yODcgMzAuNTcyMSAyOS41NkMzMC4yODg1IDI5LjgzNSAyOS44OTExIDMwIDI5LjQ2NDMgMzBIMy41MzU3MUMzLjEwODkgMzAgMi43MTE0OSAyOS44MzUgMi40Mjc4OCAyOS41NkMyLjE0NjM2IDI5LjI4NyAyIDI4LjkzMDEgMiAyOC41NzE0VjMuNDI4NTdDMiAzLjA2OTkgMi4xNDYzNiAyLjcxMjk5IDIuNDI3ODggMi40NDAwMUMyLjcxMTQ5IDIuMTY0OTkgMy4xMDg5IDIgMy41MzU3MSAyWlwiIGZpbGw9XCIjRjNFQ0VDXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IG1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA0NCAzNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk00MC42MzQ1IDI2Ljg4MTNDNDIuNzM1IDI0LjgyNDYgNDMuOTk1MiAyMi4yNDQyIDQzLjk5NTIgMTkuNDI4NkM0My45OTUyIDEzLjM1NzEgMzguMTUyMiA4LjM0MDYzIDMwLjUzNzEgNy40NDUwOUMyOC4xMzEyIDMuMDczNjYgMjIuNDc5MSAwIDE1Ljg4NzUgMEM3LjExMTQ3IDAgMC4wMDA1MTQ0MjggNS40MzM5MyAwLjAwMDUxNDQyOCAxMi4xNDI5QzAuMDAwNTE0NDI4IDE0Ljk1MDkgMS4yNjA3OCAxNy41MzEzIDMuMzYxMjIgMTkuNTk1NUMyLjE5MjYxIDIxLjkyNTQgMC41MTIyNTkgMjMuNzMxNyAwLjQ4MTcwNyAyMy43NjIxQzAuMDAwNTE0NDQyIDI0LjI3MDUgLTAuMTM2OTY5IDI1LjAxNDMgMC4xNDU2MzYgMjUuNjU5NEMwLjQyMDYwMyAyNi4zMDQ1IDEuMDYyMTkgMjYuNzIxOSAxLjc2NDg5IDI2LjcyMTlDNS44NTEyIDI2LjcyMTkgOS4xNTA4MSAyNS4xODg4IDExLjMyNzYgMjMuNzc3MkMxMi4wMzAzIDIzLjkzNjYgMTIuNzU1OSAyNC4wNTggMTMuNDk2OCAyNC4xNDkxQzE1Ljg5NTEgMjguNTA1NCAyMS41MjQzIDMxLjU3MTQgMjguMTA4MyAzMS41NzE0QzI5LjY5NyAzMS41NzE0IDMxLjIyNDUgMzEuMzg5MyAzMi42NzU4IDMxLjA1NTRDMzQuODUyNiAzMi40NTk0IDM4LjE0NDUgMzQgNDIuMjM4NSAzNEM0Mi45NDEyIDM0IDQzLjU3NTEgMzMuNTgyNiA0My44NTc3IDMyLjkzNzVDNDQuMTMyNyAzMi4yOTI0IDQ0LjAwMjkgMzEuNTQ4NyA0My41MjE3IDMxLjA0MDJDNDMuNDkxMSAzMS4wMTc0IDQxLjgwMzEgMjkuMjExMiA0MC42MzQ1IDI2Ljg4MTNaTTEwLjYzMjYgMTkuODc2M0w5LjMyNjQ4IDIwLjcxODhDOC4yNDk1MiAyMS40MDk0IDcuMTQ5NjYgMjEuOTU1OCA2LjAzNDUxIDIyLjM0MjlDNi4yNDA3NCAyMS45ODYyIDYuNDQ2OTYgMjEuNjA2NyA2LjY0NTU1IDIxLjIxOTZMNy44Mjk0NCAxOC44NTk0TDUuOTM1MjIgMTdDNC45MDQwOSAxNS45ODMgMy42NjY3NCAxNC4zMjEgMy42NjY3NCAxMi4xNDI5QzMuNjY2NzQgNy41MzYxNiA5LjI2NTM4IDMuNjQyODYgMTUuODg3NSAzLjY0Mjg2QzIyLjUwOTYgMy42NDI4NiAyOC4xMDgzIDcuNTM2MTYgMjguMTA4MyAxMi4xNDI5QzI4LjEwODMgMTYuNzQ5NiAyMi41MDk2IDIwLjY0MjkgMTUuODg3NSAyMC42NDI5QzE0LjYyNzIgMjAuNjQyOSAxMy4zNjcgMjAuNDk4NyAxMi4xNDQ5IDIwLjIxNzlMMTAuNjMyNiAxOS44NzYzWk0zOC4wNjA1IDI0LjI4NTdMMzYuMTc0IDI2LjEzNzVMMzcuMzU3OCAyOC40OTc4QzM3LjU1NjQgMjguODg0OCAzNy43NjI2IDI5LjI2NDMgMzcuOTY4OSAyOS42MjFDMzYuODUzNyAyOS4yMzM5IDM1Ljc1MzkgMjguNjg3NSAzNC42NzY5IDI3Ljk5NjlMMzMuMzcwOCAyNy4xNTQ1TDMxLjg1MDkgMjcuNTAzNkMzMC42Mjg4IDI3Ljc4NDQgMjkuMzY4NSAyNy45Mjg2IDI4LjEwODMgMjcuOTI4NkMyMy45ODM3IDI3LjkyODYgMjAuMzAyMiAyNi40MDMxIDE4LjA3OTYgMjQuMTU2N0MyNS44MTY5IDIzLjMzNzEgMzEuNzc0NSAxOC4yODI2IDMxLjc3NDUgMTIuMTQyOUMzMS43NzQ1IDExLjg4NDggMzEuNzQzOSAxMS42MzQ0IDMxLjcyMSAxMS4zODM5QzM2LjYzOTkgMTIuNDg0NCA0MC4zMjkgMTUuNjk0NiA0MC4zMjkgMTkuNDI4NkM0MC4zMjkgMjEuNjA2NyAzOS4wOTE3IDIzLjI2ODggMzguMDYwNSAyNC4yODU3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCAzOSAzMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0zMi41IDI1LjcxNDNWMjYuNzg1N0MzMi41IDI4LjU2MDkgMzEuMDQ0OSAzMCAyOS4yNSAzMEgzLjI1QzEuNDU1MDUgMzAgMCAyOC41NjA5IDAgMjYuNzg1N1Y5LjY0Mjg2QzAgNy44Njc2MyAxLjQ1NTA1IDYuNDI4NTcgMy4yNSA2LjQyODU3SDQuMzMzMzNWOS42NDI4NkgzLjY1NjI1QzMuNTQ4NTEgOS42NDI4NiAzLjQ0NTE3IDkuNjg1MTkgMy4zNjg5OSA5Ljc2MDU0QzMuMjkyOCA5LjgzNTg5IDMuMjUgOS45MzgwOCAzLjI1IDEwLjA0NDZWMjYuMzgzOUMzLjI1IDI2LjQ5MDUgMy4yOTI4IDI2LjU5MjcgMy4zNjg5OSAyNi42NjhDMy40NDUxNyAyNi43NDM0IDMuNTQ4NTEgMjYuNzg1NyAzLjY1NjI1IDI2Ljc4NTdIMjguODQzOEMyOC45NTE1IDI2Ljc4NTcgMjkuMDU0OCAyNi43NDM0IDI5LjEzMSAyNi42NjhDMjkuMjA3MiAyNi41OTI3IDI5LjI1IDI2LjQ5MDUgMjkuMjUgMjYuMzgzOVYyNS43MTQzSDMyLjVaTTM1LjM0MzggMy4yMTQyOUgxMC4xNTYyQzEwLjA0ODUgMy4yMTQyOSA5Ljk0NTE3IDMuMjU2NjIgOS44Njg5OSAzLjMzMTk3QzkuNzkyOCAzLjQwNzMyIDkuNzUgMy41MDk1MSA5Ljc1IDMuNjE2MDdWMTkuOTU1NEM5Ljc1IDIwLjA2MTkgOS43OTI4IDIwLjE2NDEgOS44Njg5OSAyMC4yMzk1QzkuOTQ1MTcgMjAuMzE0OCAxMC4wNDg1IDIwLjM1NzEgMTAuMTU2MiAyMC4zNTcxSDM1LjM0MzhDMzUuNDUxNSAyMC4zNTcxIDM1LjU1NDggMjAuMzE0OCAzNS42MzEgMjAuMjM5NUMzNS43MDcyIDIwLjE2NDEgMzUuNzUgMjAuMDYxOSAzNS43NSAxOS45NTU0VjMuNjE2MDdDMzUuNzUgMy41MDk1MSAzNS43MDcyIDMuNDA3MzIgMzUuNjMxIDMuMzMxOTdDMzUuNTU0OCAzLjI1NjYyIDM1LjQ1MTUgMy4yMTQyOSAzNS4zNDM4IDMuMjE0MjlaTTM1Ljc1IDBDMzcuNTQ0OSAwIDM5IDEuNDM5MDYgMzkgMy4yMTQyOVYyMC4zNTcxQzM5IDIyLjEzMjQgMzcuNTQ0OSAyMy41NzE0IDM1Ljc1IDIzLjU3MTRIOS43NUM3Ljk1NTA1IDIzLjU3MTQgNi41IDIyLjEzMjQgNi41IDIwLjM1NzFWMy4yMTQyOUM2LjUgMS40MzkwNiA3Ljk1NTA1IDAgOS43NSAwSDM1Ljc1Wk0xNy44NzUgNy41QzE3Ljg3NSA4Ljk3OTMxIDE2LjY2MjQgMTAuMTc4NiAxNS4xNjY3IDEwLjE3ODZDMTMuNjcwOSAxMC4xNzg2IDEyLjQ1ODMgOC45NzkzMSAxMi40NTgzIDcuNUMxMi40NTgzIDYuMDIwNjkgMTMuNjcwOSA0LjgyMTQzIDE1LjE2NjcgNC44MjE0M0MxNi42NjI0IDQuODIxNDMgMTcuODc1IDYuMDIwNjkgMTcuODc1IDcuNVpNMTMgMTMuOTI4NkwxNS42NzU1IDExLjI4MjVDMTUuOTkyOCAxMC45Njg3IDE2LjUwNzIgMTAuOTY4NyAxNi44MjQ2IDExLjI4MjVMMTkuNSAxMy45Mjg2TDI2LjUwODggNi45OTY3NkMyNi44MjYxIDYuNjgyOTcgMjcuMzQwNiA2LjY4Mjk3IDI3LjY1NzkgNi45OTY3NkwzMi41IDExLjc4NTdWMTcuMTQyOUgxM1YxMy45Mjg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2hlY2tNYXJrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMjUgMC43ODEyNUMxMS42MjQzIDAuNzgxMjUgMC43ODEyNSAxMS42MjQzIDAuNzgxMjUgMjVDMC43ODEyNSAzOC4zNzU3IDExLjYyNDMgNDkuMjE4OCAyNSA0OS4yMTg4QzM4LjM3NTcgNDkuMjE4OCA0OS4yMTg4IDM4LjM3NTcgNDkuMjE4OCAyNUM0OS4yMTg4IDExLjYyNDMgMzguMzc1NyAwLjc4MTI1IDI1IDAuNzgxMjVaTTI1IDUuNDY4NzVDMzUuNzk0MSA1LjQ2ODc1IDQ0LjUzMTIgMTQuMjA0MiA0NC41MzEyIDI1QzQ0LjUzMTIgMzUuNzk0MSAzNS43OTU4IDQ0LjUzMTIgMjUgNDQuNTMxMkMxNC4yMDU5IDQ0LjUzMTIgNS40Njg3NSAzNS43OTU4IDUuNDY4NzUgMjVDNS40Njg3NSAxNC4yMDU5IDE0LjIwNDIgNS40Njg3NSAyNSA1LjQ2ODc1Wk0zOC42OTE4IDE4LjE5MDFMMzYuNDkxIDE1Ljk3MTZDMzYuMDM1MyAxNS41MTIxIDM1LjI5MzMgMTUuNTA5MSAzNC44MzM4IDE1Ljk2NDlMMjEuMDI5OSAyOS42NTc5TDE1LjE5MDggMjMuNzcxNUMxNC43MzUxIDIzLjMxMiAxMy45OTMxIDIzLjMwOSAxMy41MzM2IDIzLjc2NDdMMTEuMzE0OSAyNS45NjU1QzEwLjg1NTUgMjYuNDIxMyAxMC44NTI0IDI3LjE2MzMgMTEuMzA4MyAyNy42MjI5TDIwLjE3MzYgMzYuNTZDMjAuNjI5NCAzNy4wMTk0IDIxLjM3MTQgMzcuMDIyNSAyMS44MzA5IDM2LjU2NjZMMzguNjg1MyAxOS44NDc1QzM5LjE0NDYgMTkuMzkxNiAzOS4xNDc2IDE4LjY0OTYgMzguNjkxOCAxOC4xOTAxWlwiIGZpbGw9XCIjMDM5QjM3XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQyXCIgaGVpZ2h0PVwiNDJcIiB2aWV3Qm94PVwiMCAwIDQyIDQyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjIxXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjc1NDQgMTMuNTMyNUMxMS4wNDQ0IDE0LjI0MjYgMTEuMDQ0NCAxNS4zOTM3IDExLjc1NDQgMTYuMTAzOEwxNy41Mzk3IDIxLjg4OTFMMTEuNzU0NCAyNy42NzQ0QzExLjA0NDQgMjguMzg0NCAxMS4wNDQ0IDI5LjUzNTYgMTEuNzU0NCAzMC4yNDU3QzEyLjQ2NDUgMzAuOTU1NyAxMy42MTU2IDMwLjk1NTcgMTQuMzI1NyAzMC4yNDU3TDIwLjExMSAyNC40NjA0TDI1Ljg5NjMgMzAuMjQ1N0MyNi42MDYzIDMwLjk1NTcgMjcuNzU3NSAzMC45NTU3IDI4LjQ2NzUgMzAuMjQ1N0MyOS4xNzc2IDI5LjUzNTYgMjkuMTc3NiAyOC4zODQ0IDI4LjQ2NzUgMjcuNjc0NEwyMi42ODIyIDIxLjg4OTFMMjguNDY3NiAxNi4xMDM4QzI5LjE3NzYgMTUuMzkzNyAyOS4xNzc2IDE0LjI0MjYgMjguNDY3NiAxMy41MzI1QzI3Ljc1NzUgMTIuODIyNSAyNi42MDYzIDEyLjgyMjUgMjUuODk2MyAxMy41MzI1TDIwLjExMSAxOS4zMTc5TDE0LjMyNTYgMTMuNTMyNUMxMy42MTU2IDEyLjgyMjUgMTIuNDY0NCAxMi44MjI1IDExLjc1NDQgMTMuNTMyNVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHb29nbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgY2xhc3NOYW1lPVwiZ29vZ2xlXCIgd2lkdGg9XCIxMDNcIiBoZWlnaHQ9XCIxMDJcIiB2aWV3Qm94PVwiMCAwIDEwMyAxMDJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNTEgNzMuNjMxM0M0MC40ODEzIDczLjYzMTMgMzEuODc1IDY2LjYxODggMjkuMzI1IDU3LjA1NjNMNy45Njg3NSA3OC40MTI1QzE2Ljg5MzcgOTIuNDM3NSAzMi44MzEzIDEwMiA1MSAxMDJDNjAuODgxMiAxMDIgNzAuMTI1IDk5LjEzMTMgNzguMDkzOCA5NC4wMzEzTDU2LjczNzUgNzIuNjc1QzU0LjgyNSA3My4zMTI1IDUyLjkxMjUgNzMuNjMxMyA1MSA3My42MzEzWlwiIGZpbGw9XCIjMzRBODUzXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMDIgNDMuOTg3NUMxMDEuNjgxIDQyLjM5MzggMTAwLjQwNiA0MS40Mzc1IDk4LjgxMjUgNDEuNDM3NUg1MUM0OS4wODc1IDQxLjQzNzUgNDcuODEyNSA0Mi43MTI1IDQ3LjgxMjUgNDQuNjI1VjYwLjU2MjVDNDcuODEyNSA2Mi40NzUgNDkuMDg3NSA2My43NSA1MSA2My43NUg2Ny44OTM3QzY1LjAyNSA2OC4yMTI1IDYwLjg4MTIgNzEuMDgxMiA1Ni43Mzc1IDcyLjY3NUw3OC4wOTM4IDk0LjAzMTJDOTIuNDM3NSA4NS4xMDYzIDEwMiA2OS4xNjg3IDEwMiA1MUMxMDIgNTAuMDQzNyAxMDIgNDkuNDA2MyAxMDIgNDguNzY4OEMxMDIuMzE5IDQ3LjQ5MzggMTAyLjMxOSA0NS45IDEwMiA0My45ODc1WlwiIGZpbGw9XCIjNDI4NUY0XCIvPlxyXG4gICAgPHBhdGggZD1cIk0yOC4zNjg3IDUxQzI4LjM2ODcgNDkuMDg3NSAyOC42ODc1IDQ3LjE3NSAyOS4wMDYzIDQ1LjI2MjVMNy45Njg3NSAyMy45MDYyQzIuODY4NzUgMzEuODc1IDAgNDEuMTE4OCAwIDUxQzAgNjAuODgxMiAyLjg2ODc1IDcwLjEyNSA3Ljk2ODc1IDc4LjA5MzhMMjkuMzI1IDU2LjczNzVDMjguNjg3NSA1NC44MjUgMjguMzY4NyA1Mi45MTI1IDI4LjM2ODcgNTFaXCIgZmlsbD1cIiNGQkJDMDVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTkwLjg0MzggMTkuMTI1Qzg3LjMzNzUgMTQuNjYyNSA4Mi44NzUgMTAuODM3NSA3OC4wOTM4IDcuNjVDNzAuMTI1IDIuODY4NzUgNjAuODgxMiAwIDUxIDBDMzIuODMxMyAwIDE2Ljg5MzcgOS41NjI1IDcuOTY4NzUgMjMuOTA2MkwyOS4zMjUgNDUuMjYyNUMzMS44NzUgMzUuNyA0MC44IDI4LjY4NzUgNTEgMjguNjg3NUM1Mi45MTI1IDI4LjY4NzUgNTQuODI1IDI5LjAwNjMgNTYuNzM3NSAyOS42NDM4QzU5LjYwNjIgMzAuNiA2Mi4xNTYyIDMyLjE5MzggNjUuMDI1IDM0LjQyNUM2NS45ODEyIDM1LjM4MTMgNjcuMjU2MiAzNS4zODEyIDY4LjUzMTIgMzQuNzQzN0w4OS44ODc1IDI0LjIyNUM5MC44NDM4IDIzLjkwNjIgOTEuNDgxMyAyMi45NSA5MS40ODEzIDIxLjk5MzhDOTEuOCAyMS4wMzc1IDkxLjQ4MTMgMjAuMDgxMyA5MC44NDM4IDE5LjEyNVpcIiBmaWxsPVwiI0VBNDMzNVwiLz5cclxuICAgIDwvc3ZnPiAgICBcclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCYWNrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0N1wiIHZpZXdCb3g9XCIwIDAgNDggNDdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMjcuNTkxNiAzLjE0ODA0TDI1LjIxMzMgMC43NTg3NTVDMjQuMjA2MiAtMC4yNTI5MjIgMjIuNTc3OCAtMC4yNTI5MjIgMjEuNTgxNSAwLjc1ODc1NUwwLjc1NTI3MyAyMS42NzA0Qy0wLjI1MTc1OCAyMi42ODIgLTAuMjUxNzU4IDI0LjMxNzkgMC43NTUyNzMgMjUuMzE4OUwyMS41ODE1IDQ2LjI0MTJDMjIuNTg4NiA0Ny4yNTI5IDI0LjIxNjkgNDcuMjUyOSAyNS4yMTMzIDQ2LjI0MTJMMjcuNTkxNiA0My44NTJDMjguNjA5MyA0Mi44Mjk1IDI4LjU4NzkgNDEuMTYxMyAyNy41NDg3IDQwLjE2MDRMMTQuNjM5NCAyNy44MDVINDUuNDI4OUM0Ni44NTM3IDI3LjgwNSA0OCAyNi42NTM0IDQ4IDI1LjIyMlYyMS43NzhDNDggMjAuMzQ2NiA0Ni44NTM3IDE5LjE5NSA0NS40Mjg5IDE5LjE5NUgxNC42Mzk0TDI3LjU0ODcgNi44Mzk1OUMyOC41OTg2IDUuODM4NjcgMjguNjIgNC4xNzA0OCAyNy41OTE2IDMuMTQ4MDRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIGNsYXNzTmFtZT1cImxvYWRlclwiIHdpZHRoPVwiNDkwXCIgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA0OTAgNTEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTI1Ni42MzYgMEMyNDMuNzgzIDAgMjMzLjM2MyAxMC40MiAyMzMuMzYzIDIzLjI3M1YxMTYuMzY0QzIzMy4zNjMgMTI5LjIxNyAyNDMuNzgzIDEzOS42MzcgMjU2LjYzNiAxMzkuNjM3QzI2OS40ODkgMTM5LjYzNyAyNzkuOTA5IDEyOS4yMTcgMjc5LjkwOSAxMTYuMzY0VjIzLjI3M0MyNzkuOTA5IDEwLjQyIDI2OS40ODkgMCAyNTYuNjM2IDBaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yNTYuNjM4IDM3Mi4zNjRDMjQzLjc4NSAzNzIuMzY0IDIzMy4zNjUgMzgyLjc4NCAyMzMuMzY1IDM5NS42MzdWNDg4LjcyOEMyMzMuMzY1IDUwMS41ODEgMjQzLjc4NSA1MTIuMDAxIDI1Ni42MzggNTEyLjAwMUMyNjkuNDkxIDUxMi4wMDEgMjc5LjkxMSA1MDEuNTgxIDI3OS45MTEgNDg4LjcyOFYzOTUuNjM3QzI3OS45MTEgMzgyLjc4NCAyNjkuNDkxIDM3Mi4zNjQgMjU2LjYzOCAzNzIuMzY0WlwiIGZpbGw9XCJibGFja1wiIGZpbGxPcGFjaXR5PVwiMC42XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNzQuMzU1IDE0MC44MDhMMTA4LjUyOSA3NC45OEM5OS40NDMgNjUuODkxIDg0LjcwNyA2NS44OTEgNzUuNjE3IDc0Ljk4QzY2LjUyOCA4NC4wNjkgNjYuNTI4IDk4LjgwNCA3NS42MTcgMTA3Ljg5MkwxNDEuNDQzIDE3My43MkMxNDUuOTg3IDE3OC4yNjQgMTUxLjk0NCAxODAuNTM3IDE1Ny44OTggMTgwLjUzN0MxNjMuODUzIDE4MC41MzcgMTY5LjgxMSAxNzguMjY0IDE3NC4zNTMgMTczLjcyQzE4My40NDQgMTY0LjYzMSAxODMuNDQ0IDE0OS44OTcgMTc0LjM1NSAxNDAuODA4WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgIDxwYXRoIGQ9XCJNNDY2LjA5MSAyMzIuNzI3SDQxOS41NDZDNDA2LjY5MyAyMzIuNzI3IDM5Ni4yNzMgMjQzLjE0NyAzOTYuMjczIDI1NkMzOTYuMjczIDI2OC44NTMgNDA2LjY5MyAyNzkuMjczIDQxOS41NDYgMjc5LjI3M0g0NjYuMDkxQzQ3OC45NDQgMjc5LjI3MyA0ODkuMzY0IDI2OC44NTMgNDg5LjM2NCAyNTZDNDg5LjM2NCAyNDMuMTQ3IDQ3OC45NDQgMjMyLjcyNyA0NjYuMDkxIDIzMi43MjdaXCIgZmlsbD1cImJsYWNrXCIgZmlsbE9wYWNpdHk9XCIwLjRcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTM3MS44MyAzMzguMjgzQzM2Mi43NDMgMzI5LjE5NCAzNDguMDA3IDMyOS4xOTYgMzM4LjkxOCAzMzguMjgzQzMyOS44MjkgMzQ3LjM3MiAzMjkuODMxIDM2Mi4xMDYgMzM4LjkxOCAzNzEuMTk1TDQwNC43NDYgNDM3LjAyQzQwOS4yOSA0NDEuNTY0IDQxNS4yNDcgNDQzLjgzNiA0MjEuMjAzIDQ0My44MzZDNDI3LjE1OSA0NDMuODM2IDQzMy4xMTYgNDQxLjU2MyA0MzcuNjU4IDQzNy4wMkM0NDYuNzQ3IDQyNy45MzEgNDQ2Ljc0NyA0MTMuMTk2IDQzNy42NTggNDA0LjEwOEwzNzEuODMgMzM4LjI4M1pcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuNVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTQwLjI3MyAyNTZDMTQwLjI3MyAyNDMuMTQ3IDEyOS44NTMgMjMyLjcyNyAxMTcgMjMyLjcyN0gyMy45MDlDMTEuMDU2IDIzMi43MjcgMC42MzU5ODYgMjQzLjE0NyAwLjYzNTk4NiAyNTZDMC42MzU5ODYgMjY4Ljg1MyAxMS4wNTYgMjc5LjI3MyAyMy45MDkgMjc5LjI3M0gxMTdDMTI5Ljg1MyAyNzkuMjczIDE0MC4yNzMgMjY4Ljg1MyAxNDAuMjczIDI1NlpcIiBmaWxsPVwiYmxhY2tcIiBmaWxsT3BhY2l0eT1cIjAuOFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTc0LjM1NSAzMzguMjgzQzE2NS4yNjggMzI5LjE5NCAxNTAuNTMxIDMyOS4xOTQgMTQxLjQ0MyAzMzguMjgzTDc1LjYxOCA0MDQuMTA4QzY2LjUyOSA0MTMuMTk1IDY2LjUyOSA0MjcuOTMyIDc1LjYxOCA0MzcuMDJDODAuMTYyIDQ0MS41NjQgODYuMTE5IDQ0My44MzYgOTIuMDc1IDQ0My44MzZDOTguMDMxIDQ0My44MzYgMTAzLjk4OCA0NDEuNTY1IDEwOC41MyA0MzcuMDJMMTc0LjM1NSAzNzEuMTk1QzE4My40NDQgMzYyLjEwOCAxODMuNDQ0IDM0Ny4zNzIgMTc0LjM1NSAzMzguMjgzWlwiIGZpbGw9XCJibGFja1wiIGZpbGxPcGFjaXR5PVwiMC43XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5uZXJMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI1NlwiIGNsYXNzTmFtZT1cImJ1dHRvbi1sb2FkXCIgaGVpZ2h0PVwiNTZcIiB2aWV3Qm94PVwiMCAwIDU2IDU2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIxIDU1LjExNzlDOC45MjM0IDUyLjAwOTYgMCA0MS4wNDY5IDAgMjhDMCAxMi41MzYgMTIuNTM2IDAgMjggMEM0My40NjQgMCA1NiAxMi41MzYgNTYgMjhDNTYgMzkuNTU5IDQ4Ljk5NTggNDkuNDgyMSAzOSA1My43NTY2VjQ0LjcwNkM0NC40MjIyIDQxLjEyODUgNDggMzQuOTgyMSA0OCAyOEM0OCAxNi45NTQzIDM5LjA0NTcgOCAyOCA4QzE2Ljk1NDMgOCA4IDE2Ljk1NDMgOCAyOEM4IDM2LjU4MzEgMTMuNDA2NyA0My45MDMzIDIxIDQ2Ljc0MDhWNTUuMTE3OVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW1lcmEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgY2xhc3NOYW1lPVwicHJvZmlsZS1jaGFuZ2VcIiB3aWR0aD1cIjUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk01MTIgMTQ0VjQzMkM1MTIgNDU4LjUgNDkwLjUgNDgwIDQ2NCA0ODBINDhDMjEuNSA0ODAgMCA0NTguNSAwIDQzMlYxNDRDMCAxMTcuNSAyMS41IDk2IDQ4IDk2SDEzNkwxNDguMyA2My4xQzE1NS4zIDQ0LjQgMTczLjIgMzIgMTkzLjIgMzJIMzE4LjdDMzM4LjcgMzIgMzU2LjYgNDQuNCAzNjMuNiA2My4xTDM3NiA5Nkg0NjRDNDkwLjUgOTYgNTEyIDExNy41IDUxMiAxNDRaTTM3NiAyODhDMzc2IDIyMS44IDMyMi4yIDE2OCAyNTYgMTY4QzE4OS44IDE2OCAxMzYgMjIxLjggMTM2IDI4OEMxMzYgMzU0LjIgMTg5LjggNDA4IDI1NiA0MDhDMzIyLjIgNDA4IDM3NiAzNTQuMiAzNzYgMjg4Wk0zNDQgMjg4QzM0NCAzMzYuNSAzMDQuNSAzNzYgMjU2IDM3NkMyMDcuNSAzNzYgMTY4IDMzNi41IDE2OCAyODhDMTY4IDIzOS41IDIwNy41IDIwMCAyNTYgMjAwQzMwNC41IDIwMCAzNDQgMjM5LjUgMzQ0IDI4OFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvZmZCYWNrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI0NFwiIGNsYXNzTmFtZT1cImJvbGQtYm94XCIgdmlld0JveD1cIjAgMCAxMjkgMTQ4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMClcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xLjQ2OTk3IDExMC4yN1YzOC4wNUw2NC40NyA3NC40OEwxMjcuNDcgMzcuNDhWMTEwLjIyTDY0LjQ3IDE0Ni41OUwxLjQ2OTk3IDExMC4yN1pNOTIuNDcgMTE3LjRDOTEuNTggMTE3LjQgOTAuNzA5OSAxMTcuNjY0IDg5Ljk2OTkgMTE4LjE1OEM4OS4yMjk5IDExOC42NTMgODguNjUzMSAxMTkuMzU2IDg4LjMxMjUgMTIwLjE3OEM4Ny45NzE5IDEyMSA4Ny44ODI4IDEyMS45MDUgODguMDU2NCAxMjIuNzc4Qzg4LjIzMDEgMTIzLjY1MSA4OC42NTg3IDEyNC40NTMgODkuMjg4IDEyNS4wODJDODkuOTE3MyAxMjUuNzExIDkwLjcxOTEgMTI2LjE0IDkxLjU5MjEgMTI2LjMxNEM5Mi40NjUgMTI2LjQ4NyA5My4zNjk4IDEyNi4zOTggOTQuMTkyIDEyNi4wNTdDOTUuMDE0MyAxMjUuNzE3IDk1LjcxNzEgMTI1LjE0IDk2LjIxMTYgMTI0LjRDOTYuNzA2MSAxMjMuNjYgOTYuOTcgMTIyLjc5IDk2Ljk3IDEyMS45Qzk2Ljk2NzMgMTIwLjcwNyA5Ni40OTI0IDExOS41NjQgOTUuNjQ5IDExOC43MjFDOTQuODA1NyAxMTcuODc4IDkzLjY2MjYgMTE3LjQwMyA5Mi40NyAxMTcuNFYxMTcuNFpNMTA2LjQ3IDEwOS40QzEwNS41OCAxMDkuNCAxMDQuNzEgMTA5LjY2NCAxMDMuOTcgMTEwLjE1OEMxMDMuMjMgMTEwLjY1MyAxMDIuNjUzIDExMS4zNTYgMTAyLjMxMyAxMTIuMTc4QzEwMS45NzIgMTEzIDEwMS44ODMgMTEzLjkwNSAxMDIuMDU2IDExNC43NzhDMTAyLjIzIDExNS42NTEgMTAyLjY1OSAxMTYuNDUzIDEwMy4yODggMTE3LjA4MkMxMDMuOTE3IDExNy43MTEgMTA0LjcxOSAxMTguMTQgMTA1LjU5MiAxMTguMzE0QzEwNi40NjUgMTE4LjQ4NyAxMDcuMzcgMTE4LjM5OCAxMDguMTkyIDExOC4wNTdDMTA5LjAxNCAxMTcuNzE3IDEwOS43MTcgMTE3LjE0IDExMC4yMTIgMTE2LjRDMTEwLjcwNiAxMTUuNjYgMTEwLjk3IDExNC43OSAxMTAuOTcgMTEzLjlDMTEwLjk2NyAxMTIuNzA3IDExMC40OTIgMTExLjU2NCAxMDkuNjQ5IDExMC43MjFDMTA4LjgwNiAxMDkuODc4IDEwNy42NjMgMTA5LjQwMyAxMDYuNDcgMTA5LjRWMTA5LjRaTTExOS40NyAxMDEuNEMxMTguNTggMTAxLjQgMTE3LjcxIDEwMS42NjQgMTE2Ljk3IDEwMi4xNThDMTE2LjIzIDEwMi42NTMgMTE1LjY1MyAxMDMuMzU2IDExNS4zMTMgMTA0LjE3OEMxMTQuOTcyIDEwNSAxMTQuODgzIDEwNS45MDUgMTE1LjA1NiAxMDYuNzc4QzExNS4yMyAxMDcuNjUxIDExNS42NTkgMTA4LjQ1MyAxMTYuMjg4IDEwOS4wODJDMTE2LjkxNyAxMDkuNzExIDExNy43MTkgMTEwLjE0IDExOC41OTIgMTEwLjMxNEMxMTkuNDY1IDExMC40ODcgMTIwLjM3IDExMC4zOTggMTIxLjE5MiAxMTAuMDU3QzEyMi4wMTQgMTA5LjcxNyAxMjIuNzE3IDEwOS4xNCAxMjMuMjEyIDEwOC40QzEyMy43MDYgMTA3LjY2IDEyMy45NyAxMDYuNzkgMTIzLjk3IDEwNS45QzEyMy45NjcgMTA0LjcwNyAxMjMuNDkyIDEwMy41NjQgMTIyLjY0OSAxMDIuNzIxQzEyMS44MDYgMTAxLjg3OCAxMjAuNjYzIDEwMS40MDMgMTE5LjQ3IDEwMS40VjEwMS40Wk0xMDUuNjkgNzAuNEMxMDUuMzA3IDcwLjQwMSAxMDQuOTMyIDcwLjUxMiAxMDQuNjEgNzAuNzJMODQuNDEgODMuNzJDODQuMTg0OSA4My44NjIyIDgzLjk5MTUgODQuMDQ5MyA4My44NDE4IDg0LjI2OTVDODMuNjkyMSA4NC40ODk3IDgzLjU4OTQgODQuNzM4MyA4My41NCA4NUM4My40ODM0IDg1LjI1NzEgODMuNDc4MSA4NS41MjI4IDgzLjUyNDUgODUuNzgxOUM4My41NzA4IDg2LjA0MSA4My42Njc4IDg2LjI4ODQgODMuODEgODYuNTFMODQuNTggODcuN0M4NC44NjY5IDg4LjE0NDkgODUuMzE4NiA4OC40NTggODUuODM2IDg4LjU3MDVDODYuMzUzMyA4OC42ODI5IDg2Ljg5NDIgODguNTg1NyA4Ny4zNCA4OC4zTDEwNy41MyA3NS4zQzEwNy45NzMgNzUuMDE0NCAxMDguMjg2IDc0LjU2NTEgMTA4LjQgNzQuMDVDMTA4LjQ1OCA3My43OTM2IDEwOC40NjUgNzMuNTI4MiAxMDguNDIgNzMuMjY5MUMxMDguMzc2IDczLjAxIDEwOC4yOCA3Mi43NjIyIDEwOC4xNCA3Mi41NEwxMDcuMzcgNzEuMzVDMTA3LjE4OCA3MS4wNzAyIDEwNi45MzkgNzAuODQwMyAxMDYuNjQ2IDcwLjY4MTRDMTA2LjM1MiA3MC41MjI0IDEwNi4wMjQgNzAuNDM5NSAxMDUuNjkgNzAuNDRWNzAuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTI3IDM4LjM1OTlWMTEwTDY0LjUgMTQ2LjA4TDIgMTEwVjM4LjkxOTlMMzIgNTYuMjU5OUw2NCA3NC43NTk5TDY0LjUgNzUuMDQ5OUw2NSA3NC43NTk5TDEyNyAzOC4zNTk5VjM4LjM1OTlaTTg2LjI2IDg5LjA5OTlDODYuNzM5MiA4OS4wOTk4IDg3LjIwODEgODguOTYwOSA4Ny42MSA4OC42OTk5TDEwNy43OSA3NS42OTk5QzEwOC4wNjggNzUuNTI2MyAxMDguMzA5IDc1LjI5ODkgMTA4LjQ5NyA3NS4wMzFDMTA4LjY4NiA3NC43NjMxIDEwOC44MiA3NC40NjAxIDEwOC44OSA3NC4xMzk5QzEwOC45NjQgNzMuODE3MSAxMDguOTcyIDczLjQ4MyAxMDguOTE2IDczLjE1NjhDMTA4Ljg1OSA3Mi44MzA2IDEwOC43MzggNzIuNTE5IDEwOC41NiA3Mi4yMzk5TDEwNy43OSA3MS4wNTk5QzEwNy41NjUgNzAuNzA3MiAxMDcuMjU0IDcwLjQxNjkgMTA2Ljg4NyA3MC4yMTU5QzEwNi41MiA3MC4wMTQ5IDEwNi4xMDggNjkuOTA5NyAxMDUuNjkgNjkuOTA5OUMxMDUuMjExIDY5LjkwODkgMTA0Ljc0MSA3MC4wNDc5IDEwNC4zNCA3MC4zMDk5TDg0LjE0IDgzLjMwOTlDODMuNTgzMSA4My42NzA1IDgzLjE5MTYgODQuMjM2OCA4My4wNTExIDg0Ljg4NTJDODIuOTEwNSA4NS41MzM1IDgzLjAzMjQgODYuMjExMSA4My4zOSA4Ni43Njk5TDg0LjE1IDg3Ljk0OTlDODQuMzc1NiA4OC4zMDUzIDg0LjY4NzMgODguNTk3OSA4NS4wNTYxIDg4LjgwMDdDODUuNDI1IDg5LjAwMzUgODUuODM5MSA4OS4xMDk4IDg2LjI2IDg5LjEwOTlWODkuMDk5OVpNMTE5LjQ3IDExMC45MUMxMjAuNDU5IDExMC45MSAxMjEuNDI2IDExMC42MTcgMTIyLjI0OCAxMTAuMDY3QzEyMy4wNyAxMDkuNTE4IDEyMy43MTEgMTA4LjczNyAxMjQuMDg5IDEwNy44MjNDMTI0LjQ2OCAxMDYuOTEgMTI0LjU2NyAxMDUuOTA0IDEyNC4zNzQgMTA0LjkzNEMxMjQuMTgxIDEwMy45NjUgMTIzLjcwNSAxMDMuMDc0IDEyMy4wMDYgMTAyLjM3NEMxMjIuMzA2IDEwMS42NzUgMTIxLjQxNSAxMDEuMTk5IDEyMC40NDUgMTAxLjAwNkMxMTkuNDc2IDEwMC44MTMgMTE4LjQ3IDEwMC45MTIgMTE3LjU1NyAxMDEuMjkxQzExNi42NDMgMTAxLjY2OSAxMTUuODYyIDEwMi4zMSAxMTUuMzEzIDEwMy4xMzJDMTE0Ljc2MyAxMDMuOTU0IDExNC40NyAxMDQuOTIxIDExNC40NyAxMDUuOTFDMTE0LjQ3IDEwNy4yMzYgMTE0Ljk5NyAxMDguNTA4IDExNS45MzQgMTA5LjQ0NUMxMTYuODcyIDExMC4zODMgMTE4LjE0NCAxMTAuOTEgMTE5LjQ3IDExMC45MVYxMTAuOTFaTTEwNi40NyAxMTguOTFDMTA3LjQ1OSAxMTguOTEgMTA4LjQyNiAxMTguNjE3IDEwOS4yNDggMTE4LjA2N0MxMTAuMDcgMTE3LjUxOCAxMTAuNzExIDExNi43MzcgMTExLjA4OSAxMTUuODIzQzExMS40NjggMTE0LjkxIDExMS41NjcgMTEzLjkwNCAxMTEuMzc0IDExMi45MzRDMTExLjE4MSAxMTEuOTY1IDExMC43MDUgMTExLjA3NCAxMTAuMDA2IDExMC4zNzRDMTA5LjMwNiAxMDkuNjc1IDEwOC40MTUgMTA5LjE5OSAxMDcuNDQ1IDEwOS4wMDZDMTA2LjQ3NiAxMDguODEzIDEwNS40NyAxMDguOTEyIDEwNC41NTcgMTA5LjI5MUMxMDMuNjQzIDEwOS42NjkgMTAyLjg2MiAxMTAuMzEgMTAyLjMxMyAxMTEuMTMyQzEwMS43NjMgMTExLjk1NCAxMDEuNDcgMTEyLjkyMSAxMDEuNDcgMTEzLjkxQzEwMS40NyAxMTUuMjM2IDEwMS45OTcgMTE2LjUwOCAxMDIuOTM0IDExNy40NDVDMTAzLjg3MiAxMTguMzgzIDEwNS4xNDQgMTE4LjkxIDEwNi40NyAxMTguOTFWMTE4LjkxWk05Mi40NyAxMjYuOTFDOTMuNDU4OSAxMjYuOTEgOTQuNDI1NiAxMjYuNjE3IDk1LjI0NzggMTI2LjA2N0M5Ni4wNzAxIDEyNS41MTggOTYuNzExIDEyNC43MzcgOTcuMDg5NCAxMjMuODIzQzk3LjQ2NzggMTIyLjkxIDk3LjU2NjkgMTIxLjkwNCA5Ny4zNzM5IDEyMC45MzRDOTcuMTgxIDExOS45NjUgOTYuNzA0OCAxMTkuMDc0IDk2LjAwNTUgMTE4LjM3NEM5NS4zMDYzIDExNy42NzUgOTQuNDE1NCAxMTcuMTk5IDkzLjQ0NTQgMTE3LjAwNkM5Mi40NzU1IDExNi44MTMgOTEuNDcwMiAxMTYuOTEyIDkwLjU1NjYgMTE3LjI5MUM4OS42NDI5IDExNy42NjkgODguODYyMSAxMTguMzEgODguMzEyNyAxMTkuMTMyQzg3Ljc2MzIgMTE5Ljk1NCA4Ny40NyAxMjAuOTIxIDg3LjQ3IDEyMS45MUM4Ny40NyAxMjMuMjM2IDg3Ljk5NjggMTI0LjUwOCA4OC45MzQ1IDEyNS40NDVDODkuODcyMSAxMjYuMzgzIDkxLjE0MzkgMTI2LjkxIDkyLjQ3IDEyNi45MVpNMTI3LjQ3IDM2LjkwOTlMNjQuNDcgNzMuOTA5OUwzMi40NyA1NS40MDk5TDEgMzcuMjA5OVYxMTAuNTNMNjQuNSAxNDcuMTlMMTI4IDExMC41NlYzNy4yMzk5TDEyNy40NiAzNi45Mjk5TDEyNy40NyAzNi45MDk5Wk04Ni4yNiA4OC4wOTk5Qzg2LjAwODggODguMTAwNCA4NS43NjE2IDg4LjAzNzQgODUuNTQxNCA4Ny45MTY4Qzg1LjMyMTEgODcuNzk2MiA4NS4xMzQ4IDg3LjYyMTggODUgODcuNDA5OUw4NC4yMyA4Ni4yMTk5Qzg0LjAxODQgODUuODg0OSA4My45NDY5IDg1LjQ4IDg0LjAzMTEgODUuMDkyOEM4NC4xMTUzIDg0LjcwNTUgODQuMzQ4NCA4NC4zNjY5IDg0LjY4IDg0LjE0OTlMMTA0Ljg4IDcxLjE0OTlDMTA1LjExOSA3MC45ODk2IDEwNS40MDIgNzAuOTA1OSAxMDUuNjkgNzAuOTA5OUMxMDUuOTQxIDcwLjkwOTQgMTA2LjE4OCA3MC45NzI0IDEwNi40MDkgNzEuMDkzQzEwNi42MjkgNzEuMjEzNyAxMDYuODE1IDcxLjM4OCAxMDYuOTUgNzEuNTk5OUwxMDcuNzIgNzIuNzg5OUMxMDcuOTMzIDczLjEyNTUgMTA4LjAwNSA3My41MzIgMTA3LjkxOCA3My45MjAxQzEwNy44MzIgNzQuMzA4MyAxMDcuNTk1IDc0LjY0NjMgMTA3LjI2IDc0Ljg1OTlMODcuMDcgODcuODU5OUM4Ni44Mjg2IDg4LjAxNTkgODYuNTQ3NCA4OC4wOTkyIDg2LjI2IDg4LjA5OTlWODguMDk5OVpNMTE5LjQ3IDEwOS45QzExOC42NzkgMTA5LjkgMTE3LjkwNiAxMDkuNjY1IDExNy4yNDggMTA5LjIyNkMxMTYuNTkgMTA4Ljc4NiAxMTYuMDc3IDEwOC4xNjIgMTE1Ljc3NCAxMDcuNDMxQzExNS40NzIgMTA2LjcgMTE1LjM5MyAxMDUuODk1IDExNS41NDcgMTA1LjEyQzExNS43MDEgMTA0LjM0NCAxMTYuMDgyIDEwMy42MzEgMTE2LjY0MiAxMDMuMDcxQzExNy4yMDEgMTAyLjUxMiAxMTcuOTE0IDEwMi4xMzEgMTE4LjY5IDEwMS45NzdDMTE5LjQ2NiAxMDEuODIyIDEyMC4yNyAxMDEuOTAyIDEyMS4wMDEgMTAyLjIwNEMxMjEuNzMyIDEwMi41MDcgMTIyLjM1NiAxMDMuMDIgMTIyLjc5NiAxMDMuNjc4QzEyMy4yMzUgMTA0LjMzNSAxMjMuNDcgMTA1LjEwOSAxMjMuNDcgMTA1LjlDMTIzLjQ3IDEwNi45NjEgMTIzLjA0OSAxMDcuOTc4IDEyMi4yOTggMTA4LjcyOEMxMjEuNTQ4IDEwOS40NzggMTIwLjUzMSAxMDkuOSAxMTkuNDcgMTA5LjlaTTEwNi40NyAxMTcuOUMxMDUuNjc5IDExNy45IDEwNC45MDYgMTE3LjY2NSAxMDQuMjQ4IDExNy4yMjZDMTAzLjU5IDExNi43ODYgMTAzLjA3NyAxMTYuMTYyIDEwMi43NzQgMTE1LjQzMUMxMDIuNDcyIDExNC43IDEwMi4zOTMgMTEzLjg5NSAxMDIuNTQ3IDExMy4xMkMxMDIuNzAxIDExMi4zNDQgMTAzLjA4MiAxMTEuNjMxIDEwMy42NDIgMTExLjA3MUMxMDQuMjAxIDExMC41MTIgMTA0LjkxNCAxMTAuMTMxIDEwNS42OSAxMDkuOTc3QzEwNi40NjYgMTA5LjgyMiAxMDcuMjcgMTA5LjkwMiAxMDguMDAxIDExMC4yMDRDMTA4LjczMiAxMTAuNTA3IDEwOS4zNTYgMTExLjAyIDEwOS43OTYgMTExLjY3OEMxMTAuMjM1IDExMi4zMzUgMTEwLjQ3IDExMy4xMDkgMTEwLjQ3IDExMy45QzExMC40NyAxMTQuOTYxIDExMC4wNDkgMTE1Ljk3OCAxMDkuMjk4IDExNi43MjhDMTA4LjU0OCAxMTcuNDc4IDEwNy41MzEgMTE3LjkgMTA2LjQ3IDExNy45Wk05Mi40NyAxMjUuOUM5MS42Nzg5IDEyNS45IDkwLjkwNTUgMTI1LjY2NSA5MC4yNDc3IDEyNS4yMjZDODkuNTg5OSAxMjQuNzg2IDg5LjA3NzIgMTI0LjE2MiA4OC43NzQ1IDEyMy40MzFDODguNDcxNyAxMjIuNyA4OC4zOTI1IDEyMS44OTUgODguNTQ2OSAxMjEuMTJDODguNzAxMiAxMjAuMzQ0IDg5LjA4MjIgMTE5LjYzMSA4OS42NDE2IDExOS4wNzFDOTAuMjAxIDExOC41MTIgOTAuOTEzNyAxMTguMTMxIDkxLjY4OTYgMTE3Ljk3N0M5Mi40NjU2IDExNy44MjIgOTMuMjY5OCAxMTcuOTAyIDk0LjAwMDcgMTE4LjIwNEM5NC43MzE2IDExOC41MDcgOTUuMzU2MyAxMTkuMDIgOTUuNzk1OSAxMTkuNjc4Qzk2LjIzNTQgMTIwLjMzNSA5Ni40NyAxMjEuMTA5IDk2LjQ3IDEyMS45Qzk2LjQ3IDEyMi45NjEgOTYuMDQ4NiAxMjMuOTc4IDk1LjI5ODQgMTI0LjcyOEM5NC41NDgzIDEyNS40NzggOTMuNTMwOSAxMjUuOSA5Mi40NyAxMjUuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTI1LjRDOTQuNDAzIDEyNS40IDk1Ljk3IDEyMy44MzMgOTUuOTcgMTIxLjlDOTUuOTcgMTE5Ljk2NyA5NC40MDMgMTE4LjQgOTIuNDcgMTE4LjRDOTAuNTM3IDExOC40IDg4Ljk3IDExOS45NjcgODguOTcgMTIxLjlDODguOTcgMTIzLjgzMyA5MC41MzcgMTI1LjQgOTIuNDcgMTI1LjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyLjQ3IDExOC45QzkzLjA2MzMgMTE4LjkgOTMuNjQzMyAxMTkuMDc2IDk0LjEzNjcgMTE5LjQwNUM5NC42MyAxMTkuNzM1IDk1LjAxNDUgMTIwLjIwNCA5NS4yNDE2IDEyMC43NTJDOTUuNDY4NyAxMjEuMyA5NS41MjgxIDEyMS45MDMgOTUuNDEyMyAxMjIuNDg1Qzk1LjI5NjYgMTIzLjA2NyA5NS4wMTA5IDEyMy42MDIgOTQuNTkxMyAxMjQuMDIxQzk0LjE3MTcgMTI0LjQ0MSA5My42MzcyIDEyNC43MjYgOTMuMDU1MiAxMjQuODQyQzkyLjQ3MzMgMTI0Ljk1OCA5MS44NzAxIDEyNC44OTkgOTEuMzIxOSAxMjQuNjcyQzkwLjc3MzcgMTI0LjQ0NCA5MC4zMDUyIDEyNC4wNiA4OS45NzU2IDEyMy41NjdDODkuNjQ1OSAxMjMuMDczIDg5LjQ3IDEyMi40OTMgODkuNDcgMTIxLjlDODkuNDcgMTIxLjEwNCA4OS43ODYgMTIwLjM0MSA5MC4zNDg3IDExOS43NzlDOTAuOTExMyAxMTkuMjE2IDkxLjY3NDMgMTE4LjkgOTIuNDcgMTE4LjlWMTE4LjlaTTkyLjQ3IDExNy45QzkxLjY3ODggMTE3LjkgOTAuOTA1NSAxMTguMTM0IDkwLjI0NzcgMTE4LjU3NEM4OS41ODk5IDExOS4wMTQgODkuMDc3MiAxMTkuNjM4IDg4Ljc3NDUgMTIwLjM2OUM4OC40NzE3IDEyMS4xIDg4LjM5MjUgMTIxLjkwNCA4OC41NDY4IDEyMi42OEM4OC43MDEyIDEyMy40NTYgODkuMDgyMSAxMjQuMTY5IDg5LjY0MTUgMTI0LjcyOEM5MC4yMDEgMTI1LjI4OCA5MC45MTM3IDEyNS42NjkgOTEuNjg5NiAxMjUuODIzQzkyLjQ2NTUgMTI1Ljk3NyA5My4yNjk4IDEyNS44OTggOTQuMDAwNyAxMjUuNTk1Qzk0LjczMTYgMTI1LjI5MyA5NS4zNTYzIDEyNC43OCA5NS43OTU4IDEyNC4xMjJDOTYuMjM1NCAxMjMuNDY0IDk2LjQ3IDEyMi42OTEgOTYuNDcgMTIxLjlDOTYuNDcgMTIwLjgzOSA5Ni4wNDg1IDExOS44MjIgOTUuMjk4NCAxMTkuMDcxQzk0LjU0ODMgMTE4LjMyMSA5My41MzA4IDExNy45IDkyLjQ3IDExNy45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk04Ni4yNiA4Ny42Qzg2LjA5MjcgODcuNTk5NyA4NS45MjgxIDg3LjU1NzQgODUuNzgxNCA4Ny40NzcxQzg1LjYzNDYgODcuMzk2NyA4NS41MTA0IDg3LjI4MDggODUuNDIgODcuMTRMODQuNjUgODZDODQuNTc5MSA4NS44ODgyIDg0LjUzMTEgODUuNzYzNSA4NC41MDg4IDg1LjYzM0M4NC40ODY1IDg1LjUwMjUgODQuNDkwMyA4NS4zNjg5IDg0LjUyIDg1LjI0Qzg0LjU3NjkgODQuOTg1MSA4NC43MzEyIDg0Ljc2MjYgODQuOTUgODQuNjJMMTA1LjE1IDcxLjYyQzEwNS4zMTEgNzEuNTE2IDEwNS40OTggNzEuNDYwNSAxMDUuNjkgNzEuNDZDMTA1Ljg1NyA3MS40NjAyIDEwNi4wMjIgNzEuNTAyNSAxMDYuMTY5IDcxLjU4MjlDMTA2LjMxNSA3MS42NjMyIDEwNi40NCA3MS43NzkxIDEwNi41MyA3MS45MkwxMDcuMyA3My4xMUMxMDcuNDQxIDczLjMzMzEgMTA3LjQ4NyA3My42MDI2IDEwNy40MyA3My44NkMxMDcuMzcxIDc0LjExNjUgMTA3LjIxMyA3NC4zMzkzIDEwNi45OSA3NC40OEw4Ni44IDg3LjQ4Qzg2LjYzNDkgODcuNTY5OSA4Ni40NDc3IDg3LjYxMTUgODYuMjYgODcuNlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA1LjY5IDcxLjkzOTlDMTA1Ljc3NCA3MS45MzkxIDEwNS44NTcgNzEuOTU5OSAxMDUuOTMgNzIuMDAwMUMxMDYuMDA0IDcyLjA0MDQgMTA2LjA2NiA3Mi4wOTg5IDEwNi4xMSA3Mi4xNjk5TDEwNi44OCA3My4zNTk5QzEwNi45NDggNzMuNDcwNCAxMDYuOTcgNzMuNjAzNSAxMDYuOTQgNzMuNzI5OUMxMDYuOTEgNzMuODYwNiAxMDYuODMxIDczLjk3NSAxMDYuNzIgNzQuMDQ5OUw4Ni41MiA4Ni45OTk5Qzg2LjQ0MTYgODcuMDQ4NCA4Ni4zNTIxIDg3LjA3NTkgODYuMjYgODcuMDc5OUM4Ni4xNzUzIDg3LjA3OTcgODYuMDkyIDg3LjA1NzUgODYuMDE4NCA4Ny4wMTU0Qzg1Ljk0NDcgODYuOTczMyA4NS44ODMzIDg2LjkxMjkgODUuODQgODYuODM5OUw4NS4wNyA4NS42NTk5Qzg1LjAwMjkgODUuNTUyOCA4NC45Nzc5IDg1LjQyNDUgODUgODUuMjk5OUM4NS4wMDk0IDg1LjIzNTggODUuMDMzMiA4NS4xNzQ2IDg1LjA2OTUgODUuMTIwOUM4NS4xMDU5IDg1LjA2NzIgODUuMTUzOSA4NS4wMjI0IDg1LjIxIDg0Ljk4OTlMMTA1LjQxIDcxLjk4OTlDMTA1LjQ5MiA3MS45NDE1IDEwNS41ODUgNzEuOTE3MiAxMDUuNjggNzEuOTE5OUwxMDUuNjkgNzEuOTM5OVpNMTA1LjY4IDcwLjkxOTlDMTA1LjM5MiA3MC45MTU5IDEwNS4xMDkgNzAuOTk5NiAxMDQuODcgNzEuMTU5OUw4NC42NyA4NC4xNTk5Qzg0LjMzODQgODQuMzc2OSA4NC4xMDUzIDg0LjcxNTUgODQuMDIxMiA4NS4xMDI4QzgzLjkzNyA4NS40OSA4NC4wMDg0IDg1Ljg5NDkgODQuMjIgODYuMjI5OUw4NSA4Ny40MDk5Qzg1LjEwNTcgODcuNTc2MiA4NS4yNDMzIDg3LjcxOTkgODUuNDA0OCA4Ny44MzI3Qzg1LjU2NjMgODcuOTQ1NCA4NS43NDg2IDg4LjAyNSA4NS45NDExIDg4LjA2NjlDODYuMTMzNyA4OC4xMDg3IDg2LjMzMjUgODguMTEyIDg2LjUyNjMgODguMDc2NUM4Ni43MjAxIDg4LjA0MDkgODYuOTA0OSA4Ny45Njc0IDg3LjA3IDg3Ljg1OTlMMTA3LjI2IDc0Ljg1OTlDMTA3LjU5NSA3NC42NDYzIDEwNy44MzIgNzQuMzA4MyAxMDcuOTE5IDczLjkyMDJDMTA4LjAwNSA3My41MzIgMTA3LjkzMyA3My4xMjU1IDEwNy43MiA3Mi43ODk5TDEwNyA3MS42Mjk5QzEwNi44NjUgNzEuNDE4MSAxMDYuNjc5IDcxLjI0MzcgMTA2LjQ1OSA3MS4xMjMxQzEwNi4yMzggNzEuMDAyNCAxMDUuOTkxIDcwLjkzOTQgMTA1Ljc0IDcwLjkzOTlMMTA1LjY4IDcwLjkxOTlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNi40NyAxMTcuNEMxMDguNDAzIDExNy40IDEwOS45NyAxMTUuODMzIDEwOS45NyAxMTMuOUMxMDkuOTcgMTExLjk2NyAxMDguNDAzIDExMC40IDEwNi40NyAxMTAuNEMxMDQuNTM3IDExMC40IDEwMi45NyAxMTEuOTY3IDEwMi45NyAxMTMuOUMxMDIuOTcgMTE1LjgzMyAxMDQuNTM3IDExNy40IDEwNi40NyAxMTcuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA2LjQ3IDExMC45QzEwNy4wNjMgMTEwLjkgMTA3LjY0MyAxMTEuMDc2IDEwOC4xMzcgMTExLjQwNUMxMDguNjMgMTExLjczNSAxMDkuMDE1IDExMi4yMDQgMTA5LjI0MiAxMTIuNzUyQzEwOS40NjkgMTEzLjMgMTA5LjUyOCAxMTMuOTAzIDEwOS40MTIgMTE0LjQ4NUMxMDkuMjk3IDExNS4wNjcgMTA5LjAxMSAxMTUuNjAyIDEwOC41OTEgMTE2LjAyMUMxMDguMTcyIDExNi40NDEgMTA3LjYzNyAxMTYuNzI2IDEwNy4wNTUgMTE2Ljg0MkMxMDYuNDczIDExNi45NTggMTA1Ljg3IDExNi44OTkgMTA1LjMyMiAxMTYuNjcyQzEwNC43NzQgMTE2LjQ0NCAxMDQuMzA1IDExNi4wNiAxMDMuOTc2IDExNS41NjdDMTAzLjY0NiAxMTUuMDczIDEwMy40NyAxMTQuNDkzIDEwMy40NyAxMTMuOUMxMDMuNDcgMTEzLjEwNCAxMDMuNzg2IDExMi4zNDEgMTA0LjM0OSAxMTEuNzc5QzEwNC45MTEgMTExLjIxNiAxMDUuNjc0IDExMC45IDEwNi40NyAxMTAuOVYxMTAuOVpNMTA2LjQ3IDEwOS45QzEwNS42NzkgMTA5LjkgMTA0LjkwNSAxMTAuMTM0IDEwNC4yNDggMTEwLjU3NEMxMDMuNTkgMTExLjAxNCAxMDMuMDc3IDExMS42MzggMTAyLjc3NCAxMTIuMzY5QzEwMi40NzIgMTEzLjEgMTAyLjM5MiAxMTMuOTA0IDEwMi41NDcgMTE0LjY4QzEwMi43MDEgMTE1LjQ1NiAxMDMuMDgyIDExNi4xNjkgMTAzLjY0MiAxMTYuNzI4QzEwNC4yMDEgMTE3LjI4OCAxMDQuOTE0IDExNy42NjkgMTA1LjY5IDExNy44MjNDMTA2LjQ2NiAxMTcuOTc3IDEwNy4yNyAxMTcuODk4IDEwOC4wMDEgMTE3LjU5NUMxMDguNzMyIDExNy4yOTMgMTA5LjM1NiAxMTYuNzggMTA5Ljc5NiAxMTYuMTIyQzExMC4yMzUgMTE1LjQ2NCAxMTAuNDcgMTE0LjY5MSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExMi44MzkgMTEwLjA0OSAxMTEuODIyIDEwOS4yOTggMTExLjA3MUMxMDguNTQ4IDExMC4zMjEgMTA3LjUzMSAxMDkuOSAxMDYuNDcgMTA5LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDkuNEMxMjEuNDAzIDEwOS40IDEyMi45NyAxMDcuODMzIDEyMi45NyAxMDUuOUMxMjIuOTcgMTAzLjk2NyAxMjEuNDAzIDEwMi40IDExOS40NyAxMDIuNEMxMTcuNTM3IDEwMi40IDExNS45NyAxMDMuOTY3IDExNS45NyAxMDUuOUMxMTUuOTcgMTA3LjgzMyAxMTcuNTM3IDEwOS40IDExOS40NyAxMDkuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwMi45QzEyMC4wNjMgMTAyLjkgMTIwLjY0MyAxMDMuMDc2IDEyMS4xMzcgMTAzLjQwNUMxMjEuNjMgMTAzLjczNSAxMjIuMDE1IDEwNC4yMDQgMTIyLjI0MiAxMDQuNzUyQzEyMi40NjkgMTA1LjMgMTIyLjUyOCAxMDUuOTAzIDEyMi40MTIgMTA2LjQ4NUMxMjIuMjk3IDEwNy4wNjcgMTIyLjAxMSAxMDcuNjAyIDEyMS41OTEgMTA4LjAyMUMxMjEuMTcyIDEwOC40NDEgMTIwLjYzNyAxMDguNzI2IDEyMC4wNTUgMTA4Ljg0MkMxMTkuNDczIDEwOC45NTggMTE4Ljg3IDEwOC44OTkgMTE4LjMyMiAxMDguNjcyQzExNy43NzQgMTA4LjQ0NCAxMTcuMzA1IDEwOC4wNiAxMTYuOTc2IDEwNy41NjdDMTE2LjY0NiAxMDcuMDczIDExNi40NyAxMDYuNDkzIDExNi40NyAxMDUuOUMxMTYuNDcgMTA1LjEwNCAxMTYuNzg2IDEwNC4zNDEgMTE3LjM0OSAxMDMuNzc5QzExNy45MTEgMTAzLjIxNiAxMTguNjc0IDEwMi45IDExOS40NyAxMDIuOVYxMDIuOVpNMTE5LjQ3IDEwMS45QzExOC42NzkgMTAxLjkgMTE3LjkwNSAxMDIuMTM0IDExNy4yNDggMTAyLjU3NEMxMTYuNTkgMTAzLjAxNCAxMTYuMDc3IDEwMy42MzggMTE1Ljc3NCAxMDQuMzY5QzExNS40NzIgMTA1LjEgMTE1LjM5MiAxMDUuOTA0IDExNS41NDcgMTA2LjY4QzExNS43MDEgMTA3LjQ1NiAxMTYuMDgyIDEwOC4xNjkgMTE2LjY0MiAxMDguNzI4QzExNy4yMDEgMTA5LjI4OCAxMTcuOTE0IDEwOS42NjkgMTE4LjY5IDEwOS44MjNDMTE5LjQ2NiAxMDkuOTc3IDEyMC4yNyAxMDkuODk4IDEyMS4wMDEgMTA5LjU5NUMxMjEuNzMyIDEwOS4yOTMgMTIyLjM1NiAxMDguNzggMTIyLjc5NiAxMDguMTIyQzEyMy4yMzUgMTA3LjQ2NCAxMjMuNDcgMTA2LjY5MSAxMjMuNDcgMTA1LjlDMTIzLjQ3IDEwNC44MzkgMTIzLjA0OSAxMDMuODIyIDEyMi4yOTggMTAzLjA3MUMxMjEuNTQ4IDEwMi4zMjEgMTIwLjUzMSAxMDEuOSAxMTkuNDcgMTAxLjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyLjM0IDE2LjY3TDYxLjA3IDM2LjlMMzIuNDcgNTUuNEwxLjAxMDAxIDM3LjIxTDEuNTYwMDEgMzYuOUw2NC40NyAwLjU3OTk1Nkw5Mi4zNCAxNi42N1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xLjU2MDAxIDM2Ljg5OTlMMS4wMTAwMSAzNy4yMDk5XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTI3LjQzIDM2LjkyOTlMNjQuNDcgNzMuODk5OUwzMi40NyA1NS4zOTk5TDYxLjA3IDM2Ljg5OTlMOTIuMzQgMTYuNjY5OUwxMjcuMzggMzYuODk5OUwxMjcuNDMgMzYuOTI5OVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk02NC40NyA3My44OTk5VjE0Ni45XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjNcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA2LjQ3IDExNy45QzEwOC42NzkgMTE3LjkgMTEwLjQ3IDExNi4xMDkgMTEwLjQ3IDExMy45QzExMC40NyAxMTEuNjkxIDEwOC42NzkgMTA5LjkgMTA2LjQ3IDEwOS45QzEwNC4yNjEgMTA5LjkgMTAyLjQ3IDExMS42OTEgMTAyLjQ3IDExMy45QzEwMi40NyAxMTYuMTA5IDEwNC4yNjEgMTE3LjkgMTA2LjQ3IDExNy45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyLjQ3IDEyNS45Qzk0LjY3OTEgMTI1LjkgOTYuNDcgMTI0LjEwOSA5Ni40NyAxMjEuOUM5Ni40NyAxMTkuNjkxIDk0LjY3OTEgMTE3LjkgOTIuNDcgMTE3LjlDOTAuMjYwOCAxMTcuOSA4OC40NyAxMTkuNjkxIDg4LjQ3IDEyMS45Qzg4LjQ3IDEyNC4xMDkgOTAuMjYwOCAxMjUuOSA5Mi40NyAxMjUuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTA5LjlDMTIxLjY3OSAxMDkuOSAxMjMuNDcgMTA4LjEwOSAxMjMuNDcgMTA1LjlDMTIzLjQ3IDEwMy42OTEgMTIxLjY3OSAxMDEuOSAxMTkuNDcgMTAxLjlDMTE3LjI2MSAxMDEuOSAxMTUuNDcgMTAzLjY5MSAxMTUuNDcgMTA1LjlDMTE1LjQ3IDEwOC4xMDkgMTE3LjI2MSAxMDkuOSAxMTkuNDcgMTA5LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTI4LjQxXCIgaGVpZ2h0PVwiMTQ3LjIyXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgIFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
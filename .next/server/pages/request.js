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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/request.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RequestSubmit.js":
/*!*************************************!*\
  !*** ./components/RequestSubmit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\RequestSubmit.js";





const RequestSubmit = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const back = () => {
    setRequestSuccess(false);
    return router.replace('dashboard');
  };

  const {
    setRequestSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "request_wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "request_submitted",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "success",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Success"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 32
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: () => back(),
          children: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["close"])()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "checked",
        children: [" ", Object(_svg__WEBPACK_IMPORTED_MODULE_3__["checkMark"])()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Your Request has been submitted successfully"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "An admin will contact you shortly, check your transaction page to know the status of your request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_submit",
        onClick: () => back(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Done"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 80
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 18
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestSubmit);

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
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (url == "") {
      setRequestImages([]);
    } else {
      setRequestImages([...requestImages, {
        cloudUrl: url
      }]);
    }
  }, [url]);

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

  console.log(temporaryImage);
  console.log(requestImages);

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
          const newUrl = await storageRef.getDownloadURL();
          setUrl([newUrl]);
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
    lineNumber: 237,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);


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


/***/ }),

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\slider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function SimpleSlider() {
  const settings = {
    className: "center",
    infinite: true,
    useCSS: true,
    slidesToShow: 3,
    draggable: true,
    speed: 500
  };
  const {
    input
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]);
  const {
    requestImages
  } = input;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: requestImages.length > 0 && requestImages.map(({
      cloudUrl
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: cloudUrl
    }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }, this))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/usersRequest/addRequest.js":
/*!***********************************************!*\
  !*** ./components/usersRequest/addRequest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\addRequest.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AddRequest = () => {
  const {
    input,
    error,
    handleChange,
    handleReceiver,
    handleCheck,
    temporaryImage,
    requestImages,
    handleFormPreview,
    photoChange,
    handleRequestUpdate,
    setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_3__["RequestContext"]);
  const {
    0: statusOption,
    1: setStatusOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    options: "pending"
  }, {
    options: "processing"
  }, {
    options: "canceled"
  }, {
    options: "onHold"
  }, {
    options: "completed"
  }]);
  const {
    0: action,
    1: setAction
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();

  const photoSource = () => {
    if (temporaryImage || requestImages) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [" ", temporaryImage.map(({
          imageSource
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: imageSource
        }, Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(), false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "add-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "file",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              name: "img",
              onChange: photoChange,
              id: "file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: "Upload Images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 35
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "add-image",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 16
          }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 26
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 12
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, undefined);
    }
  };

  const changeStatus = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "status-change-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "status",
          children: "Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 20
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "status",
          onChange: handleChange,
          value: input.status,
          name: "status",
          children: statusOption.map(({
            options
          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: options,
            children: options
          }, Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(), false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 24
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined);
  };

  const {
    formErrors
  } = _objectSpread({}, input);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "photo",
      children: temporaryImage ? photoSource() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "add-image",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 35
          }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 31
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 31
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id ? e => handleRequestUpdate(e, input._id) : e => handleFormPreview(e),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: handleChange,
              id: "senderFirstName",
              name: "firstName",
              value: input.sender.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 21
            }, undefined), formErrors.sender.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber1",
              onChange: handleChange,
              name: "phoneNumber1",
              value: input.sender.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, undefined), formErrors.sender.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber2",
              onChange: handleChange,
              name: "phoneNumber2",
              value: input.sender.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 21
            }, undefined), formErrors.sender.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 18
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "receiverFirstname",
              onChange: handleReceiver,
              name: "firstName",
              value: input.receiver.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, undefined), formErrors.receiver.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber1",
              onChange: handleReceiver,
              name: "phoneNumber1",
              value: input.receiver.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 21
            }, undefined), formErrors.receiver.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber2",
              onChange: handleReceiver,
              name: "phoneNumber2",
              value: input.receiver.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 21
            }, undefined), formErrors.receiver.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "tagName",
            onChange: handleChange,
            name: "tagName",
            value: input.tagName,
            placeholder: "Tag name.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 21
          }, undefined), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            id: "Cartons",
            onChange: handleChange,
            name: "cartons",
            value: input.cartons,
            placeholder: "Cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 21
          }, undefined), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "checkbox",
            id: "otherItems",
            onChange: handleCheck,
            name: "otherItems",
            value: input.otherItems,
            placeholder: "otherItems"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }, undefined), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "itemsWorth",
            onChange: handleChange,
            name: "itemsWorth",
            value: input.itemsWorth,
            placeholder: "itemsWorth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 21
          }, undefined), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "deliveryLocation",
            onChange: handleChange,
            name: "deliveryLocations",
            value: input.deliveryLocations,
            placeholder: "deliveryLocation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 21
          }, undefined), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            cols: "40",
            rows: "6",
            id: "descriptions",
            onChange: handleChange,
            name: "descriptions",
            value: input.descriptions,
            placeholder: "descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 21
          }, undefined), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }, undefined), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 32
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 26
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (AddRequest);

/***/ }),

/***/ "./components/usersRequest/requestHandler.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestHandler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _addRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRequest */ "./components/usersRequest/addRequest.js");
/* harmony import */ var _requestPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestPreview */ "./components/usersRequest/requestPreview.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestHandler.js";





const RequestHandler = () => {
  const {
    count
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: count == undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_addRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_requestPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestHandler);

/***/ }),

/***/ "./components/usersRequest/requestPreview.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestPreview.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider */ "./components/slider.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestPreview.js";





const RequestPreview = () => {
  const {
    input,
    setCount,
    handleFormSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id == undefined ? handleFormSubmit : () => setCount(),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Sender information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sender",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Receiver information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "receiver",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "others",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 35
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 31
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (RequestPreview);

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

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/usersRequest/requestHandler */ "./components/usersRequest/requestHandler.js");
/* harmony import */ var _components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RequestSubmit */ "./components/RequestSubmit.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg */ "./svg.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\request.js";







const Request = () => {
  const {
    requestSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => router.back(),
      className: "back",
      children: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["Back"])()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined), requestSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-request",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Request);

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
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "50",
      cy: "50",
      r: "50",
      fill: "#213569"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M53.5916 30.148L51.2133 27.7588C50.2062 26.7471 48.5778 26.7471 47.5815 27.7588L26.7553 48.6704C25.7482 49.682 25.7482 51.3179 26.7553 52.3189L47.5815 73.2412C48.5885 74.2529 50.2169 74.2529 51.2133 73.2412L53.5916 70.852C54.6093 69.8295 54.5879 68.1613 53.5487 67.1604L40.6394 54.805H71.4289C72.8537 54.805 74 53.6534 74 52.222V48.778C74 47.3466 72.8537 46.195 71.4289 46.195H40.6394L53.5487 33.8396C54.5986 32.8387 54.62 31.1705 53.5916 30.148Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
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
        lineNumber: 100,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127 38.3599V110L64.5 146.08L2 110V38.9199L32 56.2599L64 74.7599L64.5 75.0499L65 74.7599L127 38.3599V38.3599ZM86.26 89.0999C86.7392 89.0998 87.2081 88.9609 87.61 88.6999L107.79 75.6999C108.068 75.5263 108.309 75.2989 108.497 75.031C108.686 74.7631 108.82 74.4601 108.89 74.1399C108.964 73.8171 108.972 73.483 108.916 73.1568C108.859 72.8306 108.738 72.519 108.56 72.2399L107.79 71.0599C107.565 70.7072 107.254 70.4169 106.887 70.2159C106.52 70.0149 106.108 69.9097 105.69 69.9099C105.211 69.9089 104.741 70.0479 104.34 70.3099L84.14 83.3099C83.5831 83.6705 83.1916 84.2368 83.0511 84.8852C82.9105 85.5335 83.0324 86.2111 83.39 86.7699L84.15 87.9499C84.3756 88.3053 84.6873 88.5979 85.0561 88.8007C85.425 89.0035 85.8391 89.1098 86.26 89.1099V89.0999ZM119.47 110.91C120.459 110.91 121.426 110.617 122.248 110.067C123.07 109.518 123.711 108.737 124.089 107.823C124.468 106.91 124.567 105.904 124.374 104.934C124.181 103.965 123.705 103.074 123.006 102.374C122.306 101.675 121.415 101.199 120.445 101.006C119.476 100.813 118.47 100.912 117.557 101.291C116.643 101.669 115.862 102.31 115.313 103.132C114.763 103.954 114.47 104.921 114.47 105.91C114.47 107.236 114.997 108.508 115.934 109.445C116.872 110.383 118.144 110.91 119.47 110.91V110.91ZM106.47 118.91C107.459 118.91 108.426 118.617 109.248 118.067C110.07 117.518 110.711 116.737 111.089 115.823C111.468 114.91 111.567 113.904 111.374 112.934C111.181 111.965 110.705 111.074 110.006 110.374C109.306 109.675 108.415 109.199 107.445 109.006C106.476 108.813 105.47 108.912 104.557 109.291C103.643 109.669 102.862 110.31 102.313 111.132C101.763 111.954 101.47 112.921 101.47 113.91C101.47 115.236 101.997 116.508 102.934 117.445C103.872 118.383 105.144 118.91 106.47 118.91V118.91ZM92.47 126.91C93.4589 126.91 94.4256 126.617 95.2478 126.067C96.0701 125.518 96.711 124.737 97.0894 123.823C97.4678 122.91 97.5669 121.904 97.3739 120.934C97.181 119.965 96.7048 119.074 96.0055 118.374C95.3063 117.675 94.4154 117.199 93.4454 117.006C92.4755 116.813 91.4702 116.912 90.5566 117.291C89.6429 117.669 88.8621 118.31 88.3127 119.132C87.7632 119.954 87.47 120.921 87.47 121.91C87.47 123.236 87.9968 124.508 88.9345 125.445C89.8721 126.383 91.1439 126.91 92.47 126.91ZM127.47 36.9099L64.47 73.9099L32.47 55.4099L1 37.2099V110.53L64.5 147.19L128 110.56V37.2399L127.46 36.9299L127.47 36.9099ZM86.26 88.0999C86.0088 88.1004 85.7616 88.0374 85.5414 87.9168C85.3211 87.7962 85.1348 87.6218 85 87.4099L84.23 86.2199C84.0184 85.8849 83.9469 85.48 84.0311 85.0928C84.1153 84.7055 84.3484 84.3669 84.68 84.1499L104.88 71.1499C105.119 70.9896 105.402 70.9059 105.69 70.9099C105.941 70.9094 106.188 70.9724 106.409 71.093C106.629 71.2137 106.815 71.388 106.95 71.5999L107.72 72.7899C107.933 73.1255 108.005 73.532 107.918 73.9201C107.832 74.3083 107.595 74.6463 107.26 74.8599L87.07 87.8599C86.8286 88.0159 86.5474 88.0992 86.26 88.0999V88.0999ZM119.47 109.9C118.679 109.9 117.906 109.665 117.248 109.226C116.59 108.786 116.077 108.162 115.774 107.431C115.472 106.7 115.393 105.895 115.547 105.12C115.701 104.344 116.082 103.631 116.642 103.071C117.201 102.512 117.914 102.131 118.69 101.977C119.466 101.822 120.27 101.902 121.001 102.204C121.732 102.507 122.356 103.02 122.796 103.678C123.235 104.335 123.47 105.109 123.47 105.9C123.47 106.961 123.049 107.978 122.298 108.728C121.548 109.478 120.531 109.9 119.47 109.9ZM106.47 117.9C105.679 117.9 104.906 117.665 104.248 117.226C103.59 116.786 103.077 116.162 102.774 115.431C102.472 114.7 102.393 113.895 102.547 113.12C102.701 112.344 103.082 111.631 103.642 111.071C104.201 110.512 104.914 110.131 105.69 109.977C106.466 109.822 107.27 109.902 108.001 110.204C108.732 110.507 109.356 111.02 109.796 111.678C110.235 112.335 110.47 113.109 110.47 113.9C110.47 114.961 110.049 115.978 109.298 116.728C108.548 117.478 107.531 117.9 106.47 117.9ZM92.47 125.9C91.6789 125.9 90.9055 125.665 90.2477 125.226C89.5899 124.786 89.0772 124.162 88.7745 123.431C88.4717 122.7 88.3925 121.895 88.5469 121.12C88.7012 120.344 89.0822 119.631 89.6416 119.071C90.201 118.512 90.9137 118.131 91.6896 117.977C92.4656 117.822 93.2698 117.902 94.0007 118.204C94.7316 118.507 95.3563 119.02 95.7959 119.678C96.2354 120.335 96.47 121.109 96.47 121.9C96.47 122.961 96.0486 123.978 95.2984 124.728C94.5483 125.478 93.5309 125.9 92.47 125.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.4C94.403 125.4 95.97 123.833 95.97 121.9C95.97 119.967 94.403 118.4 92.47 118.4C90.537 118.4 88.97 119.967 88.97 121.9C88.97 123.833 90.537 125.4 92.47 125.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 118.9C93.0633 118.9 93.6433 119.076 94.1367 119.405C94.63 119.735 95.0145 120.204 95.2416 120.752C95.4687 121.3 95.5281 121.903 95.4123 122.485C95.2966 123.067 95.0109 123.602 94.5913 124.021C94.1717 124.441 93.6372 124.726 93.0552 124.842C92.4733 124.958 91.8701 124.899 91.3219 124.672C90.7737 124.444 90.3052 124.06 89.9756 123.567C89.6459 123.073 89.47 122.493 89.47 121.9C89.47 121.104 89.786 120.341 90.3487 119.779C90.9113 119.216 91.6743 118.9 92.47 118.9V118.9ZM92.47 117.9C91.6788 117.9 90.9055 118.134 90.2477 118.574C89.5899 119.014 89.0772 119.638 88.7745 120.369C88.4717 121.1 88.3925 121.904 88.5468 122.68C88.7012 123.456 89.0821 124.169 89.6415 124.728C90.201 125.288 90.9137 125.669 91.6896 125.823C92.4655 125.977 93.2698 125.898 94.0007 125.595C94.7316 125.293 95.3563 124.78 95.7958 124.122C96.2354 123.464 96.47 122.691 96.47 121.9C96.47 120.839 96.0485 119.822 95.2984 119.071C94.5483 118.321 93.5308 117.9 92.47 117.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M86.26 87.6C86.0927 87.5997 85.9281 87.5574 85.7814 87.4771C85.6346 87.3967 85.5104 87.2808 85.42 87.14L84.65 86C84.5791 85.8882 84.5311 85.7635 84.5088 85.633C84.4865 85.5025 84.4903 85.3689 84.52 85.24C84.5769 84.9851 84.7312 84.7626 84.95 84.62L105.15 71.62C105.311 71.516 105.498 71.4605 105.69 71.46C105.857 71.4602 106.022 71.5025 106.169 71.5829C106.315 71.6632 106.44 71.7791 106.53 71.92L107.3 73.11C107.441 73.3331 107.487 73.6026 107.43 73.86C107.371 74.1165 107.213 74.3393 106.99 74.48L86.8 87.48C86.6349 87.5699 86.4477 87.6115 86.26 87.6Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M105.69 71.9399C105.774 71.9391 105.857 71.9599 105.93 72.0001C106.004 72.0404 106.066 72.0989 106.11 72.1699L106.88 73.3599C106.948 73.4704 106.97 73.6035 106.94 73.7299C106.91 73.8606 106.831 73.975 106.72 74.0499L86.52 86.9999C86.4416 87.0484 86.3521 87.0759 86.26 87.0799C86.1753 87.0797 86.092 87.0575 86.0184 87.0154C85.9447 86.9733 85.8833 86.9129 85.84 86.8399L85.07 85.6599C85.0029 85.5528 84.9779 85.4245 85 85.2999C85.0094 85.2358 85.0332 85.1746 85.0695 85.1209C85.1059 85.0672 85.1539 85.0224 85.21 84.9899L105.41 71.9899C105.492 71.9415 105.585 71.9172 105.68 71.9199L105.69 71.9399ZM105.68 70.9199C105.392 70.9159 105.109 70.9996 104.87 71.1599L84.67 84.1599C84.3384 84.3769 84.1053 84.7155 84.0212 85.1028C83.937 85.49 84.0084 85.8949 84.22 86.2299L85 87.4099C85.1057 87.5762 85.2433 87.7199 85.4048 87.8327C85.5663 87.9454 85.7486 88.025 85.9411 88.0669C86.1337 88.1087 86.3325 88.112 86.5263 88.0765C86.7201 88.0409 86.9049 87.9674 87.07 87.8599L107.26 74.8599C107.595 74.6463 107.832 74.3083 107.919 73.9202C108.005 73.532 107.933 73.1255 107.72 72.7899L107 71.6299C106.865 71.4181 106.679 71.2437 106.459 71.1231C106.238 71.0024 105.991 70.9394 105.74 70.9399L105.68 70.9199Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.4C108.403 117.4 109.97 115.833 109.97 113.9C109.97 111.967 108.403 110.4 106.47 110.4C104.537 110.4 102.97 111.967 102.97 113.9C102.97 115.833 104.537 117.4 106.47 117.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 110.9C107.063 110.9 107.643 111.076 108.137 111.405C108.63 111.735 109.015 112.204 109.242 112.752C109.469 113.3 109.528 113.903 109.412 114.485C109.297 115.067 109.011 115.602 108.591 116.021C108.172 116.441 107.637 116.726 107.055 116.842C106.473 116.958 105.87 116.899 105.322 116.672C104.774 116.444 104.305 116.06 103.976 115.567C103.646 115.073 103.47 114.493 103.47 113.9C103.47 113.104 103.786 112.341 104.349 111.779C104.911 111.216 105.674 110.9 106.47 110.9V110.9ZM106.47 109.9C105.679 109.9 104.905 110.134 104.248 110.574C103.59 111.014 103.077 111.638 102.774 112.369C102.472 113.1 102.392 113.904 102.547 114.68C102.701 115.456 103.082 116.169 103.642 116.728C104.201 117.288 104.914 117.669 105.69 117.823C106.466 117.977 107.27 117.898 108.001 117.595C108.732 117.293 109.356 116.78 109.796 116.122C110.235 115.464 110.47 114.691 110.47 113.9C110.47 112.839 110.049 111.822 109.298 111.071C108.548 110.321 107.531 109.9 106.47 109.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.4C121.403 109.4 122.97 107.833 122.97 105.9C122.97 103.967 121.403 102.4 119.47 102.4C117.537 102.4 115.97 103.967 115.97 105.9C115.97 107.833 117.537 109.4 119.47 109.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 102.9C120.063 102.9 120.643 103.076 121.137 103.405C121.63 103.735 122.015 104.204 122.242 104.752C122.469 105.3 122.528 105.903 122.412 106.485C122.297 107.067 122.011 107.602 121.591 108.021C121.172 108.441 120.637 108.726 120.055 108.842C119.473 108.958 118.87 108.899 118.322 108.672C117.774 108.444 117.305 108.06 116.976 107.567C116.646 107.073 116.47 106.493 116.47 105.9C116.47 105.104 116.786 104.341 117.349 103.779C117.911 103.216 118.674 102.9 119.47 102.9V102.9ZM119.47 101.9C118.679 101.9 117.905 102.134 117.248 102.574C116.59 103.014 116.077 103.638 115.774 104.369C115.472 105.1 115.392 105.904 115.547 106.68C115.701 107.456 116.082 108.169 116.642 108.728C117.201 109.288 117.914 109.669 118.69 109.823C119.466 109.977 120.27 109.898 121.001 109.595C121.732 109.293 122.356 108.78 122.796 108.122C123.235 107.464 123.47 106.691 123.47 105.9C123.47 104.839 123.049 103.822 122.298 103.071C121.548 102.321 120.531 101.9 119.47 101.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.34 16.67L61.07 36.9L32.47 55.4L1.01001 37.21L1.56001 36.9L64.47 0.579956L92.34 16.67Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.56001 36.8999L1.01001 37.2099",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.43 36.9299L64.47 73.8999L32.47 55.3999L61.07 36.8999L92.34 16.6699L127.38 36.8999L127.43 36.9299Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M64.47 73.8999V146.9",
        stroke: "black",
        strokeWidth: "3",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.9C108.679 117.9 110.47 116.109 110.47 113.9C110.47 111.691 108.679 109.9 106.47 109.9C104.261 109.9 102.47 111.691 102.47 113.9C102.47 116.109 104.261 117.9 106.47 117.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.9C94.6791 125.9 96.47 124.109 96.47 121.9C96.47 119.691 94.6791 117.9 92.47 117.9C90.2608 117.9 88.47 119.691 88.47 121.9C88.47 124.109 90.2608 125.9 92.47 125.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.9C121.679 109.9 123.47 108.109 123.47 105.9C123.47 103.691 121.679 101.9 119.47 101.9C117.261 101.9 115.47 103.691 115.47 105.9C115.47 108.109 117.261 109.9 119.47 109.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
          lineNumber: 120,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L2FkZFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdFByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0b3IvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi91cmxDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlJlcXVlc3RTdWJtaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJyZXBsYWNlIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwiY2xvc2UiLCJjaGVja01hcmsiLCJjcmVhdGVDb250ZXh0IiwiUmVxdWVzdENvbnRleHRQcm92aWRlciIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiY2FydG9ucyIsImRlbGl2ZXJ5TG9jYXRpb25zIiwiZGVzY3JpcHRpb25zIiwiaXRlbXNXb3J0aCIsInJlY2VpdmVyIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIxIiwicGhvbmVOdW1iZXIyIiwic2VuZGVyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJfaWQiLCJ1bmRlZmluZWQiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0IiwicmVxdWVzdEltYWdlcyIsInN0YXR1cyIsImFtb3VudCIsImltZyIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VTdGF0ZSIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJleHRyYWN0ZWRSZXF1ZXN0Iiwic2V0RXh0cmFjdGVkUmVxdWVzdCIsInNlc3Npb25Ub2tlbiIsInNldFNlc3Npb25Ub2tlbiIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwidGVtcG9yYXJ5SW1hZ2UiLCJzZXRUZW1wb3JhcnlJbWFnZSIsInNldFJlcXVlc3RJbWFnZXMiLCJjb3VudCIsInNldENvdW50IiwiZm9ybSIsInNldEZvcm0iLCJyZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiaWQiLCJ0YXJnZXQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsIm5ld1BlcmNlbnRhZ2UiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVyciIsIm5ld1VybCIsImdldERvd25sb2FkVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcyIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJjYXRjaCIsInJlc3BvbnNlIiwiZGF0YSIsImNsZWFyIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJoYW5kbGVSZWNlaXZlciIsIm5ld0lucCIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsImNoaWxkcmVuIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsInN0b3JhZ2UiLCJTaW1wbGVTbGlkZXIiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwidXNlQ1NTIiwic2xpZGVzVG9TaG93IiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJtYXAiLCJ1dWlkdjQiLCJBZGRSZXF1ZXN0Iiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwib3B0aW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInBob3RvU291cmNlIiwidXBsb2FkIiwiY2hhbmdlU3RhdHVzIiwiUmVxdWVzdEhhbmRsZXIiLCJSZXF1ZXN0UHJldmlldyIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJwcm9maWxlVmFsaWRhdGUiLCJsYXN0TmFtZSIsImVtYWlsIiwidGVzdCIsInBob25lTnVtYmVyIiwiYWRkcmVzcyIsImxvZ2luVmFsaWRhdGUiLCJwYXNzd29yZCIsInNpbmd1cFZhbGlkYXRlIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJhcGkiLCJSZXF1ZXN0IiwiQmFjayIsImJveCIsInByb2ZpbGUiLCJ0cmFuc2FjdGlvbiIsImF2YXRhciIsImJhc2VVcmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hG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QUFBO0FBQUEsTUFBTTJELE9BQU8sR0FBRyx5Q0FBaEI7QUFDTyxNQUFNUCxHQUFHLEdBQUksR0FBRU8sT0FBUSxNQUF2QixDOzs7Ozs7Ozs7OztBQ0RQLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL3JlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlcXVlc3QuanNcIik7XG4iLCJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y2hlY2tNYXJrLCBjbG9zZSB9IGZyb20gXCIuLi9zdmdcIjtcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5jb25zdCBSZXF1ZXN0U3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNldFJlcXVlc3RTdWNjZXNzfT0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbnJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3Rfc3VibWl0dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+U3VjY2Vzczwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+IGJhY2soKX0+e2Nsb3NlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2VkXCI+IHsgY2hlY2tNYXJrKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdF90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIFJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFuIGFkbWluIHdpbGwgY29udGFjdCB5b3Ugc2hvcnRseSwgY2hlY2sgeW91ciB0cmFuc2FjdGlvbiBwYWdlIHRvIGtub3cgdGhlIHN0YXR1cyBvZiB5b3VyIHJlcXVlc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3Rfc3VibWl0XCIgb25DbGljaz17ICgpPT4gYmFjaygpfT48c3Bhbj5Eb25lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0U3VibWl0OyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAvLyAgICAge3NlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAvLyAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgLy8gICAgIF9pZDogJycsXHJcbiAgICAvLyAgICAgZm9ybUVycm9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAvLyAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICByZWNlaXZlcjoge2ZpcnN0TmFtZTogXCJEYXZpZFwiLCBwaG9uZU51bWJlcjE6IFwiMDcxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTMwNjE0OTE1XCJ9LFxyXG4gICAgICAgIHNlbmRlcjoge2ZpcnN0TmFtZTogXCJtYXlvd2FcIiwgcGhvbmVOdW1iZXIxOiBcIjA4MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODE0MDYxNDYxNVwifSxcclxuICAgICAgICB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIF9pZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHVybCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFtdKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFsuLi5yZXF1ZXN0SW1hZ2VzLCB7Y2xvdWRVcmw6IHVybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSwgW3VybF0pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgY29uc3Qge3NlbmRlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSwgaWR9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICBzZW5kZXJbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICBjb25zdCBuZXdJbnB1dCA9IHsgLi4uaW5wdXQsIHNlbmRlciwgW25hbWVdOiB2YWx1ZSB9O1xyXG4gICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcbiAgIGNvbnN0IGhhbmRsZUNoZWNrID0gKGUpPT57XHJcbiAgICBjb25zdCB7bmFtZSwgY2hlY2tlZH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IG5ld0lucHV0ID0gey4uLmlucHV0LCBbbmFtZV06IGNoZWNrZWR9O1xyXG4gICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgfSBcclxuICAgY29uc29sZS5sb2codGVtcG9yYXJ5SW1hZ2UpO1xyXG4gICBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuXHJcbmNvbnN0IHBob3RvQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgbGV0IHBlcmZlY3RTaXplID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgIGxldCByZXN0cnVjdHVyZVVybCA9IHtpbWFnZVNvdXJjZTogcGVyZmVjdFNpemV9XHJcbiAgICBwZXJmZWN0U2l6ZSAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKFsuLi50ZW1wb3JhcnlJbWFnZSwgcmVzdHJ1Y3R1cmVVcmxdKTtcclxuICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgc2V0VXJsKFtuZXdVcmwgXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgIH1cclxufTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9yZXF1ZXN0L2NyZWF0ZScsIGlucHV0LCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7J2F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzID09IDIwMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyksXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWNlaXZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjb25zdCB7cmVjZWl2ZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGlkLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgcmVjZWl2ZXJbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5wID0geyAuLi5pbnB1dCwgcmVjZWl2ZXIgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoLi4uaW5wdXQsIHJlcXVlc3RJbWFnZXMpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dCgnL3JlcXVlc3QvJyArIGlkLCBpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KHsuLi5pbnB1dCwgcmVxdWVzdEltYWdlc30pO1xyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlUmVjZWl2ZXIsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUFDSURlaXFRSUhleHRqVGkyOE5WRG1oNWhXSGFodWlORVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJtYXlvci1kYjEzYS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWF5b3ItZGIxM2EuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJtYXlvci1kYjEzYVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJtYXlvci1kYjEzYS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjI5MDU1MDI5NzdcIixcclxuICAgIGFwcElkOiBcIjE6MjI5MDU1MDI5Nzc6d2ViOjI0OGZkNDI2YTFjZTQ0OTczMzZmMDBcIlxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpcmViYXNlQXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOmZpcmViYXNlLmFwcCgpO1xyXG4gIGNvbnN0IHN0b3JlID0gZmlyZWJhc2VBcHAuc3RvcmFnZSgpO1xyXG5cclxuICBleHBvcnQge3N0b3JlfTsiLCJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHVzZUNTUzogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDBcclxuICB9O1xyXG4gIGNvbnN0IHtpbnB1dH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICBjb25zdCB7cmVxdWVzdEltYWdlc30gPSBpbnB1dDtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICB7cmVxdWVzdEltYWdlcy5sZW5ndGggPiAwICYmIHJlcXVlc3RJbWFnZXMubWFwKCh7Y2xvdWRVcmx9KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2xvdWRVcmx9IGtleT17dXVpZHY0KCl9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICA8L1NsaWRlcj5cclxuICApO1xyXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHt1cGxvYWR9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQWRkUmVxdWVzdCA9ICgpID0+IHtcclxuICAgXHJcbiAgICBjb25zdCB7aW5wdXQsIGVycm9yLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVJlY2VpdmVyLCBoYW5kbGVDaGVjaywgdGVtcG9yYXJ5SW1hZ2UsIHJlcXVlc3RJbWFnZXMsIGhhbmRsZUZvcm1QcmV2aWV3LCBwaG90b0NoYW5nZSwgaGFuZGxlUmVxdWVzdFVwZGF0ZSwgc2V0Q291bnR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c09wdGlvbiwgc2V0U3RhdHVzT3B0aW9uXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7b3B0aW9uczogXCJwZW5kaW5nXCJ9LCBcclxuICAgICAgICB7b3B0aW9uczogXCJwcm9jZXNzaW5nXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcImNhbmNlbGVkXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcIm9uSG9sZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJjb21wbGV0ZWRcIn1cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBwaG90b1NvdXJjZSA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRlbXBvcmFyeUltYWdlIHx8IHJlcXVlc3RJbWFnZXMgKXtcclxuICAgICAgICAgICAgcmV0dXJuKDw+IHt0ZW1wb3JhcnlJbWFnZS5tYXAoKHtpbWFnZVNvdXJjZX0pID0+IFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTb3VyY2V9IGtleT17dXVpZHY0KCl9IC8+XHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWltYWdlXCI+XHJcbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgPC9sYWJlbD4gXHJcbiAgICAgICA8L2Rpdj4gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtY2hhbmdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2lucHV0LnN0YXR1c30gbmFtZT1cInN0YXR1c1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb24ubWFwKCh7b3B0aW9uc30pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnN9IGtleT17dXVpZHY0KCl9PntvcHRpb25zfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPkFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFtb3VudFwiIG5hbWU9XCJhbW91bnRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17aW5wdXQuYW1vdW50fSB0eXBlPVwibnVtYmVyXCIvPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzIH0gPSB7Li4uaW5wdXR9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZW1wb3JhcnlJbWFnZSA/IHBob3RvU291cmNlKCkgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyAgaW5wdXQuX2lkID8gKGUpPT4gaGFuZGxlUmVxdWVzdFVwZGF0ZShlLCBpbnB1dC5faWQpIDogKGUpPT4gIGhhbmRsZUZvcm1QcmV2aWV3KGUpIH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXItY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgIDxoMz5TZW5kZXIgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlckZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgIH0gaWQ9XCJzZW5kZXJGaXJzdE5hbWVcIiAgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtpbnB1dC5zZW5kZXIuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlclBob25lTnVtYmVyMVwiPlBob25lIE51bWJlcjE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzZW5kZXJwaG9uZU51bWJlcjFcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlICB9IG5hbWU9XCJwaG9uZU51bWJlcjFcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMX0gIHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZU51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjEubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmRlcnBob25lTnVtYmVyMlwiPlBob25lIE51bWJlciAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwic2VuZGVycGhvbmVOdW1iZXIyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSB9IG5hbWU9XCJwaG9uZU51bWJlcjJcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMn0gIHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZU51bWJlcjIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIyLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZWl2ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgzPlJlY2VpdmVyIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicmVjZWl2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVyRmlyc3RuYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZWNlaXZlckZpcnN0bmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIuZmlyc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVyUGhvbmVOdW1iZXIxXCI+UGhvbmUgTnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInJlY2VpdmVycGhvbmVOdW1iZXIxXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwicGhvbmVOdW1iZXIxXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMX0gcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lTnVtYmVyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIxLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY2VpdmVycGhvbmVOdW1iZXIyXCI+UGhvbmUgTnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJyZWNlaXZlcnBob25lTnVtYmVyMlwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cInBob25lTnVtYmVyMlwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjJ9IHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZU51bWJlcjIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFnTmFtZVwiPlRhZyBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhZ05hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwidGFnTmFtZVwiIHZhbHVlPXtpbnB1dC50YWdOYW1lfSBwbGFjZWhvbGRlcj1cIlRhZyBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMudGFnTmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnRhZ05hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQ2FydG9uc1wiPk51bWJlciBvZiBjYXJ0b25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiQ2FydG9uc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJjYXJ0b25zXCIgdmFsdWU9e2lucHV0LmNhcnRvbnN9IHBsYWNlaG9sZGVyPVwiQ2FydG9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5jYXJ0b25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuY2FydG9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlckl0ZW1zXCI+T3RoZXIgSXRlbXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm90aGVySXRlbXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hlY2t9IG5hbWU9XCJvdGhlckl0ZW1zXCIgdmFsdWU9e2lucHV0Lm90aGVySXRlbXN9IHBsYWNlaG9sZGVyPVwib3RoZXJJdGVtc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5vdGhlckl0ZW1zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMub3RoZXJJdGVtc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpdGVtc1dvcnRoXCI+SXRlbXMgV29ydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbXNXb3J0aFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJpdGVtc1dvcnRoXCIgdmFsdWU9e2lucHV0Lml0ZW1zV29ydGh9IHBsYWNlaG9sZGVyPVwiaXRlbXNXb3J0aFwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5pdGVtc1dvcnRoLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuaXRlbXNXb3J0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZWxpdmVyeUxvY2F0aW9uXCI+RGVsaXZlcnkgTG9jYXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlbGl2ZXJ5TG9jYXRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGVsaXZlcnlMb2NhdGlvbnNcIiB2YWx1ZT17aW5wdXQuZGVsaXZlcnlMb2NhdGlvbnN9ICBwbGFjZWhvbGRlcj1cImRlbGl2ZXJ5TG9jYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjQwXCIgcm93cz1cIjZcIiBpZD1cImRlc2NyaXB0aW9uc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJkZXNjcmlwdGlvbnNcIiB2YWx1ZT17aW5wdXQuZGVzY3JpcHRpb25zfSAgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvbnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuZGVzY3JpcHRpb25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZGVzY3JpcHRpb25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGNoYW5nZVN0YXR1cygpXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0Ll9pZCA/ICg8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiID5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJ1cGRhdGVcIi8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PikgOig8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInByZXZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFJlcXVlc3Q7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgQWRkUmVxdWVzdCBmcm9tICcuL2FkZFJlcXVlc3QnO1xyXG5pbXBvcnQgUmVxdWVzdFByZXZpZXcgZnJvbSAnLi9yZXF1ZXN0UHJldmlldyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3RIYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge2NvdW50fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y291bnQgPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICA8QWRkUmVxdWVzdCAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8UmVxdWVzdFByZXZpZXcgLz4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RIYW5kbGVyOyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaW1wbGVTbGlkZXIgZnJvbSAnLi4vc2xpZGVyJztcclxuXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdFByZXZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2lucHV0LCBzZXRDb3VudCwgaGFuZGxlRm9ybVN1Ym1pdH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICAgXHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTbGlkZXIgLz4gXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aW5wdXQuX2lkID09IHVuZGVmaW5lZCA/ICBoYW5kbGVGb3JtU3VibWl0IDogKCk9PiBzZXRDb3VudCgpfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlbmRlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgaW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQucmVjZWl2ZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQudGFnTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5jYXJ0b25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0Lm90aGVySXRlbXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuaXRlbXNXb3J0aH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZXNjcmlwdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc3RhdHVzfTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIHsgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRWRpdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pOiAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSB9XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQcmV2aWV3OyIsImV4cG9ydCBjb25zdCBlbWFpbFJlZ2V4ID0gUmVnRXhwKCAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVmFsaWRhdGUgPSAoIG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cdFxyXG5cdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0Y2FzZSBcImZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmZpcnN0TmFtZSA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImxhc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMubGFzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBob25lTnVtYmVyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGhvbmVOdW1iZXIgPSB2YWx1ZS5sZW5ndGggPCAxMSAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqaW5wdXQgYSB2YWxpZCBwaG9uZSBudW1iZXIqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJhZGRyZXNzXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuYWRkcmVzcyA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcclxuXHQgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0VmFsaWRhdGUgPSAoIGlkLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHJcblx0c3dpdGNoIChpZCkge1xyXG5cdFx0Y2FzZSBcInNlbmRlckZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZW5kZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIxID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNlbmRlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjIgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmVjZWl2ZXJGaXJzdG5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMSA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMiA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ0YWdOYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMudGFnTmFtZSA9IHZhbHVlLmxlbmd0aCA8IDIgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIkNhcnRvbnNcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5jYXJ0b25zID0gdmFsdWUubGVuZ3RoIDw9IDAgID8gJyppbnB1dCBudW1iZXIgb2YgaXRlbXMqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIml0ZW1zV29ydGhcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5pdGVtc1dvcnRoID0gdmFsdWUubGVuZ3RoIDw9IDAgPyAnKmlucHV0IGl0ZW1zIHdvcnRoKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJkZWxpdmVyeUxvY2F0aW9uXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnMgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKmlucHV0IGEgcHJvcGVyIHN0YXRlKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJkZXNjcmlwdGlvbnNcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnMgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5WYWxpZGF0ZSA9ICggbmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblx0XHJcblx0c3dpdGNoIChuYW1lKSB7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwYXNzd29yZFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBhc3N3b3JkID0gdmFsdWUubGVuZ3RoIDwgNiAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqcGFzc3dvcmQgaXMgdG9vIHNob3J0KicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ3VwVmFsaWRhdGUgPSAoIG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cdFxyXG5cdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0Y2FzZSBcImZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmZpcnN0TmFtZSA9IHZhbHVlLmxlbmd0aCA+IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImxhc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMubGFzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPiAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwaG9uZU51bWJlclwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBob25lTnVtYmVyID0gdmFsdWUubGVuZ3RoID4gMTAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgbnVtYmVyKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGFzc3dvcmRcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5wYXNzd29yZCA9IHZhbHVlLmxlbmd0aCA8IDYgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKnBhc3N3b3JkIGlzIHRvbyBzaG9ydConIDogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdCAgfVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3VybENvbmZpZyc7IFxyXG4gICBcclxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBhcGlcclxufSk7XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NJbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVxdWVzdEhhbmRsZXIgZnJvbSAnLi4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXInO1xyXG5pbXBvcnQgUmVxdWVzdFN1Ym1pdCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RTdWJtaXQnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QmFja30gZnJvbSBcIi4uL3N2Z1wiO1xyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7cmVxdWVzdFN1Y2Nlc3N9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoPD5cclxuICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge0JhY2soKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB7IHJlcXVlc3RTdWNjZXNzICYmIChcclxuICAgICAgICAgICAgPFJlcXVlc3RTdWJtaXQgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInVzZXItcmVxdWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RIYW5kbGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7IiwiZXhwb3J0IGNvbnN0IGJveCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjIwNVwiIGNsYXNzTmFtZT1cImJveFwiIGhlaWdodD1cIjIzMVwiIHZpZXdCb3g9XCIwIDAgMjA1IDIzMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0xOTkuNjQgNjMuNTg0MVYxNzEuOTMzTDE3NS40MSAxODUuODc1QzE3Ny4wMzIgMTg0LjM5OCAxNzguMDg0IDE4Mi40IDE3OC4zODMgMTgwLjIzQzE3OC42ODMgMTc4LjA1OSAxNzguMjExIDE3NS44NTIgMTc3LjA0OSAxNzMuOTkzQzE3NS44ODcgMTcyLjEzMyAxNzQuMTA5IDE3MC43MzggMTcyLjAyNCAxNzAuMDQ5QzE2OS45MzggMTY5LjM2IDE2Ny42NzcgMTY5LjQyMSAxNjUuNjMyIDE3MC4yMjJDMTYzLjU4NiAxNzEuMDIyIDE2MS44ODcgMTcyLjUxMiAxNjAuODI4IDE3NC40MzFDMTU5Ljc2OSAxNzYuMzUxIDE1OS40MTggMTc4LjU4IDE1OS44MzUgMTgwLjczMUMxNjAuMjUxIDE4Mi44ODIgMTYxLjQxIDE4NC44MiAxNjMuMTEgMTg2LjIwOEMxNjQuODEgMTg3LjU5NiAxNjYuOTQ0IDE4OC4zNDcgMTY5LjE0MSAxODguMzI5QzE3MC4wOTIgMTg4LjMzNCAxNzEuMDM4IDE4OC4xOTIgMTcxLjk0NiAxODcuOTA3TDE1My4xMzkgMTk4Ljg0OUMxNTQuOTkxIDE5Ny4zNzYgMTU2LjIxOCAxOTUuMjU5IDE1Ni41NzQgMTkyLjkyM0MxNTYuOTI5IDE5MC41ODcgMTU2LjM4NyAxODguMjAzIDE1NS4wNTYgMTg2LjI0OEMxNTMuNzI2IDE4NC4yOTMgMTUxLjcwNCAxODIuOTExIDE0OS4zOTUgMTgyLjM3OUMxNDcuMDg3IDE4MS44NDYgMTQ0LjY2MiAxODIuMjAzIDE0Mi42MDUgMTgzLjM3NkMxNDAuNTQ5IDE4NC41NSAxMzkuMDEzIDE4Ni40NTUgMTM4LjMwNCAxODguNzFDMTM3LjU5NSAxOTAuOTY0IDEzNy43NjUgMTkzLjQwMyAxMzguNzgxIDE5NS41MzdDMTM5Ljc5NyAxOTcuNjcyIDE0MS41ODQgMTk5LjM0NiAxNDMuNzg0IDIwMC4yMjNDMTQ1Ljk4NCAyMDEuMTAxIDE0OC40MzUgMjAxLjExOCAxNTAuNjQ3IDIwMC4yNzFMMTAzLjI1MiAyMjcuNDA1TDYuODY0NzEgMTcxLjkzM1Y2NC40NDM4TDUxLjUxNjUgOTAuMjAyNUwxMDEuNjY5IDExOS4xMTlMMTAzLjIzNyAxMjAuMDI1TDEwNC44MDQgMTE5LjEwM0wxOTkuNjA5IDYzLjU4NDFIMTk5LjY0Wk0xMzcuMzU2IDE0MS43MzZDMTM4LjQxMSAxNDEuNzQgMTM5LjQ0NSAxNDEuNDQxIDE0MC4zMzQgMTQwLjg3NkwxNzEuOTQ2IDEyMC41NTZDMTcyLjU1NyAxMjAuMTcgMTczLjA4NiAxMTkuNjY3IDE3My41MDEgMTE5LjA3NkMxNzMuOTE3IDExOC40ODYgMTc0LjIxMSAxMTcuODE5IDE3NC4zNjcgMTE3LjExNEMxNzQuNTIyIDExNi40MSAxNzQuNTM3IDExNS42ODEgMTc0LjQwOSAxMTQuOTcxQzE3NC4yODIgMTE0LjI2MSAxNzQuMDE1IDExMy41ODMgMTczLjYyMyAxMTIuOTc2TDE3Mi40MDEgMTExLjE2M0MxNzIuMDEyIDExMC41NTYgMTcxLjUwOCAxMTAuMDMyIDE3MC45MTUgMTA5LjYyMUMxNzAuMzIzIDEwOS4yMSAxNjkuNjU1IDEwOC45MiAxNjguOTUgMTA4Ljc2OEMxNjguMjQ1IDEwOC42MTUgMTY3LjUxNyAxMDguNjAzIDE2Ni44MDcgMTA4LjczM0MxNjYuMDk3IDEwOC44NjIgMTY1LjQyIDEwOS4xMyAxNjQuODE1IDEwOS41MjJMMTMzLjIxOSAxMjkuNzMxQzEzMi42MDggMTMwLjEyNSAxMzIuMDgzIDEzMC42MzYgMTMxLjY3MyAxMzEuMjM1QzEzMS4yNjIgMTMxLjgzMyAxMzAuOTc2IDEzMi41MDcgMTMwLjgzIDEzMy4yMTdDMTMwLjY4NCAxMzMuOTI3IDEzMC42ODIgMTM0LjY1OSAxMzAuODIzIDEzNS4zNzFDMTMwLjk2NCAxMzYuMDgyIDEzMS4yNDUgMTM2Ljc1OCAxMzEuNjUxIDEzNy4zNTlMMTMyLjgyNyAxMzkuMTg4QzEzMy4zMjUgMTM5Ljk3OSAxMzQuMDE5IDE0MC42MjggMTM0Ljg0MyAxNDEuMDcyQzEzNS42NjcgMTQxLjUxNSAxMzYuNTkyIDE0MS43MzkgMTM3LjUyOSAxNDEuNzJMMTM3LjM1NiAxNDEuNzM2Wk0xODkuNTk0IDE3NS43OTRDMTkxLjQ1NCAxNzUuNzk0IDE5My4yNzIgMTc1LjI0NCAxOTQuODE4IDE3NC4yMTNDMTk2LjM2NSAxNzMuMTgzIDE5Ny41NyAxNzEuNzE4IDE5OC4yODIgMTcwLjAwNUMxOTguOTkzIDE2OC4yOTEgMTk5LjE4IDE2Ni40MDUgMTk4LjgxNyAxNjQuNTg2QzE5OC40NTQgMTYyLjc2NyAxOTcuNTU4IDE2MS4wOTYgMTk2LjI0MyAxNTkuNzg0QzE5NC45MjggMTU4LjQ3MyAxOTMuMjUyIDE1Ny41OCAxOTEuNDI4IDE1Ny4yMThDMTg5LjYwNCAxNTYuODU2IDE4Ny43MTMgMTU3LjA0MiAxODUuOTk1IDE1Ny43NTFDMTg0LjI3NyAxNTguNDYxIDE4Mi44MDggMTU5LjY2MyAxODEuNzc1IDE2MS4yMDZDMTgwLjc0MiAxNjIuNzQ4IDE4MC4xOSAxNjQuNTYxIDE4MC4xOSAxNjYuNDE2QzE4MC4xOSAxNjguOTAzIDE4MS4xODEgMTcxLjI4OCAxODIuOTQ0IDE3My4wNDdDMTg0LjcwOCAxNzQuODA2IDE4Ny4xIDE3NS43OTQgMTg5LjU5NCAxNzUuNzk0Wk0yMDIuMTMyIDU4LjU2NjhMMTAzLjM5MyAxMTYuMzk5TDUzLjA5OTQgODcuNTI5N0wzLjc5Mjg1IDU5LjA1MTNWMTczLjY1M0wxMDMuMzE1IDIzMC45NTNMMjAyLjgzNyAxNzMuNjUzVjU5LjA5ODJMMjAxLjk5MSA1OC42MTM3TDIwMi4xMzIgNTguNTY2OFpNMTM3LjM4OCAxMzguNTk0QzEzNi45OTkgMTM4LjYgMTM2LjYxNSAxMzguNTA3IDEzNi4yNzIgMTM4LjMyM0MxMzUuOTI5IDEzOC4xNCAxMzUuNjM5IDEzNy44NzMgMTM1LjQyOSAxMzcuNTQ3TDEzNC4yMjIgMTM1LjY4N0MxMzMuODkgMTM1LjE2MyAxMzMuNzc4IDEzNC41MyAxMzMuOTEgMTMzLjkyNUMxMzQuMDQyIDEzMy4zMiAxMzQuNDA3IDEzMi43OSAxMzQuOTI3IDEzMi40NTFMMTY2LjU4NiAxMTIuMTMyQzE2Ni45NTkgMTExLjg4OCAxNjcuMzk0IDExMS43NTggMTY3Ljg0IDExMS43NTdDMTY4LjIzNSAxMTEuNzU5IDE2OC42MjQgMTExLjg1OSAxNjguOTcxIDExMi4wNDdDMTY5LjMxOCAxMTIuMjM1IDE2OS42MTMgMTEyLjUwNiAxNjkuODMgMTEyLjgzNUwxNzEuMDM3IDExNC42OTVDMTcxLjM3MSAxMTUuMjIgMTcxLjQ4MyAxMTUuODU1IDE3MS4zNDggMTE2LjQ2MkMxNzEuMjEzIDExNy4wNjggMTcwLjg0MiAxMTcuNTk3IDE3MC4zMTYgMTE3LjkzMUwxMzguNjczIDEzOC4yNUMxMzguMjkyIDEzOC41MDEgMTM3Ljg0NCAxMzguNjMyIDEzNy4zODggMTM4LjYyNVYxMzguNTk0Wk0xODkuNDUzIDE3Mi42NjhDMTg4LjIxMyAxNzIuNjY4IDE4Ny4wMDEgMTcyLjMwMSAxODUuOTcgMTcxLjYxNEMxODQuOTM5IDE3MC45MjcgMTg0LjEzNSAxNjkuOTUxIDE4My42NjEgMTY4LjgwOEMxODMuMTg2IDE2Ny42NjYgMTgzLjA2MiAxNjYuNDA5IDE4My4zMDQgMTY1LjE5NkMxODMuNTQ2IDE2My45ODMgMTg0LjE0MyAxNjIuODY5IDE4NS4wMiAxNjEuOTk1QzE4NS44OTYgMTYxLjEyIDE4Ny4wMTMgMTYwLjUyNSAxODguMjMgMTYwLjI4NEMxODkuNDQ2IDE2MC4wNDMgMTkwLjcwNiAxNjAuMTY2IDE5MS44NTIgMTYwLjY0QzE5Mi45OTcgMTYxLjExMyAxOTMuOTc2IDE2MS45MTQgMTk0LjY2NSAxNjIuOTQyQzE5NS4zNTQgMTYzLjk3IDE5NS43MjIgMTY1LjE3OSAxOTUuNzIyIDE2Ni40MTZDMTk1LjcyMiAxNjguMDc0IDE5NS4wNjEgMTY5LjY2NCAxOTMuODg2IDE3MC44MzdDMTkyLjcxIDE3Mi4wMDkgMTkxLjExNSAxNzIuNjY4IDE4OS40NTMgMTcyLjY2OFpNMTY5LjA3OCAxODUuMTcyQzE2Ny44MzggMTg1LjE3MiAxNjYuNjI2IDE4NC44MDUgMTY1LjU5NSAxODQuMTE4QzE2NC41NjQgMTgzLjQzMSAxNjMuNzYxIDE4Mi40NTUgMTYzLjI4NiAxODEuMzEzQzE2Mi44MTIgMTgwLjE3IDE2Mi42ODcgMTc4LjkxMyAxNjIuOTI5IDE3Ny43QzE2My4xNzEgMTc2LjQ4NyAxNjMuNzY4IDE3NS4zNzMgMTY0LjY0NSAxNzQuNDk5QzE2NS41MjIgMTczLjYyNSAxNjYuNjM5IDE3My4wMjkgMTY3Ljg1NSAxNzIuNzg4QzE2OS4wNzEgMTcyLjU0NyAxNzAuMzMyIDE3Mi42NzEgMTcxLjQ3NyAxNzMuMTQ0QzE3Mi42MjMgMTczLjYxNyAxNzMuNjAyIDE3NC40MTggMTc0LjI5MSAxNzUuNDQ3QzE3NC45NzkgMTc2LjQ3NSAxNzUuMzQ3IDE3Ny42ODMgMTc1LjM0NyAxNzguOTJDMTc1LjM0NyAxODAuNTc4IDE3NC42ODcgMTgyLjE2OCAxNzMuNTExIDE4My4zNDFDMTcyLjMzNSAxODQuNTEzIDE3MC43NDEgMTg1LjE3MiAxNjkuMDc4IDE4NS4xNzJaTTE0Ny4xMzYgMTk3LjY3NkMxNDUuODk2IDE5Ny42NzYgMTQ0LjY4NCAxOTcuMzEgMTQzLjY1MyAxOTYuNjIzQzE0Mi42MjIgMTk1LjkzNiAxNDEuODE5IDE5NC45NTkgMTQxLjM0NCAxOTMuODE3QzE0MC44NyAxOTIuNjc0IDE0MC43NDYgMTkxLjQxNyAxNDAuOTg3IDE5MC4yMDRDMTQxLjIyOSAxODguOTkyIDE0MS44MjYgMTg3Ljg3OCAxNDIuNzAzIDE4Ny4wMDNDMTQzLjU4IDE4Ni4xMjkgMTQ0LjY5NyAxODUuNTMzIDE0NS45MTMgMTg1LjI5MkMxNDcuMTI5IDE4NS4wNTEgMTQ4LjM5IDE4NS4xNzUgMTQ5LjUzNSAxODUuNjQ4QzE1MC42ODEgMTg2LjEyMSAxNTEuNjYgMTg2LjkyMyAxNTIuMzQ5IDE4Ny45NTFDMTUzLjAzOCAxODguOTc5IDE1My40MDUgMTkwLjE4OCAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxOTMuMDgyIDE1Mi43NDUgMTk0LjY3MyAxNTEuNTY5IDE5NS44NDVDMTUwLjM5MyAxOTcuMDE4IDE0OC43OTkgMTk3LjY3NiAxNDcuMTM2IDE5Ny42NzZaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0Ny4xMzYgMTk2Ljg5NUMxNTAuMTY2IDE5Ni44OTUgMTUyLjYyMiAxOTQuNDQ1IDE1Mi42MjIgMTkxLjQyNEMxNTIuNjIyIDE4OC40MDMgMTUwLjE2NiAxODUuOTUzIDE0Ny4xMzYgMTg1Ljk1M0MxNDQuMTA3IDE4NS45NTMgMTQxLjY1MSAxODguNDAzIDE0MS42NTEgMTkxLjQyNEMxNDEuNjUxIDE5NC40NDUgMTQ0LjEwNyAxOTYuODk1IDE0Ny4xMzYgMTk2Ljg5NVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0Ny4xMzYgMTg2LjczNUMxNDguMDY2IDE4Ni43MzUgMTQ4Ljk3NSAxODcuMDEgMTQ5Ljc0OCAxODcuNTI1QzE1MC41MjEgMTg4LjA0MSAxNTEuMTI0IDE4OC43NzMgMTUxLjQ4IDE4OS42M0MxNTEuODM2IDE5MC40ODYgMTUxLjkyOSAxOTEuNDI5IDE1MS43NDggMTkyLjMzOUMxNTEuNTY2IDE5My4yNDggMTUxLjExOCAxOTQuMDg0IDE1MC40NjEgMTk0Ljc0QzE0OS44MDMgMTk1LjM5NiAxNDguOTY1IDE5NS44NDIgMTQ4LjA1MyAxOTYuMDIzQzE0Ny4xNDEgMTk2LjIwNCAxNDYuMTk2IDE5Ni4xMTEgMTQ1LjMzNyAxOTUuNzU2QzE0NC40NzggMTk1LjQwMSAxNDMuNzQzIDE5NC44IDE0My4yMjcgMTk0LjAyOUMxNDIuNzEgMTkzLjI1OCAxNDIuNDM0IDE5Mi4zNTIgMTQyLjQzNCAxOTEuNDI0QzE0Mi40MzQgMTkwLjE4IDE0Mi45MyAxODguOTg4IDE0My44MTEgMTg4LjEwOEMxNDQuNjkzIDE4Ny4yMjkgMTQ1Ljg4OSAxODYuNzM1IDE0Ny4xMzYgMTg2LjczNVpNMTQ3LjEzNiAxODUuMTcyQzE0NS44OTYgMTg1LjE3MiAxNDQuNjg0IDE4NS41MzkgMTQzLjY1MyAxODYuMjI2QzE0Mi42MjIgMTg2LjkxMyAxNDEuODE5IDE4Ny44ODkgMTQxLjM0NCAxODkuMDMyQzE0MC44NyAxOTAuMTc0IDE0MC43NDYgMTkxLjQzMSAxNDAuOTg3IDE5Mi42NDRDMTQxLjIyOSAxOTMuODU3IDE0MS44MjYgMTk0Ljk3MSAxNDIuNzAzIDE5NS44NDVDMTQzLjU4IDE5Ni43MTkgMTQ0LjY5NyAxOTcuMzE1IDE0NS45MTMgMTk3LjU1NkMxNDcuMTI5IDE5Ny43OTcgMTQ4LjM5IDE5Ny42NzQgMTQ5LjUzNSAxOTcuMkMxNTAuNjgxIDE5Ni43MjcgMTUxLjY2IDE5NS45MjYgMTUyLjM0OSAxOTQuODk4QzE1My4wMzggMTkzLjg2OSAxNTMuNDA1IDE5Mi42NjEgMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTg5Ljc2NiAxNTIuNzQ1IDE4OC4xNzYgMTUxLjU2OSAxODcuMDAzQzE1MC4zOTMgMTg1LjgzMSAxNDguNzk5IDE4NS4xNzIgMTQ3LjEzNiAxODUuMTcyWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMzcuNDAzIDEzNy44MTJDMTM3LjE0MyAxMzcuODE0IDEzNi44ODYgMTM3Ljc1IDEzNi42NTYgMTM3LjYyN0MxMzYuNDI2IDEzNy41MDQgMTM2LjIzIDEzNy4zMjYgMTM2LjA4NyAxMzcuMTA5TDEzNC44NjQgMTM1LjIzM0MxMzQuNjQ5IDEzNC44ODIgMTM0LjU4MiAxMzQuNDYxIDEzNC42NzYgMTM0LjA2MUMxMzQuNzE0IDEzMy44NjMgMTM0Ljc5MSAxMzMuNjc1IDEzNC45MDQgMTMzLjUwOEMxMzUuMDE4IDEzMy4zNDIgMTM1LjE2NCAxMzMuMiAxMzUuMzM0IDEzMy4wOTJMMTY3LjAwOSAxMTIuNzczQzE2Ny4yNTIgMTEyLjYwMSAxNjcuNTQyIDExMi41MDkgMTY3Ljg0IDExMi41MDdDMTY4LjEwMiAxMTIuNTA3IDE2OC4zNiAxMTIuNTczIDE2OC41OSAxMTIuNjk5QzE2OC44MiAxMTIuODI1IDE2OS4wMTUgMTEzLjAwNiAxNjkuMTU2IDExMy4yMjZMMTcwLjM3OSAxMTUuMTAxQzE3MC41OTEgMTE1LjQ0OSAxNzAuNjYgMTE1Ljg2NiAxNzAuNTY5IDExNi4yNjNDMTcwLjQ3OCAxMTYuNjYgMTcwLjIzNiAxMTcuMDA2IDE2OS44OTMgMTE3LjIyN0wxMzguMjUgMTM3LjU0N0MxMzcuOTk5IDEzNy43MTUgMTM3LjcwNSAxMzcuODA3IDEzNy40MDMgMTM3LjgxMlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE2Ny44NCAxMTMuMzM1QzE2Ny45NzQgMTEzLjMzNyAxNjguMTA3IDExMy4zNzMgMTY4LjIyNCAxMTMuNDM4QzE2OC4zNDIgMTEzLjUwNCAxNjguNDQxIDExMy41OTcgMTY4LjUxNCAxMTMuNzFMMTY5LjcwNSAxMTUuNTU1QzE2OS44MTcgMTE1LjczMSAxNjkuODU2IDExNS45NDQgMTY5LjgxNSAxMTYuMTQ5QzE2OS43OTIgMTE2LjI1IDE2OS43NDkgMTE2LjM0NiAxNjkuNjg3IDExNi40M0MxNjkuNjI0IDExNi41MTMgMTY5LjU0NSAxMTYuNTgzIDE2OS40NTQgMTE2LjYzM0wxMzcuODExIDEzNi45NTNDMTM3LjY4MiAxMzcuMDI3IDEzNy41MzYgMTM3LjA2NSAxMzcuMzg4IDEzNy4wNjJDMTM3LjI1NiAxMzcuMDYzIDEzNy4xMjcgMTM3LjAzMSAxMzcuMDExIDEzNi45NjhDMTM2Ljg5NiAxMzYuOTA1IDEzNi43OTkgMTM2LjgxNCAxMzYuNzI5IDEzNi43MDNMMTM1LjUzOCAxMzQuODU4QzEzNS40MjggMTM0LjY4MSAxMzUuMzg5IDEzNC40NjkgMTM1LjQyOCAxMzQuMjY0QzEzNS40NTEgMTM0LjE2NSAxMzUuNDkzIDEzNC4wNyAxMzUuNTUyIDEzMy45ODdDMTM1LjYxMSAxMzMuOTA0IDEzNS42ODYgMTMzLjgzMyAxMzUuNzczIDEzMy43OEwxNjcuNDMyIDExMy40NkMxNjcuNTU0IDExMy4zODIgMTY3LjY5NSAxMTMuMzM5IDE2Ny44NCAxMTMuMzM1Wk0xNjcuODQgMTExLjc3MkMxNjcuMzk0IDExMS43NzEgMTY2Ljk1OCAxMTEuOTAyIDE2Ni41ODYgMTEyLjE0N0wxMzQuOTI3IDEzMi40NjdDMTM0LjQwNyAxMzIuODA2IDEzNC4wNDIgMTMzLjMzNSAxMzMuOTEgMTMzLjk0QzEzMy43NzggMTM0LjU0NiAxMzMuODkgMTM1LjE3OCAxMzQuMjIyIDEzNS43MDJMMTM1LjQyOCAxMzcuNTQ3QzEzNS41OTQgMTM3LjgwNiAxMzUuODEgMTM4LjAzMSAxMzYuMDYzIDEzOC4yMDdDMTM2LjMxNiAxMzguMzg0IDEzNi42MDIgMTM4LjUwOCAxMzYuOTAzIDEzOC41NzNDMTM3LjIwNSAxMzguNjM5IDEzNy41MTcgMTM4LjY0NCAxMzcuODIxIDEzOC41ODhDMTM4LjEyNCAxMzguNTMzIDEzOC40MTQgMTM4LjQxOCAxMzguNjczIDEzOC4yNUwxNzAuMzE2IDExNy45MzFDMTcwLjg0MiAxMTcuNTk3IDE3MS4yMTMgMTE3LjA2OCAxNzEuMzQ4IDExNi40NjJDMTcxLjQ4MyAxMTUuODU1IDE3MS4zNzEgMTE1LjIyIDE3MS4wMzcgMTE0LjY5NUwxNjkuODMgMTEyLjgzNUMxNjkuNjEzIDExMi41MDYgMTY5LjMxOCAxMTIuMjM1IDE2OC45NzEgMTEyLjA0N0MxNjguNjI0IDExMS44NTkgMTY4LjIzNSAxMTEuNzU5IDE2Ny44NCAxMTEuNzU3VjExMS43NzJaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE2OS4wNzggMTg0LjM5QzE3Mi4xMDggMTg0LjM5IDE3NC41NjMgMTgxLjk0MSAxNzQuNTYzIDE3OC45MkMxNzQuNTYzIDE3NS44OTggMTcyLjEwOCAxNzMuNDQ5IDE2OS4wNzggMTczLjQ0OUMxNjYuMDQ4IDE3My40NDkgMTYzLjU5MyAxNzUuODk4IDE2My41OTMgMTc4LjkyQzE2My41OTMgMTgxLjk0MSAxNjYuMDQ4IDE4NC4zOSAxNjkuMDc4IDE4NC4zOVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE2OS4wNzggMTc0LjIzMUMxNzAuMDA4IDE3NC4yMzEgMTcwLjkxNyAxNzQuNTA2IDE3MS42OSAxNzUuMDIxQzE3Mi40NjMgMTc1LjUzNiAxNzMuMDY2IDE3Ni4yNjkgMTczLjQyMiAxNzcuMTI1QzE3My43NzggMTc3Ljk4MiAxNzMuODcxIDE3OC45MjUgMTczLjY4OSAxNzkuODM1QzE3My41MDggMTgwLjc0NCAxNzMuMDYgMTgxLjU4IDE3Mi40MDMgMTgyLjIzNkMxNzEuNzQ1IDE4Mi44OTEgMTcwLjkwNyAxODMuMzM4IDE2OS45OTUgMTgzLjUxOUMxNjkuMDgzIDE4My43IDE2OC4xMzggMTgzLjYwNyAxNjcuMjc5IDE4My4yNTJDMTY2LjQxOSAxODIuODk3IDE2NS42ODUgMTgyLjI5NiAxNjUuMTY5IDE4MS41MjVDMTY0LjY1MiAxODAuNzU0IDE2NC4zNzYgMTc5Ljg0NyAxNjQuMzc2IDE3OC45MkMxNjQuMzc2IDE3Ny42NzYgMTY0Ljg3MSAxNzYuNDg0IDE2NS43NTMgMTc1LjYwNEMxNjYuNjM1IDE3NC43MjUgMTY3LjgzMSAxNzQuMjMxIDE2OS4wNzggMTc0LjIzMVpNMTY5LjA3OCAxNzIuNjY4QzE2Ny44MzggMTcyLjY2OCAxNjYuNjI2IDE3My4wMzQgMTY1LjU5NSAxNzMuNzIxQzE2NC41NjQgMTc0LjQwOCAxNjMuNzYxIDE3NS4zODUgMTYzLjI4NiAxNzYuNTI3QzE2Mi44MTIgMTc3LjY3IDE2Mi42ODcgMTc4LjkyNyAxNjIuOTI5IDE4MC4xNEMxNjMuMTcxIDE4MS4zNTIgMTYzLjc2OCAxODIuNDY2IDE2NC42NDUgMTgzLjM0MUMxNjUuNTIyIDE4NC4yMTUgMTY2LjYzOSAxODQuODExIDE2Ny44NTUgMTg1LjA1MkMxNjkuMDcxIDE4NS4yOTMgMTcwLjMzMiAxODUuMTY5IDE3MS40NzcgMTg0LjY5NkMxNzIuNjIzIDE4NC4yMjMgMTczLjYwMiAxODMuNDIxIDE3NC4yOTEgMTgyLjM5M0MxNzQuOTc5IDE4MS4zNjUgMTc1LjM0NyAxODAuMTU2IDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTc3LjI2MiAxNzQuNjg3IDE3NS42NzEgMTczLjUxMSAxNzQuNDk5QzE3Mi4zMzUgMTczLjMyNiAxNzAuNzQxIDE3Mi42NjggMTY5LjA3OCAxNzIuNjY4WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xODkuNDUzIDE3MS44ODZDMTkyLjQ4MiAxNzEuODg2IDE5NC45MzggMTY5LjQzNyAxOTQuOTM4IDE2Ni40MTZDMTk0LjkzOCAxNjMuMzk0IDE5Mi40ODIgMTYwLjk0NSAxODkuNDUzIDE2MC45NDVDMTg2LjQyMyAxNjAuOTQ1IDE4My45NjcgMTYzLjM5NCAxODMuOTY3IDE2Ni40MTZDMTgzLjk2NyAxNjkuNDM3IDE4Ni40MjMgMTcxLjg4NiAxODkuNDUzIDE3MS44ODZaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xODkuNDUzIDE2MS43MjdDMTkwLjM4MyAxNjEuNzI3IDE5MS4yOTIgMTYyLjAwMiAxOTIuMDY1IDE2Mi41MTdDMTkyLjgzOCAxNjMuMDMyIDE5My40NDEgMTYzLjc2NCAxOTMuNzk3IDE2NC42MjFDMTk0LjE1MyAxNjUuNDc4IDE5NC4yNDYgMTY2LjQyMSAxOTQuMDY0IDE2Ny4zM0MxOTMuODgzIDE2OC4yNCAxOTMuNDM1IDE2OS4wNzYgMTkyLjc3NyAxNjkuNzMxQzE5Mi4xMiAxNzAuMzg3IDE5MS4yODIgMTcwLjgzNCAxOTAuMzcgMTcxLjAxNUMxODkuNDU4IDE3MS4xOTYgMTg4LjUxMyAxNzEuMTAzIDE4Ny42NTMgMTcwLjc0OEMxODYuNzk0IDE3MC4zOTMgMTg2LjA2IDE2OS43OTIgMTg1LjU0MyAxNjkuMDIxQzE4NS4wMjcgMTY4LjI1IDE4NC43NTEgMTY3LjM0MyAxODQuNzUxIDE2Ni40MTZDMTg0Ljc1MSAxNjUuMTcyIDE4NS4yNDYgMTYzLjk3OSAxODYuMTI4IDE2My4xQzE4Ny4wMSAxNjIuMjIxIDE4OC4yMDYgMTYxLjcyNyAxODkuNDUzIDE2MS43MjdaTTE4OS40NTMgMTYwLjE2NEMxODguMjEzIDE2MC4xNjQgMTg3LjAwMSAxNjAuNTMgMTg1Ljk3IDE2MS4yMTdDMTg0LjkzOSAxNjEuOTA0IDE4NC4xMzUgMTYyLjg4MSAxODMuNjYxIDE2NC4wMjNDMTgzLjE4NiAxNjUuMTY2IDE4My4wNjIgMTY2LjQyMyAxODMuMzA0IDE2Ny42MzVDMTgzLjU0NiAxNjguODQ4IDE4NC4xNDMgMTY5Ljk2MiAxODUuMDIgMTcwLjgzN0MxODUuODk3IDE3MS43MTEgMTg3LjAxNCAxNzIuMzA2IDE4OC4yMyAxNzIuNTQ4QzE4OS40NDYgMTcyLjc4OSAxOTAuNzA2IDE3Mi42NjUgMTkxLjg1MiAxNzIuMTkyQzE5Mi45OTcgMTcxLjcxOSAxOTMuOTc2IDE3MC45MTcgMTk0LjY2NSAxNjkuODg5QzE5NS4zNTQgMTY4Ljg2MSAxOTUuNzIyIDE2Ny42NTIgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTY0Ljc1OCAxOTUuMDYxIDE2My4xNjcgMTkzLjg4NiAxNjEuOTk1QzE5Mi43MSAxNjAuODIyIDE5MS4xMTUgMTYwLjE2NCAxODkuNDUzIDE2MC4xNjRaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0Ni45MzIgMjYuOTYyMkw5Ny45MjM2IDU4LjU4MjNMNTMuMDk5NCA4Ny40OTg0TDMuNzkyODUgNTkuMDUxMkw0LjYzOTE4IDU4LjU4MjNMMTAzLjI1MiAxLjgxMzExTDE0Ni45MzIgMjYuOTYyMlpcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yLjk0NjUzIDU4LjU4MjNINC42MzkxOUwzLjc5Mjg2IDU5LjA1MTJMMi45NDY1MyA1OC41ODIzWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTIwMS45MjggNTguNjI5MkwxMDMuMjUyIDExNi4zOTlMNTMuMDk5NCA4Ny40OTg0TDk3LjkyMzUgNTguNTgyNEwxNDYuOTMyIDI2Ljk2MjNMMjAxLjgzNCA1OC41ODI0TDIwMS45MjggNTguNjI5MlpcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yMDEuOTkxIDU4LjU4MjNMMjAxLjkyOCA1OC42MjkyTDIwMS44MzQgNTguNTgyM0gyMDEuOTkxWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTEwMy4yNTIgMTE2LjM5OVYyMzAuNVwiIHN0cm9rZT1cIiMyMTM1NjlcIiBzdHJva2VXaWR0aD1cIjNcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE2OS4wNzggMTg1LjE3MkMxNzIuNTQgMTg1LjE3MiAxNzUuMzQ3IDE4Mi4zNzMgMTc1LjM0NyAxNzguOTJDMTc1LjM0NyAxNzUuNDY3IDE3Mi41NCAxNzIuNjY4IDE2OS4wNzggMTcyLjY2OEMxNjUuNjE2IDE3Mi42NjggMTYyLjgwOSAxNzUuNDY3IDE2Mi44MDkgMTc4LjkyQzE2Mi44MDkgMTgyLjM3MyAxNjUuNjE2IDE4NS4xNzIgMTY5LjA3OCAxODUuMTcyWlwiIGZpbGw9XCIjMjEzNTY5XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTE0Ny4xMzYgMTk3LjY3NkMxNTAuNTk4IDE5Ny42NzYgMTUzLjQwNSAxOTQuODc3IDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE4Ny45NzEgMTUwLjU5OCAxODUuMTcyIDE0Ny4xMzYgMTg1LjE3MkMxNDMuNjc0IDE4NS4xNzIgMTQwLjg2NyAxODcuOTcxIDE0MC44NjcgMTkxLjQyNEMxNDAuODY3IDE5NC44NzcgMTQzLjY3NCAxOTcuNjc2IDE0Ny4xMzYgMTk3LjY3NlpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xODkuNDUzIDE3Mi42NjhDMTkyLjkxNSAxNzIuNjY4IDE5NS43MjIgMTY5Ljg2OSAxOTUuNzIyIDE2Ni40MTZDMTk1LjcyMiAxNjIuOTYzIDE5Mi45MTUgMTYwLjE2NCAxODkuNDUzIDE2MC4xNjRDMTg1Ljk5IDE2MC4xNjQgMTgzLjE4NCAxNjIuOTYzIDE4My4xODQgMTY2LjQxNkMxODMuMTg0IDE2OS44NjkgMTg1Ljk5IDE3Mi42NjggMTg5LjQ1MyAxNzIuNjY4WlwiIGZpbGw9XCIjMjEzNTY5XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMTU0XCIgY2xhc3NOYW1lPVwicHJvZmlsZVwiIGhlaWdodD1cIjE3NFwiIHZpZXdCb3g9XCIwIDAgMTU0IDE3NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0xMDcuOCAxMDMuMzEyQzk3LjkzNDQgMTAzLjMxMiA5My4xOTA2IDEwOC43NSA3NyAxMDguNzVDNjAuODA5NCAxMDguNzUgNTYuMSAxMDMuMzEyIDQ2LjIgMTAzLjMxMkMyMC42OTM3IDEwMy4zMTIgMCAxMjMuNzcxIDAgMTQ4Ljk4OFYxNTcuNjg4QzAgMTY2LjY5MyA3LjM5MDYyIDE3NCAxNi41IDE3NEgxMzcuNUMxNDYuNjA5IDE3NCAxNTQgMTY2LjY5MyAxNTQgMTU3LjY4OFYxNDguOTg4QzE1NCAxMjMuNzcxIDEzMy4zMDYgMTAzLjMxMiAxMDcuOCAxMDMuMzEyWk0xMzcuNSAxNTcuNjg4SDE2LjVWMTQ4Ljk4OEMxNi41IDEzMi44MTEgMjkuODM3NSAxMTkuNjI1IDQ2LjIgMTE5LjYyNUM1MS4yMTg3IDExOS42MjUgNTkuMzY1NiAxMjUuMDYyIDc3IDEyNS4wNjJDOTQuNzcxOSAxMjUuMDYyIDEwMi43NDcgMTE5LjYyNSAxMDcuOCAxMTkuNjI1QzEyNC4xNjIgMTE5LjYyNSAxMzcuNSAxMzIuODExIDEzNy41IDE0OC45ODhWMTU3LjY4OFpNNzcgOTcuODc1QzEwNC4zMjggOTcuODc1IDEyNi41IDc1Ljk1NTEgMTI2LjUgNDguOTM3NUMxMjYuNSAyMS45MTk5IDEwNC4zMjggMCA3NyAwQzQ5LjY3MTkgMCAyNy41IDIxLjkxOTkgMjcuNSA0OC45Mzc1QzI3LjUgNzUuOTU1MSA0OS42NzE5IDk3Ljg3NSA3NyA5Ny44NzVaTTc3IDE2LjMxMjVDOTUuMTg0NCAxNi4zMTI1IDExMCAzMC45NTk4IDExMCA0OC45Mzc1QzExMCA2Ni45MTUyIDk1LjE4NDQgODEuNTYyNSA3NyA4MS41NjI1QzU4LjgxNTYgODEuNTYyNSA0NCA2Ni45MTUyIDQ0IDQ4LjkzNzVDNDQgMzAuOTU5OCA1OC44MTU2IDE2LjMxMjUgNzcgMTYuMzEyNVpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIxODFcIiBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvblwiIGhlaWdodD1cIjE1OVwiIHZpZXdCb3g9XCIwIDAgMTgxIDE1OVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0xNjMuMDQxIDM0LjI1SDI4LjI4MTJDMjUuMTU2MiAzNC4yNSAyMi42MjUgMzEuNzE4OCAyMi42MjUgMjguNTkzOEMyMi42MjUgMjUuNDY4NyAyNS4xNTYyIDIyLjkzNzUgMjguMjgxMiAyMi45Mzc1SDE2NC4wMzFDMTY3LjE1NiAyMi45Mzc1IDE2OS42ODggMjAuNDA2MyAxNjkuNjg4IDE3LjI4MTJDMTY5LjY4OCA3LjkwOTU1IDE2Mi4wOSAwLjMxMjUgMTUyLjcxOSAwLjMxMjVIMjIuNjI1QzEwLjEyODIgMC4zMTI1IDAgMTAuNDQwNyAwIDIyLjkzNzVWMTM2LjA2MkMwIDE0OC41NTkgMTAuMTI4MiAxNTguNjg4IDIyLjYyNSAxNTguNjg4SDE2My4wNDFDMTcyLjk0NyAxNTguNjg4IDE4MSAxNTEuMDc2IDE4MSAxNDEuNzE5VjUxLjIxODhDMTgxIDQxLjg2MTIgMTcyLjk0NyAzNC4yNSAxNjMuMDQxIDM0LjI1Wk0xNDcuMDYyIDEwNy43ODFDMTQwLjgxNiAxMDcuNzgxIDEzNS43NSAxMDIuNzE1IDEzNS43NSA5Ni40Njg4QzEzNS43NSA5MC4yMjIxIDE0MC44MTYgODUuMTU2MiAxNDcuMDYyIDg1LjE1NjJDMTUzLjMwOSA4NS4xNTYyIDE1OC4zNzUgOTAuMjIyMSAxNTguMzc1IDk2LjQ2ODhDMTU4LjM3NSAxMDIuNzE1IDE1My4zMDkgMTA3Ljc4MSAxNDcuMDYyIDEwNy43ODFaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdmF0YXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIyOTJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiBoZWlnaHQ9XCIyOTJcIiB2aWV3Qm94PVwiMCAwIDI5MiAyOTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxjaXJjbGUgY3g9XCIxNDZcIiBjeT1cIjE0NlwiIHI9XCIxNDZcIiBmaWxsPVwiI0M0QzRDNFwiLz5cclxuICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTk1Ljg4OSAxMTQuODk4QzE4NS40MDQgMTMwLjY1OSAxNjcuNDggMTQxLjA0NiAxNDcuMTMgMTQxLjA0NkMxMjQuODE0IDE0MS4wNDYgMTA1LjQxNiAxMjguNTU1IDk1LjU0NTEgMTEwLjE4M0M5My4xMDczIDExMi45MDUgOTAuODQ5OSAxMTUuODg1IDg4LjgwNzMgMTE5LjEyNkw4NC43NzIyIDEyNS41MjhDNTcuNDg5MSAxNjguODExIDg4LjU5NSAyMjUuMTg4IDEzOS43NiAyMjUuMTg4SDE0Ny44M0MxOTguOTk1IDIyNS4xODggMjMwLjEwMSAxNjguODExIDIwMi44MTggMTI1LjUyOEwxOTguNzgzIDExOS4xMjZDMTk3Ljg2MSAxMTcuNjY0IDE5Ni44OTYgMTE2LjI1NCAxOTUuODg5IDExNC44OThaXCIgZmlsbD1cIiNGM0VDRUNcIi8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTQ3LjEzXCIgY3k9XCI4Mi41MjYyXCIgcj1cIjQzLjk2NTlcIiBmaWxsPVwiI0YzRUNFQ1wiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICApOyAgICAgICBcclxuXHJcbn07XHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIyMDRcIiBjbGFzc05hbWU9XCJ1cGxvYWRcIiBoZWlnaHQ9XCIyMDRcIiB2aWV3Qm94PVwiMCAwIDIwNCAyMDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxjaXJjbGUgY3g9XCIxMDJcIiBjeT1cIjEwMlwiIHI9XCIxMDJcIiBmaWxsPVwiI0M0QzRDNFwiLz5cclxuICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTA2LjU2NyAxMDYuNTY3VjE0MS41ODJIOTcuNDMyOVYxMDYuNTY3SDYyLjQxOFY5Ny40MzI4SDk3LjQzMjlWNjIuNDE3OUgxMDYuNTY3Vjk3LjQzMjhIMTQxLjU4MlYxMDYuNTY3SDEwNi41NjdaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMzMgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMzAuMjAyNyAyMi40MThMMzAuMjA2IDIyLjQwNEwzMC4yMDkxIDIyLjM5QzMwLjI1NTkgMjIuMTgwMSAzMC4yODE1IDIxLjk2NTkgMzAuMjg1NCAyMS43NTA3TDMwLjI4NjYgMjEuNjgxMkwzMC4yODMxIDIxLjYxMThDMzAuMjUzNSAyMS4wMzUzIDMwLjA2NTEgMjAuNDgxOCAyOS43NDM2IDIwLjAwODhDMjkuNDIyNSAxOS41MzYzIDI4Ljk4MTggMTkuMTYzNSAyOC40NzMyIDE4LjkyMjJMMjguNDI4OSAxOC45MDEyTDI4LjM4MzcgMTguODgyNEwyMy4yMjc0IDE2LjczOTZMMjMuMTk3NSAxNi43MjcxTDIzLjE2NzEgMTYuNzE1N0MyMi44MjA5IDE2LjU4NDggMjIuNDU1NyAxNi41MTI1IDIyLjA4NjkgMTYuNTAxTDIyLjAwMjQgMTYuNDk4M0wyMS45MTggMTYuNTAyOEMyMS4wODc0IDE2LjU0NzEgMjAuMjk0NiAxNi45MDU1IDE5LjcxNDUgMTcuNTIwNUwxOS42NzY1IDE3LjU2MDhMMTkuNjQwOCAxNy42MDMxTDE4LjM4NiAxOS4wOTAzQzE2LjMwMjUgMTcuODc2OSAxNC41NTgxIDE2LjE5NjkgMTMuMjk3MSAxNC4xOTk0TDE0Ljc1OTggMTMuMDM4OUwxNC44MDI4IDEzLjAwNDhMMTQuODQzOSAxMi45NjgzQzE1LjQ3NjQgMTIuNDA3MyAxNS44Njk5IDExLjYxNTEgMTUuOTE4NyAxMC43NTYxTDE1LjkyMzggMTAuNjY1OUwxNS45MjA3IDEwLjU3NTZDMTUuOTA4IDEwLjE5NzUgMTUuODI5MiA5LjgyNTM5IDE1LjY4ODcgOS40NzU1NkwxNS42NzU5IDkuNDQzNjZMMTUuNjYyIDkuNDEyMjNMMTMuNDUyMiA0LjQxMjIzTDEzLjQzMTMgNC4zNjQ4OEwxMy40MDggNC4zMTg2OEMxMy4xNDk2IDMuODA3NDMgMTIuNzU4OSAzLjM4MDU2IDEyLjI4MzUgMy4wNzY2M0MxMS44MDg0IDIuNzcyOTcgMTEuMjYzNCAyLjYwMTE1IDEwLjcwNDkgMi41NzM4MkwxMC42MzQ3IDIuNTcwMzhMMTAuNTY0NCAyLjU3MTg5QzEwLjM2MDUgMi41NzYyNCAxMC4xNTcyIDIuNTk5MDQgOS45NTcxNSAyLjY0MDA1TDkuOTM5NjIgMi42NDM2NUw5LjkyMjE2IDIuNjQ3NTZMNS4xMzQyMSAzLjcxODk4TDUuMTAxMTggMy43MjYzOEw1LjA2ODQxIDMuNzM0ODhDNC40MjcwNCAzLjkwMTM4IDMuODQ2ODYgNC4yNjU4NCAzLjQxOTM4IDQuNzg2NTdDMi45OTEwNyA1LjMwODMzIDIuNzQwNTggNS45NTgwOSAyLjcxNTYyIDYuNjQxMjZMMi43MTQyOSA2LjY3Nzc2VjYuNzE0MjlDMi43MTQyOSAxOS4zMjcgMTMuMjQ1NCAyOS40Mjg2IDI2LjA3NTkgMjkuNDI4NkgyNi4wNzY3QzI2Ljc2MjkgMjkuNDI4MyAyNy40MzU5IDI5LjIwMjkgMjcuOTg1NiAyOC43Nzg2QzI4LjUzNjQgMjguMzUzNSAyOC45MzM3IDI3Ljc1MDYgMjkuMDk3NyAyNy4wNjA5QzI5LjA5NzggMjcuMDYwOCAyOS4wOTc4IDI3LjA2MDYgMjkuMDk3OCAyNy4wNjA1TDMwLjIwMjcgMjIuNDE4Wk0zLjUzNTcxIDJIMjkuNDY0M0MyOS44OTExIDIgMzAuMjg4NSAyLjE2NDk5IDMwLjU3MjEgMi40NDAwMUMzMC44NTM2IDIuNzEyOTkgMzEgMy4wNjk4OSAzMSAzLjQyODU3VjI4LjU3MTRDMzEgMjguOTMwMSAzMC44NTM2IDI5LjI4NyAzMC41NzIxIDI5LjU2QzMwLjI4ODUgMjkuODM1IDI5Ljg5MTEgMzAgMjkuNDY0MyAzMEgzLjUzNTcxQzMuMTA4OSAzMCAyLjcxMTQ5IDI5LjgzNSAyLjQyNzg4IDI5LjU2QzIuMTQ2MzYgMjkuMjg3IDIgMjguOTMwMSAyIDI4LjU3MTRWMy40Mjg1N0MyIDMuMDY5OSAyLjE0NjM2IDIuNzEyOTkgMi40Mjc4OCAyLjQ0MDAxQzIuNzExNDkgMi4xNjQ5OSAzLjEwODkgMiAzLjUzNTcxIDJaXCIgZmlsbD1cIiNGM0VDRUNcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZVdpZHRoPVwiNFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgbWVzc2FnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDQ0IDM0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTQwLjYzNDUgMjYuODgxM0M0Mi43MzUgMjQuODI0NiA0My45OTUyIDIyLjI0NDIgNDMuOTk1MiAxOS40Mjg2QzQzLjk5NTIgMTMuMzU3MSAzOC4xNTIyIDguMzQwNjMgMzAuNTM3MSA3LjQ0NTA5QzI4LjEzMTIgMy4wNzM2NiAyMi40NzkxIDAgMTUuODg3NSAwQzcuMTExNDcgMCAwLjAwMDUxNDQyOCA1LjQzMzkzIDAuMDAwNTE0NDI4IDEyLjE0MjlDMC4wMDA1MTQ0MjggMTQuOTUwOSAxLjI2MDc4IDE3LjUzMTMgMy4zNjEyMiAxOS41OTU1QzIuMTkyNjEgMjEuOTI1NCAwLjUxMjI1OSAyMy43MzE3IDAuNDgxNzA3IDIzLjc2MjFDMC4wMDA1MTQ0NDIgMjQuMjcwNSAtMC4xMzY5NjkgMjUuMDE0MyAwLjE0NTYzNiAyNS42NTk0QzAuNDIwNjAzIDI2LjMwNDUgMS4wNjIxOSAyNi43MjE5IDEuNzY0ODkgMjYuNzIxOUM1Ljg1MTIgMjYuNzIxOSA5LjE1MDgxIDI1LjE4ODggMTEuMzI3NiAyMy43NzcyQzEyLjAzMDMgMjMuOTM2NiAxMi43NTU5IDI0LjA1OCAxMy40OTY4IDI0LjE0OTFDMTUuODk1MSAyOC41MDU0IDIxLjUyNDMgMzEuNTcxNCAyOC4xMDgzIDMxLjU3MTRDMjkuNjk3IDMxLjU3MTQgMzEuMjI0NSAzMS4zODkzIDMyLjY3NTggMzEuMDU1NEMzNC44NTI2IDMyLjQ1OTQgMzguMTQ0NSAzNCA0Mi4yMzg1IDM0QzQyLjk0MTIgMzQgNDMuNTc1MSAzMy41ODI2IDQzLjg1NzcgMzIuOTM3NUM0NC4xMzI3IDMyLjI5MjQgNDQuMDAyOSAzMS41NDg3IDQzLjUyMTcgMzEuMDQwMkM0My40OTExIDMxLjAxNzQgNDEuODAzMSAyOS4yMTEyIDQwLjYzNDUgMjYuODgxM1pNMTAuNjMyNiAxOS44NzYzTDkuMzI2NDggMjAuNzE4OEM4LjI0OTUyIDIxLjQwOTQgNy4xNDk2NiAyMS45NTU4IDYuMDM0NTEgMjIuMzQyOUM2LjI0MDc0IDIxLjk4NjIgNi40NDY5NiAyMS42MDY3IDYuNjQ1NTUgMjEuMjE5Nkw3LjgyOTQ0IDE4Ljg1OTRMNS45MzUyMiAxN0M0LjkwNDA5IDE1Ljk4MyAzLjY2Njc0IDE0LjMyMSAzLjY2Njc0IDEyLjE0MjlDMy42NjY3NCA3LjUzNjE2IDkuMjY1MzggMy42NDI4NiAxNS44ODc1IDMuNjQyODZDMjIuNTA5NiAzLjY0Mjg2IDI4LjEwODMgNy41MzYxNiAyOC4xMDgzIDEyLjE0MjlDMjguMTA4MyAxNi43NDk2IDIyLjUwOTYgMjAuNjQyOSAxNS44ODc1IDIwLjY0MjlDMTQuNjI3MiAyMC42NDI5IDEzLjM2NyAyMC40OTg3IDEyLjE0NDkgMjAuMjE3OUwxMC42MzI2IDE5Ljg3NjNaTTM4LjA2MDUgMjQuMjg1N0wzNi4xNzQgMjYuMTM3NUwzNy4zNTc4IDI4LjQ5NzhDMzcuNTU2NCAyOC44ODQ4IDM3Ljc2MjYgMjkuMjY0MyAzNy45Njg5IDI5LjYyMUMzNi44NTM3IDI5LjIzMzkgMzUuNzUzOSAyOC42ODc1IDM0LjY3NjkgMjcuOTk2OUwzMy4zNzA4IDI3LjE1NDVMMzEuODUwOSAyNy41MDM2QzMwLjYyODggMjcuNzg0NCAyOS4zNjg1IDI3LjkyODYgMjguMTA4MyAyNy45Mjg2QzIzLjk4MzcgMjcuOTI4NiAyMC4zMDIyIDI2LjQwMzEgMTguMDc5NiAyNC4xNTY3QzI1LjgxNjkgMjMuMzM3MSAzMS43NzQ1IDE4LjI4MjYgMzEuNzc0NSAxMi4xNDI5QzMxLjc3NDUgMTEuODg0OCAzMS43NDM5IDExLjYzNDQgMzEuNzIxIDExLjM4MzlDMzYuNjM5OSAxMi40ODQ0IDQwLjMyOSAxNS42OTQ2IDQwLjMyOSAxOS40Mjg2QzQwLjMyOSAyMS42MDY3IDM5LjA5MTcgMjMuMjY4OCAzOC4wNjA1IDI0LjI4NTdaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FsbGVyeSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiB2aWV3Qm94PVwiMCAwIDM5IDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTMyLjUgMjUuNzE0M1YyNi43ODU3QzMyLjUgMjguNTYwOSAzMS4wNDQ5IDMwIDI5LjI1IDMwSDMuMjVDMS40NTUwNSAzMCAwIDI4LjU2MDkgMCAyNi43ODU3VjkuNjQyODZDMCA3Ljg2NzYzIDEuNDU1MDUgNi40Mjg1NyAzLjI1IDYuNDI4NTdINC4zMzMzM1Y5LjY0Mjg2SDMuNjU2MjVDMy41NDg1MSA5LjY0Mjg2IDMuNDQ1MTcgOS42ODUxOSAzLjM2ODk5IDkuNzYwNTRDMy4yOTI4IDkuODM1ODkgMy4yNSA5LjkzODA4IDMuMjUgMTAuMDQ0NlYyNi4zODM5QzMuMjUgMjYuNDkwNSAzLjI5MjggMjYuNTkyNyAzLjM2ODk5IDI2LjY2OEMzLjQ0NTE3IDI2Ljc0MzQgMy41NDg1MSAyNi43ODU3IDMuNjU2MjUgMjYuNzg1N0gyOC44NDM4QzI4Ljk1MTUgMjYuNzg1NyAyOS4wNTQ4IDI2Ljc0MzQgMjkuMTMxIDI2LjY2OEMyOS4yMDcyIDI2LjU5MjcgMjkuMjUgMjYuNDkwNSAyOS4yNSAyNi4zODM5VjI1LjcxNDNIMzIuNVpNMzUuMzQzOCAzLjIxNDI5SDEwLjE1NjJDMTAuMDQ4NSAzLjIxNDI5IDkuOTQ1MTcgMy4yNTY2MiA5Ljg2ODk5IDMuMzMxOTdDOS43OTI4IDMuNDA3MzIgOS43NSAzLjUwOTUxIDkuNzUgMy42MTYwN1YxOS45NTU0QzkuNzUgMjAuMDYxOSA5Ljc5MjggMjAuMTY0MSA5Ljg2ODk5IDIwLjIzOTVDOS45NDUxNyAyMC4zMTQ4IDEwLjA0ODUgMjAuMzU3MSAxMC4xNTYyIDIwLjM1NzFIMzUuMzQzOEMzNS40NTE1IDIwLjM1NzEgMzUuNTU0OCAyMC4zMTQ4IDM1LjYzMSAyMC4yMzk1QzM1LjcwNzIgMjAuMTY0MSAzNS43NSAyMC4wNjE5IDM1Ljc1IDE5Ljk1NTRWMy42MTYwN0MzNS43NSAzLjUwOTUxIDM1LjcwNzIgMy40MDczMiAzNS42MzEgMy4zMzE5N0MzNS41NTQ4IDMuMjU2NjIgMzUuNDUxNSAzLjIxNDI5IDM1LjM0MzggMy4yMTQyOVpNMzUuNzUgMEMzNy41NDQ5IDAgMzkgMS40MzkwNiAzOSAzLjIxNDI5VjIwLjM1NzFDMzkgMjIuMTMyNCAzNy41NDQ5IDIzLjU3MTQgMzUuNzUgMjMuNTcxNEg5Ljc1QzcuOTU1MDUgMjMuNTcxNCA2LjUgMjIuMTMyNCA2LjUgMjAuMzU3MVYzLjIxNDI5QzYuNSAxLjQzOTA2IDcuOTU1MDUgMCA5Ljc1IDBIMzUuNzVaTTE3Ljg3NSA3LjVDMTcuODc1IDguOTc5MzEgMTYuNjYyNCAxMC4xNzg2IDE1LjE2NjcgMTAuMTc4NkMxMy42NzA5IDEwLjE3ODYgMTIuNDU4MyA4Ljk3OTMxIDEyLjQ1ODMgNy41QzEyLjQ1ODMgNi4wMjA2OSAxMy42NzA5IDQuODIxNDMgMTUuMTY2NyA0LjgyMTQzQzE2LjY2MjQgNC44MjE0MyAxNy44NzUgNi4wMjA2OSAxNy44NzUgNy41Wk0xMyAxMy45Mjg2TDE1LjY3NTUgMTEuMjgyNUMxNS45OTI4IDEwLjk2ODcgMTYuNTA3MiAxMC45Njg3IDE2LjgyNDYgMTEuMjgyNUwxOS41IDEzLjkyODZMMjYuNTA4OCA2Ljk5Njc2QzI2LjgyNjEgNi42ODI5NyAyNy4zNDA2IDYuNjgyOTcgMjcuNjU3OSA2Ljk5Njc2TDMyLjUgMTEuNzg1N1YxNy4xNDI5SDEzVjEzLjkyODZaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjaGVja01hcmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0yNSAwLjc4MTI1QzExLjYyNDMgMC43ODEyNSAwLjc4MTI1IDExLjYyNDMgMC43ODEyNSAyNUMwLjc4MTI1IDM4LjM3NTcgMTEuNjI0MyA0OS4yMTg4IDI1IDQ5LjIxODhDMzguMzc1NyA0OS4yMTg4IDQ5LjIxODggMzguMzc1NyA0OS4yMTg4IDI1QzQ5LjIxODggMTEuNjI0MyAzOC4zNzU3IDAuNzgxMjUgMjUgMC43ODEyNVpNMjUgNS40Njg3NUMzNS43OTQxIDUuNDY4NzUgNDQuNTMxMiAxNC4yMDQyIDQ0LjUzMTIgMjVDNDQuNTMxMiAzNS43OTQxIDM1Ljc5NTggNDQuNTMxMiAyNSA0NC41MzEyQzE0LjIwNTkgNDQuNTMxMiA1LjQ2ODc1IDM1Ljc5NTggNS40Njg3NSAyNUM1LjQ2ODc1IDE0LjIwNTkgMTQuMjA0MiA1LjQ2ODc1IDI1IDUuNDY4NzVaTTM4LjY5MTggMTguMTkwMUwzNi40OTEgMTUuOTcxNkMzNi4wMzUzIDE1LjUxMjEgMzUuMjkzMyAxNS41MDkxIDM0LjgzMzggMTUuOTY0OUwyMS4wMjk5IDI5LjY1NzlMMTUuMTkwOCAyMy43NzE1QzE0LjczNTEgMjMuMzEyIDEzLjk5MzEgMjMuMzA5IDEzLjUzMzYgMjMuNzY0N0wxMS4zMTQ5IDI1Ljk2NTVDMTAuODU1NSAyNi40MjEzIDEwLjg1MjQgMjcuMTYzMyAxMS4zMDgzIDI3LjYyMjlMMjAuMTczNiAzNi41NkMyMC42Mjk0IDM3LjAxOTQgMjEuMzcxNCAzNy4wMjI1IDIxLjgzMDkgMzYuNTY2NkwzOC42ODUzIDE5Ljg0NzVDMzkuMTQ0NiAxOS4zOTE2IDM5LjE0NzYgMTguNjQ5NiAzOC42OTE4IDE4LjE5MDFaXCIgZmlsbD1cIiMwMzlCMzdcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNDJcIiBoZWlnaHQ9XCI0MlwiIHZpZXdCb3g9XCIwIDAgNDIgNDJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxjaXJjbGUgY3g9XCIyMVwiIGN5PVwiMjFcIiByPVwiMjFcIiBmaWxsPVwiI0M0QzRDNFwiLz5cclxuICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS43NTQ0IDEzLjUzMjVDMTEuMDQ0NCAxNC4yNDI2IDExLjA0NDQgMTUuMzkzNyAxMS43NTQ0IDE2LjEwMzhMMTcuNTM5NyAyMS44ODkxTDExLjc1NDQgMjcuNjc0NEMxMS4wNDQ0IDI4LjM4NDQgMTEuMDQ0NCAyOS41MzU2IDExLjc1NDQgMzAuMjQ1N0MxMi40NjQ1IDMwLjk1NTcgMTMuNjE1NiAzMC45NTU3IDE0LjMyNTcgMzAuMjQ1N0wyMC4xMTEgMjQuNDYwNEwyNS44OTYzIDMwLjI0NTdDMjYuNjA2MyAzMC45NTU3IDI3Ljc1NzUgMzAuOTU1NyAyOC40Njc1IDMwLjI0NTdDMjkuMTc3NiAyOS41MzU2IDI5LjE3NzYgMjguMzg0NCAyOC40Njc1IDI3LjY3NDRMMjIuNjgyMiAyMS44ODkxTDI4LjQ2NzYgMTYuMTAzOEMyOS4xNzc2IDE1LjM5MzcgMjkuMTc3NiAxNC4yNDI2IDI4LjQ2NzYgMTMuNTMyNUMyNy43NTc1IDEyLjgyMjUgMjYuNjA2MyAxMi44MjI1IDI1Ljg5NjMgMTMuNTMyNUwyMC4xMTEgMTkuMzE3OUwxNC4zMjU2IDEzLjUzMjVDMTMuNjE1NiAxMi44MjI1IDEyLjQ2NDQgMTIuODIyNSAxMS43NTQ0IDEzLjUzMjVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFjayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI1MFwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk01My41OTE2IDMwLjE0OEw1MS4yMTMzIDI3Ljc1ODhDNTAuMjA2MiAyNi43NDcxIDQ4LjU3NzggMjYuNzQ3MSA0Ny41ODE1IDI3Ljc1ODhMMjYuNzU1MyA0OC42NzA0QzI1Ljc0ODIgNDkuNjgyIDI1Ljc0ODIgNTEuMzE3OSAyNi43NTUzIDUyLjMxODlMNDcuNTgxNSA3My4yNDEyQzQ4LjU4ODUgNzQuMjUyOSA1MC4yMTY5IDc0LjI1MjkgNTEuMjEzMyA3My4yNDEyTDUzLjU5MTYgNzAuODUyQzU0LjYwOTMgNjkuODI5NSA1NC41ODc5IDY4LjE2MTMgNTMuNTQ4NyA2Ny4xNjA0TDQwLjYzOTQgNTQuODA1SDcxLjQyODlDNzIuODUzNyA1NC44MDUgNzQgNTMuNjUzNCA3NCA1Mi4yMjJWNDguNzc4Qzc0IDQ3LjM0NjYgNzIuODUzNyA0Ni4xOTUgNzEuNDI4OSA0Ni4xOTVINDAuNjM5NEw1My41NDg3IDMzLjgzOTZDNTQuNTk4NiAzMi44Mzg3IDU0LjYyIDMxLjE3MDUgNTMuNTkxNiAzMC4xNDhaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IG9mZkJhY2sgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgY2xhc3NOYW1lPVwiYm9sZC1ib3hcIiB2aWV3Qm94PVwiMCAwIDEyOSAxNDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNDY5OTcgMTEwLjI3VjM4LjA1TDY0LjQ3IDc0LjQ4TDEyNy40NyAzNy40OFYxMTAuMjJMNjQuNDcgMTQ2LjU5TDEuNDY5OTcgMTEwLjI3Wk05Mi40NyAxMTcuNEM5MS41OCAxMTcuNCA5MC43MDk5IDExNy42NjQgODkuOTY5OSAxMTguMTU4Qzg5LjIyOTkgMTE4LjY1MyA4OC42NTMxIDExOS4zNTYgODguMzEyNSAxMjAuMTc4Qzg3Ljk3MTkgMTIxIDg3Ljg4MjggMTIxLjkwNSA4OC4wNTY0IDEyMi43NzhDODguMjMwMSAxMjMuNjUxIDg4LjY1ODcgMTI0LjQ1MyA4OS4yODggMTI1LjA4MkM4OS45MTczIDEyNS43MTEgOTAuNzE5MSAxMjYuMTQgOTEuNTkyMSAxMjYuMzE0QzkyLjQ2NSAxMjYuNDg3IDkzLjM2OTggMTI2LjM5OCA5NC4xOTIgMTI2LjA1N0M5NS4wMTQzIDEyNS43MTcgOTUuNzE3MSAxMjUuMTQgOTYuMjExNiAxMjQuNEM5Ni43MDYxIDEyMy42NiA5Ni45NyAxMjIuNzkgOTYuOTcgMTIxLjlDOTYuOTY3MyAxMjAuNzA3IDk2LjQ5MjQgMTE5LjU2NCA5NS42NDkgMTE4LjcyMUM5NC44MDU3IDExNy44NzggOTMuNjYyNiAxMTcuNDAzIDkyLjQ3IDExNy40VjExNy40Wk0xMDYuNDcgMTA5LjRDMTA1LjU4IDEwOS40IDEwNC43MSAxMDkuNjY0IDEwMy45NyAxMTAuMTU4QzEwMy4yMyAxMTAuNjUzIDEwMi42NTMgMTExLjM1NiAxMDIuMzEzIDExMi4xNzhDMTAxLjk3MiAxMTMgMTAxLjg4MyAxMTMuOTA1IDEwMi4wNTYgMTE0Ljc3OEMxMDIuMjMgMTE1LjY1MSAxMDIuNjU5IDExNi40NTMgMTAzLjI4OCAxMTcuMDgyQzEwMy45MTcgMTE3LjcxMSAxMDQuNzE5IDExOC4xNCAxMDUuNTkyIDExOC4zMTRDMTA2LjQ2NSAxMTguNDg3IDEwNy4zNyAxMTguMzk4IDEwOC4xOTIgMTE4LjA1N0MxMDkuMDE0IDExNy43MTcgMTA5LjcxNyAxMTcuMTQgMTEwLjIxMiAxMTYuNEMxMTAuNzA2IDExNS42NiAxMTAuOTcgMTE0Ljc5IDExMC45NyAxMTMuOUMxMTAuOTY3IDExMi43MDcgMTEwLjQ5MiAxMTEuNTY0IDEwOS42NDkgMTEwLjcyMUMxMDguODA2IDEwOS44NzggMTA3LjY2MyAxMDkuNDAzIDEwNi40NyAxMDkuNFYxMDkuNFpNMTE5LjQ3IDEwMS40QzExOC41OCAxMDEuNCAxMTcuNzEgMTAxLjY2NCAxMTYuOTcgMTAyLjE1OEMxMTYuMjMgMTAyLjY1MyAxMTUuNjUzIDEwMy4zNTYgMTE1LjMxMyAxMDQuMTc4QzExNC45NzIgMTA1IDExNC44ODMgMTA1LjkwNSAxMTUuMDU2IDEwNi43NzhDMTE1LjIzIDEwNy42NTEgMTE1LjY1OSAxMDguNDUzIDExNi4yODggMTA5LjA4MkMxMTYuOTE3IDEwOS43MTEgMTE3LjcxOSAxMTAuMTQgMTE4LjU5MiAxMTAuMzE0QzExOS40NjUgMTEwLjQ4NyAxMjAuMzcgMTEwLjM5OCAxMjEuMTkyIDExMC4wNTdDMTIyLjAxNCAxMDkuNzE3IDEyMi43MTcgMTA5LjE0IDEyMy4yMTIgMTA4LjRDMTIzLjcwNiAxMDcuNjYgMTIzLjk3IDEwNi43OSAxMjMuOTcgMTA1LjlDMTIzLjk2NyAxMDQuNzA3IDEyMy40OTIgMTAzLjU2NCAxMjIuNjQ5IDEwMi43MjFDMTIxLjgwNiAxMDEuODc4IDEyMC42NjMgMTAxLjQwMyAxMTkuNDcgMTAxLjRWMTAxLjRaTTEwNS42OSA3MC40QzEwNS4zMDcgNzAuNDAxIDEwNC45MzIgNzAuNTEyIDEwNC42MSA3MC43Mkw4NC40MSA4My43MkM4NC4xODQ5IDgzLjg2MjIgODMuOTkxNSA4NC4wNDkzIDgzLjg0MTggODQuMjY5NUM4My42OTIxIDg0LjQ4OTcgODMuNTg5NCA4NC43MzgzIDgzLjU0IDg1QzgzLjQ4MzQgODUuMjU3MSA4My40NzgxIDg1LjUyMjggODMuNTI0NSA4NS43ODE5QzgzLjU3MDggODYuMDQxIDgzLjY2NzggODYuMjg4NCA4My44MSA4Ni41MUw4NC41OCA4Ny43Qzg0Ljg2NjkgODguMTQ0OSA4NS4zMTg2IDg4LjQ1OCA4NS44MzYgODguNTcwNUM4Ni4zNTMzIDg4LjY4MjkgODYuODk0MiA4OC41ODU3IDg3LjM0IDg4LjNMMTA3LjUzIDc1LjNDMTA3Ljk3MyA3NS4wMTQ0IDEwOC4yODYgNzQuNTY1MSAxMDguNCA3NC4wNUMxMDguNDU4IDczLjc5MzYgMTA4LjQ2NSA3My41MjgyIDEwOC40MiA3My4yNjkxQzEwOC4zNzYgNzMuMDEgMTA4LjI4IDcyLjc2MjIgMTA4LjE0IDcyLjU0TDEwNy4zNyA3MS4zNUMxMDcuMTg4IDcxLjA3MDIgMTA2LjkzOSA3MC44NDAzIDEwNi42NDYgNzAuNjgxNEMxMDYuMzUyIDcwLjUyMjQgMTA2LjAyNCA3MC40Mzk1IDEwNS42OSA3MC40NFY3MC40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcgMzguMzU5OVYxMTBMNjQuNSAxNDYuMDhMMiAxMTBWMzguOTE5OUwzMiA1Ni4yNTk5TDY0IDc0Ljc1OTlMNjQuNSA3NS4wNDk5TDY1IDc0Ljc1OTlMMTI3IDM4LjM1OTlWMzguMzU5OVpNODYuMjYgODkuMDk5OUM4Ni43MzkyIDg5LjA5OTggODcuMjA4MSA4OC45NjA5IDg3LjYxIDg4LjY5OTlMMTA3Ljc5IDc1LjY5OTlDMTA4LjA2OCA3NS41MjYzIDEwOC4zMDkgNzUuMjk4OSAxMDguNDk3IDc1LjAzMUMxMDguNjg2IDc0Ljc2MzEgMTA4LjgyIDc0LjQ2MDEgMTA4Ljg5IDc0LjEzOTlDMTA4Ljk2NCA3My44MTcxIDEwOC45NzIgNzMuNDgzIDEwOC45MTYgNzMuMTU2OEMxMDguODU5IDcyLjgzMDYgMTA4LjczOCA3Mi41MTkgMTA4LjU2IDcyLjIzOTlMMTA3Ljc5IDcxLjA1OTlDMTA3LjU2NSA3MC43MDcyIDEwNy4yNTQgNzAuNDE2OSAxMDYuODg3IDcwLjIxNTlDMTA2LjUyIDcwLjAxNDkgMTA2LjEwOCA2OS45MDk3IDEwNS42OSA2OS45MDk5QzEwNS4yMTEgNjkuOTA4OSAxMDQuNzQxIDcwLjA0NzkgMTA0LjM0IDcwLjMwOTlMODQuMTQgODMuMzA5OUM4My41ODMxIDgzLjY3MDUgODMuMTkxNiA4NC4yMzY4IDgzLjA1MTEgODQuODg1MkM4Mi45MTA1IDg1LjUzMzUgODMuMDMyNCA4Ni4yMTExIDgzLjM5IDg2Ljc2OTlMODQuMTUgODcuOTQ5OUM4NC4zNzU2IDg4LjMwNTMgODQuNjg3MyA4OC41OTc5IDg1LjA1NjEgODguODAwN0M4NS40MjUgODkuMDAzNSA4NS44MzkxIDg5LjEwOTggODYuMjYgODkuMTA5OVY4OS4wOTk5Wk0xMTkuNDcgMTEwLjkxQzEyMC40NTkgMTEwLjkxIDEyMS40MjYgMTEwLjYxNyAxMjIuMjQ4IDExMC4wNjdDMTIzLjA3IDEwOS41MTggMTIzLjcxMSAxMDguNzM3IDEyNC4wODkgMTA3LjgyM0MxMjQuNDY4IDEwNi45MSAxMjQuNTY3IDEwNS45MDQgMTI0LjM3NCAxMDQuOTM0QzEyNC4xODEgMTAzLjk2NSAxMjMuNzA1IDEwMy4wNzQgMTIzLjAwNiAxMDIuMzc0QzEyMi4zMDYgMTAxLjY3NSAxMjEuNDE1IDEwMS4xOTkgMTIwLjQ0NSAxMDEuMDA2QzExOS40NzYgMTAwLjgxMyAxMTguNDcgMTAwLjkxMiAxMTcuNTU3IDEwMS4yOTFDMTE2LjY0MyAxMDEuNjY5IDExNS44NjIgMTAyLjMxIDExNS4zMTMgMTAzLjEzMkMxMTQuNzYzIDEwMy45NTQgMTE0LjQ3IDEwNC45MjEgMTE0LjQ3IDEwNS45MUMxMTQuNDcgMTA3LjIzNiAxMTQuOTk3IDEwOC41MDggMTE1LjkzNCAxMDkuNDQ1QzExNi44NzIgMTEwLjM4MyAxMTguMTQ0IDExMC45MSAxMTkuNDcgMTEwLjkxVjExMC45MVpNMTA2LjQ3IDExOC45MUMxMDcuNDU5IDExOC45MSAxMDguNDI2IDExOC42MTcgMTA5LjI0OCAxMTguMDY3QzExMC4wNyAxMTcuNTE4IDExMC43MTEgMTE2LjczNyAxMTEuMDg5IDExNS44MjNDMTExLjQ2OCAxMTQuOTEgMTExLjU2NyAxMTMuOTA0IDExMS4zNzQgMTEyLjkzNEMxMTEuMTgxIDExMS45NjUgMTEwLjcwNSAxMTEuMDc0IDExMC4wMDYgMTEwLjM3NEMxMDkuMzA2IDEwOS42NzUgMTA4LjQxNSAxMDkuMTk5IDEwNy40NDUgMTA5LjAwNkMxMDYuNDc2IDEwOC44MTMgMTA1LjQ3IDEwOC45MTIgMTA0LjU1NyAxMDkuMjkxQzEwMy42NDMgMTA5LjY2OSAxMDIuODYyIDExMC4zMSAxMDIuMzEzIDExMS4xMzJDMTAxLjc2MyAxMTEuOTU0IDEwMS40NyAxMTIuOTIxIDEwMS40NyAxMTMuOTFDMTAxLjQ3IDExNS4yMzYgMTAxLjk5NyAxMTYuNTA4IDEwMi45MzQgMTE3LjQ0NUMxMDMuODcyIDExOC4zODMgMTA1LjE0NCAxMTguOTEgMTA2LjQ3IDExOC45MVYxMTguOTFaTTkyLjQ3IDEyNi45MUM5My40NTg5IDEyNi45MSA5NC40MjU2IDEyNi42MTcgOTUuMjQ3OCAxMjYuMDY3Qzk2LjA3MDEgMTI1LjUxOCA5Ni43MTEgMTI0LjczNyA5Ny4wODk0IDEyMy44MjNDOTcuNDY3OCAxMjIuOTEgOTcuNTY2OSAxMjEuOTA0IDk3LjM3MzkgMTIwLjkzNEM5Ny4xODEgMTE5Ljk2NSA5Ni43MDQ4IDExOS4wNzQgOTYuMDA1NSAxMTguMzc0Qzk1LjMwNjMgMTE3LjY3NSA5NC40MTU0IDExNy4xOTkgOTMuNDQ1NCAxMTcuMDA2QzkyLjQ3NTUgMTE2LjgxMyA5MS40NzAyIDExNi45MTIgOTAuNTU2NiAxMTcuMjkxQzg5LjY0MjkgMTE3LjY2OSA4OC44NjIxIDExOC4zMSA4OC4zMTI3IDExOS4xMzJDODcuNzYzMiAxMTkuOTU0IDg3LjQ3IDEyMC45MjEgODcuNDcgMTIxLjkxQzg3LjQ3IDEyMy4yMzYgODcuOTk2OCAxMjQuNTA4IDg4LjkzNDUgMTI1LjQ0NUM4OS44NzIxIDEyNi4zODMgOTEuMTQzOSAxMjYuOTEgOTIuNDcgMTI2LjkxWk0xMjcuNDcgMzYuOTA5OUw2NC40NyA3My45MDk5TDMyLjQ3IDU1LjQwOTlMMSAzNy4yMDk5VjExMC41M0w2NC41IDE0Ny4xOUwxMjggMTEwLjU2VjM3LjIzOTlMMTI3LjQ2IDM2LjkyOTlMMTI3LjQ3IDM2LjkwOTlaTTg2LjI2IDg4LjA5OTlDODYuMDA4OCA4OC4xMDA0IDg1Ljc2MTYgODguMDM3NCA4NS41NDE0IDg3LjkxNjhDODUuMzIxMSA4Ny43OTYyIDg1LjEzNDggODcuNjIxOCA4NSA4Ny40MDk5TDg0LjIzIDg2LjIxOTlDODQuMDE4NCA4NS44ODQ5IDgzLjk0NjkgODUuNDggODQuMDMxMSA4NS4wOTI4Qzg0LjExNTMgODQuNzA1NSA4NC4zNDg0IDg0LjM2NjkgODQuNjggODQuMTQ5OUwxMDQuODggNzEuMTQ5OUMxMDUuMTE5IDcwLjk4OTYgMTA1LjQwMiA3MC45MDU5IDEwNS42OSA3MC45MDk5QzEwNS45NDEgNzAuOTA5NCAxMDYuMTg4IDcwLjk3MjQgMTA2LjQwOSA3MS4wOTNDMTA2LjYyOSA3MS4yMTM3IDEwNi44MTUgNzEuMzg4IDEwNi45NSA3MS41OTk5TDEwNy43MiA3Mi43ODk5QzEwNy45MzMgNzMuMTI1NSAxMDguMDA1IDczLjUzMiAxMDcuOTE4IDczLjkyMDFDMTA3LjgzMiA3NC4zMDgzIDEwNy41OTUgNzQuNjQ2MyAxMDcuMjYgNzQuODU5OUw4Ny4wNyA4Ny44NTk5Qzg2LjgyODYgODguMDE1OSA4Ni41NDc0IDg4LjA5OTIgODYuMjYgODguMDk5OVY4OC4wOTk5Wk0xMTkuNDcgMTA5LjlDMTE4LjY3OSAxMDkuOSAxMTcuOTA2IDEwOS42NjUgMTE3LjI0OCAxMDkuMjI2QzExNi41OSAxMDguNzg2IDExNi4wNzcgMTA4LjE2MiAxMTUuNzc0IDEwNy40MzFDMTE1LjQ3MiAxMDYuNyAxMTUuMzkzIDEwNS44OTUgMTE1LjU0NyAxMDUuMTJDMTE1LjcwMSAxMDQuMzQ0IDExNi4wODIgMTAzLjYzMSAxMTYuNjQyIDEwMy4wNzFDMTE3LjIwMSAxMDIuNTEyIDExNy45MTQgMTAyLjEzMSAxMTguNjkgMTAxLjk3N0MxMTkuNDY2IDEwMS44MjIgMTIwLjI3IDEwMS45MDIgMTIxLjAwMSAxMDIuMjA0QzEyMS43MzIgMTAyLjUwNyAxMjIuMzU2IDEwMy4wMiAxMjIuNzk2IDEwMy42NzhDMTIzLjIzNSAxMDQuMzM1IDEyMy40NyAxMDUuMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTA2Ljk2MSAxMjMuMDQ5IDEwNy45NzggMTIyLjI5OCAxMDguNzI4QzEyMS41NDggMTA5LjQ3OCAxMjAuNTMxIDEwOS45IDExOS40NyAxMDkuOVpNMTA2LjQ3IDExNy45QzEwNS42NzkgMTE3LjkgMTA0LjkwNiAxMTcuNjY1IDEwNC4yNDggMTE3LjIyNkMxMDMuNTkgMTE2Ljc4NiAxMDMuMDc3IDExNi4xNjIgMTAyLjc3NCAxMTUuNDMxQzEwMi40NzIgMTE0LjcgMTAyLjM5MyAxMTMuODk1IDEwMi41NDcgMTEzLjEyQzEwMi43MDEgMTEyLjM0NCAxMDMuMDgyIDExMS42MzEgMTAzLjY0MiAxMTEuMDcxQzEwNC4yMDEgMTEwLjUxMiAxMDQuOTE0IDExMC4xMzEgMTA1LjY5IDEwOS45NzdDMTA2LjQ2NiAxMDkuODIyIDEwNy4yNyAxMDkuOTAyIDEwOC4wMDEgMTEwLjIwNEMxMDguNzMyIDExMC41MDcgMTA5LjM1NiAxMTEuMDIgMTA5Ljc5NiAxMTEuNjc4QzExMC4yMzUgMTEyLjMzNSAxMTAuNDcgMTEzLjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExNC45NjEgMTEwLjA0OSAxMTUuOTc4IDEwOS4yOTggMTE2LjcyOEMxMDguNTQ4IDExNy40NzggMTA3LjUzMSAxMTcuOSAxMDYuNDcgMTE3LjlaTTkyLjQ3IDEyNS45QzkxLjY3ODkgMTI1LjkgOTAuOTA1NSAxMjUuNjY1IDkwLjI0NzcgMTI1LjIyNkM4OS41ODk5IDEyNC43ODYgODkuMDc3MiAxMjQuMTYyIDg4Ljc3NDUgMTIzLjQzMUM4OC40NzE3IDEyMi43IDg4LjM5MjUgMTIxLjg5NSA4OC41NDY5IDEyMS4xMkM4OC43MDEyIDEyMC4zNDQgODkuMDgyMiAxMTkuNjMxIDg5LjY0MTYgMTE5LjA3MUM5MC4yMDEgMTE4LjUxMiA5MC45MTM3IDExOC4xMzEgOTEuNjg5NiAxMTcuOTc3QzkyLjQ2NTYgMTE3LjgyMiA5My4yNjk4IDExNy45MDIgOTQuMDAwNyAxMTguMjA0Qzk0LjczMTYgMTE4LjUwNyA5NS4zNTYzIDExOS4wMiA5NS43OTU5IDExOS42NzhDOTYuMjM1NCAxMjAuMzM1IDk2LjQ3IDEyMS4xMDkgOTYuNDcgMTIxLjlDOTYuNDcgMTIyLjk2MSA5Ni4wNDg2IDEyMy45NzggOTUuMjk4NCAxMjQuNzI4Qzk0LjU0ODMgMTI1LjQ3OCA5My41MzA5IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMjUuNEM5NC40MDMgMTI1LjQgOTUuOTcgMTIzLjgzMyA5NS45NyAxMjEuOUM5NS45NyAxMTkuOTY3IDk0LjQwMyAxMTguNCA5Mi40NyAxMTguNEM5MC41MzcgMTE4LjQgODguOTcgMTE5Ljk2NyA4OC45NyAxMjEuOUM4OC45NyAxMjMuODMzIDkwLjUzNyAxMjUuNCA5Mi40NyAxMjUuNFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTE4LjlDOTMuMDYzMyAxMTguOSA5My42NDMzIDExOS4wNzYgOTQuMTM2NyAxMTkuNDA1Qzk0LjYzIDExOS43MzUgOTUuMDE0NSAxMjAuMjA0IDk1LjI0MTYgMTIwLjc1MkM5NS40Njg3IDEyMS4zIDk1LjUyODEgMTIxLjkwMyA5NS40MTIzIDEyMi40ODVDOTUuMjk2NiAxMjMuMDY3IDk1LjAxMDkgMTIzLjYwMiA5NC41OTEzIDEyNC4wMjFDOTQuMTcxNyAxMjQuNDQxIDkzLjYzNzIgMTI0LjcyNiA5My4wNTUyIDEyNC44NDJDOTIuNDczMyAxMjQuOTU4IDkxLjg3MDEgMTI0Ljg5OSA5MS4zMjE5IDEyNC42NzJDOTAuNzczNyAxMjQuNDQ0IDkwLjMwNTIgMTI0LjA2IDg5Ljk3NTYgMTIzLjU2N0M4OS42NDU5IDEyMy4wNzMgODkuNDcgMTIyLjQ5MyA4OS40NyAxMjEuOUM4OS40NyAxMjEuMTA0IDg5Ljc4NiAxMjAuMzQxIDkwLjM0ODcgMTE5Ljc3OUM5MC45MTEzIDExOS4yMTYgOTEuNjc0MyAxMTguOSA5Mi40NyAxMTguOVYxMTguOVpNOTIuNDcgMTE3LjlDOTEuNjc4OCAxMTcuOSA5MC45MDU1IDExOC4xMzQgOTAuMjQ3NyAxMTguNTc0Qzg5LjU4OTkgMTE5LjAxNCA4OS4wNzcyIDExOS42MzggODguNzc0NSAxMjAuMzY5Qzg4LjQ3MTcgMTIxLjEgODguMzkyNSAxMjEuOTA0IDg4LjU0NjggMTIyLjY4Qzg4LjcwMTIgMTIzLjQ1NiA4OS4wODIxIDEyNC4xNjkgODkuNjQxNSAxMjQuNzI4QzkwLjIwMSAxMjUuMjg4IDkwLjkxMzcgMTI1LjY2OSA5MS42ODk2IDEyNS44MjNDOTIuNDY1NSAxMjUuOTc3IDkzLjI2OTggMTI1Ljg5OCA5NC4wMDA3IDEyNS41OTVDOTQuNzMxNiAxMjUuMjkzIDk1LjM1NjMgMTI0Ljc4IDk1Ljc5NTggMTI0LjEyMkM5Ni4yMzU0IDEyMy40NjQgOTYuNDcgMTIyLjY5MSA5Ni40NyAxMjEuOUM5Ni40NyAxMjAuODM5IDk2LjA0ODUgMTE5LjgyMiA5NS4yOTg0IDExOS4wNzFDOTQuNTQ4MyAxMTguMzIxIDkzLjUzMDggMTE3LjkgOTIuNDcgMTE3LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg2LjI2IDg3LjZDODYuMDkyNyA4Ny41OTk3IDg1LjkyODEgODcuNTU3NCA4NS43ODE0IDg3LjQ3NzFDODUuNjM0NiA4Ny4zOTY3IDg1LjUxMDQgODcuMjgwOCA4NS40MiA4Ny4xNEw4NC42NSA4NkM4NC41NzkxIDg1Ljg4ODIgODQuNTMxMSA4NS43NjM1IDg0LjUwODggODUuNjMzQzg0LjQ4NjUgODUuNTAyNSA4NC40OTAzIDg1LjM2ODkgODQuNTIgODUuMjRDODQuNTc2OSA4NC45ODUxIDg0LjczMTIgODQuNzYyNiA4NC45NSA4NC42MkwxMDUuMTUgNzEuNjJDMTA1LjMxMSA3MS41MTYgMTA1LjQ5OCA3MS40NjA1IDEwNS42OSA3MS40NkMxMDUuODU3IDcxLjQ2MDIgMTA2LjAyMiA3MS41MDI1IDEwNi4xNjkgNzEuNTgyOUMxMDYuMzE1IDcxLjY2MzIgMTA2LjQ0IDcxLjc3OTEgMTA2LjUzIDcxLjkyTDEwNy4zIDczLjExQzEwNy40NDEgNzMuMzMzMSAxMDcuNDg3IDczLjYwMjYgMTA3LjQzIDczLjg2QzEwNy4zNzEgNzQuMTE2NSAxMDcuMjEzIDc0LjMzOTMgMTA2Ljk5IDc0LjQ4TDg2LjggODcuNDhDODYuNjM0OSA4Ny41Njk5IDg2LjQ0NzcgODcuNjExNSA4Ni4yNiA4Ny42WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDUuNjkgNzEuOTM5OUMxMDUuNzc0IDcxLjkzOTEgMTA1Ljg1NyA3MS45NTk5IDEwNS45MyA3Mi4wMDAxQzEwNi4wMDQgNzIuMDQwNCAxMDYuMDY2IDcyLjA5ODkgMTA2LjExIDcyLjE2OTlMMTA2Ljg4IDczLjM1OTlDMTA2Ljk0OCA3My40NzA0IDEwNi45NyA3My42MDM1IDEwNi45NCA3My43Mjk5QzEwNi45MSA3My44NjA2IDEwNi44MzEgNzMuOTc1IDEwNi43MiA3NC4wNDk5TDg2LjUyIDg2Ljk5OTlDODYuNDQxNiA4Ny4wNDg0IDg2LjM1MjEgODcuMDc1OSA4Ni4yNiA4Ny4wNzk5Qzg2LjE3NTMgODcuMDc5NyA4Ni4wOTIgODcuMDU3NSA4Ni4wMTg0IDg3LjAxNTRDODUuOTQ0NyA4Ni45NzMzIDg1Ljg4MzMgODYuOTEyOSA4NS44NCA4Ni44Mzk5TDg1LjA3IDg1LjY1OTlDODUuMDAyOSA4NS41NTI4IDg0Ljk3NzkgODUuNDI0NSA4NSA4NS4yOTk5Qzg1LjAwOTQgODUuMjM1OCA4NS4wMzMyIDg1LjE3NDYgODUuMDY5NSA4NS4xMjA5Qzg1LjEwNTkgODUuMDY3MiA4NS4xNTM5IDg1LjAyMjQgODUuMjEgODQuOTg5OUwxMDUuNDEgNzEuOTg5OUMxMDUuNDkyIDcxLjk0MTUgMTA1LjU4NSA3MS45MTcyIDEwNS42OCA3MS45MTk5TDEwNS42OSA3MS45Mzk5Wk0xMDUuNjggNzAuOTE5OUMxMDUuMzkyIDcwLjkxNTkgMTA1LjEwOSA3MC45OTk2IDEwNC44NyA3MS4xNTk5TDg0LjY3IDg0LjE1OTlDODQuMzM4NCA4NC4zNzY5IDg0LjEwNTMgODQuNzE1NSA4NC4wMjEyIDg1LjEwMjhDODMuOTM3IDg1LjQ5IDg0LjAwODQgODUuODk0OSA4NC4yMiA4Ni4yMjk5TDg1IDg3LjQwOTlDODUuMTA1NyA4Ny41NzYyIDg1LjI0MzMgODcuNzE5OSA4NS40MDQ4IDg3LjgzMjdDODUuNTY2MyA4Ny45NDU0IDg1Ljc0ODYgODguMDI1IDg1Ljk0MTEgODguMDY2OUM4Ni4xMzM3IDg4LjEwODcgODYuMzMyNSA4OC4xMTIgODYuNTI2MyA4OC4wNzY1Qzg2LjcyMDEgODguMDQwOSA4Ni45MDQ5IDg3Ljk2NzQgODcuMDcgODcuODU5OUwxMDcuMjYgNzQuODU5OUMxMDcuNTk1IDc0LjY0NjMgMTA3LjgzMiA3NC4zMDgzIDEwNy45MTkgNzMuOTIwMkMxMDguMDA1IDczLjUzMiAxMDcuOTMzIDczLjEyNTUgMTA3LjcyIDcyLjc4OTlMMTA3IDcxLjYyOTlDMTA2Ljg2NSA3MS40MTgxIDEwNi42NzkgNzEuMjQzNyAxMDYuNDU5IDcxLjEyMzFDMTA2LjIzOCA3MS4wMDI0IDEwNS45OTEgNzAuOTM5NCAxMDUuNzQgNzAuOTM5OUwxMDUuNjggNzAuOTE5OVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA2LjQ3IDExNy40QzEwOC40MDMgMTE3LjQgMTA5Ljk3IDExNS44MzMgMTA5Ljk3IDExMy45QzEwOS45NyAxMTEuOTY3IDEwOC40MDMgMTEwLjQgMTA2LjQ3IDExMC40QzEwNC41MzcgMTEwLjQgMTAyLjk3IDExMS45NjcgMTAyLjk3IDExMy45QzEwMi45NyAxMTUuODMzIDEwNC41MzcgMTE3LjQgMTA2LjQ3IDExNy40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTEwLjlDMTA3LjA2MyAxMTAuOSAxMDcuNjQzIDExMS4wNzYgMTA4LjEzNyAxMTEuNDA1QzEwOC42MyAxMTEuNzM1IDEwOS4wMTUgMTEyLjIwNCAxMDkuMjQyIDExMi43NTJDMTA5LjQ2OSAxMTMuMyAxMDkuNTI4IDExMy45MDMgMTA5LjQxMiAxMTQuNDg1QzEwOS4yOTcgMTE1LjA2NyAxMDkuMDExIDExNS42MDIgMTA4LjU5MSAxMTYuMDIxQzEwOC4xNzIgMTE2LjQ0MSAxMDcuNjM3IDExNi43MjYgMTA3LjA1NSAxMTYuODQyQzEwNi40NzMgMTE2Ljk1OCAxMDUuODcgMTE2Ljg5OSAxMDUuMzIyIDExNi42NzJDMTA0Ljc3NCAxMTYuNDQ0IDEwNC4zMDUgMTE2LjA2IDEwMy45NzYgMTE1LjU2N0MxMDMuNjQ2IDExNS4wNzMgMTAzLjQ3IDExNC40OTMgMTAzLjQ3IDExMy45QzEwMy40NyAxMTMuMTA0IDEwMy43ODYgMTEyLjM0MSAxMDQuMzQ5IDExMS43NzlDMTA0LjkxMSAxMTEuMjE2IDEwNS42NzQgMTEwLjkgMTA2LjQ3IDExMC45VjExMC45Wk0xMDYuNDcgMTA5LjlDMTA1LjY3OSAxMDkuOSAxMDQuOTA1IDExMC4xMzQgMTA0LjI0OCAxMTAuNTc0QzEwMy41OSAxMTEuMDE0IDEwMy4wNzcgMTExLjYzOCAxMDIuNzc0IDExMi4zNjlDMTAyLjQ3MiAxMTMuMSAxMDIuMzkyIDExMy45MDQgMTAyLjU0NyAxMTQuNjhDMTAyLjcwMSAxMTUuNDU2IDEwMy4wODIgMTE2LjE2OSAxMDMuNjQyIDExNi43MjhDMTA0LjIwMSAxMTcuMjg4IDEwNC45MTQgMTE3LjY2OSAxMDUuNjkgMTE3LjgyM0MxMDYuNDY2IDExNy45NzcgMTA3LjI3IDExNy44OTggMTA4LjAwMSAxMTcuNTk1QzEwOC43MzIgMTE3LjI5MyAxMDkuMzU2IDExNi43OCAxMDkuNzk2IDExNi4xMjJDMTEwLjIzNSAxMTUuNDY0IDExMC40NyAxMTQuNjkxIDExMC40NyAxMTMuOUMxMTAuNDcgMTEyLjgzOSAxMTAuMDQ5IDExMS44MjIgMTA5LjI5OCAxMTEuMDcxQzEwOC41NDggMTEwLjMyMSAxMDcuNTMxIDEwOS45IDEwNi40NyAxMDkuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwOS40QzEyMS40MDMgMTA5LjQgMTIyLjk3IDEwNy44MzMgMTIyLjk3IDEwNS45QzEyMi45NyAxMDMuOTY3IDEyMS40MDMgMTAyLjQgMTE5LjQ3IDEwMi40QzExNy41MzcgMTAyLjQgMTE1Ljk3IDEwMy45NjcgMTE1Ljk3IDEwNS45QzExNS45NyAxMDcuODMzIDExNy41MzcgMTA5LjQgMTE5LjQ3IDEwOS40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTAyLjlDMTIwLjA2MyAxMDIuOSAxMjAuNjQzIDEwMy4wNzYgMTIxLjEzNyAxMDMuNDA1QzEyMS42MyAxMDMuNzM1IDEyMi4wMTUgMTA0LjIwNCAxMjIuMjQyIDEwNC43NTJDMTIyLjQ2OSAxMDUuMyAxMjIuNTI4IDEwNS45MDMgMTIyLjQxMiAxMDYuNDg1QzEyMi4yOTcgMTA3LjA2NyAxMjIuMDExIDEwNy42MDIgMTIxLjU5MSAxMDguMDIxQzEyMS4xNzIgMTA4LjQ0MSAxMjAuNjM3IDEwOC43MjYgMTIwLjA1NSAxMDguODQyQzExOS40NzMgMTA4Ljk1OCAxMTguODcgMTA4Ljg5OSAxMTguMzIyIDEwOC42NzJDMTE3Ljc3NCAxMDguNDQ0IDExNy4zMDUgMTA4LjA2IDExNi45NzYgMTA3LjU2N0MxMTYuNjQ2IDEwNy4wNzMgMTE2LjQ3IDEwNi40OTMgMTE2LjQ3IDEwNS45QzExNi40NyAxMDUuMTA0IDExNi43ODYgMTA0LjM0MSAxMTcuMzQ5IDEwMy43NzlDMTE3LjkxMSAxMDMuMjE2IDExOC42NzQgMTAyLjkgMTE5LjQ3IDEwMi45VjEwMi45Wk0xMTkuNDcgMTAxLjlDMTE4LjY3OSAxMDEuOSAxMTcuOTA1IDEwMi4xMzQgMTE3LjI0OCAxMDIuNTc0QzExNi41OSAxMDMuMDE0IDExNi4wNzcgMTAzLjYzOCAxMTUuNzc0IDEwNC4zNjlDMTE1LjQ3MiAxMDUuMSAxMTUuMzkyIDEwNS45MDQgMTE1LjU0NyAxMDYuNjhDMTE1LjcwMSAxMDcuNDU2IDExNi4wODIgMTA4LjE2OSAxMTYuNjQyIDEwOC43MjhDMTE3LjIwMSAxMDkuMjg4IDExNy45MTQgMTA5LjY2OSAxMTguNjkgMTA5LjgyM0MxMTkuNDY2IDEwOS45NzcgMTIwLjI3IDEwOS44OTggMTIxLjAwMSAxMDkuNTk1QzEyMS43MzIgMTA5LjI5MyAxMjIuMzU2IDEwOC43OCAxMjIuNzk2IDEwOC4xMjJDMTIzLjIzNSAxMDcuNDY0IDEyMy40NyAxMDYuNjkxIDEyMy40NyAxMDUuOUMxMjMuNDcgMTA0LjgzOSAxMjMuMDQ5IDEwMy44MjIgMTIyLjI5OCAxMDMuMDcxQzEyMS41NDggMTAyLjMyMSAxMjAuNTMxIDEwMS45IDExOS40NyAxMDEuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuMzQgMTYuNjdMNjEuMDcgMzYuOUwzMi40NyA1NS40TDEuMDEwMDEgMzcuMjFMMS41NjAwMSAzNi45TDY0LjQ3IDAuNTc5OTU2TDkyLjM0IDE2LjY3WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEuNTYwMDEgMzYuODk5OUwxLjAxMDAxIDM3LjIwOTlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMjcuNDMgMzYuOTI5OUw2NC40NyA3My44OTk5TDMyLjQ3IDU1LjM5OTlMNjEuMDcgMzYuODk5OUw5Mi4zNCAxNi42Njk5TDEyNy4zOCAzNi44OTk5TDEyNy40MyAzNi45Mjk5WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTY0LjQ3IDczLjg5OTlWMTQ2LjlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiM1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTE3LjlDMTA4LjY3OSAxMTcuOSAxMTAuNDcgMTE2LjEwOSAxMTAuNDcgMTEzLjlDMTEwLjQ3IDExMS42OTEgMTA4LjY3OSAxMDkuOSAxMDYuNDcgMTA5LjlDMTA0LjI2MSAxMDkuOSAxMDIuNDcgMTExLjY5MSAxMDIuNDcgMTEzLjlDMTAyLjQ3IDExNi4xMDkgMTA0LjI2MSAxMTcuOSAxMDYuNDcgMTE3LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTIuNDcgMTI1LjlDOTQuNjc5MSAxMjUuOSA5Ni40NyAxMjQuMTA5IDk2LjQ3IDEyMS45Qzk2LjQ3IDExOS42OTEgOTQuNjc5MSAxMTcuOSA5Mi40NyAxMTcuOUM5MC4yNjA4IDExNy45IDg4LjQ3IDExOS42OTEgODguNDcgMTIxLjlDODguNDcgMTI0LjEwOSA5MC4yNjA4IDEyNS45IDkyLjQ3IDEyNS45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDkuOUMxMjEuNjc5IDEwOS45IDEyMy40NyAxMDguMTA5IDEyMy40NyAxMDUuOUMxMjMuNDcgMTAzLjY5MSAxMjEuNjc5IDEwMS45IDExOS40NyAxMDEuOUMxMTcuMjYxIDEwMS45IDExNS40NyAxMDMuNjkxIDExNS40NyAxMDUuOUMxMTUuNDcgMTA4LjEwOSAxMTcuMjYxIDEwOS45IDExOS40NyAxMDkuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMjguNDFcIiBoZWlnaHQ9XCIxNDcuMjJcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICApOyAgICAgICAgXHJcbn07IiwiY29uc3QgYmFzZVVybD0gIFwiaHR0cHM6Ly9iYWNrZW5kLWxvZ2lzdGljcy5oZXJva3VhcHAuY29tXCJcclxuZXhwb3J0IGNvbnN0IGFwaSA9IGAke2Jhc2VVcmx9L2FwaWA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
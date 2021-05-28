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
        img: '',
        _id: ''
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
  }, [url]); // useEffect ( () => {
  //     console.log(requestImages);
  // }, [url]);
  // console.log(requestImages);
  // console.log(progress);
  // console.log(url)

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
    lineNumber: 248,
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
    temporaryImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: temporaryImage.length > 0 && temporaryImage.map(({
      imageSource
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imageSource
    }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }, this))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
          lineNumber: 26,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 31
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
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
          lineNumber: 47,
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
            lineNumber: 50,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 24
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined);
  };

  const {
    formErrors
  } = _objectSpread({}, input);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "photo",
      children: temporaryImage ? photoSource() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 30
        }, undefined), Object(_svg__WEBPACK_IMPORTED_MODULE_2__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 43
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 34
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 30
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id ? e => handleRequestUpdate(e, input._id) : e => handleFormPreview(e),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
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
              lineNumber: 79,
              columnNumber: 21
            }, undefined), formErrors.sender.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
              lineNumber: 86,
              columnNumber: 21
            }, undefined), formErrors.sender.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
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
              lineNumber: 93,
              columnNumber: 21
            }, undefined), formErrors.sender.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 18
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
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
              lineNumber: 105,
              columnNumber: 21
            }, undefined), formErrors.receiver.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
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
              lineNumber: 112,
              columnNumber: 21
            }, undefined), formErrors.receiver.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
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
              lineNumber: 119,
              columnNumber: 21
            }, undefined), formErrors.receiver.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
            lineNumber: 129,
            columnNumber: 21
          }, undefined), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
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
            lineNumber: 136,
            columnNumber: 21
          }, undefined), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
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
            lineNumber: 143,
            columnNumber: 21
          }, undefined), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
            lineNumber: 150,
            columnNumber: 21
          }, undefined), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
            lineNumber: 157,
            columnNumber: 21
          }, undefined), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
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
            lineNumber: 166,
            columnNumber: 21
          }, undefined), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }, undefined), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 32
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 26
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 15,
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
            lineNumber: 20,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sender",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Receiver information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "receiver",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "others",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 35
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 31
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\request.js";





const Request = () => {
  const {
    requestSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [requestSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-request",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
/*! exports provided: box, profile, transaction, avatar, upload, contact, message, gallery, checkMark, close, offBack */
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
        lineNumber: 91,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127 38.3599V110L64.5 146.08L2 110V38.9199L32 56.2599L64 74.7599L64.5 75.0499L65 74.7599L127 38.3599V38.3599ZM86.26 89.0999C86.7392 89.0998 87.2081 88.9609 87.61 88.6999L107.79 75.6999C108.068 75.5263 108.309 75.2989 108.497 75.031C108.686 74.7631 108.82 74.4601 108.89 74.1399C108.964 73.8171 108.972 73.483 108.916 73.1568C108.859 72.8306 108.738 72.519 108.56 72.2399L107.79 71.0599C107.565 70.7072 107.254 70.4169 106.887 70.2159C106.52 70.0149 106.108 69.9097 105.69 69.9099C105.211 69.9089 104.741 70.0479 104.34 70.3099L84.14 83.3099C83.5831 83.6705 83.1916 84.2368 83.0511 84.8852C82.9105 85.5335 83.0324 86.2111 83.39 86.7699L84.15 87.9499C84.3756 88.3053 84.6873 88.5979 85.0561 88.8007C85.425 89.0035 85.8391 89.1098 86.26 89.1099V89.0999ZM119.47 110.91C120.459 110.91 121.426 110.617 122.248 110.067C123.07 109.518 123.711 108.737 124.089 107.823C124.468 106.91 124.567 105.904 124.374 104.934C124.181 103.965 123.705 103.074 123.006 102.374C122.306 101.675 121.415 101.199 120.445 101.006C119.476 100.813 118.47 100.912 117.557 101.291C116.643 101.669 115.862 102.31 115.313 103.132C114.763 103.954 114.47 104.921 114.47 105.91C114.47 107.236 114.997 108.508 115.934 109.445C116.872 110.383 118.144 110.91 119.47 110.91V110.91ZM106.47 118.91C107.459 118.91 108.426 118.617 109.248 118.067C110.07 117.518 110.711 116.737 111.089 115.823C111.468 114.91 111.567 113.904 111.374 112.934C111.181 111.965 110.705 111.074 110.006 110.374C109.306 109.675 108.415 109.199 107.445 109.006C106.476 108.813 105.47 108.912 104.557 109.291C103.643 109.669 102.862 110.31 102.313 111.132C101.763 111.954 101.47 112.921 101.47 113.91C101.47 115.236 101.997 116.508 102.934 117.445C103.872 118.383 105.144 118.91 106.47 118.91V118.91ZM92.47 126.91C93.4589 126.91 94.4256 126.617 95.2478 126.067C96.0701 125.518 96.711 124.737 97.0894 123.823C97.4678 122.91 97.5669 121.904 97.3739 120.934C97.181 119.965 96.7048 119.074 96.0055 118.374C95.3063 117.675 94.4154 117.199 93.4454 117.006C92.4755 116.813 91.4702 116.912 90.5566 117.291C89.6429 117.669 88.8621 118.31 88.3127 119.132C87.7632 119.954 87.47 120.921 87.47 121.91C87.47 123.236 87.9968 124.508 88.9345 125.445C89.8721 126.383 91.1439 126.91 92.47 126.91ZM127.47 36.9099L64.47 73.9099L32.47 55.4099L1 37.2099V110.53L64.5 147.19L128 110.56V37.2399L127.46 36.9299L127.47 36.9099ZM86.26 88.0999C86.0088 88.1004 85.7616 88.0374 85.5414 87.9168C85.3211 87.7962 85.1348 87.6218 85 87.4099L84.23 86.2199C84.0184 85.8849 83.9469 85.48 84.0311 85.0928C84.1153 84.7055 84.3484 84.3669 84.68 84.1499L104.88 71.1499C105.119 70.9896 105.402 70.9059 105.69 70.9099C105.941 70.9094 106.188 70.9724 106.409 71.093C106.629 71.2137 106.815 71.388 106.95 71.5999L107.72 72.7899C107.933 73.1255 108.005 73.532 107.918 73.9201C107.832 74.3083 107.595 74.6463 107.26 74.8599L87.07 87.8599C86.8286 88.0159 86.5474 88.0992 86.26 88.0999V88.0999ZM119.47 109.9C118.679 109.9 117.906 109.665 117.248 109.226C116.59 108.786 116.077 108.162 115.774 107.431C115.472 106.7 115.393 105.895 115.547 105.12C115.701 104.344 116.082 103.631 116.642 103.071C117.201 102.512 117.914 102.131 118.69 101.977C119.466 101.822 120.27 101.902 121.001 102.204C121.732 102.507 122.356 103.02 122.796 103.678C123.235 104.335 123.47 105.109 123.47 105.9C123.47 106.961 123.049 107.978 122.298 108.728C121.548 109.478 120.531 109.9 119.47 109.9ZM106.47 117.9C105.679 117.9 104.906 117.665 104.248 117.226C103.59 116.786 103.077 116.162 102.774 115.431C102.472 114.7 102.393 113.895 102.547 113.12C102.701 112.344 103.082 111.631 103.642 111.071C104.201 110.512 104.914 110.131 105.69 109.977C106.466 109.822 107.27 109.902 108.001 110.204C108.732 110.507 109.356 111.02 109.796 111.678C110.235 112.335 110.47 113.109 110.47 113.9C110.47 114.961 110.049 115.978 109.298 116.728C108.548 117.478 107.531 117.9 106.47 117.9ZM92.47 125.9C91.6789 125.9 90.9055 125.665 90.2477 125.226C89.5899 124.786 89.0772 124.162 88.7745 123.431C88.4717 122.7 88.3925 121.895 88.5469 121.12C88.7012 120.344 89.0822 119.631 89.6416 119.071C90.201 118.512 90.9137 118.131 91.6896 117.977C92.4656 117.822 93.2698 117.902 94.0007 118.204C94.7316 118.507 95.3563 119.02 95.7959 119.678C96.2354 120.335 96.47 121.109 96.47 121.9C96.47 122.961 96.0486 123.978 95.2984 124.728C94.5483 125.478 93.5309 125.9 92.47 125.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.4C94.403 125.4 95.97 123.833 95.97 121.9C95.97 119.967 94.403 118.4 92.47 118.4C90.537 118.4 88.97 119.967 88.97 121.9C88.97 123.833 90.537 125.4 92.47 125.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 118.9C93.0633 118.9 93.6433 119.076 94.1367 119.405C94.63 119.735 95.0145 120.204 95.2416 120.752C95.4687 121.3 95.5281 121.903 95.4123 122.485C95.2966 123.067 95.0109 123.602 94.5913 124.021C94.1717 124.441 93.6372 124.726 93.0552 124.842C92.4733 124.958 91.8701 124.899 91.3219 124.672C90.7737 124.444 90.3052 124.06 89.9756 123.567C89.6459 123.073 89.47 122.493 89.47 121.9C89.47 121.104 89.786 120.341 90.3487 119.779C90.9113 119.216 91.6743 118.9 92.47 118.9V118.9ZM92.47 117.9C91.6788 117.9 90.9055 118.134 90.2477 118.574C89.5899 119.014 89.0772 119.638 88.7745 120.369C88.4717 121.1 88.3925 121.904 88.5468 122.68C88.7012 123.456 89.0821 124.169 89.6415 124.728C90.201 125.288 90.9137 125.669 91.6896 125.823C92.4655 125.977 93.2698 125.898 94.0007 125.595C94.7316 125.293 95.3563 124.78 95.7958 124.122C96.2354 123.464 96.47 122.691 96.47 121.9C96.47 120.839 96.0485 119.822 95.2984 119.071C94.5483 118.321 93.5308 117.9 92.47 117.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M86.26 87.6C86.0927 87.5997 85.9281 87.5574 85.7814 87.4771C85.6346 87.3967 85.5104 87.2808 85.42 87.14L84.65 86C84.5791 85.8882 84.5311 85.7635 84.5088 85.633C84.4865 85.5025 84.4903 85.3689 84.52 85.24C84.5769 84.9851 84.7312 84.7626 84.95 84.62L105.15 71.62C105.311 71.516 105.498 71.4605 105.69 71.46C105.857 71.4602 106.022 71.5025 106.169 71.5829C106.315 71.6632 106.44 71.7791 106.53 71.92L107.3 73.11C107.441 73.3331 107.487 73.6026 107.43 73.86C107.371 74.1165 107.213 74.3393 106.99 74.48L86.8 87.48C86.6349 87.5699 86.4477 87.6115 86.26 87.6Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M105.69 71.9399C105.774 71.9391 105.857 71.9599 105.93 72.0001C106.004 72.0404 106.066 72.0989 106.11 72.1699L106.88 73.3599C106.948 73.4704 106.97 73.6035 106.94 73.7299C106.91 73.8606 106.831 73.975 106.72 74.0499L86.52 86.9999C86.4416 87.0484 86.3521 87.0759 86.26 87.0799C86.1753 87.0797 86.092 87.0575 86.0184 87.0154C85.9447 86.9733 85.8833 86.9129 85.84 86.8399L85.07 85.6599C85.0029 85.5528 84.9779 85.4245 85 85.2999C85.0094 85.2358 85.0332 85.1746 85.0695 85.1209C85.1059 85.0672 85.1539 85.0224 85.21 84.9899L105.41 71.9899C105.492 71.9415 105.585 71.9172 105.68 71.9199L105.69 71.9399ZM105.68 70.9199C105.392 70.9159 105.109 70.9996 104.87 71.1599L84.67 84.1599C84.3384 84.3769 84.1053 84.7155 84.0212 85.1028C83.937 85.49 84.0084 85.8949 84.22 86.2299L85 87.4099C85.1057 87.5762 85.2433 87.7199 85.4048 87.8327C85.5663 87.9454 85.7486 88.025 85.9411 88.0669C86.1337 88.1087 86.3325 88.112 86.5263 88.0765C86.7201 88.0409 86.9049 87.9674 87.07 87.8599L107.26 74.8599C107.595 74.6463 107.832 74.3083 107.919 73.9202C108.005 73.532 107.933 73.1255 107.72 72.7899L107 71.6299C106.865 71.4181 106.679 71.2437 106.459 71.1231C106.238 71.0024 105.991 70.9394 105.74 70.9399L105.68 70.9199Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.4C108.403 117.4 109.97 115.833 109.97 113.9C109.97 111.967 108.403 110.4 106.47 110.4C104.537 110.4 102.97 111.967 102.97 113.9C102.97 115.833 104.537 117.4 106.47 117.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 110.9C107.063 110.9 107.643 111.076 108.137 111.405C108.63 111.735 109.015 112.204 109.242 112.752C109.469 113.3 109.528 113.903 109.412 114.485C109.297 115.067 109.011 115.602 108.591 116.021C108.172 116.441 107.637 116.726 107.055 116.842C106.473 116.958 105.87 116.899 105.322 116.672C104.774 116.444 104.305 116.06 103.976 115.567C103.646 115.073 103.47 114.493 103.47 113.9C103.47 113.104 103.786 112.341 104.349 111.779C104.911 111.216 105.674 110.9 106.47 110.9V110.9ZM106.47 109.9C105.679 109.9 104.905 110.134 104.248 110.574C103.59 111.014 103.077 111.638 102.774 112.369C102.472 113.1 102.392 113.904 102.547 114.68C102.701 115.456 103.082 116.169 103.642 116.728C104.201 117.288 104.914 117.669 105.69 117.823C106.466 117.977 107.27 117.898 108.001 117.595C108.732 117.293 109.356 116.78 109.796 116.122C110.235 115.464 110.47 114.691 110.47 113.9C110.47 112.839 110.049 111.822 109.298 111.071C108.548 110.321 107.531 109.9 106.47 109.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.4C121.403 109.4 122.97 107.833 122.97 105.9C122.97 103.967 121.403 102.4 119.47 102.4C117.537 102.4 115.97 103.967 115.97 105.9C115.97 107.833 117.537 109.4 119.47 109.4Z",
        fill: "white"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 102.9C120.063 102.9 120.643 103.076 121.137 103.405C121.63 103.735 122.015 104.204 122.242 104.752C122.469 105.3 122.528 105.903 122.412 106.485C122.297 107.067 122.011 107.602 121.591 108.021C121.172 108.441 120.637 108.726 120.055 108.842C119.473 108.958 118.87 108.899 118.322 108.672C117.774 108.444 117.305 108.06 116.976 107.567C116.646 107.073 116.47 106.493 116.47 105.9C116.47 105.104 116.786 104.341 117.349 103.779C117.911 103.216 118.674 102.9 119.47 102.9V102.9ZM119.47 101.9C118.679 101.9 117.905 102.134 117.248 102.574C116.59 103.014 116.077 103.638 115.774 104.369C115.472 105.1 115.392 105.904 115.547 106.68C115.701 107.456 116.082 108.169 116.642 108.728C117.201 109.288 117.914 109.669 118.69 109.823C119.466 109.977 120.27 109.898 121.001 109.595C121.732 109.293 122.356 108.78 122.796 108.122C123.235 107.464 123.47 106.691 123.47 105.9C123.47 104.839 123.049 103.822 122.298 103.071C121.548 102.321 120.531 101.9 119.47 101.9Z",
        fill: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.34 16.67L61.07 36.9L32.47 55.4L1.01001 37.21L1.56001 36.9L64.47 0.579956L92.34 16.67Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M1.56001 36.8999L1.01001 37.2099",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.43 36.9299L64.47 73.8999L32.47 55.3999L61.07 36.8999L92.34 16.6699L127.38 36.8999L127.43 36.9299Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M64.47 73.8999V146.9",
        stroke: "black",
        strokeWidth: "3",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M106.47 117.9C108.679 117.9 110.47 116.109 110.47 113.9C110.47 111.691 108.679 109.9 106.47 109.9C104.261 109.9 102.47 111.691 102.47 113.9C102.47 116.109 104.261 117.9 106.47 117.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M92.47 125.9C94.6791 125.9 96.47 124.109 96.47 121.9C96.47 119.691 94.6791 117.9 92.47 117.9C90.2608 117.9 88.47 119.691 88.47 121.9C88.47 124.109 90.2608 125.9 92.47 125.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M119.47 109.9C121.679 109.9 123.47 108.109 123.47 105.9C123.47 103.691 121.679 101.9 119.47 101.9C117.261 101.9 115.47 103.691 115.47 105.9C115.47 108.109 117.261 109.9 119.47 109.9Z",
        fill: "white",
        stroke: "black",
        strokeMiterlimit: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
          lineNumber: 111,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }, undefined);
};

/***/ }),

/***/ "./urlConfig.js":
/*!**********************!*\
  !*** ./urlConfig.js ***!
  \**********************/
/*! exports provided: api, generatePublicUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePublicUrl", function() { return generatePublicUrl; });
const baseUrl = "http://localhost:4000"; // const baseUrl=  "https://backend-logistics.herokuapp.com"

const api = `${baseUrl}/api`;
const generatePublicUrl = fileName => {
  return `${baseUrl}/public/${fileName}`;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L2FkZFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdFByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0b3IvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi91cmxDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIlJlcXVlc3RTdWJtaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYWNrIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJyZXBsYWNlIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwiY2xvc2UiLCJjaGVja01hcmsiLCJjcmVhdGVDb250ZXh0IiwiUmVxdWVzdENvbnRleHRQcm92aWRlciIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiY2FydG9ucyIsImRlbGl2ZXJ5TG9jYXRpb25zIiwiZGVzY3JpcHRpb25zIiwiaXRlbXNXb3J0aCIsInJlY2VpdmVyIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIxIiwicGhvbmVOdW1iZXIyIiwic2VuZGVyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJfaWQiLCJ1bmRlZmluZWQiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0IiwicmVxdWVzdEltYWdlcyIsInN0YXR1cyIsImFtb3VudCIsImltZyIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VTdGF0ZSIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJleHRyYWN0ZWRSZXF1ZXN0Iiwic2V0RXh0cmFjdGVkUmVxdWVzdCIsInNlc3Npb25Ub2tlbiIsInNldFNlc3Npb25Ub2tlbiIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwidGVtcG9yYXJ5SW1hZ2UiLCJzZXRUZW1wb3JhcnlJbWFnZSIsInNldFJlcXVlc3RJbWFnZXMiLCJjb3VudCIsInNldENvdW50IiwiZm9ybSIsInNldEZvcm0iLCJyZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiaWQiLCJ0YXJnZXQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsIm5ld1BlcmNlbnRhZ2UiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVyciIsIm5ld1VybCIsImdldERvd25sb2FkVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcyIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJjYXRjaCIsInJlc3BvbnNlIiwiZGF0YSIsImNsZWFyIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJoYW5kbGVSZWNlaXZlciIsIm5ld0lucCIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsImNoaWxkcmVuIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsInN0b3JhZ2UiLCJTaW1wbGVTbGlkZXIiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwidXNlQ1NTIiwic2xpZGVzVG9TaG93IiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJtYXAiLCJ1dWlkdjQiLCJBZGRSZXF1ZXN0Iiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwib3B0aW9ucyIsImFjdGlvbiIsInNldEFjdGlvbiIsInBob3RvU291cmNlIiwidXBsb2FkIiwiY2hhbmdlU3RhdHVzIiwiUmVxdWVzdEhhbmRsZXIiLCJSZXF1ZXN0UHJldmlldyIsImVtYWlsUmVnZXgiLCJSZWdFeHAiLCJwcm9maWxlVmFsaWRhdGUiLCJsYXN0TmFtZSIsImVtYWlsIiwidGVzdCIsInBob25lTnVtYmVyIiwiYWRkcmVzcyIsImxvZ2luVmFsaWRhdGUiLCJwYXNzd29yZCIsInNpbmd1cFZhbGlkYXRlIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJhcGkiLCJSZXF1ZXN0IiwiYm94IiwicHJvZmlsZSIsInRyYW5zYWN0aW9uIiwiYXZhdGFyIiwiYmFzZVVybCIsImdlbmVyYXRlUHVibGljVXJsIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QUFFLEVBQUMsT0FBYjtBQUFBLCtCQUNBO0FBQU0sZUFBSyxFQUFDLFFBQVo7QUFBcUIsZ0JBQU0sRUFBQyxRQUE1QjtBQUFxQyxjQUFJLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQTRCSCxDQTdCTSxDOzs7Ozs7Ozs7Ozs7QUN2RlA7QUFBQTtBQUFBO0FBQUEsTUFBTTBELE9BQU8sR0FBRyx1QkFBaEIsQyxDQUNBOztBQUNPLE1BQU1OLEdBQUcsR0FBSSxHQUFFTSxPQUFRLE1BQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUlDLFFBQUQsSUFBYztBQUMzQyxTQUFRLEdBQUVGLE9BQVEsV0FBVUUsUUFBUyxFQUFyQztBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7QUNIUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9yZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9yZXF1ZXN0LmpzXCIpO1xuIiwiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NoZWNrTWFyaywgY2xvc2UgfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuY29uc3QgUmVxdWVzdFN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgICBjb25zdCBiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzZXRSZXF1ZXN0U3VjY2Vzc309IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5yZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdHRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlN1Y2Nlc3M8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PiBiYWNrKCl9PntjbG9zZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tlZFwiPiB7IGNoZWNrTWFyaygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3RfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBSZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbiBhZG1pbiB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHksIGNoZWNrIHlvdXIgdHJhbnNhY3Rpb24gcGFnZSB0byBrbm93IHRoZSBzdGF0dXMgb2YgeW91ciByZXF1ZXN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdFwiIG9uQ2xpY2s9eyAoKT0+IGJhY2soKX0+PHNwYW4+RG9uZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFN1Ym1pdDsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgLy8gICAgIHtzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgLy8gICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgYW1vdW50OiAnJyxcclxuICAgIC8vICAgICBfaWQ6ICcnLFxyXG4gICAgLy8gICAgIGZvcm1FcnJvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIjU1XCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwibGFnb3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwidGhhbmsgeW91XCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCI1MDAwXCIsXHJcbiAgICAgICAgcmVjZWl2ZXI6IHtmaXJzdE5hbWU6IFwiRGF2aWRcIiwgcGhvbmVOdW1iZXIxOiBcIjA3MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODEzMDYxNDkxNVwifSxcclxuICAgICAgICBzZW5kZXI6IHtmaXJzdE5hbWU6IFwibWF5b3dhXCIsIHBob25lTnVtYmVyMTogXCIwODEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxNDA2MTQ2MTVcIn0sXHJcbiAgICAgICAgdGFnTmFtZTogXCJjaGlzb21cIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBfaWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHVybCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFtdKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFsuLi5yZXF1ZXN0SW1hZ2VzLCB7Y2xvdWRVcmw6IHVybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSwgW3VybF0pO1xyXG4gICAgXHJcbiAgICAvLyB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgICAgICBcclxuICAgIC8vIH0sIFt1cmxdKTtcclxuICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgIGNvbnN0IHtzZW5kZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGlkfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgc2VuZGVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7IC4uLmlucHV0LCBzZW5kZXIsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcbiAgIGNvbnNvbGUubG9nKHRlbXBvcmFyeUltYWdlKTtcclxuICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgIGxldCBwZXJmZWN0U2l6ZSA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICBsZXQgcmVzdHJ1Y3R1cmVVcmwgPSB7aW1hZ2VTb3VyY2U6IHBlcmZlY3RTaXplfVxyXG4gICAgcGVyZmVjdFNpemUgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShbLi4udGVtcG9yYXJ5SW1hZ2UsIHJlc3RydWN0dXJlVXJsXSk7XHJcbiAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIHNldFVybChbbmV3VXJsIF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVxdWVzdC9jcmVhdGUnLCBpbnB1dCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDogeydhdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSAnNTAwJyB8fCAnNDAwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpLFxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyA9PSAyMDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpLFxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVjZWl2ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY29uc3Qge3JlY2VpdmVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBpZCwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIHJlY2VpdmVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0lucCA9IHsgLi4uaW5wdXQsIHJlY2VpdmVyIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnApO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3RVcGRhdGUgPSBhc3luYyhlLCBpZCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KC4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoJy9yZXF1ZXN0LycgKyBpZCwgaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCh7Li4uaW5wdXQsIHJlcXVlc3RJbWFnZXN9KTtcclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlUmVjZWl2ZXIsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUFDSURlaXFRSUhleHRqVGkyOE5WRG1oNWhXSGFodWlORVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJtYXlvci1kYjEzYS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWF5b3ItZGIxM2EuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJtYXlvci1kYjEzYVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJtYXlvci1kYjEzYS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjI5MDU1MDI5NzdcIixcclxuICAgIGFwcElkOiBcIjE6MjI5MDU1MDI5Nzc6d2ViOjI0OGZkNDI2YTFjZTQ0OTczMzZmMDBcIlxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpcmViYXNlQXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOmZpcmViYXNlLmFwcCgpO1xyXG4gIGNvbnN0IHN0b3JlID0gZmlyZWJhc2VBcHAuc3RvcmFnZSgpO1xyXG5cclxuICBleHBvcnQge3N0b3JlfTsiLCJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHVzZUNTUzogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDBcclxuICB9O1xyXG4gIGNvbnN0IHt0ZW1wb3JhcnlJbWFnZX0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICB7dGVtcG9yYXJ5SW1hZ2UubGVuZ3RoID4gMCAmJiB0ZW1wb3JhcnlJbWFnZS5tYXAoKHtpbWFnZVNvdXJjZX0pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVNvdXJjZX0ga2V5PXt1dWlkdjQoKX0vPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgIDwvU2xpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQge3VwbG9hZH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgQWRkUmVxdWVzdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aW5wdXQsIGVycm9yLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVJlY2VpdmVyLCBoYW5kbGVDaGVjaywgdGVtcG9yYXJ5SW1hZ2UsIHJlcXVlc3RJbWFnZXMsIGhhbmRsZUZvcm1QcmV2aWV3LCBwaG90b0NoYW5nZSwgaGFuZGxlUmVxdWVzdFVwZGF0ZSwgc2V0Q291bnR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c09wdGlvbiwgc2V0U3RhdHVzT3B0aW9uXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7b3B0aW9uczogXCJwZW5kaW5nXCJ9LCBcclxuICAgICAgICB7b3B0aW9uczogXCJwcm9jZXNzaW5nXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcImNhbmNlbGVkXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcIm9uSG9sZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJjb21wbGV0ZWRcIn1cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBwaG90b1NvdXJjZSA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRlbXBvcmFyeUltYWdlIHx8IHJlcXVlc3RJbWFnZXMgKXtcclxuICAgICAgICAgICAgcmV0dXJuKDw+IHt0ZW1wb3JhcnlJbWFnZS5tYXAoKHtpbWFnZVNvdXJjZX0pID0+IFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTb3VyY2V9IGtleT17dXVpZHY0KCl9IC8+XHJcbiAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgcmV0dXJuICg8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPiApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1jaGFuZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJzdGF0dXNcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17aW5wdXQuc3RhdHVzfSBuYW1lPVwic3RhdHVzXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c09wdGlvbi5tYXAoKHtvcHRpb25zfSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9uc30ga2V5PXt1dWlkdjQoKX0+e29wdGlvbnN9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+QW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYW1vdW50XCIgbmFtZT1cImFtb3VudFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtpbnB1dC5hbW91bnR9IHR5cGU9XCJudW1iZXJcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnMgfSA9IHsuLi5pbnB1dH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RlbXBvcmFyeUltYWdlID8gcGhvdG9Tb3VyY2UoKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PGRpdj57ZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsgIGlucHV0Ll9pZCA/IChlKT0+IGhhbmRsZVJlcXVlc3RVcGRhdGUoZSwgaW5wdXQuX2lkKSA6IChlKT0+ICBoYW5kbGVGb3JtUHJldmlldyhlKSB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyLWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICA8aDM+U2VuZGVyIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJGaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlICB9IGlkPVwic2VuZGVyRmlyc3ROYW1lXCIgIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJQaG9uZU51bWJlcjFcIj5QaG9uZSBOdW1iZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwic2VuZGVycGhvbmVOdW1iZXIxXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSAgfSBuYW1lPVwicGhvbmVOdW1iZXIxXCIgdmFsdWU9e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjF9ICBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmVOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIxLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJwaG9uZU51bWJlcjJcIj5QaG9uZSBOdW1iZXIgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInNlbmRlcnBob25lTnVtYmVyMlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgfSBuYW1lPVwicGhvbmVOdW1iZXIyXCIgdmFsdWU9e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjJ9ICBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLnBob25lTnVtYmVyMi5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgIDxoMz5SZWNlaXZlciBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInJlY2VpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlckZpcnN0bmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicmVjZWl2ZXJGaXJzdG5hbWVcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlclBob25lTnVtYmVyMVwiPlBob25lIE51bWJlcjE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJyZWNlaXZlcnBob25lTnVtYmVyMVwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cInBob25lTnVtYmVyMVwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjF9IHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZU51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlcnBob25lTnVtYmVyMlwiPlBob25lIE51bWJlciAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJwaG9uZU51bWJlcjJcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIyfSBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIyLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ05hbWVcIj5UYWcgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdOYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInRhZ05hbWVcIiB2YWx1ZT17aW5wdXQudGFnTmFtZX0gcGxhY2Vob2xkZXI9XCJUYWcgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnRhZ05hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy50YWdOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkNhcnRvbnNcIj5OdW1iZXIgb2YgY2FydG9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIkNhcnRvbnNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiY2FydG9uc1wiIHZhbHVlPXtpbnB1dC5jYXJ0b25zfSBwbGFjZWhvbGRlcj1cIkNhcnRvbnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuY2FydG9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmNhcnRvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJJdGVtc1wiPk90aGVyIEl0ZW1zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJvdGhlckl0ZW1zXCIgb25DaGFuZ2U9e2hhbmRsZUNoZWNrfSBuYW1lPVwib3RoZXJJdGVtc1wiIHZhbHVlPXtpbnB1dC5vdGhlckl0ZW1zfSBwbGFjZWhvbGRlcj1cIm90aGVySXRlbXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMub3RoZXJJdGVtcy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLm90aGVySXRlbXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXRlbXNXb3J0aFwiPkl0ZW1zIFdvcnRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW1zV29ydGhcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiaXRlbXNXb3J0aFwiIHZhbHVlPXtpbnB1dC5pdGVtc1dvcnRofSBwbGFjZWhvbGRlcj1cIml0ZW1zV29ydGhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuaXRlbXNXb3J0aC5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLml0ZW1zV29ydGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlMb2NhdGlvblwiPkRlbGl2ZXJ5IExvY2F0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZWxpdmVyeUxvY2F0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlbGl2ZXJ5TG9jYXRpb25zXCIgdmFsdWU9e2lucHV0LmRlbGl2ZXJ5TG9jYXRpb25zfSAgcGxhY2Vob2xkZXI9XCJkZWxpdmVyeUxvY2F0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI0MFwiIHJvd3M9XCI2XCIgaWQ9XCJkZXNjcmlwdGlvbnNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGVzY3JpcHRpb25zXCIgdmFsdWU9e2lucHV0LmRlc2NyaXB0aW9uc30gIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmRlc2NyaXB0aW9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmRlc2NyaXB0aW9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBjaGFuZ2VTdGF0dXMoKVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dC5faWQgPyAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwidXBkYXRlXCIvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4pIDooPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZXF1ZXN0OyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IEFkZFJlcXVlc3QgZnJvbSAnLi9hZGRSZXF1ZXN0JztcclxuaW1wb3J0IFJlcXVlc3RQcmV2aWV3IGZyb20gJy4vcmVxdWVzdFByZXZpZXcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0SGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHtjb3VudH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge2NvdW50ID09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZFJlcXVlc3QgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcXVlc3RQcmV2aWV3IC8+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SGFuZGxlcjsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2ltcGxlU2xpZGVyIGZyb20gJy4uL3NsaWRlcic7XHJcblxyXG5cclxuY29uc3QgUmVxdWVzdFByZXZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2lucHV0LCBzZXRDb3VudCwgaGFuZGxlRm9ybVN1Ym1pdH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICAgXHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTbGlkZXIgLz4gXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aW5wdXQuX2lkID09IHVuZGVmaW5lZCA/ICBoYW5kbGVGb3JtU3VibWl0IDogKCk9PiBzZXRDb3VudCgpfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlbmRlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgaW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQucmVjZWl2ZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQudGFnTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5jYXJ0b25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0Lm90aGVySXRlbXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuaXRlbXNXb3J0aH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZXNjcmlwdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc3RhdHVzfTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIHsgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRWRpdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pOiAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSB9XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQcmV2aWV3OyIsImV4cG9ydCBjb25zdCBlbWFpbFJlZ2V4ID0gUmVnRXhwKCAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVmFsaWRhdGUgPSAoIG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cdFxyXG5cdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0Y2FzZSBcImZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmZpcnN0TmFtZSA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImxhc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMubGFzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmVtYWlsID0gZW1haWxSZWdleC50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyc6ICcqaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInBob25lTnVtYmVyXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMucGhvbmVOdW1iZXIgPSB2YWx1ZS5sZW5ndGggPCAxMSAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqaW5wdXQgYSB2YWxpZCBwaG9uZSBudW1iZXIqJyA6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJhZGRyZXNzXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuYWRkcmVzcyA9IHZhbHVlLmxlbmd0aCA8IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcclxuXHQgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0VmFsaWRhdGUgPSAoIGlkLCB2YWx1ZSwgZm9ybUVycm9ycyApID0+IHtcclxuXHJcblx0c3dpdGNoIChpZCkge1xyXG5cdFx0Y2FzZSBcInNlbmRlckZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZW5kZXJwaG9uZU51bWJlcjFcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIxID0gdmFsdWUubGVuZ3RoIDwgMTEgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNlbmRlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjIgPSB2YWx1ZS5sZW5ndGggPCAxMSAmJiB2YWx1ZS5sZW5ndGggPiAwID8gJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmVjZWl2ZXJGaXJzdG5hbWVcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMSA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyZWNlaXZlcnBob25lTnVtYmVyMlwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMiA9IHZhbHVlLmxlbmd0aCA8IDExICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ0YWdOYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMudGFnTmFtZSA9IHZhbHVlLmxlbmd0aCA8IDIgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqbWluaW11bSAzIGNoYXJhY3RlcnMgcmVxdWlyZWQqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIkNhcnRvbnNcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5jYXJ0b25zID0gdmFsdWUubGVuZ3RoIDw9IDAgID8gJyppbnB1dCBudW1iZXIgb2YgaXRlbXMqJzogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIml0ZW1zV29ydGhcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5pdGVtc1dvcnRoID0gdmFsdWUubGVuZ3RoIDw9IDAgPyAnKmlucHV0IGl0ZW1zIHdvcnRoKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJkZWxpdmVyeUxvY2F0aW9uXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnMgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKmlucHV0IGEgcHJvcGVyIHN0YXRlKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJkZXNjcmlwdGlvbnNcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnMgPSB2YWx1ZS5sZW5ndGggPCAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic6ICcnO1xyXG5cdFx0XHRicmVhaztcclxuXHQgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5WYWxpZGF0ZSA9ICggbmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMgKSA9PiB7XHJcblx0XHJcblx0c3dpdGNoIChuYW1lKSB7XHJcblx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5lbWFpbCA9IGVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyonO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwYXNzd29yZFwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBhc3N3b3JkID0gdmFsdWUubGVuZ3RoIDwgNiAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcqcGFzc3dvcmQgaXMgdG9vIHNob3J0KicgOiAnJztcclxuXHRcdFx0YnJlYWs7XHJcblx0ICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ3VwVmFsaWRhdGUgPSAoIG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzICkgPT4ge1xyXG5cdFxyXG5cdHN3aXRjaCAobmFtZSkge1xyXG5cdFx0Y2FzZSBcImZpcnN0TmFtZVwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLmZpcnN0TmFtZSA9IHZhbHVlLmxlbmd0aCA+IDMgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKm1pbmltdW0gMyBjaGFyYWN0ZXJzIHJlcXVpcmVkKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImxhc3ROYW1lXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMubGFzdE5hbWUgPSB2YWx1ZS5sZW5ndGggPiAzICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyptaW5pbXVtIDMgY2hhcmFjdGVycyByZXF1aXJlZConO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwaG9uZU51bWJlclwiOlxyXG5cdFx0XHRmb3JtRXJyb3JzLnBob25lTnVtYmVyID0gdmFsdWUubGVuZ3RoID4gMTAgJiYgdmFsdWUubGVuZ3RoID4gMCA/ICcnOiAnKmlucHV0IGEgdmFsaWQgbnVtYmVyKic7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdGZvcm1FcnJvcnMuZW1haWwgPSBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnJzogJyppbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MqJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicGFzc3dvcmRcIjpcclxuXHRcdFx0Zm9ybUVycm9ycy5wYXNzd29yZCA9IHZhbHVlLmxlbmd0aCA8IDYgICYmIHZhbHVlLmxlbmd0aCA+IDAgPyAnKnBhc3N3b3JkIGlzIHRvbyBzaG9ydConIDogJyc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdCAgfVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3VybENvbmZpZyc7IFxyXG4gICBcclxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBhcGlcclxufSk7XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NJbnN0YW5jZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVxdWVzdEhhbmRsZXIgZnJvbSAnLi4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXInO1xyXG5pbXBvcnQgUmVxdWVzdFN1Ym1pdCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RTdWJtaXQnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7cmVxdWVzdFN1Y2Nlc3N9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgeyByZXF1ZXN0U3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgIDxSZXF1ZXN0U3VibWl0IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ1c2VyLXJlcXVlc3RcIj5cclxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0SGFuZGxlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0OyIsImV4cG9ydCBjb25zdCBib3ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCIyMDVcIiBjbGFzc05hbWU9XCJib3hcIiBoZWlnaHQ9XCIyMzFcIiB2aWV3Qm94PVwiMCAwIDIwNSAyMzFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTk5LjY0IDYzLjU4NDFWMTcxLjkzM0wxNzUuNDEgMTg1Ljg3NUMxNzcuMDMyIDE4NC4zOTggMTc4LjA4NCAxODIuNCAxNzguMzgzIDE4MC4yM0MxNzguNjgzIDE3OC4wNTkgMTc4LjIxMSAxNzUuODUyIDE3Ny4wNDkgMTczLjk5M0MxNzUuODg3IDE3Mi4xMzMgMTc0LjEwOSAxNzAuNzM4IDE3Mi4wMjQgMTcwLjA0OUMxNjkuOTM4IDE2OS4zNiAxNjcuNjc3IDE2OS40MjEgMTY1LjYzMiAxNzAuMjIyQzE2My41ODYgMTcxLjAyMiAxNjEuODg3IDE3Mi41MTIgMTYwLjgyOCAxNzQuNDMxQzE1OS43NjkgMTc2LjM1MSAxNTkuNDE4IDE3OC41OCAxNTkuODM1IDE4MC43MzFDMTYwLjI1MSAxODIuODgyIDE2MS40MSAxODQuODIgMTYzLjExIDE4Ni4yMDhDMTY0LjgxIDE4Ny41OTYgMTY2Ljk0NCAxODguMzQ3IDE2OS4xNDEgMTg4LjMyOUMxNzAuMDkyIDE4OC4zMzQgMTcxLjAzOCAxODguMTkyIDE3MS45NDYgMTg3LjkwN0wxNTMuMTM5IDE5OC44NDlDMTU0Ljk5MSAxOTcuMzc2IDE1Ni4yMTggMTk1LjI1OSAxNTYuNTc0IDE5Mi45MjNDMTU2LjkyOSAxOTAuNTg3IDE1Ni4zODcgMTg4LjIwMyAxNTUuMDU2IDE4Ni4yNDhDMTUzLjcyNiAxODQuMjkzIDE1MS43MDQgMTgyLjkxMSAxNDkuMzk1IDE4Mi4zNzlDMTQ3LjA4NyAxODEuODQ2IDE0NC42NjIgMTgyLjIwMyAxNDIuNjA1IDE4My4zNzZDMTQwLjU0OSAxODQuNTUgMTM5LjAxMyAxODYuNDU1IDEzOC4zMDQgMTg4LjcxQzEzNy41OTUgMTkwLjk2NCAxMzcuNzY1IDE5My40MDMgMTM4Ljc4MSAxOTUuNTM3QzEzOS43OTcgMTk3LjY3MiAxNDEuNTg0IDE5OS4zNDYgMTQzLjc4NCAyMDAuMjIzQzE0NS45ODQgMjAxLjEwMSAxNDguNDM1IDIwMS4xMTggMTUwLjY0NyAyMDAuMjcxTDEwMy4yNTIgMjI3LjQwNUw2Ljg2NDcxIDE3MS45MzNWNjQuNDQzOEw1MS41MTY1IDkwLjIwMjVMMTAxLjY2OSAxMTkuMTE5TDEwMy4yMzcgMTIwLjAyNUwxMDQuODA0IDExOS4xMDNMMTk5LjYwOSA2My41ODQxSDE5OS42NFpNMTM3LjM1NiAxNDEuNzM2QzEzOC40MTEgMTQxLjc0IDEzOS40NDUgMTQxLjQ0MSAxNDAuMzM0IDE0MC44NzZMMTcxLjk0NiAxMjAuNTU2QzE3Mi41NTcgMTIwLjE3IDE3My4wODYgMTE5LjY2NyAxNzMuNTAxIDExOS4wNzZDMTczLjkxNyAxMTguNDg2IDE3NC4yMTEgMTE3LjgxOSAxNzQuMzY3IDExNy4xMTRDMTc0LjUyMiAxMTYuNDEgMTc0LjUzNyAxMTUuNjgxIDE3NC40MDkgMTE0Ljk3MUMxNzQuMjgyIDExNC4yNjEgMTc0LjAxNSAxMTMuNTgzIDE3My42MjMgMTEyLjk3NkwxNzIuNDAxIDExMS4xNjNDMTcyLjAxMiAxMTAuNTU2IDE3MS41MDggMTEwLjAzMiAxNzAuOTE1IDEwOS42MjFDMTcwLjMyMyAxMDkuMjEgMTY5LjY1NSAxMDguOTIgMTY4Ljk1IDEwOC43NjhDMTY4LjI0NSAxMDguNjE1IDE2Ny41MTcgMTA4LjYwMyAxNjYuODA3IDEwOC43MzNDMTY2LjA5NyAxMDguODYyIDE2NS40MiAxMDkuMTMgMTY0LjgxNSAxMDkuNTIyTDEzMy4yMTkgMTI5LjczMUMxMzIuNjA4IDEzMC4xMjUgMTMyLjA4MyAxMzAuNjM2IDEzMS42NzMgMTMxLjIzNUMxMzEuMjYyIDEzMS44MzMgMTMwLjk3NiAxMzIuNTA3IDEzMC44MyAxMzMuMjE3QzEzMC42ODQgMTMzLjkyNyAxMzAuNjgyIDEzNC42NTkgMTMwLjgyMyAxMzUuMzcxQzEzMC45NjQgMTM2LjA4MiAxMzEuMjQ1IDEzNi43NTggMTMxLjY1MSAxMzcuMzU5TDEzMi44MjcgMTM5LjE4OEMxMzMuMzI1IDEzOS45NzkgMTM0LjAxOSAxNDAuNjI4IDEzNC44NDMgMTQxLjA3MkMxMzUuNjY3IDE0MS41MTUgMTM2LjU5MiAxNDEuNzM5IDEzNy41MjkgMTQxLjcyTDEzNy4zNTYgMTQxLjczNlpNMTg5LjU5NCAxNzUuNzk0QzE5MS40NTQgMTc1Ljc5NCAxOTMuMjcyIDE3NS4yNDQgMTk0LjgxOCAxNzQuMjEzQzE5Ni4zNjUgMTczLjE4MyAxOTcuNTcgMTcxLjcxOCAxOTguMjgyIDE3MC4wMDVDMTk4Ljk5MyAxNjguMjkxIDE5OS4xOCAxNjYuNDA1IDE5OC44MTcgMTY0LjU4NkMxOTguNDU0IDE2Mi43NjcgMTk3LjU1OCAxNjEuMDk2IDE5Ni4yNDMgMTU5Ljc4NEMxOTQuOTI4IDE1OC40NzMgMTkzLjI1MiAxNTcuNTggMTkxLjQyOCAxNTcuMjE4QzE4OS42MDQgMTU2Ljg1NiAxODcuNzEzIDE1Ny4wNDIgMTg1Ljk5NSAxNTcuNzUxQzE4NC4yNzcgMTU4LjQ2MSAxODIuODA4IDE1OS42NjMgMTgxLjc3NSAxNjEuMjA2QzE4MC43NDIgMTYyLjc0OCAxODAuMTkgMTY0LjU2MSAxODAuMTkgMTY2LjQxNkMxODAuMTkgMTY4LjkwMyAxODEuMTgxIDE3MS4yODggMTgyLjk0NCAxNzMuMDQ3QzE4NC43MDggMTc0LjgwNiAxODcuMSAxNzUuNzk0IDE4OS41OTQgMTc1Ljc5NFpNMjAyLjEzMiA1OC41NjY4TDEwMy4zOTMgMTE2LjM5OUw1My4wOTk0IDg3LjUyOTdMMy43OTI4NSA1OS4wNTEzVjE3My42NTNMMTAzLjMxNSAyMzAuOTUzTDIwMi44MzcgMTczLjY1M1Y1OS4wOTgyTDIwMS45OTEgNTguNjEzN0wyMDIuMTMyIDU4LjU2NjhaTTEzNy4zODggMTM4LjU5NEMxMzYuOTk5IDEzOC42IDEzNi42MTUgMTM4LjUwNyAxMzYuMjcyIDEzOC4zMjNDMTM1LjkyOSAxMzguMTQgMTM1LjYzOSAxMzcuODczIDEzNS40MjkgMTM3LjU0N0wxMzQuMjIyIDEzNS42ODdDMTMzLjg5IDEzNS4xNjMgMTMzLjc3OCAxMzQuNTMgMTMzLjkxIDEzMy45MjVDMTM0LjA0MiAxMzMuMzIgMTM0LjQwNyAxMzIuNzkgMTM0LjkyNyAxMzIuNDUxTDE2Ni41ODYgMTEyLjEzMkMxNjYuOTU5IDExMS44ODggMTY3LjM5NCAxMTEuNzU4IDE2Ny44NCAxMTEuNzU3QzE2OC4yMzUgMTExLjc1OSAxNjguNjI0IDExMS44NTkgMTY4Ljk3MSAxMTIuMDQ3QzE2OS4zMTggMTEyLjIzNSAxNjkuNjEzIDExMi41MDYgMTY5LjgzIDExMi44MzVMMTcxLjAzNyAxMTQuNjk1QzE3MS4zNzEgMTE1LjIyIDE3MS40ODMgMTE1Ljg1NSAxNzEuMzQ4IDExNi40NjJDMTcxLjIxMyAxMTcuMDY4IDE3MC44NDIgMTE3LjU5NyAxNzAuMzE2IDExNy45MzFMMTM4LjY3MyAxMzguMjVDMTM4LjI5MiAxMzguNTAxIDEzNy44NDQgMTM4LjYzMiAxMzcuMzg4IDEzOC42MjVWMTM4LjU5NFpNMTg5LjQ1MyAxNzIuNjY4QzE4OC4yMTMgMTcyLjY2OCAxODcuMDAxIDE3Mi4zMDEgMTg1Ljk3IDE3MS42MTRDMTg0LjkzOSAxNzAuOTI3IDE4NC4xMzUgMTY5Ljk1MSAxODMuNjYxIDE2OC44MDhDMTgzLjE4NiAxNjcuNjY2IDE4My4wNjIgMTY2LjQwOSAxODMuMzA0IDE2NS4xOTZDMTgzLjU0NiAxNjMuOTgzIDE4NC4xNDMgMTYyLjg2OSAxODUuMDIgMTYxLjk5NUMxODUuODk2IDE2MS4xMiAxODcuMDEzIDE2MC41MjUgMTg4LjIzIDE2MC4yODRDMTg5LjQ0NiAxNjAuMDQzIDE5MC43MDYgMTYwLjE2NiAxOTEuODUyIDE2MC42NEMxOTIuOTk3IDE2MS4xMTMgMTkzLjk3NiAxNjEuOTE0IDE5NC42NjUgMTYyLjk0MkMxOTUuMzU0IDE2My45NyAxOTUuNzIyIDE2NS4xNzkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTY4LjA3NCAxOTUuMDYxIDE2OS42NjQgMTkzLjg4NiAxNzAuODM3QzE5Mi43MSAxNzIuMDA5IDE5MS4xMTUgMTcyLjY2OCAxODkuNDUzIDE3Mi42NjhaTTE2OS4wNzggMTg1LjE3MkMxNjcuODM4IDE4NS4xNzIgMTY2LjYyNiAxODQuODA1IDE2NS41OTUgMTg0LjExOEMxNjQuNTY0IDE4My40MzEgMTYzLjc2MSAxODIuNDU1IDE2My4yODYgMTgxLjMxM0MxNjIuODEyIDE4MC4xNyAxNjIuNjg3IDE3OC45MTMgMTYyLjkyOSAxNzcuN0MxNjMuMTcxIDE3Ni40ODcgMTYzLjc2OCAxNzUuMzczIDE2NC42NDUgMTc0LjQ5OUMxNjUuNTIyIDE3My42MjUgMTY2LjYzOSAxNzMuMDI5IDE2Ny44NTUgMTcyLjc4OEMxNjkuMDcxIDE3Mi41NDcgMTcwLjMzMiAxNzIuNjcxIDE3MS40NzcgMTczLjE0NEMxNzIuNjIzIDE3My42MTcgMTczLjYwMiAxNzQuNDE4IDE3NC4yOTEgMTc1LjQ0N0MxNzQuOTc5IDE3Ni40NzUgMTc1LjM0NyAxNzcuNjgzIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTgwLjU3OCAxNzQuNjg3IDE4Mi4xNjggMTczLjUxMSAxODMuMzQxQzE3Mi4zMzUgMTg0LjUxMyAxNzAuNzQxIDE4NS4xNzIgMTY5LjA3OCAxODUuMTcyWk0xNDcuMTM2IDE5Ny42NzZDMTQ1Ljg5NiAxOTcuNjc2IDE0NC42ODQgMTk3LjMxIDE0My42NTMgMTk2LjYyM0MxNDIuNjIyIDE5NS45MzYgMTQxLjgxOSAxOTQuOTU5IDE0MS4zNDQgMTkzLjgxN0MxNDAuODcgMTkyLjY3NCAxNDAuNzQ2IDE5MS40MTcgMTQwLjk4NyAxOTAuMjA0QzE0MS4yMjkgMTg4Ljk5MiAxNDEuODI2IDE4Ny44NzggMTQyLjcwMyAxODcuMDAzQzE0My41OCAxODYuMTI5IDE0NC42OTcgMTg1LjUzMyAxNDUuOTEzIDE4NS4yOTJDMTQ3LjEyOSAxODUuMDUxIDE0OC4zOSAxODUuMTc1IDE0OS41MzUgMTg1LjY0OEMxNTAuNjgxIDE4Ni4xMjEgMTUxLjY2IDE4Ni45MjMgMTUyLjM0OSAxODcuOTUxQzE1My4wMzggMTg4Ljk3OSAxNTMuNDA1IDE5MC4xODggMTUzLjQwNSAxOTEuNDI0QzE1My40MDUgMTkzLjA4MiAxNTIuNzQ1IDE5NC42NzMgMTUxLjU2OSAxOTUuODQ1QzE1MC4zOTMgMTk3LjAxOCAxNDguNzk5IDE5Ny42NzYgMTQ3LjEzNiAxOTcuNjc2WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ni44OTVDMTUwLjE2NiAxOTYuODk1IDE1Mi42MjIgMTk0LjQ0NSAxNTIuNjIyIDE5MS40MjRDMTUyLjYyMiAxODguNDAzIDE1MC4xNjYgMTg1Ljk1MyAxNDcuMTM2IDE4NS45NTNDMTQ0LjEwNyAxODUuOTUzIDE0MS42NTEgMTg4LjQwMyAxNDEuNjUxIDE5MS40MjRDMTQxLjY1MSAxOTQuNDQ1IDE0NC4xMDcgMTk2Ljg5NSAxNDcuMTM2IDE5Ni44OTVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE4Ni43MzVDMTQ4LjA2NiAxODYuNzM1IDE0OC45NzUgMTg3LjAxIDE0OS43NDggMTg3LjUyNUMxNTAuNTIxIDE4OC4wNDEgMTUxLjEyNCAxODguNzczIDE1MS40OCAxODkuNjNDMTUxLjgzNiAxOTAuNDg2IDE1MS45MjkgMTkxLjQyOSAxNTEuNzQ4IDE5Mi4zMzlDMTUxLjU2NiAxOTMuMjQ4IDE1MS4xMTggMTk0LjA4NCAxNTAuNDYxIDE5NC43NEMxNDkuODAzIDE5NS4zOTYgMTQ4Ljk2NSAxOTUuODQyIDE0OC4wNTMgMTk2LjAyM0MxNDcuMTQxIDE5Ni4yMDQgMTQ2LjE5NiAxOTYuMTExIDE0NS4zMzcgMTk1Ljc1NkMxNDQuNDc4IDE5NS40MDEgMTQzLjc0MyAxOTQuOCAxNDMuMjI3IDE5NC4wMjlDMTQyLjcxIDE5My4yNTggMTQyLjQzNCAxOTIuMzUyIDE0Mi40MzQgMTkxLjQyNEMxNDIuNDM0IDE5MC4xOCAxNDIuOTMgMTg4Ljk4OCAxNDMuODExIDE4OC4xMDhDMTQ0LjY5MyAxODcuMjI5IDE0NS44ODkgMTg2LjczNSAxNDcuMTM2IDE4Ni43MzVaTTE0Ny4xMzYgMTg1LjE3MkMxNDUuODk2IDE4NS4xNzIgMTQ0LjY4NCAxODUuNTM5IDE0My42NTMgMTg2LjIyNkMxNDIuNjIyIDE4Ni45MTMgMTQxLjgxOSAxODcuODg5IDE0MS4zNDQgMTg5LjAzMkMxNDAuODcgMTkwLjE3NCAxNDAuNzQ2IDE5MS40MzEgMTQwLjk4NyAxOTIuNjQ0QzE0MS4yMjkgMTkzLjg1NyAxNDEuODI2IDE5NC45NzEgMTQyLjcwMyAxOTUuODQ1QzE0My41OCAxOTYuNzE5IDE0NC42OTcgMTk3LjMxNSAxNDUuOTEzIDE5Ny41NTZDMTQ3LjEyOSAxOTcuNzk3IDE0OC4zOSAxOTcuNjc0IDE0OS41MzUgMTk3LjJDMTUwLjY4MSAxOTYuNzI3IDE1MS42NiAxOTUuOTI2IDE1Mi4zNDkgMTk0Ljg5OEMxNTMuMDM4IDE5My44NjkgMTUzLjQwNSAxOTIuNjYxIDE1My40MDUgMTkxLjQyNEMxNTMuNDA1IDE4OS43NjYgMTUyLjc0NSAxODguMTc2IDE1MS41NjkgMTg3LjAwM0MxNTAuMzkzIDE4NS44MzEgMTQ4Ljc5OSAxODUuMTcyIDE0Ny4xMzYgMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTM3LjQwMyAxMzcuODEyQzEzNy4xNDMgMTM3LjgxNCAxMzYuODg2IDEzNy43NSAxMzYuNjU2IDEzNy42MjdDMTM2LjQyNiAxMzcuNTA0IDEzNi4yMyAxMzcuMzI2IDEzNi4wODcgMTM3LjEwOUwxMzQuODY0IDEzNS4yMzNDMTM0LjY0OSAxMzQuODgyIDEzNC41ODIgMTM0LjQ2MSAxMzQuNjc2IDEzNC4wNjFDMTM0LjcxNCAxMzMuODYzIDEzNC43OTEgMTMzLjY3NSAxMzQuOTA0IDEzMy41MDhDMTM1LjAxOCAxMzMuMzQyIDEzNS4xNjQgMTMzLjIgMTM1LjMzNCAxMzMuMDkyTDE2Ny4wMDkgMTEyLjc3M0MxNjcuMjUyIDExMi42MDEgMTY3LjU0MiAxMTIuNTA5IDE2Ny44NCAxMTIuNTA3QzE2OC4xMDIgMTEyLjUwNyAxNjguMzYgMTEyLjU3MyAxNjguNTkgMTEyLjY5OUMxNjguODIgMTEyLjgyNSAxNjkuMDE1IDExMy4wMDYgMTY5LjE1NiAxMTMuMjI2TDE3MC4zNzkgMTE1LjEwMUMxNzAuNTkxIDExNS40NDkgMTcwLjY2IDExNS44NjYgMTcwLjU2OSAxMTYuMjYzQzE3MC40NzggMTE2LjY2IDE3MC4yMzYgMTE3LjAwNiAxNjkuODkzIDExNy4yMjdMMTM4LjI1IDEzNy41NDdDMTM3Ljk5OSAxMzcuNzE1IDEzNy43MDUgMTM3LjgwNyAxMzcuNDAzIDEzNy44MTJaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjcuODQgMTEzLjMzNUMxNjcuOTc0IDExMy4zMzcgMTY4LjEwNyAxMTMuMzczIDE2OC4yMjQgMTEzLjQzOEMxNjguMzQyIDExMy41MDQgMTY4LjQ0MSAxMTMuNTk3IDE2OC41MTQgMTEzLjcxTDE2OS43MDUgMTE1LjU1NUMxNjkuODE3IDExNS43MzEgMTY5Ljg1NiAxMTUuOTQ0IDE2OS44MTUgMTE2LjE0OUMxNjkuNzkyIDExNi4yNSAxNjkuNzQ5IDExNi4zNDYgMTY5LjY4NyAxMTYuNDNDMTY5LjYyNCAxMTYuNTEzIDE2OS41NDUgMTE2LjU4MyAxNjkuNDU0IDExNi42MzNMMTM3LjgxMSAxMzYuOTUzQzEzNy42ODIgMTM3LjAyNyAxMzcuNTM2IDEzNy4wNjUgMTM3LjM4OCAxMzcuMDYyQzEzNy4yNTYgMTM3LjA2MyAxMzcuMTI3IDEzNy4wMzEgMTM3LjAxMSAxMzYuOTY4QzEzNi44OTYgMTM2LjkwNSAxMzYuNzk5IDEzNi44MTQgMTM2LjcyOSAxMzYuNzAzTDEzNS41MzggMTM0Ljg1OEMxMzUuNDI4IDEzNC42ODEgMTM1LjM4OSAxMzQuNDY5IDEzNS40MjggMTM0LjI2NEMxMzUuNDUxIDEzNC4xNjUgMTM1LjQ5MyAxMzQuMDcgMTM1LjU1MiAxMzMuOTg3QzEzNS42MTEgMTMzLjkwNCAxMzUuNjg2IDEzMy44MzMgMTM1Ljc3MyAxMzMuNzhMMTY3LjQzMiAxMTMuNDZDMTY3LjU1NCAxMTMuMzgyIDE2Ny42OTUgMTEzLjMzOSAxNjcuODQgMTEzLjMzNVpNMTY3Ljg0IDExMS43NzJDMTY3LjM5NCAxMTEuNzcxIDE2Ni45NTggMTExLjkwMiAxNjYuNTg2IDExMi4xNDdMMTM0LjkyNyAxMzIuNDY3QzEzNC40MDcgMTMyLjgwNiAxMzQuMDQyIDEzMy4zMzUgMTMzLjkxIDEzMy45NEMxMzMuNzc4IDEzNC41NDYgMTMzLjg5IDEzNS4xNzggMTM0LjIyMiAxMzUuNzAyTDEzNS40MjggMTM3LjU0N0MxMzUuNTk0IDEzNy44MDYgMTM1LjgxIDEzOC4wMzEgMTM2LjA2MyAxMzguMjA3QzEzNi4zMTYgMTM4LjM4NCAxMzYuNjAyIDEzOC41MDggMTM2LjkwMyAxMzguNTczQzEzNy4yMDUgMTM4LjYzOSAxMzcuNTE3IDEzOC42NDQgMTM3LjgyMSAxMzguNTg4QzEzOC4xMjQgMTM4LjUzMyAxMzguNDE0IDEzOC40MTggMTM4LjY3MyAxMzguMjVMMTcwLjMxNiAxMTcuOTMxQzE3MC44NDIgMTE3LjU5NyAxNzEuMjEzIDExNy4wNjggMTcxLjM0OCAxMTYuNDYyQzE3MS40ODMgMTE1Ljg1NSAxNzEuMzcxIDExNS4yMiAxNzEuMDM3IDExNC42OTVMMTY5LjgzIDExMi44MzVDMTY5LjYxMyAxMTIuNTA2IDE2OS4zMTggMTEyLjIzNSAxNjguOTcxIDExMi4wNDdDMTY4LjYyNCAxMTEuODU5IDE2OC4yMzUgMTExLjc1OSAxNjcuODQgMTExLjc1N1YxMTEuNzcyWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NC4zOUMxNzIuMTA4IDE4NC4zOSAxNzQuNTYzIDE4MS45NDEgMTc0LjU2MyAxNzguOTJDMTc0LjU2MyAxNzUuODk4IDE3Mi4xMDggMTczLjQ0OSAxNjkuMDc4IDE3My40NDlDMTY2LjA0OCAxNzMuNDQ5IDE2My41OTMgMTc1Ljg5OCAxNjMuNTkzIDE3OC45MkMxNjMuNTkzIDE4MS45NDEgMTY2LjA0OCAxODQuMzkgMTY5LjA3OCAxODQuMzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE3NC4yMzFDMTcwLjAwOCAxNzQuMjMxIDE3MC45MTcgMTc0LjUwNiAxNzEuNjkgMTc1LjAyMUMxNzIuNDYzIDE3NS41MzYgMTczLjA2NiAxNzYuMjY5IDE3My40MjIgMTc3LjEyNUMxNzMuNzc4IDE3Ny45ODIgMTczLjg3MSAxNzguOTI1IDE3My42ODkgMTc5LjgzNUMxNzMuNTA4IDE4MC43NDQgMTczLjA2IDE4MS41OCAxNzIuNDAzIDE4Mi4yMzZDMTcxLjc0NSAxODIuODkxIDE3MC45MDcgMTgzLjMzOCAxNjkuOTk1IDE4My41MTlDMTY5LjA4MyAxODMuNyAxNjguMTM4IDE4My42MDcgMTY3LjI3OSAxODMuMjUyQzE2Ni40MTkgMTgyLjg5NyAxNjUuNjg1IDE4Mi4yOTYgMTY1LjE2OSAxODEuNTI1QzE2NC42NTIgMTgwLjc1NCAxNjQuMzc2IDE3OS44NDcgMTY0LjM3NiAxNzguOTJDMTY0LjM3NiAxNzcuNjc2IDE2NC44NzEgMTc2LjQ4NCAxNjUuNzUzIDE3NS42MDRDMTY2LjYzNSAxNzQuNzI1IDE2Ny44MzEgMTc0LjIzMSAxNjkuMDc4IDE3NC4yMzFaTTE2OS4wNzggMTcyLjY2OEMxNjcuODM4IDE3Mi42NjggMTY2LjYyNiAxNzMuMDM0IDE2NS41OTUgMTczLjcyMUMxNjQuNTY0IDE3NC40MDggMTYzLjc2MSAxNzUuMzg1IDE2My4yODYgMTc2LjUyN0MxNjIuODEyIDE3Ny42NyAxNjIuNjg3IDE3OC45MjcgMTYyLjkyOSAxODAuMTRDMTYzLjE3MSAxODEuMzUyIDE2My43NjggMTgyLjQ2NiAxNjQuNjQ1IDE4My4zNDFDMTY1LjUyMiAxODQuMjE1IDE2Ni42MzkgMTg0LjgxMSAxNjcuODU1IDE4NS4wNTJDMTY5LjA3MSAxODUuMjkzIDE3MC4zMzIgMTg1LjE2OSAxNzEuNDc3IDE4NC42OTZDMTcyLjYyMyAxODQuMjIzIDE3My42MDIgMTgzLjQyMSAxNzQuMjkxIDE4Mi4zOTNDMTc0Ljk3OSAxODEuMzY1IDE3NS4zNDcgMTgwLjE1NiAxNzUuMzQ3IDE3OC45MkMxNzUuMzQ3IDE3Ny4yNjIgMTc0LjY4NyAxNzUuNjcxIDE3My41MTEgMTc0LjQ5OUMxNzIuMzM1IDE3My4zMjYgMTcwLjc0MSAxNzIuNjY4IDE2OS4wNzggMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzEuODg2QzE5Mi40ODIgMTcxLjg4NiAxOTQuOTM4IDE2OS40MzcgMTk0LjkzOCAxNjYuNDE2QzE5NC45MzggMTYzLjM5NCAxOTIuNDgyIDE2MC45NDUgMTg5LjQ1MyAxNjAuOTQ1QzE4Ni40MjMgMTYwLjk0NSAxODMuOTY3IDE2My4zOTQgMTgzLjk2NyAxNjYuNDE2QzE4My45NjcgMTY5LjQzNyAxODYuNDIzIDE3MS44ODYgMTg5LjQ1MyAxNzEuODg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNjEuNzI3QzE5MC4zODMgMTYxLjcyNyAxOTEuMjkyIDE2Mi4wMDIgMTkyLjA2NSAxNjIuNTE3QzE5Mi44MzggMTYzLjAzMiAxOTMuNDQxIDE2My43NjQgMTkzLjc5NyAxNjQuNjIxQzE5NC4xNTMgMTY1LjQ3OCAxOTQuMjQ2IDE2Ni40MjEgMTk0LjA2NCAxNjcuMzNDMTkzLjg4MyAxNjguMjQgMTkzLjQzNSAxNjkuMDc2IDE5Mi43NzcgMTY5LjczMUMxOTIuMTIgMTcwLjM4NyAxOTEuMjgyIDE3MC44MzQgMTkwLjM3IDE3MS4wMTVDMTg5LjQ1OCAxNzEuMTk2IDE4OC41MTMgMTcxLjEwMyAxODcuNjUzIDE3MC43NDhDMTg2Ljc5NCAxNzAuMzkzIDE4Ni4wNiAxNjkuNzkyIDE4NS41NDMgMTY5LjAyMUMxODUuMDI3IDE2OC4yNSAxODQuNzUxIDE2Ny4zNDMgMTg0Ljc1MSAxNjYuNDE2QzE4NC43NTEgMTY1LjE3MiAxODUuMjQ2IDE2My45NzkgMTg2LjEyOCAxNjMuMUMxODcuMDEgMTYyLjIyMSAxODguMjA2IDE2MS43MjcgMTg5LjQ1MyAxNjEuNzI3Wk0xODkuNDUzIDE2MC4xNjRDMTg4LjIxMyAxNjAuMTY0IDE4Ny4wMDEgMTYwLjUzIDE4NS45NyAxNjEuMjE3QzE4NC45MzkgMTYxLjkwNCAxODQuMTM1IDE2Mi44ODEgMTgzLjY2MSAxNjQuMDIzQzE4My4xODYgMTY1LjE2NiAxODMuMDYyIDE2Ni40MjMgMTgzLjMwNCAxNjcuNjM1QzE4My41NDYgMTY4Ljg0OCAxODQuMTQzIDE2OS45NjIgMTg1LjAyIDE3MC44MzdDMTg1Ljg5NyAxNzEuNzExIDE4Ny4wMTQgMTcyLjMwNiAxODguMjMgMTcyLjU0OEMxODkuNDQ2IDE3Mi43ODkgMTkwLjcwNiAxNzIuNjY1IDE5MS44NTIgMTcyLjE5MkMxOTIuOTk3IDE3MS43MTkgMTkzLjk3NiAxNzAuOTE3IDE5NC42NjUgMTY5Ljg4OUMxOTUuMzU0IDE2OC44NjEgMTk1LjcyMiAxNjcuNjUyIDE5NS43MjIgMTY2LjQxNkMxOTUuNzIyIDE2NC43NTggMTk1LjA2MSAxNjMuMTY3IDE5My44ODYgMTYxLjk5NUMxOTIuNzEgMTYwLjgyMiAxOTEuMTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0WlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDYuOTMyIDI2Ljk2MjJMOTcuOTIzNiA1OC41ODIzTDUzLjA5OTQgODcuNDk4NEwzLjc5Mjg1IDU5LjA1MTJMNC42MzkxOCA1OC41ODIzTDEwMy4yNTIgMS44MTMxMUwxNDYuOTMyIDI2Ljk2MjJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMi45NDY1MyA1OC41ODIzSDQuNjM5MTlMMy43OTI4NiA1OS4wNTEyTDIuOTQ2NTMgNTguNTgyM1pcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0yMDEuOTI4IDU4LjYyOTJMMTAzLjI1MiAxMTYuMzk5TDUzLjA5OTQgODcuNDk4NEw5Ny45MjM1IDU4LjU4MjRMMTQ2LjkzMiAyNi45NjIzTDIwMS44MzQgNTguNTgyNEwyMDEuOTI4IDU4LjYyOTJaXCIgc3Ryb2tlPVwiIzIxMzU2OVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMjAxLjk5MSA1OC41ODIzTDIwMS45MjggNTguNjI5MkwyMDEuODM0IDU4LjU4MjNIMjAxLjk5MVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMDMuMjUyIDExNi4zOTlWMjMwLjVcIiBzdHJva2U9XCIjMjEzNTY5XCIgc3Ryb2tlV2lkdGg9XCIzXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNjkuMDc4IDE4NS4xNzJDMTcyLjU0IDE4NS4xNzIgMTc1LjM0NyAxODIuMzczIDE3NS4zNDcgMTc4LjkyQzE3NS4zNDcgMTc1LjQ2NyAxNzIuNTQgMTcyLjY2OCAxNjkuMDc4IDE3Mi42NjhDMTY1LjYxNiAxNzIuNjY4IDE2Mi44MDkgMTc1LjQ2NyAxNjIuODA5IDE3OC45MkMxNjIuODA5IDE4Mi4zNzMgMTY1LjYxNiAxODUuMTcyIDE2OS4wNzggMTg1LjE3MlpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPHBhdGggZD1cIk0xNDcuMTM2IDE5Ny42NzZDMTUwLjU5OCAxOTcuNjc2IDE1My40MDUgMTk0Ljg3NyAxNTMuNDA1IDE5MS40MjRDMTUzLjQwNSAxODcuOTcxIDE1MC41OTggMTg1LjE3MiAxNDcuMTM2IDE4NS4xNzJDMTQzLjY3NCAxODUuMTcyIDE0MC44NjcgMTg3Ljk3MSAxNDAuODY3IDE5MS40MjRDMTQwLjg2NyAxOTQuODc3IDE0My42NzQgMTk3LjY3NiAxNDcuMTM2IDE5Ny42NzZaXCIgZmlsbD1cIiMyMTM1NjlcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgIDxwYXRoIGQ9XCJNMTg5LjQ1MyAxNzIuNjY4QzE5Mi45MTUgMTcyLjY2OCAxOTUuNzIyIDE2OS44NjkgMTk1LjcyMiAxNjYuNDE2QzE5NS43MjIgMTYyLjk2MyAxOTIuOTE1IDE2MC4xNjQgMTg5LjQ1MyAxNjAuMTY0QzE4NS45OSAxNjAuMTY0IDE4My4xODQgMTYyLjk2MyAxODMuMTg0IDE2Ni40MTZDMTgzLjE4NCAxNjkuODY5IDE4NS45OSAxNzIuNjY4IDE4OS40NTMgMTcyLjY2OFpcIiBmaWxsPVwiIzIxMzU2OVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjE1NFwiIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBoZWlnaHQ9XCIxNzRcIiB2aWV3Qm94PVwiMCAwIDE1NCAxNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTA3LjggMTAzLjMxMkM5Ny45MzQ0IDEwMy4zMTIgOTMuMTkwNiAxMDguNzUgNzcgMTA4Ljc1QzYwLjgwOTQgMTA4Ljc1IDU2LjEgMTAzLjMxMiA0Ni4yIDEwMy4zMTJDMjAuNjkzNyAxMDMuMzEyIDAgMTIzLjc3MSAwIDE0OC45ODhWMTU3LjY4OEMwIDE2Ni42OTMgNy4zOTA2MiAxNzQgMTYuNSAxNzRIMTM3LjVDMTQ2LjYwOSAxNzQgMTU0IDE2Ni42OTMgMTU0IDE1Ny42ODhWMTQ4Ljk4OEMxNTQgMTIzLjc3MSAxMzMuMzA2IDEwMy4zMTIgMTA3LjggMTAzLjMxMlpNMTM3LjUgMTU3LjY4OEgxNi41VjE0OC45ODhDMTYuNSAxMzIuODExIDI5LjgzNzUgMTE5LjYyNSA0Ni4yIDExOS42MjVDNTEuMjE4NyAxMTkuNjI1IDU5LjM2NTYgMTI1LjA2MiA3NyAxMjUuMDYyQzk0Ljc3MTkgMTI1LjA2MiAxMDIuNzQ3IDExOS42MjUgMTA3LjggMTE5LjYyNUMxMjQuMTYyIDExOS42MjUgMTM3LjUgMTMyLjgxMSAxMzcuNSAxNDguOTg4VjE1Ny42ODhaTTc3IDk3Ljg3NUMxMDQuMzI4IDk3Ljg3NSAxMjYuNSA3NS45NTUxIDEyNi41IDQ4LjkzNzVDMTI2LjUgMjEuOTE5OSAxMDQuMzI4IDAgNzcgMEM0OS42NzE5IDAgMjcuNSAyMS45MTk5IDI3LjUgNDguOTM3NUMyNy41IDc1Ljk1NTEgNDkuNjcxOSA5Ny44NzUgNzcgOTcuODc1Wk03NyAxNi4zMTI1Qzk1LjE4NDQgMTYuMzEyNSAxMTAgMzAuOTU5OCAxMTAgNDguOTM3NUMxMTAgNjYuOTE1MiA5NS4xODQ0IDgxLjU2MjUgNzcgODEuNTYyNUM1OC44MTU2IDgxLjU2MjUgNDQgNjYuOTE1MiA0NCA0OC45Mzc1QzQ0IDMwLjk1OTggNTguODE1NiAxNi4zMTI1IDc3IDE2LjMxMjVaXCIgZmlsbD1cIiMyMTM1NjlcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMTgxXCIgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25cIiBoZWlnaHQ9XCIxNTlcIiB2aWV3Qm94PVwiMCAwIDE4MSAxNTlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMTYzLjA0MSAzNC4yNUgyOC4yODEyQzI1LjE1NjIgMzQuMjUgMjIuNjI1IDMxLjcxODggMjIuNjI1IDI4LjU5MzhDMjIuNjI1IDI1LjQ2ODcgMjUuMTU2MiAyMi45Mzc1IDI4LjI4MTIgMjIuOTM3NUgxNjQuMDMxQzE2Ny4xNTYgMjIuOTM3NSAxNjkuNjg4IDIwLjQwNjMgMTY5LjY4OCAxNy4yODEyQzE2OS42ODggNy45MDk1NSAxNjIuMDkgMC4zMTI1IDE1Mi43MTkgMC4zMTI1SDIyLjYyNUMxMC4xMjgyIDAuMzEyNSAwIDEwLjQ0MDcgMCAyMi45Mzc1VjEzNi4wNjJDMCAxNDguNTU5IDEwLjEyODIgMTU4LjY4OCAyMi42MjUgMTU4LjY4OEgxNjMuMDQxQzE3Mi45NDcgMTU4LjY4OCAxODEgMTUxLjA3NiAxODEgMTQxLjcxOVY1MS4yMTg4QzE4MSA0MS44NjEyIDE3Mi45NDcgMzQuMjUgMTYzLjA0MSAzNC4yNVpNMTQ3LjA2MiAxMDcuNzgxQzE0MC44MTYgMTA3Ljc4MSAxMzUuNzUgMTAyLjcxNSAxMzUuNzUgOTYuNDY4OEMxMzUuNzUgOTAuMjIyMSAxNDAuODE2IDg1LjE1NjIgMTQ3LjA2MiA4NS4xNTYyQzE1My4zMDkgODUuMTU2MiAxNTguMzc1IDkwLjIyMjEgMTU4LjM3NSA5Ni40Njg4QzE1OC4zNzUgMTAyLjcxNSAxNTMuMzA5IDEwNy43ODEgMTQ3LjA2MiAxMDcuNzgxWlwiIGZpbGw9XCIjMjEzNTY5XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXZhdGFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjkyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgaGVpZ2h0PVwiMjkyXCIgdmlld0JveD1cIjAgMCAyOTIgMjkyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTQ2XCIgY3k9XCIxNDZcIiByPVwiMTQ2XCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5NS44ODkgMTE0Ljg5OEMxODUuNDA0IDEzMC42NTkgMTY3LjQ4IDE0MS4wNDYgMTQ3LjEzIDE0MS4wNDZDMTI0LjgxNCAxNDEuMDQ2IDEwNS40MTYgMTI4LjU1NSA5NS41NDUxIDExMC4xODNDOTMuMTA3MyAxMTIuOTA1IDkwLjg0OTkgMTE1Ljg4NSA4OC44MDczIDExOS4xMjZMODQuNzcyMiAxMjUuNTI4QzU3LjQ4OTEgMTY4LjgxMSA4OC41OTUgMjI1LjE4OCAxMzkuNzYgMjI1LjE4OEgxNDcuODNDMTk4Ljk5NSAyMjUuMTg4IDIzMC4xMDEgMTY4LjgxMSAyMDIuODE4IDEyNS41MjhMMTk4Ljc4MyAxMTkuMTI2QzE5Ny44NjEgMTE3LjY2NCAxOTYuODk2IDExNi4yNTQgMTk1Ljg4OSAxMTQuODk4WlwiIGZpbGw9XCIjRjNFQ0VDXCIvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE0Ny4xM1wiIGN5PVwiODIuNTI2MlwiIHI9XCI0My45NjU5XCIgZmlsbD1cIiNGM0VDRUNcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgIFxyXG4gICAgKTsgICAgICAgXHJcblxyXG59O1xyXG5leHBvcnQgY29uc3QgdXBsb2FkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiMjA0XCIgY2xhc3NOYW1lPVwidXBsb2FkXCIgaGVpZ2h0PVwiMjA0XCIgdmlld0JveD1cIjAgMCAyMDQgMjA0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMTAyXCIgY3k9XCIxMDJcIiByPVwiMTAyXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwNi41NjcgMTA2LjU2N1YxNDEuNTgySDk3LjQzMjlWMTA2LjU2N0g2Mi40MThWOTcuNDMyOEg5Ny40MzI5VjYyLjQxNzlIMTA2LjU2N1Y5Ny40MzI4SDE0MS41ODJWMTA2LjU2N0gxMDYuNTY3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDMzIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTMwLjIwMjcgMjIuNDE4TDMwLjIwNiAyMi40MDRMMzAuMjA5MSAyMi4zOUMzMC4yNTU5IDIyLjE4MDEgMzAuMjgxNSAyMS45NjU5IDMwLjI4NTQgMjEuNzUwN0wzMC4yODY2IDIxLjY4MTJMMzAuMjgzMSAyMS42MTE4QzMwLjI1MzUgMjEuMDM1MyAzMC4wNjUxIDIwLjQ4MTggMjkuNzQzNiAyMC4wMDg4QzI5LjQyMjUgMTkuNTM2MyAyOC45ODE4IDE5LjE2MzUgMjguNDczMiAxOC45MjIyTDI4LjQyODkgMTguOTAxMkwyOC4zODM3IDE4Ljg4MjRMMjMuMjI3NCAxNi43Mzk2TDIzLjE5NzUgMTYuNzI3MUwyMy4xNjcxIDE2LjcxNTdDMjIuODIwOSAxNi41ODQ4IDIyLjQ1NTcgMTYuNTEyNSAyMi4wODY5IDE2LjUwMUwyMi4wMDI0IDE2LjQ5ODNMMjEuOTE4IDE2LjUwMjhDMjEuMDg3NCAxNi41NDcxIDIwLjI5NDYgMTYuOTA1NSAxOS43MTQ1IDE3LjUyMDVMMTkuNjc2NSAxNy41NjA4TDE5LjY0MDggMTcuNjAzMUwxOC4zODYgMTkuMDkwM0MxNi4zMDI1IDE3Ljg3NjkgMTQuNTU4MSAxNi4xOTY5IDEzLjI5NzEgMTQuMTk5NEwxNC43NTk4IDEzLjAzODlMMTQuODAyOCAxMy4wMDQ4TDE0Ljg0MzkgMTIuOTY4M0MxNS40NzY0IDEyLjQwNzMgMTUuODY5OSAxMS42MTUxIDE1LjkxODcgMTAuNzU2MUwxNS45MjM4IDEwLjY2NTlMMTUuOTIwNyAxMC41NzU2QzE1LjkwOCAxMC4xOTc1IDE1LjgyOTIgOS44MjUzOSAxNS42ODg3IDkuNDc1NTZMMTUuNjc1OSA5LjQ0MzY2TDE1LjY2MiA5LjQxMjIzTDEzLjQ1MjIgNC40MTIyM0wxMy40MzEzIDQuMzY0ODhMMTMuNDA4IDQuMzE4NjhDMTMuMTQ5NiAzLjgwNzQzIDEyLjc1ODkgMy4zODA1NiAxMi4yODM1IDMuMDc2NjNDMTEuODA4NCAyLjc3Mjk3IDExLjI2MzQgMi42MDExNSAxMC43MDQ5IDIuNTczODJMMTAuNjM0NyAyLjU3MDM4TDEwLjU2NDQgMi41NzE4OUMxMC4zNjA1IDIuNTc2MjQgMTAuMTU3MiAyLjU5OTA0IDkuOTU3MTUgMi42NDAwNUw5LjkzOTYyIDIuNjQzNjVMOS45MjIxNiAyLjY0NzU2TDUuMTM0MjEgMy43MTg5OEw1LjEwMTE4IDMuNzI2MzhMNS4wNjg0MSAzLjczNDg4QzQuNDI3MDQgMy45MDEzOCAzLjg0Njg2IDQuMjY1ODQgMy40MTkzOCA0Ljc4NjU3QzIuOTkxMDcgNS4zMDgzMyAyLjc0MDU4IDUuOTU4MDkgMi43MTU2MiA2LjY0MTI2TDIuNzE0MjkgNi42Nzc3NlY2LjcxNDI5QzIuNzE0MjkgMTkuMzI3IDEzLjI0NTQgMjkuNDI4NiAyNi4wNzU5IDI5LjQyODZIMjYuMDc2N0MyNi43NjI5IDI5LjQyODMgMjcuNDM1OSAyOS4yMDI5IDI3Ljk4NTYgMjguNzc4NkMyOC41MzY0IDI4LjM1MzUgMjguOTMzNyAyNy43NTA2IDI5LjA5NzcgMjcuMDYwOUMyOS4wOTc4IDI3LjA2MDggMjkuMDk3OCAyNy4wNjA2IDI5LjA5NzggMjcuMDYwNUwzMC4yMDI3IDIyLjQxOFpNMy41MzU3MSAySDI5LjQ2NDNDMjkuODkxMSAyIDMwLjI4ODUgMi4xNjQ5OSAzMC41NzIxIDIuNDQwMDFDMzAuODUzNiAyLjcxMjk5IDMxIDMuMDY5ODkgMzEgMy40Mjg1N1YyOC41NzE0QzMxIDI4LjkzMDEgMzAuODUzNiAyOS4yODcgMzAuNTcyMSAyOS41NkMzMC4yODg1IDI5LjgzNSAyOS44OTExIDMwIDI5LjQ2NDMgMzBIMy41MzU3MUMzLjEwODkgMzAgMi43MTE0OSAyOS44MzUgMi40Mjc4OCAyOS41NkMyLjE0NjM2IDI5LjI4NyAyIDI4LjkzMDEgMiAyOC41NzE0VjMuNDI4NTdDMiAzLjA2OTkgMi4xNDYzNiAyLjcxMjk5IDIuNDI3ODggMi40NDAwMUMyLjcxMTQ5IDIuMTY0OTkgMy4xMDg5IDIgMy41MzU3MSAyWlwiIGZpbGw9XCIjRjNFQ0VDXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjRcIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7ICAgICAgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IG1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCA0NCAzNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk00MC42MzQ1IDI2Ljg4MTNDNDIuNzM1IDI0LjgyNDYgNDMuOTk1MiAyMi4yNDQyIDQzLjk5NTIgMTkuNDI4NkM0My45OTUyIDEzLjM1NzEgMzguMTUyMiA4LjM0MDYzIDMwLjUzNzEgNy40NDUwOUMyOC4xMzEyIDMuMDczNjYgMjIuNDc5MSAwIDE1Ljg4NzUgMEM3LjExMTQ3IDAgMC4wMDA1MTQ0MjggNS40MzM5MyAwLjAwMDUxNDQyOCAxMi4xNDI5QzAuMDAwNTE0NDI4IDE0Ljk1MDkgMS4yNjA3OCAxNy41MzEzIDMuMzYxMjIgMTkuNTk1NUMyLjE5MjYxIDIxLjkyNTQgMC41MTIyNTkgMjMuNzMxNyAwLjQ4MTcwNyAyMy43NjIxQzAuMDAwNTE0NDQyIDI0LjI3MDUgLTAuMTM2OTY5IDI1LjAxNDMgMC4xNDU2MzYgMjUuNjU5NEMwLjQyMDYwMyAyNi4zMDQ1IDEuMDYyMTkgMjYuNzIxOSAxLjc2NDg5IDI2LjcyMTlDNS44NTEyIDI2LjcyMTkgOS4xNTA4MSAyNS4xODg4IDExLjMyNzYgMjMuNzc3MkMxMi4wMzAzIDIzLjkzNjYgMTIuNzU1OSAyNC4wNTggMTMuNDk2OCAyNC4xNDkxQzE1Ljg5NTEgMjguNTA1NCAyMS41MjQzIDMxLjU3MTQgMjguMTA4MyAzMS41NzE0QzI5LjY5NyAzMS41NzE0IDMxLjIyNDUgMzEuMzg5MyAzMi42NzU4IDMxLjA1NTRDMzQuODUyNiAzMi40NTk0IDM4LjE0NDUgMzQgNDIuMjM4NSAzNEM0Mi45NDEyIDM0IDQzLjU3NTEgMzMuNTgyNiA0My44NTc3IDMyLjkzNzVDNDQuMTMyNyAzMi4yOTI0IDQ0LjAwMjkgMzEuNTQ4NyA0My41MjE3IDMxLjA0MDJDNDMuNDkxMSAzMS4wMTc0IDQxLjgwMzEgMjkuMjExMiA0MC42MzQ1IDI2Ljg4MTNaTTEwLjYzMjYgMTkuODc2M0w5LjMyNjQ4IDIwLjcxODhDOC4yNDk1MiAyMS40MDk0IDcuMTQ5NjYgMjEuOTU1OCA2LjAzNDUxIDIyLjM0MjlDNi4yNDA3NCAyMS45ODYyIDYuNDQ2OTYgMjEuNjA2NyA2LjY0NTU1IDIxLjIxOTZMNy44Mjk0NCAxOC44NTk0TDUuOTM1MjIgMTdDNC45MDQwOSAxNS45ODMgMy42NjY3NCAxNC4zMjEgMy42NjY3NCAxMi4xNDI5QzMuNjY2NzQgNy41MzYxNiA5LjI2NTM4IDMuNjQyODYgMTUuODg3NSAzLjY0Mjg2QzIyLjUwOTYgMy42NDI4NiAyOC4xMDgzIDcuNTM2MTYgMjguMTA4MyAxMi4xNDI5QzI4LjEwODMgMTYuNzQ5NiAyMi41MDk2IDIwLjY0MjkgMTUuODg3NSAyMC42NDI5QzE0LjYyNzIgMjAuNjQyOSAxMy4zNjcgMjAuNDk4NyAxMi4xNDQ5IDIwLjIxNzlMMTAuNjMyNiAxOS44NzYzWk0zOC4wNjA1IDI0LjI4NTdMMzYuMTc0IDI2LjEzNzVMMzcuMzU3OCAyOC40OTc4QzM3LjU1NjQgMjguODg0OCAzNy43NjI2IDI5LjI2NDMgMzcuOTY4OSAyOS42MjFDMzYuODUzNyAyOS4yMzM5IDM1Ljc1MzkgMjguNjg3NSAzNC42NzY5IDI3Ljk5NjlMMzMuMzcwOCAyNy4xNTQ1TDMxLjg1MDkgMjcuNTAzNkMzMC42Mjg4IDI3Ljc4NDQgMjkuMzY4NSAyNy45Mjg2IDI4LjEwODMgMjcuOTI4NkMyMy45ODM3IDI3LjkyODYgMjAuMzAyMiAyNi40MDMxIDE4LjA3OTYgMjQuMTU2N0MyNS44MTY5IDIzLjMzNzEgMzEuNzc0NSAxOC4yODI2IDMxLjc3NDUgMTIuMTQyOUMzMS43NzQ1IDExLjg4NDggMzEuNzQzOSAxMS42MzQ0IDMxLjcyMSAxMS4zODM5QzM2LjYzOTkgMTIuNDg0NCA0MC4zMjkgMTUuNjk0NiA0MC4zMjkgMTkuNDI4NkM0MC4zMjkgMjEuNjA2NyAzOS4wOTE3IDIzLjI2ODggMzguMDYwNSAyNC4yODU3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgdmlld0JveD1cIjAgMCAzOSAzMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk0zMi41IDI1LjcxNDNWMjYuNzg1N0MzMi41IDI4LjU2MDkgMzEuMDQ0OSAzMCAyOS4yNSAzMEgzLjI1QzEuNDU1MDUgMzAgMCAyOC41NjA5IDAgMjYuNzg1N1Y5LjY0Mjg2QzAgNy44Njc2MyAxLjQ1NTA1IDYuNDI4NTcgMy4yNSA2LjQyODU3SDQuMzMzMzNWOS42NDI4NkgzLjY1NjI1QzMuNTQ4NTEgOS42NDI4NiAzLjQ0NTE3IDkuNjg1MTkgMy4zNjg5OSA5Ljc2MDU0QzMuMjkyOCA5LjgzNTg5IDMuMjUgOS45MzgwOCAzLjI1IDEwLjA0NDZWMjYuMzgzOUMzLjI1IDI2LjQ5MDUgMy4yOTI4IDI2LjU5MjcgMy4zNjg5OSAyNi42NjhDMy40NDUxNyAyNi43NDM0IDMuNTQ4NTEgMjYuNzg1NyAzLjY1NjI1IDI2Ljc4NTdIMjguODQzOEMyOC45NTE1IDI2Ljc4NTcgMjkuMDU0OCAyNi43NDM0IDI5LjEzMSAyNi42NjhDMjkuMjA3MiAyNi41OTI3IDI5LjI1IDI2LjQ5MDUgMjkuMjUgMjYuMzgzOVYyNS43MTQzSDMyLjVaTTM1LjM0MzggMy4yMTQyOUgxMC4xNTYyQzEwLjA0ODUgMy4yMTQyOSA5Ljk0NTE3IDMuMjU2NjIgOS44Njg5OSAzLjMzMTk3QzkuNzkyOCAzLjQwNzMyIDkuNzUgMy41MDk1MSA5Ljc1IDMuNjE2MDdWMTkuOTU1NEM5Ljc1IDIwLjA2MTkgOS43OTI4IDIwLjE2NDEgOS44Njg5OSAyMC4yMzk1QzkuOTQ1MTcgMjAuMzE0OCAxMC4wNDg1IDIwLjM1NzEgMTAuMTU2MiAyMC4zNTcxSDM1LjM0MzhDMzUuNDUxNSAyMC4zNTcxIDM1LjU1NDggMjAuMzE0OCAzNS42MzEgMjAuMjM5NUMzNS43MDcyIDIwLjE2NDEgMzUuNzUgMjAuMDYxOSAzNS43NSAxOS45NTU0VjMuNjE2MDdDMzUuNzUgMy41MDk1MSAzNS43MDcyIDMuNDA3MzIgMzUuNjMxIDMuMzMxOTdDMzUuNTU0OCAzLjI1NjYyIDM1LjQ1MTUgMy4yMTQyOSAzNS4zNDM4IDMuMjE0MjlaTTM1Ljc1IDBDMzcuNTQ0OSAwIDM5IDEuNDM5MDYgMzkgMy4yMTQyOVYyMC4zNTcxQzM5IDIyLjEzMjQgMzcuNTQ0OSAyMy41NzE0IDM1Ljc1IDIzLjU3MTRIOS43NUM3Ljk1NTA1IDIzLjU3MTQgNi41IDIyLjEzMjQgNi41IDIwLjM1NzFWMy4yMTQyOUM2LjUgMS40MzkwNiA3Ljk1NTA1IDAgOS43NSAwSDM1Ljc1Wk0xNy44NzUgNy41QzE3Ljg3NSA4Ljk3OTMxIDE2LjY2MjQgMTAuMTc4NiAxNS4xNjY3IDEwLjE3ODZDMTMuNjcwOSAxMC4xNzg2IDEyLjQ1ODMgOC45NzkzMSAxMi40NTgzIDcuNUMxMi40NTgzIDYuMDIwNjkgMTMuNjcwOSA0LjgyMTQzIDE1LjE2NjcgNC44MjE0M0MxNi42NjI0IDQuODIxNDMgMTcuODc1IDYuMDIwNjkgMTcuODc1IDcuNVpNMTMgMTMuOTI4NkwxNS42NzU1IDExLjI4MjVDMTUuOTkyOCAxMC45Njg3IDE2LjUwNzIgMTAuOTY4NyAxNi44MjQ2IDExLjI4MjVMMTkuNSAxMy45Mjg2TDI2LjUwODggNi45OTY3NkMyNi44MjYxIDYuNjgyOTcgMjcuMzQwNiA2LjY4Mjk3IDI3LjY1NzkgNi45OTY3NkwzMi41IDExLjc4NTdWMTcuMTQyOUgxM1YxMy45Mjg2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2hlY2tNYXJrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICg8c3ZnIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNMjUgMC43ODEyNUMxMS42MjQzIDAuNzgxMjUgMC43ODEyNSAxMS42MjQzIDAuNzgxMjUgMjVDMC43ODEyNSAzOC4zNzU3IDExLjYyNDMgNDkuMjE4OCAyNSA0OS4yMTg4QzM4LjM3NTcgNDkuMjE4OCA0OS4yMTg4IDM4LjM3NTcgNDkuMjE4OCAyNUM0OS4yMTg4IDExLjYyNDMgMzguMzc1NyAwLjc4MTI1IDI1IDAuNzgxMjVaTTI1IDUuNDY4NzVDMzUuNzk0MSA1LjQ2ODc1IDQ0LjUzMTIgMTQuMjA0MiA0NC41MzEyIDI1QzQ0LjUzMTIgMzUuNzk0MSAzNS43OTU4IDQ0LjUzMTIgMjUgNDQuNTMxMkMxNC4yMDU5IDQ0LjUzMTIgNS40Njg3NSAzNS43OTU4IDUuNDY4NzUgMjVDNS40Njg3NSAxNC4yMDU5IDE0LjIwNDIgNS40Njg3NSAyNSA1LjQ2ODc1Wk0zOC42OTE4IDE4LjE5MDFMMzYuNDkxIDE1Ljk3MTZDMzYuMDM1MyAxNS41MTIxIDM1LjI5MzMgMTUuNTA5MSAzNC44MzM4IDE1Ljk2NDlMMjEuMDI5OSAyOS42NTc5TDE1LjE5MDggMjMuNzcxNUMxNC43MzUxIDIzLjMxMiAxMy45OTMxIDIzLjMwOSAxMy41MzM2IDIzLjc2NDdMMTEuMzE0OSAyNS45NjU1QzEwLjg1NTUgMjYuNDIxMyAxMC44NTI0IDI3LjE2MzMgMTEuMzA4MyAyNy42MjI5TDIwLjE3MzYgMzYuNTZDMjAuNjI5NCAzNy4wMTk0IDIxLjM3MTQgMzcuMDIyNSAyMS44MzA5IDM2LjU2NjZMMzguNjg1MyAxOS44NDc1QzM5LjE0NDYgMTkuMzkxNiAzOS4xNDc2IDE4LjY0OTYgMzguNjkxOCAxOC4xOTAxWlwiIGZpbGw9XCIjMDM5QjM3XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApOyAgICAgICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQyXCIgaGVpZ2h0PVwiNDJcIiB2aWV3Qm94PVwiMCAwIDQyIDQyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjIxXCIgZmlsbD1cIiNDNEM0QzRcIi8+XHJcbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuNzU0NCAxMy41MzI1QzExLjA0NDQgMTQuMjQyNiAxMS4wNDQ0IDE1LjM5MzcgMTEuNzU0NCAxNi4xMDM4TDE3LjUzOTcgMjEuODg5MUwxMS43NTQ0IDI3LjY3NDRDMTEuMDQ0NCAyOC4zODQ0IDExLjA0NDQgMjkuNTM1NiAxMS43NTQ0IDMwLjI0NTdDMTIuNDY0NSAzMC45NTU3IDEzLjYxNTYgMzAuOTU1NyAxNC4zMjU3IDMwLjI0NTdMMjAuMTExIDI0LjQ2MDRMMjUuODk2MyAzMC4yNDU3QzI2LjYwNjMgMzAuOTU1NyAyNy43NTc1IDMwLjk1NTcgMjguNDY3NSAzMC4yNDU3QzI5LjE3NzYgMjkuNTM1NiAyOS4xNzc2IDI4LjM4NDQgMjguNDY3NSAyNy42NzQ0TDIyLjY4MjIgMjEuODg5MUwyOC40Njc2IDE2LjEwMzhDMjkuMTc3NiAxNS4zOTM3IDI5LjE3NzYgMTQuMjQyNiAyOC40Njc2IDEzLjUzMjVDMjcuNzU3NSAxMi44MjI1IDI2LjYwNjMgMTIuODIyNSAyNS44OTYzIDEzLjUzMjVMMjAuMTExIDE5LjMxNzlMMTQuMzI1NiAxMy41MzI1QzEzLjYxNTYgMTIuODIyNSAxMi40NjQ0IDEyLjgyMjUgMTEuNzU0NCAxMy41MzI1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTsgICAgICAgIFxyXG59O1xyXG5leHBvcnQgY29uc3Qgb2ZmQmFjayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiBjbGFzc05hbWU9XCJib2xkLWJveFwiIHZpZXdCb3g9XCIwIDAgMTI5IDE0OFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDApXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMS40Njk5NyAxMTAuMjdWMzguMDVMNjQuNDcgNzQuNDhMMTI3LjQ3IDM3LjQ4VjExMC4yMkw2NC40NyAxNDYuNTlMMS40Njk5NyAxMTAuMjdaTTkyLjQ3IDExNy40QzkxLjU4IDExNy40IDkwLjcwOTkgMTE3LjY2NCA4OS45Njk5IDExOC4xNThDODkuMjI5OSAxMTguNjUzIDg4LjY1MzEgMTE5LjM1NiA4OC4zMTI1IDEyMC4xNzhDODcuOTcxOSAxMjEgODcuODgyOCAxMjEuOTA1IDg4LjA1NjQgMTIyLjc3OEM4OC4yMzAxIDEyMy42NTEgODguNjU4NyAxMjQuNDUzIDg5LjI4OCAxMjUuMDgyQzg5LjkxNzMgMTI1LjcxMSA5MC43MTkxIDEyNi4xNCA5MS41OTIxIDEyNi4zMTRDOTIuNDY1IDEyNi40ODcgOTMuMzY5OCAxMjYuMzk4IDk0LjE5MiAxMjYuMDU3Qzk1LjAxNDMgMTI1LjcxNyA5NS43MTcxIDEyNS4xNCA5Ni4yMTE2IDEyNC40Qzk2LjcwNjEgMTIzLjY2IDk2Ljk3IDEyMi43OSA5Ni45NyAxMjEuOUM5Ni45NjczIDEyMC43MDcgOTYuNDkyNCAxMTkuNTY0IDk1LjY0OSAxMTguNzIxQzk0LjgwNTcgMTE3Ljg3OCA5My42NjI2IDExNy40MDMgOTIuNDcgMTE3LjRWMTE3LjRaTTEwNi40NyAxMDkuNEMxMDUuNTggMTA5LjQgMTA0LjcxIDEwOS42NjQgMTAzLjk3IDExMC4xNThDMTAzLjIzIDExMC42NTMgMTAyLjY1MyAxMTEuMzU2IDEwMi4zMTMgMTEyLjE3OEMxMDEuOTcyIDExMyAxMDEuODgzIDExMy45MDUgMTAyLjA1NiAxMTQuNzc4QzEwMi4yMyAxMTUuNjUxIDEwMi42NTkgMTE2LjQ1MyAxMDMuMjg4IDExNy4wODJDMTAzLjkxNyAxMTcuNzExIDEwNC43MTkgMTE4LjE0IDEwNS41OTIgMTE4LjMxNEMxMDYuNDY1IDExOC40ODcgMTA3LjM3IDExOC4zOTggMTA4LjE5MiAxMTguMDU3QzEwOS4wMTQgMTE3LjcxNyAxMDkuNzE3IDExNy4xNCAxMTAuMjEyIDExNi40QzExMC43MDYgMTE1LjY2IDExMC45NyAxMTQuNzkgMTEwLjk3IDExMy45QzExMC45NjcgMTEyLjcwNyAxMTAuNDkyIDExMS41NjQgMTA5LjY0OSAxMTAuNzIxQzEwOC44MDYgMTA5Ljg3OCAxMDcuNjYzIDEwOS40MDMgMTA2LjQ3IDEwOS40VjEwOS40Wk0xMTkuNDcgMTAxLjRDMTE4LjU4IDEwMS40IDExNy43MSAxMDEuNjY0IDExNi45NyAxMDIuMTU4QzExNi4yMyAxMDIuNjUzIDExNS42NTMgMTAzLjM1NiAxMTUuMzEzIDEwNC4xNzhDMTE0Ljk3MiAxMDUgMTE0Ljg4MyAxMDUuOTA1IDExNS4wNTYgMTA2Ljc3OEMxMTUuMjMgMTA3LjY1MSAxMTUuNjU5IDEwOC40NTMgMTE2LjI4OCAxMDkuMDgyQzExNi45MTcgMTA5LjcxMSAxMTcuNzE5IDExMC4xNCAxMTguNTkyIDExMC4zMTRDMTE5LjQ2NSAxMTAuNDg3IDEyMC4zNyAxMTAuMzk4IDEyMS4xOTIgMTEwLjA1N0MxMjIuMDE0IDEwOS43MTcgMTIyLjcxNyAxMDkuMTQgMTIzLjIxMiAxMDguNEMxMjMuNzA2IDEwNy42NiAxMjMuOTcgMTA2Ljc5IDEyMy45NyAxMDUuOUMxMjMuOTY3IDEwNC43MDcgMTIzLjQ5MiAxMDMuNTY0IDEyMi42NDkgMTAyLjcyMUMxMjEuODA2IDEwMS44NzggMTIwLjY2MyAxMDEuNDAzIDExOS40NyAxMDEuNFYxMDEuNFpNMTA1LjY5IDcwLjRDMTA1LjMwNyA3MC40MDEgMTA0LjkzMiA3MC41MTIgMTA0LjYxIDcwLjcyTDg0LjQxIDgzLjcyQzg0LjE4NDkgODMuODYyMiA4My45OTE1IDg0LjA0OTMgODMuODQxOCA4NC4yNjk1QzgzLjY5MjEgODQuNDg5NyA4My41ODk0IDg0LjczODMgODMuNTQgODVDODMuNDgzNCA4NS4yNTcxIDgzLjQ3ODEgODUuNTIyOCA4My41MjQ1IDg1Ljc4MTlDODMuNTcwOCA4Ni4wNDEgODMuNjY3OCA4Ni4yODg0IDgzLjgxIDg2LjUxTDg0LjU4IDg3LjdDODQuODY2OSA4OC4xNDQ5IDg1LjMxODYgODguNDU4IDg1LjgzNiA4OC41NzA1Qzg2LjM1MzMgODguNjgyOSA4Ni44OTQyIDg4LjU4NTcgODcuMzQgODguM0wxMDcuNTMgNzUuM0MxMDcuOTczIDc1LjAxNDQgMTA4LjI4NiA3NC41NjUxIDEwOC40IDc0LjA1QzEwOC40NTggNzMuNzkzNiAxMDguNDY1IDczLjUyODIgMTA4LjQyIDczLjI2OTFDMTA4LjM3NiA3My4wMSAxMDguMjggNzIuNzYyMiAxMDguMTQgNzIuNTRMMTA3LjM3IDcxLjM1QzEwNy4xODggNzEuMDcwMiAxMDYuOTM5IDcwLjg0MDMgMTA2LjY0NiA3MC42ODE0QzEwNi4zNTIgNzAuNTIyNCAxMDYuMDI0IDcwLjQzOTUgMTA1LjY5IDcwLjQ0VjcwLjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyNyAzOC4zNTk5VjExMEw2NC41IDE0Ni4wOEwyIDExMFYzOC45MTk5TDMyIDU2LjI1OTlMNjQgNzQuNzU5OUw2NC41IDc1LjA0OTlMNjUgNzQuNzU5OUwxMjcgMzguMzU5OVYzOC4zNTk5Wk04Ni4yNiA4OS4wOTk5Qzg2LjczOTIgODkuMDk5OCA4Ny4yMDgxIDg4Ljk2MDkgODcuNjEgODguNjk5OUwxMDcuNzkgNzUuNjk5OUMxMDguMDY4IDc1LjUyNjMgMTA4LjMwOSA3NS4yOTg5IDEwOC40OTcgNzUuMDMxQzEwOC42ODYgNzQuNzYzMSAxMDguODIgNzQuNDYwMSAxMDguODkgNzQuMTM5OUMxMDguOTY0IDczLjgxNzEgMTA4Ljk3MiA3My40ODMgMTA4LjkxNiA3My4xNTY4QzEwOC44NTkgNzIuODMwNiAxMDguNzM4IDcyLjUxOSAxMDguNTYgNzIuMjM5OUwxMDcuNzkgNzEuMDU5OUMxMDcuNTY1IDcwLjcwNzIgMTA3LjI1NCA3MC40MTY5IDEwNi44ODcgNzAuMjE1OUMxMDYuNTIgNzAuMDE0OSAxMDYuMTA4IDY5LjkwOTcgMTA1LjY5IDY5LjkwOTlDMTA1LjIxMSA2OS45MDg5IDEwNC43NDEgNzAuMDQ3OSAxMDQuMzQgNzAuMzA5OUw4NC4xNCA4My4zMDk5QzgzLjU4MzEgODMuNjcwNSA4My4xOTE2IDg0LjIzNjggODMuMDUxMSA4NC44ODUyQzgyLjkxMDUgODUuNTMzNSA4My4wMzI0IDg2LjIxMTEgODMuMzkgODYuNzY5OUw4NC4xNSA4Ny45NDk5Qzg0LjM3NTYgODguMzA1MyA4NC42ODczIDg4LjU5NzkgODUuMDU2MSA4OC44MDA3Qzg1LjQyNSA4OS4wMDM1IDg1LjgzOTEgODkuMTA5OCA4Ni4yNiA4OS4xMDk5Vjg5LjA5OTlaTTExOS40NyAxMTAuOTFDMTIwLjQ1OSAxMTAuOTEgMTIxLjQyNiAxMTAuNjE3IDEyMi4yNDggMTEwLjA2N0MxMjMuMDcgMTA5LjUxOCAxMjMuNzExIDEwOC43MzcgMTI0LjA4OSAxMDcuODIzQzEyNC40NjggMTA2LjkxIDEyNC41NjcgMTA1LjkwNCAxMjQuMzc0IDEwNC45MzRDMTI0LjE4MSAxMDMuOTY1IDEyMy43MDUgMTAzLjA3NCAxMjMuMDA2IDEwMi4zNzRDMTIyLjMwNiAxMDEuNjc1IDEyMS40MTUgMTAxLjE5OSAxMjAuNDQ1IDEwMS4wMDZDMTE5LjQ3NiAxMDAuODEzIDExOC40NyAxMDAuOTEyIDExNy41NTcgMTAxLjI5MUMxMTYuNjQzIDEwMS42NjkgMTE1Ljg2MiAxMDIuMzEgMTE1LjMxMyAxMDMuMTMyQzExNC43NjMgMTAzLjk1NCAxMTQuNDcgMTA0LjkyMSAxMTQuNDcgMTA1LjkxQzExNC40NyAxMDcuMjM2IDExNC45OTcgMTA4LjUwOCAxMTUuOTM0IDEwOS40NDVDMTE2Ljg3MiAxMTAuMzgzIDExOC4xNDQgMTEwLjkxIDExOS40NyAxMTAuOTFWMTEwLjkxWk0xMDYuNDcgMTE4LjkxQzEwNy40NTkgMTE4LjkxIDEwOC40MjYgMTE4LjYxNyAxMDkuMjQ4IDExOC4wNjdDMTEwLjA3IDExNy41MTggMTEwLjcxMSAxMTYuNzM3IDExMS4wODkgMTE1LjgyM0MxMTEuNDY4IDExNC45MSAxMTEuNTY3IDExMy45MDQgMTExLjM3NCAxMTIuOTM0QzExMS4xODEgMTExLjk2NSAxMTAuNzA1IDExMS4wNzQgMTEwLjAwNiAxMTAuMzc0QzEwOS4zMDYgMTA5LjY3NSAxMDguNDE1IDEwOS4xOTkgMTA3LjQ0NSAxMDkuMDA2QzEwNi40NzYgMTA4LjgxMyAxMDUuNDcgMTA4LjkxMiAxMDQuNTU3IDEwOS4yOTFDMTAzLjY0MyAxMDkuNjY5IDEwMi44NjIgMTEwLjMxIDEwMi4zMTMgMTExLjEzMkMxMDEuNzYzIDExMS45NTQgMTAxLjQ3IDExMi45MjEgMTAxLjQ3IDExMy45MUMxMDEuNDcgMTE1LjIzNiAxMDEuOTk3IDExNi41MDggMTAyLjkzNCAxMTcuNDQ1QzEwMy44NzIgMTE4LjM4MyAxMDUuMTQ0IDExOC45MSAxMDYuNDcgMTE4LjkxVjExOC45MVpNOTIuNDcgMTI2LjkxQzkzLjQ1ODkgMTI2LjkxIDk0LjQyNTYgMTI2LjYxNyA5NS4yNDc4IDEyNi4wNjdDOTYuMDcwMSAxMjUuNTE4IDk2LjcxMSAxMjQuNzM3IDk3LjA4OTQgMTIzLjgyM0M5Ny40Njc4IDEyMi45MSA5Ny41NjY5IDEyMS45MDQgOTcuMzczOSAxMjAuOTM0Qzk3LjE4MSAxMTkuOTY1IDk2LjcwNDggMTE5LjA3NCA5Ni4wMDU1IDExOC4zNzRDOTUuMzA2MyAxMTcuNjc1IDk0LjQxNTQgMTE3LjE5OSA5My40NDU0IDExNy4wMDZDOTIuNDc1NSAxMTYuODEzIDkxLjQ3MDIgMTE2LjkxMiA5MC41NTY2IDExNy4yOTFDODkuNjQyOSAxMTcuNjY5IDg4Ljg2MjEgMTE4LjMxIDg4LjMxMjcgMTE5LjEzMkM4Ny43NjMyIDExOS45NTQgODcuNDcgMTIwLjkyMSA4Ny40NyAxMjEuOTFDODcuNDcgMTIzLjIzNiA4Ny45OTY4IDEyNC41MDggODguOTM0NSAxMjUuNDQ1Qzg5Ljg3MjEgMTI2LjM4MyA5MS4xNDM5IDEyNi45MSA5Mi40NyAxMjYuOTFaTTEyNy40NyAzNi45MDk5TDY0LjQ3IDczLjkwOTlMMzIuNDcgNTUuNDA5OUwxIDM3LjIwOTlWMTEwLjUzTDY0LjUgMTQ3LjE5TDEyOCAxMTAuNTZWMzcuMjM5OUwxMjcuNDYgMzYuOTI5OUwxMjcuNDcgMzYuOTA5OVpNODYuMjYgODguMDk5OUM4Ni4wMDg4IDg4LjEwMDQgODUuNzYxNiA4OC4wMzc0IDg1LjU0MTQgODcuOTE2OEM4NS4zMjExIDg3Ljc5NjIgODUuMTM0OCA4Ny42MjE4IDg1IDg3LjQwOTlMODQuMjMgODYuMjE5OUM4NC4wMTg0IDg1Ljg4NDkgODMuOTQ2OSA4NS40OCA4NC4wMzExIDg1LjA5MjhDODQuMTE1MyA4NC43MDU1IDg0LjM0ODQgODQuMzY2OSA4NC42OCA4NC4xNDk5TDEwNC44OCA3MS4xNDk5QzEwNS4xMTkgNzAuOTg5NiAxMDUuNDAyIDcwLjkwNTkgMTA1LjY5IDcwLjkwOTlDMTA1Ljk0MSA3MC45MDk0IDEwNi4xODggNzAuOTcyNCAxMDYuNDA5IDcxLjA5M0MxMDYuNjI5IDcxLjIxMzcgMTA2LjgxNSA3MS4zODggMTA2Ljk1IDcxLjU5OTlMMTA3LjcyIDcyLjc4OTlDMTA3LjkzMyA3My4xMjU1IDEwOC4wMDUgNzMuNTMyIDEwNy45MTggNzMuOTIwMUMxMDcuODMyIDc0LjMwODMgMTA3LjU5NSA3NC42NDYzIDEwNy4yNiA3NC44NTk5TDg3LjA3IDg3Ljg1OTlDODYuODI4NiA4OC4wMTU5IDg2LjU0NzQgODguMDk5MiA4Ni4yNiA4OC4wOTk5Vjg4LjA5OTlaTTExOS40NyAxMDkuOUMxMTguNjc5IDEwOS45IDExNy45MDYgMTA5LjY2NSAxMTcuMjQ4IDEwOS4yMjZDMTE2LjU5IDEwOC43ODYgMTE2LjA3NyAxMDguMTYyIDExNS43NzQgMTA3LjQzMUMxMTUuNDcyIDEwNi43IDExNS4zOTMgMTA1Ljg5NSAxMTUuNTQ3IDEwNS4xMkMxMTUuNzAxIDEwNC4zNDQgMTE2LjA4MiAxMDMuNjMxIDExNi42NDIgMTAzLjA3MUMxMTcuMjAxIDEwMi41MTIgMTE3LjkxNCAxMDIuMTMxIDExOC42OSAxMDEuOTc3QzExOS40NjYgMTAxLjgyMiAxMjAuMjcgMTAxLjkwMiAxMjEuMDAxIDEwMi4yMDRDMTIxLjczMiAxMDIuNTA3IDEyMi4zNTYgMTAzLjAyIDEyMi43OTYgMTAzLjY3OEMxMjMuMjM1IDEwNC4zMzUgMTIzLjQ3IDEwNS4xMDkgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDYuOTYxIDEyMy4wNDkgMTA3Ljk3OCAxMjIuMjk4IDEwOC43MjhDMTIxLjU0OCAxMDkuNDc4IDEyMC41MzEgMTA5LjkgMTE5LjQ3IDEwOS45Wk0xMDYuNDcgMTE3LjlDMTA1LjY3OSAxMTcuOSAxMDQuOTA2IDExNy42NjUgMTA0LjI0OCAxMTcuMjI2QzEwMy41OSAxMTYuNzg2IDEwMy4wNzcgMTE2LjE2MiAxMDIuNzc0IDExNS40MzFDMTAyLjQ3MiAxMTQuNyAxMDIuMzkzIDExMy44OTUgMTAyLjU0NyAxMTMuMTJDMTAyLjcwMSAxMTIuMzQ0IDEwMy4wODIgMTExLjYzMSAxMDMuNjQyIDExMS4wNzFDMTA0LjIwMSAxMTAuNTEyIDEwNC45MTQgMTEwLjEzMSAxMDUuNjkgMTA5Ljk3N0MxMDYuNDY2IDEwOS44MjIgMTA3LjI3IDEwOS45MDIgMTA4LjAwMSAxMTAuMjA0QzEwOC43MzIgMTEwLjUwNyAxMDkuMzU2IDExMS4wMiAxMDkuNzk2IDExMS42NzhDMTEwLjIzNSAxMTIuMzM1IDExMC40NyAxMTMuMTA5IDExMC40NyAxMTMuOUMxMTAuNDcgMTE0Ljk2MSAxMTAuMDQ5IDExNS45NzggMTA5LjI5OCAxMTYuNzI4QzEwOC41NDggMTE3LjQ3OCAxMDcuNTMxIDExNy45IDEwNi40NyAxMTcuOVpNOTIuNDcgMTI1LjlDOTEuNjc4OSAxMjUuOSA5MC45MDU1IDEyNS42NjUgOTAuMjQ3NyAxMjUuMjI2Qzg5LjU4OTkgMTI0Ljc4NiA4OS4wNzcyIDEyNC4xNjIgODguNzc0NSAxMjMuNDMxQzg4LjQ3MTcgMTIyLjcgODguMzkyNSAxMjEuODk1IDg4LjU0NjkgMTIxLjEyQzg4LjcwMTIgMTIwLjM0NCA4OS4wODIyIDExOS42MzEgODkuNjQxNiAxMTkuMDcxQzkwLjIwMSAxMTguNTEyIDkwLjkxMzcgMTE4LjEzMSA5MS42ODk2IDExNy45NzdDOTIuNDY1NiAxMTcuODIyIDkzLjI2OTggMTE3LjkwMiA5NC4wMDA3IDExOC4yMDRDOTQuNzMxNiAxMTguNTA3IDk1LjM1NjMgMTE5LjAyIDk1Ljc5NTkgMTE5LjY3OEM5Ni4yMzU0IDEyMC4zMzUgOTYuNDcgMTIxLjEwOSA5Ni40NyAxMjEuOUM5Ni40NyAxMjIuOTYxIDk2LjA0ODYgMTIzLjk3OCA5NS4yOTg0IDEyNC43MjhDOTQuNTQ4MyAxMjUuNDc4IDkzLjUzMDkgMTI1LjkgOTIuNDcgMTI1LjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkyLjQ3IDEyNS40Qzk0LjQwMyAxMjUuNCA5NS45NyAxMjMuODMzIDk1Ljk3IDEyMS45Qzk1Ljk3IDExOS45NjcgOTQuNDAzIDExOC40IDkyLjQ3IDExOC40QzkwLjUzNyAxMTguNCA4OC45NyAxMTkuOTY3IDg4Ljk3IDEyMS45Qzg4Ljk3IDEyMy44MzMgOTAuNTM3IDEyNS40IDkyLjQ3IDEyNS40WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMTguOUM5My4wNjMzIDExOC45IDkzLjY0MzMgMTE5LjA3NiA5NC4xMzY3IDExOS40MDVDOTQuNjMgMTE5LjczNSA5NS4wMTQ1IDEyMC4yMDQgOTUuMjQxNiAxMjAuNzUyQzk1LjQ2ODcgMTIxLjMgOTUuNTI4MSAxMjEuOTAzIDk1LjQxMjMgMTIyLjQ4NUM5NS4yOTY2IDEyMy4wNjcgOTUuMDEwOSAxMjMuNjAyIDk0LjU5MTMgMTI0LjAyMUM5NC4xNzE3IDEyNC40NDEgOTMuNjM3MiAxMjQuNzI2IDkzLjA1NTIgMTI0Ljg0MkM5Mi40NzMzIDEyNC45NTggOTEuODcwMSAxMjQuODk5IDkxLjMyMTkgMTI0LjY3MkM5MC43NzM3IDEyNC40NDQgOTAuMzA1MiAxMjQuMDYgODkuOTc1NiAxMjMuNTY3Qzg5LjY0NTkgMTIzLjA3MyA4OS40NyAxMjIuNDkzIDg5LjQ3IDEyMS45Qzg5LjQ3IDEyMS4xMDQgODkuNzg2IDEyMC4zNDEgOTAuMzQ4NyAxMTkuNzc5QzkwLjkxMTMgMTE5LjIxNiA5MS42NzQzIDExOC45IDkyLjQ3IDExOC45VjExOC45Wk05Mi40NyAxMTcuOUM5MS42Nzg4IDExNy45IDkwLjkwNTUgMTE4LjEzNCA5MC4yNDc3IDExOC41NzRDODkuNTg5OSAxMTkuMDE0IDg5LjA3NzIgMTE5LjYzOCA4OC43NzQ1IDEyMC4zNjlDODguNDcxNyAxMjEuMSA4OC4zOTI1IDEyMS45MDQgODguNTQ2OCAxMjIuNjhDODguNzAxMiAxMjMuNDU2IDg5LjA4MjEgMTI0LjE2OSA4OS42NDE1IDEyNC43MjhDOTAuMjAxIDEyNS4yODggOTAuOTEzNyAxMjUuNjY5IDkxLjY4OTYgMTI1LjgyM0M5Mi40NjU1IDEyNS45NzcgOTMuMjY5OCAxMjUuODk4IDk0LjAwMDcgMTI1LjU5NUM5NC43MzE2IDEyNS4yOTMgOTUuMzU2MyAxMjQuNzggOTUuNzk1OCAxMjQuMTIyQzk2LjIzNTQgMTIzLjQ2NCA5Ni40NyAxMjIuNjkxIDk2LjQ3IDEyMS45Qzk2LjQ3IDEyMC44MzkgOTYuMDQ4NSAxMTkuODIyIDk1LjI5ODQgMTE5LjA3MUM5NC41NDgzIDExOC4zMjEgOTMuNTMwOCAxMTcuOSA5Mi40NyAxMTcuOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNODYuMjYgODcuNkM4Ni4wOTI3IDg3LjU5OTcgODUuOTI4MSA4Ny41NTc0IDg1Ljc4MTQgODcuNDc3MUM4NS42MzQ2IDg3LjM5NjcgODUuNTEwNCA4Ny4yODA4IDg1LjQyIDg3LjE0TDg0LjY1IDg2Qzg0LjU3OTEgODUuODg4MiA4NC41MzExIDg1Ljc2MzUgODQuNTA4OCA4NS42MzNDODQuNDg2NSA4NS41MDI1IDg0LjQ5MDMgODUuMzY4OSA4NC41MiA4NS4yNEM4NC41NzY5IDg0Ljk4NTEgODQuNzMxMiA4NC43NjI2IDg0Ljk1IDg0LjYyTDEwNS4xNSA3MS42MkMxMDUuMzExIDcxLjUxNiAxMDUuNDk4IDcxLjQ2MDUgMTA1LjY5IDcxLjQ2QzEwNS44NTcgNzEuNDYwMiAxMDYuMDIyIDcxLjUwMjUgMTA2LjE2OSA3MS41ODI5QzEwNi4zMTUgNzEuNjYzMiAxMDYuNDQgNzEuNzc5MSAxMDYuNTMgNzEuOTJMMTA3LjMgNzMuMTFDMTA3LjQ0MSA3My4zMzMxIDEwNy40ODcgNzMuNjAyNiAxMDcuNDMgNzMuODZDMTA3LjM3MSA3NC4xMTY1IDEwNy4yMTMgNzQuMzM5MyAxMDYuOTkgNzQuNDhMODYuOCA4Ny40OEM4Ni42MzQ5IDg3LjU2OTkgODYuNDQ3NyA4Ny42MTE1IDg2LjI2IDg3LjZaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNS42OSA3MS45Mzk5QzEwNS43NzQgNzEuOTM5MSAxMDUuODU3IDcxLjk1OTkgMTA1LjkzIDcyLjAwMDFDMTA2LjAwNCA3Mi4wNDA0IDEwNi4wNjYgNzIuMDk4OSAxMDYuMTEgNzIuMTY5OUwxMDYuODggNzMuMzU5OUMxMDYuOTQ4IDczLjQ3MDQgMTA2Ljk3IDczLjYwMzUgMTA2Ljk0IDczLjcyOTlDMTA2LjkxIDczLjg2MDYgMTA2LjgzMSA3My45NzUgMTA2LjcyIDc0LjA0OTlMODYuNTIgODYuOTk5OUM4Ni40NDE2IDg3LjA0ODQgODYuMzUyMSA4Ny4wNzU5IDg2LjI2IDg3LjA3OTlDODYuMTc1MyA4Ny4wNzk3IDg2LjA5MiA4Ny4wNTc1IDg2LjAxODQgODcuMDE1NEM4NS45NDQ3IDg2Ljk3MzMgODUuODgzMyA4Ni45MTI5IDg1Ljg0IDg2LjgzOTlMODUuMDcgODUuNjU5OUM4NS4wMDI5IDg1LjU1MjggODQuOTc3OSA4NS40MjQ1IDg1IDg1LjI5OTlDODUuMDA5NCA4NS4yMzU4IDg1LjAzMzIgODUuMTc0NiA4NS4wNjk1IDg1LjEyMDlDODUuMTA1OSA4NS4wNjcyIDg1LjE1MzkgODUuMDIyNCA4NS4yMSA4NC45ODk5TDEwNS40MSA3MS45ODk5QzEwNS40OTIgNzEuOTQxNSAxMDUuNTg1IDcxLjkxNzIgMTA1LjY4IDcxLjkxOTlMMTA1LjY5IDcxLjkzOTlaTTEwNS42OCA3MC45MTk5QzEwNS4zOTIgNzAuOTE1OSAxMDUuMTA5IDcwLjk5OTYgMTA0Ljg3IDcxLjE1OTlMODQuNjcgODQuMTU5OUM4NC4zMzg0IDg0LjM3NjkgODQuMTA1MyA4NC43MTU1IDg0LjAyMTIgODUuMTAyOEM4My45MzcgODUuNDkgODQuMDA4NCA4NS44OTQ5IDg0LjIyIDg2LjIyOTlMODUgODcuNDA5OUM4NS4xMDU3IDg3LjU3NjIgODUuMjQzMyA4Ny43MTk5IDg1LjQwNDggODcuODMyN0M4NS41NjYzIDg3Ljk0NTQgODUuNzQ4NiA4OC4wMjUgODUuOTQxMSA4OC4wNjY5Qzg2LjEzMzcgODguMTA4NyA4Ni4zMzI1IDg4LjExMiA4Ni41MjYzIDg4LjA3NjVDODYuNzIwMSA4OC4wNDA5IDg2LjkwNDkgODcuOTY3NCA4Ny4wNyA4Ny44NTk5TDEwNy4yNiA3NC44NTk5QzEwNy41OTUgNzQuNjQ2MyAxMDcuODMyIDc0LjMwODMgMTA3LjkxOSA3My45MjAyQzEwOC4wMDUgNzMuNTMyIDEwNy45MzMgNzMuMTI1NSAxMDcuNzIgNzIuNzg5OUwxMDcgNzEuNjI5OUMxMDYuODY1IDcxLjQxODEgMTA2LjY3OSA3MS4yNDM3IDEwNi40NTkgNzEuMTIzMUMxMDYuMjM4IDcxLjAwMjQgMTA1Ljk5MSA3MC45Mzk0IDEwNS43NCA3MC45Mzk5TDEwNS42OCA3MC45MTk5WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMDYuNDcgMTE3LjRDMTA4LjQwMyAxMTcuNCAxMDkuOTcgMTE1LjgzMyAxMDkuOTcgMTEzLjlDMTA5Ljk3IDExMS45NjcgMTA4LjQwMyAxMTAuNCAxMDYuNDcgMTEwLjRDMTA0LjUzNyAxMTAuNCAxMDIuOTcgMTExLjk2NyAxMDIuOTcgMTEzLjlDMTAyLjk3IDExNS44MzMgMTA0LjUzNyAxMTcuNCAxMDYuNDcgMTE3LjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNi40NyAxMTAuOUMxMDcuMDYzIDExMC45IDEwNy42NDMgMTExLjA3NiAxMDguMTM3IDExMS40MDVDMTA4LjYzIDExMS43MzUgMTA5LjAxNSAxMTIuMjA0IDEwOS4yNDIgMTEyLjc1MkMxMDkuNDY5IDExMy4zIDEwOS41MjggMTEzLjkwMyAxMDkuNDEyIDExNC40ODVDMTA5LjI5NyAxMTUuMDY3IDEwOS4wMTEgMTE1LjYwMiAxMDguNTkxIDExNi4wMjFDMTA4LjE3MiAxMTYuNDQxIDEwNy42MzcgMTE2LjcyNiAxMDcuMDU1IDExNi44NDJDMTA2LjQ3MyAxMTYuOTU4IDEwNS44NyAxMTYuODk5IDEwNS4zMjIgMTE2LjY3MkMxMDQuNzc0IDExNi40NDQgMTA0LjMwNSAxMTYuMDYgMTAzLjk3NiAxMTUuNTY3QzEwMy42NDYgMTE1LjA3MyAxMDMuNDcgMTE0LjQ5MyAxMDMuNDcgMTEzLjlDMTAzLjQ3IDExMy4xMDQgMTAzLjc4NiAxMTIuMzQxIDEwNC4zNDkgMTExLjc3OUMxMDQuOTExIDExMS4yMTYgMTA1LjY3NCAxMTAuOSAxMDYuNDcgMTEwLjlWMTEwLjlaTTEwNi40NyAxMDkuOUMxMDUuNjc5IDEwOS45IDEwNC45MDUgMTEwLjEzNCAxMDQuMjQ4IDExMC41NzRDMTAzLjU5IDExMS4wMTQgMTAzLjA3NyAxMTEuNjM4IDEwMi43NzQgMTEyLjM2OUMxMDIuNDcyIDExMy4xIDEwMi4zOTIgMTEzLjkwNCAxMDIuNTQ3IDExNC42OEMxMDIuNzAxIDExNS40NTYgMTAzLjA4MiAxMTYuMTY5IDEwMy42NDIgMTE2LjcyOEMxMDQuMjAxIDExNy4yODggMTA0LjkxNCAxMTcuNjY5IDEwNS42OSAxMTcuODIzQzEwNi40NjYgMTE3Ljk3NyAxMDcuMjcgMTE3Ljg5OCAxMDguMDAxIDExNy41OTVDMTA4LjczMiAxMTcuMjkzIDEwOS4zNTYgMTE2Ljc4IDEwOS43OTYgMTE2LjEyMkMxMTAuMjM1IDExNS40NjQgMTEwLjQ3IDExNC42OTEgMTEwLjQ3IDExMy45QzExMC40NyAxMTIuODM5IDExMC4wNDkgMTExLjgyMiAxMDkuMjk4IDExMS4wNzFDMTA4LjU0OCAxMTAuMzIxIDEwNy41MzEgMTA5LjkgMTA2LjQ3IDEwOS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMTkuNDcgMTA5LjRDMTIxLjQwMyAxMDkuNCAxMjIuOTcgMTA3LjgzMyAxMjIuOTcgMTA1LjlDMTIyLjk3IDEwMy45NjcgMTIxLjQwMyAxMDIuNCAxMTkuNDcgMTAyLjRDMTE3LjUzNyAxMDIuNCAxMTUuOTcgMTAzLjk2NyAxMTUuOTcgMTA1LjlDMTE1Ljk3IDEwNy44MzMgMTE3LjUzNyAxMDkuNCAxMTkuNDcgMTA5LjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExOS40NyAxMDIuOUMxMjAuMDYzIDEwMi45IDEyMC42NDMgMTAzLjA3NiAxMjEuMTM3IDEwMy40MDVDMTIxLjYzIDEwMy43MzUgMTIyLjAxNSAxMDQuMjA0IDEyMi4yNDIgMTA0Ljc1MkMxMjIuNDY5IDEwNS4zIDEyMi41MjggMTA1LjkwMyAxMjIuNDEyIDEwNi40ODVDMTIyLjI5NyAxMDcuMDY3IDEyMi4wMTEgMTA3LjYwMiAxMjEuNTkxIDEwOC4wMjFDMTIxLjE3MiAxMDguNDQxIDEyMC42MzcgMTA4LjcyNiAxMjAuMDU1IDEwOC44NDJDMTE5LjQ3MyAxMDguOTU4IDExOC44NyAxMDguODk5IDExOC4zMjIgMTA4LjY3MkMxMTcuNzc0IDEwOC40NDQgMTE3LjMwNSAxMDguMDYgMTE2Ljk3NiAxMDcuNTY3QzExNi42NDYgMTA3LjA3MyAxMTYuNDcgMTA2LjQ5MyAxMTYuNDcgMTA1LjlDMTE2LjQ3IDEwNS4xMDQgMTE2Ljc4NiAxMDQuMzQxIDExNy4zNDkgMTAzLjc3OUMxMTcuOTExIDEwMy4yMTYgMTE4LjY3NCAxMDIuOSAxMTkuNDcgMTAyLjlWMTAyLjlaTTExOS40NyAxMDEuOUMxMTguNjc5IDEwMS45IDExNy45MDUgMTAyLjEzNCAxMTcuMjQ4IDEwMi41NzRDMTE2LjU5IDEwMy4wMTQgMTE2LjA3NyAxMDMuNjM4IDExNS43NzQgMTA0LjM2OUMxMTUuNDcyIDEwNS4xIDExNS4zOTIgMTA1LjkwNCAxMTUuNTQ3IDEwNi42OEMxMTUuNzAxIDEwNy40NTYgMTE2LjA4MiAxMDguMTY5IDExNi42NDIgMTA4LjcyOEMxMTcuMjAxIDEwOS4yODggMTE3LjkxNCAxMDkuNjY5IDExOC42OSAxMDkuODIzQzExOS40NjYgMTA5Ljk3NyAxMjAuMjcgMTA5Ljg5OCAxMjEuMDAxIDEwOS41OTVDMTIxLjczMiAxMDkuMjkzIDEyMi4zNTYgMTA4Ljc4IDEyMi43OTYgMTA4LjEyMkMxMjMuMjM1IDEwNy40NjQgMTIzLjQ3IDEwNi42OTEgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDQuODM5IDEyMy4wNDkgMTAzLjgyMiAxMjIuMjk4IDEwMy4wNzFDMTIxLjU0OCAxMDIuMzIxIDEyMC41MzEgMTAxLjkgMTE5LjQ3IDEwMS45WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi4zNCAxNi42N0w2MS4wNyAzNi45TDMyLjQ3IDU1LjRMMS4wMTAwMSAzNy4yMUwxLjU2MDAxIDM2LjlMNjQuNDcgMC41Nzk5NTZMOTIuMzQgMTYuNjdaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMS41NjAwMSAzNi44OTk5TDEuMDEwMDEgMzcuMjA5OVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEyNy40MyAzNi45Mjk5TDY0LjQ3IDczLjg5OTlMMzIuNDcgNTUuMzk5OUw2MS4wNyAzNi44OTk5TDkyLjM0IDE2LjY2OTlMMTI3LjM4IDM2Ljg5OTlMMTI3LjQzIDM2LjkyOTlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjQuNDcgNzMuODk5OVYxNDYuOVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIzXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwNi40NyAxMTcuOUMxMDguNjc5IDExNy45IDExMC40NyAxMTYuMTA5IDExMC40NyAxMTMuOUMxMTAuNDcgMTExLjY5MSAxMDguNjc5IDEwOS45IDEwNi40NyAxMDkuOUMxMDQuMjYxIDEwOS45IDEwMi40NyAxMTEuNjkxIDEwMi40NyAxMTMuOUMxMDIuNDcgMTE2LjEwOSAxMDQuMjYxIDExNy45IDEwNi40NyAxMTcuOVpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Mi40NyAxMjUuOUM5NC42NzkxIDEyNS45IDk2LjQ3IDEyNC4xMDkgOTYuNDcgMTIxLjlDOTYuNDcgMTE5LjY5MSA5NC42NzkxIDExNy45IDkyLjQ3IDExNy45QzkwLjI2MDggMTE3LjkgODguNDcgMTE5LjY5MSA4OC40NyAxMjEuOUM4OC40NyAxMjQuMTA5IDkwLjI2MDggMTI1LjkgOTIuNDcgMTI1LjlaXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE5LjQ3IDEwOS45QzEyMS42NzkgMTA5LjkgMTIzLjQ3IDEwOC4xMDkgMTIzLjQ3IDEwNS45QzEyMy40NyAxMDMuNjkxIDEyMS42NzkgMTAxLjkgMTE5LjQ3IDEwMS45QzExNy4yNjEgMTAxLjkgMTE1LjQ3IDEwMy42OTEgMTE1LjQ3IDEwNS45QzExNS40NyAxMDguMTA5IDExNy4yNjEgMTA5LjkgMTE5LjQ3IDEwOS45WlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCIvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyOC40MVwiIGhlaWdodD1cIjE0Ny4yMlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgICBcclxuICAgICk7ICAgICAgICBcclxufTsiLCJjb25zdCBiYXNlVXJsPSAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIjtcclxuLy8gY29uc3QgYmFzZVVybD0gIFwiaHR0cHM6Ly9iYWNrZW5kLWxvZ2lzdGljcy5oZXJva3VhcHAuY29tXCJcclxuZXhwb3J0IGNvbnN0IGFwaSA9IGAke2Jhc2VVcmx9L2FwaWA7XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVB1YmxpY1VybCA9IChmaWxlTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9L3B1YmxpYy8ke2ZpbGVOYW1lfWBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
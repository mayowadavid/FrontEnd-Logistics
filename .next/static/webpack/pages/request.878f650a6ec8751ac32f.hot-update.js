webpackHotUpdate_N_E("pages/request",{

/***/ "./components/RequestSubmit.js":
/*!*************************************!*\
  !*** ./components/RequestSubmit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\RequestSubmit.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestSubmit = function RequestSubmit() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var back = function back() {
    setRequestSuccess(false);
    return router.replace('dashboard');
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      setRequestSuccess = _useContext.setRequestSuccess;

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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: function onClick() {
            return back();
          },
          children: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["close"])()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "checked",
        children: [" ", Object(_svg__WEBPACK_IMPORTED_MODULE_3__["checkMark"])()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Your Request has been submitted successfully"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "An admin will contact you shortly, check your transaction page to know the status of your request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "request_submit",
        onClick: function onClick() {
          return back();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Done"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 80
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 18
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(RequestSubmit, "5pBjqSmnJCaGkQ67OhOKT1TmFnY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = RequestSubmit;
/* harmony default export */ __webpack_exports__["default"] = (RequestSubmit);

var _c;

$RefreshReg$(_c, "RequestSubmit");

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

/***/ }),

/***/ "./components/context/RequestContext.js":
/*!**********************************************!*\
  !*** ./components/context/RequestContext.js ***!
  \**********************************************/
/*! exports provided: RequestContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestContext", function() { return RequestContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");






var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var RequestContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])();

var RequestContextProvider = function RequestContextProvider(props) {
  _s();

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
  var initialState = {
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
    formErrors: Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
      amount: ''
    }, "requestImages", [{
      img: '',
      _id: ''
    }])
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      contacts = _useState2[0],
      setContacts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      extractedRequest = _useState3[0],
      setExtractedRequest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      sessionToken = _useState4[0],
      setSessionToken = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLogin = _useState5[0],
      setisLogin = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      temporaryImage = _useState6[0],
      setTemporaryImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      requestImages = _useState7[0],
      setRequestImages = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      form = _useState9[0],
      setForm = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      requestSuccess = _useState10[0],
      setRequestSuccess = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      progress = _useState11[0],
      setProgress = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      error = _useState12[0],
      setError = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      url = _useState13[0],
      setUrl = _useState13[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(); // useEffect ( () => {
  //     setRequestImages([...url, ...url]);
  //     console.log(url);
  // }, [url]);
  // useEffect ( () => {
  //     console.log(requestImages);
  // }, [url]);
  // console.log(requestImages);
  // console.log(progress);
  // console.log(url)

  var handleChange = function handleChange(e) {
    if (e) {
      var _input = _objectSpread({}, input),
          sender = _input.sender;

      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          id = _e$target.id;

      var _input2 = _objectSpread({}, input),
          formErrors = _input2.formErrors;

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_8__["requestValidate"])(id, value, formErrors);
      sender[name] = e.target.value;

      var newInput = _objectSpread(_objectSpread({}, input), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({
        sender: sender
      }, name, value));

      return setInput(newInput);
    }
  };

  var handleCheck = function handleCheck(e) {
    var _e$target2 = e.target,
        name = _e$target2.name,
        checked = _e$target2.checked;

    var newInput = _objectSpread(_objectSpread({}, input), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, checked));

    return setInput(newInput);
  };

  var photoChange = function photoChange(e) {
    e.preventDefault();

    if (e.target.files) {
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var hold = filteredImageSize == true && URL.createObjectURL(selected);
      hold !== undefined && setTemporaryImage.apply(void 0, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage).concat([hold])); //   if(filteredImageSize == true ){
      //   const storageRef = store.ref(`requestImages/${selected.name}`);
      //     storageRef.put(selected).on('state_changed', 
      //     async (snap) => {
      //       const newPercentage = await (snap.bytesTransferred / snap.totalBytes) * 100;
      //     await setProgress(newPercentage);
      //     },  async (err) => {
      //     await setError(err);
      //     }, async () => {
      //       const newUrl = await storageRef.getDownloadURL();
      //     await setRequestImages(newUrl);
      //     });
      //   }
      //  URL.revokeObjectURL(selected);   
    }
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var token, res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              _context.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/request/create', form, {
                headers: {
                  'authorization': token ? "Bearer ".concat(token) : ''
                }
              })["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  error.response.status && (error.response.status == '500' ||  true && (_helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/signout'), localStorage.clear(), router.replace('/login')));
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

            case 4:
              res = _context.sent;
              console.log(res);
              res && res.status == 201 && (console.log(res), setRequestSuccess(true));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFormSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleReceiver = function handleReceiver(e) {
    if (e) {
      var _input3 = _objectSpread({}, input),
          receiver = _input3.receiver;

      var _e$target3 = e.target,
          name = _e$target3.name,
          id = _e$target3.id,
          value = _e$target3.value;

      var _input4 = _objectSpread({}, input),
          formErrors = _input4.formErrors;

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_8__["requestValidate"])(id, value, formErrors);
      receiver[name] = e.target.value;

      var newInp = _objectSpread(_objectSpread({}, input), {}, {
        receiver: receiver
      });

      return setInput(newInp);
    }
  };

  var handleRequestUpdate = /*#__PURE__*/function () {
    var _ref2 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e, id) {
      var form, _iterator, _step, img, _input5, cartons, deliveryLocations, descriptions, itemsWorth, otherItems, tagName, receiver, sender, status, amount, _iterator2, _step2, pair, res;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              form = new FormData();

              if (requestImages !== undefined) {
                _iterator = _createForOfIteratorHelper(requestImages);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    img = _step.value;
                    form.append('requestImages', img);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              _input5 = _objectSpread({}, input), cartons = _input5.cartons, deliveryLocations = _input5.deliveryLocations, descriptions = _input5.descriptions, itemsWorth = _input5.itemsWorth, otherItems = _input5.otherItems, tagName = _input5.tagName, receiver = _input5.receiver, sender = _input5.sender, status = _input5.status, amount = _input5.amount;
              form.append('cartons', cartons);
              form.append('deliveryLocations', deliveryLocations);
              form.append('descriptions', descriptions);
              form.append('itemsWorth', itemsWorth);
              form.append('otherItems', otherItems);
              form.append('tagName', tagName);
              form.append('receiver[firstName]', receiver.firstName);
              form.append('receiver[phoneNumber1]', receiver.phoneNumber1);
              form.append('receiver[phoneNumber2]', receiver.phoneNumber2);
              form.append('sender[firstName]', sender.firstName);
              form.append('sender[phoneNumber1]', sender.phoneNumber1);
              form.append('sender[phoneNumber2]', sender.phoneNumber1);
              input._id && form.append('status', status);
              input._id && form.append('amount', amount);
              setForm(form);
              _iterator2 = _createForOfIteratorHelper(form.entries());

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  pair = _step2.value;
                  console.log([pair[0] + ',' + pair[1]]);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _context2.next = 23;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put('/request/' + id, form);

            case 23:
              res = _context2.sent;

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleRequestUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleFormPreview = function handleFormPreview(e) {
    e.preventDefault();
    var form = new FormData();

    if (requestImages !== undefined) {
      var _iterator3 = _createForOfIteratorHelper(requestImages),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var img = _step3.value;
          form.append('requestImages', img);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    var _input6 = _objectSpread({}, input),
        cartons = _input6.cartons,
        deliveryLocations = _input6.deliveryLocations,
        descriptions = _input6.descriptions,
        itemsWorth = _input6.itemsWorth,
        otherItems = _input6.otherItems,
        tagName = _input6.tagName,
        receiver = _input6.receiver,
        sender = _input6.sender,
        status = _input6.status,
        amount = _input6.amount;

    form.append('cartons', cartons);
    form.append('deliveryLocations', deliveryLocations);
    form.append('descriptions', descriptions);
    form.append('itemsWorth', itemsWorth);
    form.append('otherItems', otherItems);
    form.append('tagName', tagName);
    form.append('receiver[firstName]', receiver.firstName);
    form.append('receiver[phoneNumber1]', receiver.phoneNumber1);
    form.append('receiver[phoneNumber2]', receiver.phoneNumber2);
    form.append('sender[firstName]', sender.firstName);
    form.append('sender[phoneNumber1]', sender.phoneNumber1);
    form.append('sender[phoneNumber2]', sender.phoneNumber1);
    input._id && form.append('status', status);
    input._id && form.append('amount', amount);
    setForm(form);

    var _iterator4 = _createForOfIteratorHelper(form.entries()),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var pair = _step4.value;
        console.log([pair[0] + ',' + pair[1]]);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    setCount("active");
  };

  var selector = [{
    content: "contact",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_7__["contact"])(),
    title: "Contact",
    id: 1
  }, {
    content: "gallery",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_7__["gallery"])(),
    title: "Gallery",
    id: 2
  }, {
    content: "ShippingRequest",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_7__["offBack"])(),
    title: "Request",
    id: 3
  }, {
    content: "",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_7__["message"])(),
    title: "Message",
    id: 4
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RequestContext.Provider, {
    value: {
      input: input,
      error: error,
      requestSuccess: requestSuccess,
      setRequestSuccess: setRequestSuccess,
      initialState: initialState,
      setCount: setCount,
      count: count,
      setInput: setInput,
      handleChange: handleChange,
      handleReceiver: handleReceiver,
      handleCheck: handleCheck,
      temporaryImage: temporaryImage,
      handleFormSubmit: handleFormSubmit,
      handleFormPreview: handleFormPreview,
      photoChange: photoChange,
      selector: selector,
      setExtractedRequest: setExtractedRequest,
      extractedRequest: extractedRequest,
      contacts: contacts,
      setContacts: setContacts,
      handleRequestUpdate: handleRequestUpdate,
      sessionToken: sessionToken,
      isLogin: isLogin,
      setisLogin: setisLogin
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 299,
    columnNumber: 9
  }, _this);
};

_s(RequestContextProvider, "rx/+zsj9qLnJ8WIAthrCQRr4evw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = RequestContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

var _c;

$RefreshReg$(_c, "RequestContextProvider");

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

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlider; });
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\slider.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function SimpleSlider() {
  _s();

  var _this = this;

  var settings = {
    className: "center",
    infinite: true,
    useCSS: true,
    slidesToShow: 3,
    draggable: true,
    speed: 500
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_3__["RequestContext"]),
      permanentImages = _useContext.permanentImages;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: permanentImages.length > 0 && permanentImages.map(function (_ref) {
      var img = _ref.img;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: img
      }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(SimpleSlider, "5kmwGPYvsz6zi3W/ywr+xr2WMFg=");

_c = SimpleSlider;

var _c;

$RefreshReg$(_c, "SimpleSlider");

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

/***/ }),

/***/ "./components/usersRequest/addRequest.js":
/*!***********************************************!*\
  !*** ./components/usersRequest/addRequest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\addRequest.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AddRequest = function AddRequest() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      input = _useContext.input,
      error = _useContext.error,
      handleChange = _useContext.handleChange,
      handleReceiver = _useContext.handleReceiver,
      handleCheck = _useContext.handleCheck,
      temporaryImage = _useContext.temporaryImage,
      handleFormPreview = _useContext.handleFormPreview,
      photoChange = _useContext.photoChange,
      handleRequestUpdate = _useContext.handleRequestUpdate,
      setCount = _useContext.setCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    options: "pending"
  }, {
    options: "processing"
  }, {
    options: "canceled"
  }, {
    options: "onHold"
  }, {
    options: "completed"
  }]),
      statusOption = _useState[0],
      setStatusOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      action = _useState2[0],
      setAction = _useState2[1];

  var photoSource = function photoSource() {
    if (temporaryImage) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [" ", temporaryImage.map(function (img) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: img
          }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 51
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 31
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, _this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, _this);
    }
  };

  var changeStatus = function changeStatus() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "status-change-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "status",
          children: "Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          id: "status",
          onChange: handleChange,
          value: input.status,
          name: "status",
          children: statusOption.map(function (_ref) {
            var options = _ref.options;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: options,
              children: options
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 24
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this);
  };

  var _input = _objectSpread({}, input),
      formErrors = _input.formErrors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "photo",
      children: temporaryImage ? photoSource() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 30
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 30
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: input._id ? function (e) {
        return handleRequestUpdate(e, input._id);
      } : function (e) {
        return handleFormPreview(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              onChange: handleChange,
              id: "senderFirstName",
              name: "firstName",
              value: input.sender.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 21
            }, _this), formErrors.sender.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber1",
              onChange: handleChange,
              name: "phoneNumber1",
              value: input.sender.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber2",
              onChange: handleChange,
              name: "phoneNumber2",
              value: input.sender.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              id: "receiverFirstname",
              onChange: handleReceiver,
              name: "firstName",
              value: input.receiver.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 21
            }, _this), formErrors.receiver.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber1",
              onChange: handleReceiver,
              name: "phoneNumber1",
              value: input.receiver.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber2",
              onChange: handleReceiver,
              name: "phoneNumber2",
              value: input.receiver.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "tagName",
            onChange: handleChange,
            name: "tagName",
            value: input.tagName,
            placeholder: "Tag name.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 21
          }, _this), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "number",
            id: "Cartons",
            onChange: handleChange,
            name: "cartons",
            value: input.cartons,
            placeholder: "Cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, _this), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "checkbox",
            id: "otherItems",
            onChange: handleCheck,
            name: "otherItems",
            value: input.otherItems,
            placeholder: "otherItems"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, _this), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "itemsWorth",
            onChange: handleChange,
            name: "itemsWorth",
            value: input.itemsWorth,
            placeholder: "itemsWorth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 21
          }, _this), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "deliveryLocation",
            onChange: handleChange,
            name: "deliveryLocations",
            value: input.deliveryLocations,
            placeholder: "deliveryLocation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, _this), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            cols: "40",
            rows: "6",
            id: "descriptions",
            onChange: handleChange,
            name: "descriptions",
            value: input.descriptions,
            placeholder: "descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, _this), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }, _this), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 32
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }, _this)]
  }, void 0, true);
};

_s(AddRequest, "Ac7Lfyzbx1sZuCcqp5DAW7eh+ds=");

_c = AddRequest;
/* harmony default export */ __webpack_exports__["default"] = (AddRequest);

var _c;

$RefreshReg$(_c, "AddRequest");

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

/***/ "./components/usersRequest/requestHandler.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestHandler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _addRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRequest */ "./components/usersRequest/addRequest.js");
/* harmony import */ var _requestPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestPreview */ "./components/usersRequest/requestPreview.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestHandler.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestHandler = function RequestHandler() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      count = _useContext.count;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: count == undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_addRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_requestPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, _this)
  }, void 0, false);
};

_s(RequestHandler, "KL+7pJqdpwLy64a0pfY56Z0O2FE=");

_c = RequestHandler;
/* harmony default export */ __webpack_exports__["default"] = (RequestHandler);

var _c;

$RefreshReg$(_c, "RequestHandler");

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

/***/ "./components/usersRequest/requestPreview.js":
/*!***************************************************!*\
  !*** ./components/usersRequest/requestPreview.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider */ "./components/slider.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\requestPreview.js",
    _this = undefined,
    _s = $RefreshSig$();






var RequestPreview = function RequestPreview() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      input = _useContext.input,
      setCount = _useContext.setCount,
      handleFormSubmit = _useContext.handleFormSubmit;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: input._id == undefined ? handleFormSubmit : function () {
        return setCount();
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sender-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Sender information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "sender",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.sender.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "receiver-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Receiver information"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "receiver",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: input.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "others",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: input.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 35
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 31
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, _this)]
  }, void 0, true);
};

_s(RequestPreview, "pJFk0kNCDeDmjSR51c6p9cCsLjU=");

_c = RequestPreview;
/* harmony default export */ __webpack_exports__["default"] = (RequestPreview);

var _c;

$RefreshReg$(_c, "RequestPreview");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/usersRequest/requestHandler */ "./components/usersRequest/requestHandler.js");
/* harmony import */ var _components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RequestSubmit */ "./components/RequestSubmit.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\request.js",
    _this = undefined,
    _s = $RefreshSig$();






var Request = function Request() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      requestSuccess = _useContext.requestSuccess;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [requestSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestSubmit__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-request",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Request, "3dW2GcoX4A2MrDnlBI4KzUaI1gU=");

_c = Request;
/* harmony default export */ __webpack_exports__["default"] = (Request);

var _c;

$RefreshReg$(_c, "Request");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9hZGRSZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9yZXF1ZXN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdFByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiUmVxdWVzdFN1Ym1pdCIsInJvdXRlciIsInVzZVJvdXRlciIsImJhY2siLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInJlcGxhY2UiLCJ1c2VDb250ZXh0IiwiUmVxdWVzdENvbnRleHQiLCJjbG9zZSIsImNoZWNrTWFyayIsImNyZWF0ZUNvbnRleHQiLCJSZXF1ZXN0Q29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJjYXJ0b25zIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiLCJpdGVtc1dvcnRoIiwicmVjZWl2ZXIiLCJmaXJzdE5hbWUiLCJwaG9uZU51bWJlcjEiLCJwaG9uZU51bWJlcjIiLCJzZW5kZXIiLCJ0YWdOYW1lIiwib3RoZXJJdGVtcyIsIl9pZCIsInVuZGVmaW5lZCIsImZvcm1FcnJvcnMiLCJjcmVhdGVkQXQiLCJyZXF1ZXN0SW1hZ2VzIiwic3RhdHVzIiwiYW1vdW50IiwiaW1nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1cmwiLCJzZXRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInBob3RvQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUZvcm1TdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNsZWFyIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJyZXMiLCJoYW5kbGVSZWNlaXZlciIsIm5ld0lucCIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVudHJpZXMiLCJwYWlyIiwicHV0IiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJjaGlsZHJlbiIsIlNpbXBsZVNsaWRlciIsInNldHRpbmdzIiwiY2xhc3NOYW1lIiwiaW5maW5pdGUiLCJ1c2VDU1MiLCJzbGlkZXNUb1Nob3ciLCJkcmFnZ2FibGUiLCJzcGVlZCIsInBlcm1hbmVudEltYWdlcyIsImxlbmd0aCIsIm1hcCIsInV1aWR2NCIsIkFkZFJlcXVlc3QiLCJvcHRpb25zIiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicGhvdG9Tb3VyY2UiLCJ1cGxvYWQiLCJjaGFuZ2VTdGF0dXMiLCJSZXF1ZXN0SGFuZGxlciIsIlJlcXVlc3RQcmV2aWV3IiwiUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkMscUJBQWlCLENBQUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLG9CQUNPcEksd0RBQVUsQ0FBQ0MsaUZBQUQsQ0FEakI7QUFBQSxNQUNYNEMsY0FEVyxlQUNYQSxjQURXOztBQUdsQixzQkFBUTtBQUFBLGVBQ05BLGNBQWMsaUJBQ1IscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLGVBSUo7QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQSw2QkFDUSxxRUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpJO0FBQUEsa0JBQVI7QUFRRSxDQVhOOztHQUFNdUYsTzs7S0FBQUEsTztBQWFTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXF1ZXN0Ljg3OGY2NTBhNmVjODc1MWFjMzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y2hlY2tNYXJrLCBjbG9zZSB9IGZyb20gXCIuLi9zdmdcIjtcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5jb25zdCBSZXF1ZXN0U3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNldFJlcXVlc3RTdWNjZXNzfT0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbnJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3Rfc3VibWl0dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+U3VjY2Vzczwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+IGJhY2soKX0+e2Nsb3NlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2VkXCI+IHsgY2hlY2tNYXJrKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdF90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIFJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFuIGFkbWluIHdpbGwgY29udGFjdCB5b3Ugc2hvcnRseSwgY2hlY2sgeW91ciB0cmFuc2FjdGlvbiBwYWdlIHRvIGtub3cgdGhlIHN0YXR1cyBvZiB5b3VyIHJlcXVlc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3Rfc3VibWl0XCIgb25DbGljaz17ICgpPT4gYmFjaygpfT48c3Bhbj5Eb25lPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0U3VibWl0OyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAvLyAgICAge3NlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAvLyAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgLy8gICAgIF9pZDogJycsXHJcbiAgICAvLyAgICAgZm9ybUVycm9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAvLyAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICByZWNlaXZlcjoge2ZpcnN0TmFtZTogXCJEYXZpZFwiLCBwaG9uZU51bWJlcjE6IFwiMDcxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTMwNjE0OTE1XCJ9LFxyXG4gICAgICAgIHNlbmRlcjoge2ZpcnN0TmFtZTogXCJtYXlvd2FcIiwgcGhvbmVOdW1iZXIxOiBcIjA4MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODE0MDYxNDYxNVwifSxcclxuICAgICAgICB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIF9pZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIGNvbnN0W2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RJbWFnZXMsIHNldFJlcXVlc3RJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4udXJsLCAuLi51cmxdKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgLy8gfSwgW3VybF0pO1xyXG4gICAgXHJcbiAgICAvLyB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgICAgICBcclxuICAgIC8vIH0sIFt1cmxdKTtcclxuICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgIGNvbnN0IHtzZW5kZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGlkfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgc2VuZGVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7IC4uLmlucHV0LCBzZW5kZXIsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcblxyXG5cclxuY29uc3QgcGhvdG9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgaG9sZCA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKC4uLnRlbXBvcmFyeUltYWdlLCBob2xkKTtcclxuICAgIC8vICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgLy8gICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgIC8vICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgIC8vICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgLy8gICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgLy8gICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgIC8vICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAvLyAgICAgYXdhaXQgc2V0UmVxdWVzdEltYWdlcyhuZXdVcmwpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9yZXF1ZXN0L2NyZWF0ZScsIGZvcm0sIHtcclxuICAgICAgICAgICAgaGVhZGVycyA6IHsnYXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ31cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gJzUwMCcgfHwgJzQwMCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvc2lnbm91dCcpLFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKSxcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICByZXMgJiYgKFxyXG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMgPT0gMjAxICYmIChcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKSxcclxuICAgICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVjZWl2ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY29uc3Qge3JlY2VpdmVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBpZCwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpXHJcbiAgICAgICAgICAgIHJlY2VpdmVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0lucCA9IHsgLi4uaW5wdXQsIHJlY2VpdmVyIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnApO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3RVcGRhdGUgPSBhc3luYyhlLCBpZCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGlmKHJlcXVlc3RJbWFnZXMgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICBmb3IoIGxldCBpbWcgb2YgcmVxdWVzdEltYWdlcyl7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVxdWVzdEltYWdlcycsIGltZylcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB7Y2FydG9ucywgZGVsaXZlcnlMb2NhdGlvbnMsIGRlc2NyaXB0aW9ucywgaXRlbXNXb3J0aCwgb3RoZXJJdGVtcywgdGFnTmFtZSwgcmVjZWl2ZXIsIHNlbmRlciwgc3RhdHVzLCBhbW91bnQgfSA9IHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdjYXJ0b25zJywgY2FydG9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVsaXZlcnlMb2NhdGlvbnMnLCBkZWxpdmVyeUxvY2F0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVzY3JpcHRpb25zJywgZGVzY3JpcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdpdGVtc1dvcnRoJywgaXRlbXNXb3J0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnb3RoZXJJdGVtcycsICBvdGhlckl0ZW1zKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndGFnTmFtZScsICB0YWdOYW1lKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbZmlyc3ROYW1lXScsICByZWNlaXZlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMV0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjJdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMik7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW2ZpcnN0TmFtZV0nLCAgc2VuZGVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMV0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMl0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdhbW91bnQnLCBhbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHBhaXIgb2YgZm9ybS5lbnRyaWVzKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFtwYWlyWzBdKyAnLCcgKyBwYWlyWzFdXSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KCcvcmVxdWVzdC8nICsgaWQsIGZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpZihyZXF1ZXN0SW1hZ2VzICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgZm9yKCBsZXQgaW1nIG9mIHJlcXVlc3RJbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlcXVlc3RJbWFnZXMnLCBpbWcpXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge2NhcnRvbnMsIGRlbGl2ZXJ5TG9jYXRpb25zLCBkZXNjcmlwdGlvbnMsIGl0ZW1zV29ydGgsIG90aGVySXRlbXMsIHRhZ05hbWUsIHJlY2VpdmVyLCBzZW5kZXIsIHN0YXR1cywgYW1vdW50IH0gPSB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnY2FydG9ucycsIGNhcnRvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2RlbGl2ZXJ5TG9jYXRpb25zJywgZGVsaXZlcnlMb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnaXRlbXNXb3J0aCcsIGl0ZW1zV29ydGgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ290aGVySXRlbXMnLCAgb3RoZXJJdGVtcyk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3RhZ05hbWUnLCAgdGFnTmFtZSk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW2ZpcnN0TmFtZV0nLCAgcmVjZWl2ZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjFdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIyXScsICByZWNlaXZlci5waG9uZU51bWJlcjIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltmaXJzdE5hbWVdJywgIHNlbmRlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjFdJywgIHNlbmRlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjJdJywgIHNlbmRlci5waG9uZU51bWJlcjEpOyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnYW1vdW50JywgYW1vdW50KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHBhaXIgb2YgZm9ybS5lbnRyaWVzKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFtwYWlyWzBdKyAnLCcgKyBwYWlyWzFdXSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgc2V0Q291bnQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IFtcclxuICAgICAgICB7Y29udGVudDogXCJjb250YWN0XCIgLCBpY29uOiBjb250YWN0KCksIHRpdGxlOiBcIkNvbnRhY3RcIiwgaWQ6IDEgfSxcclxuICAgICAgICB7Y29udGVudDogXCJnYWxsZXJ5XCIsIGljb246IGdhbGxlcnkoKSwgdGl0bGU6IFwiR2FsbGVyeVwiLCBpZDogMn0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiU2hpcHBpbmdSZXF1ZXN0XCIsIGljb246IG9mZkJhY2soKSwgdGl0bGU6IFwiUmVxdWVzdFwiLCBpZDogM30sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiXCIsIGljb246IG1lc3NhZ2UoKSwgdGl0bGU6IFwiTWVzc2FnZVwiLCBpZDogNH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVxdWVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpbnB1dCwgZXJyb3IsIHJlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2VzcywgaW5pdGlhbFN0YXRlLCBzZXRDb3VudCwgY291bnQsIHNldElucHV0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVJlY2VpdmVyLCBoYW5kbGVDaGVjaywgdGVtcG9yYXJ5SW1hZ2UsIGhhbmRsZUZvcm1TdWJtaXQsIGhhbmRsZUZvcm1QcmV2aWV3LCBwaG90b0NoYW5nZSwgc2VsZWN0b3IsIHNldEV4dHJhY3RlZFJlcXVlc3QsIGV4dHJhY3RlZFJlcXVlc3QsIGNvbnRhY3RzLCBzZXRDb250YWN0cywgaGFuZGxlUmVxdWVzdFVwZGF0ZSwgc2Vzc2lvblRva2VuLCBpc0xvZ2luLCBzZXRpc0xvZ2lufX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1JlcXVlc3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyO1xyXG5cclxuIiwiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKCkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICB1c2VDU1M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwXHJcbiAgfTtcclxuICBjb25zdCB7cGVybWFuZW50SW1hZ2VzfSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgIHtwZXJtYW5lbnRJbWFnZXMubGVuZ3RoID4gMCAmJiBwZXJtYW5lbnRJbWFnZXMubWFwKCh7aW1nfSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30ga2V5PXt1dWlkdjQoKX0vPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgIDwvU2xpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQge3VwbG9hZH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgQWRkUmVxdWVzdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aW5wdXQsIGVycm9yLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVJlY2VpdmVyLCBoYW5kbGVDaGVjaywgdGVtcG9yYXJ5SW1hZ2UsIGhhbmRsZUZvcm1QcmV2aWV3LCBwaG90b0NoYW5nZSwgaGFuZGxlUmVxdWVzdFVwZGF0ZSwgc2V0Q291bnR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c09wdGlvbiwgc2V0U3RhdHVzT3B0aW9uXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7b3B0aW9uczogXCJwZW5kaW5nXCJ9LCBcclxuICAgICAgICB7b3B0aW9uczogXCJwcm9jZXNzaW5nXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcImNhbmNlbGVkXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcIm9uSG9sZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJjb21wbGV0ZWRcIn1cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBwaG90b1NvdXJjZSA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRlbXBvcmFyeUltYWdlICl7XHJcbiAgICAgICAgICAgIHJldHVybig8PiB7dGVtcG9yYXJ5SW1hZ2UubWFwKGltZyA9PiAgPGltZyBzcmM9e2ltZ30ga2V5PXt1dWlkdjQoKX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgcmV0dXJuICg8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPiApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1jaGFuZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJzdGF0dXNcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17aW5wdXQuc3RhdHVzfSBuYW1lPVwic3RhdHVzXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1c09wdGlvbi5tYXAoKHtvcHRpb25zfSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9uc30ga2V5PXt1dWlkdjQoKX0+e29wdGlvbnN9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+QW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYW1vdW50XCIgbmFtZT1cImFtb3VudFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtpbnB1dC5hbW91bnR9IHR5cGU9XCJudW1iZXJcIi8+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnMgfSA9IHsuLi5pbnB1dH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RlbXBvcmFyeUltYWdlID8gcGhvdG9Tb3VyY2UoKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PGRpdj57ZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsgIGlucHV0Ll9pZCA/IChlKT0+IGhhbmRsZVJlcXVlc3RVcGRhdGUoZSwgaW5wdXQuX2lkKSA6IChlKT0+ICBoYW5kbGVGb3JtUHJldmlldyhlKSB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyLWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICA8aDM+U2VuZGVyIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJGaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlICB9IGlkPVwic2VuZGVyRmlyc3ROYW1lXCIgIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17aW5wdXQuc2VuZGVyLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJQaG9uZU51bWJlcjFcIj5QaG9uZSBOdW1iZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwic2VuZGVycGhvbmVOdW1iZXIxXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSAgfSBuYW1lPVwicGhvbmVOdW1iZXIxXCIgdmFsdWU9e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjF9ICBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmVOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5zZW5kZXIucGhvbmVOdW1iZXIxLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kZXJwaG9uZU51bWJlcjJcIj5QaG9uZSBOdW1iZXIgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInNlbmRlcnBob25lTnVtYmVyMlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgfSBuYW1lPVwicGhvbmVOdW1iZXIyXCIgdmFsdWU9e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjJ9ICBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLnBob25lTnVtYmVyMi5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgIDxoMz5SZWNlaXZlciBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInJlY2VpdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlckZpcnN0bmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicmVjZWl2ZXJGaXJzdG5hbWVcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlclBob25lTnVtYmVyMVwiPlBob25lIE51bWJlcjE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJyZWNlaXZlcnBob25lTnVtYmVyMVwiIG9uQ2hhbmdlPXtoYW5kbGVSZWNlaXZlcn0gbmFtZT1cInBob25lTnVtYmVyMVwiIHZhbHVlPXtpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjF9IHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZU51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNlaXZlcnBob25lTnVtYmVyMlwiPlBob25lIE51bWJlciAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJwaG9uZU51bWJlcjJcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIyfSBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmVOdW1iZXIyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIyLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucmVjZWl2ZXIucGhvbmVOdW1iZXIyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ05hbWVcIj5UYWcgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YWdOYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInRhZ05hbWVcIiB2YWx1ZT17aW5wdXQudGFnTmFtZX0gcGxhY2Vob2xkZXI9XCJUYWcgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnRhZ05hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy50YWdOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkNhcnRvbnNcIj5OdW1iZXIgb2YgY2FydG9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIkNhcnRvbnNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiY2FydG9uc1wiIHZhbHVlPXtpbnB1dC5jYXJ0b25zfSBwbGFjZWhvbGRlcj1cIkNhcnRvbnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuY2FydG9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmNhcnRvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJJdGVtc1wiPk90aGVyIEl0ZW1zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJvdGhlckl0ZW1zXCIgb25DaGFuZ2U9e2hhbmRsZUNoZWNrfSBuYW1lPVwib3RoZXJJdGVtc1wiIHZhbHVlPXtpbnB1dC5vdGhlckl0ZW1zfSBwbGFjZWhvbGRlcj1cIm90aGVySXRlbXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMub3RoZXJJdGVtcy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLm90aGVySXRlbXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXRlbXNXb3J0aFwiPkl0ZW1zIFdvcnRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW1zV29ydGhcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiaXRlbXNXb3J0aFwiIHZhbHVlPXtpbnB1dC5pdGVtc1dvcnRofSBwbGFjZWhvbGRlcj1cIml0ZW1zV29ydGhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuaXRlbXNXb3J0aC5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLml0ZW1zV29ydGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlMb2NhdGlvblwiPkRlbGl2ZXJ5IExvY2F0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZWxpdmVyeUxvY2F0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlbGl2ZXJ5TG9jYXRpb25zXCIgdmFsdWU9e2lucHV0LmRlbGl2ZXJ5TG9jYXRpb25zfSAgcGxhY2Vob2xkZXI9XCJkZWxpdmVyeUxvY2F0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZGVsaXZlcnlMb2NhdGlvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI0MFwiIHJvd3M9XCI2XCIgaWQ9XCJkZXNjcmlwdGlvbnNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGVzY3JpcHRpb25zXCIgdmFsdWU9e2lucHV0LmRlc2NyaXB0aW9uc30gIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmRlc2NyaXB0aW9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmRlc2NyaXB0aW9uc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBjaGFuZ2VTdGF0dXMoKVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dC5faWQgPyAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwidXBkYXRlXCIvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4pIDooPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZXF1ZXN0OyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IEFkZFJlcXVlc3QgZnJvbSAnLi9hZGRSZXF1ZXN0JztcclxuaW1wb3J0IFJlcXVlc3RQcmV2aWV3IGZyb20gJy4vcmVxdWVzdFByZXZpZXcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0SGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHtjb3VudH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge2NvdW50ID09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZFJlcXVlc3QgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcXVlc3RQcmV2aWV3IC8+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SGFuZGxlcjsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQge1JlcXVlc3RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2ltcGxlU2xpZGVyIGZyb20gJy4uL3NsaWRlcic7XHJcblxyXG5cclxuY29uc3QgUmVxdWVzdFByZXZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2lucHV0LCBzZXRDb3VudCwgaGFuZGxlRm9ybVN1Ym1pdH0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICAgXHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVTbGlkZXIgLz4gXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aW5wdXQuX2lkID09IHVuZGVmaW5lZCA/ICBoYW5kbGVGb3JtU3VibWl0IDogKCk9PiBzZXRDb3VudCgpfT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlbmRlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnNlbmRlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VpdmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgaW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQucmVjZWl2ZXIuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQudGFnTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5jYXJ0b25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0Lm90aGVySXRlbXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuaXRlbXNXb3J0aH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5kZXNjcmlwdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc3RhdHVzfTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIHsgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRWRpdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pOiAoPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSB9XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQcmV2aWV3OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlcXVlc3RIYW5kbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L3JlcXVlc3RIYW5kbGVyJztcclxuaW1wb3J0IFJlcXVlc3RTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0JztcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3JlcXVlc3RTdWNjZXNzfSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgIHsgcmVxdWVzdFN1Y2Nlc3MgJiYgKFxyXG4gICAgICAgICAgICA8UmVxdWVzdFN1Ym1pdCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidXNlci1yZXF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdEhhbmRsZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9
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
      hold !== undefined && setTemporaryImage.apply(void 0, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage).concat(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(hold))); //   if(filteredImageSize == true ){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0U3VibWl0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9hZGRSZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9yZXF1ZXN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdFByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiUmVxdWVzdFN1Ym1pdCIsInJvdXRlciIsInVzZVJvdXRlciIsImJhY2siLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInJlcGxhY2UiLCJ1c2VDb250ZXh0IiwiUmVxdWVzdENvbnRleHQiLCJjbG9zZSIsImNoZWNrTWFyayIsImNyZWF0ZUNvbnRleHQiLCJSZXF1ZXN0Q29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJjYXJ0b25zIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiLCJpdGVtc1dvcnRoIiwicmVjZWl2ZXIiLCJmaXJzdE5hbWUiLCJwaG9uZU51bWJlcjEiLCJwaG9uZU51bWJlcjIiLCJzZW5kZXIiLCJ0YWdOYW1lIiwib3RoZXJJdGVtcyIsIl9pZCIsInVuZGVmaW5lZCIsImZvcm1FcnJvcnMiLCJjcmVhdGVkQXQiLCJyZXF1ZXN0SW1hZ2VzIiwic3RhdHVzIiwiYW1vdW50IiwiaW1nIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1cmwiLCJzZXRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInBob3RvQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUZvcm1TdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNsZWFyIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJyZXMiLCJoYW5kbGVSZWNlaXZlciIsIm5ld0lucCIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVudHJpZXMiLCJwYWlyIiwicHV0IiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJjaGlsZHJlbiIsIlNpbXBsZVNsaWRlciIsInNldHRpbmdzIiwiY2xhc3NOYW1lIiwiaW5maW5pdGUiLCJ1c2VDU1MiLCJzbGlkZXNUb1Nob3ciLCJkcmFnZ2FibGUiLCJzcGVlZCIsInBlcm1hbmVudEltYWdlcyIsImxlbmd0aCIsIm1hcCIsInV1aWR2NCIsIkFkZFJlcXVlc3QiLCJvcHRpb25zIiwic3RhdHVzT3B0aW9uIiwic2V0U3RhdHVzT3B0aW9uIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicGhvdG9Tb3VyY2UiLCJ1cGxvYWQiLCJjaGFuZ2VTdGF0dXMiLCJSZXF1ZXN0SGFuZGxlciIsIlJlcXVlc3RQcmV2aWV3IiwiUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkMscUJBQWlCLENBQUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxvQkFDT3BJLHdEQUFVLENBQUNDLGlGQUFELENBRGpCO0FBQUEsTUFDWDRDLGNBRFcsZUFDWEEsY0FEVzs7QUFHbEIsc0JBQVE7QUFBQSxlQUNOQSxjQUFjLGlCQUNSLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxlQUlKO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUEsNkJBQ1EscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSTtBQUFBLGtCQUFSO0FBUUUsQ0FYTjs7R0FBTXVGLE87O0tBQUFBLE87QUFhU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4yMzZiZjY4ZTUxNjVmMWY0ZThmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NoZWNrTWFyaywgY2xvc2UgfSBmcm9tIFwiLi4vc3ZnXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuY29uc3QgUmVxdWVzdFN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgICBjb25zdCBiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzZXRSZXF1ZXN0U3VjY2Vzc309IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5yZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdHRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlN1Y2Nlc3M8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PiBiYWNrKCl9PntjbG9zZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tlZFwiPiB7IGNoZWNrTWFyaygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3RfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBSZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbiBhZG1pbiB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHksIGNoZWNrIHlvdXIgdHJhbnNhY3Rpb24gcGFnZSB0byBrbm93IHRoZSBzdGF0dXMgb2YgeW91ciByZXF1ZXN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0X3N1Ym1pdFwiIG9uQ2xpY2s9eyAoKT0+IGJhY2soKX0+PHNwYW4+RG9uZTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFN1Ym1pdDsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgLy8gICAgIHtzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgLy8gICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgYW1vdW50OiAnJyxcclxuICAgIC8vICAgICBfaWQ6ICcnLFxyXG4gICAgLy8gICAgIGZvcm1FcnJvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIjU1XCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwibGFnb3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwidGhhbmsgeW91XCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCI1MDAwXCIsXHJcbiAgICAgICAgcmVjZWl2ZXI6IHtmaXJzdE5hbWU6IFwiRGF2aWRcIiwgcGhvbmVOdW1iZXIxOiBcIjA3MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODEzMDYxNDkxNVwifSxcclxuICAgICAgICBzZW5kZXI6IHtmaXJzdE5hbWU6IFwibWF5b3dhXCIsIHBob25lTnVtYmVyMTogXCIwODEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxNDA2MTQ2MTVcIn0sXHJcbiAgICAgICAgdGFnTmFtZTogXCJjaGlzb21cIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBfaWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnVybCwgLi4udXJsXSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIC8vIH0sIFt1cmxdKTtcclxuICAgIFxyXG4gICAgLy8gdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9LCBbdXJsXSk7XHJcbiAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBjb25zdCB7c2VuZGVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIHNlbmRlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgc2VuZGVyLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG5cclxuXHJcbmNvbnN0IHBob3RvQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgbGV0IGhvbGQgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgIGhvbGQgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZSguLi50ZW1wb3JhcnlJbWFnZSwgLi4uaG9sZCk7XHJcbiAgICAvLyAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgIC8vICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAvLyAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAvLyAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgIC8vICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIC8vICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgIC8vICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAvLyAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgLy8gICAgIGF3YWl0IHNldFJlcXVlc3RJbWFnZXMobmV3VXJsKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVxdWVzdC9jcmVhdGUnLCBmb3JtLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7J2F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzID09IDIwMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyksXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZWNlaXZlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgaWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICByZWNlaXZlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbnAgPSB7IC4uLmlucHV0LCByZWNlaXZlciB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wKTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpZihyZXF1ZXN0SW1hZ2VzICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgZm9yKCBsZXQgaW1nIG9mIHJlcXVlc3RJbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlcXVlc3RJbWFnZXMnLCBpbWcpXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge2NhcnRvbnMsIGRlbGl2ZXJ5TG9jYXRpb25zLCBkZXNjcmlwdGlvbnMsIGl0ZW1zV29ydGgsIG90aGVySXRlbXMsIHRhZ05hbWUsIHJlY2VpdmVyLCBzZW5kZXIsIHN0YXR1cywgYW1vdW50IH0gPSB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnY2FydG9ucycsIGNhcnRvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2RlbGl2ZXJ5TG9jYXRpb25zJywgZGVsaXZlcnlMb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnaXRlbXNXb3J0aCcsIGl0ZW1zV29ydGgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ290aGVySXRlbXMnLCAgb3RoZXJJdGVtcyk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3RhZ05hbWUnLCAgdGFnTmFtZSk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW2ZpcnN0TmFtZV0nLCAgcmVjZWl2ZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjFdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIyXScsICByZWNlaXZlci5waG9uZU51bWJlcjIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltmaXJzdE5hbWVdJywgIHNlbmRlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjFdJywgIHNlbmRlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjJdJywgIHNlbmRlci5waG9uZU51bWJlcjEpOyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnYW1vdW50JywgYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dCgnL3JlcXVlc3QvJyArIGlkLCBmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYocmVxdWVzdEltYWdlcyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIGZvciggbGV0IGltZyBvZiByZXF1ZXN0SW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZXF1ZXN0SW1hZ2VzJywgaW1nKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCBvdGhlckl0ZW1zLCB0YWdOYW1lLCByZWNlaXZlciwgc2VuZGVyLCBzdGF0dXMsIGFtb3VudCB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2NhcnRvbnMnLCBjYXJ0b25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeUxvY2F0aW9ucycsIGRlbGl2ZXJ5TG9jYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbnMnLCBkZXNjcmlwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2l0ZW1zV29ydGgnLCBpdGVtc1dvcnRoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdvdGhlckl0ZW1zJywgIG90aGVySXRlbXMpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd0YWdOYW1lJywgIHRhZ05hbWUpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltmaXJzdE5hbWVdJywgIHJlY2VpdmVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIxXScsICByZWNlaXZlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMl0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbZmlyc3ROYW1lXScsICBzZW5kZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIxXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIyXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ2Ftb3VudCcsIGFtb3VudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiIsImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gJy4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcigpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgdXNlQ1NTOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMFxyXG4gIH07XHJcbiAgY29uc3Qge3Blcm1hbmVudEltYWdlc30gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICB7cGVybWFuZW50SW1hZ2VzLmxlbmd0aCA+IDAgJiYgcGVybWFuZW50SW1hZ2VzLm1hcCgoe2ltZ30pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGtleT17dXVpZHY0KCl9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICA8L1NsaWRlcj5cclxuICApO1xyXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHt1cGxvYWR9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFkZFJlcXVlc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2lucHV0LCBlcnJvciwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNldENvdW50fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtzdGF0dXNPcHRpb24sIHNldFN0YXR1c09wdGlvbl0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge29wdGlvbnM6IFwicGVuZGluZ1wifSwgXHJcbiAgICAgICAge29wdGlvbnM6IFwicHJvY2Vzc2luZ1wifSxcclxuICAgICAgICB7b3B0aW9uczogXCJjYW5jZWxlZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJvbkhvbGRcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwiY29tcGxldGVkXCJ9XHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgcGhvdG9Tb3VyY2UgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0ZW1wb3JhcnlJbWFnZSApe1xyXG4gICAgICAgICAgICByZXR1cm4oPD4ge3RlbXBvcmFyeUltYWdlLm1hcChpbWcgPT4gIDxpbWcgc3JjPXtpbWd9IGtleT17dXVpZHY0KCl9IC8+KX1cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIHJldHVybiAoPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtY2hhbmdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2lucHV0LnN0YXR1c30gbmFtZT1cInN0YXR1c1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb24ubWFwKCh7b3B0aW9uc30pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnN9IGtleT17dXVpZHY0KCl9PntvcHRpb25zfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPkFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFtb3VudFwiIG5hbWU9XCJhbW91bnRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17aW5wdXQuYW1vdW50fSB0eXBlPVwibnVtYmVyXCIvPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzIH0gPSB7Li4uaW5wdXR9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZW1wb3JhcnlJbWFnZSA/IHBob3RvU291cmNlKCkgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxkaXY+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ICBpbnB1dC5faWQgPyAoZSk9PiBoYW5kbGVSZXF1ZXN0VXBkYXRlKGUsIGlucHV0Ll9pZCkgOiAoZSk9PiAgaGFuZGxlRm9ybVByZXZpZXcoZSkgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbmRlciBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyRmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSAgfSBpZD1cInNlbmRlckZpcnN0TmFtZVwiICBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnNlbmRlci5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyUGhvbmVOdW1iZXIxXCI+UGhvbmUgTnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInNlbmRlcnBob25lTnVtYmVyMVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgIH0gbmFtZT1cInBob25lTnVtYmVyMVwiIHZhbHVlPXtpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIxfSAgcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lTnVtYmVyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLnBob25lTnVtYmVyMS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVycGhvbmVOdW1iZXIyXCI+UGhvbmUgTnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzZW5kZXJwaG9uZU51bWJlcjJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlIH0gbmFtZT1cInBob25lTnVtYmVyMlwiIHZhbHVlPXtpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIyfSAgcGxhY2Vob2xkZXI9XCJZb3VyIHBob25lTnVtYmVyMi4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJGaXJzdG5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlY2VpdmVyRmlyc3RuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJQaG9uZU51bWJlcjFcIj5QaG9uZSBOdW1iZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicmVjZWl2ZXJwaG9uZU51bWJlcjFcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJwaG9uZU51bWJlcjFcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIxfSBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmVOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjEubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIj5QaG9uZSBOdW1iZXIgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInJlY2VpdmVycGhvbmVOdW1iZXIyXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwicGhvbmVOdW1iZXIyXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMn0gcGxhY2Vob2xkZXI9XCJZb3VyIHBob25lTnVtYmVyMi4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMi5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YWdOYW1lXCI+VGFnIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFnTmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJ0YWdOYW1lXCIgdmFsdWU9e2lucHV0LnRhZ05hbWV9IHBsYWNlaG9sZGVyPVwiVGFnIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy50YWdOYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMudGFnTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJDYXJ0b25zXCI+TnVtYmVyIG9mIGNhcnRvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJDYXJ0b25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNhcnRvbnNcIiB2YWx1ZT17aW5wdXQuY2FydG9uc30gcGxhY2Vob2xkZXI9XCJDYXJ0b25zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmNhcnRvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5jYXJ0b25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVySXRlbXNcIj5PdGhlciBJdGVtczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwib3RoZXJJdGVtc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGVja30gbmFtZT1cIm90aGVySXRlbXNcIiB2YWx1ZT17aW5wdXQub3RoZXJJdGVtc30gcGxhY2Vob2xkZXI9XCJvdGhlckl0ZW1zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLm90aGVySXRlbXMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5vdGhlckl0ZW1zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIml0ZW1zV29ydGhcIj5JdGVtcyBXb3J0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtc1dvcnRoXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cIml0ZW1zV29ydGhcIiB2YWx1ZT17aW5wdXQuaXRlbXNXb3J0aH0gcGxhY2Vob2xkZXI9XCJpdGVtc1dvcnRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLml0ZW1zV29ydGgubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5pdGVtc1dvcnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5TG9jYXRpb25cIj5EZWxpdmVyeSBMb2NhdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVsaXZlcnlMb2NhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJkZWxpdmVyeUxvY2F0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc30gIHBsYWNlaG9sZGVyPVwiZGVsaXZlcnlMb2NhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNDBcIiByb3dzPVwiNlwiIGlkPVwiZGVzY3JpcHRpb25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlc2NyaXB0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZXNjcmlwdGlvbnN9ICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgY2hhbmdlU3RhdHVzKClcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInVwZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KSA6KDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgQWRkUmVxdWVzdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBBZGRSZXF1ZXN0IGZyb20gJy4vYWRkUmVxdWVzdCc7XHJcbmltcG9ydCBSZXF1ZXN0UHJldmlldyBmcm9tICcuL3JlcXVlc3RQcmV2aWV3JztcclxuXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdEhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7Y291bnR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtjb3VudCA9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRSZXF1ZXN0IC8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0UHJldmlldyAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEhhbmRsZXI7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpbXBsZVNsaWRlciBmcm9tICcuLi9zbGlkZXInO1xyXG5cclxuXHJcbmNvbnN0IFJlcXVlc3RQcmV2aWV3ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtpbnB1dCwgc2V0Q291bnQsIGhhbmRsZUZvcm1TdWJtaXR9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcbiAgIFxyXG5cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2ltcGxlU2xpZGVyIC8+IFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2lucHV0Ll9pZCA9PSB1bmRlZmluZWQgPyAgaGFuZGxlRm9ybVN1Ym1pdCA6ICgpPT4gc2V0Q291bnQoKX0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kZXItY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZW5kZXIgaW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc2VuZGVyLmZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuc2VuZGVyLnBob25lTnVtYmVyMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJlY2VpdmVyIGluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicmVjZWl2ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnJlY2VpdmVyLmZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5yZWNlaXZlci5waG9uZU51bWJlcjF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnRhZ05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuY2FydG9uc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnB1dC5vdGhlckl0ZW1zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0Lml0ZW1zV29ydGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuZGVsaXZlcnlMb2NhdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuZGVzY3JpcHRpb25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2lucHV0LnN0YXR1c308L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5wdXQuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICB7IGlucHV0Ll9pZCA/ICg8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVkaXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTogKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PikgfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UHJldmlldzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZXF1ZXN0SGFuZGxlciBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9yZXF1ZXN0SGFuZGxlcic7XHJcbmltcG9ydCBSZXF1ZXN0U3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVxdWVzdFN1Ym1pdCc7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0JztcclxuXHJcblxyXG5cclxuY29uc3QgUmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtyZXF1ZXN0U3VjY2Vzc30gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICB7IHJlcXVlc3RTdWNjZXNzICYmIChcclxuICAgICAgICAgICAgPFJlcXVlc3RTdWJtaXQgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInVzZXItcmVxdWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RIYW5kbGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
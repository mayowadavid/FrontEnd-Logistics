webpackHotUpdate_N_E("pages/request",{

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
      hold !== undefined && setTemporaryImage.apply(void 0, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage).concat([{
        hold: hold
      }])); //   if(filteredImageSize == true ){
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlciIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyMSIsInBob25lTnVtYmVyMiIsInNlbmRlciIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiX2lkIiwidW5kZWZpbmVkIiwiZm9ybUVycm9ycyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJzdGF0dXMiLCJhbW91bnQiLCJpbWciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJzZXRSZXF1ZXN0SW1hZ2VzIiwiY291bnQiLCJzZXRDb3VudCIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwicmVxdWVzdFZhbGlkYXRlIiwibmV3SW5wdXQiLCJoYW5kbGVDaGVjayIsImNoZWNrZWQiLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsImhvbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVGb3JtU3VibWl0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjbGVhciIsInJlcGxhY2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJwdXQiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImlj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QVMscUdBQTBCLFNBQVMsNEZBQWlCO0FBQy9HLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmO0FBQ0Esb0NBQW9DLDJGQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkZBQWdCO0FBQ3RHLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC5jNTk0ZTdkMjcxNjkwZTZmNzE0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnYWxsZXJ5LCBtZXNzYWdlLCBvZmZCYWNrLCBjb250YWN0fSBmcm9tIFwiLi4vLi4vc3ZnXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+e1xyXG4gICAgLy8gY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgIC8vICAgICB7c2VuZGVyOiB7XHJcbiAgICAvLyAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIC8vICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgIC8vICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgIC8vICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgIGFtb3VudDogJycsXHJcbiAgICAvLyAgICAgX2lkOiAnJyxcclxuICAgIC8vICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIC8vICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgICAgICB7Y2FydG9uczogXCI1NVwiLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiBcImxhZ29zXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zOiBcInRoYW5rIHlvdVwiLFxyXG4gICAgICAgIGl0ZW1zV29ydGg6IFwiNTAwMFwiLFxyXG4gICAgICAgIHJlY2VpdmVyOiB7Zmlyc3ROYW1lOiBcIkRhdmlkXCIsIHBob25lTnVtYmVyMTogXCIwNzEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxMzA2MTQ5MTVcIn0sXHJcbiAgICAgICAgc2VuZGVyOiB7Zmlyc3ROYW1lOiBcIm1heW93YVwiLCBwaG9uZU51bWJlcjE6IFwiMDgxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTQwNjE0NjE1XCJ9LFxyXG4gICAgICAgIHRhZ05hbWU6IFwiY2hpc29tXCIsXHJcbiAgICAgICAgb3RoZXJJdGVtczogZmFsc2UsXHJcbiAgICAgICAgX2lkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICByZWNlaXZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAgICAgICAgIGFtb3VudDogJycsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgY29uc3RbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFsuLi51cmwsIC4uLnVybF0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAvLyB9LCBbdXJsXSk7XHJcbiAgICBcclxuICAgIC8vIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcXVlc3RJbWFnZXMpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gfSwgW3VybF0pO1xyXG4gICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RJbWFnZXMpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXJsKVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgY29uc3Qge3NlbmRlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSwgaWR9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICBzZW5kZXJbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICBjb25zdCBuZXdJbnB1dCA9IHsgLi4uaW5wdXQsIHNlbmRlciwgW25hbWVdOiB2YWx1ZSB9O1xyXG4gICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcbiAgIGNvbnN0IGhhbmRsZUNoZWNrID0gKGUpPT57XHJcbiAgICBjb25zdCB7bmFtZSwgY2hlY2tlZH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IG5ld0lucHV0ID0gey4uLmlucHV0LCBbbmFtZV06IGNoZWNrZWR9O1xyXG4gICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgfSBcclxuXHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoLi4udGVtcG9yYXJ5SW1hZ2UsIHtob2xkfSk7XHJcbiAgICAvLyAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgIC8vICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAvLyAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAvLyAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgIC8vICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgIC8vICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgIC8vICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAvLyAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgLy8gICAgIGF3YWl0IHNldFJlcXVlc3RJbWFnZXMobmV3VXJsKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVxdWVzdC9jcmVhdGUnLCBmb3JtLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7J2F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzID09IDIwMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyksXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZWNlaXZlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgaWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICByZWNlaXZlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbnAgPSB7IC4uLmlucHV0LCByZWNlaXZlciB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wKTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpZihyZXF1ZXN0SW1hZ2VzICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgZm9yKCBsZXQgaW1nIG9mIHJlcXVlc3RJbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlcXVlc3RJbWFnZXMnLCBpbWcpXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge2NhcnRvbnMsIGRlbGl2ZXJ5TG9jYXRpb25zLCBkZXNjcmlwdGlvbnMsIGl0ZW1zV29ydGgsIG90aGVySXRlbXMsIHRhZ05hbWUsIHJlY2VpdmVyLCBzZW5kZXIsIHN0YXR1cywgYW1vdW50IH0gPSB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnY2FydG9ucycsIGNhcnRvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2RlbGl2ZXJ5TG9jYXRpb25zJywgZGVsaXZlcnlMb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnaXRlbXNXb3J0aCcsIGl0ZW1zV29ydGgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ290aGVySXRlbXMnLCAgb3RoZXJJdGVtcyk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3RhZ05hbWUnLCAgdGFnTmFtZSk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW2ZpcnN0TmFtZV0nLCAgcmVjZWl2ZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjFdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIyXScsICByZWNlaXZlci5waG9uZU51bWJlcjIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltmaXJzdE5hbWVdJywgIHNlbmRlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjFdJywgIHNlbmRlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjJdJywgIHNlbmRlci5waG9uZU51bWJlcjEpOyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnYW1vdW50JywgYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dCgnL3JlcXVlc3QvJyArIGlkLCBmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYocmVxdWVzdEltYWdlcyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIGZvciggbGV0IGltZyBvZiByZXF1ZXN0SW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZXF1ZXN0SW1hZ2VzJywgaW1nKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCBvdGhlckl0ZW1zLCB0YWdOYW1lLCByZWNlaXZlciwgc2VuZGVyLCBzdGF0dXMsIGFtb3VudCB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2NhcnRvbnMnLCBjYXJ0b25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeUxvY2F0aW9ucycsIGRlbGl2ZXJ5TG9jYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbnMnLCBkZXNjcmlwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2l0ZW1zV29ydGgnLCBpdGVtc1dvcnRoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdvdGhlckl0ZW1zJywgIG90aGVySXRlbXMpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd0YWdOYW1lJywgIHRhZ05hbWUpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltmaXJzdE5hbWVdJywgIHJlY2VpdmVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIxXScsICByZWNlaXZlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMl0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbZmlyc3ROYW1lXScsICBzZW5kZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIxXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIyXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ2Ftb3VudCcsIGFtb3VudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
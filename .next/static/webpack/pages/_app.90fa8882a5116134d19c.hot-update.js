webpackHotUpdate_N_E("pages/_app",{

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setRequestImages([].concat(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(requestImages), [{
      cloudUrl: url
    }]));
    console.log(url);
  }, [url]); // useEffect ( () => {
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

  console.log(temporaryImage);
  console.log(requestImages);

  var photoChange = function photoChange(e) {
    e.preventDefault();

    if (e.target.files) {
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var perfectSize = filteredImageSize == true && URL.createObjectURL(selected);
      var restructureUrl = {
        imageSource: perfectSize
      };
      perfectSize !== undefined && setTemporaryImage([].concat(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage), [restructureUrl]));

      if (filteredImageSize == true) {
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_10__["store"].ref("requestImages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snap) {
            var newPercentage;
            return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return snap.bytesTransferred / snap.totalBytes;

                  case 2:
                    _context.t0 = _context.sent;
                    newPercentage = _context.t0 * 100;
                    _context.next = 6;
                    return setProgress(newPercentage);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref2 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(err) {
            return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return setError(err);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var newUrl;
          return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return storageRef.getDownloadURL();

                case 2:
                  newUrl = _context3.sent;
                  setUrl([newUrl]);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      }

      URL.revokeObjectURL(selected);
    }
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var token, res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              _context4.next = 4;
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
              res = _context4.sent;
              console.log(res);
              res && res.status == 201 && (console.log(res), setRequestSuccess(true));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleFormSubmit(_x3) {
      return _ref4.apply(this, arguments);
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
    var _ref5 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(e, id) {
      var form, _iterator, _step, img, _input5, cartons, deliveryLocations, descriptions, itemsWorth, otherItems, tagName, receiver, sender, status, amount, _iterator2, _step2, pair, res;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
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

              _context5.next = 23;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put('/request/' + id, form);

            case 23:
              res = _context5.sent;

            case 24:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleRequestUpdate(_x4, _x5) {
      return _ref5.apply(this, arguments);
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
      requestImages: requestImages,
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
    lineNumber: 300,
    columnNumber: 9
  }, _this);
};

_s(RequestContextProvider, "e7HpYC/029MfmfIwIbyUOtgj2DU=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlciIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyMSIsInBob25lTnVtYmVyMiIsInNlbmRlciIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiX2lkIiwidW5kZWZpbmVkIiwiZm9ybUVycm9ycyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJzdGF0dXMiLCJhbW91bnQiLCJpbWciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJzZXRSZXF1ZXN0SW1hZ2VzIiwiY291bnQiLCJzZXRDb3VudCIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwicmVxdWVzdFZhbGlkYXRlIiwibmV3SW5wdXQiLCJoYW5kbGVDaGVjayIsImNoZWNrZWQiLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJjbGVhciIsInJlcGxhY2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDOztBQUVQLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QXNQRCxzQkFBZ0IsRUFBaEJBLGdCQUF0UDtBQUF3UUYsY0FBUSxFQUFSQSxRQUF4UTtBQUFrUkMsaUJBQVcsRUFBWEEsV0FBbFI7QUFBK1JvRix5QkFBbUIsRUFBbkJBLG1CQUEvUjtBQUFvVGpGLGtCQUFZLEVBQVpBLFlBQXBUO0FBQWtVRSxhQUFPLEVBQVBBLE9BQWxVO0FBQTJVQyxnQkFBVSxFQUFWQTtBQUEzVSxLQUFoQztBQUFBLGNBQ0svQixLQUFLLENBQUMwSDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBdFNEOztHQUFNM0gsc0I7VUEyRmFpRCxxRDs7O0tBM0ZiakQsc0I7QUF3U1NBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTBmYTg4ODJhNTExNjEzNGQxOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAvLyAgICAge3NlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAvLyAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgLy8gICAgIF9pZDogJycsXHJcbiAgICAvLyAgICAgZm9ybUVycm9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAvLyAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICByZWNlaXZlcjoge2ZpcnN0TmFtZTogXCJEYXZpZFwiLCBwaG9uZU51bWJlcjE6IFwiMDcxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTMwNjE0OTE1XCJ9LFxyXG4gICAgICAgIHNlbmRlcjoge2ZpcnN0TmFtZTogXCJtYXlvd2FcIiwgcGhvbmVOdW1iZXIxOiBcIjA4MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODE0MDYxNDYxNVwifSxcclxuICAgICAgICB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIF9pZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIGNvbnN0W2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RJbWFnZXMsIHNldFJlcXVlc3RJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4ucmVxdWVzdEltYWdlcywge2Nsb3VkVXJsOiB1cmx9XSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIH0sIFt1cmxdKTtcclxuICAgIFxyXG4gICAgLy8gdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9LCBbdXJsXSk7XHJcbiAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBjb25zdCB7c2VuZGVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIHNlbmRlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgc2VuZGVyLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG4gICBjb25zb2xlLmxvZyh0ZW1wb3JhcnlJbWFnZSk7Y29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgIGxldCBwZXJmZWN0U2l6ZSA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICBsZXQgcmVzdHJ1Y3R1cmVVcmwgPSB7aW1hZ2VTb3VyY2U6IHBlcmZlY3RTaXplfVxyXG4gICAgcGVyZmVjdFNpemUgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShbLi4udGVtcG9yYXJ5SW1hZ2UsIHJlc3RydWN0dXJlVXJsXSk7XHJcbiAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIHNldFVybChbbmV3VXJsIF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVxdWVzdC9jcmVhdGUnLCBmb3JtLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7J2F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzID09IDIwMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyksXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZWNlaXZlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgaWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICByZWNlaXZlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbnAgPSB7IC4uLmlucHV0LCByZWNlaXZlciB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wKTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpZihyZXF1ZXN0SW1hZ2VzICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgZm9yKCBsZXQgaW1nIG9mIHJlcXVlc3RJbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlcXVlc3RJbWFnZXMnLCBpbWcpXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge2NhcnRvbnMsIGRlbGl2ZXJ5TG9jYXRpb25zLCBkZXNjcmlwdGlvbnMsIGl0ZW1zV29ydGgsIG90aGVySXRlbXMsIHRhZ05hbWUsIHJlY2VpdmVyLCBzZW5kZXIsIHN0YXR1cywgYW1vdW50IH0gPSB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnY2FydG9ucycsIGNhcnRvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2RlbGl2ZXJ5TG9jYXRpb25zJywgZGVsaXZlcnlMb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnaXRlbXNXb3J0aCcsIGl0ZW1zV29ydGgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ290aGVySXRlbXMnLCAgb3RoZXJJdGVtcyk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3RhZ05hbWUnLCAgdGFnTmFtZSk7IFxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW2ZpcnN0TmFtZV0nLCAgcmVjZWl2ZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjFdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIyXScsICByZWNlaXZlci5waG9uZU51bWJlcjIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltmaXJzdE5hbWVdJywgIHNlbmRlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjFdJywgIHNlbmRlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3NlbmRlcltwaG9uZU51bWJlcjJdJywgIHNlbmRlci5waG9uZU51bWJlcjEpOyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnYW1vdW50JywgYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dCgnL3JlcXVlc3QvJyArIGlkLCBmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYocmVxdWVzdEltYWdlcyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIGZvciggbGV0IGltZyBvZiByZXF1ZXN0SW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZXF1ZXN0SW1hZ2VzJywgaW1nKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCBvdGhlckl0ZW1zLCB0YWdOYW1lLCByZWNlaXZlciwgc2VuZGVyLCBzdGF0dXMsIGFtb3VudCB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2NhcnRvbnMnLCBjYXJ0b25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeUxvY2F0aW9ucycsIGRlbGl2ZXJ5TG9jYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbnMnLCBkZXNjcmlwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2l0ZW1zV29ydGgnLCBpdGVtc1dvcnRoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdvdGhlckl0ZW1zJywgIG90aGVySXRlbXMpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd0YWdOYW1lJywgIHRhZ05hbWUpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltmaXJzdE5hbWVdJywgIHJlY2VpdmVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIxXScsICByZWNlaXZlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMl0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbZmlyc3ROYW1lXScsICBzZW5kZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIxXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIyXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ2Ftb3VudCcsIGFtb3VudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldEZvcm0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCByZXF1ZXN0SW1hZ2VzLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
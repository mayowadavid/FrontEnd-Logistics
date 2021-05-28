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
    lineNumber: 301,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlciIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyMSIsInBob25lTnVtYmVyMiIsInNlbmRlciIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiX2lkIiwidW5kZWZpbmVkIiwiZm9ybUVycm9ycyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJzdGF0dXMiLCJhbW91bnQiLCJpbWciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJzZXRSZXF1ZXN0SW1hZ2VzIiwiY291bnQiLCJzZXRDb3VudCIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJjbGVhciIsInJlcGxhY2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDOztBQUVQLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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d1FGLGNBQVEsRUFBUkEsUUFBeFE7QUFBa1JDLGlCQUFXLEVBQVhBLFdBQWxSO0FBQStSb0YseUJBQW1CLEVBQW5CQSxtQkFBL1I7QUFBb1RqRixrQkFBWSxFQUFaQSxZQUFwVDtBQUFrVUUsYUFBTyxFQUFQQSxPQUFsVTtBQUEyVUMsZ0JBQVUsRUFBVkE7QUFBM1UsS0FBaEM7QUFBQSxjQUNLL0IsS0FBSyxDQUFDMEg7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXZTRDs7R0FBTTNILHNCO1VBMkZhaUQscUQ7OztLQTNGYmpELHNCO0FBeVNTQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwNDEwMzE2NzE4NzQ0OGUxNWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgLy8gICAgIHtzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgLy8gICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgYW1vdW50OiAnJyxcclxuICAgIC8vICAgICBfaWQ6ICcnLFxyXG4gICAgLy8gICAgIGZvcm1FcnJvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIjU1XCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwibGFnb3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwidGhhbmsgeW91XCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCI1MDAwXCIsXHJcbiAgICAgICAgcmVjZWl2ZXI6IHtmaXJzdE5hbWU6IFwiRGF2aWRcIiwgcGhvbmVOdW1iZXIxOiBcIjA3MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODEzMDYxNDkxNVwifSxcclxuICAgICAgICBzZW5kZXI6IHtmaXJzdE5hbWU6IFwibWF5b3dhXCIsIHBob25lTnVtYmVyMTogXCIwODEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxNDA2MTQ2MTVcIn0sXHJcbiAgICAgICAgdGFnTmFtZTogXCJjaGlzb21cIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBfaWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHtjbG91ZFVybDogdXJsfV0pO1xyXG5cclxuICAgIH0sIFt1cmxdKTtcclxuICAgIFxyXG4gICAgLy8gdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9LCBbdXJsXSk7XHJcbiAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBjb25zdCB7c2VuZGVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIHNlbmRlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgc2VuZGVyLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG4gICBjb25zb2xlLmxvZyh0ZW1wb3JhcnlJbWFnZSk7XHJcbiAgIGNvbnNvbGUubG9nKHJlcXVlc3RJbWFnZXMpO1xyXG5cclxuY29uc3QgcGhvdG9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgbGV0IHJlc3RydWN0dXJlVXJsID0ge2ltYWdlU291cmNlOiBwZXJmZWN0U2l6ZX1cclxuICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHJlcXVlc3RJbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICBzZXRVcmwoW25ld1VybCBdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlcXVlc3QvY3JlYXRlJywgZm9ybSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDogeydhdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSAnNTAwJyB8fCAnNDAwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpLFxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyA9PSAyMDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpLFxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWNlaXZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjb25zdCB7cmVjZWl2ZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGlkLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgcmVjZWl2ZXJbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5wID0geyAuLi5pbnB1dCwgcmVjZWl2ZXIgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYocmVxdWVzdEltYWdlcyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIGZvciggbGV0IGltZyBvZiByZXF1ZXN0SW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZXF1ZXN0SW1hZ2VzJywgaW1nKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCBvdGhlckl0ZW1zLCB0YWdOYW1lLCByZWNlaXZlciwgc2VuZGVyLCBzdGF0dXMsIGFtb3VudCB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2NhcnRvbnMnLCBjYXJ0b25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeUxvY2F0aW9ucycsIGRlbGl2ZXJ5TG9jYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbnMnLCBkZXNjcmlwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2l0ZW1zV29ydGgnLCBpdGVtc1dvcnRoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdvdGhlckl0ZW1zJywgIG90aGVySXRlbXMpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd0YWdOYW1lJywgIHRhZ05hbWUpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltmaXJzdE5hbWVdJywgIHJlY2VpdmVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIxXScsICByZWNlaXZlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMl0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbZmlyc3ROYW1lXScsICBzZW5kZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIxXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIyXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ2Ftb3VudCcsIGFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coW3BhaXJbMF0rICcsJyArIHBhaXJbMV1dKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoJy9yZXF1ZXN0LycgKyBpZCwgZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGlmKHJlcXVlc3RJbWFnZXMgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICBmb3IoIGxldCBpbWcgb2YgcmVxdWVzdEltYWdlcyl7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVxdWVzdEltYWdlcycsIGltZylcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB7Y2FydG9ucywgZGVsaXZlcnlMb2NhdGlvbnMsIGRlc2NyaXB0aW9ucywgaXRlbXNXb3J0aCwgb3RoZXJJdGVtcywgdGFnTmFtZSwgcmVjZWl2ZXIsIHNlbmRlciwgc3RhdHVzLCBhbW91bnQgfSA9IHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdjYXJ0b25zJywgY2FydG9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVsaXZlcnlMb2NhdGlvbnMnLCBkZWxpdmVyeUxvY2F0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVzY3JpcHRpb25zJywgZGVzY3JpcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdpdGVtc1dvcnRoJywgaXRlbXNXb3J0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnb3RoZXJJdGVtcycsICBvdGhlckl0ZW1zKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndGFnTmFtZScsICB0YWdOYW1lKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbZmlyc3ROYW1lXScsICByZWNlaXZlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMV0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjJdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMik7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW2ZpcnN0TmFtZV0nLCAgc2VuZGVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMV0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMl0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdhbW91bnQnLCBhbW91bnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coW3BhaXJbMF0rICcsJyArIHBhaXJbMV1dKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlUmVjZWl2ZXIsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
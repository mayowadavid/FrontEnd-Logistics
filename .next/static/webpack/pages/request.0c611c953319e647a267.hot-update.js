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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (url !== "") {
      setRequestImages([].concat(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(requestImages), [{
        cloudUrl: url
      }]));
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlciIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyMSIsInBob25lTnVtYmVyMiIsInNlbmRlciIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiX2lkIiwidW5kZWZpbmVkIiwiZm9ybUVycm9ycyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJzdGF0dXMiLCJhbW91bnQiLCJpbWciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJzZXRSZXF1ZXN0SW1hZ2VzIiwiY291bnQiLCJzZXRDb3VudCIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJjbGVhciIsInJlcGxhY2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDOztBQUVQLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1DLFlBQVksR0FDZDtBQUFDQyxXQUFPLEVBQUUsSUFBVjtBQUNBQyxxQkFBaUIsRUFBRSxPQURuQjtBQUVBQyxnQkFBWSxFQUFFLFdBRmQ7QUFHQUMsY0FBVSxFQUFFLE1BSFo7QUFJQUMsWUFBUSxFQUFFO0FBQUNDLGVBQVMsRUFBRSxPQUFaO0FBQXFCQyxrQkFBWSxFQUFFLGFBQW5DO0FBQWtEQyxrQkFBWSxFQUFFO0FBQWhFLEtBSlY7QUFLQUMsVUFBTSxFQUFFO0FBQUNILGVBQVMsRUFBRSxRQUFaO0FBQXNCQyxrQkFBWSxFQUFFLGFBQXBDO0FBQW1EQyxrQkFBWSxFQUFFO0FBQWpFLEtBTFI7QUFNQUUsV0FBTyxFQUFFLFFBTlQ7QUFPQUMsY0FBVSxFQUFFLEtBUFo7QUFRQUMsT0FBRyxFQUFFQyxTQVJMO0FBU0FDLGNBQVUsRUFBRTtBQUNSTCxZQUFNLEVBQUU7QUFDQUgsaUJBQVMsRUFBRSxFQURYO0FBRUFDLG9CQUFZLEVBQUUsRUFGZDtBQUdBQyxvQkFBWSxFQUFFO0FBSGQsT0FERjtBQUtOSCxjQUFRLEVBQUU7QUFDRkMsaUJBQVMsRUFBRSxFQURUO0FBRUZDLG9CQUFZLEVBQUUsRUFGWjtBQUdGQyxvQkFBWSxFQUFFO0FBSFosT0FMSjtBQVNOUCxhQUFPLEVBQUUsRUFUSDtBQVVOYyxlQUFTLEVBQUUsRUFWTDtBQVdOYix1QkFBaUIsRUFBRSxFQVhiO0FBWU5DLGtCQUFZLEVBQUUsRUFaUjtBQWFOQyxnQkFBVSxFQUFFLEVBYk47QUFjTk8sZ0JBQVUsRUFBRSxJQWROO0FBZU5LLG1CQUFhLEVBQUUsRUFmVDtBQWdCTkMsWUFBTSxFQUFFLEVBaEJGO0FBaUJOUCxhQUFPLEVBQUUsRUFqQkg7QUFrQk5RLFlBQU0sRUFBRTtBQWxCRix3QkFtQlMsQ0FBQztBQUFDQyxTQUFHLEVBQUUsRUFBTjtBQUNJUCxTQUFHLEVBQUU7QUFEVCxLQUFELENBbkJUO0FBVFYsR0FESjs7QUE3Q3FDLGtCQThFWlEsc0RBQVEsQ0FBQ3BCLFlBQUQsQ0E5RUk7QUFBQSxNQThFL0JxQixLQTlFK0I7QUFBQSxNQThFeEJDLFFBOUV3Qjs7QUFBQSxtQkErRUxGLHNEQUFRLENBQUMsRUFBRCxDQS9FSDtBQUFBLE1BK0U5QkcsUUEvRThCO0FBQUEsTUErRXBCQyxXQS9Fb0I7O0FBQUEsbUJBZ0ZXSixzREFBUSxFQWhGbkI7QUFBQSxNQWdGOUJLLGdCQWhGOEI7QUFBQSxNQWdGWkMsbUJBaEZZOztBQUFBLG1CQWlGR04sc0RBQVEsRUFqRlg7QUFBQSxNQWlGOUJPLFlBakY4QjtBQUFBLE1BaUZoQkMsZUFqRmdCOztBQUFBLG1CQWtGUFIsc0RBQVEsQ0FBQyxLQUFELENBbEZEO0FBQUEsTUFrRjlCUyxPQWxGOEI7QUFBQSxNQWtGckJDLFVBbEZxQjs7QUFBQSxtQkFtRk1WLHNEQUFRLENBQUMsRUFBRCxDQW5GZDtBQUFBLE1BbUYvQlcsY0FuRitCO0FBQUEsTUFtRmZDLGlCQW5GZTs7QUFBQSxtQkFvRktaLHNEQUFRLENBQUMsRUFBRCxDQXBGYjtBQUFBLE1Bb0Y5QkosYUFwRjhCO0FBQUEsTUFvRmZpQixnQkFwRmU7O0FBQUEsbUJBcUZYYixzREFBUSxFQXJGRztBQUFBLE1BcUY5QmMsS0FyRjhCO0FBQUEsTUFxRnZCQyxRQXJGdUI7O0FBQUEsbUJBc0ZiZixzREFBUSxFQXRGSztBQUFBLE1Bc0Y5QmdCLElBdEY4QjtBQUFBLE1Bc0Z4QkMsT0F0RndCOztBQUFBLG9CQXVGT2pCLHNEQUFRLENBQUMsS0FBRCxDQXZGZjtBQUFBLE1BdUY5QmtCLGNBdkY4QjtBQUFBLE1BdUZkQyxpQkF2RmM7O0FBQUEsb0JBd0ZMbkIsc0RBQVEsQ0FBQyxDQUFELENBeEZIO0FBQUEsTUF3RjlCb0IsUUF4RjhCO0FBQUEsTUF3RnBCQyxXQXhGb0I7O0FBQUEsb0JBeUZYckIsc0RBQVEsQ0FBQyxJQUFELENBekZHO0FBQUEsTUF5RjlCc0IsS0F6RjhCO0FBQUEsTUF5RnZCQyxRQXpGdUI7O0FBQUEsb0JBMEZmdkIsc0RBQVEsQ0FBQyxFQUFELENBMUZPO0FBQUEsTUEwRjlCd0IsR0ExRjhCO0FBQUEsTUEwRnpCQyxNQTFGeUI7O0FBMkZyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUcsWUFBTTtBQUNOLFFBQUdKLEdBQUcsS0FBSyxFQUFYLEVBQWM7QUFDdEJYLHNCQUFnQiw0SUFBS2pCLGFBQUwsSUFBb0I7QUFBQ2lDLGdCQUFRLEVBQUVMO0FBQVgsT0FBcEIsR0FBaEI7QUFBc0Q7QUFFekQsR0FKUSxFQUlOLENBQUNBLEdBQUQsQ0FKTSxDQUFULENBN0ZxQyxDQW1HckM7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUlBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QixRQUFHQSxDQUFILEVBQUs7QUFBQSxxQ0FDbUI5QixLQURuQjtBQUFBLFVBQ0taLE1BREwsVUFDS0EsTUFETDs7QUFBQSxzQkFFd0IwQyxDQUFDLENBQUNDLE1BRjFCO0FBQUEsVUFFS0MsSUFGTCxhQUVLQSxJQUZMO0FBQUEsVUFFV0MsS0FGWCxhQUVXQSxLQUZYO0FBQUEsVUFFa0JDLEVBRmxCLGFBRWtCQSxFQUZsQjs7QUFBQSxzQ0FHdUJsQyxLQUh2QjtBQUFBLFVBR0tQLFVBSEwsV0FHS0EsVUFITDs7QUFJRjBDLGlGQUFlLENBQUNELEVBQUQsRUFBS0QsS0FBTCxFQUFZeEMsVUFBWixDQUFmO0FBQ0FMLFlBQU0sQ0FBQzRDLElBQUQsQ0FBTixHQUFlRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBeEI7O0FBQ0EsVUFBTUcsUUFBUSxtQ0FBUXBDLEtBQVI7QUFBZVosY0FBTSxFQUFOQTtBQUFmLFNBQXdCNEMsSUFBeEIsRUFBK0JDLEtBQS9CLEVBQWQ7O0FBQ0EsYUFBT2hDLFFBQVEsQ0FBQ21DLFFBQUQsQ0FBZjtBQUNGO0FBQ0osR0FWRDs7QUFXRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUCxDQUFELEVBQUs7QUFBQSxxQkFDQUEsQ0FBQyxDQUFDQyxNQURGO0FBQUEsUUFDakJDLElBRGlCLGNBQ2pCQSxJQURpQjtBQUFBLFFBQ1hNLE9BRFcsY0FDWEEsT0FEVzs7QUFFeEIsUUFBTUYsUUFBUSxtQ0FBT3BDLEtBQVAseUlBQWVnQyxJQUFmLEVBQXNCTSxPQUF0QixFQUFkOztBQUNBLFdBQU9yQyxRQUFRLENBQUNtQyxRQUFELENBQWY7QUFDQSxHQUpEOztBQUtBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWTlCLGNBQVo7QUFDQTZCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZN0MsYUFBWjs7QUFFSCxNQUFNOEMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1gsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNZLGNBQUY7O0FBQ0QsUUFBR1osQ0FBQyxDQUFDQyxNQUFGLENBQVNZLEtBQVosRUFBa0I7QUFDaEIsVUFBSUMsUUFBUSxHQUFHZCxDQUFDLENBQUNDLE1BQUYsQ0FBU1ksS0FBVCxDQUFlLENBQWYsQ0FBZjtBQUNELFVBQUlFLEtBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxXQUFmLENBQVo7QUFDRCxVQUFJQyxRQUFRLEdBQUdGLFFBQVEsS0FBS3BELFNBQWIsR0FBeUJxRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUgsUUFBUSxDQUFDSSxJQUF4QixDQUF6QixHQUF3RDFCLFFBQVEsQ0FBQyxnREFBRCxDQUEvRTtBQUNHLFVBQUkyQixRQUFRLEdBQUcsU0FBZjtBQUNELFVBQUlDLGlCQUFpQixHQUFFSixRQUFRLElBQUksSUFBWixHQUFtQkYsUUFBUSxDQUFDTyxJQUFULEdBQWdCRixRQUFuQyxHQUE4QzNCLFFBQVEsQ0FBQyw2QkFBRCxDQUE3RTtBQUNBLFVBQUk4QixXQUFXLEdBQUdGLGlCQUFpQixJQUFJLElBQXJCLElBQThCRyxHQUFHLENBQUNDLGVBQUosQ0FBb0JWLFFBQXBCLENBQWhEO0FBQ0QsVUFBSVcsY0FBYyxHQUFHO0FBQUNDLG1CQUFXLEVBQUVKO0FBQWQsT0FBckI7QUFDQUEsaUJBQVcsS0FBSzVELFNBQWhCLElBQTZCbUIsaUJBQWlCLDRJQUFLRCxjQUFMLElBQXFCNkMsY0FBckIsR0FBOUM7O0FBQ0UsVUFBR0wsaUJBQWlCLElBQUksSUFBeEIsRUFBOEI7QUFDOUIsWUFBTU8sVUFBVSxHQUFHQyxnREFBSyxDQUFDQyxHQUFOLHlCQUEyQmYsUUFBUSxDQUFDWixJQUFwQyxFQUFuQjtBQUNFeUIsa0JBQVUsQ0FBQ0csR0FBWCxDQUFlaEIsUUFBZixFQUF5QmlCLEVBQXpCLENBQTRCLGVBQTVCO0FBQUEsOFFBQ0EsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDK0JBLElBQUksQ0FBQ0MsZ0JBQUwsR0FBd0JELElBQUksQ0FBQ0UsVUFENUQ7O0FBQUE7QUFBQTtBQUNRQyxpQ0FEUixpQkFDMEUsR0FEMUU7QUFBQTtBQUFBLDJCQUVNN0MsV0FBVyxDQUFDNkMsYUFBRCxDQUZqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1FBSUksa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ0U1QyxRQUFRLENBQUM0QyxHQUFELENBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtUkFNRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNvQlQsVUFBVSxDQUFDVSxjQUFYLEVBRHBCOztBQUFBO0FBQ0tDLHdCQURMO0FBRUg1Qyx3QkFBTSxDQUFDLENBQUM0QyxNQUFELENBQUQsQ0FBTjs7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5IO0FBVUQ7O0FBQ0ZmLFNBQUcsQ0FBQ2dCLGVBQUosQ0FBb0J6QixRQUFwQjtBQUNBO0FBQ0osR0ExQkQ7O0FBNEJJLE1BQU0wQixnQkFBZ0I7QUFBQSx5UUFBRyxrQkFBT3hDLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCQSxlQUFDLENBQUNZLGNBQUY7QUFDTTZCLG1CQUZlLEdBRVBDLFlBQVksSUFBSUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRlQ7QUFBQTtBQUFBLHFCQUdIQyxzREFBSyxDQUFDQyxJQUFOLENBQVcsaUJBQVgsRUFBOEI1RCxJQUE5QixFQUFvQztBQUNsRDZELHVCQUFPLEVBQUc7QUFBQyxtQ0FBaUJMLEtBQUssb0JBQWFBLEtBQWIsSUFBdUI7QUFBOUM7QUFEd0MsZUFBcEMsV0FFVCxVQUFVbEQsS0FBVixFQUFpQjtBQUN0QixvQkFBSUEsS0FBSyxDQUFDd0QsUUFBVixFQUFvQjtBQUNsQjtBQUNBO0FBQ0F0Qyx5QkFBTyxDQUFDQyxHQUFSLENBQVluQixLQUFLLENBQUN3RCxRQUFOLENBQWVDLElBQTNCO0FBQ0F2Qyx5QkFBTyxDQUFDQyxHQUFSLENBQVluQixLQUFLLENBQUN3RCxRQUFOLENBQWVqRixNQUEzQjtBQUNBMkMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBSyxDQUFDd0QsUUFBTixDQUFlRCxPQUEzQjtBQUNBdkQsdUJBQUssQ0FBQ3dELFFBQU4sQ0FBZWpGLE1BQWYsS0FDRXlCLEtBQUssQ0FBQ3dELFFBQU4sQ0FBZWpGLE1BQWYsSUFBeUIsS0FBekIsSUFBa0MsS0FBSyxLQUNyQzhFLHNEQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFYLEdBQ0FILFlBQVksQ0FBQ08sS0FBYixFQURBLEVBRUF0RCxNQUFNLENBQUN1RCxPQUFQLENBQWUsUUFBZixDQUhnQyxDQURwQztBQU9ELGlCQWJELE1BYU8sSUFBSTNELEtBQUssQ0FBQzRELE9BQVYsRUFBbUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0ExQyx5QkFBTyxDQUFDQyxHQUFSLENBQVluQixLQUFLLENBQUM0RCxPQUFsQjtBQUNELGlCQUxNLE1BS0E7QUFDTDtBQUNBMUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJuQixLQUFLLENBQUM2RCxPQUEzQjtBQUNEOztBQUNEM0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBSyxDQUFDOEQsTUFBbEI7QUFDRCxlQTFCZSxDQUhHOztBQUFBO0FBR2ZDLGlCQUhlO0FBOEJuQjdDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTRDLEdBQVo7QUFDQUEsaUJBQUcsSUFDQ0EsR0FBRyxDQUFDeEYsTUFBSixJQUFjLEdBQWQsS0FDSTJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNEMsR0FBWixHQUNBbEUsaUJBQWlCLENBQUMsSUFBRCxDQUZyQixDQURKOztBQS9CbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJvRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBdUNBLE1BQU1lLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ3ZELENBQUQsRUFBTztBQUUxQixRQUFHQSxDQUFILEVBQUs7QUFBQSxzQ0FDc0I5QixLQUR0QjtBQUFBLFVBQ01oQixRQUROLFdBQ01BLFFBRE47O0FBQUEsdUJBRXlCOEMsQ0FBQyxDQUFDQyxNQUYzQjtBQUFBLFVBRU1DLElBRk4sY0FFTUEsSUFGTjtBQUFBLFVBRVlFLEVBRlosY0FFWUEsRUFGWjtBQUFBLFVBRWdCRCxLQUZoQixjQUVnQkEsS0FGaEI7O0FBQUEsc0NBR3dCakMsS0FIeEI7QUFBQSxVQUdNUCxVQUhOLFdBR01BLFVBSE47O0FBSUQwQyxpRkFBZSxDQUFDRCxFQUFELEVBQUtELEtBQUwsRUFBWXhDLFVBQVosQ0FBZjtBQUNBVCxjQUFRLENBQUNnRCxJQUFELENBQVIsR0FBaUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUExQjs7QUFDQSxVQUFNcUQsTUFBTSxtQ0FBUXRGLEtBQVI7QUFBZWhCLGdCQUFRLEVBQVJBO0FBQWYsUUFBWjs7QUFDQSxhQUFPaUIsUUFBUSxDQUFDcUYsTUFBRCxDQUFmO0FBQ0g7QUFDSixHQVhEOztBQWFBLE1BQU1DLG1CQUFtQjtBQUFBLHlRQUFHLGtCQUFNekQsQ0FBTixFQUFTSSxFQUFUO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJKLGVBQUMsQ0FBQ1ksY0FBRjtBQUNJM0Isa0JBRm9CLEdBRWIsSUFBSXlFLFFBQUosRUFGYTs7QUFHeEIsa0JBQUc3RixhQUFhLEtBQUtILFNBQXJCLEVBQStCO0FBQUEsdURBRVhHLGFBRlc7O0FBQUE7QUFFM0Isc0VBQThCO0FBQXJCRyx1QkFBcUI7QUFDMUJpQix3QkFBSSxDQUFDMEUsTUFBTCxDQUFZLGVBQVosRUFBNkIzRixHQUE3QjtBQUNIO0FBSjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLL0I7O0FBUndCLDBDQVN1R0UsS0FUdkcsR0FTYnBCLE9BVGEsV0FTYkEsT0FUYSxFQVNKQyxpQkFUSSxXQVNKQSxpQkFUSSxFQVNlQyxZQVRmLFdBU2VBLFlBVGYsRUFTNkJDLFVBVDdCLFdBUzZCQSxVQVQ3QixFQVN5Q08sVUFUekMsV0FTeUNBLFVBVHpDLEVBU3FERCxPQVRyRCxXQVNxREEsT0FUckQsRUFTOERMLFFBVDlELFdBUzhEQSxRQVQ5RCxFQVN3RUksTUFUeEUsV0FTd0VBLE1BVHhFLEVBU2dGUSxNQVRoRixXQVNnRkEsTUFUaEYsRUFTd0ZDLE1BVHhGLFdBU3dGQSxNQVR4RjtBQVVoQmtCLGtCQUFJLENBQUMwRSxNQUFMLENBQVksU0FBWixFQUF1QjdHLE9BQXZCO0FBQ0FtQyxrQkFBSSxDQUFDMEUsTUFBTCxDQUFZLG1CQUFaLEVBQWlDNUcsaUJBQWpDO0FBQ0FrQyxrQkFBSSxDQUFDMEUsTUFBTCxDQUFZLGNBQVosRUFBNEIzRyxZQUE1QjtBQUNBaUMsa0JBQUksQ0FBQzBFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCMUcsVUFBMUI7QUFDQWdDLGtCQUFJLENBQUMwRSxNQUFMLENBQVksWUFBWixFQUEyQm5HLFVBQTNCO0FBQ0F5QixrQkFBSSxDQUFDMEUsTUFBTCxDQUFZLFNBQVosRUFBd0JwRyxPQUF4QjtBQUNBMEIsa0JBQUksQ0FBQzBFLE1BQUwsQ0FBWSxxQkFBWixFQUFvQ3pHLFFBQVEsQ0FBQ0MsU0FBN0M7QUFDQThCLGtCQUFJLENBQUMwRSxNQUFMLENBQVksd0JBQVosRUFBdUN6RyxRQUFRLENBQUNFLFlBQWhEO0FBQ0E2QixrQkFBSSxDQUFDMEUsTUFBTCxDQUFZLHdCQUFaLEVBQXVDekcsUUFBUSxDQUFDRyxZQUFoRDtBQUNBNEIsa0JBQUksQ0FBQzBFLE1BQUwsQ0FBWSxtQkFBWixFQUFrQ3JHLE1BQU0sQ0FBQ0gsU0FBekM7QUFDQThCLGtCQUFJLENBQUMwRSxNQUFMLENBQVksc0JBQVosRUFBcUNyRyxNQUFNLENBQUNGLFlBQTVDO0FBQ0E2QixrQkFBSSxDQUFDMEUsTUFBTCxDQUFZLHNCQUFaLEVBQXFDckcsTUFBTSxDQUFDRixZQUE1QztBQUVDYyxtQkFBSyxDQUFDVCxHQUFOLElBQWF3QixJQUFJLENBQUMwRSxNQUFMLENBQVksUUFBWixFQUFzQjdGLE1BQXRCLENBQWI7QUFDQUksbUJBQUssQ0FBQ1QsR0FBTixJQUFhd0IsSUFBSSxDQUFDMEUsTUFBTCxDQUFZLFFBQVosRUFBc0I1RixNQUF0QixDQUFiO0FBQ0RtQixxQkFBTyxDQUFDRCxJQUFELENBQVA7QUF6QmdCLHNEQTJCQUEsSUFBSSxDQUFDMkUsT0FBTCxFQTNCQTs7QUFBQTtBQTJCaEIsdUVBQStCO0FBQXZCQyxzQkFBdUI7QUFDM0JwRCx5QkFBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ21ELElBQUksQ0FBQyxDQUFELENBQUosR0FBUyxHQUFULEdBQWVBLElBQUksQ0FBQyxDQUFELENBQXBCLENBQVo7QUFDTDtBQTdCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQThCTmpCLHNEQUFLLENBQUNkLEdBQU4sQ0FBVSxjQUFjMUIsRUFBeEIsRUFBNEJuQixJQUE1QixDQTlCTTs7QUFBQTtBQThCbEJxRSxpQkE5QmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CRyxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBaUNBLE1BQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQzlELENBQUQsRUFBTztBQUM3QkEsS0FBQyxDQUFDWSxjQUFGO0FBQ0EsUUFBSTNCLElBQUksR0FBRyxJQUFJeUUsUUFBSixFQUFYOztBQUNBLFFBQUc3RixhQUFhLEtBQUtILFNBQXJCLEVBQStCO0FBQUEsa0RBRVhHLGFBRlc7QUFBQTs7QUFBQTtBQUUzQiwrREFBOEI7QUFBQSxjQUFyQkcsR0FBcUI7QUFDMUJpQixjQUFJLENBQUMwRSxNQUFMLENBQVksZUFBWixFQUE2QjNGLEdBQTdCO0FBQ0g7QUFKMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUsvQjs7QUFSNkIsb0NBU2tHRSxLQVRsRztBQUFBLFFBU2xCcEIsT0FUa0IsV0FTbEJBLE9BVGtCO0FBQUEsUUFTVEMsaUJBVFMsV0FTVEEsaUJBVFM7QUFBQSxRQVNVQyxZQVRWLFdBU1VBLFlBVFY7QUFBQSxRQVN3QkMsVUFUeEIsV0FTd0JBLFVBVHhCO0FBQUEsUUFTb0NPLFVBVHBDLFdBU29DQSxVQVRwQztBQUFBLFFBU2dERCxPQVRoRCxXQVNnREEsT0FUaEQ7QUFBQSxRQVN5REwsUUFUekQsV0FTeURBLFFBVHpEO0FBQUEsUUFTbUVJLE1BVG5FLFdBU21FQSxNQVRuRTtBQUFBLFFBUzJFUSxNQVQzRSxXQVMyRUEsTUFUM0U7QUFBQSxRQVNtRkMsTUFUbkYsV0FTbUZBLE1BVG5GOztBQVVyQmtCLFFBQUksQ0FBQzBFLE1BQUwsQ0FBWSxTQUFaLEVBQXVCN0csT0FBdkI7QUFDQW1DLFFBQUksQ0FBQzBFLE1BQUwsQ0FBWSxtQkFBWixFQUFpQzVHLGlCQUFqQztBQUNBa0MsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLGNBQVosRUFBNEIzRyxZQUE1QjtBQUNBaUMsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLFlBQVosRUFBMEIxRyxVQUExQjtBQUNBZ0MsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLFlBQVosRUFBMkJuRyxVQUEzQjtBQUNBeUIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLFNBQVosRUFBd0JwRyxPQUF4QjtBQUNBMEIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLHFCQUFaLEVBQW9DekcsUUFBUSxDQUFDQyxTQUE3QztBQUNBOEIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLHdCQUFaLEVBQXVDekcsUUFBUSxDQUFDRSxZQUFoRDtBQUNBNkIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLHdCQUFaLEVBQXVDekcsUUFBUSxDQUFDRyxZQUFoRDtBQUNBNEIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLG1CQUFaLEVBQWtDckcsTUFBTSxDQUFDSCxTQUF6QztBQUNBOEIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLHNCQUFaLEVBQXFDckcsTUFBTSxDQUFDRixZQUE1QztBQUNBNkIsUUFBSSxDQUFDMEUsTUFBTCxDQUFZLHNCQUFaLEVBQXFDckcsTUFBTSxDQUFDRixZQUE1QztBQUVDYyxTQUFLLENBQUNULEdBQU4sSUFBYXdCLElBQUksQ0FBQzBFLE1BQUwsQ0FBWSxRQUFaLEVBQXNCN0YsTUFBdEIsQ0FBYjtBQUNBSSxTQUFLLENBQUNULEdBQU4sSUFBYXdCLElBQUksQ0FBQzBFLE1BQUwsQ0FBWSxRQUFaLEVBQXNCNUYsTUFBdEIsQ0FBYjtBQUdEbUIsV0FBTyxDQUFDRCxJQUFELENBQVA7O0FBM0JxQixnREE2QkxBLElBQUksQ0FBQzJFLE9BQUwsRUE3Qks7QUFBQTs7QUFBQTtBQTZCckIsNkRBQStCO0FBQUEsWUFBdkJDLElBQXVCO0FBQzNCcEQsZUFBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ21ELElBQUksQ0FBQyxDQUFELENBQUosR0FBUyxHQUFULEdBQWVBLElBQUksQ0FBQyxDQUFELENBQXBCLENBQVo7QUFDTDtBQS9Cc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQzdCN0UsWUFBUSxDQUFDLFFBQUQsQ0FBUjtBQUNILEdBakNEOztBQXVDQSxNQUFNK0UsUUFBUSxHQUFHLENBQ2I7QUFBQ0MsV0FBTyxFQUFFLFNBQVY7QUFBc0JDLFFBQUksRUFBRUMsb0RBQU8sRUFBbkM7QUFBdUNDLFNBQUssRUFBRSxTQUE5QztBQUF5RC9ELE1BQUUsRUFBRTtBQUE3RCxHQURhLEVBRWI7QUFBQzRELFdBQU8sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUVHLG9EQUFPLEVBQWxDO0FBQXNDRCxTQUFLLEVBQUUsU0FBN0M7QUFBd0QvRCxNQUFFLEVBQUU7QUFBNUQsR0FGYSxFQUdiO0FBQUM0RCxXQUFPLEVBQUUsaUJBQVY7QUFBNkJDLFFBQUksRUFBRUksb0RBQU8sRUFBMUM7QUFBOENGLFNBQUssRUFBRSxTQUFyRDtBQUFnRS9ELE1BQUUsRUFBRTtBQUFwRSxHQUhhLEVBSWI7QUFBQzRELFdBQU8sRUFBRSxFQUFWO0FBQWNDLFFBQUksRUFBRWIsb0RBQU8sRUFBM0I7QUFBK0JlLFNBQUssRUFBRSxTQUF0QztBQUFpRC9ELE1BQUUsRUFBRTtBQUFyRCxHQUphLENBQWpCO0FBUUEsc0JBQ0kscUVBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBQ2xDLFdBQUssRUFBTEEsS0FBRDtBQUFRcUIsV0FBSyxFQUFMQSxLQUFSO0FBQWUxQixtQkFBYSxFQUFiQSxhQUFmO0FBQThCc0Isb0JBQWMsRUFBZEEsY0FBOUI7QUFBOENDLHVCQUFpQixFQUFqQkEsaUJBQTlDO0FBQWlFdkMsa0JBQVksRUFBWkEsWUFBakU7QUFBK0VtQyxjQUFRLEVBQVJBLFFBQS9FO0FBQXlGRCxXQUFLLEVBQUxBLEtBQXpGO0FBQWdHWixjQUFRLEVBQVJBLFFBQWhHO0FBQTBHNEIsa0JBQVksRUFBWkEsWUFBMUc7QUFBd0h3RCxvQkFBYyxFQUFkQSxjQUF4SDtBQUF3SWhELGlCQUFXLEVBQVhBLFdBQXhJO0FBQXFKM0Isb0JBQWMsRUFBZEEsY0FBcko7QUFBcUs0RCxzQkFBZ0IsRUFBaEJBLGdCQUFySztBQUF1THNCLHVCQUFpQixFQUFqQkEsaUJBQXZMO0FBQTBNbkQsaUJBQVcsRUFBWEEsV0FBMU07QUFBdU5vRCxjQUFRLEVBQVJBLFFBQXZOO0FBQWlPeEYseUJBQW1CLEVBQW5CQSxtQkFBak87QUFBc1BELHNCQUFnQixFQUFoQkEsZ0JBQXRQO0FBQXdRRixjQUFRLEVBQVJBLFFBQXhRO0FBQWtSQyxpQkFBVyxFQUFYQSxXQUFsUjtBQUErUm9GLHlCQUFtQixFQUFuQkEsbUJBQS9SO0FBQW9UakYsa0JBQVksRUFBWkEsWUFBcFQ7QUFBa1VFLGFBQU8sRUFBUEEsT0FBbFU7QUFBMlVDLGdCQUFVLEVBQVZBO0FBQTNVLEtBQWhDO0FBQUEsY0FDSy9CLEtBQUssQ0FBQzBIO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F2U0Q7O0dBQU0zSCxzQjtVQTJGYWlELHFEOzs7S0EzRmJqRCxzQjtBQXlTU0EscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4wYzYxMWM5NTMzMTllNjQ3YTI2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnYWxsZXJ5LCBtZXNzYWdlLCBvZmZCYWNrLCBjb250YWN0fSBmcm9tIFwiLi4vLi4vc3ZnXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+e1xyXG4gICAgLy8gY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgIC8vICAgICB7c2VuZGVyOiB7XHJcbiAgICAvLyAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIC8vICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgIC8vICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgIC8vICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgIGFtb3VudDogJycsXHJcbiAgICAvLyAgICAgX2lkOiAnJyxcclxuICAgIC8vICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2VuZGVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIC8vICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgICAgICB7Y2FydG9uczogXCI1NVwiLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiBcImxhZ29zXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zOiBcInRoYW5rIHlvdVwiLFxyXG4gICAgICAgIGl0ZW1zV29ydGg6IFwiNTAwMFwiLFxyXG4gICAgICAgIHJlY2VpdmVyOiB7Zmlyc3ROYW1lOiBcIkRhdmlkXCIsIHBob25lTnVtYmVyMTogXCIwNzEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxMzA2MTQ5MTVcIn0sXHJcbiAgICAgICAgc2VuZGVyOiB7Zmlyc3ROYW1lOiBcIm1heW93YVwiLCBwaG9uZU51bWJlcjE6IFwiMDgxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTQwNjE0NjE1XCJ9LFxyXG4gICAgICAgIHRhZ05hbWU6IFwiY2hpc29tXCIsXHJcbiAgICAgICAgb3RoZXJJdGVtczogZmFsc2UsXHJcbiAgICAgICAgX2lkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgICAgICByZWNlaXZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAgICAgICAgIGFtb3VudDogJycsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgY29uc3RbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwgIT09IFwiXCIpe1xyXG4gICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHtjbG91ZFVybDogdXJsfV0pfVxyXG5cclxuICAgIH0sIFt1cmxdKTtcclxuICAgIFxyXG4gICAgLy8gdXNlRWZmZWN0ICggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9LCBbdXJsXSk7XHJcbiAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBjb25zdCB7c2VuZGVyfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIHNlbmRlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgc2VuZGVyLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG4gICBjb25zb2xlLmxvZyh0ZW1wb3JhcnlJbWFnZSk7XHJcbiAgIGNvbnNvbGUubG9nKHJlcXVlc3RJbWFnZXMpO1xyXG5cclxuY29uc3QgcGhvdG9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgbGV0IHJlc3RydWN0dXJlVXJsID0ge2ltYWdlU291cmNlOiBwZXJmZWN0U2l6ZX1cclxuICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHJlcXVlc3RJbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICBzZXRVcmwoW25ld1VybCBdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3JlcXVlc3QvY3JlYXRlJywgZm9ybSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzIDogeydhdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSAnNTAwJyB8fCAnNDAwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpLFxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyA9PSAyMDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpLFxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWNlaXZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjb25zdCB7cmVjZWl2ZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGlkLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycylcclxuICAgICAgICAgICAgcmVjZWl2ZXJbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5wID0geyAuLi5pbnB1dCwgcmVjZWl2ZXIgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYocmVxdWVzdEltYWdlcyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgIGZvciggbGV0IGltZyBvZiByZXF1ZXN0SW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZXF1ZXN0SW1hZ2VzJywgaW1nKVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCBvdGhlckl0ZW1zLCB0YWdOYW1lLCByZWNlaXZlciwgc2VuZGVyLCBzdGF0dXMsIGFtb3VudCB9ID0gey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2NhcnRvbnMnLCBjYXJ0b25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeUxvY2F0aW9ucycsIGRlbGl2ZXJ5TG9jYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdkZXNjcmlwdGlvbnMnLCBkZXNjcmlwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ2l0ZW1zV29ydGgnLCBpdGVtc1dvcnRoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdvdGhlckl0ZW1zJywgIG90aGVySXRlbXMpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCd0YWdOYW1lJywgIHRhZ05hbWUpOyBcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltmaXJzdE5hbWVdJywgIHJlY2VpdmVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbcGhvbmVOdW1iZXIxXScsICByZWNlaXZlci5waG9uZU51bWJlcjEpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMl0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIyKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbZmlyc3ROYW1lXScsICBzZW5kZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIxXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdzZW5kZXJbcGhvbmVOdW1iZXIyXScsICBzZW5kZXIucGhvbmVOdW1iZXIxKTsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlucHV0Ll9pZCAmJiBmb3JtLmFwcGVuZCgnc3RhdHVzJywgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ2Ftb3VudCcsIGFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coW3BhaXJbMF0rICcsJyArIHBhaXJbMV1dKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoJy9yZXF1ZXN0LycgKyBpZCwgZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGlmKHJlcXVlc3RJbWFnZXMgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICBmb3IoIGxldCBpbWcgb2YgcmVxdWVzdEltYWdlcyl7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVxdWVzdEltYWdlcycsIGltZylcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB7Y2FydG9ucywgZGVsaXZlcnlMb2NhdGlvbnMsIGRlc2NyaXB0aW9ucywgaXRlbXNXb3J0aCwgb3RoZXJJdGVtcywgdGFnTmFtZSwgcmVjZWl2ZXIsIHNlbmRlciwgc3RhdHVzLCBhbW91bnQgfSA9IHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdjYXJ0b25zJywgY2FydG9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVsaXZlcnlMb2NhdGlvbnMnLCBkZWxpdmVyeUxvY2F0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnZGVzY3JpcHRpb25zJywgZGVzY3JpcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdpdGVtc1dvcnRoJywgaXRlbXNXb3J0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnb3RoZXJJdGVtcycsICBvdGhlckl0ZW1zKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgndGFnTmFtZScsICB0YWdOYW1lKTsgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgncmVjZWl2ZXJbZmlyc3ROYW1lXScsICByZWNlaXZlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJ3JlY2VpdmVyW3Bob25lTnVtYmVyMV0nLCAgcmVjZWl2ZXIucGhvbmVOdW1iZXIxKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKCdyZWNlaXZlcltwaG9uZU51bWJlcjJdJywgIHJlY2VpdmVyLnBob25lTnVtYmVyMik7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW2ZpcnN0TmFtZV0nLCAgc2VuZGVyLmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMV0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZCgnc2VuZGVyW3Bob25lTnVtYmVyMl0nLCAgc2VuZGVyLnBob25lTnVtYmVyMSk7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgZm9ybS5hcHBlbmQoJ3N0YXR1cycsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgaW5wdXQuX2lkICYmIGZvcm0uYXBwZW5kKCdhbW91bnQnLCBhbW91bnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coW3BhaXJbMF0rICcsJyArIHBhaXJbMV1dKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlUmVjZWl2ZXIsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
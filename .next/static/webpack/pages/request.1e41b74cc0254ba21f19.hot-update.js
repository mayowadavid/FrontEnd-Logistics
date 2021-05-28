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
    if (url == "") {
      setRequestImages([]);
    } else {
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
      var res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              setInput.apply(void 0, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(input).concat([requestImages]));
              _context5.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put('/request/' + id, input);

            case 4:
              res = _context5.sent;

            case 5:
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
    setInput.apply(void 0, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(input).concat([requestImages]));
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
    lineNumber: 248,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlciIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyMSIsInBob25lTnVtYmVyMiIsInNlbmRlciIsInRhZ05hbWUiLCJvdGhlckl0ZW1zIiwiX2lkIiwidW5kZWZpbmVkIiwiZm9ybUVycm9ycyIsImNyZWF0ZWRBdCIsInJlcXVlc3RJbWFnZXMiLCJzdGF0dXMiLCJhbW91bnQiLCJpbWciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZXh0cmFjdGVkUmVxdWVzdCIsInNldEV4dHJhY3RlZFJlcXVlc3QiLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJzZXRSZXF1ZXN0SW1hZ2VzIiwiY291bnQiLCJzZXRDb3VudCIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJlcnJvciIsInNldEVycm9yIiwidXJsIiwic2V0VXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2xvdWRVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJwaG90b0NoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsInBlcmZlY3RTaXplIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVzdHJ1Y3R1cmVVcmwiLCJpbWFnZVNvdXJjZSIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJjbGVhciIsInJlcGxhY2UiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImhhbmRsZVJlY2VpdmVyIiwibmV3SW5wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsImhhbmRsZUZvcm1QcmV2aWV3Iiwic2VsZWN0b3IiLCJjb250ZW50IiwiaWNvbiIsImNvbnRhY3QiLCJ0aXRsZSIsImdhbGxlcnkiLCJvZmZCYWNrIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsRUFBcEM7O0FBRVAsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LjFlNDFiNzRjYzAyNTRiYTIxZjE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcbiAgICAvLyBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgLy8gICAgIHtzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgY2FydG9uczogJycsXHJcbiAgICAvLyAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgIC8vICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgIHJlcXVlc3RJbWFnZXM6IFt7aW1nOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgX2lkOiAnJ31dLFxyXG4gICAgLy8gICAgIHN0YXR1czogJycsXHJcbiAgICAvLyAgICAgdGFnTmFtZTogJycsXHJcbiAgICAvLyAgICAgYW1vdW50OiAnJyxcclxuICAgIC8vICAgICBfaWQ6ICcnLFxyXG4gICAgLy8gICAgIGZvcm1FcnJvcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZW5kZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIjU1XCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwibGFnb3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwidGhhbmsgeW91XCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCI1MDAwXCIsXHJcbiAgICAgICAgcmVjZWl2ZXI6IHtmaXJzdE5hbWU6IFwiRGF2aWRcIiwgcGhvbmVOdW1iZXIxOiBcIjA3MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODEzMDYxNDkxNVwifSxcclxuICAgICAgICBzZW5kZXI6IHtmaXJzdE5hbWU6IFwibWF5b3dhXCIsIHBob25lTnVtYmVyMTogXCIwODEzMDYxNDYxNVwiLCBwaG9uZU51bWJlcjI6IFwiMDgxNDA2MTQ2MTVcIn0sXHJcbiAgICAgICAgdGFnTmFtZTogXCJjaGlzb21cIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBfaWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAgICAgICAgIHJlY2VpdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbWFnZXM6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJyxcclxuICAgICAgICAgICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogJyd9XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHVybCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFtdKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFsuLi5yZXF1ZXN0SW1hZ2VzLCB7Y2xvdWRVcmw6IHVybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSwgW3VybF0pO1xyXG4gICAgXHJcbiAgICAvLyB1c2VFZmZlY3QgKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgICAgICBcclxuICAgIC8vIH0sIFt1cmxdKTtcclxuICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgIGNvbnN0IHtzZW5kZXJ9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGlkfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgc2VuZGVyW25hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7IC4uLmlucHV0LCBzZW5kZXIsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcbiAgIGNvbnNvbGUubG9nKHRlbXBvcmFyeUltYWdlKTtcclxuICAgY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgIGxldCBwZXJmZWN0U2l6ZSA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICBsZXQgcmVzdHJ1Y3R1cmVVcmwgPSB7aW1hZ2VTb3VyY2U6IHBlcmZlY3RTaXplfVxyXG4gICAgcGVyZmVjdFNpemUgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShbLi4udGVtcG9yYXJ5SW1hZ2UsIHJlc3RydWN0dXJlVXJsXSk7XHJcbiAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIHNldFVybChbbmV3VXJsIF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVxdWVzdC9jcmVhdGUnLCBmb3JtLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7J2F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzID09IDIwMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyksXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZWNlaXZlcn0gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgaWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICByZWNlaXZlcltuYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbnAgPSB7IC4uLmlucHV0LCByZWNlaXZlciB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wKTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCguLi5pbnB1dCwgcmVxdWVzdEltYWdlcyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KCcvcmVxdWVzdC8nICsgaWQsIGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoLi4uaW5wdXQsIHJlcXVlc3RJbWFnZXMpO1xyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCByZXF1ZXN0SW1hZ2VzLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
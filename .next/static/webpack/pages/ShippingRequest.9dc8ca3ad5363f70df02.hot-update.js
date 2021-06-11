webpackHotUpdate_N_E("pages/ShippingRequest",{

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
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");






var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







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
    receiverFirstName: 'mayowa',
    receiverPhoneNumber1: '08087536643',
    receiverPhoneNumber2: '08130614615',
    requestImages: [],
    senderFirstName: 'jony',
    senderPhoneNumber1: '08130614615',
    senderPhoneNumber2: '08130614615',
    tagName: "chisom",
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
  }; // const initialState =
  // {cartons: "55",
  // deliveryLocations: "lagos",
  // descriptions: "thank you",
  // itemsWorth: "5000",
  // receiver: {firstName: "David", phoneNumber1: "07130614615", phoneNumber2: "08130614915"},
  // sender: {firstName: "mayowa", phoneNumber1: "08130614615", phoneNumber2: "08140614615"},
  // tagName: "chisom",
  // otherItems: false,
  // _id: undefined,
  // formErrors: {
  //     sender: {
  //             firstName: '',
  //             phoneNumber1: '',
  //             phoneNumber2: '' },
  //     receiver: {
  //             firstName: '',
  //             phoneNumber1: '',
  //             phoneNumber2: '' },
  //     cartons: '',
  //     createdAt: '',
  //     deliveryLocations: '',
  //     descriptions: '',
  //     itemsWorth: '',
  //     otherItems: true,
  //     requestImages: '',
  //     status: '',
  //     tagName: '',
  //     amount: '',
  //     requestImages: [{img: ''}],
  //     }
  // };

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState13[0],
      setLoading = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      userId = _useState14[0],
      setUserId = _useState14[1];

  var handleChange = function handleChange(e) {
    if (e) {
      e.preventDefault();
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          id = _e$target.id;

      var _input = _objectSpread({}, input),
          formErrors = _input.formErrors;

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_8__["requestValidate"])(id, value, formErrors);

      var newInput = _objectSpread(_objectSpread({}, input), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));

      return setInput(newInput);
    }
  };

  var handleCheck = function handleCheck(e) {
    var _e$target2 = e.target,
        name = _e$target2.name,
        checked = _e$target2.checked;

    var newInput = _objectSpread(_objectSpread({}, input), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, checked));

    return setInput(newInput);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    progress == 100 && setLoading(false);
    setProgress(0);
  }, [progress]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_10__["auth"].onAuthStateChanged(function (user) {
      user !== null;
      setUserId(user.uid);
    });
  }, []);

  var photoChange = function photoChange(e) {
    e.preventDefault();

    if (e.target.files) {
      progress !== 100 && setLoading(true);
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var perfectSize = filteredImageSize == true && URL.createObjectURL(selected);
      var restructureUrl = {
        imageSource: perfectSize
      };
      perfectSize !== undefined && setTemporaryImage([].concat(Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage), [restructureUrl]));

      if (filteredImageSize == true) {
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_10__["store"].ref("requestImages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snap) {
            var newPercentage;
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
          var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(err) {
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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
        }(), /*#__PURE__*/Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var cloudUrl;
          return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return storageRef.getDownloadURL();

                case 2:
                  cloudUrl = _context3.sent;
                  setRequestImages([].concat(Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(requestImages), [{
                    cloudUrl: cloudUrl
                  }]));

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

  console.log(requestImages);

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var cartons, deliveryLocations, descriptions, itemsWorth, receiverFirstName, receiverPhoneNumber1, receiverPhoneNumber2, requestImages, senderFirstName, senderPhoneNumber1, senderPhoneNumber2, tagName, otherItems;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              cartons = input.cartons, deliveryLocations = input.deliveryLocations, descriptions = input.descriptions, itemsWorth = input.itemsWorth, receiverFirstName = input.receiverFirstName, receiverPhoneNumber1 = input.receiverPhoneNumber1, receiverPhoneNumber2 = input.receiverPhoneNumber2, requestImages = input.requestImages, senderFirstName = input.senderFirstName, senderPhoneNumber1 = input.senderPhoneNumber1, senderPhoneNumber2 = input.senderPhoneNumber2, tagName = input.tagName, otherItems = input.otherItems;
              userId !== null && _firebase__WEBPACK_IMPORTED_MODULE_10__["database"].collection('Requests').add({
                userId: userId,
                cartons: cartons,
                deliveryLocations: deliveryLocations,
                descriptions: descriptions,
                itemsWorth: itemsWorth,
                receiverFirstName: receiverFirstName,
                receiverPhoneNumber1: receiverPhoneNumber1,
                receiverPhoneNumber2: receiverPhoneNumber2,
                requestImages: requestImages,
                senderFirstName: senderFirstName,
                senderPhoneNumber1: senderPhoneNumber1,
                senderPhoneNumber2: senderPhoneNumber2,
                tagName: tagName,
                otherItems: otherItems,
                createdAt: Object(_firebase__WEBPACK_IMPORTED_MODULE_10__["timestamp"])()
              }).then(function (data) {
                data && setRequestSuccess(true);
              })["catch"](function (error) {
                setError(error);
              });

            case 3:
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

  var handleRequestUpdate = /*#__PURE__*/function () {
    var _ref5 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(e, id) {
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              setInput.apply(void 0, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(input).concat([requestImages]));

            case 2:
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
    setInput(_objectSpread(_objectSpread({}, input), {}, {
      requestImages: requestImages
    }));
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
      loading: loading,
      setRequestImages: setRequestImages,
      requestImages: requestImages,
      requestSuccess: requestSuccess,
      setRequestSuccess: setRequestSuccess,
      initialState: initialState,
      setCount: setCount,
      count: count,
      setInput: setInput,
      handleChange: handleChange,
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
    lineNumber: 249,
    columnNumber: 9
  }, _this);
};

_s(RequestContextProvider, "uHhN6iZ9mZDkpz/Iqelw2a5YJ4E=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiYW1vdW50IiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwicGhvdG9DaGFuZ2UiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwicGVyZmVjdFNpemUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXN0cnVjdHVyZVVybCIsImltYWdlU291cmNlIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJjbG91ZFVybCIsInJldm9rZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGb3JtU3VibWl0IiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiYWRkIiwidGltZXN0YW1wIiwidGhlbiIsImRhdGEiLCJoYW5kbGVSZXF1ZXN0VXBkYXRlIiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsRUFBcEM7O0FBRVAsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUFBaEJBLGdCQUFoTDtBQUFrTVEsdUJBQWlCLEVBQWpCQSxpQkFBbE07QUFBcU52QyxpQkFBVyxFQUFYQSxXQUFyTjtBQUFrT3dDLGNBQVEsRUFBUkEsUUFBbE87QUFBNE9oRix5QkFBbUIsRUFBbkJBLG1CQUE1TztBQUFpUUQsc0JBQWdCLEVBQWhCQSxnQkFBalE7QUFBbVJGLGNBQVEsRUFBUkEsUUFBblI7QUFBNlJDLGlCQUFXLEVBQVhBLFdBQTdSO0FBQTBTZ0YseUJBQW1CLEVBQW5CQSxtQkFBMVM7QUFBK1Q3RSxrQkFBWSxFQUFaQSxZQUEvVDtBQUE2VUUsYUFBTyxFQUFQQSxPQUE3VTtBQUFzVkMsZ0JBQVUsRUFBVkE7QUFBdFYsS0FBaEM7QUFBQSxjQUNLN0IsS0FBSyxDQUFDaUg7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQW5QRDs7R0FBTWxILHNCO1VBMkhhNkMscUQ7OztLQTNIYjdDLHNCO0FBcVBTQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TaGlwcGluZ1JlcXVlc3QuOWRjOGNhM2FkNTM2M2Y3MGRmMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2F1dGgsIHN0b3JlLCBkYXRhYmFzZSwgdGltZXN0YW1wfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAvLyAgICAge3NlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICByZWNlaXZlcjoge1xyXG4gICAgLy8gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICBjYXJ0b25zOiAnJyxcclxuICAgIC8vICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAvLyAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgLy8gICAgcmVxdWVzdEltYWdlczogW3tpbWc6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBfaWQ6ICcnfV0sXHJcbiAgICAvLyAgICAgc3RhdHVzOiAnJyxcclxuICAgIC8vICAgICB0YWdOYW1lOiAnJyxcclxuICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgLy8gICAgIF9pZDogJycsXHJcbiAgICAvLyAgICAgZm9ybUVycm9yczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbmRlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjI6ICcnIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0SW1hZ2VzOiAnJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAvLyAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICByZWNlaXZlckZpcnN0TmFtZTogJ21heW93YScsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcwODA4NzUzNjY0MycsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjI6ICcwODEzMDYxNDYxNScsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlczogW10sXHJcbiAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnam9ueScsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnMDgxMzA2MTQ2MTUnLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJzA4MTMwNjE0NjE1JyxcclxuICAgICAgICB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAgLy8ge2NhcnRvbnM6IFwiNTVcIixcclxuICAgICAgICAvLyBkZWxpdmVyeUxvY2F0aW9uczogXCJsYWdvc1wiLFxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uczogXCJ0aGFuayB5b3VcIixcclxuICAgICAgICAvLyBpdGVtc1dvcnRoOiBcIjUwMDBcIixcclxuICAgICAgICAvLyByZWNlaXZlcjoge2ZpcnN0TmFtZTogXCJEYXZpZFwiLCBwaG9uZU51bWJlcjE6IFwiMDcxMzA2MTQ2MTVcIiwgcGhvbmVOdW1iZXIyOiBcIjA4MTMwNjE0OTE1XCJ9LFxyXG4gICAgICAgIC8vIHNlbmRlcjoge2ZpcnN0TmFtZTogXCJtYXlvd2FcIiwgcGhvbmVOdW1iZXIxOiBcIjA4MTMwNjE0NjE1XCIsIHBob25lTnVtYmVyMjogXCIwODE0MDYxNDYxNVwifSxcclxuICAgICAgICAvLyB0YWdOYW1lOiBcImNoaXNvbVwiLFxyXG4gICAgICAgIC8vIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIC8vIF9pZDogdW5kZWZpbmVkLFxyXG4gICAgICAgIC8vIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAvLyAgICAgc2VuZGVyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBwaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBob25lTnVtYmVyMjogJycgfSxcclxuICAgICAgICAvLyAgICAgcmVjZWl2ZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcGhvbmVOdW1iZXIyOiAnJyB9LFxyXG4gICAgICAgIC8vICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAvLyAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAvLyAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgIC8vICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgIC8vICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAvLyAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgcmVxdWVzdEltYWdlczogJycsXHJcbiAgICAgICAgLy8gICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgLy8gICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgIC8vICAgICBhbW91bnQ6ICcnLFxyXG4gICAgICAgIC8vICAgICByZXF1ZXN0SW1hZ2VzOiBbe2ltZzogJyd9XSxcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgY29uc3RbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSwgaWR9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICBjb25zdCBuZXdJbnB1dCA9IHsgLi4uaW5wdXQsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBwcm9ncmVzcyA9PSAxMDAgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRQcm9ncmVzcygwKTtcclxuICAgfSwgW3Byb2dyZXNzXSlcclxuXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgIHVzZXIgIT09IG51bGwgXHJcbiAgICAgICAgc2V0VXNlcklkKHVzZXIudWlkKVxyXG4gICAgfSlcclxuICAgfSwgW10pXHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgIHByb2dyZXNzICE9PSAxMDAgJiYgc2V0TG9hZGluZyh0cnVlKSBcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgbGV0IHJlc3RydWN0dXJlVXJsID0ge2ltYWdlU291cmNlOiBwZXJmZWN0U2l6ZX1cclxuICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHJlcXVlc3RJbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNsb3VkVXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4ucmVxdWVzdEltYWdlcywge2Nsb3VkVXJsfV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhyZXF1ZXN0SW1hZ2VzKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBjYXJ0b25zLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zLFxyXG4gICAgICAgIGRlc2NyaXB0aW9ucyxcclxuICAgICAgICBpdGVtc1dvcnRoLFxyXG4gICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgIHJlcXVlc3RJbWFnZXMsXHJcbiAgICAgICAgc2VuZGVyRmlyc3ROYW1lLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMSxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgdGFnTmFtZSxcclxuICAgICAgICBvdGhlckl0ZW1zfSA9IGlucHV0O1xyXG5cclxuICAgICAgIHVzZXJJZCAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdSZXF1ZXN0cycpLmFkZCh7IHVzZXJJZCwgY2FydG9ucywgZGVsaXZlcnlMb2NhdGlvbnMsIGRlc2NyaXB0aW9ucywgaXRlbXNXb3J0aCwgcmVjZWl2ZXJGaXJzdE5hbWUsIHJlY2VpdmVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjIsIHJlcXVlc3RJbWFnZXMsIHNlbmRlckZpcnN0TmFtZSwgc2VuZGVyUGhvbmVOdW1iZXIxLCBzZW5kZXJQaG9uZU51bWJlcjIsIHRhZ05hbWUsIG90aGVySXRlbXMsIGNyZWF0ZWRBdDogdGltZXN0YW1wKCl9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBkYXRhICYmIChzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoLi4uaW5wdXQsIHJlcXVlc3RJbWFnZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KHsuLi5pbnB1dCwgcmVxdWVzdEltYWdlc30pO1xyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgbG9hZGluZywgc2V0UmVxdWVzdEltYWdlcywgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
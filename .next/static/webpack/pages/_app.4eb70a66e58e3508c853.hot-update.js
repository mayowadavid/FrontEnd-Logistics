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
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");






var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var RequestContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])();

var RequestContextProvider = function RequestContextProvider(props) {
  _s();

  var initialState = {
    cartons: "",
    deliveryLocations: "",
    descriptions: "",
    itemsWorth: "",
    receiverFirstName: '',
    receiverPhoneNumber1: '',
    receiverPhoneNumber2: '',
    requestImages: [],
    senderFirstName: '',
    senderPhoneNumber1: '',
    senderPhoneNumber2: '',
    tagName: "",
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

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

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_7__["requestValidate"])(id, value, formErrors);

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
    _firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].onAuthStateChanged(function (user) {
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
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_9__["store"].ref("requestImages/".concat(selected.name));
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

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var cartons, deliveryLocations, descriptions, itemsWorth, receiverFirstName, receiverPhoneNumber1, receiverPhoneNumber2, requestImages, senderFirstName, senderPhoneNumber1, senderPhoneNumber2, tagName, otherItems;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              cartons = input.cartons, deliveryLocations = input.deliveryLocations, descriptions = input.descriptions, itemsWorth = input.itemsWorth, receiverFirstName = input.receiverFirstName, receiverPhoneNumber1 = input.receiverPhoneNumber1, receiverPhoneNumber2 = input.receiverPhoneNumber2, requestImages = input.requestImages, senderFirstName = input.senderFirstName, senderPhoneNumber1 = input.senderPhoneNumber1, senderPhoneNumber2 = input.senderPhoneNumber2, tagName = input.tagName, otherItems = input.otherItems;
              userId !== null && _firebase__WEBPACK_IMPORTED_MODULE_9__["database"].collection('Requests').add({
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
                createdAt: Object(_firebase__WEBPACK_IMPORTED_MODULE_9__["timestamp"])()
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
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["contact"])(),
    title: "Contact",
    id: 1
  }, {
    content: "gallery",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["gallery"])(),
    title: "Gallery",
    id: 2
  }, {
    content: "ShippingRequest",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["offBack"])(),
    title: "Request",
    id: 3
  }, {
    content: "",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["message"])(),
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
    lineNumber: 172,
    columnNumber: 9
  }, _this);
};

_s(RequestContextProvider, "uHhN6iZ9mZDkpz/Iqelw2a5YJ4E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiYW1vdW50IiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwicGhvdG9DaGFuZ2UiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwicGVyZmVjdFNpemUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXN0cnVjdHVyZVVybCIsImltYWdlU291cmNlIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJjbG91ZFVybCIsInJldm9rZU9iamVjdFVSTCIsImhhbmRsZUZvcm1TdWJtaXQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJhZGQiLCJ0aW1lc3RhbXAiLCJ0aGVuIiwiZGF0YSIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLGdCQUFHQywyREFBYSxFQUFwQzs7QUFFUCxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLEtBQUQsRUFBVTtBQUFBOztBQUVyQyxNQUFNQyxZQUFZLEdBQ2Q7QUFBQ0MsV0FBTyxFQUFFLEVBQVY7QUFDQUMscUJBQWlCLEVBQUUsRUFEbkI7QUFFQUMsZ0JBQVksRUFBRSxFQUZkO0FB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d2VicGFjay9wYWdlcy9fYXBwLjRlYjcwYTY2ZTU4ZTM1MDhjODUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtnYWxsZXJ5LCBtZXNzYWdlLCBvZmZCYWNrLCBjb250YWN0fSBmcm9tIFwiLi4vLi4vc3ZnXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7YXV0aCwgc3RvcmUsIGRhdGFiYXNlLCB0aW1lc3RhbXB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+e1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9XHJcbiAgICAgICAge2NhcnRvbnM6IFwiXCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1zV29ydGg6IFwiXCIsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlczogW10sXHJcbiAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgdGFnTmFtZTogXCJcIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0W2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RJbWFnZXMsIHNldFJlcXVlc3RJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGlkfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7IC4uLmlucHV0LCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG4gICB1c2VFZmZlY3QgKCgpPT4ge1xyXG4gICAgcHJvZ3Jlc3MgPT0gMTAwICYmIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoMCk7XHJcbiAgIH0sIFtwcm9ncmVzc10pXHJcblxyXG4gICB1c2VFZmZlY3QgKCgpPT4ge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICB1c2VyICE9PSBudWxsIFxyXG4gICAgICAgIHNldFVzZXJJZCh1c2VyLnVpZClcclxuICAgIH0pXHJcbiAgIH0sIFtdKVxyXG5cclxuY29uc3QgcGhvdG9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgIFxyXG4gICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICBwcm9ncmVzcyAhPT0gMTAwICYmIHNldExvYWRpbmcodHJ1ZSkgXHJcbiAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgbGV0IHBlcmZlY3RTaXplID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgIGxldCByZXN0cnVjdHVyZVVybCA9IHtpbWFnZVNvdXJjZTogcGVyZmVjdFNpemV9XHJcbiAgICBwZXJmZWN0U2l6ZSAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKFsuLi50ZW1wb3JhcnlJbWFnZSwgcmVzdHJ1Y3R1cmVVcmxdKTtcclxuICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjbG91ZFVybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHtjbG91ZFVybH1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBjYXJ0b25zLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zLFxyXG4gICAgICAgIGRlc2NyaXB0aW9ucyxcclxuICAgICAgICBpdGVtc1dvcnRoLFxyXG4gICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgIHJlcXVlc3RJbWFnZXMsXHJcbiAgICAgICAgc2VuZGVyRmlyc3ROYW1lLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMSxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgdGFnTmFtZSxcclxuICAgICAgICBvdGhlckl0ZW1zfSA9IGlucHV0O1xyXG5cclxuICAgICAgIHVzZXJJZCAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdSZXF1ZXN0cycpLmFkZCh7IHVzZXJJZCwgY2FydG9ucywgZGVsaXZlcnlMb2NhdGlvbnMsIGRlc2NyaXB0aW9ucywgaXRlbXNXb3J0aCwgcmVjZWl2ZXJGaXJzdE5hbWUsIHJlY2VpdmVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjIsIHJlcXVlc3RJbWFnZXMsIHNlbmRlckZpcnN0TmFtZSwgc2VuZGVyUGhvbmVOdW1iZXIxLCBzZW5kZXJQaG9uZU51bWJlcjIsIHRhZ05hbWUsIG90aGVySXRlbXMsIGNyZWF0ZWRBdDogdGltZXN0YW1wKCl9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBkYXRhICYmIChzZXRSZXF1ZXN0U3VjY2Vzcyh0cnVlKSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdFVwZGF0ZSA9IGFzeW5jKGUsIGlkKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoLi4uaW5wdXQsIHJlcXVlc3RJbWFnZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KHsuLi5pbnB1dCwgcmVxdWVzdEltYWdlc30pO1xyXG4gICAgICAgIHNldENvdW50KFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gW1xyXG4gICAgICAgIHtjb250ZW50OiBcImNvbnRhY3RcIiAsIGljb246IGNvbnRhY3QoKSwgdGl0bGU6IFwiQ29udGFjdFwiLCBpZDogMSB9LFxyXG4gICAgICAgIHtjb250ZW50OiBcImdhbGxlcnlcIiwgaWNvbjogZ2FsbGVyeSgpLCB0aXRsZTogXCJHYWxsZXJ5XCIsIGlkOiAyfSxcclxuICAgICAgICB7Y29udGVudDogXCJTaGlwcGluZ1JlcXVlc3RcIiwgaWNvbjogb2ZmQmFjaygpLCB0aXRsZTogXCJSZXF1ZXN0XCIsIGlkOiAzfSxcclxuICAgICAgICB7Y29udGVudDogXCJcIiwgaWNvbjogbWVzc2FnZSgpLCB0aXRsZTogXCJNZXNzYWdlXCIsIGlkOiA0fVxyXG4gICAgXVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lucHV0LCBlcnJvciwgbG9hZGluZywgc2V0UmVxdWVzdEltYWdlcywgcmVxdWVzdEltYWdlcywgcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzLCBpbml0aWFsU3RhdGUsIHNldENvdW50LCBjb3VudCwgc2V0SW5wdXQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtU3VibWl0LCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIHNlbGVjdG9yLCBzZXRFeHRyYWN0ZWRSZXF1ZXN0LCBleHRyYWN0ZWRSZXF1ZXN0LCBjb250YWN0cywgc2V0Q29udGFjdHMsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9SZXF1ZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENvbnRleHRQcm92aWRlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
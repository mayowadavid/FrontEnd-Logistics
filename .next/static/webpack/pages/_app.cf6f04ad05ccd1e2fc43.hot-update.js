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
    lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiYW1vdW50IiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwicGhvdG9DaGFuZ2UiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwicGVyZmVjdFNpemUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXN0cnVjdHVyZVVybCIsImltYWdlU291cmNlIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJjbG91ZFVybCIsInJldm9rZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGb3JtU3VibWl0IiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiYWRkIiwidGltZXN0YW1wIiwidGhlbiIsImRhdGEiLCJoYW5kbGVSZXF1ZXN0VXBkYXRlIiwiaGFuZGxlRm9ybVByZXZpZXciLCJzZWxlY3RvciIsImNvbnRlbnQiLCJpY29uIiwiY29udGFjdCIsInRpdGxlIiwiZ2FsbGVyeSIsIm9mZkJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsRUFBcEM7O0FBRVAsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUNkO0FBQUNDLFdBQU8sRUFBRSxFQUFWO0FBQ0FDLHFCQUFpQixFQUFFLEVBRG5CO0FBRUFDLGdCQUFZLEVBQUUsRUFGZDtBQUdBQyxjQUFVLEVBQUUsRUFIWjtBQUlBQyxxQkFBaUIsRUFBRSxFQUpuQjtBQUtBQyx3QkFBb0IsRUFBRSxFQUx0QjtBQU1BQyx3QkFBb0IsRUFBRSxFQU50QjtBQU9BQyxpQkFBYSxFQUFFLEVBUGY7QUFRQUMsbUJBQWUsRUFBRSxFQVJqQjtBQVNBQyxzQkFBa0IsRUFBRSxFQVRwQjtBQVVBQyxzQkFBa0IsRUFBRSxFQVZwQjtBQVdBQyxXQUFPLEVBQUUsRUFYVDtBQVlBQyxjQUFVLEVBQUUsS0FaWjtBQWFBQyxjQUFVLEVBQUU7QUFDUkwscUJBQWUsRUFBRSxFQURUO0FBRVJDLHdCQUFrQixFQUFFLEVBRlo7QUFHUkMsd0JBQWtCLEVBQUUsRUFIWjtBQUlSTix1QkFBaUIsRUFBRSxFQUpYO0FBS1JDLDBCQUFvQixFQUFFLEVBTGQ7QUFNUkMsMEJBQW9CLEVBQUUsRUFOZDtBQU9STixhQUFPLEVBQUUsRUFQRDtBQVFSYyxlQUFTLEVBQUUsRUFSSDtBQVNSYix1QkFBaUIsRUFBRSxFQVRYO0FBVVJDLGtCQUFZLEVBQUUsRUFWTjtBQVdSQyxnQkFBVSxFQUFFLEVBWEo7QUFZUlMsZ0JBQVUsRUFBRSxJQVpKO0FBYVJHLFlBQU0sRUFBRSxFQWJBO0FBY1JKLGFBQU8sRUFBRSxFQWREO0FBZVJLLFlBQU0sRUFBRTtBQWZBO0FBYlosR0FESjs7QUFGcUMsa0JBb0NaQyxzREFBUSxDQUFDbEIsWUFBRCxDQXBDSTtBQUFBLE1Bb0MvQm1CLEtBcEMrQjtBQUFBLE1Bb0N4QkMsUUFwQ3dCOztBQUFBLG1CQXFDTEYsc0RBQVEsQ0FBQyxFQUFELENBckNIO0FBQUEsTUFxQzlCRyxRQXJDOEI7QUFBQSxNQXFDcEJDLFdBckNvQjs7QUFBQSxtQkFzQ1dKLHNEQUFRLEVBdENuQjtBQUFBLE1Bc0M5QkssZ0JBdEM4QjtBQUFBLE1Bc0NaQyxtQkF0Q1k7O0FBQUEsbUJBdUNHTixzREFBUSxFQXZDWDtBQUFBLE1BdUM5Qk8sWUF2QzhCO0FBQUEsTUF1Q2hCQyxlQXZDZ0I7O0FBQUEsbUJBd0NQUixzREFBUSxDQUFDLEtBQUQsQ0F4Q0Q7QUFBQSxNQXdDOUJTLE9BeEM4QjtBQUFBLE1Bd0NyQkMsVUF4Q3FCOztBQUFBLG1CQXlDTVYsc0RBQVEsQ0FBQyxFQUFELENBekNkO0FBQUEsTUF5Qy9CVyxjQXpDK0I7QUFBQSxNQXlDZkMsaUJBekNlOztBQUFBLG1CQTBDS1osc0RBQVEsQ0FBQyxFQUFELENBMUNiO0FBQUEsTUEwQzlCVixhQTFDOEI7QUFBQSxNQTBDZnVCLGdCQTFDZTs7QUFBQSxtQkEyQ1hiLHNEQUFRLEVBM0NHO0FBQUEsTUEyQzlCYyxLQTNDOEI7QUFBQSxNQTJDdkJDLFFBM0N1Qjs7QUFBQSxtQkE0Q2JmLHNEQUFRLEVBNUNLO0FBQUEsTUE0QzlCZ0IsSUE1QzhCO0FBQUEsTUE0Q3hCQyxPQTVDd0I7O0FBQUEsb0JBNkNPakIsc0RBQVEsQ0FBQyxLQUFELENBN0NmO0FBQUEsTUE2QzlCa0IsY0E3QzhCO0FBQUEsTUE2Q2RDLGlCQTdDYzs7QUFBQSxvQkE4Q0xuQixzREFBUSxDQUFDLENBQUQsQ0E5Q0g7QUFBQSxNQThDOUJvQixRQTlDOEI7QUFBQSxNQThDcEJDLFdBOUNvQjs7QUFBQSxvQkErQ1hyQixzREFBUSxDQUFDLElBQUQsQ0EvQ0c7QUFBQSxNQStDOUJzQixLQS9DOEI7QUFBQSxNQStDdkJDLFFBL0N1Qjs7QUFnRHJDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBaERxQyxvQkFpRFB6QixzREFBUSxDQUFDLEtBQUQsQ0FqREQ7QUFBQSxNQWlEOUIwQixPQWpEOEI7QUFBQSxNQWlEckJDLFVBakRxQjs7QUFBQSxvQkFrRFQzQixzREFBUSxDQUFDLEVBQUQsQ0FsREM7QUFBQSxNQWtEOUI0QixNQWxEOEI7QUFBQSxNQWtEdEJDLFNBbERzQjs7QUFxRHJDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QixRQUFHQSxDQUFILEVBQUs7QUFDRkEsT0FBQyxDQUFDQyxjQUFGO0FBREUsc0JBRXdCRCxDQUFDLENBQUNFLE1BRjFCO0FBQUEsVUFFS0MsSUFGTCxhQUVLQSxJQUZMO0FBQUEsVUFFV0MsS0FGWCxhQUVXQSxLQUZYO0FBQUEsVUFFa0JDLEVBRmxCLGFBRWtCQSxFQUZsQjs7QUFBQSxxQ0FHdUJuQyxLQUh2QjtBQUFBLFVBR0tMLFVBSEwsVUFHS0EsVUFITDs7QUFJRnlDLGlGQUFlLENBQUNELEVBQUQsRUFBS0QsS0FBTCxFQUFZdkMsVUFBWixDQUFmOztBQUNBLFVBQU0wQyxRQUFRLG1DQUFRckMsS0FBUix5SUFBZ0JpQyxJQUFoQixFQUF1QkMsS0FBdkIsRUFBZDs7QUFDQSxhQUFPakMsUUFBUSxDQUFDb0MsUUFBRCxDQUFmO0FBQ0Y7QUFDSixHQVREOztBQVVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNSLENBQUQsRUFBSztBQUFBLHFCQUNBQSxDQUFDLENBQUNFLE1BREY7QUFBQSxRQUNqQkMsSUFEaUIsY0FDakJBLElBRGlCO0FBQUEsUUFDWE0sT0FEVyxjQUNYQSxPQURXOztBQUV4QixRQUFNRixRQUFRLG1DQUFPckMsS0FBUCx5SUFBZWlDLElBQWYsRUFBc0JNLE9BQXRCLEVBQWQ7O0FBQ0EsV0FBT3RDLFFBQVEsQ0FBQ29DLFFBQUQsQ0FBZjtBQUNBLEdBSkQ7O0FBS0FHLHlEQUFTLENBQUUsWUFBSztBQUNmckIsWUFBUSxJQUFJLEdBQVosSUFBbUJPLFVBQVUsQ0FBQyxLQUFELENBQTdCO0FBQ0FOLGVBQVcsQ0FBQyxDQUFELENBQVg7QUFDQSxHQUhRLEVBR04sQ0FBQ0QsUUFBRCxDQUhNLENBQVQ7QUFLQXFCLHlEQUFTLENBQUUsWUFBSztBQUNmQyxrREFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBQyxJQUFJLEVBQUU7QUFDNUJBLFVBQUksS0FBSyxJQUFUO0FBQ0VmLGVBQVMsQ0FBQ2UsSUFBSSxDQUFDQyxHQUFOLENBQVQ7QUFDSCxLQUhEO0FBSUEsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPSCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDZixDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFFRCxRQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU2MsS0FBWixFQUFrQjtBQUNqQjNCLGNBQVEsS0FBSyxHQUFiLElBQW9CTyxVQUFVLENBQUMsSUFBRCxDQUE5QjtBQUNDLFVBQUlxQixRQUFRLEdBQUdqQixDQUFDLENBQUNFLE1BQUYsQ0FBU2MsS0FBVCxDQUFlLENBQWYsQ0FBZjtBQUNELFVBQUlFLEtBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxXQUFmLENBQVo7QUFDRCxVQUFJQyxRQUFRLEdBQUdGLFFBQVEsS0FBS0csU0FBYixHQUF5QkYsS0FBSyxDQUFDRyxRQUFOLENBQWVKLFFBQVEsQ0FBQ0ssSUFBeEIsQ0FBekIsR0FBd0Q5QixRQUFRLENBQUMsZ0RBQUQsQ0FBL0U7QUFDRyxVQUFJK0IsUUFBUSxHQUFHLFNBQWY7QUFDRCxVQUFJQyxpQkFBaUIsR0FBRUwsUUFBUSxJQUFJLElBQVosR0FBbUJGLFFBQVEsQ0FBQ1EsSUFBVCxHQUFnQkYsUUFBbkMsR0FBOEMvQixRQUFRLENBQUMsNkJBQUQsQ0FBN0U7QUFDQSxVQUFJa0MsV0FBVyxHQUFHRixpQkFBaUIsSUFBSSxJQUFyQixJQUE4QkcsR0FBRyxDQUFDQyxlQUFKLENBQW9CWCxRQUFwQixDQUFoRDtBQUNELFVBQUlZLGNBQWMsR0FBRztBQUFDQyxtQkFBVyxFQUFFSjtBQUFkLE9BQXJCO0FBQ0FBLGlCQUFXLEtBQUtOLFNBQWhCLElBQTZCdkMsaUJBQWlCLDRJQUFLRCxjQUFMLElBQXFCaUQsY0FBckIsR0FBOUM7O0FBQ0UsVUFBR0wsaUJBQWlCLElBQUksSUFBeEIsRUFBOEI7QUFDOUIsWUFBTU8sVUFBVSxHQUFHQywrQ0FBSyxDQUFDQyxHQUFOLHlCQUEyQmhCLFFBQVEsQ0FBQ2QsSUFBcEMsRUFBbkI7QUFDRTRCLGtCQUFVLENBQUNHLEdBQVgsQ0FBZWpCLFFBQWYsRUFBeUJrQixFQUF6QixDQUE0QixlQUE1QjtBQUFBLDhRQUNBLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQytCQSxJQUFJLENBQUNDLGdCQUFMLEdBQXdCRCxJQUFJLENBQUNFLFVBRDVEOztBQUFBO0FBQUE7QUFDUUMsaUNBRFIsaUJBQzBFLEdBRDFFO0FBQUE7QUFBQSwyQkFFTWpELFdBQVcsQ0FBQ2lELGFBQUQsQ0FGakI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtRQUlJLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNFaEQsUUFBUSxDQUFDZ0QsR0FBRCxDQURWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSko7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbVJBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDc0JULFVBQVUsQ0FBQ1UsY0FBWCxFQUR0Qjs7QUFBQTtBQUNLQywwQkFETDtBQUVENUQsa0NBQWdCLDRJQUFLdkIsYUFBTCxJQUFvQjtBQUFDbUYsNEJBQVEsRUFBUkE7QUFBRCxtQkFBcEIsR0FBaEI7O0FBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FOSDtBQVVEOztBQUNGZixTQUFHLENBQUNnQixlQUFKLENBQW9CMUIsUUFBcEI7QUFDQTtBQUNKLEdBNUJEOztBQThCQTJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdEYsYUFBWjs7QUFFSSxNQUFNdUYsZ0JBQWdCO0FBQUEseVFBQUcsa0JBQU85QyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ1FqRCxxQkFGYSxHQWNQa0IsS0FkTyxDQUVibEIsT0FGYSxFQUdyQkMsaUJBSHFCLEdBY1BpQixLQWRPLENBR3JCakIsaUJBSHFCLEVBSXJCQyxZQUpxQixHQWNQZ0IsS0FkTyxDQUlyQmhCLFlBSnFCLEVBS3JCQyxVQUxxQixHQWNQZSxLQWRPLENBS3JCZixVQUxxQixFQU1yQkMsaUJBTnFCLEdBY1BjLEtBZE8sQ0FNckJkLGlCQU5xQixFQU9yQkMsb0JBUHFCLEdBY1BhLEtBZE8sQ0FPckJiLG9CQVBxQixFQVFyQkMsb0JBUnFCLEdBY1BZLEtBZE8sQ0FRckJaLG9CQVJxQixFQVNyQkMsYUFUcUIsR0FjUFcsS0FkTyxDQVNyQlgsYUFUcUIsRUFVckJDLGVBVnFCLEdBY1BVLEtBZE8sQ0FVckJWLGVBVnFCLEVBV3JCQyxrQkFYcUIsR0FjUFMsS0FkTyxDQVdyQlQsa0JBWHFCLEVBWXJCQyxrQkFacUIsR0FjUFEsS0FkTyxDQVlyQlIsa0JBWnFCLEVBYXJCQyxPQWJxQixHQWNQTyxLQWRPLENBYXJCUCxPQWJxQixFQWNyQkMsVUFkcUIsR0FjUE0sS0FkTyxDQWNyQk4sVUFkcUI7QUFnQnRCaUMsb0JBQU0sS0FBSyxJQUFYLElBQW1Ca0Qsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUFnQ0MsR0FBaEMsQ0FBb0M7QUFBRXBELHNCQUFNLEVBQU5BLE1BQUY7QUFBVTdDLHVCQUFPLEVBQVBBLE9BQVY7QUFBbUJDLGlDQUFpQixFQUFqQkEsaUJBQW5CO0FBQXNDQyw0QkFBWSxFQUFaQSxZQUF0QztBQUFvREMsMEJBQVUsRUFBVkEsVUFBcEQ7QUFBZ0VDLGlDQUFpQixFQUFqQkEsaUJBQWhFO0FBQW1GQyxvQ0FBb0IsRUFBcEJBLG9CQUFuRjtBQUNwREMsb0NBQW9CLEVBQXBCQSxvQkFEb0Q7QUFDOUJDLDZCQUFhLEVBQWJBLGFBRDhCO0FBQ2ZDLCtCQUFlLEVBQWZBLGVBRGU7QUFDRUMsa0NBQWtCLEVBQWxCQSxrQkFERjtBQUNzQkMsa0NBQWtCLEVBQWxCQSxrQkFEdEI7QUFDMENDLHVCQUFPLEVBQVBBLE9BRDFDO0FBQ21EQywwQkFBVSxFQUFWQSxVQURuRDtBQUMrREUseUJBQVMsRUFBRW9GLDJEQUFTO0FBRG5GLGVBQXBDLEVBRWZDLElBRmUsQ0FFVixVQUFDQyxJQUFELEVBQVU7QUFDWkEsb0JBQUksSUFBS2hFLGlCQUFpQixDQUFDLElBQUQsQ0FBMUI7QUFDSCxlQUplLFdBTWQsVUFBQ0csS0FBRCxFQUFXO0FBQ1RDLHdCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELGVBUmEsQ0FBbkI7O0FBaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQnVELGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUE2QkEsTUFBTU8sbUJBQW1CO0FBQUEseVFBQUcsa0JBQU1yRCxDQUFOLEVBQVNLLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QkwsZUFBQyxDQUFDQyxjQUFGO0FBQ0Q5QixzQkFBUSxNQUFSLDBJQUFZRCxLQUFaLFVBQW1CWCxhQUFuQjs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkI4RixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBS0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDdEQsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNDLGNBQUY7QUFDRDlCLFlBQVEsaUNBQUtELEtBQUw7QUFBWVgsbUJBQWEsRUFBYkE7QUFBWixPQUFSO0FBQ0N5QixZQUFRLENBQUMsUUFBRCxDQUFSO0FBQ0gsR0FKRDs7QUFTQSxNQUFNdUUsUUFBUSxHQUFHLENBQ2I7QUFBQ0MsV0FBTyxFQUFFLFNBQVY7QUFBc0JDLFFBQUksRUFBRUMsb0RBQU8sRUFBbkM7QUFBdUNDLFNBQUssRUFBRSxTQUE5QztBQUF5RHRELE1BQUUsRUFBRTtBQUE3RCxHQURhLEVBRWI7QUFBQ21ELFdBQU8sRUFBRSxTQUFWO0FBQXFCQyxRQUFJLEVBQUVHLG9EQUFPLEVBQWxDO0FBQXNDRCxTQUFLLEVBQUUsU0FBN0M7QUFBd0R0RCxNQUFFLEVBQUU7QUFBNUQsR0FGYSxFQUdiO0FBQUNtRCxXQUFPLEVBQUUsaUJBQVY7QUFBNkJDLFFBQUksRUFBRUksb0RBQU8sRUFBMUM7QUFBOENGLFNBQUssRUFBRSxTQUFyRDtBQUFnRXRELE1BQUUsRUFBRTtBQUFwRSxHQUhhLEVBSWI7QUFBQ21ELFdBQU8sRUFBRSxFQUFWO0FBQWNDLFFBQUksRUFBRUssb0RBQU8sRUFBM0I7QUFBK0JILFNBQUssRUFBRSxTQUF0QztBQUFpRHRELE1BQUUsRUFBRTtBQUFyRCxHQUphLENBQWpCO0FBUUEsc0JBQ0kscUVBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBQ25DLFdBQUssRUFBTEEsS0FBRDtBQUFRcUIsV0FBSyxFQUFMQSxLQUFSO0FBQWVJLGFBQU8sRUFBUEEsT0FBZjtBQUF3QmIsc0JBQWdCLEVBQWhCQSxnQkFBeEI7QUFBMEN2QixtQkFBYSxFQUFiQSxhQUExQztBQUF5RDRCLG9CQUFjLEVBQWRBLGNBQXpEO0FBQXlFQyx1QkFBaUIsRUFBakJBLGlCQUF6RTtBQUE0RnJDLGtCQUFZLEVBQVpBLFlBQTVGO0FBQTBHaUMsY0FBUSxFQUFSQSxRQUExRztBQUFvSEQsV0FBSyxFQUFMQSxLQUFwSDtBQUEySFosY0FBUSxFQUFSQSxRQUEzSDtBQUFxSTRCLGtCQUFZLEVBQVpBLFlBQXJJO0FBQW1KUyxpQkFBVyxFQUFYQSxXQUFuSjtBQUFnSzVCLG9CQUFjLEVBQWRBLGNBQWhLO0FBQWdMa0Usc0JBQWdCLEVBQWhCQSxnQkFBaEw7QUFBa01RLHVCQUFpQixFQUFqQkEsaUJBQWxNO0FBQXFOdkMsaUJBQVcsRUFBWEEsV0FBck47QUFBa093QyxjQUFRLEVBQVJBLFFBQWxPO0FBQTRPaEYseUJBQW1CLEVBQW5CQSxtQkFBNU87QUFBaVFELHNCQUFnQixFQUFoQkEsZ0JBQWpRO0FBQW1SRixjQUFRLEVBQVJBLFFBQW5SO0FBQTZSQyxpQkFBVyxFQUFYQSxXQUE3UjtBQUEwU2dGLHlCQUFtQixFQUFuQkEsbUJBQTFTO0FBQStUN0Usa0JBQVksRUFBWkEsWUFBL1Q7QUFBNlVFLGFBQU8sRUFBUEEsT0FBN1U7QUFBc1ZDLGdCQUFVLEVBQVZBO0FBQXRWLEtBQWhDO0FBQUEsY0FDSzdCLEtBQUssQ0FBQ2lIO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F4S0Q7O0dBQU1sSCxzQjtVQWdEYTZDLHFEOzs7S0FoRGI3QyxzQjtBQTBLU0EscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZjZmMDRhZDA1Y2NkMWUyZmM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2F1dGgsIHN0b3JlLCBkYXRhYmFzZSwgdGltZXN0YW1wfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIlwiLFxyXG4gICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uczogXCJcIixcclxuICAgICAgICBpdGVtc1dvcnRoOiBcIlwiLFxyXG4gICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RJbWFnZXM6IFtdLFxyXG4gICAgICAgIHNlbmRlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgIHRhZ05hbWU6IFwiXCIsXHJcbiAgICAgICAgb3RoZXJJdGVtczogZmFsc2UsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBzZW5kZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjI6ICcnLFxyXG4gICAgICAgICAgICBjYXJ0b25zOiAnJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6ICcnLFxyXG4gICAgICAgICAgICBpdGVtc1dvcnRoOiAnJyxcclxuICAgICAgICAgICAgb3RoZXJJdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICAgICAgdGFnTmFtZTogJycsXHJcbiAgICAgICAgICAgIGFtb3VudDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICBcclxuXHJcbiAgICBjb25zdFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZXNzaW9uVG9rZW4sIHNldFNlc3Npb25Ub2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldGlzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0SW1hZ2VzLCBzZXRSZXF1ZXN0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN1Y2Nlc3MsIHNldFJlcXVlc3RTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlLCBpZH0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSB7Li4uaW5wdXR9O1xyXG4gICAgICAgICAgIHJlcXVlc3RWYWxpZGF0ZShpZCwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0geyAuLi5pbnB1dCwgW25hbWVdOiB2YWx1ZSB9O1xyXG4gICAgICAgICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgXHJcbiAgIGNvbnN0IGhhbmRsZUNoZWNrID0gKGUpPT57XHJcbiAgICBjb25zdCB7bmFtZSwgY2hlY2tlZH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IG5ld0lucHV0ID0gey4uLmlucHV0LCBbbmFtZV06IGNoZWNrZWR9O1xyXG4gICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgfSBcclxuICAgdXNlRWZmZWN0ICgoKT0+IHtcclxuICAgIHByb2dyZXNzID09IDEwMCAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldFByb2dyZXNzKDApO1xyXG4gICB9LCBbcHJvZ3Jlc3NdKVxyXG5cclxuICAgdXNlRWZmZWN0ICgoKT0+IHtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXI9PntcclxuICAgICAgdXNlciAhPT0gbnVsbCBcclxuICAgICAgICBzZXRVc2VySWQodXNlci51aWQpXHJcbiAgICB9KVxyXG4gICB9LCBbXSlcclxuXHJcbmNvbnN0IHBob3RvQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICBcclxuICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgcHJvZ3Jlc3MgIT09IDEwMCAmJiBzZXRMb2FkaW5nKHRydWUpIFxyXG4gICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgIGxldCBwZXJmZWN0U2l6ZSA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICBsZXQgcmVzdHJ1Y3R1cmVVcmwgPSB7aW1hZ2VTb3VyY2U6IHBlcmZlY3RTaXplfVxyXG4gICAgcGVyZmVjdFNpemUgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShbLi4udGVtcG9yYXJ5SW1hZ2UsIHJlc3RydWN0dXJlVXJsXSk7XHJcbiAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcmVxdWVzdEltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2xvdWRVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICBzZXRSZXF1ZXN0SW1hZ2VzKFsuLi5yZXF1ZXN0SW1hZ2VzLCB7Y2xvdWRVcmx9XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnNvbGUubG9nKHJlcXVlc3RJbWFnZXMpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGNhcnRvbnMsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnMsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zLFxyXG4gICAgICAgIGl0ZW1zV29ydGgsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlcyxcclxuICAgICAgICBzZW5kZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMixcclxuICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgIG90aGVySXRlbXN9ID0gaW5wdXQ7XHJcblxyXG4gICAgICAgdXNlcklkICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJykuYWRkKHsgdXNlcklkLCBjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCByZWNlaXZlckZpcnN0TmFtZSwgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMiwgcmVxdWVzdEltYWdlcywgc2VuZGVyRmlyc3ROYW1lLCBzZW5kZXJQaG9uZU51bWJlcjEsIHNlbmRlclBob25lTnVtYmVyMiwgdGFnTmFtZSwgb3RoZXJJdGVtcywgY3JlYXRlZEF0OiB0aW1lc3RhbXAoKX0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGRhdGEgJiYgKHNldFJlcXVlc3RTdWNjZXNzKHRydWUpKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0VXBkYXRlID0gYXN5bmMoZSwgaWQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCguLi5pbnB1dCwgcmVxdWVzdEltYWdlcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgc2V0SW5wdXQoey4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzfSk7XHJcbiAgICAgICAgc2V0Q291bnQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBbXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiY29udGFjdFwiICwgaWNvbjogY29udGFjdCgpLCB0aXRsZTogXCJDb250YWN0XCIsIGlkOiAxIH0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiZ2FsbGVyeVwiLCBpY29uOiBnYWxsZXJ5KCksIHRpdGxlOiBcIkdhbGxlcnlcIiwgaWQ6IDJ9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlNoaXBwaW5nUmVxdWVzdFwiLCBpY29uOiBvZmZCYWNrKCksIHRpdGxlOiBcIlJlcXVlc3RcIiwgaWQ6IDN9LFxyXG4gICAgICAgIHtjb250ZW50OiBcIlwiLCBpY29uOiBtZXNzYWdlKCksIHRpdGxlOiBcIk1lc3NhZ2VcIiwgaWQ6IDR9XHJcbiAgICBdXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aW5wdXQsIGVycm9yLCBsb2FkaW5nLCBzZXRSZXF1ZXN0SW1hZ2VzLCByZXF1ZXN0SW1hZ2VzLCByZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3MsIGluaXRpYWxTdGF0ZSwgc2V0Q291bnQsIGNvdW50LCBzZXRJbnB1dCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVDaGVjaywgdGVtcG9yYXJ5SW1hZ2UsIGhhbmRsZUZvcm1TdWJtaXQsIGhhbmRsZUZvcm1QcmV2aWV3LCBwaG90b0NoYW5nZSwgc2VsZWN0b3IsIHNldEV4dHJhY3RlZFJlcXVlc3QsIGV4dHJhY3RlZFJlcXVlc3QsIGNvbnRhY3RzLCBzZXRDb250YWN0cywgaGFuZGxlUmVxdWVzdFVwZGF0ZSwgc2Vzc2lvblRva2VuLCBpc0xvZ2luLCBzZXRpc0xvZ2lufX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1JlcXVlc3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
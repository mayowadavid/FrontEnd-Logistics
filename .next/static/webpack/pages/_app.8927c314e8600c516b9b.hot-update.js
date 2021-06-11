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
                data && (setRequestSuccess(true), setInput(initialState));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJmb3JtRXJyb3JzIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiYW1vdW50IiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2Vzc2lvblRva2VuIiwic2V0U2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwic2V0UmVxdWVzdEltYWdlcyIsImNvdW50Iiwic2V0Q291bnQiLCJmb3JtIiwic2V0Rm9ybSIsInJlcXVlc3RTdWNjZXNzIiwic2V0UmVxdWVzdFN1Y2Nlc3MiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInVzZUVmZmVjdCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwicGhvdG9DaGFuZ2UiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwicGVyZmVjdFNpemUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXN0cnVjdHVyZVVybCIsImltYWdlU291cmNlIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJjbG91ZFVybCIsInJldm9rZU9iamVjdFVSTCIsImhhbmRsZUZvcm1TdWJtaXQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJhZGQiLCJ0aW1lc3RhbXAiLCJ0aGVuIiwiZGF0YSIsImhhbmRsZVJlcXVlc3RVcGRhdGUiLCJoYW5kbGVGb3JtUHJldmlldyIsInNlbGVjdG9yIiwiY29udGVudCIsImljb24iLCJjb250YWN0IiwidGl0bGUiLCJnYWxsZXJ5Iiwib2ZmQmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLGdCQUFHQywyREFBYSxFQUFwQzs7QUFFUCxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLEtBQUQsRUFBVTtBQUFBOztBQUVyQyxNQUFNQyxZQUFZLEdBQ2Q7QUFBQ0MsV0FBTyxFQUFFLEVBQVY7QUFDQUMscUJBQWlCLEVBQUUsRUFEbkI7QUFFQUMsZ0JBQVksRUFBRSxFQUZkO0FB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N0Msc0I7QUEwS1NBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODkyN2MzMTRlODYwMGM1MTZiOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dhbGxlcnksIG1lc3NhZ2UsIG9mZkJhY2ssIGNvbnRhY3R9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHthdXRoLCBzdG9yZSwgZGF0YWJhc2UsIHRpbWVzdGFtcH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgUmVxdWVzdENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT57XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID1cclxuICAgICAgICB7Y2FydG9uczogXCJcIixcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwiXCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCJcIixcclxuICAgICAgICByZWNlaXZlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICByZXF1ZXN0SW1hZ2VzOiBbXSxcclxuICAgICAgICBzZW5kZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICB0YWdOYW1lOiBcIlwiLFxyXG4gICAgICAgIG90aGVySXRlbXM6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICAgICAgc2VuZGVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxOiAnJyxcclxuICAgICAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnJyxcclxuICAgICAgICAgICAgY2FydG9uczogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TG9jYXRpb25zOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25zOiAnJyxcclxuICAgICAgICAgICAgaXRlbXNXb3J0aDogJycsXHJcbiAgICAgICAgICAgIG90aGVySXRlbXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICcnLFxyXG4gICAgICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgXHJcblxyXG4gICAgY29uc3RbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtleHRyYWN0ZWRSZXF1ZXN0LCBzZXRFeHRyYWN0ZWRSZXF1ZXN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2Vzc2lvblRva2VuLCBzZXRTZXNzaW9uVG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdEltYWdlcywgc2V0UmVxdWVzdEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSwgaWR9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gey4uLmlucHV0fTtcclxuICAgICAgICAgICByZXF1ZXN0VmFsaWRhdGUoaWQsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICBjb25zdCBuZXdJbnB1dCA9IHsgLi4uaW5wdXQsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07IFxyXG4gICBjb25zdCBoYW5kbGVDaGVjayA9IChlKT0+e1xyXG4gICAgY29uc3Qge25hbWUsIGNoZWNrZWR9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuZXdJbnB1dCA9IHsuLi5pbnB1dCwgW25hbWVdOiBjaGVja2VkfTtcclxuICAgIHJldHVybiBzZXRJbnB1dChuZXdJbnB1dCk7XHJcbiAgIH0gXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBwcm9ncmVzcyA9PSAxMDAgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRQcm9ncmVzcygwKTtcclxuICAgfSwgW3Byb2dyZXNzXSlcclxuXHJcbiAgIHVzZUVmZmVjdCAoKCk9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgIHVzZXIgIT09IG51bGwgXHJcbiAgICAgICAgc2V0VXNlcklkKHVzZXIudWlkKVxyXG4gICAgfSlcclxuICAgfSwgW10pXHJcblxyXG5jb25zdCBwaG90b0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgXHJcbiAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgIHByb2dyZXNzICE9PSAxMDAgJiYgc2V0TG9hZGluZyh0cnVlKSBcclxuICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICBsZXQgcGVyZmVjdFNpemUgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgbGV0IHJlc3RydWN0dXJlVXJsID0ge2ltYWdlU291cmNlOiBwZXJmZWN0U2l6ZX1cclxuICAgIHBlcmZlY3RTaXplICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoWy4uLnRlbXBvcmFyeUltYWdlLCByZXN0cnVjdHVyZVVybF0pO1xyXG4gICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHJlcXVlc3RJbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNsb3VkVXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgc2V0UmVxdWVzdEltYWdlcyhbLi4ucmVxdWVzdEltYWdlcywge2Nsb3VkVXJsfV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGNhcnRvbnMsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnMsXHJcbiAgICAgICAgZGVzY3JpcHRpb25zLFxyXG4gICAgICAgIGl0ZW1zV29ydGgsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjIsXHJcbiAgICAgICAgcmVxdWVzdEltYWdlcyxcclxuICAgICAgICBzZW5kZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIxLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMixcclxuICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgIG90aGVySXRlbXN9ID0gaW5wdXQ7XHJcblxyXG4gICAgICAgdXNlcklkICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJykuYWRkKHsgdXNlcklkLCBjYXJ0b25zLCBkZWxpdmVyeUxvY2F0aW9ucywgZGVzY3JpcHRpb25zLCBpdGVtc1dvcnRoLCByZWNlaXZlckZpcnN0TmFtZSwgcmVjZWl2ZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMiwgcmVxdWVzdEltYWdlcywgc2VuZGVyRmlyc3ROYW1lLCBzZW5kZXJQaG9uZU51bWJlcjEsIHNlbmRlclBob25lTnVtYmVyMiwgdGFnTmFtZSwgb3RoZXJJdGVtcywgY3JlYXRlZEF0OiB0aW1lc3RhbXAoKX0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGRhdGEgJiYgKHNldFJlcXVlc3RTdWNjZXNzKHRydWUpLFxyXG4gICAgICAgICAgICAgIHNldElucHV0KGluaXRpYWxTdGF0ZSkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3RVcGRhdGUgPSBhc3luYyhlLCBpZCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KC4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCh7Li4uaW5wdXQsIHJlcXVlc3RJbWFnZXN9KTtcclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IFtcclxuICAgICAgICB7Y29udGVudDogXCJjb250YWN0XCIgLCBpY29uOiBjb250YWN0KCksIHRpdGxlOiBcIkNvbnRhY3RcIiwgaWQ6IDEgfSxcclxuICAgICAgICB7Y29udGVudDogXCJnYWxsZXJ5XCIsIGljb246IGdhbGxlcnkoKSwgdGl0bGU6IFwiR2FsbGVyeVwiLCBpZDogMn0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiU2hpcHBpbmdSZXF1ZXN0XCIsIGljb246IG9mZkJhY2soKSwgdGl0bGU6IFwiUmVxdWVzdFwiLCBpZDogM30sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiXCIsIGljb246IG1lc3NhZ2UoKSwgdGl0bGU6IFwiTWVzc2FnZVwiLCBpZDogNH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVxdWVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpbnB1dCwgZXJyb3IsIGxvYWRpbmcsIHNldFJlcXVlc3RJbWFnZXMsIHJlcXVlc3RJbWFnZXMsIHJlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2VzcywgaW5pdGlhbFN0YXRlLCBzZXRDb3VudCwgY291bnQsIHNldElucHV0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
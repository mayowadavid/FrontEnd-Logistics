webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/context/ClientContext.js":
/*!*********************************************!*\
  !*** ./components/context/ClientContext.js ***!
  \*********************************************/
/*! exports provided: ClientContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientContext", function() { return ClientContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../urlConfig */ "./urlConfig.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");





var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\context\\ClientContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ClientContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])();

var ClientContextProvider = function ClientContextProvider(props) {
  _s();

  var initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      profile = _useState[0],
      setProfile = _useState[1]; // .type !== Format[0] || Format[1] || Format[2]) && (profileImage.size <= Format[2] || profileImage.size <= Format[3])


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      profileImage = _useState2[0],
      setProfileImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      temporaryImage = _useState3[0],
      setTemporaryImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      count = _useState4[0],
      setCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      transaction = _useState5[0],
      setTransaction = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      progress = _useState7[0],
      setProgress = _useState7[1];

  var handleProfileChange = function handleProfileChange(e) {
    e.preventDefault();

    if (e.target.files) {
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var hold = filteredImageSize == true && URL.createObjectURL(selected);
      hold !== undefined && setTemporaryImage(hold);

      if (filteredImageSize == true) {
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_9__["store"].ref("profileimages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(snap) {
            var newPercentage;
            return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
          var _ref2 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(err) {
            return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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
        }(), /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
          var newUrl;
          return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return storageRef.getDownloadURL();

                case 2:
                  newUrl = _context3.sent;
                  _context3.next = 5;
                  return setProfileImage(newUrl);

                case 5:
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

  var profileDetails = function profileDetails(e) {
    e.preventDefault();
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    var _profile = _objectSpread({}, profile),
        formErrors = _profile.formErrors;

    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_8__["profileValidate"])(name, value, formErrors);
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
  };

  var handleProfileSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
      var token, res, updatedProfile, _profileImage;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              _context4.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/profile/update', profile, {
                headers: {
                  'Authorization': token ? "Bearer ".concat(token) : ''
                }
              });

            case 4:
              res = _context4.sent;

              if (res.status == 201) {
                updatedProfile = res.data.updatedProfile;
                _profileImage = updatedProfile.profileImage;
                setTemporaryImage(_profileImage);
              }

              ;

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleProfileSubmit(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleProfilePreview = function handleProfilePreview(e) {
    e.preventDefault();

    var newProfile = _objectSpread(_objectSpread({}, profile), {}, {
      profileImage: profileImage
    });

    setProfile(newProfile);
    setCount('active');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClientContext.Provider, {
    value: {
      transaction: transaction,
      setTransaction: setTransaction,
      handleProfileChange: handleProfileChange,
      handleProfilePreview: handleProfilePreview,
      handleProfileSubmit: handleProfileSubmit,
      profile: profile,
      setProfile: setProfile,
      setTemporaryImage: setTemporaryImage,
      temporaryImage: temporaryImage,
      profileDetails: profileDetails,
      profileImage: profileImage,
      setProfileImage: setProfileImage,
      count: count,
      setCount: setCount
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, _this);
};

_s(ClientContextProvider, "zd89XICrmg4Ojfgn/HYkBQq7/ss=");

_c = ClientContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (ClientContextProvider);

var _c;

$RefreshReg$(_c, "ClientContextProvider");

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

/***/ "./helpers/axios.js":
/*!**************************!*\
  !*** ./helpers/axios.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urlConfig */ "./urlConfig.js");


var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"]
});
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

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

/***/ "./pages/api/axios":
/*!*************************!*\
  !*** ./pages/api/axios ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../urlConfig */ "./urlConfig.js");




// const token = localStorage.getItem('token');


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"]
    // headers: {
    //     'Authorization': 
    //     token ? `Bearer ${token}`: ''
    // }
});

/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./urlConfig.js":
/*!**********************!*\
  !*** ./urlConfig.js ***!
  \**********************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
var baseUrl = "https://backend-logistics.herokuapp.com";
var api = "".concat(baseUrl, "/api");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9heGlvcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXJsQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNsaWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2xpZW50Q29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwiZm9ybUVycm9ycyIsInVzZVN0YXRlIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJwcm9maWxlSW1hZ2UiLCJzZXRQcm9maWxlSW1hZ2UiLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInRyYW5zYWN0aW9uIiwic2V0VHJhbnNhY3Rpb24iLCJlcnJvciIsInNldEVycm9yIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImhhbmRsZVByb2ZpbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsInNlbGVjdGVkIiwidHlwZXMiLCJmaWxlVHlwZSIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsInNuYXAiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsIm5ld1BlcmNlbnRhZ2UiLCJlcnIiLCJnZXREb3dubG9hZFVSTCIsIm5ld1VybCIsInJldm9rZU9iamVjdFVSTCIsInByb2ZpbGVEZXRhaWxzIiwidmFsdWUiLCJwcm9maWxlVmFsaWRhdGUiLCJoYW5kbGVQcm9maWxlU3VibWl0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInJlcyIsInN0YXR1cyIsInVwZGF0ZWRQcm9maWxlIiwiZGF0YSIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwibmV3UHJvZmlsZSIsImNoaWxkcmVuIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJhcGkiLCJiYXNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxFQUFuQzs7QUFFUCxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVMsRUFBRSxFQURRO0FBRW5CQyxZQUFRLEVBQUUsRUFGUztBQUduQkMsU0FBSyxFQUFFLEVBSFk7QUFJbkJDLGVBQVcsRUFBRSxFQUpNO0FBS25CQyxXQUFPLEVBQUUsRUFMVTtBQU1uQkMsY0FBVSxFQUFFO0FBQ1ZMLGVBQVMsRUFBRSxFQUREO0FBRVZDLGNBQVEsRUFBRSxFQUZBO0FBR1ZDLFdBQUssRUFBRSxFQUhHO0FBSVZDLGlCQUFXLEVBQUUsRUFKSDtBQUtWQyxhQUFPLEVBQUU7QUFMQztBQU5PLEdBQXJCOztBQUZxQyxrQkFpQlBFLHNEQUFRLENBQUNQLFlBQUQsQ0FqQkQ7QUFBQSxNQWlCOUJRLE9BakI4QjtBQUFBLE1BaUJyQkMsVUFqQnFCLGlCQW9CckM7OztBQXBCcUMsbUJBc0JHRixzREFBUSxFQXRCWDtBQUFBLE1Bc0I5QkcsWUF0QjhCO0FBQUEsTUFzQmhCQyxlQXRCZ0I7O0FBQUEsbUJBdUJLSixzREFBUSxFQXZCYjtBQUFBLE1BdUIvQkssY0F2QitCO0FBQUEsTUF1QmZDLGlCQXZCZTs7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Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNZOzs7QUFHdEM7OztBQUdBLHNCQUFzQiw0Q0FBSztBQUMzQixhQUFhLDhDQUFHO0FBQ2hCO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBLENBQUM7O0FBRWMsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDZjVCO0FBQUE7QUFBQSxJQUFNSSxPQUFPLEdBQUcseUNBQWhCO0FBQ08sSUFBTUQsR0FBRyxhQUFNQyxPQUFOLFNBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDAzZjBmODQ3MDE2ZWYzODQ5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0IH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dlbmVyYXRlUHVibGljVXJsfSBmcm9tICcuLi8uLi91cmxDb25maWcnO1xyXG5pbXBvcnQgeyBwcm9maWxlVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENsaWVudENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgICAgYWRkcmVzczogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5cclxuICAgIC8vIC50eXBlICE9PSBGb3JtYXRbMF0gfHwgRm9ybWF0WzFdIHx8IEZvcm1hdFsyXSkgJiYgKHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFsyXSB8fCBwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbM10pXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9maWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICAgICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgICAgICBsZXQgaG9sZCA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICAgICAgIGhvbGQgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShob2xkKTtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHByb2ZpbGVpbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9maWxlSW1hZ2UobmV3VXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9maWxlRGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIFxyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHtmb3JtRXJyb3JzfSA9IHsuLi5wcm9maWxlfVxyXG5cclxuICAgIHByb2ZpbGVWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgIHJldHVybiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCAgW25hbWVdOiB2YWx1ZX0pICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcHJvZmlsZS91cGRhdGUnLCBwcm9maWxlLCB7IGhlYWRlcnM6IHtcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gIH19KTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgIHNldFRlbXBvcmFyeUltYWdlKHByb2ZpbGVJbWFnZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbmV3UHJvZmlsZSA9IHsuLi5wcm9maWxlLCBwcm9maWxlSW1hZ2V9XHJcbiAgICBzZXRQcm9maWxlKG5ld1Byb2ZpbGUpO1xyXG4gICAgc2V0Q291bnQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vdXJsQ29uZmlnJzsgXHJcbiAgIFxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGFwaVxyXG59KTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcblxyXG5cclxuLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcblxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGFwaVxyXG4gICAgLy8gaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdBdXRob3JpemF0aW9uJzogXHJcbiAgICAvLyAgICAgdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICAgIC8vIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyIsImNvbnN0IGJhc2VVcmw9ICBcImh0dHBzOi8vYmFja2VuZC1sb2dpc3RpY3MuaGVyb2t1YXBwLmNvbVwiXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBgJHtiYXNlVXJsfS9hcGlgO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
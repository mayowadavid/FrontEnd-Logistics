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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      form = _useState4[0],
      setForm = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      count = _useState5[0],
      setCount = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      transaction = _useState6[0],
      setTransaction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      error = _useState7[0],
      setError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      progress = _useState8[0],
      setProgress = _useState8[1];

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
      var token, id, res, updatedProfile, _profileImage, newProfile;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              id = profile.id;
              _context4.next = 5;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/profile/update', form, {
                headers: {
                  'Authorization': token ? "Bearer ".concat(token) : ''
                }
              });

            case 5:
              res = _context4.sent;
              console.log(res);

              if (res.status == 201) {
                updatedProfile = res.data.updatedProfile;
                _profileImage = updatedProfile.profileImage;
                newProfile = Object(_urlConfig__WEBPACK_IMPORTED_MODULE_7__["generatePublicUrl"])(_profileImage);
                setTemporaryImage(newProfile);
              }

              ;

            case 9:
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

    var _profile2 = _objectSpread({}, profile),
        firstName = _profile2.firstName,
        lastName = _profile2.lastName,
        email = _profile2.email,
        phoneNumber = _profile2.phoneNumber,
        address = _profile2.address;

    var form = new FormData();
    profileImage !== undefined && form.append('profileImage', profileImage);
    form.append('firstName', firstName);
    form.append('email', email);
    form.append('lastName', lastName);
    form.append('phoneNumber', phoneNumber);
    form.append('address', address);
    setForm(form);
    setCount('active');

    var _iterator = _createForOfIteratorHelper(form.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        console.log([pair[0] + ',' + pair[1]]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
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
    lineNumber: 120,
    columnNumber: 9
  }, _this);
};

_s(ClientContextProvider, "w431zp33vOnHFVevWrNf0YSjA7g=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsImhvbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdG9yYWdlUmVmIiwic3RvcmUiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJuZXdVcmwiLCJyZXZva2VPYmplY3RVUkwiLCJwcm9maWxlRGV0YWlscyIsInZhbHVlIiwicHJvZmlsZVZhbGlkYXRlIiwiaGFuZGxlUHJvZmlsZVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlkIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJ1cGRhdGVkUHJvZmlsZSIsImRhdGEiLCJuZXdQcm9maWxlIiwiZ2VuZXJhdGVQdWJsaWNVcmwiLCJoYW5kbGVQcm9maWxlUHJldmlldyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7O0FBRVAsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFTLEVBQUUsRUFEUTtBQUVuQkMsWUFBUSxFQUFFLEVBRlM7QUFHbkJDLFNBQUssRUFBRSxFQUhZO0FBSW5CQyxlQUFXLEVBQUUsRUFKTTtBQUtuQkMsV0FBTyxFQUFFLEVBTFU7QUFNbkJDLGNBQVUsRUFBRTtBQUNWTCxlQUFTLEVBQUUsRUFERDtBQUVWQyxjQUFRLEVBQUUsRUFGQTtBQUdWQyxXQUFLLEVBQUUsRUFIRztBQUlWQyxpQkFBVyxFQUFFLEVBSkg7QUFLVkMsYUFBTyxFQUFFO0FBTEM7QUFOTyxHQUFyQjs7QUFGcUMsa0JBaUJQRSxzREFBUSxDQUFDUCxZQUFELENBakJEO0FBQUEsTUFpQjlCUSxPQWpCOEI7QUFBQSxNQWlCckJDLFVBakJxQixpQkFvQnJDOzs7QUFwQnFDLG1CQXNCR0Ysc0RBQVEsRUF0Qlg7QUFBQSxNQXNCOUJHLFlBdEI4QjtBQUFBLE1Bc0JoQkMsZUF0QmdCOztBQUFBLG1CQXdCS0osc0RBQVEsRUF4QmI7QUFBQSxNQXdCL0JLLGNBeEIrQjtBQUFBLE1Bd0JmQyxpQkF4QmU7O0FBQUEsbUJBeUJkTixzREFBUSxFQXpCTTtBQUFBLE1BeUIvQk8sSUF6QitCO0FBQUEsTUF5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O0FBQUE7QUFnQm5DLEdBaEJEOztBQXdCRSxzQkFDSSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRTVELGlCQUFXLEVBQVhBLFdBQUY7QUFBZUMsb0JBQWMsRUFBZEEsY0FBZjtBQUErQksseUJBQW1CLEVBQW5CQSxtQkFBL0I7QUFBb0RrRCwwQkFBb0IsRUFBcEJBLG9CQUFwRDtBQUEwRWhCLHlCQUFtQixFQUFuQkEsbUJBQTFFO0FBQStGbEQsYUFBTyxFQUFQQSxPQUEvRjtBQUF3R0MsZ0JBQVUsRUFBVkEsVUFBeEc7QUFBb0hJLHVCQUFpQixFQUFqQkEsaUJBQXBIO0FBQXVJRCxvQkFBYyxFQUFkQSxjQUF2STtBQUF1SjJDLG9CQUFjLEVBQWRBLGNBQXZKO0FBQXVLN0Msa0JBQVksRUFBWkEsWUFBdks7QUFBcUxDLHFCQUFlLEVBQWZBLGVBQXJMO0FBQXNNSyxXQUFLLEVBQUxBLEtBQXRNO0FBQTZNQyxjQUFRLEVBQVJBO0FBQTdNLEtBQS9CO0FBQUEsY0FDS2xCLEtBQUssQ0FBQ2dGO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FsSEQ7O0dBQU1qRixxQjs7S0FBQUEscUI7QUFvSFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGFkMzM0YjBhOTczOTQ4NWVhZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9iamVjdCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnZW5lcmF0ZVB1YmxpY1VybH0gZnJvbSAnLi4vLi4vdXJsQ29uZmlnJztcclxuaW1wb3J0IHsgcHJvZmlsZVZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgICAvLyAudHlwZSAhPT0gRm9ybWF0WzBdIHx8IEZvcm1hdFsxXSB8fCBGb3JtYXRbMl0pICYmIChwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbMl0gfHwgcHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzNdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgICAgICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICAgICAgbGV0IGhvbGQgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGBwcm9maWxlaW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZmlsZUltYWdlKG5ld1VybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlL3VwZGF0ZScsIGZvcm0sIHsgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgfX0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBsZXQgbmV3UHJvZmlsZSA9IGdlbmVyYXRlUHVibGljVXJsKHByb2ZpbGVJbWFnZSk7XHJcbiAgICAgc2V0VGVtcG9yYXJ5SW1hZ2UobmV3UHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3N9ID0gey4uLiBwcm9maWxlfVxyXG4gICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2ZpbGVJbWFnZSAhPT0gdW5kZWZpbmVkICYmIChmb3JtLmFwcGVuZCgncHJvZmlsZUltYWdlJywgcHJvZmlsZUltYWdlKSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnZmlyc3ROYW1lJywgZmlyc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm0uYXBwZW5kKCdsYXN0TmFtZScsIGxhc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdwaG9uZU51bWJlcicsICBwaG9uZU51bWJlcik7XHJcbiAgICBmb3JtLmFwcGVuZCgnYWRkcmVzcycsICBhZGRyZXNzKTtcclxuICAgIHNldEZvcm0oZm9ybSk7XHJcbiAgICBzZXRDb3VudCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
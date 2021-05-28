webpackHotUpdate_N_E("pages/profile",{

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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      selected = _useState7[0],
      setSelected = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      progress = _useState9[0],
      setProgress = _useState9[1];

  console.log(temporaryImage);
  selected !== undefined && console.log(selected.size);

  var handleProfileChange = function handleProfileChange(e) {
    e.preventDefault();

    if (e.target.files) {
      setSelected(e.target.files[0]);
      var types = ['image/jpeg', 'image/png'];
      var filteredImage = selected ? types.includes(selected.type) : '';

      if (filteredImage) {
        var FileSize = "5000000";
        var filteredImageSize = selected.size < FileSize ? selected : setError("file too large *5mb minimum");
        var hold = filteredImageSize == selected && URL.createObjectURL(filteredImageSize);
        hold && setTemporaryImage(hold);

        if (filteredImageSize == selected) {
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
      } else {
        setError("unsupported image type* accepted image jpg/png");
      }
    }
  };

  var formValid = function formValid(formErrors) {
    var valid = true;
    prop_types__WEBPACK_IMPORTED_MODULE_4__["object"].values(formErrors).forEach(function (val) {
      val.length > 0 && (valid = false);
    });
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
    lineNumber: 133,
    columnNumber: 9
  }, _this);
};

_s(ClientContextProvider, "CZncSi1jehpd+Nd1aUMyKU8VINI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInNpemUiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlcyIsImZpbHRlcmVkSW1hZ2UiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0b3JhZ2VSZWYiLCJzdG9yZSIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsInNuYXAiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsIm5ld1BlcmNlbnRhZ2UiLCJlcnIiLCJnZXREb3dubG9hZFVSTCIsIm5ld1VybCIsInJldm9rZU9iamVjdFVSTCIsImZvcm1WYWxpZCIsInZhbGlkIiwib2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbCIsImxlbmd0aCIsInByb2ZpbGVEZXRhaWxzIiwidmFsdWUiLCJwcm9maWxlVmFsaWRhdGUiLCJoYW5kbGVQcm9maWxlU3VibWl0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwicmVzIiwic3RhdHVzIiwidXBkYXRlZFByb2ZpbGUiLCJkYXRhIiwibmV3UHJvZmlsZSIsImdlbmVyYXRlUHVibGljVXJsIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJGb3JtRGF0YSIsImFwcGVuZCIsImVudHJpZXMiLCJwYWlyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DOztBQUVQLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBUyxFQUFFLEVBRFE7QUFFbkJDLFlBQVEsRUFBRSxFQUZTO0FBR25CQyxTQUFLLEVBQUUsRUFIWTtBQUluQkMsZUFBVyxFQUFFLEVBSk07QUFLbkJDLFdBQU8sRUFBRSxFQUxVO0FBTW5CQyxjQUFVLEVBQUU7QUFDVkwsZUFBUyxFQUFFLEVBREQ7QUFFVkMsY0FBUSxFQUFFLEVBRkE7QUFHVkMsV0FBSyxFQUFFLEVBSEc7QUFJVkMsaUJBQVcsRUFBRSxFQUpIO0FBS1ZDLGFBQU8sRUFBRTtBQUxDO0FBTk8sR0FBckI7O0FBRnFDLGtCQWlCUEUsc0RBQVEsQ0FBQ1AsWUFBRCxDQWpCRDtBQUFBLE1BaUI5QlEsT0FqQjhCO0FBQUEsTUFpQnJCQyxVQWpCcUIsaUJBb0JyQzs7O0FBcEJxQyxtQkFzQkdGLHNEQUFRLEVBdEJYO0FBQUEsTUFzQjlCRyxZQXRCOEI7QUFBQSxNQXNCaEJDLGVBdEJnQjs7QUFBQSxtQkF3QktKLHNEQUFRLEVBeEJiO0FBQUEsTUF3Qi9CSyxjQXhCK0I7QUFBQSxNQXdCZkMsaUJBeEJlOztBQUFBLG1CQXlCZE4sc0RBQVEsRUF6Qk07QUFBQSxNQXlCL0JPLElBekIrQjtBQUFBLE1BeUJ6QkMsT0F6QnlCOztBQUFBLG1CQTBCWFIsc0RBQVEsRUExQkc7QUFBQSxNQTBCOUJTLEtBMUI4QjtBQUFBLE1BMEJ2QkMsUUExQnVCOztBQUFBLG1CQTJCQ1Ysc0RBQVEsQ0FBQyxFQUFELENBM0JUO0FBQUEsTUEyQjlCVyxXQTNCOEI7QUFBQSxNQTJCakJDLGNBM0JpQjs7QUFBQSxtQkE0QkxaLHNEQUFRLEVBNUJIO0FBQUEsTUE0QjlCYSxRQTVCOEI7QUFBQSxNQTRCcEJDLFdBNUJvQjs7QUFBQSxtQkE2QlhkLHNEQUFRLENBQUMsSUFBRCxDQTdCRztBQUFBLE1BNkI5QmUsS0E3QjhCO0FBQUEsTUE2QnZCQyxRQTdCdUI7O0FBQUEsbUJBOEJMaEIsc0RBQVEsQ0FBQyxDQUFELENBOUJIO0FBQUEsTUE4QjlCaUIsUUE5QjhCO0FBQUEsTUE4QnBCQyxXQTlCb0I7O0FBK0JyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlmLGNBQVo7QUFDQVEsVUFBUSxLQUFLUSxTQUFiLElBQTBCRixPQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBUSxDQUFDUyxJQUFyQixDQUExQjs7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBTztBQUMvQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNELFFBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFaLEVBQWtCO0FBQ2hCYixpQkFBVyxDQUFFVSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRixDQUFYO0FBQ0QsVUFBSUMsS0FBSyxHQUFHLENBQUMsWUFBRCxFQUFlLFdBQWYsQ0FBWjtBQUNBLFVBQUlDLGFBQWEsR0FBRWhCLFFBQVEsR0FBR2UsS0FBSyxDQUFDRSxRQUFOLENBQWVqQixRQUFRLENBQUNrQixJQUF4QixDQUFILEdBQWtDLEVBQTdEOztBQUNBLFVBQUdGLGFBQUgsRUFBaUI7QUFDZixZQUFJRyxRQUFRLEdBQUcsU0FBZjtBQUNELFlBQUlDLGlCQUFpQixHQUFHcEIsUUFBUSxDQUFDUyxJQUFULEdBQWdCVSxRQUFoQixHQUEyQm5CLFFBQTNCLEdBQXNDRyxRQUFRLENBQUMsNkJBQUQsQ0FBdEU7QUFDQSxZQUFJa0IsSUFBSSxHQUFHRCxpQkFBaUIsSUFBSXBCLFFBQXJCLElBQWtDc0IsR0FBRyxDQUFDQyxlQUFKLENBQW9CSCxpQkFBcEIsQ0FBN0M7QUFDQUMsWUFBSSxJQUFJNUIsaUJBQWlCLENBQUM0QixJQUFELENBQXpCOztBQUNDLFlBQUdELGlCQUFpQixJQUFJcEIsUUFBeEIsRUFBa0M7QUFDbEMsY0FBTXdCLFVBQVUsR0FBR0MsK0NBQUssQ0FBQ0MsR0FBTix5QkFBMkIxQixRQUFRLENBQUMyQixJQUFwQyxFQUFuQjtBQUNFSCxvQkFBVSxDQUFDSSxHQUFYLENBQWU1QixRQUFmLEVBQXlCNkIsRUFBekIsQ0FBNEIsZUFBNUI7QUFBQSxnUkFDQSxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUMrQkEsSUFBSSxDQUFDQyxnQkFBTCxHQUF3QkQsSUFBSSxDQUFDRSxVQUQ1RDs7QUFBQTtBQUFBO0FBQ1FDLG1DQURSLGlCQUMwRSxHQUQxRTtBQUFBO0FBQUEsNkJBRU01QixXQUFXLENBQUM0QixhQUFELENBRmpCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpUkFJSSxrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDRS9CLFFBQVEsQ0FBQytCLEdBQUQsQ0FEVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFSQU1HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ29CVixVQUFVLENBQUNXLGNBQVgsRUFEcEI7O0FBQUE7QUFDS0MsMEJBREw7QUFBQTtBQUFBLDJCQUVHN0MsZUFBZSxDQUFDNkMsTUFBRCxDQUZsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5IO0FBVUQ7O0FBQ0ZkLFdBQUcsQ0FBQ2UsZUFBSixDQUFvQnJDLFFBQXBCO0FBQ0EsT0FuQkQsTUFtQks7QUFDSEcsZ0JBQVEsQ0FBQyxnREFBRCxDQUFSO0FBQ0Q7QUFBQztBQUNQLEdBNUJDOztBQThCRixNQUFNbUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQXBELFVBQVUsRUFBSTtBQUM5QixRQUFJcUQsS0FBSyxHQUFHLElBQVo7QUFFQUMscURBQU0sQ0FBQ0MsTUFBUCxDQUFjdkQsVUFBZCxFQUEwQndELE9BQTFCLENBQWtDLFVBQUFDLEdBQUcsRUFBSTtBQUN2Q0EsU0FBRyxDQUFDQyxNQUFKLEdBQWEsQ0FBYixLQUFtQkwsS0FBSyxHQUFHLEtBQTNCO0FBQ0QsS0FGRDtBQUdELEdBTkQ7O0FBUUEsTUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDbEMsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFENEIsb0JBR05ELENBQUMsQ0FBQ0UsTUFISTtBQUFBLFFBR3JCYyxJQUhxQixhQUdyQkEsSUFIcUI7QUFBQSxRQUdmbUIsS0FIZSxhQUdmQSxLQUhlOztBQUFBLHFDQUlMMUQsT0FKSztBQUFBLFFBSXZCRixVQUp1QixZQUl2QkEsVUFKdUI7O0FBTTVCNkQsK0VBQWUsQ0FBQ3BCLElBQUQsRUFBT21CLEtBQVAsRUFBYzVELFVBQWQsQ0FBZjtBQUNFLFdBQU9HLFVBQVUsaUNBQUtELE9BQUwseUlBQWdCdUMsSUFBaEIsRUFBdUJtQixLQUF2QixHQUFqQjtBQUNILEdBUkQ7O0FBVUEsTUFBTUUsbUJBQW1CO0FBQUEseVFBQUcsa0JBQU1yQyxDQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNNcUMsbUJBRm9CLEdBRVpDLFlBQVksSUFBSUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRko7QUFHdEJDLGdCQUhzQixHQUdqQmhFLE9BQU8sQ0FBQ2dFLEVBSFM7QUFBQTtBQUFBLHFCQUlWQyxzREFBSyxDQUFDQyxJQUFOLENBQVcsaUJBQVgsRUFBOEI1RCxJQUE5QixFQUFvQztBQUFFNkQsdUJBQU8sRUFBRTtBQUM3RCxtQ0FBaUJOLEtBQUssb0JBQWFBLEtBQWIsSUFBc0I7QUFEaUI7QUFBWCxlQUFwQyxDQUpVOztBQUFBO0FBSXRCTyxpQkFKc0I7QUFPMUJsRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlpRCxHQUFaOztBQUNBLGtCQUFHQSxHQUFHLENBQUNDLE1BQUosSUFBYyxHQUFqQixFQUFxQjtBQUNaQyw4QkFEWSxHQUNNRixHQUFHLENBQUNHLElBRFYsQ0FDWkQsY0FEWTtBQUVacEUsNkJBRlksR0FFSW9FLGNBRkosQ0FFWnBFLFlBRlk7QUFHZnNFLDBCQUhlLEdBR0ZDLG9FQUFpQixDQUFDdkUsYUFBRCxDQUhmO0FBSXBCRyxpQ0FBaUIsQ0FBQ21FLFVBQUQsQ0FBakI7QUFDQTs7QUFDRDs7QUFkMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJaLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFpQkEsTUFBTWMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDbkQsQ0FBRCxFQUFPO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7O0FBRGtDLHNDQUU4QnhCLE9BRjlCO0FBQUEsUUFFM0JQLFNBRjJCLGFBRTNCQSxTQUYyQjtBQUFBLFFBRWhCQyxRQUZnQixhQUVoQkEsUUFGZ0I7QUFBQSxRQUVOQyxLQUZNLGFBRU5BLEtBRk07QUFBQSxRQUVDQyxXQUZELGFBRUNBLFdBRkQ7QUFBQSxRQUVjQyxPQUZkLGFBRWNBLE9BRmQ7O0FBR2xDLFFBQUlTLElBQUksR0FBRyxJQUFJcUUsUUFBSixFQUFYO0FBQ0F6RSxnQkFBWSxLQUFLa0IsU0FBakIsSUFBK0JkLElBQUksQ0FBQ3NFLE1BQUwsQ0FBWSxjQUFaLEVBQTRCMUUsWUFBNUIsQ0FBL0I7QUFDQUksUUFBSSxDQUFDc0UsTUFBTCxDQUFZLFdBQVosRUFBeUJuRixTQUF6QjtBQUNBYSxRQUFJLENBQUNzRSxNQUFMLENBQVksT0FBWixFQUFxQmpGLEtBQXJCO0FBQ0FXLFFBQUksQ0FBQ3NFLE1BQUwsQ0FBWSxVQUFaLEVBQXdCbEYsUUFBeEI7QUFDQVksUUFBSSxDQUFDc0UsTUFBTCxDQUFZLGFBQVosRUFBNEJoRixXQUE1QjtBQUNBVSxRQUFJLENBQUNzRSxNQUFMLENBQVksU0FBWixFQUF3Qi9FLE9BQXhCO0FBQ0FVLFdBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQyxRQUFELENBQVI7O0FBWGtDLCtDQVliSCxJQUFJLENBQUN1RSxPQUFMLEVBWmE7QUFBQTs7QUFBQTtBQVk3QiwwREFBK0I7QUFBQSxZQUF2QkMsSUFBdUI7QUFDOUI1RCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDMkQsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFTLEdBQVQsR0FBZUEsSUFBSSxDQUFDLENBQUQsQ0FBcEIsQ0FBWjtBQUNMO0FBZGlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQm5DLEdBaEJEOztBQXdCRSxzQkFDSSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRXBFLGlCQUFXLEVBQVhBLFdBQUY7QUFBZUMsb0JBQWMsRUFBZEEsY0FBZjtBQUErQlcseUJBQW1CLEVBQW5CQSxtQkFBL0I7QUFBb0RvRCwwQkFBb0IsRUFBcEJBLG9CQUFwRDtBQUEwRWQseUJBQW1CLEVBQW5CQSxtQkFBMUU7QUFBK0Y1RCxhQUFPLEVBQVBBLE9BQS9GO0FBQXdHQyxnQkFBVSxFQUFWQSxVQUF4RztBQUFvSEksdUJBQWlCLEVBQWpCQSxpQkFBcEg7QUFBdUlELG9CQUFjLEVBQWRBLGNBQXZJO0FBQXVKcUQsb0JBQWMsRUFBZEEsY0FBdko7QUFBdUt2RCxrQkFBWSxFQUFaQSxZQUF2SztBQUFxTEMscUJBQWUsRUFBZkEsZUFBckw7QUFBc01LLFdBQUssRUFBTEEsS0FBdE07QUFBNk1DLGNBQVEsRUFBUkE7QUFBN00sS0FBL0I7QUFBQSxjQUNLbEIsS0FBSyxDQUFDd0Y7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQS9IRDs7R0FBTXpGLHFCOztLQUFBQSxxQjtBQWlJU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41MzI4OGExMGYzYjI2NDA4OTY0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0IH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dlbmVyYXRlUHVibGljVXJsfSBmcm9tICcuLi8uLi91cmxDb25maWcnO1xyXG5pbXBvcnQgeyBwcm9maWxlVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENsaWVudENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgICAgYWRkcmVzczogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5cclxuICAgIC8vIC50eXBlICE9PSBGb3JtYXRbMF0gfHwgRm9ybWF0WzFdIHx8IEZvcm1hdFsyXSkgJiYgKHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFsyXSB8fCBwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbM10pXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnNvbGUubG9nKHRlbXBvcmFyeUltYWdlKTtcclxuICAgIHNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgY29uc29sZS5sb2coc2VsZWN0ZWQuc2l6ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVQcm9maWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICAgICAgc2V0U2VsZWN0ZWQoIGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2U9IHNlbGVjdGVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6ICcnXHJcbiAgICAgICAgaWYoZmlsdGVyZWRJbWFnZSl7XHJcbiAgICAgICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSAgc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplID8gc2VsZWN0ZWQgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gc2VsZWN0ZWQgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsdGVyZWRJbWFnZVNpemUpKTsgXHJcbiAgICAgICAgIGhvbGQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSBzZWxlY3RlZCApe1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIilcclxuICAgICAgICB9fVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1WYWxpZCA9IGZvcm1FcnJvcnMgPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBvYmplY3QudmFsdWVzKGZvcm1FcnJvcnMpLmZvckVhY2godmFsID0+IHtcclxuICAgICAgdmFsLmxlbmd0aCA+IDAgJiYgKHZhbGlkID0gZmFsc2UpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlL3VwZGF0ZScsIGZvcm0sIHsgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgfX0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBsZXQgbmV3UHJvZmlsZSA9IGdlbmVyYXRlUHVibGljVXJsKHByb2ZpbGVJbWFnZSk7XHJcbiAgICAgc2V0VGVtcG9yYXJ5SW1hZ2UobmV3UHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3N9ID0gey4uLiBwcm9maWxlfVxyXG4gICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2ZpbGVJbWFnZSAhPT0gdW5kZWZpbmVkICYmIChmb3JtLmFwcGVuZCgncHJvZmlsZUltYWdlJywgcHJvZmlsZUltYWdlKSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnZmlyc3ROYW1lJywgZmlyc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm0uYXBwZW5kKCdsYXN0TmFtZScsIGxhc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdwaG9uZU51bWJlcicsICBwaG9uZU51bWJlcik7XHJcbiAgICBmb3JtLmFwcGVuZCgnYWRkcmVzcycsICBhZGRyZXNzKTtcclxuICAgIHNldEZvcm0oZm9ybSk7XHJcbiAgICBzZXRDb3VudCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
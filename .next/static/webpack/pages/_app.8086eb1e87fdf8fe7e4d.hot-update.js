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

  console.log(temporaryImage);
  console.log(error);

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
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwiZm9ybVZhbGlkIiwidmFsaWQiLCJvYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsIiwibGVuZ3RoIiwicHJvZmlsZURldGFpbHMiLCJ2YWx1ZSIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXMiLCJzdGF0dXMiLCJ1cGRhdGVkUHJvZmlsZSIsImRhdGEiLCJuZXdQcm9maWxlIiwiZ2VuZXJhdGVQdWJsaWNVcmwiLCJoYW5kbGVQcm9maWxlUHJldmlldyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsInBhaXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7O0FBRVAsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFTLEVBQUUsRUFEUTtBQUVuQkMsWUFBUSxFQUFFLEVBRlM7QUFHbkJDLFNBQUssRUFBRSxFQUhZO0FBSW5CQyxlQUFXLEVBQUUsRUFKTTtBQUtuQkMsV0FBTyxFQUFFLEVBTFU7QUFNbkJDLGNBQVUsRUFBRTtBQUNWTCxlQUFTLEVBQUUsRUFERDtBQUVWQyxjQUFRLEVBQUUsRUFGQTtBQUdWQyxXQUFLLEVBQUUsRUFIRztBQUlWQyxpQkFBVyxFQUFFLEVBSkg7QUFLVkMsYUFBTyxFQUFFO0FBTEM7QUFOTyxHQUFyQjs7QUFGcUMsa0JBaUJQRSxzREFBUSxDQUFDUCxZQUFELENBakJEO0FBQUEsTUFpQjlCUSxPQWpCOEI7QUFBQSxNQWlCckJDLFVBakJxQixpQkFvQnJDOzs7QUFwQnFDLG1CQXNCR0Ysc0RBQVEsRUF0Qlg7QUFBQSxNQXNCOUJHLFlBdEI4QjtBQUFBLE1Bc0JoQkMsZUF0QmdCOztBQUFBLG1CQXdCS0osc0RBQVEsRUF4QmI7QUFBQSxNQXdCL0JLLGNBeEIrQjtBQUFBLE1Bd0Jm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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODA4NmViMWU4N2ZkZjhmZTdlNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9iamVjdCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnZW5lcmF0ZVB1YmxpY1VybH0gZnJvbSAnLi4vLi4vdXJsQ29uZmlnJztcclxuaW1wb3J0IHsgcHJvZmlsZVZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgICAvLyAudHlwZSAhPT0gRm9ybWF0WzBdIHx8IEZvcm1hdFsxXSB8fCBGb3JtYXRbMl0pICYmIChwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbMl0gfHwgcHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzNdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZW1wb3JhcnlJbWFnZSk7XHJcbiAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgICAgICAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKGhvbGQpO1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1WYWxpZCA9IGZvcm1FcnJvcnMgPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBvYmplY3QudmFsdWVzKGZvcm1FcnJvcnMpLmZvckVhY2godmFsID0+IHtcclxuICAgICAgdmFsLmxlbmd0aCA+IDAgJiYgKHZhbGlkID0gZmFsc2UpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlL3VwZGF0ZScsIGZvcm0sIHsgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgfX0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBsZXQgbmV3UHJvZmlsZSA9IGdlbmVyYXRlUHVibGljVXJsKHByb2ZpbGVJbWFnZSk7XHJcbiAgICAgc2V0VGVtcG9yYXJ5SW1hZ2UobmV3UHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3N9ID0gey4uLiBwcm9maWxlfVxyXG4gICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2ZpbGVJbWFnZSAhPT0gdW5kZWZpbmVkICYmIChmb3JtLmFwcGVuZCgncHJvZmlsZUltYWdlJywgcHJvZmlsZUltYWdlKSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnZmlyc3ROYW1lJywgZmlyc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm0uYXBwZW5kKCdsYXN0TmFtZScsIGxhc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdwaG9uZU51bWJlcicsICBwaG9uZU51bWJlcik7XHJcbiAgICBmb3JtLmFwcGVuZCgnYWRkcmVzcycsICBhZGRyZXNzKTtcclxuICAgIHNldEZvcm0oZm9ybSk7XHJcbiAgICBzZXRDb3VudCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
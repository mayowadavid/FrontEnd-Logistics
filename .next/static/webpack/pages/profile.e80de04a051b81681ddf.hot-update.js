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
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







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

  var handleProfileChange = function handleProfileChange(e) {
    e.preventDefault();

    if (e.target.files) {
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = error == undefined ? types.includes(selected.size < FileSize) : setError("file too large *5mb minimum");
      var hold = error == undefined && URL.createObjectURL(filteredImageSize);
      hold !== undefined && setTemporaryImage(hold); // if(filteredImageSize == selected ){
      // const storageRef = store.ref(`profileimages/${selected.name}`);
      //   storageRef.put(selected).on('state_changed', 
      //   async (snap) => {
      //     const newPercentage = await (snap.bytesTransferred / snap.totalBytes) * 100;
      //   await setProgress(newPercentage);
      //   },  async (err) => {
      //   await setError(err);
      //   }, async () => {
      //     const newUrl = await storageRef.getDownloadURL();
      //   await setProfileImage(newUrl);
      //   });
      // }
      //  URL.revokeObjectURL(selected);   
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
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
  };

  var handleProfileSubmit = /*#__PURE__*/function () {
    var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var token, id, res, updatedProfile, _profileImage, newProfile;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              id = profile.id;
              _context.next = 5;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/profile/update', form, {
                headers: {
                  'Authorization': token ? "Bearer ".concat(token) : ''
                }
              });

            case 5:
              res = _context.sent;
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
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleProfileSubmit(_x) {
      return _ref.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJzaXplIiwiaG9sZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZvcm1WYWxpZCIsInZhbGlkIiwib2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbCIsImxlbmd0aCIsInByb2ZpbGVEZXRhaWxzIiwibmFtZSIsInZhbHVlIiwicHJvZmlsZVZhbGlkYXRlIiwiaGFuZGxlUHJvZmlsZVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlkIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInJlcyIsInN0YXR1cyIsInVwZGF0ZWRQcm9maWxlIiwiZGF0YSIsIm5ld1Byb2ZpbGUiLCJnZW5lcmF0ZVB1YmxpY1VybCIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxFQUFuQzs7QUFFUCxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVMsRUFBRSxFQURRO0FBRW5CQyxZQUFRLEVBQUUsRUFGUztBQUduQkMsU0FBSyxFQUFFLEVBSFk7QUFJbkJDLGVBQVcsRUFBRSxFQUpNO0FBS25CQyxXQUFPLEVBQUUsRUFMVTtBQU1uQkMsY0FBVSxFQUFFO0FBQ1ZMLGVBQVMsRUFBRSxFQUREO0FBRVZDLGNBQVEsRUFBRSxFQUZBO0FBR1ZDLFdBQUssRUFBRSxFQUhHO0FBSVZDLGlCQUFXLEVBQUUsRUFKSDtBQUtWQyxhQUFPLEVBQUU7QUFMQztBQU5PLEdBQXJCOztBQUZxQyxrQkFpQlBFLHNEQUFRLENBQUNQLFlBQUQsQ0FqQkQ7QUFBQSxNQWlCOUJRLE9BakI4QjtBQUFBLE1BaUJyQkMsVUFqQnFCLGlCQW9CckM7OztBQXBCcUMsbUJBc0JHRixzREFBUSxFQXRCWDtBQUFBLE1Bc0I5QkcsWUF0QjhCO0FBQUEsTUFzQmhCQyxlQXRCZ0I7O0FBQUEsbUJBd0JLSixzREFBUSxFQXhCYjtBQUFBLE1Bd0IvQkssY0F4QitCO0FBQUEsTUF3QmZDLGlCQXhCZTs7QUFBQSxtQkF5QmROLHNEQUFRLEVBekJNO0FBQUEsTUF5Qi9CTyxJQXpCK0I7QUFBQSxNQXlCekJDLE9BekJ5Qjs7QUFBQSxtQkEwQlhSLHNEQUFRLEVBMUJHO0FBQUEsTUEwQjlCUyxLQTFCOEI7QUFBQSxNQTBCdkJDLFFBMUJ1Qjs7QUFBQSxtQkEyQkNW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S0FBQUEscUI7QUE2SFNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZTgwZGUwNGEwNTFiODE2ODFkZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9iamVjdCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHtnZW5lcmF0ZVB1YmxpY1VybH0gZnJvbSAnLi4vLi4vdXJsQ29uZmlnJztcclxuaW1wb3J0IHsgcHJvZmlsZVZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgICAvLyAudHlwZSAhPT0gRm9ybWF0WzBdIHx8IEZvcm1hdFsxXSB8fCBGb3JtYXRbMl0pICYmIChwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbMl0gfHwgcHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzNdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZW1wb3JhcnlJbWFnZSk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgICAgICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgICBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGVycm9yID09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSkgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZXJyb3IgPT0gdW5kZWZpbmVkICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbHRlcmVkSW1hZ2VTaXplKSk7IFxyXG4gICAgICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICAvLyBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSBzZWxlY3RlZCApe1xyXG4gICAgICAgICAgLy8gY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAvLyAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgLy8gICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgLy8gICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgIC8vICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAvLyAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAvLyAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIC8vICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAvLyAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1WYWxpZCA9IGZvcm1FcnJvcnMgPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBvYmplY3QudmFsdWVzKGZvcm1FcnJvcnMpLmZvckVhY2godmFsID0+IHtcclxuICAgICAgdmFsLmxlbmd0aCA+IDAgJiYgKHZhbGlkID0gZmFsc2UpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlL3VwZGF0ZScsIGZvcm0sIHsgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgfX0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgICBsZXQgbmV3UHJvZmlsZSA9IGdlbmVyYXRlUHVibGljVXJsKHByb2ZpbGVJbWFnZSk7XHJcbiAgICAgc2V0VGVtcG9yYXJ5SW1hZ2UobmV3UHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3N9ID0gey4uLiBwcm9maWxlfVxyXG4gICAgbGV0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2ZpbGVJbWFnZSAhPT0gdW5kZWZpbmVkICYmIChmb3JtLmFwcGVuZCgncHJvZmlsZUltYWdlJywgcHJvZmlsZUltYWdlKSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnZmlyc3ROYW1lJywgZmlyc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm0uYXBwZW5kKCdsYXN0TmFtZScsIGxhc3ROYW1lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdwaG9uZU51bWJlcicsICBwaG9uZU51bWJlcik7XHJcbiAgICBmb3JtLmFwcGVuZCgnYWRkcmVzcycsICBhZGRyZXNzKTtcclxuICAgIHNldEZvcm0oZm9ybSk7XHJcbiAgICBzZXRDb3VudCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGZvcihsZXQgcGFpciBvZiBmb3JtLmVudHJpZXMoKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhbcGFpclswXSsgJywnICsgcGFpclsxXV0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
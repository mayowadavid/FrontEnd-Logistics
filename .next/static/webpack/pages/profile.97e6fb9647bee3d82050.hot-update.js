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
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var hold = fileImageSize == true && URL.createObjectURL(filteredImageSize);
      console.log(hold); //  hold !== undefined && setTemporaryImage(hold);
      // if(filteredImageSize == selected ){
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
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiZmlsZUltYWdlU2l6ZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZvcm1WYWxpZCIsInZhbGlkIiwib2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbCIsImxlbmd0aCIsInByb2ZpbGVEZXRhaWxzIiwibmFtZSIsInZhbHVlIiwicHJvZmlsZVZhbGlkYXRlIiwiaGFuZGxlUHJvZmlsZVN1Ym1pdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlkIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsInJlcyIsInN0YXR1cyIsInVwZGF0ZWRQcm9maWxlIiwiZGF0YSIsIm5ld1Byb2ZpbGUiLCJnZW5lcmF0ZVB1YmxpY1VybCIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxFQUFuQzs7QUFFUCxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVMsRUFBRSxFQURRO0FBRW5CQyxZQUFRLEVBQUUsRUFGUztBQUduQkMsU0FBSyxFQUFFLEVBSFk7QUFJbkJDLGVBQVcsRUFBRSxFQUpNO0FBS25CQyxXQUFPLEVBQUUsRUFMVTtBQU1uQkMsY0FBVSxFQUFFO0FBQ1ZMLGVBQVMsRUFBRSxFQUREO0FBRVZDLGNBQVEsRUFBRSxFQUZBO0FBR1ZDLFdBQUssRUFBRSxFQUhHO0FBSVZDLGlCQUFXLEVBQUUsRUFKSDtBQUtWQyxhQUFPLEVBQUU7QUFMQztBQU5PLEdBQXJCOztBQUZxQyxrQkFpQlBFLHNEQUFRLENBQUNQLFlBQUQsQ0FqQkQ7QUFBQSxNQWlCOUJRLE9BakI4QjtBQUFBLE1BaUJyQkMsVUFqQnFCLGlCQW9CckM7OztBQXBCcUMsbUJBc0JHRixzREFBUSxFQXRCWDtBQUFBLE1Bc0I5QkcsWUF0QjhCO0FBQUEsTUFzQmhCQyxlQXRCZ0I7O0FBQUEsbUJBd0JLSixzREFBUSxFQXhCYjtBQUFBLE1Bd0IvQkssY0F4QitCO0FBQUEsTUF3QmZDLGlCQXhCZTs7QUFBQSxtQkF5QmROLHNEQUFRLEVBekJNO0FBQUEsTUF5Qi9CTyxJQXpCK0I7QUFBQSxNQXlCekJDLE9BekJ5Qjs7QUFBQSxtQkEwQlhSLHNEQUFRLEVBMUJHO0FBQUEsTUEwQjlCUyxLQTFCOEI7QUFBQSxN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QUFBLHFCO0FBOEhTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk3ZTZmYjk2NDdiZWUzZDgyMDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ2xpZW50Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgICBhZGRyZXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4gICAgLy8gLnR5cGUgIT09IEZvcm1hdFswXSB8fCBGb3JtYXRbMV0gfHwgRm9ybWF0WzJdKSAmJiAocHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzJdIHx8IHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFszXSlcclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV09IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc29sZS5sb2codGVtcG9yYXJ5SW1hZ2UpO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsZUltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbHRlcmVkSW1hZ2VTaXplKSk7IFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhob2xkKTtcclxuICAgICAgICAvLyAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKGhvbGQpO1xyXG4gICAgICAgICAgLy8gaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gc2VsZWN0ZWQgKXtcclxuICAgICAgICAgIC8vIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHByb2ZpbGVpbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgICAgLy8gICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICAgIC8vICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgIC8vICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAvLyAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgLy8gICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8gICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgLy8gICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgLy8gICBhd2FpdCBzZXRQcm9maWxlSW1hZ2UobmV3VXJsKTtcclxuICAgICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtVmFsaWQgPSBmb3JtRXJyb3JzID0+IHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgb2JqZWN0LnZhbHVlcyhmb3JtRXJyb3JzKS5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgIHZhbC5sZW5ndGggPiAwICYmICh2YWxpZCA9IGZhbHNlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQge2Zvcm1FcnJvcnN9ID0gey4uLnByb2ZpbGV9XHJcblxyXG4gICAgcHJvZmlsZVZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgcmV0dXJuIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsICBbbmFtZV06IHZhbHVlfSkgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGlkID0gcHJvZmlsZS5pZDtcclxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcHJvZmlsZS91cGRhdGUnLCBmb3JtLCB7IGhlYWRlcnM6IHtcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gIH19KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgIGNvbnN0IHt1cGRhdGVkUHJvZmlsZX0gPSByZXMuZGF0YTtcclxuICAgICAgY29uc3Qge3Byb2ZpbGVJbWFnZX0gPSB1cGRhdGVkUHJvZmlsZTtcclxuICAgICAgbGV0IG5ld1Byb2ZpbGUgPSBnZW5lcmF0ZVB1YmxpY1VybChwcm9maWxlSW1hZ2UpO1xyXG4gICAgIHNldFRlbXBvcmFyeUltYWdlKG5ld1Byb2ZpbGUpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gIH07IFxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBhZGRyZXNzfSA9IHsuLi4gcHJvZmlsZX1cclxuICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBwcm9maWxlSW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAoZm9ybS5hcHBlbmQoJ3Byb2ZpbGVJbWFnZScsIHByb2ZpbGVJbWFnZSkpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2ZpcnN0TmFtZScsIGZpcnN0TmFtZSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XHJcbiAgICBmb3JtLmFwcGVuZCgnbGFzdE5hbWUnLCBsYXN0TmFtZSk7XHJcbiAgICBmb3JtLmFwcGVuZCgncGhvbmVOdW1iZXInLCAgcGhvbmVOdW1iZXIpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2FkZHJlc3MnLCAgYWRkcmVzcyk7XHJcbiAgICBzZXRGb3JtKGZvcm0pO1xyXG4gICAgc2V0Q291bnQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICBmb3IobGV0IHBhaXIgb2YgZm9ybS5lbnRyaWVzKCkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coW3BhaXJbMF0rICcsJyArIHBhaXJbMV1dKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
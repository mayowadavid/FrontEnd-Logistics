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
      selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = error == undefined ? FileSize.includes(selected.size < FileSize) : setError("file too large *5mb minimum");
      var hold = filteredImageSize == true && URL.createObjectURL(filteredImageSize);
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
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJmb3JtIiwic2V0Rm9ybSIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInNpemUiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlcyIsImluY2x1ZGVzIiwidHlwZSIsIkZpbGVTaXplIiwiZmlsdGVyZWRJbWFnZVNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZm9ybVZhbGlkIiwidmFsaWQiLCJvYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsIiwibGVuZ3RoIiwicHJvZmlsZURldGFpbHMiLCJuYW1lIiwidmFsdWUiLCJwcm9maWxlVmFsaWRhdGUiLCJoYW5kbGVQcm9maWxlU3VibWl0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwicmVzIiwic3RhdHVzIiwidXBkYXRlZFByb2ZpbGUiLCJkYXRhIiwibmV3UHJvZmlsZSIsImdlbmVyYXRlUHVibGljVXJsIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJGb3JtRGF0YSIsImFwcGVuZCIsImVudHJpZXMiLCJwYWlyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DOztBQUVQLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBUyxFQUFFLEVBRFE7QUFFbkJDLFlBQVEsRUFBRSxFQUZTO0FBR25CQyxTQUFLLEVBQUUsRUFIWTtBQUluQkMsZUFBVyxFQUFFLEVBSk07QUFLbkJDLFdBQU8sRUFBRSxFQUxVO0FBTW5CQyxjQUFVLEVBQUU7QUFDVkwsZUFBUyxFQUFFLEVBREQ7QUFFVkMsY0FBUSxFQUFFLEVBRkE7QUFHVkMsV0FBSyxFQUFFLEVBSEc7QUFJVkMsaUJBQVcsRUFBRSxFQUpIO0FBS1ZDLGFBQU8sRUFBRTtBQUxDO0FBTk8sR0FBckI7O0FBRnFDLGtCQWlCUEUsc0RBQVEsQ0FBQ1AsWUFBRCxDQWpCRDtBQUFBLE1BaUI5QlEsT0FqQjhCO0FBQUEsTUFpQnJCQyxVQWpCcUIsaUJBb0JyQzs7O0FBcEJxQyxtQkFzQkdGLHNEQUFRLEVBdEJYO0FBQUEsTUFzQjlCRyxZQXRCOEI7QUFBQSxNQXNCaEJDLGVBdEJnQjs7QUFBQSxtQkF3QktKLHNEQUFRLEVBeEJiO0FBQUEsTUF3Qi9CSyxjQXhCK0I7QUFBQSxNQXdCZkMsaUJBeEJlOztBQUFBLG1CQXlCZE4sc0RBQVEsRUF6Qk07QUFBQSxNQXlCL0JPLElBekIrQjtBQUFBLE1BeUJ6QkMsT0F6QnlCOztBQUFBLG1CQTBCWFIsc0RBQVEsRUExQkc7QUFBQSxNQTBCOUJTLEtBMUI4QjtBQUFBLE1BMEJ2QkMsUUExQnVC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QXZLO0FBQXFMQyxxQkFBZSxFQUFmQSxlQUFyTDtBQUFzTUssV0FBSyxFQUFMQSxLQUF0TTtBQUE2TUMsY0FBUSxFQUFSQTtBQUE3TSxLQUEvQjtBQUFBLGNBQ0tsQixLQUFLLENBQUMwRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBNUhEOztHQUFNM0UscUI7O0tBQUFBLHFCO0FBOEhTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1NDczZjc1YTVkYTkwZjExNTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ2xpZW50Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgICBhZGRyZXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4gICAgLy8gLnR5cGUgIT09IEZvcm1hdFswXSB8fCBGb3JtYXRbMV0gfHwgRm9ybWF0WzJdKSAmJiAocHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzJdIHx8IHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFszXSlcclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV09IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc29sZS5sb2codGVtcG9yYXJ5SW1hZ2UpO1xyXG4gICAgc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBjb25zb2xlLmxvZyhzZWxlY3RlZC5zaXplKTtcclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBzZXRTZWxlY3RlZCggZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgICBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGVycm9yID09IHVuZGVmaW5lZD8gRmlsZVNpemUuaW5jbHVkZXMoc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplICkgIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgICAgICBsZXQgaG9sZCA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsdGVyZWRJbWFnZVNpemUpKTsgXHJcbiAgICAgICAgIGhvbGQgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShob2xkKTtcclxuICAgICAgICAgIC8vIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHNlbGVjdGVkICl7XHJcbiAgICAgICAgICAvLyBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGBwcm9maWxlaW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgIC8vICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgICAvLyAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAvLyAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgLy8gICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgIC8vICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICAgIC8vICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgIC8vICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIC8vICAgYXdhaXQgc2V0UHJvZmlsZUltYWdlKG5ld1VybCk7XHJcbiAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybVZhbGlkID0gZm9ybUVycm9ycyA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIG9iamVjdC52YWx1ZXMoZm9ybUVycm9ycykuZm9yRWFjaCh2YWwgPT4ge1xyXG4gICAgICB2YWwubGVuZ3RoID4gMCAmJiAodmFsaWQgPSBmYWxzZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9maWxlRGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIFxyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHtmb3JtRXJyb3JzfSA9IHsuLi5wcm9maWxlfVxyXG5cclxuICAgIHByb2ZpbGVWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgIHJldHVybiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCAgW25hbWVdOiB2YWx1ZX0pICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCBpZCA9IHByb2ZpbGUuaWQ7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3Byb2ZpbGUvdXBkYXRlJywgZm9ybSwgeyBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICB9fSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgaWYocmVzLnN0YXR1cyA9PSAyMDEpe1xyXG4gICAgICBjb25zdCB7dXBkYXRlZFByb2ZpbGV9ID0gcmVzLmRhdGE7XHJcbiAgICAgIGNvbnN0IHtwcm9maWxlSW1hZ2V9ID0gdXBkYXRlZFByb2ZpbGU7XHJcbiAgICAgIGxldCBuZXdQcm9maWxlID0gZ2VuZXJhdGVQdWJsaWNVcmwocHJvZmlsZUltYWdlKTtcclxuICAgICBzZXRUZW1wb3JhcnlJbWFnZShuZXdQcm9maWxlKTtcclxuICAgIH1cclxuICAgIDtcclxuICB9OyBcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgYWRkcmVzc30gPSB7Li4uIHByb2ZpbGV9XHJcbiAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcHJvZmlsZUltYWdlICE9PSB1bmRlZmluZWQgJiYgKGZvcm0uYXBwZW5kKCdwcm9maWxlSW1hZ2UnLCBwcm9maWxlSW1hZ2UpKTtcclxuICAgIGZvcm0uYXBwZW5kKCdmaXJzdE5hbWUnLCBmaXJzdE5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2xhc3ROYW1lJywgbGFzdE5hbWUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3Bob25lTnVtYmVyJywgIHBob25lTnVtYmVyKTtcclxuICAgIGZvcm0uYXBwZW5kKCdhZGRyZXNzJywgIGFkZHJlc3MpO1xyXG4gICAgc2V0Rm9ybShmb3JtKTtcclxuICAgIHNldENvdW50KCdhY3RpdmUnKTtcclxuICAgICAgICAgZm9yKGxldCBwYWlyIG9mIGZvcm0uZW50cmllcygpKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFtwYWlyWzBdKyAnLCcgKyBwYWlyWzFdXSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDbGllbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbiwgaGFuZGxlUHJvZmlsZUNoYW5nZSwgaGFuZGxlUHJvZmlsZVByZXZpZXcsIGhhbmRsZVByb2ZpbGVTdWJtaXQsIHByb2ZpbGUsIHNldFByb2ZpbGUsIHNldFRlbXBvcmFyeUltYWdlLCB0ZW1wb3JhcnlJbWFnZSwgcHJvZmlsZURldGFpbHMsIHByb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlLCBjb3VudCwgc2V0Q291bnR9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ2xpZW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50Q29udGV4dFByb3ZpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
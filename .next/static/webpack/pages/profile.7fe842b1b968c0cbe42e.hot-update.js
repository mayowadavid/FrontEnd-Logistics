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
      var token, id, res, updatedProfile, _profileImage;

      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              token = localStorage && localStorage.getItem('token');
              id = profile.id;
              _context4.next = 5;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/profile/update', profile, {
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
                setTemporaryImage(_profileImage);
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

  console.log(profile);

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
    lineNumber: 107,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJjb3VudCIsInNldENvdW50IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwicHJvZmlsZURldGFpbHMiLCJ2YWx1ZSIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXBkYXRlZFByb2ZpbGUiLCJkYXRhIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJuZXdQcm9maWxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DOztBQUVQLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBUyxFQUFFLEVBRFE7QUFFbkJDLFlBQVEsRUFBRSxFQUZTO0FBR25CQyxTQUFLLEVBQUUsRUFIWTtBQUluQkMsZUFBVyxFQUFFLEVBSk07QUFLbkJDLFdBQU8sRUFBRSxFQUxVO0FBTW5CQyxjQUFVLEVBQUU7QUFDVkwsZUFBUyxFQUFFLEVBREQ7QUFFVkMsY0FBUSxFQUFFLEVBRkE7QUFHVkMsV0FBSyxFQUFFLEVBSEc7QUFJVkMsaUJBQVcsRUFBRSxFQUpIO0FBS1ZDLGFBQU8sRUFBRTtBQUxDO0FBTk8sR0FBckI7O0FBRnFDLGtCQWlCUEUsc0RBQVEsQ0FBQ1AsWUFBRCxDQWpCRDtBQUFBLE1BaUI5QlEsT0FqQjhCO0FBQUEsTUFpQnJCQyxVQWpCcUIsaUJBb0JyQzs7O0FBcEJxQyxtQkFzQkdGLHNEQUFRLEVBdEJYO0FBQUEsTUFzQjlCRyxZQXRCOEI7QUFBQSxNQXNCaEJDLGVBdEJnQjs7QUFBQSxtQkF1QktKLHNEQUFRLEVBdkJiO0FBQUEsTUF1Qi9CSyxjQXZCK0I7QUFBQSxNQXVCZkMsaUJBdkJlOztBQUFBLG1CQXdCWE4sc0RBQVEsRUF4Qkc7QUFBQSxNQXdCOUJPLEtBeEI4QjtBQUFBLE1Bd0J2QkMsUUF4QnVCOztBQUFBLG1CQXlCQ1Isc0RBQVEsQ0FBQyxFQUFELENBekJUO0FBQUEsTUF5QjlCUyxXQXpCOEI7QUFBQSxNQXlCakJD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QVA7QUFBZ0JFLGtCQUFZLEVBQVpBO0FBQWhCLE1BQWQ7O0FBQ0FELGNBQVUsQ0FBQzhELFVBQUQsQ0FBVjtBQUNBeEQsWUFBUSxDQUFDLFFBQUQsQ0FBUjtBQUNELEdBTEQ7O0FBYUUsc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQVhBLFdBQUY7QUFBZUMsb0JBQWMsRUFBZEEsY0FBZjtBQUErQksseUJBQW1CLEVBQW5CQSxtQkFBL0I7QUFBb0RnRCwwQkFBb0IsRUFBcEJBLG9CQUFwRDtBQUEwRWQseUJBQW1CLEVBQW5CQSxtQkFBMUU7QUFBK0ZoRCxhQUFPLEVBQVBBLE9BQS9GO0FBQXdHQyxnQkFBVSxFQUFWQSxVQUF4RztBQUFvSEksdUJBQWlCLEVBQWpCQSxpQkFBcEg7QUFBdUlELG9CQUFjLEVBQWRBLGNBQXZJO0FBQXVKeUMsb0JBQWMsRUFBZEEsY0FBdko7QUFBdUszQyxrQkFBWSxFQUFaQSxZQUF2SztBQUFxTEMscUJBQWUsRUFBZkEsZUFBckw7QUFBc01HLFdBQUssRUFBTEEsS0FBdE07QUFBNk1DLGNBQVEsRUFBUkE7QUFBN00sS0FBL0I7QUFBQSxjQUNLaEIsS0FBSyxDQUFDeUU7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXJHRDs7R0FBTTFFLHFCOztLQUFBQSxxQjtBQXVHU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS43ZmU4NDJiMWI5NjhjMGNiZTQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0IH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQge2dlbmVyYXRlUHVibGljVXJsfSBmcm9tICcuLi8uLi91cmxDb25maWcnO1xyXG5pbXBvcnQgeyBwcm9maWxlVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENsaWVudENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgICAgYWRkcmVzczogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5cclxuICAgIC8vIC50eXBlICE9PSBGb3JtYXRbMF0gfHwgRm9ybWF0WzFdIHx8IEZvcm1hdFsyXSkgJiYgKHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFsyXSB8fCBwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbM10pXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9maWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICAgICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgICAgICBsZXQgaG9sZCA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICAgICAgIGhvbGQgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShob2xkKTtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHByb2ZpbGVpbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9maWxlSW1hZ2UobmV3VXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9maWxlRGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIFxyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHtmb3JtRXJyb3JzfSA9IHsuLi5wcm9maWxlfVxyXG5cclxuICAgIHByb2ZpbGVWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgIHJldHVybiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCAgW25hbWVdOiB2YWx1ZX0pICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGxldCBpZCA9IHByb2ZpbGUuaWQ7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3Byb2ZpbGUvdXBkYXRlJywgcHJvZmlsZSwgeyBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICB9fSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgaWYocmVzLnN0YXR1cyA9PSAyMDEpe1xyXG4gICAgICBjb25zdCB7dXBkYXRlZFByb2ZpbGV9ID0gcmVzLmRhdGE7XHJcbiAgICAgIGNvbnN0IHtwcm9maWxlSW1hZ2V9ID0gdXBkYXRlZFByb2ZpbGU7XHJcbiAgICAgc2V0VGVtcG9yYXJ5SW1hZ2UocHJvZmlsZUltYWdlKTtcclxuICAgIH1cclxuICAgIDtcclxuICB9OyBcclxuICBjb25zb2xlLmxvZyhwcm9maWxlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5ld1Byb2ZpbGUgPSB7Li4ucHJvZmlsZSwgcHJvZmlsZUltYWdlfVxyXG4gICAgc2V0UHJvZmlsZShuZXdQcm9maWxlKTtcclxuICAgIHNldENvdW50KCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
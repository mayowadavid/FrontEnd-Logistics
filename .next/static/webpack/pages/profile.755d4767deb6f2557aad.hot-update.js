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
    profileImage: {},
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

    var newProfile = _objectSpread(_objectSpread({}, profile), profileImage);

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
    lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJjb3VudCIsInNldENvdW50IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwicHJvZmlsZURldGFpbHMiLCJ2YWx1ZSIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXBkYXRlZFByb2ZpbGUiLCJkYXRhIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJuZXdQcm9maWxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DOztBQUVQLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBUyxFQUFFLEVBRFE7QUFFbkJDLFlBQVEsRUFBRSxFQUZTO0FBR25CQyxTQUFLLEVBQUUsRUFIWTtBQUluQkMsZUFBVyxFQUFFLEVBSk07QUFLbkJDLFdBQU8sRUFBRSxFQUxVO0FBTW5CQyxnQkFBWSxFQUFFLEVBTks7QUFPbkJDLGNBQVUsRUFBRTtBQUNWTixlQUFTLEVBQUUsRUFERDtBQUVWQyxjQUFRLEVBQUUsRUFGQTtBQUdWQyxXQUFLLEVBQUUsRUFIRztBQUlWQyxpQkFBVyxFQUFFLEVBSkg7QUFLVkMsYUFBTyxFQUFFO0FBTEM7QUFQTyxHQUFyQjs7QUFGcUMsa0JBa0JQRyxzREFBUSxDQUFDUixZQUFELENBbEJEO0FBQUEsTUFrQjlCUyxPQWxCOEI7QUFBQSxNQWtCckJDLFVBbEJxQixpQkFxQnJDOzs7QUFyQnFDLG1CQXVCR0Ysc0RBQVEsRUF2Qlg7QUFBQSxNQXVCOUJGLFlBdkI4QjtBQUFBLE1BdUJoQkssZUF2QmdCOztBQUFBLG1CQXdCS0gsc0RBQVEsRUF4QmI7QUFBQSxNQXdCL0JJLGNBeEIrQjtBQUFBLE1Bd0JmQyxpQkF4QmU7O0FBQUEsbUJBeUJYTCxzREFBUSxFQXpCRztBQUFBLE1BeUI5Qk0sS0F6QjhCO0FBQUEsTUF5QnZCQyxRQXpCdUI7O0FBQUEsbUJBMEJDUCxzREFBUSxDQUFDLEVBQUQsQ0ExQlQ7QUFBQSxNQTBC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LFFBQUkrQyxVQUFVLG1DQUFPOUQsT0FBUCxHQUFtQkgsWUFBbkIsQ0FBZDs7QUFDQUksY0FBVSxDQUFDNkQsVUFBRCxDQUFWO0FBQ0F4RCxZQUFRLENBQUMsUUFBRCxDQUFSO0FBQ0QsR0FMRDs7QUFhRSxzQkFDSSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBWEEsV0FBRjtBQUFlQyxvQkFBYyxFQUFkQSxjQUFmO0FBQStCSyx5QkFBbUIsRUFBbkJBLG1CQUEvQjtBQUFvRGdELDBCQUFvQixFQUFwQkEsb0JBQXBEO0FBQTBFZCx5QkFBbUIsRUFBbkJBLG1CQUExRTtBQUErRi9DLGFBQU8sRUFBUEEsT0FBL0Y7QUFBd0dDLGdCQUFVLEVBQVZBLFVBQXhHO0FBQW9IRyx1QkFBaUIsRUFBakJBLGlCQUFwSDtBQUF1SUQsb0JBQWMsRUFBZEEsY0FBdkk7QUFBdUp5QyxvQkFBYyxFQUFkQSxjQUF2SjtBQUF1Sy9DLGtCQUFZLEVBQVpBLFlBQXZLO0FBQXFMSyxxQkFBZSxFQUFmQSxlQUFyTDtBQUFzTUcsV0FBSyxFQUFMQSxLQUF0TTtBQUE2TUMsY0FBUSxFQUFSQTtBQUE3TSxLQUEvQjtBQUFBLGNBQ0toQixLQUFLLENBQUN5RTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBdEdEOztHQUFNMUUscUI7O0tBQUFBLHFCO0FBd0dTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjc1NWQ0NzY3ZGViNmYyNTU3YWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ2xpZW50Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgIHByb2ZpbGVJbWFnZToge30sXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgICBhZGRyZXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4gICAgLy8gLnR5cGUgIT09IEZvcm1hdFswXSB8fCBGb3JtYXRbMV0gfHwgRm9ybWF0WzJdKSAmJiAocHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzJdIHx8IHByb2ZpbGVJbWFnZS5zaXplIDw9IEZvcm1hdFszXSlcclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV09IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgICAgICAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKGhvbGQpO1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQge2Zvcm1FcnJvcnN9ID0gey4uLnByb2ZpbGV9XHJcblxyXG4gICAgcHJvZmlsZVZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgcmV0dXJuIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsICBbbmFtZV06IHZhbHVlfSkgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgbGV0IGlkID0gcHJvZmlsZS5pZDtcclxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcHJvZmlsZS91cGRhdGUnLCBwcm9maWxlLCB7IGhlYWRlcnM6IHtcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gIH19KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgIGNvbnN0IHt1cGRhdGVkUHJvZmlsZX0gPSByZXMuZGF0YTtcclxuICAgICAgY29uc3Qge3Byb2ZpbGVJbWFnZX0gPSB1cGRhdGVkUHJvZmlsZTtcclxuICAgICBzZXRUZW1wb3JhcnlJbWFnZShwcm9maWxlSW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gIH07IFxyXG4gIGNvbnNvbGUubG9nKHByb2ZpbGUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbmV3UHJvZmlsZSA9IHsuLi5wcm9maWxlLCAuLi5wcm9maWxlSW1hZ2V9XHJcbiAgICBzZXRQcm9maWxlKG5ld1Byb2ZpbGUpO1xyXG4gICAgc2V0Q291bnQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
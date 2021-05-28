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
    profileImage: "",
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

  var handleProfilePreview = function handleProfilePreview(e) {
    e.preventDefault();
    setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      profileImage: profileImage
    }));
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
    lineNumber: 106,
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJjb3VudCIsInNldENvdW50IiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwic25hcCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwibmV3UGVyY2VudGFnZSIsImVyciIsImdldERvd25sb2FkVVJMIiwibmV3VXJsIiwicmV2b2tlT2JqZWN0VVJMIiwicHJvZmlsZURldGFpbHMiLCJ2YWx1ZSIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXBkYXRlZFByb2ZpbGUiLCJkYXRhIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7O0FBRVAsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFTLEVBQUUsRUFEUTtBQUVuQkMsWUFBUSxFQUFFLEVBRlM7QUFHbkJDLFNBQUssRUFBRSxFQUhZO0FBSW5CQyxlQUFXLEVBQUUsRUFKTTtBQUtuQkMsV0FBTyxFQUFFLEVBTFU7QUFNbkJDLGdCQUFZLEVBQUUsRUFOSztBQU9uQkMsY0FBVSxFQUFFO0FBQ1ZOLGVBQVMsRUFBRSxFQUREO0FBRVZDLGNBQVEsRUFBRSxFQUZBO0FBR1ZDLFdBQUssRUFBRSxFQUhHO0FBSVZDLGlCQUFXLEVBQUUsRUFKSDtBQUtWQyxhQUFPLEVBQUU7QUFMQztBQVBPLEdBQXJCOztBQUZxQyxrQkFrQlBHLHNEQUFRLENBQUNSLFlBQUQsQ0FsQkQ7QUFBQSxNQWtCOUJTLE9BbEI4QjtBQUFBLE1Ba0JyQkMsVUFsQnFCLGlCQXFCckM7OztBQXJCcUMsbUJBdUJHRixzREFBUSxFQXZCWDtBQUFBLE1BdUI5QkYsWUF2QjhCO0FBQUEsTUF1QmhCSyxlQXZCZ0I7O0FBQUEsbUJBd0JLSCxzREFBUSxFQXhCYjtBQUFBLE1Bd0IvQkksY0F4QitCO0FBQUEsTUF3QmZDLGlCQXhCZTs7QUFBQSxtQkF5QlhMLHNEQUFRLEVBekJHO0FBQUEsTUF5QjlCTSxLQXpCOEI7QUFBQSxNQXlCdkJDLFFBekJ1Qjs7QUFBQSxtQkEwQkNQLHNEQUFRLENBQUMsRUFBRCxDQTFCVDtBQUFBLE1BMEI5QlEsV0ExQjhCO0FB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RUQsR0FKRDs7QUFZRSxzQkFDSSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRVUsaUJBQVcsRUFBWEEsV0FBRjtBQUFlQyxvQkFBYyxFQUFkQSxjQUFmO0FBQStCSyx5QkFBbUIsRUFBbkJBLG1CQUEvQjtBQUFvRGdELDBCQUFvQixFQUFwQkEsb0JBQXBEO0FBQTBFZCx5QkFBbUIsRUFBbkJBLG1CQUExRTtBQUErRi9DLGFBQU8sRUFBUEEsT0FBL0Y7QUFBd0dDLGdCQUFVLEVBQVZBLFVBQXhHO0FBQW9IRyx1QkFBaUIsRUFBakJBLGlCQUFwSDtBQUF1SUQsb0JBQWMsRUFBZEEsY0FBdkk7QUFBdUp5QyxvQkFBYyxFQUFkQSxjQUF2SjtBQUF1Sy9DLGtCQUFZLEVBQVpBLFlBQXZLO0FBQXFMSyxxQkFBZSxFQUFmQSxlQUFyTDtBQUFzTUcsV0FBSyxFQUFMQSxLQUF0TTtBQUE2TUMsY0FBUSxFQUFSQTtBQUE3TSxLQUEvQjtBQUFBLGNBQ0toQixLQUFLLENBQUN3RTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBcEdEOztHQUFNekUscUI7O0tBQUFBLHFCO0FBc0dTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmVmN2ViNmQzYmQ0MjU5ODM3NzY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ2xpZW50Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgIHByb2ZpbGVJbWFnZTogXCJcIixcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgICAvLyAudHlwZSAhPT0gRm9ybWF0WzBdIHx8IEZvcm1hdFsxXSB8fCBGb3JtYXRbMl0pICYmIChwcm9maWxlSW1hZ2Uuc2l6ZSA8PSBGb3JtYXRbMl0gfHwgcHJvZmlsZUltYWdlLnNpemUgPD0gRm9ybWF0WzNdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgICAgICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICAgICAgbGV0IGhvbGQgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGBwcm9maWxlaW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZmlsZUltYWdlKG5ld1VybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlL3VwZGF0ZScsIHByb2ZpbGUsIHsgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgfX0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgY29uc3Qge3VwZGF0ZWRQcm9maWxlfSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zdCB7cHJvZmlsZUltYWdlfSA9IHVwZGF0ZWRQcm9maWxlO1xyXG4gICAgIHNldFRlbXBvcmFyeUltYWdlKHByb2ZpbGVJbWFnZSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgfTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIHByb2ZpbGVJbWFnZX0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
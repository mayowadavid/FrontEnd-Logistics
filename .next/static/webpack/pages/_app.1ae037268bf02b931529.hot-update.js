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
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\ClientContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ClientContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var ClientContextProvider = function ClientContextProvider(props) {
  _s();

  var initialState = {
    firstName: 'mayor',
    lastName: 'james',
    email: 'mayowadavid100@gmail.com',
    phoneNumber: '09087536643',
    address: 'abule foli',
    profileImage: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      profile = _useState[0],
      setProfile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].onAuthStateChanged(function (user) {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Profile').doc(user.uid).get().then(function (doc) {
        return setData(doc.data());
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var data = [];
    _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].onAuthStateChanged(function (user) {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Requests').where("userId", "==", user.uid).onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data());
        });
      });
    });
    setTransaction(data);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var formErrors = initialState.formErrors;
    data !== undefined && setProfile(_objectSpread(_objectSpread({}, data), {}, {
      formErrors: formErrors
    }));
  }, [data]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      profileImage = _useState3[0],
      setProfileImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      temporaryImage = _useState4[0],
      setTemporaryImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      count = _useState5[0],
      setCount = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      transaction = _useState6[0],
      setTransaction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      error = _useState7[0],
      setError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
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
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_6__["store"].ref("profileimages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snap) {
            var newPercentage;
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
          var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(err) {
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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
        }(), /*#__PURE__*/Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var newUrl;
          return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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

    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["profileValidate"])(name, value, formErrors);
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
  };

  var handleProfileSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var firstName, lastName, email, phoneNumber, address, profileImage;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              firstName = profile.firstName, lastName = profile.lastName, email = profile.email, phoneNumber = profile.phoneNumber, address = profile.address, profileImage = profile.profileImage;
              _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Profile').add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                profileImage: profileImage
              });

            case 3:
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
    lineNumber: 130,
    columnNumber: 9
  }, _this);
};

_s(ClientContextProvider, "KoN1uEvJhjFBk2lIWMCn84P6BKg=");

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

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwid2hlcmUiLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwic2V0VHJhbnNhY3Rpb24iLCJ1bmRlZmluZWQiLCJzZXRQcm9maWxlSW1hZ2UiLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsImhvbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdG9yYWdlUmVmIiwic3RvcmUiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJuZXdVcmwiLCJyZXZva2VPYmplY3RVUkwiLCJwcm9maWxlRGV0YWlscyIsInZhbHVlIiwicHJvZmlsZVZhbGlkYXRlIiwiaGFuZGxlUHJvZmlsZVN1Ym1pdCIsImFkZCIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7O0FBRVAsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFTLEVBQUUsT0FEUTtBQUVuQkMsWUFBUSxFQUFFLE9BRlM7QUFHbkJDLFNBQUssRUFBRSwwQkFIWTtBQUluQkMsZUFBVyxFQUFFLGFBSk07QUFLbkJDLFdBQU8sRUFBRSxZQUxVO0FBTW5CQyxnQkFBWSxFQUFFLEVBTks7QUFPbkJDLGNBQVUsRUFBRTtBQUNWTixlQUFTLEVBQUUsRUFERDtBQUVWQyxjQUFRLEVBQUUsRUFGQTtBQUdWQyxXQUFLLEVBQUUsRUFIRztBQUlWQyxpQkFBVyxFQUFFLEVBSkg7QUFLVkMsYUFBTyxFQUFFO0FBTEM7QUFQTyxHQUFyQjs7QUFGcUMsa0JBa0JQRyxzREFBUSxDQUFDUixZQUFELENBbEJEO0FBQUEsTUFrQjlCUyxPQWxCOEI7QUFBQSxNQWtCckJDLFVBbEJxQjs7QUFBQSxtQkFtQmJGLHNEQUFRLEVBbkJLO0FBQUEsTUFtQjlCRyxJQW5COEI7QUFBQSxNQW1CeEJDLE9BbkJ3Qjs7QUFvQnJDQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsa0RBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsVUFBQUMsSUFBSSxFQUFFO0FBQzVCQSxVQUFJLEtBQUssSUFBVCxJQUFpQkMsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixTQUFwQixFQUErQkMsR0FBL0IsQ0FBbUNILElBQUksQ0FBQ0ksR0FB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bEMsQ0FBRCxFQUFPO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7QUFDQWhDLGNBQVUsaUNBQUtELE9BQUw7QUFBY0gsa0JBQVksRUFBWkE7QUFBZCxPQUFWO0FBQ0E0QixZQUFRLENBQUMsUUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFZRSxzQkFDSSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBWEEsV0FBRjtBQUFlUCxvQkFBYyxFQUFkQSxjQUFmO0FBQStCWSx5QkFBbUIsRUFBbkJBLG1CQUEvQjtBQUFvRG1DLDBCQUFvQixFQUFwQkEsb0JBQXBEO0FBQTBFRix5QkFBbUIsRUFBbkJBLG1CQUExRTtBQUErRmhFLGFBQU8sRUFBUEEsT0FBL0Y7QUFBd0dDLGdCQUFVLEVBQVZBLFVBQXhHO0FBQW9Ic0IsdUJBQWlCLEVBQWpCQSxpQkFBcEg7QUFBdUlELG9CQUFjLEVBQWRBLGNBQXZJO0FBQXVKdUMsb0JBQWMsRUFBZEEsY0FBdko7QUFBdUtoRSxrQkFBWSxFQUFaQSxZQUF2SztBQUFxTHdCLHFCQUFlLEVBQWZBLGVBQXJMO0FBQXNNRyxXQUFLLEVBQUxBLEtBQXRNO0FBQTZNQyxjQUFRLEVBQVJBO0FBQTdNLEtBQS9CO0FBQUEsY0FDS25DLEtBQUssQ0FBQzZFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0EvSEQ7O0dBQU05RSxxQjs7S0FBQUEscUI7QUFpSVNBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWFlMDM3MjY4YmYwMmI5MzE1MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcm9maWxlVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge2F1dGgsIHN0b3JlLCBkYXRhYmFzZX0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDbGllbnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0TmFtZTogJ21heW9yJyxcclxuICAgICAgbGFzdE5hbWU6ICdqYW1lcycsXHJcbiAgICAgIGVtYWlsOiAnbWF5b3dhZGF2aWQxMDBAZ21haWwuY29tJyxcclxuICAgICAgcGhvbmVOdW1iZXI6ICcwOTA4NzUzNjY0MycsIFxyXG4gICAgICBhZGRyZXNzOiAnYWJ1bGUgZm9saScsXHJcbiAgICAgIHByb2ZpbGVJbWFnZTogJycsXHJcbiAgICAgIGZvcm1FcnJvcnM6IHtcclxuICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnLCBcclxuICAgICAgICBhZGRyZXNzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgIHVzZXIgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyh1c2VyLnVpZCkuZ2V0KCkudGhlbihkb2M9PlxyXG4gICAgICAgICAgc2V0RGF0YShkb2MuZGF0YSgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICAgICAgdXNlciAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdSZXF1ZXN0cycpXHJcbiAgICAgICAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlci51aWQpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSlcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0VHJhbnNhY3Rpb24oZGF0YSk7XHJcbn0sIFtdKTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBjb25zdCB7Zm9ybUVycm9yc30gPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgIGRhdGEgIT09IHVuZGVmaW5lZCAmJiBzZXRQcm9maWxlKHsuLi5kYXRhLCBmb3JtRXJyb3JzfSlcclxuICAgIH0sIFtkYXRhXSlcclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W3RlbXBvcmFyeUltYWdlLCBzZXRUZW1wb3JhcnlJbWFnZV09IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gICAgICAgaWYoZS50YXJnZXQuZmlsZXMpe1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgICAgICBsZXQgZmlsZVR5cGUgPSBzZWxlY3RlZCAhPT0gdW5kZWZpbmVkID8gdHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSk6IHNldEVycm9yKFwidW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZSogYWNjZXB0ZWQgaW1hZ2UganBnL3BuZ1wiKTtcclxuICAgICAgICAgIGxldCBGaWxlU2l6ZSA9IFwiNTAwMDAwMFwiO1xyXG4gICAgICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgICAgIGxldCBob2xkID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgICAgICAgaG9sZCAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKGhvbGQpO1xyXG4gICAgICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JlLnJlZihgcHJvZmlsZWltYWdlcy8ke3NlbGVjdGVkLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYucHV0KHNlbGVjdGVkKS5vbignc3RhdGVfY2hhbmdlZCcsIFxyXG4gICAgICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBhd2FpdCAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZ3Jlc3MobmV3UGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBhd2FpdCBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2ZpbGVJbWFnZShuZXdVcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxlY3RlZCk7ICAgXHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQge2Zvcm1FcnJvcnN9ID0gey4uLnByb2ZpbGV9XHJcblxyXG4gICAgcHJvZmlsZVZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgcmV0dXJuIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsICBbbmFtZV06IHZhbHVlfSkgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmVOdW1iZXIsIFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHByb2ZpbGVJbWFnZX09IHByb2ZpbGU7XHJcbiAgICBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuYWRkKHtmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGhvbmVOdW1iZXIsIFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBwcm9maWxlSW1hZ2V9KVxyXG4gIH07IFxyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlUHJldmlldyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBwcm9maWxlSW1hZ2V9KTtcclxuICAgIHNldENvdW50KCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENsaWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9uLCBoYW5kbGVQcm9maWxlQ2hhbmdlLCBoYW5kbGVQcm9maWxlUHJldmlldywgaGFuZGxlUHJvZmlsZVN1Ym1pdCwgcHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2UsIHRlbXBvcmFyeUltYWdlLCBwcm9maWxlRGV0YWlscywgcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2UsIGNvdW50LCBzZXRDb3VudH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9DbGllbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
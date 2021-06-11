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
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0NsaWVudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDbGllbnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJmb3JtRXJyb3JzIiwidXNlU3RhdGUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwid2hlcmUiLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJwdXNoIiwic2V0VHJhbnNhY3Rpb24iLCJ1bmRlZmluZWQiLCJzZXRQcm9maWxlSW1hZ2UiLCJ0ZW1wb3JhcnlJbWFnZSIsInNldFRlbXBvcmFyeUltYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInRyYW5zYWN0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJzZWxlY3RlZCIsInR5cGVzIiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsInR5cGUiLCJGaWxlU2l6ZSIsImZpbHRlcmVkSW1hZ2VTaXplIiwic2l6ZSIsImhvbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdG9yYWdlUmVmIiwic3RvcmUiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJuZXdVcmwiLCJyZXZva2VPYmplY3RVUkwiLCJwcm9maWxlRGV0YWlscyIsInZhbHVlIiwicHJvZmlsZVZhbGlkYXRlIiwiaGFuZGxlUHJvZmlsZVN1Ym1pdCIsImFkZCIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7O0FBRVAsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFTLEVBQUUsRUFEUTtBQUVuQkMsWUFBUSxFQUFFLEVBRlM7QUFHbkJDLFNBQUssRUFBRSxFQUhZO0FBSW5CQyxlQUFXLEVBQUUsRUFKTTtBQUtuQkMsV0FBTyxFQUFFLEVBTFU7QUFNbkJDLGdCQUFZLEVBQUUsRUFOSztBQU9uQkMsY0FBVSxFQUFFO0FBQ1ZOLGVBQVMsRUFBRSxFQUREO0FBRVZDLGNBQVEsRUFBRSxFQUZBO0FBR1ZDLFdBQUssRUFBRSxFQUhHO0FBSVZDLGlCQUFXLEVBQUUsRUFKSDtBQUtWQyxhQUFPLEVBQUU7QUFMQztBQVBPLEdBQXJCOztBQUZxQyxrQkFrQlBHLHNEQUFRLENBQUNSLFlBQUQsQ0FsQkQ7QUFBQSxNQWtCOUJTLE9BbEI4QjtBQUFBLE1Ba0JyQkMsVUFsQnFCOztBQUFBLG1CQW1CYkYsc0RBQVEsRUFuQks7QUFBQSxNQW1COUJHLElBbkI4QjtBQUFBLE1BbUJ4QkMsT0FuQndCOztBQW9CckNDLHlEQUFTLENBQUMsWUFBSTtBQUNaQyxrREFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBQyxJQUFJLEVBQUU7QUFDNUJBLFVBQUksS0FBSyxJQUFULElBQWlCQyxrREFBUSxDQUFDQyxVQUFULENBQW9CLFNBQXBCLEVBQStCQyxHQUEvQixDQUFtQ0gsSUFBSSxDQUFDSSxHQUF4QyxFQUE2Q0MsR0FBN0MsR0FBbURDLElBQW5ELENBQXdELFVBQUFILEdBQUc7QUFBQSxlQUMxRVAsT0FBTyxDQUFDTyxHQUFHLENBQUNSLElBQUosRUFBRCxDQURtRTtBQUFBLE9BQTNELENBQWpCO0FBR0QsS0FKRDtBQUtELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQUUseURBQVMsQ0FBRSxZQUFNO0FBQ2YsUUFBTUYsSUFBSSxHQUFHLEVBQWI7QUFDQUcsa0RBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsVUFBQUMsSUFBSSxFQUFFO0FBQ3RCQSxVQUFJLEtBQUssSUFBVCxJQUFpQkMsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUNoQkssS0FEZ0IsQ0FDVixRQURVLEVBQ0EsSUFEQSxFQUNNUCxJQUFJLENBQUNJLEdBRFgsRUFFaEJJLFVBRmdCLENBRUwsVUFBQ0MsYUFBRCxFQUFtQjtBQUN2QkEscUJBQWEsQ0FBQ0MsT0FBZCxDQUFzQixVQUFDUCxHQUFELEVBQVM7QUFDM0I7QUFDQVIsY0FBSSxDQUFDZ0IsSUFBTCxDQUFVUixHQUFHLENBQUNSLElBQUosRUFBVjtBQUNILFNBSEQ7QUFJSCxPQVBZLENBQWpCO0FBUUQsS0FUUDtBQVVNaUIsa0JBQWMsQ0FBQ2pCLElBQUQsQ0FBZDtBQUNYLEdBYlksRUFhVixFQWJVLENBQVQ7QUFnQkFFLHlEQUFTLENBQUMsWUFBSTtBQUFBLFFBQ0xOLFVBREssR0FDU1AsWUFEVCxDQUNMTyxVQURLO0FBRVpJLFFBQUksS0FBS2tCLFNBQVQsSUFBc0JuQixVQUFVLGlDQUFLQyxJQUFMO0FBQVdKLGdCQUFVLEVBQVZBO0FBQVgsT0FBaEM7QUFDRCxHQUhRLEVBR04sQ0FBQ0ksSUFBRCxDQUhNLENBQVQ7O0FBNUNxQyxtQkFpREdILHNEQUFRLEVBakRYO0FBQUEsTUFpRDlCRixZQWpEOEI7QUFBQSxNQWlEaEJ3QixlQWpEZ0I7O0FBQUEsbUJBa0RLdEIsc0RBQVEsRUFsRGI7QUFBQSxNQWtEL0J1QixjQWxEK0I7QUFBQSxNQWtEZkMsaUJBbERlOztBQUFBLG1CQW1EWHhCLHNEQUFRLEVBbkRHO0FBQUEsTUFtRDlCeUIsS0FuRDhCO0FBQUEsTUFtRHZCQyxRQW5EdUI7O0FBQUEsbUJBb0RDMUIsc0RBQVEsQ0FBQyxFQUFELENBcERUO0FBQUEsTUFvRDlCMkIsV0FwRDhCO0FBQUEsTUFvRGpCUCxjQXBEaUI7O0FBQUEsbUJBcURYcEIsc0RBQVEsQ0FBQyxJQUFELENBckRHO0FBQUEsTUFxRDlCNEIsS0FyRDhCO0FBQUEsTUFxRHZCQyxRQXJEdUI7O0FBQUEsbUJBc0RMN0Isc0RBQVEsQ0FBQyxDQUFELENBdERIO0FBQUEsTUFzRDlCOEIsUUF0RDhCO0FBQUEsTUFzRHBCQyxXQXREb0I7O0FBd0RyQyxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBTztBQUMvQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNELFFBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQUlDLFFBQVEsR0FBR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQWY7QUFDRCxVQUFJRSxLQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFaO0FBQ0QsVUFBSUMsUUFBUSxHQUFHRixRQUFRLEtBQUtoQixTQUFiLEdBQXlCaUIsS0FBSyxDQUFDRSxRQUFOLENBQWVILFFBQVEsQ0FBQ0ksSUFBeEIsQ0FBekIsR0FBd0RaLFFBQVEsQ0FBQyxnREFBRCxDQUEvRTtBQUNHLFVBQUlhLFFBQVEsR0FBRyxTQUFmO0FBQ0QsVUFBSUMsaUJBQWlCLEdBQUVKLFFBQVEsSUFBSSxJQUFaLEdBQW1CRixRQUFRLENBQUNPLElBQVQsR0FBZ0JGLFFBQW5DLEdBQThDYixRQUFRLENBQUMsNkJBQUQsQ0FBN0U7QUFDQSxVQUFJZ0IsSUFBSSxHQUFHRixpQkFBaUIsSUFBSSxJQUFyQixJQUE4QkcsR0FBRyxDQUFDQyxlQUFKLENBQW9CVixRQUFwQixDQUF6QztBQUNBUSxVQUFJLEtBQUt4QixTQUFULElBQXNCRyxpQkFBaUIsQ0FBQ3FCLElBQUQsQ0FBdkM7O0FBQ0MsVUFBR0YsaUJBQWlCLElBQUksSUFBeEIsRUFBOEI7QUFDOUIsWUFBTUssVUFBVSxHQUFHQywrQ0FBSyxDQUFDQyxHQUFOLHlCQUEyQmIsUUFBUSxDQUFDYyxJQUFwQyxFQUFuQjtBQUNFSCxrQkFBVSxDQUFDSSxHQUFYLENBQWVmLFFBQWYsRUFBeUJnQixFQUF6QixDQUE0QixlQUE1QjtBQUFBLDhRQUNBLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQytCQSxJQUFJLENBQUNDLGdCQUFMLEdBQXdCRCxJQUFJLENBQUNFLFVBRDVEOztBQUFBO0FBQUE7QUFDUUMsaUNBRFIsaUJBQzBFLEdBRDFFO0FBQUE7QUFBQSwyQkFFTTFCLFdBQVcsQ0FBQzBCLGFBQUQsQ0FGakI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtRQUlJLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNFN0IsUUFBUSxDQUFDNkIsR0FBRCxDQURWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSko7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbVJBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDb0JWLFVBQVUsQ0FBQ1csY0FBWCxFQURwQjs7QUFBQTtBQUNLQyx3QkFETDtBQUFBO0FBQUEseUJBRUd0QyxlQUFlLENBQUNzQyxNQUFELENBRmxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTkg7QUFVRDs7QUFDRmQsU0FBRyxDQUFDZSxlQUFKLENBQW9CeEIsUUFBcEI7QUFDQTtBQUNOLEdBekJDOztBQTJCRixNQUFNeUIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDN0IsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFENEIsb0JBR05ELENBQUMsQ0FBQ0UsTUFISTtBQUFBLFFBR3JCZ0IsSUFIcUIsYUFHckJBLElBSHFCO0FBQUEsUUFHZlksS0FIZSxhQUdmQSxLQUhlOztBQUFBLHFDQUlMOUQsT0FKSztBQUFBLFFBSXZCRixVQUp1QixZQUl2QkEsVUFKdUI7O0FBTTVCaUUsK0VBQWUsQ0FBQ2IsSUFBRCxFQUFPWSxLQUFQLEVBQWNoRSxVQUFkLENBQWY7QUFDRSxXQUFPRyxVQUFVLGlDQUFLRCxPQUFMLHlJQUFnQmtELElBQWhCLEVBQXVCWSxLQUF2QixHQUFqQjtBQUNILEdBUkQ7O0FBVUEsTUFBTUUsbUJBQW1CO0FBQUEseVFBQUcsa0JBQU1oQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ096Qyx1QkFGbUIsR0FPWFEsT0FQVyxDQUVuQlIsU0FGbUIsRUFHMUJDLFFBSDBCLEdBT1hPLE9BUFcsQ0FHMUJQLFFBSDBCLEVBSTFCQyxLQUowQixHQU9YTSxPQVBXLENBSTFCTixLQUowQixFQUsxQkMsV0FMMEIsR0FPWEssT0FQVyxDQUsxQkwsV0FMMEIsRUFNMUJDLE9BTjBCLEdBT1hJLE9BUFcsQ0FNMUJKLE9BTjBCLEVBTzFCQyxZQVAwQixHQU9YRyxPQVBXLENBTzFCSCxZQVAwQjtBQVExQlcsZ0VBQVEsQ0FBQ0MsVUFBVCxDQUFvQixTQUFwQixFQUErQndELEdBQS9CLENBQW1DO0FBQUN6RSx5QkFBUyxFQUFUQSxTQUFEO0FBQ2pDQyx3QkFBUSxFQUFSQSxRQURpQztBQUVqQ0MscUJBQUssRUFBTEEsS0FGaUM7QUFHakNDLDJCQUFXLEVBQVhBLFdBSGlDO0FBSWpDQyx1QkFBTyxFQUFQQSxPQUppQztBQUtqQ0MsNEJBQVksRUFBWkE7QUFMaUMsZUFBbkM7O0FBUjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CbUUsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWlCQSxNQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNsQyxDQUFELEVBQU87QUFDbENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBaEMsY0FBVSxpQ0FBS0QsT0FBTDtBQUFjSCxrQkFBWSxFQUFaQTtBQUFkLE9BQVY7QUFDQTRCLFlBQVEsQ0FBQyxRQUFELENBQVI7QUFDRCxHQUpEOztBQVlFLHNCQUNJLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFQyxpQkFBVyxFQUFYQSxXQUFGO0FBQWVQLG9CQUFjLEVBQWRBLGNBQWY7QUFBK0JZLHlCQUFtQixFQUFuQkEsbUJBQS9CO0FBQW9EbUMsMEJBQW9CLEVBQXBCQSxvQkFBcEQ7QUFBMEVGLHlCQUFtQixFQUFuQkEsbUJBQTFFO0FBQStGaEUsYUFBTyxFQUFQQSxPQUEvRjtBQUF3R0MsZ0JBQVUsRUFBVkEsVUFBeEc7QUFBb0hzQix1QkFBaUIsRUFBakJBLGlCQUFwSDtBQUF1SUQsb0JBQWMsRUFBZEEsY0FBdkk7QUFBdUp1QyxvQkFBYyxFQUFkQSxjQUF2SjtBQUF1S2hFLGtCQUFZLEVBQVpBLFlBQXZLO0FBQXFMd0IscUJBQWUsRUFBZkEsZUFBckw7QUFBc01HLFdBQUssRUFBTEEsS0FBdE07QUFBNk1DLGNBQVEsRUFBUkE7QUFBN00sS0FBL0I7QUFBQSxjQUNLbkMsS0FBSyxDQUFDNkU7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQS9IRDs7R0FBTTlFLHFCOztLQUFBQSxxQjtBQWlJU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS43Y2M3YmFhMzkzOWRmMjAyYzNiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7YXV0aCwgc3RvcmUsIGRhdGFiYXNlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENsaWVudENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICBwcm9maWxlSW1hZ2U6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgICAgYWRkcmVzczogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXI9PntcclxuICAgICAgICB1c2VyICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5kb2ModXNlci51aWQpLmdldCgpLnRoZW4oZG9jPT5cclxuICAgICAgICAgIHNldERhdGEoZG9jLmRhdGEoKSlcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgICAgIHVzZXIgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUmVxdWVzdHMnKVxyXG4gICAgICAgICAgICAgIC53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uKGRhdGEpO1xyXG59LCBbXSk7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICBkYXRhICE9PSB1bmRlZmluZWQgJiYgc2V0UHJvZmlsZSh7Li4uZGF0YSwgZm9ybUVycm9yc30pXHJcbiAgICB9LCBbZGF0YV0pXHJcblxyXG4gICAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcm9maWxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzKXtcclxuICAgICAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHR5cGVzID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gICAgICAgbGV0IGZpbGVUeXBlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCA/IHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpOiBzZXRFcnJvcihcInVuc3VwcG9ydGVkIGltYWdlIHR5cGUqIGFjY2VwdGVkIGltYWdlIGpwZy9wbmdcIik7XHJcbiAgICAgICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICAgICAgbGV0IGZpbHRlcmVkSW1hZ2VTaXplPSBmaWxlVHlwZSA9PSB0cnVlID8gc2VsZWN0ZWQuc2l6ZSA8IEZpbGVTaXplIDogc2V0RXJyb3IoXCJmaWxlIHRvbyBsYXJnZSAqNW1iIG1pbmltdW1cIik7IFxyXG4gICAgICAgICBsZXQgaG9sZCA9IGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgJiYgKFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWQpKTsgXHJcbiAgICAgICAgIGhvbGQgIT09IHVuZGVmaW5lZCAmJiBzZXRUZW1wb3JhcnlJbWFnZShob2xkKTtcclxuICAgICAgICAgIGlmKGZpbHRlcmVkSW1hZ2VTaXplID09IHRydWUgKXtcclxuICAgICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yZS5yZWYoYHByb2ZpbGVpbWFnZXMvJHtzZWxlY3RlZC5uYW1lfWApO1xyXG4gICAgICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICAgICAgYXN5bmMgKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gYXdhaXQgKHNuYXAuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXAudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB9LCAgYXN5bmMgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9maWxlSW1hZ2UobmV3VXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9maWxlRGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIFxyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IHtmb3JtRXJyb3JzfSA9IHsuLi5wcm9maWxlfVxyXG5cclxuICAgIHByb2ZpbGVWYWxpZGF0ZShuYW1lLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgIHJldHVybiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCAgW25hbWVdOiB2YWx1ZX0pICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7Zmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBob25lTnVtYmVyLCBcclxuICAgIGFkZHJlc3MsXHJcbiAgICBwcm9maWxlSW1hZ2V9PSBwcm9maWxlO1xyXG4gICAgZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmFkZCh7Zmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lTnVtYmVyLCBcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgcHJvZmlsZUltYWdlfSlcclxuICB9OyBcclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVByZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgcHJvZmlsZUltYWdlfSk7XHJcbiAgICBzZXRDb3VudCgnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDbGllbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbiwgaGFuZGxlUHJvZmlsZUNoYW5nZSwgaGFuZGxlUHJvZmlsZVByZXZpZXcsIGhhbmRsZVByb2ZpbGVTdWJtaXQsIHByb2ZpbGUsIHNldFByb2ZpbGUsIHNldFRlbXBvcmFyeUltYWdlLCB0ZW1wb3JhcnlJbWFnZSwgcHJvZmlsZURldGFpbHMsIHByb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlLCBjb3VudCwgc2V0Q291bnR9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ2xpZW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50Q29udGV4dFByb3ZpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
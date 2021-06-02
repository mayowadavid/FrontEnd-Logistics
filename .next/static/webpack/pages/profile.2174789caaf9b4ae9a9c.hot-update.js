webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/DynamicHeader.js":
/*!*************************************!*\
  !*** ./components/DynamicHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg */ "./svg.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\DynamicHeader.js",
    _this = undefined,
    _s = $RefreshSig$();




var DynamicHeader = function DynamicHeader() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var headerName = router.pathname.replace('/', '');
  console.log(headerName);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "dynamic-header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.back();
      },
      className: "back",
      children: Object(_svg__WEBPACK_IMPORTED_MODULE_2__["Back"])()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dynamic-name",
      children: headerName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dynamic-login",
      children: " login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, _this);
};

_s(DynamicHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = DynamicHeader;
/* harmony default export */ __webpack_exports__["default"] = (DynamicHeader);

var _c;

$RefreshReg$(_c, "DynamicHeader");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_profile_profileHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/profileHandler */ "./components/profile/profileHandler.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../urlConfig */ "./urlConfig.js");
/* harmony import */ var _components_DynamicHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DynamicHeader */ "./components/DynamicHeader.js");






var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Profile = function Profile() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
      isLogin = _useContext.isLogin,
      setisLogin = _useContext.setisLogin;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6__["ClientContext"]),
      profile = _useContext2.profile,
      setProfile = _useContext2.setProfile,
      setProfileImage = _useContext2.setProfileImage;

  console.log(isLogin);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])( /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var token, res, formError;
    return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage && localStorage.getItem('token');
            console.log(token);
            token !== null && setisLogin(true);
            _context.next = 5;
            return _helpers_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('profile/create', {}, {
              headers: {
                'Authorization': token ? "Bearer ".concat(token) : ''
              }
            })["catch"](function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                error.response.status && (error.response.status == '500' ||  true && (_helpers_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('/signout'), localStorage.clear(), router.replace('/login')));
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }

              console.log(error.config);
            });

          case 5:
            res = _context.sent;
            formError = {
              formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: ''
              }
            };
            res && (res.data.profile.userId && setProfile(_objectSpread(_objectSpread({}, res.data.profile), formError)), res.data.profile.profileImage && setProfileImage(res.data.profile.profileImage));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  setisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DynamicHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profile_profileHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }, _this)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 17
  }, _this);
};

_s(Profile, "tz/07Wy0BOlmV51mGu6aca1XwZE=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EeW5hbWljSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIkR5bmFtaWNIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoZWFkZXJOYW1lIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImJhY2siLCJCYWNrIiwiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwiQ2xpZW50Q29udGV4dCIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2V0UHJvZmlsZUltYWdlIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwiY2xlYXIiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsImZvcm1FcnJvciIsImZvcm1FcnJvcnMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwidXNlcklkIiwicHJvZmlsZUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFHMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixHQUF4QixFQUE2QixFQUE3QixDQUFqQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosVUFBWjtBQUVFLHNCQUNRO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0s7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFLRixNQUFN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Z0I7QUFBQ0Msd0JBQVUsRUFBRTtBQUN4QkMseUJBQVMsRUFBRSxFQURhO0FBRXhCQyx3QkFBUSxFQUFFLEVBRmM7QUFHeEJDLHFCQUFLLEVBQUUsRUFIaUI7QUFJeEJDLDJCQUFXLEVBQUUsRUFKVztBQUt4QkMsdUJBQU8sRUFBRTtBQUxlO0FBQWIsYUFoQ2hCO0FBeUNEUCxlQUFHLEtBQ0RBLEdBQUcsQ0FBQ04sSUFBSixDQUFTWixPQUFULENBQWlCMEIsTUFBakIsSUFDSXpCLFVBQVUsaUNBQUtpQixHQUFHLENBQUNOLElBQUosQ0FBU1osT0FBZCxHQUEwQm1CLFNBQTFCLEVBRGQsRUFHQUQsR0FBRyxDQUFDTixJQUFKLENBQVNaLE9BQVQsQ0FBaUIyQixZQUFqQixJQUNFekIsZUFBZSxDQUFDZ0IsR0FBRyxDQUFDTixJQUFKLENBQVNaLE9BQVQsQ0FBaUIyQixZQUFsQixDQUxoQixDQUFIOztBQXpDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFGLElBa0ROLEVBbERNLENBQVQ7QUFtREE3QixZQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsU0FBU0QsT0FBTyxJQUFJLElBQVgsZ0JBQ0Y7QUFBQSw0QkFDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRyxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkg7QUFBQSxrQkFERSxnQkFJRyxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSlo7QUFLRSxDQS9ETjs7R0FBTUgsTzs7S0FBQUEsTztBQWlFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4yMTc0Nzg5Y2FhZjliNGFlOWE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtCYWNrfSBmcm9tIFwiLi4vc3ZnXCI7XHJcblxyXG5jb25zdCBEeW5hbWljSGVhZGVyID0gKCkgPT4ge1xyXG4gXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGxldCBoZWFkZXJOYW1lID0gcm91dGVyLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJyk7XHJcbiAgY29uc29sZS5sb2coaGVhZGVyTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJiYWNrXCI+e0JhY2soKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pYy1uYW1lXCI+e2hlYWRlck5hbWV9PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljLWxvZ2luXCI+IGxvZ2luPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgRHluYW1pY0hlYWRlcjsiLCJpbXBvcnQgUHJvZmlsZUhhbmRsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVIYW5kbGVyJztcclxuaW1wb3J0IHsgQXV0aENvbnRleHR9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dCc7XHJcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCBEeW5hbWljSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRHluYW1pY0hlYWRlcic7XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdHtpc0xvZ2luLCBzZXRpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpOyBcclxuICAgIGNvbnN0e3Byb2ZpbGUsIHNldFByb2ZpbGUsIHNldFByb2ZpbGVJbWFnZX0gPSB1c2VDb250ZXh0KENsaWVudENvbnRleHQpO1xyXG4gICBcclxuICBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuICAgIHVzZUVmZmVjdCAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICB0b2tlbiAhPT0gbnVsbCAmJiAoc2V0aXNMb2dpbih0cnVlKSlcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ3Byb2ZpbGUvY3JlYXRlJywge30sIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICAgICAgICAgICAgfX0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09ICc1MDAnIHx8ICc0MDAnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBsZXQgZm9ybUVycm9yID0gIHtmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJydcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgcmVzLmRhdGEucHJvZmlsZS51c2VySWQgICYmIChcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9maWxlKHsuLi5yZXMuZGF0YS5wcm9maWxlLCAuLi5mb3JtRXJyb3J9KVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlcy5kYXRhLnByb2ZpbGUucHJvZmlsZUltYWdlICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2ZpbGVJbWFnZShyZXMuZGF0YS5wcm9maWxlLnByb2ZpbGVJbWFnZSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgXHJcbiAgICB9LCBbXSk7XHJcbiAgICBzZXRpc0xvZ2luKHRydWUpXHJcbiAgICByZXR1cm4gKCBpc0xvZ2luID09IHRydWUgID9cclxuICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgPER5bmFtaWNIZWFkZXIgLz5cclxuICAgICAgICAgICAgICA8UHJvZmlsZUhhbmRsZXIgLz5cclxuICAgICAgICAgIDwvPik6IDxVc2VyTG9naW4gLz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9
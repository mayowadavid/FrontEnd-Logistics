webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/axios */ "./pages/api/axios");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();







var Header = function Header() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      isLogin = _useContext.isLogin;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var signout = /*#__PURE__*/function () {
    var _ref = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return _pages_api_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/signout')["catch"](function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
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

            case 3:
              res = _context.sent;
              localStorage.clear();
              router.replace('/login');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signout(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/dashboard",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "G4 logistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 64
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 40
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 18
    }, _this), isLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: " login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 71
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 51
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 28
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login",
      onClick: signout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: " Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 142
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 101
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }, _this);
};

_s(Header, "wkcU3DnxyUaGsuq3aK0sJB7lGdg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _HeaderBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderBar */ "./components/HeaderBar.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\Layout.js",
    _this = undefined;







var Layout = function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, _this), props.children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }, _this);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ "./pages/api/axios":
/*!*************************!*\
  !*** ./pages/api/axios ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../urlConfig */ "./urlConfig.js");




// const token = localStorage.getItem('token');


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"]
    // headers: {
    //     'Authorization': 
    //     token ? `Bearer ${token}`: ''
    // }
});

/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvYXhpb3MiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ25vdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInJlcGxhY2UiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNEQyx3REFBVSxDQUFDQyxnRUFBRCxDQURUO0FBQUEsTUFDWkMsT0FEWSxlQUNaQSxPQURZOztBQUduQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNFLE1BQU1DLE9BQU87QUFBQSx3UUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsZUFBQyxDQUFDQyxjQUFGO0FBRGM7QUFBQSxxQkFFTUMsd0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsV0FBNkIsVUFBVUMsS0FBVixFQUFpQjtBQUM1RCxvQkFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNDLFFBQU4sQ0FBZUcsSUFBM0I7QUFDQUYseUJBQU8s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cHAuZWIwM2VjODA2NjBmNjkxNmQzY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICcuLi9wYWdlcy9hcGkvYXhpb3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2lzTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgc2lnbm91dCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWdub3V0JykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YT5HNCBsb2dpc3RpY3M8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIHtpc0xvZ2luPyA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPiBsb2dpbjwvYT48L0xpbms+PC9kaXY+IDogIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIiBvbkNsaWNrPXtzaWdub3V0fT48YT4gU2lnbiBPdXQ8L2E+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIiBpbXBvcnQgUmVxdWVzdENvbnRleHRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvUmVxdWVzdENvbnRleHQnO1xyXG4gaW1wb3J0IEF1dGhDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBDbGllbnRDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQgSGVhZGVyQmFyIGZyb20gJy4vSGVhZGVyQmFyJztcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2xpZW50Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJCYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DbGllbnRDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1JlcXVlc3RDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3VybENvbmZpZyc7XHJcblxyXG5cclxuLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcblxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGFwaVxyXG4gICAgLy8gaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdBdXRob3JpemF0aW9uJzogXHJcbiAgICAvLyAgICAgdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICAgIC8vIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=
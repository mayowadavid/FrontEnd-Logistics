webpackHotUpdate_N_E("pages/transaction",{

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
        return router.replace('dashboard');
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

/***/ "./pages/transaction.js":
/*!******************************!*\
  !*** ./pages/transaction.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_DynamicHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DynamicHeader */ "./components/DynamicHeader.js");





var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\transaction.js",
    _this = undefined,
    _s = $RefreshSig$();










var Transaction = function Transaction() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__["AuthContext"]),
      isLogin = _useContext.isLogin,
      setisLogin = _useContext.setisLogin;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_7__["ClientContext"]),
      transaction = _useContext2.transaction,
      setTransaction = _useContext2.setTransaction;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var token, res;
    return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage && localStorage.getItem('token');
            token !== null && setisLogin(true);
            _context.next = 4;
            return _helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get('/request/userRequest', {
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
                error.response.status && (error.response.status == '500' ||  true && (_helpers_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/signout'), localStorage.clear(), setisLogin(false), router.replace('/login')));
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

          case 4:
            res = _context.sent;
            res && res.data.userRequest && setTransaction(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(res.data.userRequest));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var getFormattedDate = function getFormattedDate(dateString) {
    if (!dateString) {
      return "";
    }

    var date = new Date(dateString);
    return "".concat(date.getDate(), "-").concat(date.getMonth() + 1, "-").concat(date.getFullYear());
  };

  setisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DynamicHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "transaction_table",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "transaction_wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "transaction_body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 67
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 80
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 95
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 106
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: transaction !== [] && transaction.map(function (_ref2) {
              var tagName = _ref2.tagName,
                  createdAt = _ref2.createdAt,
                  status = _ref2.status,
                  _id = _ref2._id,
                  amount = _ref2.amount;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: tagName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(createdAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: _id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 51
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Id"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 32
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 21
  }, _this);
};

_s(Transaction, "BSDrZl4OP/AO+bXSmR0yiXYemSk=");

_c = Transaction;
/* harmony default export */ __webpack_exports__["default"] = (Transaction);

var _c;

$RefreshReg$(_c, "Transaction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EeW5hbWljSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90cmFuc2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJEeW5hbWljSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGVhZGVyTmFtZSIsInBhdGhuYW1lIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJCYWNrIiwiVHJhbnNhY3Rpb24iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsIkNsaWVudENvbnRleHQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJwb3N0IiwiY2xlYXIiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsInVzZXJSZXF1ZXN0IiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibWFwIiwidGFnTmFtZSIsImNyZWF0ZWRBdCIsIl9pZCIsImFtb3VudCIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBRzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBakI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVo7QUFFRSxzQkFDUTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5CLGdCQW9DUSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcENoQjtBQXNDSCxDQWhHRDs7R0FBTXRDLFc7O0tBQUFBLFc7QUFpR1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RyYW5zYWN0aW9uLjE5NjgwOGE4OTBlYzNjYjI4ZWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0JhY2t9IGZyb20gXCIuLi9zdmdcIjtcclxuXHJcbmNvbnN0IER5bmFtaWNIZWFkZXIgPSAoKSA9PiB7XHJcbiBcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgbGV0IGhlYWRlck5hbWUgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKTtcclxuICBjb25zb2xlLmxvZyhoZWFkZXJOYW1lKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKX0gY2xhc3NOYW1lPVwiYmFja1wiPntCYWNrKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWMtbmFtZVwiPntoZWFkZXJOYW1lfTwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pYy1sb2dpblwiPiBsb2dpbjwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IER5bmFtaWNIZWFkZXI7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHsgQ2xpZW50Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4nO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRHluYW1pY0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9EeW5hbWljSGVhZGVyXCI7XHJcblxyXG5cclxuY29uc3QgVHJhbnNhY3Rpb24gPSAoKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgY29uc3R7aXNMb2dpbiwgc2V0aXNMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsgXHJcbiAgICAgICAgY29uc3R7dHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9ufSA9IHVzZUNvbnRleHQoQ2xpZW50Q29udGV4dCk7IFxyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgICAgIHRva2VuICE9PSBudWxsICYmIChzZXRpc0xvZ2luKHRydWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvcmVxdWVzdC91c2VyUmVxdWVzdCcsIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gJzUwMCcgfHwgJzQwMCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0aXNMb2dpbihmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS51c2VyUmVxdWVzdCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uKFsuLi5yZXMuZGF0YS51c2VyUmVxdWVzdF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChpc0xvZ2luID09IHRydWUgPyAoPGRpdj5cclxuICAgICAgICAgICAgPER5bmFtaWNIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl90YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90ZD48dGQ+RGF0ZTwvdGQ+PHRkPlN0YXR1czwvdGQ+PHRkPklkPC90ZD48dGQ+VG90YWw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uICE9PSBbXSAmJiAoIHRyYW5zYWN0aW9uLm1hcCgoe3RhZ05hbWUsIGNyZWF0ZWRBdCwgc3RhdHVzLCBfaWQsIGFtb3VudH0pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1dWlkdjQoKX0gPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGFnTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Rm9ybWF0dGVkRGF0ZShjcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e19pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW1vdW50ID8gYW1vdW50IDogXCItLVwifTwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5JZDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+VG90YWw8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KSA6ICggPFVzZXJMb2dpbiAvPilcclxuICAgIClcclxufSAgXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=
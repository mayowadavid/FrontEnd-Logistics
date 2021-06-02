webpackHotUpdate_N_E("pages/transaction",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb24iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsIkNsaWVudENvbnRleHQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiZXJyb3IiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwicG9zdCIsImNsZWFyIiwicm91dGVyIiwicmVwbGFjZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiY29uZmlnIiwicmVzIiwidXNlclJlcXVlc3QiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJtYXAiLCJ0YWdOYW1lIiwiY3JlYXRlZEF0IiwiX2lkIiwiYW1vdW50IiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxvQkFFV0Msd0RBQVUsQ0FBQ0MsMkVBQUQsQ0FGckI7QUFBQSxNQUVaQyxPQUZZLGVBRVpBLE9BRlk7QUFBQSxNQUVIQyxVQUZHLGVBRUhBLFVBRkc7O0FBQUEscUJBR21CSCx3REFBVSxDQUFDSSwrRUFBRCxDQUg3QjtBQUFBLE1BR1pDLFdBSFksZ0JBR1pBLFdBSFk7QUFBQSxNQUdDQyxjQUhELGdCQUdDQSxjQUhEOztBQUtkQyx5REFBUyx3UUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDREMsaUJBREMsR0FDT0Ms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ZUFJUTtBQUFBLHVDQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKUixlQUtRO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuQixnQkFvQ1EscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXBDaEI7QUFzQ0gsQ0FoR0Q7O0dBQU0xQyxXOztLQUFBQSxXO0FBaUdTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90cmFuc2FjdGlvbi4zN2U0ZDc5OTA3YjFkOTlhY2Q2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHsgQ2xpZW50Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4nO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRHluYW1pY0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9EeW5hbWljSGVhZGVyXCI7XHJcblxyXG5cclxuY29uc3QgVHJhbnNhY3Rpb24gPSAoKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgY29uc3R7aXNMb2dpbiwgc2V0aXNMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsgXHJcbiAgICAgICAgY29uc3R7dHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9ufSA9IHVzZUNvbnRleHQoQ2xpZW50Q29udGV4dCk7IFxyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgICAgIHRva2VuICE9PSBudWxsICYmIChzZXRpc0xvZ2luKHRydWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvcmVxdWVzdC91c2VyUmVxdWVzdCcsIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gJzUwMCcgfHwgJzQwMCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9zaWdub3V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0aXNMb2dpbihmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS51c2VyUmVxdWVzdCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uKFsuLi5yZXMuZGF0YS51c2VyUmVxdWVzdF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChpc0xvZ2luID09IHRydWUgPyAoPGRpdj5cclxuICAgICAgICAgICAgPER5bmFtaWNIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl90YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidHJhbnNhY3Rpb25fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90ZD48dGQ+RGF0ZTwvdGQ+PHRkPlN0YXR1czwvdGQ+PHRkPklkPC90ZD48dGQ+VG90YWw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uICE9PSBbXSAmJiAoIHRyYW5zYWN0aW9uLm1hcCgoe3RhZ05hbWUsIGNyZWF0ZWRBdCwgc3RhdHVzLCBfaWQsIGFtb3VudH0pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1dWlkdjQoKX0gPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGFnTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Rm9ybWF0dGVkRGF0ZShjcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e19pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW1vdW50ID8gYW1vdW50IDogXCItLVwifTwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5JZDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+VG90YWw8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KSA6ICggPFVzZXJMb2dpbiAvPilcclxuICAgIClcclxufSAgXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=
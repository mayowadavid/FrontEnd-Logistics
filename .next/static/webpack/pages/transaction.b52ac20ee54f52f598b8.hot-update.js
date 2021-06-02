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
/* harmony import */ var _components_DynamicHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DynamicHeader */ "./components/DynamicHeader.js");





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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DynamicHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
                  lineNumber: 75,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 67
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 80
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 95
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 106
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
                  lineNumber: 82,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(createdAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: _id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 51
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Id"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 32
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb24iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsIkNsaWVudENvbnRleHQiLCJ0cmFuc2FjdGlvbiIsInNldFRyYW5zYWN0aW9uIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiZXJyb3IiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwicG9zdCIsImNsZWFyIiwicm91dGVyIiwicmVwbGFjZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiY29uZmlnIiwicmVzIiwidXNlclJlcXVlc3QiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJtYXAiLCJ0YWdOYW1lIiwiY3JlYXRlZEF0IiwiX2lkIiwiYW1vdW50IiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG9CQUVXQyx3REFBVSxDQUFDQywyRUFBRCxDQUZyQjtBQUFBLE1BRVpDLE9BRlksZUFFWkEsT0FGWTtBQUFBLE1BRUhDLFVBRkcsZUFFSEEsVUFGRzs7QUFBQSxxQkFHbUJILHdEQUFVLENBQUNJLCtFQUFELENBSDdCO0FBQUEsTUFHWkMsV0FIWSxnQkFHWkEsV0FIWTtBQUFBLE1BR0NDLGNBSEQsZ0JBR0NBLGNBSEQ7O0FBS2RDLHlEQUFTLHdRQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNEQyxpQkFEQyxHQUNPQyxZQUFZLElB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QUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpSLGVBS1E7QUFBQSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5CLGdCQW9DUSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcENoQjtBQXNDSCxDQWhHRDs7R0FBTTFDLFc7O0tBQUFBLFc7QUFpR1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RyYW5zYWN0aW9uLmI1MmFjMjBlZTU0ZjUyZjU5OGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQgeyBDbGllbnRDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9DbGllbnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgVXNlckxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlckxvZ2luL3VzZXJMb2dpbic7XHJcbmltcG9ydCBEeW5hbWljSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0R5bmFtaWNIZWFkZXJcIjtcclxuXHJcblxyXG5jb25zdCBUcmFuc2FjdGlvbiA9ICgpID0+IHtcclxuICBcclxuICAgICAgICBjb25zdHtpc0xvZ2luLCBzZXRpc0xvZ2lufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpOyBcclxuICAgICAgICBjb25zdHt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb259ID0gdXNlQ29udGV4dChDbGllbnRDb250ZXh0KTsgXHJcblxyXG4gICAgICAgICAgICB1c2VFZmZlY3QgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gIT09IG51bGwgJiYgKHNldGlzTG9naW4odHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9yZXF1ZXN0L3VzZXJSZXF1ZXN0JywgeyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSAnNTAwJyB8fCAnNDAwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL3NpZ25vdXQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRpc0xvZ2luKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLnVzZXJSZXF1ZXN0ICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNhY3Rpb24oWy4uLnJlcy5kYXRhLnVzZXJSZXF1ZXN0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBnZXRGb3JtYXR0ZWREYXRlID0gKGRhdGVTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS5nZXREYXRlKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKGlzTG9naW4gPT0gdHJ1ZSA/ICg8ZGl2PlxyXG4gICAgICAgICAgICA8RHluYW1pY0hlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPjx0ZD5EYXRlPC90ZD48dGQ+U3RhdHVzPC90ZD48dGQ+SWQ8L3RkPjx0ZD5Ub3RhbDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gIT09IFtdICYmICggdHJhbnNhY3Rpb24ubWFwKCh7dGFnTmFtZSwgY3JlYXRlZEF0LCBzdGF0dXMsIF9pZCwgYW1vdW50fSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3V1aWR2NCgpfSA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0YWdOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRGb3JtYXR0ZWREYXRlKGNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57X2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbW91bnQgPyBhbW91bnQgOiBcIi0tXCJ9PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPklkPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5Ub3RhbDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pIDogKCA8VXNlckxvZ2luIC8+KVxyXG4gICAgKVxyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==
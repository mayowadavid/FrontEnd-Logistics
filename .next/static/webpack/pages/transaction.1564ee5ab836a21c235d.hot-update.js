webpackHotUpdate_N_E("pages/transaction",{

/***/ "./components/context/ClientContext.js":
/*!*********************************************!*\
  !*** ./components/context/ClientContext.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var _components_DynamicHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DynamicHeader */ "./components/DynamicHeader.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg */ "./svg.js");


var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\pages\\transaction.js",
    _this = undefined,
    _s = $RefreshSig$();











var Transaction = function Transaction() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
      isLogin = _useContext.isLogin;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_4__["ClientContext"]),
      transaction = _useContext2.transaction,
      setTransaction = _useContext2.setTransaction;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = [];
    _components_firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].onAuthStateChanged(function (user) {
      user !== null && _components_firebase__WEBPACK_IMPORTED_MODULE_8__["database"].collection('Requests').where("userId", "==", user.uid).onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data());
        });
      });
    });
    setTransaction(data);
  }, []);

  var getFormattedDate = function getFormattedDate(dateString) {
    if (dateString !== undefined) {
      var date = dateString !== undefined && new Date(dateString.toDate());
      return "".concat(date.getDate(), "-").concat(date.getMonth() + 1, "-").concat(date.getFullYear());
    }
  };

  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DynamicHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
                  lineNumber: 47,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 67
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 80
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 95
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 106
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: transaction !== [] && transaction.map(function (_ref) {
              var tagName = _ref.tagName,
                  createdAt = _ref.createdAt,
                  status = _ref.status,
                  _id = _ref._id,
                  amount = _ref.amount;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: tagName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(createdAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: _id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 51
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Id"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 32
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 21
  }, _this);
};

_s(Transaction, "s2DI4bxF6MsJ5Az003a9d5noeDo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb24iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0xvZ2luIiwiQ2xpZW50Q29udGV4dCIsInRyYW5zYWN0aW9uIiwic2V0VHJhbnNhY3Rpb24iLCJ1c2VFZmZlY3QiLCJkYXRhIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInVpZCIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImRhdGUiLCJEYXRlIiwidG9EYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJtYXAiLCJ0YWdOYW1lIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwiX2lkIiwiYW1vdW50IiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsb0JBRURDLHdEQUFVLENBQUNDLDJFQUFELENBRlQ7QUFBQSxNQUVaQyxPQUZZLGVBRVpBLE9BRlk7O0FBQUEscUJBR21CRix3REFBVSxDQUFDRywrRUFBRCxDQUg3QjtBQUFBLE1BR1pDLFdBSFksZ0JBR1pBLFdBSFk7QUFBQSxNQUdDQyxjQUhELGdCQUdDQSxjQUhEOztBQUtkQyx5REFBUyxDQUFFLFlBQU07QUFDVCxRQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNK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QSxtQ0FDQTtBQUFBLHNDQUNRO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURSLGVBRVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlIsZUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIUixlQUlRO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpSLGVBS1E7QUFBQSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5CLGdCQW9DUSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBcENoQjtBQXNDSCxDQWxFRDs7R0FBTXBDLFc7O0tBQUFBLFc7QUFtRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RyYW5zYWN0aW9uLjE1NjRlZTVhYjgzNmEyMWMyMzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IHsgQ2xpZW50Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJMb2dpbi91c2VyTG9naW4nO1xyXG5pbXBvcnQgRHluYW1pY0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9EeW5hbWljSGVhZGVyXCI7XHJcbmltcG9ydCB7YXV0aCwgZGF0YWJhc2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHByb2ZpbGUgfSBmcm9tIFwiLi4vc3ZnXCI7XHJcblxyXG5cclxuY29uc3QgVHJhbnNhY3Rpb24gPSAoKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgY29uc3R7aXNMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsgXHJcbiAgICAgICAgY29uc3R7dHJhbnNhY3Rpb24sIHNldFRyYW5zYWN0aW9ufSA9IHVzZUNvbnRleHQoQ2xpZW50Q29udGV4dCk7IFxyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2FjdGlvbihkYXRhKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBnZXRGb3JtYXR0ZWREYXRlID0gKGRhdGVTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlU3RyaW5nICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlU3RyaW5nICE9PSB1bmRlZmluZWQgJiYgbmV3IERhdGUoZGF0ZVN0cmluZy50b0RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtkYXRlLmdldERhdGUoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKGlzTG9naW4gPT0gdHJ1ZSA/ICg8ZGl2PlxyXG4gICAgICAgICAgICA8RHluYW1pY0hlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zYWN0aW9uX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0cmFuc2FjdGlvbl9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPjx0ZD5EYXRlPC90ZD48dGQ+U3RhdHVzPC90ZD48dGQ+SWQ8L3RkPjx0ZD5Ub3RhbDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gIT09IFtdICYmICggdHJhbnNhY3Rpb24ubWFwKCh7dGFnTmFtZSwgY3JlYXRlZEF0LCBzdGF0dXMsIF9pZCwgYW1vdW50fSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3V1aWR2NCgpfSA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0YWdOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRGb3JtYXR0ZWREYXRlKGNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57X2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbW91bnQgPyBhbW91bnQgOiBcIi0tXCJ9PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPklkPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5Ub3RhbDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pIDogKCA8VXNlckxvZ2luIC8+KVxyXG4gICAgKVxyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==
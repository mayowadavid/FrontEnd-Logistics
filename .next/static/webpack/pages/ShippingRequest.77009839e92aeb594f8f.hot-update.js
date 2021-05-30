webpackHotUpdate_N_E("pages/ShippingRequest",{

/***/ "./components/AdminRequest/BottomButton.js":
/*!*************************************************!*\
  !*** ./components/AdminRequest/BottomButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\AdminRequest\\BottomButton.js",
    _this = undefined,
    _s = $RefreshSig$();





var BottomButton = function BottomButton() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_2__["RequestContext"]),
      selector = _useContext.selector;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bottom-button",
    children: selector.map(function (_ref) {
      var content = _ref.content,
          icon = _ref.icon,
          title = _ref.title,
          id = _ref.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/".concat(content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "side-holder",
            children: [icon, " ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 52
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 48
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_s(BottomButton, "x1n6lAe9edAmjYnMdikEcX2/VNc=");

_c = BottomButton;
/* harmony default export */ __webpack_exports__["default"] = (BottomButton);

var _c;

$RefreshReg$(_c, "BottomButton");

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

/***/ "./pages/ShippingRequest.js":
/*!**********************************!*\
  !*** ./pages/ShippingRequest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/usersRequest/requestHandler */ "./components/usersRequest/requestHandler.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AdminRequest/sideButton */ "./components/AdminRequest/sideButton.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/adminLogin/adminSignin */ "./components/adminLogin/adminSignin.js");
/* harmony import */ var _components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AdminRequest/BottomButton */ "./components/AdminRequest/BottomButton.js");





var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\ShippingRequest.js",
    _this = undefined,
    _s = $RefreshSig$();











var ShippingRequest = function ShippingRequest() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    options: "move-to-trash"
  }, {
    options: " Change status to processing"
  }, {
    options: "Change status to on-hold"
  }, {
    options: "Change status to completed"
  }]),
      requestOption = _useState[0],
      setRequesttOption = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_9__["RequestContext"]),
      extractedRequest = _useContext.extractedRequest,
      setExtractedRequest = _useContext.setExtractedRequest,
      setCount = _useContext.setCount,
      input = _useContext.input,
      initialState = _useContext.initialState,
      setInput = _useContext.setInput,
      setPermanentImages = _useContext.setPermanentImages,
      sessionToken = _useContext.sessionToken,
      isLogin = _useContext.isLogin,
      setisLogin = _useContext.setisLogin;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      q = _useState2[0],
      setQ = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      updateShipping = _useState3[0],
      setUpdateShipping = _useState3[1];

  console.log(sessionToken);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var token, res;
    return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage && localStorage.getItem('token');
            _context.next = 3;
            return _helpers_axios__WEBPACK_IMPORTED_MODULE_7__["default"].get('/request/get', {
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
            res && (res.data.user.role == 'admin' && setisLogin(true), setExtractedRequest(res.data.request));

          case 5:
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

  var search = function search(rows) {
    var columns = rows[0] && Object.keys(rows[0]);
    return rows.filter(function (row) {
      return columns.some(function (column) {
        return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    });
  };

  var newShipping = function newShipping() {
    setCount();
    setInput(initialState);
    return setUpdateShipping( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_usersRequest_requestHandler__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 46
    }, _this));
  };

  var requestData = /*#__PURE__*/function () {
    var _ref2 = Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      var res, singleRequest;
      return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_7__["default"].get('/request/' + id);

            case 2:
              res = _context2.sent;

              if (!(res.status == 201)) {
                _context2.next = 7;
                break;
              }

              singleRequest = res.data.singleRequest;
              setCount('action');
              return _context2.abrupt("return", setInput(singleRequest));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function requestData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  setisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "shipping-request",
      children: updateShipping !== undefined ? updateShipping : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "create-contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "add-button",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return setPermanentImages([]);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: "/AdminRequest",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Create New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 130
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 127
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 57
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "search",
                name: "search",
                value: q,
                onChange: function onChange(e) {
                  return setQ(e.target.value);
                },
                placeholder: "search..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 62
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 57
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 49
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "all-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-head",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                children: requestOption.map(function (_ref3) {
                  var options = _ref3.options;
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: options
                  }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 73
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 57
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Apply"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 49
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "All dates"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 57
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 57
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 57
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 57
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Filter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 49
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "All|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 49
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Trash |"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 64
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Pending Approval|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 82
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "On hold|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 110
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Completed|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 129
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Refundeded|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 150
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Cancelled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 172
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 41
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "contact-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 57
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 53
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 91
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 87
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 117
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 130
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 145
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 49
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: extractedRequest !== undefined && extractedRequest.map(function (_ref4) {
              var tagName = _ref4.tagName,
                  updatedAt = _ref4.updatedAt,
                  status = _ref4.status,
                  _id = _ref4._id,
                  amount = _ref4.amount;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "checkbox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 69
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/EachRequest/".concat(_id),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: tagName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 105
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 69
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(updatedAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 65
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 49
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Completed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 49
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 41
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 33
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 32
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 20
  }, _this);
};

_s(ShippingRequest, "Q0lq3ZiHpAtv5dNo4R8RJTk53Dg=");

_c = ShippingRequest;
/* harmony default export */ __webpack_exports__["default"] = (ShippingRequest);

var _c;

$RefreshReg$(_c, "ShippingRequest");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pblJlcXVlc3QvQm90dG9tQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9TaGlwcGluZ1JlcXVlc3QuanMiXSwibmFtZXMiOlsiQm90dG9tQnV0dG9uIiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0Iiwic2VsZWN0b3IiLCJtYXAiLCJjb250ZW50IiwiaWNvbiIsInRpdGxlIiwiaWQiLCJTaGlwcGluZ1JlcXVlc3QiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJyZXF1ZXN0T3B0aW9uIiwic2V0UmVxdWVzdHRPcHRpb24iLCJleHRyYWN0ZWRSZXF1ZXN0Iiwic2V0RXh0cmFjdGVkUmVxdWVzdCIsInNldENvdW50IiwiaW5wdXQiLCJpbml0aWFsU3RhdGUiLCJzZXRJbnB1dCIsInNldFBlcm1hbmVudEltYWdlcyIsInNlc3Npb25Ub2tlbiIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwicSIsInNldFEiLCJ1cGRhdGVTaGlwcGluZyIsInNldFVwZGF0ZVNoaXBwaW5nIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJyZXMiLCJ1c2VyIiwicm9sZSIsImdldEZvcm1hdHRlZERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInNlYXJjaCIsInJvd3MiLCJjb2x1bW5zIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsInJvdyIsInNvbWUiLCJjb2x1bW4iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm5ld1NoaXBwaW5nIiwicmVxdWVzdERhdGEiLCJzaW5nbGVSZXF1ZXN0IiwidW5kZWZpbmVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidXVpZHY0IiwidGFnTmFtZSIsInVwZGF0ZWRBdCIsIl9pZCIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFBQTs7QUFBQSxvQkFDRkMsd0RBQVUsQ0FBQ0MsaUZBQUQsQ0FEUjtBQUFBLE1BQ2RDLFFBRGMsZUFDZEEsUUFEYzs7QUFFdEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLGNBQ0NBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhO0FBQUEsVUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsVUFBV0MsSUFBWCxRQUFXQSxJQUFYO0FBQUEsVUFBaUJDLEtBQWpCLFFBQWlCQSxLQUFqQjtBQUFBLFVBQXdCQyxFQUF4QixRQUF3QkEsRUFBeEI7QUFBQSwwQkFDWCxxRUFBQyxnREFBRDtBQUFlLFlBQUksYUFBTUgsT0FBTixDQUFuQjtBQUFBLCtCQUFvQztBQUFBLHVDQUFJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsdUJBQThCQyxJQUE5QixPQUFxQ0MsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQyxTQUFXQyxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVREOztHQUFNUixZOztLQUFBQSxZO0FBV1NBLDJFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTVMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixH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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpSLGVBS1E7QUFBQSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCTDtBQUFBO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbkIsZ0JBbUVPLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FuRWY7QUFxRUgsQ0FySkQ7O0dBQU1oRSxlOztLQUFBQSxlO0FBc0pTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TaGlwcGluZ1JlcXVlc3QuNzcwMDk4MzllOTJhZWI1OTRmOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UmVxdWVzdENvbnRleHR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEJvdHRvbUJ1dHRvbiA9ICgpPT4ge1xyXG4gICAgY29uc3QgeyBzZWxlY3Rvcn0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tYnV0dG9uXCI+XHJcbiAgICAgICAge3NlbGVjdG9yLm1hcCgoe2NvbnRlbnQsIGljb24sIHRpdGxlLCBpZH0pID0+IFxyXG4gICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtjb250ZW50fWB9PjxhPiA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtaG9sZGVyXCI+e2ljb259IHt0aXRsZX08L2Rpdj4gPC9hPjwvTGluaz5cclxuICAgICAgICApIH1cclxuPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21CdXR0b247IiwiaW1wb3J0IFJlcXVlc3RIYW5kbGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzUmVxdWVzdC9yZXF1ZXN0SGFuZGxlclwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9oZWxwZXJzL2F4aW9zJztcclxuaW1wb3J0IFNpZGVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5SZXF1ZXN0L3NpZGVCdXR0b25cIjtcclxuaW1wb3J0IHsgUmVxdWVzdENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0XCI7XHJcbmltcG9ydCBBZG1pblNpZ25pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbkxvZ2luL2FkbWluU2lnbmluXCI7XHJcbmltcG9ydCBCb3R0b21CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5SZXF1ZXN0L0JvdHRvbUJ1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IFNoaXBwaW5nUmVxdWVzdCA9ICgpID0+IHtcclxuICBcclxuICAgICAgICBjb25zdCBbcmVxdWVzdE9wdGlvbiwgc2V0UmVxdWVzdHRPcHRpb25dID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICAgICAgICAge29wdGlvbnM6IFwibW92ZS10by10cmFzaFwifSxcclxuICAgICAgICAgICAgICAgIHtvcHRpb25zOiBcIiBDaGFuZ2Ugc3RhdHVzIHRvIHByb2Nlc3NpbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCJDaGFuZ2Ugc3RhdHVzIHRvIG9uLWhvbGRcIn0sXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCJDaGFuZ2Ugc3RhdHVzIHRvIGNvbXBsZXRlZFwifVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3R7ZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgc2V0Q291bnQsIGlucHV0LCBpbml0aWFsU3RhdGUsIHNldElucHV0LCBzZXRQZXJtYW5lbnRJbWFnZXMsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKFwiXCIpOyBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFt1cGRhdGVTaGlwcGluZywgc2V0VXBkYXRlU2hpcHBpbmddID0gdXNlU3RhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvblRva2VuKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB1c2VFZmZlY3QgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9yZXF1ZXN0L2dldCcsIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEudXNlci5yb2xlID09ICdhZG1pbicgJiYgKCBzZXRpc0xvZ2luKHRydWUpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4dHJhY3RlZFJlcXVlc3QocmVzLmRhdGEucmVxdWVzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICAgY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2ggPShyb3dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93c1swXSAmJiBPYmplY3Qua2V5cyhyb3dzWzBdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKChyb3cpID0+IFxyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5zb21lKChjb2x1bW4pID0+IHJvd1tjb2x1bW5dLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHEudG9Mb3dlckNhc2UoKSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXBwaW5nID0gKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0KGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFVwZGF0ZVNoaXBwaW5nKDxSZXF1ZXN0SGFuZGxlciAvPilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyhpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3JlcXVlc3QvJyArIGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3NpbmdsZVJlcXVlc3R9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50KCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQoc2luZ2xlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKGlzTG9naW4gPT0gdHJ1ZSA/ICg8ZGl2PlxyXG4gICAgICAgICA8U2lkZUJ1dHRvbi8+XHJcbiAgICAgICAgIDxCb3R0b21CdXR0b24gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwcGluZy1yZXF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICB7ICAgIHVwZGF0ZVNoaXBwaW5nICE9PSB1bmRlZmluZWQgPyB1cGRhdGVTaGlwcGluZyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gc2V0UGVybWFuZW50SW1hZ2VzKFtdKX0+PExpbmsgaHJlZj1cIi9BZG1pblJlcXVlc3RcIj48YT48cCA+Q3JlYXRlIE5ldzwvcD48L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3F9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwic2VhcmNoLi4uXCIvPjwvZGl2PiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsLWNvbnRhY3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1ZXN0T3B0aW9uLm1hcCgoe29wdGlvbnN9KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3V1aWR2NCgpfT57b3B0aW9uc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFwcGx5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFsbCBkYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RGF0ZTE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGUyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkZpbHRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkFsbHw8L2Rpdj48ZGl2PlRyYXNoIHw8L2Rpdj48ZGl2PlBlbmRpbmcgQXBwcm92YWx8PC9kaXY+PGRpdj5PbiBob2xkfDwvZGl2PjxkaXY+Q29tcGxldGVkfDwvZGl2PjxkaXY+UmVmdW5kZWRlZHw8L2Rpdj48ZGl2PkNhbmNlbGxlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNvbnRhY3QtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPjx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPjx0ZD5EYXRlPC90ZD48dGQ+U3RhdHVzPC90ZD48dGQ+VG90YWw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdGVkUmVxdWVzdCAhPT0gdW5kZWZpbmVkICYmICggZXh0cmFjdGVkUmVxdWVzdC5tYXAoKHt0YWdOYW1lLCB1cGRhdGVkQXQsIHN0YXR1cywgX2lkLCBhbW91bnR9KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3V1aWR2NCgpfSA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQgb25DbGljaz17KCk9PiByZXF1ZXN0RGF0YShfaWQpfT48TGluayAgaHJlZj17YC9TaW5nbGVSZXF1ZXN0Lz9pZD0ke19pZH1gfT48YT57dGFnTmFtZX08L2E+PC9MaW5rPjwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxMaW5rICBocmVmPXtgL0VhY2hSZXF1ZXN0LyR7X2lkfWB9PjxhPnt0YWdOYW1lfTwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Rm9ybWF0dGVkRGF0ZSh1cGRhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbW91bnQgPyBhbW91bnQgOiBcIi0tXCJ9PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5Db21wbGV0ZWQ8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5Ub3RhbDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PikgOiAoPEFkbWluU2lnbmluIC8+KVxyXG4gICAgKVxyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmdSZXF1ZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
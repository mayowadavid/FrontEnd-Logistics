webpackHotUpdate_N_E("pages/ShippingRequest",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
      lineNumber: 78,
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

  SetisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
                    lineNumber: 98,
                    columnNumber: 106
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 103
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
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
                lineNumber: 99,
                columnNumber: 38
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 28
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
                    lineNumber: 107,
                    columnNumber: 57
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Apply"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "All dates"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: "Date2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "Filter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "All|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Trash |"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 48
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Pending Approval|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 66
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "On hold|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 94
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Completed|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 113
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Refundeded|"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 134
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Cancelled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 156
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "contact-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 75
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 71
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 101
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 114
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 129
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
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
                    lineNumber: 134,
                    columnNumber: 55
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/EachRequest/".concat(_id),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: tagName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 91
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 55
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: getFormattedDate(updatedAt)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: amount ? amount : "--"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 51
                }, _this)]
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tfoot", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Completed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 32
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2hpcHBpbmdSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlNoaXBwaW5nUmVxdWVzdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInJlcXVlc3RPcHRpb24iLCJzZXRSZXF1ZXN0dE9wdGlvbiIsInVzZUNvbnRleHQiLCJSZXF1ZXN0Q29udGV4dCIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2V0Q291bnQiLCJpbnB1dCIsImluaXRpYWxTdGF0ZSIsInNldElucHV0Iiwic2V0UGVybWFuZW50SW1hZ2VzIiwic2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJxIiwic2V0USIsInVwZGF0ZVNoaXBwaW5nIiwic2V0VXBkYXRlU2hpcHBpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsInVzZXIiLCJyb2xlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwic2VhcmNoIiwicm93cyIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwicm93Iiwic29tZSIsImNvbHVtbiIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3U2hpcHBpbmciLCJyZXF1ZXN0RGF0YSIsImlkIiwic2luZ2xlUmVxdWVzdCIsIlNldGlzTG9naW4iLCJ1bmRlZmluZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ1dWlkdjQiLCJ0YWdOYW1lIiwidXBkYXRlZEF0IiwiX2lkIiwiYW1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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dUJBSFIsZUFJUTtBQUFBLHVDQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKUixlQUtRO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Qk87QUFBQTtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5CLGdCQWtFTyxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbEVmO0FBb0VILENBcEpEOztHQUFNckUsZTs7S0FBQUEsZTtBQXFKU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2hpcHBpbmdSZXF1ZXN0LjMzMWRmZTZkYzZlYjEyOTgyYTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdEhhbmRsZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlcnNSZXF1ZXN0L3JlcXVlc3RIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQgU2lkZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9BZG1pblJlcXVlc3Qvc2lkZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHRcIjtcclxuaW1wb3J0IEFkbWluU2lnbmluIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluTG9naW4vYWRtaW5TaWduaW5cIjtcclxuXHJcblxyXG5jb25zdCBTaGlwcGluZ1JlcXVlc3QgPSAoKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgW3JlcXVlc3RPcHRpb24sIHNldFJlcXVlc3R0T3B0aW9uXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICAgICAgICAgIHtvcHRpb25zOiBcIm1vdmUtdG8tdHJhc2hcIn0sXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCIgQ2hhbmdlIHN0YXR1cyB0byBwcm9jZXNzaW5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge29wdGlvbnM6IFwiQ2hhbmdlIHN0YXR1cyB0byBvbi1ob2xkXCJ9LFxyXG4gICAgICAgICAgICAgICAge29wdGlvbnM6IFwiQ2hhbmdlIHN0YXR1cyB0byBjb21wbGV0ZWRcIn1cclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0e2V4dHJhY3RlZFJlcXVlc3QsIHNldEV4dHJhY3RlZFJlcXVlc3QsIHNldENvdW50LCBpbnB1dCwgaW5pdGlhbFN0YXRlLCBzZXRJbnB1dCwgc2V0UGVybWFuZW50SW1hZ2VzLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBbcSwgc2V0UV0gPSB1c2VTdGF0ZShcIlwiKTsgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBbdXBkYXRlU2hpcHBpbmcsIHNldFVwZGF0ZVNoaXBwaW5nXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25Ub2tlbik7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvcmVxdWVzdC9nZXQnLCB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLnVzZXIucm9sZSA9PSAnYWRtaW4nICYmICggc2V0aXNMb2dpbih0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHRyYWN0ZWRSZXF1ZXN0KHJlcy5kYXRhLnJlcXVlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgIGNvbnN0IGdldEZvcm1hdHRlZERhdGUgPSAoZGF0ZVN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkYXRlLmdldERhdGUoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0ocm93cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHJvd3NbMF0gJiYgT2JqZWN0LmtleXMocm93c1swXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiBcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMuc29tZSgoY29sdW1uKSA9PiByb3dbY29sdW1uXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxLnRvTG93ZXJDYXNlKCkpID4gLTEpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwcGluZyA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dChpbml0aWFsU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRVcGRhdGVTaGlwcGluZyg8UmVxdWVzdEhhbmRsZXIgLz4pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0gYXN5bmMoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9yZXF1ZXN0LycgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtzaW5nbGVSZXF1ZXN0fSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb3VudCgnYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldElucHV0KHNpbmdsZVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICBTZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChpc0xvZ2luID09IHRydWUgPyAoPGRpdj5cclxuICAgICAgICAgPFNpZGVCdXR0b24vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLXJlcXVlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgIHsgICAgdXBkYXRlU2hpcHBpbmcgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZVNoaXBwaW5nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gc2V0UGVybWFuZW50SW1hZ2VzKFtdKX0+PExpbmsgaHJlZj1cIi9BZG1pblJlcXVlc3RcIj48YT48cCA+Q3JlYXRlIE5ldzwvcD48L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3F9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwic2VhcmNoLi4uXCIvPjwvZGl2PiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsLWNvbnRhY3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWVzdE9wdGlvbi5tYXAoKHtvcHRpb25zfSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3V1aWR2NCgpfT57b3B0aW9uc308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFwcGx5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QWxsIGRhdGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRlMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RGF0ZTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkZpbHRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QWxsfDwvZGl2PjxkaXY+VHJhc2ggfDwvZGl2PjxkaXY+UGVuZGluZyBBcHByb3ZhbHw8L2Rpdj48ZGl2Pk9uIGhvbGR8PC9kaXY+PGRpdj5Db21wbGV0ZWR8PC9kaXY+PGRpdj5SZWZ1bmRlZGVkfDwvZGl2PjxkaXY+Q2FuY2VsbGVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY29udGFjdC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPjx0ZD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L3RkPjx0ZD5EYXRlPC90ZD48dGQ+U3RhdHVzPC90ZD48dGQ+VG90YWw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RlZFJlcXVlc3QgIT09IHVuZGVmaW5lZCAmJiAoIGV4dHJhY3RlZFJlcXVlc3QubWFwKCh7dGFnTmFtZSwgdXBkYXRlZEF0LCBzdGF0dXMsIF9pZCwgYW1vdW50fSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3V1aWR2NCgpfSA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZCBvbkNsaWNrPXsoKT0+IHJlcXVlc3REYXRhKF9pZCl9PjxMaW5rICBocmVmPXtgL1NpbmdsZVJlcXVlc3QvP2lkPSR7X2lkfWB9PjxhPnt0YWdOYW1lfTwvYT48L0xpbms+PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxMaW5rICBocmVmPXtgL0VhY2hSZXF1ZXN0LyR7X2lkfWB9PjxhPnt0YWdOYW1lfTwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEZvcm1hdHRlZERhdGUodXBkYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbW91bnQgPyBhbW91bnQgOiBcIi0tXCJ9PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPkNvbXBsZXRlZDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+VG90YWw8L3N0cm9uZz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KSA6ICg8QWRtaW5TaWduaW4gLz4pXHJcbiAgICApXHJcbn0gIFxyXG5leHBvcnQgZGVmYXVsdCBTaGlwcGluZ1JlcXVlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
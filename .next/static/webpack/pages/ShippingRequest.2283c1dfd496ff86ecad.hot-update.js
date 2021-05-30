webpackHotUpdate_N_E("pages/ShippingRequest",{

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

  setisLogin(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2hpcHBpbmdSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlNoaXBwaW5nUmVxdWVzdCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInJlcXVlc3RPcHRpb24iLCJzZXRSZXF1ZXN0dE9wdGlvbiIsInVzZUNvbnRleHQiLCJSZXF1ZXN0Q29udGV4dCIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2V0Q291bnQiLCJpbnB1dCIsImluaXRpYWxTdGF0ZSIsInNldElucHV0Iiwic2V0UGVybWFuZW50SW1hZ2VzIiwic2Vzc2lvblRva2VuIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJxIiwic2V0USIsInVwZGF0ZVNoaXBwaW5nIiwic2V0VXBkYXRlU2hpcHBpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsInJlcyIsInVzZXIiLCJyb2xlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwic2VhcmNoIiwicm93cyIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwicm93Iiwic29tZSIsImNvbHVtbiIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibmV3U2hpcHBpbmciLCJyZXF1ZXN0RGF0YSIsImlkIiwic2luZ2xlUmVxdWVzdCIsInVuZGVmaW5lZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInV1aWR2NCIsInRhZ05hbWUiLCJ1cGRhdGVkQXQiLCJfaWQiLCJhbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpSLGVBS1E7QUFBQSx1Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCTztBQUFBO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbkIsZ0JBa0VPLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FsRWY7QUFvRUgsQ0FwSkQ7O0dBQU1wRSxlOztLQUFBQSxlO0FBcUpTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TaGlwcGluZ1JlcXVlc3QuMjI4M2MxZGZkNDk2ZmY4NmVjYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0SGFuZGxlciBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvcmVxdWVzdEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCBTaWRlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0FkbWluUmVxdWVzdC9zaWRlQnV0dG9uXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9SZXF1ZXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgQWRtaW5TaWduaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW5Mb2dpbi9hZG1pblNpZ25pblwiO1xyXG5cclxuXHJcbmNvbnN0IFNoaXBwaW5nUmVxdWVzdCA9ICgpID0+IHtcclxuICBcclxuICAgICAgICBjb25zdCBbcmVxdWVzdE9wdGlvbiwgc2V0UmVxdWVzdHRPcHRpb25dID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICAgICAgICAge29wdGlvbnM6IFwibW92ZS10by10cmFzaFwifSxcclxuICAgICAgICAgICAgICAgIHtvcHRpb25zOiBcIiBDaGFuZ2Ugc3RhdHVzIHRvIHByb2Nlc3NpbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCJDaGFuZ2Ugc3RhdHVzIHRvIG9uLWhvbGRcIn0sXHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uczogXCJDaGFuZ2Ugc3RhdHVzIHRvIGNvbXBsZXRlZFwifVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3R7ZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgc2V0Q291bnQsIGlucHV0LCBpbml0aWFsU3RhdGUsIHNldElucHV0LCBzZXRQZXJtYW5lbnRJbWFnZXMsIHNlc3Npb25Ub2tlbiwgaXNMb2dpbiwgc2V0aXNMb2dpbn0gPSB1c2VDb250ZXh0KFJlcXVlc3RDb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKFwiXCIpOyBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFt1cGRhdGVTaGlwcGluZywgc2V0VXBkYXRlU2hpcHBpbmddID0gdXNlU3RhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvblRva2VuKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB1c2VFZmZlY3QgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9yZXF1ZXN0L2dldCcsIHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEudXNlci5yb2xlID09ICdhZG1pbicgJiYgKCBzZXRpc0xvZ2luKHRydWUpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4dHJhY3RlZFJlcXVlc3QocmVzLmRhdGEucmVxdWVzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICAgY29uc3QgZ2V0Rm9ybWF0dGVkRGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RGF0ZSgpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2ggPShyb3dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93c1swXSAmJiBPYmplY3Qua2V5cyhyb3dzWzBdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKChyb3cpID0+IFxyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5zb21lKChjb2x1bW4pID0+IHJvd1tjb2x1bW5dLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHEudG9Mb3dlckNhc2UoKSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXBwaW5nID0gKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElucHV0KGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFVwZGF0ZVNoaXBwaW5nKDxSZXF1ZXN0SGFuZGxlciAvPilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyhpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3JlcXVlc3QvJyArIGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3NpbmdsZVJlcXVlc3R9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50KCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0SW5wdXQoc2luZ2xlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICByZXR1cm4gKGlzTG9naW4gPT0gdHJ1ZSA/ICg8ZGl2PlxyXG4gICAgICAgICA8U2lkZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctcmVxdWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgeyAgICB1cGRhdGVTaGlwcGluZyAhPT0gdW5kZWZpbmVkID8gdXBkYXRlU2hpcHBpbmcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiBzZXRQZXJtYW5lbnRJbWFnZXMoW10pfT48TGluayBocmVmPVwiL0FkbWluUmVxdWVzdFwiPjxhPjxwID5DcmVhdGUgTmV3PC9wPjwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaFwiIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17cX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJzZWFyY2guLi5cIi8+PC9kaXY+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGwtY29udGFjdFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1ZXN0T3B0aW9uLm1hcCgoe29wdGlvbnN9KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dXVpZHY0KCl9PntvcHRpb25zfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQXBwbHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbGwgZGF0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGUxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRlMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRmlsdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BbGx8PC9kaXY+PGRpdj5UcmFzaCB8PC9kaXY+PGRpdj5QZW5kaW5nIEFwcHJvdmFsfDwvZGl2PjxkaXY+T24gaG9sZHw8L2Rpdj48ZGl2PkNvbXBsZXRlZHw8L2Rpdj48ZGl2PlJlZnVuZGVkZWR8PC9kaXY+PGRpdj5DYW5jZWxsZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+PHRkPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvdGQ+PHRkPkRhdGU8L3RkPjx0ZD5TdGF0dXM8L3RkPjx0ZD5Ub3RhbDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdGVkUmVxdWVzdCAhPT0gdW5kZWZpbmVkICYmICggZXh0cmFjdGVkUmVxdWVzdC5tYXAoKHt0YWdOYW1lLCB1cGRhdGVkQXQsIHN0YXR1cywgX2lkLCBhbW91bnR9KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXVpZHY0KCl9ID4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkIG9uQ2xpY2s9eygpPT4gcmVxdWVzdERhdGEoX2lkKX0+PExpbmsgIGhyZWY9e2AvU2luZ2xlUmVxdWVzdC8/aWQ9JHtfaWR9YH0+PGE+e3RhZ05hbWV9PC9hPjwvTGluaz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgIGhyZWY9e2AvRWFjaFJlcXVlc3QvJHtfaWR9YH0+PGE+e3RhZ05hbWV9PC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Rm9ybWF0dGVkRGF0ZSh1cGRhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ftb3VudCA/IGFtb3VudCA6IFwiLS1cIn08L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzdHJvbmc+Q29tcGxldGVkPC9zdHJvbmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz5Ub3RhbDwvc3Ryb25nPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pIDogKDxBZG1pblNpZ25pbiAvPilcclxuICAgIClcclxufSAgXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXBwaW5nUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9
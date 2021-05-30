webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _components_context_RequestContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AdminRequest/sideButton */ "./components/AdminRequest/sideButton.js");
/* harmony import */ var _components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/adminLogin/adminSignin */ "./components/adminLogin/adminSignin.js");
/* harmony import */ var _components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AdminRequest/BottomButton */ "./components/AdminRequest/BottomButton.js");





var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\contact.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Contact = function Contact() {
  _s();

  var initialState = {
    firstName: "",
    phoneNumber: "",
    address: "",
    email: ""
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      contact = _useState[0],
      setContact = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      contactForm = _useState2[0],
      setContactForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      selectAll = _useState3[0],
      setSelectAll = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      q = _useState4[0],
      setQ = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      bulk = _useState5[0],
      setBulk = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    options: "Move-to-trash"
  }, {
    options: " Change status to processing"
  }, {
    options: "Change status to on-hold"
  }, {
    options: "Change status to completed"
  }]),
      contactOption = _useState6[0],
      setContactOption = _useState6[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_RequestContext__WEBPACK_IMPORTED_MODULE_5__["RequestContext"]),
      contacts = _useContext.contacts,
      setContacts = _useContext.setContacts;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      isLogin = _useContext2.isLogin,
      setisLogin = _useContext2.setisLogin; // change contact


  var handleChange = function handleChange(e) {
    if (e) {
      var select = false;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      var newContact = _objectSpread(_objectSpread({}, contact), {}, Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
        select: select
      }, name, value));

      return setContact(newContact);
    }
  }; // search function


  var search = function search(rows) {
    var columns = rows[0] && Object.keys(rows[0]);
    return rows.filter(function (row) {
      return columns.some(function (column) {
        return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    });
  }; // submit contact


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setContactForm('');
    var firstName = contact.firstName,
        email = contact.email,
        phoneNumber = contact.phoneNumber,
        address = contact.address,
        select = contact.select;
    return setContacts([].concat(Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(contacts), [{
      firstName: firstName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      select: select
    }]));
  }; // make form visible


  var activateForm = function activateForm() {
    return setContactForm('active');
  }; //change selector


  var changeSelector = function changeSelector(e) {
    setSelectAll(e.target.checked);
    contacts.map(function (_ref) {
      var select = _ref.select;
      return select = e.target.checked;
    });
    return contacts;
  }; // CREATE contacts


  var createContact = function createContact() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "contact-form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "firstName",
          children: "First Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "firstName",
          onChange: handleChange,
          id: "firstName",
          value: contact.firstName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "phoneNumber",
          children: "Phone Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "phoneNumber",
          onChange: handleChange,
          id: "phoneNumber",
          value: contact.phoneNumber
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "address",
          onChange: handleChange,
          id: "address",
          value: contact.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "email",
          onChange: handleChange,
          id: "email",
          value: contact.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "submit",
          value: "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 26
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }, _this);
  }; // handle bulk submit


  var handleBulk = function handleBulk(e) {
    e.preventDefault();
    setBulk(e.target.value);
  }; // handle bulk submit


  var handleBulkSubmit = function handleBulkSubmit(e) {
    e.preventDefault();

    if (bulk === "Move-to-trash") {
      contacts.filter(function (select) {
        return select === true;
      });
    }
  };

  setisLogin(true);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_sideButton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AdminRequest_BottomButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, _this), contactForm == 'active' ? createContact() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: " "
    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "shipping-request",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "create-contact",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "add-button",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              onClick: activateForm,
              children: "Create New"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 35
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
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
              lineNumber: 125,
              columnNumber: 34
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "all-contact",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contact-head",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              onChange: handleBulk,
              name: "options",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "bulk-action",
                children: "Bulk Actions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 49
              }, _this), contactOption.map(function (_ref2) {
                var options = _ref2.options;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: options,
                  children: options
                }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 57
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 45
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              onClick: handleBulkSubmit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 41
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "All dates"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Date1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Date2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 41
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "All dates"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Date1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Date2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 41
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit",
              value: "Filter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 41
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "contact-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                onChange: changeSelector
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 38
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 34
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 95
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 108
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Phone Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 122
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 143
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 30
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: search(contacts).map(function (_ref3, i) {
            var firstName = _ref3.firstName,
                email = _ref3.email,
                phoneNumber = _ref3.phoneNumber,
                address = _ref3.address;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox",
                  onChange: function onChange(e) {
                    (contacts[i] = e.target.checked) || setSelectAll(false);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 73
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 69
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: firstName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 186
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 182
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 217
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 213
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: phoneNumber
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 250
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 246
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 289
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 285
              }, _this)]
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                onChange: changeSelector
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 102
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 98
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 132
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 128
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Phone Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 159
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 180
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_adminLogin_adminSignin__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 15
  }, _this);
};

_s(Contact, "hqOGXazyO1Sx0I/2Y3tDZvfhcpI=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwiaW5pdGlhbFN0YXRlIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwiZW1haWwiLCJ1c2VTdGF0ZSIsImNvbnRhY3QiLCJzZXRDb250YWN0IiwiY29udGFjdEZvcm0iLCJzZXRDb250YWN0Rm9ybSIsInNlbGVjdEFsbCIsInNldFNlbGVjdEFsbCIsInEiLCJzZXRRIiwiYnVsayIsInNldEJ1bGsiLCJvcHRpb25zIiwiY29udGFjdE9wdGlvbiIsInNldENvbnRhY3RPcHRpb24iLCJ1c2VDb250ZXh0IiwiUmVxdWVzdENvbnRleHQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiQXV0aENvbnRleHQiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsImhhbmRsZUNoYW5nZSIsImUiLCJzZWxlY3QiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJuZXdDb250YWN0Iiwic2VhcmNoIiwicm93cyIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwicm93Iiwic29tZSIsImNvbHVtbiIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhY3RpdmF0ZUZvcm0iLCJjaGFuZ2VTZWxlY3RvciIsImNoZWNrZWQiLCJtYXAiLCJjcmVhdGVDb250YWN0IiwiaGFuZGxlQnVsayIsImhhbmRsZUJ1bGtTdWJtaXQiLCJ1dWlkdjQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBR2QsTUFBTUMsWUFBWSxHQUNsQjtBQUNBQyxhQUFTLEVBQUUsRUFEWDtBQUVBQyxlQUFXLEVBQUUsRUFG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O0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBL0YsZUFBOEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlILGVBQW1KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMb0I7QUFBQSxrQkFBbkIsZ0JBdURDLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F2RFY7QUF5REgsQ0FwS0Q7O0dBQU1qRCxPOztLQUFBQSxPO0FBcUtTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmRmNDAyNmZjNmQ1NThjNzllOTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvUmVxdWVzdENvbnRleHRcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBTaWRlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0FkbWluUmVxdWVzdC9zaWRlQnV0dG9uXCI7XHJcbmltcG9ydCBBZG1pblNpZ25pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbkxvZ2luL2FkbWluU2lnbmluXCI7XHJcbmltcG9ydCBCb3R0b21CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5SZXF1ZXN0L0JvdHRvbUJ1dHRvblwiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IFwiXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgXHJcbiAgICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY29udGFjdEZvcm0sIHNldENvbnRhY3RGb3JtXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2VsZWN0QWxsLCBzZXRTZWxlY3RBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoXCJcIik7IFxyXG4gICAgY29uc3QgW2J1bGssIHNldEJ1bGtdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29udGFjdE9wdGlvbiwgc2V0Q29udGFjdE9wdGlvbl0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge29wdGlvbnM6IFwiTW92ZS10by10cmFzaFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCIgQ2hhbmdlIHN0YXR1cyB0byBwcm9jZXNzaW5nXCJ9LFxyXG4gICAgICAgIHtvcHRpb25zOiBcIkNoYW5nZSBzdGF0dXMgdG8gb24taG9sZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJDaGFuZ2Ugc3RhdHVzIHRvIGNvbXBsZXRlZFwifVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdHtjb250YWN0cywgc2V0Q29udGFjdHN9ID0gdXNlQ29udGV4dChSZXF1ZXN0Q29udGV4dCk7IFxyXG4gICAgY29uc3R7aXNMb2dpbiwgc2V0aXNMb2dpbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgICAvLyBjaGFuZ2UgY29udGFjdFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhY3QgPSB7Li4uY29udGFjdCwgc2VsZWN0LCBbbmFtZV06IHZhbHVlfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldENvbnRhY3QobmV3Q29udGFjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07IFxyXG5cclxuICAgICAgICAgICAgLy8gc2VhcmNoIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2ggPShyb3dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93c1swXSAmJiBPYmplY3Qua2V5cyhyb3dzWzBdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKChyb3cpID0+IFxyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5zb21lKChjb2x1bW4pID0+IHJvd1tjb2x1bW5dLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHEudG9Mb3dlckNhc2UoKSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgLy8gc3VibWl0IGNvbnRhY3RcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRDb250YWN0Rm9ybSgnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7Zmlyc3ROYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3MsIHNlbGVjdH0gPSBjb250YWN0XHJcbiAgICAgICAgICAgICAgIHJldHVybiBzZXRDb250YWN0cyhbLi4uY29udGFjdHMsIHtmaXJzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgYWRkcmVzcywgc2VsZWN0fV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbWFrZSBmb3JtIHZpc2libGVcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gIHNldENvbnRhY3RGb3JtKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2hhbmdlIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVNlbGVjdG9yID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0QWxsKCBlLnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgY29udGFjdHMubWFwKCh7c2VsZWN0fSk9PlxyXG4gICAgICAgICAgICAgICAgICAgc2VsZWN0ID0gZS50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhY3RzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIENSRUFURSBjb250YWN0c1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PntcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gaWQ9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Y29udGFjdC5maXJzdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVOdW1iZXJcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIGlkPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17Y29udGFjdC5waG9uZU51bWJlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIGlkPVwiYWRkcmVzc1wiIHZhbHVlPXtjb250YWN0LmFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICBpZD1cImVtYWlsXCIgdmFsdWU9e2NvbnRhY3QuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgYnVsayBzdWJtaXRcclxuICAgICAgICBjb25zdCBoYW5kbGVCdWxrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRCdWxrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGFuZGxlIGJ1bGsgc3VibWl0XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQnVsa1N1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoYnVsayA9PT0gXCJNb3ZlLXRvLXRyYXNoXCIpe1xyXG4gICAgICAgICAgICAgICAgY29udGFjdHMuZmlsdGVyKChzZWxlY3QpPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoIGlzTG9naW4gPT0gdHJ1ZSA/ICg8PlxyXG4gICAgICAgIDxTaWRlQnV0dG9uIC8+XHJcbiAgICAgICAgPEJvdHRvbUJ1dHRvbiAvPlxyXG4gICAgICAgICB7Y29udGFjdEZvcm0gPT0gJ2FjdGl2ZScgPyBjcmVhdGVDb250YWN0KCkgOiA8PiA8Lz4gXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctcmVxdWVzdFwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPjxwIG9uQ2xpY2s9e2FjdGl2YXRlRm9ybX0+Q3JlYXRlIE5ldzwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3F9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwic2VhcmNoLi4uXCIvPjwvZGl2PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGwtY29udGFjdFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsgaGFuZGxlQnVsayB9ICBuYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnVsay1hY3Rpb25cIj5CdWxrIEFjdGlvbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdE9wdGlvbi5tYXAoKHtvcHRpb25zfSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnN9ICBrZXk9e3V1aWR2NCgpfSA+e29wdGlvbnN9PC9vcHRpb24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsgaGFuZGxlQnVsa1N1Ym1pdH0gLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFsbCBkYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RGF0ZTE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGUyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbGwgZGF0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGUxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRlMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRmlsdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiY29udGFjdC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyBjaGFuZ2VTZWxlY3Rvcn0gLz48L3RoPjx0aD5OYW1lPC90aD48dGg+RW1haWw8L3RoPjx0aD5QaG9uZSBOdW1iZXI8L3RoPjx0aD5BZGRyZXNzPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaChjb250YWN0cykubWFwKCh7IGZpcnN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBhZGRyZXNzfSwgaSkgPT57ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRyIGtleT17dXVpZHY0KCl9ID48dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiICAgb25DaGFuZ2U9eyhlKT0+IHsgKGNvbnRhY3RzW2ldID0gZS50YXJnZXQuY2hlY2tlZCkgfHwgc2V0U2VsZWN0QWxsKGZhbHNlKX19ICAvPjwvdGQ+PHRkPjxkaXY+e2ZpcnN0TmFtZX08L2Rpdj48L3RkPjx0ZD48c3Ryb25nPntlbWFpbH08L3N0cm9uZz48L3RkPjx0ZD48c3Ryb25nPntwaG9uZU51bWJlcn08L3N0cm9uZz48L3RkPjx0ZD48c3Ryb25nPnthZGRyZXNzfTwvc3Ryb25nPjwvdGQ+PC90cj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGg+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsgY2hhbmdlU2VsZWN0b3J9IC8+PC90aD48dGg+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC90aD48dGg+PHN0cm9uZz5FbWFpbDwvc3Ryb25nPjwvdGg+PHRoPlBob25lIE51bWJlcjwvdGg+PHRoPkFkZHJlc3M8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPik6IDxBZG1pblNpZ25pbiAvPlxyXG4gICAgKVxyXG59ICBcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXSwic291cmNlUm9vdCI6IiJ9
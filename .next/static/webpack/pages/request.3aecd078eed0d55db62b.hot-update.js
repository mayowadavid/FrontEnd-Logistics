webpackHotUpdate_N_E("pages/request",{

/***/ "./components/usersRequest/addRequest.js":
/*!***********************************************!*\
  !*** ./components/usersRequest/addRequest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _context_RequestContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/RequestContext */ "./components/context/RequestContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\usersRequest\\addRequest.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AddRequest = function AddRequest() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_RequestContext__WEBPACK_IMPORTED_MODULE_4__["RequestContext"]),
      input = _useContext.input,
      error = _useContext.error,
      handleChange = _useContext.handleChange,
      handleReceiver = _useContext.handleReceiver,
      handleCheck = _useContext.handleCheck,
      temporaryImage = _useContext.temporaryImage,
      handleFormPreview = _useContext.handleFormPreview,
      photoChange = _useContext.photoChange,
      handleRequestUpdate = _useContext.handleRequestUpdate,
      setCount = _useContext.setCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    options: "pending"
  }, {
    options: "processing"
  }, {
    options: "canceled"
  }, {
    options: "onHold"
  }, {
    options: "completed"
  }]),
      statusOption = _useState[0],
      setStatusOption = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      action = _useState2[0],
      setAction = _useState2[1];

  var photoSource = function photoSource() {
    if (temporaryImage) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [" ", temporaryImage.map(function (img) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: img
          }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 51
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "file",
            name: "img",
            onChange: photoChange,
            id: "file"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: "Upload Images"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 31
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, _this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 31
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, _this);
    }
  };

  var changeStatus = function changeStatus() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "status-change-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "status",
          children: "Status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
          id: "status",
          onChange: handleChange,
          value: input.status,
          name: "status",
          children: statusOption.map(function (_ref) {
            var options = _ref.options;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
              value: options,
              children: options
            }, Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "amount",
          children: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 24
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          id: "amount",
          name: "amount",
          onChange: handleChange,
          value: input.amount,
          type: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this);
  };

  var _input = _objectSpread({}, input),
      formErrors = _input.formErrors;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "photo",
      children: temporaryImage ? photoSource() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "file",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "file",
          name: "img",
          onChange: photoChange,
          id: "file"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 30
        }, _this), Object(_svg__WEBPACK_IMPORTED_MODULE_3__["upload"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
          children: "Upload Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 34
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 30
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: input._id ? function (e) {
        return handleRequestUpdate(e, input._id);
      } : function (e) {
        return handleFormPreview(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "sender-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Sender Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "sender",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderFirstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              onChange: handleChange,
              id: "senderFirstName",
              name: "firstName",
              value: input.sender.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 21
            }, _this), formErrors.sender.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber1",
              onChange: handleChange,
              name: "phoneNumber1",
              value: input.sender.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "senderphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "senderphoneNumber2",
              onChange: handleChange,
              name: "phoneNumber2",
              value: input.sender.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 21
            }, _this), formErrors.sender.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.sender.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "receiver-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
          children: "Receiver Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 18
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "receiver",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverFirstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              id: "receiverFirstname",
              onChange: handleReceiver,
              name: "firstName",
              value: input.receiver.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 21
            }, _this), formErrors.receiver.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverPhoneNumber1",
              children: "Phone Number1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber1",
              onChange: handleReceiver,
              name: "phoneNumber1",
              value: input.receiver.phoneNumber1,
              placeholder: "Your PhoneNumber.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber1.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              htmlFor: "receiverphoneNumber2",
              children: "Phone Number 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "number",
              id: "receiverphoneNumber2",
              onChange: handleReceiver,
              name: "phoneNumber2",
              value: input.receiver.phoneNumber2,
              placeholder: "Your phoneNumber2.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 21
            }, _this), formErrors.receiver.phoneNumber2.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.receiver.phoneNumber2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "others",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "tagName",
            children: "Tag Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "tagName",
            onChange: handleChange,
            name: "tagName",
            value: input.tagName,
            placeholder: "Tag name.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 21
          }, _this), formErrors.tagName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.tagName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "Cartons",
            children: "Number of cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "number",
            id: "Cartons",
            onChange: handleChange,
            name: "cartons",
            value: input.cartons,
            placeholder: "Cartons"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, _this), formErrors.cartons.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.cartons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "otherItems",
            children: "Other Items"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "checkbox",
            id: "otherItems",
            onChange: handleCheck,
            name: "otherItems",
            value: input.otherItems,
            placeholder: "otherItems"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, _this), formErrors.otherItems.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.otherItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "itemsWorth",
            children: "Items Worth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "itemsWorth",
            onChange: handleChange,
            name: "itemsWorth",
            value: input.itemsWorth,
            placeholder: "itemsWorth"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 21
          }, _this), formErrors.itemsWorth.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.itemsWorth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "deliveryLocation",
            children: "Delivery Locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "deliveryLocation",
            onChange: handleChange,
            name: "deliveryLocations",
            value: input.deliveryLocations,
            placeholder: "deliveryLocation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, _this), formErrors.deliveryLocations.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.deliveryLocations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "descriptions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "description",
            children: "Descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            cols: "40",
            rows: "6",
            id: "descriptions",
            onChange: handleChange,
            name: "descriptions",
            value: input.descriptions,
            placeholder: "descriptions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, _this), formErrors.descriptions.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "errorMessage",
            children: formErrors.descriptions
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }, _this), input._id && changeStatus(), input._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 32
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "submit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          className: "submit",
          type: "submit",
          value: "preview"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 26
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }, _this)]
  }, void 0, true);
};

_s(AddRequest, "Ac7Lfyzbx1sZuCcqp5DAW7eh+ds=");

_c = AddRequest;
/* harmony default export */ __webpack_exports__["default"] = (AddRequest);

var _c;

$RefreshReg$(_c, "AddRequest");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc1JlcXVlc3QvYWRkUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBZGRSZXF1ZXN0IiwidXNlQ29udGV4dCIsIlJlcXVlc3RDb250ZXh0IiwiaW5wdXQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVJlY2VpdmVyIiwiaGFuZGxlQ2hlY2siLCJ0ZW1wb3JhcnlJbWFnZSIsImhhbmRsZUZvcm1QcmV2aWV3IiwicGhvdG9DaGFuZ2UiLCJoYW5kbGVSZXF1ZXN0VXBkYXRlIiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJzdGF0dXNPcHRpb24iLCJzZXRTdGF0dXNPcHRpb24iLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwaG90b1NvdXJjZSIsIm1hcCIsImltZyIsInV1aWR2NCIsInVwbG9hZCIsImNoYW5nZVN0YXR1cyIsInN0YXR1cyIsImFtb3VudCIsImZvcm1FcnJvcnMiLCJfaWQiLCJlIiwic2VuZGVyIiwiZmlyc3ROYW1lIiwibGVuZ3RoIiwicGhvbmVOdW1iZXIxIiwicGhvbmVOdW1iZXIyIiwicmVjZWl2ZXIiLCJ0YWdOYW1lIiwiY2FydG9ucyIsIm90aGVySXRlbXMiLCJpdGVtc1dvcnRoIiwiZGVsaXZlcnlMb2NhdGlvbnMiLCJkZXNjcmlwdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsb0JBRTRIQyx3REFBVSxDQUFDQyxzRUFBRCxDQUZ0STtBQUFBLE1BRWRDLEtBRmMsZUFFZEEsS0FGYztBQUFBLE1BRVBDLEtBRk8sZUFFUEEsS0FGTztBQUFBLE1BRUFDLFlBRkEsZUFFQUEsWUFGQTtBQUFBLE1BRWNDLGNBRmQsZUFFY0EsY0FGZDtBQUFBLE1BRThCQyxXQUY5QixlQUU4QkEsV0FGOUI7QUFBQSxNQUUy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LEVBQUM7QUFBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxFQUdDZCxVQUFVLENBQUNjLFlBQVgsQ0FBd0JULE1BQXhCLEdBQWlDLENBQWpDLGlCQUNHO0FBQU0scUJBQVMsRUFBQyxjQUFoQjtBQUFBLHNCQUFnQ0wsVUFBVSxDQUFDYztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExRkosRUFvR090QyxLQUFLLENBQUN5QixHQUFOLElBQWFKLFlBQVksRUFwR2hDLEVBd0dRckIsS0FBSyxDQUFDeUIsR0FBTixnQkFBYTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNiO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBeUMsZUFBSyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWIsZ0JBRU87QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDUDtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBMkIsY0FBSSxFQUFDLFFBQWhDO0FBQXlDLGVBQUssRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFHZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYQTtBQUFBLGtCQUROO0FBNEhFLENBL0tOOztHQUFNNUIsVTs7S0FBQUEsVTtBQWlMU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVxdWVzdC4zYWVjZDA3OGVlZDBkNTVkYjYyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHt1cGxvYWR9IGZyb20gXCIuLi8uLi9zdmdcIjtcclxuaW1wb3J0IHtSZXF1ZXN0Q29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9SZXF1ZXN0Q29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFkZFJlcXVlc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2lucHV0LCBlcnJvciwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZWNlaXZlciwgaGFuZGxlQ2hlY2ssIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVGb3JtUHJldmlldywgcGhvdG9DaGFuZ2UsIGhhbmRsZVJlcXVlc3RVcGRhdGUsIHNldENvdW50fSA9IHVzZUNvbnRleHQoUmVxdWVzdENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtzdGF0dXNPcHRpb24sIHNldFN0YXR1c09wdGlvbl0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge29wdGlvbnM6IFwicGVuZGluZ1wifSwgXHJcbiAgICAgICAge29wdGlvbnM6IFwicHJvY2Vzc2luZ1wifSxcclxuICAgICAgICB7b3B0aW9uczogXCJjYW5jZWxlZFwifSxcclxuICAgICAgICB7b3B0aW9uczogXCJvbkhvbGRcIn0sXHJcbiAgICAgICAge29wdGlvbnM6IFwiY29tcGxldGVkXCJ9XHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgcGhvdG9Tb3VyY2UgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0ZW1wb3JhcnlJbWFnZSApe1xyXG4gICAgICAgICAgICByZXR1cm4oPD4ge3RlbXBvcmFyeUltYWdlLm1hcChpbWcgPT4gIDxpbWcgc3JjPXtpbWd9IGtleT17dXVpZHY0KCl9IC8+KX1cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWdcIiBvbkNoYW5nZT17cGhvdG9DaGFuZ2V9IGlkPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3VwbG9hZCgpfTxoND5VcGxvYWQgSW1hZ2VzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIHJldHVybiAoPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltZ1wiIG9uQ2hhbmdlPXtwaG90b0NoYW5nZX0gaWQ9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dXBsb2FkKCl9PGg0PlVwbG9hZCBJbWFnZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtY2hhbmdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2lucHV0LnN0YXR1c30gbmFtZT1cInN0YXR1c1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXNPcHRpb24ubWFwKCh7b3B0aW9uc30pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbnN9IGtleT17dXVpZHY0KCl9PntvcHRpb25zfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPkFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFtb3VudFwiIG5hbWU9XCJhbW91bnRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17aW5wdXQuYW1vdW50fSB0eXBlPVwibnVtYmVyXCIvPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzIH0gPSB7Li4uaW5wdXR9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZW1wb3JhcnlJbWFnZSA/IHBob3RvU291cmNlKCkgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1nXCIgb25DaGFuZ2U9e3Bob3RvQ2hhbmdlfSBpZD1cImZpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cGxvYWQoKX08aDQ+VXBsb2FkIEltYWdlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxkaXY+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ICBpbnB1dC5faWQgPyAoZSk9PiBoYW5kbGVSZXF1ZXN0VXBkYXRlKGUsIGlucHV0Ll9pZCkgOiAoZSk9PiAgaGFuZGxlRm9ybVByZXZpZXcoZSkgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRlci1jb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbmRlciBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyRmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSAgfSBpZD1cInNlbmRlckZpcnN0TmFtZVwiICBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnNlbmRlci5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVyUGhvbmVOdW1iZXIxXCI+UGhvbmUgTnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInNlbmRlcnBob25lTnVtYmVyMVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UgIH0gbmFtZT1cInBob25lTnVtYmVyMVwiIHZhbHVlPXtpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIxfSAgcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lTnVtYmVyLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuc2VuZGVyLnBob25lTnVtYmVyMS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnNlbmRlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZGVycGhvbmVOdW1iZXIyXCI+UGhvbmUgTnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJzZW5kZXJwaG9uZU51bWJlcjJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlIH0gbmFtZT1cInBob25lTnVtYmVyMlwiIHZhbHVlPXtpbnB1dC5zZW5kZXIucGhvbmVOdW1iZXIyfSAgcGxhY2Vob2xkZXI9XCJZb3VyIHBob25lTnVtYmVyMi4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnNlbmRlci5waG9uZU51bWJlcjIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5zZW5kZXIuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICA8aDM+UmVjZWl2ZXIgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJyZWNlaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJGaXJzdG5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlY2VpdmVyRmlyc3RuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5maXJzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJQaG9uZU51bWJlcjFcIj5QaG9uZSBOdW1iZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicmVjZWl2ZXJwaG9uZU51bWJlcjFcIiBvbkNoYW5nZT17aGFuZGxlUmVjZWl2ZXJ9IG5hbWU9XCJwaG9uZU51bWJlcjFcIiB2YWx1ZT17aW5wdXQucmVjZWl2ZXIucGhvbmVOdW1iZXIxfSBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmVOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjEubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5yZWNlaXZlci5waG9uZU51bWJlcjF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjZWl2ZXJwaG9uZU51bWJlcjJcIj5QaG9uZSBOdW1iZXIgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInJlY2VpdmVycGhvbmVOdW1iZXIyXCIgb25DaGFuZ2U9e2hhbmRsZVJlY2VpdmVyfSBuYW1lPVwicGhvbmVOdW1iZXIyXCIgdmFsdWU9e2lucHV0LnJlY2VpdmVyLnBob25lTnVtYmVyMn0gcGxhY2Vob2xkZXI9XCJZb3VyIHBob25lTnVtYmVyMi4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMi5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnJlY2VpdmVyLnBob25lTnVtYmVyMn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YWdOYW1lXCI+VGFnIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFnTmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJ0YWdOYW1lXCIgdmFsdWU9e2lucHV0LnRhZ05hbWV9IHBsYWNlaG9sZGVyPVwiVGFnIG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy50YWdOYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMudGFnTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJDYXJ0b25zXCI+TnVtYmVyIG9mIGNhcnRvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJDYXJ0b25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImNhcnRvbnNcIiB2YWx1ZT17aW5wdXQuY2FydG9uc30gcGxhY2Vob2xkZXI9XCJDYXJ0b25zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmNhcnRvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5jYXJ0b25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVySXRlbXNcIj5PdGhlciBJdGVtczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwib3RoZXJJdGVtc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGVja30gbmFtZT1cIm90aGVySXRlbXNcIiB2YWx1ZT17aW5wdXQub3RoZXJJdGVtc30gcGxhY2Vob2xkZXI9XCJvdGhlckl0ZW1zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLm90aGVySXRlbXMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5vdGhlckl0ZW1zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIml0ZW1zV29ydGhcIj5JdGVtcyBXb3J0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtc1dvcnRoXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cIml0ZW1zV29ydGhcIiB2YWx1ZT17aW5wdXQuaXRlbXNXb3J0aH0gcGxhY2Vob2xkZXI9XCJpdGVtc1dvcnRoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLml0ZW1zV29ydGgubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5pdGVtc1dvcnRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5TG9jYXRpb25cIj5EZWxpdmVyeSBMb2NhdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVsaXZlcnlMb2NhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJkZWxpdmVyeUxvY2F0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZWxpdmVyeUxvY2F0aW9uc30gIHBsYWNlaG9sZGVyPVwiZGVsaXZlcnlMb2NhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZWxpdmVyeUxvY2F0aW9ucy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmRlbGl2ZXJ5TG9jYXRpb25zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiNDBcIiByb3dzPVwiNlwiIGlkPVwiZGVzY3JpcHRpb25zXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImRlc2NyaXB0aW9uc1wiIHZhbHVlPXtpbnB1dC5kZXNjcmlwdGlvbnN9ICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnMubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5kZXNjcmlwdGlvbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBpbnB1dC5faWQgJiYgY2hhbmdlU3RhdHVzKClcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaW5wdXQuX2lkID8gKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInVwZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KSA6KDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiAgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicHJldmlld1wiLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgQWRkUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9
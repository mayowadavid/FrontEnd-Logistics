webpackHotUpdate_N_E("pages/profile",{

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

/***/ "./components/firebase.js":
false,

/***/ "./components/profile/profileEdit.js":
/*!*******************************************!*\
  !*** ./components/profile/profileEdit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\profile\\profileEdit.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProfileEdit = function ProfileEdit() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__["ClientContext"]),
      handleProfileChange = _useContext.handleProfileChange,
      handleProfilePreview = _useContext.handleProfilePreview,
      profile = _useContext.profile,
      temporaryImage = _useContext.temporaryImage,
      profileImage = _useContext.profileImage,
      profileDetails = _useContext.profileDetails;

  var formErrors = profile.formErrors;
  console;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "profile-wrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-profile",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "profile-avatar",
        children: temporaryImage !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: profileImage !== undefined ? profileImage : temporaryImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 49
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "profilePicture",
            onChange: handleProfileChange,
            id: "file",
            accept: "/.jpg, .png, gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "file",
            children: [Object(_svg__WEBPACK_IMPORTED_MODULE_3__["avatar"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: "Upload avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 125
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleProfilePreview,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "user",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "firstName",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: profileDetails,
              id: "firstName",
              name: "firstName",
              value: profile.firstName,
              placeholder: "Your name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 19
            }, _this), formErrors.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "lastName",
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: profileDetails,
              id: "lastName",
              name: "lastName",
              value: profile.lastName,
              placeholder: "Your last name.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 19
            }, _this), formErrors.lastName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: profileDetails,
              id: "email",
              name: "email",
              value: profile.email,
              placeholder: "Your email.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, _this), formErrors.email.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "phoneNumber",
              children: "Phone Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 20
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              onChange: profileDetails,
              id: "PhoneNumber",
              name: "phoneNumber",
              value: profile.phoneNumber,
              placeholder: "Your phone Number.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, _this), formErrors.phoneNumber.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "address",
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 20
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              cols: "4",
              row: "8",
              type: "text",
              onChange: profileDetails,
              id: "address",
              name: "address",
              value: profile.address,
              placeholder: "Your Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 19
            }, _this), formErrors.address.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "submit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            value: "preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, _this);
};

_s(ProfileEdit, "HvuEWVicHkw7x5al5eLY0p+SIjw=");

_c = ProfileEdit;
/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

var _c;

$RefreshReg$(_c, "ProfileEdit");

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

/***/ "./components/profile/profileHandler.js":
/*!**********************************************!*\
  !*** ./components/profile/profileHandler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profileEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileEdit */ "./components/profile/profileEdit.js");
/* harmony import */ var _profilePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profilePreview */ "./components/profile/profilePreview.js");



var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\profile\\profileHandler.js",
    _this = undefined,
    _s = $RefreshSig$();






var ProfileHandler = function ProfileHandler() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__["ClientContext"]),
      count = _useContext.count;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: count == undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profileEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profilePreview__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 22
    }, _this)
  }, void 0, false);
};

_s(ProfileHandler, "KL+7pJqdpwLy64a0pfY56Z0O2FE=");

_c = ProfileHandler;
/* harmony default export */ __webpack_exports__["default"] = (ProfileHandler);

var _c;

$RefreshReg$(_c, "ProfileHandler");

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

/***/ "./components/profile/profilePreview.js":
/*!**********************************************!*\
  !*** ./components/profile/profilePreview.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _context_ClientContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\components\\profile\\profilePreview.js",
    _this = undefined,
    _s = $RefreshSig$();




var ProfilePreview = function ProfilePreview() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ClientContext__WEBPACK_IMPORTED_MODULE_2__["ClientContext"]),
      profile = _useContext.profile,
      temporaryImage = _useContext.temporaryImage,
      handleProfileSubmit = _useContext.handleProfileSubmit;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "user-profile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "profile-avatar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: temporaryImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 26
        }, _this), "  "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [profile.firstName, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: profile.lastName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: profile.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: profile.phoneNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: profile.address
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit",
        children: profile._id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "submit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            onClick: function onClick(e) {
              return handleProfileSubmit(e);
            },
            value: "update"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "submit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            value: "edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 31
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_s(ProfilePreview, "deLMaQg/UzjpwuxANMgnh+qv5AI=");

_c = ProfilePreview;
/* harmony default export */ __webpack_exports__["default"] = (ProfilePreview);

var _c;

$RefreshReg$(_c, "ProfilePreview");

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

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_profile_profileHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/profileHandler */ "./components/profile/profileHandler.js");
/* harmony import */ var _components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/AuthContext */ "./components/context/AuthContext.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context/ClientContext */ "./components/context/ClientContext.js");
/* harmony import */ var _components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/userLogin/userLogin */ "./components/userLogin/userLogin.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../urlConfig */ "./urlConfig.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "H:\\G4 Logistics\\FrontEnd\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Profile = function Profile() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_components_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
      isLogin = _useContext.isLogin,
      setisLogin = _useContext.setisLogin;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_components_context_ClientContext__WEBPACK_IMPORTED_MODULE_6__["ClientContext"]),
      profile = _useContext2.profile,
      setProfile = _useContext2.setProfile,
      setTemporaryImage = _useContext2.setTemporaryImage;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])( /*#__PURE__*/Object(H_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var token, res, formError;
    return H_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage && localStorage.getItem('token');
            token !== undefined && setisLogin(true);
            _context.next = 4;
            return _helpers_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('profile/create', {}, {
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
                error.response.status && (error.response.status == '500' ||  true && (_helpers_axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('/signout'), localStorage.clear(), router.replace('/login')));
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
            formError = {
              formErrors: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: ''
              }
            };
            res && (res.data.profile.userId && setProfile(_objectSpread(_objectSpread({}, res.data.profile), formError)), res.data.profile.profileImage && setTemporaryImage(Object(_urlConfig__WEBPACK_IMPORTED_MODULE_10__["generatePublicUrl"])(res.data.profile.profileImage)));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_profile_profileHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }, _this)
  }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_userLogin_userLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 17
  }, _this);
};

_s(Profile, "0E/q/9aZil9KQiuY+vhU8jdyaDo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVFZGl0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlUHJldmlldy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRWRpdCIsInVzZUNvbnRleHQiLCJDbGllbnRDb250ZXh0IiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImhhbmRsZVByb2ZpbGVQcmV2aWV3IiwicHJvZmlsZSIsInRlbXBvcmFyeUltYWdlIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZURldGFpbHMiLCJmb3JtRXJyb3JzIiwiY29uc29sZSIsInVuZGVmaW5lZCIsImF2YXRhciIsImZpcnN0TmFtZSIsImxlbmd0aCIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJQcm9maWxlSGFuZGxlciIsImNvdW50IiwiUHJvZmlsZVByZXZpZXciLCJoYW5kbGVQcm9maWxlU3VibWl0IiwiX2lkIiwiZSIsIlByb2ZpbGUiLCJBdXRoQ29udGV4dCIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwic2V0UHJvZmlsZSIsInNldFRlbXBvcmFyeUltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsImVycm9yIiwicmVzcG9uc2UiLCJsb2ciLCJkYXRhIiwic3RhdHVzIiwiY2xlYXIiLCJyZXBsYWNlIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJyZXMiLCJmb3JtRXJyb3IiLCJ1c2VySWQiLCJnZW5lcmF0ZVB1YmxpY1VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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bUJBREUsZ0JBR0cscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhaO0FBSUUsQ0E3RE47O0dBQU1GLE87VUFJYU8sc0Q7OztLQUpiUCxPO0FBK0RTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmU5NWMwMjRiZTE0OTQ4OWE0NmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQge2F2YXRhcn0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGVFZGl0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaGFuZGxlUHJvZmlsZUNoYW5nZSAsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBwcm9maWxlLCB0ZW1wb3JhcnlJbWFnZSwgcHJvZmlsZUltYWdlLCBwcm9maWxlRGV0YWlsc30gPSB1c2VDb250ZXh0KENsaWVudENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHByb2ZpbGU7XHJcbiAgICBjb25zb2xlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUltYWdlICE9PSAgdW5kZWZpbmVkID8gPGltZyBzcmM9e3Byb2ZpbGVJbWFnZSAhPT0gdW5kZWZpbmVkID8gcHJvZmlsZUltYWdlIDogdGVtcG9yYXJ5SW1hZ2V9IC8+IDogKDxkaXY+IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInByb2ZpbGVQaWN0dXJlXCIgb25DaGFuZ2U9eyBoYW5kbGVQcm9maWxlQ2hhbmdlIH0gaWQ9XCJmaWxlXCIgYWNjZXB0PVwiLy5qcGcsIC5wbmcsIGdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAge2F2YXRhcigpfTxoND5VcGxvYWQgYXZhdGFyPC9oND5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUHJvZmlsZVByZXZpZXd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBwcm9maWxlRGV0YWlscyB9IGlkPVwiZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiICB2YWx1ZT17cHJvZmlsZS5maXJzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmZpcnN0TmFtZS5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgcHJvZmlsZURldGFpbHMgfSBpZD1cImxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3Byb2ZpbGUubGFzdE5hbWV9IHBsYWNlaG9sZGVyPVwiWW91ciBsYXN0IG5hbWUuLlwiLz5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMubGFzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmxhc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBwcm9maWxlRGV0YWlscyB9IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17cHJvZmlsZS5lbWFpbH0gcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmVtYWlsLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBwcm9maWxlRGV0YWlscyB9IGlkPVwiUGhvbmVOdW1iZXJcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17cHJvZmlsZS5waG9uZU51bWJlcn0gcGxhY2Vob2xkZXI9XCJZb3VyIHBob25lIE51bWJlci4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5waG9uZU51bWJlci5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9wPiAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjRcIiByb3c9XCI4XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IHByb2ZpbGVEZXRhaWxzIH0gaWQ9XCJhZGRyZXNzXCIgbmFtZT1cImFkZHJlc3NcIiB2YWx1ZT17cHJvZmlsZS5hZGRyZXNzfSBwbGFjZWhvbGRlcj1cIllvdXIgQWRkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuYWRkcmVzcy5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuYWRkcmVzc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInByZXZpZXdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgKX1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRWRpdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQgUHJvZmlsZUVkaXQgZnJvbSAnLi9wcm9maWxlRWRpdCc7XHJcbmltcG9ydCBQcm9maWxlUHJldmlldyBmcm9tICcuL3Byb2ZpbGVQcmV2aWV3JztcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7Y291bnR9ID0gdXNlQ29udGV4dChDbGllbnRDb250ZXh0KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUVkaXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZVByZXZpZXcgLz4gXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIDwvPilcclxuICAgICAgICB9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUhhbmRsZXI7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2xpZW50Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2xpZW50Q29udGV4dCc7XHJcbmNvbnN0IFByb2ZpbGVQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3Byb2ZpbGUsIHRlbXBvcmFyeUltYWdlLCBoYW5kbGVQcm9maWxlU3VibWl0fSA9IHVzZUNvbnRleHQoQ2xpZW50Q29udGV4dCk7XHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXt0ZW1wb3JhcnlJbWFnZX0gLz4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwcm9maWxlLmZpcnN0TmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwcm9maWxlLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57cHJvZmlsZS5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2ZpbGUucGhvbmVOdW1iZXJ9PC9wPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cD57cHJvZmlsZS5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiID5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb2ZpbGUuX2lkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+aGFuZGxlUHJvZmlsZVN1Ym1pdChlKX0gdmFsdWU9XCJ1cGRhdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTogKDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJlZGl0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PikgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQcmV2aWV3O1xyXG4iLCJpbXBvcnQgUHJvZmlsZUhhbmRsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVIYW5kbGVyJztcclxuaW1wb3J0IHsgQXV0aENvbnRleHR9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dCc7XHJcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy91c2VyTG9naW4vdXNlckxvZ2luJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uL2hlbHBlcnMvYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2VuZXJhdGVQdWJsaWNVcmx9IGZyb20gJy4uL3VybENvbmZpZyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0e2lzTG9naW4sIHNldGlzTG9naW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7IFxyXG4gICAgY29uc3R7cHJvZmlsZSwgc2V0UHJvZmlsZSwgc2V0VGVtcG9yYXJ5SW1hZ2V9ID0gdXNlQ29udGV4dChDbGllbnRDb250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIHRva2VuICE9PSB1bmRlZmluZWQgJiYgKHNldGlzTG9naW4odHJ1ZSkpXHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdwcm9maWxlL2NyZWF0ZScsIHt9LCB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID8gYEJlYXJlciAke3Rva2VufWA6ICcnXHJcbiAgICAgICAgICAgIH19KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSAnNTAwJyB8fCAnNDAwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvc2lnbm91dCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgLy8gaHR0cC5DbGllbnRSZXF1ZXN0IGluIG5vZGUuanNcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbGV0IGZvcm1FcnJvciA9ICB7Zm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmVzICYmIChcclxuICAgICAgICAgICAgICAgIHJlcy5kYXRhLnByb2ZpbGUudXNlcklkICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZmlsZSh7Li4ucmVzLmRhdGEucHJvZmlsZSwgLi4uZm9ybUVycm9yfSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXMuZGF0YS5wcm9maWxlLnByb2ZpbGVJbWFnZSAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICBzZXRUZW1wb3JhcnlJbWFnZShnZW5lcmF0ZVB1YmxpY1VybChyZXMuZGF0YS5wcm9maWxlLnByb2ZpbGVJbWFnZSkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoIGlzTG9naW4gPT0gdHJ1ZSAgP1xyXG4gICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVIYW5kbGVyIC8+XHJcbiAgICAgICAgICA8Lz4pOiA8VXNlckxvZ2luIC8+XHJcbiAgICApfVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
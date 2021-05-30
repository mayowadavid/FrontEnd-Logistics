webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var formErrors = profile.formErrors;
  console;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "profile-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.replace('dashboard');
      },
      className: "back",
      children: Object(_svg__WEBPACK_IMPORTED_MODULE_3__["Back"])()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "user-profile",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "profile-avatar",
        children: temporaryImage !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: profileImage !== undefined ? profileImage : temporaryImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
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
            lineNumber: 23,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "file",
            children: [Object(_svg__WEBPACK_IMPORTED_MODULE_3__["avatar"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: "Upload avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 125
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
              lineNumber: 33,
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
              lineNumber: 34,
              columnNumber: 19
            }, _this), formErrors.firstName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "lastName",
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
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
              lineNumber: 41,
              columnNumber: 19
            }, _this), formErrors.lastName.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
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
              lineNumber: 48,
              columnNumber: 19
            }, _this), formErrors.email.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "phoneNumber",
              children: "Phone Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
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
              lineNumber: 54,
              columnNumber: 19
            }, _this), formErrors.phoneNumber.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "address",
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
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
              lineNumber: 60,
              columnNumber: 19
            }, _this), formErrors.address.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "errorMessage",
              children: formErrors.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "submit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "submit",
            value: "preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, _this);
};

_s(ProfileEdit, "EpPtAAJqL3oojHTbRY3HHVHd//s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVFZGl0LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVFZGl0IiwidXNlQ29udGV4dCIsIkNsaWVudENvbnRleHQiLCJoYW5kbGVQcm9maWxlQ2hhbmdlIiwiaGFuZGxlUHJvZmlsZVByZXZpZXciLCJwcm9maWxlIiwidGVtcG9yYXJ5SW1hZ2UiLCJwcm9maWxlSW1hZ2UiLCJwcm9maWxlRGV0YWlscyIsInJvdXRlciIsInVzZVJvdXRlciIsImZvcm1FcnJvcnMiLCJjb25zb2xlIiwicmVwbGFjZSIsIkJhY2siLCJ1bmRlZmluZWQiLCJhdmF0YXIiLCJmaXJzdE5hbWUiLCJsZW5ndGgiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG9CQUV1RkMsd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FGakc7QUFBQSxNQUVkQyxtQkFGYyxlQUVkQSxtQkFGYztBQUFBLE1BRVFDLG9CQUZSLGVBRVFBLG9CQUZSO0FBQUEsTUFFOEJDLE9BRjlCLGVBRThCQSxPQUY5QjtBQUFBLE1BRXVDQyxjQUZ2QyxlQUV1Q0EsY0FGdkM7QUFBQSxNQUV1REMsWUFGdkQsZUFFdURBLFlBRnZEO0FBQUEsTUFFcUVDLGNBRnJFLGVBRXFFQSxjQUZyRTs7QUFHdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUhzQixNQUlmQyxVQUplLEdBSUROLE9BSkMsQ0FJZk0sVUFKZTtBQUt0QkMsU0FBTztBQUNQLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBQ007QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFLSCxNQUFNLENBQUNJLE9BQVAsQ0FBZSxXQUFmLENBQUw7QUFBQSxPQUFkO0FB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d0JBQWdDUCxVQUFVLENBQUNXO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFtQ0k7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJERSxDQWpFTjs7R0FBTXRCLFc7VUFHYVUscUQ7OztLQUhiVixXO0FBbUVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmU0YTNjNDdjNWU3OTliMjZkOTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsaWVudENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NsaWVudENvbnRleHQnO1xyXG5pbXBvcnQge2F2YXRhciwgQmFja30gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlRWRpdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGhhbmRsZVByb2ZpbGVDaGFuZ2UgLCBoYW5kbGVQcm9maWxlUHJldmlldywgcHJvZmlsZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVJbWFnZSwgcHJvZmlsZURldGFpbHN9ID0gdXNlQ29udGV4dChDbGllbnRDb250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2Zvcm1FcnJvcnN9ID0gcHJvZmlsZTtcclxuICAgIGNvbnNvbGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucmVwbGFjZSgnZGFzaGJvYXJkJyl9IGNsYXNzTmFtZT1cImJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7QmFjaygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbWFnZSAhPT0gIHVuZGVmaW5lZCA/IDxpbWcgc3JjPXtwcm9maWxlSW1hZ2UgIT09IHVuZGVmaW5lZCA/IHByb2ZpbGVJbWFnZSA6IHRlbXBvcmFyeUltYWdlfSAvPiA6ICg8ZGl2PiBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJwcm9maWxlUGljdHVyZVwiIG9uQ2hhbmdlPXsgaGFuZGxlUHJvZmlsZUNoYW5nZSB9IGlkPVwiZmlsZVwiIGFjY2VwdD1cIi8uanBnLCAucG5nLCBnaWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHthdmF0YXIoKX08aDQ+VXBsb2FkIGF2YXRhcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVByb2ZpbGVQcmV2aWV3fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgcHJvZmlsZURldGFpbHMgfSBpZD1cImZpcnN0TmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIiAgdmFsdWU9e3Byb2ZpbGUuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5maXJzdE5hbWUubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IHByb2ZpbGVEZXRhaWxzIH0gaWQ9XCJsYXN0TmFtZVwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtwcm9maWxlLmxhc3ROYW1lfSBwbGFjZWhvbGRlcj1cIllvdXIgbGFzdCBuYW1lLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmxhc3ROYW1lLmxlbmd0aCA+IDAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57Zm9ybUVycm9ycy5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgcHJvZmlsZURldGFpbHMgfSBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3Byb2ZpbGUuZW1haWx9IHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbC4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbC5sZW5ndGggPiAwICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgcHJvZmlsZURldGFpbHMgfSBpZD1cIlBob25lTnVtYmVyXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3Byb2ZpbGUucGhvbmVOdW1iZXJ9IHBsYWNlaG9sZGVyPVwiWW91ciBwaG9uZSBOdW1iZXIuLlwiLz5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMucGhvbmVOdW1iZXIubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvcD4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI0XCIgcm93PVwiOFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBwcm9maWxlRGV0YWlscyB9IGlkPVwiYWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgdmFsdWU9e3Byb2ZpbGUuYWRkcmVzc30gcGxhY2Vob2xkZXI9XCJZb3VyIEFkZHJlc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtRXJyb3JzLmFkZHJlc3MubGVuZ3RoID4gMCAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntmb3JtRXJyb3JzLmFkZHJlc3N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdFwiID5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJwcmV2aWV3XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICl9XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/context/AuthContext.js":
/*!*******************************************!*\
  !*** ./components/context/AuthContext.js ***!
  \*******************************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/axios */ "./helpers/axios.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_firebase__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\AuthContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var AuthContextProvider = function AuthContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLogin = _useState[0],
      setisLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      sessionToken = _useState2[0],
      setSessionToken = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: ''
    }
  }),
      signup = _useState3[0],
      setSignup = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: '',
    formErrors: {
      email: '',
      password: ''
    }
  }),
      login = _useState4[0],
      setLogin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticate = _useState5[0],
      setAuthenticate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      authenticating = _useState6[0],
      setAuthenticating = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      error = _useState7[0],
      setError = _useState7[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    message: '',
    token: '',
    user: {
      email: '',
      firstName: '',
      fullName: '',
      lastName: '',
      role: '',
      _id: ''
    }
  }),
      success = _useState8[0],
      setSuccess = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].onAuthStateChanged(function (user) {
      user == null ? setisLogin(false) : setisLogin(true);
    });
  }, []);

  var signout = /*#__PURE__*/function () {
    var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      var res;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/signout')["catch"](function (error) {
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
              localStorage.clear();
              router.replace('/login');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signout(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleLoginChange = function handleLoginChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    var formErrors = login.formErrors;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_6__["loginValidate"])(name, value, formErrors);

    var newLogin = _objectSpread(_objectSpread({}, login), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setLogin(newLogin);
  };

  var handleSignupChange = function handleSignupChange(e) {
    var _signup = _objectSpread({}, signup),
        formErrors = _signup.formErrors;

    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_6__["singupValidate"])(name, value, formErrors);

    var newSignup = _objectSpread(_objectSpread({}, signup), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value));

    return setSignup(newSignup);
  };

  var handleSignupSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e) {
      var firstName, lastName, email, phoneNumber, password;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              firstName = signup.firstName, lastName = signup.lastName, email = signup.email, phoneNumber = signup.phoneNumber, password = signup.password;
              _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].createUserWithEmailAndPassword(email, password).then(function (cred) {
                return _firebase__WEBPACK_IMPORTED_MODULE_8__["database"].collection('Profile').doc(cred.user.uid).set({
                  phoneNumber: phoneNumber,
                  email: email,
                  firstName: firstName,
                  lastName: lastName
                });
              }).then(function () {
                setisLogin(true);
                router.replace('dashboard');
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSignupSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSignout = function handleSignout(e) {
    e.preventDefault();
    var firstName = signup.firstName,
        lastName = signup.lastName,
        email = signup.email,
        phoneNumber = signup.phoneNumber,
        password = signup.password;
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].signOut();
  };

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    setAuthenticating(true);
    var email = login.email,
        password = login.password;
    _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].signInWithEmailAndPassword(email, password).then(function () {
      setisLogin(true);
      router.replace('dashboard');
    });
  };

  var handleAdminSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
      var res, _res$data, token, user, message;

      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              setAuthenticating(true);
              _context3.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/admin/signin', login)["catch"](function (error) {
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

            case 4:
              res = _context3.sent;

              if (res && res.status == 200) {
                setAuthenticating(false);
                setAuthenticate(true);
                setisLogin(true);
                _res$data = res.data, token = _res$data.token, user = _res$data.user;
                localStorage.setItem('token', token);
                message = "welcome";
                setSuccess(_objectSpread(_objectSpread({}, success), {}, {
                  message: message,
                  token: token,
                  user: user
                }));
                router.replace('/contact');
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleAdminSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      sessionToken: sessionToken,
      signout: signout,
      setSessionToken: setSessionToken,
      login: login,
      signup: signup,
      isLogin: isLogin,
      setisLogin: setisLogin,
      handleLoginChange: handleLoginChange,
      handleSignupChange: handleSignupChange,
      handleSignout: handleSignout,
      handleSignupSubmit: handleSignupSubmit,
      handleLoginSubmit: handleLoginSubmit,
      handleAdminSubmit: handleAdminSubmit
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 9
  }, _this);
};

_s(AuthContextProvider, "DShhVGmJOyxYMa1QBHVMZ3fjROs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = AuthContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

var _c;

$RefreshReg$(_c, "AuthContextProvider");

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

/***/ "./components/context/ClientContext.js":
/*!*********************************************!*\
  !*** ./components/context/ClientContext.js ***!
  \*********************************************/
/*! exports provided: ClientContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientContext", function() { return ClientContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\ClientContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ClientContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var ClientContextProvider = function ClientContextProvider(props) {
  _s();

  var initialState = {
    firstName: 'mayor',
    lastName: 'james',
    email: 'mayowadavid100@gmail.com',
    phoneNumber: '09087536643',
    address: 'abule foli',
    profileImage: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      profile = _useState[0],
      setProfile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].onAuthStateChanged(function (user) {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Profile').doc(user.uid).get().then(function (doc) {
        return setData(doc.data());
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var data = [];
    _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].onAuthStateChanged(function (user) {
      user !== null && _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Requests').where("userId", "==", user.uid).onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          data.push(doc.data());
        });
      });
    });
    setTransaction(data);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var formErrors = initialState.formErrors;
    data !== undefined && setProfile(_objectSpread(_objectSpread({}, data), {}, {
      formErrors: formErrors
    }));
  }, [data]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      profileImage = _useState3[0],
      setProfileImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      temporaryImage = _useState4[0],
      setTemporaryImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      count = _useState5[0],
      setCount = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      transaction = _useState6[0],
      setTransaction = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      error = _useState7[0],
      setError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      progress = _useState8[0],
      setProgress = _useState8[1];

  var handleProfileChange = function handleProfileChange(e) {
    e.preventDefault();

    if (e.target.files) {
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var hold = filteredImageSize == true && URL.createObjectURL(selected);
      hold !== undefined && setTemporaryImage(hold);

      if (filteredImageSize == true) {
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_6__["store"].ref("profileimages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snap) {
            var newPercentage;
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return snap.bytesTransferred / snap.totalBytes;

                  case 2:
                    _context.t0 = _context.sent;
                    newPercentage = _context.t0 * 100;
                    _context.next = 6;
                    return setProgress(newPercentage);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(err) {
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return setError(err);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), /*#__PURE__*/Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var newUrl;
          return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return storageRef.getDownloadURL();

                case 2:
                  newUrl = _context3.sent;
                  _context3.next = 5;
                  return setProfileImage(newUrl);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      }

      URL.revokeObjectURL(selected);
    }
  };

  var profileDetails = function profileDetails(e) {
    e.preventDefault();
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    var _profile = _objectSpread({}, profile),
        formErrors = _profile.formErrors;

    Object(_validator_validate__WEBPACK_IMPORTED_MODULE_5__["profileValidate"])(name, value, formErrors);
    return setProfile(_objectSpread(_objectSpread({}, profile), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)));
  };

  var handleProfileSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var firstName, lastName, email, phoneNumber, address, profileImage;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              firstName = profile.firstName, lastName = profile.lastName, email = profile.email, phoneNumber = profile.phoneNumber, address = profile.address, profileImage = profile.profileImage;
              _firebase__WEBPACK_IMPORTED_MODULE_6__["database"].collection('Profile').add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                profileImage: profileImage
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleProfileSubmit(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleProfilePreview = function handleProfilePreview(e) {
    e.preventDefault();
    setProfile(_objectSpread(_objectSpread({}, profile), {}, {
      profileImage: profileImage
    }));
    setCount('active');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClientContext.Provider, {
    value: {
      transaction: transaction,
      setTransaction: setTransaction,
      handleProfileChange: handleProfileChange,
      handleProfilePreview: handleProfilePreview,
      handleProfileSubmit: handleProfileSubmit,
      profile: profile,
      setProfile: setProfile,
      setTemporaryImage: setTemporaryImage,
      temporaryImage: temporaryImage,
      profileDetails: profileDetails,
      profileImage: profileImage,
      setProfileImage: setProfileImage,
      count: count,
      setCount: setCount
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 9
  }, _this);
};

_s(ClientContextProvider, "KoN1uEvJhjFBk2lIWMCn84P6BKg=");

_c = ClientContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (ClientContextProvider);

var _c;

$RefreshReg$(_c, "ClientContextProvider");

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

/***/ "./components/context/RequestContext.js":
/*!**********************************************!*\
  !*** ./components/context/RequestContext.js ***!
  \**********************************************/
/*! exports provided: RequestContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestContext", function() { return RequestContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../svg */ "./svg.js");
/* harmony import */ var _validator_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validator/validate */ "./components/validator/validate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_firebase__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "F:\\G4 Logistics\\FrontEnd\\components\\context\\RequestContext.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var RequestContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])();

var RequestContextProvider = function RequestContextProvider(props) {
  _s();

  var initialState = {
    cartons: "55",
    deliveryLocations: "lagos",
    descriptions: "thank you",
    itemsWorth: "5000",
    receiverFirstName: 'mayowa',
    receiverPhoneNumber1: '08087536643',
    receiverPhoneNumber2: '08130614615',
    requestImages: [],
    senderFirstName: 'jony',
    senderPhoneNumber1: '08130614615',
    senderPhoneNumber2: '08130614615',
    tagName: "chisom",
    otherItems: false,
    formErrors: {
      senderFirstName: '',
      senderPhoneNumber1: '',
      senderPhoneNumber2: '',
      receiverFirstName: '',
      receiverPhoneNumber1: '',
      receiverPhoneNumber2: '',
      cartons: '',
      createdAt: '',
      deliveryLocations: '',
      descriptions: '',
      itemsWorth: '',
      otherItems: true,
      status: '',
      tagName: '',
      amount: ''
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      contacts = _useState2[0],
      setContacts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      extractedRequest = _useState3[0],
      setExtractedRequest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      sessionToken = _useState4[0],
      setSessionToken = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLogin = _useState5[0],
      setisLogin = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      temporaryImage = _useState6[0],
      setTemporaryImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      requestImages = _useState7[0],
      setRequestImages = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      form = _useState9[0],
      setForm = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      requestSuccess = _useState10[0],
      setRequestSuccess = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      progress = _useState11[0],
      setProgress = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      error = _useState12[0],
      setError = _useState12[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState13[0],
      setLoading = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      userId = _useState14[0],
      setUserId = _useState14[1];

  var handleChange = function handleChange(e) {
    if (e) {
      e.preventDefault();
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          id = _e$target.id;

      var _input = _objectSpread({}, input),
          formErrors = _input.formErrors;

      Object(_validator_validate__WEBPACK_IMPORTED_MODULE_7__["requestValidate"])(id, value, formErrors);

      var newInput = _objectSpread(_objectSpread({}, input), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));

      return setInput(newInput);
    }
  };

  var handleCheck = function handleCheck(e) {
    var _e$target2 = e.target,
        name = _e$target2.name,
        checked = _e$target2.checked;

    var newInput = _objectSpread(_objectSpread({}, input), {}, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, checked));

    return setInput(newInput);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    progress == 100 && setLoading(false);
    setProgress(0);
  }, [progress]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].onAuthStateChanged(function (user) {
      user !== null;
      setUserId(user.uid);
    });
  }, []);

  var photoChange = function photoChange(e) {
    e.preventDefault();

    if (e.target.files) {
      progress !== 100 && setLoading(true);
      var selected = e.target.files[0];
      var types = ['image/jpeg', 'image/png'];
      var fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
      var FileSize = "5000000";
      var filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
      var perfectSize = filteredImageSize == true && URL.createObjectURL(selected);
      var restructureUrl = {
        imageSource: perfectSize
      };
      perfectSize !== undefined && setTemporaryImage([].concat(Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(temporaryImage), [restructureUrl]));

      if (filteredImageSize == true) {
        var storageRef = _firebase__WEBPACK_IMPORTED_MODULE_9__["store"].ref("requestImages/".concat(selected.name));
        storageRef.put(selected).on('state_changed', /*#__PURE__*/function () {
          var _ref = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snap) {
            var newPercentage;
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return snap.bytesTransferred / snap.totalBytes;

                  case 2:
                    _context.t0 = _context.sent;
                    newPercentage = _context.t0 * 100;
                    _context.next = 6;
                    return setProgress(newPercentage);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref2 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(err) {
            return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return setError(err);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), /*#__PURE__*/Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var cloudUrl;
          return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return storageRef.getDownloadURL();

                case 2:
                  cloudUrl = _context3.sent;
                  setRequestImages([].concat(Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(requestImages), [{
                    cloudUrl: cloudUrl
                  }]));

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      }

      URL.revokeObjectURL(selected);
    }
  };

  console.log(requestImages);

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
      var cartons, deliveryLocations, descriptions, itemsWorth, receiverFirstName, receiverPhoneNumber1, receiverPhoneNumber2, requestImages, senderFirstName, senderPhoneNumber1, senderPhoneNumber2, tagName, otherItems;
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              cartons = input.cartons, deliveryLocations = input.deliveryLocations, descriptions = input.descriptions, itemsWorth = input.itemsWorth, receiverFirstName = input.receiverFirstName, receiverPhoneNumber1 = input.receiverPhoneNumber1, receiverPhoneNumber2 = input.receiverPhoneNumber2, requestImages = input.requestImages, senderFirstName = input.senderFirstName, senderPhoneNumber1 = input.senderPhoneNumber1, senderPhoneNumber2 = input.senderPhoneNumber2, tagName = input.tagName, otherItems = input.otherItems;
              userId !== null && _firebase__WEBPACK_IMPORTED_MODULE_9__["database"].collection('Requests').add({
                userId: userId,
                cartons: cartons,
                deliveryLocations: deliveryLocations,
                descriptions: descriptions,
                itemsWorth: itemsWorth,
                receiverFirstName: receiverFirstName,
                receiverPhoneNumber1: receiverPhoneNumber1,
                receiverPhoneNumber2: receiverPhoneNumber2,
                requestImages: requestImages,
                senderFirstName: senderFirstName,
                senderPhoneNumber1: senderPhoneNumber1,
                senderPhoneNumber2: senderPhoneNumber2,
                tagName: tagName,
                otherItems: otherItems,
                createdAt: Object(_firebase__WEBPACK_IMPORTED_MODULE_9__["timestamp"])()
              }).then(function (data) {
                data && setRequestSuccess(true);
              })["catch"](function (error) {
                setError(error);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleFormSubmit(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleRequestUpdate = /*#__PURE__*/function () {
    var _ref5 = Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(e, id) {
      return F_G4_Logistics_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              setInput.apply(void 0, Object(F_G4_Logistics_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(input).concat([requestImages]));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleRequestUpdate(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleFormPreview = function handleFormPreview(e) {
    e.preventDefault();
    setInput(_objectSpread(_objectSpread({}, input), {}, {
      requestImages: requestImages
    }));
    setCount("active");
  };

  var selector = [{
    content: "contact",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["contact"])(),
    title: "Contact",
    id: 1
  }, {
    content: "gallery",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["gallery"])(),
    title: "Gallery",
    id: 2
  }, {
    content: "ShippingRequest",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["offBack"])(),
    title: "Request",
    id: 3
  }, {
    content: "",
    icon: Object(_svg__WEBPACK_IMPORTED_MODULE_6__["message"])(),
    title: "Message",
    id: 4
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RequestContext.Provider, {
    value: {
      input: input,
      error: error,
      loading: loading,
      setRequestImages: setRequestImages,
      requestImages: requestImages,
      requestSuccess: requestSuccess,
      setRequestSuccess: setRequestSuccess,
      initialState: initialState,
      setCount: setCount,
      count: count,
      setInput: setInput,
      handleChange: handleChange,
      handleCheck: handleCheck,
      temporaryImage: temporaryImage,
      handleFormSubmit: handleFormSubmit,
      handleFormPreview: handleFormPreview,
      photoChange: photoChange,
      selector: selector,
      setExtractedRequest: setExtractedRequest,
      extractedRequest: extractedRequest,
      contacts: contacts,
      setContacts: setContacts,
      handleRequestUpdate: handleRequestUpdate,
      sessionToken: sessionToken,
      isLogin: isLogin,
      setisLogin: setisLogin
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 9
  }, _this);
};

_s(RequestContextProvider, "uHhN6iZ9mZDkpz/Iqelw2a5YJ4E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = RequestContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (RequestContextProvider);

var _c;

$RefreshReg$(_c, "RequestContextProvider");

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

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/firestore/dist/esm5/index.js":
false,

/***/ "./node_modules/@firebase/firestore/dist/esm5/prebuilt-28889c43-f8ea673b.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRleHQvQ2xpZW50Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L1JlcXVlc3RDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldGlzTG9naW4iLCJzZXNzaW9uVG9rZW4iLCJzZXRTZXNzaW9uVG9rZW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzaWdudXAiLCJzZXRTaWdudXAiLCJsb2dpbiIsInNldExvZ2luIiwiYXV0aGVudGljYXRlIiwic2V0QXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJzZXRBdXRoZW50aWNhdGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwidG9rZW4iLCJ1c2VyIiwiZnVsbE5hbWUiLCJyb2xlIiwiX2lkIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbm91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsImNvbmZpZyIsInJlcyIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwicmVwbGFjZSIsImhhbmRsZUxvZ2luQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibG9naW5WYWxpZGF0ZSIsIm5ld0xvZ2luIiwiaGFuZGxlU2lnbnVwQ2hhbmdlIiwic2luZ3VwVmFsaWRhdGUiLCJuZXdTaWdudXAiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiY3JlZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImhhbmRsZVNpZ25vdXQiLCJzaWduT3V0IiwiaGFuZGxlTG9naW5TdWJtaXQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImhhbmRsZUFkbWluU3VibWl0Iiwic2V0SXRlbSIsImNoaWxkcmVuIiwiQ2xpZW50Q29udGV4dCIsIkNsaWVudENvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsImFkZHJlc3MiLCJwcm9maWxlSW1hZ2UiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInNldERhdGEiLCJnZXQiLCJ3aGVyZSIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsInB1c2giLCJzZXRUcmFuc2FjdGlvbiIsInVuZGVmaW5lZCIsInNldFByb2ZpbGVJbWFnZSIsInRlbXBvcmFyeUltYWdlIiwic2V0VGVtcG9yYXJ5SW1hZ2UiLCJjb3VudCIsInNldENvdW50IiwidHJhbnNhY3Rpb24iLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsImZpbGVzIiwic2VsZWN0ZWQiLCJ0eXBlcyIsImZpbGVUeXBlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiRmlsZVNpemUiLCJmaWx0ZXJlZEltYWdlU2l6ZSIsInNpemUiLCJob2xkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcmFnZVJlZiIsInN0b3JlIiwicmVmIiwicHV0Iiwib24iLCJzbmFwIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJuZXdQZXJjZW50YWdlIiwiZXJyIiwiZ2V0RG93bmxvYWRVUkwiLCJuZXdVcmwiLCJyZXZva2VPYmplY3RVUkwiLCJwcm9maWxlRGV0YWlscyIsInByb2ZpbGVWYWxpZGF0ZSIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJhZGQiLCJoYW5kbGVQcm9maWxlUHJldmlldyIsIlJlcXVlc3RDb250ZXh0IiwiUmVxdWVzdENvbnRleHRQcm92aWRlciIsImNhcnRvbnMiLCJkZWxpdmVyeUxvY2F0aW9ucyIsImRlc2NyaXB0aW9ucyIsIml0ZW1zV29ydGgiLCJyZWNlaXZlckZpcnN0TmFtZSIsInJlY2VpdmVyUGhvbmVOdW1iZXIxIiwicmVjZWl2ZXJQaG9uZU51bWJlcjIiLCJyZXF1ZXN0SW1hZ2VzIiwic2VuZGVyRmlyc3ROYW1lIiwic2VuZGVyUGhvbmVOdW1iZXIxIiwic2VuZGVyUGhvbmVOdW1iZXIyIiwidGFnTmFtZSIsIm90aGVySXRlbXMiLCJjcmVhdGVkQXQiLCJhbW91bnQiLCJpbnB1dCIsInNldElucHV0IiwiY29udGFjdHMiLCJzZXRDb250YWN0cyIsImV4dHJhY3RlZFJlcXVlc3QiLCJzZXRFeHRyYWN0ZWRSZXF1ZXN0Iiwic2V0UmVxdWVzdEltYWdlcyIsImZvcm0iLCJzZXRGb3JtIiwicmVxdWVzdFN1Y2Nlc3MiLCJzZXRSZXF1ZXN0U3VjY2VzcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcklkIiwic2V0VXNlcklkIiwiaGFuZGxlQ2hhbmdlIiwiaWQiLCJyZXF1ZXN0VmFsaWRhdGUiLCJuZXdJbnB1dCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsInBob3RvQ2hhbmdlIiwicGVyZmVjdFNpemUiLCJyZXN0cnVjdHVyZVVybCIsImltYWdlU291cmNlIiwiY2xvdWRVcmwiLCJoYW5kbGVGb3JtU3VibWl0IiwidGltZXN0YW1wIiwiaGFuZGxlUmVxdWVzdFVwZGF0ZSIsImhhbmRsZUZvcm1QcmV2aWV3Iiwic2VsZWN0b3IiLCJjb250ZW50IiwiaWNvbiIsImNvbnRhY3QiLCJ0aXRsZSIsImdhbGxlcnkiLCJvZmZCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR0tGLHNEQUFRLEVBSGI7QUFBQSxNQUc1QkcsWUFINEI7QUFBQSxNQUdkQyxlQUhjOztBQUFBLG1CQUlQSixzREFBUSxDQUFDO0FBQ25DSyxhQUFTLEVBQUUsRUFEd0I7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxlQUFXLEVBQUUsRUFKc0I7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsY0FBVSxFQUFFO0FBQ1JMLGVBQVMsRUFBRSxFQURIO0FBRVJDLGNBQVEsRUFBRSxFQUZGO0FBR1JDLFdBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFXLEVBQUUsRUFKTDtBQUtSQyxjQUFRLEVBQUU7QUFMRjtBQU51QixHQUFELENBSkQ7QUFBQSxNQUk1QkUsTUFKNEI7QUFBQSxNQUlwQkMsU0FKb0I7O0FBQUEsbUJBb0JUWixzREFBUSxDQUFDO0FBQy9CTyxTQUFLLEVBQUUsRUFEd0I7QUFFL0JFLFlBQVEsRUFBRSxFQUZxQjtBQUcvQkMsY0FBVSxFQUFFO0FBQ1JILFdBQUssRUFBRSxFQURDO0FBRVJFLGNBQVEsRUFBRTtBQUZGO0FBSG1CLEdBQUQsQ0FwQkM7QUFBQSxNQW9CNUJJLEtBcEI0QjtBQUFBLE1Bb0JyQkMsUUFwQnFCOztBQUFBLG1CQTZCT2Qsc0RBQVEsQ0FBQyxLQUFELENBN0JmO0FBQUEsTUE2QjFCZSxZQTdCMEI7QUFBQSxNQTZCWkMsZUE3Qlk7O0FBQUEsbUJBOEJXaEIsc0RBQVEsQ0FBQyxLQUFELENBOUJuQjtBQUFBLE1BOEIxQmlCLGNBOUIwQjtBQUFBLE1BOEJWQyxpQkE5QlU7O0FBQUEsbUJBK0JQbEIsc0RBQVEsQ0FBQyxFQUFELENBL0JEO0FBQUEsTUErQjFCbUIsS0EvQjBCO0FBQUEsTUErQm5CQyxRQS9CbUI7O0FBZ0NqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQWhDaUMsbUJBaUNIdEIsc0RBQVEsQ0FBQztBQUNuQ3VCLFdBQU8sRUFBRSxFQUQwQjtBQUVuQ0MsU0FBSyxFQUFFLEVBRjRCO0FBR25DQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxFQUFSO0FBQ05GLGVBQVMsRUFBRSxFQURMO0FBRU5xQixjQUFRLEVBQUUsRUFGSjtBQUdOcEIsY0FBUSxFQUFFLEVBSEo7QUFJTnFCLFVBQUksRUFBRSxFQUpBO0FBS05DLFNBQUcsRUFBRTtBQUxDO0FBSDZCLEdBQUQsQ0FqQ0w7QUFBQSxNQWlDMUJDLE9BakMwQjtBQUFBLE1BaUNqQkMsVUFqQ2lCOztBQTRDakNDLHlEQUFTLENBQUMsWUFBSTtBQUNaQyxrREFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBUixJQUFJLEVBQUU7QUFDNUJBLFVBQUksSUFBSSxJQUFSLEdBQWV2QixVQUFVLENBQUMsS0FBRCxDQUF6QixHQUFtQ0EsVUFBVSxDQUFDLElBQUQsQ0FBN0M7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNZ0MsT0FBTztBQUFBLHdRQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxlQUFDLENBQUNDLGNBQUY7QUFEYztBQUFBLHFCQUVNQyxzREFBSyxDQUFDQyxJQUFOLENBQVcsVUFBWCxXQUE2QixVQUFVbkIsS0FBVixFQUFpQjtBQUM1RCxvQkFBSUEsS0FBSyxDQUFDb0IsUUFBVixFQUFvQjtBQUNsQjtBQUNBO0FBQ0FDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWXRCLEtBQUssQ0FBQ29CLFFBQU4sQ0FBZUcsSUFBM0I7QUFDQUYseUJBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsS0FBSyxDQUFDb0IsUUFBTixDQUFlSSxNQUEzQjtBQUNBSCx5QkFBTyxDQUFDQyxHQUFSLENBQVl0QixLQUFLLENBQUNvQixRQUFOLENBQWVLLE9BQTNCO0FBQ0QsaUJBTkQsTUFNTyxJQUFJekIsS0FBSyxDQUFDMEIsT0FBVixFQUFtQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQUwseUJBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsS0FBSyxDQUFDMEIsT0FBbEI7QUFDRCxpQkFMTSxNQUtBO0FBQ0w7QUFDQUwseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJ0QixLQUFLLENBQUNJLE9BQTNCO0FBQ0Q7O0FBQ0RpQix1QkFBTyxDQUFDQyxHQUFSLENBQVl0QixLQUFLLENBQUMyQixNQUFsQjtBQUNELGVBakJlLENBRk47O0FBQUE7QUFFTkMsaUJBRk07QUFvQlpDLDBCQUFZLENBQUNDLEtBQWI7QUFFQTVCLG9CQUFNLENBQUM2QixPQUFQLENBQWUsUUFBZjs7QUF0Qlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUGhCLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUF5QkYsTUFBTWlCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2hCLENBQUQsRUFBTztBQUFBLG9CQUNQQSxDQUFDLENBQUNpQixNQURLO0FBQUEsUUFDdEJDLElBRHNCLGFBQ3RCQSxJQURzQjtBQUFBLFFBQ2hCQyxLQURnQixhQUNoQkEsS0FEZ0I7QUFBQSxRQUV2QjVDLFVBRnVCLEdBRVRHLEtBRlMsQ0FFdkJILFVBRnVCO0FBRzdCNkMsNkVBQWEsQ0FBQ0YsSUFBRCxFQUFPQyxLQUFQLEVBQWM1QyxVQUFkLENBQWI7O0FBQ0ksUUFBSThDLFFBQVEsbUNBQVEzQyxLQUFSLHlJQUFnQndDLElBQWhCLEVBQXVCQyxLQUF2QixFQUFaOztBQUNBLFdBQU94QyxRQUFRLENBQUMwQyxRQUFELENBQWY7QUFDUCxHQU5EOztBQVFBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3RCLENBQUQsRUFBTztBQUFBLG9DQUNOeEIsTUFETTtBQUFBLFFBQ3hCRCxVQUR3QixXQUN4QkEsVUFEd0I7O0FBQUEscUJBRVJ5QixDQUFDLENBQUNpQixNQUZNO0FBQUEsUUFFdkJDLElBRnVCLGNBRXZCQSxJQUZ1QjtBQUFBLFFBRWpCQyxLQUZpQixjQUVqQkEsS0FGaUI7QUFHOUJJLDhFQUFjLENBQUNMLElBQUQsRUFBT0MsS0FBUCxFQUFjNUMsVUFBZCxDQUFkOztBQUNJLFFBQUlpRCxTQUFTLG1DQUFRaEQsTUFBUix5SUFBaUIwQyxJQUFqQixFQUF3QkMsS0FBeEIsRUFBYjs7QUFDQSxXQUFPMUMsU0FBUyxDQUFDK0MsU0FBRCxDQUFoQjtBQUNQLEdBTkQ7O0FBU0EsTUFBTUMsa0JBQWtCO0FBQUEseVFBQUcsa0JBQU16QixDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkEsZUFBQyxDQUFDQyxjQUFGO0FBQ08vQix1QkFGZ0IsR0FFcUNNLE1BRnJDLENBRWhCTixTQUZnQixFQUVMQyxRQUZLLEdBRXFDSyxNQUZyQyxDQUVMTCxRQUZLLEVBRUtDLEtBRkwsR0FFcUNJLE1BRnJDLENBRUtKLEtBRkwsRUFFWUMsV0FGWixHQUVxQ0csTUFGckMsQ0FFWUgsV0FGWixFQUV5QkMsUUFGekIsR0FFcUNFLE1BRnJDLENBRXlCRixRQUZ6QjtBQUd2QnVCLDREQUFJLENBQUM2Qiw4QkFBTCxDQUFvQ3RELEtBQXBDLEVBQTJDRSxRQUEzQyxFQUFxRHFELElBQXJELENBQTBELFVBQUFDLElBQUksRUFBRztBQUMvRCx1QkFBT0Msa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixTQUFwQixFQUErQkMsR0FBL0IsQ0FBbUNILElBQUksQ0FBQ3RDLElBQUwsQ0FBVTBDLEdBQTdDLEVBQWtEQyxHQUFsRCxDQUFzRDtBQUMzRDVELDZCQUFXLEVBQVhBLFdBRDJEO0FBQzlDRCx1QkFBSyxFQUFMQSxLQUQ4QztBQUN2Q0YsMkJBQVMsRUFBVEEsU0FEdUM7QUFDNUJDLDBCQUFRLEVBQVJBO0FBRDRCLGlCQUF0RCxDQUFQO0FBRUcsZUFITCxFQUlFd0QsSUFKRixDQUlPLFlBQUk7QUFDVDVELDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FtQixzQkFBTSxDQUFDNkIsT0FBUCxDQUFlLFdBQWY7QUFDRCxlQVBEOztBQUh1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQlUsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEtBQXhCOztBQWFBLE1BQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ2xDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGO0FBRDJCLFFBRXBCL0IsU0FGb0IsR0FFaUNNLE1BRmpDLENBRXBCTixTQUZvQjtBQUFBLFFBRVRDLFFBRlMsR0FFaUNLLE1BRmpDLENBRVRMLFFBRlM7QUFBQSxRQUVDQyxLQUZELEdBRWlDSSxNQUZqQyxDQUVDSixLQUZEO0FBQUEsUUFFUUMsV0FGUixHQUVpQ0csTUFGakMsQ0FFUUgsV0FGUjtBQUFBLFFBRXFCQyxRQUZyQixHQUVpQ0UsTUFGakMsQ0FFcUJGLFFBRnJCO0FBRzNCdUIsa0RBQUksQ0FBQ3NDLE9BQUw7QUFFSCxHQUxDOztBQU9FLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3BDLENBQUQsRUFBTztBQUMvQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FsQixxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBRitCLFFBR3hCWCxLQUh3QixHQUdKTSxLQUhJLENBR3hCTixLQUh3QjtBQUFBLFFBR2pCRSxRQUhpQixHQUdKSSxLQUhJLENBR2pCSixRQUhpQjtBQUkvQnVCLGtEQUFJLENBQUN3QywwQkFBTCxDQUFnQ2pFLEtBQWhDLEVBQXVDRSxRQUF2QyxFQUFpRHFELElBQWpELENBQXNELFlBQUk7QUFDMUQ1RCxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBbUIsWUFBTSxDQUFDNkIsT0FBUCxDQUFlLFdBQWY7QUFDRyxLQUhIO0FBSUQsR0FSRDs7QUFVQSxNQUFNdUIsaUJBQWlCO0FBQUEseVFBQUcsa0JBQU10QyxDQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBbEIsK0JBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUZ3QjtBQUFBLHFCQUdObUIsc0RBQUssQ0FBQ0MsSUFBTixDQUFXLGVBQVgsRUFBNEJ6QixLQUE1QixXQUF5QyxVQUFVTSxLQUFWLEVBQWlCO0FBQ3hFLG9CQUFJQSxLQUFLLENBQUNvQixRQUFWLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsS0FBSyxDQUFDb0IsUUFBTixDQUFlRyxJQUEzQjtBQUNBRix5QkFBTyxDQUFDQyxHQUFSLENBQVl0QixLQUFLLENBQUNvQixRQUFOLENBQWVJLE1BQTNCO0FBQ0FILHlCQUFPLENBQUNDLEdBQVIsQ0FBWXRCLEtBQUssQ0FBQ29CLFFBQU4sQ0FBZUssT0FBM0I7QUFDRCxpQkFORCxNQU1PLElBQUl6QixLQUFLLENBQUMwQixPQUFWLEVBQW1CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBTCx5QkFBTyxDQUFDQyxHQUFSLENBQVl0QixLQUFLLENBQUMwQixPQUFsQjtBQUNELGlCQUxNLE1BS0E7QUFDTDtBQUNBTCx5QkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQnRCLEtBQUssQ0FBQ0ksT0FBM0I7QUFDRDs7QUFDRGlCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXRCLEtBQUssQ0FBQzJCLE1BQWxCO0FBQ0QsZUFqQmUsQ0FITTs7QUFBQTtBQUdsQkMsaUJBSGtCOztBQXFCekIsa0JBQUdBLEdBQUcsSUFBSUEsR0FBRyxDQUFDSixNQUFKLElBQWMsR0FBeEIsRUFBNEI7QUFDM0J6QixpQ0FBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FGLCtCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FkLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBSDJCLDRCQUlQNkMsR0FBRyxDQUFDTCxJQUpHLEVBSXJCbEIsS0FKcUIsYUFJckJBLEtBSnFCLEVBSWRDLElBSmMsYUFJZEEsSUFKYztBQUszQnVCLDRCQUFZLENBQUMwQixPQUFiLENBQXFCLE9BQXJCLEVBQThCbEQsS0FBOUI7QUFDSUQsdUJBTnVCLEdBTWIsU0FOYTtBQU8zQk8sMEJBQVUsaUNBQUtELE9BQUw7QUFBY04seUJBQU8sRUFBUEEsT0FBZDtBQUF1QkMsdUJBQUssRUFBTEEsS0FBdkI7QUFBOEJDLHNCQUFJLEVBQUpBO0FBQTlCLG1CQUFWO0FBQ0FKLHNCQUFNLENBQUM2QixPQUFQLENBQWUsVUFBZjtBQUNBOztBQTlCd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBakJ1QixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBbUNGLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFDdEUsa0JBQVksRUFBWkEsWUFBRDtBQUFlK0IsYUFBTyxFQUFQQSxPQUFmO0FBQXdCOUIscUJBQWUsRUFBZkEsZUFBeEI7QUFBeUNTLFdBQUssRUFBTEEsS0FBekM7QUFBZ0RGLFlBQU0sRUFBTkEsTUFBaEQ7QUFBd0RWLGFBQU8sRUFBUEEsT0FBeEQ7QUFBaUVDLGdCQUFVLEVBQVZBLFVBQWpFO0FBQTZFaUQsdUJBQWlCLEVBQWpCQSxpQkFBN0U7QUFBZ0dNLHdCQUFrQixFQUFsQkEsa0JBQWhHO0FBQW9IWSxtQkFBYSxFQUFiQSxhQUFwSDtBQUFtSVQsd0JBQWtCLEVBQWxCQSxrQkFBbkk7QUFBdUpXLHVCQUFpQixFQUFqQkEsaUJBQXZKO0FBQTBLRSx1QkFBaUIsRUFBakJBO0FBQTFLLEtBQTdCO0FBQUEsY0FDSzFFLEtBQUssQ0FBQzRFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FsS0Q7O0dBQU03RSxtQjtVQWdDZXdCLHFEOzs7S0FoQ2Z4QixtQjtBQW9LU0Esa0ZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLQTtBQUNBO0FBQ0E7QUFFTyxJQUFNOEUsYUFBYSxnQkFBRy9FLDJEQUFhLEVBQW5DOztBQUVQLElBQU1nRixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUM5RSxLQUFELEVBQVc7QUFBQTs7QUFFckMsTUFBTStFLFlBQVksR0FBRztBQUNuQnpFLGFBQVMsRUFBRSxPQURRO0FBRW5CQyxZQUFRLEVBQUUsT0FGUztBQUduQkMsU0FBSyxFQUFFLDBCQUhZO0FBSW5CQyxlQUFXLEVBQUUsYUFKTTtBQUtuQnVFLFdBQU8sRUFBRSxZQUxVO0FBTW5CQyxnQkFBWSxFQUFFLEVBTks7QUFPbkJ0RSxjQUFVLEVBQUU7QUFDVkwsZUFBUyxFQUFFLEVBREQ7QUFFVkMsY0FBUSxFQUFFLEVBRkE7QUFHVkMsV0FBSyxFQUFFLEVBSEc7QUFJVkMsaUJBQVcsRUFBRSxFQUpIO0FBS1Z1RSxhQUFPLEVBQUU7QUFMQztBQVBPLEdBQXJCOztBQUZxQyxrQkFrQlAvRSxzREFBUSxDQUFDOEUsWUFBRCxDQWxCRDtBQUFBLE1Ba0I5QkcsT0FsQjhCO0FBQUEsTUFrQnJCQyxVQWxCcUI7O0FBQUEsbUJBbUJibEYsc0RBQVEsRUFuQks7QUFBQSxNQW1COUIwQyxJQW5COEI7QUFBQSxNQW1CeEJ5QyxPQW5Cd0I7O0FBb0JyQ3BELHlEQUFTLENBQUMsWUFBSTtBQUNaQyxrREFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBUixJQUFJLEVBQUU7QUFDNUJBLFVBQUksS0FBSyxJQUFULElBQWlCdUMsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixTQUFwQixFQUErQkMsR0FBL0IsQ0FBbUN6QyxJQUFJLENBQUMwQyxHQUF4QyxFQUE2Q2lCLEdBQTdDLEdBQW1EdEIsSUFBbkQsQ0FBd0QsVUFBQUksR0FBRztBQUFBLGVBQzFFaUIsT0FBTyxDQUFDakIsR0FBRyxDQUFDeEIsSUFBSixFQUFELENBRG1FO0FBQUEsT0FBM0QsQ0FBakI7QUFHRCxLQUpEO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBWCx5REFBUyxDQUFFLFlBQU07QUFDZixRQUFNVyxJQUFJLEdBQUcsRUFBYjtBQUNBVixrREFBSSxDQUFDQyxrQkFBTCxDQUF3QixVQUFBUixJQUFJLEVBQUU7QUFDdEJBLFVBQUksS0FBSyxJQUFULElBQWlCdUMsa0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUNoQm9CLEtBRGdCLENBQ1YsUUFEVSxFQUNBLElBREEsRUFDTTVELElBQUksQ0FBQzBDLEdBRFgsRUFFaEJtQixVQUZnQixDQUVMLFVBQUNDLGFBQUQsRUFBbUI7QUFDdkJBLHFCQUFhLENBQUNDLE9BQWQsQ0FBc0IsVUFBQ3RCLEdBQUQsRUFBUztBQUMzQjtBQUNBeEIsY0FBSSxDQUFDK0MsSUFBTCxDQUFVdkIsR0FBRyxDQUFDeEIsSUFBSixFQUFWO0FBQ0gsU0FIRDtBQUlILE9BUFksQ0FBakI7QUFRRCxLQVRQO0FBVU1nRCxrQkFBYyxDQUFDaEQsSUFBRCxDQUFkO0FBQ1gsR0FiWSxFQWFWLEVBYlUsQ0FBVDtBQWdCQVgseURBQVMsQ0FBQyxZQUFJO0FBQUEsUUFDTHJCLFVBREssR0FDU29FLFlBRFQsQ0FDTHBFLFVBREs7QUFFWmdDLFFBQUksS0FBS2lELFNBQVQsSUFBc0JULFVBQVUsaUNBQUt4QyxJQUFMO0FBQVdoQyxnQkFBVSxFQUFWQTtBQUFYLE9BQWhDO0FBQ0QsR0FIUSxFQUdOLENBQUNnQyxJQUFELENBSE0sQ0FBVDs7QUE1Q3FDLG1CQWlERzFDLHNEQUFRLEVBakRYO0FBQUEsTUFpRDlCZ0YsWUFqRDhCO0FBQUEsTUFpRGhCWSxlQWpEZ0I7O0FBQUEsbUJBa0RLNUYsc0RBQVEsRUFsRGI7QUFBQSxNQWtEL0I2RixjQWxEK0I7QUFBQSxNQWtEZkMsaUJBbERlOztBQUFBLG1CQW1EWDlGLHNEQUFRLEVBbkRHO0FBQUEsTUFtRDlCK0YsS0FuRDhCO0FBQUEsTUFtRHZCQyxRQW5EdUI7O0FBQUEsbUJBb0RDaEcsc0RBQVEsQ0FBQyxFQUFELENBcERUO0FBQUEsTUFvRDlCaUcsV0FwRDhCO0FBQUEsTUFvRGpCUCxjQXBEaUI7O0FBQUEsbUJBcURYMUYsc0RBQVEsQ0FBQyxJQUFELENBckRHO0FBQUEsTUFxRDlCbUIsS0FyRDhCO0FBQUEsTUFxRHZCQyxRQXJEdUI7O0FBQUEsbUJBc0RMcEIsc0RBQVEsQ0FBQyxDQUFELENBdERIO0FBQUEsTUFzRDlCa0csUUF0RDhCO0FBQUEsTUFzRHBCQyxXQXREb0I7O0FBd0RyQyxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNqRSxDQUFELEVBQU87QUFDL0JBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDRCxRQUFHRCxDQUFDLENBQUNpQixNQUFGLENBQVNpRCxLQUFaLEVBQWtCO0FBQ2hCLFVBQUlDLFFBQVEsR0FBR25FLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU2lELEtBQVQsQ0FBZSxDQUFmLENBQWY7QUFDRCxVQUFJRSxLQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFaO0FBQ0QsVUFBSUMsUUFBUSxHQUFHRixRQUFRLEtBQUtYLFNBQWIsR0FBeUJZLEtBQUssQ0FBQ0UsUUFBTixDQUFlSCxRQUFRLENBQUNJLElBQXhCLENBQXpCLEdBQXdEdEYsUUFBUSxDQUFDLGdEQUFELENBQS9FO0FBQ0csVUFBSXVGLFFBQVEsR0FBRyxTQUFmO0FBQ0QsVUFBSUMsaUJBQWlCLEdBQUVKLFFBQVEsSUFBSSxJQUFaLEdBQW1CRixRQUFRLENBQUNPLElBQVQsR0FBZ0JGLFFBQW5DLEdBQThDdkYsUUFBUSxDQUFDLDZCQUFELENBQTdFO0FBQ0EsVUFBSTBGLElBQUksR0FBR0YsaUJBQWlCLElBQUksSUFBckIsSUFBOEJHLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlYsUUFBcEIsQ0FBekM7QUFDQVEsVUFBSSxLQUFLbkIsU0FBVCxJQUFzQkcsaUJBQWlCLENBQUNnQixJQUFELENBQXZDOztBQUNDLFVBQUdGLGlCQUFpQixJQUFJLElBQXhCLEVBQThCO0FBQzlCLFlBQU1LLFVBQVUsR0FBR0MsK0NBQUssQ0FBQ0MsR0FBTix5QkFBMkJiLFFBQVEsQ0FBQ2pELElBQXBDLEVBQW5CO0FBQ0U0RCxrQkFBVSxDQUFDRyxHQUFYLENBQWVkLFFBQWYsRUFBeUJlLEVBQXpCLENBQTRCLGVBQTVCO0FBQUEsOFFBQ0EsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDK0JBLElBQUksQ0FBQ0MsZ0JBQUwsR0FBd0JELElBQUksQ0FBQ0UsVUFENUQ7O0FBQUE7QUFBQTtBQUNRQyxpQ0FEUixpQkFDMEUsR0FEMUU7QUFBQTtBQUFBLDJCQUVNdEIsV0FBVyxDQUFDc0IsYUFBRCxDQUZqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1FBSUksa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ0V0RyxRQUFRLENBQUNzRyxHQUFELENBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtUkFNRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNvQlQsVUFBVSxDQUFDVSxjQUFYLEVBRHBCOztBQUFBO0FBQ0tDLHdCQURMO0FBQUE7QUFBQSx5QkFFR2hDLGVBQWUsQ0FBQ2dDLE1BQUQsQ0FGbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FOSDtBQVVEOztBQUNGYixTQUFHLENBQUNjLGVBQUosQ0FBb0J2QixRQUFwQjtBQUNBO0FBQ04sR0F6QkM7O0FBMkJGLE1BQU13QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUMzRixDQUFELEVBQU87QUFDNUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUQ0QixvQkFHTkQsQ0FBQyxDQUFDaUIsTUFISTtBQUFBLFFBR3JCQyxJQUhxQixhQUdyQkEsSUFIcUI7QUFBQSxRQUdmQyxLQUhlLGFBR2ZBLEtBSGU7O0FBQUEscUNBSUwyQixPQUpLO0FBQUEsUUFJdkJ2RSxVQUp1QixZQUl2QkEsVUFKdUI7O0FBTTVCcUgsK0VBQWUsQ0FBQzFFLElBQUQsRUFBT0MsS0FBUCxFQUFjNUMsVUFBZCxDQUFmO0FBQ0UsV0FBT3dFLFVBQVUsaUNBQUtELE9BQUwseUlBQWdCNUIsSUFBaEIsRUFBdUJDLEtBQXZCLEdBQWpCO0FBQ0gsR0FSRDs7QUFVQSxNQUFNMEUsbUJBQW1CO0FBQUEseVFBQUcsa0JBQU03RixDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ08vQix1QkFGbUIsR0FPWDRFLE9BUFcsQ0FFbkI1RSxTQUZtQixFQUcxQkMsUUFIMEIsR0FPWDJFLE9BUFcsQ0FHMUIzRSxRQUgwQixFQUkxQkMsS0FKMEIsR0FPWDBFLE9BUFcsQ0FJMUIxRSxLQUowQixFQUsxQkMsV0FMMEIsR0FPWHlFLE9BUFcsQ0FLMUJ6RSxXQUwwQixFQU0xQnVFLE9BTjBCLEdBT1hFLE9BUFcsQ0FNMUJGLE9BTjBCLEVBTzFCQyxZQVAwQixHQU9YQyxPQVBXLENBTzFCRCxZQVAwQjtBQVExQmhCLGdFQUFRLENBQUNDLFVBQVQsQ0FBb0IsU0FBcEIsRUFBK0JnRSxHQUEvQixDQUFtQztBQUFDNUgseUJBQVMsRUFBVEEsU0FBRDtBQUNqQ0Msd0JBQVEsRUFBUkEsUUFEaUM7QUFFakNDLHFCQUFLLEVBQUxBLEtBRmlDO0FBR2pDQywyQkFBVyxFQUFYQSxXQUhpQztBQUlqQ3VFLHVCQUFPLEVBQVBBLE9BSmlDO0FBS2pDQyw0QkFBWSxFQUFaQTtBQUxpQyxlQUFuQzs7QUFSMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJnRCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBaUJBLE1BQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQy9GLENBQUQsRUFBTztBQUNsQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0E4QyxjQUFVLGlDQUFLRCxPQUFMO0FBQWNELGtCQUFZLEVBQVpBO0FBQWQsT0FBVjtBQUNBZ0IsWUFBUSxDQUFDLFFBQUQsQ0FBUjtBQUNELEdBSkQ7O0FBWUUsc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQVhBLFdBQUY7QUFBZVAsb0JBQWMsRUFBZEEsY0FBZjtBQUErQlUseUJBQW1CLEVBQW5CQSxtQkFBL0I7QUFBb0Q4QiwwQkFBb0IsRUFBcEJBLG9CQUFwRDtBQUEwRUYseUJBQW1CLEVBQW5CQSxtQkFBMUU7QUFBK0YvQyxhQUFPLEVBQVBBLE9BQS9GO0FBQXdHQyxnQkFBVSxFQUFWQSxVQUF4RztBQUFvSFksdUJBQWlCLEVBQWpCQSxpQkFBcEg7QUFBdUlELG9CQUFjLEVBQWRBLGNBQXZJO0FBQXVKaUMsb0JBQWMsRUFBZEEsY0FBdko7QUFBdUs5QyxrQkFBWSxFQUFaQSxZQUF2SztBQUFxTFkscUJBQWUsRUFBZkEsZUFBckw7QUFBc01HLFdBQUssRUFBTEEsS0FBdE07QUFBNk1DLGNBQVEsRUFBUkE7QUFBN00sS0FBL0I7QUFBQSxjQUNLakcsS0FBSyxDQUFDNEU7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQS9IRDs7R0FBTUUscUI7O0tBQUFBLHFCO0FBaUlTQSxvRkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1zRCxjQUFjLGdCQUFHdEksMkRBQWEsRUFBcEM7O0FBRVAsSUFBTXVJLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ3JJLEtBQUQsRUFBVTtBQUFBOztBQUVyQyxNQUFNK0UsWUFBWSxHQUNkO0FBQUN1RCxXQUFPLEVBQUUsSUFBVjtBQUNBQyxxQkFBaUIsRUFBRSxPQURuQjtBQUVBQyxnQkFBWSxFQUFFLFdBRmQ7QUFHQUMsY0FBVSxFQUFFLE1BSFo7QUFJQUMscUJBQWlCLEVBQUUsUUFKbkI7QUFLQUMsd0JBQW9CLEVBQUUsYUFMdEI7QUFNQUMsd0JBQW9CLEVBQUUsYUFOdEI7QUFPQUMsaUJBQWEsRUFBRSxFQVBmO0FBUUFDLG1CQUFlLEVBQUUsTUFSakI7QUFTQUMsc0JBQWtCLEVBQUUsYUFUcEI7QUFVQUMsc0JBQWtCLEVBQUUsYUFWcEI7QUFXQUMsV0FBTyxFQUFFLFFBWFQ7QUFZQUMsY0FBVSxFQUFFLEtBWlo7QUFhQXZJLGNBQVUsRUFBRTtBQUNSbUkscUJBQWUsRUFBRSxFQURUO0FBRVJDLHdCQUFrQixFQUFFLEVBRlo7QUFHUkMsd0JBQWtCLEVBQUUsRUFIWjtBQUlSTix1QkFBaUIsRUFBRSxFQUpYO0FBS1JDLDBCQUFvQixFQUFFLEVBTGQ7QUFNUkMsMEJBQW9CLEVBQUUsRUFOZDtBQU9STixhQUFPLEVBQUUsRUFQRDtBQVFSYSxlQUFTLEVBQUUsRUFSSDtBQVNSWix1QkFBaUIsRUFBRSxFQVRYO0FBVVJDLGtCQUFZLEVBQUUsRUFWTjtBQVdSQyxnQkFBVSxFQUFFLEVBWEo7QUFZUlMsZ0JBQVUsRUFBRSxJQVpKO0FBYVJ0RyxZQUFNLEVBQUUsRUFiQTtBQWNScUcsYUFBTyxFQUFFLEVBZEQ7QUFlUkcsWUFBTSxFQUFFO0FBZkE7QUFiWixHQURKOztBQUZxQyxrQkFvQ1puSixzREFBUSxDQUFDOEUsWUFBRCxDQXBDSTtBQUFBLE1Bb0MvQnNFLEtBcEMrQjtBQUFBLE1Bb0N4QkMsUUFwQ3dCOztBQUFBLG1CQXFDTHJKLHNEQUFRLENBQUMsRUFBRCxDQXJDSDtBQUFBLE1BcUM5QnNKLFFBckM4QjtBQUFBLE1BcUNwQkMsV0FyQ29COztBQUFBLG1CQXNDV3ZKLHNEQUFRLEVBdENuQjtBQUFBLE1Bc0M5QndKLGdCQXRDOEI7QUFBQSxNQXNDWkMsbUJBdENZOztBQUFBLG1CQXVDR3pKLHNEQUFRLEVBdkNYO0FBQUEsTUF1QzlCRyxZQXZDOEI7QUFBQSxNQXVDaEJDLGVBdkNnQjs7QUFBQSxtQkF3Q1BKLHNEQUFRLENBQUMsS0FBRCxDQXhDRDtBQUFBLE1Bd0M5QkMsT0F4QzhCO0FBQUEsTUF3Q3JCQyxVQXhDcUI7O0FBQUEsbUJBeUNNRixzREFBUSxDQUFDLEVBQUQsQ0F6Q2Q7QUFBQSxNQXlDL0I2RixjQXpDK0I7QUFBQSxNQXlDZkMsaUJBekNlOztBQUFBLG1CQTBDSzlGLHNEQUFRLENBQUMsRUFBRCxDQTFDYjtBQUFBLE1BMEM5QjRJLGFBMUM4QjtBQUFBLE1BMENmYyxnQkExQ2U7O0FBQUEsbUJBMkNYMUosc0RBQVEsRUEzQ0c7QUFBQSxNQTJDOUIrRixLQTNDOEI7QUFBQSxNQTJDdkJDLFFBM0N1Qjs7QUFBQSxtQkE0Q2JoRyxzREFBUSxFQTVDSztBQUFBLE1BNEM5QjJKLElBNUM4QjtBQUFBLE1BNEN4QkMsT0E1Q3dCOztBQUFBLG9CQTZDTzVKLHNEQUFRLENBQUMsS0FBRCxDQTdDZjtBQUFBLE1BNkM5QjZKLGNBN0M4QjtBQUFBLE1BNkNkQyxpQkE3Q2M7O0FBQUEsb0JBOENMOUosc0RBQVEsQ0FBQyxDQUFELENBOUNIO0FBQUEsTUE4QzlCa0csUUE5QzhCO0FBQUEsTUE4Q3BCQyxXQTlDb0I7O0FBQUEsb0JBK0NYbkcsc0RBQVEsQ0FBQyxJQUFELENBL0NHO0FBQUEsTUErQzlCbUIsS0EvQzhCO0FBQUEsTUErQ3ZCQyxRQS9DdUI7O0FBZ0RyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQWhEcUMsb0JBaURQdEIsc0RBQVEsQ0FBQyxLQUFELENBakREO0FBQUEsTUFpRDlCK0osT0FqRDhCO0FBQUEsTUFpRHJCQyxVQWpEcUI7O0FBQUEsb0JBa0RUaEssc0RBQVEsQ0FBQyxFQUFELENBbERDO0FBQUEsTUFrRDlCaUssTUFsRDhCO0FBQUEsTUFrRHRCQyxTQWxEc0I7O0FBcURyQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDaEksQ0FBRCxFQUFPO0FBQ3hCLFFBQUdBLENBQUgsRUFBSztBQUNGQSxPQUFDLENBQUNDLGNBQUY7QUFERSxzQkFFd0JELENBQUMsQ0FBQ2lCLE1BRjFCO0FBQUEsVUFFS0MsSUFGTCxhQUVLQSxJQUZMO0FBQUEsVUFFV0MsS0FGWCxhQUVXQSxLQUZYO0FBQUEsVUFFa0I4RyxFQUZsQixhQUVrQkEsRUFGbEI7O0FBQUEscUNBR3VCaEIsS0FIdkI7QUFBQSxVQUdLMUksVUFITCxVQUdLQSxVQUhMOztBQUlGMkosaUZBQWUsQ0FBQ0QsRUFBRCxFQUFLOUcsS0FBTCxFQUFZNUMsVUFBWixDQUFmOztBQUNBLFVBQU00SixRQUFRLG1DQUFRbEIsS0FBUix5SUFBZ0IvRixJQUFoQixFQUF1QkMsS0FBdkIsRUFBZDs7QUFDQSxhQUFPK0YsUUFBUSxDQUFDaUIsUUFBRCxDQUFmO0FBQ0Y7QUFDSixHQVREOztBQVVELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNwSSxDQUFELEVBQUs7QUFBQSxxQkFDQUEsQ0FBQyxDQUFDaUIsTUFERjtBQUFBLFFBQ2pCQyxJQURpQixjQUNqQkEsSUFEaUI7QUFBQSxRQUNYbUgsT0FEVyxjQUNYQSxPQURXOztBQUV4QixRQUFNRixRQUFRLG1DQUFPbEIsS0FBUCx5SUFBZS9GLElBQWYsRUFBc0JtSCxPQUF0QixFQUFkOztBQUNBLFdBQU9uQixRQUFRLENBQUNpQixRQUFELENBQWY7QUFDQSxHQUpEOztBQUtBdkkseURBQVMsQ0FBRSxZQUFLO0FBQ2ZtRSxZQUFRLElBQUksR0FBWixJQUFtQjhELFVBQVUsQ0FBQyxLQUFELENBQTdCO0FBQ0E3RCxlQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0EsR0FIUSxFQUdOLENBQUNELFFBQUQsQ0FITSxDQUFUO0FBS0FuRSx5REFBUyxDQUFFLFlBQUs7QUFDZkMsa0RBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsVUFBQVIsSUFBSSxFQUFFO0FBQzVCQSxVQUFJLEtBQUssSUFBVDtBQUNFeUksZUFBUyxDQUFDekksSUFBSSxDQUFDMEMsR0FBTixDQUFUO0FBQ0gsS0FIRDtBQUlBLEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0gsTUFBTXNHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN0SSxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFFRCxRQUFHRCxDQUFDLENBQUNpQixNQUFGLENBQVNpRCxLQUFaLEVBQWtCO0FBQ2pCSCxjQUFRLEtBQUssR0FBYixJQUFvQjhELFVBQVUsQ0FBQyxJQUFELENBQTlCO0FBQ0MsVUFBSTFELFFBQVEsR0FBR25FLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU2lELEtBQVQsQ0FBZSxDQUFmLENBQWY7QUFDRCxVQUFJRSxLQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFaO0FBQ0QsVUFBSUMsUUFBUSxHQUFHRixRQUFRLEtBQUtYLFNBQWIsR0FBeUJZLEtBQUssQ0FBQ0UsUUFBTixDQUFlSCxRQUFRLENBQUNJLElBQXhCLENBQXpCLEdBQXdEdEYsUUFBUSxDQUFDLGdEQUFELENBQS9FO0FBQ0csVUFBSXVGLFFBQVEsR0FBRyxTQUFmO0FBQ0QsVUFBSUMsaUJBQWlCLEdBQUVKLFFBQVEsSUFBSSxJQUFaLEdBQW1CRixRQUFRLENBQUNPLElBQVQsR0FBZ0JGLFFBQW5DLEdBQThDdkYsUUFBUSxDQUFDLDZCQUFELENBQTdFO0FBQ0EsVUFBSXNKLFdBQVcsR0FBRzlELGlCQUFpQixJQUFJLElBQXJCLElBQThCRyxHQUFHLENBQUNDLGVBQUosQ0FBb0JWLFFBQXBCLENBQWhEO0FBQ0QsVUFBSXFFLGNBQWMsR0FBRztBQUFDQyxtQkFBVyxFQUFFRjtBQUFkLE9BQXJCO0FBQ0FBLGlCQUFXLEtBQUsvRSxTQUFoQixJQUE2QkcsaUJBQWlCLDRJQUFLRCxjQUFMLElBQXFCOEUsY0FBckIsR0FBOUM7O0FBQ0UsVUFBRy9ELGlCQUFpQixJQUFJLElBQXhCLEVBQThCO0FBQzlCLFlBQU1LLFVBQVUsR0FBR0MsK0NBQUssQ0FBQ0MsR0FBTix5QkFBMkJiLFFBQVEsQ0FBQ2pELElBQXBDLEVBQW5CO0FBQ0U0RCxrQkFBVSxDQUFDRyxHQUFYLENBQWVkLFFBQWYsRUFBeUJlLEVBQXpCLENBQTRCLGVBQTVCO0FBQUEsOFFBQ0EsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDK0JBLElBQUksQ0FBQ0MsZ0JBQUwsR0FBd0JELElBQUksQ0FBQ0UsVUFENUQ7O0FBQUE7QUFBQTtBQUNRQyxpQ0FEUixpQkFDMEUsR0FEMUU7QUFBQTtBQUFBLDJCQUVNdEIsV0FBVyxDQUFDc0IsYUFBRCxDQUZqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1FBSUksa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ0V0RyxRQUFRLENBQUNzRyxHQUFELENBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtUkFNRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNzQlQsVUFBVSxDQUFDVSxjQUFYLEVBRHRCOztBQUFBO0FBQ0trRCwwQkFETDtBQUVEbkIsa0NBQWdCLDRJQUFLZCxhQUFMLElBQW9CO0FBQUNpQyw0QkFBUSxFQUFSQTtBQUFELG1CQUFwQixHQUFoQjs7QUFGQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5IO0FBVUQ7O0FBQ0Y5RCxTQUFHLENBQUNjLGVBQUosQ0FBb0J2QixRQUFwQjtBQUNBO0FBQ0osR0E1QkQ7O0FBOEJBOUQsU0FBTyxDQUFDQyxHQUFSLENBQVltRyxhQUFaOztBQUVJLE1BQU1rQyxnQkFBZ0I7QUFBQSx5UUFBRyxrQkFBTzNJLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCQSxlQUFDLENBQUNDLGNBQUY7QUFDUWlHLHFCQUZhLEdBY1BlLEtBZE8sQ0FFYmYsT0FGYSxFQUdyQkMsaUJBSHFCLEdBY1BjLEtBZE8sQ0FHckJkLGlCQUhxQixFQUlyQkMsWUFKcUIsR0FjUGEsS0FkTyxDQUlyQmIsWUFKcUIsRUFLckJDLFVBTHFCLEdBY1BZLEtBZE8sQ0FLckJaLFVBTHFCLEVBTXJCQyxpQkFOcUIsR0FjUFcsS0FkTyxDQU1yQlgsaUJBTnFCLEVBT3JCQyxvQkFQcUIsR0FjUFUsS0FkTyxDQU9yQlYsb0JBUHFCLEVBUXJCQyxvQkFScUIsR0FjUFMsS0FkTyxDQVFyQlQsb0JBUnFCLEVBU3JCQyxhQVRxQixHQWNQUSxLQWRPLENBU3JCUixhQVRxQixFQVVyQkMsZUFWcUIsR0FjUE8sS0FkTyxDQVVyQlAsZUFWcUIsRUFXckJDLGtCQVhxQixHQWNQTSxLQWRPLENBV3JCTixrQkFYcUIsRUFZckJDLGtCQVpxQixHQWNQSyxLQWRPLENBWXJCTCxrQkFacUIsRUFhckJDLE9BYnFCLEdBY1BJLEtBZE8sQ0FhckJKLE9BYnFCLEVBY3JCQyxVQWRxQixHQWNQRyxLQWRPLENBY3JCSCxVQWRxQjtBQWdCdEJnQixvQkFBTSxLQUFLLElBQVgsSUFBbUJqRyxrREFBUSxDQUFDQyxVQUFULENBQW9CLFVBQXBCLEVBQWdDZ0UsR0FBaEMsQ0FBb0M7QUFBRWdDLHNCQUFNLEVBQU5BLE1BQUY7QUFBVTVCLHVCQUFPLEVBQVBBLE9BQVY7QUFBbUJDLGlDQUFpQixFQUFqQkEsaUJBQW5CO0FBQXNDQyw0QkFBWSxFQUFaQSxZQUF0QztBQUFvREMsMEJBQVUsRUFBVkEsVUFBcEQ7QUFBZ0VDLGlDQUFpQixFQUFqQkEsaUJBQWhFO0FBQW1GQyxvQ0FBb0IsRUFBcEJBLG9CQUFuRjtBQUNwREMsb0NBQW9CLEVBQXBCQSxvQkFEb0Q7QUFDOUJDLDZCQUFhLEVBQWJBLGFBRDhCO0FBQ2ZDLCtCQUFlLEVBQWZBLGVBRGU7QUFDRUMsa0NBQWtCLEVBQWxCQSxrQkFERjtBQUNzQkMsa0NBQWtCLEVBQWxCQSxrQkFEdEI7QUFDMENDLHVCQUFPLEVBQVBBLE9BRDFDO0FBQ21EQywwQkFBVSxFQUFWQSxVQURuRDtBQUMrREMseUJBQVMsRUFBRTZCLDJEQUFTO0FBRG5GLGVBQXBDLEVBRWZqSCxJQUZlLENBRVYsVUFBQ3BCLElBQUQsRUFBVTtBQUNaQSxvQkFBSSxJQUFLb0gsaUJBQWlCLENBQUMsSUFBRCxDQUExQjtBQUNILGVBSmUsV0FNZCxVQUFDM0ksS0FBRCxFQUFXO0FBQ1RDLHdCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELGVBUmEsQ0FBbkI7O0FBaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQjJKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUE2QkEsTUFBTUUsbUJBQW1CO0FBQUEseVFBQUcsa0JBQU03SSxDQUFOLEVBQVNpSSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJqSSxlQUFDLENBQUNDLGNBQUY7QUFDRGlILHNCQUFRLE1BQVIsMElBQVlELEtBQVosVUFBbUJSLGFBQW5COztBQUZ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQm9DLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFLQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUM5SSxDQUFELEVBQU87QUFDN0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNEaUgsWUFBUSxpQ0FBS0QsS0FBTDtBQUFZUixtQkFBYSxFQUFiQTtBQUFaLE9BQVI7QUFDQzVDLFlBQVEsQ0FBQyxRQUFELENBQVI7QUFDSCxHQUpEOztBQVNBLE1BQU1rRixRQUFRLEdBQUcsQ0FDYjtBQUFDQyxXQUFPLEVBQUUsU0FBVjtBQUFzQkMsUUFBSSxFQUFFQyxvREFBTyxFQUFuQztBQUF1Q0MsU0FBSyxFQUFFLFNBQTlDO0FBQXlEbEIsTUFBRSxFQUFFO0FBQTdELEdBRGEsRUFFYjtBQUFDZSxXQUFPLEVBQUUsU0FBVjtBQUFxQkMsUUFBSSxFQUFFRyxvREFBTyxFQUFsQztBQUFzQ0QsU0FBSyxFQUFFLFNBQTdDO0FBQXdEbEIsTUFBRSxFQUFFO0FBQTVELEdBRmEsRUFHYjtBQUFDZSxXQUFPLEVBQUUsaUJBQVY7QUFBNkJDLFFBQUksRUFBRUksb0RBQU8sRUFBMUM7QUFBOENGLFNBQUssRUFBRSxTQUFyRDtBQUFnRWxCLE1BQUUsRUFBRTtBQUFwRSxHQUhhLEVBSWI7QUFBQ2UsV0FBTyxFQUFFLEVBQVY7QUFBY0MsUUFBSSxFQUFFN0osb0RBQU8sRUFBM0I7QUFBK0IrSixTQUFLLEVBQUUsU0FBdEM7QUFBaURsQixNQUFFLEVBQUU7QUFBckQsR0FKYSxDQUFqQjtBQVFBLHNCQUNJLHFFQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFO0FBQUNoQixXQUFLLEVBQUxBLEtBQUQ7QUFBUWpJLFdBQUssRUFBTEEsS0FBUjtBQUFlNEksYUFBTyxFQUFQQSxPQUFmO0FBQXdCTCxzQkFBZ0IsRUFBaEJBLGdCQUF4QjtBQUEwQ2QsbUJBQWEsRUFBYkEsYUFBMUM7QUFBeURpQixvQkFBYyxFQUFkQSxjQUF6RDtBQUF5RUMsdUJBQWlCLEVBQWpCQSxpQkFBekU7QUFBNEZoRixrQkFBWSxFQUFaQSxZQUE1RjtBQUEwR2tCLGNBQVEsRUFBUkEsUUFBMUc7QUFBb0hELFdBQUssRUFBTEEsS0FBcEg7QUFBMkhzRCxjQUFRLEVBQVJBLFFBQTNIO0FBQXFJYyxrQkFBWSxFQUFaQSxZQUFySTtBQUFtSkksaUJBQVcsRUFBWEEsV0FBbko7QUFBZ0sxRSxvQkFBYyxFQUFkQSxjQUFoSztBQUFnTGlGLHNCQUFnQixFQUFoQkEsZ0JBQWhMO0FBQWtNRyx1QkFBaUIsRUFBakJBLGlCQUFsTTtBQUFxTlIsaUJBQVcsRUFBWEEsV0FBck47QUFBa09TLGNBQVEsRUFBUkEsUUFBbE87QUFBNE96Qix5QkFBbUIsRUFBbkJBLG1CQUE1TztBQUFpUUQsc0JBQWdCLEVBQWhCQSxnQkFBalE7QUFBbVJGLGNBQVEsRUFBUkEsUUFBblI7QUFBNlJDLGlCQUFXLEVBQVhBLFdBQTdSO0FBQTBTeUIseUJBQW1CLEVBQW5CQSxtQkFBMVM7QUFBK1Q3SyxrQkFBWSxFQUFaQSxZQUEvVDtBQUE2VUYsYUFBTyxFQUFQQSxPQUE3VTtBQUFzVkMsZ0JBQVUsRUFBVkE7QUFBdFYsS0FBaEM7QUFBQSxjQUNLSCxLQUFLLENBQUM0RTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBeEtEOztHQUFNeUQsc0I7VUFnRGE5RyxxRDs7O0tBaERiOEcsc0I7QUEwS1NBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGQ5Y2Q3YmU2NjEzZjlhYTZkZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vaGVscGVycy9heGlvcyc7XHJcbmltcG9ydCB7IGxvZ2luVmFsaWRhdGUsIHNpbmd1cFZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3ZhbGlkYXRlJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UgfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7IFxyXG4gICAgY29uc3QgW3NpZ251cCwgc2V0U2lnbnVwXSA9IHVzZVN0YXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBob25lTnVtYmVyOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRlLCBzZXRBdXRoZW50aWNhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbYXV0aGVudGljYXRpbmcsIHNldEF1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHRva2VuOiAnJyxcclxuICAgICAgICAgIHVzZXI6IHtlbWFpbDogJycsXHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgZnVsbE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgcm9sZTogJycsXHJcbiAgICAgICAgICBfaWQ6ICcnfSBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgICB1c2VyID09IG51bGwgPyBzZXRpc0xvZ2luKGZhbHNlKSA6IHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgICBjb25zdCBzaWdub3V0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zaWdub3V0JykuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb25maWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3R7Zm9ybUVycm9yc30gPSBsb2dpbjtcclxuICAgICAgICBsb2dpblZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKTtcclxuICAgICAgICAgICAgbGV0IG5ld0xvZ2luID0geyAuLi5sb2dpbiwgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRMb2dpbihuZXdMb2dpbilcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdHtmb3JtRXJyb3JzfSA9IHsuLi5zaWdudXB9XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNpbmd1cFZhbGlkYXRlKG5hbWUsIHZhbHVlLCBmb3JtRXJyb3JzKVxyXG4gICAgICAgICAgICBsZXQgbmV3U2lnbnVwID0geyAuLi5zaWdudXAsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0U2lnbnVwKG5ld1NpZ251cClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBwYXNzd29yZH0gPSBzaWdudXA7XHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKGNyZWQgPT57XHJcbiAgICAgICAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbignUHJvZmlsZScpLmRvYyhjcmVkLnVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlciwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWVcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgc2V0aXNMb2dpbih0cnVlKTtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbm91dCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qge2ZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwaG9uZU51bWJlciwgcGFzc3dvcmR9ID0gc2lnbnVwO1xyXG4gICAgICBhdXRoLnNpZ25PdXQoKVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gbG9naW47XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCk9PntcclxuICAgICAgICBzZXRpc0xvZ2luKHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH07IFxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQWRtaW5TdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbi9zaWduaW4nLCBsb2dpbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcclxuICAgICAgICAgICAgICAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICBzZXRBdXRoZW50aWNhdGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0QXV0aGVudGljYXRlKHRydWUpO1xyXG4gICAgICAgIHNldGlzTG9naW4odHJ1ZSk7XHJcbiAgICAgICBjb25zdCB7dG9rZW4sIHVzZXJ9PSByZXMuZGF0YTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIndlbGNvbWVcIjtcclxuICAgICAgICBzZXRTdWNjZXNzKHsuLi5zdWNjZXNzLCBtZXNzYWdlLCB0b2tlbiwgdXNlcn0pO1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvY29udGFjdCcpO1xyXG4gICAgICAgfVxyXG4gICAgICB9OyBcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2Vzc2lvblRva2VuLCBzaWdub3V0LCBzZXRTZXNzaW9uVG9rZW4sIGxvZ2luLCBzaWdudXAsIGlzTG9naW4sIHNldGlzTG9naW4sIGhhbmRsZUxvZ2luQ2hhbmdlLCBoYW5kbGVTaWdudXBDaGFuZ2UsIGhhbmRsZVNpZ25vdXQsIGhhbmRsZVNpZ251cFN1Ym1pdCwgaGFuZGxlTG9naW5TdWJtaXQsIGhhbmRsZUFkbWluU3VibWl0fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb2ZpbGVWYWxpZGF0ZSB9IGZyb20gJy4uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XHJcbmltcG9ydCB7YXV0aCwgc3RvcmUsIGRhdGFiYXNlfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IENsaWVudENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgZmlyc3ROYW1lOiAnbWF5b3InLFxyXG4gICAgICBsYXN0TmFtZTogJ2phbWVzJyxcclxuICAgICAgZW1haWw6ICdtYXlvd2FkYXZpZDEwMEBnbWFpbC5jb20nLFxyXG4gICAgICBwaG9uZU51bWJlcjogJzA5MDg3NTM2NjQzJywgXHJcbiAgICAgIGFkZHJlc3M6ICdhYnVsZSBmb2xpJyxcclxuICAgICAgcHJvZmlsZUltYWdlOiAnJyxcclxuICAgICAgZm9ybUVycm9yczoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZU51bWJlcjogJycsIFxyXG4gICAgICAgIGFkZHJlc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyPT57XHJcbiAgICAgICAgdXNlciAhPT0gbnVsbCAmJiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdQcm9maWxlJykuZG9jKHVzZXIudWlkKS5nZXQoKS50aGVuKGRvYz0+XHJcbiAgICAgICAgICBzZXREYXRhKGRvYy5kYXRhKCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXI9PntcclxuICAgICAgICAgICAgICB1c2VyICE9PSBudWxsICYmIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1JlcXVlc3RzJylcclxuICAgICAgICAgICAgICAud2hlcmUoXCJ1c2VySWRcIiwgXCI9PVwiLCB1c2VyLnVpZClcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb2MuZGF0YSgpIGlzIG5ldmVyIHVuZGVmaW5lZCBmb3IgcXVlcnkgZG9jIHNuYXBzaG90c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChkb2MuZGF0YSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRUcmFuc2FjdGlvbihkYXRhKTtcclxufSwgW10pO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgZGF0YSAhPT0gdW5kZWZpbmVkICYmIHNldFByb2ZpbGUoey4uLmRhdGEsIGZvcm1FcnJvcnN9KVxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuICAgIGNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbdGVtcG9yYXJ5SW1hZ2UsIHNldFRlbXBvcmFyeUltYWdlXT0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgICAgICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICAgICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlcyA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcclxuICAgICAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICAgICAgbGV0IEZpbGVTaXplID0gXCI1MDAwMDAwXCI7XHJcbiAgICAgICAgIGxldCBmaWx0ZXJlZEltYWdlU2l6ZT0gZmlsZVR5cGUgPT0gdHJ1ZSA/IHNlbGVjdGVkLnNpemUgPCBGaWxlU2l6ZSA6IHNldEVycm9yKFwiZmlsZSB0b28gbGFyZ2UgKjVtYiBtaW5pbXVtXCIpOyBcclxuICAgICAgICAgbGV0IGhvbGQgPSBmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICYmIChVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkKSk7IFxyXG4gICAgICAgICBob2xkICE9PSB1bmRlZmluZWQgJiYgc2V0VGVtcG9yYXJ5SW1hZ2UoaG9sZCk7XHJcbiAgICAgICAgICBpZihmaWx0ZXJlZEltYWdlU2l6ZSA9PSB0cnVlICl7XHJcbiAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGBwcm9maWxlaW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICAgICAgc3RvcmFnZVJlZi5wdXQoc2VsZWN0ZWQpLm9uKCdzdGF0ZV9jaGFuZ2VkJywgXHJcbiAgICAgICAgICAgIGFzeW5jIChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRQcm9ncmVzcyhuZXdQZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgfSwgIGFzeW5jIChlcnIpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0UHJvZmlsZUltYWdlKG5ld1VybCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGVjdGVkKTsgICBcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvZmlsZURldGFpbHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBcclxuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgIGxldCB7Zm9ybUVycm9yc30gPSB7Li4ucHJvZmlsZX1cclxuXHJcbiAgICBwcm9maWxlVmFsaWRhdGUobmFtZSwgdmFsdWUsIGZvcm1FcnJvcnMpO1xyXG4gICAgICByZXR1cm4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgIFtuYW1lXTogdmFsdWV9KSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge2ZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwaG9uZU51bWJlciwgXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgcHJvZmlsZUltYWdlfT0gcHJvZmlsZTtcclxuICAgIGRhdGFiYXNlLmNvbGxlY3Rpb24oJ1Byb2ZpbGUnKS5hZGQoe2ZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwaG9uZU51bWJlciwgXHJcbiAgICAgIGFkZHJlc3MsXHJcbiAgICAgIHByb2ZpbGVJbWFnZX0pXHJcbiAgfTsgXHJcbiAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQcmV2aWV3ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIHByb2ZpbGVJbWFnZX0pO1xyXG4gICAgc2V0Q291bnQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0cmFuc2FjdGlvbiwgc2V0VHJhbnNhY3Rpb24sIGhhbmRsZVByb2ZpbGVDaGFuZ2UsIGhhbmRsZVByb2ZpbGVQcmV2aWV3LCBoYW5kbGVQcm9maWxlU3VibWl0LCBwcm9maWxlLCBzZXRQcm9maWxlLCBzZXRUZW1wb3JhcnlJbWFnZSwgdGVtcG9yYXJ5SW1hZ2UsIHByb2ZpbGVEZXRhaWxzLCBwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZSwgY291bnQsIHNldENvdW50fX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NsaWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudENvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2FsbGVyeSwgbWVzc2FnZSwgb2ZmQmFjaywgY29udGFjdH0gZnJvbSBcIi4uLy4uL3N2Z1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0b3IvdmFsaWRhdGUnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2F1dGgsIHN0b3JlLCBkYXRhYmFzZSwgdGltZXN0YW1wfSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PntcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPVxyXG4gICAgICAgIHtjYXJ0b25zOiBcIjU1XCIsXHJcbiAgICAgICAgZGVsaXZlcnlMb2NhdGlvbnM6IFwibGFnb3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbnM6IFwidGhhbmsgeW91XCIsXHJcbiAgICAgICAgaXRlbXNXb3J0aDogXCI1MDAwXCIsXHJcbiAgICAgICAgcmVjZWl2ZXJGaXJzdE5hbWU6ICdtYXlvd2EnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIxOiAnMDgwODc1MzY2NDMnLFxyXG4gICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyOiAnMDgxMzA2MTQ2MTUnLFxyXG4gICAgICAgIHJlcXVlc3RJbWFnZXM6IFtdLFxyXG4gICAgICAgIHNlbmRlckZpcnN0TmFtZTogJ2pvbnknLFxyXG4gICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJzA4MTMwNjE0NjE1JyxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjI6ICcwODEzMDYxNDYxNScsXHJcbiAgICAgICAgdGFnTmFtZTogXCJjaGlzb21cIixcclxuICAgICAgICBvdGhlckl0ZW1zOiBmYWxzZSxcclxuICAgICAgICBmb3JtRXJyb3JzOiB7XHJcbiAgICAgICAgICAgIHNlbmRlckZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMTogJycsXHJcbiAgICAgICAgICAgIHNlbmRlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyRmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgcmVjZWl2ZXJQaG9uZU51bWJlcjE6ICcnLFxyXG4gICAgICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMjogJycsXHJcbiAgICAgICAgICAgIGNhcnRvbnM6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgICAgICAgICBkZWxpdmVyeUxvY2F0aW9uczogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogJycsXHJcbiAgICAgICAgICAgIGl0ZW1zV29ydGg6ICcnLFxyXG4gICAgICAgICAgICBvdGhlckl0ZW1zOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgIFxyXG5cclxuICAgIGNvbnN0W2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXh0cmFjdGVkUmVxdWVzdCwgc2V0RXh0cmFjdGVkUmVxdWVzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25Ub2tlbiwgc2V0U2Vzc2lvblRva2VuXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0aXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFt0ZW1wb3JhcnlJbWFnZSwgc2V0VGVtcG9yYXJ5SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlcXVlc3RJbWFnZXMsIHNldFJlcXVlc3RJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3VjY2Vzcywgc2V0UmVxdWVzdFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGlkfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSA9IHsuLi5pbnB1dH07XHJcbiAgICAgICAgICAgcmVxdWVzdFZhbGlkYXRlKGlkLCB2YWx1ZSwgZm9ybUVycm9ycyk7XHJcbiAgICAgICAgICAgY29uc3QgbmV3SW5wdXQgPSB7IC4uLmlucHV0LCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgcmV0dXJuIHNldElucHV0KG5ld0lucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9OyBcclxuICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZSk9PntcclxuICAgIGNvbnN0IHtuYW1lLCBjaGVja2VkfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbmV3SW5wdXQgPSB7Li4uaW5wdXQsIFtuYW1lXTogY2hlY2tlZH07XHJcbiAgICByZXR1cm4gc2V0SW5wdXQobmV3SW5wdXQpO1xyXG4gICB9IFxyXG4gICB1c2VFZmZlY3QgKCgpPT4ge1xyXG4gICAgcHJvZ3Jlc3MgPT0gMTAwICYmIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0UHJvZ3Jlc3MoMCk7XHJcbiAgIH0sIFtwcm9ncmVzc10pXHJcblxyXG4gICB1c2VFZmZlY3QgKCgpPT4ge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlcj0+e1xyXG4gICAgICB1c2VyICE9PSBudWxsIFxyXG4gICAgICAgIHNldFVzZXJJZCh1c2VyLnVpZClcclxuICAgIH0pXHJcbiAgIH0sIFtdKVxyXG5cclxuY29uc3QgcGhvdG9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgIFxyXG4gICBpZihlLnRhcmdldC5maWxlcyl7XHJcbiAgICBwcm9ncmVzcyAhPT0gMTAwICYmIHNldExvYWRpbmcodHJ1ZSkgXHJcbiAgICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgdHlwZXMgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ107XHJcbiAgIGxldCBmaWxlVHlwZSA9IHNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKTogc2V0RXJyb3IoXCJ1bnN1cHBvcnRlZCBpbWFnZSB0eXBlKiBhY2NlcHRlZCBpbWFnZSBqcGcvcG5nXCIpO1xyXG4gICAgICBsZXQgRmlsZVNpemUgPSBcIjUwMDAwMDBcIjtcclxuICAgICBsZXQgZmlsdGVyZWRJbWFnZVNpemU9IGZpbGVUeXBlID09IHRydWUgPyBzZWxlY3RlZC5zaXplIDwgRmlsZVNpemUgOiBzZXRFcnJvcihcImZpbGUgdG9vIGxhcmdlICo1bWIgbWluaW11bVwiKTsgXHJcbiAgICAgbGV0IHBlcmZlY3RTaXplID0gZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSAmJiAoVVJMLmNyZWF0ZU9iamVjdFVSTChzZWxlY3RlZCkpOyBcclxuICAgIGxldCByZXN0cnVjdHVyZVVybCA9IHtpbWFnZVNvdXJjZTogcGVyZmVjdFNpemV9XHJcbiAgICBwZXJmZWN0U2l6ZSAhPT0gdW5kZWZpbmVkICYmIHNldFRlbXBvcmFyeUltYWdlKFsuLi50ZW1wb3JhcnlJbWFnZSwgcmVzdHJ1Y3R1cmVVcmxdKTtcclxuICAgICAgaWYoZmlsdGVyZWRJbWFnZVNpemUgPT0gdHJ1ZSApe1xyXG4gICAgICBjb25zdCBzdG9yYWdlUmVmID0gc3RvcmUucmVmKGByZXF1ZXN0SW1hZ2VzLyR7c2VsZWN0ZWQubmFtZX1gKTtcclxuICAgICAgICBzdG9yYWdlUmVmLnB1dChzZWxlY3RlZCkub24oJ3N0YXRlX2NoYW5nZWQnLCBcclxuICAgICAgICBhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3UGVyY2VudGFnZSA9IGF3YWl0IChzbmFwLmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwLnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgIGF3YWl0IHNldFByb2dyZXNzKG5ld1BlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sICBhc3luYyAoZXJyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjbG91ZFVybCA9IGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcclxuICAgICAgICAgIHNldFJlcXVlc3RJbWFnZXMoWy4uLnJlcXVlc3RJbWFnZXMsIHtjbG91ZFVybH1dKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWQpOyAgIFxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc29sZS5sb2cocmVxdWVzdEltYWdlcyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgY2FydG9ucyxcclxuICAgICAgICBkZWxpdmVyeUxvY2F0aW9ucyxcclxuICAgICAgICBkZXNjcmlwdGlvbnMsXHJcbiAgICAgICAgaXRlbXNXb3J0aCxcclxuICAgICAgICByZWNlaXZlckZpcnN0TmFtZSxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMSxcclxuICAgICAgICByZWNlaXZlclBob25lTnVtYmVyMixcclxuICAgICAgICByZXF1ZXN0SW1hZ2VzLFxyXG4gICAgICAgIHNlbmRlckZpcnN0TmFtZSxcclxuICAgICAgICBzZW5kZXJQaG9uZU51bWJlcjEsXHJcbiAgICAgICAgc2VuZGVyUGhvbmVOdW1iZXIyLFxyXG4gICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgb3RoZXJJdGVtc30gPSBpbnB1dDtcclxuXHJcbiAgICAgICB1c2VySWQgIT09IG51bGwgJiYgZGF0YWJhc2UuY29sbGVjdGlvbignUmVxdWVzdHMnKS5hZGQoeyB1c2VySWQsIGNhcnRvbnMsIGRlbGl2ZXJ5TG9jYXRpb25zLCBkZXNjcmlwdGlvbnMsIGl0ZW1zV29ydGgsIHJlY2VpdmVyRmlyc3ROYW1lLCByZWNlaXZlclBob25lTnVtYmVyMSxcclxuICAgICAgICAgIHJlY2VpdmVyUGhvbmVOdW1iZXIyLCByZXF1ZXN0SW1hZ2VzLCBzZW5kZXJGaXJzdE5hbWUsIHNlbmRlclBob25lTnVtYmVyMSwgc2VuZGVyUGhvbmVOdW1iZXIyLCB0YWdOYW1lLCBvdGhlckl0ZW1zLCBjcmVhdGVkQXQ6IHRpbWVzdGFtcCgpfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YSAmJiAoc2V0UmVxdWVzdFN1Y2Nlc3ModHJ1ZSkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3RVcGRhdGUgPSBhc3luYyhlLCBpZCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIHNldElucHV0KC4uLmlucHV0LCByZXF1ZXN0SW1hZ2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1QcmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICBzZXRJbnB1dCh7Li4uaW5wdXQsIHJlcXVlc3RJbWFnZXN9KTtcclxuICAgICAgICBzZXRDb3VudChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IFtcclxuICAgICAgICB7Y29udGVudDogXCJjb250YWN0XCIgLCBpY29uOiBjb250YWN0KCksIHRpdGxlOiBcIkNvbnRhY3RcIiwgaWQ6IDEgfSxcclxuICAgICAgICB7Y29udGVudDogXCJnYWxsZXJ5XCIsIGljb246IGdhbGxlcnkoKSwgdGl0bGU6IFwiR2FsbGVyeVwiLCBpZDogMn0sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiU2hpcHBpbmdSZXF1ZXN0XCIsIGljb246IG9mZkJhY2soKSwgdGl0bGU6IFwiUmVxdWVzdFwiLCBpZDogM30sXHJcbiAgICAgICAge2NvbnRlbnQ6IFwiXCIsIGljb246IG1lc3NhZ2UoKSwgdGl0bGU6IFwiTWVzc2FnZVwiLCBpZDogNH1cclxuICAgIF1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVxdWVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpbnB1dCwgZXJyb3IsIGxvYWRpbmcsIHNldFJlcXVlc3RJbWFnZXMsIHJlcXVlc3RJbWFnZXMsIHJlcXVlc3RTdWNjZXNzLCBzZXRSZXF1ZXN0U3VjY2VzcywgaW5pdGlhbFN0YXRlLCBzZXRDb3VudCwgY291bnQsIHNldElucHV0LCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUNoZWNrLCB0ZW1wb3JhcnlJbWFnZSwgaGFuZGxlRm9ybVN1Ym1pdCwgaGFuZGxlRm9ybVByZXZpZXcsIHBob3RvQ2hhbmdlLCBzZWxlY3Rvciwgc2V0RXh0cmFjdGVkUmVxdWVzdCwgZXh0cmFjdGVkUmVxdWVzdCwgY29udGFjdHMsIHNldENvbnRhY3RzLCBoYW5kbGVSZXF1ZXN0VXBkYXRlLCBzZXNzaW9uVG9rZW4sIGlzTG9naW4sIHNldGlzTG9naW59fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvUmVxdWVzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDb250ZXh0UHJvdmlkZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
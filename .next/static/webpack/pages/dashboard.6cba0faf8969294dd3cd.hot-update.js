webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store, database, auth, timestamp, provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provider", function() { return provider; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");




var firebaseConfig = {
  apiKey: "AIzaSyACIDeiqQIHextjTi28NVDmh5hWHahuiNE",
  authDomain: "mayor-db13a.firebaseapp.com",
  databaseURL: "https://mayor-db13a.firebaseio.com",
  projectId: "mayor-db13a",
  storageBucket: "mayor-db13a.appspot.com",
  messagingSenderId: "22905502977",
  appId: "1:22905502977:web:248fd426a1ce4497336f00"
};
var firebaseApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app();
var database = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();

if (true) {
  database.enablePersistence()["catch"](function (err) {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log(err.code);
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log(err.code);
    }
  });
}

var store = firebaseApp.storage();
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth();
var timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.serverTimestamp;
var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZGF0YWJhc2UiLCJmaXJlc3RvcmUiLCJlbmFibGVQZXJzaXN0ZW5jZSIsImVyciIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwic3RvcmUiLCJzdG9yYWdlIiwiYXV0aCIsInRpbWVzdGFtcCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLDZCQUZPO0FBR25CQyxhQUFXLEVBQUUsb0NBSE07QUFJbkJDLFdBQVMsRUFBRSxhQUpRO0FBS25CQyxlQUFhLEVBQUUseUJBTEk7QUFNbkJDLG1CQUFpQixFQUFFLGFBTkE7QUFPbkJDLE9BQUssRUFBRTtBQVBZLENBQXZCO0FBVUUsSUFBTUMsV0FBVyxHQUFHLENBQUNDLG9EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZixHQUF3QkYsb0RBQVEsQ0FBQ0csYUFBVCxDQUF1QlosY0FBdkIsQ0FBeEIsR0FBZ0VTLG9EQUFRLENBQUNJLEdBQVQsRUFBcEY7QUFDQSxJQUFNQyxRQUFRLEdBQUdMLG9EQUFRLENBQUNNLFNBQVQsRUFBakI7O0FBQ0EsVUFBbUI7QUFDakJELFVBQVEsQ0FBQ0UsaUJBQVQsWUFDUyxVQUFTQyxHQUFULEVBQWM7QUFDakIsUUFBSUEsR0FBRyxDQUFDQyxJQUFKLElBQVkscUJBQWhCLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDQyxJQUFoQjtBQUNILEtBTEQsTUFLTyxJQUFJRCxHQUFHLENBQUNDLElBQUosSUFBWSxlQUFoQixFQUFpQztBQUNwQztBQUNBO0FBQ0E7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0MsSUFBaEI7QUFDSDtBQUNKLEdBYkg7QUFjQzs7QUFDSCxJQUFNRyxLQUFLLEdBQUdiLFdBQVcsQ0FBQ2MsT0FBWixFQUFkO0FBQ0EsSUFBTUMsSUFBSSxHQUFHZCxvREFBUSxDQUFDYyxJQUFULEVBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdmLG9EQUFRLENBQUNNLFNBQVQsQ0FBbUJVLFVBQW5CLENBQThCQyxlQUFoRDtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJbEIsb0RBQVEsQ0FBQ2MsSUFBVCxDQUFjSyxrQkFBbEIsRUFBakI7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNmNiYTBmYWY4OTY5Mjk0ZGQzY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBQ0lEZWlxUUlIZXh0alRpMjhOVkRtaDVoV0hhaHVpTkVcIixcclxuICAgIGF1dGhEb21haW46IFwibWF5b3ItZGIxM2EuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL21heW9yLWRiMTNhLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwibWF5b3ItZGIxM2FcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibWF5b3ItZGIxM2EuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIyOTA1NTAyOTc3XCIsXHJcbiAgICBhcHBJZDogXCIxOjIyOTA1NTAyOTc3OndlYjoyNDhmZDQyNmExY2U0NDk3MzM2ZjAwXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBmaXJlYmFzZUFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDpmaXJlYmFzZS5hcHAoKTtcclxuICBjb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gIGlmKHByb2Nlc3MuYnJvd3Nlcil7XHJcbiAgICBkYXRhYmFzZS5lbmFibGVQZXJzaXN0ZW5jZSgpXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGlmIChlcnIuY29kZSA9PSAnZmFpbGVkLXByZWNvbmRpdGlvbicpIHtcclxuICAgICAgICAgICAgICAvLyBNdWx0aXBsZSB0YWJzIG9wZW4sIHBlcnNpc3RlbmNlIGNhbiBvbmx5IGJlIGVuYWJsZWRcclxuICAgICAgICAgICAgICAvLyBpbiBvbmUgdGFiIGF0IGEgYSB0aW1lLlxyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT0gJ3VuaW1wbGVtZW50ZWQnKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFsbCBvZiB0aGVcclxuICAgICAgICAgICAgICAvLyBmZWF0dXJlcyByZXF1aXJlZCB0byBlbmFibGUgcGVyc2lzdGVuY2VcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuY29kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIGNvbnN0IHN0b3JlID0gZmlyZWJhc2VBcHAuc3RvcmFnZSgpO1xyXG4gIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG4gXHJcbiAgZXhwb3J0IHtzdG9yZSwgZGF0YWJhc2UsIGF1dGgsIHRpbWVzdGFtcCwgcHJvdmlkZXJ9OyAgXHJcbiAiXSwic291cmNlUm9vdCI6IiJ9
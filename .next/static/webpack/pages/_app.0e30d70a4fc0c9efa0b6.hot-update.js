webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: store, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");


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
var store = firebaseApp.storage();
var database = firebaseApp.database();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwic3RvcmUiLCJzdG9yYWdlIiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUsNkJBRk87QUFHbkJDLGFBQVcsRUFBRSxvQ0FITTtBQUluQkMsV0FBUyxFQUFFLGFBSlE7QUFLbkJDLGVBQWEsRUFBRSx5QkFMSTtBQU1uQkMsbUJBQWlCLEVBQUUsYUFOQTtBQU9uQkMsT0FBSyxFQUFFO0FBUFksQ0FBdkI7QUFVRSxJQUFNQyxXQUFXLEdBQUcsQ0FBQ0Msb0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFmLEdBQXdCRixvREFBUSxDQUFDRyxhQUFULENBQXVCWixjQUF2QixDQUF4QixHQUFnRVMsb0RBQVEsQ0FBQ0ksR0FBVCxFQUFwRjtBQUNBLElBQU1DLEtBQUssR0FBR04sV0FBVyxDQUFDTyxPQUFaLEVBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUdSLFdBQVcsQ0FBQ1EsUUFBWixFQUFqQjtBQUlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGUzMGQ3MGE0ZmMwYzllZmEwYjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QUNJRGVpcVFJSGV4dGpUaTI4TlZEbWg1aFdIYWh1aU5FXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIm1heW9yLWRiMTNhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9tYXlvci1kYjEzYS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcIm1heW9yLWRiMTNhXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcIm1heW9yLWRiMTNhLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMjkwNTUwMjk3N1wiLFxyXG4gICAgYXBwSWQ6IFwiMToyMjkwNTUwMjk3Nzp3ZWI6MjQ4ZmQ0MjZhMWNlNDQ5NzMzNmYwMFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlyZWJhc2VBcHAgPSAhZmlyZWJhc2UuYXBwcy5sZW5ndGggPyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6ZmlyZWJhc2UuYXBwKCk7XHJcbiAgY29uc3Qgc3RvcmUgPSBmaXJlYmFzZUFwcC5zdG9yYWdlKCk7XHJcbiAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZUFwcC5kYXRhYmFzZSgpO1xyXG5cclxuXHJcblxyXG4gIGV4cG9ydCB7c3RvcmUsIGRhdGFiYXNlfTsiXSwic291cmNlUm9vdCI6IiJ9
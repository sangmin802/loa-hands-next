webpackHotUpdate_N_E("pages/userInfo/[name]",{

/***/ "./pages/userInfo/[name].tsx":
/*!***********************************!*\
  !*** ./pages/userInfo/[name].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_UserInfo_Container_UserInfoContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserInfo/Container/UserInfoContainer */ "./components/UserInfo/Container/UserInfoContainer.tsx");



var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\pages\\userInfo\\[name].tsx",
    _this = undefined,
    _s = $RefreshSig$();






var UserInfoRoute = function UserInfoRoute() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var name = router.query.name;
  var isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.isLoading;
  }); // 자꾸 서버에서도 작동되는것 같아, 서버환경이라면 미작동으로 함

  if (false) {}
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\uC720\uC800\uC815\uBCF4 - ".concat(name),
      isLoading: isLoading,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserInfo_Container_UserInfoContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(UserInfoRoute, "fSEV8rn3pvpGYad9dc68RaBZBaE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = UserInfoRoute;
/* harmony default export */ __webpack_exports__["default"] = (UserInfoRoute);

var _c;

$RefreshReg$(_c, "UserInfoRoute");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckluZm8vW25hbWVdLnRzeCJdLCJuYW1lcyI6WyJVc2VySW5mb1JvdXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDBCLE1BRW5CQyxJQUZtQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbkJELElBRm1CO0FBRzFCLE1BQU1FLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBdUJBLEtBQUssQ0FBQ0YsU0FBN0I7QUFBQSxHQUFELENBQTdCLENBSDBCLENBSzFCOztBQUNBLGFBQWtDO0FBRWxDLHNCQUNFO0FBQUEsY0FDQ0YsSUFBSSxpQkFDSCxxRUFBQywwREFBRDtBQUFRLFdBQUssdUNBQVlBLElBQVosQ0FBYjtBQUFpQyxlQUFTLEVBQUVFLFNBQTVDO0FBQUEsNkJBQ0UscUVBQUMsd0ZBQUQ7QUFBbUIsWUFBSSxFQUFFRjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBU0QsQ0FqQkQ7O0dBQU1ILGE7VUFDV0UscUQsRUFFR0ksdUQ7OztLQUhkTixhO0FBb0JTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VySW5mby9bbmFtZV0uNmNkZTU0MDA0NmE5Y2VmNGExNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgVXNlckluZm9Db250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mby9Db250YWluZXIvVXNlckluZm9Db250YWluZXInXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuXHJcbmNvbnN0IFVzZXJJbmZvUm91dGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge25hbWV9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSA6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuaXNMb2FkaW5nKTtcclxuXHJcbiAgLy8g7J6Q6r64IOyEnOuyhOyXkOyEnOuPhCDsnpHrj5nrkJjripTqsoMg6rCZ7JWELCDshJzrsoTtmZjqsr3snbTrnbzrqbQg66+47J6R64+Z7Jy866GcIO2VqFxyXG4gIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7bmFtZSAmJlxyXG4gICAgICA8TGF5b3V0IHRpdGxlPXtg7Jyg7KCA7KCV67O0IC0gJHtuYW1lfWB9IGlzTG9hZGluZz17aXNMb2FkaW5nfT5cclxuICAgICAgICA8VXNlckluZm9Db250YWluZXIgbmFtZT17bmFtZSBhcyBzdHJpbmd9Lz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm9Sb3V0ZTsiXSwic291cmNlUm9vdCI6IiJ9
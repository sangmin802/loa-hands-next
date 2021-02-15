webpackHotUpdate_N_E("pages/userInfo/[name]",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Root_Container_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Root/Container/HeaderContainer */ "./components/Root/Container/HeaderContainer.tsx");
/* harmony import */ var _Shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@Shared/LoadingSpinner */ "./components/@Shared/LoadingSpinner.tsx");



var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\components\\Layout.tsx",
    _this = undefined;

 // import { useRouter } from 'next/router'





var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      isLoading = _ref.isLoading,
      isIndex = _ref.isIndex;
  // const router = useRouter();
  var isLoadingStyle1 = isLoading ? 'height100vh' : null;
  var isLoadingStyle2 = isLoading ? 'loadingBg zIndex99' : 'displayNone'; // if(isIndex && typeof window !== 'undefined'){
  //   (function(l) {
  //     if (l.search[1] === '/' ) {
  //       var decoded = l.search.slice(1).split('&').map(function(s) { 
  //         return s.replace(/~and~/g, '&')
  //       }).join('?');
  //       router.push(decoded + l.hash)
  //     }
  //   }(window.location))
  // }
  // useEffect(() => {
  //   (function(l) {
  //     if (l.search[1] === '/' ) {
  //       var decoded = l.search.slice(1).split('&').map(function(s) { 
  //         return s.replace(/~and~/g, '&')
  //       }).join('?');
  //       router.push(decoded + l.hash)
  //       // window.history.replaceState(null, null,
  //       //   decoded + l.hash
  //       // );
  //     }
  //   }(window.location))
  // })

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App ".concat(isLoadingStyle1),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isLoadingStyle: isLoadingStyle2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "innerApp",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Root_Container_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "AppWrap",
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJpc0xvYWRpbmciLCJpc0luZGV4IiwiaXNMb2FkaW5nU3R5bGUxIiwiaXNMb2FkaW5nU3R5bGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BSzNCO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0o7QUFDQSxNQUFNQyxlQUFlLEdBQUdGLFNBQVMsR0FBRyxhQUFILEdBQW1CLElBQXBEO0FBQ0EsTUFBTUcsZUFBZSxHQUFHSCxTQUFTLEdBQUcsb0JBQUgsR0FBMEIsYUFBM0QsQ0FISSxDQUtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFEO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsZ0JBQVNHLGVBQVQsQ0FBZDtBQUFBLDhCQUNFLHFFQUFDLDhEQUFEO0FBQWdCLHNCQUFjLEVBQUVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsb0JBQ0dMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBbUJELENBdkREOztLQUFNRCxNO0FBeURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VySW5mby9bbmFtZV0uMWE3MGUwMTU5NWYxMTM5NzM5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL1Jvb3QvQ29udGFpbmVyL0hlYWRlckNvbnRhaW5lcidcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4vQFNoYXJlZC9Mb2FkaW5nU3Bpbm5lcidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxuICB0aXRsZT8gOiBTdHJpbmdcclxuICBpc0xvYWRpbmc/IDogQm9vbGVhblxyXG4gIGlzSW5kZXg/IDogQm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRpdGxlLFxyXG4gIGlzTG9hZGluZyxcclxuICBpc0luZGV4XHJcbn0pID0+IHtcclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0xvYWRpbmdTdHlsZTEgPSBpc0xvYWRpbmcgPyAnaGVpZ2h0MTAwdmgnIDogbnVsbDtcclxuICBjb25zdCBpc0xvYWRpbmdTdHlsZTIgPSBpc0xvYWRpbmcgPyAnbG9hZGluZ0JnIHpJbmRleDk5JyA6ICdkaXNwbGF5Tm9uZSc7XHJcblxyXG4gIC8vIGlmKGlzSW5kZXggJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gIC8vICAgKGZ1bmN0aW9uKGwpIHtcclxuICAvLyAgICAgaWYgKGwuc2VhcmNoWzFdID09PSAnLycgKSB7XHJcbiAgLy8gICAgICAgdmFyIGRlY29kZWQgPSBsLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChmdW5jdGlvbihzKSB7IFxyXG4gIC8vICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvfmFuZH4vZywgJyYnKVxyXG4gIC8vICAgICAgIH0pLmpvaW4oJz8nKTtcclxuXHJcbiAgLy8gICAgICAgcm91dGVyLnB1c2goZGVjb2RlZCArIGwuaGFzaClcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSh3aW5kb3cubG9jYXRpb24pKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIChmdW5jdGlvbihsKSB7XHJcbiAgLy8gICAgIGlmIChsLnNlYXJjaFsxXSA9PT0gJy8nICkge1xyXG4gIC8vICAgICAgIHZhciBkZWNvZGVkID0gbC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5tYXAoZnVuY3Rpb24ocykgeyBcclxuICAvLyAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL35hbmR+L2csICcmJylcclxuICAvLyAgICAgICB9KS5qb2luKCc/Jyk7XHJcblxyXG4gIC8vICAgICAgIHJvdXRlci5wdXNoKGRlY29kZWQgKyBsLmhhc2gpXHJcbiAgLy8gICAgICAgLy8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsXHJcbiAgLy8gICAgICAgLy8gICBkZWNvZGVkICsgbC5oYXNoXHJcbiAgLy8gICAgICAgLy8gKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSh3aW5kb3cubG9jYXRpb24pKVxyXG4gIC8vIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICB7Lyoge2lzSW5kZXggPyA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvanMvcmVmcmVzaEZpbmRSb3V0ZS5qc1wiIC8+IDogbnVsbH0gKi99XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BBcHAgJHtpc0xvYWRpbmdTdHlsZTF9YH0+XHJcbiAgICAgICAgPExvYWRpbmdTcGlubmVyIGlzTG9hZGluZ1N0eWxlPXtpc0xvYWRpbmdTdHlsZTJ9Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyQXBwXCI+XHJcbiAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFdyYXBcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
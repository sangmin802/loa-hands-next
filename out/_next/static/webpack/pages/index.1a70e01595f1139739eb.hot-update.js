webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJpc0xvYWRpbmciLCJpc0luZGV4IiwiaXNMb2FkaW5nU3R5bGUxIiwiaXNMb2FkaW5nU3R5bGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BSzNCO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0o7QUFDQSxNQUFNQyxlQUFlLEdBQUdGLFNBQVMsR0FBRyxhQUFILEdBQW1CLElBQXBEO0FBQ0EsTUFBTUcsZUFBZSxHQUFHSCxTQUFTLEdBQUcsb0JBQUgsR0FBMEIsYUFBM0QsQ0FISSxDQUtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFEO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsZ0JBQVNHLGVBQVQsQ0FBZDtBQUFBLDhCQUNFLHFFQUFDLDhEQUFEO0FBQWdCLHNCQUFjLEVBQUVDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsb0JBQ0dMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBbUJELENBdkREOztLQUFNRCxNO0FBeURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYTcwZTAxNTk1ZjExMzk3MzllYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vUm9vdC9Db250YWluZXIvSGVhZGVyQ29udGFpbmVyJ1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi9AU2hhcmVkL0xvYWRpbmdTcGlubmVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPyA6IFN0cmluZ1xyXG4gIGlzTG9hZGluZz8gOiBCb29sZWFuXHJcbiAgaXNJbmRleD8gOiBCb29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgdGl0bGUsXHJcbiAgaXNMb2FkaW5nLFxyXG4gIGlzSW5kZXhcclxufSkgPT4ge1xyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlzTG9hZGluZ1N0eWxlMSA9IGlzTG9hZGluZyA/ICdoZWlnaHQxMDB2aCcgOiBudWxsO1xyXG4gIGNvbnN0IGlzTG9hZGluZ1N0eWxlMiA9IGlzTG9hZGluZyA/ICdsb2FkaW5nQmcgekluZGV4OTknIDogJ2Rpc3BsYXlOb25lJztcclxuXHJcbiAgLy8gaWYoaXNJbmRleCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgLy8gICAoZnVuY3Rpb24obCkge1xyXG4gIC8vICAgICBpZiAobC5zZWFyY2hbMV0gPT09ICcvJyApIHtcclxuICAvLyAgICAgICB2YXIgZGVjb2RlZCA9IGwuc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykubWFwKGZ1bmN0aW9uKHMpIHsgXHJcbiAgLy8gICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9+YW5kfi9nLCAnJicpXHJcbiAgLy8gICAgICAgfSkuam9pbignPycpO1xyXG5cclxuICAvLyAgICAgICByb3V0ZXIucHVzaChkZWNvZGVkICsgbC5oYXNoKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KHdpbmRvdy5sb2NhdGlvbikpXHJcbiAgLy8gfVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgKGZ1bmN0aW9uKGwpIHtcclxuICAvLyAgICAgaWYgKGwuc2VhcmNoWzFdID09PSAnLycgKSB7XHJcbiAgLy8gICAgICAgdmFyIGRlY29kZWQgPSBsLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChmdW5jdGlvbihzKSB7IFxyXG4gIC8vICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvfmFuZH4vZywgJyYnKVxyXG4gIC8vICAgICAgIH0pLmpvaW4oJz8nKTtcclxuXHJcbiAgLy8gICAgICAgcm91dGVyLnB1c2goZGVjb2RlZCArIGwuaGFzaClcclxuICAvLyAgICAgICAvLyB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCxcclxuICAvLyAgICAgICAvLyAgIGRlY29kZWQgKyBsLmhhc2hcclxuICAvLyAgICAgICAvLyApO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KHdpbmRvdy5sb2NhdGlvbikpXHJcbiAgLy8gfSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIHsvKiB7aXNJbmRleCA/IDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9qcy9yZWZyZXNoRmluZFJvdXRlLmpzXCIgLz4gOiBudWxsfSAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YEFwcCAke2lzTG9hZGluZ1N0eWxlMX1gfT5cclxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgaXNMb2FkaW5nU3R5bGU9e2lzTG9hZGluZ1N0eWxlMn0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJBcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXJDb250YWluZXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwV3JhcFwiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9
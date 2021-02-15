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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Root_Container_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Root/Container/HeaderContainer */ "./components/Root/Container/HeaderContainer.tsx");
/* harmony import */ var _Shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@Shared/LoadingSpinner */ "./components/@Shared/LoadingSpinner.tsx");



var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\components\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title,
      isLoading = _ref.isLoading,
      isIndex = _ref.isIndex;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var isLoadingStyle1 = isLoading ? 'height100vh' : null;
  var isLoadingStyle2 = isLoading ? 'loadingBg zIndex99' : 'displayNone';

  if (isIndex) {
    (function (l) {
      if (l.search[1] === '/') {
        var decoded = l.search.slice(1).split('&').map(function (s) {
          return s.replace(/~and~/g, '&');
        }).join('?');
        router.push(decoded + l.hash);
      }
    })(window.location);
  } // useEffect(() => {
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


  console.log(isIndex);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App ".concat(isLoadingStyle1),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isLoadingStyle: isLoadingStyle2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "innerApp",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Root_Container_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "AppWrap",
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Layout, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJpc0xvYWRpbmciLCJpc0luZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNMb2FkaW5nU3R5bGUxIiwiaXNMb2FkaW5nU3R5bGUyIiwibCIsInNlYXJjaCIsImRlY29kZWQiLCJzbGljZSIsInNwbGl0IiwibWFwIiwicyIsInJlcGxhY2UiLCJqb2luIiwicHVzaCIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BSzNCO0FBQUE7O0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0osU0FBUyxHQUFHLGFBQUgsR0FBbUIsSUFBcEQ7QUFDQSxNQUFNSyxlQUFlLEdBQUdMLFNBQVMsR0FBRyxvQkFBSCxHQUEwQixhQUEzRDs7QUFFQSxNQUFHQyxPQUFILEVBQVc7QUFDUixlQUFTSyxDQUFULEVBQVk7QUFDWCxVQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULE1BQWdCLEdBQXBCLEVBQTBCO0FBQ3hCLFlBQUlDLE9BQU8sR0FBR0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QkMsR0FBN0IsQ0FBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pELGlCQUFPQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxRQUFWLEVBQW9CLEdBQXBCLENBQVA7QUFDRCxTQUZhLEVBRVhDLElBRlcsQ0FFTixHQUZNLENBQWQ7QUFJQVosY0FBTSxDQUFDYSxJQUFQLENBQVlQLE9BQU8sR0FBR0YsQ0FBQyxDQUFDVSxJQUF4QjtBQUNEO0FBQ0YsS0FSQSxFQVFDQyxNQUFNLENBQUNDLFFBUlIsQ0FBRDtBQVNELEdBZkcsQ0FpQko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE9BQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUY7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxnQkFBU0ssZUFBVCxDQUFkO0FBQUEsOEJBQ0UscUVBQUMsOERBQUQ7QUFBZ0Isc0JBQWMsRUFBRUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxvQkFDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFtQkQsQ0F4REQ7O0dBQU1ELE07VUFNV00scUQ7OztLQU5YTixNO0FBMERTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VySW5mby9bbmFtZV0uMmMxMmE0MzRhMmI2ZjFlMWU1ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL1Jvb3QvQ29udGFpbmVyL0hlYWRlckNvbnRhaW5lcidcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4vQFNoYXJlZC9Mb2FkaW5nU3Bpbm5lcidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxuICB0aXRsZT8gOiBTdHJpbmdcclxuICBpc0xvYWRpbmc/IDogQm9vbGVhblxyXG4gIGlzSW5kZXg/IDogQm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRpdGxlLFxyXG4gIGlzTG9hZGluZyxcclxuICBpc0luZGV4XHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0xvYWRpbmdTdHlsZTEgPSBpc0xvYWRpbmcgPyAnaGVpZ2h0MTAwdmgnIDogbnVsbDtcclxuICBjb25zdCBpc0xvYWRpbmdTdHlsZTIgPSBpc0xvYWRpbmcgPyAnbG9hZGluZ0JnIHpJbmRleDk5JyA6ICdkaXNwbGF5Tm9uZSc7XHJcblxyXG4gIGlmKGlzSW5kZXgpe1xyXG4gICAgKGZ1bmN0aW9uKGwpIHtcclxuICAgICAgaWYgKGwuc2VhcmNoWzFdID09PSAnLycgKSB7XHJcbiAgICAgICAgdmFyIGRlY29kZWQgPSBsLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChmdW5jdGlvbihzKSB7IFxyXG4gICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvfmFuZH4vZywgJyYnKVxyXG4gICAgICAgIH0pLmpvaW4oJz8nKTtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goZGVjb2RlZCArIGwuaGFzaClcclxuICAgICAgfVxyXG4gICAgfSh3aW5kb3cubG9jYXRpb24pKVxyXG4gIH1cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIChmdW5jdGlvbihsKSB7XHJcbiAgLy8gICAgIGlmIChsLnNlYXJjaFsxXSA9PT0gJy8nICkge1xyXG4gIC8vICAgICAgIHZhciBkZWNvZGVkID0gbC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5tYXAoZnVuY3Rpb24ocykgeyBcclxuICAvLyAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL35hbmR+L2csICcmJylcclxuICAvLyAgICAgICB9KS5qb2luKCc/Jyk7XHJcblxyXG4gIC8vICAgICAgIHJvdXRlci5wdXNoKGRlY29kZWQgKyBsLmhhc2gpXHJcbiAgLy8gICAgICAgLy8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsXHJcbiAgLy8gICAgICAgLy8gICBkZWNvZGVkICsgbC5oYXNoXHJcbiAgLy8gICAgICAgLy8gKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSh3aW5kb3cubG9jYXRpb24pKVxyXG4gIC8vIH0pXHJcbiAgY29uc29sZS5sb2coaXNJbmRleClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIHsvKiB7aXNJbmRleCA/IDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9qcy9yZWZyZXNoRmluZFJvdXRlLmpzXCIgLz4gOiBudWxsfSAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YEFwcCAke2lzTG9hZGluZ1N0eWxlMX1gfT5cclxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgaXNMb2FkaW5nU3R5bGU9e2lzTG9hZGluZ1N0eWxlMn0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJBcHBcIj5cclxuICAgICAgICAgIDxIZWFkZXJDb250YWluZXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwV3JhcFwiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9
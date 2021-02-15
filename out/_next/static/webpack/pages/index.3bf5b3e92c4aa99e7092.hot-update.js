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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Shared_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isLoadingStyle: isLoadingStyle2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "innerApp",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Root_Container_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJpc0xvYWRpbmciLCJpc0luZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNMb2FkaW5nU3R5bGUxIiwiaXNMb2FkaW5nU3R5bGUyIiwibCIsInNlYXJjaCIsImRlY29kZWQiLCJzbGljZSIsInNwbGl0IiwibWFwIiwicyIsInJlcGxhY2UiLCJqb2luIiwicHVzaCIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsT0FLM0I7QUFBQTs7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7QUFDSixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHSixTQUFTLEdBQUcsYUFBSCxHQUFtQixJQUFwRDtBQUNBLE1BQU1LLGVBQWUsR0FBR0wsU0FBUyxHQUFHLG9CQUFILEdBQTBCLGFBQTNEOztBQUVBLE1BQUdDLE9BQUgsRUFBVztBQUNSLGVBQVNLLENBQVQsRUFBWTtBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsTUFBZ0IsR0FBcEIsRUFBMEI7QUFDeEIsWUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBVCxDQUFlLENBQWYsRUFBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixDQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDekQsaUJBQU9BLENBQUMsQ0FBQ0MsT0FBRixDQUFVLFFBQVYsRUFBb0IsR0FBcEIsQ0FBUDtBQUNELFNBRmEsRUFFWEMsSUFGVyxDQUVOLEdBRk0sQ0FBZDtBQUlBWixjQUFNLENBQUNhLElBQVAsQ0FBWVAsT0FBTyxHQUFHRixDQUFDLENBQUNVLElBQXhCO0FBQ0Q7QUFDRixLQVJBLEVBUUNDLE1BQU0sQ0FBQ0MsUUFSUixDQUFEO0FBU0QsR0FmRyxDQWlCSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFuQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFBSyxlQUFTLGdCQUFTSyxlQUFULENBQWQ7QUFBQSw4QkFDRSxxRUFBQyw4REFBRDtBQUFnQixzQkFBYyxFQUFFQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLG9CQUNHUDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQW1CRCxDQXZERDs7R0FBTUQsTTtVQU1XTSxxRDs7O0tBTlhOLE07QUF5RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiZjViM2U5MmM0YWE5OWU3MDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9Sb290L0NvbnRhaW5lci9IZWFkZXJDb250YWluZXInXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuL0BTaGFyZWQvTG9hZGluZ1NwaW5uZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/IDogU3RyaW5nXHJcbiAgaXNMb2FkaW5nPyA6IEJvb2xlYW5cclxuICBpc0luZGV4PyA6IEJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTGF5b3V0IDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB0aXRsZSxcclxuICBpc0xvYWRpbmcsXHJcbiAgaXNJbmRleFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNMb2FkaW5nU3R5bGUxID0gaXNMb2FkaW5nID8gJ2hlaWdodDEwMHZoJyA6IG51bGw7XHJcbiAgY29uc3QgaXNMb2FkaW5nU3R5bGUyID0gaXNMb2FkaW5nID8gJ2xvYWRpbmdCZyB6SW5kZXg5OScgOiAnZGlzcGxheU5vbmUnO1xyXG5cclxuICBpZihpc0luZGV4KXtcclxuICAgIChmdW5jdGlvbihsKSB7XHJcbiAgICAgIGlmIChsLnNlYXJjaFsxXSA9PT0gJy8nICkge1xyXG4gICAgICAgIHZhciBkZWNvZGVkID0gbC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5tYXAoZnVuY3Rpb24ocykgeyBcclxuICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL35hbmR+L2csICcmJylcclxuICAgICAgICB9KS5qb2luKCc/Jyk7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKGRlY29kZWQgKyBsLmhhc2gpXHJcbiAgICAgIH1cclxuICAgIH0od2luZG93LmxvY2F0aW9uKSlcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAoZnVuY3Rpb24obCkge1xyXG4gIC8vICAgICBpZiAobC5zZWFyY2hbMV0gPT09ICcvJyApIHtcclxuICAvLyAgICAgICB2YXIgZGVjb2RlZCA9IGwuc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykubWFwKGZ1bmN0aW9uKHMpIHsgXHJcbiAgLy8gICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9+YW5kfi9nLCAnJicpXHJcbiAgLy8gICAgICAgfSkuam9pbignPycpO1xyXG5cclxuICAvLyAgICAgICByb3V0ZXIucHVzaChkZWNvZGVkICsgbC5oYXNoKVxyXG4gIC8vICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLFxyXG4gIC8vICAgICAgIC8vICAgZGVjb2RlZCArIGwuaGFzaFxyXG4gIC8vICAgICAgIC8vICk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0od2luZG93LmxvY2F0aW9uKSlcclxuICAvLyB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgey8qIHtpc0luZGV4ID8gPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL2pzL3JlZnJlc2hGaW5kUm91dGUuanNcIiAvPiA6IG51bGx9ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgQXBwICR7aXNMb2FkaW5nU3R5bGUxfWB9PlxyXG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciBpc0xvYWRpbmdTdHlsZT17aXNMb2FkaW5nU3R5bGUyfS8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckFwcFwiPlxyXG4gICAgICAgICAgPEhlYWRlckNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBXcmFwXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utility */ "./Utility.tsx");
/* harmony import */ var _components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Root/Container/HomeContainer */ "./components/Root/Container/HomeContainer.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions.ts");


var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Index = function Index() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return {
      homeData: state.homeData,
      isLoading: state.isLoading
    };
  }, function (left, right) {
    if (_Utility__WEBPACK_IMPORTED_MODULE_3__["default"].compareObj(left, right)) return true;
    return false;
  }),
      homeData = _useSelector.homeData,
      isLoading = _useSelector.isLoading; // 이유는 모르겠는데, SetHomeData할 때 로딩토글 같이꺼주니깐 로딩토글이 한템포 먼저꺼짐
  // 그래서, 돔 완성되고 꺼지도록 함


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    (function (l) {
      if (l.search[1] === '/') {
        var decoded = l.search.slice(1).split('&').map(function (s) {
          return s.replace(/~and~/g, '&');
        }).join('?');
        window.history.replaceState(null, null, decoded + l.hash);
      }
    })(window.location);

    dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["loadingToggle"](false));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'Loa Hands',
    isLoading: isLoading,
    children: homeData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      homeData: homeData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
}; // pre-rendering을 위해, homeData를 받아올 때 서버에서는 DOMParser를 인식하지 못함
//  왜냐, 정적생성을 할 때에는 DOM을 구성하기 전에 서버에서 실행되기 때문
//  따라서, useEffect로 일단 돔이 한번 생성되도록 하고, 그 이후에 homeData를 DOMParser로 가공
// 1. node.js express(던파유저랭크)에서 DOMParser가 작동되는지 확인해보자
//      ㅇㅇ DOMParser 없음 따라서 jsdom 모듈을 사용하는데, child_proecss를 찾을수 없다 에러가 뜸
//      알아보니, Next.js는 번들링과정을 클라이언트 한번, 서버 한번 총 2번 하는데 jsdom모듈은 서버에서 사용하는 모듈이라, 해당 모듈에서 사용하는 외부모듈들은
//      클라이언트에서 인식하지 못하는 모듈이라 발생하는 에러였다. 실제로, 터미널에 출력되는부분을 보면 서버에서 작동하는 번들링은 잘 진행되지만, 클라이언트쪽 번들링만 에러가 발생함을 알 수 있었다
//      커스텀 웹팩으로 클라이언트에서 번들링을 진행할 때, 해당 모듈들을 실행시키지 않도록 하니 정상작동되었다.


_s(Index, "DYcDtsNhZbjUU+YmZk36esNx3Ds=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJob21lRGF0YSIsImlzTG9hZGluZyIsImxlZnQiLCJyaWdodCIsIl8iLCJjb21wYXJlT2JqIiwidXNlRWZmZWN0IiwibCIsInNlYXJjaCIsImRlY29kZWQiLCJzbGljZSIsInNwbGl0IiwibWFwIiwicyIsInJlcGxhY2UiLCJqb2luIiwid2luZG93IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImhhc2giLCJsb2NhdGlvbiIsIkFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUVZQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUF3QjtBQUNoRUMsY0FBUSxFQUFHRCxLQUFLLENBQUNDLFFBRCtDO0FBRWhFQyxlQUFTLEVBQUdGLEtBQUssQ0FBQ0U7QUFGOEMsS0FBeEI7QUFBQSxHQUFELEVBR3JDLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNuQixRQUFHQyxnREFBQyxDQUFDQyxVQUFGLENBQWFILElBQWIsRUFBbUJDLEtBQW5CLENBQUgsRUFBOEIsT0FBTyxJQUFQO0FBQzlCLFdBQU8sS0FBUDtBQUNELEdBTndDLENBRnZCO0FBQUEsTUFFWEgsUUFGVyxnQkFFWEEsUUFGVztBQUFBLE1BRURDLFNBRkMsZ0JBRURBLFNBRkMsRUFVbEI7QUFDQTs7O0FBQ0FLLHlEQUFTLENBQUMsWUFBTTtBQUNiLGVBQVNDLENBQVQsRUFBWTtBQUNYLFVBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsTUFBZ0IsR0FBcEIsRUFBMEI7QUFDeEIsWUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBVCxDQUFlLENBQWYsRUFBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixDQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDekQsaUJBQU9BLENBQUMsQ0FBQ0MsT0FBRixDQUFVLFFBQVYsRUFBb0IsR0FBcEIsQ0FBUDtBQUNELFNBRmEsRUFFWEMsSUFGVyxDQUVOLEdBRk0sQ0FBZDtBQUdBQyxjQUFNLENBQUNDLE9BQVAsQ0FBZUMsWUFBZixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUNFVCxPQUFPLEdBQUdGLENBQUMsQ0FBQ1ksSUFEZDtBQUdEO0FBQ0YsS0FUQSxFQVNDSCxNQUFNLENBQUNJLFFBVFIsQ0FBRDs7QUFXQXhCLFlBQVEsQ0FBQ3lCLHNEQUFBLENBQXNCLEtBQXRCLENBQUQsQ0FBUjtBQUNELEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxzQkFDRSxxRUFBQywwREFBRDtBQUFRLFNBQUssRUFBRSxXQUFmO0FBQTRCLGFBQVMsRUFBRXBCLFNBQXZDO0FBQUEsY0FDR0QsUUFBUSxpQkFDUCxxRUFBQyxnRkFBRDtBQUFlLGNBQVEsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBbENELEMsQ0FvQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBNUNNTCxLO1VBQ2FFLHVELEVBQ2FDLHVEOzs7S0FGMUJILEs7O0FBcURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMGExY2E3ODY0MTcyYmJmZDE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEFQSSBmcm9tICcuLi9BUEknXG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgXyBmcm9tICcuLi9VdGlsaXR5J1xuXG5pbXBvcnQgSG9tZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1Jvb3QvQ29udGFpbmVyL0hvbWVDb250YWluZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHtob21lRGF0YSwgaXNMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSA6IFJvb3RTdGF0ZSkgPT4gKHtcbiAgICBob21lRGF0YSA6IHN0YXRlLmhvbWVEYXRhLFxuICAgIGlzTG9hZGluZyA6IHN0YXRlLmlzTG9hZGluZ1xuICB9KSwgKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgaWYoXy5jb21wYXJlT2JqKGxlZnQsIHJpZ2h0KSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAvLyDsnbTsnKDripQg66qo66W06rKg64qU642wLCBTZXRIb21lRGF0Ye2VoCDrlYwg66Gc65Sp7Yag6riAIOqwmeydtOq6vOyjvOuLiOq5kCDroZzrlKnthqDquIDsnbQg7ZWc7YWc7Y+sIOuovOyggOq6vOynkFxuICAvLyDqt7jrnpjshJwsIOuPlCDsmYTshLHrkJjqs6Ag6rq87KeA64+E66GdIO2VqFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChmdW5jdGlvbihsKSB7XG4gICAgICBpZiAobC5zZWFyY2hbMV0gPT09ICcvJyApIHtcbiAgICAgICAgdmFyIGRlY29kZWQgPSBsLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLm1hcChmdW5jdGlvbihzKSB7IFxuICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL35hbmR+L2csICcmJylcbiAgICAgICAgfSkuam9pbignPycpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCxcbiAgICAgICAgICBkZWNvZGVkICsgbC5oYXNoXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSh3aW5kb3cubG9jYXRpb24pKVxuXG4gICAgZGlzcGF0Y2goQWN0aW9ucy5sb2FkaW5nVG9nZ2xlKGZhbHNlKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXsnTG9hIEhhbmRzJ30gaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAge2hvbWVEYXRhICYmIFxuICAgICAgICA8SG9tZUNvbXBvbmVudCBob21lRGF0YT17aG9tZURhdGF9IC8+XG4gICAgICB9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuLy8gcHJlLXJlbmRlcmluZ+ydhCDsnITtlbQsIGhvbWVEYXRh66W8IOuwm+yVhOyYrCDrlYwg7ISc67KE7JeQ7ISc64qUIERPTVBhcnNlcuulvCDsnbjsi53tlZjsp4Ag66q77ZWoXG4vLyAg7Jmc64OQLCDsoJXsoIHsg53shLHsnYQg7ZWgIOuVjOyXkOuKlCBET03snYQg6rWs7ISx7ZWY6riwIOyghOyXkCDshJzrsoTsl5DshJwg7Iuk7ZaJ65CY6riwIOuVjOusuFxuLy8gIOuUsOudvOyEnCwgdXNlRWZmZWN066GcIOydvOuLqCDrj5TsnbQg7ZWc67KIIOyDneyEseuQmOuPhOuhnSDtlZjqs6AsIOq3uCDsnbTtm4Tsl5AgaG9tZURhdGHrpbwgRE9NUGFyc2Vy66GcIOqwgOqztVxuXG4vLyAxLiBub2RlLmpzIGV4cHJlc3Mo642Y7YyM7Jyg7KCA656t7YGsKeyXkOyEnCBET01QYXJzZXLqsIAg7J6R64+Z65CY64qU7KeAIO2ZleyduO2VtOuztOyekFxuLy8gICAgICDjhYfjhYcgRE9NUGFyc2VyIOyXhuydjCDrlLDrnbzshJwganNkb20g66qo65OI7J2EIOyCrOyaqe2VmOuKlOuNsCwgY2hpbGRfcHJvZWNzc+ulvCDssL7snYTsiJgg7JeG64ukIOyXkOufrOqwgCDrnLhcbi8vICAgICAg7JWM7JWE67O064uILCBOZXh0Lmpz64qUIOuyiOuTpOungeqzvOygleydhCDtgbTrnbzsnbTslrjtirgg7ZWc67KILCDshJzrsoQg7ZWc67KIIOy0nSAy67KIIO2VmOuKlOuNsCBqc2RvbeuqqOuTiOydgCDshJzrsoTsl5DshJwg7IKs7Jqp7ZWY64qUIOuqqOuTiOydtOudvCwg7ZW064u5IOuqqOuTiOyXkOyEnCDsgqzsmqntlZjripQg7Jm467aA66qo65OI65Ok7J2AXG4vLyAgICAgIO2BtOudvOydtOyWuO2KuOyXkOyEnCDsnbjsi53tlZjsp4Ag66q77ZWY64qUIOuqqOuTiOydtOudvCDrsJzsg53tlZjripQg7JeQ65+s7JiA64ukLiDsi6TsoJzroZwsIO2EsOuvuOuEkOyXkCDstpzroKXrkJjripTrtoDrtoTsnYQg67O066m0IOyEnOuyhOyXkOyEnCDsnpHrj5ntlZjripQg67KI65Ok66eB7J2AIOyemCDsp4TtlonrkJjsp4Drp4wsIO2BtOudvOydtOyWuO2KuOyqvSDrsojrk6Trp4Hrp4wg7JeQ65+s6rCAIOuwnOyDne2VqOydhCDslYwg7IiYIOyeiOyXiOuLpFxuLy8gICAgICDsu6TsiqTthYAg7Ju57Yyp7Jy866GcIO2BtOudvOydtOyWuO2KuOyXkOyEnCDrsojrk6Trp4HsnYQg7KeE7ZaJ7ZWgIOuVjCwg7ZW064u5IOuqqOuTiOuTpOydhCDsi6Ttlonsi5ztgqTsp4Ag7JWK64+E66GdIO2VmOuLiCDsoJXsg4HsnpHrj5nrkJjsl4jri6QuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA6IEdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcbiAgYXN5bmMgKHtzdG9yZSwgcHJldmlld30pID0+IHtcbiAgICBjb25zdCBob21lRGF0YSA9IGF3YWl0IEpTT04uc3RyaW5naWZ5KGF3YWl0IEFQSS5nZXRIb21lRGF0YSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZSA6ICdTRVRfSE9NRV9EQVRBJywgbG9hZGluZ1BvcCA6IGZhbHNlLCBob21lRGF0YX0pXG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9
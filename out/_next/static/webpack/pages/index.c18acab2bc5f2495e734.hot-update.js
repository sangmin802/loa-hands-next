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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Index = function Index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
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
      isLoading = _useSelector.isLoading;

  console.log(router);

  if ( true && router.asPath !== '/') {
    (function (l) {
      if (l.search[1] === '/') {
        var decoded = l.search.slice(1).split('&').map(function (s) {
          return s.replace(/~and~/g, '&');
        }).join('?');
        router.push(decoded + l.hash);
      }
    })(window.location);

    return null;
  } // 이유는 모르겠는데, SetHomeData할 때 로딩토글 같이꺼주니깐 로딩토글이 한템포 먼저꺼짐
  // 그래서, 돔 완성되고 꺼지도록 함


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["loadingToggle"](false));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'Loa Hands',
    isLoading: isLoading,
    isIndex: true,
    children: homeData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      homeData: homeData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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


_s(Index, "v2W84SYDiHG7IuT7O/TBHrbDrnE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJob21lRGF0YSIsImlzTG9hZGluZyIsImxlZnQiLCJyaWdodCIsIl8iLCJjb21wYXJlT2JqIiwiY29uc29sZSIsImxvZyIsImFzUGF0aCIsImwiLCJzZWFyY2giLCJkZWNvZGVkIiwic2xpY2UiLCJzcGxpdCIsIm1hcCIsInMiLCJyZXBsYWNlIiwiam9pbiIsInB1c2giLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRmtCLHFCQUdZQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUF3QjtBQUNoRUMsY0FBUSxFQUFHRCxLQUFLLENBQUNDLFFBRCtDO0FBRWhFQyxlQUFTLEVBQUdGLEtBQUssQ0FBQ0U7QUFGOEMsS0FBeEI7QUFBQSxHQUFELEVBR3JDLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNuQixRQUFHQyxnREFBQyxDQUFDQyxVQUFGLENBQWFILElBQWIsRUFBbUJDLEtBQW5CLENBQUgsRUFBOEIsT0FBTyxJQUFQO0FBQzlCLFdBQU8sS0FBUDtBQUNELEdBTndDLENBSHZCO0FBQUEsTUFHWEgsUUFIVyxnQkFHWEEsUUFIVztBQUFBLE1BR0RDLFNBSEMsZ0JBR0RBLFNBSEM7O0FBV2xCSyxTQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjs7QUFDQSxNQUNFLFNBQ0FBLE1BQU0sQ0FBQ2MsTUFBUCxLQUFrQixHQUZwQixFQUdDO0FBQ0UsZUFBU0MsQ0FBVCxFQUFZO0FBQ1gsVUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxNQUFnQixHQUFwQixFQUEwQjtBQUN4QixZQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUFULENBQWUsQ0FBZixFQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLEdBQTdCLENBQWlDLFVBQVNDLENBQVQsRUFBWTtBQUN6RCxpQkFBT0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsUUFBVixFQUFvQixHQUFwQixDQUFQO0FBQ0QsU0FGYSxFQUVYQyxJQUZXLENBRU4sR0FGTSxDQUFkO0FBSUF2QixjQUFNLENBQUN3QixJQUFQLENBQVlQLE9BQU8sR0FBR0YsQ0FBQyxDQUFDVSxJQUF4QjtBQUNEO0FBQ0YsS0FSQSxFQVFDQyxNQUFNLENBQUNDLFFBUlIsQ0FBRDs7QUFTQSxXQUFPLElBQVA7QUFDRCxHQTFCaUIsQ0E0QmxCO0FBQ0E7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZDFCLFlBQVEsQ0FBQzJCLHNEQUFBLENBQXNCLEtBQXRCLENBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSxxRUFBQywwREFBRDtBQUFRLFNBQUssRUFBRSxXQUFmO0FBQTRCLGFBQVMsRUFBRXRCLFNBQXZDO0FBQWtELFdBQU8sRUFBRSxJQUEzRDtBQUFBLGNBQ0dELFFBQVEsaUJBQ1AscUVBQUMsZ0ZBQUQ7QUFBZSxjQUFRLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXpDRCxDLENBMkNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQW5ETVAsSztVQUNXRSxxRCxFQUNFRSx1RCxFQUNhQyx1RDs7O0tBSDFCTCxLOztBQTREU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzE4YWNhYjJiYzVmMjQ5NWU3MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBBUEkgZnJvbSAnLi4vQVBJJ1xuaW1wb3J0IHtSb290U3RhdGV9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IF8gZnJvbSAnLi4vVXRpbGl0eSdcblxuaW1wb3J0IEhvbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Sb290L0NvbnRhaW5lci9Ib21lQ29udGFpbmVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qge2hvbWVEYXRhLCBpc0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlIDogUm9vdFN0YXRlKSA9PiAoe1xuICAgIGhvbWVEYXRhIDogc3RhdGUuaG9tZURhdGEsXG4gICAgaXNMb2FkaW5nIDogc3RhdGUuaXNMb2FkaW5nXG4gIH0pLCAobGVmdCwgcmlnaHQpID0+IHtcbiAgICBpZihfLmNvbXBhcmVPYmoobGVmdCwgcmlnaHQpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHJvdXRlcilcbiAgaWYoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICByb3V0ZXIuYXNQYXRoICE9PSAnLydcbiAgKXtcbiAgICAoZnVuY3Rpb24obCkge1xuICAgICAgaWYgKGwuc2VhcmNoWzFdID09PSAnLycgKSB7XG4gICAgICAgIHZhciBkZWNvZGVkID0gbC5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKS5tYXAoZnVuY3Rpb24ocykgeyBcbiAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9+YW5kfi9nLCAnJicpXG4gICAgICAgIH0pLmpvaW4oJz8nKTtcblxuICAgICAgICByb3V0ZXIucHVzaChkZWNvZGVkICsgbC5oYXNoKVxuICAgICAgfVxuICAgIH0od2luZG93LmxvY2F0aW9uKSlcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIOydtOycoOuKlCDrqqjrpbTqsqDripTrjbAsIFNldEhvbWVEYXRh7ZWgIOuVjCDroZzrlKnthqDquIAg6rCZ7J206rq87KO864uI6rmQIOuhnOuUqe2GoOq4gOydtCDtlZzthZztj6wg66i87KCA6rq87KeQXG4gIC8vIOq3uOuemOyEnCwg64+UIOyZhOyEseuQmOqzoCDqurzsp4Drj4TroZ0g7ZWoXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goQWN0aW9ucy5sb2FkaW5nVG9nZ2xlKGZhbHNlKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXsnTG9hIEhhbmRzJ30gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGlzSW5kZXg9e3RydWV9PlxuICAgICAge2hvbWVEYXRhICYmIFxuICAgICAgICA8SG9tZUNvbXBvbmVudCBob21lRGF0YT17aG9tZURhdGF9IC8+XG4gICAgICB9XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuLy8gcHJlLXJlbmRlcmluZ+ydhCDsnITtlbQsIGhvbWVEYXRh66W8IOuwm+yVhOyYrCDrlYwg7ISc67KE7JeQ7ISc64qUIERPTVBhcnNlcuulvCDsnbjsi53tlZjsp4Ag66q77ZWoXG4vLyAg7Jmc64OQLCDsoJXsoIHsg53shLHsnYQg7ZWgIOuVjOyXkOuKlCBET03snYQg6rWs7ISx7ZWY6riwIOyghOyXkCDshJzrsoTsl5DshJwg7Iuk7ZaJ65CY6riwIOuVjOusuFxuLy8gIOuUsOudvOyEnCwgdXNlRWZmZWN066GcIOydvOuLqCDrj5TsnbQg7ZWc67KIIOyDneyEseuQmOuPhOuhnSDtlZjqs6AsIOq3uCDsnbTtm4Tsl5AgaG9tZURhdGHrpbwgRE9NUGFyc2Vy66GcIOqwgOqztVxuXG4vLyAxLiBub2RlLmpzIGV4cHJlc3Mo642Y7YyM7Jyg7KCA656t7YGsKeyXkOyEnCBET01QYXJzZXLqsIAg7J6R64+Z65CY64qU7KeAIO2ZleyduO2VtOuztOyekFxuLy8gICAgICDjhYfjhYcgRE9NUGFyc2VyIOyXhuydjCDrlLDrnbzshJwganNkb20g66qo65OI7J2EIOyCrOyaqe2VmOuKlOuNsCwgY2hpbGRfcHJvZWNzc+ulvCDssL7snYTsiJgg7JeG64ukIOyXkOufrOqwgCDrnLhcbi8vICAgICAg7JWM7JWE67O064uILCBOZXh0Lmpz64qUIOuyiOuTpOungeqzvOygleydhCDtgbTrnbzsnbTslrjtirgg7ZWc67KILCDshJzrsoQg7ZWc67KIIOy0nSAy67KIIO2VmOuKlOuNsCBqc2RvbeuqqOuTiOydgCDshJzrsoTsl5DshJwg7IKs7Jqp7ZWY64qUIOuqqOuTiOydtOudvCwg7ZW064u5IOuqqOuTiOyXkOyEnCDsgqzsmqntlZjripQg7Jm467aA66qo65OI65Ok7J2AXG4vLyAgICAgIO2BtOudvOydtOyWuO2KuOyXkOyEnCDsnbjsi53tlZjsp4Ag66q77ZWY64qUIOuqqOuTiOydtOudvCDrsJzsg53tlZjripQg7JeQ65+s7JiA64ukLiDsi6TsoJzroZwsIO2EsOuvuOuEkOyXkCDstpzroKXrkJjripTrtoDrtoTsnYQg67O066m0IOyEnOuyhOyXkOyEnCDsnpHrj5ntlZjripQg67KI65Ok66eB7J2AIOyemCDsp4TtlonrkJjsp4Drp4wsIO2BtOudvOydtOyWuO2KuOyqvSDrsojrk6Trp4Hrp4wg7JeQ65+s6rCAIOuwnOyDne2VqOydhCDslYwg7IiYIOyeiOyXiOuLpFxuLy8gICAgICDsu6TsiqTthYAg7Ju57Yyp7Jy866GcIO2BtOudvOydtOyWuO2KuOyXkOyEnCDrsojrk6Trp4HsnYQg7KeE7ZaJ7ZWgIOuVjCwg7ZW064u5IOuqqOuTiOuTpOydhCDsi6Ttlonsi5ztgqTsp4Ag7JWK64+E66GdIO2VmOuLiCDsoJXsg4HsnpHrj5nrkJjsl4jri6QuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA6IEdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcbiAgYXN5bmMgKHtzdG9yZSwgcHJldmlld30pID0+IHtcbiAgICBjb25zdCBob21lRGF0YSA9IGF3YWl0IEpTT04uc3RyaW5naWZ5KGF3YWl0IEFQSS5nZXRIb21lRGF0YSgpKTtcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZSA6ICdTRVRfSE9NRV9EQVRBJywgbG9hZGluZ1BvcCA6IGZhbHNlLCBob21lRGF0YX0pXG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9
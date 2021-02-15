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
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_6__["loadingToggle"](false));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'Loa Hands',
    isLoading: isLoading,
    children: homeData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      homeData: homeData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJob21lRGF0YSIsImlzTG9hZGluZyIsImxlZnQiLCJyaWdodCIsIl8iLCJjb21wYXJlT2JqIiwidXNlRWZmZWN0IiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRVlDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQXdCO0FBQ2hFQyxjQUFRLEVBQUdELEtBQUssQ0FBQ0MsUUFEK0M7QUFFaEVDLGVBQVMsRUFBR0YsS0FBSyxDQUFDRTtBQUY4QyxLQUF4QjtBQUFBLEdBQUQsRUFHckMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ25CLFFBQUdDLGdEQUFDLENBQUNDLFVBQUYsQ0FBYUgsSUFBYixFQUFtQkMsS0FBbkIsQ0FBSCxFQUE4QixPQUFPLElBQVA7QUFDOUIsV0FBTyxLQUFQO0FBQ0QsR0FOd0MsQ0FGdkI7QUFBQSxNQUVYSCxRQUZXLGdCQUVYQSxRQUZXO0FBQUEsTUFFREMsU0FGQyxnQkFFREEsU0FGQyxFQVVsQjtBQUNBOzs7QUFDQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQ1csc0RBQUEsQ0FBc0IsS0FBdEIsQ0FBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFLFdBQWY7QUFBNEIsYUFBUyxFQUFFTixTQUF2QztBQUFBLGNBQ0dELFFBQVEsaUJBQ1AscUVBQUMsZ0ZBQUQ7QUFBZSxjQUFRLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXZCRCxDLENBeUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQWpDTUwsSztVQUNhRSx1RCxFQUNhQyx1RDs7O0tBRjFCSCxLOztBQTBDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDlkZTIzMjFkYjQ4ODNiMDkxZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBBUEkgZnJvbSAnLi4vQVBJJ1xuaW1wb3J0IHtSb290U3RhdGV9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IF8gZnJvbSAnLi4vVXRpbGl0eSdcblxuaW1wb3J0IEhvbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Sb290L0NvbnRhaW5lci9Ib21lQ29udGFpbmVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7aG9tZURhdGEsIGlzTG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUgOiBSb290U3RhdGUpID0+ICh7XG4gICAgaG9tZURhdGEgOiBzdGF0ZS5ob21lRGF0YSxcbiAgICBpc0xvYWRpbmcgOiBzdGF0ZS5pc0xvYWRpbmdcbiAgfSksIChsZWZ0LCByaWdodCkgPT4ge1xuICAgIGlmKF8uY29tcGFyZU9iaihsZWZ0LCByaWdodCkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8g7J207Jyg64qUIOuqqOultOqyoOuKlOuNsCwgU2V0SG9tZURhdGHtlaAg65WMIOuhnOuUqe2GoOq4gCDqsJnsnbTqurzso7zri4jquZAg66Gc65Sp7Yag6riA7J20IO2VnO2FnO2PrCDrqLzsoIDqurzsp5BcbiAgLy8g6re4656Y7IScLCDrj5Qg7JmE7ISx65CY6rOgIOq6vOyngOuPhOuhnSDtlahcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChBY3Rpb25zLmxvYWRpbmdUb2dnbGUoZmFsc2UpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9eydMb2EgSGFuZHMnfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICB7aG9tZURhdGEgJiYgXG4gICAgICAgIDxIb21lQ29tcG9uZW50IGhvbWVEYXRhPXtob21lRGF0YX0gLz5cbiAgICAgIH1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyBwcmUtcmVuZGVyaW5n7J2EIOychO2VtCwgaG9tZURhdGHrpbwg67Cb7JWE7JisIOuVjCDshJzrsoTsl5DshJzripQgRE9NUGFyc2Vy66W8IOyduOyLne2VmOyngCDrqrvtlahcbi8vICDsmZzrg5AsIOygleyggeyDneyEseydhCDtlaAg65WM7JeQ64qUIERPTeydhCDqtazshLHtlZjquLAg7KCE7JeQIOyEnOuyhOyXkOyEnCDsi6TtlonrkJjquLAg65WM66y4XG4vLyAg65Sw65287IScLCB1c2VFZmZlY3TroZwg7J2864uoIOuPlOydtCDtlZzrsogg7IOd7ISx65CY64+E66GdIO2VmOqzoCwg6re4IOydtO2bhOyXkCBob21lRGF0YeulvCBET01QYXJzZXLroZwg6rCA6rO1XG5cbi8vIDEuIG5vZGUuanMgZXhwcmVzcyjrjZjtjIzsnKDsoIDrnq3tgawp7JeQ7IScIERPTVBhcnNlcuqwgCDsnpHrj5nrkJjripTsp4Ag7ZmV7J247ZW067O07J6QXG4vLyAgICAgIOOFh+OFhyBET01QYXJzZXIg7JeG7J2MIOuUsOudvOyEnCBqc2RvbSDrqqjrk4jsnYQg7IKs7Jqp7ZWY64qU642wLCBjaGlsZF9wcm9lY3Nz66W8IOywvuydhOyImCDsl4bri6Qg7JeQ65+s6rCAIOucuFxuLy8gICAgICDslYzslYTrs7Tri4gsIE5leHQuanPripQg67KI65Ok66eB6rO87KCV7J2EIO2BtOudvOydtOyWuO2KuCDtlZzrsogsIOyEnOuyhCDtlZzrsogg7LSdIDLrsogg7ZWY64qU642wIGpzZG9t66qo65OI7J2AIOyEnOuyhOyXkOyEnCDsgqzsmqntlZjripQg66qo65OI7J206528LCDtlbTri7kg66qo65OI7JeQ7IScIOyCrOyaqe2VmOuKlCDsmbjrtoDrqqjrk4jrk6TsnYBcbi8vICAgICAg7YG065287J207Ja47Yq47JeQ7IScIOyduOyLne2VmOyngCDrqrvtlZjripQg66qo65OI7J206528IOuwnOyDne2VmOuKlCDsl5Drn6zsmIDri6QuIOyLpOygnOuhnCwg7YSw66+464SQ7JeQIOy2nOugpeuQmOuKlOu2gOu2hOydhCDrs7TrqbQg7ISc67KE7JeQ7IScIOyekeuPme2VmOuKlCDrsojrk6Trp4HsnYAg7J6YIOynhO2WieuQmOyngOunjCwg7YG065287J207Ja47Yq47Kq9IOuyiOuTpOungeunjCDsl5Drn6zqsIAg67Cc7IOd7ZWo7J2EIOyVjCDsiJgg7J6I7JeI64ukXG4vLyAgICAgIOy7pOyKpO2FgCDsm7ntjKnsnLzroZwg7YG065287J207Ja47Yq47JeQ7IScIOuyiOuTpOungeydhCDsp4TtlontlaAg65WMLCDtlbTri7kg66qo65OI65Ok7J2EIOyLpO2WieyLnO2CpOyngCDslYrrj4TroZ0g7ZWY64uIIOygleyDgeyekeuPmeuQmOyXiOuLpC5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzIDogR2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKFxuICBhc3luYyAoe3N0b3JlLCBwcmV2aWV3fSkgPT4ge1xuICAgIGNvbnN0IGhvbWVEYXRhID0gYXdhaXQgSlNPTi5zdHJpbmdpZnkoYXdhaXQgQVBJLmdldEhvbWVEYXRhKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlIDogJ1NFVF9IT01FX0RBVEEnLCBsb2FkaW5nUG9wIDogZmFsc2UsIGhvbWVEYXRhfSlcbiAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utility */ "./Utility.tsx");
/* harmony import */ var _components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Root/Container/HomeContainer */ "./components/Root/Container/HomeContainer.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions.ts");


var _jsxFileName = "D:\\IamDeveloper\\\uD3EC\uD3F4\\my-loa-next\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Index = function Index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      homeData: state.homeData,
      isLoading: state.isLoading
    };
  }, function (left, right) {
    if (_Utility__WEBPACK_IMPORTED_MODULE_4__["default"].compareObj(left, right)) return true;
    return false;
  }),
      homeData = _useSelector.homeData,
      isLoading = _useSelector.isLoading; // 이유는 모르겠는데, SetHomeData할 때 로딩토글 같이꺼주니깐 로딩토글이 한템포 먼저꺼짐
  // 그래서, 돔 완성되고 꺼지도록 함


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_7__["loadingToggle"](false));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Loa Hands',
    isLoading: isLoading,
    children: homeData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Root_Container_HomeContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      homeData: homeData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJob21lRGF0YSIsImlzTG9hZGluZyIsImxlZnQiLCJyaWdodCIsIl8iLCJjb21wYXJlT2JqIiwidXNlRWZmZWN0IiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZrQixxQkFHWUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBd0I7QUFDaEVDLGNBQVEsRUFBR0QsS0FBSyxDQUFDQyxRQUQrQztBQUVoRUMsZUFBUyxFQUFHRixLQUFLLENBQUNFO0FBRjhDLEtBQXhCO0FBQUEsR0FBRCxFQUdyQyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbkIsUUFBR0MsZ0RBQUMsQ0FBQ0MsVUFBRixDQUFhSCxJQUFiLEVBQW1CQyxLQUFuQixDQUFILEVBQThCLE9BQU8sSUFBUDtBQUM5QixXQUFPLEtBQVA7QUFDRCxHQU53QyxDQUh2QjtBQUFBLE1BR1hILFFBSFcsZ0JBR1hBLFFBSFc7QUFBQSxNQUdEQyxTQUhDLGdCQUdEQSxTQUhDLEVBV2xCO0FBQ0E7OztBQUNBSyx5REFBUyxDQUFDLFlBQU07QUFDZFYsWUFBUSxDQUFDVyxzREFBQSxDQUFzQixLQUF0QixDQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUUsV0FBZjtBQUE0QixhQUFTLEVBQUVOLFNBQXZDO0FBQUEsY0FDR0QsUUFBUSxpQkFDUCxxRUFBQyxnRkFBRDtBQUFlLGNBQVEsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBeEJELEMsQ0EwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBbENNUCxLO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ2FDLHVEOzs7S0FIMUJMLEs7O0FBMkNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMjFhYWExZDQxMWQ3MmRkMTdiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQVBJIGZyb20gJy4uL0FQSSdcbmltcG9ydCB7Um9vdFN0YXRlfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCBfIGZyb20gJy4uL1V0aWxpdHknXG5cbmltcG9ydCBIb21lQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUm9vdC9Db250YWluZXIvSG9tZUNvbnRhaW5lcidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHtob21lRGF0YSwgaXNMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSA6IFJvb3RTdGF0ZSkgPT4gKHtcbiAgICBob21lRGF0YSA6IHN0YXRlLmhvbWVEYXRhLFxuICAgIGlzTG9hZGluZyA6IHN0YXRlLmlzTG9hZGluZ1xuICB9KSwgKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgaWYoXy5jb21wYXJlT2JqKGxlZnQsIHJpZ2h0KSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAvLyDsnbTsnKDripQg66qo66W06rKg64qU642wLCBTZXRIb21lRGF0Ye2VoCDrlYwg66Gc65Sp7Yag6riAIOqwmeydtOq6vOyjvOuLiOq5kCDroZzrlKnthqDquIDsnbQg7ZWc7YWc7Y+sIOuovOyggOq6vOynkFxuICAvLyDqt7jrnpjshJwsIOuPlCDsmYTshLHrkJjqs6Ag6rq87KeA64+E66GdIO2VqFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKEFjdGlvbnMubG9hZGluZ1RvZ2dsZShmYWxzZSkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17J0xvYSBIYW5kcyd9IGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgIHtob21lRGF0YSAmJiBcbiAgICAgICAgPEhvbWVDb21wb25lbnQgaG9tZURhdGE9e2hvbWVEYXRhfSAvPlxuICAgICAgfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbi8vIHByZS1yZW5kZXJpbmfsnYQg7JyE7ZW0LCBob21lRGF0YeulvCDrsJvslYTsmKwg65WMIOyEnOuyhOyXkOyEnOuKlCBET01QYXJzZXLrpbwg7J247Iud7ZWY7KeAIOuqu+2VqFxuLy8gIOyZnOuDkCwg7KCV7KCB7IOd7ISx7J2EIO2VoCDrlYzsl5DripQgRE9N7J2EIOq1rOyEse2VmOq4sCDsoITsl5Ag7ISc67KE7JeQ7IScIOyLpO2WieuQmOq4sCDrlYzrrLhcbi8vICDrlLDrnbzshJwsIHVzZUVmZmVjdOuhnCDsnbzri6gg64+U7J20IO2VnOuyiCDsg53shLHrkJjrj4TroZ0g7ZWY6rOgLCDqt7gg7J207ZuE7JeQIGhvbWVEYXRh66W8IERPTVBhcnNlcuuhnCDqsIDqs7VcblxuLy8gMS4gbm9kZS5qcyBleHByZXNzKOuNmO2MjOycoOyggOuere2BrCnsl5DshJwgRE9NUGFyc2Vy6rCAIOyekeuPmeuQmOuKlOyngCDtmZXsnbjtlbTrs7TsnpBcbi8vICAgICAg44WH44WHIERPTVBhcnNlciDsl4bsnYwg65Sw65287IScIGpzZG9tIOuqqOuTiOydhCDsgqzsmqntlZjripTrjbAsIGNoaWxkX3Byb2Vjc3Prpbwg7LC+7J2E7IiYIOyXhuuLpCDsl5Drn6zqsIAg65y4XG4vLyAgICAgIOyVjOyVhOuztOuLiCwgTmV4dC5qc+uKlCDrsojrk6Trp4Hqs7zsoJXsnYQg7YG065287J207Ja47Yq4IO2VnOuyiCwg7ISc67KEIO2VnOuyiCDstJ0gMuuyiCDtlZjripTrjbAganNkb23rqqjrk4jsnYAg7ISc67KE7JeQ7IScIOyCrOyaqe2VmOuKlCDrqqjrk4jsnbTrnbwsIO2VtOuLuSDrqqjrk4jsl5DshJwg7IKs7Jqp7ZWY64qUIOyZuOu2gOuqqOuTiOuTpOydgFxuLy8gICAgICDtgbTrnbzsnbTslrjtirjsl5DshJwg7J247Iud7ZWY7KeAIOuqu+2VmOuKlCDrqqjrk4jsnbTrnbwg67Cc7IOd7ZWY64qUIOyXkOufrOyYgOuLpC4g7Iuk7KCc66GcLCDthLDrr7jrhJDsl5Ag7Lac66Cl65CY64qU67aA67aE7J2EIOuztOuptCDshJzrsoTsl5DshJwg7J6R64+Z7ZWY64qUIOuyiOuTpOungeydgCDsnpgg7KeE7ZaJ65CY7KeA66eMLCDtgbTrnbzsnbTslrjtirjsqr0g67KI65Ok66eB66eMIOyXkOufrOqwgCDrsJzsg53tlajsnYQg7JWMIOyImCDsnojsl4jri6Rcbi8vICAgICAg7Luk7Iqk7YWAIOybue2MqeycvOuhnCDtgbTrnbzsnbTslrjtirjsl5DshJwg67KI65Ok66eB7J2EIOynhO2Wie2VoCDrlYwsIO2VtOuLuSDrqqjrk4jrk6TsnYQg7Iuk7ZaJ7Iuc7YKk7KeAIOyViuuPhOuhnSDtlZjri4gg7KCV7IOB7J6R64+Z65CY7JeI64ukLlxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgOiBHZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoXG4gIGFzeW5jICh7c3RvcmUsIHByZXZpZXd9KSA9PiB7XG4gICAgY29uc3QgaG9tZURhdGEgPSBhd2FpdCBKU09OLnN0cmluZ2lmeShhd2FpdCBBUEkuZ2V0SG9tZURhdGEoKSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goe3R5cGUgOiAnU0VUX0hPTUVfREFUQScsIGxvYWRpbmdQb3AgOiBmYWxzZSwgaG9tZURhdGF9KVxuICB9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();





var useSpeakerDatamanager = function useSpeakerDatamanager() {
  _s();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_0__.default, {
    isLoading: true,
    speakerList: []
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      dispatch = _useReducer[1]; //useReducer(method,initialValue)


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    new Promise(function (resolve) {
      setTimeout(function () {
        // to delay and show loading..
        resolve();
      }, 1000);
    }).then(function () {
      dispatch({
        //using dispatch to set action type, it will invoke 'speakersReducer'
        type: 'setSpeakerList',
        data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.default // passs the filtered data & update state 'speakerList'

      });
    });
    return function () {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading: isLoading,
    speakerList: speakerList,
    dispatch: dispatch
  };
};

_s(useSpeakerDatamanager, "wWwoWucQoWnmKTfymnGSU6194dg=");

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDatamanager);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YW1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiaXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJ0eXBlIiwiZGF0YSIsInNwZWFrZXJEYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBQUEsb0JBQ1dDLGlEQUFVLENBQUNDLHFEQUFELEVBQWtCO0FBQ3ZFQyxhQUFTLEVBQUUsSUFENEQ7QUFFdkVDLGVBQVcsRUFBRTtBQUYwRCxHQUFsQixDQURyQjtBQUFBO0FBQUEsTUFDM0JELFNBRDJCLGdCQUMzQkEsU0FEMkI7QUFBQSxNQUNoQkMsV0FEZ0IsZ0JBQ2hCQSxXQURnQjtBQUFBLE1BQ0RDLFFBREMsbUJBSWpDOzs7QUFFSEMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFFM0JDLGdCQUFVLENBQUMsWUFBWTtBQUFFO0FBQ3JCRCxlQUFPO0FBQ1YsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUlILEtBTkQsRUFNR0UsSUFOSCxDQU1RLFlBQU07QUFFVkwsY0FBUSxDQUFDO0FBQUU7QUFDUE0sWUFBSSxFQUFFLGdCQUREO0FBRUxDLFlBQUksRUFBRUMsaURBRkQsQ0FFYzs7QUFGZCxPQUFELENBQVI7QUFJSCxLQVpEO0FBY0EsV0FBTyxZQUFNO0FBQ1RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSCxLQUZEO0FBR0gsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQW9CQSxTQUFPO0FBQUNaLGFBQVMsRUFBVEEsU0FBRDtBQUFZQyxlQUFXLEVBQVhBLFdBQVo7QUFBeUJDLFlBQVEsRUFBUkE7QUFBekIsR0FBUDtBQUVDLENBNUJEOztHQUFNTCxxQjs7QUE4Qk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjUwYzE1M2RiZGIyNzBkMWRhMDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3BlYWtlcnNSZWR1Y2VyIGZyb20gXCIuL3NwZWFrZXJzUmVkdWNlclwiO1xyXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YW1hbmFnZXIgPSAoKSA9PiB7XHJcbmNvbnN0IFt7IGlzTG9hZGluZywgc3BlYWtlckxpc3QgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgIHNwZWFrZXJMaXN0OiBbXVxyXG59KSAvL3VzZVJlZHVjZXIobWV0aG9kLGluaXRpYWxWYWx1ZSlcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gdG8gZGVsYXkgYW5kIHNob3cgbG9hZGluZy4uXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyAvL3VzaW5nIGRpc3BhdGNoIHRvIHNldCBhY3Rpb24gdHlwZSwgaXQgd2lsbCBpbnZva2UgJ3NwZWFrZXJzUmVkdWNlcidcclxuICAgICAgICAgICAgdHlwZTogJ3NldFNwZWFrZXJMaXN0JyxcclxuICAgICAgICAgICAgZGF0YTogc3BlYWtlckRhdGEsIC8vIHBhc3NzIHRoZSBmaWx0ZXJlZCBkYXRhICYgdXBkYXRlIHN0YXRlICdzcGVha2VyTGlzdCdcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcclxuICAgIH07XHJcbn0sIFtdKTtcclxuXHJcbnJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZGlzcGF0Y2h9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YW1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
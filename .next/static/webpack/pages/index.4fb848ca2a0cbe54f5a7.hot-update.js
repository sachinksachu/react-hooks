self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_1183_Hooks_hooks_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_1183_Hooks_hooks_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var speakersReducer = function speakersReducer(state, action) {
  switch (action.type) {
    case 'setSpeakerList':
      {
        return action.data;
      }

    case 'favourite':
      {
        return updateFavorite(true);
      }

    case 'unfavourite':
      {
        return updateFavorite(false);
      }

    default:
      return state;
  }

  function updateFavorite(favoriteValue) {
    //to update fav.
    return state.map(function (item, index) {
      if (item.id === action.sessionId) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakersReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJzZXNzaW9uSWQiLCJmYXZvcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFFdkMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQixlQUFPRCxNQUFNLENBQUNFLElBQWQ7QUFDRDs7QUFDRCxTQUFLLFdBQUw7QUFBa0I7QUFDaEIsZUFBT0MsY0FBYyxDQUFDLElBQUQsQ0FBckI7QUFDRDs7QUFDRCxTQUFLLGFBQUw7QUFBb0I7QUFDbEIsZUFBT0EsY0FBYyxDQUFDLEtBQUQsQ0FBckI7QUFDRDs7QUFDRDtBQUNFLGFBQU9KLEtBQVA7QUFYSjs7QUFlQSxXQUFTSSxjQUFULENBQXdCQyxhQUF4QixFQUF1QztBQUFFO0FBQ3JDLFdBQU9MLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQyxVQUFJRCxJQUFJLENBQUNFLEVBQUwsS0FBWVIsTUFBTSxDQUFDUyxTQUF2QixFQUFrQztBQUNoQywrQ0FBWUgsSUFBWjtBQUFrQkksa0JBQVEsRUFBRU47QUFBNUI7QUFDRDs7QUFDRCxhQUFPRSxJQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7QUFDSixDQXpCSDs7QUEyQkUsK0RBQWVSLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGZiODQ4Y2EyYTBjYmU1NGY1YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNwZWFrZXJzUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZmF2b3VyaXRlJzoge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlICd1bmZhdm91cml0ZSc6IHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3JpdGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7IC8vdG8gdXBkYXRlIGZhdi5cclxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnNSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=
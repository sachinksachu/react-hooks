self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_1183_Hooks_hooks_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();









var Speakers = function Speakers(_ref) {
  _s();

  (0,C_Users_1183_Hooks_hooks_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      speakingSaturday = _useState[0],
      setSpeakingSaturday = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      speakingSunday = _useState2[0],
      setSpeakingSunday = _useState2[1]; // const [speakerList, setSpeakerList] = useState([]);
  // const [speakerList, dispatch] = useReducer(speakersReducer, []) //using useReducer insted of useState


  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_7__.default, {
    isLoading: true,
    speakerList: []
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      dispatch = _useReducer[1]; // const [isLoading, setIsLoading] = useState(true);


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        // to delay and show loading..
        resolve();
      }, 1000);
    }).then(function () {
      setIsLoading(false); //setting loading to false
      // const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => { //filtering based on sat & sun speaking
      //   return (speakingSaturday && sat) || (speakingSunday && sun);
      // });
      //setSpeakerList(speakerListServerFilter);

      dispatch({
        //using dispatch to set action type, it will invoke 'speakersReducer'
        type: 'setSpeakerList',
        data: _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.default // passs the filtered data & update state 'speakerList'

      });
    });
    return function () {
      console.log('cleanup');
    };
  }, []);

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  };

  var handleChangeSunday = function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  };

  var newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return speakerList.length > 0 ? speakerList.filter(function (_ref2) {
      var sat = _ref2.sat,
          sun = _ref2.sun;
      return speakingSaturday && sat || speakingSunday && sun;
    }).sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }

      if (a.firstName > b.firstName) {
        return 1;
      }

      return 0;
    }) : null;
  }, [speakingSaturday, speakingSunday, speakerList]); // filter only when these dep. changed

  var speakerListFiltered = isLoading ? [] : newSpeakerList;
  var heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e, favoriteValue) {
    e.preventDefault();
    var sessionId = parseInt(e.target.attributes['data-sessionid'].value); // get the ID value from attribute convert into int

    dispatch({
      type: favoriteValue === true ? "favourite" : "unfavourite",
      id: sessionId
    });
  }, []);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar margintopbottom5 chekbox-bigger",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered ? speakerListFiltered.map(function (_ref3) {
            var id = _ref3.id,
                firstName = _ref3.firstName,
                lastName = _ref3.lastName,
                bio = _ref3.bio,
                favorite = _ref3.favorite;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__.default, {
              id: id,
              favorite: favorite,
              firstName: firstName,
              lastName: lastName,
              bio: bio,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }, _this);
          }) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "JYwJVU+AOyuamHqSSaBk+0ny+DU=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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


/***/ }),

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
        // return action.data;
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false
        });
      }

    case 'favourite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case 'unfavourite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    default:
      return state;
  }

  function updateFavorite(favoriteValue) {
    //to update fav.
    return state.speakerList.map(function (item, index) {
      if (item.id === action.id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3BlYWtlcnNSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiaXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzZXRJc0xvYWRpbmciLCJ0eXBlIiwiZGF0YSIsInNwZWFrZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJpZCIsIm1hcCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUztBQUFBOztBQUFBOztBQUFBLGtCQUN3QkMsK0NBQVEs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Q0QsU0FBSyxXQUFMO0FBQWtCO0FBQ2hCLCtDQUFXMEMsS0FBWDtBQUFrQnpDLHFCQUFXLEVBQUcyQyxjQUFjLENBQUMsSUFBRDtBQUE5QztBQUNEOztBQUNELFNBQUssYUFBTDtBQUFvQjtBQUNsQiwrQ0FBV0YsS0FBWDtBQUFrQnpDLHFCQUFXLEVBQUcyQyxjQUFjLENBQUMsS0FBRDtBQUE5QztBQUNEOztBQUNEO0FBQ0UsYUFBT0YsS0FBUDtBQVpKOztBQWdCQSxXQUFTRSxjQUFULENBQXdCZCxhQUF4QixFQUF1QztBQUFFO0FBQ3JDLFdBQU9ZLEtBQUssQ0FBQ3pDLFdBQU4sQ0FBa0JxQyxHQUFsQixDQUFzQixVQUFDTyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDNUMsVUFBSUQsSUFBSSxDQUFDUixFQUFMLEtBQVlNLE1BQU0sQ0FBQ04sRUFBdkIsRUFBMkI7QUFDekIsK0NBQVlRLElBQVo7QUFBa0JKLGtCQUFRLEVBQUVYO0FBQTVCO0FBQ0Q7O0FBQ0QsYUFBT2UsSUFBUDtBQUNELEtBTE0sQ0FBUDtBQU1EO0FBQ0osQ0ExQkg7O0FBNEJFLCtEQUFlOUMsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4zOGQ4M2VhYTYxN2U1ZmI1YTE3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcbmltcG9ydCBzcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5cbmltcG9ydCBzcGVha2Vyc1JlZHVjZXIgZnJvbSAnLi9zcGVha2Vyc1JlZHVjZXInO1xuXG5jb25zdCBTcGVha2VycyA9ICh7IH0pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKSAvL3VzaW5nIHVzZVJlZHVjZXIgaW5zdGVkIG9mIHVzZVN0YXRlXG4gIGNvbnN0IFt7aXNMb2FkaW5nLCBzcGVha2VyTGlzdH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCB7XG4gICAgaXNMb2FkaW5nIDogdHJ1ZSxcbiAgICBzcGVha2VyTGlzdCA6IFtdXG4gIH0pXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyB0byBkZWxheSBhbmQgc2hvdyBsb2FkaW5nLi5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KS50aGVuKCgpID0+IHtcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKSAvL3NldHRpbmcgbG9hZGluZyB0byBmYWxzZVxuXG4gICAgICAvLyBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7IC8vZmlsdGVyaW5nIGJhc2VkIG9uIHNhdCAmIHN1biBzcGVha2luZ1xuICAgICAgLy8gICByZXR1cm4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICAvL3NldFNwZWFrZXJMaXN0KHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyKTtcblxuICAgICAgZGlzcGF0Y2goeyAvL3VzaW5nIGRpc3BhdGNoIHRvIHNldCBhY3Rpb24gdHlwZSwgaXQgd2lsbCBpbnZva2UgJ3NwZWFrZXJzUmVkdWNlcidcbiAgICAgICAgdHlwZTogJ3NldFNwZWFrZXJMaXN0JyxcbiAgICAgICAgZGF0YTogc3BlYWtlckRhdGEsIC8vIHBhc3NzIHRoZSBmaWx0ZXJlZCBkYXRhICYgdXBkYXRlIHN0YXRlICdzcGVha2VyTGlzdCdcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBzcGVha2VyTGlzdC5sZW5ndGggPiAwID9cbiAgICBzcGVha2VyTGlzdFxuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxuICAgICAgKVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pIDogbnVsbCxbc3BlYWtpbmdTYXR1cmRheSxzcGVha2luZ1N1bmRheSxzcGVha2VyTGlzdF0pIC8vIGZpbHRlciBvbmx5IHdoZW4gdGhlc2UgZGVwLiBjaGFuZ2VkXG5cblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXG4gICAgPyBbXVxuICAgIDogbmV3U3BlYWtlckxpc3RcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpOyAvLyBnZXQgdGhlIElEIHZhbHVlIGZyb20gYXR0cmlidXRlIGNvbnZlcnQgaW50byBpbnRcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyBcImZhdm91cml0ZVwiIDogXCJ1bmZhdm91cml0ZVwiLFxuICAgICAgaWQ6IHNlc3Npb25JZFxuXG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZCA/IHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxuICAgICAgICAgICAgICAoeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0Jzoge1xyXG4gICAgICAgIC8vIHJldHVybiBhY3Rpb24uZGF0YTtcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdCA6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmcgOiBmYWxzZX1cclxuICAgICAgfVxyXG4gICAgICBjYXNlICdmYXZvdXJpdGUnOiB7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3QgOiB1cGRhdGVGYXZvcml0ZSh0cnVlKSB9XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAndW5mYXZvdXJpdGUnOiB7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3QgOiB1cGRhdGVGYXZvcml0ZShmYWxzZSkgfVxyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7IC8vdG8gdXBkYXRlIGZhdi5cclxuICAgICAgICByZXR1cm4gc3RhdGUuc3BlYWtlckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
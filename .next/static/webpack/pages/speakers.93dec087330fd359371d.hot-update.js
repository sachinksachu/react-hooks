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
      dispatch = _useReducer[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        // to delay and show loading..
        resolve();
      }, 1000);
    }).then(function () {
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
    lineNumber: 91,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
                lineNumber: 102,
                columnNumber: 17
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
                lineNumber: 113,
                columnNumber: 17
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
              lineNumber: 129,
              columnNumber: 19
            }, _this);
          }) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiaXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJ0eXBlIiwiZGF0YSIsInNwZWFrZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJpZCIsIm1hcCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFTO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3dCQywrQ0FBUSxDQUFDLElBQUQsQ0FEaEM7QUFBQSxNQUNqQkMsZ0JBRGlCO0FBQUEsTUFDQ0MsbUJBREQ7O0FBQUEsbUJBRW9CRiwrQ0FBUSxDQUFDLElBQUQsQ0FGNUI7QUFBQSxNQUVqQkcsY0FGaUI7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LFNBQTlCQSxRQUE4QjtBQUFBLGdCQUFwQkMsR0FBb0IsU0FBcEJBLEdBQW9CO0FBQUEsZ0JBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUM5QyxnQ0FDRSw4REFBQyxtREFBRDtBQUVFLGdCQUFFLEVBQUVKLEVBRk47QUFHRSxzQkFBUSxFQUFFSSxRQUhaO0FBSUUsdUJBQVMsRUFBRWhCLFNBSmI7QUFLRSxzQkFBUSxFQUFFYyxRQUxaO0FBTUUsaUJBQUcsRUFBRUMsR0FOUDtBQU9FLG9DQUFzQixFQUFFYjtBQVAxQixlQUNPVSxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFXRCxXQWJvQixDQUFILEdBY2hCO0FBZk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0F2SUQ7O0dBQU01QyxROztLQUFBQSxRO0FBeUlOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjkzZGVjMDg3MzMwZmQzNTkzNzFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4vU3BlYWtlckRhdGEnO1xuaW1wb3J0IFNwZWFrZXJEYXRhIGZyb20gJy4vU3BlYWtlckRhdGEnO1xuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsJztcblxuaW1wb3J0IHNwZWFrZXJzUmVkdWNlciBmcm9tICcuL3NwZWFrZXJzUmVkdWNlcic7XG5cbmNvbnN0IFNwZWFrZXJzID0gKHsgfSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwgW10pIC8vdXNpbmcgdXNlUmVkdWNlciBpbnN0ZWQgb2YgdXNlU3RhdGVcbiAgY29uc3QgW3tpc0xvYWRpbmcsIHNwZWFrZXJMaXN0fSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcbiAgICBpc0xvYWRpbmcgOiB0cnVlLFxuICAgIHNwZWFrZXJMaXN0IDogW11cbiAgfSlcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gdG8gZGVsYXkgYW5kIHNob3cgbG9hZGluZy4uXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgfSkudGhlbigoKSA9PiB7XG5cbiAgICAgIC8vIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHsgLy9maWx0ZXJpbmcgYmFzZWQgb24gc2F0ICYgc3VuIHNwZWFraW5nXG4gICAgICAvLyAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vc2V0U3BlYWtlckxpc3Qoc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIpO1xuXG4gICAgICBkaXNwYXRjaCh7IC8vdXNpbmcgZGlzcGF0Y2ggdG8gc2V0IGFjdGlvbiB0eXBlLCBpdCB3aWxsIGludm9rZSAnc3BlYWtlcnNSZWR1Y2VyJ1xuICAgICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxuICAgICAgICBkYXRhOiBzcGVha2VyRGF0YSwgLy8gcGFzc3MgdGhlIGZpbHRlcmVkIGRhdGEgJiB1cGRhdGUgc3RhdGUgJ3NwZWFrZXJMaXN0J1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0Lmxlbmd0aCA+IDAgP1xuICAgIHNwZWFrZXJMaXN0XG4gICAgICAuZmlsdGVyKFxuICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICApXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSkgOiBudWxsLFtzcGVha2luZ1NhdHVyZGF5LHNwZWFraW5nU3VuZGF5LHNwZWFrZXJMaXN0XSkgLy8gZmlsdGVyIG9ubHkgd2hlbiB0aGVzZSBkZXAuIGNoYW5nZWRcblxuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiBuZXdTcGVha2VyTGlzdFxuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7IC8vIGdldCB0aGUgSUQgdmFsdWUgZnJvbSBhdHRyaWJ1dGUgY29udmVydCBpbnRvIGludFxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3VyaXRlXCIgOiBcInVuZmF2b3VyaXRlXCIsXG4gICAgICBpZDogc2Vzc2lvbklkXG5cbiAgICB9KVxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWtib3gtYmlnZ2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkID8gc3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9
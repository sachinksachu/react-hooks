self["webpackHotUpdate_N_E"]("pages/emailValidating",{

/***/ "./src/EmailValidatingForm.js":
/*!************************************!*\
  !*** ./src/EmailValidatingForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\EmailValidatingForm.js",
    _s = $RefreshSig$();



function EmailValidatingForm() {
  _s();

  var validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      emailValid = _useState[0],
      setEmailValid = _useState[1];

  var emailReducer = function emailReducer(state, action) {
    console.log("action", action);
    var isEmailValid = validateEmail(action);
    setEmailValid(isEmailValid);
    return action; //action is the state 'email'
  };

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(emailReducer, ''),
      email = _useReducer[0],
      setEmail = _useReducer[1];

  var maxSeconds = 30;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxSeconds),
      count = _useState2[0],
      setCount = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            setEmail(e.target.value); //call 'emailReducer'
          },
          disabled: count <= 0,
          value: email,
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), "\xA0\xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !emailValid || count <= 0,
          onClick: function onClick() {
            setCount(0);
            alert("button clicked with email ".concat(email));
          },
          className: "btn-lg",
          type: "submit",
          children: "PRESS ME!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: count > 0 ? "You Have ".concat(count, " Seconds To Enter Your Email") : 'Email Entered or Time Expired'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(EmailValidatingForm, "QaEzPwrx4Z/1yJxd4+hwN44uKMU=");

_c = EmailValidatingForm;
/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

var _c;

$RefreshReg$(_c, "EmailValidatingForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0uanMiXSwibmFtZXMiOlsiRW1haWxWYWxpZGF0aW5nRm9ybSIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInJlIiwidGVzdCIsInVzZVN0YXRlIiwiZW1haWxWYWxpZCIsInNldEVtYWlsVmFsaWQiLCJlbWFpbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpc0VtYWlsVmFsaWQiLCJ1c2VSZWR1Y2VyIiwic2V0RW1haWwiLCJtYXhTZWNvbmRzIiwiY291bnQiLCJzZXRDb3VudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLG1CQUFULEdBQStCO0FBQUE7O0FBRTNCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQU1DLEVBQUUsR0FBRywySkFBWDtBQUNBLFdBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7QUFDSCxHQUhEOztBQUYyQixrQkFPU0csK0NBQVEsQ0FBQyxLQUFELENBUGpCO0FBQUEsTUFPcEJDLFVBUG9CO0FBQUEsTUFPUkMsYUFQUTs7QUFTM0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QjtBQUNBLFFBQU1HLFlBQVksR0FBR1osYUFBYSxDQUFDUyxNQUFELENBQWxDO0FBQ0FILGlCQUFhLENBQUNNLFlBQUQsQ0FBYjtBQUNBLFdBQU9ILE1BQVAsQ0FKb0MsQ0FJckI7QUFDbEIsR0FMRDs7QUFUMkIsb0JBZ0JESSxpREFBVSxDQUFDTixZQUFELEVBQWUsRUFBZixDQWhCVDtBQUFBLE1BZ0JwQk4sS0FoQm9CO0FBQUEsTUFnQmJhLFFBaEJhOztBQWlCM0IsTUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQWpCMkIsbUJBa0JEWCwrQ0FBUSxDQUFDVyxVQUFELENBbEJQO0FBQUEsTUFrQnBCQyxLQWxCb0I7QUFBQSxNQWtCYkMsUUFsQmE7O0FBbUIzQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNJO0FBQ0ksa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2JKLG9CQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVIsQ0FEYSxDQUNhO0FBQzdCLFdBSEw7QUFJSSxrQkFBUSxFQUFFSixLQUFLLElBQUksQ0FKdkI7QUFLSSxlQUFLLEVBQUVmLEtBTFg7QUFNSSxxQkFBVyxFQUFDLGFBTmhCO0FBT0ksY0FBSSxFQUFDLE9BUFQ7QUFRSSxjQUFJLEVBQUMsT0FSVDtBQVNJLGtCQUFRO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESiwrQkFhSTtBQUNJLGtCQUFRLEVBQUUsQ0FBQ0ksVUFBRCxJQUFlVyxLQUFLLElBQUksQ0FEdEM7QUFFSSxpQkFBTyxFQUFFLG1CQUFNO0FBQ1hDLG9CQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FJLGlCQUFLLHFDQUE4QnBCLEtBQTlCLEVBQUw7QUFDSCxXQUxMO0FBTUksbUJBQVMsRUFBQyxRQU5kO0FBT0ksY0FBSSxFQUFDLFFBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUF3Qkk7QUFBQSxvQkFDS2UsS0FBSyxHQUFHLENBQVIsc0JBQ2lCQSxLQURqQixvQ0FFSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0F4RFFqQixtQjs7S0FBQUEsbUI7QUF5RFQsK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtYWlsVmFsaWRhdGluZy5hNzU0YjJmOWNlN2YzZjljNDk3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBFbWFpbFZhbGlkYXRpbmdGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgICAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZW1haWxWYWxpZCwgc2V0RW1haWxWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZW1haWxSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvblwiLCBhY3Rpb24pXHJcbiAgICAgICAgY29uc3QgaXNFbWFpbFZhbGlkID0gdmFsaWRhdGVFbWFpbChhY3Rpb24pXHJcbiAgICAgICAgc2V0RW1haWxWYWxpZChpc0VtYWlsVmFsaWQpXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjsgLy9hY3Rpb24gaXMgdGhlIHN0YXRlICdlbWFpbCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVJlZHVjZXIoZW1haWxSZWR1Y2VyLCAnJyk7XHJcbiAgICBjb25zdCBtYXhTZWNvbmRzID0gMzA7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG1heFNlY29uZHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTsgLy9jYWxsICdlbWFpbFJlZHVjZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjb3VudCA8PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVtYWlsVmFsaWQgfHwgY291bnQgPD0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q291bnQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgYnV0dG9uIGNsaWNrZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBSRVNTIE1FIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYFlvdSBIYXZlICR7Y291bnR9IFNlY29uZHMgVG8gRW50ZXIgWW91ciBFbWFpbGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ0VtYWlsIEVudGVyZWQgb3IgVGltZSBFeHBpcmVkJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxWYWxpZGF0aW5nRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var _useEmailValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEmailValidation */ "./src/useEmailValidation.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\EmailValidatingForm.js",
    _s = $RefreshSig$();




function EmailValidatingForm(seconds) {
  _s();

  var _useEmailValidation = (0,_useEmailValidation__WEBPACK_IMPORTED_MODULE_2__.default)(30),
      count = _useEmailValidation.count,
      email = _useEmailValidation.email,
      setEmail = _useEmailValidation.setEmail,
      setCount = _useEmailValidation.setCount,
      emailValid = _useEmailValidation.emailValid; // combining multiple hooks into custom hooks


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
          lineNumber: 14,
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
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: count > 0 ? "You Have ".concat(count, " Seconds To Enter Your Email") : 'Email Entered or Time Expired'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_s(EmailValidatingForm, "C2QC+bK1dI/VxS9PM6yy6BCt1yA=", false, function () {
  return [_useEmailValidation__WEBPACK_IMPORTED_MODULE_2__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0uanMiXSwibmFtZXMiOlsiRW1haWxWYWxpZGF0aW5nRm9ybSIsInNlY29uZHMiLCJ1c2VFbWFpbFZhbGlkYXRpb24iLCJjb3VudCIsImVtYWlsIiwic2V0RW1haWwiLCJzZXRDb3VudCIsImVtYWlsVmFsaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFBQSw0QkFJcUJDLDREQUFrQixDQUFDLEVBQUQsQ0FKdkM7QUFBQSxNQUkzQkMsS0FKMkIsdUJBSTNCQSxLQUoyQjtBQUFBLE1BSXBCQyxLQUpvQix1QkFJcEJBLEtBSm9CO0FBQUEsTUFJYkMsUUFKYSx1QkFJYkEsUUFKYTtBQUFBLE1BSUhDLFFBSkcsdUJBSUhBLFFBSkc7QUFBQSxNQUlPQyxVQUpQLHVCQUlPQSxVQUpQLEVBSTRDOzs7QUFDOUUsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUNJLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNiSCxvQkFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSLENBRGEsQ0FDYTtBQUM3QixXQUhMO0FBSUksa0JBQVEsRUFBRVAsS0FBSyxJQUFJLENBSnZCO0FBS0ksZUFBSyxFQUFFQyxLQUxYO0FBTUkscUJBQVcsRUFBQyxhQU5oQjtBQU9JLGNBQUksRUFBQyxPQVBUO0FBUUksY0FBSSxFQUFDLE9BUlQ7QUFTSSxrQkFBUTtBQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosK0JBYUk7QUFDSSxrQkFBUSxFQUFFLENBQUNHLFVBQUQsSUFBZUosS0FBSyxJQUFJLENBRHRDO0FBRUksaUJBQU8sRUFBRSxtQkFBTTtBQUNYRyxvQkFBUSxDQUFDLENBQUQsQ0FBUjtBQUNBSyxpQkFBSyxxQ0FBOEJQLEtBQTlCLEVBQUw7QUFDSCxXQUxMO0FBTUksbUJBQVMsRUFBQyxRQU5kO0FBT0ksY0FBSSxFQUFDLFFBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUF3Qkk7QUFBQSxvQkFDS0QsS0FBSyxHQUFHLENBQVIsc0JBQ2lCQSxLQURqQixvQ0FFSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0ExQ1FILG1CO1VBSWtERSx3RDs7O0tBSmxERixtQjtBQTJDVCwrREFBZUEsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1haWxWYWxpZGF0aW5nLjIxM2NmOGM0YjRlOWQ4YjRjMTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL3VzZUVtYWlsVmFsaWRhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBFbWFpbFZhbGlkYXRpbmdGb3JtKHNlY29uZHMpIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB7Y291bnQsIGVtYWlsLCBzZXRFbWFpbCwgc2V0Q291bnQsIGVtYWlsVmFsaWR9ID0gdXNlRW1haWxWYWxpZGF0aW9uKDMwKSAvLyBjb21iaW5pbmcgbXVsdGlwbGUgaG9va3MgaW50byBjdXN0b20gaG9va3NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7IC8vY2FsbCAnZW1haWxSZWR1Y2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y291bnQgPD0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbFZhbGlkIHx8IGNvdW50IDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYGJ1dHRvbiBjbGlja2VkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVTUyBNRSFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBZb3UgSGF2ZSAke2NvdW50fSBTZWNvbmRzIFRvIEVudGVyIFlvdXIgRW1haWxgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdFbWFpbCBFbnRlcmVkIG9yIFRpbWUgRXhwaXJlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsVmFsaWRhdGluZ0Zvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==
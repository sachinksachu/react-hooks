(function() {
var exports = {};
exports.id = "pages/emailValidating";
exports.ids = ["pages/emailValidating"];
exports.modules = {

/***/ "./pages/emailValidating.js":
/*!**********************************!*\
  !*** ./pages/emailValidating.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/EmailValidatingForm */ "./src/EmailValidatingForm.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\pages\\emailValidating.js";


function emailvalidating() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (emailvalidating);

/***/ }),

/***/ "./src/EmailValidatingForm.js":
/*!************************************!*\
  !*** ./src/EmailValidatingForm.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useEmailValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEmailValidation */ "./src/useEmailValidation.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\EmailValidatingForm.js";



function EmailValidatingForm(seconds) {
  const {
    count,
    email,
    setEmail,
    setCount,
    emailValid
  } = (0,_useEmailValidation__WEBPACK_IMPORTED_MODULE_2__.default)(30); // combining multiple hooks into custom hooks

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
          onChange: e => {
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
          onClick: () => {
            setCount(0);
            alert(`button clicked with email ${email}`);
          },
          className: "btn-lg",
          type: "submit",
          children: "PRESS ME!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: count > 0 ? `You Have ${count} Seconds To Enter Your Email` : 'Email Entered or Time Expired'
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

/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

/***/ }),

/***/ "./src/useEmailValidation.js":
/*!***********************************!*\
  !*** ./src/useEmailValidation.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useEmailValidation(seconds) {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const {
    0: emailValid,
    1: setEmailValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const emailReducer = (state, action) => {
    console.log("action", action);
    const isEmailValid = validateEmail(action);
    setEmailValid(isEmailValid);
    return action; //action is the state 'email'
  };

  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(emailReducer, '');
  const maxSeconds = seconds;
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxSeconds);
  const returnObject = {
    count,
    email,
    setEmail,
    setCount,
    emailValid
  };
  return returnObject;
}

/* harmony default export */ __webpack_exports__["default"] = (useEmailValidation);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/emailValidating.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9lbWFpbFZhbGlkYXRpbmcuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3VzZUVtYWlsVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImVtYWlsdmFsaWRhdGluZyIsIkVtYWlsVmFsaWRhdGluZ0Zvcm0iLCJzZWNvbmRzIiwiY291bnQiLCJlbWFpbCIsInNldEVtYWlsIiwic2V0Q291bnQiLCJlbWFpbFZhbGlkIiwidXNlRW1haWxWYWxpZGF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0Iiwic2V0RW1haWxWYWxpZCIsInVzZVN0YXRlIiwiZW1haWxSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaXNFbWFpbFZhbGlkIiwidXNlUmVkdWNlciIsIm1heFNlY29uZHMiLCJyZXR1cm5PYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3pCLHNCQUFPLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlQSxlQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLFNBQVND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IjpbImltcG9ydCBFbWFpbFZhbGlkYXRpbmdGb3JtIGZyb20gJy4uL3NyYy9FbWFpbFZhbGlkYXRpbmdGb3JtJztcclxuXHJcbmZ1bmN0aW9uIGVtYWlsdmFsaWRhdGluZygpIHtcclxuICByZXR1cm4gPEVtYWlsVmFsaWRhdGluZ0Zvcm0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVtYWlsdmFsaWRhdGluZzsiLCJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL3VzZUVtYWlsVmFsaWRhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBFbWFpbFZhbGlkYXRpbmdGb3JtKHNlY29uZHMpIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB7Y291bnQsIGVtYWlsLCBzZXRFbWFpbCwgc2V0Q291bnQsIGVtYWlsVmFsaWR9ID0gdXNlRW1haWxWYWxpZGF0aW9uKDMwKSAvLyBjb21iaW5pbmcgbXVsdGlwbGUgaG9va3MgaW50byBjdXN0b20gaG9va3NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7IC8vY2FsbCAnZW1haWxSZWR1Y2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y291bnQgPD0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbFZhbGlkIHx8IGNvdW50IDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYGJ1dHRvbiBjbGlja2VkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVTUyBNRSFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBZb3UgSGF2ZSAke2NvdW50fSBTZWNvbmRzIFRvIEVudGVyIFlvdXIgRW1haWxgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdFbWFpbCBFbnRlcmVkIG9yIFRpbWUgRXhwaXJlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsVmFsaWRhdGluZ0Zvcm07IiwiXHJcbmltcG9ydCB7dXNlUmVkdWNlciwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZUVtYWlsVmFsaWRhdGlvbihzZWNvbmRzKXtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbmNvbnN0IFtlbWFpbFZhbGlkLCBzZXRFbWFpbFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGVtYWlsUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFjdGlvblwiLCBhY3Rpb24pXHJcbiAgICBjb25zdCBpc0VtYWlsVmFsaWQgPSB2YWxpZGF0ZUVtYWlsKGFjdGlvbilcclxuICAgIHNldEVtYWlsVmFsaWQoaXNFbWFpbFZhbGlkKVxyXG4gICAgcmV0dXJuIGFjdGlvbjsgLy9hY3Rpb24gaXMgdGhlIHN0YXRlICdlbWFpbCdcclxufVxyXG5cclxuY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VSZWR1Y2VyKGVtYWlsUmVkdWNlciwgJycpO1xyXG5jb25zdCBtYXhTZWNvbmRzID0gc2Vjb25kcztcclxuY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShtYXhTZWNvbmRzKTtcclxuXHJcbmNvbnN0IHJldHVybk9iamVjdCA9ICB7Y291bnQsIGVtYWlsLCBzZXRFbWFpbCwgc2V0Q291bnQsIGVtYWlsVmFsaWR9O1xyXG5cclxucmV0dXJuIHJldHVybk9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VFbWFpbFZhbGlkYXRpb247IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
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

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\EmailValidatingForm.js";


function EmailValidatingForm() {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const {
    0: emailValid,
    1: setEmailValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const emailReducer = (state, action) => {
    console.log("action", action);
    const isEmailValid = validateEmail(action);
    setEmailValid(isEmailValid);
    return action; //action is the state 'email'
  };

  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(emailReducer, '');
  const maxSeconds = 30;
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxSeconds);
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
          lineNumber: 27,
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
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: count > 0 ? `You Have ${count} Seconds To Enter Your Email` : 'Email Entered or Time Expired'
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

/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9lbWFpbFZhbGlkYXRpbmcuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJlbWFpbHZhbGlkYXRpbmciLCJFbWFpbFZhbGlkYXRpbmdGb3JtIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiZW1haWxWYWxpZCIsInNldEVtYWlsVmFsaWQiLCJ1c2VTdGF0ZSIsImVtYWlsUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImlzRW1haWxWYWxpZCIsInNldEVtYWlsIiwidXNlUmVkdWNlciIsIm1heFNlY29uZHMiLCJjb3VudCIsInNldENvdW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3pCLHNCQUFPLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlQSxlQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLFNBQVNDLG1CQUFULEdBQStCO0FBRTNCLFFBQU1DLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLFVBQU1DLEVBQUUsR0FBRywySkFBWDtBQUNBLFdBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7QUFDSCxHQUhEOztBQUtBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsK0NBQVEsQ0FBQyxLQUFELENBQTVDOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDcENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLE1BQXRCO0FBQ0EsVUFBTUcsWUFBWSxHQUFHWixhQUFhLENBQUNTLE1BQUQsQ0FBbEM7QUFDQUosaUJBQWEsQ0FBQ08sWUFBRCxDQUFiO0FBQ0EsV0FBT0gsTUFBUCxDQUpvQyxDQUlyQjtBQUNsQixHQUxEOztBQU9BLFFBQU07QUFBQSxPQUFDUixLQUFEO0FBQUEsT0FBUVk7QUFBUixNQUFvQkMsaURBQVUsQ0FBQ1AsWUFBRCxFQUFlLEVBQWYsQ0FBcEM7QUFDQSxRQUFNUSxVQUFVLEdBQUcsRUFBbkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JYLCtDQUFRLENBQUNTLFVBQUQsQ0FBbEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNJO0FBQ0ksa0JBQVEsRUFBR0csQ0FBRCxJQUFPO0FBQ2JMLG9CQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVIsQ0FEYSxDQUNhO0FBQzdCLFdBSEw7QUFJSSxrQkFBUSxFQUFFSixLQUFLLElBQUksQ0FKdkI7QUFLSSxlQUFLLEVBQUVmLEtBTFg7QUFNSSxxQkFBVyxFQUFDLGFBTmhCO0FBT0ksY0FBSSxFQUFDLE9BUFQ7QUFRSSxjQUFJLEVBQUMsT0FSVDtBQVNJLGtCQUFRO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESiwrQkFhSTtBQUNJLGtCQUFRLEVBQUUsQ0FBQ0csVUFBRCxJQUFlWSxLQUFLLElBQUksQ0FEdEM7QUFFSSxpQkFBTyxFQUFFLE1BQU07QUFDWEMsb0JBQVEsQ0FBQyxDQUFELENBQVI7QUFDQUksaUJBQUssQ0FBRSw2QkFBNEJwQixLQUFNLEVBQXBDLENBQUw7QUFDSCxXQUxMO0FBTUksbUJBQVMsRUFBQyxRQU5kO0FBT0ksY0FBSSxFQUFDLFFBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUF3Qkk7QUFBQSxvQkFDS2UsS0FBSyxHQUFHLENBQVIsR0FDTSxZQUFXQSxLQUFNLDhCQUR2QixHQUVLO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztBQUNELCtEQUFlakIsbUJBQWYsRTs7Ozs7Ozs7Ozs7QUMzREEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvZW1haWxWYWxpZGF0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYWlsVmFsaWRhdGluZ0Zvcm0gZnJvbSAnLi4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0nO1xyXG5cclxuZnVuY3Rpb24gZW1haWx2YWxpZGF0aW5nKCkge1xyXG4gIHJldHVybiA8RW1haWxWYWxpZGF0aW5nRm9ybSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW1haWx2YWxpZGF0aW5nOyIsImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRW1haWxWYWxpZGF0aW5nRm9ybSgpIHtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2VtYWlsVmFsaWQsIHNldEVtYWlsVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb25cIiwgYWN0aW9uKVxyXG4gICAgICAgIGNvbnN0IGlzRW1haWxWYWxpZCA9IHZhbGlkYXRlRW1haWwoYWN0aW9uKVxyXG4gICAgICAgIHNldEVtYWlsVmFsaWQoaXNFbWFpbFZhbGlkKVxyXG4gICAgICAgIHJldHVybiBhY3Rpb247IC8vYWN0aW9uIGlzIHRoZSBzdGF0ZSAnZW1haWwnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VSZWR1Y2VyKGVtYWlsUmVkdWNlciwgJycpO1xyXG4gICAgY29uc3QgbWF4U2Vjb25kcyA9IDMwO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShtYXhTZWNvbmRzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7IC8vY2FsbCAnZW1haWxSZWR1Y2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y291bnQgPD0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbFZhbGlkIHx8IGNvdW50IDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYGJ1dHRvbiBjbGlja2VkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVTUyBNRSFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBZb3UgSGF2ZSAke2NvdW50fSBTZWNvbmRzIFRvIEVudGVyIFlvdXIgRW1haWxgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdFbWFpbCBFbnRlcmVkIG9yIFRpbWUgRXhwaXJlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsVmFsaWRhdGluZ0Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
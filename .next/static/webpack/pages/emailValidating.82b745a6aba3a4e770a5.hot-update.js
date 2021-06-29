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
      emailValid = _useEmailValidation.emailValid;

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


/***/ }),

/***/ "./src/useEmailValidation.js":
/*!***********************************!*\
  !*** ./src/useEmailValidation.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



function useEmailValidation(seconds) {
  _s();

  var validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      emailValid = _useState[0],
      setEmailValid = _useState[1];

  var emailReducer = function emailReducer(state, action) {
    console.log("action", action);
    var isEmailValid = validateEmail(action);
    setEmailValid(isEmailValid);
    return action; //action is the state 'email'
  };

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(emailReducer, ''),
      email = _useReducer[0],
      setEmail = _useReducer[1];

  var maxSeconds = seconds;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxSeconds),
      count = _useState2[0],
      setCount = _useState2[1];

  var returnObject = {
    count: count,
    email: email,
    setEmail: setEmail,
    setCount: setCount,
    emailValid: emailValid
  };
  return returnObject;
}

_s(useEmailValidation, "QaEzPwrx4Z/1yJxd4+hwN44uKMU=");

/* harmony default export */ __webpack_exports__["default"] = (useEmailValidation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91c2VFbWFpbFZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiRW1haWxWYWxpZGF0aW5nRm9ybSIsInNlY29uZHMiLCJ1c2VFbWFpbFZhbGlkYXRpb24iLCJjb3VudCIsImVtYWlsIiwic2V0RW1haWwiLCJzZXRDb3VudCIsImVtYWlsVmFsaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJ1c2VTdGF0ZSIsInNldEVtYWlsVmFsaWQiLCJlbWFpbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpc0VtYWlsVmFsaWQiLCJ1c2VSZWR1Y2VyIiwibWF4U2Vjb25kcyIsInJldHVybk9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFBQSw0QkFJcUJDLDREQUFrQixDQUFDLEVBQUQsQ0FKdkM7QUFBQSxNQUkzQkMsS0FKMkIsdUJBSTNCQSxLQUoyQjtBQUFBLE1BSXBCQyxLQUpvQix1QkFJcEJBLEtBSm9CO0FBQUEsTUFJYkMsUUFKYSx1QkFJYkEsUUFKYTtBQUFBLE1BSUhDLFFBSkcsdUJBSUhBLFFBSkc7QUFBQSxNQUlPQyxVQUpQLHVCQUlPQSxVQUpQOztBQUtsQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNJO0FBQ0ksa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2JILG9CQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVIsQ0FEYSxDQUNhO0FBQzdCLFdBSEw7QUFJSSxrQkFBUSxFQUFFUCxLQUFLLElBQUksQ0FKdkI7QUFLSSxlQUFLLEVBQUVDLEtBTFg7QUFNSSxxQkFBVyxFQUFDLGFBTmhCO0FBT0ksY0FBSSxFQUFDLE9BUFQ7QUFRSSxjQUFJLEVBQUMsT0FSVDtBQVNJLGtCQUFRO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESiwrQkFhSTtBQUNJLGtCQUFRLEVBQUUsQ0FBQ0csVUFBRCxJQUFlSixLQUFLLElBQUksQ0FEdEM7QUFFSSxpQkFBTyxFQUFFLG1CQUFNO0FBQ1hHLG9CQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FLLGlCQUFLLHFDQUE4QlAsS0FBOUIsRUFBTDtBQUNILFdBTEw7QUFNSSxtQkFBUyxFQUFDLFFBTmQ7QUFPSSxjQUFJLEVBQUMsUUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQXdCSTtBQUFBLG9CQUNLRCxLQUFLLEdBQUcsQ0FBUixzQkFDaUJBLEtBRGpCLG9DQUVLO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQTFDUUgsbUI7VUFJa0RFLHdEOzs7S0FKbERGLG1CO0FBMkNULCtEQUFlQSxtQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRUEsU0FBU0Usa0JBQVQsQ0FBNEJELE9BQTVCLEVBQW9DO0FBQUE7O0FBRXBDLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1IsS0FBRCxFQUFXO0FBQzdCLFFBQU1TLEVBQUUsR0FBRywySkFBWDtBQUNBLFdBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRVixLQUFSLENBQVA7QUFDSCxHQUhEOztBQUZvQyxrQkFPQVcsK0NBQVEsQ0FBQyxLQUFELENBUFI7QUFBQSxNQU83QlIsVUFQNkI7QUFBQSxNQU9qQlMsYUFQaUI7O0FBU3BDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7QUFDQSxRQUFNRyxZQUFZLEdBQUdWLGFBQWEsQ0FBQ08sTUFBRCxDQUFsQztBQUNBSCxpQkFBYSxDQUFDTSxZQUFELENBQWI7QUFDQSxXQUFPSCxNQUFQLENBSm9DLENBSXJCO0FBQ2xCLEdBTEQ7O0FBVG9DLG9CQWdCVkksaURBQVUsQ0FBQ04sWUFBRCxFQUFlLEVBQWYsQ0FoQkE7QUFBQSxNQWdCN0JiLEtBaEI2QjtBQUFBLE1BZ0J0QkMsUUFoQnNCOztBQWlCcEMsTUFBTW1CLFVBQVUsR0FBR3ZCLE9BQW5COztBQWpCb0MsbUJBa0JWYywrQ0FBUSxDQUFDUyxVQUFELENBbEJFO0FBQUEsTUFrQjdCckIsS0FsQjZCO0FBQUEsTUFrQnRCRyxRQWxCc0I7O0FBb0JwQyxNQUFNbUIsWUFBWSxHQUFJO0FBQUN0QixTQUFLLEVBQUxBLEtBQUQ7QUFBUUMsU0FBSyxFQUFMQSxLQUFSO0FBQWVDLFlBQVEsRUFBUkEsUUFBZjtBQUF5QkMsWUFBUSxFQUFSQSxRQUF6QjtBQUFtQ0MsY0FBVSxFQUFWQTtBQUFuQyxHQUF0QjtBQUVBLFNBQU9rQixZQUFQO0FBQ0M7O0dBdkJRdkIsa0I7O0FBeUJULCtEQUFlQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbWFpbFZhbGlkYXRpbmcuODJiNzQ1YTZhYmEzYTRlNzcwYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vdXNlRW1haWxWYWxpZGF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIEVtYWlsVmFsaWRhdGluZ0Zvcm0oc2Vjb25kcykge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHtjb3VudCwgZW1haWwsIHNldEVtYWlsLCBzZXRDb3VudCwgZW1haWxWYWxpZH0gPSB1c2VFbWFpbFZhbGlkYXRpb24oMzApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpOyAvL2NhbGwgJ2VtYWlsUmVkdWNlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvdW50IDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWxWYWxpZCB8fCBjb3VudCA8PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb3VudCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBidXR0b24gY2xpY2tlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJFU1MgTUUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgWW91IEhhdmUgJHtjb3VudH0gU2Vjb25kcyBUbyBFbnRlciBZb3VyIEVtYWlsYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnRW1haWwgRW50ZXJlZCBvciBUaW1lIEV4cGlyZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbFZhbGlkYXRpbmdGb3JtOyIsIlxyXG5pbXBvcnQge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VFbWFpbFZhbGlkYXRpb24oc2Vjb25kcyl7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG5jb25zdCBbZW1haWxWYWxpZCwgc2V0RW1haWxWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5jb25zdCBlbWFpbFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhY3Rpb25cIiwgYWN0aW9uKVxyXG4gICAgY29uc3QgaXNFbWFpbFZhbGlkID0gdmFsaWRhdGVFbWFpbChhY3Rpb24pXHJcbiAgICBzZXRFbWFpbFZhbGlkKGlzRW1haWxWYWxpZClcclxuICAgIHJldHVybiBhY3Rpb247IC8vYWN0aW9uIGlzIHRoZSBzdGF0ZSAnZW1haWwnXHJcbn1cclxuXHJcbmNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlUmVkdWNlcihlbWFpbFJlZHVjZXIsICcnKTtcclxuY29uc3QgbWF4U2Vjb25kcyA9IHNlY29uZHM7XHJcbmNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobWF4U2Vjb25kcyk7XHJcblxyXG5jb25zdCByZXR1cm5PYmplY3QgPSAge2NvdW50LCBlbWFpbCwgc2V0RW1haWwsIHNldENvdW50LCBlbWFpbFZhbGlkfTtcclxuXHJcbnJldHVybiByZXR1cm5PYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRW1haWxWYWxpZGF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=
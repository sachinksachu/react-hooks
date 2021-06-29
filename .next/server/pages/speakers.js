(function() {
var exports = {};
exports.id = "pages/speakers";
exports.ids = ["pages/speakers"];
exports.modules = {

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\pages\\speakers.js";



function speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageName: "Speakers"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (speakers);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.js */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\App.js";



const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 35
  }, undefined);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 39
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

const configValue = {
  showSignMeUp: false,
  showSpeakerSpeakingDays: true
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: pageToShow(pageName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\Header.js";


const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\Home.js";




function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speakers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerData.js":
/*!****************************!*\
  !*** ./src/SpeakerData.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const speakerData = [{
  id: 1530,
  firstName: 'Tammy',
  lastName: 'Baker',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at USA Tech, Cantaloupe Systems, E-Color, and Untangle Inc.'
}, {
  id: 5996,
  firstName: 'Craig',
  lastName: 'Berntson',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Craig has a passion for community and helping other developers improve their skills. He writes the column "Software Gardening" in DotNet Curry Magazine and is the co-author of "Continuous Integration in .NET" available from Manning.'
}, {
  id: 10803,
  firstName: 'Eugene',
  lastName: 'Chuvyrov',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.'
}, {
  id: 1124,
  firstName: 'Douglas',
  lastName: 'Crockford',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.'
}, {
  id: 41808,
  firstName: 'Paul',
  lastName: 'Everitt',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding.'
}, {
  id: 1269,
  firstName: 'Arun',
  lastName: 'Gupta',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. He has built and led developer communities for 12+ years at Sun, Oracle, Red Hat and Couchbase.'
}, {
  id: 1725,
  firstName: 'Brad',
  lastName: 'Irby',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Brad is an accomplished .NET software architect specializing in Domain Driven Design and Event Driven Architectures.'
}, {
  id: 18805,
  firstName: 'Mickey W.',
  lastName: 'Mantle',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Mickey has been developing software systems and products for over 40 years, as a systems programmer, Tech Lead, Manager, VP Engineering, CTO, COO, and now CEO/CTO of his own company.'
}, {
  id: 8367,
  firstName: 'Gayle Laakmann',
  lastName: 'McDowell',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three best selling books.'
}, {
  id: 187,
  firstName: 'Dave',
  lastName: 'Nielsen',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'As Head of Ecosystem Programs, Dave uses emerging technologies and open source projects like Microservices, Serverless & Kubernetes to bring the magic of Redis to the broader community.'
}, {
  id: 823,
  firstName: 'Kevin',
  lastName: 'Nilson',
  sat: false,
  sun: true,
  favorite: true,
  bio: "Team Lead of the Chromecast Technical Solutions Engineer team, a Java Champion and three time JavaOne Rock Star Presenter. Kevin has spoken at conferences such as JavaOne, Devoxx, JAX, O'Reilly Fluent, Silicon Valley Code Camp, JAX and HTML5DevConf."
}, {
  id: 8590,
  firstName: 'Chris',
  lastName: 'Richardson',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Chris Richardson is a developer and architect. He is a Java Champion, a JavaOne rock star and the author of POJOs in Action, which describes how to build enterprise Java applications with frameworks such as Spring and Hibernate.'
}, {
  id: 10808,
  firstName: 'Antony',
  lastName: 'Ross',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Antony Ross is a consultant specializing in data science and machine learning applied to sports performance. He has worked closely with USC and UCLA and is presently involved with the Recurse Center in New York researching deep learning and voice recognition.'
}];
/* harmony default export */ __webpack_exports__["default"] = (speakerData);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\SpeakerDetail.js";



const SpeakerDetail = ({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler
}) => {
  console.log(`Speaker : ${id} ${firstName} ${lastName}`);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: `${firstName}  ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "data-sessionid": id //attribute to store ID
          ,
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, !favorite);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(SpeakerDetail)); //wrapping the component inside memo,  so that it caches / memoized version of speaker detail to the calling component

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

var _jsxFileName = "C:\\Users\\1183\\Hooks\\hooks\\src\\Speakers.js";






const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // const [speakerList, setSpeakerList] = useState([]);
  // const [speakerList, dispatch] = useReducer(speakersReducer, []) //using useReducer insted of useState

  const {
    isLoading,
    speakerList,
    dispatch
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_5__.default)();

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => speakerList.length > 0 ? speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  }) : null, [speakingSaturday, speakingSunday, speakerList]); // filter only when these dep. changed

  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // get the ID value from attribute convert into int

    dispatch({
      type: favoriteValue === true ? "favourite" : "unfavourite",
      id: sessionId
    });
  }, []);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 68,
                columnNumber: 17
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 79,
                columnNumber: 17
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered ? speakerListFiltered.map(({
            id,
            firstName,
            lastName,
            bio,
            favorite
          }) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              id: id,
              favorite: favorite,
              firstName: firstName,
              lastName: lastName,
              bio: bio,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, undefined);
          }) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakersReducer = (state, action) => {
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
    return state.speakerList.map((item, index) => {
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

/***/ }),

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const useSpeakerDatamanager = () => {
  const {
    0: {
      isLoading,
      speakerList
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_0__.default, {
    isLoading: true,
    speakerList: []
  }); //useReducer(method,initialValue)

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        // to delay and show loading..
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        //using dispatch to set action type, it will invoke 'speakersReducer'
        type: 'setSpeakerList',
        data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.default // passs the filtered data & update state 'speakerList'

      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDatamanager);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/speakers.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9zcGVha2Vycy5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfEM6XFxVc2Vyc1xcMTE4M1xcSG9va3NcXGhvb2tzXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsic3BlYWtlcnMiLCJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJwYWdlVG9TaG93IiwicGFnZU5hbWUiLCJjb25maWdWYWx1ZSIsInNob3dTaWduTWVVcCIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwiQXBwIiwiSGVhZGVyIiwic2lnbnVwQ2FsbGJhY2siLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0Iiwic3BlYWtlckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiZmF2b3JpdGUiLCJiaW8iLCJTcGVha2VyRGV0YWlsIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsIlNwZWFrZXJzIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5Iiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZVNwZWFrZXJEYXRhTWFuYWdlciIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwibWFwIiwic3BlYWtlcnNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwidXBkYXRlRmF2b3JpdGUiLCJpdGVtIiwidXNlU3BlYWtlckRhdGFtYW5hZ2VyIiwidXNlUmVkdWNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7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RDtBQUFZMEMsZUFBWjtBQUF5QkM7QUFBekIsR0FBUDtBQUVDLENBNUJEOztBQThCQSwrREFBZTJCLHFCQUFmLEU7Ozs7Ozs7Ozs7O0FDbENBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zcGVha2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCc7XHJcblxyXG5mdW5jdGlvbiBzcGVha2VycygpIHtcclxuICByZXR1cm4gPEFwcCBwYWdlTmFtZT1cIlNwZWFrZXJzXCIgLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUuanMnO1xuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4vU3BlYWtlcnMnO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgcGFnZVRvU2hvdyA9IHBhZ2VOYW1lID0+IHtcbiAgaWYgKHBhZ2VOYW1lID09PSAnSG9tZScpIHJldHVybiA8SG9tZT48L0hvbWU+O1xuICBpZiAocGFnZU5hbWUgPT09ICdTcGVha2VycycpIHJldHVybiA8U3BlYWtlcnM+PC9TcGVha2Vycz47XG4gIHJldHVybiA8ZGl2Pk5vdCBGb3VuZDwvZGl2PlxufVxuXG5jb25zdCBjb25maWdWYWx1ZSA9e1xuICBzaG93U2lnbk1lVXA6IGZhbHNlLFxuICBzaG93U3BlYWtlclNwZWFraW5nRGF5cyA6IHRydWVcbn1cblxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29uZmlnVmFsdWV9PlxuICAgICAgPGRpdj57cGFnZVRvU2hvdyhwYWdlTmFtZSl9PC9kaXY+XG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25NZVVwIGZyb20gJy4vU2lnbk1lVXAnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBzaWdudXBDYWxsYmFjayA9IChlbWFpbCkgPT4ge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgc2lnbiB1cCBjYWxsZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uaGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+U2FuIEpvc2UsIENhbGlmb3JuaWE8L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTIgdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgICAgPFNpZ25NZVVwIHNpZ251cENhbGxiYWNrPXtzaWdudXBDYWxsYmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1hcmdpbnRvcGJvdHRvbVwiPlxuICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTIwXCI+XG4gICAgICAgICAgICAgIENvZGUgQ2FtcCBpcyBhIGNvbW11bml0eSBldmVudCB3aGVyZSBkZXZlbG9wZXJzIGxlYXJuIGZyb20gZmVsbG93XG4gICAgICAgICAgICAgIGRldmVsb3BlcnMuIFdlIGFsc28gaGF2ZSBkZXZlbG9wZXIgcmVsYXRlZCB0b3BpY3MgdGhhdCBpbmNsdWRlXG4gICAgICAgICAgICAgIHNvZnR3YXJlIGJyYW5kaW5nLCBsZWdhbCBpc3N1ZXMgYXJvdW5kIHNvZnR3YXJlIGFzIHdlbGwgYXMgb3RoZXJcbiAgICAgICAgICAgICAgdG9waWNzIGRldmVsb3BlcnMgYXJlIGludGVyZXN0ZWQgaW4gaGVhcmluZyBhYm91dC5cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17XG4gICAgICAgIGlzTG9hZGluZ1xuICAgICAgICAgID8gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT0nIC8vIDF4MWdpZlxuICAgICAgICAgIDogaW5WaWV3XG4gICAgICAgICAgPyBzZWNvbmRhcnlJbWdcbiAgICAgICAgICA6IHByaW1hcnlJbWdcbiAgICAgIH1cbiAgICAgIGFsdD1cIlwiXG4gICAgICByZWY9e2ltYWdlUmVmfVxuICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmtcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlYWtlcnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TcGVha2VyczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcblxuY29uc3QgU2lnbk1lVXAgPSAoeyBzaWdudXBDYWxsYmFjayB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoJ0AnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2lnbnVwQ2FsbGJhY2soZW1haWwpO1xuICAgICAgICAgICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICAgICAgICAgIGFsZXJ0KCdzaWdudXAgY29uZmlybWVkJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBVcGRhdGVzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduTWVVcDtcbiIsImNvbnN0IHNwZWFrZXJEYXRhID0gW1xuICB7XG4gICAgaWQ6IDE1MzAsXG4gICAgZmlyc3ROYW1lOiAnVGFtbXknLFxuICAgIGxhc3ROYW1lOiAnQmFrZXInLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IFVTQSBUZWNoLCBDYW50YWxvdXBlIFN5c3RlbXMsIEUtQ29sb3IsIGFuZCBVbnRhbmdsZSBJbmMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1OTk2LFxuICAgIGZpcnN0TmFtZTogJ0NyYWlnJyxcbiAgICBsYXN0TmFtZTogJ0Jlcm50c29uJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQ3JhaWcgaGFzIGEgcGFzc2lvbiBmb3IgY29tbXVuaXR5IGFuZCBoZWxwaW5nIG90aGVyIGRldmVsb3BlcnMgaW1wcm92ZSB0aGVpciBza2lsbHMuIEhlIHdyaXRlcyB0aGUgY29sdW1uIFwiU29mdHdhcmUgR2FyZGVuaW5nXCIgaW4gRG90TmV0IEN1cnJ5IE1hZ2F6aW5lIGFuZCBpcyB0aGUgY28tYXV0aG9yIG9mIFwiQ29udGludW91cyBJbnRlZ3JhdGlvbiBpbiAuTkVUXCIgYXZhaWxhYmxlIGZyb20gTWFubmluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwODAzLFxuICAgIGZpcnN0TmFtZTogJ0V1Z2VuZScsXG4gICAgbGFzdE5hbWU6ICdDaHV2eXJvdicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdFdWdlbmUgQ2h1dnlyb3YgaXMgIGEgU2VuaW9yIENsb3VkIEFyY2hpdGVjdCBhdCBNaWNyb3NvZnQuIEhlIHdvcmtzIGRpcmVjdGx5IHdpdGggYm90aCBzdGFydHVwcyBhbmQgZW50ZXJwcmlzZXMgdG8gZW5hYmxlIHRoZWlyIHNvbHV0aW9ucyBpbiBNaWNyb3NvZnQgY2xvdWQsIGFuZCB0byBtYWtlIEF6dXJlIGJldHRlciBhcyBhIHJlc3VsdCBvZiB0aGlzIHdvcmsgd2l0aCBwYXJ0bmVycy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDExMjQsXG4gICAgZmlyc3ROYW1lOiAnRG91Z2xhcycsXG4gICAgbGFzdE5hbWU6ICdDcm9ja2ZvcmQnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdEb3VnbGFzIENyb2NrZm9yZCBkaXNjb3ZlcmVkIHRoZSBKU09OIERhdGEgSW50ZXJjaGFuZ2UgRm9ybWF0LiBIZSBpcyBhbHNvIHRoZSBhdXRob3Igb2YgX0phdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXy4gSGUgaGFzIGJlZW4gY2FsbGVkIGEgZ3VydSwgYnV0IGhlIGlzIGFjdHVhbGx5IG1vcmUgb2YgYSBtYWhhdG1hLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDE4MDgsXG4gICAgZmlyc3ROYW1lOiAnUGF1bCcsXG4gICAgbGFzdE5hbWU6ICdFdmVyaXR0JyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnUGF1bCBpcyB0aGUgUHlDaGFybSBhbmQgV2ViU3Rvcm0gRGV2ZWxvcGVyIEFkdm9jYXRlIGF0IEpldEJyYWlucy4gQmVmb3JlIHRoYXQsIFBhdWwgd2FzIGEgcGFydG5lciBhdCBBZ2VuZGFsZXNzIENvbnN1bHRpbmcgYW5kIGNvLWZvdW5kZXIgb2YgWm9wZSBDb3Jwb3JhdGlvbiwgdGFraW5nIHRoZSBmaXJzdCBvcGVuIHNvdXJjZSBhcHBsaWNhdGlvbiBzZXJ2ZXIgdGhyb3VnaCAkMTRNIG9mIGZ1bmRpbmcuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMjY5LFxuICAgIGZpcnN0TmFtZTogJ0FydW4nLFxuICAgIGxhc3ROYW1lOiAnR3VwdGEnLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdBcnVuIEd1cHRhIGlzIGEgUHJpbmNpcGFsIE9wZW4gU291cmNlIFRlY2hub2xvZ2lzdCBhdCBBbWF6b24gV2ViIFNlcnZpY2VzLiBIZSBoYXMgYnVpbHQgYW5kIGxlZCBkZXZlbG9wZXIgY29tbXVuaXRpZXMgZm9yIDEyKyB5ZWFycyBhdCBTdW4sIE9yYWNsZSwgUmVkIEhhdCBhbmQgQ291Y2hiYXNlLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTcyNSxcbiAgICBmaXJzdE5hbWU6ICdCcmFkJyxcbiAgICBsYXN0TmFtZTogJ0lyYnknLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQnJhZCBpcyBhbiBhY2NvbXBsaXNoZWQgLk5FVCBzb2Z0d2FyZSBhcmNoaXRlY3Qgc3BlY2lhbGl6aW5nIGluIERvbWFpbiBEcml2ZW4gRGVzaWduIGFuZCBFdmVudCBEcml2ZW4gQXJjaGl0ZWN0dXJlcy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4ODA1LFxuICAgIGZpcnN0TmFtZTogJ01pY2tleSBXLicsXG4gICAgbGFzdE5hbWU6ICdNYW50bGUnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdNaWNrZXkgaGFzIGJlZW4gZGV2ZWxvcGluZyBzb2Z0d2FyZSBzeXN0ZW1zIGFuZCBwcm9kdWN0cyBmb3Igb3ZlciA0MCB5ZWFycywgYXMgYSBzeXN0ZW1zIHByb2dyYW1tZXIsIFRlY2ggTGVhZCwgTWFuYWdlciwgVlAgRW5naW5lZXJpbmcsIENUTywgQ09PLCBhbmQgbm93IENFTy9DVE8gb2YgaGlzIG93biBjb21wYW55LicsXG4gIH0sXG4gIHtcbiAgICBpZDogODM2NyxcbiAgICBmaXJzdE5hbWU6ICdHYXlsZSBMYWFrbWFubicsXG4gICAgbGFzdE5hbWU6ICdNY0Rvd2VsbCcsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdHYXlsZSBMYWFrbWFubiBNY0Rvd2VsbCBpcyB0aGUgZm91bmRlciBhbmQgQ0VPIG9mIENhcmVlckN1cC5jb20gYW5kIHRoZSBhdXRob3Igb2YgdGhyZWUgYmVzdCBzZWxsaW5nIGJvb2tzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTg3LFxuICAgIGZpcnN0TmFtZTogJ0RhdmUnLFxuICAgIGxhc3ROYW1lOiAnTmllbHNlbicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0FzIEhlYWQgb2YgRWNvc3lzdGVtIFByb2dyYW1zLCBEYXZlIHVzZXMgZW1lcmdpbmcgdGVjaG5vbG9naWVzIGFuZCBvcGVuIHNvdXJjZSBwcm9qZWN0cyBsaWtlIE1pY3Jvc2VydmljZXMsIFNlcnZlcmxlc3MgJiBLdWJlcm5ldGVzIHRvIGJyaW5nIHRoZSBtYWdpYyBvZiBSZWRpcyB0byB0aGUgYnJvYWRlciBjb21tdW5pdHkuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA4MjMsXG4gICAgZmlyc3ROYW1lOiAnS2V2aW4nLFxuICAgIGxhc3ROYW1lOiAnTmlsc29uJyxcbiAgICBzYXQ6IGZhbHNlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICBcIlRlYW0gTGVhZCBvZiB0aGUgQ2hyb21lY2FzdCBUZWNobmljYWwgU29sdXRpb25zIEVuZ2luZWVyIHRlYW0sIGEgSmF2YSBDaGFtcGlvbiBhbmQgdGhyZWUgdGltZSBKYXZhT25lIFJvY2sgU3RhciBQcmVzZW50ZXIuIEtldmluIGhhcyBzcG9rZW4gYXQgY29uZmVyZW5jZXMgc3VjaCBhcyBKYXZhT25lLCBEZXZveHgsIEpBWCwgTydSZWlsbHkgRmx1ZW50LCBTaWxpY29uIFZhbGxleSBDb2RlIENhbXAsIEpBWCBhbmQgSFRNTDVEZXZDb25mLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDg1OTAsXG4gICAgZmlyc3ROYW1lOiAnQ2hyaXMnLFxuICAgIGxhc3ROYW1lOiAnUmljaGFyZHNvbicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdDaHJpcyBSaWNoYXJkc29uIGlzIGEgZGV2ZWxvcGVyIGFuZCBhcmNoaXRlY3QuIEhlIGlzIGEgSmF2YSBDaGFtcGlvbiwgYSBKYXZhT25lIHJvY2sgc3RhciBhbmQgdGhlIGF1dGhvciBvZiBQT0pPcyBpbiBBY3Rpb24sIHdoaWNoIGRlc2NyaWJlcyBob3cgdG8gYnVpbGQgZW50ZXJwcmlzZSBKYXZhIGFwcGxpY2F0aW9ucyB3aXRoIGZyYW1ld29ya3Mgc3VjaCBhcyBTcHJpbmcgYW5kIEhpYmVybmF0ZS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwODA4LFxuICAgIGZpcnN0TmFtZTogJ0FudG9ueScsXG4gICAgbGFzdE5hbWU6ICdSb3NzJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICAnQW50b255IFJvc3MgaXMgYSBjb25zdWx0YW50IHNwZWNpYWxpemluZyBpbiBkYXRhIHNjaWVuY2UgYW5kIG1hY2hpbmUgbGVhcm5pbmcgYXBwbGllZCB0byBzcG9ydHMgcGVyZm9ybWFuY2UuIEhlIGhhcyB3b3JrZWQgY2xvc2VseSB3aXRoIFVTQyBhbmQgVUNMQSBhbmQgaXMgcHJlc2VudGx5IGludm9sdmVkIHdpdGggdGhlIFJlY3Vyc2UgQ2VudGVyIGluIE5ldyBZb3JrIHJlc2VhcmNoaW5nIGRlZXAgbGVhcm5pbmcgYW5kIHZvaWNlIHJlY29nbml0aW9uLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyRGF0YTtcbiIsImltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4vSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTcGVha2VyRGV0YWlsID0gICh7XG4gIGlkLFxuICBmaXJzdE5hbWUsXG4gIGxhc3ROYW1lLFxuICBmYXZvcml0ZSxcbiAgYmlvLFxuICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyLFxufSkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKGBTcGVha2VyIDogJHtpZH0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCk7XG4gIHJldHVybiAoXG5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuXG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGF0YS1zZXNzaW9uaWQ9e2lkfSAvL2F0dHJpYnV0ZSB0byBzdG9yZSBJRFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgIWZhdm9yaXRlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtmaXJzdE5hbWV9IHtsYXN0TmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxzcGFuPntiaW99PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNwZWFrZXJEZXRhaWwpOyAvL3dyYXBwaW5nIHRoZSBjb21wb25lbnQgaW5zaWRlIG1lbW8sICBzbyB0aGF0IGl0IGNhY2hlcyAvIG1lbW9pemVkIHZlcnNpb24gb2Ygc3BlYWtlciBkZXRhaWwgdG8gdGhlIGNhbGxpbmcgY29tcG9uZW50XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsJztcblxuaW1wb3J0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciBmcm9tICcuL3VzZVNwZWFrZXJEYXRhTWFuYWdlcic7XG5cbmNvbnN0IFNwZWFrZXJzID0gKHsgfSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwgW10pIC8vdXNpbmcgdXNlUmVkdWNlciBpbnN0ZWQgb2YgdXNlU3RhdGVcbiAgY29uc3Qge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIGRpc3BhdGNofSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0Lmxlbmd0aCA+IDAgP1xuICAgIHNwZWFrZXJMaXN0XG4gICAgICAuZmlsdGVyKFxuICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICApXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSkgOiBudWxsLFtzcGVha2luZ1NhdHVyZGF5LHNwZWFraW5nU3VuZGF5LHNwZWFrZXJMaXN0XSkgLy8gZmlsdGVyIG9ubHkgd2hlbiB0aGVzZSBkZXAuIGNoYW5nZWRcblxuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiBuZXdTcGVha2VyTGlzdFxuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7IC8vIGdldCB0aGUgSUQgdmFsdWUgZnJvbSBhdHRyaWJ1dGUgY29udmVydCBpbnRvIGludFxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3VyaXRlXCIgOiBcInVuZmF2b3VyaXRlXCIsXG4gICAgICBpZDogc2Vzc2lvbklkXG5cbiAgICB9KVxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWtib3gtYmlnZ2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkID8gc3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iLCJjb25zdCBzcGVha2Vyc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnc2V0U3BlYWtlckxpc3QnOiB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0IDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZyA6IGZhbHNlfVxyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2Zhdm91cml0ZSc6IHtcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdCA6IHVwZGF0ZUZhdm9yaXRlKHRydWUpIH1cclxuICAgICAgfVxyXG4gICAgICBjYXNlICd1bmZhdm91cml0ZSc6IHtcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdCA6IHVwZGF0ZUZhdm9yaXRlKGZhbHNlKSB9XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlKGZhdm9yaXRlVmFsdWUpIHsgLy90byB1cGRhdGUgZmF2LlxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zcGVha2VyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzUmVkdWNlcjsiLCJpbXBvcnQgc3BlYWtlcnNSZWR1Y2VyIGZyb20gXCIuL3NwZWFrZXJzUmVkdWNlclwiO1xyXG5pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTcGVha2VyRGF0YW1hbmFnZXIgPSAoKSA9PiB7XHJcbmNvbnN0IFt7IGlzTG9hZGluZywgc3BlYWtlckxpc3QgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcclxuICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgIHNwZWFrZXJMaXN0OiBbXVxyXG59KSAvL3VzZVJlZHVjZXIobWV0aG9kLGluaXRpYWxWYWx1ZSlcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gdG8gZGVsYXkgYW5kIHNob3cgbG9hZGluZy4uXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyAvL3VzaW5nIGRpc3BhdGNoIHRvIHNldCBhY3Rpb24gdHlwZSwgaXQgd2lsbCBpbnZva2UgJ3NwZWFrZXJzUmVkdWNlcidcclxuICAgICAgICAgICAgdHlwZTogJ3NldFNwZWFrZXJMaXN0JyxcclxuICAgICAgICAgICAgZGF0YTogc3BlYWtlckRhdGEsIC8vIHBhc3NzIHRoZSBmaWx0ZXJlZCBkYXRhICYgdXBkYXRlIHN0YXRlICdzcGVha2VyTGlzdCdcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcclxuICAgIH07XHJcbn0sIFtdKTtcclxuXHJcbnJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZGlzcGF0Y2h9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YW1hbmFnZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
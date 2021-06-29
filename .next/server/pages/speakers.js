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
  speakerRec,
  onHeartFavoriteHandler
}) => {
  const {
    id,
    firstName,
    lastName,
    favorite
  } = speakerRec;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: `${firstName}  ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
    toggleSpeakerFavourite
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
  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, speakerRec) => {
    e.preventDefault(); // const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // get the ID value from attribute convert into int

    toggleSpeakerFavourite(speakerRec);
  }, []);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
                lineNumber: 64,
                columnNumber: 17
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
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
                lineNumber: 75,
                columnNumber: 17
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered ? speakerListFiltered.map(speakerRec => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, undefined);
          }) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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

  function toggleSpeakerFavourite(speakerRec) {
    speakerRec.favorite === true ? dispatch({
      type: 'unfavourite',
      id: speakerRec.id
    }) : dispatch({
      type: 'favourite',
      id: speakerRec.id
    });
  }

  return {
    isLoading,
    speakerList,
    toggleSpeakerFavourite
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9zcGVha2Vycy5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfEM6XFxVc2Vyc1xcMTE4M1xcSG9va3NcXGhvb2tzXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsic3BlYWtlcnMiLCJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJwYWdlVG9TaG93IiwicGFnZU5hbWUiLCJjb25maWdWYWx1ZSIsInNob3dTaWduTWVVcCIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwiQXBwIiwiSGVhZGVyIiwic2lnbnVwQ2FsbGJhY2siLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0Iiwic3BlYWtlckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiZmF2b3JpdGUiLCJiaW8iLCJTcGVha2VyRGV0YWlsIiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJTcGVha2VycyIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInNwZWFrZXJMaXN0IiwidG9nZ2xlU3BlYWtlckZhdm91cml0ZSIsInVzZVNwZWFrZXJEYXRhTWFuYWdlciIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwibmV3U3BlYWtlckxpc3QiLCJ1c2VNZW1vIiwibGVuZ3RoIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsInNwZWFrZXJzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJ1cGRhdGVGYXZvcml0ZSIsImZhdm9yaXRlVmFsdWUiLCJpdGVtIiwidXNlU3BlYWtlckRhdGFtYW5hZ2VyIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7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Q29udGVudCI6WyIgIFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy9BcHAnO1xyXG5cclxuZnVuY3Rpb24gc3BlYWtlcnMoKSB7XHJcbiAgcmV0dXJuIDxBcHAgcGFnZU5hbWU9XCJTcGVha2Vyc1wiIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcbmltcG9ydCBTcGVha2VycyBmcm9tICcuL1NwZWFrZXJzJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IHBhZ2VUb1Nob3cgPSBwYWdlTmFtZSA9PiB7XG4gIGlmIChwYWdlTmFtZSA9PT0gJ0hvbWUnKSByZXR1cm4gPEhvbWU+PC9Ib21lPjtcbiAgaWYgKHBhZ2VOYW1lID09PSAnU3BlYWtlcnMnKSByZXR1cm4gPFNwZWFrZXJzPjwvU3BlYWtlcnM+O1xuICByZXR1cm4gPGRpdj5Ob3QgRm91bmQ8L2Rpdj5cbn1cblxuY29uc3QgY29uZmlnVmFsdWUgPXtcbiAgc2hvd1NpZ25NZVVwOiBmYWxzZSxcbiAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgOiB0cnVlXG59XG5cbmNvbnN0IEFwcCA9ICh7IHBhZ2VOYW1lIH0pID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ1ZhbHVlfT5cbiAgICAgIDxkaXY+e3BhZ2VUb1Nob3cocGFnZU5hbWUpfTwvZGl2PlxuICAgIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduTWVVcCBmcm9tICcuL1NpZ25NZVVwJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgc2lnbnVwQ2FsbGJhY2sgPSAoZW1haWwpID0+IHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coYHNpZ24gdXAgY2FsbGVkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGp1bWJvdHJvbmhlaWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj5PY3RvYmVyIDE5LTIwIDIwMTk8L2g2PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPlNhbiBKb3NlLCBDYWxpZm9ybmlhPC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS04IHRleHQtbGctcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL1NWQ0Nsb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPlNpbGljb24gVmFsbGV5IENvZGUgQ2FtcDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyIHRleHQtbGctcmlnaHRcIj5cbiAgICAgICAgICAgIDxTaWduTWVVcCBzaWdudXBDYWxsYmFjaz17c2lnbnVwQ2FsbGJhY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtYXJnaW50b3Bib3R0b21cIj5cbiAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYXJnaW50b3Bib3R0b20yMFwiPlxuICAgICAgICAgICAgICBDb2RlIENhbXAgaXMgYSBjb21tdW5pdHkgZXZlbnQgd2hlcmUgZGV2ZWxvcGVycyBsZWFybiBmcm9tIGZlbGxvd1xuICAgICAgICAgICAgICBkZXZlbG9wZXJzLiBXZSBhbHNvIGhhdmUgZGV2ZWxvcGVyIHJlbGF0ZWQgdG9waWNzIHRoYXQgaW5jbHVkZVxuICAgICAgICAgICAgICBzb2Z0d2FyZSBicmFuZGluZywgbGVnYWwgaXNzdWVzIGFyb3VuZCBzb2Z0d2FyZSBhcyB3ZWxsIGFzIG90aGVyXG4gICAgICAgICAgICAgIHRvcGljcyBkZXZlbG9wZXJzIGFyZSBpbnRlcmVzdGVkIGluIGhlYXJpbmcgYWJvdXQuXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9e1xuICAgICAgICBpc0xvYWRpbmdcbiAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcbiAgICAgICAgICA6IGluVmlld1xuICAgICAgICAgID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXG4gICAgICB9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U3BlYWtlcnM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IFNpZ25NZVVwID0gKHsgc2lnbnVwQ2FsbGJhY2sgfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICByZXR1cm4gY29udGV4dC5zaG93U2lnbk1lVXAgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVtYWlsLmluY2x1ZGVzKCdAJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNpZ251cENhbGxiYWNrKGVtYWlsKTtcbiAgICAgICAgICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgICAgICAgICBhbGVydCgnc2lnbnVwIGNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZXQgVXBkYXRlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbk1lVXA7XG4iLCJjb25zdCBzcGVha2VyRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxNTMwLFxuICAgIGZpcnN0TmFtZTogJ1RhbW15JyxcbiAgICBsYXN0TmFtZTogJ0Jha2VyJyxcbiAgICBzYXQ6IGZhbHNlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICAnVGFtbXkgaGFzIGhlbGQgYSBudW1iZXIgb2YgZXhlY3V0aXZlIGFuZCBtYW5hZ2VtZW50IHJvbGVzIG92ZXIgdGhlIHBhc3QgMTUgeWVhcnMsIGluY2x1ZGluZyBWUCBlbmdpbmVlcmluZyBSb2xlcyBhdCBVU0EgVGVjaCwgQ2FudGFsb3VwZSBTeXN0ZW1zLCBFLUNvbG9yLCBhbmQgVW50YW5nbGUgSW5jLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNTk5NixcbiAgICBmaXJzdE5hbWU6ICdDcmFpZycsXG4gICAgbGFzdE5hbWU6ICdCZXJudHNvbicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0NyYWlnIGhhcyBhIHBhc3Npb24gZm9yIGNvbW11bml0eSBhbmQgaGVscGluZyBvdGhlciBkZXZlbG9wZXJzIGltcHJvdmUgdGhlaXIgc2tpbGxzLiBIZSB3cml0ZXMgdGhlIGNvbHVtbiBcIlNvZnR3YXJlIEdhcmRlbmluZ1wiIGluIERvdE5ldCBDdXJyeSBNYWdhemluZSBhbmQgaXMgdGhlIGNvLWF1dGhvciBvZiBcIkNvbnRpbnVvdXMgSW50ZWdyYXRpb24gaW4gLk5FVFwiIGF2YWlsYWJsZSBmcm9tIE1hbm5pbmcuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMDgwMyxcbiAgICBmaXJzdE5hbWU6ICdFdWdlbmUnLFxuICAgIGxhc3ROYW1lOiAnQ2h1dnlyb3YnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMTI0LFxuICAgIGZpcnN0TmFtZTogJ0RvdWdsYXMnLFxuICAgIGxhc3ROYW1lOiAnQ3JvY2tmb3JkJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICAnRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQxODA4LFxuICAgIGZpcnN0TmFtZTogJ1BhdWwnLFxuICAgIGxhc3ROYW1lOiAnRXZlcml0dCcsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ1BhdWwgaXMgdGhlIFB5Q2hhcm0gYW5kIFdlYlN0b3JtIERldmVsb3BlciBBZHZvY2F0ZSBhdCBKZXRCcmFpbnMuIEJlZm9yZSB0aGF0LCBQYXVsIHdhcyBhIHBhcnRuZXIgYXQgQWdlbmRhbGVzcyBDb25zdWx0aW5nIGFuZCBjby1mb3VuZGVyIG9mIFpvcGUgQ29ycG9yYXRpb24sIHRha2luZyB0aGUgZmlyc3Qgb3BlbiBzb3VyY2UgYXBwbGljYXRpb24gc2VydmVyIHRocm91Z2ggJDE0TSBvZiBmdW5kaW5nLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTI2OSxcbiAgICBmaXJzdE5hbWU6ICdBcnVuJyxcbiAgICBsYXN0TmFtZTogJ0d1cHRhJyxcbiAgICBzYXQ6IGZhbHNlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICAnQXJ1biBHdXB0YSBpcyBhIFByaW5jaXBhbCBPcGVuIFNvdXJjZSBUZWNobm9sb2dpc3QgYXQgQW1hem9uIFdlYiBTZXJ2aWNlcy4gSGUgaGFzIGJ1aWx0IGFuZCBsZWQgZGV2ZWxvcGVyIGNvbW11bml0aWVzIGZvciAxMisgeWVhcnMgYXQgU3VuLCBPcmFjbGUsIFJlZCBIYXQgYW5kIENvdWNoYmFzZS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE3MjUsXG4gICAgZmlyc3ROYW1lOiAnQnJhZCcsXG4gICAgbGFzdE5hbWU6ICdJcmJ5JyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0JyYWQgaXMgYW4gYWNjb21wbGlzaGVkIC5ORVQgc29mdHdhcmUgYXJjaGl0ZWN0IHNwZWNpYWxpemluZyBpbiBEb21haW4gRHJpdmVuIERlc2lnbiBhbmQgRXZlbnQgRHJpdmVuIEFyY2hpdGVjdHVyZXMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxODgwNSxcbiAgICBmaXJzdE5hbWU6ICdNaWNrZXkgVy4nLFxuICAgIGxhc3ROYW1lOiAnTWFudGxlJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnTWlja2V5IGhhcyBiZWVuIGRldmVsb3Bpbmcgc29mdHdhcmUgc3lzdGVtcyBhbmQgcHJvZHVjdHMgZm9yIG92ZXIgNDAgeWVhcnMsIGFzIGEgc3lzdGVtcyBwcm9ncmFtbWVyLCBUZWNoIExlYWQsIE1hbmFnZXIsIFZQIEVuZ2luZWVyaW5nLCBDVE8sIENPTywgYW5kIG5vdyBDRU8vQ1RPIG9mIGhpcyBvd24gY29tcGFueS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDgzNjcsXG4gICAgZmlyc3ROYW1lOiAnR2F5bGUgTGFha21hbm4nLFxuICAgIGxhc3ROYW1lOiAnTWNEb3dlbGwnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnR2F5bGUgTGFha21hbm4gTWNEb3dlbGwgaXMgdGhlIGZvdW5kZXIgYW5kIENFTyBvZiBDYXJlZXJDdXAuY29tIGFuZCB0aGUgYXV0aG9yIG9mIHRocmVlIGJlc3Qgc2VsbGluZyBib29rcy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4NyxcbiAgICBmaXJzdE5hbWU6ICdEYXZlJyxcbiAgICBsYXN0TmFtZTogJ05pZWxzZW4nLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdBcyBIZWFkIG9mIEVjb3N5c3RlbSBQcm9ncmFtcywgRGF2ZSB1c2VzIGVtZXJnaW5nIHRlY2hub2xvZ2llcyBhbmQgb3BlbiBzb3VyY2UgcHJvamVjdHMgbGlrZSBNaWNyb3NlcnZpY2VzLCBTZXJ2ZXJsZXNzICYgS3ViZXJuZXRlcyB0byBicmluZyB0aGUgbWFnaWMgb2YgUmVkaXMgdG8gdGhlIGJyb2FkZXIgY29tbXVuaXR5LicsXG4gIH0sXG4gIHtcbiAgICBpZDogODIzLFxuICAgIGZpcnN0TmFtZTogJ0tldmluJyxcbiAgICBsYXN0TmFtZTogJ05pbHNvbicsXG4gICAgc2F0OiBmYWxzZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgXCJUZWFtIExlYWQgb2YgdGhlIENocm9tZWNhc3QgVGVjaG5pY2FsIFNvbHV0aW9ucyBFbmdpbmVlciB0ZWFtLCBhIEphdmEgQ2hhbXBpb24gYW5kIHRocmVlIHRpbWUgSmF2YU9uZSBSb2NrIFN0YXIgUHJlc2VudGVyLiBLZXZpbiBoYXMgc3Bva2VuIGF0IGNvbmZlcmVuY2VzIHN1Y2ggYXMgSmF2YU9uZSwgRGV2b3h4LCBKQVgsIE8nUmVpbGx5IEZsdWVudCwgU2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wLCBKQVggYW5kIEhUTUw1RGV2Q29uZi5cIixcbiAgfSxcbiAge1xuICAgIGlkOiA4NTkwLFxuICAgIGZpcnN0TmFtZTogJ0NocmlzJyxcbiAgICBsYXN0TmFtZTogJ1JpY2hhcmRzb24nLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQ2hyaXMgUmljaGFyZHNvbiBpcyBhIGRldmVsb3BlciBhbmQgYXJjaGl0ZWN0LiBIZSBpcyBhIEphdmEgQ2hhbXBpb24sIGEgSmF2YU9uZSByb2NrIHN0YXIgYW5kIHRoZSBhdXRob3Igb2YgUE9KT3MgaW4gQWN0aW9uLCB3aGljaCBkZXNjcmliZXMgaG93IHRvIGJ1aWxkIGVudGVycHJpc2UgSmF2YSBhcHBsaWNhdGlvbnMgd2l0aCBmcmFtZXdvcmtzIHN1Y2ggYXMgU3ByaW5nIGFuZCBIaWJlcm5hdGUuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMDgwOCxcbiAgICBmaXJzdE5hbWU6ICdBbnRvbnknLFxuICAgIGxhc3ROYW1lOiAnUm9zcycsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ0FudG9ueSBSb3NzIGlzIGEgY29uc3VsdGFudCBzcGVjaWFsaXppbmcgaW4gZGF0YSBzY2llbmNlIGFuZCBtYWNoaW5lIGxlYXJuaW5nIGFwcGxpZWQgdG8gc3BvcnRzIHBlcmZvcm1hbmNlLiBIZSBoYXMgd29ya2VkIGNsb3NlbHkgd2l0aCBVU0MgYW5kIFVDTEEgYW5kIGlzIHByZXNlbnRseSBpbnZvbHZlZCB3aXRoIHRoZSBSZWN1cnNlIENlbnRlciBpbiBOZXcgWW9yayByZXNlYXJjaGluZyBkZWVwIGxlYXJuaW5nIGFuZCB2b2ljZSByZWNvZ25pdGlvbi4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlckRhdGE7XG4iLCJpbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9ICAoe1xuICBzcGVha2VyUmVjLFxuICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyLFxufSkgPT4ge1xuXG4gIGNvbnN0IHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZmF2b3JpdGV9ID0gc3BlYWtlclJlYztcbiAgcmV0dXJuIChcblxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XG5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIGFsdD17YCR7Zmlyc3ROYW1lfSAgJHtsYXN0TmFtZX1gfVxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgc3BlYWtlclJlYyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2g0PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTcGVha2VyRGV0YWlsKTsgLy93cmFwcGluZyB0aGUgY29tcG9uZW50IGluc2lkZSBtZW1vLCAgc28gdGhhdCBpdCBjYWNoZXMgLyBtZW1vaXplZCB2ZXJzaW9uIG9mIHNwZWFrZXIgZGV0YWlsIHRvIHRoZSBjYWxsaW5nIGNvbXBvbmVudFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5cbmltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSAnLi91c2VTcGVha2VyRGF0YU1hbmFnZXInO1xuXG5jb25zdCBTcGVha2VycyA9ICh7IH0pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKSAvL3VzaW5nIHVzZVJlZHVjZXIgaW5zdGVkIG9mIHVzZVN0YXRlXG4gIGNvbnN0IHtpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3VyaXRlfSA9IHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0Lmxlbmd0aCA+IDAgP1xuICAgIHNwZWFrZXJMaXN0XG4gICAgICAuZmlsdGVyKFxuICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICApXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSkgOiBudWxsLFtzcGVha2luZ1NhdHVyZGF5LHNwZWFraW5nU3VuZGF5LHNwZWFrZXJMaXN0XSkgLy8gZmlsdGVyIG9ubHkgd2hlbiB0aGVzZSBkZXAuIGNoYW5nZWRcblxuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiBuZXdTcGVha2VyTGlzdFxuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHNwZWFrZXJSZWMpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7IC8vIGdldCB0aGUgSUQgdmFsdWUgZnJvbSBhdHRyaWJ1dGUgY29udmVydCBpbnRvIGludFxuXG4gICAgdG9nZ2xlU3BlYWtlckZhdm91cml0ZShzcGVha2VyUmVjKVxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWtib3gtYmlnZ2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkID8gc3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgIChzcGVha2VyUmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlclJlYy5pZH1cbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0Jzoge1xyXG4gICAgICAgIC8vIHJldHVybiBhY3Rpb24uZGF0YTtcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcGVha2VyTGlzdCA6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmcgOiBmYWxzZX1cclxuICAgICAgfVxyXG4gICAgICBjYXNlICdmYXZvdXJpdGUnOiB7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3QgOiB1cGRhdGVGYXZvcml0ZSh0cnVlKSB9XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAndW5mYXZvdXJpdGUnOiB7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3QgOiB1cGRhdGVGYXZvcml0ZShmYWxzZSkgfVxyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7IC8vdG8gdXBkYXRlIGZhdi5cclxuICAgICAgICByZXR1cm4gc3RhdGUuc3BlYWtlckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7IiwiaW1wb3J0IHNwZWFrZXJzUmVkdWNlciBmcm9tIFwiLi9zcGVha2Vyc1JlZHVjZXJcIjtcclxuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlU3BlYWtlckRhdGFtYW5hZ2VyID0gKCkgPT4ge1xyXG5jb25zdCBbeyBpc0xvYWRpbmcsIHNwZWFrZXJMaXN0IH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCB7XHJcbiAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICBzcGVha2VyTGlzdDogW11cclxufSkgLy91c2VSZWR1Y2VyKG1ldGhvZCxpbml0aWFsVmFsdWUpXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vIHRvIGRlbGF5IGFuZCBzaG93IGxvYWRpbmcuLlxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgLy91c2luZyBkaXNwYXRjaCB0byBzZXQgYWN0aW9uIHR5cGUsIGl0IHdpbGwgaW52b2tlICdzcGVha2Vyc1JlZHVjZXInXHJcbiAgICAgICAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHNwZWFrZXJEYXRhLCAvLyBwYXNzcyB0aGUgZmlsdGVyZWQgZGF0YSAmIHVwZGF0ZSBzdGF0ZSAnc3BlYWtlckxpc3QnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XHJcbiAgICB9O1xyXG59LCBbXSk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTcGVha2VyRmF2b3VyaXRlKHNwZWFrZXJSZWMpe1xyXG4gICAgc3BlYWtlclJlYy5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFxyXG4gICAgZGlzcGF0Y2goe3R5cGUgOiAndW5mYXZvdXJpdGUnLCBpZCA6IHNwZWFrZXJSZWMuaWR9KSA6IGRpc3BhdGNoKHt0eXBlIDogJ2Zhdm91cml0ZScsIGlkIDogc3BlYWtlclJlYy5pZH0pXHJcbn1cclxuXHJcbnJldHVybiB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm91cml0ZX1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhbWFuYWdlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
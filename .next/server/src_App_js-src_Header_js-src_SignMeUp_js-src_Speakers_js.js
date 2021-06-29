exports.id = "src_App_js-src_Header_js-src_SignMeUp_js-src_Speakers_js";
exports.ids = ["src_App_js-src_Header_js-src_SignMeUp_js-src_Speakers_js"];
exports.modules = {

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfEM6XFxVc2Vyc1xcMTE4M1xcSG9va3NcXGhvb2tzXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiY29uZmlnVmFsdWUiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIkFwcCIsIkhlYWRlciIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJhbGVydCIsInNwZWFrZXJEYXRhIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNhdCIsInN1biIsImZhdm9yaXRlIiwiYmlvIiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJSZWMiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyTGlzdCIsInRvZ2dsZVNwZWFrZXJGYXZvdXJpdGUiLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImxlbmd0aCIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwiaXRlbSIsInVzZVNwZWFrZXJEYXRhbWFuYWdlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxnQkFBR0MsMERBQUEsRUFBdEI7O0FBRVAsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLElBQUk7QUFDN0IsTUFBSUEsUUFBUSxLQUFLLE1BQWpCLEVBQXlCLG9CQUFPLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUN6QixNQUFJQSxRQUFRLEtBQUssVUFBakIsRUFBNkIsb0JBQU8sOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQzdCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1DLFdBQVcsR0FBRTtBQUNqQkMsY0FBWSxFQUFFLEtBREc7QUFFakJDLHlCQUF1QixFQUFHO0FBRlQsQ0FBbkI7O0FBS0EsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWtCO0FBRTVCLHNCQUNFLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRUMsV0FBL0I7QUFBQSwyQkFDRTtBQUFBLGdCQUFNRixVQUFVLENBQUNDLFFBQUQ7QUFBaEI7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QixhQUFEO0FBQVkyQyxlQUFaO0FBQXlCQztBQUF6QixHQUFQO0FBRUMsQ0FqQ0Q7O0FBbUNBLCtEQUFld0IscUJBQWYsRTs7Ozs7Ozs7OztBQ3ZDQSxlIiwiZmlsZSI6InNyY19BcHBfanMtc3JjX0hlYWRlcl9qcy1zcmNfU2lnbk1lVXBfanMtc3JjX1NwZWFrZXJzX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XG5cbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBwYWdlVG9TaG93ID0gcGFnZU5hbWUgPT4ge1xuICBpZiAocGFnZU5hbWUgPT09ICdIb21lJykgcmV0dXJuIDxIb21lPjwvSG9tZT47XG4gIGlmIChwYWdlTmFtZSA9PT0gJ1NwZWFrZXJzJykgcmV0dXJuIDxTcGVha2Vycz48L1NwZWFrZXJzPjtcbiAgcmV0dXJuIDxkaXY+Tm90IEZvdW5kPC9kaXY+XG59XG5cbmNvbnN0IGNvbmZpZ1ZhbHVlID17XG4gIHNob3dTaWduTWVVcDogZmFsc2UsXG4gIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzIDogdHJ1ZVxufVxuXG5jb25zdCBBcHAgPSAoeyBwYWdlTmFtZSB9KSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbk1lVXAgZnJvbSAnLi9TaWduTWVVcCc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBzaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+T2N0b2JlciAxOS0yMCAyMDE5PC9oNj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj5TYW4gSm9zZSwgQ2FsaWZvcm5pYTwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCB0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9TVkNDbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICA8U2lnbk1lVXAgc2lnbnVwQ2FsbGJhY2s9e3NpZ251cENhbGxiYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XG4gICAgICAgICAgICA8aDI+SG9tZTwvaDI+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWFyZ2ludG9wYm90dG9tMjBcIj5cbiAgICAgICAgICAgICAgQ29kZSBDYW1wIGlzIGEgY29tbXVuaXR5IGV2ZW50IHdoZXJlIGRldmVsb3BlcnMgbGVhcm4gZnJvbSBmZWxsb3dcbiAgICAgICAgICAgICAgZGV2ZWxvcGVycy4gV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljcyB0aGF0IGluY2x1ZGVcbiAgICAgICAgICAgICAgc29mdHdhcmUgYnJhbmRpbmcsIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlclxuICAgICAgICAgICAgICB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBpbiBoZWFyaW5nIGFib3V0LlxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfTtcblxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPXtcbiAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PScgLy8gMXgxZ2lmXG4gICAgICAgICAgOiBpblZpZXdcbiAgICAgICAgICA/IHNlY29uZGFyeUltZ1xuICAgICAgICAgIDogcHJpbWFyeUltZ1xuICAgICAgfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcGVha2Vyc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXJzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBTaWduTWVVcCA9ICh7IHNpZ251cENhbGxiYWNrIH0pID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgcmV0dXJuIGNvbnRleHQuc2hvd1NpZ25NZVVwID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcygnQCcpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XG4gICAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ3NpZ251cCBjb25maXJtZWQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IFVwZGF0ZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwO1xuIiwiY29uc3Qgc3BlYWtlckRhdGEgPSBbXG4gIHtcbiAgICBpZDogMTUzMCxcbiAgICBmaXJzdE5hbWU6ICdUYW1teScsXG4gICAgbGFzdE5hbWU6ICdCYWtlcicsXG4gICAgc2F0OiBmYWxzZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ1RhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgVVNBIFRlY2gsIENhbnRhbG91cGUgU3lzdGVtcywgRS1Db2xvciwgYW5kIFVudGFuZ2xlIEluYy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDU5OTYsXG4gICAgZmlyc3ROYW1lOiAnQ3JhaWcnLFxuICAgIGxhc3ROYW1lOiAnQmVybnRzb24nLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdDcmFpZyBoYXMgYSBwYXNzaW9uIGZvciBjb21tdW5pdHkgYW5kIGhlbHBpbmcgb3RoZXIgZGV2ZWxvcGVycyBpbXByb3ZlIHRoZWlyIHNraWxscy4gSGUgd3JpdGVzIHRoZSBjb2x1bW4gXCJTb2Z0d2FyZSBHYXJkZW5pbmdcIiBpbiBEb3ROZXQgQ3VycnkgTWFnYXppbmUgYW5kIGlzIHRoZSBjby1hdXRob3Igb2YgXCJDb250aW51b3VzIEludGVncmF0aW9uIGluIC5ORVRcIiBhdmFpbGFibGUgZnJvbSBNYW5uaW5nLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTA4MDMsXG4gICAgZmlyc3ROYW1lOiAnRXVnZW5lJyxcbiAgICBsYXN0TmFtZTogJ0NodXZ5cm92JyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0V1Z2VuZSBDaHV2eXJvdiBpcyAgYSBTZW5pb3IgQ2xvdWQgQXJjaGl0ZWN0IGF0IE1pY3Jvc29mdC4gSGUgd29ya3MgZGlyZWN0bHkgd2l0aCBib3RoIHN0YXJ0dXBzIGFuZCBlbnRlcnByaXNlcyB0byBlbmFibGUgdGhlaXIgc29sdXRpb25zIGluIE1pY3Jvc29mdCBjbG91ZCwgYW5kIHRvIG1ha2UgQXp1cmUgYmV0dGVyIGFzIGEgcmVzdWx0IG9mIHRoaXMgd29yayB3aXRoIHBhcnRuZXJzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEyNCxcbiAgICBmaXJzdE5hbWU6ICdEb3VnbGFzJyxcbiAgICBsYXN0TmFtZTogJ0Nyb2NrZm9yZCcsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ0RvdWdsYXMgQ3JvY2tmb3JkIGRpc2NvdmVyZWQgdGhlIEpTT04gRGF0YSBJbnRlcmNoYW5nZSBGb3JtYXQuIEhlIGlzIGFsc28gdGhlIGF1dGhvciBvZiBfSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNfLiBIZSBoYXMgYmVlbiBjYWxsZWQgYSBndXJ1LCBidXQgaGUgaXMgYWN0dWFsbHkgbW9yZSBvZiBhIG1haGF0bWEuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MTgwOCxcbiAgICBmaXJzdE5hbWU6ICdQYXVsJyxcbiAgICBsYXN0TmFtZTogJ0V2ZXJpdHQnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdQYXVsIGlzIHRoZSBQeUNoYXJtIGFuZCBXZWJTdG9ybSBEZXZlbG9wZXIgQWR2b2NhdGUgYXQgSmV0QnJhaW5zLiBCZWZvcmUgdGhhdCwgUGF1bCB3YXMgYSBwYXJ0bmVyIGF0IEFnZW5kYWxlc3MgQ29uc3VsdGluZyBhbmQgY28tZm91bmRlciBvZiBab3BlIENvcnBvcmF0aW9uLCB0YWtpbmcgdGhlIGZpcnN0IG9wZW4gc291cmNlIGFwcGxpY2F0aW9uIHNlcnZlciB0aHJvdWdoICQxNE0gb2YgZnVuZGluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEyNjksXG4gICAgZmlyc3ROYW1lOiAnQXJ1bicsXG4gICAgbGFzdE5hbWU6ICdHdXB0YScsXG4gICAgc2F0OiBmYWxzZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ0FydW4gR3VwdGEgaXMgYSBQcmluY2lwYWwgT3BlbiBTb3VyY2UgVGVjaG5vbG9naXN0IGF0IEFtYXpvbiBXZWIgU2VydmljZXMuIEhlIGhhcyBidWlsdCBhbmQgbGVkIGRldmVsb3BlciBjb21tdW5pdGllcyBmb3IgMTIrIHllYXJzIGF0IFN1biwgT3JhY2xlLCBSZWQgSGF0IGFuZCBDb3VjaGJhc2UuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxNzI1LFxuICAgIGZpcnN0TmFtZTogJ0JyYWQnLFxuICAgIGxhc3ROYW1lOiAnSXJieScsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdCcmFkIGlzIGFuIGFjY29tcGxpc2hlZCAuTkVUIHNvZnR3YXJlIGFyY2hpdGVjdCBzcGVjaWFsaXppbmcgaW4gRG9tYWluIERyaXZlbiBEZXNpZ24gYW5kIEV2ZW50IERyaXZlbiBBcmNoaXRlY3R1cmVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTg4MDUsXG4gICAgZmlyc3ROYW1lOiAnTWlja2V5IFcuJyxcbiAgICBsYXN0TmFtZTogJ01hbnRsZScsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ01pY2tleSBoYXMgYmVlbiBkZXZlbG9waW5nIHNvZnR3YXJlIHN5c3RlbXMgYW5kIHByb2R1Y3RzIGZvciBvdmVyIDQwIHllYXJzLCBhcyBhIHN5c3RlbXMgcHJvZ3JhbW1lciwgVGVjaCBMZWFkLCBNYW5hZ2VyLCBWUCBFbmdpbmVlcmluZywgQ1RPLCBDT08sIGFuZCBub3cgQ0VPL0NUTyBvZiBoaXMgb3duIGNvbXBhbnkuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA4MzY3LFxuICAgIGZpcnN0TmFtZTogJ0dheWxlIExhYWttYW5uJyxcbiAgICBsYXN0TmFtZTogJ01jRG93ZWxsJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0dheWxlIExhYWttYW5uIE1jRG93ZWxsIGlzIHRoZSBmb3VuZGVyIGFuZCBDRU8gb2YgQ2FyZWVyQ3VwLmNvbSBhbmQgdGhlIGF1dGhvciBvZiB0aHJlZSBiZXN0IHNlbGxpbmcgYm9va3MuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxODcsXG4gICAgZmlyc3ROYW1lOiAnRGF2ZScsXG4gICAgbGFzdE5hbWU6ICdOaWVsc2VuJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQXMgSGVhZCBvZiBFY29zeXN0ZW0gUHJvZ3JhbXMsIERhdmUgdXNlcyBlbWVyZ2luZyB0ZWNobm9sb2dpZXMgYW5kIG9wZW4gc291cmNlIHByb2plY3RzIGxpa2UgTWljcm9zZXJ2aWNlcywgU2VydmVybGVzcyAmIEt1YmVybmV0ZXMgdG8gYnJpbmcgdGhlIG1hZ2ljIG9mIFJlZGlzIHRvIHRoZSBicm9hZGVyIGNvbW11bml0eS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDgyMyxcbiAgICBmaXJzdE5hbWU6ICdLZXZpbicsXG4gICAgbGFzdE5hbWU6ICdOaWxzb24nLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgIFwiVGVhbSBMZWFkIG9mIHRoZSBDaHJvbWVjYXN0IFRlY2huaWNhbCBTb2x1dGlvbnMgRW5naW5lZXIgdGVhbSwgYSBKYXZhIENoYW1waW9uIGFuZCB0aHJlZSB0aW1lIEphdmFPbmUgUm9jayBTdGFyIFByZXNlbnRlci4gS2V2aW4gaGFzIHNwb2tlbiBhdCBjb25mZXJlbmNlcyBzdWNoIGFzIEphdmFPbmUsIERldm94eCwgSkFYLCBPJ1JlaWxseSBGbHVlbnQsIFNpbGljb24gVmFsbGV5IENvZGUgQ2FtcCwgSkFYIGFuZCBIVE1MNURldkNvbmYuXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogODU5MCxcbiAgICBmaXJzdE5hbWU6ICdDaHJpcycsXG4gICAgbGFzdE5hbWU6ICdSaWNoYXJkc29uJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0NocmlzIFJpY2hhcmRzb24gaXMgYSBkZXZlbG9wZXIgYW5kIGFyY2hpdGVjdC4gSGUgaXMgYSBKYXZhIENoYW1waW9uLCBhIEphdmFPbmUgcm9jayBzdGFyIGFuZCB0aGUgYXV0aG9yIG9mIFBPSk9zIGluIEFjdGlvbiwgd2hpY2ggZGVzY3JpYmVzIGhvdyB0byBidWlsZCBlbnRlcnByaXNlIEphdmEgYXBwbGljYXRpb25zIHdpdGggZnJhbWV3b3JrcyBzdWNoIGFzIFNwcmluZyBhbmQgSGliZXJuYXRlLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTA4MDgsXG4gICAgZmlyc3ROYW1lOiAnQW50b255JyxcbiAgICBsYXN0TmFtZTogJ1Jvc3MnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdBbnRvbnkgUm9zcyBpcyBhIGNvbnN1bHRhbnQgc3BlY2lhbGl6aW5nIGluIGRhdGEgc2NpZW5jZSBhbmQgbWFjaGluZSBsZWFybmluZyBhcHBsaWVkIHRvIHNwb3J0cyBwZXJmb3JtYW5jZS4gSGUgaGFzIHdvcmtlZCBjbG9zZWx5IHdpdGggVVNDIGFuZCBVQ0xBIGFuZCBpcyBwcmVzZW50bHkgaW52b2x2ZWQgd2l0aCB0aGUgUmVjdXJzZSBDZW50ZXIgaW4gTmV3IFlvcmsgcmVzZWFyY2hpbmcgZGVlcCBsZWFybmluZyBhbmQgdm9pY2UgcmVjb2duaXRpb24uJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJEYXRhO1xuIiwiaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSAgKHtcbiAgc3BlYWtlclJlYyxcbiAgb25IZWFydEZhdm9yaXRlSGFuZGxlcixcbn0pID0+IHtcblxuICBjb25zdCB7aWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGZhdm9yaXRlfSA9IHNwZWFrZXJSZWM7XG4gIHJldHVybiAoXG5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuXG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU3BlYWtlckRldGFpbCk7IC8vd3JhcHBpbmcgdGhlIGNvbXBvbmVudCBpbnNpZGUgbWVtbywgIHNvIHRoYXQgaXQgY2FjaGVzIC8gbWVtb2l6ZWQgdmVyc2lvbiBvZiBzcGVha2VyIGRldGFpbCB0byB0aGUgY2FsbGluZyBjb21wb25lbnRcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuXG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcblxuY29uc3QgU3BlYWtlcnMgPSAoeyB9KSA9PiB7XG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCBbXSkgLy91c2luZyB1c2VSZWR1Y2VyIGluc3RlZCBvZiB1c2VTdGF0ZVxuICBjb25zdCB7aXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm91cml0ZX0gPSB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBzcGVha2VyTGlzdC5sZW5ndGggPiAwID9cbiAgICBzcGVha2VyTGlzdFxuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxuICAgICAgKVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pIDogbnVsbCxbc3BlYWtpbmdTYXR1cmRheSxzcGVha2luZ1N1bmRheSxzcGVha2VyTGlzdF0pIC8vIGZpbHRlciBvbmx5IHdoZW4gdGhlc2UgZGVwLiBjaGFuZ2VkXG5cblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXG4gICAgPyBbXVxuICAgIDogbmV3U3BlYWtlckxpc3RcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpOyAvLyBnZXQgdGhlIElEIHZhbHVlIGZyb20gYXR0cmlidXRlIGNvbnZlcnQgaW50byBpbnRcblxuICAgIHRvZ2dsZVNwZWFrZXJGYXZvdXJpdGUoc3BlYWtlclJlYylcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZCA/IHNwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxuICAgICAgICAgICAgICAoc3BlYWtlclJlYykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiIsImNvbnN0IHNwZWFrZXJzUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcclxuICAgICAgICAvLyByZXR1cm4gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BlYWtlckxpc3QgOiBhY3Rpb24uZGF0YSwgaXNMb2FkaW5nIDogZmFsc2V9XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZmF2b3VyaXRlJzoge1xyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0IDogdXBkYXRlRmF2b3JpdGUodHJ1ZSkgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3VuZmF2b3VyaXRlJzoge1xyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwZWFrZXJMaXN0IDogdXBkYXRlRmF2b3JpdGUoZmFsc2UpIH1cclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSkgeyAvL3RvIHVwZGF0ZSBmYXYuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnNSZWR1Y2VyOyIsImltcG9ydCBzcGVha2Vyc1JlZHVjZXIgZnJvbSBcIi4vc3BlYWtlcnNSZWR1Y2VyXCI7XHJcbmltcG9ydCBzcGVha2VyRGF0YSBmcm9tIFwiLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVNwZWFrZXJEYXRhbWFuYWdlciA9ICgpID0+IHtcclxuY29uc3QgW3sgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwge1xyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgc3BlYWtlckxpc3Q6IFtdXHJcbn0pIC8vdXNlUmVkdWNlcihtZXRob2QsaW5pdGlhbFZhbHVlKVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyB0byBkZWxheSBhbmQgc2hvdyBsb2FkaW5nLi5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7IC8vdXNpbmcgZGlzcGF0Y2ggdG8gc2V0IGFjdGlvbiB0eXBlLCBpdCB3aWxsIGludm9rZSAnc3BlYWtlcnNSZWR1Y2VyJ1xyXG4gICAgICAgICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxyXG4gICAgICAgICAgICBkYXRhOiBzcGVha2VyRGF0YSwgLy8gcGFzc3MgdGhlIGZpbHRlcmVkIGRhdGEgJiB1cGRhdGUgc3RhdGUgJ3NwZWFrZXJMaXN0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xyXG4gICAgfTtcclxufSwgW10pO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm91cml0ZShzcGVha2VyUmVjKXtcclxuICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWUgPyBcclxuICAgIGRpc3BhdGNoKHt0eXBlIDogJ3VuZmF2b3VyaXRlJywgaWQgOiBzcGVha2VyUmVjLmlkfSkgOiBkaXNwYXRjaCh7dHlwZSA6ICdmYXZvdXJpdGUnLCBpZCA6IHNwZWFrZXJSZWMuaWR9KVxyXG59XHJcblxyXG5yZXR1cm4ge2lzTG9hZGluZywgc3BlYWtlckxpc3QsIHRvZ2dsZVNwZWFrZXJGYXZvdXJpdGV9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTcGVha2VyRGF0YW1hbmFnZXI7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
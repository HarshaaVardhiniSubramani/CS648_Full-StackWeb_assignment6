/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Page = _interopRequireDefault(__webpack_require__(/*! ./Page.jsx */ "./src/Page.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint linebreak-style: ["error", "windows"] */

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "react/no-multi-comp": "off" */

/* eslint "no-alert": "off" */
var element = /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Page.default, null));

_reactDom.default.render(element, document.getElementById('contents'));

if (false) {}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contents;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _ProductList = _interopRequireDefault(__webpack_require__(/*! ./ProductList.jsx */ "./src/ProductList.jsx"));

var _ProductEdit = _interopRequireDefault(__webpack_require__(/*! ./ProductEdit.jsx */ "./src/ProductEdit.jsx"));

var _ProductImage = _interopRequireDefault(__webpack_require__(/*! ./ProductImage.jsx */ "./src/ProductImage.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/products",
    component: _ProductList.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/edit/:id",
    component: _ProductEdit.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/view/:id",
    component: _ProductImage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
}

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function format(num) {
  return num != null ? num.toString() : '';
}

function unformat(str) {
  var val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

var NumInput = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NumInput, _React$Component);

  function NumInput(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NumInput.prototype;

  _proto.onChange = function onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  };

  _proto.onBlur = function onBlur(e) {
    var onChange = this.props.onChange;
    var value = this.state.value;
    onChange(e, unformat(value));
  };

  _proto.render = function render() {
    var value = this.state.value;
    return /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "text"
    }, this.props, {
      value: value,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  };

  return NumInput;
}(_react.default.Component);

exports.default = NumInput;

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _Contents = _interopRequireDefault(__webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBar() {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Header, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, null, "My Company Inventory")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, null, /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavItem, null, "Home")), /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/products"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavItem, null, "Product List")), /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/report"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavItem, null, "Report"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    pullRight: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "left",
    delayShow: 1000,
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
      id: "create-product"
    }, "Create Product")
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Glyphicon, {
    glyph: "plus"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavDropdown, {
    id: "user-dropdown",
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Glyphicon, {
      glyph: "option-vertical"
    }),
    noCaret: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.MenuItem, null, "About"))));
}

function Page() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Grid, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Contents.default, null)));
}

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductAdd, _React$Component);

  function ProductAdd() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ProductAdd.prototype;

  _proto.handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.productAdd;
    var priceNum = form.price.value.replace(/\$/g, '');
    var product = {
      name: form.name.value,
      price: priceNum,
      category: form.category.value,
      imageurl: form.imageurl.value
    };
    var createProduct = this.props.createProduct;
    form.name.value = '';
    form.price.value = '';
    form.category.value = '';
    form.imageurl.value = '';
    createProduct(product);
  };

  _proto.handlePriceChange = function handlePriceChange(e) {
    this.setState({
      price: e.target.value
    });
  };

  _proto.render = function render() {
    var price = this.state.price;
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "formContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "formCol"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, {
      controlId: "category",
      name: "category"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Category"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      componentClass: "select",
      placeholder: "select",
      name: "category"
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Jackets"
    }, "Jackets"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Accessories"
    }, "Accessories"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Product Name"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "name"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "formCol"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Price Per Unit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Addon, null, "$"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "price",
      onChange: this.handlePriceChange
    }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Image URL"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "imageurl"
    })))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      bsStyle: "primary",
      as: "input",
      type: "submit",
      value: "Submit"
    }, "Add Product"));
  };

  return ProductAdd;
}(_react.default.Component);

exports.default = ProductAdd;
ProductAdd.propTypes = {
  createProduct: _propTypes.default.func.isRequired
};

/***/ }),

/***/ "./src/ProductEdit.jsx":
/*!*****************************!*\
  !*** ./src/ProductEdit.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js"));

var _NumInput = _interopRequireDefault(__webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx"));

var _TextInput = _interopRequireDefault(__webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx"));

var _Toast = _interopRequireDefault(__webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductEdit = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductEdit, _React$Component);

  function ProductEdit() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      product: {},
      toastVisible: false,
      toastMessage: '',
      toastType: 'success'
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.showSuccess = _this.showSuccess.bind(_assertThisInitialized(_this));
    _this.showError = _this.showError.bind(_assertThisInitialized(_this));
    _this.dismissToast = _this.dismissToast.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ProductEdit.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevId = prevProps.match.params.id;
    var id = this.props.match.params.id;

    if (id !== prevId) {
      this.loadData();
    }
  };

  _proto.onChange = function onChange(event, naturalValue) {
    var _event$target = event.target,
        name = _event$target.name,
        textValue = _event$target.value;
    var value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(function (prevState) {
      var _extends2;

      return {
        product: _extends({}, prevState.product, (_extends2 = {}, _extends2[name] = value, _extends2))
      };
    });
  };

  _proto.handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var product, query, id, created, changes, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              product = this.state.product;
              query = "mutation productUpdate(\n        $id: Int!\n        $changes: ProductUpdateInputs!\n    ) {\n        productUpdate(\n            id: $id\n            changes: $changes\n    ) {\n        id\n        category\n        name\n        price\n        imageurl\n    }\n    }";
              id = product.id, created = product.created, changes = _objectWithoutPropertiesLoose(product, ["id", "created"]);
              _context.next = 6;
              return (0, _graphQLFetch.default)(query, {
                changes: changes,
                id: id
              }, this.showError);

            case 6:
              data = _context.sent;

              if (data) {
                this.setState({
                  product: data.productUpdate
                });
                this.showSuccess('Updated product successfully');
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }

    return handleSubmit;
  }();

  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var query, id, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "query product($id: Int!) {\n      product(id: $id) {\n        id\n        category\n        name\n        price\n        imageurl\n      }\n    }";
              id = this.props.match.params.id;
              _context2.next = 4;
              return (0, _graphQLFetch.default)(query, {
                id: id
              });

            case 4:
              data = _context2.sent;
              this.setState({
                product: data.product
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loadData() {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }();

  _proto.showSuccess = function showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'success'
    });
  };

  _proto.showError = function showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger'
    });
  };

  _proto.dismissToast = function dismissToast() {
    this.setState({
      toastVisible: false
    });
  };

  _proto.render = function render() {
    var _this$state$product = this.state.product,
        id = _this$state$product.id,
        category = _this$state$product.category,
        name = _this$state$product.name,
        price = _this$state$product.price,
        imageurl = _this$state$product.imageurl;
    var propsId = this.props.match.params.id;
    var _this$state = this.state,
        toastVisible = _this$state.toastVisible,
        toastMessage = _this$state.toastMessage,
        toastType = _this$state.toastType;

    if (id == null) {
      if (propsId != null) {
        return /*#__PURE__*/_react.default.createElement("h3", null, "Product with ID " + propsId + " not found.");
      }

      return null;
    }

    return id ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Editing Product ID: " + id), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Name"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      type: "text",
      name: "name",
      value: name,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, {
      controlId: "form-category"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Category"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      componentClass: "select",
      value: category,
      name: "category",
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Jackets"
    }, " Jackets"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Sweaters"
    }, "Sweaters "), /*#__PURE__*/_react.default.createElement("option", {
      value: "Accessories"
    }, "Accessories")))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Price"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      name: "price",
      value: price,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Image:"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
      name: "imageurl",
      value: imageurl,
      onChange: this.onChange,
      key: id
    }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      bsStyle: "primary",
      as: "input",
      type: "submit",
      value: "Submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/edit/" + (id - 1)
    }, "Prev"), ' | ', /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/edit/" + (id + 1)
    }, "Next"), /*#__PURE__*/_react.default.createElement(_Toast.default, {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage))) : /*#__PURE__*/_react.default.createElement("h1", null, "Loading Data...");
  };

  return ProductEdit;
}(_react.default.Component);

exports.default = ProductEdit;

/***/ }),

/***/ "./src/ProductImage.jsx":
/*!******************************!*\
  !*** ./src/ProductImage.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductImage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductImage, _React$Component);

  function ProductImage() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      product: {}
    };
    return _this;
  }

  var _proto = ProductImage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, id, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = "query product($id: Int!) {\n        product(id: $id) {\n          id\n          category\n          name\n          price\n          imageurl\n        }\n    }";
              id = this.props.match.params.id;
              _context.next = 4;
              return (0, _graphQLFetch.default)(query, {
                id: id
              });

            case 4:
              data = _context.sent;

              if (data) {
                this.setState({
                  product: data.product
                });
              } else this.setState({
                product: null
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData() {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }();

  _proto.render = function render() {
    var product = this.state.product;
    return /*#__PURE__*/_react.default.createElement("img", {
      style: {
        maxWidth: '100vw'
      },
      src: product.imageurl,
      alt: product.Name
    });
  };

  return ProductImage;
}(_react.default.Component);

var _default = ProductImage;
exports.default = _default;

/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js"));

var _ProductTable = _interopRequireDefault(__webpack_require__(/*! ./ProductTable.jsx */ "./src/ProductTable.jsx"));

var _ProductAdd = _interopRequireDefault(__webpack_require__(/*! ./ProductAdd.jsx */ "./src/ProductAdd.jsx"));

var _Toast = _interopRequireDefault(__webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductList, _React$Component);

  function ProductList() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      products: [],
      toastVisible: false,
      toastMessage: '',
      toastType: 'info'
    };
    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));
    _this.deleteProduct = _this.deleteProduct.bind(_assertThisInitialized(_this));
    _this.showSuccess = _this.showSuccess.bind(_assertThisInitialized(_this));
    _this.showError = _this.showError.bind(_assertThisInitialized(_this));
    _this.dismissToast = _this.dismissToast.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ProductList.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = "query {\n          productList {\n              id\n              category\n              name\n              price\n              imageurl\n          }\n      }";
              _context.next = 3;
              return (0, _graphQLFetch.default)(query, this.showError);

            case 3:
              data = _context.sent;

              if (data) {
                this.setState({
                  products: data.productList
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData() {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }();

  _proto.createProduct = /*#__PURE__*/function () {
    var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
      var query, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "mutation productAdd($product: ProductInputs!) {\n        productAdd(product: $product) {\n          id\n        }\n      }";
              _context2.next = 3;
              return (0, _graphQLFetch.default)(query, {
                product: product
              }, this.showError);

            case 3:
              data = _context2.sent;

              if (data) {
                this.loadData();
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createProduct(_x) {
      return _createProduct.apply(this, arguments);
    }

    return createProduct;
  }();

  _proto.deleteProduct = /*#__PURE__*/function () {
    var _deleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      var query, data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              query = "mutation productDelete($id: Int!) {\n      productDelete(id: $id)\n    }";
              _context3.next = 3;
              return (0, _graphQLFetch.default)(query, {
                id: id
              }, this.showError);

            case 3:
              data = _context3.sent;
              this.showSuccess("Deleted product " + id + " successfully.");
              this.loadData();
              return _context3.abrupt("return", true);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deleteProduct(_x2) {
      return _deleteProduct.apply(this, arguments);
    }

    return deleteProduct;
  }();

  _proto.showSuccess = function showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'success'
    });
  };

  _proto.showError = function showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger'
    });
  };

  _proto.dismissToast = function dismissToast() {
    this.setState({
      toastVisible: false
    });
  };

  _proto.render = function render() {
    var products = this.state.products;
    var _this$state = this.state,
        toastVisible = _this$state.toastVisible,
        toastType = _this$state.toastType,
        toastMessage = _this$state.toastMessage;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Label, null, "Showing all available products")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_ProductTable.default, {
      products: products,
      deleteProduct: this.deleteProduct
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Panel, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Panel.Heading, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Panel.Title, {
      toggle: true
    }, "Add a new product to the Inventory")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Panel.Body, {
      collapsible: true
    }, /*#__PURE__*/_react.default.createElement(_ProductAdd.default, {
      createProduct: this.createProduct
    }))), /*#__PURE__*/_react.default.createElement(_Toast.default, {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
  };

  return ProductList;
}(_react.default.Component);

exports.default = ProductList;

/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductRow = (0, _reactRouterDom.withRouter)(function (_ref) {
  var product = _ref.product,
      search = _ref.location.search,
      deleteProduct = _ref.deleteProduct,
      index = _ref.index;
  var selectLocation = {
    pathname: "/products/" + product.id,
    search: search
  };

  var viewTooltip = /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
    id: "view-tooltip",
    placement: "top"
  }, "View Product");

  var editTooltip = /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
    id: "edit-tooltip",
    placement: "top"
  }, "Edit Product");

  var deleteTooltip = /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
    id: "delete-tooltip",
    placement: "top"
  }, "Delete Product");

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(product.id);
  }

  var tableRow = /*#__PURE__*/_react.default.createElement("tr", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("td", null, product.name), /*#__PURE__*/_react.default.createElement("td", null, "$", product.price), /*#__PURE__*/_react.default.createElement("td", null, product.category), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/view/" + product.id
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    delayShow: 500,
    overlay: viewTooltip
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    bsSize: "xsmall"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Glyphicon, {
    glyph: "eye-open"
  }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/edit/" + product.id
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    delayShow: 500,
    overlay: editTooltip
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    bsSize: "xsmall"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Glyphicon, {
    glyph: "edit"
  })))), ' ', /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    delayShow: 500,
    overlay: deleteTooltip
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    bsStyle: "xsmall",
    onClick: onDelete
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Glyphicon, {
    glyph: "trash"
  })))));

  return /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: selectLocation
  }, tableRow);
});

function ProductTable(_ref2) {
  var products = _ref2.products,
      deleteProduct = _ref2.deleteProduct;
  var productRows = products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(ProductRow, {
      key: product.id,
      product: product,
      deleteProduct: deleteProduct,
      index: index
    });
  });
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "Category"), /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, productRows));
}

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

var TextInput = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TextInput, _React$Component);

  function TextInput(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      value: format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = TextInput.prototype;

  _proto.onChange = function onChange(e) {
    this.setState({
      value: e.target.value
    });
  };

  _proto.onBlur = function onBlur(e) {
    var onChange = this.props.onChange;
    var value = this.state.value;
    onChange(e, unformat(value));
  };

  _proto.render = function render() {
    var value = this.state.value;

    var _this$props = this.props,
        _this$props$tag = _this$props.tag,
        tag = _this$props$tag === void 0 ? 'input' : _this$props$tag,
        props = _objectWithoutPropertiesLoose(_this$props, ["tag"]);

    return /*#__PURE__*/_react.default.createElement(tag, _extends({}, props, {
      value: value,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  };

  return TextInput;
}(_react.default.Component);

exports.default = TextInput;

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toast = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Toast, _React$Component);

  function Toast() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props = this.props,
        showing = _this$props.showing,
        onDismiss = _this$props.onDismiss;

    if (showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(onDismiss, 5000);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        showing = _this$props2.showing,
        bsStyle = _this$props2.bsStyle,
        onDismiss = _this$props2.onDismiss,
        children = _this$props2.children;
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Collapse, {
      in: showing
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 20,
        left: 20
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Alert, {
      bsStyle: bsStyle,
      onDismiss: onDismiss
    }, children)));
  };

  return Toast;
}(_react.default.Component);

exports.default = Toast;

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = graphQLFetch;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function graphQLFetch(_x, _x2, _x3) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables, showError) {
    var response, body, result, error, details;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (variables === void 0) {
              variables = {};
            }

            if (showError === void 0) {
              showError = null;
            }

            _context.prev = 2;
            _context.next = 5;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.text();

          case 8:
            body = _context.sent;
            result = JSON.parse(body);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code === 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                if (showError) showError(error.message + ":\n " + details);
              } else if (showError) {
                showError(error.extensions.code + ": " + error.message);
              }
            }

            return _context.abrupt("return", result.data);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            if (showError) showError("Error in sending data to server: " + _context.t0.message);
            return _context.abrupt("return", null);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.jsx */"./src/App.jsx");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map
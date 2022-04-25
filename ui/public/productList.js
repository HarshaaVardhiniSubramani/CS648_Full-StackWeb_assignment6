"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch.js"));

var _ProductTable = _interopRequireDefault(require("./ProductTable.jsx"));

var _ProductAdd = _interopRequireDefault(require("./ProductAdd.jsx"));

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
      products: []
    };
    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));
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
              query = "query {\n            productList {\n                id\n                category\n                name\n                price\n                imageurl\n            }\n        }";
              _context.next = 3;
              return (0, _graphQLFetch.default)(query);

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
              query = "mutation productAdd($product: ProductInputs!) {\n          productAdd(product: $product) {\n            id\n          }\n        }";
              _context2.next = 3;
              return (0, _graphQLFetch.default)(query, {
                product: product
              });

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

  _proto.render = function render() {
    var products = this.state.products;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/_react.default.createElement("h3", null, "Showing all available products"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_ProductTable.default, {
      products: products
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Add a new product to the Inventory"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_ProductAdd.default, {
      createProduct: this.createProduct
    }));
  };

  return ProductList;
}(_react.default.Component);

exports.default = ProductList;
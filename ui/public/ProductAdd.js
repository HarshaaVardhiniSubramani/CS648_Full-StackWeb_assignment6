"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
    createProduct(product);
    form.name.value = '';
    this.setState({
      price: '$'
    });
    form.category.value = '';
    form.imageurl.value = '';
  };

  _proto.handlePriceChange = function handlePriceChange(e) {
    this.setState({
      price: e.target.value
    });
  };

  _proto.render = function render() {
    var price = this.state.price;
    return /*#__PURE__*/_react.default.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "formContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "formCol"
    }, "Category:", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("select", {
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
    }, "Accessories")), /*#__PURE__*/_react.default.createElement("br", null), "Product Name:", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "name"
    }), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "formCol"
    }, "Price Per Unit:", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "price",
      value: price,
      onChange: this.handlePriceChange
    }), /*#__PURE__*/_react.default.createElement("br", null), "Image URL:", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "imageurl"
    }), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("button", {
      type: "submit"
    }, "Add Product"));
  };

  return ProductAdd;
}(_react.default.Component);

exports.default = ProductAdd;
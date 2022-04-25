"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductRow(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, product.name), /*#__PURE__*/_react.default.createElement("td", null, "$", product.price), /*#__PURE__*/_react.default.createElement("td", null, product.category), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: product.imageurl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, " View ")));
}

function ProductTable(_ref2) {
  var products = _ref2.products;
  var productRows = products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "Category"), /*#__PURE__*/_react.default.createElement("th", null, "Image"))), /*#__PURE__*/_react.default.createElement("tbody", null, productRows));
}
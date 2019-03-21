"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clients = require("./clients");

var _default = function _default(alias) {
  var _getClient;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (_getClient = (0, _clients.getClient)(alias)).query.apply(_getClient, args);
};

exports.default = _default;
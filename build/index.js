"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "setApiUrl", {
  enumerable: true,
  get: function get() {
    return _apiUrl.setApiUrl;
  }
});
Object.defineProperty(exports, "query", {
  enumerable: true,
  get: function get() {
    return _query.default;
  }
});
Object.defineProperty(exports, "mutate", {
  enumerable: true,
  get: function get() {
    return _mutate.default;
  }
});

var _apiUrl = require("./api-url");

var _query = _interopRequireDefault(require("./query"));

var _mutate = _interopRequireDefault(require("./mutate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
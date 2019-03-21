"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = exports.registerClient = void 0;

var _createClient = _interopRequireDefault(require("./create-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clients = {};

var registerClient = function registerClient(_ref) {
  var alias = _ref.alias,
      apiUrl = _ref.apiUrl;
  clients[alias] = (0, _createClient.default)({
    apiUrl: apiUrl
  });
};

exports.registerClient = registerClient;

var getClient = function getClient(alias) {
  return clients[alias];
};

exports.getClient = getClient;
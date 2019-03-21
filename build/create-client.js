"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloClient = require("apollo-client");

var _apolloLinkHttp = require("apollo-link-http");

var _default = function _default(_ref) {
  var apiUrl = _ref.apiUrl;
  var defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  };
  var httpLink = (0, _apolloLinkHttp.createHttpLink)({
    uri: apiUrl
  });
  return new _apolloClient.ApolloClient({
    link: httpLink,
    cache: new _apolloCacheInmemory.InMemoryCache(),
    defaultOptions: defaultOptions
  });
};

exports.default = _default;
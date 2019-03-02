"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloClient = require("apollo-client");

var _apolloLinkHttp = require("apollo-link-http");

var _apiUrl = require("./api-url");

var client;

var _default = function _default() {
  if (client) {
    return client;
  }

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
    uri: (0, _apiUrl.getApiUrl)()
  });
  return client = new _apolloClient.ApolloClient({
    link: httpLink,
    cache: new _apolloCacheInmemory.InMemoryCache(),
    defaultOptions: defaultOptions
  });
};

exports.default = _default;
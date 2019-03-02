"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.setApiUrl = void 0;
var apiUrl = '';

var setApiUrl = function setApiUrl(url) {
  return apiUrl = url;
};

exports.setApiUrl = setApiUrl;

var getApiUrl = function getApiUrl() {
  return apiUrl;
};

exports.getApiUrl = getApiUrl;
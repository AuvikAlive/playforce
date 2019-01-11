"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = void 0;

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.capitalize = capitalize;
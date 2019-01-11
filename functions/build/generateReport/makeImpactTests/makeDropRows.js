"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDropRows = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const red = '#ff0000';
const green = '#008000';

const makeDropRows = dropTests => {
  const rows = dropTests.map(({
    id,
    location,
    dropHeight,
    hic,
    hicDuration,
    gmax,
    result
  }, index) => [`${index + 1}`.padStart(3, '0'), location, dropHeight, _objectSpread({
    text: hic
  }, hic > 1000 && {
    color: red
  }), _objectSpread({
    text: hicDuration
  }, hicDuration < 3 && {
    color: red
  }), _objectSpread({
    text: gmax
  }, gmax > 200 && {
    color: red
  }), _objectSpread({
    text: result
  }, result === 'Satisfactory' ? {
    color: green
  } : {
    color: red
  })]);
  return rows;
};

exports.makeDropRows = makeDropRows;
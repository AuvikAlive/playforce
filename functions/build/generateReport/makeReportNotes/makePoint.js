"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePoint = void 0;

var _constants = require("../constants");

const makePoint = ({
  number,
  title,
  description
}) => ({
  columnGap: 20,
  columns: [{
    width: 'auto',
    text: number
  }, [{
    width: '*',
    text: title,
    bold: true,
    marginBottom: _constants.verticalMargin / 2
  }, {
    text: description,
    marginBottom: _constants.verticalMargin
  }]]
});

exports.makePoint = makePoint;
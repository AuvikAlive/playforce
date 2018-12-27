"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTitle = void 0;

var _constants = require("../constants");

const makeTitle = ({
  wording,
  font,
  size,
  color
}) => {
  return {
    text: wording.toUpperCase(),
    font,
    fontSize: Number(size),
    color,
    marginTop: _constants.verticalMargin * 4,
    marginBottom: _constants.verticalMargin * 4,
    alignment: 'center'
  };
};

exports.makeTitle = makeTitle;
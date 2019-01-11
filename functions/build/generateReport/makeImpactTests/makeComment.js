"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeComment = void 0;

var _constants = require("../constants");

const makeComment = (comment, marginLeft) => comment ? [{
  marginLeft,
  marginBottom: _constants.verticalMargin * 2,
  text: [{
    text: 'Comment: ',
    bold: true
  }, {
    text: comment
  }]
}] : null;

exports.makeComment = makeComment;
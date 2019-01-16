"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeComments = void 0;

const makeComments = comments => [{}, {
  text: 'Comments:',
  bold: true
}, {
  text: comments,
  colSpan: 2
}, {}];

exports.makeComments = makeComments;
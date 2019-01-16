"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFinding = void 0;

const makeFinding = finding => [{}, {
  text: 'Finding:',
  bold: true
}, {
  text: finding,
  colSpan: 2
}, {}];

exports.makeFinding = makeFinding;
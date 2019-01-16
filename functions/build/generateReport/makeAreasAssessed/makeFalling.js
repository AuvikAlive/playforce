"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFalling = void 0;

var _constants = require("../constants");

const makeFalling = () => [{
  text: 'PROTECTION AGAINST FALLING',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  marginBottom: _constants.verticalMargin,
  table: {
    widths: ['*'],
    body: [['Is the impact area adequate for the free height of fall?'], ['Is the falling space free of obstacles that could cause injury?'], ['Are barriers, guardrails and handrails appropriate and at the correct heights?'], ['Are openings in the barriers or guardrails less than 800mm in width?']]
  }
}];

exports.makeFalling = makeFalling;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCondition = void 0;

const makeCondition = condition => ({
  text: [{
    text: 'Condition: ',
    bold: true
  }, condition]
});

exports.makeCondition = makeCondition;
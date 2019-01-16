"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStandardsClause = void 0;

const makeStandardsClause = standardsClause => [{}, {
  text: 'Standards Clause:',
  bold: true
}, {
  text: standardsClause,
  colSpan: 2
}, {}];

exports.makeStandardsClause = makeStandardsClause;
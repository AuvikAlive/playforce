"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRiskPriorityRating = void 0;

var _constants = require("../constants");

const makeRiskPriorityRating = () => [{
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Risk Ratings',
    bold: true
  }, {
    text: 'Priority Ratings',
    bold: true
  }]
}, {
  marginBottom: _constants.verticalMargin / 2,
  layout: 'noBorders',
  table: {
    widths: ['*', '*', '*', '*'],
    body: [[{
      text: ' (See the following pages for ratings for each issue or non-compliance identified, if any)',
      colSpan: 4,
      fillColor: _constants.gray,
      color: 'white'
    }, {}, {}, {}], ['VH', 'Very High', 'Very High', 'Requires urgent action'], ['H', 'High', 'High', 'Action as soon as possible'], ['M', 'Moderate', 'Medium', 'Should be actioned but not urgent'], ['L', 'Low', 'Low', 'Low risk - customer to determine priority'], ['VL', 'Very Low', 'Very Low', 'No action required']]
  }
}];

exports.makeRiskPriorityRating = makeRiskPriorityRating;
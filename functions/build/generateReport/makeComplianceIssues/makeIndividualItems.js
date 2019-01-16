"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIndividualItems = void 0;

var _makeIssueItems = require("./makeIssueItems");

const makeIndividualItems = complianceIssues => complianceIssues && complianceIssues.length > 0 ? [(0, _makeIssueItems.makeIssueItems)(complianceIssues)] : [{
  text: 'No compliance issues identified'
}];

exports.makeIndividualItems = makeIndividualItems;
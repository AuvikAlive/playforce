"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIndividualItems = void 0;

var _makeIssueItems = require("./makeIssueItems");

const makeIndividualItems = maintenanceIssues => maintenanceIssues && maintenanceIssues.length > 0 ? [(0, _makeIssueItems.makeIssueItems)(maintenanceIssues)] : [{
  text: 'No maintenance issues identified'
}];

exports.makeIndividualItems = makeIndividualItems;
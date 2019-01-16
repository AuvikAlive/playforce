"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMaintenanceIssues = void 0;

var _makeTitle = require("../makeTitle");

var _makeIndividualItems = require("./makeIndividualItems");

// import { makePlaygroundItems } from './makePlaygroundItems'
const makeMaintenanceIssues = maintenanceIssues => {
  if (maintenanceIssues && maintenanceIssues.length > 0) {
    return [(0, _makeTitle.makeTitle)('IDENTIFIED MAINTENANCE ISSUES'), (0, _makeIndividualItems.makeIndividualItems)(maintenanceIssues), {
      text: '',
      pageBreak: 'after'
    }];
  }

  return null;
};

exports.makeMaintenanceIssues = makeMaintenanceIssues;
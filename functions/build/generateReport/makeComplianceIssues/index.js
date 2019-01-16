"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeComplianceIssues = void 0;

var _makeTitle = require("../makeTitle");

var _makeIndividualItems = require("./makeIndividualItems");

// import { makePlaygroundItems } from './makePlaygroundItems'
const makeComplianceIssues = async complianceIssues => [(0, _makeTitle.makeTitle)('IDENTIFIED COMPLIANCE ISSUES'), await (0, _makeIndividualItems.makeIndividualItems)(complianceIssues), {
  text: '',
  pageBreak: 'after'
}];

exports.makeComplianceIssues = makeComplianceIssues;
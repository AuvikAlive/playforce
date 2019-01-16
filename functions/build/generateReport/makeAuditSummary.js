"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAuditSummary = void 0;

var _ramda = require("ramda");

var _constants = require("./constants");

var _utils = require("./utils/");

const makeAuditSummary = async (auditSummary, author, site) => {
  const {
    signature,
    name,
    title
  } = author;
  const siteAddress = (0, _utils.formatSiteAddress)(site.address);
  const insertPlaceholders = (0, _ramda.compose)((0, _utils.insertSiteName)(site.name || ''), (0, _utils.insertSiteAddress)(siteAddress || ''));
  const signatureImage = await (0, _utils.fetchImage)(signature);
  return [{
    text: 'AUDIT SUMMARY',
    font: 'Oswald',
    fontSize: _constants.headerFontSize,
    marginBottom: _constants.verticalMargin
  }, {
    text: insertPlaceholders(auditSummary),
    marginBottom: _constants.verticalMargin * 3
  }, signatureImage ? {
    image: signatureImage,
    width: 65,
    marginBottom: _constants.verticalMargin
  } : null, {
    text: name,
    bold: true
  }, {
    text: title
  }, {
    text: 'Play Force Pty Ltd',
    pageBreak: 'after'
  }];
};

exports.makeAuditSummary = makeAuditSummary;
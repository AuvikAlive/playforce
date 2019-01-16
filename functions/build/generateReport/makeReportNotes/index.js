"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeReportNotes = void 0;

var _makeTitle = require("./makeTitle");

var _makeSubtitle = require("./makeSubtitle");

var _makeCustomNotes = require("./makeCustomNotes");

var _makeDefaultNotes = require("./makeDefaultNotes");

var _makeOutro = require("./makeOutro");

const makeReportNotes = (appliedStandards, reportNotes) => [(0, _makeTitle.makeTitle)(), (0, _makeSubtitle.makeSubtitle)(), reportNotes && reportNotes.length > 0 ? (0, _makeCustomNotes.makeCustomNotes)(reportNotes) : (0, _makeDefaultNotes.makeDefaultNotes)(appliedStandards), (0, _makeOutro.makeOutro)()];

exports.makeReportNotes = makeReportNotes;
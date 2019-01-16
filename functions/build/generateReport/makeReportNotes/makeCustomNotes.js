"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCustomNotes = void 0;

var _makePoint = require("./makePoint");

const makeCustomNotes = reportNotes => reportNotes.map(_makePoint.makePoint);

exports.makeCustomNotes = makeCustomNotes;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAreasAssessed = void 0;

var _makeTitle = require("./makeTitle");

var _makeNote = require("./makeNote");

var _makeSurrounds = require("./makeSurrounds");

var _makeSurfacing = require("./makeSurfacing");

var _makeEquipment = require("./makeEquipment");

var _makeFalling = require("./makeFalling");

var _makeEntrapment = require("./makeEntrapment");

var _makeParts = require("./makeParts");

const makeAreasAssessed = () => [(0, _makeTitle.makeTitle)(), (0, _makeNote.makeNote)(), (0, _makeSurrounds.makeSurrounds)(), (0, _makeSurfacing.makeSurfacing)(), (0, _makeEquipment.makeEquipment)(), (0, _makeFalling.makeFalling)(), (0, _makeEntrapment.makeEntrapment)(), (0, _makeParts.makeParts)()];

exports.makeAreasAssessed = makeAreasAssessed;
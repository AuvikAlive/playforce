"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDefaultNotes = void 0;

var _makeFirstPoint = require("./makeFirstPoint");

var _makeSecondPoint = require("./makeSecondPoint");

var _makeThirdPoint = require("./makeThirdPoint");

var _makeFourthPoint = require("./makeFourthPoint");

var _makeFifthPoint = require("./makeFifthPoint");

var _makeSixthPoint = require("./makeSixthPoint");

const makeDefaultNotes = appliedStandards => {
  const standardItems = appliedStandards.map(({
    code,
    title
  }, index, array) => index === 0 ? `${code}` : `, ${code}`);
  return [(0, _makeFirstPoint.makeFirstPoint)(), (0, _makeSecondPoint.makeSecondPoint)(standardItems), (0, _makeThirdPoint.makeThirdPoint)(), (0, _makeFourthPoint.makeFourthPoint)(), (0, _makeFifthPoint.makeFifthPoint)(), (0, _makeSixthPoint.makeSixthPoint)(standardItems)];
};

exports.makeDefaultNotes = makeDefaultNotes;
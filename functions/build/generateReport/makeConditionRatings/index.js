"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeConditionRatings = void 0;

var _makePlaygroundItems = require("./makePlaygroundItems");

var _makeIndividualItems = require("./makeIndividualItems");

var _makeTitle = require("./makeTitle");

const makeConditionRatings = (conditionRatings, playgroundsCompleted, playgrounds) => [(0, _makeTitle.makeTitle)(), playgroundsCompleted ? (0, _makePlaygroundItems.makePlaygroundItems)(playgrounds) : (0, _makeIndividualItems.makeIndividualItems)(conditionRatings), {
  text: '',
  pageBreak: 'after'
}];

exports.makeConditionRatings = makeConditionRatings;
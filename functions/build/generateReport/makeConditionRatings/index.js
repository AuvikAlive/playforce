"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeConditionRatings = void 0;

var _makeIndividualItems = require("./makeIndividualItems");

var _makeTitle = require("./makeTitle");

// import { makePlaygroundItems } from './makePlaygroundItems'
const makeConditionRatings = async conditionRatings => [(0, _makeTitle.makeTitle)(), await (0, _makeIndividualItems.makeIndividualItems)(conditionRatings), {
  text: '',
  pageBreak: 'after'
}];

exports.makeConditionRatings = makeConditionRatings;
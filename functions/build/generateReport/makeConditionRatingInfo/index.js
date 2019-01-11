"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeConditionRatingInfo = void 0;

var _makeTitle = require("./makeTitle");

var _makeDescription = require("./makeDescription");

var _makeRiskAssessment = require("./makeRiskAssessment/");

var _makeInjurySeverity = require("./makeInjurySeverity");

var _makeRiskPriorityRating = require("./makeRiskPriorityRating");

var _makeConditionRating = require("./makeConditionRating");

var _makeFooter = require("./makeFooter");

const makeConditionRatingInfo = () => {
  return [(0, _makeTitle.makeTitle)(), (0, _makeDescription.makeDescription)(), (0, _makeRiskAssessment.makeRiskAssessment)(), (0, _makeInjurySeverity.makeInjurySeverity)(), (0, _makeRiskPriorityRating.makeRiskPriorityRating)(), (0, _makeConditionRating.makeConditionRating)(), (0, _makeFooter.makeFooter)()];
};

exports.makeConditionRatingInfo = makeConditionRatingInfo;
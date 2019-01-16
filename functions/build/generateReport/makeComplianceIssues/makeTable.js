"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTable = void 0;

var _constants = require("../constants");

var _makeIssue = require("./makeIssue");

var _makeFinding = require("./makeFinding");

var _makeStandardsClause = require("./makeStandardsClause");

var _makeRiskAssessment = require("./makeRiskAssessment/");

var _makeComments = require("./makeComments");

var _makeRecommendations = require("./makeRecommendations");

const makeTable = ({
  columnGap,
  imageWidth,
  index,
  complianceIssue
}) => {
  const {
    images,
    finding,
    equipment,
    playingSurface,
    clause,
    risk,
    comments,
    recommendation
  } = complianceIssue;
  const {
    probability,
    severity,
    level
  } = risk;
  const tableFontSize = _constants.fontSize - 1;
  return {
    unbreakable: true,
    marginBottom: images && images.length > 1 ? columnGap : columnGap * 2,
    fontSize: tableFontSize,
    layout: {
      hLineWidth: (i, node) => {
        return i === 0 || i === node.table.body.length ? 0 : 1;
      },
      vLineWidth: (i, node) => {
        return 0;
      },
      hLineColor: (i, node) => {
        return _constants.lightGray;
      },
      vLineColor: (i, node) => {
        return _constants.lightGray;
      },
      paddingLeft: (i, node) => {
        return 0;
      },
      paddingRight: (i, node) => {
        return i === 3 ? 0 : 4;
      },
      paddingTop: (i, node) => {
        return i === 0 || i === 3 ? 0 : 8;
      },
      paddingBottom: (i, node) => {
        return i === 3 || i + 1 === node.table.body.length ? 0 : 8;
      }
    },
    table: {
      widths: ['auto', 100, '*', '*'],
      body: [(0, _makeIssue.makeIssue)({
        image: images && images[0].image,
        imageWidth,
        index,
        equipment,
        playingSurface
      }), (0, _makeFinding.makeFinding)(finding), (0, _makeStandardsClause.makeStandardsClause)(clause), (0, _makeRiskAssessment.makeRiskAssessment)(probability, severity, level), (0, _makeComments.makeComments)(comments), (0, _makeRecommendations.makeRecommendations)(recommendation)]
    }
  };
};

exports.makeTable = makeTable;
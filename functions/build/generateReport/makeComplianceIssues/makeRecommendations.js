"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRecommendations = void 0;

const makeRecommendations = recommendations => [{}, {
  text: 'Recommendations:',
  bold: true
}, {
  text: recommendations,
  colSpan: 2
}, {}];

exports.makeRecommendations = makeRecommendations;
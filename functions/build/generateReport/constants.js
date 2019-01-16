"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.riskLevels = exports.severities = exports.probabilities = exports.lightGray = exports.gray = exports.purple = exports.pink = exports.yellow = exports.green = exports.blue = exports.subHeaderFontSize = exports.headerFontSize = exports.fontSize = exports.logoOffset = exports.pageMarginVertical = exports.pageMarginHorizontal = exports.verticalMargin = exports.pageHeight = exports.pageWidth = void 0;
const pageWidth = 760;
exports.pageWidth = pageWidth;
const pageHeight = 1080;
exports.pageHeight = pageHeight;
const verticalMargin = 12;
exports.verticalMargin = verticalMargin;
const pageMarginHorizontal = 72;
exports.pageMarginHorizontal = pageMarginHorizontal;
const pageMarginVertical = 40;
exports.pageMarginVertical = pageMarginVertical;
const logoOffset = verticalMargin * 9;
exports.logoOffset = logoOffset;
const fontSize = 12;
exports.fontSize = fontSize;
const headerFontSize = 21;
exports.headerFontSize = headerFontSize;
const subHeaderFontSize = 16;
exports.subHeaderFontSize = subHeaderFontSize;
const blue = '#a4c2f4';
exports.blue = blue;
const green = '#b6d7a8';
exports.green = green;
const yellow = '#ffe599';
exports.yellow = yellow;
const pink = '#ea9999';
exports.pink = pink;
const purple = '#b4a7d6';
exports.purple = purple;
const gray = '#999999';
exports.gray = gray;
const lightGray = '#d9d9d9';
exports.lightGray = lightGray;
const probabilities = [{
  probability: 'A - Very Unlikely',
  value: 1
}, {
  probability: 'B - Unlikely',
  value: 2
}, {
  probability: 'C - Possible',
  value: 3
}, {
  probability: 'D - Likely',
  value: 4
}, {
  probability: 'E - Highly Likely',
  value: 5
}];
exports.probabilities = probabilities;
const severities = [{
  serverity: '1 - Little/none',
  value: 1
}, {
  serverity: '2 - Minor',
  value: 2
}, {
  serverity: '3 - Moderate',
  value: 3
}, {
  serverity: '4 - Serious',
  value: 4
}, {
  serverity: '5 - Permanent',
  value: 5
}];
exports.severities = severities;
const riskLevels = [['VL (1)', 'VL (2)', 'L (8)', 'L (9)', 'M (14)'], ['VL (3)', 'VL (4)', 'L (10)', 'M (15)', 'M (17)'], ['VL (5)', 'L (11)', 'M (16)', 'H (19)', 'H (20)'], ['VL (6)', 'L (12)', 'M (18)', 'H (21)', 'VH (23)'], ['VL (7)', 'L (13)', 'H (22)', 'VH (24)', 'VH (25)']];
exports.riskLevels = riskLevels;
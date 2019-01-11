"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeWeatherCondition = void 0;

var _constants = require("../constants");

const makeWeatherCondition = (firstColumnWidth, {
  temperature,
  humidity,
  rain
}) => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Weather Conditions:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, [{
    text: `${temperature}° C | ${humidity}% humidity | ${rain}`
  }, {
    text: '*Conditions taken from the Australian Bureau of Meteorology',
    fontSize: _constants.fontSize / 1.5,
    italics: true
  }]]
});

exports.makeWeatherCondition = makeWeatherCondition;
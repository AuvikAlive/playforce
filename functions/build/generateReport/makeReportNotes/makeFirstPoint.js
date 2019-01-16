"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFirstPoint = void 0;

var _constants = require("../constants");

const makeFirstPoint = () => ({
  columnGap: 20,
  columns: [{
    width: 'auto',
    text: '1'
  }, [{
    width: '*',
    text: 'Play Force Comprehensive Playground Inspection Service',
    bold: true,
    marginBottom: _constants.verticalMargin / 2
  }, {
    text: 'A Play Force comprehensive playground inspection helps ensure that a playground meets the requirements of the relevant playground standards and that it has been installed correctly. Aspects of the Standards that are relevant to underground works, equipment materials and some other aspects that require load testing (structural integrity), dismantling or destructive testing are not assessed.',
    marginBottom: _constants.verticalMargin
  }, {
    text: 'Impact attenuation testing to provide evidence of the impact absorption performance of the playground surfacing is only provided as an add-on service at an additional cost to the client.',
    marginBottom: _constants.verticalMargin
  }]]
});

exports.makeFirstPoint = makeFirstPoint;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTests = void 0;

var _makeHeader = require("./makeHeader");

var _makeDrops = require("./makeDrops");

const makeTests = impactTests => {
  return impactTests.map(({
    location,
    type,
    material,
    results
  }) => {
    return {
      unbreakable: true,
      stack: [(0, _makeHeader.makeHeader)({
        location,
        type,
        material
      }), (0, _makeDrops.makeDrops)(results)]
    };
  });
};

exports.makeTests = makeTests;
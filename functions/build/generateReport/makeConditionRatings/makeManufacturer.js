"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeManufacturer = void 0;

const makeManufacturer = manufacturer => ({
  text: [{
    text: 'Manufacturer: ',
    bold: true
  }, manufacturer]
});

exports.makeManufacturer = makeManufacturer;
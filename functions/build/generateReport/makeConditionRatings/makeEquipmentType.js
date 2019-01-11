"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEquipmentType = void 0;

const makeEquipmentType = equipment => ({
  text: [{
    text: 'Equipment Type: ',
    bold: true
  }, equipment]
});

exports.makeEquipmentType = makeEquipmentType;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSecondRow = void 0;

const makeSecondRow = (street, phone) => [street, {
  text: [{
    text: 'Phone: ',
    bold: true
  }, {
    text: phone
  }]
}];

exports.makeSecondRow = makeSecondRow;
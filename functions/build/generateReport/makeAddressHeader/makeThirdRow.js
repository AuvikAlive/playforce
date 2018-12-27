"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeThirdRow = void 0;

const makeThirdRow = (address, email) => {
  const {
    suburb,
    state,
    postcode
  } = address;
  return [`${suburb} ${state} ${postcode}`, {
    text: [{
      text: 'Email: ',
      bold: true
    }, {
      text: email
    }]
  }];
};

exports.makeThirdRow = makeThirdRow;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAddress = void 0;

var _makeFirstRow = require("./makeFirstRow");

var _makeSecondRow = require("./makeSecondRow");

var _makeThirdRow = require("./makeThirdRow");

var _makeFourthRow = require("./makeFourthRow");

const makeAddress = ({
  address,
  phone,
  email,
  website
}) => {
  return {
    layout: 'noBorders',
    marginLeft: 110,
    table: {
      body: [(0, _makeFirstRow.makeFirstRow)(), (0, _makeSecondRow.makeSecondRow)(address.street, phone), (0, _makeThirdRow.makeThirdRow)(address, email), (0, _makeFourthRow.makeFourthRow)(website)]
    }
  };
};

exports.makeAddress = makeAddress;
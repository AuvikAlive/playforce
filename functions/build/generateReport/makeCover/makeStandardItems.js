"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStandardItems = void 0;

var _constants = require("../constants");

const makeStandardItems = appliedStandards => {
  const standardItems = appliedStandards.map(({
    code,
    title
  }, index, array) => {
    const item = {
      text: `${code}: ${title}`,
      alignment: 'center'
    };

    if (index + 1 === array.length) {
      item.pageBreak = 'after';
    }

    return item;
  });
  return [{
    text: 'This playground has been assessed against the requirements of the following Standards:',
    bold: true,
    alignment: 'center',
    marginTop: 140 - standardItems.length * _constants.headerFontSize / 1.5
  }, standardItems];
};

exports.makeStandardItems = makeStandardItems;
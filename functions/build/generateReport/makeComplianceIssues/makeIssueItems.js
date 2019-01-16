"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIssueItems = void 0;

var _constants = require("../constants");

var _makeTable = require("./makeTable");

const columnGap = _constants.verticalMargin;
const imageWidth = (_constants.pageWidth - _constants.pageMarginHorizontal * 2 - columnGap * 3) / 3;

const makeIssueItems = complianceIssues => {
  const complianceIssueItems = complianceIssues.map((complianceIssue, index, array) => {
    const item = [(0, _makeTable.makeTable)({
      columnGap,
      imageWidth,
      index,
      complianceIssue
    })];
    const {
      images
    } = complianceIssue;

    if (images && images.length > 1) {
      const extraImages = images.slice(1);
      const imageItems = extraImages.map(({
        image
      }, index, array) => ({
        image,
        width: imageWidth / 1.25
      }));
      item.push({
        unbreakable: true,
        marginBottom: columnGap * 2,
        columnGap,
        columns: imageItems
      });
    }

    return item;
  });
  return complianceIssueItems;
};

exports.makeIssueItems = makeIssueItems;
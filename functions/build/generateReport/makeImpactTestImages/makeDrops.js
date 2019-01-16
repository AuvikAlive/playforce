"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDrops = void 0;

var _constants = require("../constants");

var _chunk = _interopRequireDefault(require("lodash/chunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const width = (_constants.pageWidth - _constants.pageMarginHorizontal * 2 - _constants.verticalMargin * 4) / 4;

const makeDrops = dropTests => {
  let dropTestsItems = [];
  dropTests.forEach(({
    id,
    image
  }, index) => {
    dropTestsItems.push([image ? {
      image,
      width,
      marginBottom: _constants.verticalMargin / 2
    } : null, {
      text: `${index + 1}`.padStart(3, '0'),
      marginLeft: width / 2 - _constants.fontSize
    }]);
  });
  const quadruples = (0, _chunk.default)(dropTestsItems, 4);
  const grid = quadruples.map((quadruple, index) => {
    if (quadruple.length < 4) {
      const count = 4 - quadruple.length;

      for (let i = 0; i < count; i++) {
        quadruple.push([]);
      }
    }

    return {
      marginBottom: _constants.verticalMargin,
      columnGap: _constants.verticalMargin,
      columns: quadruple // ...((index + 1) % 3 === 0 && { pageBreak: 'after' }),

    };
  });
  return grid;
};

exports.makeDrops = makeDrops;
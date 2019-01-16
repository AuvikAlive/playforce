"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImages = void 0;

var _constants = require("../constants");

var _chunk = _interopRequireDefault(require("lodash/chunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const width = (_constants.pageWidth - _constants.pageMarginHorizontal * 2 - _constants.verticalMargin * 4) / 4;

const makeImages = impactTests => {
  let dropTestsItems = [];
  impactTests.forEach(({
    dropTests
  }) => {
    dropTests && dropTests.forEach(({
      id,
      image
    }, index) => {
      dropTestsItems.push([{
        image,
        width,
        marginBottom: _constants.verticalMargin / 2
      }, {
        text: `${index + 1}`.padStart(3, '0'),
        marginLeft: width / 2 - _constants.fontSize
      }]);
    });
  });
  const quadruples = (0, _chunk.default)(dropTestsItems, 4);
  const grid = quadruples.map(quadruple => {
    if (quadruple.length < 4) {
      const count = 4 - quadruple.length;

      for (let i = 0; i < count; i++) {
        quadruple.push([]);
      }
    }

    return {
      unbreakable: true,
      marginBottom: _constants.verticalMargin,
      columnGap: _constants.verticalMargin,
      columns: quadruple
    };
  });
  return grid;
};

exports.makeImages = makeImages;
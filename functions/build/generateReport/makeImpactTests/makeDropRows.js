"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDropRows = void 0;
const red = '#ff0000';
const green = '#008000';

const makeDropRows = dropTests => {
  const rows = dropTests.map(({
    id,
    location,
    dropHeight,
    hic,
    hicDuration,
    gmax,
    result
  }, index) => [`${index + 1}`.padStart(3, '0'), location, dropHeight, {
    text: hic,
    ...(hic > 1000 && {
      color: red
    })
  }, {
    text: hicDuration,
    ...(hicDuration < 3 && {
      color: red
    })
  }, {
    text: gmax,
    ...(gmax > 200 && {
      color: red
    })
  }, {
    text: result,
    ...(result === 'Satisfactory' ? {
      color: green
    } : {
      color: red
    })
  }]);
  return rows;
};

exports.makeDropRows = makeDropRows;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImage = void 0;

var _constants = require("../constants");

var _utils = require("../utils/");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const makeImage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (imageUrl) {
    const image = yield (0, _utils.fetchImage)(imageUrl);
    return image ? {
      image,
      width: (_constants.pageWidth - 2 * _constants.pageMarginHorizontal) / 2 - 10,
      height: 170,
      marginBottom: _constants.verticalMargin
    } : null;
  });

  return function makeImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeImage = makeImage;
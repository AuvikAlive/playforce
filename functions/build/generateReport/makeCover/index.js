"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCover = void 0;

var _makeAddressHeader = require("../makeAddressHeader");

var _makeTitle = require("./makeTitle");

var _makeCoverImage = require("./makeCoverImage");

var _makeMiddleSection = require("./makeMiddleSection");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const makeCover =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* ({
    reportPreferences,
    organisation,
    inspection,
    site,
    client,
    author
  }) {
    return [(0, _makeAddressHeader.makeAddressHeader)(organisation), (0, _makeTitle.makeTitle)(reportPreferences.title), yield (0, _makeCoverImage.makeCoverImage)(inspection.coverImage), (0, _makeMiddleSection.makeMiddleSection)({
      location: site,
      client: client.name,
      inspectionDate: inspection['date-time'],
      displayName: author.name,
      appliedStandards: inspection.standards
    })];
  });

  return function makeCover(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeCover = makeCover;
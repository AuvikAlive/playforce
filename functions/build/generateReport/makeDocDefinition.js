"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDocDefinition = void 0;

var _pageMargins = require("./pageMargins");

var _pageSize = require("./pageSize");

var _makeHeader = require("./makeHeader");

var _makeFooter = require("./makeFooter");

var _logo = require("./logo");

var _makeCover = require("./makeCover/");

var _makeAuditSummary = require("./makeAuditSummary");

var _makeConditionRatingInfo = require("./makeConditionRatingInfo/");

var _makeConditionRatings = require("./makeConditionRatings/");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const makeDocDefinition =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (requestBody) {
    const {
      reportPreferences,
      organisation,
      inspection,
      site,
      client,
      author,
      equipment
    } = requestBody;
    const skipCommonHeaderFooter = 1;
    const docDefinition = {
      pageMargins: _pageMargins.pageMargins,
      pageSize: _pageSize.pageSize,
      header: (0, _makeHeader.makeHeader)(1),
      footer: (0, _makeFooter.makeFooter)(skipCommonHeaderFooter, 'Comprehensive Playground Inspection Report'),
      images: {
        logo: _logo.logo
      },
      content: [yield (0, _makeCover.makeCover)({
        reportPreferences,
        organisation,
        inspection,
        site,
        client,
        author
      }), yield (0, _makeAuditSummary.makeAuditSummary)(inspection.auditSummary, author, site), (0, _makeConditionRatingInfo.makeConditionRatingInfo)(), (0, _makeConditionRatings.makeConditionRatings)(equipment)]
    };
    return docDefinition;
  });

  return function makeDocDefinition(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeDocDefinition = makeDocDefinition;
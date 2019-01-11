"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAuditSummary = void 0;

var _fetchBase = _interopRequireDefault(require("fetch-base64"));

var _ramda = require("ramda");

var _constants = require("./constants");

var _utils = require("./utils/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const makeAuditSummary =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (auditSummary, author, site) {
    const {
      signature,
      name,
      title
    } = author;
    const siteAddress = (0, _utils.formatSiteAddress)(site.address);
    const insertPlaceholders = (0, _ramda.compose)((0, _utils.insertSiteName)(site.name || ''), (0, _utils.insertSiteAddress)(siteAddress || ''));
    let signatureImage;

    try {
      signatureImage = yield _fetchBase.default.remote(signature);
    } catch (error) {
      signatureImage = null;
    }

    return [{
      text: 'AUDIT SUMMARY',
      font: 'Oswald',
      fontSize: _constants.headerFontSize,
      marginBottom: _constants.verticalMargin
    }, {
      text: insertPlaceholders(auditSummary),
      marginBottom: _constants.verticalMargin * 3
    }, signatureImage ? {
      image: signatureImage,
      width: 65,
      marginBottom: _constants.verticalMargin
    } : null, {
      text: name,
      bold: true
    }, {
      text: title
    }, {
      text: 'Play Force Pty Ltd',
      pageBreak: 'after'
    }];
  });

  return function makeAuditSummary(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.makeAuditSummary = makeAuditSummary;
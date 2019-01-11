"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImageAsDataUrl = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _getDataUrlFromBlob = require("./getDataUrlFromBlob");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const fetchImageAsDataUrl =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (url) {
    const response = yield (0, _nodeFetch.default)(url);
    const blob = yield response.blob();
    const dataUrl = yield (0, _getDataUrlFromBlob.getDataUrlFromBlob)(blob);
    return dataUrl;
  });

  return function fetchImageAsDataUrl(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchImageAsDataUrl = fetchImageAsDataUrl;
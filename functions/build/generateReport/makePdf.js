"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePdf = void 0;

var _printer = _interopRequireDefault(require("pdfmake/src/printer"));

var _fontDescriptors = require("./fontDescriptors");

var _makeDocDefinition = require("./makeDocDefinition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const makePdf =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (requestBody, callback) {
    try {
      const printer = new _printer.default(_fontDescriptors.fontDescriptors);
      const docDefinition = yield (0, _makeDocDefinition.makeDocDefinition)(requestBody);
      const doc = printer.createPdfKitDocument(docDefinition);
      let chunks = [];
      doc.on('data', chunk => {
        chunks.push(chunk);
      });
      doc.on('end', () => {
        const result = Buffer.concat(chunks); // const base64Pdf =
        //   'data:application/pdf;base64,' + result.toString('base64')

        callback(result);
      });
      doc.end();
    } catch (err) {
      throw err;
    }
  });

  return function makePdf(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.makePdf = makePdf;
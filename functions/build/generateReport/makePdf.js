"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePdf = void 0;

var _printer = _interopRequireDefault(require("pdfmake/src/printer"));

var _fontDescriptors = require("./fontDescriptors");

var _makeDocDefinition = require("./makeDocDefinition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePdf = async (requestBody, callback) => {
  try {
    const printer = new _printer.default(_fontDescriptors.fontDescriptors);
    const docDefinition = await (0, _makeDocDefinition.makeDocDefinition)(requestBody);
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
  } catch (error) {
    console.log(error); // throw error
  }
};

exports.makePdf = makePdf;
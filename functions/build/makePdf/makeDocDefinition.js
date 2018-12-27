"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDocDefinition = void 0;

const makeDocDefinition = requestBody => {
  const {
    reportPreferences
  } = requestBody;
  const docDefinition = {
    content: [reportPreferences.title.wording]
  };
  return docDefinition;
};

exports.makeDocDefinition = makeDocDefinition;
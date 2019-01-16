"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePlaygroundItems = void 0;

var _makeSubtitle = require("../makeSubtitle");

var _makeIndividualItems = require("./makeIndividualItems");

const makePlaygroundItems = playgrounds => playgrounds.map(({
  name,
  maintenanceIssues
}) => [(0, _makeSubtitle.makeSubtitle)(name), (0, _makeIndividualItems.makeIndividualItems)(maintenanceIssues)]); // export const makePlaygroundItems = playgrounds =>
//   playgrounds.map(({ name, maintenanceIssues }) => ({
//     unbreakable: true,
//     stack: [makeSubtitle(name), makeIndividualItems(maintenanceIssues)],
//   }))


exports.makePlaygroundItems = makePlaygroundItems;
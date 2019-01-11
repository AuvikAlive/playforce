"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePlaygroundItems = void 0;

var _makeSubtitle = require("../makeSubtitle");

var _makeIndividualItems = require("./makeIndividualItems");

const makePlaygroundItems = playgrounds => playgrounds.map(({
  name,
  conditionRatings
}) => [(0, _makeSubtitle.makeSubtitle)(name), (0, _makeIndividualItems.makeIndividualItems)(conditionRatings)]); // export const makePlaygroundItems = playgrounds =>
//   playgrounds.map(({ name, conditionRatings }) => ({
//     unbreakable: true,
//     stack: [makeSubtitle(name), makeIndividualItems(conditionRatings)],
//   }))


exports.makePlaygroundItems = makePlaygroundItems;
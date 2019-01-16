"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCover = void 0;

var _makeAddressHeader = require("../makeAddressHeader");

var _makeTitle = require("./makeTitle");

var _makeCoverImage = require("./makeCoverImage");

var _makeMiddleSection = require("./makeMiddleSection");

const makeCover = async ({
  reportPreferences,
  organisation,
  inspection,
  site,
  client,
  author
}) => {
  return [(0, _makeAddressHeader.makeAddressHeader)(organisation), (0, _makeTitle.makeTitle)(reportPreferences.title), await (0, _makeCoverImage.makeCoverImage)(inspection.coverImage), (0, _makeMiddleSection.makeMiddleSection)({
    location: site,
    client: client.name,
    inspectionDate: inspection['date-time'],
    displayName: author.name,
    appliedStandards: inspection.standards
  })];
};

exports.makeCover = makeCover;
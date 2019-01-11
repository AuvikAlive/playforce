"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSiteAddress = void 0;

const formatSiteAddress = siteAddress => {
  const {
    street,
    suburb,
    state,
    postcode,
    country
  } = siteAddress;
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`;
  return address;
};

exports.formatSiteAddress = formatSiteAddress;
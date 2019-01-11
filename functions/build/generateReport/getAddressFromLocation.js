"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddressFromLocation = void 0;

const getAddressFromLocation = location => {
  const {
    street,
    suburb,
    state,
    postcode,
    country
  } = location;
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`;
  return address;
};

exports.getAddressFromLocation = getAddressFromLocation;
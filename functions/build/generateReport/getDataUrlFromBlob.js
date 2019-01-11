"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataUrlFromBlob = void 0;

const getDataUrlFromBlob = blob => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(blob);
  });
};

exports.getDataUrlFromBlob = getDataUrlFromBlob;
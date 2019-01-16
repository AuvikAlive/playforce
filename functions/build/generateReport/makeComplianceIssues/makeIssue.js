"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIssue = void 0;

const makeIssue = ({
  image,
  imageWidth,
  index,
  equipment,
  playingSurface
}) => [image ? {
  image,
  width: imageWidth,
  rowSpan: 6,
  marginRight: 8
} : null, {
  text: 'Issue #:',
  bold: true
}, `${index + 1}`.padStart(3, '0'), equipment || playingSurface];

exports.makeIssue = makeIssue;
export const makeIssue = ({ image, imageWidth, index, equipment }) => [
  {
    image,
    width: imageWidth,
    rowSpan: 6,
    marginRight: 8,
  },
  {
    text: 'Issue #:',
    bold: true,
  },
  `00${index + 1}`,
  equipment,
]

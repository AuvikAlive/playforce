export const makeIssue = ({
  image,
  imageWidth,
  index,
  equipment,
  playingSurface,
}) => [
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
  `${index + 1}`.padStart(3, '0'),
  equipment || playingSurface,
]

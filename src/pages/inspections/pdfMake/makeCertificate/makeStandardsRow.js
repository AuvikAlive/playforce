export const makeStandardsRow = ({
  pageFontSize,
  lineHeight,
  firstColumnWidth,
  marginBottom,
  appliedStandards,
}) => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => {
      const item = {
        text: `${code}`,
        width: '*',
        lineHeight,
      }

      return item
    }
  )

  return {
    fontSize: pageFontSize,
    marginBottom,
    columns: [
      {
        text: 'Standard(s) applied',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: pageFontSize },
      standardItems,
    ],
  }
}

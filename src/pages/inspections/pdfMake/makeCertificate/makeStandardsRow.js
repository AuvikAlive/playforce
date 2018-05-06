import { verticalMargin } from '../globals'

export const makeStandardsRow = (
  pageFontSize,
  firstColumnWidth,
  appliedStandards
) => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => {
      const item = {
        text: `${code}`,
        width: '*',
      }

      return item
    }
  )

  return {
    fontSize: pageFontSize,
    marginBottom: verticalMargin * 3,
    columns: [
      {
        text: 'Standard(s) applied',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: firstColumnWidth / 2 },
      standardItems,
    ],
  }
}

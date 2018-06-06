import { verticalMargin } from '../globals'

export const makeStandards = (firstColumnWidth, appliedStandards) => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) =>
      index === 0 ? `${code}: ${title}` : `, ${code}: ${title}`
  )

  return {
    marginBottom: verticalMargin,
    columns: [
      {
        text: 'Applied Standard(s):',
        decoration: 'underline',
        bold: true,
        width: firstColumnWidth,
      },
      {
        text: standardItems,
      },
    ],
  }
}

import { headerFontSize } from '../constants'

export const makeStandardItems = appliedStandards => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => {
      const item = {
        text: `${code}: ${title}`,
        alignment: 'center',
      }

      if (index + 1 === array.length) {
        item.pageBreak = 'after'
      }

      return item
    }
  )

  return [
    {
      text:
        'This playground has been assessed against the requirements of the following Standards:',
      bold: true,
      alignment: 'center',
      marginTop: 140 - standardItems.length * headerFontSize / 1.5,
    },
    standardItems,
  ]
}

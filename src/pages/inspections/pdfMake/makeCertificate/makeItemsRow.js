import { verticalMargin } from '../constants'

export const makeItemsRow = (
  pageFontSize,
  firstColumnWidth,
  conditionRatings
) => {
  const conditionRatingItems = conditionRatings.map(
    ({ equipment, manufacturer }) => ({
      text: `${equipment} - ${manufacturer}`,
      width: '*',
    })
  )

  return {
    fontSize: pageFontSize,
    marginBottom: verticalMargin * 3,
    columns: [
      {
        text: 'Items(s)',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: firstColumnWidth / 2 },
      conditionRatingItems,
    ],
  }
}

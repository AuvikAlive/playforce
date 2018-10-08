import { chunk } from 'lodash'
import { equipmentTypes } from '../../../../constants/'

export const makeItemsRow = ({
  pageFontSize,
  lineHeight,
  firstColumnWidth,
  marginBottom,
  conditionRatings,
}) => {
  const playItems = conditionRatings.filter(
    ({ itemType }) => itemType === equipmentTypes[0]
  )

  const conditionRatingItems = playItems.map(({ equipment, manufacturer }) => ({
    text: `${equipment} - ${manufacturer}`,
    width: '*',
    lineHeight,
  }))

  const tuples = chunk(conditionRatingItems, 2)

  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      unbreakable: true,
    }

    return row
  })

  return {
    fontSize: pageFontSize,
    marginBottom,
    columns: [
      {
        text: 'Items(s)',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: pageFontSize },
      grid,
    ],
  }
}

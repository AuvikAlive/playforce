import {
  verticalMargin,
  headerFontSize,
  pageMarginHorizontal,
  pageWidth,
} from './globals'
import chunk from 'lodash/chunk'

export const makeIndividualConditionRatings = conditionRatings => {
  const conditionRatingItems = conditionRatings.map(
    (
      { image, equipment, manufacturer, condition, estimatedDateInstalled },
      index,
    ) => [
      {
        image,
        width: (pageWidth - 2 * pageMarginHorizontal) / 2 - 10,
        height: 170,
        marginBottom: verticalMargin,
      },
      {
        text: [
          {
            text: 'Equipment Type: ',
            bold: true,
          },
          equipment,
        ],
      },
      {
        text: [
          {
            text: 'Manufacturer: ',
            bold: true,
          },
          manufacturer,
        ],
      },
      {
        text: [
          {
            text: 'Condition: ',
            bold: true,
          },
          condition,
        ],
      },
    ],
  )

  const tuples = chunk(conditionRatingItems, 2)

  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: verticalMargin,
    }

    if (index + 1 === array.length) {
      row.pageBreak = 'after'
    }

    return row
  })

  return [
    {
      text: 'CONDITION RATING - INDIVIDUAL ITEMS',
      font: 'Oswald',
      fontSize: headerFontSize,
      // bold: true,
      marginBottom: verticalMargin * 2,
    },
    grid,
  ]
}

import {
  verticalMargin,
  pageWidth,
  pageMarginHorizontal,
  fontSize,
} from '../constants'
import chunk from 'lodash/chunk'

const width = (pageWidth - pageMarginHorizontal * 2 - verticalMargin * 4) / 4

export const makeDrops = dropTests => {
  let dropTestsItems = []

  dropTests.forEach(({ id, image }, index) => {
    dropTestsItems.push([
      {
        image,
        width,
        marginBottom: verticalMargin / 2,
      },
      {
        text: `${index + 1}`.padStart(3, '0'),
        marginLeft: width / 2 - fontSize,
      },
    ])
  })

  const quadruples = chunk(dropTestsItems, 4)

  const grid = quadruples.map((quadruple, index) => {
    if (quadruple.length < 4) {
      const count = 4 - quadruple.length

      for (let i = 0; i < count; i++) {
        quadruple.push([])
      }
    }

    return {
      unbreakable: true,
      marginBottom: verticalMargin,
      columnGap: verticalMargin,
      columns: quadruple,
      ...((index + 1) % 3 === 0 && { pageBreak: 'after' }),
    }
  })

  return grid
}

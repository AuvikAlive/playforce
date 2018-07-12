import {
  verticalMargin,
  pageWidth,
  pageMarginHorizontal,
  fontSize,
} from '../constants'
import chunk from 'lodash/chunk'

const width = (pageWidth - pageMarginHorizontal * 2 - verticalMargin * 4) / 4

export const makeImages = impactTests => {
  let dropTestsItems = []

  impactTests.forEach(({ dropTests }) => {
    dropTests &&
      dropTests.forEach(({ id, image }) => {
        dropTestsItems.push([
          {
            image,
            width,
            marginBottom: verticalMargin / 2,
          },
          {
            text: `00${id}`,
            marginLeft: width / 2 - fontSize,
          },
        ])
      })
  })

  const quadruples = chunk(dropTestsItems, 4)

  const grid = quadruples.map(quadruple => ({
    unbreakable: true,
    marginBottom: verticalMargin,
    columnGap: verticalMargin,
    columns: quadruple,
  }))

  return grid
}

import { makeColumn } from './makeColumn'
import { verticalMargin, pageWidth, pageMarginHorizontal } from '../constants'

const columnGap = verticalMargin
const imageWidth = (pageWidth - pageMarginHorizontal * 2 - columnGap * 3) / 3

export const makeIssueItems = maintenanceIssues => {
  const maintenanceIssueItems = maintenanceIssues.map(
    (maintenanceIssue, index, array) => {
      const item = [
        makeColumn({ columnGap, imageWidth, index, maintenanceIssue }),
      ]
      const { images } = maintenanceIssue

      if (images.length > 1) {
        const extraImages = images.slice(1)
        const imageItems = extraImages.map(({ image }, index, array) => ({
          image,
          width: imageWidth,
        }))

        item.push({
          unbreakable: true,
          marginBottom: columnGap * 2,
          columnGap,
          columns: imageItems,
        })
      }

      if (index + 1 === array.length) {
        if (images.length > 1) {
          item[1].pageBreak = 'after'
        } else {
          item[0].pageBreak = 'after'
        }
      }

      return item
    }
  )

  return maintenanceIssueItems
}

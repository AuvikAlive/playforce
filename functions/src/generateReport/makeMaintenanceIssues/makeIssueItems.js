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

      if (images && images.length > 1) {
        const extraImages = images.slice(1)
        const imageItems = extraImages.map(({ image }, index, array) => ({
          image,
          width: imageWidth / 1.25,
        }))

        item.push({
          unbreakable: true,
          marginBottom: columnGap * 2,
          columnGap,
          columns: imageItems,
        })
      }

      return item
    }
  )

  return maintenanceIssueItems
}

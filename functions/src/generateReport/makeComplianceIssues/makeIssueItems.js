import { verticalMargin, pageWidth, pageMarginHorizontal } from '../constants'
import { makeTable } from './makeTable'

const columnGap = verticalMargin
const imageWidth = (pageWidth - pageMarginHorizontal * 2 - columnGap * 3) / 3

export const makeIssueItems = complianceIssues => {
  const complianceIssueItems = complianceIssues.map(
    (complianceIssue, index, array) => {
      const item = [
        makeTable({ columnGap, imageWidth, index, complianceIssue }),
      ]
      const { images } = complianceIssue

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

  return complianceIssueItems
}

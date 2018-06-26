import { groupBy, sortBy } from 'lodash'

export const groupCommonIssues = commonIssues => {
  const categorizedCommonIssues = commonIssues.map(item => {
    if (!item.category) {
      item.category = 'uncategorized'
    }

    return item
  })

  const sortedCommonIssues = sortBy(categorizedCommonIssues, ['category'])

  const groupedCommonIssues = groupBy(sortedCommonIssues, 'category')

  return groupedCommonIssues
}

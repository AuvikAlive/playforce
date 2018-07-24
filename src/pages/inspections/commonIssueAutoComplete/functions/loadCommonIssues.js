import { map } from 'lodash'
import { groupCommonIssues } from '../../../../functions/groupCommonIssues'

export const loadCommonIssues = component => {
  const { commonIssues } = component.props
  const groupedCommonIssues = groupCommonIssues(commonIssues)

  const sectionedCommonIssues = map(groupedCommonIssues, (value, key) => {
    return {
      title: key,
      items: value,
    }
  })

  component.setState({ commonIssues: sectionedCommonIssues })
}

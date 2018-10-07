import { showActionGoBack } from '../../../../functions/'

export const deleteCommonIssue = component => async () => {
  const { deleteCommonIssue, userId, commonIssueId } = component.props

  await deleteCommonIssue(userId, commonIssueId)

  showActionGoBack(component, 'Issue deleted!')()
}

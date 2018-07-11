import { showActionGoBack } from '../../../../functions/'

export const deleteCommonIssue = component => async () => {
  const { deleteCommonIssue, userId, commonIssueId } = this.props

  await deleteCommonIssue(userId, commonIssueId)

  const message = 'Issue deleted!'

  showActionGoBack(component, message)()
}

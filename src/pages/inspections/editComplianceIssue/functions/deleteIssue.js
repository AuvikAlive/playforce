import { showActionGoBack } from '../../../../functions/'

const message = 'Issue deleted!'

export const deleteIssue = component => async () => {
  const {
    deleteComplianceIssue,
    userId,
    inspectionId,
    complianceIssueId,
    complianceIssue,
  } = component.props

  await deleteComplianceIssue(
    userId,
    inspectionId,
    complianceIssueId,
    complianceIssue.images
  )
  showActionGoBack(component, message)()
}

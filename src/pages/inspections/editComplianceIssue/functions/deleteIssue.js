import { showActionGoBack } from '../../../../functions/'

const message = 'Issue deleted!'

export const deleteIssue = async () => {
  const {
    deleteComplianceIssue,
    userId,
    inspectionId,
    complianceIssueId,
    complianceIssue,
  } = this.props

  await deleteComplianceIssue(
    userId,
    inspectionId,
    complianceIssueId,
    complianceIssue.images
  )
  showActionGoBack(this, message)
}

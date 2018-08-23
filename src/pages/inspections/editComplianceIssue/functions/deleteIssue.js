import { showActionGoBack } from '../../../../functions/'

export const deleteIssue = component => async () => {
  const { deleteComplianceIssue, complianceIssue } = component.props

  await deleteComplianceIssue(complianceIssue.images)

  showActionGoBack(component, 'Issue deleted!')()
}

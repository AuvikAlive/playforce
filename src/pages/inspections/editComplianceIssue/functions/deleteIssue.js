import { showActionGoBack } from '../../../../functions/'

const message = 'Issue deleted!'

export const deleteIssue = component => async () => {
  const { deleteComplianceIssue, complianceIssue } = component.props

  await deleteComplianceIssue(complianceIssue.images)

  showActionGoBack(component, message)()
}

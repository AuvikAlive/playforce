export const submit = component => async maintenanceIssue => {
  const { addMaintenanceIssue } = component.props

  const maintenanceIssueId = await addMaintenanceIssue(maintenanceIssue)

  return maintenanceIssueId
}

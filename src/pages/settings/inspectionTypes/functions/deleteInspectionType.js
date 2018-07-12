export const deleteInspectionType = component => async id => {
  const { openDialog, deleteInspectionType, userId } = component.props

  openDialog(() => deleteInspectionType(userId, id))
}

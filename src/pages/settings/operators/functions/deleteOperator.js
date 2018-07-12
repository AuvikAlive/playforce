export const deleteOperator = component => async id => {
  const { openDialog, deleteOperator, userId } = component.props

  openDialog(() => deleteOperator(userId, id))
}

export const deleteManufacturer = component => async id => {
  const { openDialog, deleteManufacturer, userId } = component.props

  openDialog(() => deleteManufacturer(userId, id))
}

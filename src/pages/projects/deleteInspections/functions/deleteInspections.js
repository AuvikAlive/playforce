export const deleteInspections = (component, setSelectMode) => async () => {
  const { selectedItems } = component.state
  const { deleteInspections, userId, id } = component.props

  try {
    await deleteInspections(userId, id, selectedItems)
    setSelectMode(component)(false)
  } catch (error) {
    console.log(error)
  }
}

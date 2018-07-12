export const addInspections = (component, setSelectMode) => async () => {
  const { selectedItems } = component.state
  const { addInspections, userId, id } = component.props

  try {
    await addInspections(userId, id, selectedItems)
    setSelectMode(component)(false)
  } catch (error) {
    console.log(error)
  }
}

export const addMembers = component => async () => {
  const { selectedItems } = component.state
  const { addMembers, id } = component.props

  try {
    await addMembers(id, selectedItems)
    component.setSelectMode(false)
  } catch (error) {
    console.log(error)
  }
}

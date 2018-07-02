import { setSelectMode } from './setSelectMode'

export const deleteMembers = component => async () => {
  const { selectedItems } = component.state
  const { deleteMembers, id } = component.props

  try {
    await deleteMembers(id, selectedItems)
    setSelectMode(component)(false)
  } catch (error) {
    console.log(error)
  }
}

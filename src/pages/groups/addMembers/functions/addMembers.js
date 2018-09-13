import { setSelectMode } from './setSelectMode'

export const addMembers = component => async () => {
  const { selectedItems } = component.state
  const { addMembers, id } = component.props

  try {
    await addMembers(id, selectedItems)
    setSelectMode(component, 'Add Members')(false)
  } catch (error) {
    console.log(error)
  }
}

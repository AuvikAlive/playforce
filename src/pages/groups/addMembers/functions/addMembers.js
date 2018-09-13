import { setSelectMode } from './setSelectMode'

export const addMembers = component => async () => {
  const { selectedItems } = component.state
  const { addMembers, id, setFeedback } = component.props

  try {
    await addMembers(id, selectedItems)

    setSelectMode(component, 'Add Members')(false)
    setFeedback({ success: 'Members added!' })
  } catch (error) {
    console.log(error)
  }
}

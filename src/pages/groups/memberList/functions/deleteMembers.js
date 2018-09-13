import { setSelectMode } from './setSelectMode'

export const deleteMembers = component => async () => {
  const { selectedItems } = component.state
  const { deleteMembers, id, setFeedback } = component.props

  try {
    await deleteMembers(id, selectedItems)

    setSelectMode(component)(false)
    setFeedback({ success: 'Members deleted!' })
  } catch (error) {
    console.log(error)
  }
}

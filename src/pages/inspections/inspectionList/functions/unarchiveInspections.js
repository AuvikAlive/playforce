import { closeMenu } from '../../../../functions/'

export const unarchiveInspections = component => async () => {
  closeMenu(component)()

  const {
    unarchiveInspections,
    userId,
    getSelectedItems,
    setSelectMode,
  } = component.props
  const selectedItems = getSelectedItems()

  try {
    await unarchiveInspections(userId, selectedItems)
    setSelectMode(false)
  } catch (error) {
    console.log(error)
  }
}

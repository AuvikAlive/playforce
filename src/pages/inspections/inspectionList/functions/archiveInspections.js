import { closeMenu } from '../../../../functions/'

export const archiveInspections = component => async () => {
  closeMenu(component)()

  const {
    archiveInspections,
    userId,
    getSelectedItems,
    setSelectMode,
  } = component.props
  const selectedItems = getSelectedItems()

  try {
    await archiveInspections(userId, selectedItems)
    setSelectMode(false)
  } catch (error) {
    console.log(error)
  }
}

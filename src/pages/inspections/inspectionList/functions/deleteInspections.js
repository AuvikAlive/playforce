import { closeMenu } from '../../../../functions/'

export const deleteInspections = component => async () => {
  closeMenu(component)()

  const {
    deleteInspections,
    userId,
    getSelectedItems,
    setSelectMode,
  } = component.props
  const selectedItems = getSelectedItems()

  await deleteInspections(userId, selectedItems)
  setSelectMode(false)
}

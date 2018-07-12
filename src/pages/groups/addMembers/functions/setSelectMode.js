import { setSelectedItems } from '../../../../functions/setSelectedItems'
import { setSelectModeNav } from './setSelectModeNav'
import { setNav } from './setNav'

export const setSelectMode = (component, title) => (
  selectMode,
  selectedItemsLength
) => {
  const { setNavColor, setSearchOnTop } = component.context

  if (selectMode) {
    setSelectModeNav(component, title, selectedItemsLength)
  } else {
    setSearchOnTop()
    setNavColor('primary')

    setNav(component, title)
    setSelectedItems(component)([])
  }

  component.setState({ selectMode })
}

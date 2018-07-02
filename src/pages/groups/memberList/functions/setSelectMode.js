import { setSelectedItems } from '../../../../functions/setSelectedItems'
import { setSelectModeNav } from './setSelectModeNav'
import { setNav } from './setNav'

export const setSelectMode = component => (selectMode, selectedItemsLength) => {
  const { setNavColor, setSearchOnTop } = component.context

  if (selectMode) {
    setSelectModeNav(component, selectedItemsLength)
  } else {
    setSearchOnTop()
    setNavColor('primary')
    setNav(component)
    setSelectedItems(component)([])
  }

  component.setState({ selectMode })
}

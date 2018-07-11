import { setSelectedItems } from '../../../../functions/'
import { setSelectModeNav } from './setSelectModeNav'
import { setNav } from './setNav'

export const setSelectMode = component => (selectMode, selectedItemsLength) => {
  const {
    setNavColor,
    removeLefNavComponent,
    setSearchOnTop,
  } = component.context

  if (selectMode) {
    setSelectModeNav(component, selectedItemsLength)
  } else {
    setSearchOnTop()
    setNavColor('primary')
    removeLefNavComponent()
    setNav(component)
    setSelectedItems(component)([])
  }

  component.setState({ selectMode })
}

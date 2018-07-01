import { setSelectModeNav } from './setSelectModeNav'
import { setDefaultNav } from './setDefaultNav'

export const setSelectMode = component => (selectMode, selectedItemsLength) => {
  if (selectMode) {
    setSelectModeNav(component, selectedItemsLength, setSelectMode)
  } else {
    setDefaultNav(component)
  }

  component.setState({ selectMode })
}

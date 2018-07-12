import { setSelectModeNav } from './setSelectModeNav'
import { setDefaultNav } from './setDefaultNav'

export const setSelectMode = (component, title) => (
  selectMode,
  selectedItemsLength
) => {
  if (selectMode) {
    setSelectModeNav(component, selectedItemsLength, setSelectMode, title)
  } else {
    setDefaultNav(component, title)
  }

  component.setState({ selectMode })
}

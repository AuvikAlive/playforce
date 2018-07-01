import { setInspectionNav } from '../../functions/setInspectionNav'
import { setSelectedItems } from '../../../../functions/setSelectedItems'

export const setDefaultNav = (component, title) => {
  const { setNavColor, setSearchOnTop } = component.context

  setSearchOnTop()
  setNavColor('primary')
  setInspectionNav(component, title)
  setSelectedItems(component)([])
}

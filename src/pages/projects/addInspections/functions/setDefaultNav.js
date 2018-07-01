import { setInspectionNav } from '../../utilities/setInspectionNav'
import { setSelectedItems } from '../../../../utilities/setSelectedItems'

export const setDefaultNav = component => {
  const { setNavColor, setSearchOnTop } = component.context

  setSearchOnTop()
  setNavColor('primary')
  setInspectionNav(component, 'Add Inspections')
  setSelectedItems(component)([])
}

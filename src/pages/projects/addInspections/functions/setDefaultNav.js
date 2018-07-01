import { setInspectionNav } from '../../functions/setInspectionNav'
import { setSelectedItems } from '../../../../functions/setSelectedItems'

export const setDefaultNav = component => {
  const { setNavColor, setSearchOnTop } = component.context

  setSearchOnTop()
  setNavColor('primary')
  setInspectionNav(component, 'Add Inspections')
  setSelectedItems(component)([])
}

import { setRightNav } from './setRightNav'

export const setNav = component => {
  const { setNavTitle } = component.context
  const { view } = component.props

  setNavTitle('Inspections')
  setRightNav(component, view)
}

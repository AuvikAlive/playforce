import { closeMenu } from '../../../../functions/'

export const changeView = (component, view) => () => {
  const { setView } = component.props

  closeMenu(component)()
  setView(view)
}

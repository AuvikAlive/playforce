import { closeMenu } from '../../../../functions/'

export const toggleMode = component => () => {
  closeMenu(component)()

  const { playingSurfaceMode } = component.state

  component.setState({ playingSurfaceMode: !playingSurfaceMode })
}

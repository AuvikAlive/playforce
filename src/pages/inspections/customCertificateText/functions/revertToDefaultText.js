import { closeMenu } from '../../../../functions/'

export const revertToDefaultText = component => () => {
  closeMenu(component)()

  component.setState({ revertText: true })
}

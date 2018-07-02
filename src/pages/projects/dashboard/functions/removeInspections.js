import { closeMenu } from '../../../../functions/'

export const removeInspections = component => () => {
  closeMenu(component)

  const { history, match } = component.props

  history.push(`${match.url}/remove`)
}

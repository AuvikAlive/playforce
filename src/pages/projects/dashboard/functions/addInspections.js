import { closeMenu } from '../../../../functions/'

export const addInspections = component => () => {
  closeMenu(component)

  const { history, match } = component.props

  history.push(`${match.url}/add`)
}

import { setup } from './setup'

export const onComponentDidMount = component => {
  const { site, fetchSite, userId, siteId } = component.props

  site && setup(component, site)
  !site && fetchSite(userId, siteId)
}

export const onComponentDidMount = component => {
  component.context.setNavTitle('Edit Site')

  const { site, fetchSite, userId, siteId } = component.props

  !site && fetchSite(userId, siteId)
}

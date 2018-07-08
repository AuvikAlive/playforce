export const submit = component => async site => {
  const { addSite, userId } = component.props
  const siteId = await addSite(userId, site)

  return siteId
}

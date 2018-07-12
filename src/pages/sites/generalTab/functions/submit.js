export const submit = component => async site => {
  const { updateSite, userId, siteId, setFeedback } = component.props

  await updateSite(userId, siteId, site)
  setFeedback({ success: 'Site updated!' })
}

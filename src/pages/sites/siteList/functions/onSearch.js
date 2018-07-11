export const onSearch = component => query => {
  const { searchSites, userId } = component.props

  return searchSites(userId, query)
}

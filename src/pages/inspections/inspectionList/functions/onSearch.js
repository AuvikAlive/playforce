export const onSearch = component => async query => {
  const { searchInspections, userId } = component.props

  return searchInspections(userId, query)
}

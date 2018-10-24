export const handleSelectClick = component => (id, inspectionTypeUrl) => {
  const { history, match } = component.props

  history.push(`${match.url}/${inspectionTypeUrl}/edit/${id}`)
}

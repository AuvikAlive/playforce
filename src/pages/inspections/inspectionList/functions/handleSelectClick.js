export const handleSelectClick = component => id => {
  const { history, match } = component.props

  history.push(`${match.url}/edit/${id}`)
}

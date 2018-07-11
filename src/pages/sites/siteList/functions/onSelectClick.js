export const onSelectClick = component => id => {
  const { history } = component.props

  history.push(`/sites/${id}`)
}

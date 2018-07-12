export const onTabChange = component => (event, value) => {
  const { match, history } = component.props
  const urlWithoutParam = match.url.substr(0, match.url.lastIndexOf('/'))
  const url = urlWithoutParam + `/${value}`

  history.replace(url)
}

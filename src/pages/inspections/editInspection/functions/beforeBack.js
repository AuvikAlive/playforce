export const beforeBack = component => () => {
  const { history, discardInspection } = component.props

  discardInspection()
  history.goBack()
}

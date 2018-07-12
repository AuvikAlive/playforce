export const showActionGoBack = (component, message) => () => {
  const { setFeedback, history } = component.props

  setFeedback({ success: message })
  history.goBack()
}

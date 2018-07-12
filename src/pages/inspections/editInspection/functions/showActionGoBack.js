export const showActionGoBack = (component, message) => {
  const { setFeedback, history, discardInspection } = component.props

  setFeedback({ success: message })
  discardInspection()
  history.goBack()
}

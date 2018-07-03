export const showActionGo = (component, message, pathHead) => pathTail => {
  const { setFeedback, history } = component.props

  setFeedback({ success: message })
  history.replace(`${pathHead}${pathTail}`)
}

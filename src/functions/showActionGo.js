export const showActionGo = ({ props }, message, pathHead) => pathTail => {
  const { setFeedback, history } = props

  setFeedback({ success: message })
  history.replace(`${pathHead}${pathTail || ''}`)
}

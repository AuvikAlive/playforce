export const beforeBack = ({ props }) => () => {
  const { history, discardInspection } = props

  discardInspection()
  history.goBack()
}

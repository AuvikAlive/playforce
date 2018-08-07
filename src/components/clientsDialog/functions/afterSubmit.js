export const afterSubmit = component => () => {
  const { closeDialog, setFeedback } = component.props

  closeDialog()
  setFeedback({ success: 'Client added!' })
}

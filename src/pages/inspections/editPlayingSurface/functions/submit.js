export const submit = component => async data => {
  const { updatePlayingSurface, setFeedback } = component.props

  await updatePlayingSurface(data)

  setFeedback({ success: 'Surface updated!' })
}

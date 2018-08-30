export const submit = component => async data => {
  const { updateDropTest, setFeedback } = component.props

  await updateDropTest(data)

  setFeedback({ success: 'Drop test updated!' })
}

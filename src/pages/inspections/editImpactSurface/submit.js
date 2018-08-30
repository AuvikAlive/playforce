export const submit = component => async data => {
  const { updateImpactSurface, setFeedback } = component.props

  await updateImpactSurface(data)

  setFeedback({ success: 'Details updated!' })
}

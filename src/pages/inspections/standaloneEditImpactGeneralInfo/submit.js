export const submit = component => async data => {
  const { saveImpactGeneralInfo, setFeedback } = component.props

  await saveImpactGeneralInfo(data)

  setFeedback({ success: 'Info updated!' })
}

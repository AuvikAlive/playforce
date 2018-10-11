export const submit = component => async cover => {
  const { updateCover, userId, inspectionId, setFeedback } = component.props

  await updateCover(userId, inspectionId, cover)
  setFeedback({ success: 'Cover saved!' })
}

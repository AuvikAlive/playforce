export const submit = component => async cover => {
  const { addInspection, userId } = component.props
  const inspectionId = await addInspection(userId, cover)

  return inspectionId
}
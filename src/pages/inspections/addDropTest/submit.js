export const submit = component => async data => {
  const { addDropTest, userId, inspectionId, impactTestId } = component.props
  const dropNumber = await addDropTest(userId, inspectionId, impactTestId, data)

  return dropNumber
}

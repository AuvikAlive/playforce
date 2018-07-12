export const submit = component => async data => {
  const { addSurfaceTest, userId, inspectionId } = component.props
  const surfaceId = await addSurfaceTest(userId, inspectionId, data)

  return surfaceId
}

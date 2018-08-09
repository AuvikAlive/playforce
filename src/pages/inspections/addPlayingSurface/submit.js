export const submit = component => data => {
  const { addPlayingSurface, userId, inspectionId } = component.props

  return addPlayingSurface(userId, inspectionId, data)
}

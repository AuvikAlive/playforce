export const submit = component => data => {
  const {
    updatePlayingSurface,
    userId,
    playingSurfaceId,
    inspectionId,
  } = component.props

  return updatePlayingSurface(userId, inspectionId, playingSurfaceId, data)
}

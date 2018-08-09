import { showActionGoBack } from '../../../../functions/'

export const deletePlayingSurface = component => async () => {
  const {
    inspectionId,
    userId,
    playingSurfaceId,
    deletePlayingSurface,
  } = component.props

  await deletePlayingSurface(userId, inspectionId, playingSurfaceId)

  showActionGoBack(component, 'Playing surface deleted!')()
}

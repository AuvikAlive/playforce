import { getRootRef } from '../../dbActions/'

export const deletePlayingSurface = (userId, inspectionId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playingSurfaces')
    .doc(id)

  return ref.delete()
}

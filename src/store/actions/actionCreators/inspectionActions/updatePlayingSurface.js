import { getRootRef } from '../dbActions/'

export const updatePlayingSurface = (userId, inspectionId, id, data) => async (
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

  return ref.update(data)
}

import { getRootRef } from '../../dbActions/'

export const addPlayingSurface = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playingSurfaces')
    .doc()

  await ref.set(data)

  return ref.id
}

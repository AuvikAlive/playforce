import { getRootRef } from '../../dbActions/'
import { deletePlayingSurfaceStateless } from './deletePlayingSurfaceStateless'

export const deletePlayingSurface = (userId, inspectionId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(deletePlayingSurfaceStateless(inspectionRef, id))
}

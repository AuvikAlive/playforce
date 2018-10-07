import { getRootRef } from '../../dbActions/'
import { updatePlayingSurfaceStateless } from './updatePlayingSurfaceStateless'

export const updatePlayingSurface = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  await dispatch(updatePlayingSurfaceStateless(inspectionRef, id, data))
}

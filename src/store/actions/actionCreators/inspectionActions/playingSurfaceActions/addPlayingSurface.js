import { getRootRef } from '../../dbActions/'
import { addPlayingSurfaceStateless } from './addPlayingSurfaceStateless'

export const addPlayingSurface = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    addPlayingSurfaceStateless(inspectionRef, data)
  )

  return payload.id
}

import { DELETE_PLAYGROUND_SURFACE_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteSurfaceTestStateless } from '../../impactTestActions/'

export const deletePlaygroundSurfaceTest = (
  userId,
  inspectionId,
  playgroundId,
  impactTest
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(deleteSurfaceTestStateless(ref, impactTest))

  dispatch({
    type: DELETE_PLAYGROUND_SURFACE_TEST,
    payload: { id: impactTest.id, playgroundId },
  })
}

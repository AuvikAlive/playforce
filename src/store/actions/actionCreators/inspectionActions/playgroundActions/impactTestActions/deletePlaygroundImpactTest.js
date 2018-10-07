import { DELETE_PLAYGROUND_IMPACT_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteImpactTestStateless } from '../../impactTestActions/'

export const deletePlaygroundImpactTest = (
  userId,
  inspectionId,
  playgroundId,
  impactTests
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(deleteImpactTestStateless(playgroundRef, impactTests))

  dispatch({
    type: DELETE_PLAYGROUND_IMPACT_TEST,
    payload: { playgroundId },
  })
}

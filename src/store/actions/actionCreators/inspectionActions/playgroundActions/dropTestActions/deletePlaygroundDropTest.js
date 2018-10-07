import { DELETE_PLAYGROUND_DROP_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { deleteDropTestStateless } from '../../dropTestActions/'

export const deletePlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  id,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('impactTests')
    .doc(impactTestId)

  await dispatch(deleteDropTestStateless(ref, id))

  dispatch({
    type: DELETE_PLAYGROUND_DROP_TEST,
    payload: { id, impactTestId, playgroundId },
  })
}

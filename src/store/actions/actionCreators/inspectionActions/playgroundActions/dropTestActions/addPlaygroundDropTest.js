import { ADD_PLAYGROUND_DROP_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { addDropTestStateless } from '../../dropTestActions/'

export const addPlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('impactTests')
    .doc(impactTestId)

  const payload = await dispatch(addDropTestStateless(ref, data))

  dispatch({
    type: ADD_PLAYGROUND_DROP_TEST,
    payload: { ...payload, impactTestId, playgroundId },
  })

  return payload.id
}

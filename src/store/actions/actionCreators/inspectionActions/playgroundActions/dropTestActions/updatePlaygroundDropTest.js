import { UPDATE_PLAYGROUND_DROP_TEST } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { updateDropTestStateless } from '../../dropTestActions/'

export const updatePlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  id,
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

  const payload = await dispatch(updateDropTestStateless(ref, id, data))

  dispatch({
    type: UPDATE_PLAYGROUND_DROP_TEST,
    payload: { ...payload, impactTestId, playgroundId },
  })
}

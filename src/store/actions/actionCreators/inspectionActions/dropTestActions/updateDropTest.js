import { UPDATE_DROP_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { updateDropTestStateless } from './updateDropTestStateless'

export const updateDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc(impactTestId)

  const payload = await dispatch(updateDropTestStateless(ref, id, data))

  dispatch({
    type: UPDATE_DROP_TEST,
    payload: { ...payload, impactTestId },
  })
}

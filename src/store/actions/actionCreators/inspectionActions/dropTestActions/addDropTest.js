import { ADD_DROP_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { addDropTestStateless } from './addDropTestStateless'

export const addDropTest = (userId, inspectionId, impactTestId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc(impactTestId)

  const payload = await dispatch(addDropTestStateless(ref, data))

  dispatch({
    type: ADD_DROP_TEST,
    payload: { ...payload, impactTestId },
  })

  return payload.id
}

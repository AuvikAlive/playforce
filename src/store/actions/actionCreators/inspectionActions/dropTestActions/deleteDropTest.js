import { DELETE_DROP_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { deleteDropTestStateless } from './deleteDropTestStateless'

export const deleteDropTest = (
  userId,
  inspectionId,
  impactTestId,
  id
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc(impactTestId)

  await dispatch(deleteDropTestStateless(ref, id))

  dispatch({
    type: DELETE_DROP_TEST,
    payload: { id, impactTestId },
  })
}

import { ADD_PLAYGROUND } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const addPlayground = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc()

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND,
    payload: { ...data, id: ref.id },
  })

  return ref.id
}

import { getRootRef } from '../dbActions/'

export const deleteOperator = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('operators').doc(id)

  return ref.delete()
}

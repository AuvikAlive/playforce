import { getRootRef } from '../dbActions/'

export const saveOperator = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('operators').doc()

  return ref.set(data)
}

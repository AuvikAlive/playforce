import { getRootRef } from '../dbActions/'

export const addClient = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients').doc()

  await ref.set(data)

  return ref.id
}

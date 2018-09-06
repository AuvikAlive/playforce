import { getRootRef } from '../dbActions/'

export const addSite = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('sites').doc()

  await ref.set(data)

  return ref.id
}

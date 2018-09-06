import { getRootRef } from '../dbActions/'

export const addStandard = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('standards').doc()

  await ref.set(data)

  return ref.id
}

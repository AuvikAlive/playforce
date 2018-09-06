import { getRootRef } from '../dbActions/'

export const saveManufacturer = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('manufacturers').doc()

  return ref.set(data)
}

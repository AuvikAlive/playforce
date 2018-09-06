import { getRootRef } from '../dbActions/'

export const deleteManufacturer = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('manufacturers').doc(id)

  return ref.delete()
}

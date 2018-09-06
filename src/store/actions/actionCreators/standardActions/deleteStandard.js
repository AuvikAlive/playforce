import { getRootRef } from '../dbActions/'

export const deleteStandard = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('standards').doc(id)

  return ref.delete()
}

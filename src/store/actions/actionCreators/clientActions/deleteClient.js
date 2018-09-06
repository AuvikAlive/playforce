import { getRootRef } from '../dbActions/'

export const deleteClient = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients').doc(id)

  return ref.delete()
}

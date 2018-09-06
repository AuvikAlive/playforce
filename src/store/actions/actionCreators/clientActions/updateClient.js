import { getRootRef } from '../dbActions/'

export const updateClient = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients').doc(id)

  ref.update(data)
}

import { getRootRef } from '../dbActions/'

export const updateStandard = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('standards').doc(id)

  ref.update(data)
}

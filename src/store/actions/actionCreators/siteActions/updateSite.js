import { getRootRef } from '../dbActions/'

export const updateSite = (userId, siteId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('sites').doc(siteId)

  return ref.update(data)
}

import { getRootRef } from '../dbActions/'

export const updateCommonIssue = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues').doc(id)

  return ref.update(data)
}

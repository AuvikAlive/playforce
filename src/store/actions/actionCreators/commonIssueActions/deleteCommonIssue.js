import { getRootRef } from '../dbActions/'

export const deleteCommonIssue = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues').doc(id)

  return ref.delete()
}

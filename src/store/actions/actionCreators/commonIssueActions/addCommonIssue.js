import { getRootRef } from '../dbActions/'

export const addCommonIssue = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues').doc()

  await ref.set(data)

  return ref.id
}

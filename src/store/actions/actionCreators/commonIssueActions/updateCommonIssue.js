export const updateCommonIssue = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('commonIssues')
    .doc(id)

  return ref.update(data)
}

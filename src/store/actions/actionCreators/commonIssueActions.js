import {
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../actionTypes'

export const fetchCommonIssues = userId => async (
  dispatch,
  getState,
  getFirebase,
) => {
  dispatch({ type: FETCH_COMMON_ISSUES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('commonIssues')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    }),
  )
  dispatch({ type: FETCH_COMMON_ISSUES_COMPLETED, payload: items })
}

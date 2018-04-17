import {
  FETCH_COMMON_ISSUE,
  FETCH_COMMON_ISSUE_COMPLETED,
} from '../../actionTypes'

export const fetchCommonIssue = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMMON_ISSUE })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('commonIssues')
    .doc(id)
    .get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_COMMON_ISSUE_COMPLETED, payload: item })
}

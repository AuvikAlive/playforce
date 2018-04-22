import {
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../../actionTypes'

export const fetchCommonIssuesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMMON_ISSUES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('commonIssues')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_COMMON_ISSUES_COMPLETED, payload: items })
  })
}

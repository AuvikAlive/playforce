import { FETCH_PROJECTS, FETCH_PROJECTS_COMPLETED } from '../../actionTypes'

export const fetchProjectsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PROJECTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('projects')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PROJECTS_COMPLETED, payload: items })
  })
}

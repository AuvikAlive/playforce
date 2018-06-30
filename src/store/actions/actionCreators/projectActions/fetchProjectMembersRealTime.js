import {
  FETCH_PROJECT_MEMBERS,
  FETCH_PROJECT_MEMBERS_COMPLETED,
} from '../../actionTypes'

export const fetchProjectMembersRealTime = (userId, projectId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PROJECT_MEMBERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('projects')
    .doc(projectId)
    .collection('inspections')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PROJECT_MEMBERS_COMPLETED, payload: items })
  })
}

import { FETCH_MEMBERS, FETCH_MEMBERS_COMPLETED } from '../../actionTypes'

export const fetchMembersRealTime = groupId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_MEMBERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('groups')
    .doc(groupId)
    .collection('users')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_MEMBERS_COMPLETED, payload: items })
  })
}

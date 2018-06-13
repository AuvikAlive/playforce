import {
  FETCH_GROUP_USERS,
  FETCH_GROUP_USERS_COMPLETED,
} from '../../actionTypes'

export const fetchGroupUsersRealTime = groupId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_GROUP_USERS })

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
    dispatch({ type: FETCH_GROUP_USERS_COMPLETED, payload: items })
  })
}

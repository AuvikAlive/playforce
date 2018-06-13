import { FETCH_USERS, FETCH_USERS_COMPLETED } from '../../actionTypes'

export const fetchUsersRealTime = () => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_USERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db.collection('users')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc => {
      const { displayName } = doc.data()

      items.push({
        id: doc.id,
        displayName,
      })
    })
    dispatch({ type: FETCH_USERS_COMPLETED, payload: items })
  })
}

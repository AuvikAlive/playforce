import { FETCH_USERS, FETCH_USERS_COMPLETED } from '../../actionTypes'

export const fetchUsersRealTime = () => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_USERS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db.collection('users')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc => {
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    dispatch({ type: FETCH_USERS_COMPLETED, payload: items })
  })
}

import { FETCH_CLIENTS, FETCH_CLIENTS_COMPLETED } from '../actionTypes'

export const fetchClients = userId => async (
  dispatch,
  getState,
  getFirebase,
) => {
  dispatch({ type: FETCH_CLIENTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('clients')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    }),
  )
  dispatch({ type: FETCH_CLIENTS_COMPLETED, payload: items })
}

export const fetchClientsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase,
) => {
  dispatch({ type: FETCH_CLIENTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('clients')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      }),
    )
    dispatch({ type: FETCH_CLIENTS_COMPLETED, payload: items })
  })
}

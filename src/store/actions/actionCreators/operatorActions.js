import { FETCH_OPERATORS, FETCH_OPERATORS_COMPLETED } from '../actionTypes'

export const fetchOperators = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_OPERATORS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('operators')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_OPERATORS_COMPLETED, payload: items })
}

export const fetchOperatorsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_OPERATORS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('operators')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_OPERATORS_COMPLETED, payload: items })
  })
}

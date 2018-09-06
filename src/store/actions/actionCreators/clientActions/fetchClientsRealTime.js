import { FETCH_CLIENTS, FETCH_CLIENTS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchClientsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CLIENTS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_CLIENTS_COMPLETED, payload: items })
  })
}

import { FETCH_CLIENTS, FETCH_CLIENTS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchClients = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CLIENTS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_CLIENTS_COMPLETED, payload: items })
}

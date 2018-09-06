import { FETCH_CLIENT, FETCH_CLIENT_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchClient = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CLIENT })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('clients').doc(id)
  const doc = await ref.get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_CLIENT_COMPLETED, payload: item })
}

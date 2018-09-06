import { FETCH_STANDARD, FETCH_STANDARD_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchStandard = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_STANDARD })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('standards').doc(id)
  const doc = ref.get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_STANDARD_COMPLETED, payload: item })
}

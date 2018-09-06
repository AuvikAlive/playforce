import { FETCH_SITE, FETCH_SITE_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchSite = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_SITE })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('sites').doc(id)
  const doc = await ref.get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_SITE_COMPLETED, payload: item })
}

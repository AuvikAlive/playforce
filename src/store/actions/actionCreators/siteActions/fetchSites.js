import { FETCH_SITES, FETCH_SITES_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchSites = userId => async (dispatch, getState, getFirebase) => {
  dispatch({ type: FETCH_SITES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('sites')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_SITES_COMPLETED, payload: items })
}

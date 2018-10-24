import { FETCH_STANDARDS, FETCH_STANDARDS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchStandards = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_STANDARDS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('standards')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_STANDARDS_COMPLETED, payload: items })

  return items
}

import { FETCH_OPERATORS, FETCH_OPERATORS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchOperators = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_OPERATORS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('operators')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_OPERATORS_COMPLETED, payload: items })
}

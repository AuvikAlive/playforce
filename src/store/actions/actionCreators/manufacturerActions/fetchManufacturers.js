import {
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURERS_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchManufacturers = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_MANUFACTURERS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('manufacturers')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_MANUFACTURERS_COMPLETED, payload: items })
}

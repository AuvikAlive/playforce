import {
  FETCH_INSPECTIONS,
  FETCH_INSPECTIONS_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchInspectionsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTIONS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .orderBy('inspectionNumber')
    .where('archived', '==', false)

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_INSPECTIONS_COMPLETED, payload: items })
  })
}

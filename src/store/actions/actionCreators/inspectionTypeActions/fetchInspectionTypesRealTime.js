import {
  FETCH_INSPECTION_TYPES,
  FETCH_INSPECTION_TYPES_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchInspectionTypesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION_TYPES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspectionTypes')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_INSPECTION_TYPES_COMPLETED, payload: items })
  })
}

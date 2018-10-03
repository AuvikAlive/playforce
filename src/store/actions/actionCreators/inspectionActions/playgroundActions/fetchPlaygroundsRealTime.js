import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'

export const fetchPlaygroundsRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYGROUNDS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .orderBy('name')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PLAYGROUNDS_COMPLETED, payload: items })
  })
}

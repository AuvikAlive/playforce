import {
  FETCH_PLAYING_SURFACES,
  FETCH_PLAYING_SURFACES_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchPlayingSufacesRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYING_SURFACES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playingSurfaces')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PLAYING_SURFACES_COMPLETED, payload: items })
  })
}

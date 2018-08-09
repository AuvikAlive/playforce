import {
  FETCH_PLAYING_SURFACES,
  FETCH_PLAYING_SURFACES_COMPLETED,
} from '../../actionTypes'

export const fetchPlayingSufacesRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYING_SURFACES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
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

import {
  FETCH_INSPECTION_TYPES,
  FETCH_INSPECTION_TYPES_COMPLETED,
} from '../../actionTypes'

export const fetchInspectionTypesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION_TYPES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspectionTypes')

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

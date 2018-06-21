import {
  FETCH_INSPECTIONS,
  FETCH_INSPECTIONS_COMPLETED,
} from '../../actionTypes'

export const fetchInspectionsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTIONS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc('xf58ubuagCNyMqWJD3yXCADxoSJ3')
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

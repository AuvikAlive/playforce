import {
  FETCH_REPORT_NOTES,
  FETCH_REPORT_NOTES_COMPLETED,
} from '../../actionTypes'

export const fetchReportNotesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_REPORT_NOTES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('reportNotes')
    .orderBy('number')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_REPORT_NOTES_COMPLETED, payload: items })
  })
}

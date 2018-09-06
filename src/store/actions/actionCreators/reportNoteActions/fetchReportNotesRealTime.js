import {
  FETCH_REPORT_NOTES,
  FETCH_REPORT_NOTES_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchReportNotesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_REPORT_NOTES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('reportNotes').orderBy('number')

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

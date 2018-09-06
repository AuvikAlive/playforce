import { getRootRef } from '../dbActions/'

export const deleteReportNote = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('reportNotes').doc(id)

  return ref.delete()
}

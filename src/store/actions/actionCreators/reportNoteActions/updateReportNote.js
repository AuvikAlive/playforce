import { getRootRef } from '../dbActions/'

export const updateReportNote = (userId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('reportNotes').doc(id)

  return ref.update(data)
}

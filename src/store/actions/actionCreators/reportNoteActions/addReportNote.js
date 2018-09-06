import { getRootRef } from '../dbActions/'

export const addReportNote = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('reportNotes').doc()

  await ref.set(data)

  return ref.id
}

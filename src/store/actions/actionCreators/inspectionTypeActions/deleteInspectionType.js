import { getRootRef } from '../dbActions/'

export const deleteInspectionType = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspectionTypes').doc(id)

  return ref.delete()
}

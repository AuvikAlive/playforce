import { getRootRef } from '../dbActions/'

export const saveInspectionType = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspectionTypes').doc()

  return ref.set(data)
}

import { getRootRef, getBatch } from '../dbActions/'

export const unarchiveInspections = (userId, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections')

  list.forEach(item => {
    const inspectionRef = ref.doc(item)

    batch.update(inspectionRef, { archived: false })
  })

  return batch.commit()
}

import { getBatch, getRootRef } from '../dbActions/'

export const deleteInspections = (userId, id, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const batch = dispatch(getBatch)

  const ref = rootRef
    .collection('projects')
    .doc(id)
    .collection('inspections')

  list.forEach(item => {
    const inspectionRef = ref.doc(item)

    batch.delete(inspectionRef)
  })

  return batch.commit()
}

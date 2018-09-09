import { getRootRef } from '../dbActions/'

export const fetchInspectionsByIdWithMaintenanceIssues = (
  userId,
  list
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections')

  const Promises = list.map(async inspectionId => {
    const inspectionRef = ref.doc(inspectionId)
    const doc = await inspectionRef.get()

    let maintenanceIssues = []

    const maintenanceIssuesSnapshot = await inspectionRef
      .collection('maintenanceIssues')
      .get()

    maintenanceIssuesSnapshot.forEach(doc => {
      maintenanceIssues.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return {
      id: doc.id,
      ...doc.data(),
      maintenanceIssues,
    }
  })

  const items = await Promise.all(Promises)

  return items
}

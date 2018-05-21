export const fetchInspectionsByIdWithMaintenanceIssues = (
  userId,
  list
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')

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

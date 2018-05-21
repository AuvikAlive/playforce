export const fetchInspectionsById = (userId, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')

  const Promises = list.map(async inspectionId => {
    const inspectionRef = ref.doc(inspectionId)
    const doc = await inspectionRef.get()

    let conditionRatings = []

    const conditionRatingsSnapshot = await inspectionRef
      .collection('conditionRatings')
      .get()

    conditionRatingsSnapshot.forEach(doc => {
      conditionRatings.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    let complianceIssues = []

    const complianceIssuesSnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    complianceIssuesSnapshot.forEach(doc => {
      complianceIssues.push({
        id: doc.id,
        ...doc.data(),
      })
    })

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
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
    }
  })

  const items = await Promise.all(Promises)

  return items
}

export const fetchInspectionsByIdWithComplianceIssues = (
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

    return {
      id: doc.id,
      ...doc.data(),
      complianceIssues,
    }
  })

  const items = await Promise.all(Promises)

  return items
}

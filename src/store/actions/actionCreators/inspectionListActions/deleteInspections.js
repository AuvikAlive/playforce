export const deleteInspections = (userId, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')

  const Promises = list.map(async item => {
    const inspectionRef = ref.doc(item)
    const doc = await inspectionRef.get()
    const inspection = doc.data()
    const { conditionRatings, complianceIssues, maintenanceIssues } = inspection

    if (conditionRatings) {
      const querySnapshot = await inspectionRef
        .collection('conditionRatings')
        .get()

      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })
    }

    if (complianceIssues) {
      const querySnapshot = await inspectionRef
        .collection('complianceIssues')
        .get()

      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })
    }

    if (maintenanceIssues) {
      const querySnapshot = await inspectionRef
        .collection('maintenanceIssues')
        .get()

      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })
    }

    batch.delete(inspectionRef)
  })

  await Promise.all(Promises)

  return batch.commit()
}

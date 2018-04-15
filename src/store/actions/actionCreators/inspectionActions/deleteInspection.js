export const deleteInspection = ({
  inspection,
  userId,
  inspectionId,
}) => async (dispatch, getState, getFirebase) => {
  const {
    conditionRatingsAdded,
    complianceIssuesAdded,
    maintenanceIssuesAdded,
  } = inspection

  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  if (conditionRatingsAdded) {
    const querySnapshot = await inspectionRef
      .collection('conditionRatings')
      .get()

    querySnapshot.forEach(doc => {
      batch.delete(doc.ref)
    })
  }

  if (complianceIssuesAdded) {
    const querySnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    querySnapshot.forEach(doc => {
      batch.delete(doc.ref)
    })
  }

  if (maintenanceIssuesAdded) {
    const querySnapshot = await inspectionRef
      .collection('maintenanceIssues')
      .get()

    querySnapshot.forEach(doc => {
      batch.delete(doc.ref)
    })
  }

  batch.delete(inspectionRef)

  return batch.commit()
}

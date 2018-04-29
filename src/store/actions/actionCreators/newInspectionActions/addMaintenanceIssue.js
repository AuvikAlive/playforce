export const addMaintenanceIssue = (userId, inspectionId, data) => async (
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
    .doc(inspectionId)
    .collection('maintenanceIssues')
    .doc()

  await ref.set(data)

  return ref.id
}

export const deleteMaintenanceIssue = (userId, inspectionId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('maintenanceIssues')
    .doc(id)

  return ref.delete()
}

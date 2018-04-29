export const deleteComplianceIssue = (userId, inspectionId, id) => async (
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
    .collection('complianceIssues')
    .doc(id)

  return ref.delete()
}

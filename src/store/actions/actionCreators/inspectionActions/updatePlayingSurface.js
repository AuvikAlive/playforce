export const updatePlayingSurface = (userId, inspectionId, id, data) => async (
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
    .collection('playingSurfaces')
    .doc(id)

  return ref.update(data)
}

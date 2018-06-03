export const updateImpactSurface = (userId, inspectionId, id, data) => async (
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
    .collection('impactTests')
    .doc(id)

  return ref.update({ surface: data })
}

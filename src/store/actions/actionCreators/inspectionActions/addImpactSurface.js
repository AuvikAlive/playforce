export const addImpactSurface = (userId, inspectionId, data) => async (
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
    .doc()

  await ref.set({ surface: data })

  return ref.id
}

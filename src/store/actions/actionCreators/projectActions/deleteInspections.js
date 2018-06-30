export const deleteInspections = (userId, id, list) => async (
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
    .collection('projects')
    .doc(id)
    .collection('inspections')

  list.forEach(item => {
    const inspectionRef = ref.doc(item)

    batch.delete(inspectionRef)
  })

  return batch.commit()
}

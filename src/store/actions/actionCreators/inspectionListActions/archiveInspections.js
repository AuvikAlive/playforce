export const archiveInspections = (userId, list) => async (
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

  list.forEach(item => {
    const inspectionRef = ref.doc(item)

    batch.update(inspectionRef, { archived: true })
  })

  return batch.commit()
}

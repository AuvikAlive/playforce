export const addInspections = (userId, id, list) => async (
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

    batch.set(inspectionRef, { item })
  })

  return batch.commit()
}

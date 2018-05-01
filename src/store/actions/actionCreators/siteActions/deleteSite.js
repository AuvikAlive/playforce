export const deleteSite = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const siteRef = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(id)

  batch.delete(siteRef)

  const equipmentSnapshot = await siteRef.collection('equipments').get()

  if (!equipmentSnapshot.empty) {
    equipmentSnapshot.forEach(doc => batch.delete(doc.ref))
  }

  return batch.commit()
}

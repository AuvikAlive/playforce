export const deleteGroup = (id, members) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const ref = db.collection('groups').doc(id)

  batch.delete(ref)

  members.forEach(({ id }) => {
    const userRef = ref.collection('users').doc(id)

    batch.delete(userRef)
  })

  return batch.commit()
}

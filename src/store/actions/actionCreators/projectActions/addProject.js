export const addProject = (userId, name) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('projects')
    .doc(name)
  const doc = await ref.get()

  if (doc.exists) {
    throw new Error('Project with this name already exists!')
  } else {
    await ref.set({ name })
    return ref.id
  }
}

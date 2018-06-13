export const addGroup = name => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db.collection('groups').doc(name)
  const doc = await ref.get()

  if (doc.exists) {
    throw new Error('This group already exists!')
  } else {
    await ref.set({ name })
  }
}

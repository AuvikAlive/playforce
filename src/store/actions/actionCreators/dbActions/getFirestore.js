export const getFirestore = (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const firestore = firebase.firestore()

  return firestore
}

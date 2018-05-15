export const deleteImage = path => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const storageRef = firebase.storage().ref()
  const imageRef = storageRef.child(path)

  return imageRef.delete()
}

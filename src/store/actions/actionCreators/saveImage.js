export const saveImage = (path, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const storageRef = firebase.storage().ref()
  const imageRef = storageRef.child(path)
  const snapshot = await imageRef.putString(data, 'data_url')
  // const response = await fetch(data)
  // const blob = await response.blob()
  // const snapshot = await imageRef.put(blob)
  const downloadURL = await snapshot.ref.getDownloadURL()

  return downloadURL
}

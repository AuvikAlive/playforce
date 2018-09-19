import { getImagePath } from './getImagePath'

export const saveImage = (ref, imageDataURL, index) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const storageRef = firebase.storage().ref()
  const storagePath = getImagePath(ref, index)
  const imageRef = storageRef.child(storagePath)
  const snapshot = await imageRef.putString(imageDataURL, 'data_url')
  const downloadURL = await snapshot.ref.getDownloadURL()

  return downloadURL
}

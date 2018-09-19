import { getImagePath } from './getImagePath'

export const deleteImage = (ref, index) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const storageRef = firebase.storage().ref()
  const storagePath = getImagePath(ref, index)
  const imageRef = storageRef.child(storagePath)

  return imageRef.delete()
}

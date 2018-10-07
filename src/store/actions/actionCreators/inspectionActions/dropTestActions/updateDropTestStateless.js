import { saveImage } from '../../storageActions/'

export const updateDropTestStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('dropTests').doc(id)
  const { image } = data
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.update(data)

  return { ...data, id, image }
}

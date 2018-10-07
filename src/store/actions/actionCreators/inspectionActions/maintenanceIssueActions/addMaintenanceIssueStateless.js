import { saveImage } from '../../storageActions/'

export const addMaintenanceIssueStateless = (baseRef, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('maintenanceIssues').doc()
  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(saveImage(ref, image, index))

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await ref.set(data)

  return { ...data, id: ref.id, images }
}

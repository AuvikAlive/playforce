import { saveImage } from '../../storageActions/'

export const updateMaintenanceIssueStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const maintenanceIssueRef = baseRef.collection('maintenanceIssues').doc(id)
  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(saveImage(maintenanceIssueRef, image))

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await maintenanceIssueRef.update(data)

  return { ...data, id, images }
}

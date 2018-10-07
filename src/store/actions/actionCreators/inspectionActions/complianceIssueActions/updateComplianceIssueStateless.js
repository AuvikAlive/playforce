import { saveImage } from '../../storageActions/'

export const updateComplianceIssueStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const complianceIssueRef = baseRef.collection('complianceIssues').doc(id)
  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(
      saveImage(complianceIssueRef, image, index)
    )

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await complianceIssueRef.update(data)

  return { ...data, id, images }
}

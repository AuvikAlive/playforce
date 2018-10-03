import { getDataUrlFromBlob } from '../../../../../../functions/getDataUrlFromBlob'

export const fetchPlaygroundComplianceIssues = async ref => {
  const querySnapshot = await ref.collection('complianceIssues').get()

  let complianceIssues = querySnapshot.docs.map(async doc => {
    let { images } = doc.data()

    images = images.map(async item => {
      const response = await fetch(item.image)
      const blob = await response.blob()
      const dataUrl = await getDataUrlFromBlob(blob)

      return {
        ...item,
        image: dataUrl,
      }
    })

    images = await Promise.all(images)

    return {
      id: doc.id,
      ...doc.data(),
      images,
    }
  })

  return await Promise.all(complianceIssues)
}

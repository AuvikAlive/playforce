import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchPlaygroundMaintenanceIssues = async ref => {
  const querySnapshot = await ref.collection('maintenanceIssues').get()

  let maintenanceIssues = querySnapshot.docs.map(async doc => {
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

  return await Promise.all(maintenanceIssues)
}

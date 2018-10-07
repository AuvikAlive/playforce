import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'

export const fetchMaintenanceIssuesStateless = baseRef => async (
  dispatch,
  getState,
  getFirebase
) => {
  const maintenanceIssuesRef = baseRef.collection('maintenanceIssues')
  const querySnapshot = await maintenanceIssuesRef.get()

  const items = querySnapshot.docs.map(async doc => {
    if (doc.exists) {
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
    }
  })

  return await Promise.all(items)
}

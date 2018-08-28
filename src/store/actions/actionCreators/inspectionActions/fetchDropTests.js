import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchDropTests = async ref => {
  const querySnapshot = await ref.collection('dropTests').get()

  let dropTests = querySnapshot.docs.map(async doc => {
    const { image } = doc.data()
    const response = await fetch(image)
    const blob = await response.blob()
    const dataUrl = await getDataUrlFromBlob(blob)

    return {
      id: doc.id,
      ...doc.data(),
      image: dataUrl,
    }
  })

  return await Promise.all(dropTests)
}

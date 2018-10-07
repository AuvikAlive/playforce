import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'

export const fetchDropTestsStateless = baseRef => async (
  dispatch,
  getState,
  getFirebase
) => {
  const querySnapshot = await baseRef.collection('dropTests').get()

  let dropTests = querySnapshot.docs.map(async (doc, index) => {
    const { image } = doc.data()
    const response = await fetch(image)
    const blob = await response.blob()
    const dataUrl = await getDataUrlFromBlob(blob)

    return {
      id: doc.id,
      dropNumber: index + 1,
      ...doc.data(),
      image: dataUrl,
    }
  })

  return await Promise.all(dropTests)
}

import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'

export const fetchConditionRatingsStateless = baseRef => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('conditionRatings')
  const querySnapshot = await ref.get()

  const items = querySnapshot.docs.map(async doc => {
    if (doc.exists) {
      const { image } = doc.data()
      const response = await fetch(image)
      const blob = await response.blob()
      const dataUrl = await getDataUrlFromBlob(blob)

      return {
        id: doc.id,
        ...doc.data(),
        image: dataUrl,
      }
    }
  })

  return await Promise.all(items)
}

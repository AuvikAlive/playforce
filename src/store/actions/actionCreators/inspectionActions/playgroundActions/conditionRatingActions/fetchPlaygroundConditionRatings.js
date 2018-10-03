import { getDataUrlFromBlob } from '../../../../../../functions/getDataUrlFromBlob'

export const fetchPlaygroundConditionRatings = async ref => {
  const conditionRatingsQuerySnapshot = await ref
    .collection('conditionRatings')
    .get()

  let conditionRatings = conditionRatingsQuerySnapshot.docs.map(async doc => {
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

  return await Promise.all(conditionRatings)
}

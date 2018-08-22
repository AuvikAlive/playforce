import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchPlaygrounds = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYGROUNDS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .orderBy('name')
    .get()

  let items = querySnapshot.docs.map(async doc => {
    const conditionRatingsQuerySnapshot = await doc.ref
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

    conditionRatings = await Promise.all(conditionRatings)

    return {
      id: doc.id,
      ...doc.data(),
      conditionRatings,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_PLAYGROUNDS_COMPLETED, payload: items })
}

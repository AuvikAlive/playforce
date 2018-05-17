import {
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
} from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../utilities/getDataUrlFromBlob'

export const fetchConditionRatings = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CONDITION_RATINGS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')
    .get()

  let items = querySnapshot.docs.map(async doc => {
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

  items = await Promise.all(items)

  dispatch({ type: FETCH_CONDITION_RATINGS_COMPLETED, payload: items })
}

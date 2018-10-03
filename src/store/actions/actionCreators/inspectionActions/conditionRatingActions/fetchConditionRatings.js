import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'
import {
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'

export const fetchConditionRatings = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CONDITION_RATINGS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')

  const querySnapshot = await ref.get()

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

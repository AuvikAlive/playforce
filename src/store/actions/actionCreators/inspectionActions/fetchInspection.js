import { FETCH_INSPECTION, FETCH_INSPECTION_COMPLETED } from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchInspection = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const doc = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .get()

  const { cover } = doc.data()
  const { image } = cover

  if (image) {
    const response = await fetch(image)
    const blob = await response.blob()
    const dataUrl = await getDataUrlFromBlob(blob)

    cover.image = dataUrl
  }

  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_INSPECTION_COMPLETED, payload: item })

  return item
}

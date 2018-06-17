import { FETCH_INSPECTION, FETCH_INSPECTION_COMPLETED } from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../utilities/getDataUrlFromBlob'

export const fetchInspectionRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  return ref.onSnapshot(async doc => {
    if (doc.exists) {
      const { cover } = doc.data()
      const { image } = cover

      if (image) {
        const response = await fetch(image)
        const blob = await response.blob()
        const dataUrl = await getDataUrlFromBlob(blob)

        cover.image = dataUrl
      }

      const item = { id: doc.id, ...doc.data(), cover }

      dispatch({ type: FETCH_INSPECTION_COMPLETED, payload: item })

      return item
    }
  })
}

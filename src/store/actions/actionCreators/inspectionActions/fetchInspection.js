import { FETCH_INSPECTION, FETCH_INSPECTION_COMPLETED } from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'
import { getRootRef } from '../dbActions/'

export const fetchInspection = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTION })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)
  const doc = await ref.get()
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

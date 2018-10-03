import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'
import {
  FETCH_COMPLIANCE_ISSUES,
  FETCH_COMPLIANCE_ISSUES_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'

export const fetchComplianceIssues = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMPLIANCE_ISSUES })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('complianceIssues')

  const querySnapshot = await ref.get()

  let items = querySnapshot.docs.map(async doc => {
    if (doc.exists) {
      let { images } = doc.data()

      images = images.map(async item => {
        const response = await fetch(item.image)
        const blob = await response.blob()
        const dataUrl = await getDataUrlFromBlob(blob)

        return {
          ...item,
          image: dataUrl,
        }
      })

      images = await Promise.all(images)

      return {
        id: doc.id,
        ...doc.data(),
        images,
      }
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_COMPLIANCE_ISSUES_COMPLETED, payload: items })
}

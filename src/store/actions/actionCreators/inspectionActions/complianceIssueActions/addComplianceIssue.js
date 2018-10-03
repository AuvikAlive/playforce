import { saveImage } from '../../storageActions/'
import { ADD_COMPLIANCE_ISSUE } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'

export const addComplianceIssue = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('complianceIssues')
    .doc()

  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(saveImage(ref, image, index))

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await ref.set(data)

  dispatch({
    type: ADD_COMPLIANCE_ISSUE,
    payload: { ...data, id: ref.id, images },
  })

  return ref.id
}

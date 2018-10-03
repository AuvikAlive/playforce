import { UPDATE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { saveImage } from '../../../storageActions/'

export const updatePlaygroundComplianceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('complianceIssues')
    .doc(id)

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

  await ref.update(data)

  dispatch({
    type: UPDATE_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { ...data, id, playgroundId, images },
  })
}

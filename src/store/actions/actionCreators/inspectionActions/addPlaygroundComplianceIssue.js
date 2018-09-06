import { saveImage } from '../storageActions/'
import { ADD_PLAYGROUND_COMPLIANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const addPlaygroundComplianceIssue = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('complianceIssues')
    .doc()

  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(
      saveImage(
        `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/complianceIssue-${
          ref.id
        }-issue${index}`,
        image
      )
    )

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND_COMPLIANCE_ISSUE,
    payload: { ...data, id: ref.id, playgroundId, images },
  })

  return ref.id
}

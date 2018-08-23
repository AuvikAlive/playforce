import { saveImage } from '../storageActions/'
import { UPDATE_PLAYGROUND_COMPLIANCE_ISSUE } from '../../actionTypes'

export const updatePlaygroundComplianceIssue = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('complianceIssues')
    .doc(id)

  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(
      saveImage(
        `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/complianceIssue-${id}-issue${index}`,
        image
      )
    )

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

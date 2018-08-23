import { saveImage } from '../storageActions/'
import { ADD_PLAYGROUND_MAINTENANCE_ISSUE } from '../../actionTypes'

export const addPlaygroundMaintenanceIssue = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const ref = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)
    .collection('maintenanceIssues')
    .doc()

  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(
      saveImage(
        `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/maintenanceIssue-${
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
    type: ADD_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { ...data, id: ref.id, playgroundId, images },
  })

  return ref.id
}
import { saveImage } from '../storageActions/'
import { UPDATE_PLAYGROUND_MAINTENANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const updatePlaygroundMaintenanceIssue = ({
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
    .collection('maintenanceIssues')
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
    type: UPDATE_PLAYGROUND_MAINTENANCE_ISSUE,
    payload: { ...data, id, playgroundId, images },
  })
}

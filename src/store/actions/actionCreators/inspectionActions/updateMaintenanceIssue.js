import { saveImage } from '../storageActions/'
import { UPDATE_MAINTENANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const updateMaintenanceIssue = (
  userId,
  inspectionId,
  id,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('maintenanceIssues')
    .doc(id)

  const { images } = data

  let downloadURLs = images.map(async (item, index) => {
    const { image } = item
    const downloadURL = await dispatch(saveImage(ref, image))

    return {
      ...item,
      image: downloadURL,
    }
  })

  data.images = await Promise.all(downloadURLs)

  await ref.update(data)

  dispatch({
    type: UPDATE_MAINTENANCE_ISSUE,
    payload: { ...data, id, images },
  })
}

import { saveImage } from '../storageActions/'
import { ADD_MAINTENANCE_ISSUE } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const addMaintenanceIssue = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('maintenanceIssues')
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
    type: ADD_MAINTENANCE_ISSUE,
    payload: { ...data, id: ref.id, images },
  })

  return ref.id
}

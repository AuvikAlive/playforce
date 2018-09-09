import { getSingleImagePath, saveImage } from '../storageActions/'
import { UPDATE_DROP_TEST } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const updateDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .doc(impactTestId)
    .collection('dropTests')
    .doc(id)

  const { image } = data
  const storagePath = getSingleImagePath(ref)
  const downloadURL = await dispatch(saveImage(storagePath, image))

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_DROP_TEST,
    payload: { ...data, id, image, impactTestId },
  })
}

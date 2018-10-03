import { UPDATE_DROP_TEST } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { saveImage } from '../../storageActions/'

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
  const downloadURL = await dispatch(saveImage(ref, image))

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_DROP_TEST,
    payload: { ...data, id, image, impactTestId },
  })
}

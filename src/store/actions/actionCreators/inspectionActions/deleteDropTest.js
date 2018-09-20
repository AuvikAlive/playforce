import { deleteImage } from '../storageActions/'
import { DELETE_DROP_TEST } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const deleteDropTest = (
  userId,
  inspectionId,
  impactTestId,
  id
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const impactTestRef = inspectionRef
    .collection('impactTests')
    .doc(impactTestId)

  const ref = impactTestRef.collection('dropTests').doc(id)

  await ref.delete()

  dispatch(deleteImage(ref))

  dispatch({
    type: DELETE_DROP_TEST,
    payload: { id, impactTestId },
  })
}

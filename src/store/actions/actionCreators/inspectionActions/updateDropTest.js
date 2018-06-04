import { saveImage } from '../storageActions/'
import { UPDATE_DROP_TEST } from '../../actionTypes'

export const updateDropTest = ({
  userId,
  inspectionId,
  impactTestId,
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
    .collection('impactTests')
    .doc(impactTestId)
    .collection('dropTests')
    .doc(id)

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${ref.id}`,
      image
    )
  )

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_DROP_TEST,
    payload: { ...data, id, image, impactTestId },
  })
}

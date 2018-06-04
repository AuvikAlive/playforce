import { saveImage } from '../storageActions/'
import { ADD_DROP_TEST } from '../../actionTypes'

export const addDropTest = (userId, inspectionId, impactTestId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
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
    .doc(data.dropNumber)

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${ref.id}`,
      image
    )
  )

  data.image = downloadURL

  await ref.set(data)

  dispatch({
    type: ADD_DROP_TEST,
    payload: { ...data, id: ref.id, image, impactTestId },
  })

  return ref.id
}

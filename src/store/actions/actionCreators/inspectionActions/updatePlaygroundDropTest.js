import { saveImage } from '../storageActions/'
import { UPDATE_PLAYGROUND_DROP_TEST } from '../../actionTypes'

export const updatePlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
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
    .collection('impactTests')
    .doc(impactTestId)
    .collection('dropTests')
    .doc(id)

  const { image } = data
  const downloadURL = await dispatch(
    saveImage(
      `${userId}/images/${inspectionId}/playgrounds/${playgroundId}/impactTests/${impactTestId}/${
        ref.id
      }`,
      image
    )
  )

  data.image = downloadURL

  await ref.update(data)

  dispatch({
    type: UPDATE_PLAYGROUND_DROP_TEST,
    payload: { ...data, id, image, impactTestId, playgroundId },
  })
}

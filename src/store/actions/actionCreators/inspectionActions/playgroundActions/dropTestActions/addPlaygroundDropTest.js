import { getFirestore, getRootRef } from '../../../dbActions/'
import { saveImage } from '../../../storageActions/'
import { ADD_PLAYGROUND_DROP_TEST } from '../../../../actionTypes'

export const addPlaygroundDropTest = ({
  userId,
  inspectionId,
  impactTestId,
  playgroundId,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  return db.runTransaction(async transaction => {
    const ref = rootRef
      .collection('inspections')
      .doc(inspectionId)
      .collection('playgrounds')
      .doc(playgroundId)
      .collection('impactTests')
      .doc(impactTestId)
      .collection('dropTests')
      .doc()

    const { image } = data
    const downloadURL = await dispatch(saveImage(ref, image))

    data.image = downloadURL

    await transaction.set(ref, data)

    dispatch({
      type: ADD_PLAYGROUND_DROP_TEST,
      payload: { ...data, id: ref.id, image, impactTestId, playgroundId },
    })

    return ref.id
  })
}

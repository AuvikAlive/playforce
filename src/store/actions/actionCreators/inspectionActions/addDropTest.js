import { saveImage } from '../storageActions/'
import { ADD_DROP_TEST } from '../../actionTypes'
import { getFirestore, getRootRef } from '../dbActions/'

export const addDropTest = (userId, inspectionId, impactTestId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const rootRef = dispatch(getRootRef)

  return db.runTransaction(async transaction => {
    const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

    const impactTestRef = inspectionRef
      .collection('impactTests')
      .doc(impactTestId)

    const ref = impactTestRef.collection('dropTests').doc()
    const { image } = data
    const downloadURL = await dispatch(saveImage(ref, image))

    data.image = downloadURL

    await transaction.set(ref, data)

    dispatch({
      type: ADD_DROP_TEST,
      payload: { ...data, id: ref.id, image, impactTestId },
    })

    return ref.id
  })
}

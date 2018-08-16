import { saveImage } from '../storageActions/'
import { ADD_DROP_TEST } from '../../actionTypes'

export const addDropTest = (userId, inspectionId, impactTestId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db.runTransaction(async transaction => {
    // const impactTestRef = db
    //   .collection('users')
    //   .doc(userId)
    //   .collection('inspections')
    //   .doc(inspectionId)
    //   .collection('impactTests')
    //   .doc(impactTestId)

    // const impactTestDoc = await transaction.get(impactTestRef)

    // const dropCount = impactTestDoc.data().dropCount || 0

    // transaction.update(impactTestRef, { dropCount: dropCount + 1 })
    const inspectionRef = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)

    const impactTestRef = inspectionRef
      .collection('impactTests')
      .doc(impactTestId)

    const inspectionDoc = await transaction.get(inspectionRef)

    const dropCount = inspectionDoc.data().dropCount || 0

    transaction.update(inspectionRef, { dropCount: dropCount + 1 })

    const ref = impactTestRef.collection('dropTests').doc(`${dropCount + 1}`)

    const { image } = data

    const downloadURL = await dispatch(
      saveImage(
        `${userId}/images/${inspectionId}/impactTests/${impactTestId}/${
          ref.id
        }`,
        image
      )
    )

    data.image = downloadURL

    await transaction.set(ref, data)

    dispatch({
      type: ADD_DROP_TEST,
      payload: { ...data, id: ref.id, image, impactTestId },
    })

    return ref.id
  })
}

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
    const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

    const impactTestRef = inspectionRef
      .collection('impactTests')
      .doc(impactTestId)

    // const inspectionDoc = await inspectionRef.get()
    // const { dropCount = 0, deletedDrops } = inspectionDoc.data()
    // const dropNumber =
    //   deletedDrops && deletedDrops.length > 0
    //     ? `${deletedDrops.shift()}`
    //     : `${dropCount + 1}`

    // deletedDrops
    //   ? transaction.update(inspectionRef, { deletedDrops })
    //   : transaction.update(inspectionRef, { dropCount: dropCount + 1 })

    const ref = impactTestRef.collection('dropTests').doc()
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

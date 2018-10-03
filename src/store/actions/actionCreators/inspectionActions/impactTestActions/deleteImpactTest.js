import { DELETE_IMPACT_TEST } from '../../../actionTypes'
import { getRootRef, getBatch } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'

export const deleteImpactTest = (userId, inspectionId, impactTests) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  let storageImages = []

  batch.update(inspectionRef, {
    impactGeneralInfo: firebase.firestore.FieldValue.delete(),
  })

  impactTests &&
    impactTests.forEach(({ id, dropTests }) => {
      const impactRef = inspectionRef.collection('impactTests').doc(id)

      batch.delete(impactRef)

      dropTests &&
        dropTests.forEach(dropTest => {
          const dropRef = impactRef.collection('dropTests').doc(dropTest.id)

          storageImages.push(dropRef)

          batch.delete(dropRef)
        })
    })

  await batch.commit()

  dispatch({
    type: DELETE_IMPACT_TEST,
  })

  storageImages.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}

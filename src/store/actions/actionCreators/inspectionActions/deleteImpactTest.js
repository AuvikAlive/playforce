import { deleteImage } from '../storageActions/'
import { DELETE_IMPACT_TEST } from '../../actionTypes'

export const deleteImpactTest = (userId, inspectionId, impactTests) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

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

          storageImages.push(
            `${userId}/images/${inspectionId}/impactTests/${id}/${dropTest.id}`
          )

          batch.delete(dropRef)
        })
    })

  await batch.commit()

  dispatch({
    type: DELETE_IMPACT_TEST,
  })

  storageImages.forEach(item => {
    dispatch(deleteImage(item))
  })
}

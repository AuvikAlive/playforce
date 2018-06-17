import { saveImage } from '../storageActions/'

export const addInspection = (userId, cover) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  return db.runTransaction(async transaction => {
    const userRef = db.collection('users').doc(userId)
    const userDoc = await transaction.get(userRef)
    const inspectionCount = userDoc.data().inspectionCount || 0

    transaction.update(userRef, { inspectionCount: inspectionCount + 1 })

    const inspectionRef = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc()

    const {
      image,
      location: { name },
    } = cover

    if (image) {
      console.log(image)
      const downloadURL = await dispatch(
        saveImage(`${userId}/images/${inspectionRef.id}/cover`, image)
      )

      cover.image = downloadURL
    } else {
      delete cover.image
    }

    transaction.set(inspectionRef, {
      cover,
      site: cover.location.id,
      inspectionNumber: inspectionCount + 1,
      archived: false,
      name,
    })

    return inspectionRef.id
  })
}

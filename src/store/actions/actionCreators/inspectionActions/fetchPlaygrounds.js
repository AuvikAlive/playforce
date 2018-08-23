import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchPlaygrounds = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYGROUNDS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .orderBy('name')
    .get()

  let items = querySnapshot.docs.map(async doc => {
    const conditionRatingsQuerySnapshot = await doc.ref
      .collection('conditionRatings')
      .get()

    let conditionRatings = conditionRatingsQuerySnapshot.docs.map(async doc => {
      const { image } = doc.data()
      const response = await fetch(image)
      const blob = await response.blob()
      const dataUrl = await getDataUrlFromBlob(blob)

      return {
        id: doc.id,
        ...doc.data(),
        image: dataUrl,
      }
    })

    conditionRatings = await Promise.all(conditionRatings)

    const complianceIssuesQuerySnapshot = await doc.ref
      .collection('complianceIssues')
      .get()

    let complianceIssues = complianceIssuesQuerySnapshot.docs.map(async doc => {
      let { images } = doc.data()

      images = images.map(async item => {
        const response = await fetch(item.image)
        const blob = await response.blob()
        const dataUrl = await getDataUrlFromBlob(blob)

        return {
          ...item,
          image: dataUrl,
        }
      })

      images = await Promise.all(images)

      return {
        id: doc.id,
        ...doc.data(),
        images,
      }
    })

    complianceIssues = await Promise.all(complianceIssues)

    const maintenanceIssuesQuerySnapshot = await doc.ref
      .collection('maintenanceIssues')
      .get()

    let maintenanceIssues = maintenanceIssuesQuerySnapshot.docs.map(
      async doc => {
        let { images } = doc.data()

        images = images.map(async item => {
          const response = await fetch(item.image)
          const blob = await response.blob()
          const dataUrl = await getDataUrlFromBlob(blob)

          return {
            ...item,
            image: dataUrl,
          }
        })

        images = await Promise.all(images)

        return {
          id: doc.id,
          ...doc.data(),
          images,
        }
      }
    )

    maintenanceIssues = await Promise.all(maintenanceIssues)

    return {
      id: doc.id,
      ...doc.data(),
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_PLAYGROUNDS_COMPLETED, payload: items })
}

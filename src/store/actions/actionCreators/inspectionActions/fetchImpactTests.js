// import { reverse } from 'lodash'
import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../actionTypes'
import { getDataUrlFromBlob } from '../../../../functions/getDataUrlFromBlob'

export const fetchImpactTests = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .get()

  let items = querySnapshot.docs.map(async doc => {
    const querySnapshot = await doc.ref.collection('dropTests').get()

    let dropTests = querySnapshot.docs.map(async doc => {
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

    dropTests = await Promise.all(dropTests)

    return {
      id: doc.id,
      ...doc.data(),
      dropTests,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_IMPACT_TESTS_COMPLETED, payload: items })
}

// import { reverse } from 'lodash'
import { getDataUrlFromBlob } from '../../../../../functions/getDataUrlFromBlob'
import {
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'

export const fetchImpactTestsRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_IMPACT_TESTS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('impactTests')
    .orderBy('surface.location')

  return ref.onSnapshot(async querySnapshot => {
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
  })
}

import {
  FETCH_INSPECTIONS_BY_SITE,
  FETCH_INSPECTIONS_BY_SITE_COMPLETED,
} from '../../actionTypes'

export const fetchInspectionsBySiteRealTime = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTIONS_BY_SITE })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .orderBy('inspectionNumber')
    .where('site', '==', siteId)

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({
      type: FETCH_INSPECTIONS_BY_SITE_COMPLETED,
      payload: { items, siteId },
    })
  })
}

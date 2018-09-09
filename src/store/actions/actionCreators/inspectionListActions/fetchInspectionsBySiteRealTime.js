import {
  FETCH_INSPECTIONS_BY_SITE,
  FETCH_INSPECTIONS_BY_SITE_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchInspectionsBySiteRealTime = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_INSPECTIONS_BY_SITE })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
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

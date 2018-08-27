import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../actionTypes'
import { fetchPlaygroundConditionRatings } from './fetchPlaygroundConditionRatings'
import { fetchPlaygroundComplianceIssues } from './fetchPlaygroundComplianceIssues'
import { fetchPlaygroundMaintenanceIssues } from './fetchPlaygroundMaintenanceIssues'
import { fetchPlaygroundPlayingSufaces } from './fetchPlaygroundPlayingSufaces'

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
    const conditionRatings = await fetchPlaygroundConditionRatings(doc.ref)

    const complianceIssues = await fetchPlaygroundComplianceIssues(doc.ref)

    const maintenanceIssues = await fetchPlaygroundMaintenanceIssues(doc.ref)

    const playingSurfaces = await fetchPlaygroundPlayingSufaces(doc.ref)

    return {
      id: doc.id,
      ...doc.data(),
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
      playingSurfaces,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_PLAYGROUNDS_COMPLETED, payload: items })
}

import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'
import { fetchPlaygroundConditionRatings } from './fetchPlaygroundConditionRatings'
import { fetchPlaygroundComplianceIssues } from './fetchPlaygroundComplianceIssues'
import { fetchPlaygroundMaintenanceIssues } from './fetchPlaygroundMaintenanceIssues'
import { fetchPlaygroundPlayingSufaces } from './fetchPlaygroundPlayingSufaces'
import { fetchPlaygroundImpactTests } from './fetchPlaygroundImpactTests'

export const fetchPlaygrounds = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PLAYGROUNDS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .orderBy('name')

  const querySnapshot = await ref.get()

  let items = querySnapshot.docs.map(async doc => {
    const conditionRatings = await fetchPlaygroundConditionRatings(doc.ref)
    const complianceIssues = await fetchPlaygroundComplianceIssues(doc.ref)
    const maintenanceIssues = await fetchPlaygroundMaintenanceIssues(doc.ref)
    const playingSurfaces = await fetchPlaygroundPlayingSufaces(doc.ref)
    const impactTests = await fetchPlaygroundImpactTests(doc.ref)

    return {
      id: doc.id,
      ...doc.data(),
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
      playingSurfaces,
      impactTests,
    }
  })

  items = await Promise.all(items)

  dispatch({ type: FETCH_PLAYGROUNDS_COMPLETED, payload: items })
}

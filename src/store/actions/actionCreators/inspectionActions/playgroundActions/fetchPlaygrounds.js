import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchPlaygroundConditionRatings } from './conditionRatingActions/'
import { fetchPlaygroundComplianceIssues } from './complianceIssueActions/'
import { fetchPlaygroundMaintenanceIssues } from './maintenanceIssueActions/'
import { fetchPlaygroundPlayingSufaces } from './playingSurfaceActions/'
import { fetchPlaygroundImpactTests } from './impactTestActions/'

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

import {
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
} from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { fetchConditionRatingsStateless } from '../conditionRatingActions/'
import { fetchComplianceIssuesStateless } from '../complianceIssueActions/'
import { fetchMaintenanceIssuesStateless } from '../maintenanceIssueActions/'
import { fetchPlaygroundPlayingSufaces } from './playingSurfaceActions/'
import { fetchImpactTestsStateless } from '../impactTestActions/'

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
    const conditionRatings = await dispatch(
      fetchConditionRatingsStateless(doc.ref)
    )

    const complianceIssues = await dispatch(
      fetchComplianceIssuesStateless(doc.ref)
    )

    const maintenanceIssues = await dispatch(
      fetchMaintenanceIssuesStateless(doc.ref)
    )

    const playingSurfaces = await fetchPlaygroundPlayingSufaces(doc.ref)
    const impactTests = await dispatch(fetchImpactTestsStateless(doc.ref))

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

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
    const conditionRatingsPromise = dispatch(
      fetchConditionRatingsStateless(doc.ref)
    )

    const complianceIssuesPromise = dispatch(
      fetchComplianceIssuesStateless(doc.ref)
    )

    const maintenanceIssuesPromise = dispatch(
      fetchMaintenanceIssuesStateless(doc.ref)
    )

    const playingSurfacesPromise = fetchPlaygroundPlayingSufaces(doc.ref)
    const impactTestsPromise = dispatch(fetchImpactTestsStateless(doc.ref))

    const [
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
      playingSurfaces,
      impactTests,
    ] = await Promise.all([
      conditionRatingsPromise,
      complianceIssuesPromise,
      maintenanceIssuesPromise,
      playingSurfacesPromise,
      impactTestsPromise,
    ])

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

  return items
}

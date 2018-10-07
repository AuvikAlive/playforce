import { fetchImpactTestsStateless } from '../../impactTestActions/'

export const fetchPlaygroundImpactTests = baseRef => async (
  dispatch,
  getState,
  getFirebase
) => {
  const items = await dispatch(fetchImpactTestsStateless(baseRef))

  return items
}

import { fetchDropTestsStateless } from '../dropTestActions/'

export const fetchImpactTestsStateless = baseRef => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('impactTests').orderBy('surface.location')
  const querySnapshot = await ref.get()

  const items = querySnapshot.docs.map(async doc => {
    const dropTests = await dispatch(fetchDropTestsStateless(doc.ref))

    return {
      id: doc.id,
      ...doc.data(),
      dropTests,
    }
  })

  return await Promise.all(items)
}

import { fetchDropTests } from '../../dropTestActions/'

export const fetchPlaygroundImpactTests = async ref => {
  const querySnapshot = await ref
    .collection('impactTests')
    .orderBy('surface.location')
    .get()

  let items = querySnapshot.docs.map(async doc => {
    const dropTests = await fetchDropTests(doc.ref)

    return {
      id: doc.id,
      ...doc.data(),
      dropTests,
    }
  })

  items = await Promise.all(items)

  return items
}

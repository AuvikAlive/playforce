export const addSurfaceTestStateless = (baseRef, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('impactTests').doc()

  await ref.set({ surface: data })

  return { surface: data, id: ref.id }
}

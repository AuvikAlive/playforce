export const updateSurfaceTestStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('impactTests').doc(id)

  await ref.update({ surface: data })

  return { surface: data, id }
}

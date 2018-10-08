export const updateSurfaceTestStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const impactTestRef = baseRef.collection('impactTests').doc(id)

  await impactTestRef.update({ surface: data })

  return { surface: data, id }
}

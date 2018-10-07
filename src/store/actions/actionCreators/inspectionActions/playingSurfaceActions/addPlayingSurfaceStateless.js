export const addPlayingSurfaceStateless = (baseRef, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const playingSurfaceRef = baseRef.collection('playingSurfaces').doc()

  await playingSurfaceRef.set(data)

  return { ...data, id: playingSurfaceRef.id }
}

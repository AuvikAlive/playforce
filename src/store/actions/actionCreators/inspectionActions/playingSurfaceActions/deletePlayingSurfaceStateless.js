export const deletePlayingSurfaceStateless = (baseRef, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const playingSurfaceRef = baseRef.collection('playingSurfaces').doc(id)

  return playingSurfaceRef.delete()
}

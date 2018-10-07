export const updatePlayingSurfaceStateless = (baseRef, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const playingSurfaceRef = baseRef.collection('playingSurfaces').doc(id)

  return playingSurfaceRef.update(data)
}

export const saveImpactGeneralInfoStateless = (baseRef, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  await baseRef.update({ impactGeneralInfo: data })
}

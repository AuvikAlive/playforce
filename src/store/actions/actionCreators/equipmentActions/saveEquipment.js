export const saveEquipment = (userId, siteId, equipmentData) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const equipmentsRef = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
  const { assetId } = equipmentData
  const ref = equipmentsRef.doc(assetId)

  return ref.set(equipmentData)
}

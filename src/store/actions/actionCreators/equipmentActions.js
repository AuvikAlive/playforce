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
  const { equipmentId } = equipmentData
  const ref = equipmentId ? equipmentsRef.doc(equipmentId) : equipmentsRef.doc()

  return equipmentId ? ref.update(equipmentData) : ref.set(equipmentData)
}

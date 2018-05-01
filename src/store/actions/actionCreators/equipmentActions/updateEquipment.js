export const updateEquipment = (userId, siteId, equipmentData) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(equipmentData.assetId)

  return ref.update(equipmentData)
}

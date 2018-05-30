export const getEquipmentRef = ({ getFirebase, userId, siteId, data }) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const { equipment } = data
  const ref = db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(equipment)

  return ref
}

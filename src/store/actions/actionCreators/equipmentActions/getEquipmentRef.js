import { getRootRef } from '../dbActions/'

export const getEquipmentRef = (userId, siteId, data) => (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const { equipment } = data
  const ref = rootRef
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .doc(equipment)

  return ref
}

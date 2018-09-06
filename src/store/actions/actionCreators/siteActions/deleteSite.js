import { getBatch, getRootRef } from '../dbActions/'

export const deleteSite = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const siteRef = rootRef.collection('sites').doc(id)

  batch.delete(siteRef)

  const equipmentSnapshot = await siteRef.collection('equipments').get()

  if (!equipmentSnapshot.empty) {
    equipmentSnapshot.forEach(doc => batch.delete(doc.ref))
  }

  return batch.commit()
}

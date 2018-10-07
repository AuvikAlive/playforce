import { deleteImage } from '../../storageActions/'

export const deleteDropTestStateless = (baseRef, id, batch) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const ref = baseRef.collection('dropTests').doc(id)

  if (batch) {
    batch.delete(ref)
    return ref
  } else {
    await ref.delete()
    dispatch(deleteImage(ref))
  }
}

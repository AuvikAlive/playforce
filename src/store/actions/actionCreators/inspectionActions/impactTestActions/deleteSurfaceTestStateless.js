import { getBatch } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'
import { deleteDropTestStateless } from '../dropTestActions/'

export const deleteSurfaceTestStateless = (
  baseRef,
  impactTest,
  relayedBatch
) => async (dispatch, getState, getFirebase) => {
  const batch = relayedBatch || dispatch(getBatch)
  const { id, dropTests } = impactTest
  const impactRef = baseRef.collection('impactTests').doc(id)
  let refsArray = []

  batch.delete(impactRef)

  dropTests &&
    dropTests.forEach(async ({ id }) => {
      const dropRef = await dispatch(
        deleteDropTestStateless(impactRef, id, batch)
      )

      refsArray.push(dropRef)
    })

  if (relayedBatch) {
    return refsArray
  }

  await batch.commit()

  refsArray.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}

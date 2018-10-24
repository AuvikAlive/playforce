import { getBatch } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'
import { deleteSurfaceTestStateless } from './deleteSurfaceTestStateless'

export const deleteImpactTestStateless = (
  baseRef,
  impactTests,
  relayedBatch
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const batch = relayedBatch || dispatch(getBatch)
  let refsArray = []

  batch.update(baseRef, {
    impactGeneralInfo: firebase.firestore.FieldValue.delete(),
  })

  impactTests &&
    impactTests.forEach(async impactTest => {
      const surfaceRefsArray = await dispatch(
        deleteSurfaceTestStateless(baseRef, impactTest, batch)
      )

      refsArray.push(...surfaceRefsArray)
    })

  if (relayedBatch) {
    return refsArray
  }

  await batch.commit()

  refsArray.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}

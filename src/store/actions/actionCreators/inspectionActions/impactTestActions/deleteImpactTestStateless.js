import { getBatch } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'
import { deleteSurfaceTestStateless } from './deleteSurfaceTestStateless'

export const deleteImpactTestStateless = (baseRef, impactTests) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const batch = dispatch(getBatch)
  let topRefsArray = []

  batch.update(baseRef, {
    impactGeneralInfo: firebase.firestore.FieldValue.delete(),
  })

  impactTests &&
    impactTests.forEach(async impactTest => {
      const refsArray = await dispatch(
        deleteSurfaceTestStateless(baseRef, impactTest, batch)
      )

      topRefsArray.push(...refsArray)
    })

  await batch.commit()

  topRefsArray.forEach(dropRef => {
    dispatch(deleteImage(dropRef))
  })
}

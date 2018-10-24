import { DELETE_IMPACT_TEST } from '../../../actionTypes'
import { getRootRef, getBatch } from '../../dbActions/'
import { deleteImage } from '../../storageActions/'
import { deleteImpactTestStateless } from '../impactTestActions/deleteImpactTestStateless'

export const deleteStandaloneImpactTest = (
  userId,
  inspectionId,
  impactTests
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)
  const batch = dispatch(getBatch)

  // batch.delete(inspectionRef)

  const refsArray = await dispatch(
    deleteImpactTestStateless(inspectionRef, impactTests, batch)
  )

  batch.delete(inspectionRef)

  await batch.commit()

  dispatch({
    type: DELETE_IMPACT_TEST,
  })

  refsArray.forEach(ref => {
    dispatch(deleteImage(ref))
  })
}

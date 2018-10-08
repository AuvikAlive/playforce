import { SAVE_IMPACT_COMMENT } from '../../../actionTypes'
import { getRootRef } from '../../dbActions/'
import { saveImpactCommentStateless } from './saveImpactCommentStateless'

export const saveImpactComment = (userId, inspectionId, id, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const inspectionRef = rootRef.collection('inspections').doc(inspectionId)

  const payload = await dispatch(
    saveImpactCommentStateless(inspectionRef, id, data)
  )

  dispatch({ type: SAVE_IMPACT_COMMENT, payload })
}

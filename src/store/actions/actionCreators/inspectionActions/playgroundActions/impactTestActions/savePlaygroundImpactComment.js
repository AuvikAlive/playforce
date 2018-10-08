import { SAVE_PLAYGROUND_IMPACT_COMMENT } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { saveImpactCommentStateless } from '../../impactTestActions/'

export const savePlaygroundImpactComment = ({
  userId,
  inspectionId,
  playgroundId,
  id,
  data,
}) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  const payload = await dispatch(
    saveImpactCommentStateless(playgroundRef, id, data)
  )

  dispatch({
    type: SAVE_PLAYGROUND_IMPACT_COMMENT,
    payload: { ...payload, playgroundId },
  })
}

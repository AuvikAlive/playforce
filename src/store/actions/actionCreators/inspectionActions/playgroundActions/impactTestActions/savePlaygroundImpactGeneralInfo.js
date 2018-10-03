import { SAVE_PLAYGROUND_IMPACT_GENERAL_INFO } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'

export const savePlaygroundImpactGeneralInfo = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await ref.update({ impactGeneralInfo: data })

  dispatch({
    type: SAVE_PLAYGROUND_IMPACT_GENERAL_INFO,
    payload: { ...data, playgroundId },
  })
}

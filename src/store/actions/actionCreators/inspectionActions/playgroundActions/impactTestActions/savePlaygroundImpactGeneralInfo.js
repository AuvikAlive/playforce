import { SAVE_PLAYGROUND_IMPACT_GENERAL_INFO } from '../../../../actionTypes'
import { getRootRef } from '../../../dbActions/'
import { saveImpactGeneralInfoStateless } from '../../impactTestActions/'

export const savePlaygroundImpactGeneralInfo = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)

  const playgroundRef = rootRef
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc(playgroundId)

  await dispatch(saveImpactGeneralInfoStateless(playgroundRef, data))

  dispatch({
    type: SAVE_PLAYGROUND_IMPACT_GENERAL_INFO,
    payload: { ...data, playgroundId },
  })
}

import { SAVE_PLAYGROUND_IMPACT_GENERAL_INFO } from '../../actionTypes'

export const savePlaygroundImpactGeneralInfo = (
  userId,
  inspectionId,
  playgroundId,
  data
) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
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

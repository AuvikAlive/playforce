import { ADD_PLAYGROUND } from '../../actionTypes'

export const addPlayground = (userId, inspectionId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('playgrounds')
    .doc()

  await ref.set(data)

  dispatch({
    type: ADD_PLAYGROUND,
    payload: { ...data, id: ref.id },
  })

  return ref.id
}

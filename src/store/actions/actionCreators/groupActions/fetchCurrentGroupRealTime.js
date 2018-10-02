import {
  FETCH_CURRENT_GROUP,
  FETCH_CURRENT_GROUP_COMPLETED,
} from '../../actionTypes'

export const fetchCurrentGroupRealTime = groupId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CURRENT_GROUP })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = db.collection('groups').doc(groupId)

  return ref.onSnapshot(doc => {
    dispatch({
      type: FETCH_CURRENT_GROUP_COMPLETED,
      payload: {
        ...doc.data(),
      },
    })
  })
}

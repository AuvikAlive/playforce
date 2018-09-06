import { getFirestore } from './getFirestore'

export const getUserRef = (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const state = getState()

  return db.collection('users').doc(state.firebase.auth.uid)
}

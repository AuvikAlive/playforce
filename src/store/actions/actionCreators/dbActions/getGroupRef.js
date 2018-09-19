import { getFirestore } from './getFirestore'

export const getGroupRef = (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const state = getState()

  return db.collection('groups').doc(state.firebase.profile.userGroup)
}

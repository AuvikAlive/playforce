import { SIGN_OUT } from '../../actionTypes'

export const signOut = () => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()

  dispatch({ type: SIGN_OUT })

  return firebase.logout()
}

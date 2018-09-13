import { updateProfile } from '../profileActions'

export const setUserMode = userMode => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch(updateProfile({ userMode }))
}

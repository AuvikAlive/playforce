import { updateProfile } from '../profileActions'

export const setUserGroup = userGroup => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch(updateProfile({ userGroup }))
}

import { SET_USER_MODE } from '../../actionTypes'
import { updateProfile } from '../profileActions'
import { fetchDatabaseRootRealTime } from '../dbActions/'

export const setUserMode = userMode => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch(updateProfile({ userMode }))
  dispatch({ type: SET_USER_MODE })
  dispatch(fetchDatabaseRootRealTime())
}

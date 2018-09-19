import { individualUserMode } from '../../../../constants/'
import { getUserRef } from './getUserRef'
import { getGroupRef } from './getGroupRef'

export const getRootRef = (dispatch, getState, getFirebase) => {
  const state = getState()
  const userMode = state.firebase.profile.userMode
  const isIndividualUser = !userMode || userMode === individualUserMode
  const rootRef = isIndividualUser
    ? dispatch(getUserRef)
    : dispatch(getGroupRef)

  return rootRef
}

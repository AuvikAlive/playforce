import { getUserRef } from './getUserRef'

export const getRootRef = (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getUserRef)

  return rootRef
}

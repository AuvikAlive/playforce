import {
  FETCH_USER_GROUPS,
  FETCH_USER_GROUPS_COMPLETED,
} from '../../actionTypes'
import { getUserRef } from '../dbActions/'

export const fetchUserGroupsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_USER_GROUPS })

  const rootRef = dispatch(getUserRef)
  const ref = rootRef.collection('groups')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_USER_GROUPS_COMPLETED, payload: items })
  })
}

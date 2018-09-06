import {
  FETCH_PROJECT_MEMBERS,
  FETCH_PROJECT_MEMBERS_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchProjectMembersRealTime = (userId, projectId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PROJECT_MEMBERS })

  const rootRef = dispatch(getRootRef)

  const ref = rootRef
    .collection('projects')
    .doc(projectId)
    .collection('inspections')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PROJECT_MEMBERS_COMPLETED, payload: items })
  })
}

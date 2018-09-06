import { FETCH_PROJECTS, FETCH_PROJECTS_COMPLETED } from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchProjectsRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_PROJECTS })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('projects')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_PROJECTS_COMPLETED, payload: items })
  })
}

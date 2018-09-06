import {
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchCommonIssuesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMMON_ISSUES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_COMMON_ISSUES_COMPLETED, payload: items })
  })
}

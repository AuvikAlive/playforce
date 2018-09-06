import {
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchCommonIssues = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMMON_ISSUES })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues')
  const querySnapshot = await ref.get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )
  dispatch({ type: FETCH_COMMON_ISSUES_COMPLETED, payload: items })
}

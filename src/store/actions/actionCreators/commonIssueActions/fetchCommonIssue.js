import {
  FETCH_COMMON_ISSUE,
  FETCH_COMMON_ISSUE_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchCommonIssue = (userId, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_COMMON_ISSUE })

  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('commonIssues').doc(id)
  const doc = await ref.get()
  const item = { id: doc.id, ...doc.data() }

  dispatch({ type: FETCH_COMMON_ISSUE_COMPLETED, payload: item })
}

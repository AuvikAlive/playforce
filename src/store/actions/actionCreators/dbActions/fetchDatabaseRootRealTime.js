import {
  FETCH_DATABASE_ROOT,
  FETCH_DATABASE_ROOT_COMPLETED,
} from '../../actionTypes'
import { getRootRef } from '../dbActions/'

export const fetchDatabaseRootRealTime = () => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  dispatch({ type: FETCH_DATABASE_ROOT })

  return rootRef.onSnapshot(async doc => {
    const { name, inspectionCount, inspectionCompleteCount } = doc.data()
    const item = { name, inspectionCount, inspectionCompleteCount }

    dispatch({ type: FETCH_DATABASE_ROOT_COMPLETED, payload: item })

    return item
  })
}

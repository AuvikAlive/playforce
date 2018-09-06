import { getFirestore } from './getFirestore'

export const getBatch = (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const batch = db.batch()

  return batch
}

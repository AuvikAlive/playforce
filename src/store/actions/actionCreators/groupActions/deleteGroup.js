import { getFirestore, getBatch } from '../dbActions/'
import { deleteMembers } from './deleteMembers'

export const deleteGroup = (groupId, members) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const batch = dispatch(getBatch)
  const ref = db.collection('groups').doc(groupId)

  batch.delete(ref)

  await dispatch(deleteMembers(groupId, members, batch))

  return batch.commit()
}

import { individualUserMode } from '../../../../constants/'
import { getFirestore, getBatch, getUserRef } from '../dbActions/'

export const deleteMembers = (groupId, members, delegatedBatch) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const batch = delegatedBatch || dispatch(getBatch)

  const promises = members.map(async ({ id }) => {
    const memberRef = db
      .collection('groups')
      .doc(groupId)
      .collection('users')
      .doc(id)

    batch.delete(memberRef)

    const userRef = dispatch(getUserRef)
    const userGroupRef = userRef.collection('groups').doc(groupId)

    batch.delete(userGroupRef)

    const userDoc = await userRef.get()
    const { userMode } = userDoc.data()

    userMode === groupId &&
      batch.update(userRef, { userMode: individualUserMode })

    return batch
  })

  await Promise.all(promises)

  return delegatedBatch ? batch : batch.commit()
}

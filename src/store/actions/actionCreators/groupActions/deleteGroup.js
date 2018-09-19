import { getFirestore, getBatch, getUserRef } from '../dbActions/'

export const deleteGroup = (groupId, members) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const db = dispatch(getFirestore)
  const batch = dispatch(getBatch)
  const ref = db.collection('groups').doc(groupId)

  batch.delete(ref)

  members.forEach(({ id }) => {
    const memberRef = ref.collection('users').doc(id)

    batch.delete(memberRef)

    const userRef = dispatch(getUserRef)
    const userGroupRef = userRef.collection('groups').doc(groupId)

    batch.delete(userGroupRef)
  })

  return batch.commit()
}

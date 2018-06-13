export const deleteMembers = (groupId, list) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()

  list.forEach(user => {
    const groupUserRef = db
      .collection('groups')
      .doc(groupId)
      .collection('users')
      .doc(user.id)

    batch.delete(groupUserRef)

    const userGroupsRef = db
      .collection('users')
      .doc(user.id)
      .collection('groups')
      .doc(groupId)

    batch.delete(userGroupsRef)
  })

  return batch.commit()
}

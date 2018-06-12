import { FETCH_GROUPS, FETCH_GROUPS_COMPLETED } from '../../actionTypes'

export const fetchGroupsRealTime = () => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_GROUPS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db.collection('groups')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_GROUPS_COMPLETED, payload: items })
  })
}

import {
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
} from '../../actionTypes'

export const fetchConditionRatingsRealTime = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_CONDITION_RATINGS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)
    .collection('conditionRatings')

  return ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_CONDITION_RATINGS_COMPLETED, payload: items })
  })
}

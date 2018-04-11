import {
  FETCH_SITES,
  FETCH_SITES_COMPLETED,
  FETCH_EQUIPMENTS,
  FETCH_EQUIPMENTS_COMPLETED,
} from '../actionTypes'

export const fetchEquipments = (userId, siteId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_EQUIPMENTS })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .doc(siteId)
    .collection('equipments')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_EQUIPMENTS_COMPLETED, payload: items })
}

export const fetchSites = userId => async (dispatch, getState, getFirebase) => {
  dispatch({ type: FETCH_SITES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const querySnapshot = await db
    .collection('users')
    .doc(userId)
    .collection('sites')
    .get()

  let items = []

  querySnapshot.forEach(doc =>
    items.push({
      id: doc.id,
      ...doc.data(),
    })
  )

  dispatch({ type: FETCH_SITES_COMPLETED, payload: items })
}

export const fetchSitesRealTime = userId => async (
  dispatch,
  getState,
  getFirebase
) => {
  dispatch({ type: FETCH_SITES })

  const firebase = getFirebase()
  const db = firebase.firestore()
  const ref = await db
    .collection('users')
    .doc(userId)
    .collection('sites')

  ref.onSnapshot(querySnapshot => {
    let items = []

    querySnapshot.forEach(doc =>
      items.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    dispatch({ type: FETCH_SITES_COMPLETED, payload: items })
  })
}

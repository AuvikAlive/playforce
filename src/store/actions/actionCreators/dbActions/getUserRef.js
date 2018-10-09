import { getFirestore } from './getFirestore'

export const getUserRef = (dispatch, getState, getFirebase) => {
  const db = dispatch(getFirestore)
  const state = getState()

  // deonkoelmeyer
  // return db.collection('users').doc('fYH5OnVoaFMQYqehJNqAm9tw6rt1')

  // justinkaese
  // return db.collection('users').doc('xf58ubuagCNyMqWJD3yXCADxoSJ3')

  return db.collection('users').doc(state.firebase.auth.uid)
}

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { sideMenuReducer } from './reducers/sideMenuReducer'
import { searchBarReducer } from './reducers/searchBarReducer'
import { inspectionReducer } from './reducers/inspectionReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sideMenu: sideMenuReducer,
  searchBar: searchBarReducer,
  inspection: inspectionReducer,
}

export const rootReducer = combineReducers(reducers)

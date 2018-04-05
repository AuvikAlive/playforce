import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { sideMenuReducer } from './reducers/sideMenuReducer'
import { searchBarReducer } from './reducers/searchBarReducer'
import { inspectionReducer } from './reducers/inspectionReducer'
import { inspectionListReducer } from './reducers/inspectionListReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sideMenu: sideMenuReducer,
  searchBar: searchBarReducer,
  inspection: inspectionReducer,
  inspectionList: inspectionListReducer,
}

export const rootReducer = combineReducers(reducers)

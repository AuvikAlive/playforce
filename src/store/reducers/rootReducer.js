import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { sideMenuReducer } from './sideMenuReducer'
import { searchBarReducer } from './searchBarReducer'
import { inspectionReducer } from './inspectionReducer'
import { inspectionListReducer } from './inspectionListReducer'
import { siteListReducer } from './siteListReducer'
import { standardReducer } from './standardReducer'
import { clientReducer } from './clientReducer'
import { manufacturerReducer } from './manufacturerReducer'
import { operatorReducer } from './operatorReducer'
import { commonIssueReducer } from './commonIssueReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sideMenu: sideMenuReducer,
  searchBar: searchBarReducer,
  inspection: inspectionReducer,
  inspectionList: inspectionListReducer,
  siteList: siteListReducer,
  standard: standardReducer,
  client: clientReducer,
  manufacturer: manufacturerReducer,
  operator: operatorReducer,
  commonIssue: commonIssueReducer,
}

export const rootReducer = combineReducers(reducers)

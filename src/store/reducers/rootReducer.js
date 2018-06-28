import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { sideMenuReducer } from './sideMenuReducer'
import { searchBarReducer } from './searchBarReducer'
import { inspectionReducer } from './inspectionReducer'
import { inspectionListReducer } from './inspectionListReducer'
import { siteReducer } from './siteReducer'
import { standardReducer } from './standardReducer'
import { clientReducer } from './clientReducer'
import { manufacturerReducer } from './manufacturerReducer'
import { operatorReducer } from './operatorReducer'
import { commonIssueReducer } from './commonIssueReducer'
import { equipmentReducer } from './equipmentReducer'
import { groupReducer } from './groupReducer'
import { inspectionTypeReducer } from './inspectionTypeReducer'
import { projectReducer } from './projectReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sideMenu: sideMenuReducer,
  searchBar: searchBarReducer,
  inspection: inspectionReducer,
  inspectionList: inspectionListReducer,
  site: siteReducer,
  standard: standardReducer,
  client: clientReducer,
  manufacturer: manufacturerReducer,
  operator: operatorReducer,
  commonIssue: commonIssueReducer,
  equipment: equipmentReducer,
  group: groupReducer,
  inspectionType: inspectionTypeReducer,
  project: projectReducer,
}

export const rootReducer = combineReducers(reducers)

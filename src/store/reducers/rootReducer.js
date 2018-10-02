import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { persistReducer } from 'redux-persist'
import localForage from 'localforage'
import { SET_USER_MODE, SIGN_OUT } from '../actions/actionTypes'
import { databaseRootReducer } from './databaseRootReducer'
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
import { reportNoteReducer } from './reportNoteReducer'
import { equipmentReducer } from './equipmentReducer'
import { groupReducer } from './groupReducer'
import { inspectionTypeReducer } from './inspectionTypeReducer'
import { projectReducer } from './projectReducer'

localForage.config({
  name: 'Playforce Inspector App',
  storeName: 'playforce',
})

const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: [],
}

const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  databaseRoot: databaseRootReducer,
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
  reportNote: reportNoteReducer,
  equipment: equipmentReducer,
  group: groupReducer,
  inspectionType: inspectionTypeReducer,
  project: projectReducer,
}

const appReducer = combineReducers(reducers)

export const rootReducer = (state, action) => {
  if (action.type === SET_USER_MODE) {
    const { router, firebase, sideMenu, group } = state
    state = { router, firebase, sideMenu, group }
  } else if (action.type === SIGN_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

// export const rootReducer = combineReducers(reducers)

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

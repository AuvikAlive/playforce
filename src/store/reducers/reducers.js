import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { sideMenuReducer } from './sideMenuReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  sideMenu: sideMenuReducer
}

export const rootReducer = combineReducers(reducers)

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'
import { sideMenuReducer } from './reducers/sideMenuReducer'
import { searchBarReducer } from './reducers/searchBarReducer'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer,
  sideMenu: sideMenuReducer,
  searchBar: searchBarReducer
}

export const rootReducer = combineReducers(reducers)

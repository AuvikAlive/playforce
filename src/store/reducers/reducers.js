import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { firebaseReducer } from 'react-redux-firebase'

export const reducers = {
  router: routerReducer,
  firebase: firebaseReducer
}

export const rootReducer = combineReducers(reducers)

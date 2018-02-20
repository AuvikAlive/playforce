import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

export const reducers = {
  router: routerReducer
}

export const rootReducer = combineReducers(reducers)

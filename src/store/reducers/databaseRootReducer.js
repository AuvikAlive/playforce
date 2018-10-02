import {
  FETCH_DATABASE_ROOT,
  FETCH_DATABASE_ROOT_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  rootLoaded: false,
  root: {},
}

export const databaseRootReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_DATABASE_ROOT:
      return {
        ...state,
        rootLoaded: false,
      }

    case FETCH_DATABASE_ROOT_COMPLETED:
      return {
        ...state,
        rootLoaded: true,
        root: payload,
      }

    default:
      return state
  }
}

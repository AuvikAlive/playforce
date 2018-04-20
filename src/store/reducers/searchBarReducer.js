import {
  OPEN_SEARCH_BAR,
  CLOSE_SEARCH_BAR,
  TOGGLE_SEARCH_BAR,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
} from '../actions/actionTypes'

export const initialState = {
  open: false,
  query: null,
  results: [],
}

export const searchBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_SEARCH_BAR:
      return { ...state, open: true }

    case CLOSE_SEARCH_BAR:
      return { ...state, open: false }

    case TOGGLE_SEARCH_BAR:
      return { ...state, open: !state.open }

    case SET_SEARCH_QUERY:
      return { ...state, query: payload }

    case SET_SEARCH_RESULTS:
      return { ...state, results: payload }

    default:
      return state
  }
}

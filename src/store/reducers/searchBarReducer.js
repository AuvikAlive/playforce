import {
  OPEN_SEARCH_BAR,
  CLOSE_SEARCH_BAR,
  TOGGLE_SEARCH_BAR
} from '../actions/actionTypes'

export const initialState = {
  open: false,
  query: null
}

export const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SEARCH_BAR:
      return { open: true }

    case CLOSE_SEARCH_BAR:
      return { open: false }

    case TOGGLE_SEARCH_BAR:
      return { ...state, open: !state.open }

    default:
      return state
  }
}

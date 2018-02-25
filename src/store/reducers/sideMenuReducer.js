import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_SIDE_MENU
} from '../actions/actionTypes'

export const initialState = {
  open: false
}

export const sideMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return { open: true }

    case CLOSE_SIDE_MENU:
      return { open: false }

    case TOGGLE_SIDE_MENU:
      return { ...state, open: !state.open }

    default:
      return state
  }
}

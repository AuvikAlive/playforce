import {
  FETCH_MANUFACTURERS,
  FETCH_MANUFACTURERS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  manufacturersLoaded: false,
  manufacturers: [],
}

export const manufacturerReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case FETCH_MANUFACTURERS:
      return { ...state, manufacturersLoaded: false }

    case FETCH_MANUFACTURERS_COMPLETED:
      return { ...state, manufacturersLoaded: true, manufacturers: payload }

    default:
      return state
  }
}

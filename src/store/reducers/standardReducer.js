import {
  FETCH_STANDARD,
  FETCH_STANDARD_COMPLETED,
  FETCH_STANDARDS,
  FETCH_STANDARDS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  standardLoaded: false,
  standard: undefined,
  standardsLoaded: false,
  standards: [],
}

export const standardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STANDARD:
      return { ...state, standardLoaded: false }

    case FETCH_STANDARD_COMPLETED:
      return { ...state, standardLoaded: true, standard: payload }

    case FETCH_STANDARDS:
      return { ...state, standardsLoaded: false }

    case FETCH_STANDARDS_COMPLETED:
      return { ...state, standardsLoaded: true, standards: payload }

    default:
      return state
  }
}

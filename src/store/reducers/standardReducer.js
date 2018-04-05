import {
  FETCH_STANDARDS,
  FETCH_STANDARDS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  standardsLoaded: false,
  standards: [],
}

export const standardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STANDARDS:
      return { ...state, standardsLoaded: false }

    case FETCH_STANDARDS_COMPLETED:
      return { ...state, standardsLoaded: true, standards: payload }

    default:
      return state
  }
}

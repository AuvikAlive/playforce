import {
  FETCH_EQUIPMENTS,
  FETCH_EQUIPMENTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  equipmentsLoaded: false,
  equipments: [],
}

export const equipmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EQUIPMENTS:
      return { ...state, equipmentsLoaded: false }

    case FETCH_EQUIPMENTS_COMPLETED:
      return { ...state, equipmentsLoaded: true, equipments: payload }

    default:
      return state
  }
}

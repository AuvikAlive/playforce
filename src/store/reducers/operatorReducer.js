import {
  FETCH_OPERATORS,
  FETCH_OPERATORS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  operatorsLoaded: false,
  operators: [],
}

export const operatorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_OPERATORS:
      return { ...state, operatorsLoaded: false }

    case FETCH_OPERATORS_COMPLETED:
      return { ...state, operatorsLoaded: true, operators: payload }

    default:
      return state
  }
}

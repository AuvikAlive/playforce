import {
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
} from '../actions/actionTypes'

export const initialState = {
  cover: {},
  summary: {},
  conditionRatings: [],
}

export const inspectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_INSPECTION_COVER:
      return { ...state, cover: payload }

    case ADD_INSPECTION_SUMMARY:
      return { ...state, summary: payload }

    case ADD_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: [...state.conditionRatings, payload],
      }

    default:
      return state
  }
}

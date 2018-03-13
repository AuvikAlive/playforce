import {
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
} from '../actions/actionTypes'

export const initialState = {
  cover: {},
  auditSummary: {},
  conditionRatings: [],
  complianceIssues: [],
}

export const inspectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_INSPECTION_COVER:
      return { ...state, cover: payload }

    case ADD_INSPECTION_SUMMARY:
      return { ...state, auditSummary: payload }

    case ADD_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: [...state.conditionRatings, payload],
      }

    case ADD_COMPLIANCE_ISSUE:
      return {
        ...state,
        complianceIssues: [...state.complianceIssues, payload],
      }

    default:
      return state
  }
}

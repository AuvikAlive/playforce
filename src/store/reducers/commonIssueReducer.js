import {
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  commonIssuesLoaded: false,
  commonIssues: [],
}

export const commonIssueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMON_ISSUES:
      return { ...state, commonIssuesLoaded: false }

    case FETCH_COMMON_ISSUES_COMPLETED:
      return { ...state, commonIssuesLoaded: true, commonIssues: payload }

    default:
      return state
  }
}

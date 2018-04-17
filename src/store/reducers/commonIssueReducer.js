import {
  FETCH_COMMON_ISSUE,
  FETCH_COMMON_ISSUE_COMPLETED,
  FETCH_COMMON_ISSUES,
  FETCH_COMMON_ISSUES_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  commonIssueLoaded: false,
  commonIssue: undefined,
  commonIssuesLoaded: false,
  commonIssues: [],
}

export const commonIssueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMON_ISSUE:
      return { ...state, commonIssueLoaded: false }

    case FETCH_COMMON_ISSUE_COMPLETED:
      return { ...state, commonIssueLoaded: true, commonIssue: payload }

    case FETCH_COMMON_ISSUES:
      return { ...state, commonIssuesLoaded: false }

    case FETCH_COMMON_ISSUES_COMPLETED:
      return { ...state, commonIssuesLoaded: true, commonIssues: payload }

    default:
      return state
  }
}

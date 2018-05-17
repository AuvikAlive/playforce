import {
  FETCH_INSPECTION,
  FETCH_INSPECTION_COMPLETED,
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
  FETCH_COMPLIANCE_ISSUES,
  FETCH_COMPLIANCE_ISSUES_COMPLETED,
  FETCH_MAINTENANCE_ISSUES,
  FETCH_MAINTENANCE_ISSUES_COMPLETED,
  DISCARD_INSPECTION,
  ADD_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
  ADD_MAINTENANCE_ISSUE,
  UPDATE_CONDITION_RATING,
  UPDATE_COMPLIANCE_ISSUE,
  UPDATE_MAINTENANCE_ISSUE,
} from '../actions/actionTypes'

export const initialState = {
  inspectionLoaded: false,
  equipments: [],
  cover: {},
  coverAdded: false,
  auditSummary: {},
  auditSummaryAdded: false,
  conditionRatingsLoaded: false,
  conditionRatings: [],
  conditionRatingsAdded: false,
  complianceIssuesLoaded: false,
  complianceIssues: [],
  complianceIssuesAdded: false,
  maintenanceIssuesLoaded: false,
  maintenanceIssues: [],
  maintenanceIssuesAdded: false,
}

export const inspectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INSPECTION:
      return { ...state, inspectionLoaded: false }

    case FETCH_INSPECTION_COMPLETED:
      return { ...state, inspectionLoaded: true, ...payload }

    case FETCH_CONDITION_RATINGS:
      return { ...state, conditionRatingsLoaded: false }

    case FETCH_CONDITION_RATINGS_COMPLETED:
      return {
        ...state,
        conditionRatingsLoaded: true,
        conditionRatings: payload,
        conditionRatingsAdded: payload.length > 0,
      }

    case FETCH_COMPLIANCE_ISSUES:
      return { ...state, complianceIssuesLoaded: false }

    case FETCH_COMPLIANCE_ISSUES_COMPLETED:
      return {
        ...state,
        complianceIssuesLoaded: true,
        complianceIssues: payload,
        complianceIssuesAdded: payload.length > 0,
      }

    case FETCH_MAINTENANCE_ISSUES:
      return { ...state, maintenanceIssuesLoaded: false }

    case FETCH_MAINTENANCE_ISSUES_COMPLETED:
      return {
        ...state,
        maintenanceIssuesLoaded: true,
        maintenanceIssues: payload,
        maintenanceIssuesAdded: payload.length > 0,
      }

    case DISCARD_INSPECTION:
      return { ...initialState }

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

    case ADD_MAINTENANCE_ISSUE:
      return {
        ...state,
        maintenanceIssues: [...state.maintenanceIssues, payload],
      }

    case UPDATE_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: [
          ...state.conditionRatings.filter(({ id }) => id !== payload.id),
          payload,
        ],
      }

    case UPDATE_COMPLIANCE_ISSUE:
      return {
        ...state,
        complianceIssues: [
          ...state.complianceIssues.filter(({ id }) => id !== payload.id),
          payload,
        ],
      }

    case UPDATE_MAINTENANCE_ISSUE:
      return {
        ...state,
        maintenanceIssues: [
          ...state.maintenanceIssues.filter(({ id }) => id !== payload.id),
          payload,
        ],
      }

    default:
      return state
  }
}

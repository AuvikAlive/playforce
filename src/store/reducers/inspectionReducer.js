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

    default:
      return state
  }
}

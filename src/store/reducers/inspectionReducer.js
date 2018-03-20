import {
  DISCARD_INSPECTION,
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
  EDIT_CONDITION_RATING,
  DELETE_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
  EDIT_COMPLIANCE_ISSUE,
  DELETE_COMPLIANCE_ISSUE,
  ADD_MAINTENANCE_ISSUE,
  EDIT_MAINTENANCE_ISSUE,
  DELETE_MAINTENANCE_ISSUE,
} from '../actions/actionTypes'

export const initialState = {
  cover: {},
  auditSummary: {},
  conditionRatings: [],
  complianceIssues: [],
  maintenanceIssues: [],
}

export const inspectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISCARD_INSPECTION:
      return initialState

    case ADD_INSPECTION_COVER:
      return { ...state, cover: payload }

    case ADD_INSPECTION_SUMMARY:
      return { ...state, auditSummary: payload }

    case ADD_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: [...state.conditionRatings, payload],
      }

    case EDIT_CONDITION_RATING: {
      const { issueIndex, updatedValue } = payload
      const { conditionRatings } = state

      const updatedConditionRatings = conditionRatings.map(
        (conditionRating, index) => {
          if (index === Number(issueIndex)) {
            conditionRating = updatedValue
          }

          return conditionRating
        },
      )
      return {
        ...state,
        conditionRatings: [...updatedConditionRatings],
      }
    }

    case DELETE_CONDITION_RATING: {
      const { conditionRatings } = state

      const updatedConditionRatings = conditionRatings.filter(
        (conditionRating, index) => index !== Number(payload),
      )

      return {
        ...state,
        conditionRatings: [...updatedConditionRatings],
      }
    }

    case ADD_COMPLIANCE_ISSUE:
      return {
        ...state,
        complianceIssues: [...state.complianceIssues, payload],
      }

    case EDIT_COMPLIANCE_ISSUE: {
      const { issueIndex, updatedValue } = payload
      const { complianceIssues } = state

      const updatedComplianceIssues = complianceIssues.map(
        (complianceIssue, index) => {
          if (index === Number(issueIndex)) {
            complianceIssue = updatedValue
          }

          return complianceIssue
        },
      )
      return {
        ...state,
        complianceIssues: [...updatedComplianceIssues],
      }
    }

    case DELETE_COMPLIANCE_ISSUE: {
      const { complianceIssues } = state

      const updatedComplianceIssues = complianceIssues.filter(
        (complianceIssue, index) => index !== Number(payload),
      )

      return {
        ...state,
        complianceIssues: [...updatedComplianceIssues],
      }
    }

    case ADD_MAINTENANCE_ISSUE:
      return {
        ...state,
        maintenanceIssues: [...state.maintenanceIssues, payload],
      }

    case EDIT_MAINTENANCE_ISSUE: {
      const { issueIndex, updatedValue } = payload
      const { maintenanceIssues } = state

      const updatedMaintenanceIssues = maintenanceIssues.map(
        (maintenanceIssue, index) => {
          if (index === Number(issueIndex)) {
            maintenanceIssue = updatedValue
          }

          return maintenanceIssue
        },
      )
      return {
        ...state,
        maintenanceIssues: [...updatedMaintenanceIssues],
      }
    }

    case DELETE_MAINTENANCE_ISSUE: {
      const { maintenanceIssues } = state

      const updatedMaintenanceIssues = maintenanceIssues.filter(
        (maintenanceIssue, index) => index !== Number(payload),
      )

      return {
        ...state,
        maintenanceIssues: [...updatedMaintenanceIssues],
      }
    }

    default:
      return state
  }
}

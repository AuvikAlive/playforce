import {
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
  ADD_MAINTENANCE_ISSUE,
} from '../actionTypes'

export const addInspectionCover = payload => ({
  type: ADD_INSPECTION_COVER,
  payload,
})

export const addInspectionSummary = payload => ({
  type: ADD_INSPECTION_SUMMARY,
  payload,
})

export const addConditionRating = payload => ({
  type: ADD_CONDITION_RATING,
  payload,
})

export const addComplianceIssue = payload => ({
  type: ADD_COMPLIANCE_ISSUE,
  payload,
})

export const addMaintenanceIssue = payload => ({
  type: ADD_MAINTENANCE_ISSUE,
  payload,
})

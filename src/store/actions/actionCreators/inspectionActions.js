import {
  EDIT_INSPECTION,
  LOAD_INSPECTION,
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
} from '../actionTypes'

export const toggleEditInspection = payload => ({
  type: EDIT_INSPECTION,
  payload,
})

export const loadInspection = payload => ({
  type: LOAD_INSPECTION,
  payload,
})

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})

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

export const editConditionRating = payload => ({
  type: EDIT_CONDITION_RATING,
  payload,
})

export const deleteConditionRating = payload => ({
  type: DELETE_CONDITION_RATING,
  payload,
})

export const addComplianceIssue = payload => ({
  type: ADD_COMPLIANCE_ISSUE,
  payload,
})

export const editComplianceIssue = payload => ({
  type: EDIT_COMPLIANCE_ISSUE,
  payload,
})

export const deleteComplianceIssue = payload => ({
  type: DELETE_COMPLIANCE_ISSUE,
  payload,
})

export const addMaintenanceIssue = payload => ({
  type: ADD_MAINTENANCE_ISSUE,
  payload,
})

export const editMaintenanceIssue = payload => ({
  type: EDIT_MAINTENANCE_ISSUE,
  payload,
})

export const deleteMaintenanceIssue = payload => ({
  type: DELETE_MAINTENANCE_ISSUE,
  payload,
})

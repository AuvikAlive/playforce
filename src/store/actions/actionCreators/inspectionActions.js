import {
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
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

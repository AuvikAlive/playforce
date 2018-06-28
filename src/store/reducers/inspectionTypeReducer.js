import {
  FETCH_INSPECTION_TYPES,
  FETCH_INSPECTION_TYPES_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  inspectionTypesLoaded: false,
  inspectionTypes: [],
}

export const inspectionTypeReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_INSPECTION_TYPES:
      return { ...state, inspectionTypesLoaded: false }

    case FETCH_INSPECTION_TYPES_COMPLETED:
      return { ...state, inspectionTypesLoaded: true, inspectionTypes: payload }

    default:
      return state
  }
}

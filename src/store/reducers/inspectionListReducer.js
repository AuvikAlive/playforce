import {
  FETCH_INSPECTIONS,
  FETCH_INSPECTIONS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  inspectionsLoaded: false,
  inspections: [],
}

export const inspectionListReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case FETCH_INSPECTIONS:
      return { ...state, inspectionsLoaded: false }

    case FETCH_INSPECTIONS_COMPLETED:
      return { ...state, inspectionsLoaded: true, inspections: payload }

    default:
      return state
  }
}

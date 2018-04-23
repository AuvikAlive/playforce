import {
  TOGGLE_INSPECTIONLIST_VIEW,
  FETCH_INSPECTIONS,
  FETCH_INSPECTIONS_COMPLETED,
  FETCH_INSPECTIONS_BY_SITE,
  FETCH_INSPECTIONS_BY_SITE_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  view: 'list',
  inspectionsLoaded: false,
  inspections: [],
  inspectionsBySiteLoaded: false,
  inspectionsBySite: [],
}

export const inspectionListReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case TOGGLE_INSPECTIONLIST_VIEW: {
      const { view } = state

      return { ...state, view: view === 'list' ? 'grid' : 'list' }
    }

    case FETCH_INSPECTIONS:
      return { ...state, inspectionsLoaded: false }

    case FETCH_INSPECTIONS_COMPLETED:
      return { ...state, inspectionsLoaded: true, inspections: payload }

    case FETCH_INSPECTIONS_BY_SITE:
      return { ...state, inspectionsBySiteLoaded: false }

    case FETCH_INSPECTIONS_BY_SITE_COMPLETED:
      return {
        ...state,
        inspectionsBySiteLoaded: true,
        inspectionsBySite: payload,
      }

    default:
      return state
  }
}

import {
  FETCH_SITES,
  FETCH_SITES_COMPLETED,
  FETCH_EQUIPMENTS,
  FETCH_EQUIPMENTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  sitesLoaded: false,
  sites: [],
  equipmentsLoaded: false,
  equipments: [],
}

export const siteListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SITES:
      return { ...state, sitesLoaded: false }

    case FETCH_SITES_COMPLETED:
      return { ...state, sitesLoaded: true, sites: payload }

    case FETCH_EQUIPMENTS:
      return { ...state, equipmentsLoaded: false }

    case FETCH_EQUIPMENTS_COMPLETED:
      return { ...state, equipmentsLoaded: true, equipments: payload }

    default:
      return state
  }
}

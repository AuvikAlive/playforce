import { FETCH_SITES, FETCH_SITES_COMPLETED } from '../actions/actionTypes'

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

    default:
      return state
  }
}

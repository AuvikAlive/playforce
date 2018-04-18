import {
  FETCH_SITE,
  FETCH_SITE_COMPLETED,
  FETCH_SITES,
  FETCH_SITES_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  siteLoaded: false,
  site: undefined,
  sitesLoaded: false,
  sites: [],
}

export const siteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SITE:
      return { ...state, siteLoaded: false }

    case FETCH_SITE_COMPLETED:
      return { ...state, siteLoaded: true, site: payload }

    case FETCH_SITES:
      return { ...state, sitesLoaded: false }

    case FETCH_SITES_COMPLETED:
      return { ...state, sitesLoaded: true, sites: payload }

    default:
      return state
  }
}

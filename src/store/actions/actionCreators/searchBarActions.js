import {
  OPEN_SEARCH_BAR,
  CLOSE_SEARCH_BAR,
  TOGGLE_SEARCH_BAR,
  SET_SEARCH_QUERY,
} from '../actionTypes'

export const openSearchBar = () => ({
  type: OPEN_SEARCH_BAR,
})

export const closeSearchBar = () => ({
  type: CLOSE_SEARCH_BAR,
})

export const toggleSearchBar = () => ({
  type: TOGGLE_SEARCH_BAR,
})

export const setSearchQuery = payload => ({
  type: SET_SEARCH_QUERY,
  payload,
})

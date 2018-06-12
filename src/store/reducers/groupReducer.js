import { FETCH_GROUPS, FETCH_GROUPS_COMPLETED } from '../actions/actionTypes'

export const initialState = {
  groupsLoaded: false,
  groups: [],
}

export const groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GROUPS:
      return { ...state, groupsLoaded: false }

    case FETCH_GROUPS_COMPLETED:
      return { ...state, groupsLoaded: true, groups: payload }

    default:
      return state
  }
}

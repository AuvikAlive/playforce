import {
  FETCH_GROUPS,
  FETCH_GROUPS_COMPLETED,
  FETCH_GROUP_USERS,
  FETCH_GROUP_USERS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  groupsLoaded: false,
  groups: [],
  groupUsersLoaded: false,
  groupUsers: [],
}

export const groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GROUPS:
      return { ...state, groupsLoaded: false }

    case FETCH_GROUPS_COMPLETED:
      return { ...state, groupsLoaded: true, groups: payload }

    case FETCH_GROUP_USERS:
      return { ...state, groupUsersLoaded: false }

    case FETCH_GROUP_USERS_COMPLETED:
      return { ...state, groupUsersLoaded: true, groupUsers: payload }

    default:
      return state
  }
}

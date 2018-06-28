import {
  FETCH_GROUPS,
  FETCH_GROUPS_COMPLETED,
  FETCH_MEMBERS,
  FETCH_MEMBERS_COMPLETED,
  FETCH_USERS,
  FETCH_USERS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  groupsLoaded: false,
  groups: [],
  membersLoaded: false,
  members: [],
  usersLoaded: false,
  users: [],
}

export const groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GROUPS:
      return { ...state, groupsLoaded: false }

    case FETCH_GROUPS_COMPLETED:
      return { ...state, groupsLoaded: true, groups: payload }

    case FETCH_MEMBERS:
      return { ...state, membersLoaded: false }

    case FETCH_MEMBERS_COMPLETED:
      return { ...state, membersLoaded: true, members: payload }

    case FETCH_USERS:
      return { ...state, usersLoaded: false }

    case FETCH_USERS_COMPLETED:
      return { ...state, usersLoaded: true, users: payload }

    default:
      return state
  }
}

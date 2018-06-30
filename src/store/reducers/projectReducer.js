import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_COMPLETED,
  FETCH_PROJECT_MEMBERS,
  FETCH_PROJECT_MEMBERS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  projectsLoaded: false,
  projects: [],
  projectMembersLoaded: false,
  projectMembers: [],
}

export const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECTS:
      return { ...state, projectsLoaded: false }

    case FETCH_PROJECTS_COMPLETED:
      return { ...state, projectsLoaded: true, projects: payload }

    case FETCH_PROJECT_MEMBERS:
      return { ...state, projectMembersLoaded: false }

    case FETCH_PROJECT_MEMBERS_COMPLETED:
      return { ...state, projectMembersLoaded: true, projectMembers: payload }

    default:
      return state
  }
}

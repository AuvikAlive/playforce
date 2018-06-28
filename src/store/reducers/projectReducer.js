import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  projectsLoaded: false,
  projects: [],
}

export const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECTS:
      return { ...state, projectsLoaded: false }

    case FETCH_PROJECTS_COMPLETED:
      return { ...state, projectsLoaded: true, projects: payload }

    default:
      return state
  }
}

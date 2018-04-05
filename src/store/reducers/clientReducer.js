import { FETCH_CLIENTS, FETCH_CLIENTS_COMPLETED } from '../actions/actionTypes'

export const initialState = {
  clientsLoaded: false,
  clients: [],
}

export const clientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CLIENTS:
      return { ...state, clientsLoaded: false }

    case FETCH_CLIENTS_COMPLETED:
      return { ...state, clientsLoaded: true, clients: payload }

    default:
      return state
  }
}

import {
  FETCH_CLIENT,
  FETCH_CLIENT_COMPLETED,
  FETCH_CLIENTS,
  FETCH_CLIENTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  clientLoaded: false,
  client: undefined,
  clientsLoaded: false,
  clients: [],
}

export const clientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CLIENT:
      return { ...state, clientLoaded: false }

    case FETCH_CLIENT_COMPLETED:
      return { ...state, clientLoaded: true, client: payload }

    case FETCH_CLIENTS:
      return { ...state, clientsLoaded: false }

    case FETCH_CLIENTS_COMPLETED:
      return { ...state, clientsLoaded: true, clients: payload }

    default:
      return state
  }
}

import {
  FETCH_EQUIPMENT,
  FETCH_EQUIPMENT_COMPLETED,
  FETCH_EQUIPMENTS,
  FETCH_EQUIPMENTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  equipmentLoaded: false,
  equipment: undefined,
  equipmentsLoaded: false,
  equipments: [],
}

export const equipmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EQUIPMENT:
      return { ...state, equipmentLoaded: false }

    case FETCH_EQUIPMENT_COMPLETED:
      return { ...state, equipmentLoaded: true, equipment: payload }

    case FETCH_EQUIPMENTS:
      return { ...state, equipmentsLoaded: false }

    case FETCH_EQUIPMENTS_COMPLETED:
      return { ...state, equipmentsLoaded: true, equipments: payload }

    default:
      return state
  }
}

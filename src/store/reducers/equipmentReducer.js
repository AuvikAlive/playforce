import {
  ADD_EQUIPMENT,
  UPDATE_EQUIPMENT,
  DELETE_EQUIPMENT,
  FETCH_EQUIPMENT,
  FETCH_EQUIPMENT_COMPLETED,
  FETCH_EQUIPMENTS,
  FETCH_EQUIPMENTS_COMPLETED,
} from '../actions/actionTypes'

export const initialState = {
  equipmentLoaded: false,
  equipment: undefined,
  equipmentsSite: undefined,
  equipmentsLoaded: false,
  equipments: [],
}

export const equipmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EQUIPMENT:
      return {
        ...state,
        equipments: [...state.equipments, payload],
      }

    case UPDATE_EQUIPMENT:
      return {
        ...state,
        equipments: [
          ...state.equipments.filter(
            ({ equipment }) => equipment !== payload.id
          ),
          payload,
        ],
      }

    case DELETE_EQUIPMENT:
      return {
        ...state,
        equipments: [
          ...state.equipments.filter(({ equipment }) => equipment !== payload),
        ],
      }

    case FETCH_EQUIPMENT:
      return { ...state, equipmentLoaded: false }

    case FETCH_EQUIPMENT_COMPLETED:
      return { ...state, equipmentLoaded: true, equipment: payload }

    case FETCH_EQUIPMENTS:
      return { ...state, equipmentsLoaded: false }

    case FETCH_EQUIPMENTS_COMPLETED: {
      const { items, siteId } = payload
      return {
        ...state,
        equipmentsSite: siteId,
        equipmentsLoaded: true,
        equipments: items,
      }
    }

    default:
      return state
  }
}

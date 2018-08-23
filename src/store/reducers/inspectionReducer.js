import {
  FETCH_INSPECTION,
  FETCH_INSPECTION_COMPLETED,
  FETCH_CONDITION_RATINGS,
  FETCH_CONDITION_RATINGS_COMPLETED,
  FETCH_COMPLIANCE_ISSUES,
  FETCH_COMPLIANCE_ISSUES_COMPLETED,
  FETCH_MAINTENANCE_ISSUES,
  FETCH_MAINTENANCE_ISSUES_COMPLETED,
  DISCARD_INSPECTION,
  ADD_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
  ADD_MAINTENANCE_ISSUE,
  UPDATE_CONDITION_RATING,
  DELETE_CONDITION_RATING,
  UPDATE_COMPLIANCE_ISSUE,
  DELETE_COMPLIANCE_ISSUE,
  UPDATE_MAINTENANCE_ISSUE,
  DELETE_MAINTENANCE_ISSUE,
  FETCH_IMPACT_TESTS,
  FETCH_IMPACT_TESTS_COMPLETED,
  ADD_SURFACE_TEST,
  UPDATE_IMPACT_SURFACE,
  DELETE_SURFACE_TEST,
  ADD_DROP_TEST,
  UPDATE_DROP_TEST,
  DELETE_DROP_TEST,
  FETCH_PLAYING_SURFACES,
  FETCH_PLAYING_SURFACES_COMPLETED,
  ADD_PLAYGROUND,
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
  ADD_PLAYGROUND_CONDITION_RATING,
  UPDATE_PLAYGROUND_CONDITION_RATING,
  DELETE_PLAYGROUND_CONDITION_RATING,
  ADD_PLAYGROUND_COMPLIANCE_ISSUE,
  UPDATE_PLAYGROUND_COMPLIANCE_ISSUE,
  DELETE_PLAYGROUND_COMPLIANCE_ISSUE,
  ADD_PLAYGROUND_MAINTENANCE_ISSUE,
  UPDATE_PLAYGROUND_MAINTENANCE_ISSUE,
  DELETE_PLAYGROUND_MAINTENANCE_ISSUE,
  TOGGLE_INSPECTION_CERTIFICATE,
} from '../actions/actionTypes'

export const initialState = {
  inspectionLoaded: false,
  equipments: [],
  cover: {},
  coverAdded: false,
  auditSummary: {},
  auditSummaryAdded: false,
  conditionRatingsLoaded: false,
  conditionRatings: [],
  conditionRatingsAdded: false,
  complianceIssuesLoaded: false,
  complianceIssues: [],
  complianceIssuesAdded: false,
  maintenanceIssuesLoaded: false,
  maintenanceIssues: [],
  maintenanceIssuesAdded: false,
  impactTestsLoaded: false,
  impactTests: [],
  impactTestsAdded: false,
  playingSurfacesLoaded: false,
  playingSurfaces: [],
  playingSurfacesAdded: false,
  playgroundsLoaded: false,
  playgrounds: [],
  playgroundsAdded: false,
  playgroundsCompleted: false,
  certificate: false,
}

export const inspectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INSPECTION:
      return { ...state, inspectionLoaded: false }

    case FETCH_INSPECTION_COMPLETED:
      return { ...state, inspectionLoaded: true, ...payload }

    case FETCH_CONDITION_RATINGS:
      return { ...state, conditionRatingsLoaded: false }

    case FETCH_CONDITION_RATINGS_COMPLETED:
      return {
        ...state,
        conditionRatingsLoaded: true,
        conditionRatings: payload,
        conditionRatingsAdded: payload.length > 0,
      }

    case FETCH_COMPLIANCE_ISSUES:
      return { ...state, complianceIssuesLoaded: false }

    case FETCH_COMPLIANCE_ISSUES_COMPLETED:
      return {
        ...state,
        complianceIssuesLoaded: true,
        complianceIssues: payload,
        complianceIssuesAdded: payload.length > 0,
      }

    case FETCH_MAINTENANCE_ISSUES:
      return { ...state, maintenanceIssuesLoaded: false }

    case FETCH_MAINTENANCE_ISSUES_COMPLETED:
      return {
        ...state,
        maintenanceIssuesLoaded: true,
        maintenanceIssues: payload,
        maintenanceIssuesAdded: payload.length > 0,
      }

    case DISCARD_INSPECTION:
      return { ...initialState }

    case ADD_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: [...state.conditionRatings, payload],
        conditionRatingsAdded: true,
      }

    case ADD_COMPLIANCE_ISSUE:
      return {
        ...state,
        complianceIssues: [...state.complianceIssues, payload],
        complianceIssuesAdded: true,
      }

    case ADD_MAINTENANCE_ISSUE:
      return {
        ...state,
        maintenanceIssues: [...state.maintenanceIssues, payload],
        maintenanceIssuesAdded: true,
      }

    case UPDATE_CONDITION_RATING:
      return {
        ...state,
        conditionRatings: state.conditionRatings.map(
          item => (item.id === payload.id ? payload : item)
        ),
      }

    case DELETE_CONDITION_RATING: {
      const filteredConditionRatings = state.conditionRatings.filter(
        ({ id }) => id !== payload
      )

      return {
        ...state,
        conditionRatings: filteredConditionRatings,
        conditionRatingsAdded: filteredConditionRatings.length > 0,
      }
    }

    case UPDATE_COMPLIANCE_ISSUE:
      return {
        ...state,
        complianceIssues: [
          ...state.complianceIssues.map(
            item => (item.id === payload.id ? payload : item)
          ),
        ],
      }

    case DELETE_COMPLIANCE_ISSUE: {
      const filteredComplianceIssues = state.complianceIssues.filter(
        ({ id }) => id !== payload
      )

      return {
        ...state,
        complianceIssues: filteredComplianceIssues,
        complianceIssuesAdded: filteredComplianceIssues.length > 0,
      }
    }

    case UPDATE_MAINTENANCE_ISSUE:
      return {
        ...state,
        maintenanceIssues: [
          ...state.maintenanceIssues.map(
            item => (item.id === payload.id ? payload : item)
          ),
        ],
      }

    case DELETE_MAINTENANCE_ISSUE: {
      const filteredMaintenanceIssues = state.maintenanceIssues.filter(
        ({ id }) => id !== payload
      )

      return {
        ...state,
        maintenanceIssues: filteredMaintenanceIssues,
        maintenanceIssuesAdded: filteredMaintenanceIssues.length > 0,
      }
    }

    case ADD_SURFACE_TEST: {
      payload.dropTests = []

      return {
        ...state,
        impactTests: [...state.impactTests, payload],
      }
    }

    case UPDATE_IMPACT_SURFACE: {
      const updatedImpactTests = state.impactTests.map(item => {
        if (item.id === payload.id) {
          item.surface = payload.surface
        }

        return item
      })

      return {
        ...state,
        impactTests: updatedImpactTests,
      }
    }

    case DELETE_SURFACE_TEST: {
      const filteredImpactTests = state.impactTests.filter(
        ({ id }) => id !== payload
      )

      return {
        ...state,
        impactTests: filteredImpactTests,
      }
    }

    case FETCH_IMPACT_TESTS:
      return { ...state, impactTestsLoaded: false }

    case FETCH_IMPACT_TESTS_COMPLETED:
      return { ...state, impactTestsLoaded: true, impactTests: payload }

    case ADD_DROP_TEST: {
      const { impactTestId } = payload

      delete payload.impactTestId

      const impactTests = state.impactTests.map(item => {
        if (item.id === impactTestId) {
          item.dropTests.push(payload)
        }

        return item
      })

      return {
        ...state,
        impactTests,
      }
    }

    case UPDATE_DROP_TEST: {
      const { impactTestId, id } = payload

      delete payload.impactTestId

      const impactTests = state.impactTests.map(item => {
        if (item.id === impactTestId) {
          item.dropTests = item.dropTests.map(item => {
            if (item.id === id) {
              return payload
            }

            return item
          })
        }

        return item
      })

      return {
        ...state,
        impactTests,
      }
    }

    case DELETE_DROP_TEST: {
      const { impactTestId, id } = payload

      delete payload.impactTestId

      const impactTests = state.impactTests.map(item => {
        if (item.id === impactTestId) {
          item.dropTests = item.dropTests.filter(item => item.id !== id)
        }

        return item
      })

      return {
        ...state,
        impactTests,
      }
    }

    case FETCH_PLAYING_SURFACES:
      return { ...state, playingSurfacesLoaded: false }

    case FETCH_PLAYING_SURFACES_COMPLETED:
      return {
        ...state,
        playingSurfacesLoaded: true,
        playingSurfaces: payload,
        playingSurfacesAdded: payload.length > 0,
      }

    case ADD_PLAYGROUND:
      return {
        ...state,
        playgrounds: [...state.playgrounds, payload],
        playgroundsAdded: true,
      }

    case FETCH_PLAYGROUNDS:
      return { ...state, playgroundsLoaded: false }

    case FETCH_PLAYGROUNDS_COMPLETED:
      return {
        ...state,
        playgroundsLoaded: true,
        playgrounds: payload,
        playgroundsAdded: payload.length > 0,
        playgroundsCompleted:
          payload.length > 0
            ? payload.every(
                ({ conditionRatings }) => conditionRatings.length > 0
              )
            : false,
      }

    case ADD_PLAYGROUND_CONDITION_RATING: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.conditionRatings.push(payload)
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_CONDITION_RATING: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.conditionRatings = item.conditionRatings.map(item => {
            if (item.id === id) {
              return payload
            }

            return item
          })
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_CONDITION_RATING: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.conditionRatings = item.conditionRatings.filter(
            item => item.id !== id
          )
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case ADD_PLAYGROUND_COMPLIANCE_ISSUE: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.complianceIssues.push(payload)
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_COMPLIANCE_ISSUE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.complianceIssues = item.complianceIssues.map(item => {
            if (item.id === id) {
              return payload
            }

            return item
          })
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_COMPLIANCE_ISSUE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.complianceIssues = item.complianceIssues.filter(
            item => item.id !== id
          )
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case ADD_PLAYGROUND_MAINTENANCE_ISSUE: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.maintenanceIssues.push(payload)
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_MAINTENANCE_ISSUE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.maintenanceIssues = item.maintenanceIssues.map(item => {
            if (item.id === id) {
              return payload
            }

            return item
          })
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_MAINTENANCE_ISSUE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.maintenanceIssues = item.maintenanceIssues.filter(
            item => item.id !== id
          )
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case TOGGLE_INSPECTION_CERTIFICATE: {
      const { certificate } = state

      return { ...state, certificate: !certificate }
    }

    default:
      return state
  }
}

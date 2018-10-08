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
  DELETE_IMPACT_TEST,
  ADD_SURFACE_TEST,
  UPDATE_SURFACE_TEST,
  DELETE_SURFACE_TEST,
  SAVE_IMPACT_COMMENT,
  ADD_DROP_TEST,
  UPDATE_DROP_TEST,
  DELETE_DROP_TEST,
  FETCH_PLAYING_SURFACES,
  FETCH_PLAYING_SURFACES_COMPLETED,
  ADD_PLAYGROUND,
  FETCH_PLAYGROUNDS,
  FETCH_PLAYGROUNDS_COMPLETED,
  DELETE_PLAYGROUND,
  ADD_PLAYGROUND_CONDITION_RATING,
  UPDATE_PLAYGROUND_CONDITION_RATING,
  DELETE_PLAYGROUND_CONDITION_RATING,
  ADD_PLAYGROUND_COMPLIANCE_ISSUE,
  UPDATE_PLAYGROUND_COMPLIANCE_ISSUE,
  DELETE_PLAYGROUND_COMPLIANCE_ISSUE,
  ADD_PLAYGROUND_MAINTENANCE_ISSUE,
  UPDATE_PLAYGROUND_MAINTENANCE_ISSUE,
  DELETE_PLAYGROUND_MAINTENANCE_ISSUE,
  ADD_PLAYGROUND_PLAYING_SURFACE,
  UPDATE_PLAYGROUND_PLAYING_SURFACE,
  DELETE_PLAYGROUND_PLAYING_SURFACE,
  SAVE_PLAYGROUND_IMPACT_GENERAL_INFO,
  DELETE_PLAYGROUND_IMPACT_TEST,
  ADD_PLAYGROUND_SURFACE_TEST,
  UPDATE_PLAYGROUND_SURFACE_TEST,
  DELETE_PLAYGROUND_SURFACE_TEST,
  SAVE_PLAYGROUND_IMPACT_COMMENT,
  ADD_PLAYGROUND_DROP_TEST,
  UPDATE_PLAYGROUND_DROP_TEST,
  DELETE_PLAYGROUND_DROP_TEST,
  TOGGLE_INSPECTION_CERTIFICATE,
  TOGGLE_INSPECTION_COMPLETE,
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
  impactGeneralInfo: undefined,
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
  complete: false,
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

    case FETCH_IMPACT_TESTS:
      return { ...state, impactTestsLoaded: false }

    case FETCH_IMPACT_TESTS_COMPLETED:
      return { ...state, impactTestsLoaded: true, impactTests: payload }

    case DELETE_IMPACT_TEST:
      return { ...state, impactTests: [], impactGeneralInfo: undefined }

    case ADD_SURFACE_TEST: {
      payload.dropTests = []

      return {
        ...state,
        impactTests: [...state.impactTests, payload],
      }
    }

    case UPDATE_SURFACE_TEST: {
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

    case SAVE_IMPACT_COMMENT: {
      const updatedImpactTests = state.impactTests.map(impactTest => {
        if (impactTest.id === payload.id) {
          impactTest.comment = payload.comment
        }

        return impactTest
      })

      return {
        ...state,
        impactTests: updatedImpactTests,
      }
    }

    case ADD_DROP_TEST: {
      const { impactTestId } = payload

      delete payload.impactTestId

      const impactTests = state.impactTests.map(item => {
        if (item.id === impactTestId) {
          payload.dropNumber = item.dropTests.length + 1
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
          item.dropTests = item.dropTests.map((item, index) => {
            if (item.id === id) {
              payload.dropNumber = index + 1
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
          item.dropTests = item.dropTests
            .filter(item => item.id !== id)
            .map((item, index) => {
              item.dropNumber = index + 1

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

    case FETCH_PLAYING_SURFACES:
      return { ...state, playingSurfacesLoaded: false }

    case FETCH_PLAYING_SURFACES_COMPLETED:
      return {
        ...state,
        playingSurfacesLoaded: true,
        playingSurfaces: payload,
        playingSurfacesAdded: payload.length > 0,
      }

    case ADD_PLAYGROUND: {
      payload.conditionRatings = []
      payload.complianceIssues = []
      payload.maintenanceIssues = []
      payload.playingSurfaces = []
      payload.impactTests = []

      return {
        ...state,
        playgrounds: [...state.playgrounds, payload],
        playgroundsAdded: true,
      }
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

    case DELETE_PLAYGROUND: {
      const playgrounds = state.playgrounds.filter(item => item.id !== payload)

      return {
        ...state,
        playgrounds,
        playgroundsAdded: playgrounds.length > 0,
        playgroundsCompleted:
          playgrounds.length > 0
            ? playgrounds.every(
                ({ conditionRatings }) => conditionRatings.length > 0
              )
            : false,
      }
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
        playgroundsCompleted:
          playgrounds.length > 0
            ? playgrounds.every(
                ({ conditionRatings }) => conditionRatings.length > 0
              )
            : false,
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
        playgroundsCompleted:
          playgrounds.length > 0
            ? playgrounds.every(
                ({ conditionRatings }) => conditionRatings.length > 0
              )
            : false,
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

    case ADD_PLAYGROUND_PLAYING_SURFACE: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.playingSurfaces.push(payload)
        }

        return item
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_PLAYING_SURFACE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.playingSurfaces = item.playingSurfaces.map(item => {
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

    case DELETE_PLAYGROUND_PLAYING_SURFACE: {
      const { playgroundId, id } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(item => {
        if (item.id === playgroundId) {
          item.playingSurfaces = item.playingSurfaces.filter(
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

    case SAVE_PLAYGROUND_IMPACT_GENERAL_INFO: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactGeneralInfo = payload
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_IMPACT_TEST: {
      const { playgroundId } = payload

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactGeneralInfo = undefined
          playground.impactTests = []
        }

        return playground
      })

      return { ...state, playgrounds }
    }

    case ADD_PLAYGROUND_SURFACE_TEST: {
      const { playgroundId } = payload

      delete payload.playgroundId

      payload.dropTests = []

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests.push(payload)
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_SURFACE_TEST: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.map(impactTest => {
            if (impactTest.id === payload.id) {
              impactTest.surface = payload.surface
            }

            return impactTest
          })
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case SAVE_PLAYGROUND_IMPACT_COMMENT: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.map(impactTest => {
            if (impactTest.id === payload.id) {
              impactTest.comment = payload.comment
            }

            return impactTest
          })
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_SURFACE_TEST: {
      const { playgroundId } = payload

      delete payload.playgroundId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.filter(
            ({ id }) => id !== payload.id
          )
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case ADD_PLAYGROUND_DROP_TEST: {
      const { playgroundId, impactTestId } = payload

      delete payload.playgroundId
      delete payload.impactTestId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.map(impactTest => {
            if (impactTest.id === impactTestId) {
              payload.dropNumber = impactTest.dropTests.length + 1
              impactTest.dropTests.push(payload)
            }

            return impactTest
          })
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case UPDATE_PLAYGROUND_DROP_TEST: {
      const { playgroundId, impactTestId, id } = payload

      delete payload.playgroundId
      delete payload.impactTestId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.map(impactTest => {
            if (impactTest.id === impactTestId) {
              impactTest.dropTests = impactTest.dropTests.map(
                (dropTest, index) => {
                  if (dropTest.id === id) {
                    payload.dropNumber = index + 1
                    return payload
                  }

                  return dropTest
                }
              )
            }

            return impactTest
          })
        }

        return playground
      })

      return {
        ...state,
        playgrounds,
      }
    }

    case DELETE_PLAYGROUND_DROP_TEST: {
      const { playgroundId, impactTestId, id } = payload

      delete payload.playgroundId
      delete payload.impactTestId

      const playgrounds = state.playgrounds.map(playground => {
        if (playground.id === playgroundId) {
          playground.impactTests = playground.impactTests.map(impactTest => {
            if (impactTest.id === impactTestId) {
              impactTest.dropTests = impactTest.dropTests
                .filter(dropTest => dropTest.id !== id)
                .map((dropTest, index) => {
                  dropTest.dropNumber = index + 1

                  return dropTest
                })
            }

            return impactTest
          })
        }

        return playground
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

    case TOGGLE_INSPECTION_COMPLETE: {
      const { complete } = state

      return { ...state, complete: !complete }
    }

    default:
      return state
  }
}

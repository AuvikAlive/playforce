import { getPosition } from './getPosition'
import { getQueryPredictions } from './getQueryPredictions'

export const getPlaceSuggestions = (component, type) => async value => {
  if (value) {
    try {
      const position = await getPosition(component)
      const results = await getQueryPredictions(position, value, type && [type])
      return results.map(({ description }) => description)
    } catch (error) {
      return error === 'ZERO_RESULTS'
        ? []
        : component.props.setFeedback({ error, loading: false })
    }
  }

  return []
}

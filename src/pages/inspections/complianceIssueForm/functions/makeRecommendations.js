const defaultRecommendation =
  'No action required. Consider the findings of this report when determining priority for asset repair/replacement.'

export const makeRecommendations = component => {
  const { preimplementationRecommendation } = component.props

  return preimplementationRecommendation || defaultRecommendation
}

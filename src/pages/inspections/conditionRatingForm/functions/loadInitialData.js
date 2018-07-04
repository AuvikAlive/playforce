import { format } from 'date-fns'

export const loadInitialData = (component, conditionRating) => {
  const { setCapturedImage } = component.props
  const { image, estimatedDateInstalled } = conditionRating

  setCapturedImage(image)

  component.setState({
    ...conditionRating,
    id: conditionRating.equipmentId,
    estimatedDateInstalled: format(estimatedDateInstalled, 'YYYY'),
  })
}

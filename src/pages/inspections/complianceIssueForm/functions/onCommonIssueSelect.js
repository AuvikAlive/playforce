import { makeRecommendations } from './makeRecommendations'

export const onCommonIssueSelect = component => value => {
  const { equipment } = component.state
  const { equipments } = component.props
  const { estimatedDateInstalled } = equipments.find(
    item => item.equipment === equipment
  ) || { estimatedDateInstalled: undefined }
  const { implementationDate, preImplementationText, comments } = value

  if (
    estimatedDateInstalled &&
    implementationDate &&
    Number(estimatedDateInstalled) < Number(implementationDate)
  ) {
    component.setState({
      ...value,
      comments: comments + '\n' + preImplementationText,
      recommendations: makeRecommendations(component),
    })
  } else {
    component.setState({ ...value })
  }
}

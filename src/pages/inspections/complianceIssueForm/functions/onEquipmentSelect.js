import { makeRecommendations } from './makeRecommendations'

export const onEquipmentSelect = component => value => {
  const { equipments, initialData } = component.props
  const equipment = equipments.find(({ equipment }) => equipment === value)

  if (equipment) {
    const { estimatedDateInstalled } = equipment
    const { id } = component.state
    const { commonIssues } = component.props
    const commonIssue = commonIssues.find(item => item.id === id)

    if (
      estimatedDateInstalled &&
      commonIssue &&
      commonIssue.implementationDate &&
      Number(estimatedDateInstalled) < Number(commonIssue.implementationDate)
    ) {
      component.setState({
        ...equipment,
        comments:
          commonIssue.comments + '\n' + commonIssue.preImplementationText,
        recommendations: makeRecommendations(component),
      })
    } else {
      component.setState({
        ...initialData,
        ...equipment,
      })
    }
  } else {
    component.setState({ equipment: value })
  }
}

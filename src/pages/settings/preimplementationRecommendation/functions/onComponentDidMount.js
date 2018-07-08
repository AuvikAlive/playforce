import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { preimplementationRecommendation } = component.props
  const title = 'Preimplementation Recommendation'

  onComponentDidMountWithTitleLeftNav(component, title)

  preimplementationRecommendation &&
    component.setState({ preimplementationRecommendation })
}

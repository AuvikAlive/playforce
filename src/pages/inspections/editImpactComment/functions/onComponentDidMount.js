import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { comment } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Comment')

  comment && component.setState({ comment })
}

import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { notes } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Notes')

  notes && component.setState({ notes })
}

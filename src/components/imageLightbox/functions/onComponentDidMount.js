export const onComponentDidMount = component => {
  const { isOpen } = component.props

  isOpen && component.setState({ isOpen })
}

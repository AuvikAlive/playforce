export const onComponentWillReceiveProps = (component, nextProps) => {
  const { isOpen } = nextProps

  isOpen && isOpen !== component.props.isOpen && component.setState({ isOpen })
}

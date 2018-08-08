export const onComponentWillReceiveProps = (component, nextProps) => {
  const { notes } = nextProps

  notes && notes !== component.props.notes && component.setState({ notes })
}

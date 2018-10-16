export const onComponentDidMount = component => {
  const { inspectionType } = component.props

  component.setState({ inspectionType })
}

export const onComponentDidMount = component => {
  const { initialData } = component.props

  initialData && component.setState({ text: initialData })
}

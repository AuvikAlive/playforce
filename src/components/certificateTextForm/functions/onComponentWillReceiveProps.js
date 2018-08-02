export const onComponentWillReceiveProps = (component, { initialData }) => {
  initialData &&
    initialData !== component.props.initialData &&
    component.setState({ text: initialData })
}

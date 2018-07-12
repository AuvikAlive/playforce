export const loadInitialData = (component, data) => {
  component.setState({
    ...data,
  })
}

export const loadInitialData = (component, initialData) => {
  component.setState({
    ...initialData,
    location: initialData.location.name,
  })
}

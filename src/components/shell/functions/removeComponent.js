export const removeComponent = (component, name) => () =>
  component.setState({ [name]: null })

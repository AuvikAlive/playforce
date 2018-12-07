export const setComponent = (component, name) => componentToSet =>
  component.setState({ [name]: componentToSet })

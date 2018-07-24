export const onValueInputChange = (component, name) => value =>
  component.setState({
    [name]: value,
  })

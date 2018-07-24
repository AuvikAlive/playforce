export const onEventInputChange = (component, name) => event =>
  component.setState({
    [name]: event.target.value,
  })

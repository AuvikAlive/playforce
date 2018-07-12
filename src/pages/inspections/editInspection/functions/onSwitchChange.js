export const onSwitchChange = component => event => {
  component.setState({ certificate: event.target.checked })
}

export const openMenu = component => event => {
  component.setState({ menuAnchor: event.currentTarget })
}

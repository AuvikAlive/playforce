export const openDialog = component => DialogContent => {
  component.setState({ dialogOpen: true, DialogContent })
}

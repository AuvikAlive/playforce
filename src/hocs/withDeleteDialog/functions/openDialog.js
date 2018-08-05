export const openDialog = component => (handleConfirmation, message) => {
  component.setState({ dialogOpen: true, handleConfirmation, message })
}

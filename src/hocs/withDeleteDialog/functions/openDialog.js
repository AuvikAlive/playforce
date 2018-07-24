export const openDialog = component => handleConfirmation => {
  component.setState({ dialogOpen: true, handleConfirmation })
}

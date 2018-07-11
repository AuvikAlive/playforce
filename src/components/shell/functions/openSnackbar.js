export const openSnackbar = component => (
  snackbarAutoHideDuration,
  snackbarMessage
) =>
  component.setState({
    snackbarOpen: true,
    snackbarAutoHideDuration,
    snackbarMessage,
  })

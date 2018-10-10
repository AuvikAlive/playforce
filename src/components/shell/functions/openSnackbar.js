export const openSnackbar = component => (
  snackbarAutoHideDuration,
  snackbarMessage,
  snackbarAction
) =>
  component.setState({
    snackbarOpen: true,
    snackbarAutoHideDuration,
    snackbarMessage,
    snackbarAction,
  })

import { snackbarAutoHideDuration } from './constants/'

export const setFeedback = component => ({
  error = '',
  success = '',
  loading = false,
}) => {
  component.setState({
    error,
    success,
    loading,
  })

  if (success) {
    component.context.openSnackbar(snackbarAutoHideDuration, success)

    return new Promise(resolve => {
      setTimeout(() => resolve(), snackbarAutoHideDuration)
    })
  }
}

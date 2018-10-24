export const openDialog = component => (...args) => {
  if (args.length === 1 && typeof args[0] !== 'function') {
    const { handleConfirmation, message, contentComponent } = args[0]

    component.setState({
      dialogOpen: true,
      handleConfirmation,
      message,
      contentComponent,
    })
  } else {
    const [handleConfirmationAsync, message, contentComponent] = args

    component.setState({
      dialogOpen: true,
      handleConfirmationAsync,
      message,
      contentComponent,
    })
  }
}

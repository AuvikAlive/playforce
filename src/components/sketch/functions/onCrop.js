export const onCrop = component => () => {
  const { openDialog } = component.props

  return openDialog(() => null)
}

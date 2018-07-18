export const submit = component => () => {
  const { cropper } = component
  const { onSubmit, closeDialog } = component.props
  const { mimeType } = component.state

  const image = cropper.getCroppedCanvas().toDataURL(mimeType)

  onSubmit(image)
  closeDialog()
}

export const submit = component => () => {
  const { onSubmit } = component.props
  const { images } = component.state

  onSubmit(images)
}

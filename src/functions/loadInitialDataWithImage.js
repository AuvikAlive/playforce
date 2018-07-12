export const loadInitialDataWithImage = (component, initialData) => {
  const { image } = initialData
  const { setCapturedImage } = component.props

  setCapturedImage(image)

  component.setState({ ...initialData })
}

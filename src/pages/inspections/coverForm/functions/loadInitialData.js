export const loadInitialData = (component, initialData) => {
  const { image } = initialData
  const { setCapturedImage } = component.props

  setCapturedImage(image)

  component.setState({
    ...initialData,
    location: initialData.location.name,
  })
}

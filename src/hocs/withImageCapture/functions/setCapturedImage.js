export const setCapturedImage = component => image => {
  Array.isArray(image)
    ? component.setState({ images: image })
    : component.setState({ image })
}

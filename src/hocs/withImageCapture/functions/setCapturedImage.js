export const setCapturedImage = component => image => {
  Array.isArray(image)
    ? this.setState({ images: image })
    : this.setState({ image })
}

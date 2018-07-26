export const goNext = (component, photoIndex, images) => () => {
  component.setState({
    photoIndex: (photoIndex + 1) % images.length,
  })
}

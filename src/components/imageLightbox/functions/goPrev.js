export const goPrev = (component, photoIndex, images) => () => {
  component.setState({
    photoIndex: (photoIndex + images.length - 1) % images.length,
  })
}

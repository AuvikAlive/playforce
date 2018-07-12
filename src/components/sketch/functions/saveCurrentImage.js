export const saveCurrentImage = (component, currentSlide, image) => {
  const { images } = component.state

  images[currentSlide].image = image
  component.setState({ images })
}

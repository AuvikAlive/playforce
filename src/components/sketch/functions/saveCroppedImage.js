export const saveCroppedImage = (component, currentSlide) => image => {
  const { images } = component.state

  images[currentSlide].image = image
  component.setState({ images })
}

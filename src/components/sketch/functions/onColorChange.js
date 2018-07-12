export const onColorChange = component => color => {
  const { currentSlide } = component.state

  component.carouselParent[`sketchParent${currentSlide}`].setLineColor(
    color.hex
  )
  component.setState({ color })
}

export const onToolSelect = component => event => {
  const tool = event.target.value
  const { currentSlide } = component.state

  component.setState({ tool })
  component.carouselParent[`sketchParent${currentSlide}`].setTool(tool)
}

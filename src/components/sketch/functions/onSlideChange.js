export const onSlideChange = component => (current, next) => {
  if (next !== current) {
    const { currentSlide, tool, color } = component.state

    component.carouselParent[`sketchParent${currentSlide}`].clear()
    component.carouselParent[`sketchParent${next}`].setTool(tool)
    component.carouselParent[`sketchParent${next}`].setLineColor(color.hex)
    component.setState({ currentSlide: next })
  }
}
